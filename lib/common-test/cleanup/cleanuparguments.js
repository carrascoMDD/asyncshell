'use strict';

/*
 cleanuparguments.js
 Creado 201504201331
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


        var ModuleName     = "cleanuparguments";
        var ModulePackages = "common-test/cleanup";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}




        var aTestName = null;
        var aTestSpec = null;


        var aTestCleanUpAll  = false;
        var aTestCleanUpFile = null;


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




            var aNumParmKeys_TestCleanUpAll = theM_commandlineargumentsconstants.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPALL.length;
            for( var aParmKeyIdx_TestCleanUpAll=0; aParmKeyIdx_TestCleanUpAll < aNumParmKeys_TestCleanUpAll; aParmKeyIdx_TestCleanUpAll++) {
                var aParmKey_TestCleanUpAll = theM_commandlineargumentsconstants.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPALL[ aParmKeyIdx_TestCleanUpAll];
                if( aParmKey_TestCleanUpAll) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_TestCleanUpAll)) {
                        aTestCleanUpAll = true;
                    }
                }
            }


            var aNumParmKeys_TestCleanUpFile = theM_commandlineargumentsconstants.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPFILE.length;
            for( var aParmKeyIdx_TestCleanUpFile=0; aParmKeyIdx_TestCleanUpFile < aNumParmKeys_TestCleanUpFile; aParmKeyIdx_TestCleanUpFile++) {
                var aParmKey_TestCleanUpFile = theM_commandlineargumentsconstants.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPFILE[ aParmKeyIdx_TestCleanUpFile];
                if( aParmKey_TestCleanUpFile) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_TestCleanUpFile)) {
                        var aParmValue_TestCleanUpFile = aCmdLineArguments[ aParmKey_TestCleanUpFile];
                        if( aParmValue_TestCleanUpFile) {
                            aTestCleanUpFile = aParmValue_TestCleanUpFile;
                        }
                    }
                }
            }

        }



        var aToBeCleanedUp = false;
        
        var aTestNameToRun = aTestName;
        var anOptionsFromCommandLine = "";
        if( aTestCleanUpAll || ( aTestCleanUpFile && aTestCleanUpFile.length)) {

            aToBeCleanedUp = true;
            
            if( aTestCleanUpAll) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPALL[ theM_commandlineargumentsconstants.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPALL.length - 1]);
            }


            if( aTestCleanUpFile && aTestCleanUpFile.length) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPFILE[ theM_commandlineargumentsconstants.PARMKEYS_CLEANUPARGUMENTS.PARMKEYS_TESTCLEANUPFILE.length - 1] + "="+ aTestCleanUpFile);
            }
        }



        var aCleanUpArguments = {
            "testName":    aTestNameToRun,
            "optionsStr":  anOptionsFromCommandLine,
            "testSpec":    aTestSpec,
            "toBeCleanedUp":      aToBeCleanedUp,
            "testCleanUpAll":  aTestCleanUpAll,
            "testCleanUpFile": aTestCleanUpFile
        };
        if( aCleanUpArguments){}/* CQT */


        var fCleanUpOptions_fAsLogObject = function() {
            return this;
        };

        aCleanUpArguments.fAsLogObject = fCleanUpOptions_fAsLogObject.bind( aCleanUpArguments);






        return aCleanUpArguments;
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

