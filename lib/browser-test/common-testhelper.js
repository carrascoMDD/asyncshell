'use strict';

/*
 common-testhelper.js
 Creado 201410191958
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
    var aMod_definer = function( theM_recorded_test,
                                 theM_forcedexception,
                                 theM_overrider) {

        var ModuleName     = "common-testhelper";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.RECORDPTR = true;

            theToInit.LOGMISSINGPARMS = true;
            theToInit.LOGDOPTRSTEPS   = true;

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
                return;
            }


            theToInit.LOCATORKIND_BYCSS = "css";
            theToInit.LOCATORKIND_BYID  = "id";

            theToInit.LOCATORKINDS = [
                theToInit.LOCATORKIND_BYCSS,
                theToInit.LOCATORKIND_BYID
            ];

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













        var aCommonTestHelper_Prototype = (function() {


            var aPrototype = new theM_recorded_test.RecordedTest_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_recorded_test.RecordedTest_Prototype;

            aPrototype._v_Type = "CommonTestHelper";

            aPrototype._v_Module = null;







            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_CommonTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_CommonTestHelper = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Recorded.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_CommonTestHelper", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_CommonTestHelper){}/* CQT */
            aPrototype._pInit_CommonTestHelper = _pInit_CommonTestHelper;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_CommonTestHelper( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_CommonTestHelper = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Recorded.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_CommonTestHelper){}/* CQT */
            aPrototype._pRelease_CommonTestHelper = _pRelease_CommonTestHelper;










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

                this.pCleanUpTest_CommonTestHelper( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_CommonTestHelper = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Recorded.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_CommonTestHelper){}/* CQT */
            aPrototype.pCleanUpTest_CommonTestHelper = pCleanUpTest_CommonTestHelper;













            var fPtrRecord = function( theMethodName, theEventKind, theData, theReason, theDetail) {

                if( !this.RECORDPTR) {
                    return null;
                }

                var aRecord = this.fRecord( this._v_Type, this._v_Id, this, theMethodName, theEventKind, theData, theReason, theDetail);
                if( aRecord){}/* CQT */

                return aRecord;
            };
            if( fPtrRecord){}/* CQT */
            aPrototype.fPtrRecord = fPtrRecord;







            var fDoPtr_WaitForAngular = function() {

                return browser.waitForAngular();
            };
            if( fDoPtr_WaitForAngular){}/* CQT */
            aPrototype.fDoPtr_WaitForAngular = fDoPtr_WaitForAngular;







            var fPtr_Locator= function( theLocatorKind, theLocatorSpec) {

                if( !theLocatorKind) {
                    return null;
                }

                if( !theLocatorSpec) {
                    return null;
                }

                if( this.LOCATORKINDS.indexOf( theLocatorKind) < 0) {
                    return null;
                }

                var aLocatorSpec = theLocatorSpec;
                if( aLocatorSpec.indexOf( "'") > 0) {
                    aLocatorSpec = aLocatorSpec.replace( /'/g, '"');
                }

                var aLocator = null;
                switch( theLocatorKind) {
                    case this.LOCATORKIND_BYCSS:
                        aLocator = by.css( aLocatorSpec);
                        break;

                    case this.LOCATORKIND_BYID:
                        aLocator = by.id( aLocatorSpec);
                        break;

                    default:
                }

                if( !aLocator) {
                    return null;
                }

                return aLocator;
            };
            if( fPtr_Locator){}/* CQT */
            aPrototype.fPtr_Locator = fPtr_Locator;







            return aPrototype;

        })();




        var CommonTestHelper_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_recorded_test.RecordedTest_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_CommonTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        CommonTestHelper_Constructor.prototype = aCommonTestHelper_Prototype;





        var CommonTestHelper_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_recorded_test.RecordedTest_Prototype;

            this._v_Prototype = aCommonTestHelper_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;
        };
        CommonTestHelper_SuperPrototypeConstructor.prototype = aCommonTestHelper_Prototype;



        var aModule = {
            "CommonTestHelper_Prototype": aCommonTestHelper_Prototype,
            "CommonTestHelper_Constructor": CommonTestHelper_Constructor,
            "CommonTestHelper_SuperPrototypeConstructor": CommonTestHelper_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aCommonTestHelper_Prototype._v_Module = aModule;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_recorded_test    = require('../common-test/recorded-test');
            var aM_forcedexception  = require('../common-test/forcedexception');
            var aM_overrider        = require('../common-test/overrider');

            return aMod_definer(
                aM_recorded_test,
                aM_forcedexception,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/recorded-test",
            "../common-test/forcedexception",
            "../common-test/overrider"
        ], function (
                theM_recorded_test,
                theM_forcedexception,
                theM_overrider
            ) {
            return aMod_definer(
                theM_recorded_test,
                theM_forcedexception,
                theM_overrider
            );
        });
    }


}());