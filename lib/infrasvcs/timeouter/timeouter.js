'use strict';

/*
 timeouter.js
 Created 201409240207
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

    var aMod_definer = function( theM_useplatform) {

        var ModuleName     = "timeouter";
        var ModulePackages = "infrasvcs/timeouter";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }
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




        var ModuleGlobals = { };
        ModuleGlobals.gTimeouter_Platform_Nodejs = null;
        ModuleGlobals.gTimeouter_Platform_Browser = null;





        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.ModuleGlobals = ModuleGlobals;







        var fTimeouter_PlatformModule = function() {

            if( !theM_useplatform.USEPLATFORM) {
                return null;
            }

            if( theM_useplatform.USEPLATFORMS.indexOf( theM_useplatform.USEPLATFORM) < 0) {
                return null;
            }

            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_NODEJS) {
                return fTimeouter_PlatformModule_Nodejs();
            }


            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_BROWSER) {
                return fTimeouter_PlatformModule_Browser();
            }

            return null;
        };
        if( fTimeouter_PlatformModule){}/* CQT */
        aModule.fTimeouter_PlatformModule = fTimeouter_PlatformModule;






        var fTimeouter_PlatformModule_Nodejs = function() {

            var aPlatformModule = aModule.ModuleGlobals.gTimeouter_Platform_Nodejs;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/timeouter-nodejs");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gTimeouter_Platform_Nodejs = aPlatformModule;

            return aModule.ModuleGlobals.gTimeouter_Platform_Nodejs;
        };
        if( fTimeouter_PlatformModule_Nodejs){}/* CQT */
        aModule.fTimeouter_PlatformModule_Nodejs = fTimeouter_PlatformModule_Nodejs;






        var fTimeouter_PlatformModule_Browser = function() {

            var aPlatformModule = aModule.ModuleGlobals.gTimeouter_Platform_Browser;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/timeouter-browser");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gTimeouter_Platform_Browser = aPlatformModule;

            return aModule.ModuleGlobals.gTimeouter_Platform_Browser;
        };
        if( fTimeouter_PlatformModule_Browser){}/* CQT */
        aModule.fTimeouter_PlatformModule_Browser = fTimeouter_PlatformModule_Browser;









        var p_Timeout = function( theFunction, theMillis) {
            if( !theFunction) {
                return;
            }


            var aTimeouterPlatformModule = fTimeouter_PlatformModule();
            if( !aTimeouterPlatformModule) {
                throw Error( "pNextTick !fTimeouter_PlatformModule")
            }

            var aTimeoutFunction = aTimeouterPlatformModule.p_Timeout;
            if( !aTimeoutFunction) {
                throw Error( "p_Timeout !fTimeouter_PlatformModule.p_Timeout")
            }


            if( !( typeof aTimeoutFunction == "function")) {
                throw Error( "p_Timeout !( typeof fTimeouter_PlatformModule.p_Timeout == 'function')")
            }

            aTimeoutFunction( theFunction, theMillis);

        };
        if( p_Timeout){}/* CQT */
        aModule.p_Timeout = p_Timeout;









        var p_ClearTimeout = function( theTimeoutHandle) {

            if( ( theTimeoutHandle == null) || ( typeof theTimeoutHandle == "undefined")) {
                return;
            }

            var aTimeouterPlatformModule = fTimeouter_PlatformModule();
            if( !aTimeouterPlatformModule) {
                throw Error( "pNextTick !fTimeouter_PlatformModule")
            }

            var aClearTimeoutFunction = aTimeouterPlatformModule.p_ClearTimeout;
            if( !aClearTimeoutFunction) {
                throw Error( "p_Timeout !fTimeouter_PlatformModule.p_ClearTimeout")
            }


            if( !( typeof aClearTimeoutFunction == "function")) {
                throw Error( "p_Timeout !( typeof fTimeouter_PlatformModule.p_ClearTimeout == 'function')")
            }

            aClearTimeoutFunction( theTimeoutHandle);

        };
        if( p_ClearTimeout){}/* CQT */
        aModule.p_ClearTimeout = p_ClearTimeout;





        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_useplatform    = require('../useplatform');

            return aMod_definer( aM_useplatform);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "../useplatform"], function ( theM_useplatform) {
            return aMod_definer( theM_useplatform);
        });
    }

}());