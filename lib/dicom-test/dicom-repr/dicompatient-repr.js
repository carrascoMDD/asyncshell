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
                                 theM_dicomstudyrepr,
                                 theM_dicomreprconstants,
                                 theM_sentinels,
                                 theM_overrider,
                                 theM_conversions) {


        var ModuleName     = "dicompatient-repr";
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










        var aDicomPatientRepr_Prototype = (function() {


            var aPrototype = new theM_dicomrepr.DicomRepr_Constructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            aPrototype._v_Type = "DicomPatientRepr";

            aPrototype._v_Prototype_DicomPatientRepr = aPrototype;


            aPrototype._v_Directory        = null;
            aPrototype._v_PatientId        = null;
            aPrototype._v_Studies          = null;
            aPrototype._v_StudiesById      = null;




            var _pInit = function( theDirectory, thePatientId) {

                this._pInit_DicomPatientRepr( theDirectory, thePatientId);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomPatientRepr = function( theDirectory, thePatientId) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_DicomRepr.apply( this, []);


                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;


                if( theDirectory) {
                    this._v_Directory       = theDirectory;
                }

                if( thePatientId) {
                    this._v_PatientId       = thePatientId;
                }

                this._v_Studies         = [ ];

                this._v_StudiesById     = { };
            };
            if( _pInit_DicomPatientRepr){}/* CQT */
            aPrototype._pInit_DicomPatientRepr = _pInit_DicomPatientRepr;







            var  _pInit_DicomStructureType = function() {

                this._v_DicomStructureType = theM_dicomreprconstants.DICOMSTRUCTURETYPE_PATIENT;

            };
            if( _pInit_DicomStructureType){}/* CQT */
            aPrototype._pInit_DicomStructureType = _pInit_DicomStructureType;






            var _pRelease = function() {

                this._pRelease_DicomPatientRepr();
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomPatientRepr = function() {

                this._v_Directory        = undefined;

                this._v_PatientId        = undefined;


                if( this._v_Studies) {
                    var aNumStudies = this._v_Studies.length;
                    for( var anStudyIdx=0; anStudyIdx < aNumStudies; anStudyIdx++) {
                        var anStudy = this._v_Studies[ anStudyIdx];
                        if( anStudy) {
                            anStudy._pRelease();
                        }
                    }
                }

                this._v_Studies         = undefined;

                this._v_StudiesById     = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_DicomRepr.apply( this, []);

            };
            if( _pRelease_DicomPatientRepr){}/* CQT */
            aPrototype._pRelease_DicomPatientRepr = _pRelease_DicomPatientRepr;






            var pSetPriv_Directory = function ( theDirectory) {
                if( !theDirectory) {
                    return;
                }

                this._v_Directory = theDirectory;

            };
            if( pSetPriv_Directory){}/* CQT */
            aPrototype.pSetPriv_Directory = pSetPriv_Directory;








            var pUnsetPriv_Directory = function () {

                this._v_Directory = null;

            };
            if( pUnsetPriv_Directory){}/* CQT */
            aPrototype.pUnsetPriv_Directory = pUnsetPriv_Directory;








            var fIsEmpty = function () {

                if( !this._v_Studies || !this._v_Studies.length) {
                    return true;
                }

                return false;

            };
            if( fIsEmpty){}/* CQT */
            aPrototype.fIsEmpty = fIsEmpty;







            var fNew_Study = function ( theStudyId) {

                if( !this._v_Studies || !this._v_StudiesById) {
                    return;
                }

                var aNewStudy = new theM_dicomstudyrepr.DicomStudyRepr_Constructor( this, theStudyId);


                this._v_Studies.push( aNewStudy);

                if( theStudyId) {
                    this._v_StudiesById[ theStudyId] = aNewStudy;
                }

                return aNewStudy;

            };
            if( fNew_Study){}/* CQT */
            aPrototype.fNew_Study = fNew_Study;





            var fGet_Studies = function () {

                return this._v_Studies;
            };
            if( fGet_Studies){}/* CQT */
            aPrototype.fGet_Studies = fGet_Studies;



            var pSet_Studies = function ( theValue) {

                this._v_Studies = theValue;
            };
            if( pSet_Studies){}/* CQT */
            aPrototype.pSet_Studies = pSet_Studies;






            var pAdd_Study = function ( theStudy) {

                if( !theStudy) {
                    return;
                }

                if( !this._v_Studies) {
                    return;
                }

                var aStudyId = theStudy.fGet_StudyId();
                if( !aStudyId) {
                    return;
                }

                if( this._v_Studies.indexOf( theStudy) >= 0) {
                    return;
                }

                this._v_Studies.push( theStudy);

                this._v_StudiesById[ aStudyId] = theStudy;

                theStudy.pSetPriv_Patient( this);

            };
            if( pAdd_Study){}/* CQT */
            aPrototype.pAdd_Study = pAdd_Study;





            var pRemove_Study = function ( theStudy) {

                if( !theStudy) {
                    return;
                }

                if( !this._v_Studies) {
                    return;
                }

                var anStudyIndex = this._v_Studies.indexOf( theStudy);
                if( anStudyIndex < 0) {
                    return;
                }

                this._v_Studies.splice( anStudyIndex, 1);

                theStudy.pUnsetPriv_Patient();


                if( this._v_StudiesById) {
                    var someStudyKeys = Object.keys( this._v_Studies);
                    if( someStudyKeys) {
                        var aNumStudyKeys = someStudyKeys.length;
                        for( var anStudyKeyIdx=0; anStudyKeyIdx < aNumStudyKeys; anStudyKeyIdx++) {
                            var anStudyKey = someStudyKeys[ anStudyKeyIdx];
                            if( anStudyKey) {
                                if( this._v_StudiesById.hasOwnProperty( anStudyKey)) {

                                    delete this._v_StudiesById[ anStudyKey];
                                }
                            }
                        }
                    }
                }


            };
            if( pRemove_Study){}/* CQT */
            aPrototype.pRemove_Study = pRemove_Study;










            var fAsLogObject = function( ) {

                var aLogObject = this._v_SuperPrototype.fAsLogObject.apply( this);

                if( !this._v_Studies) {
                    return aLogObject;
                }

                aLogObject[ "id"]       = this._v_PatientId;

                var someStudiesLogObjects = [ ];

                aLogObject[ "elements"] = someStudiesLogObjects

                var aNumStudies = this._v_Studies.length;
                for( var anStudyIdx=0; anStudyIdx < aNumStudies; anStudyIdx++) {

                    var anStudy = this._v_Studies[ anStudyIdx];
                    if( anStudy) {
                        var anStudyLogObject = anStudy.fAsLogObject();
                        if( anStudyLogObject) {
                            someStudiesLogObjects.push( anStudyLogObject);
                        }
                    }
                }

                return aLogObject;

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;







            return aPrototype;

        })();




        var DicomPatientRepr_Constructor = function( theDirectory, thePatientId) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Directory         = null;
            this._v_PatientId         = null;
            this._v_Studies           = null;
            this._v_RetrievalSources  = null;

            this._pInit_DicomPatientRepr( theDirectory, thePatientId);

        };
        DicomPatientRepr_Constructor.prototype = aDicomPatientRepr_Prototype;





        var DicomPatientRepr_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = aDicomPatientRepr_Prototype;

            this._v_Type = null;

            this._v_Directory         = null;
            this._v_PatientId         = null;
            this._v_Studies           = null;
            this._v_RetrievalSources  = null;

        };
        DicomPatientRepr_SuperPrototypeConstructor.prototype = aDicomPatientRepr_Prototype;



        var aModule = {
            "DicomPatientRepr_Prototype": aDicomPatientRepr_Prototype,
            "DicomPatientRepr_Constructor": DicomPatientRepr_Constructor,
            "DicomPatientRepr_SuperPrototypeConstructor": DicomPatientRepr_SuperPrototypeConstructor
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
            var aM_dicomstudyrepr     = require('./dicomstudy-repr');
            var aM_dicomreprconstants = require('./dicom-repr-constants');
            var aM_sentinels          = require('../../common-test/sentinels');
            var aM_overrider          = require('../../common-test/overrider');
            var aM_conversions        = require('../../common-test/conversions');

            return aMod_definer(
                aM_dicomrepr,
                aM_dicomstudyrepr,
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
            theM_dicomstudyrepr,
            theM_dicomreprconstants,
            theM_sentinels,
            theM_overrider,
            theM_conversions
        ) {
            return aMod_definer(
                theM_dicomrepr,
                theM_dicomstudyrepr,
                theM_dicomreprconstants,
                theM_sentinels,
                theM_overrider,
                theM_conversions
            );
        });
    }

}());