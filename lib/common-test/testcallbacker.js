'use strict';

/*
 testcallbacker.js
 Creado 201409201736
 */

/*
 ***************************************************************************

 Copyright 2014 2015 Antonio Carrasco Valero
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
    var aMod_definer = function( theM_callbacker,
                                 theM_overrider) {

        var ModuleName     = "testcallbacker";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.ANNOTATETESTCALLBACKS      = true;

            theToInit.RECORDNEWTESTCALLBACKS    = true;
            theToInit.RECORDCALLBACKINVOCATIONS = true;
            theToInit.RECORDTESTCALLBACKARGS    = true;
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
            }
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










        var fChainNewTestCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theTest, theMethodName) {
            if( !this.ANNOTATETESTCALLBACKS) {
                return theNewCallback;
            }

            return theM_callbacker.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, theTest, theMethodName);
        };










        var pReceivedTestCallbackArg = function( theCallback, theTest, theMethodName) {
            if( !this.ANNOTATETESTCALLBACKS) {
                return;
            }

            if( !this.RECORDTESTCALLBACKARGS) {
                return;
            }

            if( !theCallback) {
                return;
            }

            theM_callbacker.pReceivedCallbackArg( theCallback, theTest, theMethodName);
        };







        var aModule = {
            "ModuleConstants": ModuleConstants,
            "fChainNewTestCallbackForCallback": fChainNewTestCallbackForCallback,
            "pReceivedTestCallbackArg":         pReceivedTestCallbackArg
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

            var aM_callbacker = require('./callbacker');
            var aM_overrider  = require('./overrider');

            return aMod_definer( aM_callbacker, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( [
            "./callbacker",
            "-/overrider"
        ], function (
                theM_callbacker,
                theM_overrider
            ) {
            return aMod_definer(
                theM_callbacker,
                theM_overrider
            );
        });
    }


}());

