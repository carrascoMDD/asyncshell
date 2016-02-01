'use strict';

/*
 sentinels.js
 Created 201409201736
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

        var ModuleName     = "sentinels";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}


        





        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.HASBEENRELEASED_SINGLETONSENTINEL    = { "HASBEENRELEASED": "HASBEENRELEASED"};
            var fAsLogObject_TestHasBeenReleasedSingletonSentinel = function() { return "HASBEENRELEASED"};
            theToInit.HASBEENRELEASED_SINGLETONSENTINEL.fAsLogObject = fAsLogObject_TestHasBeenReleasedSingletonSentinel.bind( theToInit.HASBEENRELEASED_SINGLETONSENTINEL);



            theToInit.ROOTPATHSTEPSYMBOL = "#root";


            theToInit.SPECPATHROOTPATHSTEPSYMBOL = "#testsroot";


            theToInit.PATHSREPLACEABLESYMBOL = "#";


            theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";


            theToInit.TRAVERSAL_WHOLE = "*";

            theToInit.TRAVERSALSTEPSSEPARATOR = ".";

            theToInit.TRAVERSALSTEP_LENGTH = "length";
            theToInit.TRAVERSALSTEP_LAST   = "last";
            theToInit.TRAVERSALSTEP_FIRST  = "first";
            theToInit.TRAVERSALSTEP_ALL    = "all";

            theToInit.TRAVERSALSTEP_KEYEDSEPARATOR  = "=";

            theToInit.REPLACEPARMVALUEWITHPARMPREFIX = "~";

            theToInit.REPLACEPARMVALUEDOT = ".";



            theToInit.ANYEXCEPTION = "*";


            theToInit.VALUEDIFFATTOP = "/";

            theToInit.HTTPSTATUSCODE_OK = 200;


        };





        var ModuleConstants = {};
        pgInitWithModuleConstants( ModuleConstants);




        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };





        var aModule = {
            "ModuleConstants": ModuleConstants
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            return aMod_definer( );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( function ( ) {
            return aMod_definer( );
        });
    }


}());

