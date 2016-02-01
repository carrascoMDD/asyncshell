'use strict';

/*
 httplistener-generic-test.js
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
                                 theM_stacktrace) {


        var ModuleName     = "httplistener-generic-test";
        var ModulePackages = "infrasvcs-test/httplistener";
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



            theToInit.MAXERRORSTRINGLEN    = 32768;
            theToInit.MAXREQUESTSPECSTRINGLEN = 32768;

            theToInit.HTTPLISTENERTESTPATHTOROOT = "../../..";

            theToInit.HTTPLISTENERTESTPATHTOTESTSROOT = theToInit.HTTPLISTENERTESTPATHTOROOT + "/tests";

            theToInit.PATHSEPARATOR = "/";

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













        var aHttpListenerGenericTest_Prototype = (function() {


            var aPrototype = { };

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_Type = "HttpListenerGenericTest";
            aPrototype._v_Module = null;


            aPrototype._v_RequestSpecsOrPath    = null;
            aPrototype._v_RequestSpecs          = null;
            aPrototype._v_RequestSpecsByPort    = null;

            aPrototype._v_StepsToRun            = null;
            aPrototype._v_StepsAlreadyScheduled = null;

            aPrototype._v_ServersByPort   = null;
            aPrototype._v_ListenersByPort = null;

            aPrototype._v_RequestTest     =  null;

            aPrototype._v_ListenedReports   = null;







            var _pInit = function( theTitle, theRequestSpecsPath) {

                this._pInit_HttpListenerGenericTest( theTitle, theRequestSpecsPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_HttpListenerGenericTest = function( theTitle, theRequestSpecsPath) {

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_RequestSpecsOrPath    = theRequestSpecsPath;
                this._v_RequestSpecs          = null;
                this._v_RequestSpecsByPort    = null;

                this._v_StepsToRun            = null;
                this._v_StepsAlreadyScheduled = [ ];

                this._v_ServersByPort    = { };
                this._v_ListenersByPort  = { };

                this._v_RequestTest      =  null;

                this._v_ListenedReports = [ ];
            };
            if( _pInit_HttpListenerGenericTest){}/* CQT */
            aPrototype._pInit_HttpListenerGenericTest = _pInit_HttpListenerGenericTest;











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
                    this.HTTPLISTENERTESTPATHTOROOT
                );


                aRequestSpecsPath = this.fReplaceRootSymbolInPath(
                    aRequestSpecsPath,
                    theM_sentinels.SPECPATHROOTPATHSTEPSYMBOL,
                    this.HTTPLISTENERTESTPATHTOTESTSROOT
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










            var pS_ClassifyByPort = function( theCallback) {

                if( this._v_RequestSpecsByPort) {
                    theCallback();
                    return;
                }

                if( !this._v_RequestSpecs) {
                    theCallback( "!this._v_RequestSpecs");
                    return;
                }

                var someRequestSpecsByPort = { };

                var aNumRequestSpecs = this._v_RequestSpecs.length;
                for( var aRequestSpecIdx=0; aRequestSpecIdx < aNumRequestSpecs; aRequestSpecIdx++) {
                    var aRequestSpec = this._v_RequestSpecs[ aRequestSpecIdx];
                    if( aRequestSpec) {

                        var aPort = aRequestSpec[ "port"];
                        if( aPort) {

                            var aPortStr = "" + aPort;

                            var someSpecsByPort = someRequestSpecsByPort[ aPortStr];
                            if( !someSpecsByPort) {
                                someSpecsByPort = [ ];
                                someRequestSpecsByPort[ aPortStr] = someSpecsByPort;
                            }


                            if( someSpecsByPort.indexOf( aRequestSpec) <= 0) {

                                someSpecsByPort.push( aRequestSpec);
                            }
                        }
                    }
                }

                this._v_RequestSpecsByPort = someRequestSpecsByPort;

                theCallback( );
            };
            if( pS_ClassifyByPort){}/* CQT */
            aPrototype.pS_ClassifyByPort = pS_ClassifyByPort;









            var pS_SetupServers = function( theCallback) {

                if( !this._v_RequestSpecsByPort) {
                    theCallback( "pS_SetupServers !this._v_ServersByPort");
                    return;
                }

                var somePorts = Object.keys( this._v_RequestSpecsByPort);
                var aNumPorts = somePorts.length;
                for( var aPortIdx=0; aPortIdx < aNumPorts; aPortIdx++) {

                    var aPort = somePorts[ aPortIdx];
                    var aServer = this.fCreateServer( aPort);
                    if( !aServer) {
                        theCallback( "pS_SetupServers !fCreateServer( " + aPort + ")");
                        return;
                    }

                    this._v_ServersByPort[ aPort] = aServer;
                }

                theCallback( );
            };
            if( pS_SetupServers){}/* CQT */
            aPrototype.pS_SetupServers = pS_SetupServers;









            var fCreateServer = function( thePort) {
                if( thePort){}/* CQT */

                return null;
                /* subtype responsibility fCreateServer
                new theM_httplistener.HttpListener_Constructor(

                    this.HTTPLISTENER_TITLE,
                    this.HTTPLISTENER_PORT
                );
                */
            };
            if( fCreateServer){}/* CQT */
            aPrototype.fCreateServer = fCreateServer;









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






            var pS_ReleaseServers = function( theCallback) {

                if( !this._v_ServersByPort) {
                    theCallback();
                    return;
                }

                var somePorts = Object.keys( this._v_ServersByPort);
                var aNumPorts = somePorts.length;
                for( var aPortIdx=0; aPortIdx < aNumPorts; aPortIdx++) {

                    var aPort = somePorts[ aPortIdx];
                    var aServer =  this._v_ServersByPort[ aPort];

                    if( !aServer) {
                        theCallback( "pS_SetupServers !fCreateServer( " + aPort + ")");
                        return;
                    }

                    delete this._v_ServersByPort[ aPort];
                }

                theCallback( );
            };
            if( pS_ReleaseServers){}/* CQT */
            aPrototype.pS_ReleaseServers = pS_ReleaseServers;







            var fReceiveClientRequestHandlerForRequestSpec = function( theRequestSpec, thePort, theServer) {

                if( !theRequestSpec) {
                    return null;
                }

                var aMethod = theRequestSpec[ "method"];
                if( !aMethod) {
                    return null;
                }

                var aHandler = null;

                if( aMethod == "get") {
                    aHandler = this.fReceiveClientRequestHandlerForRequestSpec_get( theRequestSpec, thePort, theServer)
                }

                if( aMethod == "post") {
                    aHandler = this.fReceiveClientRequestHandlerForRequestSpec_post( theRequestSpec, thePort, theServer)
                }

                if( aHandler){}/* CQT */
                return aHandler;
            };
            if( fReceiveClientRequestHandlerForRequestSpec){}/* CQT */
            aPrototype.fReceiveClientRequestHandlerForRequestSpec = fReceiveClientRequestHandlerForRequestSpec;







            var fReceiveClientRequestHandlerForRequestSpec_get = function( theRequestSpec, thePort, theServer) {

                var aHandler = this.fReceiveClientRequestHandlerForRequestSpec_anymethod(  theRequestSpec, thePort, theServer);

                if( aHandler){}/* CQT */
                return aHandler;
            };
            if( fReceiveClientRequestHandlerForRequestSpec_get){}/* CQT */
            aPrototype.fReceiveClientRequestHandlerForRequestSpec_get = fReceiveClientRequestHandlerForRequestSpec_get;






            var fReceiveClientRequestHandlerForRequestSpec_post = function( theRequestSpec, thePort, theServer) {

                var aHandler = this.fReceiveClientRequestHandlerForRequestSpec_anymethod(  theRequestSpec, thePort, theServer);

                if( aHandler){}/* CQT */
                return aHandler;
            };
            if( fReceiveClientRequestHandlerForRequestSpec_post){}/* CQT */
            aPrototype.fReceiveClientRequestHandlerForRequestSpec_post = fReceiveClientRequestHandlerForRequestSpec_post;





            var fReceiveClientRequestHandlerForRequestSpec_anymethod = function( theRequestSpec, thePort, theServer) {
                if( theServer){}/* CQT */

                var aRequestSpec = theRequestSpec;

                var aThis = this;
                var aHandler = function( theRequest, theResponse) {

                    if( aThis.LOGHANDLES) {

                        var aRequestSpecStr = aThis.fRequestSpecToString( aRequestSpec);

                        console.log( "fReceiveClientRequestHandlerForRequestSpec_anymethod Port=" + thePort + " Handled " + aRequestSpecStr.slice( 0, aThis.MAXREQUESTSPECSTRINGLEN));
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
                        console.log( "fReceiveClientRequestHandlerForRequestSpec_anymethod Responded " + aToRespondStr.slice( 0, aThis.MAXREQUESTSPECSTRINGLEN));
                    }

                    theResponse.send( aToRespond);

                };
                if( aHandler){}/* CQT */

                return aHandler;
            };
            if( fReceiveClientRequestHandlerForRequestSpec_anymethod){}/* CQT */
            aPrototype.fReceiveClientRequestHandlerForRequestSpec_anymethod = fReceiveClientRequestHandlerForRequestSpec_anymethod;











            var fRegisterRouteForPortMethodAndPath = function( thePort, theMethod, theRoute, theHandler) {
                if( thePort){}/* CQT */
                if( theMethod){}/* CQT */
                if( theRoute){}/* CQT */
                if( theHandler){}/* CQT */

                return false;

                /* subtype responsibility fRegisterRouteForPortMethodAndPath
                if( !this._v_ServersByPort) {
                    return false;
                }

                var aServerForPort = this._v_ServersByPort[ thePort];
                if( !aServerForPort) {
                    return false;
                }


                var anExpressRegisterVerb = null;
                if( theMethod == this.EXPRESS_VERB_GET) {
                    anExpressRegisterVerb = aServerForPort.get;
                }
                else {
                    if( theMethod == this.EXPRESS_VERB_POST) {
                        anExpressRegisterVerb = aServerForPort.post;
                    }
                }
                if( !anExpressRegisterVerb) {
                    return;
                }

                var aBoundExpressRegisterVerb = anExpressRegisterVerb.bind( aServerForPort);

                aBoundExpressRegisterVerb( theRoute, theHandler);
                */
            };
            if( fRegisterRouteForPortMethodAndPath){}/* CQT */
            aPrototype.fRegisterRouteForPortMethodAndPath = fRegisterRouteForPortMethodAndPath;














            var pS_RegisterRoutes = function( theCallback) {

                if( !this._v_RequestSpecsByPort) {
                    theCallback( "pS_RegisterRoutes !this._v_ServersByPort");
                    return;
                }

                if( !this._v_ServersByPort) {
                    theCallback( "pS_RegisterRoutes !this._v_ServersByPort");
                    return;
                }


                var somePorts = Object.keys( this._v_RequestSpecsByPort);
                var aNumPorts = somePorts.length;
                for( var aPortIdx=0; aPortIdx < aNumPorts; aPortIdx++) {

                    var aPort = somePorts[ aPortIdx];

                    var someRequestSpecsForPort =  this._v_RequestSpecsByPort[ aPort];
                    if(! someRequestSpecsForPort || !someRequestSpecsForPort.length) {
                        continue
                    }

                    var aServerForPort = this._v_ServersByPort[ aPort];
                    if( !aServerForPort) {
                        theCallback( "!this._v_ServersByPort[ " + aPort + "]");
                        return;
                    }

                    var aNumRequestSpecs = someRequestSpecsForPort.length;
                    for( var aRequestSpecIdx=0; aRequestSpecIdx < aNumRequestSpecs; aRequestSpecIdx++) {
                        var aRequestSpec = someRequestSpecsForPort[ aRequestSpecIdx];
                        if( aRequestSpec) {

                            var aURLpath = aRequestSpec[ "urlpath"];
                            if( aURLpath) {

                                var aMethod = aRequestSpec[ "method"];
                                if( aURLpath) {

                                    var aHandler = this.fReceiveClientRequestHandlerForRequestSpec( aRequestSpec, aPort, aServerForPort);

                                    if( !this.fRegisterRouteForPortMethodAndPath( aPort, aMethod, aURLpath, aHandler)) {
                                        theCallback( "!this.pRegisterRouteForPortMethodAndPath( " + aPort + ", " + aMethod + ", '" + aURLpath + "')");
                                        return;
                                    }
                                }
                            }
                        }
                    }

                }

                theCallback( );
            };
            if( pS_RegisterRoutes){}/* CQT */
            aPrototype.pS_RegisterRoutes = pS_RegisterRoutes;











            var pS_StartListeners = function( theCallback) {

                theCallback( );

                /* subtype responsibility pS_StartListener

                 if( !this._v_ServersByPort) {
                    theCallback( "pS_StartListeners !this._v_ServersByPort");
                    return;
                }

                var somePorts = Object.keys( this._v_ServersByPort);
                var aNumPorts = somePorts.length;
                for( var aPortIdx=0; aPortIdx < aNumPorts; aPortIdx++) {

                    var aPort = somePorts[ aPortIdx];

                    var aServer = this._v_ServersByPort[ aPort];

                    var aPortNumber = null;
                    try {
                        aPortNumber = parseInt( aPort);
                    }
                    catch( anException){}
                    if( !aPortNumber) {
                        theCallback( "pS_StartListeners !aPortNumber");
                        return;
                    }


                    var anExistingListener = this._v_ListenersByPort[ aPort];
                    if( anExistingListener) {
                        try {
                            anExistingListener.close();
                        }
                        catch( anException) {
                            var aExceptionDetail = this.fExceptionDetail( anException);
                            theCallback( "pS_StartListeners Exception when this._v_ListenersByPort[ " + aPort + "].close()\n" + aExceptionDetail);
                            return;
                        }

                        delete this._v_ListenersByPort[ aPort];
                    }


                    var aListener = aServer.listen( aPortNumber);
                    if( !aListener) {
                        theCallback( "!aServer.listen( " + aPortNumber + ")");
                        return;
                    }

                    this._v_ListenersByPort[ aPort] = aListener;
                }
                */
            };
            if( pS_StartListeners){}/* CQT */
            aPrototype.pS_StartListeners = pS_StartListeners;







            var fListenerErrorHandler = function( ) {

                var aThis = this;

                var anErrorHandler = function ( theException) {

                    var anExceptionDetails = aThis.fExceptionDetail( theException);
                    console.log( "pS_StartListeners on error\n" + anExceptionDetails);

                    if ( theException.code == 'EADDRINUSE') {
                        console.log('Address in use');
                    }
                };
                if( anErrorHandler){}/* CQT */

                return anErrorHandler;
            };
            if( fListenerErrorHandler){}/* CQT */
            aPrototype.fListenerErrorHandler = fListenerErrorHandler;











            var pS_StopListeners = function( theCallback) {

                theCallback( );

                /* subtype responsibility pS_StopListener

                if( !this._v_ServersByPort) {
                    theCallback();
                    return;
                }

                var somePorts = Object.keys( this._v_ServersByPort);
                var aNumPorts = somePorts.length;
                for( var aPortIdx=0; aPortIdx < aNumPorts; aPortIdx++) {

                    var aPort = somePorts[ aPortIdx];

                    var aServer = this._v_ServersByPort[ aPort];

                    var anExistingListener = this._v_ListenersByPort[ aPort];

                    try {
                        anExistingListener.close();
                    }
                    catch( anException) {
                        var aExceptionDetail = this.fExceptionDetail( anException);
                        theCallback( "pS_StopListeners Exception when this._v_ListenersByPort[ " + aPort + "].close()\n" + aExceptionDetail);
                        return;
                    }

                    delete this._v_ListenersByPort[ aPort];
                }

                theCallback( );
                */
            };
            if( pS_StopListeners){}/* CQT */
            aPrototype.pS_StopListeners = pS_StopListeners;










            var pS_RequestTest = function( theCallback) {

                theCallback( );

                /* subtype responsibility pS_RequestTest

                if( !this._v_RequestSpecs) {
                    theCallback( "pS_RequestTest !this._v_RequestSpecs");
                    return;
                }

                var aTitle =  this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }

                this._v_RequestTest = theM_httprequest.HttpRequestTest_Constructor( "RequestTestFor-" + aTitle, this._v_RequestSpecs);

                this._v_RequestTest.pF_HttpRequestTest( theCallback);

                */
            };
            if( pS_RequestTest){}/* CQT */
            aPrototype.pS_RequestTest = pS_RequestTest;










            var pS_VerifyListenerActivity = function( theCallback) {


                if( !this._v_RequestSpecs) {
                    theCallback( "pS_VerifyListenerActivity !this._v_RequestSpecs");
                    return;
                }


                if( !this._v_ListenedReports) {
                    theCallback( "pS_VerifyListenerActivity !this._v_ListenedReports");
                    return;
                }

                var aNumListenedReports = this._v_ListenedReports.length;

                var aNumRequestSpecs = this._v_RequestSpecs.length;
                for( var aRequestSpecIdx=0; aRequestSpecIdx < aNumRequestSpecs; aRequestSpecIdx++) {

                    var aRequestSpec = this._v_RequestSpecs[ aRequestSpecIdx];
                    if( aRequestSpec) {

                        if( aRequestSpecIdx >= aNumListenedReports) {
                            var aMessage = "pS_VerifyListenerActivity num Requests WO report from index " + ( aNumRequestSpecs - aRequestSpecIdx) ;
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
            if( pS_VerifyListenerActivity){}/* CQT */
            aPrototype.pS_VerifyListenerActivity = pS_VerifyListenerActivity;








            var fRequestSpecToString = function( theRequestSpec) {

                if( typeof theRequestSpec == "undefined") {
                    return "undefined";
                }

                if( theRequestSpec == null) {
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










            var fOverallHttpListenerGenericCallback = function( theCallback) {

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
            if( fOverallHttpListenerGenericCallback){}/* CQT */
            aPrototype.fOverallHttpListenerGenericCallback = fOverallHttpListenerGenericCallback;








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





            




            var pF_HttpListenerGenericTest = function( theCallback) {

                var aThis = this;

                var aExceptionHandler = this.fOverallExceptionHandler( theCallback);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        aThis.fExceptionDetail( theException);
                        throw theException;
                    });
                }


                try {

                    var aCallback = this.fOverallHttpListenerGenericCallback( theCallback);
                    if( !aCallback) {
                        theCallback( "!aCallback");
                        return;
                    }

                    var someStepsToRun = [
                        this.pS_LoadRequestSpecs.bind( this),
                        this.pS_ClassifyByPort.bind( this),
                        this.pS_SetupServers.bind( this),
                        this.pS_RegisterRoutes.bind( this),
                        this.pS_StartListeners.bind( this),
                        this.pS_RequestTest.bind( this),
                        this.pS_StopListeners.bind( this),
                        this.pS_ReleaseServers.bind( this),
                        this.pS_VerifyListenerActivity.bind( this)
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
            if( pF_HttpListenerGenericTest){}/* CQT */
            aPrototype.pF_HttpListenerGenericTest = pF_HttpListenerGenericTest;








            return aPrototype;

        })();




        var HttpListenerGenericTest_Constructor = function( theTitle, theRequestSpecsOrPath) {

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_RequestSpecsOrPath    = null;
            this._v_RequestSpecs          = null;
            this._v_RequestSpecsByPort    = null;

            this._v_StepsToRun            = null;
            this._v_StepsAlreadyScheduled = null;

            this._v_ServersByPort   = null;
            this._v_ListenersByPort = null;

            this._v_RequestTest     = null;

            this._v_ListenedReports = null;

            this._pInit_HttpListenerGenericTest( theTitle, theRequestSpecsOrPath);
        };
        HttpListenerGenericTest_Constructor.prototype = aHttpListenerGenericTest_Prototype;




        var HttpListenerGenericTest_SuperPrototypeConstructor = function() {

            this._v_Prototype = aHttpListenerGenericTest_Prototype;
            this._v_Type = null;
            this._v_Module    = null;

            this._v_RequestSpecsOrPath    = null;
            this._v_RequestSpecs          = null;
            this._v_RequestSpecsByPort    = null;

            this._v_StepsToRun            = null;
            this._v_StepsAlreadyScheduled = null;

            this._v_ServersByPort   = null;
            this._v_ListenersByPort = null;

            this._v_RequestTest     = null;

            this._v_ListenedReports = null;
        };
        HttpListenerGenericTest_SuperPrototypeConstructor.prototype = aHttpListenerGenericTest_Prototype;






        var aModule = {
            "HttpListenerGenericTest_Prototype": aHttpListenerGenericTest_Prototype,
            "HttpListenerGenericTest_Constructor": HttpListenerGenericTest_Constructor,
            "HttpListenerGenericTest_SuperPrototypeConstructor": HttpListenerGenericTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aHttpListenerGenericTest_Prototype._v_Module = aModule;


        return aModule;
    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_sentinels    = require('../../common-test/sentinels');
            var aM_stacktrace   = require('../../thirdparty/stacktrace');

            return aMod_definer(
                aM_sentinels,
                aM_stacktrace
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../common-test/sentinels",
            "../../thirdparty/stacktrace",
            "'../../infrasvcs/httplistener/httplistener"
        ], function (
            theM_sentinels,
            theM_stacktrace
            ) {
            return aMod_definer(
                theM_sentinels,
                theM_stacktrace
            );
        });
    }


}());