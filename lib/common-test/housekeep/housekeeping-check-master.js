'use strict';

/*
 housekeeping-check-master.js
 Creado 201504121950
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

        var ModuleName     = "housekeeping-check-master";
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







        var aHousekeepingCheckMaster_Prototype = (function() {


            var aPrototype = new theM_housekeepingcheckgeneral.HousekeepingCheckGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepingcheckgeneral.HousekeepingCheckGeneral_Prototype;

            aPrototype._v_Type = "HousekeepingCheckMaster";


            aPrototype._v_HousekeepingChecksSpecific        = null;






            var _pInit = function( theTitle,
                                   theHousekeepIdentifier,
                                   theHousekeepRecorder,
                                   theHousekeepOptions,
                                   theHousekeeper,
                                   theHousekeepingMaster,
                                   theMoment) {

                this._pInit_HousekeepingCheckMaster( theTitle,
                                                     theHousekeepIdentifier,
                                                     theHousekeepRecorder,
                                                     theHousekeepOptions,
                                                     theHousekeeper,
                                                     theHousekeepingMaster,
                                                     theMoment);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeepingCheckMaster = function( theTitle,
                                                           theHousekeepIdentifier,
                                                           theHousekeepRecorder,
                                                           theHousekeepOptions,
                                                           theHousekeeper,
                                                           theHousekeepingMaster,
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


                this._v_HousekeepingKind   = theM_housekeepconstants.HOUSEKEEPERKIND_MASTER;

                this._v_HousekeepingChecksSpecific = [ ];

            };
            if( _pInit_HousekeepingCheckMaster){}/* CQT */
            aPrototype._pInit_HousekeepingCheckMaster = _pInit_HousekeepingCheckMaster;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeepingCheckMaster( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_HousekeepingCheckMaster = function( theReleaseParms, theReleaseDone) {

                if( this._v_HousekeepingChecksSpecific) {
                    var aNumHousekeepingChecksSpecific = this._v_HousekeepingChecksSpecific.length;
                    if( aNumHousekeepingChecksSpecific) {
                        for( var aHousekeepingCheckSpecificIdx=0; aHousekeepingCheckSpecificIdx < aNumHousekeepingChecksSpecific; aHousekeepingCheckSpecificIdx++) {

                            var aHousekeepingCheckSpecific = this._v_HousekeepingChecksSpecific[ aHousekeepingCheckSpecificIdx];
                            if( aHousekeepingCheckSpecific) {

                                if( aHousekeepingCheckSpecific._pRelease && ( typeof aHousekeepingCheckSpecific._pRelease == "function")) {
                                    aHousekeepingCheckSpecific._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }

                this._v_HousekeepingChecksSpecific = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeepingGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeepingCheckMaster){}/* CQT */
            aPrototype._pRelease_HousekeepingCheckMaster = _pRelease_HousekeepingCheckMaster;












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

                if( !this._v_HousekeepingMaster) {
                    return false;
                }



                if( !this._v_HousekeepingChecksSpecific) {
                    return true;
                }

                var aNumHousekeepingChecksSpecific = this._v_HousekeepingChecksSpecific.length;
                if( !aNumHousekeepingChecksSpecific) {
                    return true;
                }


                if( aNumHousekeepingChecksSpecific) {
                    for( var aHousekeepingCheckSpecificIdx=0; aHousekeepingCheckSpecificIdx < aNumHousekeepingChecksSpecific; aHousekeepingCheckSpecificIdx++) {

                        var aHousekeepingCheckSpecific = this._v_HousekeepingChecksSpecific[ aHousekeepingCheckSpecificIdx];
                        if( aHousekeepingCheckSpecific) {

                            if( !aHousekeepingCheckSpecific._v_HousekeepingPerformed || !aHousekeepingCheckSpecific._v_HousekeepingSuccess) {
                                return false;
                            }
                        }
                    }
                }

                return true;
            };
            if( fIsCheckPerformed){}/* CQT */
            aPrototype.fIsCheckPerformed = fIsCheckPerformed;






            return aPrototype;

        })();




        var HousekeepingCheckMaster_Constructor = function( theTitle,
                                                            theHousekeepIdentifier,
                                                            theHousekeepRecorder,
                                                            theHousekeepOptions,
                                                            theHousekeeper,
                                                            theHousekeepingMaster,
                                                            theMoment) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepingcheckgeneral.HousekeepingCheckGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._v_HousekeepingChecksSpecific = null;


            this._pInit_HousekeepingCheckMaster( theTitle,
                                                 theHousekeepIdentifier,
                                                 theHousekeepRecorder,
                                                 theHousekeepOptions,
                                                 theHousekeeper,
                                                 theHousekeepingMaster,
                                                 theMoment);

        };
        HousekeepingCheckMaster_Constructor.prototype = aHousekeepingCheckMaster_Prototype;





        var HousekeepingCheckMaster_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepingcheckgeneral.HousekeepingCheckGeneral_Prototype;

            this._v_Prototype = aHousekeepingCheckMaster_Prototype;
            this._v_Type = null;

            this._v_HousekeepingChecksSpecific  = null;
        };
        HousekeepingCheckMaster_SuperPrototypeConstructor.prototype = aHousekeepingCheckMaster_Prototype;



        var aModule = {
            "HousekeepingCheckMaster_Prototype": aHousekeepingCheckMaster_Prototype,
            "HousekeepingCheckMaster_Constructor": HousekeepingCheckMaster_Constructor,
            "HousekeepingCheckMaster_SuperPrototypeConstructor": HousekeepingCheckMaster_SuperPrototypeConstructor
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

            var aM_housekeepconstants        = require('./housekeep-constants');
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


