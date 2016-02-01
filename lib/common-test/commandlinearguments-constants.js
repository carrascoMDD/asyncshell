'use strict';

/*
 commandlinearguments-constants.js
 Created 201504201231
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


(function() {

    var aMod_definer = function() {


        var ModuleName     = "commandlinearguments-constants";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.PARMKEYS_OVERRIDERARGUMENTSPREFIX = "OV";

            theToInit.PARMKEYS_OVERRIDERARGUMENTSVARIATIONPATHSEPARATOR = "_-_";

            theToInit.PARMKEYS_OVERRIDERARGUMENTSVARIATIONPATHSEPARATOR_REGEXP = "\_\-\_";


            theToInit.PARMKEYS_LAUNCHARGUMENTS = { };

            theToInit.PARMKEYS_LAUNCHARGUMENTS.SAMPLEARGUMENTS_SHORT = '"@testspath/springnut/edivalidaciones-springnut/launchables.json"  -r -f -v -d -n2';
            theToInit.PARMKEYS_LAUNCHARGUMENTS.SAMPLEARGUMENTS_LONG  = '"@testspath/springnut/edivalidaciones-springnut/launchables.json" --random --flat --verboseplan --dryrun --repeats=2';

            theToInit.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_RANDOM       = [ "r", "random"];
            theToInit.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_FLAT         = [ "f", "flat"];
            theToInit.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_VERBOSEPLAN  = [ "v", "verboseplan"];
            theToInit.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_DRYRUN       = [ "d", "dryrun"];
            theToInit.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_NUMREPEATS   = [ "n", "repeats"];



            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS = { };

            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.SAMPLEARGUMENTS_SHORT_ONLYSYNTHETIC = '"@testspath/springnut/edivalidaciones-springnut/launchables.json"  -r -f -v -d -n2';
            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.SAMPLEARGUMENTS_LONG_ONLYSYNTHETIC  = '"@testspath/springnut/edivalidaciones-springnut/launchables.json" --random --flat --verboseplan --dryrun --repeats=2';

            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.SAMPLEARGUMENTS_SHORT = '"@testspath/springnut/edivalidaciones-springnut/launchables.json"  -u128 -a64 -t"@testspath/springnut/edivalidaciones-springnut/testhousekeeping.json" -b64';
            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.SAMPLEARGUMENTS_LONG  = '"@testspath/springnut/edivalidaciones-springnut/launchables.json" --maxHeapUsed=128 --minHeapAvailable=a64 --testHousekeepingFile="@testspath/springnut/edivalidaciones-springnut/testhousekeeping.json" --forceBits=64'; /* Megabytes */

            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MAXHEAPUSED            = [ "u", "maxHeapUsed"];
            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MINHEAPAVAILABLE       = [ "a", "minHeapAvailable"];
            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_TESTHOUSEKEEPINGFILE   = [ "t", "testHousekeepingFile"];
            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_INCREMENTALMODE        = [ "m", "incrementalMode"];
            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_THRASHINGHEAPAVAILABLE = [ "h", "thrashingHeapAvailable"];
            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_IGNORETHRASHINGMILLIS  = [ "i", "ignoreThrashingMillis"];
            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_HOUSEKEEPFORCEBITS     = [ "b", "forceBits"];


            theToInit.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_THRASHINGMILLIS_BYWHATTOCLEANPREFIX = "TM";



            theToInit.PARMKEYS_RELEASINGARGUMENTS = { };

            theToInit.PARMKEYS_RELEASINGARGUMENTS.SAMPLEARGUMENTS_SHORT = '"@testspath/springnut/edivalidaciones-springnut/launchables.json"  -l'; /* Megabytes */
            theToInit.PARMKEYS_RELEASINGARGUMENTS.SAMPLEARGUMENTS_SHORT2 = '"@testspath/springnut/edivalidaciones-springnut/launchables.json"  --testReleasingAll'; /* Megabytes */
            theToInit.PARMKEYS_RELEASINGARGUMENTS.SAMPLEARGUMENTS_LONG  = '"@testspath/springnut/edivalidaciones-springnut/launchables.json" -z"@testspath/releasing/testreleasingfile-01-releasing-single.json"';
            theToInit.PARMKEYS_RELEASINGARGUMENTS.SAMPLEARGUMENTS_LONG2  = '"@testspath/springnut/edivalidaciones-springnut/launchables.json" --testReleasingFile="@testspath/releasing/testreleasingfile-01-releasing-single.json"';

            theToInit.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGALL    = [ "l", "testReleasingAll"];
            theToInit.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGFILE   = [ "z", "testReleasingFile"];



            theToInit.PARMKEYS_CLEANUPARGUMENTS = { };

            theToInit.PARMKEYS_CLEANUPARGUMENTS.SAMPLEARGUMENTS_SHORT = '"@testspath/springnut/edivalidaciones-springnut/launchables.json" --testCleanUpAll';
            theToInit.PARMKEYS_CLEANUPARGUMENTS.SAMPLEARGUMENTS_LONG  = '"@testspath/springnut/edivalidaciones-springnut/launchables.json" --testReleasingFile="@testspath/cleanup/testcleanupfile-01-cleanup-single.json"';

            theToInit.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPALL    = [ "c", "testCleanUpAll"];
            theToInit.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPFILE   = [ "k", "testCleanUpFile"];




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





        var aModule = {
            "ModuleConstants": ModuleConstants
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

            return aMod_definer( );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( function ( ) {
            return aMod_definer( );
        });
    }


}());

