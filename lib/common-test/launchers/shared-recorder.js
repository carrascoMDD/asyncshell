'use strict';

/*
 shared-recorder.js
 Created 201408240545
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

    var aMod_definer = function( theM_shared_identifier, theM_recorder) {



        var ModuleName     = "shared-recorder";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var gSharedRecorder = null;




        var fGetOrCreateSharedRecorder = function( theIdentifier, theConfiguration) {

            if( !gSharedRecorder) {

                var anIdentifier = theIdentifier;
                if( !anIdentifier) {
                    anIdentifier = theM_shared_identifier.fGetOrCreateSharedIdentifier();
                }

                var aConfiguration = theConfiguration;
                if( !aConfiguration) {
                    aConfiguration = {};
                }

                gSharedRecorder = new theM_recorder.RecorderTest_Constructor( "gSharedRecorder", aConfiguration, anIdentifier);
            }

            return gSharedRecorder;
        };





        var aModule = {
            "fGetOrCreateSharedRecorder": fGetOrCreateSharedRecorder
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;



        return aModule;
    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_shared_identifier  = require('./shared-identifier');
            var aM_recorder      = require('../recorder-test');

            return aMod_definer( aM_shared_identifier, aM_recorder);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "shared-identifier",
            "../recorder-test"
        ], function ( theM_shared_identifier, theM_recorder) {
            return aMod_definer( theM_shared_identifier, theM_recorder);
        });
    }

})();

