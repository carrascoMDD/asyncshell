'use strict';

/*
 launcher-one.js
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

    var aMod_definer = function( theM_housekeepconstants,
                                 theM_housekeeputils,
                                 theM_launchermanyorone,
                                 theM_firsttorun,
                                 theM_specparser_config,
                                 theM_scheduleroot_test,
                                 theM_specloader,
                                 theM_nextticker,
                                 theM_exiter,
                                 theM_sentinels,
                                 theM_overrider) {

        var ModuleName     = "launcher-one";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.DUMPPASSABLETESTS      = false;

            theToInit.DUMPPASSEDEVENTS       = false;

            theToInit.CHECKPASSEDEVENTS      = true;

            theToInit.DUMPCHECKPASSEDEVENTS  = true;

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



        var aLauncherOne_Prototype = (function() {


            var aPrototype = new theM_launchermanyorone.LauncherManyOrOneTest_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);

            

            aPrototype._v_SuperPrototype = theM_launchermanyorone.LauncherManyOrOneTest_Prototype;


            aPrototype._v_Type = "LauncherOne";


            aPrototype._v_ConfigSpec = null;

            aPrototype._v_Configuration = null;

            aPrototype._v_RootTest = null;

            aPrototype._v_RecorderSnapshotBeforeTest = null;
            aPrototype._v_RecorderSnapshotAfterTest  = null;





            var _pInit = function( theIsFirst,
                                   theParentLauncher,
                                   theTitle,
                                   theConfigSpecOrPath,
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

                this._pInit_LauncherOne( theIsFirst,
                                         theParentLauncher,
                                         theTitle,
                                         theConfigSpecOrPath,
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
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_LauncherOne = function( theIsFirst,
                                               theParentLauncher,
                                               theTitle,
                                               theConfigSpecOrPath,
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

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_LauncherManyOrOne.apply( this, [ theIsFirst,
                                                                             theParentLauncher,
                                                                             theTitle,
                                                                             theConfigSpecOrPath,
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
                                                                             theAlreadyScannedByPath]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_ConfigSpec = null;

                this._v_Configuration = null;
                this._v_RootTest = null;

                this._v_RecorderSnapshotBeforeTest = null;
                this._v_RecorderSnapshotAfterTest  = null;

            };
            if( _pInit_LauncherOne){}/* CQT */
            aPrototype._pInit_LauncherOne = _pInit_LauncherOne;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_LauncherOne( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;






            var _pRelease_LauncherOne = function( theReleaseParms, theReleaseDone) {
                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */


                this._v_ConfigSpec = undefined;

                this._v_Configuration = undefined;

                this._v_RootTest = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_LauncherGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_LauncherOne){}/* CQT */
            aPrototype._pRelease_LauncherOne = _pRelease_LauncherOne;








            var fRootTest = function() {

                return this._v_RootTest;
            };
            if( fRootTest){}/* CQT */
            aPrototype.fRootTest = fRootTest;












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

                if( !theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_TESTSORCONFIGS)) {
                    return;
                }




                if( theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_TESTS)) {

                    if( this._v_RootTest) {

                        if( !( this._v_RootTest === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL)) {

                            this._v_RootTest.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);


                            if(  ( theWhatToClean.indexOf( theM_housekeepconstants.WHATTOCLEAN_TESTS) >= 0)) {

                                this._v_RootTest = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;
                            }
                        }
                    }
                }




                if( theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_CONFIGS)) {

                    if( this._v_Configuration) {

                        if( !( this._v_Configuration === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL)) {

                            this._v_Configuration.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);


                            if(  ( theWhatToClean.indexOf( theM_housekeepconstants.WHATTOCLEAN_CONFIGS) >= 0)) {

                                this._v_Configuration = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;
                            }
                        }
                    }
                }





            };
            if( pCleanUpSomeWhatFromLauncher){}/* CQT */
            aPrototype.pCleanUpSomeWhatFromLauncher = pCleanUpSomeWhatFromLauncher;















            var pSL_readConfig = function( theCallback) {

                if( this.READCONFIG_ASYNC) {
                    this.pSL_readConfig_async( theCallback);
                    return;
                }

                this.pSL_readConfig_sync( theCallback);
            };
            if( pSL_readConfig){}/* CQT */
            aPrototype.pSL_readConfig = pSL_readConfig;









            var pSL_readConfig_sync = function( theCallback) {

                var aMethodName = "pSL_readConfig_sync";

                if( !this._v_SuppliedSpecsSource) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!this._v_SuppliedSpecsSource", null));
                    return;
                }



                if( typeof  this._v_SuppliedSpecsSource == "object") {

                    this._v_ConfigSpec = this._v_SuppliedSpecsSource;

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, null, null));
                    return;
                }


                if( !( typeof this._v_SuppliedSpecsSource == "string")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, null, null));
                    return;
                }


                if( !this._v_SuppliedSpecsSource) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, null, null));
                    return;
                }


                this._v_ConfigSpec = null;


                var aConfigSpec = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( this._v_SuppliedSpecsSource);


                if( aConfigSpec == null) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "aConfigSpec == null", null));
                    return;
                }


                if( !( typeof aConfigSpec == "object")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!( typeof aConfigSpec == 'object')", null));
                    return;
                }


                this._v_ConfigSpec = aConfigSpec;

                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, this._v_ConfigSpec, null, null));
            };
            if( pSL_readConfig_sync){}/* CQT */
            aPrototype.pSL_readConfig_sync = pSL_readConfig_sync;









            var pSL_readConfig_async = function( theCallback) {

                var aMethodName = "pSL_readConfig_async";

                if( !this._v_SuppliedSpecsSource) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!this._v_SuppliedSpecsSource", null));
                    return;
                }


                if( typeof  this._v_SuppliedSpecsSource == "object") {

                    this._v_ConfigSpec = this._v_SuppliedSpecsSource;

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, null, null));
                    return;
                }



                if( !( typeof this._v_SuppliedSpecsSource == "string")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, null, null));
                    return;
                }



                this._v_ConfigSpec = null;




                if( this._v_AlreadyScannedByPath) {

                    var anAlreadyScannedConfigSpec = this._v_AlreadyScannedByPath[ this._v_SuppliedSpecsSource];
                    if( !( typeof anAlreadyScannedConfigSpec == "undefined")) {

                        if( !( anAlreadyScannedConfigSpec == null)) {

                            if( typeof anAlreadyScannedConfigSpec == "object") {

                                this._v_ConfigSpec = anAlreadyScannedConfigSpec;

                                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, this._v_ConfigSpec, null, null));
                                return;
                            }
                        }
                    }
                }



                var aCallback = this.fReadConfigAsyncCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.LAUEVKIND_STEPS_FAIL, null, "!this.fReadConfigAsyncCallback( theCallback)", null));
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionReadConfigAsyncHandler( aCallback);

                try {
                    theM_specloader.fgGlobalSpecLoader().pLoadSpecNamed( this._v_SuppliedSpecsSource, aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }

            };
            if( pSL_readConfig_async){}/* CQT */
            aPrototype.pSL_readConfig_async = pSL_readConfig_async;








            var fReadConfigAsyncCallback = function( theCallback) {
                var aMethodName = "fReadConfigAsyncCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.LAUEVKIND_READSPEC_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }


                    if( theResult == null) {
                        theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, aThis.LAUEVKIND_READSPEC_FAIL, null, "theResult == null", null));
                        return;
                    }


                    this._v_ConfigSpec = theResult;

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.LAUEVKIND_READSPEC_OK, theResult, null, null);

                    theCallback();

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fReadConfigAsyncCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fReadConfigAsyncCallback){}/* CQT */
            aPrototype.fReadConfigAsyncCallback = fReadConfigAsyncCallback;









            var fExceptionReadConfigAsyncHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.LAUEVKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.LAUEVKIND_READSPEC_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionReadConfigAsyncHandler){}/* CQT */
            aPrototype.fExceptionReadConfigAsyncHandler = fExceptionReadConfigAsyncHandler;












            var pSL_parseConfig = function( theCallback) {

                var aMethodName = "pSL_parseConfig";

                if( !this._v_ConfigSpec) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!this._v_ConfigSpec", null));
                    return;
                }


                var aSpecParser  = new theM_specparser_config.SpecParserConfig_Constructor( this._v_Identifier, this._v_ConfigSpec, null, false);

                var aParseResult = aSpecParser.fParse();
                if( !aParseResult) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!aSpecParser.fParse()", null));
                    return;
                }
                if( !aSpecParser._v_ParseSuccess) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!aSpecParser._v_ParseSuccess", null));
                    return;
                }

                var aConfiguration = aSpecParser._v_ConfPopulated;
                if( !aConfiguration) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!aSpecParser._v_ConfPopulated", null));
                    return;
                }




                this._v_Configuration = aConfiguration;




                var aResolveImportsResult = this._v_Configuration.fResolveImports( "PARSE");
                if( !aResolveImportsResult) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!this._v_Configuration.fResolveImports()", null));
                    return;
                }


                this._v_Configuration.pResolveExportsNow( "PARSE");
                if( this._v_Configuration.fHasAnyExportFailedToResolveNow( "PARSE")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "this._v_Configuration.fHasAnyExportFailedToResolveNow( 'PARSE')", null));
                    return;
                }


                this._v_Configuration.pMatchChecksNow( "PARSE", this);
                var aFirstCheckFailed = this._v_Configuration.fFirstCheckFailedToMatchNow( "PARSE");
                if( aFirstCheckFailed) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_CHECKFAILED, null, aFirstCheckFailed, null));
                    return;
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, this._v_Configuration, null, null));
            };
            if( pSL_parseConfig){}/* CQT */
            aPrototype.pSL_parseConfig = pSL_parseConfig;













            var pSL_createTest = function( theCallback) {

                var aMethodName = "pSL_createTest";

                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }


                if( this._v_Recorder) {

                    var aGrabEventsSummary = false;
                    var aReleasingChecker = this.fReleasingChecker();
                    if( aReleasingChecker) {
                        aGrabEventsSummary = true;

                        var aRecord = this._v_Recorder.fCreateAndRegisterRecord(
                            this._v_Type,
                            this._v_LauncherId,
                            this,
                            aMethodName,
                            "INFO",
                            null,
                            "fReleasingChecker => _v_RecorderSnapshotBeforeTest := fGrabRecorderSnapshot to have at least one record",
                            null
                        );

                        this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_INFO, aRecord, null, null)
                    }

                    this._v_RecorderSnapshotBeforeTest = this._v_Recorder.fGrabRecorderSnapshot( aGrabEventsSummary, false /* theToCleanUp */);
                }


                this._v_RootTest = new theM_scheduleroot_test.ScheduleRootTest_Constructor( aMethodName, this._v_Configuration,
                    this._v_Identifier, this._v_Recorder
                );

                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, this._v_RootTest, null, null));
            };
            if( pSL_createTest){}/* CQT */
            aPrototype.pSL_createTest = pSL_createTest;











            var pSL_runTest = function( theCallback) {

                var aMethodName = "pSL_runTest";

                if( !this._v_RootTest) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!this._v_RootTest", null));
                    return;
                }


                var aThis = this;
                try {
                    theM_nextticker.pNextTick(
                        function() {

                            var somePassedRecords = null;

                            if( aThis.DUMPPASSEDEVENTS || aThis.CHECKPASSEDEVENTS) {
                                somePassedRecords = [ ];
                            }
                            
                            
                            try {

                                if( aThis.DUMPPASSABLETESTS || aThis.CHECKPASSEDEVENTS) {

                                    var somePassableTests = aThis._v_RootTest._v_Configuration.fAllPassableRecorded();

                                    if( aThis.DUMPPASSABLETESTS) {
                                        aThis.pDumpPassableTests( somePassableTests);
                                    }
                                }

                                var aRootScheduledCallback = (function() {

                                    var aThis_here = aThis;
                                    var somePassableTests_here = somePassableTests;
                                    var somePassedRecords_here = somePassedRecords;

                                    var aCbkFunction = function( theError){

                                        if( aThis_here._v_Recorder) {

                                            var aGrabEventsSummary = false;
                                            var aReleasingChecker = aThis_here.fReleasingChecker();
                                            if( aReleasingChecker) {
                                                aGrabEventsSummary = true;
                                            }

                                            aThis_here._v_RecorderSnapshotAfterTest = aThis_here._v_Recorder.fGrabRecorderSnapshot( aGrabEventsSummary, false /* theToCleanUp */);
                                        }

                                        if( aThis_here.DUMPPASSEDEVENTS || aThis_here.CHECKPASSEDEVENTS) {
                                            if( somePassedRecords_here) {

                                                var anotherRootTestRecorder = aThis_here._v_RootTest._v_Recorder;
                                                if( anotherRootTestRecorder) {
                                                    anotherRootTestRecorder.pDoNotCollectEventRecordsInto( somePassedRecords_here);
                                                }

                                                if( aThis.DUMPPASSEDEVENTS) {
                                                    aThis_here.pDumpPassedRecords( somePassedRecords_here);
                                                }

                                                if( aThis_here.CHECKPASSEDEVENTS) {
                                                    if( !aThis_here.fCheckPassedRecords( theCallback, somePassableTests_here, somePassedRecords_here)) {
                                                        return;
                                                    }
                                                }
                                            }
                                        }

                                        if( theError) {
                                            theCallback( theError);
                                            return;
                                        }

                                        theCallback();
                                    };
                                    if( aCbkFunction){}/* CQT */
                                    return aCbkFunction;
                                })();

                                var aWrappedCallback = aThis.fChainNewLauncherCallbackForCallback( aRootScheduledCallback, "pSL_runTest", theCallback, aMethodName);


                                if( aThis.DUMPPASSEDEVENTS || aThis.CHECKPASSEDEVENTS) {
                                    if( somePassedRecords) {

                                        var aRootTestRecorder = aThis._v_RootTest._v_Recorder;
                                        if( aRootTestRecorder) {
                                            aRootTestRecorder.pCollectEventRecordsInto( somePassedRecords, [ aThis._v_RootTest.EVENTKIND_PASSED]);
                                        }
                                    }
                                }

                                aThis._v_RootTest.pF_ScheduleRoot( aWrappedCallback);

                            }
                            catch( anException) {
                                var aExceptionDetail = aThis.fExceptionDetail( anException);
                                var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_CATCHED_EXCEPTION, aThis._v_RootTest, anException, aExceptionDetail);
                                var otherRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_NOTPASSED, aThis._v_RootTest, aRecord, null);


                                if( aThis.DUMPPASSEDEVENTS || aThis.CHECKPASSEDEVENTS) {

                                    if( somePassedRecords) {

                                        var otherRootTestRecorder = aThis._v_RootTest._v_Recorder;
                                        if( otherRootTestRecorder) {
                                            otherRootTestRecorder.pDoNotCollectEventRecordsInto( somePassedRecords);
                                        }

                                        if( aThis.DUMPPASSEDEVENTS) {
                                            aThis.pDumpPassedRecords( somePassedRecords);
                                        }
                                    }
                                }


                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_FAIL, aThis._v_RootTest, otherRecord, null));
                            }
                        }
                    );
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var anotherRecord = this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_CATCHED_EXCEPTION, this._v_RootTest, anException, aExceptionDetail);
                    var yetanotherRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, this.LAUEVKIND_NOTPASSED, aThis._v_RootTest, anotherRecord, null);
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, this._v_RootTest, yetanotherRecord, null));
                }

            };
            if( pSL_runTest){}/* CQT */
            aPrototype.pSL_runTest = pSL_runTest;










            var pDumpPassableTests = function( thePassableTests) {
                
                if( !thePassableTests) {
                    return;
                }

                var somePassableTestsTitles = this.fTestsTitles( thePassableTests);

                var aDumpObject = { "Passable": somePassableTestsTitles};

                var aJSONstr = JSON.stringify( aDumpObject, null, 4);

                console.log( "," + aJSONstr);
            };
            if( pDumpPassableTests){}/* CQT */
            aPrototype.pDumpPassableTests = pDumpPassableTests;


            


            var fTestsTitles = function( theTests) {

                var someTestsTitles = [ ];

                if( !theTests) {
                    return someTestsTitles;
                }


                var aNumTests = theTests.length;
                for( var aTestIdx=0; aTestIdx < aNumTests; aTestIdx++) {

                    var aTest = theTests[ aTestIdx];
                    if( aTest) {

                        var aTestTitle = aTest._v_Title;
                        if( aTestTitle) {
                            someTestsTitles.push( aTestTitle);
                        }
                    }
                }

                return someTestsTitles;
            };
            if( fTestsTitles){}/* CQT */
            aPrototype.fTestsTitles = fTestsTitles;







            var pDumpPassedRecords = function( thePassedRecords) {
                if( !thePassedRecords) {
                    return;
                }

                var somePassedTestTitles = [ ];

                var aNumPassedRecords = thePassedRecords.length;
                for( var aPassedRecordIdx=0; aPassedRecordIdx < aNumPassedRecords; aPassedRecordIdx++) {

                    var aPassedRecord = thePassedRecords[ aPassedRecordIdx];
                    if( aPassedRecord) {

                        var aPassedTest = aPassedRecord._v_Instance;
                        if( aPassedTest) {

                            var aPassedTestTitle = aPassedTest._v_Title;
                            if( aPassedTestTitle) {
                                somePassedTestTitles.push( aPassedTestTitle);
                            }
                        }
                    }
                }

                var aDumpObject = { "Passed": somePassedTestTitles};

                var aJSONstr = JSON.stringify( aDumpObject, null, 4);

                console.log( "," + aJSONstr);
            };
            if( pDumpPassedRecords){}/* CQT */
            aPrototype.pDumpPassedRecords = pDumpPassedRecords;





            




            var fCheckPassedRecords = function( theCallback, thePassableTests, thePassedRecords) {

                var aMethodName = "fCheckPassedRecords";

                if( !thePassableTests) {
                    return;
                }

                var somePassedRecordTitles  = { };
                var somePassedTestsTitles   = [ ];
                var someNotPassedTestTitles = [ ];

                var aNumPassedRecords = thePassedRecords.length;
                for( var aPassedRecordIdx=0; aPassedRecordIdx < aNumPassedRecords; aPassedRecordIdx++) {

                    var aPassedRecord = thePassedRecords[ aPassedRecordIdx];
                    if( aPassedRecord) {
                        var aPassedTest = aPassedRecord._v_Instance;
                        if( aPassedTest) {
                            var aPassedTestTitle = aPassedTest._v_Title;
                            if( aPassedTestTitle) {
                                somePassedRecordTitles[ aPassedTestTitle] = true;
                            }
                        }
                    }
                }

                var aNumPassableTest = thePassableTests.length;
                for( var aPassableTestIdx=0; aPassableTestIdx < aNumPassableTest; aPassableTestIdx++) {
                    var aPassableTest = thePassableTests[ aPassableTestIdx];
                    if( aPassableTest) {
                        var aPassableTestTitle = aPassableTest._v_Title;
                        if( aPassableTestTitle) {

                            if( somePassedRecordTitles[ aPassableTestTitle]) {
                                somePassedTestsTitles.push( aPassableTestTitle);
                            }
                            else {
                                someNotPassedTestTitles.push( aPassableTestTitle);
                            }
                        }
                    }
                }



                if( someNotPassedTestTitles.length) {
                    var aDumpObject = { "Passed": somePassedTestsTitles, "NotPassed": someNotPassedTestTitles};

                    aDumpObject.fAsLogObject = function() { return aDumpObject};

                    var aSomeNotPassedRecord = this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_CHECKPASSEDFAILED, this._v_RootTest, null, aDumpObject);

                    if( this.DUMPCHECKPASSEDEVENTS) {
                        var aJSONstr = JSON.stringify( aDumpObject, null, 4);
                        console.log( "," + aJSONstr);
                    }

                    theCallback( aSomeNotPassedRecord);
                    return false;
                }

                return true;
            };
            if( fCheckPassedRecords){}/* CQT */
            aPrototype.fCheckPassedRecords = fCheckPassedRecords;

            
            
            
            
            

            var pSL_releasingCheck = function( theCallback) {

                var aMethodName = "pSL_releasingCheck";


                var aReleasingChecker = this.fReleasingChecker();
                if( !aReleasingChecker) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this.fReleasingChecker()", null));
                    return;
                }

                if( !this._v_RootTest) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this._v_RootTest", null));
                    return;
                }

                var aSpecPath = this.fSpecPath();
                if( !aSpecPath) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this.fSpecPath();", null));
                    return;
                }


                var someTestReleasingCheckReports = aReleasingChecker.fTestReleasingChecks(
                    this,
                    aSpecPath,
                    this._v_RootTest,
                    this._v_Configuration,
                    theCallback,
                    this._v_Recorder,
                    this._v_RecorderSnapshotBeforeTest,
                    this._v_RecorderSnapshotAfterTest
                );

                if( someTestReleasingCheckReports) {
                    if( someTestReleasingCheckReports.length) {
                        theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_RELEASINGCHECKFAILED, this._v_RootTest, this._v_ReleasingChecker, someTestReleasingCheckReports));
                        return;
                    }
                }

                this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_RELEASINGCHECKOK, this._v_ReleasingChecker, null, null);


                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, this._v_ReleasingChecker, null, null));

            };
            if( pSL_releasingCheck){}/* CQT */
            aPrototype.pSL_releasingCheck = pSL_releasingCheck;













            var pSL_cleanupCheck = function( theCallback) {

                var aMethodName = "pSL_cleanupCheck";


                var aCleanUpChecker = this.fCleanUpChecker();
                if( !aCleanUpChecker) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this.fCleanUpChecker()", null));
                    return;
                }

                var aSpecPath = this.fSpecPath();
                if( !aSpecPath) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this.fSpecPath();", null));
                    return;
                }


                var someTestCleanUpCheckReports = aCleanUpChecker.fTestCleanUpChecks(
                    this,
                    aSpecPath,
                    this._v_RootTest,
                    this._v_Configuration,
                    theCallback,
                    this._v_Recorder,
                    this._v_RecorderSnapshotBeforeTest,
                    this._v_RecorderSnapshotAfterTest
                );

                if( someTestCleanUpCheckReports) {
                    if( someTestCleanUpCheckReports.length) {
                        theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_CLEANUPCHECKFAILED, this._v_RootTest, this._v_CleanUpChecker, someTestCleanUpCheckReports));
                        return;
                    }
                }

                this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_CLEANUPCHECKOK, this._v_CleanUpChecker, null, null);


                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, this._v_CleanUpChecker, null, null));

            };
            if( pSL_cleanupCheck){}/* CQT */
            aPrototype.pSL_cleanupCheck = pSL_cleanupCheck;
















            var fBoundTestStepFunctions = function() {

                var someTestFunctions = [
                    this.pSL_loadcmpandtestspaths.bind( this),
                    this.pSL_initReleasingChecker.bind( this),
                    this.pSL_initCleanUpChecker.bind( this),
                    this.pSL_readConfig.bind( this),
                    this.pSL_parseConfig.bind( this),
                    this.pSL_createTest.bind( this),
                    this.pSL_runTest.bind( this),
                    this.pSL_releasingCheck.bind( this),
                    this.pSL_cleanupCheck.bind( this)
                ];
                if( someTestFunctions){}/* CQT */

                return someTestFunctions;
            };
            if( fBoundTestStepFunctions){}/* CQT */
            aPrototype.fBoundTestStepFunctions = fBoundTestStepFunctions;







            var pF_LauncherOne = function( theCallback) {

                var aMethodName = "pF_LauncherOne";


                this._v_Callback = theCallback;


                this.pF_LauncherManyOrOne( theCallback, aMethodName);
            };
            if( pF_LauncherOne){}/* CQT */
            aPrototype.pF_LauncherOne = pF_LauncherOne;








            return aPrototype;

        })();




        var LauncherOne_Constructor = function( theIsFirst,
                                                theParentLauncher,
                                                theTitle,
                                                theConfigSpecOrPath,
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


            this._v_ConfigSpec    = null;

            this._v_Configuration = null;
            this._v_RootTest      = null;

            this._v_RecorderSnapshotBeforeTest = null;
            this._v_RecorderSnapshotAfterTest  = null;


            this._pInit_LauncherOne( theIsFirst,
                                     theParentLauncher,
                                     theTitle,
                                     theConfigSpecOrPath,
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
        LauncherOne_Constructor.prototype = aLauncherOne_Prototype;





        var LauncherOne_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_launchermanyorone.LauncherManyOrOneTest_Prototype;

            this._v_Prototype = aLauncherOne_Prototype;
            this._v_Type = null;

            this._v_ConfigSpec    = null;

            this._v_Configuration = null;
            this._v_RootTest      = null;

            this._v_RecorderSnapshotBeforeTest = null;
            this._v_RecorderSnapshotAfterTest  = null;

        };
        LauncherOne_SuperPrototypeConstructor.prototype = aLauncherOne_Prototype;








        var LauncherOneFactory = function( theIsFirst,
                                           theParentLauncher,
                                           theTitle,
                                           theConfigSpecOrPath,
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

            var aLauncherOne = new LauncherOne_Constructor( theIsFirst,
                                                            theParentLauncher,
                                                            theTitle,
                                                            theConfigSpecOrPath,
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

            var aMethod = aLauncherOne.pF_LauncherOne.bind( aLauncherOne);

            return { "launcher": aLauncherOne, "method": aMethod};
        };












        var fDefineLauncherOne_andRunIfFirst = function( theTitle,
                                                         theConfigSpecOrPath,
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


            var FirstLauncherOneFactory = function( theIsFirst) {

                var aLauncherAndMethod =  LauncherOneFactory(
                    theIsFirst, /* theIsFirst */
                    null,
                    theTitle,
                    theConfigSpecOrPath,
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
                "LauncherFactory": LauncherOneFactory
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
                            aLastLauncher.fRecord( "LauncherOne", aLastLauncher._v_LauncherId, aLastLauncher, theTitle, aLastLauncher.LAUEVKIND_EXIT, anExitCode, theError, null);
                        }
                        else {
                            var anExitRecord = { "launcher": theTitle, "EXIT": anExitCode};
                            console.log( "," + JSON.stringify( anExitRecord));
                        }

                        theM_exiter.p_Exit( anExitCode);
                    };


                    var aLauncherAndMethod = FirstLauncherOneFactory( true /* theIsFirst */);
                    if( !aLauncherAndMethod) {
                        aCallback( "!FirstLauncherOneFactory()");
                        return;
                    }

                    var aMethod = aLauncherAndMethod[ "method"];
                    if( !aMethod) {
                        return;
                    }

                    aMethod( aCallback);
                })()
            }


            return aModule;

        };









        var aModule = {
            "LauncherOne_Prototype": aLauncherOne_Prototype,
            "LauncherOne_Constructor": LauncherOne_Constructor,
            "LauncherOne_SuperPrototypeConstructor": LauncherOne_SuperPrototypeConstructor,

            "LauncherOneFactory": LauncherOneFactory,

            "fDefineLauncherOne_andRunIfFirst": fDefineLauncherOne_andRunIfFirst
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





        return aModule;
    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_housekeepconstants     = require('../housekeep/housekeep-constants');
            var aM_housekeeputils         = require('../housekeep/housekeep-utils');
            var aM_launchermanyorone      = require('./launcher-many-or-one');
            var aM_firsttorun             = require('./firsttorun');
            var aM_specparser_config      = require('../configs/specparser/specparser-config');
            var aM_scheduleroot_test      = require('../scheduleroot-test');
            var aM_specloader             = require('../resloader/specloader');
            var aM_nextticker             = require('../../infrasvcs/nextticker/nextticker');
            var aM_exiter                 = require('../../infrasvcs/exiter/exiter');
            var aM_sentinels              = require('../sentinels');
            var aM_overrider              = require('../overrider');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeeputils,
                aM_launchermanyorone,
                aM_firsttorun,
                aM_specparser_config,
                aM_scheduleroot_test,
                aM_specloader,
                aM_nextticker,
                aM_exiter,
                aM_sentinels,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../housekeep/housekeep-constants",
            "../housekeep/housekeep-utils",
            "./launcher-many-or-one",
            "./firsttorun",
            "../configs/specparser/specparser-config",
            "../scheduleroot-test",
            "../resloader/specloader",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/exiter/exiter",
            "../sentinels",
            "../overrider"

        ], function (
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_launchermanyorone,
                theM_firsttorun,
                theM_specparser_config,
                theM_scheduleroot_test,
                theM_specloader,
                theM_nextticker,
                theM_exiter,
                theM_sentinels,
                theM_overrider
            ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_launchermanyorone,
                theM_firsttorun,
                theM_specparser_config,
                theM_scheduleroot_test,
                theM_specloader,
                theM_nextticker,
                theM_exiter,
                theM_sentinels,
                theM_overrider
            );
        });
    }

})();

