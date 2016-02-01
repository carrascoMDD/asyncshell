'use strict';

/*
 shared-launcher-identifier.js
 Created 201504071504
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


(function() {

    var aMod_definer = function( theM_identifier) {


        var ModuleName     = "shared-launcher-identifier";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var SHAREDLAUNCHERIDENTIFIERID = "ShLaId";


        var gSharedLauncherIdentifier = null;




        var fGetOrCreateSharedLauncherIdentifier = function( theConfiguration) {

            if( !gSharedLauncherIdentifier) {

                var aConfiguration = theConfiguration;
                if( !aConfiguration) {
                    aConfiguration = {};
                }

                gSharedLauncherIdentifier = new theM_identifier.IdentifierTest_Constructor( aConfiguration, SHAREDLAUNCHERIDENTIFIERID);
            }

            return gSharedLauncherIdentifier;
        };






        var aModule = {
            "fGetOrCreateSharedLauncherIdentifier": fGetOrCreateSharedLauncherIdentifier
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;



        return aModule;
    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_identifier        = require('../identifier-test');

            return aMod_definer( aM_identifier);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../identifier-test"], function ( theM_identifier) {
            return aMod_definer( theM_identifier);
        });
    }

})();

