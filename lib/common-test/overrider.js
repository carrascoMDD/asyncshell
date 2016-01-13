'use strict';

/*
 overrider.js
 Creado 201409250216
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
    var aMod_definer = function( theM_commandlineargumentsconstants,
                                 theM_overriderarguments,
                                 theM_custom,
                                 theM_overrides) {


        var ModuleName     = "overrider.js";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}




        var MODULENAMESTEPSEPARATOR = "/";



        var LOGOVERRIDESFROMCOMMANDLINE = false;







        var pgOverrideModuleVariations = function( theModuleFullName, theModuleVariations) {
            if( !theModuleFullName) {
                return;
            }

            if( !theModuleVariations) {
                return;
            }


            if( theM_custom && theM_custom.Settings) {
                pgOverrideWithValuesFrom( theModuleFullName, theModuleVariations, theM_custom)
            }


            if( theM_overrides && theM_overrides.Settings) {
                pgOverrideWithValuesFrom( theModuleFullName, theModuleVariations, theM_overrides)
            }


            pgOverrideWithArguments( theModuleFullName, theModuleVariations)
        };








        var pgOverrideWithValuesFrom = function( theModuleFullName, theToOverrride, theOverrideSource) {
            if( !theModuleFullName) {
                return;
            }

            if( !theToOverrride) {
                return;
            }

            if( !theOverrideSource) {
                return;
            }


            var aIgnoreOverrideValue = theOverrideSource.cIgnoreValue;
            if( !aIgnoreOverrideValue) {
                aIgnoreOverrideValue = null;
            }


            var aCurrentOverrides = theOverrideSource.Settings;
            if( !aCurrentOverrides) {
                return;
            }



            var someModuleNameSteps = theModuleFullName.split( MODULENAMESTEPSEPARATOR);
            if( !someModuleNameSteps) {
                return;
            }

            var aNumModuleNameSteps = someModuleNameSteps.length;
            if( !aNumModuleNameSteps) {
                return;
            }

            for( var aModuleNameStepIdx=0; aModuleNameStepIdx < aNumModuleNameSteps; aModuleNameStepIdx++) {

                var aModuleNameStep = someModuleNameSteps[ aModuleNameStepIdx];
                if( !aModuleNameStep) {
                    return;
                }

                if( !aCurrentOverrides.hasOwnProperty( aModuleNameStep)) {
                    return;
                }

                aCurrentOverrides = aCurrentOverrides[ aModuleNameStep];
                if( aCurrentOverrides == null) {
                    return;
                }

                if( !( typeof aCurrentOverrides == "object")) {
                    return;
                }
            }



            if( !( typeof aCurrentOverrides == "object")) {
                return;
            }



            for( var aGlobalName in theToOverrride) {
                if( theToOverrride.hasOwnProperty( aGlobalName)) {

                    if( aCurrentOverrides.hasOwnProperty( aGlobalName)) {

                        var anOverrideValue = aCurrentOverrides[ aGlobalName];

                        if( !aIgnoreOverrideValue || !( anOverrideValue === aIgnoreOverrideValue)) {

                            theToOverrride[ aGlobalName] = anOverrideValue;
                        }
                    }
                }
            }
        };











        var pgOverrideWithArguments = function( theModuleFullName, theToOverrride) {
            if( !theModuleFullName) {
                return;
            }

            if( !theToOverrride) {
                return;
            }

            if( !theM_overriderarguments) {
                return;
            }

            if( !theM_overriderarguments.hasOverrides) {
                return;
            }

            var someOverrides = theM_overriderarguments.overrides;
            if( !someOverrides) {
                return;
            }

            var aNumOverrides = someOverrides.length;
            if( !aNumOverrides) {
                return;
            }

            var aModuleFullNameWithFinalSeparator = theModuleFullName + MODULENAMESTEPSEPARATOR;

            for( var anOverrideIdx= 0; anOverrideIdx < aNumOverrides; anOverrideIdx++) {

                var anOverride = someOverrides[ anOverrideIdx];
                if( anOverride) {

                    var anOverridenVariationFullNameWithSeparators = anOverride[ "name"];
                    if( !anOverridenVariationFullNameWithSeparators) {
                        continue;
                    }

                    if( !( typeof anOverridenVariationFullNameWithSeparators == "string")) {
                        continue;
                    }

                    var anOverridenValue = anOverride[ "value"];
                    if( !anOverridenValue) {
                        continue;
                    }

                    var aRegexp = new RegExp( theM_commandlineargumentsconstants.PARMKEYS_OVERRIDERARGUMENTSVARIATIONPATHSEPARATOR_REGEXP, 'g');

                    var anOverridenVariationFullName = anOverridenVariationFullNameWithSeparators.replace( aRegexp, MODULENAMESTEPSEPARATOR);

                    if( !( anOverridenVariationFullName.indexOf( aModuleFullNameWithFinalSeparator) == 0)) {
                        continue;
                    }

                    if( !( anOverridenVariationFullName.length > aModuleFullNameWithFinalSeparator.length)) {
                        continue;
                    }

                    var anOverridenVariationName = anOverridenVariationFullName.substring( aModuleFullNameWithFinalSeparator.length);
                    if( !anOverridenVariationName) {
                        continue;
                    }

                    theToOverrride[ anOverridenVariationName] = anOverridenValue;

                    if( LOGOVERRIDESFROMCOMMANDLINE) {
                        console.log( "OVERRIDEFROMCOMMANDLINE " + aModuleFullNameWithFinalSeparator + anOverridenVariationName + "=" + anOverridenValue);
                    }
                }
            }
        };








        var aModule = {
            "pgOverrideModuleVariations": pgOverrideModuleVariations
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_commandlineargumentsconstants = require('./commandlinearguments-constants');
            var aM_overriderarguments            = require('./overriderarguments');
            var aM_custom                        = require('../../custom');
            var aM_overrides                     = require('../../overrides');

            return aMod_definer(
                aM_commandlineargumentsconstants,
                aM_overriderarguments,
                aM_custom,
                aM_overrides
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./commandlinearguments-constants",
            "./overriderarguments",
            "../../custom",
            "../../overrides"
        ], function (
            theM_commandlineargumentsconstants,
            theM_overriderarguments,
            theM_custom,
            theM_overrides
        ) {
            return aMod_definer(
                theM_commandlineargumentsconstants,
                theM_overriderarguments,
                theM_custom,
                theM_overrides
            );
        });
    }



}());

