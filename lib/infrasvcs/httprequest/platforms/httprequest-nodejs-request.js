'use strict';

/*
 httprequest-nodejs-request.js
 Created 201409212117
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

    var aMod_definer = function( theM_overrider,
                                 theM_request) {


        var ModuleName     = "httprequest-nodejs-request";
        var ModulePackages = "infrasvcs/httprequest/platforms";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

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




        var ModuleGlobals = { };





        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.ModuleGlobals = ModuleGlobals;






        var pHttpRequest_get = function( theURL, theRequestData, theCallback) {
            if( !theURL) {
                return;
            }

            if( !theCallback || !( typeof theCallback == "function")) {
                return;
            }


            return theM_request.get( theURL, theRequestData, theCallback);

        };
        if( pHttpRequest_get){}/* CQT */
        aModule.pHttpRequest_get = pHttpRequest_get;








        var pHttpRequest_post = function( theURL, theRequestData, theCallback) {
            if( !theURL) {
                return;
            }

            if( !theCallback || !( typeof theCallback == "function")) {
                return;
            }


            return theM_request.post( theURL, theRequestData, theCallback);

        };
        if( pHttpRequest_post){}/* CQT */
        aModule.pHttpRequest_post = pHttpRequest_post;







        var pHttpRequest = function( theOptions, theCallback) {
            if( !theOptions) {
                return;
            }

            if( !theCallback || !( typeof theCallback == "function")) {
                return;
            }


            return theM_request( theOptions, theCallback);

        };
        if( pHttpRequest){}/* CQT */
        aModule.pHttpRequest = pHttpRequest;







        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_overrider  = require('../../../common-test/overrider');
            var aM_request    = require('request');

            return aMod_definer(
                aM_overrider,
                aM_request
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../../common-test/overrider",
            "request"
        ], function (
                theM_overrider,
                theM_request
            ) {
            return aMod_definer(
                theM_overrider,
                theM_request
            );
        });
    }


}());