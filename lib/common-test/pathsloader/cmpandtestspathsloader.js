'use strict';

/*
 cmpandtestspathsloader.js
 Created 201409230947
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

    var aMod_definer = function( theM_ttstlaunchergeneral,
                                 theM_firsttorun,
                                 theM_pathsloader,
                                 theM_nextticker,
                                 theM_exiter,
                                 theM_callbacker,
                                 theM_xloadrecord,
                                 theM_exceptiondetails,
                                 theM_cmploader,
                                 theM_specloader,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_asyncshellrootdir,
                                 theM_launchedfromdir,
                                 theM_path) {


        var ModuleName     = "cmpandtestspathsloader";
        var ModulePackages = "common-test/pathsloader";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.ANNOTATECMPANDTESTSPATHSLOADERCALLBACKS          = true;
            theToInit.RECORDCMPANDTESTSPATHSLOADERCALLBACKINVOCATIONS  = true;
            theToInit.RECORDCMPANDTESTSPATHSLOADERCALLBACKARGS         = true;

            theToInit.CMPPATHSNAME    = "#root/cmppath.json";
            theToInit.TESTSPATHSNAME  = "#root/testspath.json";

            theToInit.CMPPATHSNAME    = "cmppath.json";
            theToInit.TESTSPATHSNAME  = "testspath.json";
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

            theToInit.CMPANDTESTSPATHSNAME_DEFAULT = "DefaultNameForCmpAndTestsPathsLoader"

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











        var aCmpAndTestsPathsLoader_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "CmpAndTestsPathsLoader";

            aPrototype._v_Title      = null;

            aPrototype._v_CmpPathsOrigins    = null;
            aPrototype._v_TestsPathsOrigins  = null;

            aPrototype._v_CmpPaths       = null;
            aPrototype._v_TestsPaths     = null;


            aPrototype._v_Records     = null;

            aPrototype._v_CmpAndTestsPathsLoaderSeriesToRun      = null;
            aPrototype._v_CmpAndTestsPathsLoaderSeriesAlreadyRun = null;

            aPrototype._v_CmpLoader      = null;
            aPrototype._v_SpecLoader     = null;




            var _pInit = function( theTitle) {

                this._pInit_CmpAndTestsPathsLoader( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_CmpAndTestsPathsLoader = function( theTitle) {

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Title = theTitle;
                if( !this._v_Title) {
                    this._v_Title = this.CMPANDTESTSPATHSNAME_DEFAULT;
                }

                this._v_CmpPathsOrigins    = [ ];
                this._v_TestsPathsOrigins  = [ ];

                this._v_CmpPaths   = [ ];
                this._v_TestsPaths = [ ];

                this._v_Records    = [ ];

                this._v_CmpAndTestsPathsLoaderSeriesToRun      = null;
                this._v_CmpAndTestsPathsLoaderSeriesAlreadyRun = [ ];

                this._v_CmpLoader      = null;
                this._v_SpecLoader     = null;


                if( this._v_CmpPathsOrigins){}/* CQT */
                if( this._v_TestsPathsOrigins){}/* CQT */

            };
            if( _pInit_CmpAndTestsPathsLoader){}/* CQT */
            aPrototype._pInit_CmpAndTestsPathsLoader = _pInit_CmpAndTestsPathsLoader;









            var fExceptionDetail = function( theException) {
                return theM_exceptiondetails.fExceptionDetail( theException);
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;







            var pSL_load_cmppaths_fromAsyncShell = function( theCallback) {

                var aRootDir_AsyncShell = theM_asyncshellrootdir;
                if( !aRootDir_AsyncShell) {
                    theCallback();
                    return;
                }

                this.pLoad_cmppaths_fromOrigin( theCallback, aRootDir_AsyncShell);

            };
            if( pSL_load_cmppaths_fromAsyncShell){}/* CQT */
            aPrototype.pSL_load_cmppaths_fromAsyncShell = pSL_load_cmppaths_fromAsyncShell;










            var pSL_load_cmppaths_fromProject = function( theCallback) {

                var aRootDir_Project = theM_launchedfromdir;
                if( !aRootDir_Project) {
                    theCallback();
                    return;
                }

                var aRootDir_AsyncShell = theM_asyncshellrootdir;
                if( aRootDir_AsyncShell) {
                    if( aRootDir_Project == aRootDir_AsyncShell) {
                        theCallback();
                        return;
                    }
                }

                this.pLoad_cmppaths_fromOrigin( theCallback, aRootDir_Project);

            };
            if( pSL_load_cmppaths_fromProject){}/* CQT */
            aPrototype.pSL_load_cmppaths_fromProject = pSL_load_cmppaths_fromProject;










            var pLoad_cmppaths_fromOrigin = function( theCallback, theCmpPathsSourceDir) {

                var aMethodName = "pLoad_cmppaths_fromOrigin";


                if( !theCmpPathsSourceDir) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theCmpPathsSourceDir", null));
                    return;
                }


                var aCmpPathsName = this.CMPPATHSNAME;
                if( !aCmpPathsName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!aCmpPathsName", null));
                    return;
                }

                var aCmpPathsSourcePath = theM_path.join( theCmpPathsSourceDir, aCmpPathsName);

                this._v_CmpPathsOrigins.push( aCmpPathsSourcePath);


                var aCmpPathsloader = new theM_pathsloader.PathsLoader_Constructor( "CmpPathsLoaderFor-" + this._v_Title  + "-ToLoad-" + aCmpPathsSourcePath, aCmpPathsSourcePath, theCmpPathsSourceDir);


                var aCallback = this.fLoadCmpPathsCallback( theCallback, aCmpPathsSourcePath);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fLoadCmpPathsCallback( theCallback)", null));
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fLoadCmpPathsExceptionHandler( aCallback, aCmpPathsSourcePath);

                try {
                    aCmpPathsloader.pLoadPathsNamed( aCmpPathsSourcePath, aCallback, theCmpPathsSourceDir);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }


            };
            if( pLoad_cmppaths_fromOrigin){}/* CQT */
            aPrototype.pLoad_cmppaths_fromOrigin = pLoad_cmppaths_fromOrigin;









            var fLoadCmpPathsCallback = function( theCallback, theCmpPathsSourcePath) {
                var aMethodName = "fLoadCmpPathsCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theCmpPaths) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aMethodName, "FAIL", null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    if( !theCmpPaths) {
                        theCallback( null, aThis.fRecord( aMethodName, "OK", null, "!theCmpPaths", theCmpPathsSourcePath));
                    }

                    var aNumCmpPaths = theCmpPaths.length;
                    if( !aNumCmpPaths) {
                        theCallback( null, aThis.fRecord( aMethodName, "OK", null, "!theCmpPaths.length", theCmpPathsSourcePath));
                    }

                    Array.prototype.push.apply( aThis._v_CmpPaths, theCmpPaths);

                    theCallback( null, aThis.fRecord( aMethodName, "OK", aThis._v_CmpPaths, null, theCmpPathsSourcePath));

                }).bind( this);

                var aWrappedCallback = this.fChainNewCmpAndTestsPathsLoaderCallbackForCallback( aCallback, "fLoadCmpPathsCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fLoadCmpPathsCallback){}/* CQT */
            aPrototype.fLoadCmpPathsCallback = fLoadCmpPathsCallback;








            var fLoadCmpPathsExceptionHandler = function( theCallback, theCmpPathsSourcePath) {

                var aMethodName = "fLoadCmpPathsExceptionHandler";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aMethodName, "FAIL", theCmpPathsSourcePath, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aMethodName, "CATCHED_EXCEPTION", theCmpPathsSourcePath, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fLoadCmpPathsExceptionHandler){}/* CQT */
            aPrototype.fLoadCmpPathsExceptionHandler = fLoadCmpPathsExceptionHandler;












            var pSL_checksomeloaded_cmppaths = function( theCallback) {

                var aMethodName = "pSL_checksomeloaded_cmppaths";

                if( !this._v_CmpPaths || !this._v_CmpPaths.length) {
                    var aRecordFail = this.fRecord( aMethodName, "FAIL", null, "!this._v_CmpPaths", null);
                    if( aRecordFail){}/* CQT */

                    theCallback( aRecordFail);
                    return;
                }

                theCallback();

            };
            if( pSL_checksomeloaded_cmppaths){}/* CQT */
            aPrototype.pSL_checksomeloaded_cmppaths = pSL_checksomeloaded_cmppaths;


















            var pSL_load_testspaths_fromAsyncShell = function( theCallback) {

                var aRootDir_AsyncShell = theM_asyncshellrootdir;
                if( !aRootDir_AsyncShell) {
                    theCallback();
                    return;
                }

                this.pLoad_testspaths_fromOrigin( theCallback, aRootDir_AsyncShell);

            };
            if( pSL_load_testspaths_fromAsyncShell){}/* CQT */
            aPrototype.pSL_load_testspaths_fromAsyncShell = pSL_load_testspaths_fromAsyncShell;










            var pSL_load_testspaths_fromProject = function( theCallback) {

                var aRootDir_Project = theM_launchedfromdir;
                if( !aRootDir_Project) {
                    theCallback();
                    return;
                }

                var aRootDir_AsyncShell = theM_asyncshellrootdir;
                if( aRootDir_AsyncShell) {
                    if( aRootDir_Project == aRootDir_AsyncShell) {
                        theCallback();
                        return;
                    }
                }

                this.pLoad_testspaths_fromOrigin( theCallback, aRootDir_Project);

            };
            if( pSL_load_testspaths_fromProject){}/* CQT */
            aPrototype.pSL_load_testspaths_fromProject = pSL_load_testspaths_fromProject;









            var pLoad_testspaths_fromOrigin = function( theCallback, theTestsPathsSourceDir) {

                var aMethodName = "pLoad_testspaths_fromOrigin";


                if( !theTestsPathsSourceDir) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theTestsPathsSourceDir", null));
                    return;
                }

                var aTestsPathsName = this.TESTSPATHSNAME;
                if( !aTestsPathsName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!aTestsPathsName", null));
                    return;
                }

                var aTestsPathsSourcePath = theM_path.join( theTestsPathsSourceDir, aTestsPathsName);

                this._v_CmpPathsOrigins.push( aTestsPathsSourcePath);


                var  aTestsPathsloader = new theM_pathsloader.PathsLoader_Constructor( "TestsPathsLoaderFor-" + this._v_Title  + "-ToLoad-" + aTestsPathsSourcePath, aTestsPathsSourcePath, theTestsPathsSourceDir);
                if( aTestsPathsloader){}/* CQT */


                var aCallback = this.fLoadTestsPathsCallback( theCallback, aTestsPathsSourcePath);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fLoadTestsPathsCallback( theCallback)", null));
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fLoadTestsPathsExceptionHandler( aCallback, aTestsPathsSourcePath);

                try {
                    aTestsPathsloader.pLoadPathsNamed( aTestsPathsSourcePath, aCallback, theTestsPathsSourceDir);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }


            };
            if( pLoad_testspaths_fromOrigin){}/* CQT */
            aPrototype.pLoad_testspaths_fromOrigin = pLoad_testspaths_fromOrigin;










            var fLoadTestsPathsCallback = function( theCallback) {
                var aMethodName = "fLoadTestsPathsCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theTestsPaths) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aMethodName, "FAIL", null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }



                    if( !theTestsPaths) {
                        theCallback( null, aThis.fRecord( aMethodName, "OK", null, "!theCmpPaths", null));
                    }

                    var aNumTestsPaths = theTestsPaths.length;
                    if( !aNumTestsPaths) {
                        theCallback( null, aThis.fRecord( aMethodName, "OK", null, "!theTestsPaths.length", null));
                    }

                    Array.prototype.push.apply( aThis._v_TestsPaths, theTestsPaths);

                    theCallback( null, aThis.fRecord( aMethodName, "OK", aThis._v_TestsPaths, null, null));

                }).bind( this);

                var aWrappedCallback = this.fChainNewCmpAndTestsPathsLoaderCallbackForCallback( aCallback, "fLoadTestsPathsCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fLoadTestsPathsCallback){}/* CQT */
            aPrototype.fLoadTestsPathsCallback = fLoadTestsPathsCallback;








            var fLoadTestsPathsExceptionHandler = function( theCallback, theCmpPathsSourcePath) {

                var aMethodName = "fLoadTestsPathsExceptionHandler";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aMethodName, "FAIL", theCmpPathsSourcePath, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aMethodName, "FAIL", theCmpPathsSourcePath, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fLoadTestsPathsExceptionHandler){}/* CQT */
            aPrototype.fLoadTestsPathsExceptionHandler = fLoadTestsPathsExceptionHandler;









            var pSL_checksomeloaded_testspaths = function( theCallback) {

                var aMethodName = "pSL_checksomeloaded_testspaths";

                if( !this._v_TestsPaths || !this._v_TestsPaths.length) {
                    var aRecordFail = this.fRecord( aMethodName, "FAIL", null, "!this._v_TestsPaths", null);
                    if( aRecordFail){}/* CQT */

                    theCallback( aRecordFail);
                    return;
                }

                theCallback();

            };
            if( pSL_checksomeloaded_testspaths){}/* CQT */
            aPrototype.pSL_checksomeloaded_testspaths = pSL_checksomeloaded_testspaths;











            var fChainNewCmpAndTestsPathsLoaderCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATECMPANDTESTSPATHSLOADERCALLBACKS) {
                    return theNewCallback;
                }

                return theM_callbacker.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewCmpAndTestsPathsLoaderCallbackForCallback){}/* CQT */
            aPrototype.fChainNewCmpAndTestsPathsLoaderCallbackForCallback = fChainNewCmpAndTestsPathsLoaderCallbackForCallback;







            var pReceivedCmpAndTestsPathsLoaderCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATECMPANDTESTSPATHSLOADERCALLBACKS) {
                    return;
                }

                if( !this.RECORDCMPANDTESTSPATHSLOADERCALLBACKARGS) {
                    return;
                }

                if( !theCallback) {
                    return;
                }

                theM_callbacker.pReceivedCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedCmpAndTestsPathsLoaderCallbackArg){}/* CQT */
            aPrototype.pReceivedCmpAndTestsPathsLoaderCallbackArg = pReceivedCmpAndTestsPathsLoaderCallbackArg;










            var fRecord = function( theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecord = new theM_xloadrecord.XLoadRecord_Constructor( this, theStep, theEventKind, theData, theErrorReason, theErrorDetail);

                if( aRecord) {
                    this._v_Records.push( aRecord);

                    if( this.LOGRECORDS) {
                        this.pLogRecord( aRecord);
                    }
                }

                return aRecord;
            };
            if( fRecord){}/* CQT */
            aPrototype.fRecord = fRecord;







            var fRecordCallback = function( theEventKind, theCallback, theError, theResult) {
                var aMethodName = theCallback.__MethodName;
                if( !aMethodName) {
                    aMethodName = null;
                }
                return this.fRecord( aMethodName, theEventKind, theCallback, theError, theResult);
            };
            if( fRecordCallback){}/* CQT */
            aPrototype.fRecordCallback = fRecordCallback;






            var pLogRecord = function( theRecord) {
                if( this.LOGRECORDS) {
                    if( theRecord) {
                        var aLogString = theRecord.fLogString();
                        if( aLogString) {
                            console.log( "," + aLogString);
                        }
                    }
                }
            };
            if( pLogRecord){}/* CQT */
            aPrototype.pLogRecord = pLogRecord;











            var pInitFinderToRunCmpAndTestsPathsLoaderSeries = function( theSeriesToRun) {

                this._v_CmpAndTestsPathsLoaderSeriesToRun      = theSeriesToRun;
                this._v_CmpAndTestsPathsLoaderSeriesAlreadyRun = [ ];
            };
            if( pInitFinderToRunCmpAndTestsPathsLoaderSeries){}/* CQT */
            aPrototype.pInitFinderToRunCmpAndTestsPathsLoaderSeries = pInitFinderToRunCmpAndTestsPathsLoaderSeries;












            var pTryToRunNextInCmpAndTestsPathsLoaderSeries = function( theCallback) {
                var aMethodName = "pTryToRunNextInCmpAndTestsPathsLoaderSeries";
                if( aMethodName){}/* CQT */

                var aSeriesToRunNext = this.fFindCmpAndTestsPathsLoaderSeriesToRunNext();
                if( !aSeriesToRunNext) {
                    theCallback();
                    return;
                }

                this._v_CmpAndTestsPathsLoaderSeriesAlreadyRun.push( aSeriesToRunNext);


                this.pRunNextInCmpAndTestsPathsLoaderSeries( theCallback, aSeriesToRunNext);

            };
            if( pTryToRunNextInCmpAndTestsPathsLoaderSeries){}/* CQT */
            aPrototype.pTryToRunNextInCmpAndTestsPathsLoaderSeries = pTryToRunNextInCmpAndTestsPathsLoaderSeries;











            var pRunNextInCmpAndTestsPathsLoaderSeries = function( theCallback, theToRun) {

                var aMethodName = "pRunNextInCmpAndTestsPathsLoaderSeries";

                if( !theToRun) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theToRun", null));
                    return;
                }


                if( !( typeof theToRun == "function")) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!( typeof theToRun == 'function)", null));
                }



                var aCallback = this.fRunNextInCmpAndTestsPathsLoaderSeriesCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fRunNextInCmpAndTestsPathsLoaderSeriesCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextInCmpAndTestsPathsLoaderSeriesHandler( aCallback);

                try {
                    theToRun( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pRunNextInCmpAndTestsPathsLoaderSeries){}/* CQT */
            aPrototype.pRunNextInCmpAndTestsPathsLoaderSeries = pRunNextInCmpAndTestsPathsLoaderSeries;







            var fFindCmpAndTestsPathsLoaderSeriesToRunNext = function() {

                if( !this._v_CmpAndTestsPathsLoaderSeriesToRun) {
                    return null;
                }

                var aPendingSeriesToRun = null;

                var aNumSeriesToRuns = this._v_CmpAndTestsPathsLoaderSeriesToRun.length;
                for( var aSeriesToRunIdx=0; aSeriesToRunIdx < aNumSeriesToRuns; aSeriesToRunIdx++) {

                    var aSeriesToRun = this._v_CmpAndTestsPathsLoaderSeriesToRun[ aSeriesToRunIdx];

                    if( this._v_CmpAndTestsPathsLoaderSeriesAlreadyRun.indexOf( aSeriesToRun) < 0) {
                        aPendingSeriesToRun = aSeriesToRun;
                        break;
                    }
                }
                if( !aPendingSeriesToRun) {
                    return null;
                }

                return aPendingSeriesToRun;
            };
            if( fFindCmpAndTestsPathsLoaderSeriesToRunNext){}/* CQT */
            aPrototype.fFindCmpAndTestsPathsLoaderSeriesToRunNext = fFindCmpAndTestsPathsLoaderSeriesToRunNext;












            var fRunNextInCmpAndTestsPathsLoaderSeriesCallback = function( theCallback) {
                var aMethodName = "fRunNextInCmpAndTestsPathsLoaderSeriesCallback";

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

                    aThis.pTryToRunNextInCmpAndTestsPathsLoaderSeries( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewCmpAndTestsPathsLoaderCallbackForCallback( aCallback, "fRunNextInCmpAndTestsPathsLoaderSeriesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fRunNextInCmpAndTestsPathsLoaderSeriesCallback){}/* CQT */
            aPrototype.fRunNextInCmpAndTestsPathsLoaderSeriesCallback = fRunNextInCmpAndTestsPathsLoaderSeriesCallback;










            var fExceptionNextInCmpAndTestsPathsLoaderSeriesHandler = function( theCallback, theMethodName) {

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
            if( fExceptionNextInCmpAndTestsPathsLoaderSeriesHandler){}/* CQT */
            aPrototype.fExceptionNextInCmpAndTestsPathsLoaderSeriesHandler = fExceptionNextInCmpAndTestsPathsLoaderSeriesHandler;
















            var fOverallRunCmpAndTestsPathsLoaderSeriesCallback = function( theCallback) {
                var aMethodName = "fOverallRunCmpAndTestsPathsLoaderSeriesCallback";

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

                var aWrappedCallback = this.fChainNewCmpAndTestsPathsLoaderCallbackForCallback( aCallback, "fOverallRunCmpAndTestsPathsLoaderSeriesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fOverallRunCmpAndTestsPathsLoaderSeriesCallback){}/* CQT */
            aPrototype.fOverallRunCmpAndTestsPathsLoaderSeriesCallback = fOverallRunCmpAndTestsPathsLoaderSeriesCallback;










            var fOverallRunCmpAndTestsPathsLoaderSeriesExceptionHandler = function( theCallback, theMethodName) {

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
            if( fOverallRunCmpAndTestsPathsLoaderSeriesExceptionHandler){}/* CQT */
            aPrototype.fOverallRunCmpAndTestsPathsLoaderSeriesExceptionHandler = fOverallRunCmpAndTestsPathsLoaderSeriesExceptionHandler;













            var pRunCmpAndTestsPathsLoaderSeries = function( theSeriesToRun, theCallback) {
                var aMethodName = "pRunCmpAndTestsPathsLoaderSeries";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                var aExceptionHandler = this.fOverallRunCmpAndTestsPathsLoaderSeriesExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallRunCmpAndTestsPathsLoaderSeriesCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fOverallRunCmpAndTestsPathsLoaderSeriesCallback( theCallback)", null));
                        return;
                    }



                    this.pInitFinderToRunCmpAndTestsPathsLoaderSeries( theSeriesToRun);


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToRunNextInCmpAndTestsPathsLoaderSeries( aCallback);
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
            if( pRunCmpAndTestsPathsLoaderSeries){}/* CQT */
            aPrototype.pRunCmpAndTestsPathsLoaderSeries = pRunCmpAndTestsPathsLoaderSeries;











            var pSL_instantiate_cmploader = function( theCallback) {

                var aMethodName = "pSL_instantiate_cmploader";

                if( !this._v_CmpPaths) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_CmpPaths", null));
                    return;
                }

                this._v_CmpLoader = new theM_cmploader.fgGlobalCmpLoader( );

                this._v_CmpLoader.fAddResAndPackagePaths( this._v_CmpPaths);

                theCallback();

            };
            if( pSL_instantiate_cmploader){}/* CQT */
            aPrototype.pSL_instantiate_cmploader = pSL_instantiate_cmploader;









            var pSL_instantiate_specloader = function( theCallback) {

                var aMethodName = "pSL_instantiate_specloader";

                if( !this._v_TestsPaths) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_TestsPaths", null));
                    return;
                }

                this._v_SpecLoader = new theM_specloader.fgGlobalSpecLoader( );

                this._v_SpecLoader.fAddResAndPackagePaths( this._v_TestsPaths);

                theCallback();

            };
            if( pSL_instantiate_specloader){}/* CQT */
            aPrototype.pSL_instantiate_specloader = pSL_instantiate_specloader;














            var pF_CmpAndTestsPathsLoader = function( theCallback) {

                var aMethodName = "pF_CmpAndTestsPathsLoader";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                try {

                    this.pReceivedCmpAndTestsPathsLoaderCallbackArg( theCallback, aMethodName);

                    var aThis = this;
                    theM_nextticker.pNextTick(
                        function() {

                            try {

                                var someTestFunctions = [
                                    aThis.pSL_load_cmppaths_fromAsyncShell.bind( aThis),
                                    aThis.pSL_load_cmppaths_fromProject.bind( aThis),
                                    aThis.pSL_checksomeloaded_cmppaths.bind( aThis),
                                    aThis.pSL_instantiate_cmploader.bind( aThis),
                                    aThis.pSL_load_testspaths_fromAsyncShell.bind( aThis),
                                    aThis.pSL_load_testspaths_fromProject.bind( aThis),
                                    aThis.pSL_checksomeloaded_testspaths.bind( aThis),
                                    aThis.pSL_instantiate_specloader.bind( aThis)
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
                                            var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                                            var aRecord = aThis.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                            theCallback( aThis.fRecord( aMethodName, "FAIL, null", aRecord, null));
                                        }
                                    };
                                    if( aCbkFunction){}/* CQT */
                                    return aCbkFunction;
                                })();


                                var aWrappedCallback = aThis.fChainNewCmpAndTestsPathsLoaderCallbackForCallback( aSeriesRunnedCallback, "pF_CmpAndTestsPathsLoader", theCallback, aMethodName);

                                aThis.pRunCmpAndTestsPathsLoaderSeries(
                                    someTestFunctions,
                                    aWrappedCallback
                                );
                            }
                            catch( anException) {
                                var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                                var aRecord = aThis.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                theCallback( aThis.fRecord( aMethodName, "FAIL", null, aRecord, null));
                            }
                        }
                    );
                }
                catch( anException) {
                    var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                    var aRecord = this.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                    theCallback( this.fRecord( aMethodName, "FAIL", null, aRecord, null));
                }
            };
            if( pF_CmpAndTestsPathsLoader){}/* CQT */
            aPrototype.pF_CmpAndTestsPathsLoader = pF_CmpAndTestsPathsLoader;











            return aPrototype;

        })();




        var CmpAndTestsPathsLoader_Constructor = function( theTitle) {

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Title = null;

            this._v_CmpPathsOrigins    = null;
            this._v_TestsPathsOrigins  = null;

            this._v_CmpPaths   = null;
            this._v_TestsPaths = null;

            this._v_Records    = null;

            this._v_CmpAndTestsPathsLoaderSeriesToRun      = null;
            this._v_CmpAndTestsPathsLoaderSeriesAlreadyRun = null;

            this._v_CmpLoader      = null;
            this._v_SpecLoader     = null;

            this._pInit_CmpAndTestsPathsLoader( theTitle);
        };
        CmpAndTestsPathsLoader_Constructor.prototype = aCmpAndTestsPathsLoader_Prototype;





        var CmpAndTestsPathsLoader_SuperPrototypeConstructor = function() {

            this._v_Prototype = aCmpAndTestsPathsLoader_Prototype;
            this._v_Type = null;

            this._v_Title = null;

            this._v_CmpPathsOrigins    = null;
            this._v_TestsPathsOrigins  = null;

            this._v_CmpPaths   = null;
            this._v_TestsPaths = null;

            this._v_Records    = null;

            this._v_CmpAndTestsPathsLoaderSeriesToRun      = null;
            this._v_CmpAndTestsPathsLoaderSeriesAlreadyRun = null;

            this._v_CmpLoader      = null;
            this._v_SpecLoader     = null;
        };
        CmpAndTestsPathsLoader_SuperPrototypeConstructor.prototype = aCmpAndTestsPathsLoader_Prototype;











        var CmpAndTestsPathsLoaderFactory = function(
            theTitle, theLaunchtopSpecsOrPath) {

            var aCmpAndTestsPathsLoader = new CmpAndTestsPathsLoader_Constructor( theTitle, theLaunchtopSpecsOrPath);

            var aMethod = aCmpAndTestsPathsLoader.pF_CmpAndTestsPathsLoader.bind( aCmpAndTestsPathsLoader);

            return { "launcher": aCmpAndTestsPathsLoader, "method": aMethod};
        };











        var fDefineCmpAndTestsPathsLoader_andRunIfFirst = function( theTitle, theLaunchtopSpecsOrPath) {


            var aLastLauncher = null;


            var aLauncherFactory = function() {

                var aLauncherAndMethod =  CmpAndTestsPathsLoaderFactory( theTitle, theLaunchtopSpecsOrPath);
                if( !aLauncherAndMethod) {
                    return null;
                }

                aLastLauncher = aLauncherAndMethod[ "launcher"];

                return aLauncherAndMethod;
            };



            var aModule = {
                "LaunchtopSpecs": theLaunchtopSpecsOrPath,
                "LauncherFactory": CmpAndTestsPathsLoaderFactory
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


                    var aLauncherAndMethod = aLauncherFactory();
                    if( !aLauncherAndMethod) {
                        aCallback( "!LauncherFactory()");
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
            "CmpAndTestsPathsLoader_Prototype": aCmpAndTestsPathsLoader_Prototype,
            "CmpAndTestsPathsLoader_Constructor": CmpAndTestsPathsLoader_Constructor,
            "CmpAndTestsPathsLoader_SuperPrototypeConstructor": CmpAndTestsPathsLoader_SuperPrototypeConstructor,

            "CmpAndTestsPathsLoaderFactory": CmpAndTestsPathsLoaderFactory,

            "fDefineCmpAndTestsPathsLoader_andRunIfFirst":  fDefineCmpAndTestsPathsLoader_andRunIfFirst
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

            var aM_ttstlaunchergeneral = require('../../ttst/ttstlaunchers/ttstlauncher-general');
            var aM_firsttorun          = require('../launchers/firsttorun');
            var aM_pathsloader         = require('../pathsloader/pathsloader');
            var aM_nextticker          = require('../../infrasvcs/nextticker/nextticker');
            var aM_exiter              = require('../../infrasvcs/exiter/exiter');
            var aM_callbacker          = require('../callbacker');
            var aM_xloadrecord         = require('../xloader/xloadrecord');
            var aM_exceptiondetails    = require('../exceptiondetails');
            var aM_cmploader           = require('../resloader/cmploader');
            var aM_specloader          = require('../resloader/specloader');
            var aM_overrider           = require('../overrider');
            var aM_sentinels           = require('../sentinels');
            var aM_asyncshellrootdir   = require('../../../asyncshellrootdir');
            var aM_launchedfromdir     = require('../../launchedfromdir');
            var aM_path                = require( 'path');

            return aMod_definer(
                aM_ttstlaunchergeneral,
                aM_firsttorun,
                aM_pathsloader,
                aM_nextticker,
                aM_exiter,
                aM_callbacker,
                aM_xloadrecord,
                aM_exceptiondetails,
                aM_cmploader,
                aM_specloader,
                aM_overrider,
                aM_sentinels,
                aM_asyncshellrootdir,
                aM_launchedfromdir,
                aM_path
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../ttst/ttstlaunchers/ttstlauncher-general",
            "../launchers/firsttorun",
            "../resloader/specloader",
            "../pathsloader/pathsloader",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/exiter/exiter",
            "../callbacker",
            "../xloader/xloadrecord",
            "../exceptiondetails",
            "../resloader/cmploader",
            "../resloader/specloader",
            "../overrider",
            "../sentinels",
            "../../../asyncshellrootdir",
            "../../launchedfromdir",
            "path"
        ], function (
                theM_ttstlaunchergeneral,
                theM_firsttorun,
                theM_pathsloader,
                theM_nextticker,
                theM_exiter,
                theM_callbacker,
                theM_xloadrecord,
                theM_exceptiondetails,
                theM_cmploader,
                theM_specloader,
                theM_overrider,
                theM_sentinels,
                theM_asyncshellrootdir,
                theM_launchedfromdir,
                theM_path
            ) {
            return aMod_definer(
                theM_ttstlaunchergeneral,
                theM_firsttorun,
                theM_pathsloader,
                theM_nextticker,
                theM_exiter,
                theM_callbacker,
                theM_xloadrecord,
                theM_exceptiondetails,
                theM_cmploader,
                theM_specloader,
                theM_overrider,
                theM_sentinels,
                theM_asyncshellrootdir,
                theM_launchedfromdir,
                theM_path
            );
        });
    }

})();

