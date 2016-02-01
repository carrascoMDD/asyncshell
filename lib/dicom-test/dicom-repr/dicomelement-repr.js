'use strict';

/*
 dicomelement-repr.js
 Created 201511182218
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
                                 theM_dicomfragmentrepr,
                                 theM_dicomreprconstants,
                                 theM_sentinels,
                                 theM_overrider,
                                 theM_conversions) {


        var ModuleName     = "dicomelement-repr";
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










        var aDicomElementRepr_Prototype = (function() {


            var aPrototype = new theM_dicomrepr.DicomRepr_Constructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            aPrototype._v_Type = "DicomElementRepr";

            aPrototype._v_Prototype_DicomElementRepr = aPrototype;

            aPrototype._v_Instance                 = null;
            aPrototype._v_Tag                      = null;
            aPrototype._v_TagName                  = null;
            aPrototype._v_ValueLength              = null;
            aPrototype._v_VR                       = null;
            aPrototype._v_IsHeader                 = null;
            aPrototype._v_IsPrivate                = null;
            aPrototype._v_Items                    = null;
            aPrototype._v_Fragments                = null;
            aPrototype._v_Value                    = null;
            aPrototype._v_ValueType                = null;
            aPrototype._v_UID                      = null;
            aPrototype._v_ValueReference           = null;
            aPrototype._v_ExternalReferences       = null;

            aPrototype._v_IsBlockRegistration      = null;
            aPrototype._v_ReservedBlock            = null;
            aPrototype._v_PertainsToReservedBlock  = null;


            var _pInit = function( theInstance, theTag, theTagName) {

                this._pInit_DicomElementRepr( theInstance, theTag, theTagName);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomElementRepr = function( theInstance, theTag, theTagName) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_DicomRepr.apply( this, []);


                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;

                if( theInstance) {
                    this._v_Instance            = theInstance;
                }

                if( theTag) {
                    this._v_Tag                 = theTag;
                }

                if( theTagName) {
                    this._v_TagName             = theTagName;
                }

                this._v_ValueLength         = null;
                this._v_VR                  = null;
                this._v_IsHeader            = null;
                this._v_IsPrivate           = null;
                this._v_Items               = [ ];
                this._v_Fragments           = [ ];
                this._v_Value               = null;
                this._v_ValueType           = null;
                this._v_UID                 = null;
                this._v_ValueReference      = null;
                this._v_ExternalReferences  = { };
                this._v_IsBlockRegistration      = null;
                this._v_ReservedBlock            = null;
                this._v_PertainsToReservedBlock  = null;
            };
            if( _pInit_DicomElementRepr){}/* CQT */
            aPrototype._pInit_DicomElementRepr = _pInit_DicomElementRepr;








            var  _pInit_DicomStructureType = function() {

                this._v_DicomStructureType = theM_dicomreprconstants.DICOMSTRUCTURETYPE_ELEMENT;

            };
            if( _pInit_DicomStructureType){}/* CQT */
            aPrototype._pInit_DicomStructureType = _pInit_DicomStructureType;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                this._pRelease_DicomElementRepr( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomElementRepr = function() {

                this._v_Instance            = undefined;
                this._v_Tag                 = undefined;
                this._v_TagName             = undefined;
                this._v_ValueLength         = undefined;
                this._v_VR                  = undefined;
                this._v_IsHeader            = undefined;
                this._v_IsPrivate           = undefined;

                if( this._v_Items) {
                    var aNumItems = this._v_Items.length;
                    for( var aItemIdx=0; aItemIdx < aNumItems; aItemIdx++) {
                        var aItem = this._v_Items[ aItemIdx];
                        if( aItem) {
                            aItem._pRelease();
                        }
                    }
                }

                this._v_Items         = undefined;


                if( this._v_Fragments) {
                    var aNumFragments = this._v_Fragments.length;
                    for( var aFragmentIdx=0; aFragmentIdx < aNumFragments; aFragmentIdx++) {
                        var aFragment = this._v_Fragments[ aFragmentIdx];
                        if( aFragment) {
                            aFragment._pRelease();
                        }
                    }
                }

                this._v_Fragments         = undefined;

                
                this._v_Value                    = undefined;
                this._v_ValueType                = undefined;
                this._v_UID                      = undefined;
                this._v_ValueReference           = undefined;
                this._v_ExternalReferences       = undefined;
                this._v_IsBlockRegistration      = undefined;
                this._v_ReservedBlock            = undefined;
                this._v_PertainsToReservedBlock  = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_DicomRepr.apply( this, []);

            };
            if( _pRelease_DicomElementRepr){}/* CQT */
            aPrototype._pRelease_DicomElementRepr = _pRelease_DicomElementRepr;












            var pSetPriv_Instance = function ( theInstance) {

                if( !theInstance) {
                    return;
                }

                this._v_Instance = theInstance;
            };
            if( pSetPriv_Instance){}/* CQT */
            aPrototype.pSetPriv_Instance = pSetPriv_Instance;





            var pUnsetPriv_Instance = function () {

                this._v_Instance = null;
            };
            if( pUnsetPriv_Instance){}/* CQT */
            aPrototype.pUnsetPriv_Instance = pUnsetPriv_Instance;










            var fGet_Tag = function () {

                return this._v_Tag;
            };
            if( fGet_Tag){}/* CQT */
            aPrototype.fGet_Tag = fGet_Tag;



            var pSet_Tag = function ( theValue) {

                this._v_Tag = theValue;
            };
            if( pSet_Tag){}/* CQT */
            aPrototype.pSet_Tag = pSet_Tag;




            var fGet_TagName = function () {

                return this._v_TagName;
            };
            if( fGet_TagName){}/* CQT */
            aPrototype.fGet_TagName = fGet_TagName;



            var pSet_TagName = function ( theValue) {

                this._v_TagName = theValue;
            };
            if( pSet_TagName){}/* CQT */
            aPrototype.pSet_TagName = pSet_TagName;




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




            var fGet_VR = function () {

                return this._v_VR;
            };
            if( fGet_VR){}/* CQT */
            aPrototype.fGet_VR = fGet_VR;



            var pSet_VR = function ( theValue) {

                this._v_VR = theValue;
            };
            if( pSet_VR){}/* CQT */
            aPrototype.pSet_VR = pSet_VR;




            var fGet_IsHeader = function () {

                return this._v_IsHeader;
            };
            if( fGet_IsHeader){}/* CQT */
            aPrototype.fGet_IsHeader = fGet_IsHeader;



            var pSet_IsHeader = function ( theValue) {

                this._v_IsHeader = theValue;
            };
            if( pSet_IsHeader){}/* CQT */
            aPrototype.pSet_IsHeader = pSet_IsHeader;




            var fGet_IsPrivate = function () {

                return this._v_IsPrivate;
            };
            if( fGet_IsPrivate){}/* CQT */
            aPrototype.fGet_IsPrivate = fGet_IsPrivate;



            var pSet_IsPrivate = function ( theValue) {

                this._v_IsPrivate = theValue;
            };
            if( pSet_IsPrivate){}/* CQT */
            aPrototype.pSet_IsPrivate = pSet_IsPrivate;







            var fGet_Value = function () {

                return this._v_Value;
            };
            if( fGet_Value){}/* CQT */
            aPrototype.fGet_Value = fGet_Value;



            var pSet_Value = function ( theValue) {

                this._v_Value = theValue;
            };
            if( pSet_Value){}/* CQT */
            aPrototype.pSet_Value = pSet_Value;




            var fGet_ValueType = function () {

                return this._v_ValueType;
            };
            if( fGet_ValueType){}/* CQT */
            aPrototype.fGet_ValueType = fGet_ValueType;



            var pSet_ValueType = function ( theValueType) {

                this._v_ValueType = theValueType;
            };
            if( pSet_ValueType){}/* CQT */
            aPrototype.pSet_ValueType = pSet_ValueType;




            var fGet_UID = function () {

                return this._v_UID;
            };
            if( fGet_UID){}/* CQT */
            aPrototype.fGet_UID = fGet_UID;



            var pSet_UID = function ( theUID) {

                this._v_UID = theUID;
            };
            if( pSet_UID){}/* CQT */
            aPrototype.pSet_UID = pSet_UID;



            var fGet_ValueReference = function () {

                return this._v_ValueReference;
            };
            if( fGet_ValueReference){}/* CQT */
            aPrototype.fGet_ValueReference = fGet_ValueReference;



            var pSet_ValueReference = function ( theValue) {

                this._v_ValueReference = theValue;
            };
            if( pSet_ValueReference){}/* CQT */
            aPrototype.pSet_ValueReference = pSet_ValueReference;




            var fGet_ExternalReferences = function () {

                return this._v_ExternalReferences;
            };
            if( fGet_ExternalReferences){}/* CQT */
            aPrototype.fGet_ExternalReferences = fGet_ExternalReferences;



            var pSet_ExternalReferences = function ( theValue) {

                this._v_ExternalReferences = theValue;
            };
            if( pSet_ExternalReferences){}/* CQT */
            aPrototype.pSet_ExternalReferences = pSet_ExternalReferences;


            

            var fGet_IsBlockRegistration = function () {

                return this._v_IsBlockRegistration;
            };
            if( fGet_IsBlockRegistration){}/* CQT */
            aPrototype.fGet_IsBlockRegistration = fGet_IsBlockRegistration;



            var pSet_IsBlockRegistration = function ( theValue) {

                this._v_IsBlockRegistration = theValue;
            };
            if( pSet_IsBlockRegistration){}/* CQT */
            aPrototype.pSet_IsBlockRegistration = pSet_IsBlockRegistration;




            var fGet_ReservedBlock = function () {

                return this._v_ReservedBlock;
            };
            if( fGet_ReservedBlock){}/* CQT */
            aPrototype.fGet_ReservedBlock = fGet_ReservedBlock;



            var pSet_ReservedBlock = function ( theValue) {

                this._v_ReservedBlock = theValue;
            };
            if( pSet_ReservedBlock){}/* CQT */
            aPrototype.pSet_ReservedBlock = pSet_ReservedBlock;




            var fGet_PertainsToReservedBlock = function () {

                return this._v_PertainsToReservedBlock;
            };
            if( fGet_PertainsToReservedBlock){}/* CQT */
            aPrototype.fGet_PertainsToReservedBlock = fGet_PertainsToReservedBlock;



            var pSet_PertainsToReservedBlock = function ( theValue) {

                this._v_PertainsToReservedBlock = theValue;
            };
            if( pSet_PertainsToReservedBlock){}/* CQT */
            aPrototype.pSet_PertainsToReservedBlock = pSet_PertainsToReservedBlock;







            var fIsEmpty = function () {

                if( ( !this._v_Items || !this._v_Items.length) && ( !this._v_Fragments || !this._v_Fragments.length)) {
                    return true;
                }

                return false;

            };
            if( fIsEmpty){}/* CQT */
            aPrototype.fIsEmpty = fIsEmpty;








            var fNew_Item = function ( theInstanceId) {

                if( !this._v_Instance) {
                    return;
                }

                if( !this._v_Items) {
                    return;
                }

                var aNewItem = this._v_Instance.fNew_ItemInstance( this, theInstanceId);

                this._v_Items.push( aNewItem);


                return aNewItem;

            };
            if( fNew_Item){}/* CQT */
            aPrototype.fNew_Item = fNew_Item;




            var fGet_Items = function () {

                return this._v_Items;
            };
            if( fGet_Items){}/* CQT */
            aPrototype.fGet_Items = fGet_Items;



            var pSet_Items = function ( theValue) {

                this._v_Items = theValue;
            };
            if( pSet_Items){}/* CQT */
            aPrototype.pSet_Items = pSet_Items;











            var fNew_Fragment = function ( theFragmentIndex) {
                if( !theFragmentIndex) {
                    return null;
                }

                if( !this._v_Fragments) {
                    return;
                }

                var aNewFragment = new theM_dicomfragmentrepr.DicomFragmentRepr_Constructor( this, theFragmentIndex);


                this._v_Fragments.push( aNewFragment);

                return aNewFragment;

            };
            if( fNew_Fragment){}/* CQT */
            aPrototype.fNew_Fragment = fNew_Fragment;





            var fGet_Fragments = function () {

                return this._v_Fragments;
            };
            if( fGet_Fragments){}/* CQT */
            aPrototype.fGet_Fragments = fGet_Fragments;



            var pSet_Fragments = function ( theValue) {

                this._v_Fragments = theValue;
            };
            if( pSet_Fragments){}/* CQT */
            aPrototype.pSet_Fragments = pSet_Fragments;




            var pAdd_Fragment = function ( theFragment) {
                if( !this._v_Fragments) {
                    return;
                }

                var aTag = theFragment.fGet_Tag();
                if( !aTag) {
                    return;
                }

                if( this._v_Fragments.indexOf( theFragment) >= 0) {
                    return;
                }

                this._v_Fragments.push( theFragment);

                theFragment.pSetPriv_Instance( this);

            };
            if( pAdd_Fragment){}/* CQT */
            aPrototype.pAdd_Fragment = pAdd_Fragment;





            var pRemove_Fragment = function ( theFragment) {
                if( !this._v_Fragments) {
                    return;
                }

                var anFragmentIndex = this._v_Fragments.indexOf( theFragment);
                if( anFragmentIndex < 0) {
                    return;
                }

                this._v_Fragments.splice( anFragmentIndex, 1);

                theFragment.pUnsetPriv_Instance();

            };
            if( pRemove_Fragment){}/* CQT */
            aPrototype.pRemove_Fragment = pRemove_Fragment;










            var pAdd_ExternalReference = function ( theExternalReferenceKey, theExternalReferenceValue) {

                if( !theExternalReferenceKey || !theExternalReferenceValue) {
                    return;
                }

                if( !this._v_ExternalReferences) {
                    return;
                }

                this._v_ExternalReferences[ theExternalReferenceKey] = theExternalReferenceValue;

            };
            if( pAdd_ExternalReference){}/* CQT */
            aPrototype.pAdd_ExternalReference = pAdd_ExternalReference;





            var fAsLogObject = function( ) {

                var aLogObject = this._v_SuperPrototype.fAsLogObject.apply( this);

                aLogObject[ "tag"]          = this._v_Tag;
                aLogObject[ "tagName"]      = this._v_TagName;
                aLogObject[ "valueLength"]  = this._v_ValueLength;
                aLogObject[ "VR"]           = this._v_VR ;
                aLogObject[ "value"]        = this._v_Value;
                aLogObject[ "valueType"]    = this._v_ValueType


                if( this._v_IsHeader) {
                    aLogObject[ "isHeader"] = true;
                }


                if( this._v_IsPrivate) {
                    aLogObject[ "isPrivate"] = true;
                }


                if( this._v_UID) {
                    aLogObject[ "UID"] = this._v_UID;
                }

                if( this._v_IsBlockRegistration) {
                    aLogObject[ "isBlockRegistration"] = true;
                }

                if( this._v_ReservedBlock) {
                    aLogObject[ "reservedBlock"] = this._v_ReservedBlock;
                }

                if( this._v_PertainsToReservedBlock) {
                    aLogObject[ "pertainsToReservedBlock"] = this._v_PertainsToReservedBlock;
                }



                if( this._v_Items) {
                    
                    var someItemsLogObjects = [ ];
                  
                    var aNumItems = this._v_Items.length;
                    for( var anItemIdx=0; anItemIdx < aNumItems; anItemIdx++) {
    
                        var anItem = this._v_Items[ anItemIdx];
                        if( anItem) {
                            var anItemLogObject = anItem.fAsLogObject();
                            if( anItemLogObject) {
                                someItemsLogObjects.push( anItemLogObject);
                            }
                        }
                    }
                    if( someItemsLogObjects.length) {
                        aLogObject[ "items"] = someItemsLogObjects;
                    }
                }



                if( this._v_Fragments) {

                    var someFragmentsLogObjects = [ ];

                    var aNumFragments = this._v_Fragments.length;
                    for( var anFragmentIdx=0; anFragmentIdx < aNumFragments; anFragmentIdx++) {

                        var anFragment = this._v_Fragments[ anFragmentIdx];
                        if( anFragment) {
                            var anFragmentLogObject = anFragment.fAsLogObject();
                            if( anFragmentLogObject) {
                                someFragmentsLogObjects.push( anFragmentLogObject);
                            }
                        }
                    }
                    if( someFragmentsLogObjects.length) {
                        aLogObject[ "fragments"] = someFragmentsLogObjects;
                    }
                }


                return aLogObject;

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;




            return aPrototype;

        })();




        var DicomElementRepr_Constructor = function( theInstance, theTag, theTagName) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Instance                 = null;
            this._v_Tag                      = null;
            this._v_TagName                  = null;
            this._v_ValueLength              = null;
            this._v_VR                       = null;
            this._v_IsHeader                 = null;
            this._v_IsPrivate                = null;
            this._v_Items                    = null;
            this._v_Fragments                = null;
            this._v_Value                    = null;
            this._v_ValueType                = null;
            this._v_UID                      = null;
            this._v_ValueReference           = null;
            this._v_ExternalReferences       = null;
            this._v_IsBlockRegistration      = null;
            this._v_ReservedBlock            = null;
            this._v_PertainsToReservedBlock  = null;

            this._pInit_DicomElementRepr( theInstance, theTag, theTagName);

        };
        DicomElementRepr_Constructor.prototype = aDicomElementRepr_Prototype;





        var DicomElementRepr_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = aDicomElementRepr_Prototype;

            this._v_Type = null;

            this._v_Instance                 = null;
            this._v_Tag                      = null;
            this._v_TagName                  = null;
            this._v_ValueLength              = null;
            this._v_VR                       = null;
            this._v_IsHeader                 = null;
            this._v_IsPrivate                = null;
            this._v_Items                    = null;
            this._v_Fragments                = null;
            this._v_Value                    = null;
            this._v_ValueType                = null;
            this._v_UID                      = null;
            this._v_ValueReference           = null;
            this._v_ExternalReferences       = null;
            this._v_IsBlockRegistration      = null;
            this._v_ReservedBlock            = null;
            this._v_PertainsToReservedBlock  = null;
        };
        DicomElementRepr_SuperPrototypeConstructor.prototype = aDicomElementRepr_Prototype;



        var aModule = {
            "DicomElementRepr_Prototype": aDicomElementRepr_Prototype,
            "DicomElementRepr_Constructor": DicomElementRepr_Constructor,
            "DicomElementRepr_SuperPrototypeConstructor": DicomElementRepr_SuperPrototypeConstructor
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
            var aM_dicomfragmentrepr  = require('./dicomfragment-repr');
            var aM_dicomreprconstants = require('./dicom-repr-constants');
            var aM_sentinels          = require('../../common-test/sentinels');
            var aM_overrider          = require('../../common-test/overrider');
            var aM_conversions        = require('../../common-test/conversions');

            return aMod_definer(
                aM_dicomrepr,
                aM_dicomfragmentrepr,
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
            "./dicomfragment-repr",
            "./dicom-repr-constants",
            "../../common-test/sentinels",
            "../../common-test/overrider",
            "../../common-test/conversions"
        ], function (
            theM_dicomrepr,
            theM_dicomfragmentrepr,
            theM_dicomreprconstants,
            theM_sentinels,
            theM_overrider,
            theM_conversions
        ) {
            return aMod_definer(
                theM_dicomrepr,
                theM_dicomfragmentrepr,
                theM_dicomreprconstants,
                theM_sentinels,
                theM_overrider,
                theM_conversions
            );
        });
    }

}());