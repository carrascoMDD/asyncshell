'use strict';

/*
 cmpandspecloaders-test.js
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

    var aMod_definer = function( theM_firsttorun,
                                 theM_exiter,
                                 theM_cmpandtestspathsloader) {


        var ModuleName     = "cmpandspecloaders-test";
        var ModulePackages = "resloader-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








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
        pgInitWithModuleConstants( ModuleConstants);










        var fDefineCmpAndSpecLoaderTest_andRunIfFirst = function() {

            var aModule = { };
            pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





            var ModuleGlobals = { };
            if( ModuleGlobals){}/* CQT */

            aModule.ModuleGlobals = ModuleGlobals;

            aModule.ModuleGlobals.gCmpAndTestsPathsLoader = null;








            var pCmpAndSpecLoaderTest = function( theCallback, theIsFirst) {

                if( !theIsFirst) {
                    aModule.pLoadCmpAndSpec( theCallback);
                    return;
                }

                aModule.pSL_loadcmpandtestspaths(
                    function( theError) {

                        if( theError) {
                            theCallback( theError);
                            return;
                        }

                        aModule.pLoadCmpAndSpec( theCallback)
                    }
                );
            };
            if( pCmpAndSpecLoaderTest){}/* CQT */
            aModule.pCmpAndSpecLoaderTest = pCmpAndSpecLoaderTest;








            var pSL_loadcmpandtestspaths = function( theCallback) {


                aModule.ModuleGlobals.gCmpAndTestsPathsLoader = new theM_cmpandtestspathsloader.CmpAndTestsPathsLoader_Constructor( "CmpAndTestsPathsLoaderFor-" + this._v_Title);

                aModule.ModuleGlobals.gCmpAndTestsPathsLoader.pF_CmpAndTestsPathsLoader( theCallback);
            };
            if( pSL_loadcmpandtestspaths){}/* CQT */
            aModule.pSL_loadcmpandtestspaths = pSL_loadcmpandtestspaths;






            var pLoadCmpAndSpec = function( theCallback) {


                var aM_cmploader_test  = require('./cmploader-test');
                if( !aM_cmploader_test) {
                    var anErrorReport = ',{ "ERROR require ./cmploader-test" }';
                    console.log( anErrorReport);

                    theCallback( anErrorReport);
                    return;
                }


                aM_cmploader_test.pCmpLoaderTest(
                    function( theError) {
                        if( theError) {
                            theCallback( theError);
                            return;
                        }

                        var aM_specloader_test = require('./specloader-test');
                        if( !aM_specloader_test) {
                            var anErrorReport = ',{ "ERROR require ./specloader-test" }';
                            console.log( anErrorReport);

                            theCallback( anErrorReport);
                            return;
                        }

                        aM_specloader_test.pSpecLoaderTest(
                            function( theError) {
                                if( theError) {
                                    theCallback( theError);
                                }
                                else {
                                    theCallback();
                                }
                            }
                        );
                    }
                );

            };
            if( pLoadCmpAndSpec){}/* CQT */
            aModule.pLoadCmpAndSpec = pLoadCmpAndSpec;






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

                    aModule.pCmpAndSpecLoaderTest( aCallback, true);
                })()
            }

            return aModule;
        };






        var aModuleAlreadyRunIfFirst = fDefineCmpAndSpecLoaderTest_andRunIfFirst( );
        if( aModuleAlreadyRunIfFirst){}/* CQT */
        return aModuleAlreadyRunIfFirst;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_firsttorun             = require('../common-test/launchers/firsttorun');
            var aM_exiter                 = require('../infrasvcs/exiter/exiter');
            var aM_cmpandtestspathsloader = require('../common-test/pathsloader/cmpandtestspathsloader');

            return aMod_definer( aM_firsttorun, aM_exiter, aM_cmpandtestspathsloader);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/launchers/firsttorun",
            "../infrasvcs/exiter/exiter",
            "../common-test/pathsloader/cmpandtestspathsloader"
        ], function (
                theM_firsttorun,
                theM_exiter,
                theM_cmpandtestspathsloader
            ) {
            return aMod_definer(
                theM_firsttorun,
                theM_exiter,
                theM_cmpandtestspathsloader
            );
        });
    }



}());



























