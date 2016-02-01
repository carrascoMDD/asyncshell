'use strict';

/*
 dicomdirectory-repr.js
 Created 201511191147
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
                                 theM_dicompatientrepr,
                                 theM_dicomreprconstants,
                                 theM_sentinels,
                                 theM_overrider,
                                 theM_conversions) {


        var ModuleName     = "dicomdirectory-repr";
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










        var aDicomDirectoryRepr_Prototype = (function() {


            var aPrototype = new theM_dicomrepr.DicomRepr_Constructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            aPrototype._v_Type = "DicomDirectoryRepr";

            aPrototype._v_Prototype_DicomDirectoryRepr = aPrototype;


            aPrototype._v_DirectoryId       = null;

            aPrototype._v_Patients          = null;

            aPrototype._v_PatientsById      = null;




            var _pInit = function( theDirectoryId) {

                this._pInit_DicomDirectoryRepr( theDirectoryId);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomDirectoryRepr = function( theDirectoryId) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_DicomRepr.apply( this, []);


                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;


                if( theDirectoryId) {
                    this._v_DirectoryId       = theDirectoryId;
                }

                this._v_Patients          = [ ];

                this._v_PatientsById      = { };
            };
            if( _pInit_DicomDirectoryRepr){}/* CQT */
            aPrototype._pInit_DicomDirectoryRepr = _pInit_DicomDirectoryRepr;







            var  _pInit_DicomStructureType = function() {

                this._v_DicomStructureType = theM_dicomreprconstants.DICOMSTRUCTURETYPE_DIRECTORY;

            };
            if( _pInit_DicomStructureType){}/* CQT */
            aPrototype._pInit_DicomStructureType = _pInit_DicomStructureType;






            var _pRelease = function() {

                this._pRelease_DicomDirectoryRepr();
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomDirectoryRepr = function() {

                this._v_DirectoryId       = undefined;

                if( this._v_Patients) {
                    var aNumPatients = this._v_Patients.length;
                    for( var anPatientIdx=0; anPatientIdx < aNumPatients; anPatientIdx++) {
                        var anPatient = this._v_Patients[ anPatientIdx];
                        if( anPatient) {
                            anPatient._pRelease();
                        }
                    }
                }

                this._v_Patients          = undefined;

                this._v_PatientsById      = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_DicomRepr.apply( this, []);

            };
            if( _pRelease_DicomDirectoryRepr){}/* CQT */
            aPrototype._pRelease_DicomDirectoryRepr = _pRelease_DicomDirectoryRepr;













            var fIsEmpty = function () {

                if( !this._v_Patients || !this._v_Patients.length) {
                    return true;
                }

                return false;

            };
            if( fIsEmpty){}/* CQT */
            aPrototype.fIsEmpty = fIsEmpty;







            var fNew_Patient = function ( thePatientId) {

                if( !this._v_Patients || !this._v_PatientsById) {
                    return;
                }

                var aNewPatient = new theM_dicompatientrepr.DicomPatientRepr_Constructor( this, thePatientId);


                this._v_Patients.push( aNewPatient);

                if( thePatientId) {
                    this._v_PatientsById[ thePatientId] = aNewPatient;
                }

                return aNewPatient;

            };
            if( fNew_Patient){}/* CQT */
            aPrototype.fNew_Patient = fNew_Patient;





            var fGet_Patients = function () {

                return this._v_Patients;
            };
            if( fGet_Patients){}/* CQT */
            aPrototype.fGet_Patients = fGet_Patients;



            var pSet_Patients = function ( theValue) {

                this._v_Patients = theValue;
            };
            if( pSet_Patients){}/* CQT */
            aPrototype.pSet_Patients = pSet_Patients;




            var pAdd_Patient = function ( thePatient) {

                if( !thePatient) {
                    return;
                }

                if( !this._v_Patients) {
                    return;
                }

                var aPatientId = thePatient.fGet_PatientId();
                if( !aPatientId) {
                    return;
                }

                if( this._v_Patients.indexOf( thePatient) >= 0) {
                    return;
                }

                this._v_Patients.push( thePatient);

                this._v_PatientsById[ aPatientId] = thePatient;

                thePatient.pSetPriv_Directory( this);

            };
            if( pAdd_Patient){}/* CQT */
            aPrototype.pAdd_Patient = pAdd_Patient;





            var pRemove_Patient = function ( thePatient) {

                if( !thePatient) {
                    return;
                }

                if( !this._v_Patients) {
                    return;
                }

                var anPatientIndex = this._v_Patients.indexOf( thePatient);
                if( anPatientIndex < 0) {
                    return;
                }

                this._v_Patients.splice( anPatientIndex, 1);

                thePatient.pUnsetPriv_Directory();


                if( this._v_PatientsById) {
                    var somePatientKeys = Object.keys( this._v_Patients);
                    if( somePatientKeys) {
                        var aNumPatientKeys = somePatientKeys.length;
                        for( var anPatientKeyIdx=0; anPatientKeyIdx < aNumPatientKeys; anPatientKeyIdx++) {
                            var anPatientKey = somePatientKeys[ anPatientKeyIdx];
                            if( anPatientKey) {
                                if( this._v_PatientsById.hasOwnProperty( anPatientKey)) {

                                    delete this._v_PatientsById[ anPatientKey];
                                }
                            }
                        }
                    }
                }
            };
            if( pRemove_Patient){}/* CQT */
            aPrototype.pRemove_Patient = pRemove_Patient;











            var fAsLogObject = function( ) {

                var aLogObject = this._v_SuperPrototype.fAsLogObject.apply( this);

                if( !this._v_Patients) {
                    return aLogObject;
                }


                aLogObject[ "id"]       = this._v_DirectoryId;

                var somePatientsLogObjects = [ ];
                aLogObject[ "patients"] = somePatientsLogObjects

                var aNumPatients = this._v_Patients.length;
                for( var anPatientIdx=0; anPatientIdx < aNumPatients; anPatientIdx++) {

                    var anPatient = this._v_Patients[ anPatientIdx];
                    if( anPatient) {
                        var anPatientLogObject = anPatient.fAsLogObject();
                        if( anPatientLogObject) {
                            somePatientsLogObjects.push( anPatientLogObject);
                        }
                    }
                }

                return aLogObject;

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;







            return aPrototype;

        })();




        var DicomDirectoryRepr_Constructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._v_DirectoryId       = null;

            this._v_Patients          = null;
            this._v_RetrievalSources  = null;

            this._pInit_DicomDirectoryRepr();

        };
        DicomDirectoryRepr_Constructor.prototype = aDicomDirectoryRepr_Prototype;





        var DicomDirectoryRepr_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = aDicomDirectoryRepr_Prototype;

            this._v_Type = null;


            this._v_DirectoryId       = null;

            this._v_Patients          = null;
            this._v_RetrievalSources  = null;

        };
        DicomDirectoryRepr_SuperPrototypeConstructor.prototype = aDicomDirectoryRepr_Prototype;



        var aModule = {
            "DicomDirectoryRepr_Prototype": aDicomDirectoryRepr_Prototype,
            "DicomDirectoryRepr_Constructor": DicomDirectoryRepr_Constructor,
            "DicomDirectoryRepr_SuperPrototypeConstructor": DicomDirectoryRepr_SuperPrototypeConstructor
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
            var aM_dicompatientrepr   = require('./dicompatient-repr');
            var aM_dicomreprconstants = require('./dicom-repr-constants');
            var aM_sentinels          = require('../../common-test/sentinels');
            var aM_overrider          = require('../../common-test/overrider');
            var aM_conversions        = require('../../common-test/conversions');

            return aMod_definer(
                aM_dicomrepr,
                aM_dicompatientrepr,
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
            "./dicompatient-repr",
            "./dicom-repr-constants",
            "../../common-test/sentinels",
            "../../common-test/overrider",
            "../../common-test/conversions"
        ], function (
            theM_dicomrepr,
            theM_dicompatientrepr,
            theM_sentinels,
            theM_overrider,
            theM_conversions
        ) {
            return aMod_definer(
                theM_dicomrepr,
                theM_dicompatientrepr,
                theM_sentinels,
                theM_overrider,
                theM_conversions
            );
        });
    }

}());