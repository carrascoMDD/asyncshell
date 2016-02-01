'use strict';

/*
 specparser-parms-ttst.js
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


        var ModuleName     = "specparser-parms-ttst";
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








        var aSpecParserParmsTtst_Prototype = (function() {


            var aPrototype = new theM_specparserbasettst.SpecParserBaseTtst_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_specparserbasettst.SpecParserBaseTtst_Prototype;


            aPrototype._v_Type = "SpecParserParmsTtst";





            var _pInit = function( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError) {

                this._pInit_SpecParserParmsTtst( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_SpecParserParmsTtst = function( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParserBaseTtst.apply( this, [ theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this.fRecord( "_pInit_SpecParserParmsTtst", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_SpecParserParmsTtst){}/* CQT */
            aPrototype._pInit_SpecParserParmsTtst = _pInit_SpecParserParmsTtst;












            var fOwnTtstMethodToRun = function() {
                return this.pSS_SpecParserParmsTtst.bind( this);
            };
            if( fOwnTtstMethodToRun){}/* CQT */
            aPrototype.fOwnTtstMethodToRun = fOwnTtstMethodToRun;







            var pSS_SpecParserParmsTtst = function( theCallback) {
                var aMethodName = "pF_SpecParserParmsTtst";
                this.fRecord( aMethodName, this.EVTKIND_INFO, null, null, null);

                this.pNowStarted();

                this.pF_LightAsyncSeries(
                    theCallback,
                    aMethodName,
                    [
                        this.pS_readConfig.bind( this),
                        this.pS_parse.bind( this),
                        this.pS_sanitizedspec.bind( this),
                        this.pS_storeJSON.bind( this)
                    ]
                );
            };
            if( pSS_SpecParserParmsTtst){}/* CQT */
            aPrototype.pSS_SpecParserParmsTtst = pSS_SpecParserParmsTtst;






            var pF_TtstMethodName = function() {
                return "pSS_SpecParserParmsTtst";
            };
            if( pF_TtstMethodName){}/* CQT */
            aPrototype.pF_TtstMethodName = pF_TtstMethodName;






            return aPrototype;

        })();







        var SpecParserParmsTtst_Constructor = function( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserbasettst.SpecParserBaseTtst_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_SpecParserParmsTtst( theTitle, theConfigSpec, theExpectSucceed, theAbandonAtFirstSyntaxError);
        };
        SpecParserParmsTtst_Constructor.prototype = aSpecParserParmsTtst_Prototype;





        var SpecParserParmsTtst_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserbasettst.SpecParserBaseTtst_Prototype;

            this._v_Prototype = aSpecParserParmsTtst_Prototype;
            this._v_Type = null;
        };
        SpecParserParmsTtst_SuperPrototypeConstructor.prototype = aSpecParserParmsTtst_Prototype;



        var aModule = {
            "SpecParserParmsTtst_Prototype": aSpecParserParmsTtst_Prototype,
            "SpecParserParmsTtst_Constructor": SpecParserParmsTtst_Constructor,
            "SpecParserParmsTtst_SuperPrototypeConstructor": SpecParserParmsTtst_SuperPrototypeConstructor
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

            var aM_specparserbasettst    = require('./specparser-base-ttst');

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

















