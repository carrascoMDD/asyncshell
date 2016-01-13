'use strict';

/*
 housekeeping-check-specific.js
 Creado 201504122005
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
                                 theM_housekeepingcheckgeneral,
                                 theM_overrider) {

        var ModuleName     = "housekeeping-check-specific";
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







        var aHousekeepingCheckSpecific_Prototype = (function() {


            var aPrototype = new theM_housekeepingcheckgeneral.HousekeepingCheckGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepingcheckgeneral.HousekeepingCheckGeneral_Prototype;

            aPrototype._v_Type = "HousekeepingCheckSpecific";


            aPrototype._v_HousekeeperSpecific  = null;
            aPrototype._v_HousekeepingSpecific = null;

            aPrototype._v_HousekeepingCheckMaster = null;

            aPrototype._v_HousekeepingErrorReport = null;





            var _pInit = function( theTitle,
                                   theHousekeepIdentifier,
                                   theHousekeepRecorder,
                                   theHousekeepOptions,
                                   theHousekeeper,
                                   theHousekeeperSpecific,
                                   theHousekeepingMaster,
                                   theHousekeepingSpecific,
                                   theHousekeeperSpecificKind,
                                   theHousekeepingCheckMaster,
                                   theMoment) {

                this._pInit_HousekeepingCheckSpecific( theTitle,
                                                       theHousekeepIdentifier,
                                                       theHousekeepRecorder,
                                                       theHousekeepOptions,
                                                       theHousekeeper,
                                                       theHousekeeperSpecific,
                                                       theHousekeepingMaster,
                                                       theHousekeepingSpecific,
                                                       theHousekeeperSpecificKind,
                                                       theHousekeepingCheckMaster,
                                                       theMoment);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeepingCheckSpecific = function( theTitle,
                                                             theHousekeepIdentifier,
                                                             theHousekeepRecorder,
                                                             theHousekeepOptions,
                                                             theHousekeeper,
                                                             theHousekeeperSpecific,
                                                             theHousekeepingMaster,
                                                             theHousekeepingSpecific,
                                                             theHousekeeperSpecificKind,
                                                             theHousekeepingCheckMaster,
                                                             theMoment) {


                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_HousekeepingCheckGeneral.apply( this, [ theTitle,
                                                                                      theHousekeepIdentifier,
                                                                                      theHousekeepRecorder,
                                                                                      theHousekeepOptions,
                                                                                      theHousekeeper,
                                                                                      theHousekeepingMaster,
                                                                                      theMoment]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_HousekeepingKind   = null;
                if( theHousekeepingSpecific) {
                    this._v_HousekeepingKind = theHousekeepingSpecific._v_HousekeepingKind;
                }


                this._v_HousekeeperSpecific             = theHousekeeperSpecific;
                this._v_HousekeepingSpecific            = theHousekeepingSpecific;

                this._v_HousekeepingCheckMaster         = theHousekeepingCheckMaster;

                this._v_HousekeepingErrorReport     = null;

            };
            if( _pInit_HousekeepingCheckSpecific){}/* CQT */
            aPrototype._pInit_HousekeepingCheckSpecific = _pInit_HousekeepingCheckSpecific;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeepingCheck( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_HousekeepingCheck = function( theReleaseParms, theReleaseDone) {

                if( this._v_HousekeepingErrorReport) {
                    if( this._v_HousekeepingErrorReport._pRelease && ( typeof this._v_HousekeepingErrorReport._pRelease == "function")) {
                        this._v_HousekeepingErrorReport._pRelease( theReleaseParms, theReleaseDone);
                    }
                }

                this._v_HousekeepingErrorReport = undefined;

                this._v_HousekeeperSpecific  = undefined;
                this._v_HousekeepingMaster   = undefined;
                this._v_HousekeepingSpecific = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeepingGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeepingCheck){}/* CQT */
            aPrototype._pRelease_HousekeepingCheck = _pRelease_HousekeepingCheck;












            var fIsCheckPerformed = function( theActionKind) {

                if( !theActionKind) {
                    return false;
                }

                if( !this._v_HousekeepingPerformed) {
                    return false;
                }

                if( this._v_HousekeepingSuccess) {
                    return false;
                }

                if( !this._v_HousekeepingKind) {
                    return false;
                }


                var aHousekeepingKindOK = this._v_HousekeepingKind == theActionKind;
                if( !aHousekeepingKindOK) {
                    return aHousekeepingKindOK;
                }

                return true;
            };
            if( fIsCheckPerformed){}/* CQT */
            aPrototype.fIsCheckPerformed = fIsCheckPerformed;






            return aPrototype;

        })();




        var HousekeepingCheckSpecific_Constructor = function( theTitle,
                                                              theHousekeepIdentifier,
                                                              theHousekeepRecorder,
                                                              theHousekeepOptions,
                                                              theHousekeeper,
                                                              theHousekeeperSpecific,
                                                              theHousekeepingMaster,
                                                              theHousekeepingSpecific,
                                                              theHousekeeperSpecificKind,
                                                              theHousekeepingCheckMaster,
                                                              theMoment) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepingcheckgeneral.HousekeepingCheckGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_HousekeeperSpecific  = null;
            this._v_HousekeepingSpecific = null;

            this._v_HousekeepingCheckMaster = null;

            this._v_HousekeepingErrorReport = null;


            this._pInit_HousekeepingCheckSpecific( theTitle,
                                                   theHousekeepIdentifier,
                                                   theHousekeepRecorder,
                                                   theHousekeepOptions,
                                                   theHousekeeper,
                                                   theHousekeeperSpecific,
                                                   theHousekeepingMaster,
                                                   theHousekeepingSpecific,
                                                   theHousekeeperSpecificKind,
                                                   theHousekeepingCheckMaster,
                                                   theMoment);

        };
        HousekeepingCheckSpecific_Constructor.prototype = aHousekeepingCheckSpecific_Prototype;





        var HousekeepingCheckSpecific_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepingcheckgeneral.HousekeepingCheckGeneral_Prototype;

            this._v_Prototype = aHousekeepingCheckSpecific_Prototype;
            this._v_Type = null;

            this._v_HousekeeperSpecific  = null;
            this._v_HousekeepingSpecific = null;

            this._v_HousekeepingCheckMaster = null;

            this._v_HousekeepingErrorReport = null;

        };
        HousekeepingCheckSpecific_SuperPrototypeConstructor.prototype = aHousekeepingCheckSpecific_Prototype;



        var aModule = {
            "HousekeepingCheckSpecific_Prototype": aHousekeepingCheckSpecific_Prototype,
            "HousekeepingCheckSpecific_Constructor": HousekeepingCheckSpecific_Constructor,
            "HousekeepingCheckSpecific_SuperPrototypeConstructor": HousekeepingCheckSpecific_SuperPrototypeConstructor
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

            var aM_housekeepconstants         = require('./housekeep-constants');
            var aM_housekeepingcheckgeneral  = require('./housekeeping-check-general');
            var aM_overrider                 = require('../overrider');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeepingcheckgeneral,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./housekeep-constants",
            "./housekeeping-check-general",
            "../overrider"
        ], function (
                theM_housekeepconstants,
                theM_housekeepingcheckgeneral,
                theM_overrider
            ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeepingcheckgeneral,
                theM_overrider
            );
        });
    }


}());


