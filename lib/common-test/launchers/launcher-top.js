'use strict';

/*
 launcher-top.js
 Creado 201408241902
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

    var aMod_definer = function( theM_ttstlaunchergeneral,
                                 theM_ttstlaunchermany,
                                 theM_launchermany,
                                 theM_firsttorun,
                                 theM_specloader,
                                 theM_cmpandtestspathsloader,
                                 theM_nextticker,
                                 theM_exiter,
                                 theM_callbacker,
                                 theM_overrider) {

        var ModuleName     = "launcher-top";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.ANNOTATELAUNCHERTOPCALLBACKS = true;
            theToInit.RECORDLAUNCHERTOPCALLBACKINVOCATIONS  = true;
            theToInit.RECORDLAUNCHERTOPCALLBACKARGS         = true;


            theToInit.READCONFIG_ASYNC = true;
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

            theToInit.LAUNCHTOPSPECKIND_TTST = "TTST";
            theToInit.LAUNCHTOPSPECKIND_TEST = "TEST";
            theToInit.LAUNCHTOPSPECKINDS = [
                theToInit.LAUNCHTOPSPECKIND_TTST,
                theToInit.LAUNCHTOPSPECKIND_TEST
            ];

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










        var aLauncherTop_Prototype = (function() {


            var aPrototype = new theM_ttstlaunchergeneral.TtstLauncherGeneral_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_Type = "LauncherTop";



            aPrototype._v_LaunchtopSpecsOrPath = null;

            aPrototype._v_CmpAndTestsPathsLoader   = null;

            aPrototype._v_LaunchtopSpecsPaths = null;
            aPrototype._v_LaunchtopSpecs      = null;

            aPrototype._v_SubLaunchers = null;

            aPrototype._v_AlreadyLaunched = null;





            var _pInit = function( theTitle,
                                   theLaunchtopSpecsOrPath,
                                   theRunOptions,
                                   theHousekeepOptions,
                                   theReleasingOptions,
                                   theCleanUpOptions) {

                this._pInit_LauncherTop( theTitle,
                                         theLaunchtopSpecsOrPath,
                                         theRunOptions,
                                         theHousekeepOptions,
                                         theReleasingOptions,
                                         theCleanUpOptions);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_LauncherTop = function( theTitle, 
                                               theLaunchtopSpecsOrPath, 
                                               theRunOptions,
                                               theHousekeepOptions,
                                               theReleasingOptions,
                                               theCleanUpOptions) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstLauncherGeneral.apply( this, [ theTitle, theRunOptions, theHousekeepOptions, theReleasingOptions, theCleanUpOptions]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_LaunchtopSpecsOrPath = theLaunchtopSpecsOrPath;

                this._v_CmpAndTestsPathsLoader   = null;

                this._v_LaunchtopSpecsPaths = null;
                this._v_LaunchtopSpecs      = null;

                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];
            };
            if( _pInit_LauncherTop){}/* CQT */
            aPrototype._pInit_LauncherTop = _pInit_LauncherTop;









            var pSL_loadcmpandtestspaths = function( theCallback) {

                var aMethodName = "pSL_loadcmpandtestspaths";
                if( aMethodName){}/* CQT */

                this._v_CmpAndTestsPathsLoader = new theM_cmpandtestspathsloader.CmpAndTestsPathsLoader_Constructor( "CmpAndTestsPathsLoaderFor-" + this._v_Title);

                this._v_CmpAndTestsPathsLoader.pF_CmpAndTestsPathsLoader( theCallback);
            };
            if( pSL_loadcmpandtestspaths){}/* CQT */
            aPrototype.pSL_loadcmpandtestspaths = pSL_loadcmpandtestspaths;















            var pSL_readLaunchtopSpecsList = function( theCallback) {

                if( this.READCONFIG_ASYNC) {
                    this.pSL_readLaunchtopSpecsList_async( theCallback);
                    return;
                }

                this.pSL_readLaunchtopSpecsList_sync( theCallback);
            };
            if( pSL_readLaunchtopSpecsList){}/* CQT */
            aPrototype.pSL_readLaunchtopSpecsList = pSL_readLaunchtopSpecsList;











            var pSL_readLaunchtopSpecsList_sync = function( theCallback) {

                var aMethodName = "pSL_readLaunchtopSpecsList_sync";

                if( !this._v_LaunchtopSpecsOrPath) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_LaunchtopSpecsOrPath", null));
                    return;
                }

                this._v_LaunchtopSpecs = null;



                if( typeof this._v_LaunchtopSpecsOrPath == "object") {

                    if( typeof this._v_LaunchtopSpecsOrPath.length == "undefined") {
                        this._v_LaunchtopSpecs = [ this._v_LaunchtopSpecsOrPath];
                    }
                    else {
                        this._v_LaunchtopSpecs = this._v_LaunchtopSpecsOrPath;
                    }

                    theCallback( null, this.fRecord( aMethodName, "OK", null, null, null));
                    return;
                }





                if( !( typeof this._v_LaunchtopSpecsOrPath == "string")) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!(typeof this._v_LaunchtopSpecsOrPath == 'object'') && !( typeof this._v_LaunchtopSpecsOrPath == 'string'')", null));
                    return;
                }


                var someLaunchtopSpecs = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( this._v_LaunchtopSpecsOrPath);

                if( someLaunchtopSpecs == null) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!fLoadCmpNamed( " + this._v_LaunchtopSpecsOrPath + ")", null));
                    return;
                }


                if( !( typeof someLaunchtopSpecs == "object")) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!( typeof fLoadSpecNamed( " + this._v_LaunchtopSpecsOrPath + ") == 'object')", null));
                    return;
                }

                if( typeof someLaunchtopSpecs.length == "undefined") {
                    someLaunchtopSpecs = [ someLaunchtopSpecs];
                }


                this._v_LaunchtopSpecs = someLaunchtopSpecs;


                theCallback( null, this.fRecord( aMethodName, "OK", this._v_ConfigSpec, null, null));
            };
            if( pSL_readLaunchtopSpecsList_sync){}/* CQT */
            aPrototype.pSL_readLaunchtopSpecsList_sync = pSL_readLaunchtopSpecsList_sync;












            var pSL_readLaunchtopSpecsList_async = function( theCallback) {

                var aMethodName = "pSL_readLaunchtopSpecsList_async";


                if( !this._v_LaunchtopSpecsOrPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this._v_LaunchtopSpecsOrPath", null));
                    return;
                }

                this._v_LaunchtopSpecsPaths  = null;



                if( typeof this._v_LaunchtopSpecsOrPath == "object") {

                    if( typeof this._v_LaunchtopSpecsOrPath.length == "undefined") {
                        this._v_LaunchtopSpecsPaths = [ this._v_LaunchtopSpecsOrPath];
                    }
                    else {
                        this._v_LaunchtopSpecsPaths = this._v_LaunchtopSpecsOrPath;
                    }

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", null, null, null));
                    return;
                }





                if( !( typeof this._v_LaunchtopSpecsOrPath == "string")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!(typeof this._v_LaunchtopSpecsOrPath == 'object'') && !( typeof this._v_LaunchtopSpecsOrPath == 'string'')", null));
                    return;
                }


                this._v_LaunchtopSpecsPaths = this._v_LaunchtopSpecsOrPath;



                var aCallback = this.fReadLaunchtopSpecsListAsyncCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, "FAIL", null, "!this.fReadLaunchtopSpecsListAsyncCallback( theCallback)", null));
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionReadLaunchtopSpecsListAsyncHandler( aCallback);

                try {
                    theM_specloader.fgGlobalSpecLoader().pLoadSpecNamed( this._v_LaunchtopSpecsPaths, aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }

            };
            if( pSL_readLaunchtopSpecsList_async){}/* CQT */
            aPrototype.pSL_readLaunchtopSpecsList_async = pSL_readLaunchtopSpecsList_async;









            var fReadLaunchtopSpecsListAsyncCallback = function( theCallback) {
                var aMethodName = "fReadLaunchtopSpecsListAsyncCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_READSPEC_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }


                    if( theResult == null) {
                        theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "theResult == null", null));
                        return;
                    }


                    if( !( typeof theResult == "object")) {
                        theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!( typeof theResult == 'object')", null));
                        return;
                    }

                    if( typeof theResult.length == "undefined") {
                        this._v_LaunchtopSpecs = [ theResult];
                    }
                    else {
                        this._v_LaunchtopSpecs = theResult;
                    }

                    theCallback();

                }).bind( this);

                var aWrappedCallback = this.fChainNewLaunchertopCallbackForCallback( aCallback, "fReadLaunchtopSpecsListAsyncCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fReadLaunchtopSpecsListAsyncCallback){}/* CQT */
            aPrototype.fReadLaunchtopSpecsListAsyncCallback = fReadLaunchtopSpecsListAsyncCallback;









            var fExceptionReadLaunchtopSpecsListAsyncHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionReadLaunchtopSpecsListAsyncHandler){}/* CQT */
            aPrototype.fExceptionReadLaunchtopSpecsListAsyncHandler = fExceptionReadLaunchtopSpecsListAsyncHandler;



















            var pInitFinderToScheduleNextLaunchtopSpec = function() {
                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];
            };
            if( pInitFinderToScheduleNextLaunchtopSpec){}/* CQT */
            aPrototype.pInitFinderToScheduleNextLaunchtopSpec = pInitFinderToScheduleNextLaunchtopSpec;










            var pTryToScheduleNextLaunchtopSpec = function( theCallback) {
                var aMethodName = "pTryToScheduleNextLaunchtopSpec";
                if( aMethodName){}/* CQT */

                var aLaunchtopSpecToScheduleNext = this.fFindLaunchtopSpecToScheduleNext();
                if( !aLaunchtopSpecToScheduleNext) {
                    theCallback();
                    return;
                }

                this._v_AlreadyLaunched.push( aLaunchtopSpecToScheduleNext);

                this.pScheduleNextLaunchtopSpec( theCallback, aLaunchtopSpecToScheduleNext);
            };
            if( pTryToScheduleNextLaunchtopSpec){}/* CQT */
            aPrototype.pTryToScheduleNextLaunchtopSpec = pTryToScheduleNextLaunchtopSpec;







            var fFindLaunchtopSpecToScheduleNext = function() {

                if( !this._v_LaunchtopSpecs) {
                    return null;
                }

                var aNumTopSpecs = this._v_LaunchtopSpecs.length;
                if( !aNumTopSpecs) {
                    return null;
                }

                if( this._v_AlreadyLaunched == null) {
                    return null;
                }

                var aNumAlreadyScheduled = this._v_AlreadyLaunched.length;
                if( aNumAlreadyScheduled >= aNumTopSpecs) {
                    return null;
                }


                var aPendingTopSpec = this._v_LaunchtopSpecs[ aNumAlreadyScheduled];
                if( !aPendingTopSpec) {
                    return null;
                }

                return aPendingTopSpec;

            };
            if( fFindLaunchtopSpecToScheduleNext){}/* CQT */
            aPrototype.fFindLaunchtopSpecToScheduleNext = fFindLaunchtopSpecToScheduleNext;










            var pScheduleNextLaunchtopSpec = function( theCallback, theLaunchtopSpec) {


                var aMethodName = "pScheduleNextLaunchtopSpec";

                if( !theLaunchtopSpec) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theLaunchtopSpec", null));
                    return;
                }


                var aSpecKind    = theLaunchtopSpec[ "kind"];
                var aSpecTitle   = theLaunchtopSpec[ "title"];
                if( !aSpecTitle) {
                    aSpecTitle = "";
                }
                var aLaunchables = theLaunchtopSpec[ "launchables"];

                if( !aSpecKind || !aLaunchables) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!aSpecKind || !aLaunchables", null));
                }


                if( !( ( aSpecKind  == this.LAUNCHTOPSPECKIND_TTST) || (aSpecKind  == this.LAUNCHTOPSPECKIND_TEST))) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!( ( aSpecKind  == " + this.LAUNCHTOPSPECKIND_TTST + " ) || (aSpecKind  == " + this.LAUNCHTOPSPECKIND_TEST + "))", null));
                }


                var aMethod = null;


                if( aSpecKind == this.LAUNCHTOPSPECKIND_TTST) {

                    var aTtstLauncherMany = new theM_ttstlaunchermany.TtstLauncherMany_Constructor( aSpecTitle, aLaunchables);

                    aMethod = aTtstLauncherMany.pF_TtstLauncherMany.bind( aTtstLauncherMany);
                }
                else {
                    if( aSpecKind == this.LAUNCHTOPSPECKIND_TEST) {
                        var aLauncherMany = new theM_launchermany.LauncherManyTest_Constructor(
                            true, /* theIsFirst */
                            null, /* theParentLauncher */
                            aSpecTitle,
                            aLaunchables,
                            null,  /* theLauncherIdentifier, */
                            null,  /* theLauncherRecorder, */
                            this._v_RunOptions,  /* theRunOptions, */
                            null,  /* theIdentifier, */
                            null,  /* theRecorder, */
                            null,  /* theSnapshottersByKind */
                            null,  /* theHousekeeper, */
                            this._v_HousekeepOptions,
                            this._v_ReleasingOptions,
                            this._v_CleanUpOptions,
                            null); /* theAlreadyScannedByPath */

                        aMethod = aLauncherMany.pF_LauncherMany.bind( aLauncherMany);
                    }
                }



                if( !aMethod) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theM_ttstlaunchermany.TtstLauncherMany_Constructor && !theM_launchermany.LauncherManyTest_Constructor", null));
                }

                if( !( typeof aMethod == "function")) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!( typeof theM_ttstlaunchermany.TtstLauncherMany_Constructor && !theM_launchermany.LauncherManyTest_Constructor == 'function)", null));
                }





                var aCallback = this.fScheduleNextLaunchertopCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fScheduleNextLaunchertopCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextLaunchertopHandler( aCallback);

                try {
                    aMethod( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pScheduleNextLaunchtopSpec){}/* CQT */
            aPrototype.pScheduleNextLaunchtopSpec = pScheduleNextLaunchtopSpec;













            var fScheduleNextLaunchertopCallback = function( theCallback) {
                var aMethodName = "fScheduleNextLaunchertopCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aMethodName, "FAIL", null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aMethodName, "OK", null, null, null);

                    aThis.pTryToScheduleNextLaunchtopSpec( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewLaunchertopCallbackForCallback( aCallback, "fScheduleNextLaunchertopCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextLaunchertopCallback){}/* CQT */
            aPrototype.fScheduleNextLaunchertopCallback = fScheduleNextLaunchertopCallback;








            var fChainNewLaunchertopCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATELAUNCHERTOPCALLBACKS) {
                    return theNewCallback;
                }

                return theM_callbacker.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewLaunchertopCallbackForCallback){}/* CQT */
            aPrototype.fChainNewLaunchertopCallbackForCallback = fChainNewLaunchertopCallbackForCallback;







            var pReceivedLaunchertopCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATELAUNCHERTOPCALLBACKS) {
                    return;
                }

                if( !this.RECORDLAUNCHERTOPCALLBACKARGS) {
                    return;
                }

                if( !theCallback) {
                    return;
                }

                theM_callbacker.pReceivedCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedLaunchertopCallbackArg){}/* CQT */
            aPrototype.pReceivedLaunchertopCallbackArg = pReceivedLaunchertopCallbackArg;







            var fExceptionNextLaunchertopHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextLaunchertopHandler){}/* CQT */
            aPrototype.fExceptionNextLaunchertopHandler = fExceptionNextLaunchertopHandler;












            var fOverallLaunchertopCallback = function( theCallback) {
                var aMethodName = "fOverallLaunchertopCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aMethodName, "FAIL", null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    theCallback( null, aThis.fRecord( aMethodName, "OK", null, null, null));

                }).bind( this);

                var aWrappedCallback = this.fChainNewLaunchertopCallbackForCallback( aCallback, "fOverallLaunchertopCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fOverallLaunchertopCallback){}/* CQT */
            aPrototype.fOverallLaunchertopCallback = fOverallLaunchertopCallback;










            var fOverallExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( theMethodName, "FAIL", null, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallExceptionHandler){}/* CQT */
            aPrototype.fOverallExceptionHandler = fOverallExceptionHandler;










            var pSL_launchMany = function( theCallback) {
                var aMethodName = "pSL_launchMany";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                var aExceptionHandler = this.fOverallExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallLaunchertopCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fOverallLaunchertopCallback( theCallback)", null));
                        return;
                    }


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToScheduleNextLaunchtopSpec( aCallback);
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








            var pF_LauncherTop = function( theCallback) {

                var aMethodName = "pF_LauncherTop";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                try {

                    this.pReceivedLaunchertopCallbackArg( theCallback, aMethodName);

                    var aThis = this;
                    theM_nextticker.pNextTick(
                        function() {

                            try {

                                var someTestFunctions = [
                                    aThis.pSL_loadcmpandtestspaths.bind( aThis),
                                    aThis.pSL_readLaunchtopSpecsList.bind( aThis),
                                    aThis.pSL_launchMany.bind( aThis)
                                ];


                                var aSeriesRunnedCallback = (function() {
                                    var aCbkFunction = function( theError){
                                        try {
                                            if( theError) {
                                                theCallback( aThis.fRecord( aMethodName, "FAIL", null, theError, null));
                                                return;
                                            }

                                            theCallback( null, aThis.fRecord( aMethodName, "OK", null, null, null));

                                        }
                                        catch( anException) {
                                            var aExceptionDetail = aThis.fExceptionDetail( anException);
                                            var aRecord = aThis.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                            theCallback( aThis.fRecord( aMethodName, "FAIL, null", aRecord, null));
                                        }
                                    };
                                    if( aCbkFunction){}/* CQT */
                                    return aCbkFunction;
                                    })();

                                var aWrappedCallback = aThis.fChainNewLaunchertopCallbackForCallback( aSeriesRunnedCallback, "pF_LauncherTop", theCallback, aMethodName);


                                aThis.pRunTtstLauncherSeries(
                                    someTestFunctions,
                                    aWrappedCallback
                                );
                            }
                            catch( anException) {
                                var aExceptionDetail = aThis.fExceptionDetail( anException);
                                var aRecord = aThis.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                theCallback( aThis.fRecord( aMethodName, "FAIL", null, aRecord, null));
                            }
                        }
                    );
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                    theCallback( this.fRecord( aMethodName, "FAIL", null, aRecord, null));
                }
            };
            if( pF_LauncherTop){}/* CQT */
            aPrototype.pF_LauncherTop = pF_LauncherTop;












            return aPrototype;

        })();




        var LauncherTop_Constructor = function( theTitle,
                                                theLaunchtopSpecsOrPath,
                                                theRunOptions,
                                                theHousekeepOptions,
                                                theReleasingOptions,
                                                theCleanUpOptions) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_CmpAndTestsPathsLoader   = null;

            this._v_LaunchtopSpecsOrPath = null;

            this._v_LaunchtopSpecsPaths = null;
            this._v_LaunchtopSpecs      = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;

            this._pInit_LauncherTop( theTitle,
                                     theLaunchtopSpecsOrPath,
                                     theRunOptions,
                                     theHousekeepOptions,
                                     theReleasingOptions,
                                     theCleanUpOptions);
        };
        LauncherTop_Constructor.prototype = aLauncherTop_Prototype;





        var LauncherTop_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = aLauncherTop_Prototype;
            this._v_Type = null;

            this._v_CmpAndTestsPathsLoader   = null;

            this._v_LaunchtopSpecsOrPath = null;

            this._v_LaunchtopSpecsPaths = null;
            this._v_LaunchtopSpecs      = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;
        };
        LauncherTop_SuperPrototypeConstructor.prototype = aLauncherTop_Prototype;











        var LauncherTopFactory = function( theTitle,
                                           theLaunchtopSpecsOrPath,
                                           theRunOptions,
                                           theHousekeepOptions,
                                           theReleasingOptions,
                                           theCleanUpOptions) {

            var aLauncherTop = new LauncherTop_Constructor( theTitle,
                                                            theLaunchtopSpecsOrPath,
                                                            theRunOptions,
                                                            theHousekeepOptions,
                                                            theReleasingOptions,
                                                            theCleanUpOptions);

            var aMethod = aLauncherTop.pF_LauncherTop.bind( aLauncherTop);

            return { "launcher": aLauncherTop, "method": aMethod};
        };











        var fDefineLauncherTop_andRunIfFirst = function( theTitle,
                                                         theLaunchtopSpecsOrPath,
                                                         theRunOptions,
                                                         theHousekeepOptions,
                                                         theReleasingOptions,
                                                         theCleanUpOptions) {


            var aLastLauncher = null;


            var FirstLauncherTopFactory = function() {

                var aLauncherAndMethod =  LauncherTopFactory(
                    theTitle,
                    theLaunchtopSpecsOrPath,
                    theRunOptions,
                    theHousekeepOptions,
                    theReleasingOptions,
                    theCleanUpOptions
                );
                if( aLauncherAndMethod) {
                    aLastLauncher = aLauncherAndMethod[ "launcher"];
                }

                return aLauncherAndMethod;
            };



            var aModule = {
                "LaunchtopSpecs": theLaunchtopSpecsOrPath,
                "LauncherFactory": LauncherTopFactory
            };



            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }
                        if( aLastLauncher) {
                            aLastLauncher.fRecord( theTitle, "EXIT", anExitCode, theError, null);
                        }
                        else {
                            var anExitRecord = { "launcher": theTitle, "EXIT": anExitCode};
                            console.log( "," + JSON.stringify( anExitRecord));
                        }
                        theM_exiter.p_Exit( anExitCode);
                    };


                    var aLauncherAndMethod = FirstLauncherTopFactory();
                    if( !aLauncherAndMethod) {
                        aCallback( "!FirstLauncherTopFactory()");
                        return;
                    }

                    var aMethod = aLauncherAndMethod[ "method"];
                    if( !aMethod) {
                        aCallback( "!FirstLauncherTopFactory().method");
                        return;
                    }

                    aMethod( aCallback);
                })()
            }




            return aModule;

        };








        var aModule_outer = {
            "LauncherTop_Prototype": aLauncherTop_Prototype,
            "LauncherTop_Constructor": LauncherTop_Constructor,
            "LauncherTop_SuperPrototypeConstructor": LauncherTop_SuperPrototypeConstructor,

            "LauncherTopFactory": LauncherTopFactory,

            "fDefineLauncherTop_andRunIfFirst":  fDefineLauncherTop_andRunIfFirst
        };
        pgInitFromModuleConstants( aModule_outer);
        aModule_outer.ModuleName     = ModuleName;
        aModule_outer.ModulePackages = ModulePackages;
        aModule_outer.ModuleFullName = ModuleFullName;




        return aModule_outer;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ttstlaunchergeneral    = require('../../ttst/ttstlaunchers/ttstlauncher-general');
            var aM_ttstlaunchermany       = require('../../ttst/ttstlaunchers/ttstlauncher-many');
            var aM_launchermany           = require('./launcher-many');
            var aM_firsttorun             = require('./firsttorun');
            var aM_specloader             = require('../resloader/specloader');
            var aM_cmpandtestspathsloader = require('../pathsloader/cmpandtestspathsloader');
            var aM_nextticker             = require('../../infrasvcs/nextticker/nextticker');
            var aM_exiter                 = require('../../infrasvcs/exiter/exiter');
            var aM_callbacker             = require('../callbacker');
            var aM_overrider              = require('../overrider');

            return aMod_definer(
                aM_ttstlaunchergeneral,
                aM_ttstlaunchermany,
                aM_launchermany,
                aM_firsttorun,
                aM_specloader,
                aM_cmpandtestspathsloader,
                aM_nextticker,
                aM_exiter,
                aM_callbacker,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../ttst/ttstlaunchers/ttstlauncher-general",
            "../../ttst/ttstlaunchers/ttstlauncher-many",
            "./launcher-many",
            "./firsttorun",
            "../resloader/specloader",
            "../pathsloader/cmpandtestspathsloader",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/exiter/exiter",
            "../callbacker",
            "../overrider"
        ], function (
            theM_ttstlaunchergeneral,
            theM_ttstlaunchermany,
            theM_launchermany,
            theM_firsttorun,
            theM_specloader,
            theM_cmpandtestspathsloader,
            theM_nextticker,
            theM_exiter,
            theM_callbacker,
            theM_overrider
            ) {
            return aMod_definer(
                theM_ttstlaunchergeneral,
                theM_ttstlaunchermany,
                theM_launchermany,
                theM_firsttorun,
                theM_specloader,
                theM_cmpandtestspathsloader,
                theM_nextticker,
                theM_exiter,
                theM_callbacker,
                theM_overrider
            );
        });
    }

})();

