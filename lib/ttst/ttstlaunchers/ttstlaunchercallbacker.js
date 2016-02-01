'use strict';

/*
 ttstlaunchercallbacker.js
 Created 201409201736
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
    var aMod_definer = function( theM_callbacker) {

        var ModuleName     = "ttstlaunchercallbacker";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.ANNOTATETTSTLAUNCHERCALLBACKS      = true;

            theToInit.RECORDNEWTTSTLAUNCHERCALLBACKS    = true;
            theToInit.RECORDCALLBACKINVOCATIONS = true;
            theToInit.RECORDTTSTLAUNCHERCALLBACKARGS    = true;


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








        var fChainNewTtstLauncherCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theTtstLauncher, theMethodName) {
            if( !this.ANNOTATETTSTLAUNCHERCALLBACKS) {
                return theNewCallback;
            }

            return theM_callbacker.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, theTtstLauncher, theMethodName);
        };











        var pReceivedTtstLauncherCallbackArg = function( theCallback, theTtstLauncher, theMethodName) {
            if( !this.ANNOTATETTSTLAUNCHERCALLBACKS) {
                return;
            }

            if( !this.RECORDTTSTLAUNCHERCALLBACKARGS) {
                return;
            }

            if( !theCallback) {
                return;
            }

            theM_callbacker.pReceivedCallbackArg( theCallback, theTtstLauncher, theMethodName);
        };







        var aModule = {
            "ModuleConstants": ModuleConstants,
            "fChainNewTtstLauncherCallbackForCallback": fChainNewTtstLauncherCallbackForCallback,
            "pReceivedTtstLauncherCallbackArg":         pReceivedTtstLauncherCallbackArg
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

            var aM_callbacker = require('../../common-test/callbacker');

            return aMod_definer( aM_callbacker);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( [ "../../common-test/callbacker"], function ( theM_callbacker) {
            return aMod_definer( theM_callbacker);
        });
    }


}());

