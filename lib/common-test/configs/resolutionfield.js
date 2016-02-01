'use strict';

/*
 resolutionfield.js
 Created 201408122316
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

    var aMod_definer =function( theM_resolutionconfig) {


        var ModuleName     = "resolutionfield";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.FIELDRESOLUTIONKIND_FIELDS       = "FIELDS";
            theToInit.FIELDRESOLUTIONKIND_OWNERCONFIG  = "OWNERCONFIG";
            theToInit.FIELDRESOLUTIONKIND_IMPORTED     = "IMPORTED";

            theToInit.FIELDRESOLUTIONKINDS = [
                theToInit.FIELDRESOLUTIONKIND_FIELDS,
                theToInit.FIELDRESOLUTIONKIND_OWNERCONFIG,
                theToInit.FIELDRESOLUTIONKIND_IMPORTED
            ]
        };



        var ModuleConstants = {};
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







        var aResolutionField_Prototype = (function() {


            var aPrototype = new theM_resolutionconfig.ResolutionConfig_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_resolutionconfig.ResolutionConfig_Prototype;


            aPrototype._v_Type = "ResolutionField";


            aPrototype._v_FieldName  = null;
            aPrototype._v_FieldValue = null;






            var _pInit = function( theTitle, theIdentifier, theConfigQuery, theFieldName) {

                this._pInit_ResolutionField( theTitle, theIdentifier, theConfigQuery, theFieldName);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_ResolutionField = function( theTitle, theIdentifier, theConfiguration, theFieldName) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ResolutionConfig.apply( this, [  theTitle, theIdentifier, theConfiguration]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_FieldName  = theFieldName;
                this._v_FieldValue = null;
            };
            if( _pInit_ResolutionField){}/* CQT */
            aPrototype._pInit_ResolutionField = _pInit_ResolutionField;


















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ResolutionField( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_ResolutionField = function( theReleaseParms, theReleaseDone) {

                this._v_FieldName  = undefined;
                this._v_FieldValue = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ResolutionConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ResolutionField){}/* CQT */
            aPrototype._pRelease_ResolutionField = _pRelease_ResolutionField;







            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

            };
            if( _pReleaseChildrenInto){}/* CQT */
            aPrototype._pReleaseChildrenInto = _pReleaseChildrenInto;










            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_CONFIGS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_ResolutionField( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ResolutionField= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_FieldName  = undefined;
                    this._v_FieldValue = undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ResolutionConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ResolutionField){}/* CQT */
            aPrototype.pCleanUpTest_ResolutionField = pCleanUpTest_ResolutionField;



















            var pResolveFieldWithValue = function( theValue, theResolutionSourceKind, theResolverResolution) {

                this._v_FieldValue = theValue;


                aPrototype._v_SuperPrototype.pResolveWithValue.apply( this, [  theValue, theResolutionSourceKind, theResolverResolution]);


                if( this._v_ResolvedResolutions) {

                    var aNumResolvedResolutions = this._v_ResolvedResolutions.length;
                    for( var aResolvedResolutionIdx=0; aResolvedResolutionIdx < aNumResolvedResolutions; aResolvedResolutionIdx++) {

                        var aResolvedResolution = this._v_ResolvedResolutions[ aResolvedResolutionIdx];

                        aResolvedResolution.pResolveFieldWithValue( theValue);
                    }
                }
            };
            if( pResolveFieldWithValue){}/* CQT */
            aPrototype.pResolveFieldWithValue = pResolveFieldWithValue;








            var fAsLogObject = function( ) {
                return this.fToResultJSON();
            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;



            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */

                var aResultJSON = {
                    "fieldName": this._v_FieldName,
                    "success": this._v_Success,
                    "fieldValue": this._v_FieldValue
                };
                if( aResultJSON){}/* CQT */

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();







        var ResolutionField_Constructor = function( theTitle, theIdentifier, theConfigQuery, theFieldName) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_resolutionconfig.ResolutionConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_FieldName  = null;
            this._v_FieldValue = null;

            this._pInit_ResolutionField( theTitle, theIdentifier, theConfigQuery, theFieldName);
        };
        ResolutionField_Constructor.prototype = aResolutionField_Prototype;





        var ResolutionField_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_resolutionconfig.ResolutionConfig_Prototype;

            this._v_Prototype = aResolutionField_Prototype;
            this._v_Type = null;

            this._v_FieldName  = null;
            this._v_FieldValue = null;
        };
        ResolutionField_SuperPrototypeConstructor.prototype = aResolutionField_Prototype;



        var aModule = {
            "ResolutionField_Prototype": aResolutionField_Prototype,
            "ResolutionField_Constructor": ResolutionField_Constructor,
            "ResolutionField_SuperPrototypeConstructor": ResolutionField_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);

        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_resolutionconfig   = require('./resolutionconfig');

            return aMod_definer( aM_resolutionconfig);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "./resolutionconfig"], function ( theM_resolutionconfig) {
            return aMod_definer( theM_resolutionconfig);
        });
    }


}());