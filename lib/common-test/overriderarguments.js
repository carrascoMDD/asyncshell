'use strict';

/*
 overriderarguments.js
 Creado 201504212124
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

    var aMod_definer = function( theM_commandlineargumentsconstants,
                                 theM_commandline) {


        var ModuleName     = "overriderarguments";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}




        var aTestName = null;
        var aTestSpec = null;



        var someOverrides     = [ ];


        var aCmdLineArguments = theM_commandline.fCmdLineArguments();
        if( aCmdLineArguments) {

            var someParameters = aCmdLineArguments[ theM_commandline.ARGUMENTSRESULTKEY_PARAMETERS];
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



            var someCmdLineArgumentKeys = Object.keys( aCmdLineArguments);
            if( someCmdLineArgumentKeys) {

                var aNumCmdLineArgumentKeys = someCmdLineArgumentKeys.length;
                if( aNumCmdLineArgumentKeys) {

                    for( var aCmdLineArgumentKeyIdx= 0; aCmdLineArgumentKeyIdx < aNumCmdLineArgumentKeys; aCmdLineArgumentKeyIdx++) {

                        var aCmdLineArgumentKey = someCmdLineArgumentKeys[ aCmdLineArgumentKeyIdx];
                        if( aCmdLineArgumentKey) {

                            if( ( aCmdLineArgumentKey.indexOf( theM_commandlineargumentsconstants.PARMKEYS_OVERRIDERARGUMENTSPREFIX) == 0)
                                && ( aCmdLineArgumentKey.length > theM_commandlineargumentsconstants.PARMKEYS_OVERRIDERARGUMENTSPREFIX.length)) {

                                var aVariationFullName = aCmdLineArgumentKey.substring( theM_commandlineargumentsconstants.PARMKEYS_OVERRIDERARGUMENTSPREFIX.length);
                                if( aVariationFullName) {

                                    var anOverrideValueStr = aCmdLineArguments[ aCmdLineArgumentKey];
                                    if( anOverrideValueStr) {

                                        someOverrides.push( {
                                            "name": aVariationFullName,
                                            "value":  anOverrideValueStr
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }





        var aTestNameToRun = aTestName;
        var anOptionsFromCommandLine = "";

        var aNumOverrides = someOverrides.length;
        if( aNumOverrides) {

            for( var anOverrideIdx= 0; anOverrideIdx < aNumOverrides; anOverrideIdx++) {

                var anOverride = someOverrides[ anOverrideIdx];
                if( anOverride) {

                    var anOverridenVariationFullName = anOverride[ "name"];
                    if( anOverridenVariationFullName) {

                        var anOverridenValue = anOverride[ "value"];
                        if( anOverridenValue) {

                            if( anOptionsFromCommandLine) {
                                anOptionsFromCommandLine += " ";
                            }
                            anOptionsFromCommandLine += ( "--"
                                + theM_commandlineargumentsconstants.PARMKEYS_OVERRIDERARGUMENTSPREFIX
                                + anOverridenVariationFullName
                                + "="
                                + anOverridenValue
                                );
                        }
                    }
                }
            }
        }






        var aHasOverrides = someOverrides.length > 0;

        var anOverriderArguments = {
            "testName":     aTestNameToRun,
            "testSpec":     aTestSpec,
            "optionsStr":   anOptionsFromCommandLine,
            "overrides":    someOverrides,
            "hasOverrides": aHasOverrides
        };
        if( anOverriderArguments){}/* CQT */


        var fOverriderArguments_fAsLogObject = function() {
            return this;
        };

        anOverriderArguments.fAsLogObject = fOverriderArguments_fAsLogObject.bind( anOverriderArguments);





        return anOverriderArguments;
    };


    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_commandlineargumentsconstants = require('./commandlinearguments-constants');
            var aM_commandline                   = require('../infrasvcs/commandline/commandline');

            return aMod_definer(
                aM_commandlineargumentsconstants,
                aM_commandline
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./commandlinearguments-constants",
            "../infrasvcs/commandline/commandline"
        ], function (
            theM_commandlineargumentsconstants,
            theM_commandline
        ) {
            return aMod_definer(
                theM_commandlineargumentsconstants,
                theM_commandline
            );
        });
    }

})();

