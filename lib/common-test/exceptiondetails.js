'use strict';

/*
 exceptiondetails.js
 Creado 201409182255
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

    var aMod_definer = function( theM_stacktrace,
                                 theM_overrider) {


        var ModuleName     = "exceptiondetails";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGEXCEPTIONDETAILS = true;

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
            }
        };



        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
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








        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;






        var fExceptionDetail = function( theException) {
            if( !theException) {
                return null;
            }


            var anExceptionDetail = {
                exception: theException.toString()
            };


            var anExceptionTrace = theM_stacktrace( { e: theException});
            if( anExceptionTrace) {
                anExceptionDetail.trace = anExceptionTrace;
            }

            var aRecord = theException._v_Record;
            if( aRecord) {
                if( aRecord.fIdentifyingJSON) {
                    aRecord = aRecord.fIdentifyingJSON();
                }
                else {
                    if( aRecord.fAsLogObject) {
                        aRecord = aRecord.fAsLogObject();
                    }
                }
                if( aRecord) {
                    anExceptionDetail.recex = aRecord;
                }
            }

            if( this.LOGEXCEPTIONDETAILS) {
                console.log( "exception:" + anExceptionDetail.exception);
                console.log( anExceptionDetail.recex);
                console.log( anExceptionDetail.trace);
            }

            anExceptionDetail.fIdentifyingJSON = function() {
                return anExceptionDetail;
            };

            return anExceptionDetail;
        };
        if( fExceptionDetail){}/* CQT */
        aModule.fExceptionDetail = fExceptionDetail;






        return aModule;
    };









    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_stacktrace = require('../thirdparty/stacktrace');
            var aM_overrider  = require('./overrider');

            return aMod_definer( aM_stacktrace, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../thirdparty/stacktrace",
            "./overrider"
        ], function ( theM_stacktrace, theM_overrider) {
            return aMod_definer( theM_stacktrace, theM_overrider);
        });
    }


}());