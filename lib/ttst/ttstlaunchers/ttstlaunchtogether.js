'use strict';

/*
 ttstlaunchtogether.js
 Created 201408140155
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

    var aMod_definer = function( theM_ttstlaunchermany, theM_commandline) {


        var ModuleName     = "ttstlaunchtogether";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var aTestName = null;
        var aTestSpec = null;

        var someParameters = theM_commandline.fCmdLineParameters();

        if( someParameters) {
            var aNumParameters = someParameters.length;
            if( aNumParameters > 0) {
                if( aNumParameters > 1) {
                    aTestName = someParameters[ 0];
                    aTestSpec = someParameters[ 1];
                }
                else {
                    aTestName = someParameters[ 0];
                    aTestSpec = someParameters[ 0];
                }
            }
        }

        return theM_ttstlaunchermany.fDefineTtstLauncherMany_andRunIfFirst( aTestName, aTestSpec, null, null );

    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ttstlaunchermany  = require('./ttstlauncher-many');

            var aM_commandline = require('../../infrasvcs/commandline/commandline');

            return aMod_definer( aM_ttstlaunchermany, aM_commandline);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./ttstlauncher-many",
            "../../infrasvcs/commandline/commandline"
        ], function (
            theM_ttstlaunchermany, theM_commandline) {
            return aMod_definer( theM_ttstlaunchermany, theM_commandline);
        });
    }

})();

