'use strict';

/*
 platform-nodejs-express-test.js
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
                                 theM_platformnodejsrequesttest,
                                 theM_express,
                                 theM_bodyparser,
                                 theM_errorhandler) {


        var ModuleName     = "platform-nodejs-express-test";
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













        var aPlatformNodejsExpressTest_Prototype = (function() {

            var aPrototype = new theM_httplistenergenerictest.HttpListenerGenericTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_httplistenergenerictest.HttpListenerGenericTest_Prototype;


            aPrototype._v_Type = "PlatformNodejsExpressTest";
            aPrototype._v_Module = null;







            var _pInit = function( theTitle, theRequestSpecsPath) {

                this._pInit_PlatformNodejsExpressTest( theTitle, theRequestSpecsPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_PlatformNodejsExpressTest = function( theTitle, theRequestSpecsPath) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_HttpListenerGenericTest.apply( this, [ theTitle, theRequestSpecsPath]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

            };
            if( _pInit_PlatformNodejsExpressTest){}/* CQT */
            aPrototype._pInit_PlatformNodejsExpressTest = _pInit_PlatformNodejsExpressTest;









            var fCreateServer = function( thePort) {

                var aServer = theM_express();
                if( !aServer){
                    return null;
                }

                aServer.use( theM_bodyparser.json());
                aServer.use( theM_bodyparser.urlencoded({ extended: true }));
                aServer.use( theM_errorhandler());

                var anErrorHandler = this.fServerErrorHandler();

                aServer.on( 'error', anErrorHandler);

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


                    var aListener = null;
                    try {
                        var anErrorHandler = this.fListenerErrorHandler();

                        aListener = aServer.listen( aPortNumber).on( 'error', anErrorHandler);
                    }
                    catch( anException) {
                        var otherExceptionDetail = this.fExceptionDetail( anException);
                        theCallback( "pS_StartListeners Exception when aServer.listen( " + aPortNumber + ")\n" + otherExceptionDetail);
                        return;
                    }

                    if( !aListener) {
                        theCallback( "pS_StartListeners !aServer.listen( " + aPortNumber + ")");
                        return;
                    }

                    if( this.LOGLISTENS) {
                        console.log( "pS_StartListeners aPortNumber=" + aPortNumber);
                    }

                    this._v_ListenersByPort[ aPort] = aListener;
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

                if( !this._v_ListenersByPort) {
                    theCallback( "!this._v_ListenersByPort");
                    return;
                }

                var somePorts = Object.keys( this._v_ListenersByPort);
                var aNumPorts = somePorts.length;
                for( var aPortIdx=0; aPortIdx < aNumPorts; aPortIdx++) {

                    var aPort = somePorts[ aPortIdx];

                    var anExistingListener = this._v_ListenersByPort[ aPort];

                    if( anExistingListener) {
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
                    anExpressRegisterVerb = aServerForPort.get;
                }
                else {
                    if( theMethod == this.EXPRESS_VERB_POST) {
                        anExpressRegisterVerb = aServerForPort.post;
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











            var pS_RequestTest = function( theCallback) {

                 if( !this._v_RequestSpecs) {
                     theCallback( "pS_RequestTest !this._v_RequestSpecs");
                     return;
                 }

                 var aTitle =  this._v_Title;
                 if( !aTitle) {
                 aTitle = "?";
                 }

                 this._v_RequestTest = new theM_platformnodejsrequesttest.PlatformNodejsRequestTest_Constructor( "RequestTestFor-" + aTitle, this._v_RequestSpecs);

                 this._v_RequestTest.pF_HttpRequestTest( theCallback);
            };
            if( pS_RequestTest){}/* CQT */
            aPrototype.pS_RequestTest = pS_RequestTest;





            


            var pF_PlatformNodejsExpressTest = function( theCallback) {
                this.pF_HttpListenerGenericTest( theCallback);
            };
            if( pF_PlatformNodejsExpressTest){}/* CQT */
            aPrototype.pF_PlatformNodejsExpressTest = pF_PlatformNodejsExpressTest;





            var pF_HttpListenerTest = function( theCallback) {

                this.pF_PlatformNodejsExpressTest( theCallback);
            };
            if( pF_HttpListenerTest){}/* CQT */
            aPrototype.pF_HttpListenerTest = pF_HttpListenerTest;





            return aPrototype;

        })();




        var PlatformNodejsExpressTest_Constructor = function( theTitle, theLaunchtopSpecsOrPath) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_httplistenergenerictest.HttpListenerGenericTest_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_PlatformNodejsExpressTest( theTitle, theLaunchtopSpecsOrPath);
        };
        PlatformNodejsExpressTest_Constructor.prototype = aPlatformNodejsExpressTest_Prototype;





        var PlatformNodejsExpressTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_httplistenergenerictest.HttpListenerGenericTest_Prototype;

            this._v_Prototype = aPlatformNodejsExpressTest_Prototype;
            this._v_Type = null;
            this._v_Module    = null;
        };
        PlatformNodejsExpressTest_SuperPrototypeConstructor.prototype = aPlatformNodejsExpressTest_Prototype;






        var aModule = {
            "PlatformNodejsExpressTest_Prototype": aPlatformNodejsExpressTest_Prototype,
            "PlatformNodejsExpressTest_Constructor": PlatformNodejsExpressTest_Constructor,
            "PlatformNodejsExpressTest_SuperPrototypeConstructor": PlatformNodejsExpressTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aPlatformNodejsExpressTest_Prototype._v_Module = aModule;


        return aModule;
    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_httplistenergenerictest = require('../httplistener-generic-test');
            var aM_platformnodejsrequesttest   = require( "../../httprequest/platforms/platform-nodejs-request-test");
            var aM_express                 = require('express');
            var aM_bodyparser              = require('body-parser');
            var aM_errorhandler            = require('errorhandler');

            return aMod_definer(
                aM_httplistenergenerictest,
                aM_platformnodejsrequesttest,
                aM_express,
                aM_bodyparser,
                aM_errorhandler
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../httplistener-generic-test",
            "../../httprequest/platforms/platform-nodejs-request-test",
            "express",
            "body-parser",
            "errorhandler"
        ], function (
                theM_httplistenergenerictest,
                theM_platformnodejsrequesttest,
                theM_express,
                theM_bodyparser,
                theM_errorhandler
            ) {
            return aMod_definer(
                theM_httplistenergenerictest,
                theM_platformnodejsrequesttest,
                theM_express,
                theM_bodyparser,
                theM_errorhandler
            );
        });
    }


}());