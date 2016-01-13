'use strict';

/*
 dicomseries-repr.js
 Creado 201511191206
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
    var aMod_definer = function( theM_dicomrepr,
                                 theM_dicominstancerepr,
                                 theM_dicomreprconstants,
                                 theM_sentinels,
                                 theM_overrider,
                                 theM_conversions) {


        var ModuleName     = "dicomseries-repr";
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










        var aDicomSeriesRepr_Prototype = (function() {


            var aPrototype = new theM_dicomrepr.DicomRepr_Constructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            aPrototype._v_Type = "DicomSeriesRepr";

            aPrototype._v_Prototype_DicomSeriesRepr = aPrototype;


            aPrototype._v_Study             = null;
            aPrototype._v_SeriesId          = null;
            aPrototype._v_Instances         = null;
            aPrototype._v_InstancesById     = null;




            var _pInit = function( theStudy, theSeriesId) {

                this._pInit_DicomSeriesRepr( theStudy, theSeriesId);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomSeriesRepr = function( theStudy, theSeriesId) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_DicomRepr.apply( this, []);


                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;


                if( theStudy) {
                    this._v_Study             = theStudy;
                }

                if( theSeriesId) {
                    this._v_SeriesId          = theSeriesId;
                }

                this._v_Instances         = [ ];

                this._v_InstancesById     = { };
            };
            if( _pInit_DicomSeriesRepr){}/* CQT */
            aPrototype._pInit_DicomSeriesRepr = _pInit_DicomSeriesRepr;







            var  _pInit_DicomStructureType = function() {

                this._v_DicomStructureType = theM_dicomreprconstants.DICOMSTRUCTURETYPE_SERIES;

            };
            if( _pInit_DicomStructureType){}/* CQT */
            aPrototype._pInit_DicomStructureType = _pInit_DicomStructureType;






            var _pRelease = function() {

                this._pRelease_DicomSeriesRepr();
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomSeriesRepr = function() {

                this._v_Study             = undefined;

                this._v_SeriesId          = undefined;

                if( this._v_Instances) {
                    var aNumInstances = this._v_Instances.length;
                    for( var anInstanceIdx=0; anInstanceIdx < aNumInstances; anInstanceIdx++) {
                        var anInstance = this._v_Instances[ anInstanceIdx];
                        if( anInstance) {
                            anInstance._pRelease();
                        }
                    }
                }

                this._v_Instances          = undefined;

                this._v_InstancesById     = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_DicomRepr.apply( this, []);

            };
            if( _pRelease_DicomSeriesRepr){}/* CQT */
            aPrototype._pRelease_DicomSeriesRepr = _pRelease_DicomSeriesRepr;










            var pSetPriv_Study = function ( theStudy) {

                if( !theStudy) {
                    return;
                }

                this._v_Study = null;

            };
            if( pSetPriv_Study){}/* CQT */
            aPrototype.pSetPriv_Study = pSetPriv_Study;








            var pUnsetPriv_Study = function () {

                this._v_Study = null;

            };
            if( pUnsetPriv_Study){}/* CQT */
            aPrototype.pUnsetPriv_Study = pUnsetPriv_Study;








            var fIsEmpty = function () {

                if( !this._v_Instances || !this._v_Instances.length) {
                    return true;
                }

                return false;

            };
            if( fIsEmpty){}/* CQT */
            aPrototype.fIsEmpty = fIsEmpty;







            var fNew_Instance = function ( theInstanceId) {

                if( !theInstanceId) {
                    return null;
                }

                if( !this._v_Instances || !this._v_InstancesById) {
                    return;
                }

                var aNewInstance = new theM_dicominstancerepr.DicomInstanceRepr_Constructor( this, null, theInstanceId);

                this._v_Instances.push( aNewInstance);

                if( theInstanceId) {
                    this._v_InstancesById[ theInstanceId] = aNewInstance;
                }

                return aNewInstance;

            };
            if( fNew_Instance){}/* CQT */
            aPrototype.fNew_Instance = fNew_Instance;





            var fGet_Instances = function () {

                return this._v_Instances;
            };
            if( fGet_Instances){}/* CQT */
            aPrototype.fGet_Instances = fGet_Instances;



            var pSet_Instances = function ( theValue) {

                this._v_Instances = theValue;
            };
            if( pSet_Instances){}/* CQT */
            aPrototype.pSet_Instances = pSet_Instances;




            var pAdd_Instance = function ( theInstance) {

                if( !theInstance) {
                    return;
                }

                if( !this._v_Instances) {
                    return;
                }

                var anInstanceId = theInstance.fGet_InstanceId();
                if( !anInstanceId) {
                    return;
                }

                if( this._v_Instances.indexOf( theInstance) >= 0) {
                    return;
                }

                this._v_Instances.push( theInstance);

                this._v_InstancesById[ anInstanceId] = theInstance;

                theInstance.pSetPriv_Series( this);

            };
            if( pAdd_Instance){}/* CQT */
            aPrototype.pAdd_Instance = pAdd_Instance;





            var pRemove_Instance = function ( theInstance) {

                if( !theInstance) {
                    return;
                }


                if( !this._v_Instances) {
                    return;
                }

                var anInstanceIndex = this._v_Instances.indexOf( theInstance);
                if( anInstanceIndex < 0) {
                    return;
                }

                this._v_Instances.splice( anInstanceIndex, 1);

                theInstance.pUnsetPriv_Series();


                if( this._v_InstancesById) {
                    var someInstanceKeys = Object.keys( this._v_Instances);
                    if( someInstanceKeys) {
                        var aNumInstanceKeys = someInstanceKeys.length;
                        for( var anInstanceKeyIdx=0; anInstanceKeyIdx < aNumInstanceKeys; anInstanceKeyIdx++) {
                            var anInstanceKey = someInstanceKeys[ anInstanceKeyIdx];
                            if( anInstanceKey) {
                                if( this._v_InstancesById.hasOwnProperty( anInstanceKey)) {

                                    delete this._v_InstancesById[ anInstanceKey];
                                }
                            }
                        }
                    }
                }


            };
            if( pRemove_Instance){}/* CQT */
            aPrototype.pRemove_Instance = pRemove_Instance;










            var fAsLogObject = function( ) {

                var aLogObject = this._v_SuperPrototype.fAsLogObject.apply( this);

                if( !this._v_Instances) {
                    return aLogObject;
                }

                aLogObject[ "id"]       = this._v_SeriesId;


                var someInstancesLogObjects = [ ];

                aLogObject[ "instances"] = someInstancesLogObjects

                var aNumInstances = this._v_Instances.length;
                for( var anInstanceIdx=0; anInstanceIdx < aNumInstances; anInstanceIdx++) {

                    var anInstance = this._v_Instances[ anInstanceIdx];
                    if( anInstance) {
                        var anInstanceLogObject = anInstance.fAsLogObject();
                        if( anInstanceLogObject) {
                            someInstancesLogObjects.push( anInstanceLogObject);
                        }
                    }
                }

                return aLogObject;

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;







            return aPrototype;

        })();




        var DicomSeriesRepr_Constructor = function( theStudy, theSeriesId) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Instances          = null;
            this._v_RetrievalSources  = null;

            this._pInit_DicomSeriesRepr( theStudy, theSeriesId);

        };
        DicomSeriesRepr_Constructor.prototype = aDicomSeriesRepr_Prototype;





        var DicomSeriesRepr_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = aDicomSeriesRepr_Prototype;

            this._v_Type = null;

            this._v_Instances          = null;
            this._v_RetrievalSources  = null;

        };
        DicomSeriesRepr_SuperPrototypeConstructor.prototype = aDicomSeriesRepr_Prototype;



        var aModule = {
            "DicomSeriesRepr_Prototype": aDicomSeriesRepr_Prototype,
            "DicomSeriesRepr_Constructor": DicomSeriesRepr_Constructor,
            "DicomSeriesRepr_SuperPrototypeConstructor": DicomSeriesRepr_SuperPrototypeConstructor
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
            var aM_dicominstancerepr  = require('./dicominstance-repr');
            var aM_dicomreprconstants = require('./dicom-repr-constants');
            var aM_sentinels          = require('../../common-test/sentinels');
            var aM_overrider          = require('../../common-test/overrider');
            var aM_conversions        = require('../../common-test/conversions');

            return aMod_definer(
                aM_dicomrepr,
                aM_dicominstancerepr,
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
            "./dicominstance-repr",
            "./dicom-repr-constants",
            "../../common-test/sentinels",
            "../../common-test/overrider",
            "../../common-test/conversions"
        ], function (
            theM_dicomrepr,
            theM_dicominstancerepr,
            theM_dicomreprconstants,
            theM_sentinels,
            theM_overrider,
            theM_conversions
        ) {
            return aMod_definer(
                theM_dicomrepr,
                theM_dicominstancerepr,
                theM_dicomreprconstants,
                theM_sentinels,
                theM_overrider,
                theM_conversions
            );
        });
    }

}());