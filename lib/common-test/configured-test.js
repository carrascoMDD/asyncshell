'use strict';

/*
 configured-test.js
 Created 201408050911
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
    var aMod_definer =function( theM_withstatus_test,
                                theM_traversals,
                                theM_overrider) {


        var ModuleName     = "configured-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.RELEASE_CONFIGURED_CONFIGURATION = false;
            theToInit.RELEASE_CONFIGURED_UNLINKCONFIGURATION = true;

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


        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
        pgInitWithModuleConstants( ModuleConstants);







        var aConfiguredTest_Prototype = (function() {


            var aPrototype = new theM_withstatus_test.WithStatusTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_withstatus_test.WithStatusTest_Prototype;

            aPrototype._v_Type = "ConfiguredTest";

            aPrototype._v_Prototype_ConfiguredTest = aPrototype;


            aPrototype._v_Configuration = null;






            var _pInit = function( theTitle, theConfiguration) {

                this._pInit_Configured( theTitle, theConfiguration);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Configured = function( theTitle, theConfiguration) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_WithStatus.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Configuration = theConfiguration;
            };
            if( _pInit_Configured){}/* CQT */
            aPrototype._pInit_Configured = _pInit_Configured;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Configured( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Configured = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_Configuration = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_WithStatus.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Configured){}/* CQT */
            aPrototype._pRelease_Configured = _pRelease_Configured;









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

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }


                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_Configured( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;










            var pCleanUpTest_Configured = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);

                    this.pUpdateCleanedUpWithWhatToClean( theWhatToClean);

                    return;
                }

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_Configuration = undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_WithStatus.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Configured){}/* CQT */
            aPrototype.pCleanUpTest_Configured = pCleanUpTest_Configured;













            var fResolvedParmValue = function( theParmName) {

                if( !theParmName) {
                    return null;
                }

                if( !this._v_Configuration) {
                    return null;
                }

                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( [ theParmName]);
                if( !aParmResolutionsDict) {
                    return null;
                }


                var aResolution = aParmResolutionsDict[ theParmName];
                if( !aResolution || !aResolution._v_Success) {
                    return null;
                }

                return aResolution._v_ParmValue;
            };
            if( fResolvedParmValue){}/* CQT */
            aPrototype.fResolvedParmValue = fResolvedParmValue;








            var fParmValueReplacement = function( theParmName) {

                if( !theParmName) {
                    return null;
                }

                if( !this._v_Configuration) {
                    return null;
                }

                if( !( typeof theParmName == "string")) {
                    return theParmName;
                }

                var aReplacementValue = theM_traversals.fgParmValueReplacement( this._v_Configuration, theParmName);
                return aReplacementValue;
            };
            if( fParmValueReplacement){}/* CQT */
            aPrototype.fParmValueReplacement = fParmValueReplacement;










            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = null;
                if( !( aPrototype._v_SuperPrototype.fToResultJSON === fToResultJSON)) {
                    aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);
                }
                else {
                    aResultJSON = {};
                }

                if( this._v_Configuration) {
                    if( theCommonObjects) {
                        var aAlreadyInCommon = theCommonObjects.fCommonEntryFor( this._v_Configuration);
                        if( aAlreadyInCommon){}/* CQT */
                        aResultJSON[ "config"] = aAlreadyInCommon;
                    }
                    else {

                        if( this._v_Configuration) {
                            var aHasValues = false;
                            for( var aPropertyName in this._v_Configuration) {
                                if( this._v_Configuration.hasOwnProperty( aPropertyName)) {
                                    aHasValues = true;
                                    break;
                                }
                            }
                            if( aHasValues) {
                                aResultJSON[ "config"] = this._v_Configuration;
                            }
                        }
                    }
                }

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;





            return aPrototype;

        })();


        var ConfiguredTest_Constructor = function( theTitle, theConfiguration) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withstatus_test.WithStatusTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Configuration = null;

            this._pInit_Configured( theTitle, theConfiguration);

        };
        ConfiguredTest_Constructor.prototype = aConfiguredTest_Prototype;





        var ConfiguredTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withstatus_test.WithStatusTest_Prototype;

            this._v_Prototype = aConfiguredTest_Prototype;
            this._v_Type = null;

            this._v_Configuration = null;
        };
        ConfiguredTest_SuperPrototypeConstructor.prototype = aConfiguredTest_Prototype;



        var aModule = {
            "ConfiguredTest_Prototype": aConfiguredTest_Prototype,
            "ConfiguredTest_Constructor": ConfiguredTest_Constructor,
            "ConfiguredTest_SuperPrototypeConstructor": ConfiguredTest_SuperPrototypeConstructor
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

            var aM_withstatus_test    = require('./withstatus-test');
            var aM_traversals         = require('./traversals/traversals');
            var aM_overrider          = require('./overrider');

            return aMod_definer(
                aM_withstatus_test,
                aM_traversals,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./withstatus-test",
            "./traversals/traversals",
            "./overrider"
        ], function (
            theM_withstatus_test,
            theM_traversals,
            theM_overrider
        ) {
            return aMod_definer(
                theM_withstatus_test,
                theM_traversals,
                theM_overrider
            );
        });
    }


}());



