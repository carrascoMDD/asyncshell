'use strict';

/*
 housekeeping-check-general.js
 Creado 201504121934
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
    var aMod_definer = function( theM_housekeepconstants,
                                 theM_housekeepinggeneral,
                                 theM_overrider) {

        var ModuleName     = "housekeeping-check-general";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








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



        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
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







        var aHousekeepingCheckGeneral_Prototype = (function() {


            var aPrototype = new theM_housekeepinggeneral.HousekeepingGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            aPrototype._v_Type = "HousekeepingCheckGeneral";


            aPrototype._v_HousekeepingMaster   = null;






            var _pInit = function( theTitle,
                                   theHousekeepIdentifier,
                                   theHousekeepRecorder,
                                   theHousekeepOptions,
                                   theHousekeeper,
                                   theHousekeepingMaster,
                                   theMoment) {

                this._pInit_HousekeepingCheckGeneral( theTitle,
                                                      theHousekeepIdentifier,
                                                      theHousekeepRecorder,
                                                      theHousekeepOptions,
                                                      theHousekeeper,
                                                      theHousekeepingMaster,
                                                      theMoment);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeepingCheckGeneral = function( theTitle,
                                                            theHousekeepIdentifier,
                                                            theHousekeepRecorder,
                                                            theHousekeepOptions,
                                                            theHousekeeper,
                                                            theHousekeepingMaster,
                                                            theMoment) {


                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_HousekeepingGeneral.apply( this, [ theTitle,
                                                                                 theHousekeepIdentifier,
                                                                                 theHousekeepRecorder,
                                                                                 theHousekeepOptions,
                                                                                 theHousekeeper,
                                                                                 theMoment]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_HousekeepingKind   = theM_housekeepconstants.HOUSEKEEPERKIND_GENERAL;

                this._v_HousekeepingMaster    = theHousekeepingMaster;

                if( this._v_HousekeepingMaster){}/* CQT */
            };
            if( _pInit_HousekeepingCheckGeneral){}/* CQT */
            aPrototype._pInit_HousekeepingCheckGeneral = _pInit_HousekeepingCheckGeneral;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeepingCheckGeneral( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_HousekeepingCheckGeneral = function( theReleaseParms, theReleaseDone) {

                this._v_HousekeeperSpecific  = undefined;
                this._v_HousekeepingMaster   = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeepingGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeepingCheckGeneral){}/* CQT */
            aPrototype._pRelease_HousekeepingCheckGeneral = _pRelease_HousekeepingCheckGeneral;












            var fIsCheckPerformed = function() {

                if( !this._v_HousekeepingPerformed) {
                    return false;
                }

                var anIsCheckPerformed = ( this._v_HousekeepingSuccess && true) || false;
                if( anIsCheckPerformed){}/* CQT */

                return anIsCheckPerformed;
            };
            if( fIsCheckPerformed){}/* CQT */
            aPrototype.fIsCheckPerformed = fIsCheckPerformed;






            return aPrototype;

        })();




        var HousekeepingCheckGeneral_Constructor = function( theTitle,
                                                       theHousekeepIdentifier,
                                                       theHousekeepRecorder,
                                                       theHousekeepOptions,
                                                       theHousekeeper,
                                                       theHousekeepingMaster,
                                                       theMoment) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_HousekeepingMaster   = null;


            this._pInit_HousekeepingCheckGeneral( theTitle,
                                            theHousekeepIdentifier,
                                            theHousekeepRecorder,
                                            theHousekeepOptions,
                                            theHousekeeper,
                                            theHousekeepingMaster,
                                            theMoment);

        };
        HousekeepingCheckGeneral_Constructor.prototype = aHousekeepingCheckGeneral_Prototype;





        var HousekeepingCheckGeneral_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = aHousekeepingCheckGeneral_Prototype;
            this._v_Type = null;

            this._v_HousekeepingMaster   = null;

        };
        HousekeepingCheckGeneral_SuperPrototypeConstructor.prototype = aHousekeepingCheckGeneral_Prototype;



        var aModule = {
            "HousekeepingCheckGeneral_Prototype": aHousekeepingCheckGeneral_Prototype,
            "HousekeepingCheckGeneral_Constructor": HousekeepingCheckGeneral_Constructor,
            "HousekeepingCheckGeneral_SuperPrototypeConstructor": HousekeepingCheckGeneral_SuperPrototypeConstructor
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

            var aM_housekeepconstants           = require('./housekeep-constants');
            var aM_housekeepinggeneral  = require('./housekeeping-general');
            var aM_overrider           = require('../overrider');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeepinggeneral,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./housekeep-constants",
            "./housekeeping-general",
            "../overrider"
        ], function (
            theM_housekeepconstants,
            theM_housekeepinggeneral,
                theM_overrider
            ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeepinggeneral,
                theM_overrider
            );
        });
    }


}());


