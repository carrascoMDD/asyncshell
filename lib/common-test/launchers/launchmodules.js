'use strict';

/*
 launchmodules.js
 Creado 201409101529
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


(function() {

    var aMod_definer = function( theM_launchermodules) {


        var ModuleName     = "launchmodules";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}


        var aUsageExample = '  node --max-old-space-size=2000 --expose-gc "./lib/common-tests/launchers/launchmodules.js" "./tests/launchers/launchablemodules.json"  ';
        if( aUsageExample){}/* CQT */


        var someSuppliedParameters = process.argv;
        if( !someSuppliedParameters) {
            return null;
        }

        var aNumParameters = someSuppliedParameters.length;
        if( aNumParameters < 3) {
            return null;
        }

        var aLaunchmodulesSpecPath = someSuppliedParameters[ 2];
        if( aLaunchmodulesSpecPath){}/* CQT */

        return theM_launchermodules.fDefineLauncherModules_andRunIfFirst( ModuleFullName, aLaunchmodulesSpecPath );
    };


    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_launchermodules = require('./launcher-modules');

            return aMod_definer( aM_launchermodules);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./launcher-modules"
        ], function (
                theM_launchermodules
            ) {
            return aMod_definer(
                theM_launchermodules
            );
        });
    }

})();


