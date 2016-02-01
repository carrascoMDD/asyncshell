'use strict';

/*
 cmpandtestspathsloader-test.js
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
                                 theM_cmpandtestspathsloader,
                                 theM_exiter) {


        var ModuleName     = "cmpandtestspathsloader-test";
        var ModulePackages = "pathsloader-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.CMPANDTESTSPATHSLOADERTESTTITLE = "cmpandtestspathsloader-test";

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





            var pCmpAndTestsPathsLoaderTest = function( theCallback) {

                try {
                   
                    var aCmpAndTestsPathsLoader = new theM_cmpandtestspathsloader.CmpAndTestsPathsLoader_Constructor(
                        "CmpAndTestsPathsLoader-ForCmpPathsNamed-" + theM_cmpandtestspathsloader.CMPPATHSNAME + "-ForTestsPathsNamed-" + theM_cmpandtestspathsloader.TESTSPATHSNAME,
                        theM_cmpandtestspathsloader.CMPPATHSNAME,
                        theM_cmpandtestspathsloader.TESTSPATHSNAME
                    );

                    aCmpAndTestsPathsLoader.pF_CmpAndTestsPathsLoader( theCallback);
                }
                catch( anException) {
                    var anExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                    theCallback( anExceptionDetail);
                }
            };
            if( pCmpAndTestsPathsLoaderTest){}/* CQT */
            aModule.pCmpAndTestsPathsLoaderTest = pCmpAndTestsPathsLoaderTest;







            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }

                        var anExitRecord = { "launcher": aModule.CMPANDTESTSPATHSLOADERTESTTITLE , "EXIT": anExitCode, "error": theError};
                        console.log( "," + JSON.stringify( anExitRecord));
                        theM_exiter.p_Exit( anExitCode);
                    };

                    aModule.pCmpAndTestsPathsLoaderTest( aCallback);
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

            var aM_exceptiondetails        = require('../common-test/exceptiondetails');
            var aM_firsttorun              = require('../common-test/launchers/firsttorun');
            var aM_cmpandtestspathsloader  = require('../common-test/pathsloader/cmpandtestspathsloader');
            var aM_exiter                  = require('../infrasvcs/exiter/exiter');

            return aMod_definer( aM_exceptiondetails, aM_firsttorun, aM_cmpandtestspathsloader, aM_exiter);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/exceptiondetails",
            "../common-test/launchers/firsttorun",
            "../common-test/pathsloader/cmpandtestspathsloader",
            "../infrasvcs/exiter/exiter"
        ], function (
            theM_exceptiondetails, theM_firsttorun, theM_cmpandtestspathsloader, theM_exiter) {
            return aMod_definer( theM_exceptiondetails, theM_firsttorun, theM_cmpandtestspathsloader, theM_exiter);
        });
    }



}());



























