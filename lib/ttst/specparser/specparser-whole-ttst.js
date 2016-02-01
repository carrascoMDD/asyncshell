'use strict';

/*
     specparser-whole-ttst.js
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

    var aMod_definer =function( theM_specparserbasettst,
                                theM_identifier,
                                theM_specparser_config,
                                theM_specparserparmsttst,
                                theM_specparserimportttst,
                                theM_specparserrequiredttst,
                                theM_specparserexportttst) {


        var ModuleName     = "specparser-whole-ttst";
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








        var aSpecParserWholeTtst_Prototype = (function() {


            var aPrototype = new theM_specparserbasettst.SpecParserBaseTtst_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_specparserbasettst.SpecParserBaseTtst_Prototype;


            aPrototype._v_Type = "SpecParserWholeTtst";





            var _pInit = function( theTitle, theConfigSpec, theExpectSucceed,
                                   theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths) {

                this._pInit_SpecParserWholeTtst( theTitle, theConfigSpec, theExpectSucceed,
                    theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_SpecParserWholeTtst = function( theTitle, theConfigSpec, theExpectSucceed,
                                                       theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParserBaseTtst.apply( this,
                    [ theTitle, theConfigSpec, theExpectSucceed,theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this.fRecord( "_pInit_SpecParserWholeTtst", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_SpecParserWholeTtst){}/* CQT */
            aPrototype._pInit_SpecParserWholeTtst = _pInit_SpecParserWholeTtst;











            var fOwnTtstMethodToRun = function() {
                return this.pSS_SpecParserWholeTtst.bind( this);
            };
            if( fOwnTtstMethodToRun){}/* CQT */
            aPrototype.fOwnTtstMethodToRun = fOwnTtstMethodToRun;







            var pF_TtstMethodName = function() {
                return "pSS_SpecParserWholeTtst";
            };
            if( pF_TtstMethodName){}/* CQT */
            aPrototype.pF_TtstMethodName = pF_TtstMethodName;





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


                        var aParseResult = aSpecParser.fParseComplete();


                        if( !aParseResult || !aSpecParser._v_ParseSuccess) {

                            if( aThis._v_ExpectedFailedConfigPaths && aThis._v_ExpectedFailedConfigPaths.length && aThis.fFailedConfigPathsMatchExpected( aSpecParser)) {

                                var aRecord = aThis.fRecord( aMethodName, aThis.EVTKIND_EXPECTEDFAILEDCONFIGHAPPENED, null, null, null);
                                theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ParsedConfiguration, aRecord, null));
                            }
                            else {
                                theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "specparser-whole-ttst pS_parse !aParseResult", null));
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








            var pS_resolveImports= function( theCallback) {
                theM_specparserimportttst.SpecParserImportTtst_Prototype.pS_resolveImports.bind( this)( theCallback);
            };
            if( pS_resolveImports){}/* CQT */
            aPrototype.pS_resolveImports = pS_resolveImports;





            var pS_resolveRequireds= function( theCallback) {
                theM_specparserrequiredttst.SpecParserRequiredTtst_Prototype.pS_resolveRequireds.bind( this)( theCallback);
            };
            if( pS_resolveRequireds){}/* CQT */
            aPrototype.pS_resolveRequireds = pS_resolveRequireds;








            var pS_resolveExports= function( theCallback) {
                theM_specparserexportttst.SpecParserExportTtst_Prototype.pS_resolveExports.bind( this)( theCallback);
            };
            if( pS_resolveExports){}/* CQT */
            aPrototype.pS_resolveExports = pS_resolveExports;







            var pSS_SpecParserWholeTtst = function( theCallback) {
                var aMethodName = "pF_SpecParserWholeTtst";
                this.fRecord( aMethodName, this.EVTKIND_INFO, null, null, null);

                this.pNowStarted();

                this.pF_LightAsyncSeries(
                    theCallback,
                    aMethodName,
                    [
                        this.pS_readConfig.bind( this),
                        this.pS_parse.bind( this),
                        this.pS_sanitizedspec.bind( this),
                        this.pS_storeJSON.bind( this),
                        this.pS_resolveImports.bind( this),
                        this.pS_resolveRequireds.bind( this),
                        this.pS_resolveExports.bind( this)
                    ]
                );
            };
            if( pSS_SpecParserWholeTtst){}/* CQT */
            aPrototype.pSS_SpecParserWholeTtst = pSS_SpecParserWholeTtst;









            return aPrototype;

        })();







        var SpecParserWholeTtst_Constructor = function( theTitle, theConfigSpec, theExpectSucceed,
                                                        theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserbasettst.SpecParserBaseTtst_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_SpecParserWholeTtst( theTitle, theConfigSpec, theExpectSucceed,
                theAbandonAtFirstSyntaxError, theExpectedFailedConfigPaths);
        };
        SpecParserWholeTtst_Constructor.prototype = aSpecParserWholeTtst_Prototype;





        var SpecParserWholeTtst_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserbasettst.SpecParserBaseTtst_Prototype;

            this._v_Prototype = aSpecParserWholeTtst_Prototype;
            this._v_Type = null;
        };
        SpecParserWholeTtst_SuperPrototypeConstructor.prototype = aSpecParserWholeTtst_Prototype;



        var aModule = {
            "SpecParserWholeTtst_Prototype": aSpecParserWholeTtst_Prototype,
            "SpecParserWholeTtst_Constructor": SpecParserWholeTtst_Constructor,
            "SpecParserWholeTtst_SuperPrototypeConstructor": SpecParserWholeTtst_SuperPrototypeConstructor
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

            var aM_specparserbasettst     = require('./specparser-base-ttst');
            var aM_identifier             = require('../../common-test/identifier-test');
            var aM_specparser_config      = require('../../common-test/configs/specparser/specparser-config');
            var aM_specparserparmsttst    = require('./specparser-parms-ttst');
            var aM_specparserimportttst   = require('./specparser-import-ttst');
            var aM_specparserrequiredttst = require('./specparser-required-ttst');
            var aM_specparserexportttst   = require('./specparser-export-ttst');

            return aMod_definer(
                aM_specparserbasettst,
                aM_identifier,
                aM_specparser_config,
                aM_specparserparmsttst,
                aM_specparserimportttst,
                aM_specparserrequiredttst,
                aM_specparserexportttst
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./specparser-base-ttst",
            "../../common-test/identifier-test",
            "../../common-test/configs/specparser/specparser-config",
            "./specparser-parms-ttst",
            "./specparser-import-ttst",
            "./specparser-required-ttst",
            "./specparser-export-ttst"], function (
            theM_specparserbasettst,
            theM_identifier,
            theM_specparser_config,
            theM_specparserparmsttst,
            theM_specparserimportttst,
            theM_specparserrequiredttst,
            theM_specparserexportttst) {
            return aMod_definer(
                theM_specparserbasettst,
                theM_identifier,
                theM_specparser_config,
                theM_specparserparmsttst,
                theM_specparserimportttst,
                theM_specparserrequiredttst,
                theM_specparserexportttst);
        });
    }


}());

















