'use strict';

/*
 housekeeparguments.js
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
                                 theM_housekeepconstants,
                                 theM_commandline) {


        var ModuleName     = "housekeeparguments";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}




        var aTestName = null;
        var aTestSpec = null;

        var aMaxHeapUsed       = 0;
        var aMinHeapAvailable  = 0;

        var aTestHousekeepingFile = null;
        var aForceBits            = null;

        var aThrashingHeapAvailable = null;

        var aIgnoreThrashingMillis  = null;
        var anIncrementalMode       = null;

        var someThrashingMillis = { };

        


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


            var aNumParmKeys_MaxHeapUsed = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MAXHEAPUSED.length;
            for( var aParmKeyIdx_MaxHeapUsed=0; aParmKeyIdx_MaxHeapUsed < aNumParmKeys_MaxHeapUsed; aParmKeyIdx_MaxHeapUsed++) {
                var aParmKey_MaxHeapUsed = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MAXHEAPUSED[ aParmKeyIdx_MaxHeapUsed];
                if( aParmKey_MaxHeapUsed) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_MaxHeapUsed)) {
                        var aParmValue_MaxHeapUsed = aCmdLineArguments[ aParmKey_MaxHeapUsed];
                        if( aParmValue_MaxHeapUsed) {
                            if( typeof aParmValue_MaxHeapUsed == "number") {
                                if( aParmValue_MaxHeapUsed > 0) {
                                    aMaxHeapUsed = aParmValue_MaxHeapUsed;
                                }
                            }
                        }
                    }
                }
            }


            var aNumParmKeys_MinHeapAvailable = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MINHEAPAVAILABLE.length;
            for( var aParmKeyIdx_MinHeapAvailable=0; aParmKeyIdx_MinHeapAvailable < aNumParmKeys_MinHeapAvailable; aParmKeyIdx_MinHeapAvailable++) {
                var aParmKey_MinHeapAvailable = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MINHEAPAVAILABLE[ aParmKeyIdx_MinHeapAvailable];
                if( aParmKey_MinHeapAvailable) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_MinHeapAvailable)) {
                        var aParmValue_MinHeapAvailable = aCmdLineArguments[ aParmKey_MinHeapAvailable];
                        if( aParmValue_MinHeapAvailable) {
                            if( typeof aParmValue_MinHeapAvailable == "number") {
                                if( aParmValue_MinHeapAvailable > 0) {
                                    aMinHeapAvailable = aParmValue_MinHeapAvailable;
                                }
                            }
                        }
                    }
                }
            }


            var aNumParmKeys_TestHousekeepingFile = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_TESTHOUSEKEEPINGFILE.length;
            for( var aParmKeyIdx_TestHousekeepingFile=0; aParmKeyIdx_TestHousekeepingFile < aNumParmKeys_TestHousekeepingFile; aParmKeyIdx_TestHousekeepingFile++) {
                var aParmKey_TestHousekeepingFile = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_TESTHOUSEKEEPINGFILE[ aParmKeyIdx_TestHousekeepingFile];
                if( aParmKey_TestHousekeepingFile) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_TestHousekeepingFile)) {
                        var aParmValue_TestHousekeepingFile = aCmdLineArguments[ aParmKey_TestHousekeepingFile];
                        if( aParmValue_TestHousekeepingFile) {
                            aTestHousekeepingFile = aParmValue_TestHousekeepingFile;
                        }
                    }
                }
            }


            var aNumParmKeys_ForceBits = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_HOUSEKEEPFORCEBITS.length;
            for( var aParmKeyIdx_ForceBits=0; aParmKeyIdx_ForceBits < aNumParmKeys_ForceBits; aParmKeyIdx_ForceBits++) {
                var aParmKey_ForceBits = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_HOUSEKEEPFORCEBITS[ aParmKeyIdx_ForceBits];
                if( aParmKey_ForceBits) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_ForceBits)) {
                        var aParmValue_ForceBits = aCmdLineArguments[ aParmKey_ForceBits];
                        if( aParmValue_ForceBits) {
                            if( typeof aParmValue_ForceBits == "number") {
                                if( aParmValue_ForceBits > 1) {
                                    aForceBits = aParmValue_ForceBits;
                                }
                            }
                        }
                    }
                }
            }



            var aNumParmKeys_IncrementalMode = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_INCREMENTALMODE.length;
            for( var aParmKeyIdx_IncrementalMode=0; aParmKeyIdx_IncrementalMode < aNumParmKeys_IncrementalMode; aParmKeyIdx_IncrementalMode++) {
                var aParmKey_IncrementalMode = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_INCREMENTALMODE[ aParmKeyIdx_IncrementalMode];
                if( aParmKey_IncrementalMode) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_IncrementalMode)) {
                        var aParmValue_IncrementalMode = aCmdLineArguments[ aParmKey_IncrementalMode];
                        if( aParmValue_IncrementalMode) {
                            if( typeof aParmValue_IncrementalMode == "boolean") {
                                anIncrementalMode = aParmValue_IncrementalMode;
                            }
                            else {
                                if( typeof aParmValue_IncrementalMode == "string") {
                                    anIncrementalMode = ( aParmValue_IncrementalMode == "true");
                                }
                            }
                        }
                    }
                }
            }



            var aNumParmKeys_ThrashingHeapAvailable = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_THRASHINGHEAPAVAILABLE.length;
            for( var aParmKeyIdx_ThrashingHeapAvailable=0; aParmKeyIdx_ThrashingHeapAvailable < aNumParmKeys_ThrashingHeapAvailable; aParmKeyIdx_ThrashingHeapAvailable++) {
                var aParmKey_ThrashingHeapAvailable = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_THRASHINGHEAPAVAILABLE[ aParmKeyIdx_ThrashingHeapAvailable];
                if( aParmKey_ThrashingHeapAvailable) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_ThrashingHeapAvailable)) {
                        var aParmValue_ThrashingHeapAvailable = aCmdLineArguments[ aParmKey_ThrashingHeapAvailable];
                        if( aParmValue_ThrashingHeapAvailable) {
                            if( typeof aParmValue_ThrashingHeapAvailable == "number") {
                                if( aParmValue_ThrashingHeapAvailable > 0) {
                                    aThrashingHeapAvailable = aParmValue_ThrashingHeapAvailable;
                                }
                            }
                        }
                    }
                }
            }


            

            var aNumParmKeys_IgnoreThrashingMillis = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_IGNORETHRASHINGMILLIS.length;
            for( var aParmKeyIdx_IgnoreThrashingMillis=0; aParmKeyIdx_IgnoreThrashingMillis < aNumParmKeys_IgnoreThrashingMillis; aParmKeyIdx_IgnoreThrashingMillis++) {
                var aParmKey_IgnoreThrashingMillis = theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_IGNORETHRASHINGMILLIS[ aParmKeyIdx_IgnoreThrashingMillis];
                if( aParmKey_IgnoreThrashingMillis) {
                    if( aCmdLineArguments.hasOwnProperty( aParmKey_IgnoreThrashingMillis)) {
                        var aParmValue_IgnoreThrashingMillis = aCmdLineArguments[ aParmKey_IgnoreThrashingMillis];
                        if( aParmValue_IgnoreThrashingMillis) {
                            if( typeof aParmValue_IgnoreThrashingMillis == "boolean") {
                                aIgnoreThrashingMillis = aParmValue_IgnoreThrashingMillis;
                            }
                            else {
                                if( typeof aParmValue_IgnoreThrashingMillis == "string") {
                                    aIgnoreThrashingMillis = ( aParmValue_IgnoreThrashingMillis == "true");
                                }
                            }
                        }
                    }
                }
            }



            var someCmdLineArgumentKeys = Object.keys( aCmdLineArguments);
            if( someCmdLineArgumentKeys) {

                var aNumCmdLineArgumentKeys = someCmdLineArgumentKeys.length;
                if( aNumCmdLineArgumentKeys) {

                    for( var aCmdLineArgumentKeyIdx= 0; aCmdLineArgumentKeyIdx < aNumCmdLineArgumentKeys; aCmdLineArgumentKeyIdx++) {

                        var aCmdLineArgumentKey = someCmdLineArgumentKeys[ aCmdLineArgumentKeyIdx];
                        if( !aCmdLineArgumentKey) {
                            continue;
                        }

                        if(   !( aCmdLineArgumentKey.indexOf( theM_commandlineargumentsconstants.PARMKEYS_THRASHINGMILLIS_BYWHATTOCLEANPREFIX) == 0)
                            || ( aCmdLineArgumentKey.length <= theM_commandlineargumentsconstants.PARMKEYS_THRASHINGMILLIS_BYWHATTOCLEANPREFIX.length)) {
                            continue;
                        }

                        var aThrashingMillisWhatToClean = aCmdLineArgumentKey.substring( theM_commandlineargumentsconstants.PARMKEYS_THRASHINGMILLIS_BYWHATTOCLEANPREFIX.length);
                        if( !aThrashingMillisWhatToClean) {
                            continue;
                        }

                        if( theM_housekeepconstants.WHATTOCLEAN_ALL.indexOf( aThrashingMillisWhatToClean) < 0) {
                            continue;
                        }

                        var aThrashingMillisStr = aCmdLineArguments[ aCmdLineArgumentKey];
                        if( !( ( typeof aThrashingMillisStr == "string") || ( typeof aThrashingMillisStr == "number"))) {
                            continue;
                        }

                        var aThrashingMillis = null;

                        if( typeof aThrashingMillisStr == "number") {
                            aThrashingMillis = aThrashingMillisStr;
                        }
                        else {
                            if( aThrashingMillisStr.length < 1) {
                                continue;
                            }
                            try {
                                aThrashingMillis = parseInt( aThrashingMillisStr);
                            }
                            catch( anException) {}
                        }
                        
                        if( aThrashingMillis == null) {
                            continue;
                        }

                        someThrashingMillis[ aThrashingMillisWhatToClean] = aThrashingMillis;

                    }
                }
            }
        }


        if( !Object.keys( someThrashingMillis).length) {
            someThrashingMillis = null;
        }



        var aHousekept = false;
        
        var aTestNameToRun = aTestName;
        var anOptionsFromCommandLine = "";
        if(    aMaxHeapUsed
            || aMinHeapAvailable
            || ( aTestHousekeepingFile && aTestHousekeepingFile.length)
            || aForceBits
            || ( typeof aThrashingHeapAvailable == "number")
            || ( typeof aIgnoreThrashingMillis  == "boolean")
            || ( someThrashingMillis && Object.keys( someThrashingMillis).length)) {

            aHousekept = true;
            

            if( aMaxHeapUsed && ( aMaxHeapUsed > 0)) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MAXHEAPUSED[ theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MAXHEAPUSED.length - 1] + "="+ aMaxHeapUsed);
            }


            if( aMinHeapAvailable && ( aMinHeapAvailable > 0)) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MAXHEAPUSED[ theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_MINHEAPAVAILABLE.length - 1] + "="+ aMinHeapAvailable);
            }


            if( aTestHousekeepingFile && aTestHousekeepingFile.length) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_TESTHOUSEKEEPINGFILE[ theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_TESTHOUSEKEEPINGFILE.length - 1] + "="+ aTestHousekeepingFile);
            }


            if( aForceBits && ( aForceBits > 0)) {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_HOUSEKEEPFORCEBITS[ theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_HOUSEKEEPFORCEBITS.length - 1] + "="+ aForceBits);
            }


            if( typeof anIncrementalMode == "boolean") {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_INCREMENTALMODE[ theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_INCREMENTALMODE.length - 1] + "="+ anIncrementalMode);
            }


            if( typeof aThrashingHeapAvailable == "number") {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_THRASHINGHEAPAVAILABLE[ theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_THRASHINGHEAPAVAILABLE.length - 1] + "="+ aThrashingHeapAvailable);
            }


            if( typeof aIgnoreThrashingMillis == "boolean") {
                if( anOptionsFromCommandLine) {
                    anOptionsFromCommandLine += " ";
                }
                anOptionsFromCommandLine += ( "--" + theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_IGNORETHRASHINGMILLIS[ theM_commandlineargumentsconstants.PARMKEYS_HOUSEKEEPARGUMENTS.PARMKEYS_IGNORETHRASHINGMILLIS.length - 1] + "="+ aIgnoreThrashingMillis);
            }



            if( someThrashingMillis) {
                var someThrashingMillisKeys = Object.keys( someThrashingMillis);
                if( someThrashingMillisKeys) {
                    var aNumThrashingMillisKeys = someThrashingMillisKeys.length;
                    if( aNumThrashingMillisKeys) {

                        for( var aThrashingMillisKeyIdx= 0; aThrashingMillisKeyIdx < aNumThrashingMillisKeys; aThrashingMillisKeyIdx++) {

                            var aThrashingMillisKey = someThrashingMillisKeys[ aThrashingMillisKeyIdx];
                            if( aThrashingMillisKey) {

                                var aThrashingMillisValue = someThrashingMillisKeys[ aThrashingMillisKey];
                                if( typeof aThrashingMillisValue == "number") {

                                    if( anOptionsFromCommandLine) {
                                        anOptionsFromCommandLine += " ";
                                    }
                                    anOptionsFromCommandLine += ( "--"
                                        + theM_commandlineargumentsconstants.PARMKEYS_THRASHINGMILLIS_BYWHATTOCLEANPREFIX
                                        + aThrashingMillisKey
                                        + "="
                                        + aThrashingMillisValue
                                        );
                                }
                            }
                        }
                    }
                }
            }


        }



        var aHousekeepArguments = {
            "testName":    aTestNameToRun,
            "optionsStr":  anOptionsFromCommandLine,
            "testSpec":    aTestSpec,
            "housekept":   aHousekept,
            "maxHeapUsed":            aMaxHeapUsed,
            "minHeapAvailable":       aMinHeapAvailable,
            "testHousekeepingFile":   aTestHousekeepingFile,
            "incrementalMode":        anIncrementalMode,
            "forceBits":              aForceBits,
            "thrashingHeapAvailable": aThrashingHeapAvailable,
            "ignoreThrashingMillis":  aIgnoreThrashingMillis,
            "thrashingMillis":        someThrashingMillis
        };
        if( aHousekeepArguments){}/* CQT */


        var fHousekeepOptions_fAsLogObject = function() {
            return this;
        };

        aHousekeepArguments.fAsLogObject = fHousekeepOptions_fAsLogObject.bind( aHousekeepArguments);






        return aHousekeepArguments;
    };


    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_commandlineargumentsconstants = require('../commandlinearguments-constants');
            var aM_housekeepconstants            = require('./housekeep-constants');
            var aM_commandline                   = require('../../infrasvcs/commandline/commandline');

            return aMod_definer(
                aM_commandlineargumentsconstants,
                aM_housekeepconstants,
                aM_commandline
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../commandlinearguments-constants",
            "./housekeep-constants",
            "../../infrasvcs/commandline/commandline"
        ], function (
            theM_commandlineargumentsconstants,
            theM_housekeepconstants,
            theM_commandline
        ) {
            return aMod_definer(
                theM_commandlineargumentsconstants,
                theM_housekeepconstants,
                theM_commandline
            );
        });
    }

})();

