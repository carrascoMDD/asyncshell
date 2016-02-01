'use strict';

/*
 httplistener-nodejs-express.js
 Created 201408161733
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

    var aMod_definer =function( theM_express,
                                theM_bodyparser,
                                theM_errorhandler) {


        var ModuleName     = "httplistener-nodejs-express";
        var ModulePackages = "infrasvcs/httplistener/platforms";
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

            theToInit.EADDRINUSE = "EADDRINUSE";

            theToInit.LOGSERVERERRORS = true;

            theToInit.LOGROUTES       = true;
            theToInit.LOGLISTENS       = true;


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
        pgInitWithModuleConstants( ModuleConstants);










        var pgInitModuleGlobalsOn = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.gIdCounter = 0;

        };



        var ModuleGlobals = { };
        pgInitModuleGlobalsOn( ModuleGlobals);






        var fgReserveId = function() {

            if( !ModuleGlobals.gIdCounter) {
                ModuleGlobals.gIdCounter = 0;
            }

            ModuleGlobals.gIdCounter += 1;

            var aId = ModuleGlobals.gIdCounter;
            return aId.toString();
        };








        var aHttpListenerNodejsExpress_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_Type   = "HttpListener_Nodejs_Express";
            aPrototype._v_Module = null;

            aPrototype._v_Id                = null;
            aPrototype._v_CreationTimestamp  =null;

            aPrototype._v_Title = null;
            aPrototype._v_Port  = null;

            aPrototype._v_Server   = null;
            aPrototype._v_Listener = null;

            aPrototype._v_ServerErrorInterests   = null;
            aPrototype._v_ListenerErrorInterests = null;






            var _pInit = function( theTitle, thePort) {

                this._pInit_HttpListener_Nodejs_Express( theTitle, thePort);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_HttpListener_Nodejs_Express = function( theTitle, thePort) {

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_Id = fgReserveId();

                this._v_CreationTimestamp = Date.now();

                this._v_Title = theTitle;
                this._v_Port  = thePort;

                this._v_Server        = null;
                this._v_Listener      = null;

                this._v_ServerErrorInterests   = [ ];
                this._v_ListenerErrorInterests = [ ];

            };
            if( _pInit_HttpListener_Nodejs_Express){}/* CQT */
            aPrototype._pInit_HttpListener_Nodejs_Express = _pInit_HttpListener_Nodejs_Express;








            var fSetupServer = function() {

                if( this._v_Server) {
                    return true;
                }

                this._v_Server = theM_express();
                if( !this._v_Server){
                    return null;
                }

                this._v_Server.use( theM_bodyparser.json());
                this._v_Server.use( theM_bodyparser.urlencoded({ extended: true }));
                this._v_Server.use( theM_errorhandler());

                var aServerErrorHandler = this.fServerErrorHandler();
                if( aServerErrorHandler) {
                    this._v_Server.on( 'error', aServerErrorHandler);
                }

                return true;
            };
            if( fSetupServer){}/* CQT */
            aPrototype.fSetupServer = fSetupServer;






            var fServerErrorHandler = function() {

                var aThis = this;
                var aServerErrorHandler = function( theException) {

                    if( this._v_ServerErrorInterests) {

                        var aNumErrorInterests = this._v_ServerErrorInterests.length;
                        for( var anErrorInterestIdx=0; anErrorInterestIdx < aNumErrorInterests; anErrorInterestIdx++) {

                            var anErrorInterest = this._v_ServerErrorInterests[ anErrorInterestIdxanErrorInterestIdx];
                            if( anErrorInterest && ( typeof anErrorInterest == "function")) {
                                try {
                                    anErrorInterest( theException);
                                }
                                catch( anException) {
                                    if( this.LOGSERVERERRORS) {
                                        var anExceptionDetails = aThis.fExceptionDetail( theException);
                                        console.log( "fServerErrorHandler Exception during Interest invocation\n" + anExceptionDetails);
                                    }
                                }
                            }
                        }
                    }

                    if( this.LOGSERVERERRORS) {
                        if ( theException.code == this.EADDRINUSE) {

                            var aMessage = "fServerErrorHandler on error EADDRINUSE port=" + this._v_Port;
                            console.log( aMessage);
                        }
                        else {
                            var otherExceptionDetails = aThis.fExceptionDetail( theException);
                            console.log( "fServerErrorHandler on error\n" + otherExceptionDetails);
                        }
                    }
                };
                if( aServerErrorHandler){}/* CQT */

                return aServerErrorHandler;
            };
            if( fServerErrorHandler){}/* CQT */
            aPrototype.fServerErrorHandler = fServerErrorHandler;







            var fRegisterServerErrorInterest = function( theInterestHandler) {
                if( !theInterestHandler) {
                    return false;
                }

                if( !( typeof theInterestHandler == "function")) {
                    return false;
                }

                if( this._v_ServerErrorInterests.indexOf( theInterestHandler) >= 0) {
                    return false;
                }


                this._v_ServerErrorInterests.push( theInterestHandler);

                return true;
            };
            if( fRegisterServerErrorInterest){}/* CQT */
            aPrototype.fRegisterServerErrorInterest = fRegisterServerErrorInterest;







            var fUnregisterServerErrorInterest = function( theInterestHandler) {
                if( !theInterestHandler) {
                    return false;
                }

                if( !( typeof theInterestHandler == "function")) {
                    return false;
                }
                
                
                var aServerErrorInterestIndex = this._v_ServerErrorInterests.indexOf( theInterestHandler);

                if( aServerErrorInterestIndex < 0) {
                    return false;
                }


                this._v_ServerErrorInterests.splice( aServerErrorInterestIndex, 1);

                return true;
            };
            if( fUnregisterServerErrorInterest){}/* CQT */
            aPrototype.fUnregisterServerErrorInterest = fUnregisterServerErrorInterest;








            var fReleaseListener = function( ) {

                if( !this._v_Server) {
                    return true;
                }

                this._v_Server = null;

                return true;
            };
            if( fReleaseListener){}/* CQT */
            aPrototype.fReleaseListener = fReleaseListener;













            var fAddRoute_Get = function( theRoute, theHandlerFunction) {

                if( !theRoute) {
                    return false;
                }

                if( !theHandlerFunction) {
                    return false;
                }

                if( !this._v_Server) {
                    return false;
                }

                this._v_Server.get( theRoute, theHandlerFunction);

                if( this.LOGROUTES) {
                    console.log( "fAddRoute_Get thePort=" + this._v_Port + " theRoute=" + theRoute);
                }

                return true;
            };
            if( fAddRoute_Get){}/* CQT */
            aPrototype.fAddRoute_Get = fAddRoute_Get;







            var fAddRoute_Post = function( theRoute, theHandlerFunction) {

                if( !theRoute) {
                    return false;
                }

                if( !theHandlerFunction) {
                    return false;
                }

                if( !this._v_Server) {
                    return false;
                }

                this._v_Server.post( theRoute, theHandlerFunction);

                if( this.LOGROUTES) {
                    console.log( "fAddRoute_Get thePort=" + this._v_Port + " theRoute=" + theRoute);
                }

                return true;
            };
            if( fAddRoute_Post){}/* CQT */
            aPrototype.fAddRoute_Post = fAddRoute_Post;









            var fRemoveRoute_Get = function( theRoute) {

                if( !theRoute) {
                    return false;
                }

                if( !theHandlerFunction) {
                    return false;
                }

                if( !this._v_Server) {
                    return false;
                }

                var someRoutes = this._v_Server.routes.get;
                if( !someRoutes) {
                    return true;
                }

                someRoutes = someRoutes.slice();
                var aNumRoutes = someRoutes.length;

                for ( var aRouteIdx=0; aRouteIdx < aNumRoutes; aRouteIdx++ ) {

                    var aRoute = someRoutes[ aRouteIdx];
                    if( aRoute) {

                        var aPath = aRoute.path;
                        if( aPath) {
                            if( aPath == theRoute) {
                                this._v_Server.routes.get.splice( aRouteIdx, 1);
                                return true;
                            }
                        }
                    }
                }

                if( this.LOGROUTES) {
                    console.log( "fRemoveRoute_Get thePort=" + this._v_Port + " theRoute=" + theRoute);
                }

                return true;
            };
            if( fRemoveRoute_Get){}/* CQT */
            aPrototype.fRemoveRoute_Get = fRemoveRoute_Get;








            var fRemoveRoute_Post = function( theRoute) {

                if( !theRoute) {
                    return false;
                }

                if( !theHandlerFunction) {
                    return false;
                }

                if( !this._v_Server) {
                    return false;
                }

                var someRoutes = this._v_Server.routes.post;
                if( !someRoutes) {
                    return true;
                }

                someRoutes = someRoutes.slice();
                var aNumRoutes = someRoutes.length;

                for ( var aRouteIdx=0; aRouteIdx < aNumRoutes; aRouteIdx++ ) {

                    var aRoute = someRoutes[ aRouteIdx];
                    if( aRoute) {

                        var aPath = aRoute.path;
                        if( aPath) {
                            if( aPath == theRoute) {
                                this._v_Server.routes.get.splice( aRouteIdx, 1);
                                return true;
                            }
                        }
                    }
                }

                if( this.LOGROUTES) {
                    console.log( "fRemoveRoute_Post thePort=" + this._v_Port + " theRoute=" + theRoute);
                }

                return true;
            };
            if( fRemoveRoute_Post){}/* CQT */
            aPrototype.fRemoveRoute_Post = fRemoveRoute_Post;







            var fStartListener = function( ) {

                if( this._v_Listener) {
                    console.log( "already listener");
                    return false;
                }

                if( !this._v_Server) {
                    console.log( "!this._v_Server");
                    return false;
                }

                if( !this._v_Port) {
                    console.log( "!this._v_Port");
                    return false;
                }

                var aPortNumber = this._v_Port;
                if( typeof aPortNumber == "string") {
                    try {
                        aPortNumber = parseInt( aPort);
                    }
                    catch( anException){}

                }
                if( !aPortNumber) {
                    console.log( "!aPortNumber");
                    return false;
                }

                var aListener = null;
                try {
                    aListener = this._v_Server.listen( aPortNumber);
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    if( this.LOGSERVERERRORS) {
                        console.log( "fStartListenerException when aServer.listen( " + aPortNumber + ")\n" + aExceptionDetail);
                    }

                    return false;
                }
                if( !aListener) {
                    if( this.LOGSERVERERRORS) {
                        console.log( "fStartListenerException !aListener");
                    }
                    return false;
                }


                this._v_Listener = aListener;


                var aListenerErrorHandler = this.fListenerErrorHandler();
                if( aListenerErrorHandler) {
                    this._v_Listener.on( 'error', aListenerErrorHandler);
                }

                if( this.LOGLISTENS) {
                    console.log( "fStartListener aPortNumber=" + aPortNumber);
                }

                return true;
            };
            if( fStartListener){}/* CQT */
            aPrototype.fStartListener = fStartListener;







            var fListenerErrorHandler = function() {

                var aThis = this;
                var aListenerErrorHandler = function( theException) {

                    if( this._v_ListenerErrorInterests) {

                        var aNumErrorInterests = this._v_ListenerErrorInterests.length;
                        for( var anErrorInterestIdx=0; anErrorInterestIdx < aNumErrorInterests; anErrorInterestIdx++) {

                            var anErrorInterest = this._v_ListenerErrorInterests[ anErrorInterestIdxanErrorInterestIdx];
                            if( anErrorInterest && ( typeof anErrorInterest == "function")) {
                                try {
                                    anErrorInterest( theException);
                                }
                                catch( anException) {
                                    if( this.LOGSERVERERRORS) {
                                        var anExceptionDetails = aThis.fExceptionDetail( theException);
                                        console.log( "fListenerErrorHandler Exception during Interest invocation\n" + anExceptionDetails);
                                    }
                                }
                            }
                        }
                    }

                    if( this.LOGSERVERERRORS) {
                        if ( theException.code == this.EADDRINUSE) {

                            var aMessage = "fListenerErrorHandler on error EADDRINUSE port=" + this._v_Port;
                            console.log( aMessage);
                        }
                        else {
                            var otherExceptionDetails = aThis.fExceptionDetail( theException);
                            console.log( "fListenerErrorHandler on error\n" + otherExceptionDetails);
                        }
                    }
                };
                if( aListenerErrorHandler){}/* CQT */

                return aListenerErrorHandler;
            };
            if( fListenerErrorHandler){}/* CQT */
            aPrototype.fListenerErrorHandler = fListenerErrorHandler;







            var fRegisterListenerErrorInterest = function( theInterestHandler) {
                if( !theInterestHandler) {
                    return false;
                }

                if( !( typeof theInterestHandler == "function")) {
                    return false;
                }

                if( this._v_ListenerErrorInterests.indexOf( theInterestHandler) >= 0) {
                    return false;
                }


                this._v_ListenerErrorInterests.push( theInterestHandler);

                return true;
            };
            if( fRegisterListenerErrorInterest){}/* CQT */
            aPrototype.fRegisterListenerErrorInterest = fRegisterListenerErrorInterest;







            var fUnregisterListenerErrorInterest = function( theInterestHandler) {
                if( !theInterestHandler) {
                    return false;
                }

                if( !( typeof theInterestHandler == "function")) {
                    return false;
                }


                var aListenerErrorInterestIndex = this._v_ListenerErrorInterests.indexOf( theInterestHandler);

                if( aListenerErrorInterestIndex < 0) {
                    return false;
                }


                this._v_ListenerErrorInterests.splice( aListenerErrorInterestIndex, 1);

                return true;
            };
            if( fUnregisterListenerErrorInterest){}/* CQT */
            aPrototype.fUnregisterListenerErrorInterest = fUnregisterListenerErrorInterest;









            var fIsListening= function() {

                var anIsListening = this._v_Listener ? true : false;
                if( anIsListening){}/* CQT */

                return anIsListening;
            };
            if( fIsListening){}/* CQT */
            aPrototype.fIsListening = fIsListening;






            var fStopListener = function() {

                if( !this._v_Listener) {
                    return true;
                }

                try {
                    this._v_Listener.close();
                }
                catch( anException) {
                    if( this.LOGSERVERERRORS) {
                        var aExceptionDetail = this.fExceptionDetail( anException);
                        console.log( "fStopListener Exception\n" + aExceptionDetail);
                    }
                    return false;
                }

                this._v_Listener = null;

                return true;
            };
            if( fStopListener){}/* CQT */
            aPrototype.fStopListener = fStopListener;









            return aPrototype;

        })();









        var HttpListenerNodejsExpress_Constructor = function( theTitle, thePort) {

            this._v_Prototype = aHttpListenerNodejsExpress_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Id                = null;
            this._v_CreationTimestamp  =null;

            this._v_Title = null;
            this._v_Port  = null;

            this._v_Server        = null;
            this._v_Listener      = null;

            this._v_ServerErrorInterests   = null;
            this._v_ListenerErrorInterests = null;

            this._pInit_HttpListener_Nodejs_Express( theTitle, thePort);
        };
        HttpListenerNodejsExpress_Constructor.prototype = aHttpListenerNodejsExpress_Prototype;






        var HttpListenerNodejsExpress_SuperPrototypeConstructor = function() {

            this._v_Prototype = aHttpListenerNodejsExpress_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Id                = null;
            this._v_CreationTimestamp  =null;

            this._v_Title = null;
            this._v_Port  = null;

            this._v_Server        = null;
            this._v_Listener      = null;

            this._v_ServerErrorInterests   = null;
            this._v_ListenerErrorInterests = null;
        };
        HttpListenerNodejsExpress_SuperPrototypeConstructor.prototype = aHttpListenerNodejsExpress_Prototype;









        var aModule = {
            "HttpListenerNodejsExpress_Prototype": aHttpListenerNodejsExpress_Prototype,
            "HttpListenerNodejsExpress_Constructor": HttpListenerNodejsExpress_Constructor,
            "HttpListenerNodejsExpress_SuperPrototypeConstructor": HttpListenerNodejsExpress_SuperPrototypeConstructor,
            "HttpListenerConstructorName": "HttpListenerNodejsExpress_Constructor"
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

            var aM_express          = require('express');
            var aM_bodyparser       = require('body-parser');
            var aM_errorhandler     = require('errorhandler');

            return aMod_definer(
                aM_express,
                aM_bodyparser,
                aM_errorhandler
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "express",
            "body-parser",
            "errorhandler"
        ], function (
                theM_express,
                theM_bodyparser,
                theM_errorhandler
            ) {
            return aMod_definer(
                theM_express,
                theM_bodyparser,
                theM_errorhandler
            );
        });
    }

}());

















