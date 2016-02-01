'use strict';

/*
 result-writer.js
 Created 201408110154
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
    var aMod_definer =function( theM_recorded_test,
                                theM_exceptiondetails,
                                theM_overrider) {


        var ModuleName     = "result-writer";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.WRITERESULT = false;
            theToInit.LOGRESULT   = false;

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
        pgInitFromModuleVariations( ModuleConstants);
        pgInitWithModuleConstants( ModuleConstants);













        var pWriteResultFile = function( theTest) {
            if( !aModule.WRITERESULT) {
                return;
            }

            if( !theTest) {
                return;
            }

            var aCommonObjects = null;
            var aAlready = null;

            var aTestJSON = theTest.fToResultJSON( aCommonObjects, aAlready);
            if( !aTestJSON) {
                return;
            }

            var someEventsJSON = [ ];

            var someRecorders = theTest.fAllRecorders();
            if( someRecorders) {
                var aNumRecorders = someRecorders.length;
                for( var aRecorderIdx=0; aRecorderIdx < aNumRecorders; aRecorderIdx++) {
                    var aRecorder = someRecorders[ aRecorderIdx];
                    var aRecorderJSON = aRecorder.fEventsToResultJSON();
                    if( aRecorderJSON) {
                        someEventsJSON.push( aRecorderJSON);
                    }
                }
            }

            var aResultJSON = {
                "tests": [ aTestJSON],
                "events": someEventsJSON
            };

            var aResultJSONstr = "";
            try {
                aResultJSONstr = JSON.stringify( aResultJSON, null, 1);
            }
            catch( anException) {
                var anExceptionDetails = theM_exceptiondetails.fExceptionDetail( anException);
                console.log( anExceptionDetails)
            }
            if( !aResultJSONstr) {
                console.log( "\nNO RESULT");
                return;
            }

            console.log( "\n");
            console.log( aResultJSONstr);

        };








        var pLogResult = function( theTest) {
            if( !aModule.LOGRESULT) {
                return;
            }

            if( !theTest) {
                return;
            }

            var aCommonObjects = null;
            var aAlready = null;

            var aTestJSON = theTest.fToResultJSON( aCommonObjects, aAlready);
            if( !aTestJSON) {
                return;
            }

            var someEventsJSON = [ ];

            var someRecorders = theTest.fAllRecorders();
            if( someRecorders) {
                var aNumRecorders = someRecorders.length;
                for( var aRecorderIdx=0; aRecorderIdx < aNumRecorders; aRecorderIdx++) {
                    var aRecorder = someRecorders[ aRecorderIdx];
                    var aRecorderJSON = aRecorder.fEventsToResultJSON();
                    if( aRecorderJSON) {
                        someEventsJSON.push( aRecorderJSON);
                    }
                }
            }

            var aResultJSON = {
                "tests": [ aTestJSON],
                "events": someEventsJSON
            };

            var aResultJSONstr = "";
            try {
                aResultJSONstr = JSON.stringify( aResultJSON, null, 1);
            }
            catch( anException) {
                var anExceptionDetails = theM_exceptiondetails.fExceptionDetail( anException);
                console.log( anExceptionDetails)
            }
            if( !aResultJSONstr) {
                console.log( "\nNO RESULT");
                return;
            }

            console.log( "\n");
            console.log( aResultJSONstr);

        };















        var aModule = {
            "pWriteResultFile": pWriteResultFile,
            "pLogResult":       pLogResult
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

            var aM_recorded_test     = require('./recorded-test');
            var aM_exceptiondetails  = require('./exceptiondetails');
            var aM_overrider         = require('./overrider');

            return aMod_definer( aM_recorded_test, aM_exceptiondetails, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./recorded-test",
            "./exceptiondetails",
            "./overrider"
        ], function (
                theM_recorded_test,
                theM_exceptiondetails,
                theM_overrider
            ) {
            return aMod_definer(
                theM_recorded_test,
                theM_exceptiondetails,
                theM_overrider
            );
        });
    }


}());


