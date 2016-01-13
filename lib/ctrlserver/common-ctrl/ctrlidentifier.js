'use strict';

/*
 ctrlidentifier.js
 Creado 201408081950
 */

/*
 ***************************************************************************

 Copyright 2014 2015 Antonio Carrasco Valero
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

    var aMod_definer = function( theM_ctrlcommon,
                                 theM_exceptiondetails,
                                 theM_overrider) {


        var ModuleName     = "ctrlidentifier";
        var ModulePackages = "ctrlserver/common-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.MAXIDS = 1000000000;
        };





        var pgInitFromModuleVariations = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleVariations) {
                if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                }
            }
        };


        var ModuleVariations = { };
        pgInitWithModuleVariations( ModuleVariations);
        theM_overrider.pgOverrideModuleVariations( ModuleFullName, ModuleVariations);






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }

        };




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



        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
        pgInitWithModuleConstants( ModuleConstants);









        var anCtrlIdentifier_Prototype = (function() {


            var aPrototype = new theM_ctrlcommon.CtrlCommon_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlcommon.CtrlCommon_Prototype;

            aPrototype._v_Module = null;

            aPrototype._v_Type = "CtrlIdentifier";

            aPrototype._v_Id = null;
            aPrototype._v_IdCounter = null;





            var _pInit = function( theTitle, theId) {

                this._pInit_CtrlIdentifier( theTitle, theId);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_CtrlIdentifier = function( theTitle, theId) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlCommon.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_Id = theId;

                this._v_IdCounter = 0;
            };
            if( _pInit_CtrlIdentifier){}/* CQT */
            aPrototype._pInit_CtrlIdentifier = _pInit_CtrlIdentifier;












            var fReserveId = function( ) {
                var aMethodName = "fReserveId";

                if( !this._v_IdCounter) {
                    this._v_IdCounter = 0;
                }

                this._v_IdCounter += 1;

                if( this._v_IdCounter > this.MAXIDS) {
                    throw new Error( "REACHED MAX IDS at " + this._v_Module.ModuleFullName + "." + aMethodName  + " _v_IdCounter=" + this._v_IdCounter + "  this.MAXIDS=" + this.MAXIDS);
                }

                if( !this._v_Id) {
                    return this._v_IdCounter;
                }

                return this._v_Id + "," + this._v_IdCounter;
            };
            if( fReserveId){}/* CQT */
            aPrototype.fReserveId = fReserveId;








            return aPrototype;

        })();




        var CtrlIdentifier_Constructor = function( theTitle, theId) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlcommon.CtrlCommon_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_Id = null;
            this._v_IdCounter = null;

            this._pInit_CtrlIdentifier( theTitle, theId);
        };
        CtrlIdentifier_Constructor.prototype = anCtrlIdentifier_Prototype;





        var CtrlIdentifier_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlcommon.CtrlCommon_Prototype;

            this._v_Prototype = anCtrlIdentifier_Prototype;
            this._v_Type = null;
            this._v_Module = null;

            this._v_Id = null;
            this._v_IdCounter = null;
        };
        CtrlIdentifier_SuperPrototypeConstructor.prototype = anCtrlIdentifier_Prototype;








        var aModule = {
            "CtrlIdentifier_Prototype": anCtrlIdentifier_Prototype,
            "CtrlIdentifier_Constructor": CtrlIdentifier_Constructor,
            "CtrlIdentifier_SuperPrototypeConstructor": CtrlIdentifier_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        anCtrlIdentifier_Prototype._v_Module = aModule;





        return aModule;

    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ctrlcommon       = require('./ctrlcommon');
            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');


            return aMod_definer( aM_ctrlcommon, aM_exceptiondetails, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./ctrlcommon",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider"
        ], function (
                theM_ctrlcommon,
                theM_exceptiondetails,
                theM_overrider
            ) {
            return aMod_definer(
                theM_ctrlcommon,
                theM_exceptiondetails,
                theM_overrider
            );
        });
    }


}());


