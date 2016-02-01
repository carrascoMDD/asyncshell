'use strict';

/*
 index.js
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
    var aMod_definer = function( theM_scanmodulenames,
                                 theM_path) {


        var ModuleName     = "index.js";
        var ModulePackages = "";
        var ModuleFullName = ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



	
        var someCmpModuleNames   = theM_scanmodulenames.fScanModuleNames( theM_path.join( __dirname, "lib"));

        var someTestsModuleNames = theM_scanmodulenames.fScanModuleNames( theM_path.join( __dirname, "tests"));

        var someLauncherNames    = theM_scanmodulenames.fScanModuleNames( theM_path.join( __dirname, "tests"));


        var someCmpsByName  = { };
        var someTestsByName = { };



        var fCmpModule = function( theModuleName) {

        };


        var fTestModule = function( theModuleName) {

        };





        var aModule = {
            "fCmpModule":       fCmpModule,
            "fTestModule":      fTestModule,
            "CmpModuleNames":   someCmpModuleNames,
            "TestsModuleNames": someTestsModuleNames,
            "LauncherNames":    someLauncherNames
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_scanmodulenames   = require('./scanmodulenames');
            var aM_path              = require('path');

            return aMod_definer(
                aM_scanmodulenames,
                aM_path
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./scanmodulenames",
            "path"
        ], function (
            theM_scanmodulenames,
            theM_path
        ) {
            return aMod_definer(
                theM_scanmodulenames,
                theM_path
            );
        });
    }



}());
