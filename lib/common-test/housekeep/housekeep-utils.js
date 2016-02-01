'use strict';

/*
 housekeep-utils.js
 Created 201504192335
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
    var aMod_definer = function( ) {

        var ModuleName     = "housekeep-utils";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }
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










        var fgWhatToCleanIncludesAtLeastOne = function( theWhatToClean, theWhatToInclude) {

            if( !theWhatToClean) {
                return false;
            }

            if( !theWhatToInclude) {
                return false;
            }


            var aWhatToClean = theWhatToClean;
            if( typeof aWhatToClean == "string") {
                aWhatToClean = [ aWhatToClean];
            }

            var aNumWhatToClean = aWhatToClean.length;
            if( !aNumWhatToClean) {
                return false;
            }

            for( var aWhatToCleanIdx=0; aWhatToCleanIdx < aNumWhatToClean; aWhatToCleanIdx++) {

                var aWhatToClean = aWhatToClean[ aWhatToCleanIdx];
                if( aWhatToClean) {

                    if( theWhatToInclude.indexOf( aWhatToClean) >= 0) {
                        return true;
                    }
                }
            }

            return false;
        };









        var fgWhatToCleanIncludesAll = function( theWhatToClean, theWhatToInclude) {

            if( !theWhatToClean) {
                return false;
            }

            if( !theWhatToInclude) {
                return false;
            }

            var aWhatToClean = theWhatToClean;
            if( typeof aWhatToClean == "string") {
                aWhatToClean = [ aWhatToClean];
            }


            var aNumWhatToClean = aWhatToClean.length;
            if( !aNumWhatToClean) {
                return false;
            }


            var aWhatToInclude = theWhatToInclude;
            if( typeof aWhatToInclude == "string") {
                aWhatToInclude = [ aWhatToInclude];
            }

            var aNumWhatToInclude = aWhatToInclude.length;
            if( !aNumWhatToInclude) {
                return false;
            }

            for( var aWhatToIncludeIdx=0; aWhatToIncludeIdx < aNumWhatToInclude; aWhatToIncludeIdx++) {

                var aWhatToInclude = aWhatToInclude[ aWhatToIncludeIdx];
                if( aWhatToInclude) {

                    if( aWhatToClean.indexOf( aWhatToInclude) < 0) {
                        return false;
                    }
                }
            }

            return true;
        };









        var fgCleanedUpIncludesAll = function( theCleanedUp, theWhatToClean) {

            if( !theWhatToClean) {
                return true;
            }

            var aWhatToClean = theWhatToClean;
            if( typeof aWhatToClean == "string") {
                aWhatToClean = [ aWhatToClean];
            }


            var aNumWhatToClean = aWhatToClean.length;
            if( !aNumWhatToClean) {
                return true;
            }

            if( typeof theCleanedUp == "undefined") {
                return false;
            }

            if( theCleanedUp == null) {
                return false;
            }

            var aCleanedUp = theCleanedUp;

            if( typeof aCleanedUp == "boolean") {

                return aCleanedUp;
            }


            if( !(typeof aCleanedUp == "object") || !(typeof aCleanedUp.length == "number")) {
                aCleanedUp = [ aCleanedUp];
            }


            for( var aWhatToCleanIdx=0; aWhatToCleanIdx < aNumWhatToClean; aWhatToCleanIdx++) {

                var aWhatToClean = aWhatToClean[ aWhatToCleanIdx];
                if( aWhatToClean) {

                    if( aCleanedUp.indexOf( aWhatToClean) < 0) {
                        return false;
                    }
                }
            }

            return true;
        };








        var aModule = {
            "ModuleConstants": ModuleConstants,

            "fgWhatToCleanIncludesAtLeastOne": fgWhatToCleanIncludesAtLeastOne,
            "fgCleanedUpIncludesAll":          fgCleanedUpIncludesAll,
            "fgWhatToCleanIncludesAll":        fgWhatToCleanIncludesAll

        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;
    };








    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            return aMod_definer();
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define(function () {
            return aMod_definer();
        });
    }


}());


