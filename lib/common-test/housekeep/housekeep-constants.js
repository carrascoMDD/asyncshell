'use strict';

/*
 housekeep-constants.js
 Creado 2015040792158
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
    var aMod_definer = function() {

        var ModuleName     = "housekeep-constants";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.KILOBYTES     = 1024;
            theToInit.KILOTHOUSANDS = 1000;

            theToInit.KILOFACTOR    = theToInit.KILOTHOUSANDS;
            theToInit.MEGAFACTOR    = theToInit.KILOFACTOR * theToInit.KILOFACTOR;
            theToInit.GIGAFACTOR    = theToInit.MEGAFACTOR * theToInit.KILOFACTOR;
            theToInit.TERAFACTOR    = theToInit.GIGAFACTOR * theToInit.KILOFACTOR;

            theToInit.MAXHOUSEKEEPINGATTEMPTS = 32;




            theToInit.HOUSEKEEPERKIND_GENERAL  = "GENERAL";
            theToInit.HOUSEKEEPERKIND_MASTER   = "MASTER";
            theToInit.HOUSEKEEPERKIND_SPECIFIC = "SPECIFIC";
            theToInit.HOUSEKEEPERKIND_MEMORY   = "MEMORY";


            theToInit.HOUSEKEEPOPTIONS_TESTHOUSEKEEPINGFILEPARMNAME   = "testHousekeepingFile";


            theToInit.TESTHOUSEKEEPINGFILESECTION_HOUSEKEEPOPTIONS   = "HOUSEKEEPOPTIONS";
            theToInit.TESTHOUSEKEEPINGFILESECTION_RELEASING          = "RELEASING";




            theToInit.TESTHOUSEKEEPINGFILE_HOUSEKEEPOPTIONS_VALIDKEYS = [
                "maxHeapUsed",
                "minHeapAvailable",
                "forceBits",
                "incrementalMode",
                "thrashingHeapAvailable",
                "ignoreThrashingMillis",
                "thrashingMillis"
            ];




            theToInit.HOUSEKEEPINGKIND_GENERAL  = theToInit.HOUSEKEEPERKIND_GENERAL ;
            theToInit.HOUSEKEEPINGKIND_MASTER   = theToInit.HOUSEKEEPERKIND_MASTER  ;
            theToInit.HOUSEKEEPINGKIND_SPECIFIC = theToInit.HOUSEKEEPERKIND_SPECIFIC;
            theToInit.HOUSEKEEPINGKIND_MEMORY   = theToInit.HOUSEKEEPERKIND_MEMORY  ;







            theToInit.HOUSEKEEPINGSTATUS_MAXHOUSEKEEPINGATTEMPTS = "MAXHOUSEKEEPINGATTEMPTS";
            theToInit.HOUSEKEEPINGSTATUS_NOHOUSEKEEPINGDONE      = "NOHOUSEKEEPINGDONE";
            theToInit.HOUSEKEEPINGSTATUS_ATTEMPTGIVEUP           = "ATTEMPTGIVEUP";

            theToInit.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTATTEMPT          = "MISSINGTESTATTEMPT";
            theToInit.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGATTEMPT  = "MISSINGHOUSEKEEPINGATTEMPT";
            theToInit.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGSPECIFIC = "MISSINGHOUSEKEEPINGSPECIFIC";
            theToInit.HOUSEKEEPINGCHECKSTATUS_TESTSHOULDNOTHAVEHOUSEKEEPINGSPECIFIC = "TESTSHOULDNOTHAVEHOUSEKEEPINGSPECIFIC";

            theToInit.HOUSEKEEPINGCHECKSTATUS_SHOULDHAVEEXCESSHOUSEKEEPINGTATTEMPT = "SHOULDHAVEEXCESSHOUSEKEEPINGTATTEMPT";


            theToInit.HOUSEKEEPINGCHECKSTATUS_EXCESSTESTHOUSEKEEPINGATTEMPT      = "EXCESSTESTHOUSEKEEPINGATTEMPT";
            theToInit.HOUSEKEEPINGCHECKSTATUS_EXCESSTESTHOUSEKEEPINGPARAMETER    = "EXCESSTESTHOUSEKEEPINGPARAMETER";

            theToInit.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTHOUSEKEEPINGRECOMMENDATION      = "MISSINGTESTHOUSEKEEPINGRECOMMENDATION";
            theToInit.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGRECOMMENDATION          = "MISSINGHOUSEKEEPINGRECOMMENDATION";
            theToInit.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS                      = "RECOMMENDATIONDIFFERS";
            theToInit.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONPARAMETERDIFFERS             = "RECOMMENDATIONPARAMETERDIFFERS";
            theToInit.HOUSEKEEPINGCHECKSTATUS_EXCESSTESTHOUSEKEEPINGRECOMMENDATION       = "EXCESSTESTHOUSEKEEPINGRECOMMENDATION";
            theToInit.HOUSEKEEPINGCHECKSTATUS_EXCESSTESTHOUSEKEEPINGPARAMETER            = "EXCESSTESTHOUSEKEEPINGPARAMETER";
            theToInit.HOUSEKEEPINGCHECKSTATUS_EXCESSHOUSEKEEPINGRECOMMENDATIONPARAMETER  = "EXCESSHOUSEKEEPINGRECOMMENDATIONPARAMETER";
            theToInit.HOUSEKEEPINGCHECKSTATUS_EXCESSHOUSEKEEPINGRECOMMENDATIONATTEMPT    = "EXCESSHOUSEKEEPINGRECOMMENDATIONATTEMPT";
            theToInit.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONNOTFAILEDASEXPECTED          = "RECOMMENDATIONNOTFAILEDASEXPECTED";

            theToInit.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTHOUSEKEEPINGACTION      = "MISSINGTESTHOUSEKEEPINGACTION";
            theToInit.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGACTION          = "MISSINGHOUSEKEEPINGACTION";
            theToInit.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS                      = "ACTIONDIFFERS";
            theToInit.HOUSEKEEPINGCHECKSTATUS_ACTIONPARAMETERDIFFERS             = "ACTIONPARAMETERDIFFERS";
            theToInit.HOUSEKEEPINGCHECKSTATUS_EXCESSTESTHOUSEKEEPINGACTION       = "EXCESSTESTHOUSEKEEPINGACTION";
            theToInit.HOUSEKEEPINGCHECKSTATUS_EXCESSHOUSEKEEPINGACTIONPARAMETER  = "EXCESSHOUSEKEEPINGACTIONPARAMETER";
            theToInit.HOUSEKEEPINGCHECKSTATUS_EXCESSHOUSEKEEPINGACTIONATTEMPT    = "EXCESSHOUSEKEEPINGACTIONATTEMPT";
            theToInit.HOUSEKEEPINGCHECKSTATUS_ACTIONNOTFAILEDASEXPECTED          = "ACTIONNOTFAILEDASEXPECTED";

            theToInit.HOUSEKEEPINGCHECKSTATUS_ATTEMPTNOTFAILEDASEXPECTED         = "ATTEMPTNOTFAILEDASEXPECTED";


            theToInit.MOMENT_BEFORELOADSPECS = "BEFORELOADSPECS";
            theToInit.MOMENT_AFTERLOADSPECS  = "AFTERLOADSPECS";
            theToInit.MOMENT_BEFORESPEC      = "BEFORESPEC";
            theToInit.MOMENT_AFTERSPEC       = "AFTERSPEC";
            theToInit.MOMENT_HOUSEKEEPING    = "HOUSEKEEPING";



            theToInit.RECOMMENDATIONKIND_PASS   = "PASS";
            theToInit.RECOMMENDATIONKIND_ACTION = "ACTION";
            theToInit.RECOMMENDATIONKIND_GIVEUP = "GIVEUP";


            theToInit.ACTIONKIND_CLEANUP = "CLEANUP";




            theToInit.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN    = "CLEANUP_WHATTOCLEAN";
            theToInit.ACTIONPARAMETER_CLEANUP_HOWMUCHTOCLEAN = "CLEANUP_HOWMUCHTOCLEAN";
            theToInit.ACTIONPARAMETER_CLEANUP_COMPUTATION    = "CLEANUP_COMPUTATION";

            theToInit.ACTIONPARAMETERS_CLEANUP_TOCHECK = [
                theToInit.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN,
                theToInit.ACTIONPARAMETER_CLEANUP_HOWMUCHTOCLEAN
            ];



            theToInit.ACTIONCRITERIA_FIELD_ACTIONKIND                 = "ACTIONCRITERIA_ACTIONKIND";
            theToInit.ACTIONCRITERIA_FIELD_MEMORY_CLEANUP_WHATTOCLEAN = "ACTIONCRITERIA_MEMORY_CLEANUP_WHATTOCLEAN";






            theToInit.WHATTOCLEAN_TESTSPAYLOADS     = "TESTSPAYLOADS";
            theToInit.WHATTOCLEAN_CONFIGSPAYLOADS   = "CONFIGSPAYLOADS";
            theToInit.WHATTOCLEAN_CALLBACKSPAYLOADS = "CALLBACKSPAYLOADS";
            theToInit.WHATTOCLEAN_EVENTSPAYLOADS    = "EVENTSPAYLOADS";
            theToInit.WHATTOCLEAN_TESTS             = "TESTS";
            theToInit.WHATTOCLEAN_CONFIGS           = "CONFIGS";
            theToInit.WHATTOCLEAN_CALLBACKS         = "CALLBACKS";
            theToInit.WHATTOCLEAN_EVENTS            = "EVENTS";

            theToInit.WHATTOCLEAN_ALL = [
                theToInit.WHATTOCLEAN_TESTSPAYLOADS,
                theToInit.WHATTOCLEAN_EVENTSPAYLOADS,
                theToInit.WHATTOCLEAN_TESTS,
                theToInit.WHATTOCLEAN_EVENTS
            ];

            theToInit.WHATTOCLEAN_ALL = [
                theToInit.WHATTOCLEAN_TESTSPAYLOADS,
                theToInit.WHATTOCLEAN_CONFIGSPAYLOADS,
                theToInit.WHATTOCLEAN_CALLBACKSPAYLOADS,
                theToInit.WHATTOCLEAN_EVENTSPAYLOADS,
                theToInit.WHATTOCLEAN_TESTS,
                theToInit.WHATTOCLEAN_CONFIGS,
                theToInit.WHATTOCLEAN_CALLBACKS,
                theToInit.WHATTOCLEAN_EVENTS
            ];





            theToInit.WHATTOCLEAN_IN_TESTSORCONFIGS = [
                theToInit.WHATTOCLEAN_TESTSPAYLOADS,
                theToInit.WHATTOCLEAN_CONFIGSPAYLOADS,
                theToInit.WHATTOCLEAN_TESTS,
                theToInit.WHATTOCLEAN_CONFIGS
            ];

            theToInit.WHATTOCLEAN_IN_TESTS = [
                theToInit.WHATTOCLEAN_TESTSPAYLOADS,
                theToInit.WHATTOCLEAN_TESTS
            ];

            theToInit.WHATTOCLEAN_IN_CONFIGS = [
                theToInit.WHATTOCLEAN_CONFIGSPAYLOADS,
                theToInit.WHATTOCLEAN_CONFIGS
            ];

            theToInit.WHATTOCLEAN_IN_CALLBACKS = [
                theToInit.WHATTOCLEAN_CALLBACKSPAYLOADS,
                theToInit.WHATTOCLEAN_CALLBACKS
            ];


            theToInit.WHATTOCLEAN_IN_EVENTS = [
                theToInit.WHATTOCLEAN_EVENTSPAYLOADS,
                theToInit.WHATTOCLEAN_EVENTS
            ];


            theToInit.WHATTOCLEAN_IN_FIRST = [
                theToInit.WHATTOCLEAN_CALLBACKSPAYLOADS,
                theToInit.WHATTOCLEAN_EVENTSPAYLOADS,
                theToInit.WHATTOCLEAN_CALLBACKS,
                theToInit.WHATTOCLEAN_EVENTS
            ];


            theToInit.WHATTOCLEAN_IN_CALLBACKS = [
                theToInit.WHATTOCLEAN_CALLBACKSPAYLOADS,
                theToInit.WHATTOCLEAN_CALLBACKS
            ];

            theToInit.WHATTOCLEAN_IN_EVENTS = [
                theToInit.WHATTOCLEAN_EVENTSPAYLOADS,
                theToInit.WHATTOCLEAN_EVENTS
            ];

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

            return aMod_definer();
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../releasing/releasing-constants",
            "../sentinels"
        ], function () {
            return aMod_definer();
        });
    }


}());


