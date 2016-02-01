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



        var DIR_CURRENT = "./";
        var DIR_LIB     = "lib";
        var DIR_TESTS   = "tests";


        var CMPPATH_ASYNCSHELL   = "@cmppath/asyncshell";

        var TESTSPATH_ASYNCSHELL = "@testspath/asyncshell";









        var someCmpModuleNames = null;
        var someCmpsByName     = null;

        var someTestsModuleNames = null;
        var someTestsByName      = null;







        var fCmp = function( theModuleName) {

            if( !someCmpsByName) {

                someCmpsByName = { };

                someCmpModuleNames   = theM_scanmodulenames.fScanModuleNames(
                    theM_path.join( __dirname, DIR_LIB),
                    "js",
                    true,  /* theRemoveFileTerminationFromModuleName */
                    null /* thePathPrefix */
                );

                var aNumCmpModuleNames = someCmpModuleNames.length;
                for( var aCmpModuleNameIdx=0; aCmpModuleNameIdx < aNumCmpModuleNames; aCmpModuleNameIdx++) {

                    var aCmpModuleName = someCmpModuleNames[ aCmpModuleNameIdx];
                    if( aCmpModuleName) {

                        someCmpsByName[ aCmpModuleName] = null;
                    }
                }
            }


            if( !someCmpsByName.hasOwnProperty( theModuleName)) {
                return null;
            }


            var aCmp = someCmpsByName[ theModuleName];
            if( aCmp) {
                return aCmp;
            }

            var aModuleRequirePath = DIR_CURRENT +  theM_path.join( DIR_LIB, theModuleName);

            aCmp = require( aModuleRequirePath);

            return aCmp;

        };







        var fTest = function( theModuleName) {

            if( !someTestsByName) {

                someTestsByName = { };

                someTestsModuleNames = theM_scanmodulenames.fScanModuleNames(
                    theM_path.join( __dirname, DIR_TESTS),
                    "json",
                    false, /* theRemoveFileTerminationFromModuleName */
                    null /* thePathPrefix */
                );

                var aNumCmpModuleNames = someTestsModuleNames.length;
                for( var aCmpModuleNameIdx=0; aCmpModuleNameIdx < aNumCmpModuleNames; aCmpModuleNameIdx++) {

                    var aCmpModuleName = someTestsModuleNames[ aCmpModuleNameIdx];
                    if( aCmpModuleName) {

                        someTestsByName[ aCmpModuleName] = null;
                    }
                }
            }


            if( !someTestsByName.hasOwnProperty( theModuleName)) {
                return null;
            }


            var aTest = someTestsByName[ theModuleName];
            if( aTest) {
                return aTest;
            }


            var aModuleRequirePath = DIR_CURRENT +  theM_path.join( DIR_TESTS, theModuleName);

            aTest = require( aModuleRequirePath);

            return aTest;

        };




        var aModule = {
            "fCmp":             fCmp,
            "fTest":            fTest,
            "CmpModuleNames":   someCmpModuleNames,
            "CmpsByName":       someCmpsByName,
            "TestsModuleNames": someTestsModuleNames,
            "TestsByName":      someTestsByName
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
