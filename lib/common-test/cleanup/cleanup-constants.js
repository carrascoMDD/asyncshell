'use strict';

/*
 cleanup-constants.js
 Creado 201504201337
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
    var aMod_definer = function( theM_sentinels) {

        var ModuleName     = "cleanup-constants";
        var ModulePackages = "common-test/cleanup";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.TESTCLEANUPFILESECTION_CLEANUP           = "CLEANUP";


            theToInit.CLEANUPOPTIONS_TESTCLEANUPALLPARMNAME    = "testCleanUpAll";
            theToInit.CLEANUPOPTIONS_TESTCLEANUPFILEPARMNAME   = "testCleanUpFile";

            theToInit.TESTCLEANUPFILE_CLEANUPOPTIONS_VALIDKEYS = [
                theToInit.CLEANUPOPTIONS_TESTCLEANUPALLPARMNAME
            ];



            theToInit.TESTCLEANUPFILESECTION_CLEANUPOPTIONS   = "CLEANUPOPTIONS";
            theToInit.TESTCLEANUPFILESECTION_CLEANUP          = "CLEANUP";



            theToInit.TESTCLEANUP_FIELDNAME_TESTNAME    = "testName";

            theToInit.TESTCLEANUP_FIELDNAME_WHATTOCLEAN = "whatToClean";



            theToInit.CLEANUPPARMS_REGISTERCLEANEDUPIDENTIFYINGS_FIELDNAME = "REGISTERCLEANEDUPIDENTIFYINGS";
            theToInit.CLEANUPPARMS_LOGCLEANUPRECORDS_FIELDNAME            = "LOGCLEANUPRECORDS";

            theToInit.CLEANEDUPONE_IDENTIFYINGS_FIELDNAME = "IDENTIFYINGS";


            theToInit.CLEANUPPARMS_REGISTERCLEANEDUPCALLBACKIDENTIFYINGS_FIELDNAME = "REGISTERCLEANEDUPCALLBACKIDENTIFYINGS";
            theToInit.CLEANUPPARMS_LOGCLEANUPCALLBACKRECORDS_FIELDNAME             = "LOGCLEANUPCALLBACKRECORDS";

            theToInit.CLEANEDUPONE_CALLBACKIDENTIFYINGS_FIELDNAME                  = "CALLBACKIDENTIFYINGS";


            theToInit.CLEANUPPARMS_CLEANUPEVENTSSUMMARY_FIELDNAME    = "CLEANUPEVENTSSUMMARY";
            theToInit.CLEANUPPARMS_LOGCLEANUPEVENTRECORDS_FIELDNAME  = "LOGCLEANUPEVENTRECORDS";

            theToInit.CLEANEDUPONE_EVENTSSUMMARY_FIELDNAME         = "EVENTSSUMMARY";
            theToInit.CLEANEDUPONE_TOTALEVENTS_MAGIC_EVENTTYPE     = "__TOTALEVENTS_MAGIC_EVENTTYPE__";


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

            var aM_sentinels  = require('../sentinels');

            return aMod_definer(
                aM_sentinels
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../sentinels"
        ], function (
            theM_sentinels
        ) {
            return aMod_definer(
                theM_sentinels
            );
        });
    }


}());


