'use strict';

/*
 sc.js
 Exposes the components in asyncshell
 Created 201601310036
 */

/*
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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
    var aMod_definer = function( theM_fs,
                                 theM_path) {


        var ModuleName     = "scanmodulenames.js";
        var ModulePackages = "";
        var ModuleFullName = ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var fScanModuleNames = function() {
            
            var someScannedModules = [ ];

            pScanModuleNames_into( __dirname, "", someScannedModules);

            return someScannedModules;

        };
        if( fScanModuleNames){}/* CQT */





        var pScanModuleNames_into = function( theDirectory, thePathPrefix, theScannedModules) {

            if( !theDirectory) {
                return;
            }

            if( !theScannedModules) {
                return;
            }

            var aStatsDirectory = theM_fs.statSync( theDirectory);
            if( !aStatsDirectory) {
                return;
            }

            if( !aStatsDirectory.isDirectory()) {
                return;
            }

            var someDirContents = theM_fs.read.readdirSync( theDirectory);
            if( !someDirContents) {
                return;
            }

            var aNumDirContents = someDirContents.length;
            if( !aNumDirContents) {
                return;
            }

            for( var aDirContentsIdx=0; aDirContentsIdx < aNumDirContents; aDirContentsIdx++) {
                var aDirContents = someDirContents[ aDirContentsIdx];
                if( aDirContents) {

                    var aStatsDirContents = theM_fs.lstatSync( aDirContents);
                    if( !aStatsDirContents) {
                        continue;
                    }


                    if( aStatsDirContents.isSymbolicLink()) {
                        continue;
                    }

                    if( aStatsDirContents.isDirectory()) {

                        var aPathPrefix  = "";
                        if( thePathPrefix) {
                            aPathPrefix = theM_path.join( thePathPrefix, aDirContents);
                        }
                        else {
                            aPathPrefix  = aDirContents;
                        }

                        pScanModuleNames_into( aDirContents, aPathPrefix, theScannedModules);
                        continue;
                    }

                    var aFilename = theM_path.join( thePathPrefix, aDirContents);
                    theScannedModules.push( aFilename);
                }
            }
        };
        if( pScanModuleNames_into){}/* CQT */








        var aModule = {
            "fScanModuleNames":     fScanModuleNames
        };
        if( aModule){}/* CQT */



        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_fs   = require('fs');
            var aM_path = require('path');

            return aMod_definer(
                aM_fs,
                aM_path
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "path"
        ], function (
            theM_fs,
            theM_path
        ) {
            return aMod_definer(
                theM_fs,
                theM_path
            );
        });
    }


}());
