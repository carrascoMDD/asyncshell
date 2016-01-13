'use strict';

/*
 callbacker.js
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
    var aMod_definer = function( theM_callbackerwooverrides,
                                 theM_releasingconstants,
                                 theM_cleanupconstants,
                                 theM_housekeepconstants,
                                 theM_housekeeputils,
                                 theM_sentinels,
                                 theM_overrider) {

        var ModuleName     = "callbacker";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleOverrides = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.ANNOTATECALLBACKS          = true;

            theToInit.RECORDNEWCALLBACKS         = true;
            theToInit.RECORDCALLBACKINVOCATIONS  = true;
            theToInit.RECORDCALLBACKARGS         = true;

            theToInit.LOOPOVERPARENTCALLBACKS     = true;
            theToInit.LOOPOVERPARENTCALLBACKS_ANY = true;
            theToInit.LOOPOVERPARENTCALLBACKS_ALL = true;

            theToInit.LOGRECEIVEDBYMETHODNAMES    = true;
        };




        var someOverrides = { };
        pgInitWithModuleOverrides( someOverrides);


        theM_overrider.pgOverrideModuleVariations( ModuleFullName, someOverrides);



        var aModule = theM_callbackerwooverrides(
            theM_releasingconstants,
            theM_cleanupconstants,
            theM_housekeepconstants,
            theM_housekeeputils,
            theM_sentinels,
            someOverrides);
        if( aModule){}/* CQT */


        return aModule;

    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {


            var aM_callbackerwooverrides = require('./callbackerwooverrides');
            var aM_releasingconstants    = require('./releasing/releasing-constants');
            var aM_cleanupconstants      = require('./cleanup/cleanup-constants');
            var aM_housekeepconstants    = require('./housekeep/housekeep-constants');
            var aM_housekeeputils        = require('./housekeep/housekeep-utils');
            var aM_sentinels             = require('./sentinels');
            var aM_overrider             = require('./overrider');

            return aMod_definer(
                aM_callbackerwooverrides,
                aM_releasingconstants,
                aM_cleanupconstants,
                aM_housekeepconstants,
                aM_housekeeputils,
                aM_sentinels,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( [
            "./callbackerwooverrides",
            "./releasing/releasing-constants",
            "./cleanup/cleanup-constants",
            "./housekeep/housekeep-constants",
            "./housekeep/housekeep-utils",
            "./sentinels",
            "./overrider"
        ], function (
                theM_callbackerwooverrides,
                theM_releasingconstants,
                theM_cleanupconstants,
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_sentinels,
                theM_overrider
            ) {
            return aMod_definer(
                theM_callbackerwooverrides,
                theM_releasingconstants,
                theM_cleanupconstants,
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_sentinels,
                theM_overrider
            );
        });
    }


}());

