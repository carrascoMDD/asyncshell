'use strict';

/*
 releasing-constants.js
 Creado 201504162350
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

        var ModuleName     = "releasing-constants";
        var ModulePackages = "common-test/releasing";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.TESTRELEASINGFILESECTION_RELEASING           = "RELEASING";


            theToInit.RELEASINGOPTIONS_TESTRELEASINGALLPARMNAME    = "testReleasingAll";
            theToInit.RELEASINGOPTIONS_TESTRELEASINGFILEPARMNAME   = "testReleasingFile";

            theToInit.TESTRELEASINGFILE_RELEASINGOPTIONS_VALIDKEYS = [
                theToInit.RELEASINGOPTIONS_TESTRELEASINGALLPARMNAME
            ];



            theToInit.TESTRELEASINGFILESECTION_RELEASINGOPTIONS   = "RELEASINGOPTIONS";
            theToInit.TESTRELEASINGFILESECTION_RELEASING          = "RELEASING";



            theToInit.TESTRELEASING_FIELDNAME_TESTNAME = "testName";

            theToInit.TESTRELEASING_FIELDNAME_CHECKTEST          = "checkTest";
            theToInit.TESTRELEASING_FIELDNAME_CHECKCONFIGURATION = "checkConfiguration";
            theToInit.TESTRELEASING_FIELDNAME_CHECKCALLBACK      = "checkCallback";
            theToInit.TESTRELEASING_FIELDNAME_CHECKEVENT         = "checkEvent";

            theToInit.RELEASEPARMS_REGISTERRELEASEDIDENTIFYINGS_FIELDNAME = "REGISTERRELEASEDIDENTIFYINGS";
            theToInit.RELEASEPARMS_LOGRELEASERECORDS_FIELDNAME            = "LOGRELEASERECORDS";

            theToInit.RELEASEDONE_IDENTIFYINGS_FIELDNAME = "IDENTIFYINGS";


            theToInit.RELEASEPARMS_REGISTERRELEASEDCALLBACKIDENTIFYINGS_FIELDNAME = "REGISTERRELEASEDCALLBACKIDENTIFYINGS";
            theToInit.RELEASEPARMS_LOGRELEASECALLBACKRECORDS_FIELDNAME            = "LOGRELEASECALLBACKRECORDS";

            theToInit.RELEASEDONE_CALLBACKIDENTIFYINGS_FIELDNAME                  = "CALLBACKIDENTIFYINGS";


            theToInit.RELEASEPARMS_RELEASEEVENTSSUMMARY_FIELDNAME    = "RELEASEEVENTSSUMMARY";
            theToInit.RELEASEPARMS_LOGRELEASEEVENTRECORDS_FIELDNAME  = "LOGRELEASEEVENTRECORDS";

            theToInit.RELEASEDONE_EVENTSSUMMARY_FIELDNAME   = "EVENTSSUMMARY";
            theToInit.RELEASEDONE_TOTALEVENTS_MAGIC_EVENTTYPE     = "__TOTALEVENTS_MAGIC_EVENTTYPE__";


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
        define(function () {
            return aMod_definer();
        });
    }


}());


