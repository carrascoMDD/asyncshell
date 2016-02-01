'use strict';

/*
 exiter.js
 Created 201409220142
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

    var aMod_definer = function( theM_useplatform) {

        var ModuleName     = "exiter";
        var ModulePackages = "infrasvcs/exiter";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }
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




        var ModuleGlobals = { };
        ModuleGlobals.gExiter_Platform_Nodejs = null;
        ModuleGlobals.gExiter_Platform_Browser = null;

        ModuleGlobals.gExiter_InterestedParties = [ ];




        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.ModuleGlobals = ModuleGlobals;







        var fExiter_PlatformModule = function() {

            if( !theM_useplatform.USEPLATFORM) {
                return null;
            }

            if( theM_useplatform.USEPLATFORMS.indexOf( theM_useplatform.USEPLATFORM) < 0) {
                return null;
            }

            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_NODEJS) {
                return fExiter_PlatformModule_Nodejs();
            }


            if( theM_useplatform.USEPLATFORM == theM_useplatform.USEPLATFORM_BROWSER) {
                return fExiter_PlatformModule_Browser();
            }

            return null;
        };
        if( fExiter_PlatformModule){}/* CQT */
        aModule.fExiter_PlatformModule = fExiter_PlatformModule;






        var fExiter_PlatformModule_Nodejs = function() {

            var aPlatformModule = aModule.ModuleGlobals.gExiter_Platform_Nodejs;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/exiter-nodejs");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gExiter_Platform_Nodejs = aPlatformModule;

            return aModule.ModuleGlobals.gExiter_Platform_Nodejs;
        };
        if( fExiter_PlatformModule_Nodejs){}/* CQT */
        aModule.fExiter_PlatformModule_Nodejs = fExiter_PlatformModule_Nodejs;






        var fExiter_PlatformModule_Browser = function() {

            var aPlatformModule = aModule.ModuleGlobals.gExiter_Platform_Browser;
            if( aPlatformModule) {
                return aPlatformModule;
            }

            try {
                aPlatformModule = require( "./platforms/exiter-browser");
            }
            catch( anException) {
                throw anException;
            }

            aModule.ModuleGlobals.gExiter_Platform_Browser = aPlatformModule;

            return aModule.ModuleGlobals.gExiter_Platform_Browser;
        };
        if( fExiter_PlatformModule_Browser){}/* CQT */
        aModule.fExiter_PlatformModule_Browser = fExiter_PlatformModule_Browser;












        var pRegisterInterestedParty = function( theInterestedParty) {
            if( !theInterestedParty) {
                return;
            }

            if( !aModule.ModuleGlobals.gExiter_InterestedParties) {
                return;
            }

            if( aModule.ModuleGlobals.gExiter_InterestedParties.indexOf( theInterestedParty) >= 0) {
                return;
            }

            aModule.ModuleGlobals.gExiter_InterestedParties.push( theInterestedParty);

        };
        if( pRegisterInterestedParty){}/* CQT */
        aModule.pRegisterInterestedParty = pRegisterInterestedParty;







        var pDropInterestedParty = function( theInterestedParty) {
            if( !theInterestedParty) {
                return;
            }

            if( !aModule.ModuleGlobals.gExiter_InterestedParties) {
                return;
            }


            var anInterestedPartyIndex = aModule.ModuleGlobals.gExiter_InterestedParties.indexOf( theInterestedParty);
            if ( anInterestedPartyIndex < 0) {
                return;
            }

            aModule.ModuleGlobals.gExiter_InterestedParties.splice( anInterestedPartyIndex, 1);
        };
        if( pDropInterestedParty){}/* CQT */
        aModule.pDropInterestedParty = pDropInterestedParty;















        var fGatherExitVotes = function( theExitCode) {

            if( !aModule.ModuleGlobals.gExiter_InterestedParties) {
                return null;
            }

            var someWindUpFunctions = [ ];

            var aNumInterestedParties = aModule.ModuleGlobals.gExiter_InterestedParties.length;
            if( !aNumInterestedParties) {
                return null;
            }


            var someInterestedParties = aModule.ModuleGlobals.gExiter_InterestedParties.slice();

            for( var anInterestedPartyIdx= 0; anInterestedPartyIdx < aNumInterestedParties; anInterestedPartyIdx++) {

                var anInterestedParty = someInterestedParties[ anInterestedPartyIdx];
                if( anInterestedParty) {

                    if( anInterestedParty.fExitVote && ( typeof anInterestedParty.fExitVote == "function")) {

                        var anExitVote = anInterestedParty.fExitVote( theExitCode);
                        if( anExitVote == false) {
                            return false;
                        }

                        if( typeof anExitVote == "function") {
                            someWindUpFunctions.push( anExitVote);
                        }
                    }
                }
            }

            if( !someWindUpFunctions.length) {
                return true;
            }

            return someWindUpFunctions;

        };
        if( fGatherExitVotes){}/* CQT */
        aModule.fGatherExitVotes = fGatherExitVotes;









        var pRunWindUpFunctions = function( theWindUpFunctions) {
            if( !theWindUpFunctions) {
                return;
            }

            var aNumWindUpFunctions = theWindUpFunctions.length;
            if( aNumWindUpFunctions) {

                for( var aWindUpFunctionIdx=0; aWindUpFunctionIdx < aNumWindUpFunctions; aWindUpFunctionIdx++) {

                    var aWindUpFunction = theWindUpFunctions[ aWindUpFunctionIdx];
                    if( aWindUpFunction && ( typeof aWindUpFunction == "function")) {
                        aWindUpFunction( theExitCode);
                    }
                }
            }
        };
        if( pRunWindUpFunctions){}/* CQT */
        aModule.pRunWindUpFunctions = pRunWindUpFunctions;








        var pExitWithPlatform = function( theExitCode) {

            var aExiterPlatformModule = fExiter_PlatformModule();
            if( !aExiterPlatformModule) {
                throw Error( "p_Exit !fExiter_PlatformModule")
            }

            var aExitFunction = aExiterPlatformModule.p_Exit;
            if( !aExitFunction) {
                throw Error( "p_Exit !fExiter_PlatformModule.p_Exit")
            }


            if( !( typeof aExitFunction == "function")) {
                throw Error( "p_Exit !( typeof fExiter_PlatformModule.p_Exit == 'function')")
            }

            aExitFunction( theExitCode);

        };
        if( pExitWithPlatform){}/* CQT */
        aModule.pExitWithPlatform = pExitWithPlatform;









        var p_Exit = function( theExitCode) {

            var aPreventExitOrWindUpFunctions = aModule.fGatherExitVotes( theExitCode);

            if( aPreventExitOrWindUpFunctions == false) {
                return;
            }

            if( aPreventExitOrWindUpFunctions && aPreventExitOrWindUpFunctions.length) {

                aModule.pRunWindUpFunctions( aPreventExitOrWindUpFunctions);
            }


            aModule.pExitWithPlatform( theExitCode);

        };
        if( p_Exit){}/* CQT */
        aModule.p_Exit = p_Exit;




        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_useplatform    = require('../useplatform');

            return aMod_definer( aM_useplatform);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "../useplatform"], function ( theM_useplatform) {
            return aMod_definer( theM_useplatform);
        });
    }

}());