'use strict';

/*
 cmploader-test.js
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
                                 theM_cmploader,
                                 theM_exiter,
                                 theM_cmpandtestspathsloader) {


        var ModuleName     = "cmploader-test";
        var ModulePackages = "resloader-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }
            
            theToInit.CMPNAMESTOLOAD = [
                "@cmppath/general-test/void-test"
            ];

            theToInit.CMPLOADERTESTTITLE = "cmploader-test";


            theToInit.LOGLOADS = true;
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










        var fDefineCmpLoaderTest_andRunIfFirst = function() {

            var aModule = { };
            pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;






            var ModuleGlobals = { };
            if( ModuleGlobals){}/* CQT */

            aModule.ModuleGlobals = ModuleGlobals;

            aModule.ModuleGlobals.gCmpAndTestsPathsLoader = null;








            var pCmpLoaderTest = function( theCallback, theIsFirst) {

                if( !theIsFirst) {
                    aModule.pLoadCmps( theCallback);
                    return;
                }

                aModule.pSL_loadcmpandtestspaths(
                    function( theError) {

                        if( theError) {
                            theCallback( theError);
                            return;
                        }

                        aModule.pLoadCmps( theCallback)
                    }
                );
            };
            if( pCmpLoaderTest){}/* CQT */
            aModule.pCmpLoaderTest = pCmpLoaderTest;







            var pSL_loadcmpandtestspaths = function( theCallback) {


                aModule.ModuleGlobals.gCmpAndTestsPathsLoader = new theM_cmpandtestspathsloader.CmpAndTestsPathsLoader_Constructor( "CmpAndTestsPathsLoaderFor-" + this._v_Title);

                aModule.ModuleGlobals.gCmpAndTestsPathsLoader.pF_CmpAndTestsPathsLoader( theCallback);
            };
            if( pSL_loadcmpandtestspaths){}/* CQT */
            aModule.pSL_loadcmpandtestspaths = pSL_loadcmpandtestspaths;







            var pLoadCmps = function( theCallback) {

                var someErrors = [ ];

                try {

                    var aCmpLoader = theM_cmploader.fgGlobalCmpLoader();

                    var someCmpNamesToLoad = aModule.CMPNAMESTOLOAD;

                    var aNumCmpNamesToLoad = someCmpNamesToLoad.length;
                    for( var aCmpNameToLoadIdx=0; aCmpNameToLoadIdx < aNumCmpNamesToLoad; aCmpNameToLoadIdx++) {

                        var aCmpNameToLoad = someCmpNamesToLoad[ aCmpNameToLoadIdx];

                        var aLoadedCmp = aCmpLoader.fLoadCmpNamed( aCmpNameToLoad);

                        if( !aLoadedCmp) {
                            var anErrorReport = ',{ "ERROR LOADING", "CMP", "' + aCmpNameToLoad + '"}';
                            if( aModule.LOGLOADS) {
                                console.log( anErrorReport);
                            }
                            someErrors.push( anErrorReport);
                        }
                        else {
                            if( aModule.LOGLOADS) {
                                var someCmpKeys = Object.keys( aLoadedCmp);
                                console.log( ',{"LOADED", "CMP", "' + aCmpNameToLoad  + '", ' + JSON.stringify( someCmpKeys) + '}');
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
            if( pLoadCmps){}/* CQT */
            aModule.pLoadCmps = pLoadCmps;









            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }

                        var anExitRecord = { "launcher": aModule.CMPLOADERTESTTITLE , "EXIT": anExitCode, "error": theError};
                        console.log( "," + JSON.stringify( anExitRecord));
                        theM_exiter.p_Exit( anExitCode);
                    };

                    aModule.pCmpLoaderTest( aCallback, true);
                })()
            }

            return aModule;
        };






        var aCmpAlreadyRunIfFirst = fDefineCmpLoaderTest_andRunIfFirst( );
        if( aCmpAlreadyRunIfFirst){}/* CQT */
        return aCmpAlreadyRunIfFirst;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails       = require('../common-test/exceptiondetails');
            var aM_firsttorun             = require('../common-test/launchers/firsttorun');
            var aM_cmploader              = require('../common-test/resloader/cmploader');
            var aM_exiter                 = require('../infrasvcs/exiter/exiter');
            var aM_cmpandtestspathsloader = require('../common-test/pathsloader/cmpandtestspathsloader');

            return aMod_definer( aM_exceptiondetails, aM_firsttorun, aM_cmploader, aM_exiter, aM_cmpandtestspathsloader);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/exceptiondetails",
            "../common-test/launchers/firsttorun",
            "../common-test/resloader/cmploader",
            "../infrasvcs/exiter/exiter",
            "../common-test/pathsloader/cmpandtestspathsloader"
        ], function (
            theM_exceptiondetails, theM_firsttorun, theM_cmploader, theM_exiter, theM_cmpandtestspathsloader) {
            return aMod_definer( theM_exceptiondetails, theM_firsttorun, theM_cmploader, theM_exiter, theM_cmpandtestspathsloader);
        });
    }



}());

















