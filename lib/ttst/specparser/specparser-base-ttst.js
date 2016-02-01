'use strict';

/*
 specparser-base-ttst.js
 Created 201408140155
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 */


(function () {

    var aMod_definer =function( theM_ttst_test, theM_identifier, theM_specparser_config, theM_specloader) {


        var ModuleName     = "specparser-base-ttst";
        var ModulePackages = "ttst/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }
        };



        var ModuleConstants = {};
        pgInitWithModuleConstants( ModuleConstants);




        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };








        var aSpecParserBaseTtst_Prototype = (function() {


            var aPrototype = new theM_ttst_test.TtstTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_ttst_test.TtstTest_Prototype;


            aPrototype._v_Type = "SpecParserBaseTtst";


            aPrototype._v_ConfigSpec = null;

            aPrototype._v_AbandonAtFirstSyntaxError = null;
            aPrototype._v_ExpectedFailedConfigPaths = null;



            var _pInit = function( theTitle, theConfigSpec, theExpectSucceed,
                                   theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths) {

                this._pInit_SpecParserBaseTtst( theTitle, theConfigSpec, theExpectSucceed,
                    theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_SpecParserBaseTtst = function( theTitle, theConfigSpec, theExpectSucceed,
                                                      theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstTest.apply( this, [ theTitle, theExpectSucceed]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ConfigSpec = theConfigSpec;


                this._v_AbandonAtFirstSyntaxError = theAbandonAtFirstSyntaxError;
                this._v_ExpectedFailedConfigPaths       = theExpectedFailedConfigPaths;

                this.fRecord( "_pInit_SpecParserBaseTtst", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_SpecParserBaseTtst){}/* CQT */
            aPrototype._pInit_SpecParserBaseTtst = _pInit_SpecParserBaseTtst;













            var pS_readConfig= function( theCallback) {
                var aMethodName = "pS_readConfig";

                var aThis = this;

                this.pS_Do(
                    theCallback,
                    aMethodName,
                    function( theOtherCallback) {

                        if( typeof  aThis._v_ConfigSpec == "object") {
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ConfigSpec, null, null));
                            return;
                        }

                        var aConfigSpec = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( aThis._v_ConfigSpec);

                        if( aConfigSpec == null) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, aThis._v_ConfigSpec, null, null));
                            return;
                        }

                        if( !( typeof aConfigSpec == "object")) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, aThis._v_ConfigSpec, null, null));
                            return;
                        }

                        aThis._v_ConfigSpec = aConfigSpec;

                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ConfigSpec, null, null));
                    }
                );
            };
            if( pS_readConfig){}/* CQT */
            aPrototype.pS_readConfig = pS_readConfig;

















            var pS_readExpectedFailedConfigPaths= function( theCallback) {
                var aMethodName = "pS_readExpectedFailedConfigPaths";

                var aThis = this;

                this.pS_Do(
                    theCallback,
                    aMethodName,
                    function( theOtherCallback) {

                        if( !aThis._v_ExpectedFailedConfigPaths) {
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, null, null, null));
                            return;
                        }

                        if( typeof  aThis._v_ExpectedFailedConfigPaths == "object") {
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ExpectedFailedConfigPaths, null, null));
                            return;
                        }

                        var aExpectedSpec = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( aThis._v_ExpectedFailedConfigPaths);

                        if( aExpectedSpec == null) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ExpectedSpec, null, null));
                            return;
                        }

                        if( !( typeof aExpectedSpec == "object")) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ExpectedSpec, null, null));
                            return;
                        }

                        aThis._v_ExpectedSpec = aExpectedSpec;

                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, aThis._v_ExpectedSpec, null, null));
                    }
                );
            };
            if( pS_readExpectedFailedConfigPaths){}/* CQT */
            aPrototype.pS_readExpectedFailedConfigPaths = pS_readExpectedFailedConfigPaths;













            var fFailedConfigPathsMatchExpected = function( theParser) {

                if( !theParser) {
                    return true;
                }

                if( !this._v_ExpectedFailedConfigPaths) {
                    return true;
                }

                var aNumExpectedFailedConfigPaths = this._v_ExpectedFailedConfigPaths.length;
                if( !aNumExpectedFailedConfigPaths) {
                    return true;
                }

                var someFailedConfigPaths = theParser.fAllFailedConfigPaths();
                if( !someFailedConfigPaths) {
                    return false;
                }

                var aNumFailedConfigPaths = someFailedConfigPaths.length;
                if( !( aNumFailedConfigPaths == aNumExpectedFailedConfigPaths)) {
                    return false;
                }

                for( var aFailedConfigPathIdx=0; aFailedConfigPathIdx < aNumFailedConfigPaths; aFailedConfigPathIdx++) {
                    var aFailedConfigPath = someFailedConfigPaths[ aFailedConfigPathIdx];
                    if( !this.fMatchesAnExpectedFailedConfigPath( aFailedConfigPath)) {
                        return false;
                    }
                }

                return true;
            };
            if( fFailedConfigPathsMatchExpected){}/* CQT */
            aPrototype.fFailedConfigPathsMatchExpected = fFailedConfigPathsMatchExpected;








            var fMatchesAnExpectedFailedConfigPath = function( theFailedConfigPathPath) {

                if( !theFailedConfigPathPath) {
                    return false;
                }

                if( !this._v_ExpectedFailedConfigPaths) {
                    return false;
                }

                var aNumExpectedFailedConfigPaths = this._v_ExpectedFailedConfigPaths.length;
                if( !aNumExpectedFailedConfigPaths) {
                    return false;
                }


                for( var anExpectedFailedConfigPathIdx=0; anExpectedFailedConfigPathIdx < aNumExpectedFailedConfigPaths; anExpectedFailedConfigPathIdx++) {
                    var anExpectedFailedConfigPathPath = this._v_ExpectedFailedConfigPaths[ anExpectedFailedConfigPathIdx];
                    if( this.fPathMatchesPath( theFailedConfigPathPath, anExpectedFailedConfigPathPath)) {
                        return true;
                    }
                }

                return false;
            };
            if( fMatchesAnExpectedFailedConfigPath){}/* CQT */
            aPrototype.fMatchesAnExpectedFailedConfigPath = fMatchesAnExpectedFailedConfigPath;






            var fPathMatchesPath = function( theOnePath, theOtherPath) {

                if( !theOnePath && !theOtherPath) {
                    return true;
                }

                if( !theOnePath || !theOtherPath) {
                    return false;
                }

                var aOneNumSteps   = theOnePath.length;
                var aOtherNumSteps = theOtherPath.length;
                if( !( aOneNumSteps == aOtherNumSteps)) {
                    return false;
                }

                for( var aStepIdx=0; aStepIdx < aOneNumSteps; aStepIdx++) {
                    var aOneStep   = theOnePath[ aStepIdx];
                    var aOtherStep = theOtherPath[ aStepIdx];
                    if( !( aOneStep == aOtherStep)) {
                        return false;
                    }
                }

                return true;
            };
            if( fPathMatchesPath){}/* CQT */
            aPrototype.fPathMatchesPath = fPathMatchesPath;








            var pS_parse= function( theCallback) {
                var aMethodName = "pS_parse";

                var aThis = this;
                
                this.pS_Do(
                    theCallback,
                    aMethodName,
                    function( theOtherCallback) {

                        var anIdentifier = new theM_identifier.IdentifierTest_Constructor( {});
                        var aSpecParser  = new theM_specparser_config.SpecParserConfig_Constructor(
                            anIdentifier, aThis._v_ConfigSpec, null, false, aThis._v_AbandonAtFirstSyntaxError
                        );


                        var aParseResult = aSpecParser.fParse();


                        if( !aParseResult || !aSpecParser._v_ParseSuccess) {

                            if( aThis._v_ExpectedFailedConfigPaths && aThis._v_ExpectedFailedConfigPaths.length && aThis.fFailedConfigPathsMatchExpected( aSpecParser)) {

                                var aRecord = aThis.fRecord( aMethodName, aThis.EVTKIND_EXPECTEDFAILEDCONFIGHAPPENED, null, null, null);
                                theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ParsedConfiguration, aRecord, null));
                            }
                            else {
                                theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "specparser-base-ttst pS_parse !aParseResult", null));
                            }
                            return;
                        }

                        if( aThis._v_ExpectedFailedConfigPaths && aThis._v_ExpectedFailedConfigPaths.length && !aThis.fFailedConfigPathsMatchExpected( aSpecParser)) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!aThis.fFailedConfigPathsMatchExpected( aSpecParser)", null));
                        }

                        var aPopulated = aSpecParser._v_ConfPopulated;
                        if( !aPopulated) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!aSpecParser._v_ConfPopulated", null));
                            return;
                        }

                        aThis._v_ParsedConfiguration = aPopulated;

                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ParsedConfiguration, null, null));
                    }
                );
            };
            if( pS_parse){}/* CQT */
            aPrototype.pS_parse = pS_parse;







            var pS_sanitizedspec= function( theCallback) {
                var aMethodName = "pS_sanitizedspec";

                var aThis = this;
                this.pS_Do(
                    theCallback,
                    aMethodName,
                    function( theOtherCallback) {

                        if( !aThis._v_ParsedConfiguration) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!aThis._v_ParsedConfiguration", null));
                        }


                        var aJSONspec_str           = JSON.stringify( aThis._v_ConfigSpec, null, 1);
                        var aJSONspec_sanitized     = JSON.parse( aJSONspec_str);
                        var aJSONspec_sanitized_str = JSON.stringify( aJSONspec_sanitized, null, 1);

                        var aJSONspecDiff = aThis.fJSONsFirstDiff( aThis._v_ConfigSpec, aJSONspec_sanitized);
                        if( aJSONspecDiff) {
                            console.log( "\n\naThis._v_ConfigSpec");
                            console.log( JSON.stringify( aThis._v_ConfigSpec, null, 1));
                            console.log( "\n\naJSONspec_sanitized");
                            console.log( aJSONspec_sanitized_str);

                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "aThis.fJSONsFirstDiff( aThis._v_ConfigSpec, aJSONspec_sanitized)", aJSONspecDiff));
                            return;
                        }



                        if( !( aJSONspec_str == aJSONspec_sanitized_str)) {
                            var aStringsDiff = aThis.fStringsFirstDiff( aJSONspec_str, aJSONspec_sanitized_str);
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!( aJSONspec_str == aJSONspec_sanitized_str)", aStringsDiff));
                            return;
                        }

                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, null, null, null));
                    }
                );
            };
            if( pS_sanitizedspec){}/* CQT */
            aPrototype.pS_sanitizedspec = pS_sanitizedspec;







            var pS_storeJSON= function( theCallback) {
                var aMethodName = "pS_storeJSON";

                var aThis = this;
                this.pS_Do(
                    theCallback,
                    aMethodName,
                    function( theOtherCallback) {

                        if( !aThis._v_ParsedConfiguration) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!aThis._v_ParsedConfiguration", null));
                        }


                        var aJSONspec_str           = JSON.stringify( aThis._v_ConfigSpec, null, 1);
                        var aJSONspec_sanitized     = JSON.parse( aJSONspec_str);
                        var aJSONspec_sanitized_str = JSON.stringify( aJSONspec_sanitized, null, 1);




                        var aToStoreJSON = aThis._v_ParsedConfiguration.fToStoreJSON();

                        var aToStoreJSON_str = JSON.stringify( aToStoreJSON, null, 1);


                        var aToStoreJSON_sanitized = JSON.parse( aToStoreJSON_str);

                        var aToStoreJSON_sanitized_str = JSON.stringify( aToStoreJSON_sanitized, null, 1);



                        var aToStoreJSONDiff = aThis.fJSONsFirstDiff( aToStoreJSON, aToStoreJSON_sanitized);
                        if( aToStoreJSONDiff) {
                            console.log( "\n\naToStoreJSON");
                            console.log( aToStoreJSON);
                            console.log( "\aToStoreJSON_str");
                            console.log( aToStoreJSON_str);

                            console.log( "\naToStoreJSON_sanitized");
                            console.log( aToStoreJSON_sanitized);
                            console.log( "\naToStoreJSON_sanitized_str");
                            console.log( aToStoreJSON_sanitized_str);

                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "aThis.fJSONsFirstDiff( aToStoreJSON, aToStoreJSON_sanitized)", aToStoreJSONDiff));
                            return;
                        }



                        if( !( aToStoreJSON_str == aToStoreJSON_sanitized_str)) {
                            console.log( "\n\n!!!! !( aToStoreJSON_str == aToStoreJSON_sanitized_str)N");
                            console.log( "\aToStoreJSON");
                            console.log( aToStoreJSON);
                            console.log( "\aToStoreJSON_str");
                            console.log( aToStoreJSON_str);

                            console.log( "\naToStoreJSON_sanitized");
                            console.log( aToStoreJSON_sanitized);
                            console.log( "\naToStoreJSON_sanitized_str");
                            console.log( aToStoreJSON_sanitized_str);

                            var otherStringsDiff = aThis.fStringsFirstDiff( aToStoreJSON_str, aToStoreJSON_sanitized_str);
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!( aToStoreJSON_str == aToStoreJSON_sanitized_str)", otherStringsDiff));
                            return;
                        }



                        var aJSONsDiff = aThis.fJSONsFirstDiff( aJSONspec_sanitized, aToStoreJSON_sanitized);
                        if( aJSONsDiff) {
                            console.log("\n\n!!!! aThis.fJSONsFirstDiff( aJSONspec_sanitized, aToStoreJSON_sanitized)");
                            console.log( "aJSONsDiff=" + aJSONsDiff);

                            console.log( "\naJSONspec_sanitized");
                            console.log( aJSONspec_sanitized);
                            console.log( "\naJSONspec_sanitized_str");
                            console.log( aJSONspec_sanitized_str);

                            console.log( "\naToStoreJSON_sanitized");
                            console.log( aToStoreJSON_sanitized);
                            console.log( "\naToStoreJSON_sanitized_str");
                            console.log( aToStoreJSON_sanitized_str);

                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "aThis.fJSONsFirstDiff( aThis._v_ConfigSpec, aJSONspec_sanitized)", aJSONsDiff));
                            return;
                        }


                        if( !( aToStoreJSON_sanitized_str == aJSONspec_sanitized_str)) {
                            var anotherStringsDiff = aThis.fStringsFirstDiff( aJSONspec_sanitized_str, aToStoreJSON_sanitized_str);
                            console.log("\n\n!!!! !( aToStoreJSON_sanitized_str == aJSONspec_sanitized_str)");
                            console.log( "anotherStringsDiff=" + anotherStringsDiff);
                            console.log( "\naJSONspec_sanitized");
                            console.log( aJSONspec_sanitized);
                            console.log( "\naToStoreJSON_sanitized");
                            console.log( aToStoreJSON_sanitized);

                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!( aToStoreJSON_sanitized_str == aJSONspec_sanitized_str)", anotherStringsDiff));
                            return;
                        }

                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, null, null, null));
                    }
                );
            };
            if( pS_storeJSON){}/* CQT */
            aPrototype.pS_storeJSON = pS_storeJSON;








            var fOwnTtstMethodToRun = function() {
                return this.pSS_SpecParserBaseTtst.bind( this);
            };
            if( fOwnTtstMethodToRun){}/* CQT */
            aPrototype.fOwnTtstMethodToRun = fOwnTtstMethodToRun;



            var pF_TtstMethodName = function() {
                return "pSS_SpecParserBaseTtst";
            };
            if( pF_TtstMethodName){}/* CQT */
            aPrototype.pF_TtstMethodName = pF_TtstMethodName;





            var pSS_SpecParserBaseTtst = function( theCallback) {
                var aMethodName = "pSS_SpecParserBaseTtst";
                this.fRecord( aMethodName, this.EVTKIND_INFO, null, null, null);

                this.pNowStarted();

                this.pF_LightAsyncSeries(
                    theCallback,
                    aMethodName,
                    [
                        this.pS_readConfig.bind( this),
                        this.pS_readExpectedFailedConfigPaths.bind( this),
                        this.pS_parse.bind( this),
                        this.pS_sanitizedspec.bind( this),
                        this.pS_storeJSON.bind( this)
                    ]
                );
            };
            if( pSS_SpecParserBaseTtst){}/* CQT */
            aPrototype.pSS_SpecParserBaseTtst = pSS_SpecParserBaseTtst;





            return aPrototype;

        })();







        var SpecParserBaseTtst_Constructor = function( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttst_test.TtstTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ConfigSpec = null;

            this._v_AbandonAtFirstSyntaxError = null;
            this._v_ExpectedFailedConfigPaths = null;

            this._pInit_SpecParserBaseTtst( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError);
        };
        SpecParserBaseTtst_Constructor.prototype = aSpecParserBaseTtst_Prototype;





        var SpecParserBaseTtst_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttst_test.TtstTest_Prototype;

            this._v_Prototype = aSpecParserBaseTtst_Prototype;
            this._v_Type = null;

            this._v_ConfigSpec = null;

            this._v_AbandonAtFirstSyntaxError = null;
            this._v_ExpectedFailedConfigPaths = null;
        };
        SpecParserBaseTtst_SuperPrototypeConstructor.prototype = aSpecParserBaseTtst_Prototype;



        var aModule = {
            "SpecParserBaseTtst_Prototype": aSpecParserBaseTtst_Prototype,
            "SpecParserBaseTtst_Constructor": SpecParserBaseTtst_Constructor,
            "SpecParserBaseTtst_SuperPrototypeConstructor": SpecParserBaseTtst_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ttst_test         = require('../ttst-test');
            var aM_identifier        = require('../../common-test/identifier-test');
            var aM_specparser_config = require('../../common-test/configs/specparser/specparser-config');
            var aM_specloader        = require('../../common-test/resloader/specloader');

            return aMod_definer( aM_ttst_test, aM_identifier, aM_specparser_config, aM_specloader);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../ttst-test",
            "../../common-test/identifier-test",
            "../../common-test/configs/specparser/specparser-config",
            "../../common-test/resloader/specloader"
        ], function (
            theM_ttst_test,
            theM_identifier,
            theM_specparser_config,
            theM_specloader) {
            return aMod_definer( theM_ttst_test, theM_identifier, theM_specparser_config, theM_specloader);
        });
    }


}());

















