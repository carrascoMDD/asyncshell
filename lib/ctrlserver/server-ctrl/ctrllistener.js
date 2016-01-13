'use strict';

/*
 ctrllistener.js
 Creado 201408161733
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


(function () {

    var aMod_definer =function( theM_ctrlrecorded,
                                theM_exceptiondetails,
                                theM_overrider,
                                theM_httplistener,
                                theM_exiter) {


        var ModuleName     = "ctrllistener";
        var ModulePackages = "ctrlserver/server-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}



        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }
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











        var aCtrlListener_Prototype = (function() {


            var aPrototype = new theM_ctrlrecorded.CtrlRecorded_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;


            aPrototype._v_Type   = "CtrlListener";
            aPrototype._v_Module = null;

            aPrototype._v_HttpListenersByPort = null;

            aPrototype._v_IsListenening = null;

            aPrototype._v_ServerErrorInterests   = null;
            aPrototype._v_ListenerErrorInterests = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_CtrlListener( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_CtrlListener = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlRecorded.apply( this, [ theTitle, theIdentifier, theRecorder]);


                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_HttpListenersByPort = { };
                this._v_IsListenening = false;

                this._v_ServerErrorInterests   = [ ];
                this._v_ListenerErrorInterests = [ ];
            };
            if( _pInit_CtrlListener){}/* CQT */
            aPrototype._pInit_CtrlListener = _pInit_CtrlListener;









            var fAddRoute_Get = function( thePort, theRoute, theHandlerFunction) {

                if( !thePort) {
                    return false;
                }

                if( !theRoute) {
                    return false;
                }

                if( !theHandlerFunction) {
                    return false;
                }

                if( !this._v_HttpListenersByPort) {
                    return false;
                }

                var anHttpListener = this.fHttpListenerForPort( thePort);
                if( !anHttpListener) {
                    return false;
                }

                var anAddRouteResult = anHttpListener.fAddRoute_Get( theRoute, theHandlerFunction);
                if( anAddRouteResult){}/* CQT */

                return anAddRouteResult;
            };
            if( fAddRoute_Get){}/* CQT */
            aPrototype.fAddRoute_Get = fAddRoute_Get;








            var fAddRoute_Post = function( thePort, theRoute, theHandlerFunction) {

                if( !thePort) {
                    return false;
                }

                if( !theRoute) {
                    return false;
                }

                if( !theHandlerFunction) {
                    return false;
                }

                if( !this._v_HttpListenersByPort) {
                    return false;
                }

                var anHttpListener = this.fHttpListenerForPort( thePort);
                if( !anHttpListener) {
                    return false;
                }

                var anAddRouteResult = anHttpListener.fAddRoute_Post( theRoute, theHandlerFunction);
                if( anAddRouteResult){}/* CQT */

                return anAddRouteResult;
            };
            if( fAddRoute_Post){}/* CQT */
            aPrototype.fAddRoute_Post = fAddRoute_Post;










            var fRemoveRoute_Get = function( thePort, theRoute, theHandlerFunction) {

                if( !thePort) {
                    return false;
                }

                if( !theRoute) {
                    return false;
                }


                if( !this._v_HttpListenersByPort) {
                    return true;
                }

                var anHttpListener = this.fExistingHttpListenerForPort( thePort);
                if( !anHttpListener) {
                    return true;
                }

                var aRemoveRouteResult = anHttpListener.fRemoveRoute_Get( theRoute, theHandlerFunction);
                if( aRemoveRouteResult){}/* CQT */

                return aRemoveRouteResult;
            };
            if( fRemoveRoute_Get){}/* CQT */
            aPrototype.fRemoveRoute_Get = fRemoveRoute_Get;









            var fRemoveRoute_Post = function( thePort, theRoute, theHandlerFunction) {

                if( !thePort) {
                    return false;
                }

                if( !theRoute) {
                    return false;
                }


                if( !this._v_HttpListenersByPort) {
                    return true;
                }

                var anHttpListener = this.fExistingHttpListenerForPort( thePort);
                if( !anHttpListener) {
                    return true;
                }

                var aRemoveRouteResult = anHttpListener.fRemoveRoute_Post( theRoute, theHandlerFunction);
                if( aRemoveRouteResult){}/* CQT */

                return aRemoveRouteResult;
            };
            if( fRemoveRoute_Post){}/* CQT */
            aPrototype.fRemoveRoute_Post = fRemoveRoute_Post;






            var fExistingHttpListenerForPort = function( thePort) {

                if( !thePort) {
                    return null;
                }

                if( !this._v_HttpListenersByPort) {
                    return null;
                }

                var anHttpListener = this._v_HttpListenersByPort[ thePort];
                if( !anHttpListener) {
                    return null;
                }

                return anHttpListener;

            };
            if( fExistingHttpListenerForPort){}/* CQT */
            aPrototype.fExistingHttpListenerForPort = fExistingHttpListenerForPort;










            var fHttpListenerForPort = function( thePort) {

                if( !thePort) {
                    return null;
                }

                if( !this._v_HttpListenersByPort) {
                    return null;
                }

                var anHttpListener = this.fExistingHttpListenerForPort( thePort);
                if( anHttpListener) {
                    return anHttpListener;
                }


                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }

                var anHttpListenerId = null;
                if( this._v_Identifier) {
                    anHttpListenerId = this._v_Identifier.fReserveId();
                }

                anHttpListener = new theM_httplistener.HttpListener_Constructor(
                    "ListenerOnPort-" + thePort + "-For-" + aTitle,
                    thePort,
                    anHttpListenerId
                );
                if( !anHttpListener.fSetupServer()) {
                    return null;
                }

                this._v_HttpListenersByPort[ thePort] = anHttpListener;



                if( this._v_ServerErrorInterests) {
                    var aNumServerErrorInterests = this._v_ServerErrorInterests.length;
                    for( var aServerErrorInterestIdx=0; aServerErrorInterestIdx < aNumServerErrorInterests; aServerErrorInterestIdx++) {

                        var aServerErrorInterest = this._v_ServerErrorInterests[ aServerErrorInterestIdx];
                        if( aServerErrorInterest) {
                            var aRegisterResult = anHttpListener.fRegisterServerErrorInterest( aServerErrorInterest);
                            if( !aRegisterResult) {
                                return null;
                            }
                        }
                    }
                }


                
                if( this._v_IsListenening) {
                    if( !this.fStartListening()) {
                        return null;
                    }
                }


                if( this._v_ListenerErrorInterests) {
                    var aNumListenerErrorInterests = this._v_ListenerErrorInterests.length;
                    for( var aListenerErrorInterestIdx=0; aListenerErrorInterestIdx < aNumListenerErrorInterests; aListenerErrorInterestIdx++) {

                        var aListenerErrorInterest = this._v_ListenerErrorInterests[ aListenerErrorInterestIdx];
                        if( aListenerErrorInterest) {
                            var aRegisterResult = anHttpListener.fRegisterListenerErrorInterest( aListenerErrorInterest);
                            if( !aRegisterResult) {
                                return null;
                            }
                        }
                    }
                }

                return anHttpListener;
            };
            if( fHttpListenerForPort){}/* CQT */
            aPrototype.fHttpListenerForPort = fHttpListenerForPort;








            var fStartListening = function() {

                if( !this._v_HttpListenersByPort) {
                    return true;
                }

                var aJustAnyStarted = false;

                var someListenedPorts = Object.keys( this._v_HttpListenersByPort);
                var aNumListenedPorts = someListenedPorts.length;
                for( var aListenedPortIdx=0; aListenedPortIdx < aNumListenedPorts; aListenedPortIdx++) {
                    var aListenedPort = someListenedPorts[ aListenedPortIdx];

                    var anHttpListener = this._v_HttpListenersByPort[ aListenedPort];
                    if( anHttpListener) {
                        if( !anHttpListener.fIsListening()) {
                            if( !anHttpListener.fStartListener()) {
                                return false;
                            }
                            else {
                                aJustAnyStarted = true;
                            }
                        }
                    }
                }

                theM_exiter.pRegisterInterestedParty( this);

                this._v_IsListenening = true;

                return true;
            };
            if( fStartListening){}/* CQT */
            aPrototype.fStartListening = fStartListening;










            var fStopListening = function() {

                if( !this._v_HttpListenersByPort) {
                    return true;
                }

                var someListenedPorts = Object.keys( this._v_HttpListenersByPort);
                var aNumListenedPorts = someListenedPorts.length;
                for( var aListenedPortIdx=0; aListenedPortIdx < aNumListenedPorts; aListenedPortIdx++) {
                    var aListenedPort = someListenedPorts[ aListenedPortIdx];

                    var anHttpListener = this._v_HttpListenersByPort[ aListenedPort];
                    if( anHttpListener) {
                        if( anHttpListener.fIsListening()) {
                            if( !anHttpListener.fStopListener()) {
                                return false;
                            }
                        }
                    }
                }

                theM_exiter.pDropInterestedParty( this);

                this._v_IsListenening = false;

                return true;
            };
            if( fStopListening){}/* CQT */
            aPrototype.fStopListening = fStopListening;








            var fReleaseListener = function( ) {

                if( !this._v_HttpListenersByPort) {
                    return true;
                }

                if( !this.fStopListening()) {
                    return false;
                }

                var someListenedPorts = Object.keys( this._v_HttpListenersByPort);
                var aNumListenedPorts = someListenedPorts.length;
                for( var aListenedPortIdx=0; aListenedPortIdx < aNumListenedPorts; aListenedPortIdx++) {
                    var aListenedPort = someListenedPorts[ aListenedPortIdx];

                    var anHttpListener = this._v_HttpListenersByPort[ aListenedPort];
                    if( anHttpListener) {
                        if( anHttpListener.fIsListening()) {
                            if( !anHttpListener.fReleaseListener()) {
                                return false;
                            }
                        }
                    }
                }

                this._v_IsListenening = false;

                return true;
            };
            if( fReleaseListener){}/* CQT */
            aPrototype.fReleaseListener = fReleaseListener;







            var fExitVote = function( theExitCode) {
                if( theExitCode){}/* CQT */

                if( !this.fStopListening()) {
                    return false;
                }

                var anExitHandler = this.fExitHandler( theExitCode);
                if( anExitHandler){}/* CQT */

                return anExitHandler;
            };
            if( fExitVote){}/* CQT */
            aPrototype.fExitVote = fExitVote;







            var fExitHandler = function( theExitCode) {
                if( theExitCode){}/* CQT */

                var aThis = this;
                var anExitHandler = function( theExitCode_inner) {
                    if( theExitCode_inner){}/* CQT */

                    aThis.fReleaseListener();
                };
                if( anExitHandler){}/* CQT */

                return anExitHandler;
            };
            if( fExitHandler){}/* CQT */
            aPrototype.fExitHandler = fExitHandler;










            var fRegisterServerErrorInterest = function( theInterestHandler) {
                if( !theInterestHandler) {
                    return false;
                }

                if( !( typeof theInterestHandler == "function")) {
                    return false;
                }


                if( this._v_ServerErrorInterests.indexOf( theInterestHandler) >= 0) {
                    return true;
                }


                if( !this._v_HttpListenersByPort) {
                    return true;
                }

                var someListenedPorts = Object.keys( this._v_HttpListenersByPort);
                var aNumListenedPorts = someListenedPorts.length;
                for( var aListenedPortIdx=0; aListenedPortIdx < aNumListenedPorts; aListenedPortIdx++) {
                    var aListenedPort = someListenedPorts[ aListenedPortIdx];

                    var anHttpListener = this._v_HttpListenersByPort[ aListenedPort];
                    if( anHttpListener) {

                        var aRegisterResult = anHttpListener.fRegisterServerErrorInterest( theInterestHandler);
                        if( !aRegisterResult) {
                            return false;
                        }
                    }
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


                var anInterestHandlerIndex = this._v_ServerErrorInterests.indexOf( theInterestHandler);
                if( anInterestHandlerIndex < 0) {
                    return true;
                }


                if( !this._v_HttpListenersByPort) {
                    return true;
                }

                var someListenedPorts = Object.keys( this._v_HttpListenersByPort);
                var aNumListenedPorts = someListenedPorts.length;
                for( var aListenedPortIdx=0; aListenedPortIdx < aNumListenedPorts; aListenedPortIdx++) {
                    var aListenedPort = someListenedPorts[ aListenedPortIdx];

                    var anHttpListener = this._v_HttpListenersByPort[ aListenedPort];
                    if( anHttpListener) {

                        var aUnregisterResult = anHttpListener.fUnregisterServerErrorInterest( theInterestHandler);
                        if( !aUnregisterResult) {
                            return false;
                        }
                    }
                }

                this._v_ServerErrorInterests.splice( anInterestHandlerIndex, 1);

                return true;
            };
            if( fUnregisterServerErrorInterest){}/* CQT */
            aPrototype.fUnregisterServerErrorInterest = fUnregisterServerErrorInterest;









            var fRegisterListenerErrorInterest = function( theInterestHandler) {
                if( !theInterestHandler) {
                    return false;
                }

                if( !( typeof theInterestHandler == "function")) {
                    return false;
                }


                if( this._v_ListenerErrorInterests.indexOf( theInterestHandler) >= 0) {
                    return true;
                }


                if( !this._v_HttpListenersByPort) {
                    return true;
                }

                var someListenedPorts = Object.keys( this._v_HttpListenersByPort);
                var aNumListenedPorts = someListenedPorts.length;
                for( var aListenedPortIdx=0; aListenedPortIdx < aNumListenedPorts; aListenedPortIdx++) {
                    var aListenedPort = someListenedPorts[ aListenedPortIdx];

                    var anHttpListener = this._v_HttpListenersByPort[ aListenedPort];
                    if( anHttpListener) {

                        var aRegisterResult = anHttpListener.fRegisterListenerErrorInterest( theInterestHandler);
                        if( !aRegisterResult) {
                            return false;
                        }
                    }
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


                var anInterestHandlerIndex = this._v_ListenerErrorInterests.indexOf( theInterestHandler);
                if( anInterestHandlerIndex < 0) {
                    return true;
                }


                if( !this._v_HttpListenersByPort) {
                    return true;
                }

                var someListenedPorts = Object.keys( this._v_HttpListenersByPort);
                var aNumListenedPorts = someListenedPorts.length;
                for( var aListenedPortIdx=0; aListenedPortIdx < aNumListenedPorts; aListenedPortIdx++) {
                    var aListenedPort = someListenedPorts[ aListenedPortIdx];

                    var anHttpListener = this._v_HttpListenersByPort[ aListenedPort];
                    if( anHttpListener) {

                        var aUnregisterResult = anHttpListener.fUnregisterListenerErrorInterest( theInterestHandler);
                        if( !aUnregisterResult) {
                            return false;
                        }
                    }
                }

                this._v_ListenerErrorInterests.splice( anInterestHandlerIndex, 1);

                return true;
            };
            if( fUnregisterListenerErrorInterest){}/* CQT */
            aPrototype.fUnregisterListenerErrorInterest = fUnregisterListenerErrorInterest;








            return aPrototype;

        })();









        var CtrlListener_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Port  = null;

            this._v_HttpListenersByPort = null;
            this._v_IsListenening = null;

            this._v_ServerErrorInterests   = null;
            this._v_ListenerErrorInterests = null;

            this._pInit_CtrlListener( theTitle, theIdentifier, theRecorder);
        };
        CtrlListener_Constructor.prototype = aCtrlListener_Prototype;







        var CtrlListener_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = aCtrlListener_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Port  = null;

            this._v_HttpListenersByPort = null;
            this._v_IsListenening = null;

            this._v_ServerErrorInterests   = null;
            this._v_ListenerErrorInterests = null;
        };
        CtrlListener_SuperPrototypeConstructor.prototype = aCtrlListener_Prototype;









        var aModule = {
            "CtrlListener_Prototype": aCtrlListener_Prototype,
            "CtrlListener_Constructor": CtrlListener_Constructor,
            "CtrlListener_SuperPrototypeConstructor": CtrlListener_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aCtrlListener_Prototype._v_Module = aModule;

        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ctrlrecorded     = require('../common-ctrl/ctrlrecorded');
            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');
            var aM_httplistener     = require('../../infrasvcs/httplistener/httplistener');
            var aM_exiter           = require('../../infrasvcs/exiter/exiter');

            return aMod_definer( aM_ctrlrecorded, aM_exceptiondetails, aM_overrider, aM_httplistener, aM_exiter);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-ctrl/ctrlrecorded",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider",
            "../../infrasvcs/httplistener/httplistener",
            "../../infrasvcs/exiter/exiter"
        ], function (
                theM_ctrlrecorded,
                theM_exceptiondetails,
                theM_overrider,
                theM_httplistener,
                theM_exiter
            ) {
            return aMod_definer(
                theM_ctrlrecorded,
                theM_exceptiondetails,
                theM_overrider,
                theM_httplistener,
                theM_exiter
            );
        });
    }

}());

















