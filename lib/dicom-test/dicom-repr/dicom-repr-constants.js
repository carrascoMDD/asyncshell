'use strict';

/*
 dicom-repr-constants.js
 Creado 201511191118
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

        var ModuleName     = "dicom-repr-constants";
        var ModulePackages = "dicom-test/dicom-repr";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.DICOMSTRUCTURETYPE_ABSTRACT   = "ABSTRACT";


            theToInit.DICOMSTRUCTURETYPE_DIRECTORY  = "DIRECTORY";
            theToInit.DICOMSTRUCTURETYPE_PATIENT    = "PATIENT";
            theToInit.DICOMSTRUCTURETYPE_STUDY      = "STUDY";
            theToInit.DICOMSTRUCTURETYPE_SERIES     = "SERIES";
            theToInit.DICOMSTRUCTURETYPE_INSTANCE   = "INSTANCE";
            theToInit.DICOMSTRUCTURETYPE_ELEMENT    = "ELEMENT";
            theToInit.DICOMSTRUCTURETYPE_FRAGMENT   = "FRAGMENT";


            theToInit.DICOMSTRUCTURETYPES = [
                theToInit.DICOMSTRUCTURETYPE_DIRECTORY,
                theToInit.DICOMSTRUCTURETYPE_PATIENT  ,
                theToInit.DICOMSTRUCTURETYPE_STUDY    ,
                theToInit.DICOMSTRUCTURETYPE_SERIES   ,
                theToInit.DICOMSTRUCTURETYPE_INSTANCE ,
                theToInit.DICOMSTRUCTURETYPE_ELEMENT  ,
                theToInit.DICOMSTRUCTURETYPE_FRAGMENT
            ];





            theToInit.DICOMNESTINGROLE_DIRECTORY_PATIENTS  = "patients";
            theToInit.DICOMNESTINGROLE_DIRECTORY_STUDIES   = "studies";
            theToInit.DICOMNESTINGROLE_DIRECTORY_SERIES    = "series";
            theToInit.DICOMNESTINGROLE_DIRECTORY_INSTANCES = "instances";
            theToInit.DICOMNESTINGROLE_DIRECTORY_ELEMENTS  = "elements";
            theToInit.DICOMNESTINGROLE_DIRECTORY_ITEMS     = "items";
            theToInit.DICOMNESTINGROLE_DIRECTORY_FRAGMENTS = "fragments";



            theToInit.DICOMNESTINGROLES = { };

            theToInit.DICOMNESTINGROLES[ theToInit.DICOMSTRUCTURETYPE_DIRECTORY] = [ theToInit.DICOMNESTINGROLE_DIRECTORY_PATIENTS];
            theToInit.DICOMNESTINGROLES[ theToInit.DICOMSTRUCTURETYPE_PATIENT  ] = [ theToInit.DICOMNESTINGROLE_DIRECTORY_STUDIES];
            theToInit.DICOMNESTINGROLES[ theToInit.DICOMSTRUCTURETYPE_STUDY    ] = [ theToInit.DICOMNESTINGROLE_DIRECTORY_SERIES];
            theToInit.DICOMNESTINGROLES[ theToInit.DICOMSTRUCTURETYPE_SERIES   ] = [ theToInit.DICOMNESTINGROLE_DIRECTORY_INSTANCES];
            theToInit.DICOMNESTINGROLES[ theToInit.DICOMSTRUCTURETYPE_INSTANCE ] = [ theToInit.DICOMNESTINGROLE_DIRECTORY_ELEMENTS];
            theToInit.DICOMNESTINGROLES[ theToInit.DICOMSTRUCTURETYPE_ELEMENT  ] = [ theToInit.DICOMNESTINGROLE_DIRECTORY_ITEMS, theToInit.DICOMNESTINGROLE_DIRECTORY_FRAGMENTS];
            theToInit.DICOMNESTINGROLES[ theToInit.DICOMSTRUCTURETYPE_FRAGMENT ] = [ ];


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

            return aMod_definer();
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( function () {
            return aMod_definer();
        });
    }


}());


