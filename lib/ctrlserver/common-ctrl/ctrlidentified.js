'use strict';

/*
 ctrlidentified.js
 Created 201408081950
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

    var aMod_definer = function( theM_ctrlcommon,
                                 theM_exceptiondetails,
                                 theM_overrider) {


        var ModuleName     = "ctrlidentified";
        var ModulePackages = "ctrlserver/common-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }
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









        var anCtrlIdentified_Prototype = (function() {


            var aPrototype = new theM_ctrlcommon.CtrlCommon_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlcommon.CtrlCommon_Prototype;

            aPrototype._v_Type = "CtrlIdentified";

            aPrototype._v_Module = null;


            aPrototype._v_Identifier = null;
            aPrototype._v_Id         = null;







            var _pInit = function( theTitle, theIdentifier) {

                this._pInit_CtrlIdentified( theTitle, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_CtrlIdentified = function( theTitle, theIdentifier) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlCommon.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_Identifier = theIdentifier;

                if( this._v_Identifier) {
                    this._v_Id = "" + this._v_Identifier.fReserveId();
                }
                else {
                    this._v_Id = "0";
                }
            };
            if( _pInit_CtrlIdentified){}/* CQT */
            aPrototype._pInit_CtrlIdentified = _pInit_CtrlIdentified;







            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "id":   this._v_Id,
                    "type": this._v_Type
                };
                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;





            return aPrototype;

        })();




        var CtrlIdentified_Constructor = function( theTitle, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlcommon.CtrlCommon_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_Identifier = null;
            this._v_Id = null;

            this._pInit_CtrlIdentified( theTitle, theIdentifier);
        };
        CtrlIdentified_Constructor.prototype = anCtrlIdentified_Prototype;





        var CtrlIdentified_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlcommon.CtrlCommon_Prototype;

            this._v_Prototype = anCtrlIdentified_Prototype;
            this._v_Type = null;
            this._v_Module = null;

            this._v_Identifier = null;
            this._v_Id = null;
        };
        CtrlIdentified_SuperPrototypeConstructor.prototype = anCtrlIdentified_Prototype;








        var aModule = {
            "CtrlIdentified_Prototype": anCtrlIdentified_Prototype,
            "CtrlIdentified_Constructor": CtrlIdentified_Constructor,
            "CtrlIdentified_SuperPrototypeConstructor": CtrlIdentified_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        anCtrlIdentified_Prototype._v_Module = aModule;


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


