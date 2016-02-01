'use strict';

/*
 conversions.js
 Created 2015132314
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

    var aMod_definer = function( theM_overrider) {

        var ModuleName     = "conversions";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}





        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.MAXJSONSTRINGLEN = 16 * 1024;


            theToInit.EXCEEDEDMAXJSONSTRINGLENMSG = "LENEXCEEDED"

        };





        var pgInitFromModuleVariations = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleVariations) {
                if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                }
            }
        };


        var ModuleVariations = { };
        pgInitWithModuleVariations( ModuleVariations);
        theM_overrider.pgOverrideModuleVariations( ModuleFullName, ModuleVariations);






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


        };




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


        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
        pgInitWithModuleConstants( ModuleConstants);







        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;




        var fConvertValueToJSON = function( theValue, theIncludeMembers) {

            var aValue = theValue;


            if( typeof aValue == "undefined") {
                return aValue;
            }

            if( aValue == null) {
                return null;
            }

            if( typeof aValue == "number") {
                return aValue;
            }

            if( typeof aValue == "function") {
                return aValue;
            }

            if( typeof aValue == "string") {
                var aValueLength = aValue.length;
                if( aValueLength > aModule.MAXJSONSTRINGLEN) {
                    aValue = aModule.EXCEEDEDMAXJSONSTRINGLENMSG + " len=" + aValueLength + " " + aValue.substring( 0 , aModule.MAXJSONSTRINGLEN);
                }
                return aValue;
            }

            if( ( typeof aValue == "object") && aValue.constructor && ( aValue.constructor.name == "Buffer")) {
                var aValueLength = aValue.length;
                aValue = { "Buffer": true, "len": aValueLength};
                return aValue;
            }


            if( aValue.fAsLogObject) {
                return aValue.fAsLogObject();
            }

            if( aValue.fIdentifyingWithTitleJSON) {
                return aValue.fIdentifyingWithTitleJSON();
            }

            if( aValue.fIdentifyingJSON) {
                return aValue.fIdentifyingJSON();
            }

            if( aValue.fIdentifyingString) {
                return aValue.fIdentifyingString();
            }

            if( aValue.fLogString) {
                return aValue.fLogString();
            }

            if( theIncludeMembers) {
                if( aValue.fToResultJSON) {
                    return aValue.fToResultJSON();
                }

                try {
                    var aJSONstr = JSON.stringify( aValue);
                    if( aJSONstr){}/* CQT */
                    return aJSONstr;
                }
                catch( anException) {}
            }

            var aStr = aValue.toString().substr( 0, this.MAXDATASTRINGLEN);
            if( aStr){}/* CQT */
            return aStr;
        };
        if( fConvertValueToJSON){}/* CQT */
        aModule.fConvertValueToJSON = fConvertValueToJSON;








        var fConvertValueToJSONstr = function( theValue, theIncludeMembers) {

            var aJSONobj = aModule.fConvertValueToJSON( theValue, theIncludeMembers);

            var aJSONstr = JSON.stringify( aJSONobj);

            return aJSONstr;
        };
        if( fConvertValueToJSONstr){}/* CQT */
        aModule.fConvertValueToJSONstr = fConvertValueToJSONstr;









        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_overrider      = require('./overrider');

            return aMod_definer(
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./overrider"
        ], function (
            theM_overrider
        ) {
            return aMod_definer(
                theM_overrider
            );
        });
    }


}());