'use strict';

/*
 specparser-someconfigsfailed-ttst.js
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


        var ModuleName     = "specparser-someconfigsfailed-ttst";
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








        var aSpecParserSomeConfigsFailedTtst_Prototype = (function() {


            var aPrototype = new theM_ttst_test.TtstTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_ttst_test.TtstTest_Prototype;


            aPrototype._v_Type = "SpecParserSomeConfigsFailedTtst";


            aPrototype._v_ConfigSpec = null;

            aPrototype._v_AbandonAtFirstSyntaxError = null;
            aPrototype._v_ExpectedFailedConfigPaths = null;



            var _pInit = function( theTitle, theConfigSpec, theExpectSucceed,
                                   theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths) {

                this._pInit_SpecParserSomeConfigsFailedTtst( theTitle, theConfigSpec, theExpectSucceed,
                    theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_SpecParserSomeConfigsFailedTtst = function( theTitle, theConfigSpec, theExpectSucceed,
                                                      theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstTest.apply( this, [ theTitle, theExpectSucceed]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ConfigSpec = theConfigSpec;


                this._v_AbandonAtFirstSyntaxError = theAbandonAtFirstSyntaxError;
                this._v_ExpectedFailedConfigPaths = theExpectedFailedConfigPaths;

                this.fRecord( "_pInit_SpecParserSomeConfigsFailedTtst", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_SpecParserSomeConfigsFailedTtst){}/* CQT */
            aPrototype._pInit_SpecParserSomeConfigsFailedTtst = _pInit_SpecParserSomeConfigsFailedTtst;













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
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ExpectedFailedConfigPaths, null, null));
                            return;
                        }

                        if( !( typeof aExpectedSpec == "object")) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ExpectedFailedConfigPaths, null, null));
                            return;
                        }

                        aThis._v_ExpectedFailedConfigPaths = aExpectedSpec;

                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, aThis._v_ExpectedFailedConfigPaths, null, null));
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
                                theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "specparser-someconfigsfailed-ttst pS_parse (!aParseResult || !aSpecParser._v_ParseSuccess) && !aThis.fFailedConfigPathsMatchExpected( aSpecParser)", null));
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














            var fOwnTtstMethodToRun = function() {
                return this.pSS_SpecParserSomeConfigsFailedTtst.bind( this);
            };
            if( fOwnTtstMethodToRun){}/* CQT */
            aPrototype.fOwnTtstMethodToRun = fOwnTtstMethodToRun;




            var pF_TtstMethodName = function() {
                return "pSS_SpecParserSomeConfigsFailedTtst";
            };
            if( pF_TtstMethodName){}/* CQT */
            aPrototype.pF_TtstMethodName = pF_TtstMethodName;





            var pSS_SpecParserSomeConfigsFailedTtst = function( theCallback) {
                var aMethodName = "pSS_SpecParserSomeConfigsFailedTtst";
                this.fRecord( aMethodName, this.EVTKIND_INFO, null, null, null);

                this.pNowStarted();

                this.pF_LightAsyncSeries(
                    theCallback,
                    aMethodName,
                    [
                        this.pS_readConfig.bind( this),
                        this.pS_readExpectedFailedConfigPaths.bind( this),
                        this.pS_parse.bind( this)
                    ]
                );
            };
            if( pSS_SpecParserSomeConfigsFailedTtst){}/* CQT */
            aPrototype.pSS_SpecParserSomeConfigsFailedTtst = pSS_SpecParserSomeConfigsFailedTtst;





            return aPrototype;

        })();







        var SpecParserSomeConfigsFailedTtst_Constructor = function( theTitle, theConfigSpec, theExpectSucceed,
                                                                    theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttst_test.TtstTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ConfigSpec = null;

            this._v_AbandonAtFirstSyntaxError = null;
            this._v_ExpectedFailedConfigPaths = null;

            this._pInit_SpecParserSomeConfigsFailedTtst( theTitle, theConfigSpec, theExpectSucceed,
                theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths);
        };
        SpecParserSomeConfigsFailedTtst_Constructor.prototype = aSpecParserSomeConfigsFailedTtst_Prototype;





        var SpecParserSomeConfigsFailedTtst_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttst_test.TtstTest_Prototype;

            this._v_Prototype = aSpecParserSomeConfigsFailedTtst_Prototype;
            this._v_Type = null;

            this._v_ConfigSpec = null;

            this._v_AbandonAtFirstSyntaxError = null;
            this._v_ExpectedFailedConfigPaths = null;
        };
        SpecParserSomeConfigsFailedTtst_SuperPrototypeConstructor.prototype = aSpecParserSomeConfigsFailedTtst_Prototype;



        var aModule = {
            "SpecParserSomeConfigsFailedTtst_Prototype": aSpecParserSomeConfigsFailedTtst_Prototype,
            "SpecParserSomeConfigsFailedTtst_Constructor": SpecParserSomeConfigsFailedTtst_Constructor,
            "SpecParserSomeConfigsFailedTtst_SuperPrototypeConstructor": SpecParserSomeConfigsFailedTtst_SuperPrototypeConstructor
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

















