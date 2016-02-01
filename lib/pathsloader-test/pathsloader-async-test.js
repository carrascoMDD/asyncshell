'use strict';

/*
 pathsloader-async-test.js
 Created 201409230718
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

    var aMod_definer = function( theM_exceptiondetails,
                                 theM_firsttorun,
                                 theM_pathsloader,
                                 theM_exiter,
                                 theM_nextticker,
                                 theM_callbacker) {


        var ModuleName     = "pathsloader-async-test";
        var ModulePackages = "pathsloader-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.PATHSNAMESTOLOAD = [
                "#root/cmppath.json",
                "#root/testspath.json"
            ];

            theToInit.PATHSLOADERTESTTITLE = "pathsloader-async-test";


            theToInit.LOGLOADS = true;



            theToInit.ANNOTATEPATHSLOADERCALLBACKS = true;
            theToInit.RECORDPATHSLOADERCALLBACKINVOCATIONS  = true;
            theToInit.RECORDPATHSLOADERCALLBACKARGS         = true;


        };



        var ModuleConstants = {};
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







        var fDefinePathsLoaderAsyncTest_andRunIfFirst = function() {

            var aModule = { };
            pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;



            var ModuleGlobals = { };
            if( ModuleGlobals){}/* CQT */

            aModule.ModuleGlobals = ModuleGlobals;

            aModule.ModuleGlobals.gPathsNames    = [ ];
            aModule.ModuleGlobals.gAlreadyLoaded = [ ];








            var pPathsLoaderTest_async = function( theCallback) {

                var aMethodName = "pPathsLoaderTest_async";

                aModule.pInitFinderToScheduleNextPathsName( aModule.PATHSNAMESTOLOAD);


                var aExceptionHandler = aModule.fOverallExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = aModule.fOverallPathsNameCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( "FAIL:!aCallbac");
                        return;
                    }


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToScheduleNextPathsName( aCallback);
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
            if( pPathsLoaderTest_async){}/* CQT */
            aModule.pPathsLoaderTest_async = pPathsLoaderTest_async;







            var pInitFinderToScheduleNextPathsName = function( thePathsNames) {
                aModule.ModuleGlobals.gPathsNames    = thePathsNames;
                aModule.ModuleGlobals.gAlreadyLoaded = [ ];
            };
            if( pInitFinderToScheduleNextPathsName){}/* CQT */
            aModule.pInitFinderToScheduleNextPathsName = pInitFinderToScheduleNextPathsName;










            var pTryToScheduleNextPathsName = function( theCallback) {
                var aMethodName = "pTryToScheduleNextPathsName";
                if( aMethodName){}/* CQT */

                var aPathsNameToScheduleNext = aModule.fFindPathsNameToScheduleNext();
                if( !aPathsNameToScheduleNext) {

                    theCallback();
                    return;
                }

                aModule.ModuleGlobals.gAlreadyLoaded.push( aPathsNameToScheduleNext);

                aModule.pScheduleNextPathsName( theCallback, aPathsNameToScheduleNext);
            };
            if( pTryToScheduleNextPathsName){}/* CQT */
            aModule.pTryToScheduleNextPathsName = pTryToScheduleNextPathsName;





            var fFindPathsNameToScheduleNext = function() {

                if( !aModule.ModuleGlobals.gPathsNames) {
                    return null;
                }

                var aPendingPathsName = null;

                var aNumPathsNames = aModule.ModuleGlobals.gPathsNames.length;
                for( var aPathsNameIdx=0; aPathsNameIdx < aNumPathsNames; aPathsNameIdx++) {

                    var aPathsName = aModule.ModuleGlobals.gPathsNames[ aPathsNameIdx];

                    if( aModule.ModuleGlobals.gAlreadyLoaded.indexOf( aPathsName) < 0) {
                        aPendingPathsName = aPathsName;
                        break;
                    }
                }
                if( !aPendingPathsName) {
                    return null;
                }

                return aPendingPathsName;
            };
            if( fFindPathsNameToScheduleNext){}/* CQT */
            aModule.fFindPathsNameToScheduleNext = fFindPathsNameToScheduleNext;










            var pScheduleNextPathsName = function( theCallback, thePathsName) {

                if( !thePathsName) {
                    theCallback( "FAIL:!thePathsName");
                    return;
                }

                var aCallback = aModule.fScheduleNextPathsNameCallback( theCallback);
                if( !aCallback) {
                    theCallback( "FAIL!aCallback");
                    return;
                }


                var  aPathsloader = new theM_pathsloader.PathsLoader_Constructor( "PathsLoaderToLoad-" + thePathsName, thePathsName);


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = aModule.fExceptionNextPathsNameHandler( aCallback);


                try {
                    aPathsloader.pLoadPathsNamed( thePathsName, aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pScheduleNextPathsName){}/* CQT */
            aModule.pScheduleNextPathsName = pScheduleNextPathsName;













            var fScheduleNextPathsNameCallback = function( theCallback) {
                var aMethodName = "fScheduleNextPathsNameCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        if( aModule.LOGLOADS) {
                            console.log( "NOTLOADED");
                            console.log( theError);
                        }
                        theCallback(theError);
                        return;
                    }

                    if( aModule.LOGLOADS) {
                        console.log( "ONE LOADED");
                        console.log( ModuleGlobals.gAlreadyLoaded.join( ","));
                    }

                    aThis.pTryToScheduleNextPathsName( theCallback);

                }).bind( this);

                var aWrappedCallback = aModule.fChainNewPathsNameCallbackForCallback( aCallback, "fScheduleNextPathsNameCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextPathsNameCallback){}/* CQT */
            aModule.fScheduleNextPathsNameCallback = fScheduleNextPathsNameCallback;








            var fChainNewPathsNameCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !aModule.ANNOTATEPATHSLOADERCALLBACKS) {
                    return theNewCallback;
                }

                return theM_callbacker.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewPathsNameCallbackForCallback){}/* CQT */
            aModule.fChainNewPathsNameCallbackForCallback = fChainNewPathsNameCallbackForCallback;







            var pReceivedPathsNameCallbackArg = function( theCallback, theMethodName) {
                if( !aModule.ANNOTATEPATHSLOADERCALLBACKS) {
                    return;
                }

                if( !aModule.RECORDPATHSLOADERCALLBACKARGS) {
                    return;
                }

                if( !theCallback) {
                    return;
                }

                theM_callbacker.pReceivedCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedPathsNameCallbackArg){}/* CQT */
            aModule.pReceivedPathsNameCallbackArg = pReceivedPathsNameCallbackArg;








            var fExceptionNextPathsNameHandler = function( theCallback) {

                if( !theCallback) {
                    return null;
                }

                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( theException);
                    if( aExceptionDetail){}/* CQT */

                    theCallback( aExceptionDetail);

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionNextPathsNameHandler){}/* CQT */
            aModule.fExceptionNextPathsNameHandler = fExceptionNextPathsNameHandler;












            var fOverallPathsNameCallback = function( theCallback) {
                var aMethodName = "fOverallPathsNameCallback";

                if( !theCallback) {
                    return null;
                }

                var aCallback = (function( theError) {

                    if( theError) {

                        if( aModule.LOGLOADS) {
                            console.log( "NOTLOADED");
                            console.log(theError);
                        }

                        theCallback( theError);
                        return;
                    }

                    if( aModule.LOGLOADS) {

                        console.log( "ALL LOADED");
                        console.log( ModuleGlobals.gAlreadyLoaded.join( ","));
                    }

                    theCallback();

                }).bind( this);

                var aWrappedCallback = aModule.fChainNewPathsNameCallbackForCallback( aCallback, "fOverallPathsNameCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fOverallPathsNameCallback){}/* CQT */
            aModule.fOverallPathsNameCallback = fOverallPathsNameCallback;










            var fOverallExceptionHandler = function( theCallback) {

                if( !theCallback) {
                    return null;
                }

                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( "FAIL:!theException");
                        return;
                    }

                    var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( theException);
                    if( aExceptionDetail){}/* CQT */

                    theCallback( aExceptionDetail);

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallExceptionHandler){}/* CQT */
            aModule.fOverallExceptionHandler = fOverallExceptionHandler;













            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }

                        var anExitRecord = { "launcher": aModule.PATHSLOADERTESTTITLE , "EXIT": anExitCode, "error": theError};
                        console.log( "," + JSON.stringify( anExitRecord));
                        theM_exiter.p_Exit( anExitCode);
                    };

                    aModule.pPathsLoaderTest_async( aCallback);
                })()
            }

            return aModule;
        };






        var aModuleAlreadyRunIfFirst = fDefinePathsLoaderAsyncTest_andRunIfFirst( );
        if( aModuleAlreadyRunIfFirst){}/* CQT */
        return aModuleAlreadyRunIfFirst;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../common-test/exceptiondetails');
            var aM_firsttorun       = require('../common-test/launchers/firsttorun');
            var aM_pathsloader      = require('../common-test/pathsloader/pathsloader');
            var aM_exiter           = require('../infrasvcs/exiter/exiter');
            var aM_nextticker       = require('../infrasvcs/nextticker/nextticker');
            var aM_callbacker       = require('../common-test/callbacker');

            return aMod_definer( aM_exceptiondetails, aM_firsttorun, aM_pathsloader, aM_exiter, aM_nextticker, aM_callbacker);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/exceptiondetails",
            "../common-test/launchers/firsttorun",
            "../common-test/pathsloader/pathsloader",
            "../infrasvcs/exiter/exiter",
            "../infrasvcs/nextticker/nextticker",
            "../common-test/callbacker"
        ], function (
            theM_exceptiondetails, theM_firsttorun, theM_pathsloader, theM_exiter, theM_nextticker, theM_callbacker) {
            return aMod_definer( theM_exceptiondetails, theM_firsttorun, theM_pathsloader, theM_exiter, theM_nextticker, theM_callbacker);
        });
    }



}());



























