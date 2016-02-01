'use strict';

/*
 specloader-test.js
 Created 201409190347
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
                                 theM_specloader,
                                 theM_exiter,
                                 theM_cmpandtestspathsloader) {


        var ModuleName     = "specloader-test";
        var ModulePackages = "resloader-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.SPECNAMESTOLOAD = [
                "@testspath/ttst/configspec-01-base-ttst.json"
            ];

            theToInit.SPECLOADERTSTTITLE = "specloader-test";


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







        var fDefineSpecLoaderTest_andRunIfFirst = function() {

            var aModule = { };
            pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;



            var ModuleGlobals = { };
            if( ModuleGlobals){}/* CQT */

            aModule.ModuleGlobals = ModuleGlobals;

            aModule.ModuleGlobals.gCmpAndTestsPathsLoader = null;




            var pSpecLoaderTest = function( theCallback, theIsFirst) {

                if( !theIsFirst) {
                    aModule.pLoadSpecs( theCallback);
                    return;
                }

                aModule.pSL_loadcmpandtestspaths(
                    function( theError) {

                        if( theError) {
                            theCallback( theError);
                            return;
                        }

                        aModule.pLoadSpecs( theCallback)
                    }
                );
            };
            if( pSpecLoaderTest){}/* CQT */
            aModule.pSpecLoaderTest = pSpecLoaderTest;








            var pSL_loadcmpandtestspaths = function( theCallback) {


                aModule.ModuleGlobals.gCmpAndTestsPathsLoader = new theM_cmpandtestspathsloader.CmpAndTestsPathsLoader_Constructor( "CmpAndTestsPathsLoaderFor-" + this._v_Title);

                aModule.ModuleGlobals.gCmpAndTestsPathsLoader.pF_CmpAndTestsPathsLoader( theCallback);
            };
            if( pSL_loadcmpandtestspaths){}/* CQT */
            aModule.pSL_loadcmpandtestspaths = pSL_loadcmpandtestspaths;





            var pLoadSpecs = function( theCallback) {

                var someErrors = [ ];

                try {

                    var aSpecLoader = theM_specloader.fgGlobalSpecLoader();

                    var someSpecNamesToLoad = aModule.SPECNAMESTOLOAD;

                    var aNumSpecNamesToLoad = someSpecNamesToLoad.length;
                    for( var aSpecNameToLoadIdx=0; aSpecNameToLoadIdx < aNumSpecNamesToLoad; aSpecNameToLoadIdx++) {

                        var aSpecNameToLoad = someSpecNamesToLoad[ aSpecNameToLoadIdx];

                        var aLoadedSpec = aSpecLoader.fLoadSpecNamed( aSpecNameToLoad);

                        if( !aLoadedSpec) {
                            var anErrorReport = ',{ "ERROR LOADING", "SPEC", "' + aSpecNameToLoad + '"}';
                            if( aModule.LOGLOADS) {
                                console.log( anErrorReport);
                            }
                            someErrors.push( anErrorReport);
                        }
                        else {
                            if( aModule.LOGLOADS) {
                                console.log( ',{"LOADED", "SPEC", "' + aSpecNameToLoad  + '", "' + JSON.stringify( aLoadedSpec) + '"}');
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
            if( pLoadSpecs){}/* CQT */
            aModule.pLoadSpecs = pLoadSpecs;








            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }

                        var anExitRecord = { "launcher": aModule.SPECLOADERTSTTITLE , "EXIT": anExitCode, "error": theError};
                        console.log( "," + JSON.stringify( anExitRecord));
                        theM_exiter.p_Exit( anExitCode);
                    };

                    aModule.pSpecLoaderTest( aCallback, true);
                })()
            }

            return aModule;
        };






        var aSpecAlreadyRunIfFirst = fDefineSpecLoaderTest_andRunIfFirst( );
        if( aSpecAlreadyRunIfFirst){}/* CQT */
        return aSpecAlreadyRunIfFirst;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../common-test/exceptiondetails');
            var aM_firsttorun       = require('../common-test/launchers/firsttorun');
            var aM_specloader       = require('../common-test/resloader/specloader');
            var aM_exiter           = require('../infrasvcs/exiter/exiter');
            var aM_cmpandtestspathsloader = require('../common-test/pathsloader/cmpandtestspathsloader');

            return aMod_definer( aM_exceptiondetails, aM_firsttorun, aM_specloader, aM_exiter, aM_cmpandtestspathsloader);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/exceptiondetails",
            "../common-test/launchers/firsttorun",
            "../common-test/resloader/specloader",
            "../infrasvcs/exiter/exiter",
            "../common-test/pathsloader/cmpandtestspathsloader"
        ], function (
            theM_exceptiondetails, theM_firsttorun, theM_specloader, theM_exiter, theM_cmpandtestspathsloader) {
            return aMod_definer( theM_exceptiondetails, theM_firsttorun, theM_specloader, theM_exiter, theM_cmpandtestspathsloader);
        });
    }



}());



























