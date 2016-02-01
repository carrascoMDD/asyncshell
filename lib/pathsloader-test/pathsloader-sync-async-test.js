'use strict';

/*
 pathsloader-sync-async-test.js
 Created 201409190049
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

    var aMod_definer = function( theM_firsttorun, theM_exiter) {


        var ModuleName     = "pathsloader-test";
        var ModulePackages = "pathsloader-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName || "pathsloader-sync-async-test.js");}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.PATHSLOADERTESTTITLE = "pathsloader-sync-async-test";

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







        var fDefinePathsLoaderSyncAsyncTest_andRunIfFirst = function() {

            var aModule = { };
            pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





            var pPathsLoaderSyncAsyncTest = function( theCallback) {


                var aM_pathsloader_sync_test  = require('./pathsloader-sync-test');
                if( !aM_pathsloader_sync_test) {
                    var anErrorReport = ',{ "ERROR require ./pathsloader-sync-test" }';
                    console.log( anErrorReport);

                    theCallback( anErrorReport);
                    return;
                }


                aM_pathsloader_sync_test.pPathsLoaderTest_sync(
                    function( theError) {
                        if( theError) {
                            theCallback( theError);
                            return;
                        }

                        var aM_pathsloader_async_test = require('./pathsloader-async-test');
                        if( !aM_pathsloader_async_test) {
                            var anErrorReport = ',{ "ERROR require ./pathsloader-async-test" }';
                            console.log( anErrorReport);

                            theCallback( anErrorReport);
                            return;
                        }

                        aM_pathsloader_async_test.pPathsLoaderTest_async(
                            function( theError) {
                                if( theError) {
                                    theCallback( theError);
                                    return;
                                }

                                theCallback();
                            }
                        );
                    }
                );

            };
            if( pPathsLoaderSyncAsyncTest){}/* CQT */
            aModule.pPathsLoaderSyncAsyncTest = pPathsLoaderSyncAsyncTest;






            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }

                        var anExitRecord = { "launcher": aModule.CMPLOADERTSTTITLE , "EXIT": anExitCode, "error": theError};
                        console.log( "," + JSON.stringify( anExitRecord));
                        theM_exiter.p_Exit( anExitCode);
                    };

                    aModule.pPathsLoaderSyncAsyncTest( aCallback);
                })()
            }

            return aModule;
        };






        var aModuleAlreadyRunIfFirst = fDefinePathsLoaderSyncAsyncTest_andRunIfFirst( );
        if( aModuleAlreadyRunIfFirst){}/* CQT */
        return aModuleAlreadyRunIfFirst;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_firsttorun = require('../common-test/launchers/firsttorun');
            var aM_exiter     = require('../infrasvcs/exiter/exiter');

            return aMod_definer( aM_firsttorun, aM_exiter);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/launchers/firsttorun",
            "../infrasvcs/exiter/exiter"
        ], function ( theM_firsttorun, theM_exiter) {
            return aMod_definer( theM_firsttorun, theM_exiter);
        });
    }



}());



























