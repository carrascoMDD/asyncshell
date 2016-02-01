'use strict';

/*
 asyncshellrootdir.js

 Resolves the full filesystem path of the root of asyncshell.
 When asyncshell is used stand-alone (i.e. not as a dependency of other project) it resolves to the base directory of the project.
 When asyncshell is a dependency of other project installed in the node_modules it resolves to the node_modules/asyncshell directory.

 Created 201601181746
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


        var ModuleName     = "asyncshellrootdir";
        var ModulePackages = "";
        if( ModulePackages){}/* CQT */
        var ModuleFullName = ModuleName;
        if( ModuleFullName){}/* CQT */


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}


        var aModule = __dirname;
        if( aModule){}/* CQT */

        console.log( ',{ "msg": "asyncshellrootdir=' + aModule + '" }');

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

