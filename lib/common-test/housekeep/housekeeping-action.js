'use strict';

/*
 housekeeping-action.js
 Creado 201504081430
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
                                 theM_housekeeputils,
                                 theM_housekeepinggeneral,
                                 theM_overrider) {

        var ModuleName     = "housekeeping-action";
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







        var aHousekeepingAction_Prototype = (function() {


            var aPrototype = new theM_housekeepinggeneral.HousekeepingGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            aPrototype._v_Type = "HousekeepingAction";


            aPrototype._v_HousekeeperSpecific  = null;
            aPrototype._v_HousekeepingMaster   = null;
            aPrototype._v_HousekeepingAttempt  = null;
            aPrototype._v_HousekeepingSpecific = null;

            aPrototype._v_HousekeepingRecommendation = null;

            aPrototype._v_HousekeepingActionKind         = null;
            aPrototype._v_HousekeepingActionPriority     = null;
            aPrototype._v_ActionHousekeeperSpecificKind  = null;
            aPrototype._v_HousekeepingActionParameters   = null;

            aPrototype._v_ActionTime = null;




            var _pInit = function( theTitle,
                                   theHousekeepIdentifier,
                                   theHousekeepRecorder,
                                   theHousekeepOptions,
                                   theHousekeeper,
                                   theHousekeeperSpecific,
                                   theHousekeepingMaster,
                                   theHousekeepingAttempt,
                                   theHousekeepingSpecific,
                                   theHousekeepingRecommendation,
                                   theActionKind,
                                   theActionPriority,
                                   theHousekeeperSpecificKind,
                                   theActionParameters,
                                   theMoment) {

                this._pInit_HousekeepingAction( theTitle,
                                                theHousekeepIdentifier,
                                                theHousekeepRecorder,
                                                theHousekeepOptions,
                                                theHousekeeper,
                                                theHousekeeperSpecific,
                                                theHousekeepingMaster,
                                                theHousekeepingAttempt,
                                                theHousekeepingSpecific,
                                                theHousekeepingRecommendation,
                                                theActionKind,
                                                theActionPriority,
                                                theHousekeeperSpecificKind,
                                                theActionParameters,
                                                theMoment);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeepingAction = function( theTitle,
                                                      theHousekeepIdentifier,
                                                      theHousekeepRecorder,
                                                      theHousekeepOptions,
                                                      theHousekeeper,
                                                      theHousekeeperSpecific,
                                                      theHousekeepingMaster,
                                                      theHousekeepingAttempt,
                                                      theHousekeepingSpecific,
                                                      theHousekeepingRecommendation,
                                                      theActionKind,
                                                      theActionPriority,
                                                      theHousekeeperSpecificKind,
                                                      theActionParameters,
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


                this._v_HousekeepingKind   = null;
                if( theHousekeepingSpecific) {
                    this._v_HousekeepingKind = theHousekeepingSpecific._v_HousekeepingKind;
                }

                this._v_HousekeeperSpecific   = theHousekeeperSpecific;
                this._v_HousekeepingMaster    = theHousekeepingMaster;
                this._v_HousekeepingAttempt   = theHousekeepingAttempt;
                this._v_HousekeepingSpecific  = theHousekeepingSpecific;

                this._v_HousekeepingRecommendation     = theHousekeepingRecommendation;

                this._v_HousekeepingActionKind         = theActionKind;
                this._v_HousekeepingActionPriority     = theActionPriority;
                this._v_ActionHousekeeperSpecificKind  = theHousekeeperSpecificKind;
                this._v_HousekeepingActionParameters   = theActionParameters;

                this._v_ActionTime = null;

                if( this._v_HousekeepingActionPriority){}/* CQT */
            };
            if( _pInit_HousekeepingAction){}/* CQT */
            aPrototype._pInit_HousekeepingAction = _pInit_HousekeepingAction;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeepingAction( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_HousekeepingAction = function( theReleaseParms, theReleaseDone) {

                if( this._v_HousekeepingRecommendation) {
                    if( this._v_HousekeepingRecommendation._pRelease && ( typeof this._v_HousekeepingRecommendation._pRelease == "function")) {
                        this._v_HousekeepingRecommendation._pRelease( theReleaseParms, theReleaseDone);
                    }
                }

                this._v_HousekeepingRecommendation = undefined;

                this._v_HousekeeperSpecific  = undefined;
                this._v_HousekeepingMaster   = undefined;
                this._v_HousekeepingSpecific = undefined;

                this._v_HousekeepingActionKind         = undefined;
                this._v_HousekeepingActionPriority     = undefined;
                this._v_ActionHousekeeperSpecificKind  = undefined;
                this._v_HousekeepingActionParameters   = undefined;

                this._v_ActionTime = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeepingGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeepingAction){}/* CQT */
            aPrototype._pRelease_HousekeepingAction = _pRelease_HousekeepingAction;







            var pSetActionTimeNow = function() {

                this._v_ActionTime = new Date();
                return this._v_ActionTime;
            };
            if( pSetActionTimeNow){}/* CQT */
            aPrototype.pSetActionTimeNow = pSetActionTimeNow;





            var fActionTime = function() {

                return this._v_ActionTime;
            };
            if( fActionTime){}/* CQT */
            aPrototype.fActionTime = fActionTime;









            var fHousekeepingActionMatchesFindCriteria = function( theHousekeeperSpecificKind,
                                                                   theNumRecentHousekeepingActions,
                                                                   theFindCriteria,
                                                                   theHousekeepingActions) {

                if( !theHousekeeperSpecificKind) {
                    return false;
                }

                if( !this._v_ActionHousekeeperSpecificKind) {
                    return false;
                }

                if( !theHousekeeperSpecificKind == this._v_ActionHousekeeperSpecificKind) {
                    return false;
                }

                if( !theFindCriteria) {
                    return false;
                }

                var anActionKind = theFindCriteria[ theM_housekeepconstants.ACTIONCRITERIA_FIELD_ACTIONKIND]
                if( !anActionKind) {
                    return false;
                }

                if( !this._v_HousekeepingActionKind) {
                    return false;
                }

                if( !anActionKind == this._v_HousekeepingActionKind) {
                    return false;
                }

                var aCriteriaWhatToClean = theFindCriteria[ theM_housekeepconstants.ACTIONCRITERIA_FIELD_MEMORY_CLEANUP_WHATTOCLEAN]
                if( !aCriteriaWhatToClean) {
                    return false;
                }

                if( !this._v_HousekeepingActionParameters) {
                    return false;
                }

                var aParameterWhatToClean = this._v_HousekeepingActionParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN];
                if( !aParameterWhatToClean) {
                    return false;
                }

                if( !theM_housekeeputils.fgWhatToCleanIncludesAll( aParameterWhatToClean, aCriteriaWhatToClean)) {
                    return false;
                }

                return true;

            };
            if( fHousekeepingActionMatchesFindCriteria){}/* CQT */
            aPrototype.fHousekeepingActionMatchesFindCriteria = fHousekeepingActionMatchesFindCriteria;










            var fIsActionPerformed = function( theActionKind) {

                if( !theActionKind) {
                    return false;
                }

                if( !this._v_HousekeepingPerformed) {
                    return false;
                }

                if( !this._v_HousekeepingSuccess) {
                    return false;
                }

                if( !this._v_HousekeepingActionKind) {
                    return false;
                }

                var aHousekeepingActionKindOK = this._v_HousekeepingActionKind == theActionKind;
                if( !aHousekeepingActionKindOK) {
                    return aHousekeepingActionKindOK;
                }

                return true;
            };
            if( fIsActionPerformed){}/* CQT */
            aPrototype.fIsActionPerformed = fIsActionPerformed;






            return aPrototype;

        })();




        var HousekeepingAction_Constructor = function( theTitle,
                                                       theHousekeepIdentifier,
                                                       theHousekeepRecorder,
                                                       theHousekeepOptions,
                                                       theHousekeeper,
                                                       theHousekeeperSpecific,
                                                       theHousekeepingMaster,
                                                       theHousekeepingAttempt,
                                                       theHousekeepingSpecific,
                                                       theHousekeepingRecommendation,
                                                       theActionKind,
                                                       theActionPriority,
                                                       theHousekeeperSpecificKind,
                                                       theActionParameters,
                                                       theMoment) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_HousekeeperSpecific  = null;
            this._v_HousekeepingMaster   = null;
            this._v_HousekeepingAttempt  = null;
            this._v_HousekeepingSpecific = null;

            this._v_HousekeepingRecommendation = null;

            this._v_HousekeepingActionKind         = null;
            this._v_HousekeepingActionPriority     = null;
            this._v_ActionHousekeeperSpecificKind  = null;
            this._v_HousekeepingActionParameters   = null;

            this._v_ActionTime = null;

            this._pInit_HousekeepingAction( theTitle,
                                            theHousekeepIdentifier,
                                            theHousekeepRecorder,
                                            theHousekeepOptions,
                                            theHousekeeper,
                                            theHousekeeperSpecific,
                                            theHousekeepingMaster,
                                            theHousekeepingAttempt,
                                            theHousekeepingSpecific,
                                            theHousekeepingRecommendation,
                                            theActionKind,
                                            theActionPriority,
                                            theHousekeeperSpecificKind,
                                            theActionParameters,
                                            theMoment);

        };
        HousekeepingAction_Constructor.prototype = aHousekeepingAction_Prototype;





        var HousekeepingAction_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = aHousekeepingAction_Prototype;
            this._v_Type = null;

            this._v_HousekeeperSpecific  = null;
            this._v_HousekeepingMaster   = null;
            this._v_HousekeepingAttempt  = null;
            this._v_HousekeepingSpecific = null;

            this._v_HousekeepingRecommendation = null;

            this._v_HousekeepingActionKind         = null;
            this._v_HousekeepingActionPriority     = null;
            this._v_ActionHousekeeperSpecificKind  = null;
            this._v_HousekeepingActionParameters   = null;

            this._v_ActionTime = null;
        };
        HousekeepingAction_SuperPrototypeConstructor.prototype = aHousekeepingAction_Prototype;



        var aModule = {
            "HousekeepingAction_Prototype": aHousekeepingAction_Prototype,
            "HousekeepingAction_Constructor": HousekeepingAction_Constructor,
            "HousekeepingAction_SuperPrototypeConstructor": HousekeepingAction_SuperPrototypeConstructor
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

            var aM_housekeepconstants  = require('./housekeep-constants');
            var aM_housekeeputils      = require('./housekeep-utils');
            var aM_housekeepinggeneral = require('./housekeeping-general');
            var aM_overrider           = require('../overrider');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeeputils,
                aM_housekeepinggeneral,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./housekeep-constants",
            "./housekeep-utils",
            "./housekeeping-general",
            "../overrider"
        ], function (
            theM_housekeepconstants,
            theM_housekeeputils,
            theM_housekeepinggeneral,
            theM_overrider
        ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_housekeepinggeneral,
                theM_overrider
            );
        });
    }


}());


