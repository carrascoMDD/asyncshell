'use strict';

/*
 launcher-many-or-one.js
 Creado 201504181602
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



(function() {

    var aMod_definer = function( theM_launchergeneral,
                                 theM_shared_identifier,
                                 theM_shared_recorder,
                                 theM_nextticker,
                                 theM_cmpandtestspathsloader,
                                 theM_sentinels,
                                 theM_overrider,
                                 theM_housekeeper_master,
                                 theM_releasingchecker,
                                 theM_cleanupchecker) {


        var ModuleName     = "launcher-many-or-one";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








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






        var aLauncherManyOrOneTest_Prototype = (function() {


            var aPrototype = new theM_launchergeneral.LauncherGeneral_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_launchergeneral.LauncherGeneral_Prototype;


            aPrototype._v_Type = "LauncherManyOrOne";


            aPrototype._v_ParentLauncher   = null;

            aPrototype._v_SuppliedSpecsSource   = null;

            aPrototype._v_AlreadyScannedByPath = null;

            aPrototype._v_CmpAndTestsPathsLoader = null;

            aPrototype._v_IsFirst = null;

            aPrototype._v_RunOptions = null;

            aPrototype._v_Housekeeper      = null;
            aPrototype._v_HousekeepOptions = null;

            aPrototype._v_ReleasingOptions = null;
            aPrototype._v_ReleasingChecker = null;

            aPrototype._v_CleanUpOptions = null;
            aPrototype._v_CleanUpChecker = null;

            aPrototype._v_SnapshottersByKind = null;

            aPrototype._v_Callback = null;




            var _pInit = function( theIsFirst,
                                   theParentLauncher,
                                   theTitle,
                                   theSuppliedSpecsSource,
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

                this._pInit_LauncherManyOrOne( theIsFirst,
                                          theParentLauncher,
                                          theTitle,
                                          theSuppliedSpecsSource,
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










            var _pInit_LauncherManyOrOne = function( theIsFirst,
                                                     theParentLauncher,
                                                     theTitle,
                                                     theSuppliedSpecsSource,
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
                this._v_SuperPrototype._pInit_LauncherGeneral.apply( this, [ theTitle, theLauncherIdentifier, theLauncherRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_IsFirst = theIsFirst;

                this._v_ParentLauncher   = theParentLauncher;

                this._v_SuppliedSpecsSource = theSuppliedSpecsSource;

                this._v_RunOptions = theRunOptions;

                this._v_Identifier = theIdentifier;
                this._v_Recorder   = theRecorder;

                this._v_Housekeeper      = theHousekeeper;
                this._v_HousekeepOptions = theHousekeepOptions;

                this._v_ReleasingOptions = theReleasingOptions;

                this._v_CleanUpOptions   = theCleanUpOptions;

                this._v_AlreadyScannedByPath = theAlreadyScannedByPath;
                if( !this._v_AlreadyScannedByPath || !(typeof this._v_AlreadyScannedByPath == "object")) {
                    this._v_AlreadyScannedByPath = { };
                }

                this._v_CmpAndTestsPathsLoader = null;

                this._v_SnapshottersByKind = theSnapshottersByKind;
                if( !this._v_SnapshottersByKind) {
                    this._v_SnapshottersByKind = { };
                }

                this._v_ReleasingChecker = null;

                this._v_CleanUpChecker = null;


                this._v_Callback = null;


                this._pInit_First( theIsFirst)

            };
            if( _pInit_LauncherManyOrOne){}/* CQT */
            aPrototype._pInit_LauncherManyOrOne = _pInit_LauncherManyOrOne;









            var _pInit_First = function( theIsFirst) {

                if( !theIsFirst) {
                    this._v_IsFirst = false;
                    return;
                }

                this._v_IsFirst = true;

                if( !this._v_Identifier) {
                    this._v_Identifier = theM_shared_identifier.fGetOrCreateSharedIdentifier();
                }


                if( !this._v_Recorder) {
                    this._v_Recorder = theM_shared_recorder.fGetOrCreateSharedRecorder( this._v_Identifier);
                }



                if( !this._v_Housekeeper) {

                    var aSnapshottersByKind = null;
                    if( this.fIsLauncherMany()) {
                        aSnapshottersByKind = this._v_SnapshottersByKind;
                    }

                    this._v_Housekeeper = new theM_housekeeper_master.HousekeeperMaster_Constructor(
                        "HouseKeeper-For-" + this._v_LauncherTitle,
                        this._v_LauncherIdentifier,
                        this._v_LauncherRecorder,
                        this._v_HousekeepOptions,
                        this,
                        aSnapshottersByKind
                    );
                }

            };
            if( _pInit_First){}/* CQT */
            aPrototype._pInit_First = _pInit_First;










            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_LauncherManyOrOne( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;






            var _pRelease_LauncherManyOrOne = function( theReleaseParms, theReleaseDone) {
                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */


                this._v_IsFirst = undefined;

                this._v_ParentLauncher   = undefined;

                this._v_SuppliedSpecsSource = undefined;

                this._v_RunOptions = undefined;

                this._v_Identifier = undefined;
                this._v_Recorder   = undefined;

                this._v_Housekeeper      = undefined;
                this._v_HousekeepOptions = undefined;

                this._v_ReleasingOptions = undefined;

                this._v_CleanUpOptions   = undefined;

                this._v_AlreadyScannedByPath = undefined;

                this._v_CmpAndTestsPathsLoader = undefined;

                this._v_SnapshottersByKind = undefined;

                this._v_ReleasingChecker = undefined;

                this._v_CleanUpChecker   = undefined;

                this._v_Callback = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_LauncherGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_LauncherManyOrOne){}/* CQT */
            aPrototype._pRelease_LauncherManyOrOne = _pRelease_LauncherManyOrOne;








            var fSpecPath = function() {

                if( !this._v_SuppliedSpecsSource) {
                    return null;
                }

                if( !( typeof this._v_SuppliedSpecsSource == "string")) {
                    return null;
                }

                return this._v_SuppliedSpecsSource;

            };
            if( fSpecPath){}/* CQT */
            aPrototype.fSpecPath = fSpecPath;






            var fIsLauncherMany = function() {

                return false;
            };
            if( fIsLauncherMany){}/* CQT */
            aPrototype.fIsLauncherMany = fIsLauncherMany;





            var fIsFirst = function() {

                return this._v_IsFirst;
            };
            if( fIsFirst){}/* CQT */
            aPrototype.fIsFirst = fIsFirst;






            var fFirstLauncherMany = function() {

                if( this.fIsLauncherMany()) {

                    if( this._v_IsFirst) {
                        return this;
                    }

                    if( !this._v_ParentLauncher) {
                        return this;
                    }
                }
                else {

                    if( this._v_IsFirst) {
                        return null;
                    }

                    if( !this._v_ParentLauncher) {
                        return null;
                    }
                }

                var aFirstLauncherMany = this._v_ParentLauncher.fFirstLauncherMany();
                if( aFirstLauncherMany){}/* CQT */

                return aFirstLauncherMany;
            };
            if( fFirstLauncherMany){}/* CQT */
            aPrototype.fFirstLauncherMany = fFirstLauncherMany;



















            var pSL_loadcmpandtestspaths = function( theCallback) {

                var aMethodName = "pSL_loadcmpandtestspaths";
                if( aMethodName){}/* CQT */

                if( !this._v_IsFirst) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this._v_IsFirst", null));
                    return;
                }


                this._v_CmpAndTestsPathsLoader = new theM_cmpandtestspathsloader.CmpAndTestsPathsLoader_Constructor( "CmpAndTestsPathsLoaderFor-" + this._v_Title);

                this._v_CmpAndTestsPathsLoader.pF_CmpAndTestsPathsLoader( theCallback);
            };
            if( pSL_loadcmpandtestspaths){}/* CQT */
            aPrototype.pSL_loadcmpandtestspaths = pSL_loadcmpandtestspaths;













            var pSL_initReleasingChecker = function( theCallback) {

                var aMethodName = "pSL_initReleasingChecker";

                if( !this._v_IsFirst) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this._v_IsFirst", null));
                    return;
                }

                if( this._v_ReleasingChecker) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "this._v_ReleasingChecker exists", null));
                    return;
                }


                var aReleasingChecker = new theM_releasingchecker.ReleasingChecker_Constructor(
                    "RelChk-" + this._v_LauncherId,
                    "ReleasingChecker-For-" + this._v_LauncherTitle,
                    this._v_ReleasingOptions,
                    this);




                aReleasingChecker.pReadTestReleasing();



                if( aReleasingChecker.fIsVoidReleasingChecker()) {

                    var aReleaseParms = {};
                    var aReleaseDone  = {};
                    aReleasingChecker._pRelease( aReleaseParms, aReleaseDone);

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, "fIsVoidReleasingChecker", null, null));

                    return;
                }

                this._v_ReleasingChecker = aReleasingChecker;

                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, this._v_ReleasingChecker, null, null));

            };
            if( pSL_initReleasingChecker){}/* CQT */
            aPrototype.pSL_initReleasingChecker = pSL_initReleasingChecker;










            var fReleasingChecker = function() {

                if( this._v_ReleasingChecker) {
                    return this._v_ReleasingChecker;
                }

                if( this._v_IsFirst) {
                    return this._v_ReleasingChecker;
                }

                if( !this._v_ParentLauncher) {
                    return null;
                }

                var aReleasingChecker = this._v_ParentLauncher.fReleasingChecker();
                if( aReleasingChecker){}/* CQT */

                return aReleasingChecker;

            };
            if( fReleasingChecker){}/* CQT */
            aPrototype.fReleasingChecker = fReleasingChecker;



















            var pSL_initCleanUpChecker = function( theCallback) {

                var aMethodName = "pSL_initCleanUpChecker";

                if( !this._v_IsFirst) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "!this._v_IsFirst", null));
                    return;
                }

                if( this._v_CleanUpChecker) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, null, "this._v_CleanUpChecker exists", null));
                    return;
                }


                var aCleanUpChecker = new theM_cleanupchecker.CleanUpChecker_Constructor(
                    "CUpChk-" + this._v_LauncherId,
                    "CleanUpChecker-For-" + this._v_LauncherTitle,
                    this._v_CleanUpOptions,
                    this);




                aCleanUpChecker.pReadTestCleanUp();



                if( aCleanUpChecker.fIsVoidCleanUpChecker()) {

                    var aReleaseParms = {};
                    var aReleaseDone  = {};
                    aCleanUpChecker._pRelease( aReleaseParms, aReleaseDone);

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, "fIsVoidCleanUpChecker", null, null));

                    return;
                }

                this._v_CleanUpChecker = aCleanUpChecker;

                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_OK, this._v_CleanUpChecker, null, null));

            };
            if( pSL_initCleanUpChecker){}/* CQT */
            aPrototype.pSL_initCleanUpChecker = pSL_initCleanUpChecker;










            var fCleanUpChecker = function() {

                if( this._v_CleanUpChecker) {
                    return this._v_CleanUpChecker;
                }

                if( this._v_IsFirst) {
                    return this._v_CleanUpChecker;
                }

                if( !this._v_ParentLauncher) {
                    return null;
                }

                var aCleanUpChecker = this._v_ParentLauncher.fCleanUpChecker();
                if( aCleanUpChecker){}/* CQT */

                return aCleanUpChecker;

            };
            if( fCleanUpChecker){}/* CQT */
            aPrototype.fCleanUpChecker = fCleanUpChecker;





















            var fBoundTestStepFunctions = function() {

                return [ ];
            };
            if( fBoundTestStepFunctions){}/* CQT */
            aPrototype.fBoundTestStepFunctions = fBoundTestStepFunctions;




            





            var pF_LauncherManyOrOne = function( theCallback, theMethodName) {

                var aMethodName = theMethodName;
                if( !aMethodName) {
                    aMethodName = "pF_LauncherManyOrOne";
                }


                this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_BEGIN, null, null, null);


                try {


                    var aThis = this;
                    theM_nextticker.pNextTick(
                        function() {

                            try {

                                var someTestFunctions = aThis.fBoundTestStepFunctions();

                                var aSeriesRunnedCallback = (function() {
                                    var aCbkFunction = function( theError){
                                        try {
                                            if( theError) {
                                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_FAIL, null, theError, null));
                                                return;
                                            }

                                            theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_OK, null, null, null));

                                        }
                                        catch( anException) {
                                            var aExceptionDetail = aThis.fExceptionDetail( anException);
                                            var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL, null", aRecord, null));
                                        }
                                    };
                                    if( aCbkFunction){}/* CQT */
                                    return aCbkFunction;
                                })();


                                var aWrappedCallback = aThis.fChainNewLauncherCallbackForCallback( aSeriesRunnedCallback, "pF_LauncherManyOrOne", theCallback, aMethodName);


                                aThis._v_Callback = aWrappedCallback;



                                aThis.pRunSeries(
                                    someTestFunctions,
                                    aWrappedCallback
                                );
                            }
                            catch( anException) {
                                var aExceptionDetail = aThis.fExceptionDetail( anException);
                                var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_FAIL, null, aRecord, null));
                            }
                        }
                    );
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, aRecord, null));
                }
            };
            if( pF_LauncherManyOrOne){}/* CQT */
            aPrototype.pF_LauncherManyOrOne = pF_LauncherManyOrOne;









            return aPrototype;

        })();




        var LauncherManyOrOneTest_Constructor = function( theIsFirst,
                                                     theParentLauncher,
                                                     theTitle,
                                                     theSuppliedSpecsSource,
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
            this._v_SuperPrototype = theM_launchergeneral.LauncherGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._v_IsFirst = null;

            this._v_ParentLauncher   = null;

            this._v_SuppliedSpecsSource = null;

            this._v_RunOptions = null;

            this._v_Identifier = null;
            this._v_Recorder   = null;

            this._v_Housekeeper      = null;
            this._v_HousekeepOptions = null;

            this._v_ReleasingOptions = null;

            this._v_CleanUpOptions = null;

            this._v_AlreadyScannedByPath = null;

            this._v_CmpAndTestsPathsLoader = null;

            this._v_SnapshottersByKind = null;

            this._v_ReleasingChecker = null;

            this._v_CleanUpChecker = null;

            this._v_Callback = undefined;


            this._pInit_LauncherManyOrOne( theIsFirst,
                                      theParentLauncher,
                                      theTitle,
                                      theSuppliedSpecsSource,
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
        LauncherManyOrOneTest_Constructor.prototype = aLauncherManyOrOneTest_Prototype;





        var LauncherManyOrOneTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_launchergeneral.LauncherGeneral_Prototype;

            this._v_Prototype = aLauncherManyOrOneTest_Prototype;
            this._v_Type = null;


            this._v_IsFirst = null;

            this._v_ParentLauncher   = null;

            this._v_SuppliedSpecsSource = null;

            this._v_RunOptions = null;

            this._v_Identifier = null;
            this._v_Recorder   = null;

            this._v_Housekeeper      = null;
            this._v_HousekeepOptions = null;

            this._v_ReleasingOptions = null;

            this._v_CleanUpOptions = null;

            this._v_AlreadyScannedByPath = null;

            this._v_CmpAndTestsPathsLoader = null;

            this._v_SnapshottersByKind = null;

            this._v_ReleasingChecker = null;

            this._v_CleanUpChecker = null;

            this._v_Callback = undefined;

        };
        LauncherManyOrOneTest_SuperPrototypeConstructor.prototype = aLauncherManyOrOneTest_Prototype;






        var aModule = {
            "LauncherManyOrOneTest_Prototype": aLauncherManyOrOneTest_Prototype,
            "LauncherManyOrOneTest_Constructor": LauncherManyOrOneTest_Constructor,
            "LauncherManyOrOneTest_SuperPrototypeConstructor": LauncherManyOrOneTest_SuperPrototypeConstructor
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

            var aM_launchergeneral        = require('./launcher-general');
            var aM_shared_identifier      = require('./shared-identifier');
            var aM_shared_recorder        = require('./shared-recorder');
            var aM_nextticker             = require('../../infrasvcs/nextticker/nextticker');
            var aM_cmpandtestspathsloader = require('../pathsloader/cmpandtestspathsloader');
            var aM_sentinels              = require('../sentinels');
            var aM_overrider              = require('../overrider');
            var aM_housekeeper_master     = require('../housekeep/housekeeper-master');
            var aM_releasingchecker       = require('../releasing/releasing-checker');
            var aM_cleanupchecker         = require('../cleanup/cleanup-checker');


            return aMod_definer(
                aM_launchergeneral,
                aM_shared_identifier,
                aM_shared_recorder,
                aM_nextticker,
                aM_cmpandtestspathsloader,
                aM_sentinels,
                aM_overrider,
                aM_housekeeper_master,
                aM_releasingchecker,
                aM_cleanupchecker
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./launcher-general",
            "./shared-identifier",
            "./shared-recorder",
            "../../infrasvcs/nextticker/nextticker",
            "../pathsloader/cmpandtestspathsloader",
            "../sentinels",
            "../overrider",
            "../housekeep/housekeeper-master",
            "../releasing/releasing-checker",
            "../cleanup/cleanup-checker"
        ], function (
                theM_launchergeneral,
                theM_shared_identifier,
                theM_shared_recorder,
                theM_nextticker,
                theM_cmpandtestspathsloader,
                theM_sentinels,
                theM_overrider,
                theM_housekeeper_master,
                theM_releasingchecker,
                theM_cleanupchecker
            ) {
            return aMod_definer(
                theM_launchergeneral,
                theM_shared_identifier,
                theM_shared_recorder,
                theM_nextticker,
                theM_cmpandtestspathsloader,
                theM_sentinels,
                theM_overrider,
                theM_housekeeper_master,
                theM_releasingchecker,
                theM_cleanupchecker
            );
        });
    }

})();

