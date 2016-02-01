'use strict';

/*
 housekeeping-attempt.js
 Created 2015044081311
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
    var aMod_definer = function( theM_housekeepconstants,
                                 theM_housekeepinggeneral,
                                 theM_housekeepingattempt,
                                 theM_overrider) {

        var ModuleName     = "housekeeping-attempt";
        var ModulePackages = "common-test/housekeep";
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







        var aHousekeepingAttempt_Prototype = (function() {


            var aPrototype = new theM_housekeepinggeneral.HousekeepingGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            aPrototype._v_Type = "HousekeepingAttempt";


            aPrototype._v_Housekeeping        = null;

            aPrototype._v_HousekeepingAttemptIndex = null;

            aPrototype._v_HousekeepingsSpecific        = null;
            aPrototype._v_HousekeepingsSpecificNonVoid = null;
            aPrototype._v_HousekeepingsSpecificByKind  = null;





            var _pInit = function( theTitle,
                                   theHousekeepingIdentifier,
                                   theHousekeepingRecorder,
                                   theHousekeepOptions,
                                   theHousekeeper,
                                   theHousekeeping,
                                   theMoment,
                                   theHousekeepingAttemptIndex) {

                this._pInit_HousekeepingAttempt( theTitle,
                                                 theHousekeepingIdentifier,
                                                 theHousekeepingRecorder,
                                                 theHousekeepOptions,
                                                 theHousekeeper,
                                                 theHousekeeping,
                                                 theMoment,
                                                 theHousekeepingAttemptIndex);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeepingAttempt = function( theTitle,
                                                       theHousekeepingIdentifier,
                                                       theHousekeepingRecorder,
                                                       theHousekeepOptions,
                                                       theHousekeeper,
                                                       theHousekeeping,
                                                       theMoment,
                                                       theHousekeepingAttemptIndex) {


                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_HousekeepingGeneral.apply( this, [ theTitle,
                                                                                 theHousekeepingIdentifier,
                                                                                 theHousekeepingRecorder,
                                                                                 theHousekeepOptions,
                                                                                 theHousekeeper,
                                                                                 theMoment,
                                                                                 theHousekeepingAttemptIndex]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Housekeeping             = theHousekeeping;
                this._v_HousekeepingAttemptIndex = theHousekeepingAttemptIndex;

                if( this._v_Housekeeping) {
                    this._v_HousekeepingKind = theHousekeeping._v_HousekeepingKind;
                }

                this._v_HousekeepingsSpecific       = [ ];
                this._v_HousekeepingsSpecificByKind = { };

            };
            if( _pInit_HousekeepingAttempt){}/* CQT */
            aPrototype._pInit_HousekeepingAttempt = _pInit_HousekeepingAttempt;












            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeepingAttempt( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;






            var _pRelease_HousekeepingAttempt = function( theReleaseParms, theReleaseDone) {

                this._v_Housekeeping = undefined;

                this._v_HousekeepingAttemptIndex = undefined;

                if( this._v_HousekeepingsSpecific) {
                    var aNumHousekeepingsSpecific = this._v_HousekeepingsSpecific.length;
                    if( aNumHousekeepingsSpecific) {
                        for( var aHousekeepingSpecificIdx=0; aHousekeepingSpecificIdx < aNumHousekeepingsSpecific; aHousekeepingSpecificIdx++) {

                            var aHousekeepingSpecific = this._v_HousekeepingsSpecific[ aHousekeepingSpecificIdx];
                            if( aHousekeepingSpecific) {

                                if( aHousekeepingSpecific._pRelease && ( typeof aHousekeepingSpecific._pRelease == "function")) {
                                    aHousekeepingSpecific._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }

                this._v_HousekeepingsSpecific = undefined;

                this._v_HousekeepingsSpecificByKind = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeepingGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeepingAttempt){}/* CQT */
            aPrototype._pRelease_HousekeepingAttempt = _pRelease_HousekeepingAttempt;



















            var pFindRecentHousekeepingAttemptActionsOfKindInto = function( theHousekeeperSpecificKind,
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


                if( !this._v_HousekeepingsSpecific) {
                    return;
                }

                var aNumHousekeepingsSpecific = this._v_HousekeepingsSpecific.length;
                if( !aNumHousekeepingsSpecific) {
                    return;
                }



                var aHousekeepingSpecificIdx = aNumHousekeepingsSpecific;

                while( true) {

                    var aNumHousekeepingActionsFound = theHousekeepingActions.length;
                    if( aNumHousekeepingActionsFound >= theNumRecentHousekeepingActions) {
                        break;
                    }

                    aHousekeepingSpecificIdx -= 1;
                    if( aHousekeepingSpecificIdx < 0) {
                        break;
                    }

                    var aHousekeepingSpecific = this._v_HousekeepingsSpecific[ aHousekeepingSpecificIdx];
                    if( !aHousekeepingSpecific) {
                        continue;
                    }

                    aHousekeepingSpecific.pFindRecentHousekeepingSpecificActionsOfKindInto( theHousekeeperSpecificKind,
                        theNumRecentHousekeepingActions,
                        theFindCriteria,
                        theHousekeepingActions);

                }

            };
            if( pFindRecentHousekeepingAttemptActionsOfKindInto){}/* CQT */
            aPrototype.pFindRecentHousekeepingAttemptActionsOfKindInto = pFindRecentHousekeepingAttemptActionsOfKindInto;















            var pAttemptActionsPerformedInto = function( theHousekeeperSpecificKind, theActionKind, theActionsPerformed) {

                if( !theHousekeeperSpecificKind) {
                    return;
                }

                if( !theActionKind) {
                    return;
                }

                if( !theActionsPerformed) {
                    return;
                }

                if( !this._v_HousekeepingsSpecific) {
                    return;
                }


                var aNumHousekeepingsSpecific = this._v_HousekeepingsSpecific.length;
                if( !aNumHousekeepingsSpecific) {
                    return;
                }

                for( var aHousekeepingSpecificIdx=0; aHousekeepingSpecificIdx < aNumHousekeepingsSpecific; aHousekeepingSpecificIdx++) {

                    var aHousekeepingSpecific = this._v_HousekeepingsSpecific[ aHousekeepingSpecificIdx];
                    if( aHousekeepingSpecific) {

                        if( aHousekeepingSpecific._v_HousekeeperSpecific) {

                            if( aHousekeepingSpecific._v_HousekeeperSpecific._v_HousekeeperKind) {

                                if( aHousekeepingSpecific._v_HousekeeperSpecific._v_HousekeeperKind == theHousekeeperSpecificKind) {

                                    aHousekeepingSpecific.pHousekeepingSpecificActionsPerformedInto( theActionKind, theActionsPerformed)
                                }
                            }
                        }

                    }
                }

            };
            if( pAttemptActionsPerformedInto){}/* CQT */
            aPrototype.pAttemptActionsPerformedInto = pAttemptActionsPerformedInto;



            





            var fIsVoidAttempt = function( ) {

                if( !this._v_HousekeepingsSpecific) {
                    return true;
                }

                var aNumHousekeepingsSpecific = this._v_HousekeepingsSpecific.length;
                if( !aNumHousekeepingsSpecific) {
                    return true;
                }

                for( var aHousekeepingSpecificIdx=0; aHousekeepingSpecificIdx < aNumHousekeepingsSpecific; aHousekeepingSpecificIdx++) {

                    var aHousekeepingSpecific = this._v_HousekeepingsSpecific[ aHousekeepingSpecificIdx];
                    if( aHousekeepingSpecific) {

                        if( !aHousekeepingSpecific.fIsVoidHousekeepingSpecific()) {

                            return false;
                        }

                    }
                }

                return true;

            };
            if( fIsVoidAttempt){}/* CQT */
            aPrototype.fIsVoidAttempt = fIsVoidAttempt;







            var fGiveUpAttempt = function( ) {

                if( !this._v_HousekeepingsSpecific) {
                    return false;
                }

                var aNumHousekeepingsSpecific = this._v_HousekeepingsSpecific.length;
                if( !aNumHousekeepingsSpecific) {
                    return false;
                }

                for( var aHousekeepingSpecificIdx=0; aHousekeepingSpecificIdx < aNumHousekeepingsSpecific; aHousekeepingSpecificIdx++) {

                    var aHousekeepingSpecific = this._v_HousekeepingsSpecific[ aHousekeepingSpecificIdx];
                    if( aHousekeepingSpecific) {

                        if( !aHousekeepingSpecific.fHasGiveUpRecommendation()) {

                            return false;
                        }

                    }
                }

                return true;

            };
            if( fGiveUpAttempt){}/* CQT */
            aPrototype.fGiveUpAttempt = fGiveUpAttempt;






            var pAddHousekeepingSpecific = function( theHousekeepingSpecific) {

                if( !theHousekeepingSpecific) {
                    return;
                }

                if( !this._v_HousekeepingsSpecific) {
                    return;
                }

                if( this._v_HousekeepingsSpecific.indexOf( theHousekeepingSpecific) >= 0) {
                    return;
                }

                this._v_HousekeepingsSpecific.push( theHousekeepingSpecific);

                if( theHousekeepingSpecific._v_HousekeepingKind) {
                    if( this._v_HousekeepingsSpecificByKind) {
                        this._v_HousekeepingsSpecificByKind[ theHousekeepingSpecific._v_HousekeepingKind] = theHousekeepingSpecific;
                    }
                }
            };
            if( pAddHousekeepingSpecific){}/* CQT */
            aPrototype.pAddHousekeepingSpecific = pAddHousekeepingSpecific;







            var fHousekeepingSpecificByKind = function( theHousekeepingByKind) {

                if( !theHousekeepingByKind) {
                    return null;
                }

                if( !this._v_HousekeepingsSpecificByKind) {
                    return null;
                }

                var aHousekeepingSpecificByKind = this._v_HousekeepingsSpecificByKind[ theHousekeepingByKind];
                if( pAddHousekeepingSpecific){}/* CQT */

                return aHousekeepingSpecificByKind;
            };
            if( fHousekeepingSpecificByKind){}/* CQT */
            aPrototype.fHousekeepingSpecificByKind = fHousekeepingSpecificByKind;






            return aPrototype;

        })();






        var HousekeepingAttempt_Constructor = function( theTitle,
                                                        theHousekeepingIdentifier,
                                                        theHousekeepingRecorder,
                                                        theHousekeepOptions,
                                                        theHousekeeper,
                                                        theHousekeeping,
                                                        theMoment,
                                                        theHousekeepingAttemptIndex) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Housekeeping             = null;
            this._v_HousekeepingAttemptIndex = null;

            this._v_HousekeepingsSpecific       = null;
            this._v_HousekeepingsSpecificByKind = null;

            this._pInit_HousekeepingAttempt( theTitle,
                                             theHousekeepingIdentifier,
                                             theHousekeepingRecorder,
                                             theHousekeepOptions,
                                             theHousekeeper,
                                             theHousekeeping,
                                             theMoment,
                                             theHousekeepingAttemptIndex);

        };
        HousekeepingAttempt_Constructor.prototype = aHousekeepingAttempt_Prototype;





        var HousekeepingAttempt_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = aHousekeepingAttempt_Prototype;
            this._v_Type = null;

            this._v_Housekeeping             = null;
            this._v_HousekeepingAttemptIndex = null;

            this._v_HousekeepingsSpecific       = null;
            this._v_HousekeepingsSpecificByKind = null;

        };
        HousekeepingAttempt_SuperPrototypeConstructor.prototype = aHousekeepingAttempt_Prototype;



        var aModule = {
            "HousekeepingAttempt_Prototype": aHousekeepingAttempt_Prototype,
            "HousekeepingAttempt_Constructor": HousekeepingAttempt_Constructor,
            "HousekeepingAttempt_SuperPrototypeConstructor": HousekeepingAttempt_SuperPrototypeConstructor
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

            var aM_housekeepconstants   = require('./housekeep-constants');
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


