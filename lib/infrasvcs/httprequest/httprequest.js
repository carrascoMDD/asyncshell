'use strict';

/*
 httprequest.js
 Creado 201409220022
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

    var aMod_definer = function( theM_useplatform,
                                 theM_overrider) {


        var ModuleName     = "httprequest";
        var ModulePackages = "infrasvcs/httprequest";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var USEPLATFORM_HTTPREQUEST_BROWSER_JQUERY = "JQUERY";


        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }
            theToInit.USEPLATFORM_HTTPREQUEST  = USEPLATFORM_HTTPREQUEST_BROWSER_JQUERY;

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



            theToInit.USEPLATFORM_HTTPREQUEST_BROWSER_JQUERY  = USEPLATFORM_HTTPREQUEST_BROWSER_JQUERY;

            theToInit.USEPLATFORMS_HTTPREQUEST = [
                theToInit.USEPLATFORM_HTTPREQUEST_BROWSER_JQUERY
            ];

            theToInit.USEPLATFORM_HTTPREQUEST_BROWSER_DEFAULT = theToInit.USEPLATFORM_HTTPREQUEST_BROWSER_JQUERY;

            if( !theToInit.USEPLATFORM_HTTPREQUEST || ( theToInit.USEPLATFORMS_HTTPREQUEST.indexOf( theToInit.USEPLATFORM_HTTPREQUEST) < 0)) {
                theToInit.USEPLATFORM_HTTPREQUEST  = theToInit.USEPLATFORM_HTTPREQUEST_BROWSER_DEFAULT;
            }

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







        var ModuleGlobals = { };
        ModuleGlobals.gHttpRequest_Platform_Nodejs_request = null;
        ModuleGlobals.gHttpRequest_Platform_Browser_jquery = null;





        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.ModuleGlobals = ModuleGlobals;








        var fHttpRequest_PlatformModule = function() {

            if( !theM_useplatform.USEPLATFORM) {
                return null;
            }

            if( theM_useplatform.USEPLATFORMS.indexOf( theM_useplatform.USEPLATFORM) < 0) {
                return null;
            }

            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_NODEJS) {
                return aModule.fHttpRequest_PlatformModule_Nodejs_request();
            }

            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_BROWSER) {
                return aModule.fHttpRequest_PlatformModule_Browser();
            }

            return null;
        };
        if( fHttpRequest_PlatformModule){}/* CQT */
        aModule.fHttpRequest_PlatformModule = fHttpRequest_PlatformModule;







        var fHttpRequest_PlatformModule_Nodejs_request = function() {

            var aPlatformModule = aModule.ModuleGlobals.gHttpRequest_Platform_Nodejs_request;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/httprequest-nodejs-request");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gHttpRequest_Platform_Nodejs_request = aPlatformModule;

            return aModule.ModuleGlobals.gHttpRequest_Platform_Nodejs_request;
        };
        if( fHttpRequest_PlatformModule_Nodejs_request){}/* CQT */
        aModule.fHttpRequest_PlatformModule_Nodejs_request = fHttpRequest_PlatformModule_Nodejs_request;








        var fHttpRequest_PlatformModule_Browser = function() {

            if( !aModule.USEPLATFORM_HTTPREQUEST) {
                return null;
            }

            if( aModule.USEPLATFORMS_HTTPREQUEST.indexOf( aModule.USEPLATFORM_HTTPREQUEST) < 0) {
                return null;
            }

            if( aModule.USEPLATFORM_HTTPREQUEST == aModule.USEPLATFORM_HTTPREQUEST_BROWSER_JQUERY) {
                return aModule.fHttpRequest_PlatformModule_Browser_jquery();
            }

            return null;
        };
        if( fHttpRequest_PlatformModule_Browser){}/* CQT */
        aModule.fHttpRequest_PlatformModule_Browser = fHttpRequest_PlatformModule_Browser;







        var fHttpRequest_PlatformModule_Browser_jquery = function() {

            var aPlatformModule = aModule.ModuleGlobals.gHttpRequest_Platform_Browser_jquery;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/httprequest-browser-jquery");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gHttpRequest_Platform_Browser_jquery = aPlatformModule;

            return aModule.ModuleGlobals.gHttpRequest_Platform_Browser_jquery;
        };
        if( fHttpRequest_PlatformModule_Browser_jquery){}/* CQT */
        aModule.fHttpRequest_PlatformModule_Browser_jquery = fHttpRequest_PlatformModule_Browser_jquery;







        var pHttpRequest = function( theOptions, theCallback) {

            if( !theOptions) {
                return;
            }

            if( !theCallback || !( typeof theCallback == "function")) {
                return;
            }


            var aHttpRequestPlatformModule = aModule.fHttpRequest_PlatformModule();
            if( !aHttpRequestPlatformModule) {
                throw Error( "pHttpRequest_get !fHttpRequest_PlatformModule")
            }

            var aHttpRequestFunction = aHttpRequestPlatformModule.pHttpRequest;
            if( !aHttpRequestFunction) {
                throw Error( "pHttpRequest !fHttpRequest_PlatformModule.pHttpRequest")
            }


            if( !( typeof aHttpRequestFunction == "function")) {
                throw Error( "pHttpRequest_get !( typeof fHttpRequest_PlatformModule.pHttpRequest == 'function')")
            }

            return aHttpRequestFunction( theOptions, theCallback);

        };
        if( pHttpRequest){}/* CQT */
        aModule.pHttpRequest = pHttpRequest;







        var pHttpRequest_get = function( theURL, theRequestData, theCallback) {

            if( !theURL) {
                return;
            }

            if( !theCallback || !( typeof theCallback == "function")) {
                return;
            }


            var aHttpRequestPlatformModule = aModule.fHttpRequest_PlatformModule();
            if( !aHttpRequestPlatformModule) {
                throw Error( "pHttpRequest_get !fHttpRequest_PlatformModule")
            }

            var aHttpRequestFunction = aHttpRequestPlatformModule.pHttpRequest_get;
            if( !aHttpRequestFunction) {
                throw Error( "pHttpRequest_get !fHttpRequest_PlatformModule.pHttpRequest_get")
            }


            if( !( typeof aHttpRequestFunction == "function")) {
                throw Error( "pHttpRequest_get !( typeof fHttpRequest_PlatformModule.pHttpRequest_get == 'function')")
            }

            return aHttpRequestFunction( theURL, theRequestData, theCallback);

        };
        if( pHttpRequest_get){}/* CQT */
        aModule.pHttpRequest_get = pHttpRequest_get;






        var pHttpRequest_post = function( theURL, theRequestData, theCallback) {

            if( !theURL) {
                return;
            }

            if( !theCallback || !( typeof theCallback == "function")) {
                return;
            }


            var aHttpRequestPlatformModule = aModule.fHttpRequest_PlatformModule();
            if( !aHttpRequestPlatformModule) {
                throw Error( "pHttpRequest_post !fHttpRequest_PlatformModule")
            }

            var aHttpRequestFunction = aHttpRequestPlatformModule.pHttpRequest_post;
            if( !aHttpRequestFunction) {
                throw Error( "pHttpRequest_post !fHttpRequest_PlatformModule.pHttpRequest_post")
            }


            if( !( typeof aHttpRequestFunction == "function")) {
                throw Error( "pHttpRequest_post !( typeof fHttpRequest_PlatformModule.pHttpRequest_post == 'function')")
            }

            return aHttpRequestFunction( theURL, theRequestData, theCallback);

        };
        if( pHttpRequest_post){}/* CQT */
        aModule.pHttpRequest_post = pHttpRequest_post;





        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_useplatform    = require('../useplatform');
            var aM_overrider       = require('../../common-test/overrider');

            return aMod_definer( aM_useplatform, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../useplatform",
            ""
        ], function (
                theM_useplatform,
                theM_overrider
            ) {
            return aMod_definer(
                theM_useplatform,
                theM_overrider
            );
        });
    }

}());