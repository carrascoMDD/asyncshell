'use strict';

/*
 payloadholder.js
 Creado 201511091718
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
    var aMod_definer = function( theM_sentinels,
                                 theM_overrider,
                                 theM_conversions) {


        var ModuleName     = "payloadholder";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.MAXLOGOBJECTSTRINGLEN            = 16 * 1024;
            theToInit.EXCEEDEDMAXLOGOBJECTSTRINGLENMSG = "LENEXCEEDED";

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










        var aPayloadHolder_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = null;


            aPrototype._v_Type = "PayloadHolder";

            aPrototype._v_Prototype_PayloadHolder = aPrototype;


            aPrototype._v_Payload        = null;






            var _pInit = function( thePayload) {

                this._pInit_PayloadHolder( thePayload);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_PayloadHolder = function( thePayload) {

                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;


                this._v_Payload        = thePayload;
            };
            if( _pInit_PayloadHolder){}/* CQT */
            aPrototype._pInit_PayloadHolder = _pInit_PayloadHolder;








            var fIsPayloadHolder = function( ) {

                return true;
            };
            if( fIsPayloadHolder){}/* CQT */
            aPrototype.fIsPayloadHolder = fIsPayloadHolder;






            var pReleasePayload = function( ) {

                if( this._v_Payload && this._v_Payload.constructor && this._v_Payload.constructor.name == "Buffer") {
                    /* Not permitted in node v 4.x
                    this._v_Payload.parent = null;
                     */
                }

                this._v_Payload        = undefined;
            };
            if( pReleasePayload){}/* CQT */
            aPrototype.pReleasePayload = pReleasePayload;







            var fIsPayloadReleased = function( ) {

                if( typeof this._v_Payload == "undefined") {
                    return true;
                }


                if( this._v_Payload == null) {
                    return true;
                }

                return false;

            };
            if( fIsPayloadReleased){}/* CQT */
            aPrototype.fIsPayloadReleased = fIsPayloadReleased;






            var fAsLogObject = function( ) {

                var aPayloadJSONobj = theM_conversions.fConvertValueToJSON( this._v_Payload);

                return{ "payload": aPayloadJSONobj};

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;





            return aPrototype;

        })();




        var PayloadHolder_Constructor = function( thePayload) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_SuperPrototype = null;

            this._v_Payload        = null;

            this._pInit_PayloadHolder( thePayload);

        };
        PayloadHolder_Constructor.prototype = aPayloadHolder_Prototype;





        var PayloadHolder_SuperPrototypeConstructor = function() {
            this._v_Prototype = aPayloadHolder_Prototype;
            this._v_Type = null;

            this._v_SuperPrototype = null;

            this._v_Payload        = null;
        };
        PayloadHolder_SuperPrototypeConstructor.prototype = aPayloadHolder_Prototype;



        var aModule = {
            "PayloadHolder_Prototype": aPayloadHolder_Prototype,
            "PayloadHolder_Constructor": PayloadHolder_Constructor,
            "PayloadHolder_SuperPrototypeConstructor": PayloadHolder_SuperPrototypeConstructor
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


            var aM_sentinels     = require('./sentinels');
            var aM_overrider     = require('./overrider');
            var aM_conversions   = require('./conversions');

            return aMod_definer(
                aM_sentinels,
                aM_overrider,
                aM_conversions
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./sentinels",
            "./overrider",
            "./conversions"
        ], function (
                theM_sentinels,
                theM_overrider,
                theM_conversions
            ) {
            return aMod_definer(
                theM_sentinels,
                theM_overrider,
                theM_conversions
            );
        });
    }

}());