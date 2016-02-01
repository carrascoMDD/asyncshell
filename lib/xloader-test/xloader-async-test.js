'use strict';

/*
 xloader-async-test.js
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
                                 theM_xloader,
                                 theM_exiter,
                                 theM_nextticker,
                                 theM_callbacker,
                                 theM_overrider) {


        var ModuleName     = "xloader-async-test";
        var ModulePackages = "xloader-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}




        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.XNAMESTOLOAD = [
                "../../../serverdef.json",
                "#root/serverdef.json"
            ];
            theToInit.LOGLOADS = true;

            theToInit.ANNOTATEXLOADERCALLBACKS = true;
            theToInit.RECORDXLOADERCALLBACKINVOCATIONS  = true;
            theToInit.RECORDXLOADERCALLBACKARGS         = true;

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

            theToInit.XLOADERTESTTITLE = "xloader-sync-test";

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







        var fDefineXLoaderAsyncTest_andRunIfFirst = function() {

            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;



            var ModuleGlobals = { };
            if( ModuleGlobals){}/* CQT */

            aModule.ModuleGlobals = ModuleGlobals;

            aModule.ModuleGlobals.gXNames    = [ ];
            aModule.ModuleGlobals.gAlreadyLoaded = [ ];








            var pXLoaderTest_async = function( theCallback) {

                var aMethodName = "pXLoaderTest_async";

                aModule.pInitFinderToScheduleNextXName( aModule.XNAMESTOLOAD);


                var aExceptionHandler = aModule.fOverallExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = aModule.fOverallXNameCallback( theCallback, aMethodName);
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
                                aThis.pTryToScheduleNextXName( aCallback);
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
            if( pXLoaderTest_async){}/* CQT */
            aModule.pXLoaderTest_async = pXLoaderTest_async;







            var pInitFinderToScheduleNextXName = function( theXNames) {
                aModule.ModuleGlobals.gXNames    = theXNames;
                aModule.ModuleGlobals.gAlreadyLoaded = [ ];
            };
            if( pInitFinderToScheduleNextXName){}/* CQT */
            aModule.pInitFinderToScheduleNextXName = pInitFinderToScheduleNextXName;










            var pTryToScheduleNextXName = function( theCallback) {
                var aMethodName = "pTryToScheduleNextXName";
                if( aMethodName){}/* CQT */

                var aXNameToScheduleNext = aModule.fFindXNameToScheduleNext();
                if( !aXNameToScheduleNext) {

                    theCallback();
                    return;
                }

                aModule.ModuleGlobals.gAlreadyLoaded.push( aXNameToScheduleNext);

                aModule.pScheduleNextXName( theCallback, aXNameToScheduleNext);
            };
            if( pTryToScheduleNextXName){}/* CQT */
            aModule.pTryToScheduleNextXName = pTryToScheduleNextXName;





            var fFindXNameToScheduleNext = function() {

                if( !aModule.ModuleGlobals.gXNames) {
                    return null;
                }

                var aPendingXName = null;

                var aNumXNames = aModule.ModuleGlobals.gXNames.length;
                for( var aXNameIdx=0; aXNameIdx < aNumXNames; aXNameIdx++) {

                    var aXName = aModule.ModuleGlobals.gXNames[ aXNameIdx];

                    if( aModule.ModuleGlobals.gAlreadyLoaded.indexOf( aXName) < 0) {
                        aPendingXName = aXName;
                        break;
                    }
                }
                if( !aPendingXName) {
                    return null;
                }

                return aPendingXName;
            };
            if( fFindXNameToScheduleNext){}/* CQT */
            aModule.fFindXNameToScheduleNext = fFindXNameToScheduleNext;










            var pScheduleNextXName = function( theCallback, theXName) {

                if( !theXName) {
                    theCallback( "FAIL:!theXName");
                    return;
                }

                var aCallback = aModule.fScheduleNextXNameCallback( theCallback);
                if( !aCallback) {
                    theCallback( "FAIL!aCallback");
                    return;
                }


                var  aXloader = new theM_xloader.XLoader_Constructor( "XLoaderToLoad-" + theXName, theXName);


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = aModule.fExceptionNextXNameHandler( aCallback);


                try {
                    aXloader.pLoadXNamed( theXName, aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pScheduleNextXName){}/* CQT */
            aModule.pScheduleNextXName = pScheduleNextXName;













            var fScheduleNextXNameCallback = function( theCallback) {
                var aMethodName = "fScheduleNextXNameCallback";

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

                    aThis.pTryToScheduleNextXName( theCallback);

                }).bind( this);

                var aWrappedCallback = aModule.fChainNewXNameCallbackForCallback( aCallback, "fScheduleNextXNameCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextXNameCallback){}/* CQT */
            aModule.fScheduleNextXNameCallback = fScheduleNextXNameCallback;








            var fChainNewXNameCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !aModule.ANNOTATEXLOADERCALLBACKS) {
                    return theNewCallback;
                }

                return theM_callbacker.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewXNameCallbackForCallback){}/* CQT */
            aModule.fChainNewXNameCallbackForCallback = fChainNewXNameCallbackForCallback;







            var pReceivedXNameCallbackArg = function( theCallback, theMethodName) {
                if( !aModule.ANNOTATEXLOADERCALLBACKS) {
                    return;
                }

                if( !aModule.RECORDXLOADERCALLBACKARGS) {
                    return;
                }

                if( !theCallback) {
                    return;
                }

                theM_callbacker.pReceivedCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedXNameCallbackArg){}/* CQT */
            aModule.pReceivedXNameCallbackArg = pReceivedXNameCallbackArg;








            var fExceptionNextXNameHandler = function( theCallback) {

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
            if( fExceptionNextXNameHandler){}/* CQT */
            aModule.fExceptionNextXNameHandler = fExceptionNextXNameHandler;












            var fOverallXNameCallback = function( theCallback) {
                var aMethodName = "fOverallXNameCallback";

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

                var aWrappedCallback = aModule.fChainNewXNameCallbackForCallback( aCallback, "fOverallXNameCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fOverallXNameCallback){}/* CQT */
            aModule.fOverallXNameCallback = fOverallXNameCallback;










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

                        var anExitRecord = { "launcher": aModule.XLOADERTESTTITLE , "EXIT": anExitCode, "error": theError};
                        console.log( "," + JSON.stringify( anExitRecord));
                        theM_exiter.p_Exit( anExitCode);
                    };

                    aModule.pXLoaderTest_async( aCallback);
                })()
            }





            return aModule;
        };






        var aModuleAlreadyRunIfFirst = fDefineXLoaderAsyncTest_andRunIfFirst( );
        if( aModuleAlreadyRunIfFirst){}/* CQT */
        return aModuleAlreadyRunIfFirst;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../common-test/exceptiondetails');
            var aM_firsttorun       = require('../common-test/launchers/firsttorun');
            var aM_xloader          = require('../common-test/xloader/xloader');
            var aM_exiter           = require('../infrasvcs/exiter/exiter');
            var aM_nextticker       = require('../infrasvcs/nextticker/nextticker');
            var aM_callbacker       = require('../common-test/callbacker');
            var aM_overrider        = require('../common-test/overrider');

            return aMod_definer( aM_exceptiondetails, aM_firsttorun, aM_xloader, aM_exiter, aM_nextticker, aM_callbacker, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/exceptiondetails",
            "../common-test/launchers/firsttorun",
            "../common-test/xloader/xloader",
            "../infrasvcs/exiter/exiter",
            "../infrasvcs/nextticker/nextticker",
            "../common-test/callbacker",
            "../common-test/overrider"
        ], function (
                theM_exceptiondetails,
                theM_firsttorun,
                theM_xloader,
                theM_exiter,
                theM_nextticker,
                theM_callbacker,
                theM_overrider
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_firsttorun,
                theM_xloader,
                theM_exiter,
                theM_nextticker,
                theM_callbacker,
                theM_overrider
            );
        });
    }



}());



























