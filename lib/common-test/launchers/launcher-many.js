'use strict';

/*
 launcher-many.js
 Created 201408241902
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



(function() {

    var aMod_definer = function( theM_firsttorun,
                                 theM_launchermanyorone,
                                 theM_shared_identifier,
                                 theM_shared_recorder,
                                 theM_launcherone,
                                 theM_specloader,
                                 theM_nextticker,
                                 theM_exiter,
                                 theM_cmpandtestspathsloader,
                                 theM_sentinels,
                                 theM_overrider,
                                 theM_specscannermany,
                                 theM_housekeeper_master,
                                 theM_snapshottermemory,
                                 theM_snapshottermemory_fake,
                                 theM_housekeepconstants,
                                 theM_housekeeputils,
                                 theM_cleanupconstants) {


        var ModuleName     = "launcher-many";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.LAUNCHABLESNAME        = "/launchables.json";
            theToInit.LAUNCHABLESBASE        = "launchables";
            theToInit.LAUNCHABLESPOSTFIX     = ".json";

            theToInit.LAUNCHABLESFORCERRNAME = "/launchables-forcerr.json";
            theToInit.LAUNCHABLESFORCERRBASE = "launchables";
            theToInit.LAUNCHABLESFORCERRFRAGMENT = "-forcerr";


            theToInit.READTESTHOUSEKEEPING_ASYNC = true;
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






        var aLauncherManyTest_Prototype = (function() {


            var aPrototype = new theM_launchermanyorone.LauncherManyOrOneTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_launchermanyorone.LauncherManyOrOneTest_Prototype;


            aPrototype._v_Type = "LauncherMany";


            aPrototype._v_SuppliedSpecsSource   = null;

            aPrototype._v_Identifier = null;
            aPrototype._v_Recorder   = null;

            aPrototype._v_Specscanner = null;

            aPrototype._v_SynthetizedConfigSpecsOrPaths  = null;

            aPrototype._v_SubLaunchers = null;

            aPrototype._v_AlreadyLaunched = null;






            var _pInit = function( theIsFirst,
                                   theParentLauncher,
                                   theTitle,
                                   theConfigSpecsOrPathsOrListPath,
                                   theLauncherIdentifier,
                                   theLauncherRecorder,
                                   theRunOptions,
                                   theIdentifier,
                                   theRecorder,
                                   theSnapshottersByKind,
                                   theHousekeeper,
                                   theHousekeepOptions,
                                   theReleasingOptions,
                                   theAlreadyScannedByPath) {

                this._pInit_LauncherMany( theIsFirst,
                                          theParentLauncher,
                                          theTitle,
                                          theConfigSpecsOrPathsOrListPath,
                                          theLauncherIdentifier,
                                          theLauncherRecorder,
                                          theRunOptions,
                                          theIdentifier,
                                          theRecorder,
                                          theSnapshottersByKind,
                                          theHousekeeper,
                                          theHousekeepOptions,
                                          theReleasingOptions,
                                          theAlreadyScannedByPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;










            var _pInit_LauncherMany = function( theIsFirst,
                                                theParentLauncher,
                                                theTitle,
                                                theConfigSpecsOrPathsOrListPath,
                                                theLauncherIdentifier,
                                                theLauncherRecorder,
                                                theRunOptions,
                                                theIdentifier,
                                                theRecorder,
                                                theSnapshottersByKind,
                                                theHousekeeper,
                                                theHousekeepOptions,
                                                theReleasingOptions,
                                                theAlreadyScannedByPath) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_LauncherManyOrOne.apply( this, [ theIsFirst,
                                                                               theParentLauncher,
                                                                               theTitle,
                                                                               theConfigSpecsOrPathsOrListPath,
                                                                               theLauncherIdentifier,
                                                                               theLauncherRecorder,
                                                                               theRunOptions,
                                                                               theIdentifier,
                                                                               theRecorder,
                                                                               theSnapshottersByKind,
                                                                               theHousekeeper,
                                                                               theHousekeepOptions,
                                                                               theReleasingOptions,
                                                                               theAlreadyScannedByPath]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Specscanner = null;

                this._v_SynthetizedConfigSpecsOrPaths = null;

                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];

                this._v_ReleasingChecker = null;

            };
            if( _pInit_LauncherMany){}/* CQT */
            aPrototype._pInit_LauncherMany = _pInit_LauncherMany;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_LauncherMany( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;






            var _pRelease_LauncherMany = function( theReleaseParms, theReleaseDone) {
                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */


                this._v_Identifier = undefined;
                this._v_Recorder   = undefined;

                if( this._v_Specscanner) {

                    if( this._v_Specscanner._pRelease && ( typeof this._v_Specscanner._pRelease == "function")) {
                        this._v_Specscanner._pRelease( theReleaseParms, theReleaseDone);
                    }
                }
                this._v_Specscanner = undefined;

                this._v_SynthetizedConfigSpecsOrPaths  = undefined;

                if( this._v_SubLaunchers) {
                    var aNumSubLaunchers = this._v_SubLaunchers.length;
                    for( var aSubLauncherIdx=0; aSubLauncherIdx < aNumSubLaunchers; aSubLauncherIdx++) {

                        var aSubLauncher = this._v_SubLaunchers[ aSubLauncherIdx];
                        if( aSubLauncher) {

                            if( aSubLauncher._pRelease && ( typeof aSubLauncher._pRelease == "function")) {
                                aSubLauncher._pRelease( theReleaseParms, theReleaseDone);
                            }
                        }
                    }
                }

                this._v_SubLaunchers = undefined;

                this._v_AlreadyLaunched = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_LauncherManyOrOne.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_LauncherMany){}/* CQT */
            aPrototype._pRelease_LauncherMany = _pRelease_LauncherMany;








            var fIsLauncherMany = function() {

                return true;
            };
            if( fIsLauncherMany){}/* CQT */
            aPrototype.fIsLauncherMany = fIsLauncherMany;











            var fSubLaunchers = function() {

                if( !this._v_SubLaunchers) {
                    return null;
                }

                return this._v_SubLaunchers.slice();
            };
            if( fSubLaunchers){}/* CQT */
            aPrototype.fSubLaunchers = fSubLaunchers;











            var pCleanUpSomeWhatFromLauncher = function( theWhatToClean,
                                             theActionableRecommendation,
                                             theHousekeepingAttempt,
                                             theHousekeeping,
                                             theLauncherMany,
                                             theIsFirst,
                                             theLastSubLauncher,
                                             theReleaseParms,
                                             theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }


                if( !this._v_IsFirst) {
                    return;
                }


                if( !theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_FIRST)) {
                    return;
                }




                if( theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_CALLBACKS)) {

                    var aRootCallback = null;
                    if( this._v_Callback) {

                        if( this._v_Callback.fRootCallback && ( typeof this._v_Callback.fRootCallback == "function")) {

                            aRootCallback = this._v_Callback.fRootCallback();
                        }


                        if( aRootCallback) {


                            aRootCallback.pCleanUpCallback(
                                theWhatToClean,
                                theReleaseParms,
                                theReleaseDone
                            );


                        }
                    }
                }






                if( theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_EVENTS)) {

                    if( this._v_Recorder) {

                        this._v_Recorder.pCleanUpTestRecords(
                            theWhatToClean,
                            theReleaseParms,
                            theReleaseDone,
                            null, /* theAfterRecorderSnapshot */
                            null  /* theBeforeRecorderSnapshot */
                        );

                    }
                }



            };
            if( pCleanUpSomeWhatFromLauncher){}/* CQT */
            aPrototype.pCleanUpSomeWhatFromLauncher = pCleanUpSomeWhatFromLauncher;














            var pSL_initSnapshotters = function( theCallback) {

                var aMethodName = "pSL_initSnapshotters";

                if( !this._v_IsFirst) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this._v_IsFirst", null));
                    return;
                }


                if( this._v_Housekeeper) {
                    this._v_Housekeeper.pInitSnapshotters();
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, null, null));

            };
            if( pSL_initSnapshotters){}/* CQT */
            aPrototype.pSL_initSnapshotters = pSL_initSnapshotters;














            var pSL_synthetizespecs = function( theCallback) {

                var aMethodName = "pSL_synthetizespecs";


                this._v_SynthetizedConfigSpecsOrPaths = null;



                if( this._v_Housekeeper) {
                    if( this._v_IsFirst) {
                        this._v_Housekeeper.pGrabHousekeepingSnapshot_before_loadSpecs( this, this._v_IsFirst);
                    }
                }



                this._v_Specscanner = new theM_specscannermany.SpecscannerManyTest_Constructor(
                    "SpecscannerFor-" + this._v_Title,
                    this._v_SuppliedSpecsSource,
                    this._v_LauncherIdentifier,
                    this._v_LauncherRecorder,
                    this._v_RunOptions,
                    true, /* theIsTopScanner */
                    this._v_AlreadyScannedByPath);


                var aCallback = this.fSynthetizeConfigSpecsAsyncCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEPS_FAIL, null, "!this.fSpecscanAsyncCallback( theCallback)", null));
                    return;
                }




                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionSynthetizeConfigSpecsAsyncHandler( aCallback);

                try {
                    this._v_Specscanner.pF_SpecscannerMany( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }


            };
            if( pSL_synthetizespecs){}/* CQT */
            aPrototype.pSL_synthetizespecs = pSL_synthetizespecs;











            var fSynthetizeConfigSpecsAsyncCallback = function( theCallback) {
                var aMethodName = "fSynthetizeConfigSpecsAsyncCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( this._v_Housekeeper) {
                        if( this._v_IsFirst) {
                            this._v_Housekeeper.pGrabHousekeepingSnapshot_after_loadSpecs( this, this._v_IsFirst);
                        }
                    }


                    if( theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_SYNTHETIZESPEC_FAIL, null, theError, null));
                        return;
                    }


                    if( theResult == null) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_FAIL, null, "theResult == null", null));
                        return;
                    }

                    if( typeof theResult == "string") {
                        aThis._v_SynthetizedConfigSpecsOrPaths = [ theResult];
                    }
                    else {
                        if( !( typeof theResult == "object")) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_FAIL, null, "!( typeof theResult == 'object')", null));
                            return;
                        }

                        if( typeof theResult.length == "undefined") {
                            aThis._v_SynthetizedConfigSpecsOrPaths = [ theResult];
                        }
                        else {
                            aThis._v_SynthetizedConfigSpecsOrPaths = theResult;
                        }
                    }

                    theCallback();

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fSynthetizeConfigSpecsAsyncCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fSynthetizeConfigSpecsAsyncCallback){}/* CQT */
            aPrototype.fSynthetizeConfigSpecsAsyncCallback = fSynthetizeConfigSpecsAsyncCallback;









            var fExceptionSynthetizeConfigSpecsAsyncHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_READSPEC_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionSynthetizeConfigSpecsAsyncHandler){}/* CQT */
            aPrototype.fExceptionSynthetizeConfigSpecsAsyncHandler = fExceptionSynthetizeConfigSpecsAsyncHandler;






















            var pInitFinderToScheduleNext = function() {
                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];
            };
            if( pInitFinderToScheduleNext){}/* CQT */
            aPrototype.pInitFinderToScheduleNext = pInitFinderToScheduleNext;










            var pTryToScheduleNextSpecOrPath = function( theCallback) {
                var aMethodName = "pTryToScheduleNextSpecOrPath";
                if( aMethodName){}/* CQT */

                var aSpecOrPathToScheduleNext = this.fFindSpecOrPathToScheduleNext();
                if( !aSpecOrPathToScheduleNext) {
                    theCallback();
                    return;
                }

                this._v_AlreadyLaunched.push( aSpecOrPathToScheduleNext);

                this.pScheduleNextSpecOrPath( theCallback, aSpecOrPathToScheduleNext);
            };
            if( pTryToScheduleNextSpecOrPath){}/* CQT */
            aPrototype.pTryToScheduleNextSpecOrPath = pTryToScheduleNextSpecOrPath;










            var fFindSpecOrPathToScheduleNext = function() {

                if( !this._v_SynthetizedConfigSpecsOrPaths) {
                    return null;
                }

                var aNumSpecsOrPaths = this._v_SynthetizedConfigSpecsOrPaths.length;
                if( !aNumSpecsOrPaths) {
                    return null;
                }

                if( this._v_AlreadyLaunched == null) {
                    return null;
                }

                var aNumAlreadyScheduled = this._v_AlreadyLaunched.length;
                if( aNumAlreadyScheduled >= aNumSpecsOrPaths) {
                    return null;
                }


                var aPendingSpecOrPath = this._v_SynthetizedConfigSpecsOrPaths[ aNumAlreadyScheduled];
                if( !aPendingSpecOrPath) {
                    return null;
                }

                return aPendingSpecOrPath;

            };
            if( fFindSpecOrPathToScheduleNext){}/* CQT */
            aPrototype.fFindSpecOrPathToScheduleNext = fFindSpecOrPathToScheduleNext;










            var fMustLaunchSpecPathAsMany = function( theSpecPath) {

                if( !( typeof theSpecPath == "string")) {
                    return false;
                }

                if( ( ( theSpecPath.indexOf( this.LAUNCHABLESNAME) >= 0) || ( theSpecPath.indexOf( this.LAUNCHABLESFORCERRNAME) >= 0)))  {
                    return true;
                }

                if( ( ( theSpecPath.indexOf( this.LAUNCHABLESBASE) >= 0) &&  ( theSpecPath.indexOf( this.LAUNCHABLESPOSTFIX) >= 0)))  {
                    return true;
                }

                var aMustLaunchSpecPathAsMany = false;
                if( ( ( theSpecPath.indexOf( this.LAUNCHABLESFORCERRBASE) >= 0) &&
                    ( theSpecPath.indexOf( this.LAUNCHABLESFORCERRFRAGMENT) >= 0) &&
                    ( theSpecPath.indexOf( this.LAUNCHABLESPOSTFIX) >= 0)))  {
                    aMustLaunchSpecPathAsMany = true;
                }
                if( aMustLaunchSpecPathAsMany){}/* CQT */

                return aMustLaunchSpecPathAsMany;
            };
            if( fMustLaunchSpecPathAsMany){}/* CQT */
            aPrototype.fMustLaunchSpecPathAsMany = fMustLaunchSpecPathAsMany;










            var pScheduleNextSpecOrPath = function( theCallback, theSpecOrPath) {

                var aMethodName = "pScheduleNextSpecOrPath";

                if( !theSpecOrPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!theSpecsOrPathModuleOrName", null));
                    return;
                }

                if( !( typeof theSpecOrPath == "string") && !( typeof theSpecOrPath == "object")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!!( typeof theSpecOrPath == 'string') || !( typeof theSpecOrPath == 'objetc')", null));
                    return;
                }


                var aTitle = theSpecOrPath;
                if( ( typeof aTitle == "object") && aTitle.name) {
                    aTitle = aTitle.name;
                }








                var aRunOptionsWoSynthetic = this._v_RunOptions;
                if( aRunOptionsWoSynthetic && aRunOptionsWoSynthetic[ "synthetic"]) {
                    aRunOptionsWoSynthetic = {};
                    var aRunOptions = this._v_RunOptions;
                    Object.keys( aRunOptions).forEach( function( theKey) {
                        if( !( theKey == "synthetic")) {
                            aRunOptionsWoSynthetic[ theKey] = aRunOptions[ theKey];
                        }
                    });
                }





                var aLauncherAndMethod = null;

                if( typeof theSpecOrPath == "string")  {
                    if( this.fMustLaunchSpecPathAsMany( theSpecOrPath))  {
                        aLauncherAndMethod = LauncherManyFactory(
                            false, /* theIsFirst */
                            this,
                            aTitle,
                            theSpecOrPath,
                            this._v_LauncherIdentifier,
                            this._v_LauncherRecorder,
                            aRunOptionsWoSynthetic,
                            this._v_Identifier,
                            this._v_Recorder,
                            this._v_SnapshottersByKind,
                            this._v_Housekeeper,
                            this._v_HousekeepOptions,
                            this._v_ReleasingOptions,
                            this._v_CleanUpOptions,
                            this._v_AlreadyScannedByPath
                        );
                    }
                    else {
                        aLauncherAndMethod = theM_launcherone.LauncherOneFactory(
                            false, /* theIsFirst */
                            this,
                            aTitle,
                            theSpecOrPath,
                            this._v_LauncherIdentifier,
                            this._v_LauncherRecorder,
                            aRunOptionsWoSynthetic,
                            this._v_Identifier,
                            this._v_Recorder,
                            this._v_SnapshottersByKind,
                            this._v_Housekeeper,
                            this._v_HousekeepOptions,
                            this._v_ReleasingOptions,
                            this._v_CleanUpOptions,
                            this._v_AlreadyScannedByPath
                        );
                    }
                }
                else {
                    if( !( typeof theSpecOrPath.length == "undefined")) {
                        aLauncherAndMethod = LauncherManyFactory(
                            false, /* theIsFirst */
                            this,
                            aTitle,
                            theSpecOrPath,
                            this._v_LauncherIdentifier,
                            this._v_LauncherRecorder,
                            aRunOptionsWoSynthetic,
                            this._v_Identifier,
                            this._v_Recorder,
                            this._v_SnapshottersByKind,
                            this._v_Housekeeper,
                            this._v_HousekeepOptions,
                            this._v_ReleasingOptions,
                            this._v_CleanUpOptions,
                            this._v_AlreadyScannedByPath
                        );
                    }
                    else {
                        aLauncherAndMethod = theM_launcherone.LauncherOneFactory(
                            false, /* theIsFirst */
                            this,
                            aTitle,
                            theSpecOrPath,
                            this._v_LauncherIdentifier,
                            this._v_LauncherRecorder,
                            aRunOptionsWoSynthetic,
                            this._v_Identifier,
                            this._v_Recorder,
                            this._v_SnapshottersByKind,
                            this._v_Housekeeper,
                            this._v_HousekeepOptions,
                            this._v_ReleasingOptions,
                            this._v_CleanUpOptions,
                            this._v_AlreadyScannedByPath
                        );
                    }
                }



                if( !aLauncherAndMethod) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!LauncherManyFactory() && !theM_launcherone.LauncherOneFactory()", null));
                    return;
                }




                var aLauncher = aLauncherAndMethod[ "launcher"];
                if( !aLauncher) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!theM_launcherone.LauncherOneFactory().launcher", null));
                }


                var aMethod = aLauncherAndMethod[ "method"];
                if( !aMethod) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!theM_launcherone.LauncherOneFactory().method", null));
                    return;
                }

                if( !( typeof aMethod == "function")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!( typeof theM_launcherone.LauncherOneFactory().method == 'function)", null));
                    return;
                }



                this._v_SubLaunchers.push( aLauncher);




                var aCallback = this.fScheduleNextLauncherCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!this.fScheduleNextLauncherCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextLauncherHandler( aCallback);

                try {
                    aMethod( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }


            };
            if( pScheduleNextSpecOrPath){}/* CQT */
            aPrototype.pScheduleNextSpecOrPath = pScheduleNextSpecOrPath;













            var fScheduleNextLauncherCallback = function( theCallback) {
                var aMethodName = "fScheduleNextLauncherCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    var aRecordFail = null;
                    if( theError) {
                        aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, this.LAUEVKIND_FAIL, null, theError, null);
                    }


                    if( this._v_Housekeeper) {

                        var aLastSubLauncher = null;
                        if( this._v_SubLaunchers) {
                            var aNumSubLaunchers = this._v_SubLaunchers.length;
                            if( aNumSubLaunchers) {
                                aLastSubLauncher = this._v_SubLaunchers[ aNumSubLaunchers - 1];
                            }
                        }


                        var aHousekeeping = this._v_Housekeeper.fHousekeep_from_LauncherMany_AfterScheduleSubLauncher( this, this._v_IsFirst, aLastSubLauncher);
                        if( aHousekeeping) {

                            if( aHousekeeping._v_HousekeepingPerformed) {

                                if( aHousekeeping._v_GiveUp) {

                                    var aRecordFailGiveUp = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_HOUSEKEEPGIVEUP, null, aLastSubLauncher, aHousekeeping);

                                    if( aRecordFail) {
                                        if( theCallback) {
                                            theCallback( aRecordFail);
                                        }
                                    }
                                    else {
                                        if( theCallback) {
                                            theCallback( aRecordFailGiveUp);
                                        }
                                    }
                                    return;
                                }

                                if( !aHousekeeping._v_HousekeepingSuccess) {

                                    var aRecordFailNotSuccess = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_HOUSEKEEPFAILED, null, aLastSubLauncher, aHousekeeping);

                                    if( aRecordFail) {
                                        if( theCallback) {
                                            theCallback( aRecordFail);
                                        }
                                    }
                                    else {
                                        if( theCallback) {
                                            theCallback( aRecordFailNotSuccess);
                                        }
                                    }
                                    return;
                                }
                            }
                        }
                    }


                    if( aRecordFail) {
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_OK, null, null, null);


                    aThis.pTryToScheduleNextSpecOrPath( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fScheduleNextLauncherCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fScheduleNextLauncherCallback){}/* CQT */
            aPrototype.fScheduleNextLauncherCallback = fScheduleNextLauncherCallback;









            var fExceptionNextLauncherHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextLauncherHandler){}/* CQT */
            aPrototype.fExceptionNextLauncherHandler = fExceptionNextLauncherHandler;





















            var fOverallLauncherManyCallback = function( theCallback) {
                var aMethodName = "fOverallLauncherManyCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    var aRecordFail = null;
                    if( theError) {
                        aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_FAIL, null, theError, null);
                    }

                    if( this._v_Housekeeper) {

                        var aHousekeeping = this._v_Housekeeper.fHousekeep_from_LauncherMany_Overall( this, this._v_IsFirst);
                        if( aHousekeeping) {

                            if( aHousekeeping._v_HousekeepingPerformed) {

                                if( aHousekeeping._v_GiveUp) {
                                    var aRecordFailGiveUp = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_HOUSEKEEPGIVEUP, null, null, aHousekeeping);

                                    if( aRecordFail) {
                                        if( theCallback) {
                                            theCallback( aRecordFail);
                                        }
                                    }
                                    else {
                                        if( theCallback) {
                                            theCallback( aRecordFailGiveUp);
                                        }
                                    }
                                    return;
                                }

                                if( !aHousekeeping._v_HousekeepingSuccess) {
                                    var aRecordFailNotSuccess = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_HOUSEKEEPFAILED, null, null, aHousekeeping);

                                    if( theError && aRecordFail) {
                                        if( theCallback) {
                                            theCallback( aRecordFail);
                                        }
                                    }
                                    else {
                                        if( theCallback) {
                                            theCallback( aRecordFailNotSuccess);
                                        }
                                    }
                                    return;
                                }
                            }
                        }
                    }




                    if( aRecordFail) {
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }


                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_OK, null, null, null));


                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fOverallLauncherManyCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fOverallLauncherManyCallback){}/* CQT */
            aPrototype.fOverallLauncherManyCallback = fOverallLauncherManyCallback;












            var fOverallExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_FAIL, null, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallExceptionHandler){}/* CQT */
            aPrototype.fOverallExceptionHandler = fOverallExceptionHandler;










            var pSL_launchMany = function( theCallback) {
                var aMethodName = "pSL_launchMany";

                this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_BEGIN, null, null, null);


                if(  this._v_RunOptions && this._v_RunOptions[ "synthetic"] && this._v_RunOptions[ "dryRun"]) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "dryRun", null));
                    return;
                }


                var aExceptionHandler = this.fOverallExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallLauncherManyCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fOverallLauncherManyCallback( theCallback)", null));
                        return;
                    }




                    this.pInitFinderToScheduleNext();



                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToScheduleNextSpecOrPath( aCallback);
                            }
                            catch( anException) {
                                aExceptionHandler( anException);
                            }
                        }
                    );

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pSL_launchMany){}/* CQT */
            aPrototype.pSL_launchMany = pSL_launchMany;










            var pSL_verbosePlan = function( theCallback) {
                var aMethodName = "pSL_verbosePlan";

                if( !theCallback) {
                    return;
                }
                
                if( !this._v_IsFirst) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this._v_IsFirst", null));
                    return;
                }

                if( !this._v_RunOptions || !this._v_RunOptions[ "synthetic"] || !this._v_RunOptions[ "verbosePlan"]) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this._v_RunOptions[ 'verbosePlan'']", null));
                    return;
                }
                

                var aVerbosePlanList = this._v_SynthetizedConfigSpecsOrPaths;

                if( ( typeof aVerbosePlanList== "object") && !( typeof aVerbosePlanList.length == "number")) {
                    aVerbosePlanList = [ aVerbosePlanList]
                }

                var aPlanStr = JSON.stringify( aVerbosePlanList, null, 4);

                console.log( "," + aPlanStr);

                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, null, null));

            };
            if( pSL_verbosePlan){}/* CQT */
            aPrototype.pSL_verbosePlan = pSL_verbosePlan;











            var fBoundTestStepFunctions = function() {

                var someTestFunctions = [
                    this.pSL_loadcmpandtestspaths.bind( this),
                    this.pSL_initSnapshotters.bind( this),
                    this.pSL_initReleasingChecker.bind( this),
                    this.pSL_initCleanUpChecker.bind( this),
                    this.pSL_synthetizespecs.bind( this),
                    this.pSL_verbosePlan.bind( this),
                    this.pSL_launchMany.bind( this)
                ];
                if( someTestFunctions){}/* CQT */

                return someTestFunctions;
            };
            if( fBoundTestStepFunctions){}/* CQT */
            aPrototype.fBoundTestStepFunctions = fBoundTestStepFunctions;









            var pF_LauncherMany = function( theCallback) {

                var aMethodName = "pF_LauncherOne";

                this.pF_LauncherManyOrOne( theCallback, aMethodName);
            };
            if( pF_LauncherMany){}/* CQT */
            aPrototype.pF_LauncherMany = pF_LauncherMany;









            return aPrototype;

        })();




        var LauncherManyTest_Constructor = function( theIsFirst,
                                                     theParentLauncher,
                                                     theTitle,
                                                     theConfigSpecsOrPathsOrListPath,
                                                     theLauncherIdentifier,
                                                     theLauncherRecorder,
                                                     theRunOptions,
                                                     theIdentifier,
                                                     theRecorder,
                                                     theSnapshottersByKind,
                                                     theHousekeeper,
                                                     theHousekeepOptions,
                                                     theReleasingOptions,
                                                     theCleanUpOptions,
                                                     theAlreadyScannedByPath) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_launchermanyorone.LauncherManyOrOneTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Identifier  = null;
            this._v_Recorder    = null;

            this._v_Specscanner = null;

            this._v_SynthetizedConfigSpecsOrPaths = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;

            this._v_ReleasingOptions = null;

            this._v_ReleasingChecker = null;

            this._pInit_LauncherMany( theIsFirst,
                                      theParentLauncher,
                                      theTitle,
                                      theConfigSpecsOrPathsOrListPath,
                                      theLauncherIdentifier,
                                      theLauncherRecorder,
                                      theRunOptions,
                                      theIdentifier,
                                      theRecorder,
                                      theSnapshottersByKind,
                                      theHousekeeper,
                                      theHousekeepOptions,
                                      theReleasingOptions,
                                      theCleanUpOptions,
                                      theAlreadyScannedByPath);
        };
        LauncherManyTest_Constructor.prototype = aLauncherManyTest_Prototype;





        var LauncherManyTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_launchermanyorone.LauncherManyOrOneTest_Prototype;

            this._v_Prototype = aLauncherManyTest_Prototype;
            this._v_Type = null;

            this._v_Identifier = null;
            this._v_Recorder   = null;

            this._v_Specscanner = null;

            this._v_SynthetizedConfigSpecsOrPaths = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;

            this._v_ReleasingOptions = null;

            this._v_ReleasingChecker = null;

            this._v_SnapshottersByKind = null;

        };
        LauncherManyTest_SuperPrototypeConstructor.prototype = aLauncherManyTest_Prototype;











        var LauncherManyFactory = function( theIsFirst,
                                            theParentLauncher,
                                            theTitle,
                                            theConfigSpecsOrPathsOrListPath,
                                            theLauncherIdentifier,
                                            theLauncherRecorder,
                                            theRunOptions,
                                            theIdentifier,
                                            theRecorder,
                                            theSnapshottersByKind,
                                            theHousekeeper,
                                            theHousekeepOptions,
                                            theReleasingOptions,
                                            theCleanUpOptions,
                                            theAlreadyScannedByPath) {

            var aLauncherMany = new LauncherManyTest_Constructor( theIsFirst,
                                                                  theParentLauncher,
                                                                  theTitle,
                                                                  theConfigSpecsOrPathsOrListPath,
                                                                  theLauncherIdentifier,
                                                                  theLauncherRecorder,
                                                                  theRunOptions,
                                                                  theIdentifier,
                                                                  theRecorder,
                                                                  theSnapshottersByKind,
                                                                  theHousekeeper,
                                                                  theHousekeepOptions,
                                                                  theReleasingOptions,
                                                                  theCleanUpOptions,
                                                                  theAlreadyScannedByPath);

            var aMethod = aLauncherMany.pF_LauncherMany.bind( aLauncherMany);

            return { "launcher": aLauncherMany, "method": aMethod};
        };













        var fDefineLauncherMany_andRunIfFirst = function( theTitle,
                                                          theConfigSpecsOrPathsOrListPath,
                                                          theLauncherIdentifier,
                                                          theLauncherRecorder,
                                                          theRunOptions,
                                                          theIdentifier,
                                                          theRecorder,
                                                          theSnapshottersByKind,
                                                          theHousekeeper,
                                                          theHousekeepOptions,
                                                          theReleasingOptions,
                                                          theCleanUpOptions,
                                                          theAlreadyScannedByPath) {

            var aLastLauncher = null;


            var FirstLauncherManyFactory = function( theIsFirst) {

                var aLauncherAndMethod =  LauncherManyFactory(
                    theIsFirst,
                    null,
                    theTitle,
                    theConfigSpecsOrPathsOrListPath,
                    theLauncherIdentifier,
                    theLauncherRecorder,
                    theRunOptions,
                    theIdentifier,
                    theRecorder,
                    theSnapshottersByKind,
                    theHousekeeper,
                    theHousekeepOptions,
                    theReleasingOptions,
                    theCleanUpOptions,
                    theAlreadyScannedByPath
                );
                if( aLauncherAndMethod) {
                    aLastLauncher = aLauncherAndMethod[ "launcher"];
                }

                return aLauncherAndMethod;
            };



            var aModule = {
                "LauncherFactory": LauncherManyFactory
            };
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;




            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }
                        if( aLastLauncher) {
                            aLastLauncher.fRecord( "LauncherMany", aLastLauncher._v_LauncherId, aLastLauncher, theTitle, aLastLauncher.LAUEVKIND_EXIT, anExitCode, theError, null);
                        }
                        else {
                            var anExitRecord = { "launcher": theTitle, "EXIT": anExitCode};
                            console.log( "," + JSON.stringify( anExitRecord));
                        }
                        theM_exiter.p_Exit( anExitCode);
                    };


                    var aLauncherAndMethod = FirstLauncherManyFactory( true /* theIsFirst */);
                    if( !aLauncherAndMethod) {
                        aCallback( "!FirstLauncherManyFactory()");
                        return;
                    }

                    var aMethod = aLauncherAndMethod[ "method"];
                    if( !aMethod) {
                        aCallback( "!FirstLauncherManyFactory().method");
                        return;
                    }

                    aMethod( aCallback);
                })()
            }




            return aModule;

        };













        var aModule = {
            "LauncherManyTest_Prototype": aLauncherManyTest_Prototype,
            "LauncherManyTest_Constructor": LauncherManyTest_Constructor,
            "LauncherManyTest_SuperPrototypeConstructor": LauncherManyTest_SuperPrototypeConstructor,

            "LauncherManyFactory": LauncherManyFactory,

            "fDefineLauncherMany_andRunIfFirst":  fDefineLauncherMany_andRunIfFirst
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

            var aM_firsttorun             = require('./firsttorun');
            var aM_launchermanyorone        = require('./launcher-many-or-one');
            var aM_shared_identifier      = require('./shared-identifier');
            var aM_shared_recorder        = require('./shared-recorder');
            var aM_launcherone            = require('./launcher-one');
            var aM_specloader             = require('../resloader/specloader');
            var aM_nextticker             = require('../../infrasvcs/nextticker/nextticker');
            var aM_exiter                 = require('../../infrasvcs/exiter/exiter');
            var aM_cmpandtestspathsloader = require('../pathsloader/cmpandtestspathsloader');
            var aM_sentinels              = require('../sentinels');
            var aM_overrider              = require('../overrider');
            var aM_specscannermany        = require('./specscanner-many');
            var aM_housekeeper_master     = require('../housekeep/housekeeper-master');
            var aM_snapshottermemory      = require('../housekeep/snapshotter-memory');
            var aM_snapshottermemory_fake = require('../housekeep/snapshotter-memory-fake');
            var aM_housekeepconstants     = require('../housekeep/housekeep-constants');
            var aM_housekeeputils         = require('../housekeep/housekeep-utils');
            var aM_cleanupconstants       = require('../cleanup/cleanup-constants');

            return aMod_definer(
                aM_firsttorun,
                aM_launchermanyorone,
                aM_shared_identifier,
                aM_shared_recorder,
                aM_launcherone,
                aM_specloader,
                aM_nextticker,
                aM_exiter,
                aM_cmpandtestspathsloader,
                aM_sentinels,
                aM_overrider,
                aM_specscannermany,
                aM_housekeeper_master,
                aM_snapshottermemory,
                aM_snapshottermemory_fake,
                aM_housekeepconstants,
                aM_housekeeputils,
                aM_cleanupconstants
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./firsttorun",
            "./launcher-many-or-one",
            "./shared-identifier",
            "./shared-recorder",
            "./launcher-one",
            "../resloader/specloader",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/exiter/exiter",
            "../pathsloader/cmpandtestspathsloader",
            "../sentinels",
            "../overrider",
            "./specscanner-many",
            "../housekeep/housekeeper-master",
            "../housekeep/snapshotter-memory",
            "../housekeep/snapshotter-memory-fake",
            "../housekeep/housekeep-constants",
            "../housekeep/housekeep-utils",
            "../cleanup/cleanup-constants"
        ], function (
                theM_firsttorun,
                theM_launchermanyorone,
                theM_shared_identifier,
                theM_shared_recorder,
                theM_launcherone,
                theM_specloader,
                theM_nextticker,
                theM_exiter,
                theM_cmpandtestspathsloader,
                theM_sentinels,
                theM_overrider,
                theM_specscannermany,
                theM_housekeeper_master,
                theM_snapshottermemory,
                theM_snapshottermemory_fake,
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_cleanupconstants
            ) {
            return aMod_definer(
                theM_firsttorun,
                theM_launchermanyorone,
                theM_shared_identifier,
                theM_shared_recorder,
                theM_launcherone,
                theM_specloader,
                theM_nextticker,
                theM_exiter,
                theM_cmpandtestspathsloader,
                theM_sentinels,
                theM_overrider,
                theM_specscannermany,
                theM_housekeeper_master,
                theM_snapshottermemory,
                theM_snapshottermemory_fake,
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_cleanupconstants
            );
        });
    }

})();

