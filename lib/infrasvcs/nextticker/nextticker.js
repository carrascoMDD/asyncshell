'use strict';

/*
 nextticker.js
 Creado 201409212053
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

    var aMod_definer = function( theM_useplatform) {

        var ModuleName     = "nextticker";
        var ModulePackages = "infrasvcs/nextticker";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









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
        pgInitWithModuleConstants( ModuleConstants);








        var ModuleGlobals = { };
        ModuleGlobals.gNextTicker_Platform_Nodejs = null;
        ModuleGlobals.gNextTicker_Platform_Browser = null;





        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.ModuleGlobals = ModuleGlobals;







        var fNextTicker_PlatformModule = function() {

            if( !theM_useplatform.USEPLATFORM) {
                return null;
            }

            if( theM_useplatform.USEPLATFORMS.indexOf( theM_useplatform.USEPLATFORM) < 0) {
                return null;
            }

            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_NODEJS) {
                return fNextTicker_PlatformModule_Nodejs();
            }


            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_BROWSER) {
                return fNextTicker_PlatformModule_Browser();
            }

            return null;
        };
        if( fNextTicker_PlatformModule){}/* CQT */
        aModule.fNextTicker_PlatformModule = fNextTicker_PlatformModule;






        var fNextTicker_PlatformModule_Nodejs = function() {

            var aPlatformModule = aModule.ModuleGlobals.gNextTicker_Platform_Nodejs;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/nextticker-nodejs");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gNextTicker_Platform_Nodejs = aPlatformModule;

            return aModule.ModuleGlobals.gNextTicker_Platform_Nodejs;
        };
        if( fNextTicker_PlatformModule_Nodejs){}/* CQT */
        aModule.fNextTicker_PlatformModule_Nodejs = fNextTicker_PlatformModule_Nodejs;






        var fNextTicker_PlatformModule_Browser = function() {

            var aPlatformModule = aModule.ModuleGlobals.gNextTicker_Platform_Browser;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/nextticker-browser");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gNextTicker_Platform_Browser = aPlatformModule;

            return aModule.ModuleGlobals.gNextTicker_Platform_Browser;
        };
        if( fNextTicker_PlatformModule_Browser){}/* CQT */
        aModule.fNextTicker_PlatformModule_Browser = fNextTicker_PlatformModule_Browser;









        var pNextTick = function( theFunction) {
            if( !theFunction) {
                return;
            }


            var aNextTickerPlatformModule = fNextTicker_PlatformModule();
            if( !aNextTickerPlatformModule) {
                throw Error( "pNextTick !fNextTicker_PlatformModule")
            }

            var aNextTickFunction = aNextTickerPlatformModule.pNextTick;
            if( !aNextTickFunction) {
                throw Error( "pNextTick !fNextTicker_PlatformModule.pNextTick")
            }


            if( !( typeof aNextTickFunction == "function")) {
                throw Error( "pNextTick !( typeof fNextTicker_PlatformModule.pNextTick == 'function')")
            }

            aNextTickFunction( theFunction);

        };
        if( pNextTick){}/* CQT */
        aModule.pNextTick = pNextTick;





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