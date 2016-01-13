'use strict';

/*
 identified-test.js
 Creado 201408050911
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
    var aMod_definer = function( theM_configured_test,
                                 theM_identifier,
                                 theM_overrider) {


        var ModuleName     = "identified-test";
        var ModulePackages = "common-test";
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






        var aIdentifiedTest_Prototype = (function() {


            var aPrototype = new theM_configured_test.ConfiguredTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_configured_test.ConfiguredTest_Prototype;

            aPrototype._v_Type = "IdentifiedTest";

            aPrototype._v_Prototype_IdentifiedTest = aPrototype;


            aPrototype._v_Identifier = null;
            aPrototype._v_IdentifierIsOwn = null;







            var _pInit = function( theTitle, theConfiguration, theIdentifier) {

                this._pInit_IdentifiedTest( theTitle, theConfiguration, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_IdentifiedTest = function( theTitle, theConfiguration, theIdentifier) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Configured.apply( this, [ theTitle, theConfiguration]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_Identifier = theIdentifier;
                this._v_IdentifierIsOwn = false;
                if( !this._v_Identifier) {
                    this._v_IdentifierIsOwn = true;
                    this._v_Identifier = new theM_identifier.IdentifierTest_Constructor( theConfiguration);
                }

                this._v_Id = this.fReserveId();
                this._v_Title = theTitle;
                if( this._v_Title == null) {
                    this._v_Title = "";
                }
            };
            if( _pInit_IdentifiedTest){}/* CQT */
            aPrototype._pInit_IdentifiedTest = _pInit_IdentifiedTest;













            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Identified( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;








            var _pRelease_Identified = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                if( this._v_Identifier) {
                    if( this._v_IdentifierIsOwn) {
                        if( typeof this._v_Identifier._pRelease == "function") {
                            this._v_Identifier._pRelease( theReleaseParms, theReleaseDone);
                        }
                    }
                }

                this._v_Identifier = undefined;
                this._v_IdentifierIsOwn = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Configured.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Identified){}/* CQT */
            aPrototype._pRelease_Identified = _pRelease_Identified;












            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

                if( this._v_Identifier) {
                    if( this._v_IdentifierIsOwn) {
                        if( theReleaseChildren.indexOf( this._v_Identifier) < 0) {
                            theReleaseChildren.push( this._v_Identifier);
                            if( typeof this._v_Identifier._pReleaseChildrenInto == "function") {
                                this._v_Identifier._pReleaseChildrenInto( theReleaseChildren);
                            }
                        }
                    }
                }
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

                this.pCleanUpTest_Identified( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Identified= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Configured.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Identified){}/* CQT */
            aPrototype.pCleanUpTest_Identified = pCleanUpTest_Identified;

















            var fReserveId = function() {

                if( !this._v_Identifier) {
                    return null;
                }

                return  this._v_Identifier.fReserveId();
            };
            if( fReserveId){}/* CQT */
            aPrototype.fReserveId = fReserveId;










            var fReserveCallbackId = function() {

                if( !this._v_Identifier) {
                    return null;
                }

                return  this._v_Identifier.fReserveCallbackId();
            };
            if( fReserveCallbackId){}/* CQT */
            aPrototype.fReserveCallbackId = fReserveCallbackId;






            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "id":   this._v_Id,
                    "type": this._v_Type
                };
                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;






            var fIdentifyingWithTitleJSON = function() {

                var aIdentifiyingJSON = {
                    "id":    this._v_Id,
                    "type":  this._v_Type,
                    "title": this._v_Title
                };
                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingWithTitleJSON){}/* CQT */
            aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






            var fIdentifyingString = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingString){}/* CQT */
            aPrototype.fIdentifyingString = fIdentifyingString;






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

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;




            return aPrototype;

        })();




        var IdentifiedTest_Constructor = function( theTitle, theConfiguration, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_configured_test.ConfiguredTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Identifier = null;
            this._v_IdentifierIsOwn = null;

            this._pInit_IdentifiedTest( theTitle, theConfiguration, theIdentifier);

        };
        IdentifiedTest_Constructor.prototype = aIdentifiedTest_Prototype;





        var IdentifiedTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_configured_test.ConfiguredTest_Prototype;

            this._v_Prototype = aIdentifiedTest_Prototype;
            this._v_Type = null;

            this._v_Identifier = null;
            this._v_IdentifierIsOwn = null;
        };
        IdentifiedTest_SuperPrototypeConstructor.prototype = aIdentifiedTest_Prototype;



        var aModule = {
            "IdentifiedTest_Prototype": aIdentifiedTest_Prototype,
            "IdentifiedTest_Constructor": IdentifiedTest_Constructor,
            "IdentifiedTest_SuperPrototypeConstructor": IdentifiedTest_SuperPrototypeConstructor
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

            var aM_configured_test = require('./configured-test');
            var aM_identifier_test = require('./identifier-test');
            var aM_overrider       = require('./overrider');

            return aMod_definer(
                aM_configured_test,
                aM_identifier_test,
                aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./configured-test",
            "./identifier-test",
            "./overrider"
        ], function (
            theM_configured_test,
            theM_identifier_test,
            theM_overrider
        ) {
            return aMod_definer(
                theM_configured_test,
                theM_identifier_test,
                theM_overrider);
        });
    }


}());


