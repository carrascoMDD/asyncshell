'use strict';

/*
 dicomfragment-repr.js
 Created 201511182230
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
    var aMod_definer = function( theM_dicomrepr,
                                 theM_dicomreprconstants,
                                 theM_sentinels,
                                 theM_overrider,
                                 theM_conversions) {


        var ModuleName     = "dicomfragment-repr";
        var ModulePackages = "dicom-test/dicom-repr";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







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










        var aDicomFragmentRepr_Prototype = (function() {


            var aPrototype = new theM_dicomrepr.DicomRepr_Constructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            aPrototype._v_Type = "DicomFragmentRepr";

            aPrototype._v_Prototype_DicomFragmentRepr = aPrototype;


            aPrototype._v_Element   = null;
            aPrototype._v_Index       = null;
            aPrototype._v_Offset      = null;
            aPrototype._v_ValueLength = null;
            aPrototype._v_BasicOffset = null;






            var _pInit = function( theElement, theFragmentIndex) {

                this._pInit_DicomFragmentRepr( theElement, theFragmentIndex);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomFragmentRepr = function( theElement, theFragmentIndex) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_DicomRepr.apply( this, []);


                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;


                if( theElement) {
                    this._v_Element     = theElement;
                }

                if( theFragmentIndex) {
                    this._v_Index       = theFragmentIndex;
                }

                this._v_Offset      = null;
                this._v_ValueLength = null;
                this._v_BasicOffset = null;

            };
            if( _pInit_DicomFragmentRepr){}/* CQT */
            aPrototype._pInit_DicomFragmentRepr = _pInit_DicomFragmentRepr;






            var  _pInit_DicomStructureType = function() {

                this._v_DicomStructureType = theM_dicomreprconstants.DICOMSTRUCTURETYPE_FRAGMENT;

            };
            if( _pInit_DicomStructureType){}/* CQT */
            aPrototype._pInit_DicomStructureType = _pInit_DicomStructureType;








            var pSetPriv_Element = function ( theElement) {

                if( !theElement) {
                    return;
                }

                this._v_Element = theElement;
            };
            if( pSetPriv_Element){}/* CQT */
            aPrototype.pSetPriv_Element = pSetPriv_Element;





            var pUnsetPriv_Element = function () {

                this._v_Element = null;
            };
            if( pUnsetPriv_Element){}/* CQT */
            aPrototype.pUnsetPriv_Element = pUnsetPriv_Element;



            
            
            


            var fGet_Index = function () {

                return this._v_Index;
            };
            if( fGet_Index){}/* CQT */
            aPrototype.fGet_Index = fGet_Index;



            var pSet_Index = function ( theValue) {

                this._v_Index = theValue;
            };
            if( pSet_Index){}/* CQT */
            aPrototype.pSet_Index = pSet_Index;




            var fGet_Offset = function () {

                return this._v_Offset;
            };
            if( fGet_Offset){}/* CQT */
            aPrototype.fGet_Offset = fGet_Offset;



            var pSet_Offset = function ( theValue) {

                this._v_Offset = theValue;
            };
            if( pSet_Offset){}/* CQT */
            aPrototype.pSet_Offset = pSet_Offset;




            var fGet_ValueLength = function () {

                return this._v_ValueLength;
            };
            if( fGet_ValueLength){}/* CQT */
            aPrototype.fGet_ValueLength = fGet_ValueLength;



            var pSet_ValueLength = function ( theValue) {

                this._v_ValueLength = theValue;
            };
            if( pSet_ValueLength){}/* CQT */
            aPrototype.pSet_ValueLength = pSet_ValueLength;




            var fGet_BasicOffset = function () {

                return this._v_BasicOffset;
            };
            if( fGet_BasicOffset){}/* CQT */
            aPrototype.fGet_BasicOffset = fGet_BasicOffset;



            var pSet_BasicOffset = function ( theValue) {

                this._v_BasicOffset = theValue;
            };
            if( pSet_BasicOffset){}/* CQT */
            aPrototype.pSet_BasicOffset = pSet_BasicOffset;






            var _pRelease = function() {

                this._pRelease_DicomFragmentRepr();
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomFragmentRepr = function() {

                this._v_Element     = undefined;
                this._v_Index       = undefined;
                this._v_Offset      = undefined;
                this._v_ValueLength = undefined;
                this._v_BasicOffset = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_DicomRepr.apply( this, []);
            };
            if( _pRelease_DicomFragmentRepr){}/* CQT */
            aPrototype._pRelease_DicomFragmentRepr = _pRelease_DicomFragmentRepr;










            var fAsLogObject = function( ) {

                var aLogObject = this._v_SuperPrototype.fAsLogObject.apply( this);

                aLogObject[ "index"]        = this._v_Index;
                aLogObject[ "offset"]       = this._v_Offset;
                aLogObject[ "valueLength"]  = this._v_ValueLength;
                aLogObject[ "basicOffset"]  = this._v_BasicOffset ;

                return aLogObject;

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;




            return aPrototype;

        })();




        var DicomFragmentRepr_Constructor = function( theElement, theFragmentIndex) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Element     = null;
            this._v_Index       = null;
            this._v_Offset      = null;
            this._v_ValueLength = null;
            this._v_BasicOffset = null;

            this._pInit_DicomFragmentRepr( theElement, theFragmentIndex);

        };
        DicomFragmentRepr_Constructor.prototype = aDicomFragmentRepr_Prototype;





        var DicomFragmentRepr_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = aDicomFragmentRepr_Prototype;

            this._v_Type = null;


            this._v_Element     = null;
            this._v_Index       = null;
            this._v_Offset      = null;
            this._v_ValueLength = null;
            this._v_BasicOffset = null;

        };
        DicomFragmentRepr_SuperPrototypeConstructor.prototype = aDicomFragmentRepr_Prototype;



        var aModule = {
            "DicomFragmentRepr_Prototype": aDicomFragmentRepr_Prototype,
            "DicomFragmentRepr_Constructor": DicomFragmentRepr_Constructor,
            "DicomFragmentRepr_SuperPrototypeConstructor": DicomFragmentRepr_SuperPrototypeConstructor
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


            var aM_dicomrepr          = require('./dicom-repr');
            var aM_dicomreprconstants = require('./dicom-repr-constants');
            var aM_sentinels          = require('../../common-test/sentinels');
            var aM_overrider          = require('../../common-test/overrider');
            var aM_conversions        = require('../../common-test/conversions');

            return aMod_definer(
                aM_dicomrepr,
                              aM_dicomreprconstants,
  aM_sentinels,
                aM_overrider,
                aM_conversions
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./dicom-repr",
            "./dicom-repr-constants",
            "../../common-test/sentinels",
            "../../common-test/overrider",
            "../../common-test/conversions"
        ], function (
            theM_dicomrepr,
            theM_dicomreprconstants,
            theM_sentinels,
            theM_overrider,
            theM_conversions
        ) {
            return aMod_definer(
                theM_dicomrepr,
                theM_dicomreprconstants,
                theM_sentinels,
                theM_overrider,
                theM_conversions
            );
        });
    }

}());