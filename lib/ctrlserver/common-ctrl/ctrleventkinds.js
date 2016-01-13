'use strict';

/*
 ctrleventkinds.js
 Creado 201408050911
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
    var aMod_definer = function() {


        var ModuleName     = "ctrleventkinds";
        var ModulePackages = "ctrlserver/common-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.ACTEVT_OK                    = "OK";
            theToInit.ACTEVT_FAIL                  = "FAIL";

            theToInit.ACTEVT_INIT                  = "INIT";
            theToInit.ACTEVT_ALREADYREGISTERED     = "ALREADYREGISTERED";
            theToInit.ACTEVT_REGISTRATION_FAIL     = "REGISTRATION_FAIL";
            theToInit.ACTEVT_REGISTERED            = "REGISTERED";
            theToInit.ACTEVT_REGISTRATION_WOKEY    = "REGISTRATION_WOKEY";
            theToInit.ACTEVT_REGISTRATION_NOTFOUND = "REGISTRATION_NOTFOUND";
            theToInit.ACTEVT_UNREGISTERED          = "UNREGISTERED";

            theToInit.ACTEVTKINDS = [
                theToInit.ACTEVT_OK,
                theToInit.ACTEVT_FAIL,
                theToInit.ACTEVT_INIT,
                theToInit.ACTEVT_ALREADYREGISTERED,
                theToInit.ACTEVT_REGISTRATION_FAIL,
                theToInit.ACTEVT_REGISTERED,
                theToInit.ACTEVT_REGISTRATION_WOKEY,
                theToInit.ACTEVT_REGISTRATION_NOTFOUND,
                theToInit.ACTEVT_UNREGISTERED
            ];





            theToInit.ACTEVTKINDS_NOTFORCONSOLE_NONE = [];
            theToInit.ACTEVTKINDS_NOTFORCONSOLE_ALL = theToInit.ACTEVTKINDS.slice();

            theToInit.ACTEVTKINDS_NOTFORCONSOLE_LIGHT = [
                theToInit.ACTEVT_INIT,
                theToInit.ACTEVT_ALREADYREGISTERED,
                theToInit.ACTEVT_REGISTRATION_FAIL,
                theToInit.ACTEVT_REGISTERED,
                theToInit.ACTEVT_REGISTRATION_WOKEY,
                theToInit.ACTEVT_REGISTRATION_NOTFOUND,
                theToInit.ACTEVT_UNREGISTERED
            ];

            theToInit.ACTEVTKINDS_NOTFORCONSOLE_RESTRICTIVE = [
                theToInit.ACTEVT_INIT,
                theToInit.ACTEVT_ALREADYREGISTERED,
                theToInit.ACTEVT_REGISTRATION_FAIL,
                theToInit.ACTEVT_REGISTERED,
                theToInit.ACTEVT_REGISTRATION_WOKEY,
                theToInit.ACTEVT_REGISTRATION_NOTFOUND,
                theToInit.ACTEVT_UNREGISTERED
            ];

            theToInit.ACTEVTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.ACTEVTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();

            theToInit.EVENTSSETS_NOTFORCONSOLE = {
                "NONE":         theToInit.ACTEVTKINDS_NOTFORCONSOLE_NONE,
                "ALL":          theToInit.ACTEVTKINDS_NOTFORCONSOLE_NONE,
                "LIGHT":        theToInit.ACTEVTKINDS_NOTFORCONSOLE_NONE,
                "RESTRICTIVE":  theToInit.ACTEVTKINDS_NOTFORCONSOLE_NONE,
                "DEFAULT":      theToInit.ACTEVTKINDS_NOTFORCONSOLE_NONE
            };


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






        var aModule = { };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;



        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            return aMod_definer();
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define(function () {
            return aMod_definer();
        });
    }



}());