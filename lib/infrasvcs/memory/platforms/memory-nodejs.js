'use strict';

/*
 memory-nodejs.js
 Created 201504092112
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

    var aMod_definer = function( ) {

        var ModuleName     = "memory-nodejs";
        var ModulePackages = "infrasvcs/memory/platforms";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.SMALLOC_KMAXLENGH_ONLYAVAILABLEONNODEJS12 = 1000000;
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





        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.ModuleGlobals = ModuleGlobals;






        var fMemoryReport = function() {

            var aProcessMemoryUsage = process.memoryUsage();
            if( !aProcessMemoryUsage) {
                return null;
            }

            var aMemoryReport = {
                "heapTotal": null,
                "heapUsed":  null,
                "rss":       null
            };

            if( aProcessMemoryUsage[ "heapTotal"]) {
                aMemoryReport[ "heapTotal"] = aProcessMemoryUsage[ "heapTotal"];
            }

            if( aProcessMemoryUsage[ "heapUsed"]) {
                aMemoryReport[ "heapUsed"] = aProcessMemoryUsage[ "heapUsed"];
            }

            if( aProcessMemoryUsage[ "rss"]) {
                aMemoryReport[ "rss"] = aProcessMemoryUsage[ "rss"];
            }

            return aMemoryReport;

        };
        if( fMemoryReport){}/* CQT */
        aModule.fMemoryReport = fMemoryReport;







        var fGarbageCollect = function() {

            var aGC = null;
            try {
                aGC = gc;
            }
            catch( anException) {}

            if( !aGC) {
                console.log( "MISSING in command line --expose-gc");
                throw "MISSING in command line --expose-gc";
            }

            if( aGC && ( typeof aGC == "function")) {

                aGC();
            }

            return null;
        };
        if( fGarbageCollect){}/* CQT */
        aModule.fGarbageCollect = fGarbageCollect;






        var fAllocateBuffer = function( theLength) {
            if( !theLength) {
                return null;
            }

            var aMaxBufferLen = aModule.SMALLOC_KMAXLENGH_ONLYAVAILABLEONNODEJS12;
            if( !aMaxBufferLen) {
                aMaxBufferLen = theLength;
            }


            var aBufferList = [ ];

            var aRemainingLen = theLength;

            while( aRemainingLen > 0) {

                var aBufferLen = aRemainingLen;
                if( aBufferLen > aMaxBufferLen) {
                    aBufferLen = aMaxBufferLen;
                }

                var aBuffer = new Buffer( aRemainingLen);
                aBufferList.push( aBuffer);

                aRemainingLen -= aBufferLen;
            }

            if( aBufferList.length == 1) {
                return aBufferList[ 0];
            }

            return aBufferList;

        };
        if( fAllocateBuffer){}/* CQT */
        aModule.fAllocateBuffer = fAllocateBuffer;







        return aModule;
    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            return aMod_definer( );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( function () {
            return aMod_definer();
        });
    }



}());