'use strict';

/*
 commandline.js
 Creado 201409220221
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

        var ModuleName     = "commandline";
        var ModulePackages = "infrasvcs/commandline";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }
            theToInit.ARGUMENTSRESULTKEY_PARAMETERS = "_";

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
        ModuleGlobals.gCommandLine_Platform_Nodejs = null;
        ModuleGlobals.gCommandLine_Platform_Nodejs_minimist = null;
        ModuleGlobals.gCommandLine_Platform_Browser = null;





        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.ModuleGlobals = ModuleGlobals;







        var fCommandLine_PlatformModule = function() {

            if( !theM_useplatform.USEPLATFORM) {
                return null;
            }

            if( theM_useplatform.USEPLATFORMS.indexOf( theM_useplatform.USEPLATFORM) < 0) {
                return null;
            }

            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_NODEJS) {
                return fCommandLine_PlatformModule_Nodejs_minimist();
            }


            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_BROWSER) {
                return fCommandLine_PlatformModule_Browser();
            }

            return null;
        };
        if( fCommandLine_PlatformModule){}/* CQT */
        aModule.fCommandLine_PlatformModule = fCommandLine_PlatformModule;








        var fCommandLine_PlatformModule_Nodejs = function() {

            var aPlatformModule = aModule.ModuleGlobals.gCommandLine_Platform_Nodejs;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/commandline-nodejs");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gCommandLine_Platform_Nodejs = aPlatformModule;

            return aModule.ModuleGlobals.gCommandLine_Platform_Nodejs;
        };
        if( fCommandLine_PlatformModule_Nodejs){}/* CQT */
        aModule.fCommandLine_PlatformModule_Nodejs = fCommandLine_PlatformModule_Nodejs;








        var fCommandLine_PlatformModule_Nodejs_minimist = function() {

            var aPlatformModule = aModule.ModuleGlobals.gCommandLine_Platform_Nodejs_minimist;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/commandline-nodejs-minimist");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gCommandLine_Platform_Nodejs_minimist = aPlatformModule;

            return aModule.ModuleGlobals.gCommandLine_Platform_Nodejs_minimist;
        };
        if( fCommandLine_PlatformModule_Nodejs_minimist){}/* CQT */
        aModule.fCommandLine_PlatformModule_Nodejs_minimist = fCommandLine_PlatformModule_Nodejs_minimist;








        var fCommandLine_PlatformModule_Browser = function() {

            var aPlatformModule = aModule.ModuleGlobals.gCommandLine_Platform_Browser;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/commandline-browser");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gCommandLine_Platform_Browser = aPlatformModule;

            return aModule.ModuleGlobals.gCommandLine_Platform_Browser;
        };
        if( fCommandLine_PlatformModule_Browser){}/* CQT */
        aModule.fCommandLine_PlatformModule_Browser = fCommandLine_PlatformModule_Browser;
















        var fCmdLineParameters = function() {

            var aCommandLinePlatformModule = fCommandLine_PlatformModule();
            if( !aCommandLinePlatformModule) {
                throw Error( "p_Exit !fCommandLine_PlatformModule")
            }

            var aCmdLineParametersFunction = aCommandLinePlatformModule.fCmdLineParameters;
            if( !aCmdLineParametersFunction) {
                throw Error( "p_Exit !fCommandLine_PlatformModule.fCmdLineParameters")
            }


            if( !( typeof aCmdLineParametersFunction == "function")) {
                throw Error( "p_Exit !( typeof fCommandLine_PlatformModule.fCmdLineParameters == 'function')")
            }

            return aCmdLineParametersFunction();

        };
        if( fCmdLineParameters){}/* CQT */
        aModule.fCmdLineParameters = fCmdLineParameters;











        var fCmdLineArguments = function() {

            var aCommandLinePlatformModule = fCommandLine_PlatformModule();
            if( !aCommandLinePlatformModule) {
                throw Error( "p_Exit !fCommandLine_PlatformModule")
            }

            var aCmdLineParametersFunction = aCommandLinePlatformModule.fCmdLineArguments;
            if( !aCmdLineParametersFunction) {
                throw Error( "p_Exit !fCommandLine_PlatformModule.fCmdLineArguments")
            }


            if( !( typeof aCmdLineParametersFunction == "function")) {
                throw Error( "p_Exit !( typeof fCommandLine_PlatformModule.fCmdLineArguments == 'function')")
            }

            return aCmdLineParametersFunction();

        };
        if( fCmdLineArguments){}/* CQT */
        aModule.fCmdLineArguments = fCmdLineArguments;







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