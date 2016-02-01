'use strict';

/*
 releasingarguments.js
 Created 201504100954
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


        var ModuleName     = "releasingarguments";
        var ModulePackages = "common-test/releasing";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}





        var aTestName = null;
        var aTestSpec = null;


        var aTestReleasingAll  = false;
        var aTestReleasingFile = null;


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




            var aNumParmKeys_TestReleasingAll = theM_commandlineargumentsconstants.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGALL.length;
            for( var aParmKeyIdx_TestReleasingAll=0; aParmKeyIdx_TestReleasingAll < aNumParmKeys_TestReleasingAll; aParmKeyIdx_TestReleasingAll++) {
                var aParmKey_TestReleasingAll = theM_commandlineargumentsconstants.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGALL[ aParmKeyIdx_TestReleasingAll];
                if( aParmKey_TestReleasingAll) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_TestReleasingAll)) {
                        aTestReleasingAll = true;
                    }
                }
            }


            var aNumParmKeys_TestReleasingFile = theM_commandlineargumentsconstants.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGFILE.length;
            for( var aParmKeyIdx_TestReleasingFile=0; aParmKeyIdx_TestReleasingFile < aNumParmKeys_TestReleasingFile; aParmKeyIdx_TestReleasingFile++) {
                var aParmKey_TestReleasingFile = theM_commandlineargumentsconstants.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGFILE[ aParmKeyIdx_TestReleasingFile];
                if( aParmKey_TestReleasingFile) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_TestReleasingFile)) {
                        var aParmValue_TestReleasingFile = aCmdLineArguments[ aParmKey_TestReleasingFile];
                        if( aParmValue_TestReleasingFile) {
                            aTestReleasingFile = aParmValue_TestReleasingFile;
                        }
                    }
                }
            }

        }



        var aToBeReleased = false;
        
        var aTestNameToRun = aTestName;
        var anOptionsFromCommandLine = "";
        if( aTestReleasingAll || ( aTestReleasingFile && aTestReleasingFile.length)) {

            aToBeReleased = true;
            
            if( aTestReleasingAll) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGALL[ theM_commandlineargumentsconstants.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGALL.length - 1]);
            }


            if( aTestReleasingFile && aTestReleasingFile.length) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGFILE[ theM_commandlineargumentsconstants.PARMKEYS_RELEASINGARGUMENTS.PARMKEYS_TESTRELEASINGFILE.length - 1] + "="+ aTestReleasingFile);
            }
        }



        var aReleasingArguments = {
            "testName":    aTestNameToRun,
            "optionsStr":  anOptionsFromCommandLine,
            "testSpec":    aTestSpec,
            "toBeReleased":      aToBeReleased,
            "testReleasingAll":  aTestReleasingAll,
            "testReleasingFile": aTestReleasingFile
        };
        if( aReleasingArguments){}/* CQT */


        var fReleasingOptions_fAsLogObject = function() {
            return this;
        };

        aReleasingArguments.fAsLogObject = fReleasingOptions_fAsLogObject.bind( aReleasingArguments);






        return aReleasingArguments;
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

