'use strict';

/*
 dicominstance-repr.js
 Creado 201511190619
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
                                 theM_dicomseriesrepr,
                                 theM_dicomreprconstants,
                                 theM_sentinels,
                                 theM_overrider,
                                 theM_conversions) {


        var ModuleName     = "dicominstance-repr";
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










        var aDicomStudyRepr_Prototype = (function() {


            var aPrototype = new theM_dicomrepr.DicomRepr_Constructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            aPrototype._v_Type = "DicomStudyRepr";

            aPrototype._v_Prototype_DicomStudyRepr = aPrototype;


            aPrototype._v_Patient            = null;
            aPrototype._v_StudyId            = null;
            aPrototype._v_Series             = null;
            aPrototype._v_SeriesById         = null;




            var _pInit = function( thePatient, theStudyId) {

                this._pInit_DicomStudyRepr( thePatient, theStudyId);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomStudyRepr = function( thePatient, theStudyId) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_DicomRepr.apply( this, []);


                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;


                if( thePatient) {
                    this._v_Patient           = thePatient;
                }

                if( theStudyId) {
                    this._v_StudyId           = theStudyId;
                }

                this._v_Series            = [ ];

                this._v_SeriesById        = { };
            };
            if( _pInit_DicomStudyRepr){}/* CQT */
            aPrototype._pInit_DicomStudyRepr = _pInit_DicomStudyRepr;







            var  _pInit_DicomStructureType = function() {

                this._v_DicomStructureType = theM_dicomreprconstants.DICOMSTRUCTURETYPE_STUDY;

            };
            if( _pInit_DicomStructureType){}/* CQT */
            aPrototype._pInit_DicomStructureType = _pInit_DicomStructureType;






            var _pRelease = function() {

                this._pRelease_DicomStudyRepr();
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomStudyRepr = function() {

                this._v_Patient           = undefined;

                if( this._v_Series) {
                    var aNumSeries = this._v_Series.length;
                    for( var anSerieIdx=0; anSerieIdx < aNumSeries; anSerieIdx++) {
                        var anSerie = this._v_Series[ anSerieIdx];
                        if( anSerie) {
                            anSerie._pRelease();
                        }
                    }
                }

                this._v_Series          = undefined;

                this._v_SeriesById      = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_DicomRepr.apply( this, []);

            };
            if( _pRelease_DicomStudyRepr){}/* CQT */
            aPrototype._pRelease_DicomStudyRepr = _pRelease_DicomStudyRepr;









            var pSetPriv_Patient = function ( thePatient) {

                if( !thePatient) {
                    return;
                }

                this._v_Patient = thePatient;

            };
            if( pSetPriv_Patient){}/* CQT */
            aPrototype.pSetPriv_Patient = pSetPriv_Patient;









            var pUnsetPriv_Patient = function () {

                this._v_Patient = null;

            };
            if( pUnsetPriv_Patient){}/* CQT */
            aPrototype.pUnsetPriv_Patient = pUnsetPriv_Patient;











            var fIsEmpty = function () {

                if( !this._v_Series || !this._v_Series.length) {
                    return true;
                }

                return false;

            };
            if( fIsEmpty){}/* CQT */
            aPrototype.fIsEmpty = fIsEmpty;







            var fNew_Series = function ( theSeriesId) {

                if( !theSeriesId) {
                    return null;
                }

                if( !this._v_Series || !this._v_SeriesById) {
                    return;
                }

                var aNewSeries = new theM_dicomseriesrepr.DicomSeriesRepr_Constructor( this, theSeriesId);


                this._v_Series.push( aNewSeries);

                if( theSeriesId) {
                    this._v_SeriesById[ theSeriesId] = aNewSeries;
                }

                return aNewSeries;

            };
            if( fNew_Series){}/* CQT */
            aPrototype.fNew_Series = fNew_Series;





            var fGet_Series = function () {

                return this._v_Series;
            };
            if( fGet_Series){}/* CQT */
            aPrototype.fGet_Series = fGet_Series;



            var pSet_Series = function ( theValue) {

                this._v_Series = theValue;
            };
            if( pSet_Series){}/* CQT */
            aPrototype.pSet_Series = pSet_Series;




            var pAdd_Serie = function ( theSerie) {
                if( !this._v_Series) {
                    return;
                }

                var aTag = theSerie.fGet_Tag();
                if( !aTag) {
                    return;
                }

                if( this._v_Series.indexOf( theSerie) >= 0) {
                    return;
                }

                this._v_Series.push( theSerie);

                this._v_SeriesById[ aTag] = theSerie;

                theSerie.pSetPriv_Instance( this);

            };
            if( pAdd_Serie){}/* CQT */
            aPrototype.pAdd_Serie = pAdd_Serie;





            var pRemove_Serie = function ( theSerie) {
                if( !this._v_Series) {
                    return;
                }

                var anSerieIndex = this._v_Series.indexOf( theSerie);
                if( anSerieIndex < 0) {
                    return;
                }

                this._v_Series.splice( anSerieIndex, 1);

                theSerie.pUnsetPriv_Study();


                if( this._v_SeriesById) {
                    var someSerieKeys = Object.keys( this._v_Series);
                    if( someSerieKeys) {
                        var aNumSerieKeys = someSerieKeys.length;
                        for( var anSerieKeyIdx=0; anSerieKeyIdx < aNumSerieKeys; anSerieKeyIdx++) {
                            var anSerieKey = someSerieKeys[ anSerieKeyIdx];
                            if( anSerieKey) {
                                if( this._v_SeriesById.hasOwnProperty( anSerieKey)) {

                                    delete this._v_SeriesById[ anSerieKey];
                                }
                            }
                        }
                    }
                }


            };
            if( pRemove_Serie){}/* CQT */
            aPrototype.pRemove_Serie = pRemove_Serie;













            var fAsLogObject = function( ) {

                var aLogObject = this._v_SuperPrototype.fAsLogObject.apply( this);

                if( !this._v_Series) {
                    return aLogObject;
                }

                aLogObject[ "id"]       = this._v_StudyId;

                var someSeriesLogObjects = [ ];

                aLogObject[ "series"] = someSeriesLogObjects

                var aNumSeries = this._v_Series.length;
                for( var anSerieIdx=0; anSerieIdx < aNumSeries; anSerieIdx++) {

                    var anSerie = this._v_Series[ anSerieIdx];
                    if( anSerie) {
                        var anSerieLogObject = anSerie.fAsLogObject();
                        if( anSerieLogObject) {
                            someSeriesLogObjects.push( anSerieLogObject);
                        }
                    }
                }

                return aLogObject;

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;







            return aPrototype;

        })();




        var DicomStudyRepr_Constructor = function( thePatient, theStudyId) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Patient           = null;
            this._v_StudyId           = null;
            this._v_Series            = null;
            this._v_SeriesById        = null;

            this._pInit_DicomStudyRepr( thePatient, theStudyId);

        };
        DicomStudyRepr_Constructor.prototype = aDicomStudyRepr_Prototype;





        var DicomStudyRepr_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomrepr.DicomRepr_Prototype;

            this._v_Prototype = aDicomStudyRepr_Prototype;

            this._v_Type = null;

            this._v_Patient           = null;
            this._v_StudyId           = null;
            this._v_Series            = null;
            this._v_SeriesById        = null;

        };
        DicomStudyRepr_SuperPrototypeConstructor.prototype = aDicomStudyRepr_Prototype;



        var aModule = {
            "DicomStudyRepr_Prototype": aDicomStudyRepr_Prototype,
            "DicomStudyRepr_Constructor": DicomStudyRepr_Constructor,
            "DicomStudyRepr_SuperPrototypeConstructor": DicomStudyRepr_SuperPrototypeConstructor
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
            var aM_dicomseriesrepr    = require('./dicomseries-repr');
            var aM_dicomreprconstants = require('./dicom-repr-constants');
            var aM_sentinels          = require('../../common-test/sentinels');
            var aM_overrider          = require('../../common-test/overrider');
            var aM_conversions        = require('../../common-test/conversions');

            return aMod_definer(
                aM_dicomrepr,
                aM_dicomseriesrepr,
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
            "./dicomseries-repr",
            "./dicom-repr-constants",
            "../../common-test/sentinels",
            "../../common-test/overrider",
            "../../common-test/conversions"
        ], function (
            theM_dicomrepr,
            theM_dicomseriesrepr,
            theM_dicomreprconstants,
            theM_sentinels,
            theM_overrider,
            theM_conversions
        ) {
            return aMod_definer(
                theM_dicomrepr,
                theM_dicomseriesrepr,
                theM_dicomreprconstants,
                theM_sentinels,
                theM_overrider,
                theM_conversions
            );
        });
    }

}());