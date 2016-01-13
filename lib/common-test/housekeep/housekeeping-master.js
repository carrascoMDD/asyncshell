'use strict';

/*
 housekeeping-master.js
 Creado 2015044081311
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
                                 theM_housekeepingattempt,
                                 theM_overrider) {

        var ModuleName     = "housekeeping-master";
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







        var aHousekeepingMaster_Prototype = (function() {


            var aPrototype = new theM_housekeepinggeneral.HousekeepingGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            aPrototype._v_Type = "HousekeepingMaster";


            aPrototype._v_HousekeepingAttempts  = null;

            aPrototype._v_GiveUp                = null;

            aPrototype._v_HousekeepingCheck     = null;






            var _pInit = function( theTitle,
                                   theHousekeepIdentifier,
                                   theHousekeepRecorder,
                                   theHousekeepOptions,
                                   theHousekeeper,
                                   theMoment) {

                this._pInit_HousekeepingMaster( theTitle,
                                                theHousekeepIdentifier,
                                                theHousekeepRecorder,
                                                theHousekeepOptions,
                                                theHousekeeper,
                                                theMoment);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeepingMaster = function( theTitle,
                                                      theHousekeepIdentifier,
                                                      theHousekeepRecorder,
                                                      theHousekeepOptions,
                                                      theHousekeeper,
                                                      theMoment) {


                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_HousekeepingGeneral.apply( this, [ theTitle, theHousekeepIdentifier, theHousekeepRecorder, theHousekeepOptions, theHousekeeper, theMoment]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_HousekeepingKind = theM_housekeepconstants.HOUSEKEEPINGKIND_MASTER;

                this._v_HousekeepingAttempts  = [ ];
                this._v_HousekeepingCheck     = null;

                this._v_GiveUp                = false;

                if( this._v_GiveUp){}/* CQT */
            };
            if( _pInit_HousekeepingMaster){}/* CQT */
            aPrototype._pInit_HousekeepingMaster = _pInit_HousekeepingMaster;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeepingMaster( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_HousekeepingMaster = function( theReleaseParms, theReleaseDone) {

                if( this._v_HousekeepingAttempts) {
                    var aNumHousekeepingAttempts = this._v_HousekeepingAttempts.length;
                    if( aNumHousekeepingAttempts) {
                        for( var aHousekeepingAttemptIdx=0; aHousekeepingAttemptIdx < aNumHousekeepingAttempts; aHousekeepingAttemptIdx++) {

                            var aHousekeepingAttempt = this._v_HousekeepingAttempts[ aHousekeepingAttemptIdx];
                            if( aHousekeepingAttempt) {

                                if( aHousekeepingAttempt._pRelease && ( typeof aHousekeepingAttempt._pRelease == "function")) {
                                    aHousekeepingAttempt._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_HousekeepingAttempts  = undefined;


                if( this._v_HousekeepingCheck) {
                    if( this._v_HousekeepingCheck._pRelease && ( typeof this._v_HousekeepingCheck._pRelease == "function")) {
                        this._v_HousekeepingCheck._pRelease( theReleaseParms, theReleaseDone);
                    }
                }

                this._v_HousekeepingCheck     = undefined;

                this._v_GiveUp                = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeepingGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeepingMaster){}/* CQT */
            aPrototype._pRelease_HousekeepingMaster = _pRelease_HousekeepingMaster;












            var pSetHousekeepingCheck = function( theHousekeepingCheck) {

                if( !theHousekeepingCheck) {
                    return;
                }

                this._v_HousekeepingCheck = theHousekeepingCheck;
            };
            if( pSetHousekeepingCheck){}/* CQT */
            aPrototype.pSetHousekeepingCheck = pSetHousekeepingCheck;










            var pAddHousekeepingAttempt = function( theHousekeepingAttempt) {

                if( !theHousekeepingAttempt) {
                    return;
                }

                if( !this._v_HousekeepingAttempts) {
                    return;
                }

                if( this._v_HousekeepingAttempts.indexOf( theHousekeepingAttempt) >= 0) {
                    return;
                }

                this._v_HousekeepingAttempts.push( theHousekeepingAttempt);
            };
            if( pAddHousekeepingAttempt){}/* CQT */
            aPrototype.pAddHousekeepingAttempt = pAddHousekeepingAttempt;









            var pFindRecentHousekeepingActionsOfKindInto = function( theHousekeeperSpecificKind,
                                                                     theNumRecentHousekeepingActions,
                                                                     theFindCriteria,
                                                                     theHousekeepingActions) {

                if( !theHousekeeperSpecificKind) {
                    return;
                }

                if( !theNumRecentHousekeepingActions) {
                    return;
                }

                if( !theHousekeepingActions) {
                    return;
                }

                var aNumFoundHousekeepingActions = theHousekeepingActions.length;
                if( aNumFoundHousekeepingActions >= theNumRecentHousekeepingActions) {
                    return;
                }


                if( !this._v_HousekeepingAttempts) {
                    return;
                }

                var aNumHousekeepingAttempts = this._v_HousekeepingAttempts.length;
                if( !aNumHousekeepingAttempts) {
                    return;
                }



                var aHousekeepingAttemptIdx = aNumHousekeepingAttempts;

                while( true) {

                    var aNumHousekeepingActionsFound = theHousekeepingActions.length;
                    if( aNumHousekeepingActionsFound >= theNumRecentHousekeepingActions) {
                        break;
                    }

                    aHousekeepingAttemptIdx -= 1;
                    if( aHousekeepingAttemptIdx < 0) {
                        break;
                    }

                    var aHousekeepingAttempt = this._v_HousekeepingAttempts[ aHousekeepingAttemptIdx];
                    if( !aHousekeepingAttempt) {
                        continue;
                    }

                    aHousekeepingAttempt.pFindRecentHousekeepingAttemptActionsOfKindInto( theHousekeeperSpecificKind,
                                                                                          theNumRecentHousekeepingActions,
                                                                                          theFindCriteria,
                                                                                          theHousekeepingActions);
                }

            };
            if( pFindRecentHousekeepingActionsOfKindInto){}/* CQT */
            aPrototype.pFindRecentHousekeepingActionsOfKindInto = pFindRecentHousekeepingActionsOfKindInto;









            var fAttemptsActionsPerformedBeforeAttempt = function( theHousekeepingAttempt, theHousekeeperSpecificKind, theActionKind) {

                if( !theHousekeepingAttempt) {
                    return null;
                }

                if( !theHousekeeperSpecificKind) {
                    return null;
                }

                if( !theActionKind) {
                    return null;
                }


                if( !this._v_HousekeepingAttempts) {
                    return null;
                }


                var aNumHousekeepingAttempts = this._v_HousekeepingAttempts.length;
                if( !aNumHousekeepingAttempts) {
                    return null;
                }

                var someActionsPerformed = [ ];

                for( var aHousekeepingAttemptIdx=0; aHousekeepingAttemptIdx < aNumHousekeepingAttempts; aHousekeepingAttemptIdx++) {

                    var aHousekeepingAttempt = this._v_HousekeepingAttempts[ aHousekeepingAttemptIdx];
                    if( aHousekeepingAttempt) {

                        if( aHousekeepingAttempt === theHousekeepingAttempt) {
                            break;
                        }

                        aHousekeepingAttempt.pAttemptActionsPerformedInto( theHousekeeperSpecificKind, theActionKind, someActionsPerformed)
                    }
                }


                return someActionsPerformed;

            };
            if( fAttemptsActionsPerformedBeforeAttempt){}/* CQT */
            aPrototype.fAttemptsActionsPerformedBeforeAttempt = fAttemptsActionsPerformedBeforeAttempt;








            var fGiveUp = function( ) {

                return this._v_GiveUp;
            };
            if( fGiveUp){}/* CQT */
            aPrototype.fGiveUp = fGiveUp;







            var fSuccess = function( ) {

                return this._v_Success;
            };
            if( fSuccess){}/* CQT */
            aPrototype.fSuccess = fSuccess;






            return aPrototype;

        })();




        var HousekeepingMaster_Constructor = function( theTitle,
                                                       theHousekeepIdentifier,
                                                       theHousekeepRecorder,
                                                       theHousekeepOptions,
                                                       theHousekeeper,
                                                       theMoment) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_HousekeepingAttempts  = null;
            this._v_HousekeepingCheck     = null;

            this._v_GiveUp                = null;

            this._pInit_HousekeepingMaster( theTitle,
                                            theHousekeepIdentifier,
                                            theHousekeepRecorder,
                                            theHousekeepOptions,
                                            theHousekeeper,
                                            theMoment);

        };
        HousekeepingMaster_Constructor.prototype = aHousekeepingMaster_Prototype;





        var HousekeepingMaster_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = aHousekeepingMaster_Prototype;
            this._v_Type = null;

            this._v_HousekeepingAttempts  = null;
            this._v_HousekeepingCheck     = null;

            this._v_GiveUp                = null;
        };
        HousekeepingMaster_SuperPrototypeConstructor.prototype = aHousekeepingMaster_Prototype;



        var aModule = {
            "HousekeepingMaster_Prototype": aHousekeepingMaster_Prototype,
            "HousekeepingMaster_Constructor": HousekeepingMaster_Constructor,
            "HousekeepingMaster_SuperPrototypeConstructor": HousekeepingMaster_SuperPrototypeConstructor
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
            var aM_housekeepingattempt  = require('./housekeeping-attempt');
            var aM_overrider            = require('../overrider');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeepinggeneral,
                aM_housekeepingattempt,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./housekeep-constants",
            "./housekeeping-general",
            "./housekeeping-attempt",
            "../overrider"
        ], function (
                theM_housekeepconstants,
                theM_housekeepinggeneral,
                theM_housekeepingattempt,
                theM_overrider
            ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeepinggeneral,
                theM_housekeepingattempt,
                theM_overrider
            );
        });
    }


}());


