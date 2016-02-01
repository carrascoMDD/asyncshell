'use strict';

/*
 httplistener-nodejs-express-test.js
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

    var aMod_definer = function( theM_httplistenergenerictest,
                                 theM_httprequestnodejsrequesttest,
                                 theM_httplistenernodejsexpress) {


        var ModuleName     = "httplistener-nodejs-express-test";
        var ModulePackages = "infrasvcs-test/httplistener/platforms";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.EXPRESS_VERB_GET  = "get";
            theToInit.EXPRESS_VERB_POST = "post";

            theToInit.EXPRESS_VERBS = [
                theToInit.EXPRESS_VERB_GET,
                theToInit.EXPRESS_VERB_POST
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













        var aHttpListenerNodejsExpressTest_Prototype = (function() {

            var aPrototype = new theM_httplistenergenerictest.HttpListenerGenericTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_httplistenergenerictest.HttpListenerGenericTest_Prototype;


            aPrototype._v_Type = "HttpListenerNodejsExpressTest";
            aPrototype._v_Module = null;







            var _pInit = function( theTitle, theRequestSpecsPath) {

                this._pInit_HttpListenerNodejsExpressTest( theTitle, theRequestSpecsPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_HttpListenerNodejsExpressTest = function( theTitle, theRequestSpecsPath) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_HttpListenerGenericTest.apply( this, [ theTitle, theRequestSpecsPath]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

            };
            if( _pInit_HttpListenerNodejsExpressTest){}/* CQT */
            aPrototype._pInit_HttpListenerNodejsExpressTest = _pInit_HttpListenerNodejsExpressTest;









            var fCreateServer = function( thePort) {

                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }
                var aServer = new theM_httplistenernodejsexpress.HttpListenerNodejsExpress_Constructor( "ForHttpListenerNodejsExpressTest-" + aTitle, thePort);
                if( !aServer){
                    return null;
                }

                var aSetupOk = aServer.fSetupServer();
                if( !aSetupOk){
                    return null;
                }

                var anErrorHandler = this.fServerErrorHandler();

                aServer.fRegisterServerErrorInterest( anErrorHandler);

                return aServer;
            };
            if( fCreateServer){}/* CQT */
            aPrototype.fCreateServer = fCreateServer;








            var pS_StartListeners = function( theCallback) {

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


                    if( aServer.fIsListening()) {
                        aServer.fStopListener();
                    }


                    var aListening = null;
                    try {

                        var anErrorHandler = this.fListenerErrorHandler();

                        aListening = aServer.fStartListener();

                        aServer.fRegisterListenerErrorInterest(anErrorHandler );
                    }
                    catch( anException) {
                        var otherExceptionDetail = this.fExceptionDetail( anException);
                        theCallback( "pS_StartListeners Exception when aServer.listen( " + aPortNumber + ")\n" + otherExceptionDetail);
                        return;
                    }

                    if( !aListening) {
                        theCallback( "!aServer.fStartListener()");
                        return;
                    }

                    if( this.LOGLISTENS) {
                        console.log( "pS_StartListeners aPortNumber=" + this._v_Port);
                    }
                }

                theCallback( );
            };
            if( pS_StartListeners){}/* CQT */
            aPrototype.pS_StartListeners = pS_StartListeners;












            var pS_StopListeners = function( theCallback) {

                if( !this._v_ServersByPort) {
                    theCallback( "!this._v_ServersByPort");
                    return;
                }

                var somePorts = Object.keys( this._v_ServersByPort);
                var aNumPorts = somePorts.length;
                for( var aPortIdx=0; aPortIdx < aNumPorts; aPortIdx++) {

                    var aPort = somePorts[ aPortIdx];

                    var aServer = this._v_ServersByPort[ aPort];

                    var aStopped = null;
                    if( aServer) {
                        try {
                            aStopped = aServer.fStopListener();
                        }
                        catch( anException) {
                            var aExceptionDetail = this.fExceptionDetail( anException);
                            theCallback( "pS_StopListeners Exception when this._v_ListenersByPort[ " + aPort + "].close()\n" + aExceptionDetail);
                            return;
                        }

                        if( !aStopped) {
                            theCallback( "pS_StopListeners !aStopped");
                        }
                    }

                }

                theCallback( );
            };
            if( pS_StopListeners){}/* CQT */
            aPrototype.pS_StopListeners = pS_StopListeners;









            var fRegisterRouteForPortMethodAndPath = function( thePort, theMethod, theRoute, theHandler) {


                if( !this._v_ServersByPort) {
                    return false;
                }

                var aServerForPort = this._v_ServersByPort[ thePort];
                if( !aServerForPort) {
                    return false;
                }


                var anExpressRegisterVerb = null;
                if( theMethod == this.EXPRESS_VERB_GET) {
                    anExpressRegisterVerb = aServerForPort.fAddRoute_Get;
                }
                else {
                    if( theMethod == this.EXPRESS_VERB_POST) {
                        anExpressRegisterVerb = aServerForPort.fAddRoute_Post;
                    }
                }
                if( !anExpressRegisterVerb) {
                    return false;
                }

                var aBoundExpressRegisterVerb = anExpressRegisterVerb.bind( aServerForPort);

                aBoundExpressRegisterVerb( theRoute, theHandler);

                if( this.LOGROUTES) {
                    console.log( "fRegisterRouteForPortMethodAndPath thePort=" + thePort + " theMethod=" + theMethod + " theRoute=" + theRoute);
                }

                return true;

            };
            if( fRegisterRouteForPortMethodAndPath){}/* CQT */
            aPrototype.fRegisterRouteForPortMethodAndPath = fRegisterRouteForPortMethodAndPath;







            var fUnregisterRouteForPortMethodAndPath = function( thePort, theMethod, theRoute) {


                if( !this._v_ServersByPort) {
                    return false;
                }

                var aServerForPort = this._v_ServersByPort[ thePort];
                if( !aServerForPort) {
                    return false;
                }


                var anUnregisterResult = false;
                if( theMethod == this.EXPRESS_VERB_GET) {
                    anUnregisterResult = aServerForPort.fRemoveRoute_Get( theRoute);
                }
                else {
                    if( theMethod == this.EXPRESS_VERB_POST) {
                        anUnregisterResult = aServerForPort.fRemoveRoute_Post( theRoute);
                    }
                }

                return anUnregisterResult;

            };
            if( fUnregisterRouteForPortMethodAndPath){}/* CQT */
            aPrototype.fUnregisterRouteForPortMethodAndPath = fUnregisterRouteForPortMethodAndPath;










            var pS_RequestTest = function( theCallback) {

                if( !this._v_RequestSpecs) {
                    theCallback( "pS_RequestTest !this._v_RequestSpecs");
                    return;
                }

                var aTitle =  this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }

                this._v_RequestTest = new theM_httprequestnodejsrequesttest.HttpRequestNodejsRequestTest_Constructor( "RequestTestFor-" + aTitle, this._v_RequestSpecs);

                this._v_RequestTest.pF_HttpRequestTest( theCallback);
            };
            if( pS_RequestTest){}/* CQT */
            aPrototype.pS_RequestTest = pS_RequestTest;








            var pF_HttpListenerNodejsExpressTest = function( theCallback) {
                this.pF_HttpListenerGenericTest( theCallback);
            };
            if( pF_HttpListenerNodejsExpressTest){}/* CQT */
            aPrototype.pF_HttpListenerNodejsExpressTest = pF_HttpListenerNodejsExpressTest;





            var pF_HttpListenerTest = function( theCallback) {

                this.pF_HttpListenerNodejsExpressTest( theCallback);
            };
            if( pF_HttpListenerTest){}/* CQT */
            aPrototype.pF_HttpListenerTest = pF_HttpListenerTest;





            return aPrototype;

        })();




        var HttpListenerNodejsExpressTest_Constructor = function( theTitle, theLaunchtopSpecsOrPath) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_httplistenergenerictest.HttpListenerGenericTest_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_HttpListenerNodejsExpressTest( theTitle, theLaunchtopSpecsOrPath);
        };
        HttpListenerNodejsExpressTest_Constructor.prototype = aHttpListenerNodejsExpressTest_Prototype;





        var HttpListenerNodejsExpressTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_httplistenergenerictest.HttpListenerGenericTest_Prototype;

            this._v_Prototype = aHttpListenerNodejsExpressTest_Prototype;
            this._v_Type = null;
            this._v_Module    = null;
        };
        HttpListenerNodejsExpressTest_SuperPrototypeConstructor.prototype = aHttpListenerNodejsExpressTest_Prototype;






        var aModule = {
            "HttpListenerNodejsExpressTest_Prototype": aHttpListenerNodejsExpressTest_Prototype,
            "HttpListenerNodejsExpressTest_Constructor": HttpListenerNodejsExpressTest_Constructor,
            "HttpListenerNodejsExpressTest_SuperPrototypeConstructor": HttpListenerNodejsExpressTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aHttpListenerNodejsExpressTest_Prototype._v_Module = aModule;


        return aModule;
    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_httplistenergenerictest      = require('../httplistener-generic-test');
            var aM_httprequestnodejsrequesttest = require('../../httprequest/platforms/httprequest-nodejs-request-test');
            var aM_httplistenernodejsexpress    = require('../../../infrasvcs/httplistener/platforms/httplistener-nodejs-express');

            return aMod_definer(
                aM_httplistenergenerictest,
                aM_httprequestnodejsrequesttest,
                aM_httplistenernodejsexpress
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../httplistener-generic-test",
            "../../httprequest/platforms/platform-nodejs-request-test",
            "../../../infrasvcs/httplistener/platforms/httplistener-nodejs-express",
            "body-parser",
            "errorhandler"
        ], function (
            theM_httplistenergenerictest,
            theM_httprequestnodejsrequesttest,
            theM_httplistenernodejsexpress
            ) {
            return aMod_definer(
                theM_httplistenergenerictest,
                theM_httprequestnodejsrequesttest,
                theM_httplistenernodejsexpress
            );
        });
    }


}());