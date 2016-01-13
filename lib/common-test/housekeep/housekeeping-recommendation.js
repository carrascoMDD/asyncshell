'use strict';

/*
 housekeeping-recommendaton.js
 Creado 201504081411
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

        var ModuleName     = "housekeeping-recommendaton";
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
                return;
            }

            theToInit.RECOMMENDATIONKIND_PASS   = "PASS";
            theToInit.RECOMMENDATIONKIND_ACTION = "ACTION";
            theToInit.RECOMMENDATIONKIND_GIVEUP = "GIVEUP";

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







        var aHousekeepingRecommendation_Prototype = (function() {


            var aPrototype = new theM_housekeepinggeneral.HousekeepingGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            aPrototype._v_Type = "HousekeepingRecommendation";


            aPrototype._v_HousekeeperSpecific  = null;
            aPrototype._v_HousekeepingMaster   = null;
            aPrototype._v_HousekeepingAttempt  = null;
            aPrototype._v_HousekeepingSpecific = null;

            aPrototype._v_RecommendationKind = null;

            aPrototype._v_RecommendedActionKind                    = null;
            aPrototype._v_RecommendedActionPriority                = null;
            aPrototype._v_RecommendedActionHousekeeperSpecificKind = null;
            aPrototype._v_RecommendedActionParameters              = null;
            aPrototype._v_ComputationReports                       = null;

            aPrototype._v_PerformedActions = null;







            var _pInit = function( theTitle,
                                   theHousekeepIdentifier,
                                   theHousekeepRecorder,
                                   theHousekeepOptions,
                                   theHousekeeper,
                                   theHousekeeperSpecific,
                                   theHousekeepingMaster,
                                   theHousekeepingAttempt,
                                   theHousekeepingSpecific,
                                   theRecommendationKind,
                                   theRecommendedActionKind,
                                   theRecommendedActionPriority,
                                   theRecommendedHousekeeperSpecificKind,
                                   theRecommendedActionParameters,
                                   theMoment,
                                   theComputationReports) {

                this._pInit_HousekeepingRecommendation( theTitle,
                                                        theHousekeepIdentifier,
                                                        theHousekeepRecorder,
                                                        theHousekeepOptions,
                                                        theHousekeeper,
                                                        theHousekeeperSpecific,
                                                        theHousekeepingMaster,
                                                        theHousekeepingAttempt,
                                                        theHousekeepingSpecific,
                                                        theRecommendationKind,
                                                        theRecommendedActionKind,
                                                        theRecommendedActionPriority,
                                                        theRecommendedHousekeeperSpecificKind,
                                                        theRecommendedActionParameters,
                                                        theMoment,
                                                        theComputationReports);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeepingRecommendation = function( theTitle,
                                                              theHousekeepIdentifier,
                                                              theHousekeepRecorder,
                                                              theHousekeepOptions,
                                                              theHousekeeper,
                                                              theHousekeeperSpecific,
                                                              theHousekeepingMaster,
                                                              theHousekeepingAttempt,
                                                              theHousekeepingSpecific,
                                                              theRecommendationKind,
                                                              theRecommendedActionKind,
                                                              theRecommendedActionPriority,
                                                              theRecommendedHousekeeperSpecificKind,
                                                              theRecommendedActionParameters,
                                                              theMoment,
                                                              theComputationReports) {


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


                this._v_RecommendationKind = theRecommendationKind;

                this._v_RecommendedActionKind                    = theRecommendedActionKind;
                this._v_RecommendedActionPriority                = theRecommendedActionPriority;
                this._v_RecommendedActionHousekeeperSpecificKind = theRecommendedHousekeeperSpecificKind;
                this._v_RecommendedActionParameters              = theRecommendedActionParameters;
                this._v_ComputationReports                       = theComputationReports;


                this._v_Success = null;

                this._v_PerformedActions = [ ];

                if( this._v_ComputationReports){}/* CQT */
                if( this._v_PerformedActions){}/* CQT */
            };
            if( _pInit_HousekeepingRecommendation){}/* CQT */
            aPrototype._pInit_HousekeepingRecommendation = _pInit_HousekeepingRecommendation;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeepingRecommendation( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_HousekeepingRecommendation = function( theReleaseParms, theReleaseDone) {

                this._v_HousekeeperSpecific  = undefined;
                this._v_HousekeepingMaster   = undefined;
                this._v_HousekeepingSpecific = undefined;

                this._v_RecommendationKind = undefined;

                this._v_RecommendedActionKind = undefined;
                this._v_RecommendedActionPriority   = undefined;
                this._v_RecommendedActionHousekeeperSpecificKind = undefined;
                this._v_RecommendedActionParameters = undefined;
                this._v_RecommendedActionHowMuchToClean = undefined;

                this._v_PerformedActions = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeepingGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

                if( this._v_RecommendedActionHowMuchToClean){}/* CQT */
            };
            if( _pRelease_HousekeepingRecommendation){}/* CQT */
            aPrototype._pRelease_HousekeepingRecommendation = _pRelease_HousekeepingRecommendation;














            var fHousekeepingSpecific = function( ) {

                return this._v_HousekeepingSpecific;
            };
            if( fHousekeepingSpecific){}/* CQT */
            aPrototype.fHousekeepingSpecific = fHousekeepingSpecific;














            var fRecommendsGiveUp = function( ) {

                if( !this._v_HousekeepingSuccess) {
                    return false;
                }

                if( !this._v_RecommendationKind) {
                    return false;
                }


                var aRecommendationKindGiveUp = this._v_RecommendationKind == this.RECOMMENDATIONKIND_GIVEUP;
                if( aRecommendationKindGiveUp){}/* CQT */

                return aRecommendationKindGiveUp;

            };
            if( fRecommendsGiveUp){}/* CQT */
            aPrototype.fRecommendsGiveUp = fRecommendsGiveUp;









            var fIsActionable = function( ) {

                if( !this._v_HousekeepingSuccess) {
                    return false;
                }

                if( !this._v_RecommendationKind) {
                    return false;
                }

                if( this._v_RecommendationKind == theM_housekeepconstants.RECOMMENDATIONKIND_GIVEUP) {
                    return false;
                }

                var aRecommendationKindIsAction = this._v_RecommendationKind == theM_housekeepconstants.RECOMMENDATIONKIND_ACTION;
                if( aRecommendationKindIsAction){}/* CQT */

                return aRecommendationKindIsAction;

            };
            if( fIsActionable){}/* CQT */
            aPrototype.fIsActionable = fIsActionable;






            return aPrototype;

        })();




        var HousekeepingRecommendation_Constructor = function( theTitle,
                                                               theHousekeepIdentifier,
                                                               theHousekeepRecorder,
                                                               theHousekeepOptions,
                                                               theHousekeeper,
                                                               theHousekeeperSpecific,
                                                               theHousekeepingMaster,
                                                               theHousekeepingAttempt,
                                                               theHousekeepingSpecific,
                                                               theRecommendationKind,
                                                               theRecommendedActionKind,
                                                               theRecommendedActionPriority,
                                                               theRecommendedHousekeeperSpecificKind,
                                                               theRecommendedActionParameters,
                                                               theMoment,
                                                               theComputationReports) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_HousekeeperSpecific  = null;
            this._v_HousekeepingMaster   = null;
            this._v_HousekeepingAttempt  = null;
            this._v_HousekeepingSpecific = null;

            this._v_RecommendedActionKind                    = null;
            this._v_RecommendedActionPriority                = null;
            this._v_RecommendedActionHousekeeperSpecificKind = null;
            this._v_RecommendedActionParameters              = null;

            this._v_ComputationReports                       = null;


            this._pInit_HousekeepingRecommendation( theTitle,
                                                    theHousekeepIdentifier,
                                                    theHousekeepRecorder,
                                                    theHousekeepOptions,
                                                    theHousekeeper,
                                                    theHousekeeperSpecific,
                                                    theHousekeepingMaster,
                                                    theHousekeepingAttempt,
                                                    theHousekeepingSpecific,
                                                    theRecommendationKind,
                                                    theRecommendedActionKind,
                                                    theRecommendedActionPriority,
                                                    theRecommendedHousekeeperSpecificKind,
                                                    theRecommendedActionParameters,
                                                    theMoment,
                                                    theComputationReports);

        };
        HousekeepingRecommendation_Constructor.prototype = aHousekeepingRecommendation_Prototype;







        var HousekeepingRecommendation_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepinggeneral.HousekeepingGeneral_Prototype;

            this._v_Prototype = aHousekeepingRecommendation_Prototype;
            this._v_Type = null;

            this._v_HousekeeperSpecific  = null;
            this._v_HousekeepingMaster   = null;
            this._v_HousekeepingAttempt  = null;
            this._v_HousekeepingSpecific = null;

            this._v_RecommendedActionKind                    = null;
            this._v_RecommendedActionPriority                = null;
            this._v_RecommendedActionHousekeeperSpecificKind = null;
            this._v_RecommendedActionParameters              = null;
            this._v_ComputationReports                       = null;

        };
        HousekeepingRecommendation_SuperPrototypeConstructor.prototype = aHousekeepingRecommendation_Prototype;



        var aModule = {
            "HousekeepingRecommendation_Prototype": aHousekeepingRecommendation_Prototype,
            "HousekeepingRecommendation_Constructor": HousekeepingRecommendation_Constructor,
            "HousekeepingRecommendation_SuperPrototypeConstructor": HousekeepingRecommendation_SuperPrototypeConstructor
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


