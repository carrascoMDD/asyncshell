'use strict';

/*
 xloader-sync-test.js
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
                                 theM_xloader,
                                 theM_exiter,
                                 theM_overrider) {


        var ModuleName     = "xloader-sync-test";
        var ModulePackages = "xloader-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.XNAMESTOLOAD = [
                "../../../serverdef.json",
                "#root/serverdef.json"
            ];

            theToInit.LOGLOADS = true;
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
                return;
            }

            theToInit.XLOADERTESTTITLE = "xloader-sync-test";

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









        var fDefineXLoaderSyncTest_andRunIfFirst = function() {

            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;





            var pXLoaderTest_sync = function( theCallback) {

                var someErrors = [ ];

                try {
                    var someXNamesToLoad = aModule.XNAMESTOLOAD;

                    var aNumXNamesToLoad = someXNamesToLoad.length;
                    for( var aXNameToLoadIdx=0; aXNameToLoadIdx < aNumXNamesToLoad; aXNameToLoadIdx++) {

                        var aXNameToLoad = someXNamesToLoad[ aXNameToLoadIdx];
                        if( aXNameToLoad) {

                            var aXLoader = new theM_xloader.XLoader_Constructor( "LoaderForXNamed-" + aXNameToLoad,aXNameToLoad);

                            var aLoadedX = aXLoader.fLoadXNamed( aXNameToLoad);

                            if( !aLoadedX) {
                                var anErrorReport = ',{ "ERROR LOADING", "X", "' + aXNameToLoad + '"}';
                                if( this.LOGLOADS) {
                                    console.log( anErrorReport);
                                }
                                someErrors.push( anErrorReport);
                            }
                            else {
                                if( this.LOGLOADS) {
                                    console.log( ',{"LOADED", "X", "' + aXNameToLoad  + '", "' + JSON.stringify( aLoadedX) + '"}');
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
            if( pXLoaderTest_sync){}/* CQT */
            aModule.pXLoaderTest_sync = pXLoaderTest_sync;







            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }

                        var anExitRecord = { "launcher": aModule.XLOADERTESTTITLE , "EXIT": anExitCode, "error": theError};
                        console.log( "," + JSON.stringify( anExitRecord));
                        theM_exiter.p_Exit( anExitCode);
                    };

                    aModule.pXLoaderTest_sync( aCallback);
                })()
            }

            return aModule;
        };






        var aModuleAlreadyRunIfFirst = fDefineXLoaderSyncTest_andRunIfFirst( );
        if( aModuleAlreadyRunIfFirst){}/* CQT */
        return aModuleAlreadyRunIfFirst;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../common-test/exceptiondetails');
            var aM_firsttorun       = require('../common-test/launchers/firsttorun');
            var aM_xloader          = require('../common-test/xloader/xloader');
            var aM_exiter           = require('../infrasvcs/exiter/exiter');
            var aM_overrider        = require('../common-test/overrider');

            return aMod_definer( aM_exceptiondetails, aM_firsttorun, aM_xloader, aM_exiter, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/exceptiondetails",
            "../common-test/launchers/firsttorun",
            "../common-test/xloader/xloader",
            "../infrasvcs/exiter/exiter",
            "../common-test/overrider"
        ], function (
                theM_exceptiondetails,
                theM_firsttorun,
                theM_xloader,
                theM_exiter,
                theM_overrider
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_firsttorun,
                theM_xloader,
                theM_exiter,
                theM_overrider
            );
        });
    }



}());



























