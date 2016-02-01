'use strict';

/*
 pathsloader-sync-test.js
 Created 201409230718
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

    var aMod_definer = function( theM_exceptiondetails,
                                 theM_firsttorun,
                                 theM_pathsloader,
                                 theM_exiter) {


        var ModuleName     = "pathsloader-sync-test";
        var ModulePackages = "pathsloader-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.PATHSNAMESTOLOAD = [
                "#root/cmppath.json",
                "#root/testspath.json"
            ];

            theToInit.PATHSLOADERTESTTITLE = "pathsloader-sync-test";

            theToInit.LOGLOADS = true;

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







        var fDefinePathsLoaderSyncTest_andRunIfFirst = function() {

            var aModule = { };
            pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





            var pPathsLoaderTest_sync = function( theCallback) {

                var someErrors = [ ];

                try {
                    var somePathsNamesToLoad = aModule.PATHSNAMESTOLOAD;

                    var aNumPathsNamesToLoad = somePathsNamesToLoad.length;
                    for( var aPathsNameToLoadIdx=0; aPathsNameToLoadIdx < aNumPathsNamesToLoad; aPathsNameToLoadIdx++) {

                        var aPathsNameToLoad = somePathsNamesToLoad[ aPathsNameToLoadIdx];
                        if( aPathsNameToLoad) {

                            var aPathsLoader = new theM_pathsloader.PathsLoader_Constructor( "LoaderForPathsNamed-" + aPathsNameToLoad,aPathsNameToLoad);

                            var aLoadedPaths = aPathsLoader.fLoadPathsNamed( aPathsNameToLoad);

                            if( !aLoadedPaths) {
                                var anErrorReport = ',{ "ERROR LOADING", "PATHS", "' + aPathsNameToLoad + '"}';
                                if( this.LOGLOADS) {
                                    console.log( anErrorReport);
                                }
                                someErrors.push( anErrorReport);
                            }
                            else {
                                if( this.LOGLOADS) {
                                    console.log( ',{"LOADED", "PATHS", "' + aPathsNameToLoad  + '", "' + JSON.stringify( aLoadedPaths) + '"}');
                                }
                            }
                        }
                    }
                }
                catch( anException) {
                    var anExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                    theCallback( anExceptionDetail);
                    return;
                }


                if( someErrors.length) {
                    theCallback( someErrors);
                    return;
                }

                theCallback();
            };
            if( pPathsLoaderTest_sync){}/* CQT */
            aModule.pPathsLoaderTest_sync = pPathsLoaderTest_sync;







            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }

                        var anExitRecord = { "launcher": aModule.PATHSLOADERTESTTITLE , "EXIT": anExitCode, "error": theError};
                        console.log( "," + JSON.stringify( anExitRecord));
                        theM_exiter.p_Exit( anExitCode);
                    };

                    aModule.pPathsLoaderTest_sync( aCallback);
                })()
            }

            return aModule;
        };






        var aModuleAlreadyRunIfFirst = fDefinePathsLoaderSyncTest_andRunIfFirst( );
        if( aModuleAlreadyRunIfFirst){}/* CQT */
        return aModuleAlreadyRunIfFirst;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../common-test/exceptiondetails');
            var aM_firsttorun       = require('../common-test/launchers/firsttorun');
            var aM_pathsloader       = require('../common-test/pathsloader/pathsloader');
            var aM_exiter           = require('../infrasvcs/exiter/exiter');

            return aMod_definer( aM_exceptiondetails, aM_firsttorun, aM_pathsloader, aM_exiter);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/exceptiondetails",
            "../common-test/launchers/firsttorun",
            "../common-test/pathsloader/pathsloader",
            "../infrasvcs/exiter/exiter"
        ], function (
            theM_exceptiondetails, theM_firsttorun, theM_pathsloader, theM_exiter) {
            return aMod_definer( theM_exceptiondetails, theM_firsttorun, theM_pathsloader, theM_exiter);
        });
    }



}());



























