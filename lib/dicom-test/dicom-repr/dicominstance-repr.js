'use strict';

/*
 dicominstance-repr.js
 Created 201511190619
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
                                 theM_dicomelementrepr,
                                 theM_dicomreprconstants,
                                 theM_sentinels,
                                 theM_overrider,
                                 theM_conversions) {


        var ModuleName     = "dicominstance-repr";
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










        var aDicomInstanceRepr_Prototype = (function() {


            var aPrototype = new theM_dicomrepr.DicomRepr_Constructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            aPrototype._v_Type = "DicomInstanceRepr";

            aPrototype._v_Prototype_DicomInstanceRepr = aPrototype;


            aPrototype._v_Series            = null;
            aPrototype._v_ItemElement       = null;

            aPrototype._v_InstanceId        = null;

            aPrototype._v_Elements          = null;

            aPrototype._v_ElementsByTag     = null;
            aPrototype._v_RetrievalSources  = null;




            var _pInit = function( theSeries, theItemElement, theInstanceId) {

                this._pInit_DicomInstanceRepr( theSeries, theItemElement);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomInstanceRepr = function( theSeries, theItemElement, theInstanceId) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_DicomRepr.apply( this, []);


                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;


                if( theSeries) {
                    this._v_Series            = theSeries;
                }

                if( theItemElement) {
                    this._v_ItemElement       = theItemElement;
                }

                if( theInstanceId) {
                    this._v_InstanceId        = theInstanceId;
                }

                this._v_Elements          = [ ];

                this._v_ElementsByTag     = { };
                this._v_RetrievalSources  = { };
            };
            if( _pInit_DicomInstanceRepr){}/* CQT */
            aPrototype._pInit_DicomInstanceRepr = _pInit_DicomInstanceRepr;







            var  _pInit_DicomStructureType = function() {

                this._v_DicomStructureType = theM_dicomreprconstants.DICOMSTRUCTURETYPE_INSTANCE;

            };
            if( _pInit_DicomStructureType){}/* CQT */
            aPrototype._pInit_DicomStructureType = _pInit_DicomStructureType;






            var _pRelease = function() {

                this._pRelease_DicomInstanceRepr();
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomInstanceRepr = function() {

                this._v_Series            = undefined;

                this._v_ItemElement       = undefined;

                this._v_InstanceId        = undefined;


                if( this._v_Elements) {
                    var aNumElements = this._v_Elements.length;
                    for( var anElementIdx=0; anElementIdx < aNumElements; anElementIdx++) {
                        var anElement = this._v_Elements[ anElementIdx];
                        if( anElement) {
                            anElement._pRelease();
                        }
                    }
                }

                this._v_Elements          = undefined;


                this._v_ElementsByTag     = undefined;
                this._v_RetrievalSources  = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_DicomRepr.apply( this, []);

            };
            if( _pRelease_DicomInstanceRepr){}/* CQT */
            aPrototype._pRelease_DicomInstanceRepr = _pRelease_DicomInstanceRepr;








            var pSetPriv_Series = function ( theSeries) {

                if( !theSeries) {
                    return;
                }

                this._v_Series = theSeries;

            };
            if( pSetPriv_Series){}/* CQT */
            aPrototype.pSetPriv_Series = pSetPriv_Series;





            var pUnsetPriv_Series = function () {

                this._v_Series = null;

            };
            if( pUnsetPriv_Series){}/* CQT */
            aPrototype.pUnsetPriv_Series = pUnsetPriv_Series;






            var pSetPriv_ItemElement = function ( theElement) {

                if( !theElement) {
                    return;
                }

               this._v_ItemElement = theElement;

            };
            if( pSetPriv_ItemElement){}/* CQT */
            aPrototype.pSetPriv_ItemElement = pSetPriv_ItemElement;




            var pUnsetPriv_ItemElement = function () {

                this._v_ItemElement = null;

            };
            if( pUnsetPriv_ItemElement){}/* CQT */
            aPrototype.pUnsetPriv_ItemElement = pUnsetPriv_ItemElement;








            var fIsEmpty = function () {

                if( !this._v_Elements || !this._v_Elements.length) {
                    return true;
                }

                return false;

            };
            if( fIsEmpty){}/* CQT */
            aPrototype.fIsEmpty = fIsEmpty;







            var fNew_Element = function ( theTag, theTagName) {

                if( !theTag) {
                    return null;
                }

                if( !this._v_Elements || !this._v_ElementsByTag) {
                    return;
                }

                var aNewElement = new theM_dicomelementrepr.DicomElementRepr_Constructor( this, theTag, theTagName);


                this._v_Elements.push( aNewElement);

                this._v_ElementsByTag[ theTag] = aNewElement;

                return aNewElement;

            };
            if( fNew_Element){}/* CQT */
            aPrototype.fNew_Element = fNew_Element;


            


            var fGet_Elements = function () {

                return this._v_Elements;
            };
            if( fGet_Elements){}/* CQT */
            aPrototype.fGet_Elements = fGet_Elements;



            var pSet_Elements = function ( theValue) {

                this._v_Elements = theValue;
            };
            if( pSet_Elements){}/* CQT */
            aPrototype.pSet_Elements = pSet_Elements;




            var pAdd_Element = function ( theElement) {

                if( !theElement) {
                    return;
                }

                if( !this._v_Elements) {
                    return;
                }

                var aTag = theElement.fGet_Tag();
                if( !aTag) {
                    return;
                }

                if( this._v_Elements.indexOf( theElement) >= 0) {
                    return;
                }

                this._v_Elements.push( theElement);

                this._v_ElementsByTag[ aTag] = theElement;

                theElement.pSetPriv_Instance( this);

            };
            if( pAdd_Element){}/* CQT */
            aPrototype.pAdd_Element = pAdd_Element;





            var pRemove_Element = function ( theElement) {

                if( !theElement) {
                    return;
                }

                if( !this._v_Elements) {
                    return;
                }

                var anElementIndex = this._v_Elements.indexOf( theElement);
                if( anElementIndex < 0) {
                    return;
                }

                this._v_Elements.splice( anElementIndex, 1);

                theElement.pUnsetPriv_Instance();


                if( this._v_ElementsByTag) {
                    var someElementKeys = Object.keys( this._v_Elements);
                    if( someElementKeys) {
                        var aNumElementKeys = someElementKeys.length;
                        for( var anElementKeyIdx=0; anElementKeyIdx < aNumElementKeys; anElementKeyIdx++) {
                            var anElementKey = someElementKeys[ anElementKeyIdx];
                            if( anElementKey) {
                                if( this._v_ElementsByTag.hasOwnProperty( anElementKey)) {

                                    delete this._v_ElementsByTag[ anElementKey];
                                }
                            }
                        }
                    }
                }


            };
            if( pRemove_Element){}/* CQT */
            aPrototype.pRemove_Element = pRemove_Element;













            var fGet_RetrievalSources = function () {

                return this._v_RetrievalSources;
            };
            if( fGet_RetrievalSources){}/* CQT */
            aPrototype.fGet_RetrievalSources = fGet_RetrievalSources;


            

            var pSet_RetrievalSources = function ( theValue) {

                this._v_RetrievalSources = theValue;
            };
            if( pSet_RetrievalSources){}/* CQT */
            aPrototype.pSet_RetrievalSources = pSet_RetrievalSources;









            var fNew_ItemInstance = function ( theParentElement, theInstanceId) {

                var aNewItemInstance = new DicomInstanceRepr_Constructor( null, theParentElement, theInstanceId);

                return aNewItemInstance;
            };
            if( fNew_ItemInstance){}/* CQT */
            aPrototype.fNew_ItemInstance = fNew_ItemInstance;









            var fAsLogObject = function( ) {

                var aLogObject = this._v_SuperPrototype.fAsLogObject.apply( this);

                if( !this._v_Elements) {
                    return aLogObject;
                }

                aLogObject[ "id"]       = this._v_InstanceId;


                var someElementsLogObjects = [ ];

                aLogObject[ "elements"] = someElementsLogObjects

                var aNumElements = this._v_Elements.length;
                for( var anElementIdx=0; anElementIdx < aNumElements; anElementIdx++) {

                    var anElement = this._v_Elements[ anElementIdx];
                    if( anElement) {
                        var anElementLogObject = anElement.fAsLogObject();
                        if( anElementLogObject) {
                            someElementsLogObjects.push( anElementLogObject);
                        }
                    }
                }

                return aLogObject;

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;







            return aPrototype;

        })();




        var DicomInstanceRepr_Constructor = function( theSeries, theItemElement, theInstanceId) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._v_Series            = null;
            this._v_ItemElement       = null;

            this._v_InstanceId        = null;

            this._v_Elements          = null;
            this._v_RetrievalSources  = null;

            this._pInit_DicomInstanceRepr( theSeries, theItemElement, theInstanceId);

        };
        DicomInstanceRepr_Constructor.prototype = aDicomInstanceRepr_Prototype;





        var DicomInstanceRepr_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = aDicomInstanceRepr_Prototype;

            this._v_Type = null;


            this._v_Series            = null;
            this._v_ItemElement       = null;

            this._v_InstanceId        = null;

            this._v_Elements          = null;
            this._v_RetrievalSources  = null;

        };
        DicomInstanceRepr_SuperPrototypeConstructor.prototype = aDicomInstanceRepr_Prototype;



        var aModule = {
            "DicomInstanceRepr_Prototype": aDicomInstanceRepr_Prototype,
            "DicomInstanceRepr_Constructor": DicomInstanceRepr_Constructor,
            "DicomInstanceRepr_SuperPrototypeConstructor": DicomInstanceRepr_SuperPrototypeConstructor
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
            var aM_dicomelementrepr   = require('./dicomelement-repr');
            var aM_dicomreprconstants = require('./dicom-repr-constants');
            var aM_sentinels          = require('../../common-test/sentinels');
            var aM_overrider          = require('../../common-test/overrider');
            var aM_conversions        = require('../../common-test/conversions');

            return aMod_definer(
                aM_dicomrepr,
                aM_dicomelementrepr,
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
            "./dicomelement-repr",
            "./dicom-repr-constants",
            "../../common-test/sentinels",
            "../../common-test/overrider",
            "../../common-test/conversions"
        ], function (
            theM_dicomrepr,
            theM_dicomelementrepr,
            theM_dicomreprconstants,
            theM_sentinels,
            theM_overrider,
            theM_conversions
        ) {
            return aMod_definer(
                theM_dicomrepr,
                theM_dicomelementrepr,
                theM_dicomreprconstants,
                theM_sentinels,
                theM_overrider,
                theM_conversions
            );
        });
    }

}());