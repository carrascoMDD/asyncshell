'use strict';

/*
 specparser-emptyornojson-ttst.js
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

    var aMod_definer =function( theM_ttst_test, theM_specloader) {


        var ModuleName     = "specparser-emptyornojson-ttst";
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








        var aSpecParserEmptyOrNoJsonTtst_Prototype = (function() {


            var aPrototype = new theM_ttst_test.TtstTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_ttst_test.TtstTest_Prototype;


            aPrototype._v_Type = "SpecParserEmptyOrNoJsonTtst";


            aPrototype._v_ConfigSpec = null;






            var _pInit = function( theTitle, theConfigSpec) {

                this._pInit_SpecParserEmptyOrNoJsonTtst( theTitle, theConfigSpec);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_SpecParserEmptyOrNoJsonTtst = function( theTitle, theConfigSpec) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstTest.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ConfigSpec = theConfigSpec;

                this.fRecord( "_pInit_SpecParserEmptyOrNoJsonTtst", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_SpecParserEmptyOrNoJsonTtst){}/* CQT */
            aPrototype._pInit_SpecParserEmptyOrNoJsonTtst = _pInit_SpecParserEmptyOrNoJsonTtst;












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
                            aThis.fRecord( aMethodName, aThis.EVTKIND_INFO, aThis._v_ConfigSpec, "Read null json", null);
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, aThis._v_ConfigSpec, null, null));
                            return;
                        }

                        if( !( typeof aConfigSpec == "object")) {
                            aThis.fRecord( aMethodName, aThis.EVTKIND_INFO, aThis._v_ConfigSpec, "Read json not an object", null);
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, aThis._v_ConfigSpec, null, null));
                            return;
                        }

                        aThis._v_ConfigSpec = aConfigSpec;

                        theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ConfigSpec, null, null));
                    }
                );
            };
            if( pS_readConfig){}/* CQT */
            aPrototype.pS_readConfig = pS_readConfig;














            var pS_NowSucceeded = function( theCallback) {

                this.pNowSucceeded_base();

                theCallback( null, this.fRecord( "pF_SpecParserEmptyOrNoJsonTtst", this.EVTKIND_OK, null, null, null));
            };
            if( pS_NowSucceeded){}/* CQT */
            aPrototype.pS_NowSucceeded = pS_NowSucceeded;







            var pF_SpecParserEmptyOrNoJsonTtst = function( theCallback) {
                var aMethodName = "pF_SpecParserEmptyOrNoJsonTtst";
                this.fRecord( aMethodName, this.EVTKIND_INFO, null, null, null);

                this.pNowStarted();

                this.pF_LightAsyncSeries(
                    theCallback,
                    aMethodName,
                    [
                        this.pS_readConfig.bind( this),
                        this.pS_NowSucceeded.bind( this)
                    ]
                );
            };
            if( pF_SpecParserEmptyOrNoJsonTtst){}/* CQT */
            aPrototype.pF_SpecParserEmptyOrNoJsonTtst = pF_SpecParserEmptyOrNoJsonTtst;




            var pSS_SpecParserEmptyOrNoJsonTtst = function( theCallback) {
                var aMethodName = "pF_SpecParserEmptyOrNoJsonTtst";
                this.fRecord( aMethodName, this.EVTKIND_INFO, null, null, null);

                this.pNowStarted();

                this.pF_LightAsyncSeries(
                    theCallback,
                    aMethodName,
                    [
                        this.pS_readConfig.bind( this),
                       this.pS_NowSucceeded.bind( this)
                    ]
                );
            };
            if( pSS_SpecParserEmptyOrNoJsonTtst){}/* CQT */
            aPrototype.pSS_SpecParserEmptyOrNoJsonTtst = pSS_SpecParserEmptyOrNoJsonTtst;







            var fOwnTtstMethodToRun = function() {
                return this.pSS_SpecParserEmptyOrNoJsonTtst.bind( this);
            };
            if( fOwnTtstMethodToRun){}/* CQT */
            aPrototype.fOwnTtstMethodToRun = fOwnTtstMethodToRun;




            var pF_TtstMethodName = function() {
                return "pSS_SpecParserEmptyOrNoJsonTtst";
            };
            if( pF_TtstMethodName){}/* CQT */
            aPrototype.pF_TtstMethodName = pF_TtstMethodName;




            return aPrototype;

        })();







        var SpecParserEmptyOrNoJsonTtst_Constructor = function( theTitle, theConfigSpec) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttst_test.TtstTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ConfigSpec = null;

            this._pInit_SpecParserEmptyOrNoJsonTtst( theTitle, theConfigSpec);
        };
        SpecParserEmptyOrNoJsonTtst_Constructor.prototype = aSpecParserEmptyOrNoJsonTtst_Prototype;





        var SpecParserEmptyOrNoJsonTtst_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttst_test.TtstTest_Prototype;

            this._v_Prototype = aSpecParserEmptyOrNoJsonTtst_Prototype;
            this._v_Type = null;

            this._v_ConfigSpec = null;
        };
        SpecParserEmptyOrNoJsonTtst_SuperPrototypeConstructor.prototype = aSpecParserEmptyOrNoJsonTtst_Prototype;



        var aModule = {
            "SpecParserEmptyOrNoJsonTtst_Prototype": aSpecParserEmptyOrNoJsonTtst_Prototype,
            "SpecParserEmptyOrNoJsonTtst_Constructor": SpecParserEmptyOrNoJsonTtst_Constructor,
            "SpecParserEmptyOrNoJsonTtst_SuperPrototypeConstructor": SpecParserEmptyOrNoJsonTtst_SuperPrototypeConstructor
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
            var aM_specloader        = require('../../common-test/resloader/specloader');

            return aMod_definer( aM_ttst_test, aM_specloader);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../ttst-test",
            "../../common-test/resloader/specloader"
        ], function (
            theM_ttst_test,
            theM_specloader) {
            return aMod_definer( theM_ttst_test, theM_specloader);
        });
    }


}());

















