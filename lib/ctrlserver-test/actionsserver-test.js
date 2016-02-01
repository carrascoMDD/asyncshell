'use strict';

/*
 actionsserver-test.js
 Created 201409212117
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

    var aMod_definer = function( theM_sentinels,
                                 theM_stacktrace,
                                 theM_identifier,
                                 theM_recorder,
                                 theM_actionsserver,
                                 theM_httprequesttest,
                                 theM_actionspec) {


        var ModuleName     = "actionsserver-test";
        var ModulePackages = "ctrlserver-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGEXCEPTIONDETAILS  = true;
            theToInit.LOGSPECPATHS         = true;
            theToInit.LOGLISTENS           = true;
            theToInit.LOGROUTES            = true;
            theToInit.LOGCLOSES            = true;
            theToInit.LOGHANDLES           = true;
            theToInit.LOGREPLIES           = true;
            theToInit.LOGERRORS            = true;
            theToInit.LOGVERIFICATIONFAILS = true;



            theToInit.MAXERRORSTRINGLEN       = 32768;
            theToInit.MAXREQUESTSPECSTRINGLEN = 32768;

            theToInit.MINSERVERTESTPATHTOROOT = "../..";

            theToInit.MINSERVERTESTPATHTOTESTSROOT = theToInit.MINSERVERTESTPATHTOROOT + "/tests";

            theToInit.PATHSEPARATOR = "/";

            theToInit.METHOD_GET  = "GET";
            theToInit.METHOD_POST = "POST";

            theToInit.METHODS = [
                theToInit.METHOD_GET,
                theToInit.METHOD_POST
            ];

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













        var aActionsServerTest_Prototype = (function() {


            var aPrototype = { };

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_Type = "ActionsServerTest";
            aPrototype._v_Module = null;

            aPrototype._v_Title    = null;


            aPrototype._v_RequestSpecsOrPath    = null;
            aPrototype._v_RequestSpecs          = null;

            aPrototype._v_StepsToRun            = null;
            aPrototype._v_StepsAlreadyScheduled = null;

            aPrototype._v_CtrlServer      = null;
            aPrototype._v_RequestTest     = null;
            aPrototype._v_ListenedReports = null;

            aPrototype._v_RegisteredRequestSpecs = null;

            aPrototype._v_Identifier = null;
            aPrototype._v_Recorder   = null;





            var _pInit = function( theTitle, theRequestSpecsPath) {

                this._pInit_ActionsServerTest( theTitle, theRequestSpecsPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_ActionsServerTest = function( theTitle, theRequestSpecsPath) {

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_Title    = theTitle;

                this._v_RequestSpecsOrPath    = theRequestSpecsPath;
                this._v_RequestSpecs          = null;

                this._v_StepsToRun            = null;
                this._v_StepsAlreadyScheduled = [ ];

                this._v_CtrlServer       = null;
                this._v_RequestTest      = null;
                this._v_ListenedReports  = [ ];

                this._v_RegisteredRequestSpecs = [ ];

                this._v_Identifier = null;
                this._v_Recorder   = null;
            };
            if( _pInit_ActionsServerTest){}/* CQT */
            aPrototype._pInit_ActionsServerTest = _pInit_ActionsServerTest;








            var fExceptionDetail = function( theException) {
                if( !theException) {
                    return null;
                }


                var anExceptionDetail = {
                    exception: theException.toString()
                };


                var anExceptionTrace = theM_stacktrace( { e: theException});
                if( anExceptionTrace) {
                    anExceptionDetail.trace = anExceptionTrace;
                }

                if( this.LOGEXCEPTIONDETAILS) {
                    console.log( "exception:" + anExceptionDetail.exception);
                    console.log( anExceptionDetail.recex);
                    console.log( anExceptionDetail.trace);
                }

                return anExceptionDetail;
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;














            var fNewVoidListenedReport = function() {

                var aListenedReport = {
                    "spec": null,
                    "request": null,
                    "response": null,
                    "respondeddata": null
                };
                if( aListenedReport){}/* CQT */

                return aListenedReport;
            };
            if( fNewVoidListenedReport){}/* CQT */
            aPrototype.fNewVoidListenedReport = fNewVoidListenedReport;






            var pAddListenedReport = function( theListenedReport) {
                if( !theListenedReport) {
                    return;
                }

                if( this._v_ListenedReports.indexOf( theListenedReport) >= 0) {
                    return;
                }

                this._v_ListenedReports.push( theListenedReport);
            };
            if( pAddListenedReport){}/* CQT */
            aPrototype.pAddListenedReport = pAddListenedReport;










            var fReplaceRootSymbolInPath = function( theOriginal, theRootSymbol, theRootPath) {
                if( !theOriginal) {
                    return theOriginal;
                }

                if( !theRootSymbol) {
                    return theOriginal;
                }

                if( !( typeof theRootPath == "string") || !theRootPath.length)  {
                    return theOriginal;
                }


                var aReplaced = theOriginal;

                var someNameSteps = theOriginal.split( this.PATHSEPARATOR);
                if( someNameSteps) {
                    var aNumNameSteps = someNameSteps.length;
                    if( aNumNameSteps) {

                        var aFirstStep = someNameSteps[ 0];
                        if( aFirstStep == theRootSymbol) {

                            someNameSteps[ 0] = theRootPath;
                            aReplaced = someNameSteps.join( this.PATHSEPARATOR);
                        }
                    }
                }

                return aReplaced;
            };
            if( fReplaceRootSymbolInPath){}/* CQT */
            aPrototype.fReplaceRootSymbolInPath = fReplaceRootSymbolInPath;









            var pS_LoadRequestSpecs = function( theCallback) {

                if( this._v_RequestSpecs) {
                    theCallback();
                    return;
                }

                if( !this._v_RequestSpecsOrPath) {
                    theCallback( "!this._v_RequestSpecsOrPath");
                    return;
                }


                if( typeof this._v_RequestSpecsOrPath == "object") {

                    if( typeof this._v_RequestSpecsOrPath.length == "undefined") {
                        theCallback( "typeof this._v_RequestSpecsOrPath.length == 'undefined')");
                        return;
                    }


                    this._v_RequestSpecs = this._v_RequestSpecsOrPath;

                    theCallback();
                    return;
                }




                if( !( typeof this._v_RequestSpecsOrPath == "string")) {
                    theCallback( "( typeof this._v_RequestSpecsOrPath == 'string')");
                    return;
                }




                if( this.LOGSPECPATHS) {
                    console.log( "RequestSpecPath=" + this._v_RequestSpecsOrPath);
                }


                var aRequestSpecsPath = this.fReplaceRootSymbolInPath(
                    this._v_RequestSpecsOrPath,
                    theM_sentinels.ROOTPATHSTEPSYMBOL,
                    this.MINSERVERTESTPATHTOROOT
                );


                aRequestSpecsPath = this.fReplaceRootSymbolInPath(
                    aRequestSpecsPath,
                    theM_sentinels.SPECPATHROOTPATHSTEPSYMBOL,
                    this.MINSERVERTESTPATHTOTESTSROOT
                );


                if( this.LOGSPECPATHS) {
                    console.log("Replaced RequestSpecPath=" +  aRequestSpecsPath);
                }


                var aRequestSpecs = null;
                try {
                    aRequestSpecs = require( aRequestSpecsPath);
                }
                catch( anException) {
                    var anExceptionDetails = this.fExceptionDetail( anException);
                    if( this.LOGEXCEPTIONDETAILS) {
                        console.log( anExceptionDetails);
                    }

                    theCallback( anExceptionDetails);
                    return;
                }
                if( !aRequestSpecs) {
                    theCallback( "!aRequestSpecs");
                    return;
                }


                this._v_RequestSpecs = aRequestSpecs;
                

                theCallback( );
            };
            if( pS_LoadRequestSpecs){}/* CQT */
            aPrototype.pS_LoadRequestSpecs = pS_LoadRequestSpecs;









            var pS_SetupServer = function( theCallback) {

                if( this._v_CtrlServer) {
                    theCallback();
                    return;
                }

                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }

                if( !this._v_Identifier) {
                    var anIdentifierId = "0";
                    this._v_Identifier = new theM_identifier.CtrlIdentifier_Constructor( "Identifier-For-" + aTitle, anIdentifierId);
                }

                if( !this._v_Recorder) {
                    this._v_Recorder = new theM_recorder.CtrlRecorder_Constructor( "Recorder-For-"   + aTitle, this._v_Identifier);
                }


                this._v_CtrlServer = new theM_actionsserver.ActionsServer_Constructor( "CtrlServer-For-" + aTitle,
                    this._v_Identifier,
                    this._v_Recorder
                );


                var aCtrlSetupResult = this._v_CtrlServer.fSetupCtrlServer();


                var aCtrlListener = this._v_CtrlServer.fCtrlListener();
                if( aCtrlListener) {

                    var aServerErrorHandler = this.fServerErrorHandler();
                    if( aServerErrorHandler) {
                        var aRegisterServerInterestResult = aCtrlListener.fRegisterServerErrorInterest( aServerErrorHandler);
                        if( !aRegisterServerInterestResult) {
                            theCallback( "pS_SetupServer !this._v_CtrlServer.fCtrlListener().fRegisterServerErrorInterest( aServerErrorHandler)");
                            return;
                        }
                    }

                    var aListenerErrorHandler = this.fListenerErrorHandler();
                    if( aListenerErrorHandler) {
                        var aRegisterListenerInterestResult = aCtrlListener.fRegisterListenerErrorInterest( aListenerErrorHandler);
                        if( !aRegisterListenerInterestResult) {
                            theCallback( "pS_SetupServer !this._v_CtrlListener.fCtrlListener().fRegisterListenerErrorInterest( aListenerErrorHandler)");
                            return;
                        }
                    }
                }
                
                
                if( !aCtrlSetupResult) {
                    theCallback( "pS_SetupServer !this._v_CtrlServer.fSetupCtrlServer()");
                    return;
                }

                theCallback( );
            };
            if( pS_SetupServer){}/* CQT */
            aPrototype.pS_SetupServer = pS_SetupServer;










            var fServerErrorHandler = function( ) {

                var aThis = this;

                var anErrorHandler = function ( theException) {

                    var anExceptionDetails = aThis.fExceptionDetail( theException);
                    console.log( "fServerErrorHandler on error\n" + anExceptionDetails);

                    if ( theException.code == 'EADDRINUSE') {
                        console.log('Address in use');
                    }
                };
                if( anErrorHandler){}/* CQT */

                return anErrorHandler;
            };
            if( fServerErrorHandler){}/* CQT */
            aPrototype.fServerErrorHandler = fServerErrorHandler;









            var fListenerErrorHandler = function( ) {

                var aThis = this;

                var anErrorHandler = function ( theException) {

                    var anExceptionDetails = aThis.fExceptionDetail( theException);
                    console.log( "fListenerErrorHandler on error\n" + anExceptionDetails);

                    if ( theException.code == 'EADDRINUSE') {
                        console.log('Address in use');
                    }
                };
                if( anErrorHandler){}/* CQT */

                return anErrorHandler;
            };
            if( fListenerErrorHandler){}/* CQT */
            aPrototype.fListenerErrorHandler = fListenerErrorHandler;









            var pS_StartServing = function( theCallback) {

                if( !this._v_CtrlServer) {
                    theCallback( "pS_StartServing !this._v_CtrlServer");
                    return;
                }

                var aStartServingResult = this._v_CtrlServer.fStartServing();
                if( !aStartServingResult) {
                    theCallback( "!aStartServingResult");
                    return;
                }

                theCallback( );

            };
            if( pS_StartServing){}/* CQT */
            aPrototype.pS_StartServing = pS_StartServing;







            var pS_StopServing = function( theCallback) {

                if( !this._v_CtrlServer) {
                    theCallback( "pS_StopServing !this._v_CtrlServer");
                    return;
                }

                var aStopServingResult = this._v_CtrlServer.fStopServing();
                if( !aStopServingResult) {
                    theCallback( "!aStopServingResult");
                    return;
                }

                theCallback( );

            };
            if( pS_StopServing){}/* CQT */
            aPrototype.pS_StopServing = pS_StopServing;





            var pS_ReleaseServer = function( theCallback) {

                if( !this._v_CtrlServer) {
                    theCallback();
                    return;
                }

                this._v_CtrlServer.fStopServing();

                this._v_CtrlServer.pReleaseCtrlServer();

                this._v_CtrlServer = null;

                theCallback( );
            };
            if( pS_ReleaseServer){}/* CQT */
            aPrototype.pS_ReleaseServer = pS_ReleaseServer;
















            var pS_RegisterRoutes = function( theCallback) {

                if( !this._v_CtrlServer) {
                    theCallback( "pS_RegisterRoutes !this._v_CtrlServer");
                    return;
                }

                if( !this._v_Identifier) {
                    theCallback( "pS_RegisterRoutes !this._v_Identifier");
                    return;
                }

                if( !this._v_Recorder) {
                    theCallback( "pS_RegisterRoutes !this._v_Recorder");
                    return;
                }

                var anActionsRegistry = this._v_CtrlServer.fActionsRegistry();
                if( !anActionsRegistry) {
                    theCallback( "pS_RegisterRoutes !this._v_CtrlServer.fActionsRegistry()");
                    return;
                }


                var aNumRequestSpecs = this._v_RequestSpecs.length;
                for( var aRequestSpecIdx=0; aRequestSpecIdx < aNumRequestSpecs; aRequestSpecIdx++) {

                    var aRequestSpec = this._v_RequestSpecs[ aRequestSpecIdx];
                    if( aRequestSpec) {

                        var aPort  = aRequestSpec[ "port"];
                        if( !aPort) {
                            continue;
                        }

                        var aMethod = aRequestSpec[ "method"];
                        if( !aMethod) {
                            continue;
                        }

                        var aRoute = aRequestSpec[ "urlpath"];
                        if( !aRoute) {
                            continue;
                        }
                        var aHandlerFunction = this.fActionsServerHandlerForRequestSpec( aRequestSpec);
                        if( !aHandlerFunction) {
                            continue
                        }

                        var aTitle = this._v_Title;
                        if( !aTitle) {
                            aTitle = "?";
                        }
                        aTitle += ( "-For-" + aRoute);

                        var anActionSpec = new theM_actionspec.ActionSpec_Constructor(
                            aTitle, this._v_Identifier, this._v_Recorder,
                            aPort, aMethod, aRoute,
                            aHandlerFunction,
                            null, null, null
                        );

                        if( !anActionsRegistry.fRegisterActionSpec( anActionSpec)) {
                            theCallback( "pS_RegisterRoutes !anActionsRegistry.fRegisterActionSpec( anActionSpec) aPort=" + aPort + " aMethod=" + aMethod + " aRoute=" + aRoute);
                            return;
                        }
                    }
                }


                theCallback( );
            };
            if( pS_RegisterRoutes){}/* CQT */
            aPrototype.pS_RegisterRoutes = pS_RegisterRoutes;






            var fActionsServerHandlerForRequestSpec = function( theRequestSpec) {

                if( !theRequestSpec) {
                    return null;
                }


                var aRequestSpec = theRequestSpec;

                var aThis = this;

                var aHandler = function( theRequest, theResponse) {

                    var aPort = aRequestSpec[ "port"];

                    if( aThis.LOGHANDLES) {

                        var aRequestSpecStr = aThis.fRequestSpecToString( aRequestSpec);

                        console.log( "fActionsServerHandlerForRequestSpec Port=" + aPort + " Handled " + aRequestSpecStr.slice( 0, aThis.MAXREQUESTSPECSTRINGLEN));
                    }


                    var aListenedReport = aThis.fNewVoidListenedReport();

                    aListenedReport[ "spec"] = aRequestSpec;

                    aThis.pAddListenedReport( aListenedReport);

                    aListenedReport[ "request"]   = theRequest;
                    aListenedReport[ "response"]  = theResponse;


                    var aToRespond = aRequestSpec[ "expect"];

                    if( aThis.LOGHANDLES) {

                        var aToRespondStr = "";
                        try {
                            aToRespondStr = JSON.stringify( aToRespond);
                        }
                        catch( anException) {
                            aToRespondStr = aToRespond.toString() + "\nException in JSON.stringify:\n" + aThis.fExceptionDetail( anException);
                        }
                        if( !aToRespondStr) {
                            aToRespondStr = "";
                        }
                        console.log( "fActionsServerHandlerForRequestSpec_anymethod Responded " + aToRespondStr.slice( 0, aThis.MAXREQUESTSPECSTRINGLEN));
                    }

                    theResponse.send( aToRespond);

                };
                if( aHandler){}/* CQT */

                return aHandler;
            };
            if( fActionsServerHandlerForRequestSpec){}/* CQT */
            aPrototype.fActionsServerHandlerForRequestSpec = fActionsServerHandlerForRequestSpec;










            var pS_StartListeners = function( theCallback) {

                if( !this._v_CtrlServer) {
                    theCallback( "pS_StartListeners !this._v_CtrlServer");
                    return;
                }


                var aCtrlListener = this._v_CtrlServer.fCtrlListener();
                if( !aCtrlListener) {
                    theCallback( "pS_StartListeners !this._v_CtrlServer.fCtrlListener()");
                    return;
                }


                var aStartListenersResult = aCtrlListener.fStartListening();
                if( !aStartListenersResult) {
                    theCallback( "pS_StartListeners !this._v_CtrlServer.fCtrlListener().fStartListening()");
                    return;
                }

                theCallback( );
            };
            if( pS_StartListeners){}/* CQT */
            aPrototype.pS_StartListeners = pS_StartListeners;












            var pS_StopListeners = function( theCallback) {


                if( !this._v_CtrlServer) {
                    theCallback( "pS_StopListeners !this._v_CtrlServer");
                    return;
                }


                var aCtrlListener = this._v_CtrlServer.fCtrlListener();
                if( !aCtrlListener) {
                    theCallback( "pS_StopListeners !this._v_CtrlServer.fCtrlListener()");
                    return;
                }


                var aStartListenersResult = aCtrlListener.fStopListening();
                if( !aStartListenersResult) {
                    theCallback( "pS_StopListeners !this._v_CtrlServer.fCtrlListener().fStartListening()");
                    return;
                }

                theCallback( );
            };
            if( pS_StopListeners){}/* CQT */
            aPrototype.pS_StopListeners = pS_StopListeners;












            var pS_RequestTest = function( theCallback) {

                if( !this._v_RequestSpecs) {
                    theCallback( "pS_RequestTest !this._v_RequestSpecs");
                    return;
                }

                var aTitle =  this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }

                this._v_RequestTest = new theM_httprequesttest.HttpRequestTest_Constructor( "RequestTestFor-" + aTitle, this._v_RequestSpecs);

                this._v_RequestTest.pF_HttpRequestTest( theCallback);
            };
            if( pS_RequestTest){}/* CQT */
            aPrototype.pS_RequestTest = pS_RequestTest;










            var pS_VerifyServerActivity = function( theCallback) {


                if( !this._v_RequestSpecs) {
                    theCallback( "pS_RequestTest !this._v_RequestSpecs");
                    return;
                }


                if( !this._v_ListenedReports) {
                    theCallback( "pS_RequestTest !this._v_ListenedReports");
                    return;
                }

                var aNumListenedReports = this._v_ListenedReports.length;

                var aNumRequestSpecs = this._v_RequestSpecs.length;
                for( var aRequestSpecIdx=0; aRequestSpecIdx < aNumRequestSpecs; aRequestSpecIdx++) {

                    var aRequestSpec = this._v_RequestSpecs[ aRequestSpecIdx];
                    if( aRequestSpec) {

                        if( aRequestSpecIdx >= aNumListenedReports) {
                            var aMessage = "pS_VerifyListenerActivity " + ( aNumRequestSpecs - aRequestSpecIdx)  + " Requests WO report from index " + aRequestSpecIdx;
                            if( this.LOGVERIFICATIONFAILS) {
                                console.log( aMessage);
                            }
                            theCallback( aMessage);
                            return;
                        }

                        var aListenedReport = this._v_ListenedReports[ aRequestSpecIdx];
                        if( !aListenedReport) {

                            var aRequestSpecStr = fRequestSpecToString( aRequestSpec);

                            var yetanotherMessage = "pS_VerifyListenerActivity Request WO report at index " + aRequestSpecIdx + " " + aRequestSpecStr;
                            if( this.LOGVERIFICATIONFAILS) {
                                console.log( yetanotherMessage);
                            }
                            theCallback( aMessage);
                            return;
                        }

                        var aListenedSpec = aListenedReport[ "spec"];
                        if( !aListenedSpec) {
                            var otherMessage = "pS_VerifyListenerActivity report WO spec at index " + aRequestSpecIdx;
                            if( this.LOGVERIFICATIONFAILS) {
                                console.log( otherMessage);
                            }
                            theCallback( otherMessage);
                            return;
                        }

                        if( !( aListenedSpec === aRequestSpec)) {

                            var aListenedSpecStr = fRequestSpecToString( aRequestSpec);
                            var otherRequestSpecStr  = fRequestSpecToString( aRequestSpec);

                            var anotherMessage = "pS_VerifyListenerActivity not same spec and report spec at index " + aRequestSpecIdx + " ListenedSpec=" + aListenedSpecStr + " RequestedSpec=" + otherRequestSpecStr;
                            if( this.LOGVERIFICATIONFAILS) {
                                console.log( anotherMessage);
                            }
                            theCallback( anotherMessage);
                            return;
                        }

                    }
                }


                theCallback( );
            };
            if( pS_VerifyServerActivity){}/* CQT */
            aPrototype.pS_VerifyServerActivity = pS_VerifyServerActivity;








            var fRequestSpecToString = function( theRequestSpec) {
                if( !theRequestSpec) {
                    return "null";
                }

                var aRequestSpecStr = "";
                try {
                    aRequestSpecStr = JSON.stringify( theRequestSpec);
                }
                catch( anException) {
                    aRequestSpecStr = aRequestSpecStr.toString() + "\nException in JSON.stringify:\n" + aThis.fExceptionDetail( anException);
                }
                if( !aRequestSpecStr) {
                    aRequestSpecStr = "";
                }

                return aRequestSpecStr;
            };
            if( fRequestSpecToString){}/* CQT */
            aPrototype.fRequestSpecToString = fRequestSpecToString;







            var pInitFinderToScheduleNext = function( theStepsToRun) {
                this._v_StepsToRun = theStepsToRun;
                this._v_StepsAlreadyScheduled = [];
            };
            if( pInitFinderToScheduleNext){}/* CQT */
            aPrototype.pInitFinderToScheduleNext = pInitFinderToScheduleNext;








            var pTryToScheduleNextStep = function( theCallback) {

                var aStepToScheduleNext = this.fFindStepToScheduleNext();
                if( !aStepToScheduleNext) {
                    theCallback( );
                    return;
                }

                var aCallback = this.fScheduleNextStepCallback( theCallback);
                if( !aCallback) {
                    theCallback( "!fScheduleNextStepCallback");
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextStepHandler( aCallback);

                try {
                    aStepToScheduleNext( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }



            };
            if( pTryToScheduleNextStep){}/* CQT */
            aPrototype.pTryToScheduleNextStep = pTryToScheduleNextStep;








            var fFindStepToScheduleNext = function() {

                if( !this._v_StepsToRun) {
                    return null;
                }


                var aPendingStep = null;

                var aNumSteps = this._v_StepsToRun.length;
                for( var aStepIdx=0; aStepIdx < aNumSteps; aStepIdx++) {
                    var aStep = this._v_StepsToRun[ aStepIdx];
                    if( this._v_StepsAlreadyScheduled.indexOf( aStep) < 0) {
                        aPendingStep = aStep;
                        break;
                    }
                }
                if( !aPendingStep) {
                    return null;
                }

                this._v_StepsAlreadyScheduled.push( aPendingStep);

                return aPendingStep;
            };
            if( fFindStepToScheduleNext){}/* CQT */
            aPrototype.fFindStepToScheduleNext = fFindStepToScheduleNext;








            var fScheduleNextStepCallback = function( theCallback) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( theError);
                        return;
                    }

                    aThis.pTryToScheduleNextStep( theCallback);

                }).bind( this);
                if( aCallback){}/* CQT */

                return aCallback;
            };
            if( fScheduleNextStepCallback){}/* CQT */
            aPrototype.fScheduleNextStepCallback = fScheduleNextStepCallback;








            var fExceptionNextStepHandler = function( theCallback) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);

                    theCallback( aExceptionDetail);

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextStepHandler){}/* CQT */
            aPrototype.fExceptionNextStepHandler = fExceptionNextStepHandler;







            var fRunStepsCallback = function( theCallback) {
                if( !theCallback) {
                    return null;
                }

                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( theError);
                        return;
                    }
                    theCallback();

                }).bind( this);
                if( aCallback){}/* CQT */

                return aCallback;

            };
            if( fRunStepsCallback){}/* CQT */
            aPrototype.fRunStepsCallback = fRunStepsCallback;










            var fExceptionStepsHandler = function( theCallback) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( "fExceptionStepsHandler !theException");
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    theCallback( aExceptionDetail);

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionStepsHandler){}/* CQT */
            aPrototype.fExceptionStepsHandler = fExceptionStepsHandler;









            var pSL_RunSteps = function( theCallback, theStepsToRun) {

                if( !theCallback) {
                    return;
                }

                if( !theStepsToRun) {
                    theCallback( "!theStepsToRun");
                    return;
                }


                var aExceptionHandler = this.fExceptionStepsHandler( theCallback);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fRunStepsCallback( theCallback);
                    if( !aCallback) {
                        theCallback( "!fRunStepsCallback");
                        return;
                    }


                    this.pInitFinderToScheduleNext( theStepsToRun);

                    this.pTryToScheduleNextStep( aCallback);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pSL_RunSteps){}/* CQT */
            aPrototype.pSL_RunSteps = pSL_RunSteps;










            var fOverallActionsServerCallback = function( theCallback) {

                if( !theCallback) {
                    return null;
                }

                var aCallback = function( theError) {

                    if( theError) {
                        if( theCallback) {
                            theCallback( theError);
                        }
                        return;
                    }

                    theCallback();

                };
                if( aCallback){}/* CQT */

                return aCallback;
            };
            if( fOverallActionsServerCallback){}/* CQT */
            aPrototype.fOverallActionsServerCallback = fOverallActionsServerCallback;








            var fOverallExceptionHandler = function( theCallback) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;

                var anExceptionHandler = function( theException) {

                    if( !theException) {
                        theCallback( "!theException");
                        return;
                    }

                    var anExceptionDetail = aThis.fExceptionDetail( theException);
                    if( anExceptionDetail){}/* CQT */

                    theCallback( anExceptionDetail);

                };
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallExceptionHandler){}/* CQT */
            aPrototype.fOverallExceptionHandler = fOverallExceptionHandler;





            




            var pF_ActionsServerTest = function( theCallback) {

                var aThis = this;

                var aExceptionHandler = this.fOverallExceptionHandler( theCallback);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        aThis.fExceptionDetail( theException);
                        throw theException;
                    });
                }


                try {

                    var aCallback = this.fOverallActionsServerCallback( theCallback);
                    if( !aCallback) {
                        theCallback( "!aCallback");
                        return;
                    }

                    var someStepsToRun = [
                        this.pS_LoadRequestSpecs.bind( this),
                        this.pS_SetupServer.bind( this),
                        this.pS_RegisterRoutes.bind( this),
                        this.pS_StartServing.bind( this),
                        this.pS_StartListeners.bind( this),
                        this.pS_RequestTest.bind( this),
                        this.pS_StopListeners.bind( this),
                        this.pS_StopServing.bind( this),
                        this.pS_ReleaseServer.bind( this),
                        this.pS_VerifyServerActivity.bind( this)
                    ];



                    process.nextTick(
                        function() {
                            try {

                                aThis.pSL_RunSteps( aCallback, someStepsToRun);
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
            if( pF_ActionsServerTest){}/* CQT */
            aPrototype.pF_ActionsServerTest = pF_ActionsServerTest;








            return aPrototype;

        })();




        var ActionsServerTest_Constructor = function( theTitle, theRequestSpecsOrPath) {

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Title    = null;

            this._v_RequestSpecsOrPath    = null;
            this._v_RequestSpecs          = null;

            this._v_StepsToRun            = null;
            this._v_StepsAlreadyScheduled = null;

            this._v_CtrlServer      = null;
            this._v_RequestTest     = null;
            this._v_ListenedReports = null;

            this._v_RegisteredRequestSpecs = null;

            this._v_Identifier = null;
            this._v_Recorder   = null;

            this._pInit_ActionsServerTest( theTitle, theRequestSpecsOrPath);
        };
        ActionsServerTest_Constructor.prototype = aActionsServerTest_Prototype;




        var ActionsServerTest_SuperPrototypeConstructor = function() {

            this._v_Prototype = aActionsServerTest_Prototype;
            this._v_Type = null;
            this._v_Module    = null;

            this._v_Title    = null;

            this._v_RequestSpecsOrPath    = null;
            this._v_RequestSpecs          = null;

            this._v_StepsToRun            = null;
            this._v_StepsAlreadyScheduled = null;

            this._v_CtrlServer      = null;
            this._v_RequestTest     = null;
            this._v_ListenedReports = null;

            this._v_RegisteredRequestSpecs = null;

            this._v_Identifier = null;
            this._v_Recorder   = null;
        };
        ActionsServerTest_SuperPrototypeConstructor.prototype = aActionsServerTest_Prototype;






        var aModule = {
            "ActionsServerTest_Prototype": aActionsServerTest_Prototype,
            "ActionsServerTest_Constructor": ActionsServerTest_Constructor,
            "ActionsServerTest_SuperPrototypeConstructor": ActionsServerTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aActionsServerTest_Prototype._v_Module = aModule;


        return aModule;
    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_sentinels        = require('../common-test/sentinels');
            var aM_stacktrace       = require('../thirdparty/stacktrace');
            var aM_identifier       = require('../ctrlserver/common-ctrl/ctrlidentifier');
            var aM_recorder         = require('../ctrlserver/common-ctrl/ctrlrecorder');
            var aM_actionsserver    = require('../ctrlserver/server-ctrl/actionsserver');
            var aM_httprequesttest  = require('../infrasvcs-test/httprequest/httprequest-test');
            var aM_actionspec       = require('../ctrlserver/actions-ctrl/actionspec');

            return aMod_definer(
                aM_sentinels,
                aM_stacktrace,
                aM_identifier,
                aM_recorder,
                aM_actionsserver,
                aM_httprequesttest,
                aM_actionspec
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/sentinels",
            "../thirdparty/stacktrace",
            "../ctrlserver/common-ctrl/ctrlidentifier",
            "../ctrlserver/common-ctrl/ctrlrecorder",
            "../ctrlserver/server-ctrl/actionsserver",
            "../infrasvcs-test/httprequest/httprequest-test",
            "../ctrlserver/actions-ctrl/actionspec"
        ], function (
                theM_sentinels,
                theM_stacktrace,
                theM_identifier,
                theM_recorder,
                theM_actionsserver,
                theM_httprequesttest,
                theM_actionspec
            ) {
            return aMod_definer(
                theM_sentinels,
                theM_stacktrace,
                theM_identifier,
                theM_recorder,
                theM_actionsserver,
                theM_httprequesttest,
                theM_actionspec
            );
        });
    }


}());