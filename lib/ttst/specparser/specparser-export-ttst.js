'use strict';

/*
 specparser-export-ttst.js
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

    var aMod_definer =function( theM_specparserbasettst) {


        var ModuleName     = "specparser-export-ttst";
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








        var aSpecParserExportTtst_Prototype = (function() {


            var aPrototype = new theM_specparserbasettst.SpecParserBaseTtst_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_specparserbasettst.SpecParserBaseTtst_Prototype;


            aPrototype._v_Type = "SpecParserExportTtst";





            var _pInit = function( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError) {

                this._pInit_SpecParserExportTtst( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_SpecParserExportTtst = function( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParserBaseTtst.apply( this, [ theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this.fRecord( "_pInit_SpecParserExportTtst", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_SpecParserExportTtst){}/* CQT */
            aPrototype._pInit_SpecParserExportTtst = _pInit_SpecParserExportTtst;













            var pS_resolveExports= function( theCallback) {
                var aMethodName = "pS_resolveExports";

                var aThis = this;

                this.pS_Do(
                    theCallback,
                    aMethodName,
                    function( theOtherCallback) {

                        if( !aThis._v_ParsedConfiguration) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!aThis._v_ParsedConfiguration", null));
                            return;
                        }

                        aThis._v_ParsedConfiguration.pResolveExportsNow( "PARSE");

                        if( aThis._v_ParsedConfiguration.fHasAnyExportFailedToResolveNow( "PARSE")) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "aThis._v_ParsedConfiguration.fHasAnyExportFailedToResolveNow( 'PARSE')", null));
                            return;
                        }

                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, null, null, null));
                    }
                );
            };
            if( pS_resolveExports){}/* CQT */
            aPrototype.pS_resolveExports = pS_resolveExports;










            var fOwnTtstMethodToRun = function() {
                return this.pSS_SpecParserExportTtst.bind( this);
            };
            if( fOwnTtstMethodToRun){}/* CQT */
            aPrototype.fOwnTtstMethodToRun = fOwnTtstMethodToRun;






            var pF_TtstMethodName = function() {
                return "pSS_SpecParserExportTtst";
            };
            if( pF_TtstMethodName){}/* CQT */
            aPrototype.pF_TtstMethodName = pF_TtstMethodName;





            var pSS_SpecParserExportTtst = function( theCallback) {
                var aMethodName = "pF_SpecParserExportTtst";
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
                        this.pS_resolveExports.bind( this)
                    ]
                );
            };
            if( pSS_SpecParserExportTtst){}/* CQT */
            aPrototype.pSS_SpecParserExportTtst = pSS_SpecParserExportTtst;









            return aPrototype;

        })();







        var SpecParserExportTtst_Constructor = function( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserbasettst.SpecParserBaseTtst_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_SpecParserExportTtst( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError);
        };
        SpecParserExportTtst_Constructor.prototype = aSpecParserExportTtst_Prototype;





        var SpecParserExportTtst_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserbasettst.SpecParserBaseTtst_Prototype;

            this._v_Prototype = aSpecParserExportTtst_Prototype;
            this._v_Type = null;
        };
        SpecParserExportTtst_SuperPrototypeConstructor.prototype = aSpecParserExportTtst_Prototype;



        var aModule = {
            "SpecParserExportTtst_Prototype": aSpecParserExportTtst_Prototype,
            "SpecParserExportTtst_Constructor": SpecParserExportTtst_Constructor,
            "SpecParserExportTtst_SuperPrototypeConstructor": SpecParserExportTtst_SuperPrototypeConstructor
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

            var aM_specparserbasettst  = require('./specparser-base-ttst');

            return aMod_definer( aM_specparserbasettst);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./specparser-base-ttst"], function (
            theM_specparserbasettst) {
            return aMod_definer( theM_specparserbasettst);
        });
    }


}());

















