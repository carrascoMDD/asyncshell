'use strict';

/*
 launchbyname.js
 Creado 201409101529
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

var aM_LogModuleLoads = require( "./logmoduleloads");
if( aM_LogModuleLoads){}/* CQT */

(function() {

    var aMod_definer = function( theM_firsttorun,
                                 theM_launcherone,
                                 theM_launcharguments,
                                 theM_housekeeparguments,
                                 theM_releasingarguments,
                                 theM_cleanuparguments) {

        var ModuleName     = "launchbyname";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}



        var LOGARGUMENTS = true;


        if( LOGARGUMENTS) {


            var anAllOptionsStr = "";

            var aLaunchOptionsStr = theM_launcharguments[ "optionsStr"];
            if( aLaunchOptionsStr) {
                if( anAllOptionsStr) {
                    anAllOptionsStr += " ";
                }
                anAllOptionsStr += aLaunchOptionsStr;
            }

            var aHousekeepOptionsStr = theM_housekeeparguments[ "optionsStr"];
            if( aHousekeepOptionsStr) {
                if( anAllOptionsStr) {
                    anAllOptionsStr += " ";
                }
                anAllOptionsStr += aHousekeepOptionsStr;
            }

            var aReleasingOptionsStr = theM_releasingarguments[ "optionsStr"];
            if( aReleasingOptionsStr) {
                if( anAllOptionsStr) {
                    anAllOptionsStr += " ";
                }
                anAllOptionsStr += aReleasingOptionsStr;
            }

            var aCleanUpOptionsStr = theM_cleanuparguments[ "optionsStr"];
            if( aCleanUpOptionsStr) {
                if( anAllOptionsStr) {
                    anAllOptionsStr += " ";
                }
                anAllOptionsStr += aCleanUpOptionsStr;
            }




            var fCopyWithoutKeys = function( theOriginal, theKeysToExclude) {

                if( !theOriginal) {
                    return null;
                }

                var aCopy = { };

                Object.keys( theOriginal).forEach( function( athKey) {
                    if( theKeysToExclude.indexOf ( athKey) < 0) {
                        aCopy[ athKey] = theOriginal[ athKey];
                    }
                });

                return aCopy;
            };


            var anAllArguments = {
                "launch":     theM_launcharguments,
                "housekeep":  fCopyWithoutKeys( theM_housekeeparguments, [ "testName", "testSpec"]),
                "releasing":  fCopyWithoutKeys( theM_releasingarguments, [ "testName", "testSpec"]),
                "cleanup":    fCopyWithoutKeys( theM_cleanuparguments,   [ "testName", "testSpec"])
            };

            try {
                var aLaunchArgumentsJSONstr = JSON.stringify( anAllArguments);
                if( aLaunchArgumentsJSONstr) {
                    var anArgumentsRecord = { "options": anAllOptionsStr, "args": anAllArguments};
                    try {
                        var anArgumentsJSONstr = JSON.stringify( anArgumentsRecord);
                        if( anArgumentsJSONstr) {
                            console.log( "," + anArgumentsJSONstr);
                        }
                    }
                    catch( otherException){}
                }
            }
            catch( anException){}
        }







        var aTestName = theM_launcharguments[ "testName"];
        var aTestSpec = theM_launcharguments[ "testSpec"];


        return theM_launcherone.fDefineLauncherOne_andRunIfFirst( aTestName,
                                                                  aTestSpec,
                                                                  null, /* theLauncherIdentifier */
                                                                  null, /* theLauncherRecorder,*/
                                                                  theM_launcharguments, /* theRunOptions*/
                                                                  null, /* theIdentifier */
                                                                  null, /* theRecorder,*/
                                                                  null, /* theSnapshottersByKind */
                                                                  null, /* theHousekeeper*/
                                                                  theM_housekeeparguments, /* theHousekeepOptions*/
                                                                  theM_releasingarguments,
                                                                  theM_cleanuparguments,
                                                                  null); /* theAlreadyScannedByPath */
    };


    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_firsttorun          = require('./firsttorun');
            var aM_launcherone         = require('./launcher-one');
            var aM_launcharguments     = require('./launcharguments');
            var aM_housekeeparguments  = require('../housekeep/housekeeparguments');
            var aM_releasingarguments  = require('../releasing/releasingarguments');
            var aM_cleanuparguments    = require('../cleanup/cleanuparguments');

            return aMod_definer(
                aM_firsttorun,
                aM_launcherone,
                aM_launcharguments,
                aM_housekeeparguments,
                aM_releasingarguments,
                aM_cleanuparguments
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./firsttorun",
            "./launcher-one",
            "./launcharguments",
            "../housekeep/housekeeparguments",
            "../releasing/releasingarguments",
            "../cleanup/cleanuparguments"
        ], function (
            theM_firsttorun,
            theM_launcherone,
            theM_launcharguments,
            theM_housekeeparguments,
            theM_releasingarguments,
            theM_cleanuparguments
        ) {
            return aMod_definer(
                theM_firsttorun,
                theM_launcherone,
                theM_launcharguments,
                theM_housekeeparguments,
                theM_releasingarguments,
                theM_cleanuparguments
            );
        });
    }

})();

