'use strict';

/*
 launcharguents.js
 Created 201504050542
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

    var aMod_definer = function( theM_commandlineargumentsconstants,
                                 theM_commandline) {


        var ModuleName     = "launcharguents";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}





        var aTestName = null;
        var aTestSpec = null;

        var aRandom        = false;
        var aFlat          = false;
        var aVerbosePlan   = false;
        var aDryRun        = false;
        var aNumRepeats    = 1;


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


            var aNumParmKeys_Random = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_RANDOM.length;
            for( var aParmKeyIdx_Random=0; aParmKeyIdx_Random < aNumParmKeys_Random; aParmKeyIdx_Random++) {
                var aParmKey_Random = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_RANDOM[ aParmKeyIdx_Random];
                if( aParmKey_Random) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_Random)) {
                        var aParmValue_Random = aCmdLineArguments[ aParmKey_Random];
                        if( aParmValue_Random) {
                            aRandom = true;
                        }
                    }
                }
            }

            var aNumParmKeys_Flat = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_FLAT.length;
            for( var aParmKeyIdx_Flat=0; aParmKeyIdx_Flat < aNumParmKeys_Flat; aParmKeyIdx_Flat++) {
                var aParmKey_Flat = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_FLAT[ aParmKeyIdx_Flat];
                if( aParmKey_Flat) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_Flat)) {
                        var aParmValue_Flat = aCmdLineArguments[ aParmKey_Flat];
                        if( aParmValue_Flat) {
                            aFlat = true;
                        }
                    }
                }
            }


            var aNumParmKeys_VerbosePlan = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_VERBOSEPLAN.length;
            for( var aParmKeyIdx_VerbosePlan=0; aParmKeyIdx_VerbosePlan < aNumParmKeys_VerbosePlan; aParmKeyIdx_VerbosePlan++) {
                var aParmKey_VerbosePlan = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_VERBOSEPLAN[ aParmKeyIdx_VerbosePlan];
                if( aParmKey_VerbosePlan) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_VerbosePlan)) {
                        var aParmValue_VerbosePlan = aCmdLineArguments[ aParmKey_VerbosePlan];
                        if( aParmValue_VerbosePlan) {
                            aVerbosePlan = true;
                        }
                    }
                }
            }


            var aNumParmKeys_DryRun = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_DRYRUN.length;
            for( var aParmKeyIdx_DryRun=0; aParmKeyIdx_DryRun < aNumParmKeys_DryRun; aParmKeyIdx_DryRun++) {
                var aParmKey_DryRun = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_DRYRUN[ aParmKeyIdx_DryRun];
                if( aParmKey_DryRun) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_DryRun)) {
                        var aParmValue_DryRun = aCmdLineArguments[ aParmKey_DryRun];
                        if( aParmValue_DryRun) {
                            aDryRun = true;
                        }
                    }
                }
            }

            


            var aNumParmKeys_NumRepeats = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_NUMREPEATS.length;
            for( var aParmKeyIdx_NumRepeats=0; aParmKeyIdx_NumRepeats < aNumParmKeys_NumRepeats; aParmKeyIdx_NumRepeats++) {
                var aParmKey_NumRepeats = theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_NUMREPEATS[ aParmKeyIdx_NumRepeats];
                if( aParmKey_NumRepeats) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_NumRepeats)) {
                        var aParmValue_NumRepeats = aCmdLineArguments[ aParmKey_NumRepeats];
                        if( aParmValue_NumRepeats) {
                            if( typeof aParmValue_NumRepeats == "number") {
                                if( aParmValue_NumRepeats > 1) {
                                    aNumRepeats = aParmValue_NumRepeats;
                                }
                            }
                        }
                    }
                }
            }
        }



        var aSynthetic = false;
        
        var aTestNameToRun = aTestName;
        var anOptionsFromCommandLine = "";
        if( aRandom || aFlat || aVerbosePlan || aDryRun || ( aNumRepeats && ( aNumRepeats > 1))) {

            aSynthetic = true;
            
            if( aRandom) {
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_RANDOM[ theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_RANDOM.length - 1]);
            }

            if( aFlat) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_FLAT[ theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_FLAT.length - 1]);
            }

            if( aVerbosePlan) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_VERBOSEPLAN[ theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_VERBOSEPLAN.length - 1]);
            }

            if( aDryRun) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_DRYRUN[ theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_DRYRUN.length - 1]);
            }

            if( aNumRepeats && ( aNumRepeats > 1)) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_NUMREPEATS[ theM_commandlineargumentsconstants.PARMKEYS_LAUNCHARGUMENTS.PARMKEYS_NUMREPEATS.length - 1] + "="+ aNumRepeats);
            }
        }



        var aLaunchArguments = {
            "testName":    aTestNameToRun,
            "optionsStr":  anOptionsFromCommandLine,
            "testSpec":    aTestSpec,
            "synthetic":   aSynthetic,
            "random":      aRandom,
            "flat":        aFlat,
            "verbosePlan": aVerbosePlan,
            "dryRun":      aDryRun,
            "numRepeats":  aNumRepeats
        };
        if( aLaunchArguments){}/* CQT */


        return aLaunchArguments;
    };


    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_commandlineargumentsconstants = require('../commandlinearguments-constants');
            var aM_commandline                   = require('../../infrasvcs/commandline/commandline');

            return aMod_definer(
                aM_commandlineargumentsconstants,
                aM_commandline
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../commandlinearguments-constants",
            "../../infrasvcs/commandline/commandline"
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

