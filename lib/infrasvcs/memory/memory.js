'use strict';

/*
 memory.js
 Created 201504092108
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

        var ModuleName     = "memory";
        var ModulePackages = "infrasvcs/memory";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








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
        ModuleGlobals.gMemory_Platform_Nodejs = null;
        ModuleGlobals.gMemory_Platform_Nodejs = null;
        ModuleGlobals.gMemory_Platform_Browser = null;





        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.ModuleGlobals = ModuleGlobals;







        var fMemory_PlatformModule = function() {

            if( !theM_useplatform.USEPLATFORM) {
                return null;
            }

            if( theM_useplatform.USEPLATFORMS.indexOf( theM_useplatform.USEPLATFORM) < 0) {
                return null;
            }

            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_NODEJS) {
                return fMemory_PlatformModule_Nodejs();
            }


            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_BROWSER) {
                return fMemory_PlatformModule_Browser();
            }

            return null;
        };
        if( fMemory_PlatformModule){}/* CQT */
        aModule.fMemory_PlatformModule = fMemory_PlatformModule;








        var fMemory_PlatformModule_Nodejs = function() {

            var aPlatformModule = aModule.ModuleGlobals.gMemory_Platform_Nodejs;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/memory-nodejs");
            }
            catch( anException) {
                console.log( anException);
                throw anException;
            }

            aModule.ModuleGlobals.gMemory_Platform_Nodejs = aPlatformModule;

            return aModule.ModuleGlobals.gMemory_Platform_Nodejs;
        };
        if( fMemory_PlatformModule_Nodejs){}/* CQT */
        aModule.fMemory_PlatformModule_Nodejs = fMemory_PlatformModule_Nodejs;











        var fMemory_PlatformModule_Browser = function() {

            var aPlatformModule = aModule.ModuleGlobals.gMemory_Platform_Browser;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/memory-browser");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gMemory_Platform_Browser = aPlatformModule;

            return aModule.ModuleGlobals.gMemory_Platform_Browser;
        };
        if( fMemory_PlatformModule_Browser){}/* CQT */
        aModule.fMemory_PlatformModule_Browser = fMemory_PlatformModule_Browser;













        var fMemoryReport = function() {

            var aMemoryPlatformModule = fMemory_PlatformModule();
            if( !aMemoryPlatformModule) {
                throw Error( "p_Exit fMemoryReport !fMemory_PlatformModule")
            }

            var aMemoryReportFunction = aMemoryPlatformModule.fMemoryReport;
            if( !aMemoryReportFunction) {
                throw Error( "p_Exit fMemoryReport !fMemory_PlatformModule.fMemoryReport")
            }


            if( !( typeof aMemoryReportFunction == "function")) {
                throw Error( "p_Exit fMemoryReport !( typeof fMemory_PlatformModule.fMemoryReport == 'function')")
            }

            return aMemoryReportFunction();

        };
        if( fMemoryReport){}/* CQT */
        aModule.fMemoryReport = fMemoryReport;












        var fGarbageCollect = function() {

            var aMemoryPlatformModule = fMemory_PlatformModule();
            if( !aMemoryPlatformModule) {
                throw Error( "p_Exit fGarbageCollect !fMemory_PlatformModule")
            }

            var aMemoryReportFunction = aMemoryPlatformModule.fGarbageCollect;
            if( !aMemoryReportFunction) {
                throw Error( "p_Exit fGarbageCollect !fMemory_PlatformModule.fGarbageCollect")
            }


            if( !( typeof aMemoryReportFunction == "function")) {
                throw Error( "p_Exit fGarbageCollect !( typeof fMemory_PlatformModule.fGarbageCollect == 'function')")
            }

            return aMemoryReportFunction();

        };
        if( fGarbageCollect){}/* CQT */
        aModule.fGarbageCollect = fGarbageCollect;









        var fAllocateBuffer = function( theBufferSize) {
            
            if( !theBufferSize) {
                return null;
            }

            var aMemoryPlatformModule = fMemory_PlatformModule();
            if( !aMemoryPlatformModule) {
                throw Error( "p_Exit fAllocateBuffer !fMemory_PlatformModule")
            }

            var aAllocateBufferFunction = aMemoryPlatformModule.fAllocateBuffer;
            if( !aAllocateBufferFunction) {
                throw Error( "p_Exit fAllocateBuffer !fMemory_PlatformModule.fAllocateBuffer")
            }


            if( !( typeof aAllocateBufferFunction == "function")) {
                throw Error( "p_Exit fAllocateBuffer !( typeof fMemory_PlatformModule.fAllocateBuffer == 'function')")
            }

            return aAllocateBufferFunction( theBufferSize);

        };
        if( fAllocateBuffer){}/* CQT */
        aModule.fAllocateBuffer = fAllocateBuffer;












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