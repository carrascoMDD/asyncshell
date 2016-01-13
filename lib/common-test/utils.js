'use strict';

/*
 utils.js
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

    var aMod_definer = function( ) {

        var ModuleName     = "utils";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}





        var aModule = {};


        var fErrorHasEvent = function( theError, theExpectedErrorEvent) {
            if( !theError) {
                return false;
            }
            if( !theExpectedErrorEvent) {
                return false;
            }

            var anErrorHasEvent = fErrorHasEvent_recursive( theError, theExpectedErrorEvent, []);
            if( anErrorHasEvent){}/* CQT */
            return anErrorHasEvent;
        };
        if( fErrorHasEvent){}/* CQT */
        aModule.fErrorHasEvent = fErrorHasEvent;





        var fErrorHasEvent_recursive = function( theError, theExpectedErrorEvent, theAlready) {

            if( !theError) {
                return false;
            }
            if( !theExpectedErrorEvent) {
                return false;
            }

            if( theAlready  && ( theAlready.indexOf( theError) >= 0)) {
                return false;
            }


            var anError = theError;
            if( anError._v_Record) {
                anError = anError._v_Record;
            }

            if( !( anError._v_Type == "RecordTest")) {
                return false;
            }

            theAlready.push( anError);


            if( anError._v_EventKind == theExpectedErrorEvent) {
                return true
            }

            if( anError._v_ErrorReason) {
                if( fErrorHasEvent_recursive( anError._v_ErrorReason, theExpectedErrorEvent, theAlready)) {
                    return true;
                }
            }

            if( anError._v_ErrorDetail) {
                if( fErrorHasEvent_recursive( anError._v_ErrorDetail, theExpectedErrorEvent, theAlready)) {
                    return true;
                }
            }

            if( anError._v_Data) {
                if( fErrorHasEvent_recursive( anError._v_Data, theExpectedErrorEvent, theAlready)) {
                    return true;
                }
            }

            return false;
        };







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
        define( function () {
            return aMod_definer();
        });
    }


}());