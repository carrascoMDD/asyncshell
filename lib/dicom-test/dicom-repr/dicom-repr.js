'use strict';

/*
 dicom-repr.js
 Creado 201511182211
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
                                 theM_conversions,
                                 theM_dicomreprconstants) {


        var ModuleName     = "dicom-repr";
        var ModulePackages = "dicom-test/dicom-repr";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
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










        var aDicomRepr_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = null;


            aPrototype._v_Type = "DicomRepr";

            aPrototype._v_Prototype_DicomRepr = aPrototype;



            aPrototype._v_DicomStructureType = null;





            var _pInit = function() {

                this._pInit_DicomRepr();
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomRepr = function() {

                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;

                this._pInit_DicomStructureType();

            };
            if( _pInit_DicomRepr){}/* CQT */
            aPrototype._pInit_DicomRepr = _pInit_DicomRepr;





            var  _pInit_DicomStructureType = function() {

                this._v_DicomStructureType = theM_dicomreprconstants.DICOMSTRUCTURETYPE_ABSTRACT;

            };
            if( _pInit_DicomStructureType){}/* CQT */
            aPrototype._pInit_DicomStructureType = _pInit_DicomStructureType;






            var _pRelease = function( theReleaseParms, theReleaseDone) {

                this._pRelease_DicomRepr( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;






            var _pRelease_DicomRepr = function() {

                this._v_DicomStructureType = undefined;

            };
            if( _pRelease_DicomRepr){}/* CQT */
            aPrototype._pRelease_DicomRepr = _pRelease_DicomRepr;






            var fDicomStructureType = function( ) {

                return this._v_DicomStructureType;

            };
            if( fDicomStructureType){}/* CQT */
            aPrototype.fDicomStructureType = fDicomStructureType;





            var fAsLogObject = function( ) {

                return {
                    "dicomStructureType": this._v_DicomStructureType,
                };

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;





            return aPrototype;

        })();




        var DicomRepr_Constructor = function() {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_SuperPrototype = null;

            this._pInit_DicomRepr();

        };
        DicomRepr_Constructor.prototype = aDicomRepr_Prototype;





        var DicomRepr_SuperPrototypeConstructor = function() {
            this._v_Prototype = aDicomRepr_Prototype;
            this._v_Type = null;

            this._v_SuperPrototype = null;
        };
        DicomRepr_SuperPrototypeConstructor.prototype = aDicomRepr_Prototype;



        var aModule = {
            "DicomRepr_Prototype": aDicomRepr_Prototype,
            "DicomRepr_Constructor": DicomRepr_Constructor,
            "DicomRepr_SuperPrototypeConstructor": DicomRepr_SuperPrototypeConstructor
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

            var aM_sentinels          = require('../../common-test/sentinels');
            var aM_overrider          = require('../../common-test/overrider');
            var aM_conversions        = require('../../common-test/conversions');
            var aM_dicomreprconstants = require('./dicom-repr-constants');

            return aMod_definer(
                aM_sentinels,
                aM_overrider,
                aM_conversions,
                aM_dicomreprconstants
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../common-test/sentinels",
            "../../common-test/overrider",
            "../../common-test/conversions",
            "./dicom-repr-constants"
        ], function (
            theM_sentinels,
            theM_overrider,
            theM_conversions,
            theM_dicomreprconstants
        ) {
            return aMod_definer(
                theM_sentinels,
                theM_overrider,
                theM_conversions,
                theM_dicomreprconstants
            );
        });
    }

}());