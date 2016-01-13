'use strict';

/*
 httplistener.js
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

    var aMod_definer =function( theM_exceptiondetails,
                                theM_overrider,
                                theM_useplatform) {


        var ModuleName     = "httplistener";
        var ModulePackages = "infrasvcs/httplistener";
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










        var pgInitModuleGlobalsOn = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.gIdCounter = 0;

            theToInit.gHttpListener_Platform_Nodejs_Express = null;
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







        var aHttpListener_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_Type   = "HttpListener";
            aPrototype._v_Module = null;

            aPrototype._v_Id                = null;
            aPrototype._v_CreationTimestamp  =null;

            aPrototype._v_Title = null;
            aPrototype._v_Port  = null;

            aPrototype._v_HttpListenerPlatform = null;







            var _pInit = function( theTitle, thePort, theId) {

                this._pInit_HttpListener( theTitle, thePort, theId);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_HttpListener = function( theTitle, thePort, theId) {

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_Id = theId;
                if( !this._v_Id) {
                    this._v_Id = fgReserveId();
                }

                this._v_CreationTimestamp = Date.now();

                this._v_Title = theTitle;
                this._v_Port  = thePort;

                this._v_HttpListenerPlatform = null;
            };
            if( _pInit_HttpListener){}/* CQT */
            aPrototype._pInit_HttpListener = _pInit_HttpListener;












            var fSetupServer = function() {

                if( this._v_HttpListenerPlatform) {
                    return true;
                }

                var aPlatformModule = this.fHttpListenerFactory_PlatformModule();
                if( !aPlatformModule) {
                    return null;
                }

                var aConstructorName = aPlatformModule.HttpListenerConstructorName;
                if( !aConstructorName) {
                    return null;
                }

                var aConstructor = aPlatformModule[ aPlatformModule.HttpListenerConstructorName];
                if( !aConstructor) {
                    return null;
                }
                if( !( typeof aConstructor == "function")) {
                    return null;
                }

                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }
                var aHttpListener = new aConstructor( "PlatformFor-" + aTitle, this._v_Port);
                if( !aHttpListener) {
                    return null;
                }


                this._v_HttpListenerPlatform = aHttpListener;


                var aSetUpOk = this._v_HttpListenerPlatform.fSetupServer();
                if( aSetUpOk){}/* CQT */

                return aSetUpOk;
            };
            if( fSetupServer){}/* CQT */
            aPrototype.fSetupServer = fSetupServer;











            var fHttpListenerFactory_PlatformModule = function() {

                if( !theM_useplatform.USEPLATFORM) {
                    return null;
                }

                if( theM_useplatform.USEPLATFORMS.indexOf( theM_useplatform.USEPLATFORM) < 0) {
                    return null;
                }

                if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_NODEJS) {
                    return this.fHttpListenerFactory_PlatformModule_Nodejs_express();
                }

                return null;
            };
            if( fHttpListenerFactory_PlatformModule){}/* CQT */
            aPrototype.fHttpListenerFactory_PlatformModule = fHttpListenerFactory_PlatformModule;







            var fHttpListenerFactory_PlatformModule_Nodejs_express = function() {

                var aPlatformModule = ModuleGlobals.gHttpListener_Platform_Nodejs_Express;
                if( aPlatformModule) {
                    return aPlatformModule;
                }

                try {
                    aPlatformModule = require( "./platforms/httplistener-nodejs-express");
                }
                catch( anException) {
                    throw anException;
                }

                ModuleGlobals.gHttpListener_Platform_Nodejs_Express = aPlatformModule;

                return ModuleGlobals.gHttpListener_Platform_Nodejs_Express;
            };
            if( fHttpListenerFactory_PlatformModule_Nodejs_express){}/* CQT */
            aPrototype.fHttpListenerFactory_PlatformModule_Nodejs_express = fHttpListenerFactory_PlatformModule_Nodejs_express;









            var fRegisterServerErrorInterest = function( theInterestHandler) {
                if( !theInterestHandler) {
                    return false;
                }

                if( !( typeof theInterestHandler == "function")) {
                    return false;
                }

                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aRegistered = this._v_HttpListenerPlatform.fRegisterServerErrorInterest( theInterestHandler);
                if( aRegistered){}/* CQT */

                return aRegistered;
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


                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aUnregistered = this._v_HttpListenerPlatform.fUnregisterServerErrorInterest( theInterestHandler);
                if( aUnregistered){}/* CQT */

                return aUnregistered;
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

                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aRegistered = this._v_HttpListenerPlatform.fRegisterListenerErrorInterest( theInterestHandler);
                if( aRegistered){}/* CQT */

                return aRegistered;
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

                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aUnregistered = this._v_HttpListenerPlatform.fUnregisterListenerErrorInterest( theInterestHandler);
                if( aUnregistered){}/* CQT */

                return aUnregistered;
            };
            if( fUnregisterListenerErrorInterest){}/* CQT */
            aPrototype.fUnregisterListenerErrorInterest = fUnregisterListenerErrorInterest;








            var fStartListener = function() {

                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aDelegationResult = this._v_HttpListenerPlatform.fStartListener();
                if( aDelegationResult){}/* CQT */

                return aDelegationResult;
            };
            if( fStartListener){}/* CQT */
            aPrototype.fStartListener = fStartListener;







            var fIsListening= function() {

                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aDelegationResult = this._v_HttpListenerPlatform.fIsListening();
                if( aDelegationResult){}/* CQT */

                return aDelegationResult;
            };
            if( fIsListening){}/* CQT */
            aPrototype.fIsListening = fIsListening;







            var fStopListener = function() {

                if( !this._v_HttpListenerPlatform) {
                    return true;
                }

                var aDelegationResult = this._v_HttpListenerPlatform.fStopListener();
                if( aDelegationResult){}/* CQT */

                return aDelegationResult;
            };
            if( fStopListener){}/* CQT */
            aPrototype.fStopListener = fStopListener;












            var fAddRoute_Get = function( theRoute, theHandlerFunction) {

                if( !theRoute) {
                    return false;
                }

                if( !theHandlerFunction) {
                    return false;
                }

                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aDelegationResult = this._v_HttpListenerPlatform.fAddRoute_Get( theRoute, theHandlerFunction);
                if( aDelegationResult){}/* CQT */

                return aDelegationResult;
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

                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aDelegationResult = this._v_HttpListenerPlatform.fAddRoute_Post( theRoute, theHandlerFunction);
                if( aDelegationResult){}/* CQT */

                return aDelegationResult;
            };
            if( fAddRoute_Post){}/* CQT */
            aPrototype.fAddRoute_Post = fAddRoute_Post;








            var fRemoveRoute_Get = function( theRoute, theHandlerFunction) {

                if( !theRoute) {
                    return false;
                }

                if( !theHandlerFunction) {
                    return false;
                }

                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aDelegationResult = this._v_HttpListenerPlatform.fRemoveRoute_Get( theRoute, theHandlerFunction);
                if( aDelegationResult){}/* CQT */

                return aDelegationResult;
            };
            if( fRemoveRoute_Get){}/* CQT */
            aPrototype.fRemoveRoute_Get = fRemoveRoute_Get;








            var fRemoveRoute_Post = function( theRoute, theHandlerFunction) {

                if( !theRoute) {
                    return false;
                }

                if( !theHandlerFunction) {
                    return false;
                }

                if( !this._v_HttpListenerPlatform) {
                    return false;
                }

                var aDelegationResult = this._v_HttpListenerPlatform.fRemoveRoute_Post( theRoute, theHandlerFunction);
                if( aDelegationResult){}/* CQT */

                return aDelegationResult;
            };
            if( fRemoveRoute_Post){}/* CQT */
            aPrototype.fRemoveRoute_Post = fRemoveRoute_Post;








            var fReleaseListener = function( ) {

                if( !this._v_HttpListenerPlatform) {
                    return true;
                }


                var aDelegationResult = this._v_HttpListenerPlatform.fReleaseListener( );
                if( !aDelegationResult) {
                    return false;
                }

                this._v_HttpListenerPlatform = null;

                return true;
            };
            if( fReleaseListener){}/* CQT */
            aPrototype.fReleaseListener = fReleaseListener;














            return aPrototype;

        })();









        var HttpListener_Constructor = function( theTitle, thePort, theId) {

            this._v_Prototype = aHttpListener_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Id                = null;
            this._v_CreationTimestamp  =null;

            this._v_Title = null;
            this._v_Port  = null;

            this._v_HttpListenerPlatform = null;

            this._pInit_HttpListener( theTitle, thePort, theId);
        };
        HttpListener_Constructor.prototype = aHttpListener_Prototype;






        var HttpListener_SuperPrototypeConstructor = function() {

            this._v_Prototype = aHttpListener_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Id                = null;
            this._v_CreationTimestamp  =null;

            this._v_Title = null;
            this._v_Port  = null;

            this._v_HttpListenerPlatform = null;
        };
        HttpListener_SuperPrototypeConstructor.prototype = aHttpListener_Prototype;









        var aModule = {
            "HttpListener_Prototype": aHttpListener_Prototype,
            "HttpListener_Constructor": HttpListener_Constructor,
            "HttpListener_SuperPrototypeConstructor": HttpListener_SuperPrototypeConstructor
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

            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');
            var aM_useplatform      = require('../useplatform');

            return aMod_definer(
                aM_exceptiondetails,
                aM_overrider,
                aM_useplatform
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../common-test/exceptiondetails",
            "../../common-test/overrider",
            "../useplatform"
        ], function (
            theM_exceptiondetails,
            theM_overrider,
            theM_useplatform
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_overrider,
                theM_useplatform
            );
        });
    }

}());












