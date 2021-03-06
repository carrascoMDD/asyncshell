'use strict';

/*
 scanmodulenames.js
 Scans the module names starting at a supplied file system path. Used by index.js to expose in asyncshell module, javascript test component modules, test specification json and launcher shell scripts.
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




        var FILETERMINATION_REGEXP_REPLACE = "<theFileTermination>";
        var FILETERMINATION_REGEXP_TEMPLATE = "[0-1a-zA-Z_\-]+\." + FILETERMINATION_REGEXP_REPLACE +"$";







        var fScanModuleNames = function( theDirectory,
                                         theFileTermination,
                                         theRemoveFileTerminationFromModuleName,
                                         thePathPrefix) {
            
            var someScannedModules = [ ];

            pScanModuleNames_into(
                theDirectory,
                theFileTermination,
                theRemoveFileTerminationFromModuleName,
                thePathPrefix,
                someScannedModules
            );

            return someScannedModules;

        };
        if( fScanModuleNames){}/* CQT */





        var pScanModuleNames_into = function( theDirectory,
                                              theFileTermination,
                                              theRemoveFileTerminationFromModuleName,
                                              thePathPrefix,
                                              theScannedModules) {

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

            var someDirContents = theM_fs.readdirSync( theDirectory);
            if( !someDirContents) {
                return;
            }

            var aNumDirContents = someDirContents.length;
            if( !aNumDirContents) {
                return;
            }

            var aFileTermination_regex = null;
            if( theFileTermination) {
                var aFileTermination_regexp_source = FILETERMINATION_REGEXP_TEMPLATE.replace( FILETERMINATION_REGEXP_REPLACE, theFileTermination);
                aFileTermination_regex = new RegExp( aFileTermination_regexp_source);
            }



            for( var aDirContentsIdx=0; aDirContentsIdx < aNumDirContents; aDirContentsIdx++) {
                var aDirContents = someDirContents[ aDirContentsIdx];
                if( aDirContents) {

                    var aDirContentsPath = theM_path.join( theDirectory, aDirContents);

                    var aStatsDirContents = theM_fs.lstatSync( aDirContentsPath);
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

                        pScanModuleNames_into(
                            aDirContentsPath,
                            theFileTermination,
                            theRemoveFileTerminationFromModuleName,
                            aPathPrefix,
                            theScannedModules
                        );
                        continue;
                    }


                    var anAcceptFilename = false;
                    if( aFileTermination_regex) {
                        if( aFileTermination_regex.test( aDirContents)) {
                            anAcceptFilename = true;
                        }
                    }
                    else {
                        anAcceptFilename = true;
                    }


                    if( anAcceptFilename) {

                        var aFilenameWithTermination = aDirContents;
                        var aFilename = aFilenameWithTermination;

                        if( theRemoveFileTerminationFromModuleName) {
                            aFilename = aFilename.substring( 0, aFilenameWithTermination.length - theFileTermination.length - 1);
                        }


                        var aModulePath = null;
                        if( thePathPrefix) {
                            aModulePath = theM_path.join( thePathPrefix, aFilename);
                        }
                        else {
                            aModulePath  = aFilename;
                        }

                        theScannedModules.push( aModulePath);
                    }
                }
            }
        };
        if( pScanModuleNames_into){}/* CQT */














        var aModule = {
            "fScanModuleNames":     fScanModuleNames
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


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
            "fs",
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
