
/*
 launchedfromdir.js

 Resolves the full directory from where the project was launched. This module shall be loaded before any sucessful call to process.chdir(directory).

 Created 201408251726
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


if( typeof LAUNCHEDFROMDIR == "undefined") {
    LAUNCHEDFROMDIR = process.cwd();
}



(function () {

    'use strict';

    var aMod_definer = function() {


        var ModuleName     = "launchedfromdir";
        var ModulePackages = "";
        if( ModulePackages){}/* CQT */
        var ModuleFullName = ModuleName;
        if( ModuleFullName){}/* CQT */


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var aModule = LAUNCHEDFROMDIR;
        if( aModule){}/* CQT */

        console.log( ',{ "msg": "launchedfromdir=' + aModule + '" }');

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
