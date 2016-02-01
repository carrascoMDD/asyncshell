'use strict';

/*
 useplatform.js
 Created 201409212053
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

    var aMod_definer = function() {

        var ModuleName     = "useplatform";
        var ModulePackages = "infrasvcs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var USEPLATFORM_NODEJS  = "NODEJS";
        var USEPLATFORM_BROWSER = "BROWSER";






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.USEPLATFORM_NODEJS  = USEPLATFORM_NODEJS;
            theToInit.USEPLATFORM_BROWSER = USEPLATFORM_BROWSER;

            theToInit.USEPLATFORMS = [
                theToInit.USEPLATFORM_NODEJS,
                theToInit.USEPLATFORM_BROWSER
            ];

            theToInit.USEPLATFORM_DEFAULT  = theToInit.USEPLATFORM_NODEJS;

            if( !theToInit.USEPLATFORM || ( theToInit.USEPLATFORMS.indexOf( theToInit.USEPLATFORM) < 0)) {
                theToInit.USEPLATFORM = theToInit.USEPLATFORM_DEFAULT;
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





        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;




        var fUsePlatform = function() {

            return aModule.USEPLATFORM;
        };
        if( fUsePlatform){}/* CQT */
        aModule.fUsePlatform = fUsePlatform;




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
        define( function () {
            return aMod_definer();
        });
    }


}());