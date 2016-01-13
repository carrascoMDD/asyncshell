'use strict';

/*
 housekeeper-specific.js
 Creado 201504081447
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
                                 theM_housekeepergeneral,
                                 theM_overrider) {

        var ModuleName     = "housekeeper-specific";
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







        var aHousekeeperSpecific_Prototype = (function() {


            var aPrototype = new theM_housekeepergeneral.HousekeeperGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepergeneral.HousekeeperGeneral_Prototype;

            aPrototype._v_Type = "HousekeeperSpecific";


            aPrototype._v_HousekeeperMaster = null;

            aPrototype._v_Snapshotter       = null;

            aPrototype._v_Snapshots         = null;
            aPrototype._v_SnapshotsByMoment = null;





            var _pInit = function( theTitle,
                                   theHousekeeperIdentifier,
                                   theHousekeeperRecorder,
                                   theHousekeepOptions,
                                   theHousekeptLauncher,
                                   theHousekeeperMaster,
                                   theSnapshotter) {

                this._pInit_HousekeeperSpecific( theTitle,
                                                 theHousekeeperIdentifier,
                                                 theHousekeeperRecorder,
                                                 theHousekeepOptions,
                                                 theHousekeptLauncher,
                                                 theHousekeeperMaster,
                                                 theSnapshotter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeeperSpecific = function( theTitle,
                                                       theHousekeeperIdentifier,
                                                       theHousekeeperRecorder,
                                                       theHousekeepOptions,
                                                       theHousekeptLauncher,
                                                       theHousekeeperMaster,
                                                       theSnapshotter) {


                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_HousekeeperGeneral.apply( this, [ theTitle,
                                                                                theHousekeeperIdentifier,
                                                                                theHousekeeperRecorder,
                                                                                theHousekeepOptions,
                                                                                theHousekeptLauncher]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_HousekeeperKind = theM_housekeepconstants.HOUSEKEEPERKIND_SPECIFIC;

                this._v_HousekeeperMaster = theHousekeeperMaster;

                this._v_Snapshotter = theSnapshotter;

                this._v_Snapshots         = [ ];
                this._v_SnapshotsByMoment = { };

                if( this._v_HousekeeperMaster){}/* CQT */
                if( this._v_HousekeeperKind){}/* CQT */
            };
            if( _pInit_HousekeeperSpecific){}/* CQT */
            aPrototype._pInit_HousekeeperSpecific = _pInit_HousekeeperSpecific;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeeperSpecific( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_HousekeeperSpecific = function( theReleaseParms, theReleaseDone) {

                this._v_HousekeeperMaster = undefined;
                this._v_Snapshotter       = undefined;

                this._v_Snapshots         = undefined;
                this._v_SnapshotsByMoment = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeeperSpecific.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeeperSpecific){}/* CQT */
            aPrototype._pRelease_HousekeeperSpecific = _pRelease_HousekeeperSpecific;










            var fHasFakeSnapshotter = function() {

                if( !this._v_Snapshotter) {
                    return false;
                }

                var aHasFakeSnapshots = this._v_Snapshotter.fIsFakeSnapshotter();
                if( aHasFakeSnapshots){}/* CQT */

                return aHasFakeSnapshots;
            };
            if( fHasFakeSnapshotter){}/* CQT */
            aPrototype.fHasFakeSnapshotter = fHasFakeSnapshotter;











            var pGrabHousekeepingSnapshotSpecific = function( theMoment, thetheLastSubLauncher) {

                if( !theMoment) {
                    return;
                }

                if( !this._v_Snapshotter) {
                    return;
                }

                var aSnapshot = this.fExtractSnapshotSpecificNow( theMoment, thetheLastSubLauncher);
                if( aSnapshot) {
                    this.pAddSnapshot( aSnapshot);
                }

            };
            if( pGrabHousekeepingSnapshotSpecific){}/* CQT */
            aPrototype.pGrabHousekeepingSnapshotSpecific = pGrabHousekeepingSnapshotSpecific;







            var fExtractSnapshotSpecificNow = function( theMoment, theHousekeepingAttemptIndex, theLastSubLauncher) {

                if( !theMoment) {
                    return null;
                }

                if( !this._v_Snapshotter) {
                    return null;
                }

                var aSnapshot = this._v_Snapshotter.fExtractSnapshotNow( this, theMoment, theHousekeepingAttemptIndex, theLastSubLauncher);
                if( !aSnapshot) {
                    return null;
                }

                return aSnapshot;

            };
            if( fExtractSnapshotSpecificNow){}/* CQT */
            aPrototype.fExtractSnapshotSpecificNow = fExtractSnapshotSpecificNow;










            var fFindRecentHousekeepingActionsOfThisKind = function( theBeforeHousekeeping, theNumRecentHousekeepingActions, theFindCriteria) {

                if( !theNumRecentHousekeepingActions) {
                    return null;
                }


                if( !this._v_HousekeeperMaster) {
                    return null;
                }


                var someHousekeepingActions = this._v_HousekeeperMaster.fFindRecentHousekeepingActionsOfKind(
                    theBeforeHousekeeping,
                    this._v_HousekeeperKind,
                    theNumRecentHousekeepingActions,
                    theFindCriteria
                );
                if( someHousekeepingActions){}/* CQT */

                return someHousekeepingActions;

            };
            if( fFindRecentHousekeepingActionsOfThisKind){}/* CQT */
            aPrototype.fFindRecentHousekeepingActionsOfThisKind = fFindRecentHousekeepingActionsOfThisKind;















            var fHousekeepingSpecificMatchesFindCriteria = function( theHousekeeperSpecificKind,
                                                                     theNumRecentHousekeepingActions,
                                                                     theFindCriteria,
                                                                     theHousekeepingsSpecific,
                                                                     theHousekeepingSpecificToMatch) {

                if( !theHousekeeperSpecificKind) {
                    return false;
                }

                if( !this._v_HousekeeperKind) {
                    return false;
                }

                if( !theHousekeeperSpecificKind == this._v_HousekeeperKind) {
                    return false;
                }

                if( !theHousekeepingSpecificToMatch) {
                    return false;
                }

                return false;

            };
            if( fHousekeepingSpecificMatchesFindCriteria){}/* CQT */
            aPrototype.fHousekeepingSpecificMatchesFindCriteria = fHousekeepingSpecificMatchesFindCriteria;













            var fPerformHousekeepingAttemptSpecific = function( theHousekeepingAttempt, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher) {
                if( theLauncherMany){}/* CQT */
                if( theIsFirst){}/* CQT */
                if( theLastSubLauncher){}/* CQT */

                if( !theHousekeepingAttempt) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                return null;

            };
            if( fPerformHousekeepingAttemptSpecific){}/* CQT */
            aPrototype.fPerformHousekeepingAttemptSpecific = fPerformHousekeepingAttemptSpecific;









            var fPerformRecommendedAction = function( theActionableRecommendation,
                                                      theHousekeepingAttempt,
                                                      theHousekeeping,
                                                      theLauncherMany,
                                                      theIsFirst,
                                                      theLastSubLauncher) {

                var aMethodName = "fPerformRecommendedAction";

                if( theIsFirst){}/* CQT */
                if( theLastSubLauncher){}/* CQT */

                if( !theActionableRecommendation) {
                    return true;
                }

                if( !theHousekeepingAttempt) {
                    return false;
                }

                if( !theHousekeeping) {
                    return false;
                }


                var aReasonStr = theHousekeeping._v_HousekeepingMoment;
                var aParametersStr = "";
                if( theActionableRecommendation._v_RecommendedActionParameters) {
                    try {
                        aParametersStr = JSON.stringify( theActionableRecommendation._v_RecommendedActionParameters);
                    }
                    catch( anException){}
                }
                if( aParametersStr) {
                    aReasonStr += ( " " + aParametersStr);
                }

                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_ACTIONSTARTED, theActionableRecommendation, aReasonStr, null);


                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_ACTIONPERFORMED, theActionableRecommendation, aReasonStr, null);

                return true;

            };
            if( fPerformRecommendedAction){}/* CQT */
            aPrototype.fPerformRecommendedAction = fPerformRecommendedAction;









            var fCheckPerformedHousekeepingSpecific = function( theHousekeepingCheck, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher) {
                if( theLauncherMany){}/* CQT */
                if( theIsFirst){}/* CQT */
                if( theLastSubLauncher){}/* CQT */

                if( !theHousekeepingCheck) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                return null;

            };
            if( fCheckPerformedHousekeepingSpecific){}/* CQT */
            aPrototype.fCheckPerformedHousekeepingSpecific = fCheckPerformedHousekeepingSpecific;








            var fNewSnapshot = function( theMoment) {

                var aSnapshot = {
                    "success":        false,
                    "snapshotMoment": theMoment,
                    "snapshotTime":   new Date()
                };
                if( aSnapshot){}/* CQT */

                return aSnapshot;

            };
            if( fNewSnapshot){}/* CQT */
            aPrototype.fNewSnapshot = fNewSnapshot;









            var pAddSnapshot = function( theSnapshot) {

                if( !theSnapshot) {
                    return;
                }

                if( !this._v_Snapshots) {
                    return;
                }

                if( this._v_Snapshots.indexOf( theSnapshot) >= 0) {
                    return;
                }

                this._v_Snapshots.push( theSnapshot);

                var aSnapshotMoment = theSnapshot[ "snapshotMoment"];
                if( aSnapshotMoment) {
                    this._v_SnapshotsByMoment[ aSnapshotMoment] = theSnapshot;
                }

            };
            if( pAddSnapshot){}/* CQT */
            aPrototype.pAddSnapshot = pAddSnapshot;








            return aPrototype;

        })();




        var HousekeeperSpecific_Constructor = function( theTitle,
                                                        theHousekeeperIdentifier,
                                                        theHousekeeperRecorder,
                                                        theHousekeepOptions,
                                                        theHousekeptLauncher,
                                                        theHousekeeperMaster,
                                                        theSnapshotter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepergeneral.HousekeeperSpecific_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_HousekeeperMaster = null;

            this._v_Snapshotter       = null;

            this._v_Snapshots         = null;
            this._v_SnapshotsByMoment = null;


            this._pInit_HousekeeperSpecific( theTitle,
                                             theHousekeeperIdentifier,
                                             theHousekeeperRecorder,
                                             theHousekeepOptions,
                                             theHousekeptLauncher,
                                             theHousekeeperMaster,
                                             theSnapshotter);

        };
        HousekeeperSpecific_Constructor.prototype = aHousekeeperSpecific_Prototype;





        var HousekeeperSpecific_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepergeneral.HousekeeperSpecific_Prototype;

            this._v_Prototype = aHousekeeperSpecific_Prototype;
            this._v_Type = null;

            this._v_HousekeeperMaster = null;

            this._v_Snapshotter       = null;

            this._v_Snapshots         = null;
            this._v_SnapshotsByMoment = null;

        };
        HousekeeperSpecific_SuperPrototypeConstructor.prototype = aHousekeeperSpecific_Prototype;



        var aModule = {
            "HousekeeperSpecific_Prototype": aHousekeeperSpecific_Prototype,
            "HousekeeperSpecific_Constructor": HousekeeperSpecific_Constructor,
            "HousekeeperSpecific_SuperPrototypeConstructor": HousekeeperSpecific_SuperPrototypeConstructor
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
            var aM_housekeepergeneral  = require('./housekeeper-general');
            var aM_overrider           = require('../overrider');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeepergeneral,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./housekeep-constants",
            "./housekeeper-general",
            "../overrider"
        ], function (
                theM_housekeepconstants,
                theM_housekeepergeneral,
                theM_overrider
            ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeepergeneral,
                theM_overrider
            );
        });
    }


}());


