'use strict';

/*
 housekeeping-specific.js
 Creado 201504072147
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

        var ModuleName     = "housekeeping-attempt";
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







        var aHousekeepingSpecific_Prototype = (function() {


            var aPrototype = new theM_housekeepinggeneral.HousekeepingGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            aPrototype._v_Type = "HousekeepingSpecific";



            aPrototype._v_HousekeepingMaster  = null;
            aPrototype._v_HousekeepingAttempt = null;
            aPrototype._v_HousekeeperSpecific = null;

            aPrototype._v_HousekeepingActions         = null;
            aPrototype._v_HousekeepingRecommendations = null;





            var _pInit = function( theTitle,
                                   theHousekeepIdentifier,
                                   theHousekeepRecorder,
                                   theHousekeepOptions,
                                   theHousekeeperMaster,
                                   theHousekeepingMaster,
                                   theHousekeepingAttempt,
                                   theHousekeeperSpecific,
                                   theMoment) {

                this._pInit_HousekeepingSpecific( theTitle,
                                                  theHousekeepIdentifier,
                                                  theHousekeepRecorder,
                                                  theHousekeepOptions,
                                                  theHousekeeperMaster,
                                                  theHousekeepingMaster,
                                                  theHousekeepingAttempt,
                                                  theHousekeeperSpecific,
                                                  theMoment);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeepingSpecific = function( theTitle,
                                                        theHousekeepIdentifier,
                                                        theHousekeepRecorder,
                                                        theHousekeepOptions,
                                                        theHousekeeperMaster,
                                                        theHousekeepingMaster,
                                                        theHousekeepingAttempt,
                                                        theHousekeeperSpecific,
                                                        theMoment) {


                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_HousekeepingGeneral.apply( this, [ theTitle,
                                                                                 theHousekeepIdentifier,
                                                                                 theHousekeepRecorder,
                                                                                 theHousekeepOptions,
                                                                                 theHousekeeperMaster,
                                                                                 theMoment]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_HousekeepingKind = theM_housekeepconstants.HOUSEKEEPINGKIND_SPECIFIC;

                this._v_HousekeepingMaster   = theHousekeepingMaster;
                this._v_HousekeepingAttempt  = theHousekeepingAttempt;
                this._v_HousekeeperSpecific  = theHousekeeperSpecific;
                if( theHousekeeperSpecific) {
                    this._v_HousekeepingKind = theHousekeeperSpecific._v_HousekeeperKind;
                }

                this._v_HousekeepingActions         = [ ];
                this._v_HousekeepingRecommendations = [ ];

                if( this._v_HousekeepingMaster){}/* CQT */
                if( this._v_HousekeepingAttempt){}/* CQT */
                if( this._v_HousekeeperSpecific){}/* CQT */

            };
            if( _pInit_HousekeepingSpecific){}/* CQT */
            aPrototype._pInit_HousekeepingSpecific = _pInit_HousekeepingSpecific;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeepingSpecific( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_HousekeepingSpecific = function( theReleaseParms, theReleaseDone) {

                if( this._v_HousekeepingActions) {
                    var aNumHousekeepingActions = this._v_HousekeepingActions.length;
                    if( aNumHousekeepingActions) {
                        for( var aHousekeepingActionIdx=0; aHousekeepingActionIdx < aNumHousekeepingActions; aHousekeepingActionIdx++) {

                            var aHousekeepingAction = this._v_HousekeepingActions[ aHousekeepingActionIdx];
                            if( aHousekeepingAction) {

                                if( aHousekeepingAction._pRelease && ( typeof aHousekeepingAction._pRelease == "function")) {

                                    aHousekeepingAction._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_HousekeepingActions  = undefined;

                
                if( this._v_HousekeepingRecommendations) {
                    var aNumHousekeepingRecommendations = this._v_HousekeepingRecommendations.length;
                    if( aNumHousekeepingRecommendations) {
                        for( var aHousekeepingRecommendationIdx=0; aHousekeepingRecommendationIdx < aNumHousekeepingRecommendations; aHousekeepingRecommendationIdx++) {

                            var aHousekeepingRecommendation = this._v_HousekeepingRecommendations[ aHousekeepingRecommendationIdx];
                            if( aHousekeepingRecommendation) {

                                if( aHousekeepingRecommendation._pRelease && ( typeof aHousekeepingRecommendation._pRelease == "function")) {

                                    aHousekeepingRecommendation._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_HousekeepingRecommendations  = undefined;

                this._v_HousekeepingMaster  = undefined;
                this._v_HousekeepingAttempt = undefined;
                this._v_HousekeeperSpecific = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeepingGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeepingSpecific){}/* CQT */
            aPrototype._pRelease_HousekeepingSpecific = _pRelease_HousekeepingSpecific;










            var fHousekeepingRecommendations = function() {

                return this._v_HousekeepingRecommendations;
            };
            if( fHousekeepingRecommendations){}/* CQT */
            aPrototype.fHousekeepingRecommendations = fHousekeepingRecommendations;










            var fHousekeepingActions = function() {

                return this._v_HousekeepingActions;
            };
            if( fHousekeepingActions){}/* CQT */
            aPrototype.fHousekeepingActions = fHousekeepingActions;










            var pFindRecentHousekeepingSpecificActionsOfKindInto = function( theHousekeeperSpecificKind,
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


                if( !this._v_HousekeepingActions) {
                    return;
                }

                var aNumHousekeepingActions = this._v_HousekeepingActions.length;
                if( !aNumHousekeepingActions) {
                    return;
                }



                var aHousekeepingActionIdx = aNumHousekeepingActions;

                while( true) {

                    var aNumHousekeepingActionsFound = theHousekeepingActions.length;
                    if( aNumHousekeepingActionsFound >= theNumRecentHousekeepingActions) {
                        break;
                    }

                    aHousekeepingActionIdx -= 1;
                    if( aHousekeepingActionIdx < 0) {
                        break;
                    }

                    var aHousekeepingAction = this._v_HousekeepingActions[ aHousekeepingActionIdx];
                    if( !aHousekeepingAction) {
                        continue;
                    }

                    if( aHousekeepingAction.fHousekeepingActionMatchesFindCriteria( theHousekeeperSpecificKind,
                                                                                    theNumRecentHousekeepingActions,
                                                                                    theFindCriteria,
                                                                                    theHousekeepingActions)) {

                        theHousekeepingActions.push( aHousekeepingAction);
                    }
                }

            };
            if( pFindRecentHousekeepingSpecificActionsOfKindInto){}/* CQT */
            aPrototype.pFindRecentHousekeepingSpecificActionsOfKindInto = pFindRecentHousekeepingSpecificActionsOfKindInto;












            var pHousekeepingSpecificActionsPerformedInto = function( theActionKind, theActionsPerformed) {

                if( !theActionKind) {
                    return;
                }

                if( !theActionsPerformed) {
                    return;
                }


                if( !this._v_HousekeepingActions) {
                    return;
                }


                var aNumHousekeepingActions = this._v_HousekeepingActions.length;
                if( !aNumHousekeepingActions) {
                    return;
                }

                for( var aHousekeepingActionIdx=0; aHousekeepingActionIdx < aNumHousekeepingActions; aHousekeepingActionIdx++) {

                    var aHousekeepingAction = this._v_HousekeepingActions[ aHousekeepingActionIdx];
                    if( aHousekeepingAction) {


                        if( aHousekeepingAction.fIsActionPerformed( theActionKind)) {

                            theActionsPerformed.push( aHousekeepingAction);
                        }
                    }
                }

            };
            if( pHousekeepingSpecificActionsPerformedInto){}/* CQT */
            aPrototype.pHousekeepingSpecificActionsPerformedInto = pHousekeepingSpecificActionsPerformedInto;









            var fIsVoidHousekeepingSpecific = function( ) {

                var anIsVoidHousekeepingSpecific = !this.fHasActionableOrGiveUpRecommendation();
                if( anIsVoidHousekeepingSpecific){}/* CQT */

                return anIsVoidHousekeepingSpecific;

            };
            if( fIsVoidHousekeepingSpecific){}/* CQT */
            aPrototype.fIsVoidHousekeepingSpecific = fIsVoidHousekeepingSpecific;








            var fHasActionableRecommendation = function( ) {

                if( !this._v_HousekeepingRecommendations) {
                    return false;
                }

                var aNumHousekeepingRecommendations = this._v_HousekeepingRecommendations.length;
                if( !aNumHousekeepingRecommendations) {
                    return false;
                }

                for( var aHousekeepingRecommendationIdx=0; aHousekeepingRecommendationIdx < aNumHousekeepingRecommendations; aHousekeepingRecommendationIdx++) {

                    var aHousekeepingRecommendation = this._v_HousekeepingRecommendations[ aHousekeepingRecommendationIdx];
                    if( aHousekeepingRecommendation) {

                        if( aHousekeepingRecommendation.fIsActionable()) {
                            return true;
                        }
                    }
                }

                return false;

            };
            if( fHasActionableRecommendation){}/* CQT */
            aPrototype.fHasActionableRecommendation = fHasActionableRecommendation;








            var fHasActionableOrGiveUpRecommendation = function( ) {

                if( !this._v_HousekeepingRecommendations) {
                    return false;
                }

                var aNumHousekeepingRecommendations = this._v_HousekeepingRecommendations.length;
                if( !aNumHousekeepingRecommendations) {
                    return false;
                }

                for( var aHousekeepingRecommendationIdx=0; aHousekeepingRecommendationIdx < aNumHousekeepingRecommendations; aHousekeepingRecommendationIdx++) {

                    var aHousekeepingRecommendation = this._v_HousekeepingRecommendations[ aHousekeepingRecommendationIdx];
                    if( aHousekeepingRecommendation) {

                        if( aHousekeepingRecommendation.fIsActionable() || aHousekeepingRecommendation.fRecommendsGiveUp()) {
                            return true;
                        }
                    }
                }

                return false;

            };
            if( fHasActionableOrGiveUpRecommendation){}/* CQT */
            aPrototype.fHasActionableOrGiveUpRecommendation = fHasActionableOrGiveUpRecommendation;









            var fHasGiveUpRecommendation = function( ) {

                if( !this._v_HousekeepingRecommendations) {
                    return false;
                }

                var aNumHousekeepingRecommendations = this._v_HousekeepingRecommendations.length;
                if( !aNumHousekeepingRecommendations) {
                    return false;
                }

                for( var aHousekeepingRecommendationIdx=0; aHousekeepingRecommendationIdx < aNumHousekeepingRecommendations; aHousekeepingRecommendationIdx++) {

                    var aHousekeepingRecommendation = this._v_HousekeepingRecommendations[ aHousekeepingRecommendationIdx];
                    if( aHousekeepingRecommendation) {

                        if( aHousekeepingRecommendation.fRecommendsGiveUp()) {
                            return true;
                        }
                    }
                }

                return false;

            };
            if( fHasGiveUpRecommendation){}/* CQT */
            aPrototype.fHasGiveUpRecommendation = fHasGiveUpRecommendation;








            var fActionableRecommendations = function( ) {

                if( !this._v_HousekeepingRecommendations) {
                    return null;
                }

                var someActionableRecommendations = [ ];

                var aNumHousekeepingRecommendations = this._v_HousekeepingRecommendations.length;
                if( !aNumHousekeepingRecommendations) {
                    return someActionableRecommendations;
                }

                for( var aHousekeepingRecommendationIdx=0; aHousekeepingRecommendationIdx < aNumHousekeepingRecommendations; aHousekeepingRecommendationIdx++) {

                    var aHousekeepingRecommendation = this._v_HousekeepingRecommendations[ aHousekeepingRecommendationIdx];
                    if( aHousekeepingRecommendation) {

                        if( aHousekeepingRecommendation.fIsActionable()) {
                            someActionableRecommendations.push( aHousekeepingRecommendation);
                        }
                    }
                }

                return someActionableRecommendations;

            };
            if( fActionableRecommendations){}/* CQT */
            aPrototype.fActionableRecommendations = fActionableRecommendations;










            var pAddHousekeepingRecommendation = function( theHousekeepingRecommendation) {

                if( !theHousekeepingRecommendation) {
                    return;
                }

                if( !this._v_HousekeepingRecommendations) {
                    return;
                }

                if( this._v_HousekeepingRecommendations.indexOf( theHousekeepingRecommendation) >= 0) {
                    return;
                }

                this._v_HousekeepingRecommendations.push( theHousekeepingRecommendation);
            };
            if( pAddHousekeepingRecommendation){}/* CQT */
            aPrototype.pAddHousekeepingRecommendation = pAddHousekeepingRecommendation;








            var pAddHousekeepingAction = function( theHousekeepingAction) {

                if( !theHousekeepingAction) {
                    return;
                }

                if( !this._v_HousekeepingActions) {
                    return;
                }

                if( this._v_HousekeepingActions.indexOf( theHousekeepingAction) >= 0) {
                    return;
                }

                this._v_HousekeepingActions.push( theHousekeepingAction);
            };
            if( pAddHousekeepingAction){}/* CQT */
            aPrototype.pAddHousekeepingAction = pAddHousekeepingAction;





            return aPrototype;

        })();




        var HousekeepingSpecific_Constructor = function( theTitle,
                                                         theHousekeepIdentifier,
                                                         theHousekeepRecorder,
                                                         theHousekeepOptions,
                                                         theHousekeeperMaster,
                                                         theHousekeepingMaster,
                                                         theHousekeepingAttempt,
                                                         theHousekeeperSpecific,
                                                         theMoment) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_HousekeepingMaster  = null;
            this._v_HousekeepingAttempt = null;
            this._v_HousekeeperSpecific = null;

            this._v_HousekeepingActions         = null;
            this._v_HousekeepingRecommendations = null;


            this._pInit_HousekeepingSpecific( theTitle,
                                              theHousekeepIdentifier,
                                              theHousekeepRecorder,
                                              theHousekeepOptions,
                                              theHousekeeperMaster,
                                              theHousekeepingMaster,
                                              theHousekeepingAttempt,
                                              theHousekeeperSpecific,
                                              theMoment);

        };
        HousekeepingSpecific_Constructor.prototype = aHousekeepingSpecific_Prototype;





        var HousekeepingSpecific_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = aHousekeepingSpecific_Prototype;
            this._v_Type = null;

            this._v_HousekeepingMaster  = null;
            this._v_HousekeepingAttempt = null;
            this._v_HousekeeperSpecific = null;

            this._v_HousekeepingActions         = null;
            this._v_HousekeepingRecommendations = null;
        };
        HousekeepingSpecific_SuperPrototypeConstructor.prototype = aHousekeepingSpecific_Prototype;



        var aModule = {
            "HousekeepingSpecific_Prototype": aHousekeepingSpecific_Prototype,
            "HousekeepingSpecific_Constructor": HousekeepingSpecific_Constructor,
            "HousekeepingSpecific_SuperPrototypeConstructor": HousekeepingSpecific_SuperPrototypeConstructor
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


