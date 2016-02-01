'use strict';

/*
 withvariationandconstant-test.js
 Created 201504212231
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_overrider) {

        var ModuleName     = "withvariationandconstant-test";
        var ModulePackages = "general-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}




        var NAMEDVARIATION_DEFAULTVALUE = 987654321;

        var NAMEDCONSTANT_DEFAULTVALUE  = 123456789;



        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.NAMEDVARIATION = NAMEDVARIATION_DEFAULTVALUE;

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

            theToInit.NAMEDCONSTANT = NAMEDCONSTANT_DEFAULTVALUE;

            
            
            theToInit.PARMSPREFIX_WITHVARIATIONANDCONSTANT = "withvariationandconstant";


            theToInit.PARMS_WITHVARIATIONANDCONSTANT = [
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
        pgInitWithModuleConstants(  ModuleConstants);











        var aWithvariationandconstantTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "WithvariationandconstantTest";







            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Withvariationandconstant( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Withvariationandconstant = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Withvariationandconstant", this.EVENTKIND_INIT, null, null, null);}

            };
            if( _pInit_Withvariationandconstant){}/* CQT */
            aPrototype._pInit_Withvariationandconstant = _pInit_Withvariationandconstant;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Withvariationandconstant( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Withvariationandconstant = function( theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Withvariationandconstant){}/* CQT */
            aPrototype._pRelease_Withvariationandconstant = _pRelease_Withvariationandconstant;











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

                this.pCleanUpTest_Withvariationandconstant( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Withvariationandconstant = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Withvariationandconstant){}/* CQT */
            aPrototype.pCleanUpTest_Withvariationandconstant = pCleanUpTest_Withvariationandconstant;













            var pF_Withvariationandconstant = function( theCallback) {
                var aMethodName = "pF_Withvariationandconstant";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Withvariationandconstant){}/* CQT */
            aPrototype.pF_Withvariationandconstant = pF_Withvariationandconstant;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Withvariationandconstant.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Withvariationandconstant = function( theCallback) {
                var aMethodName = "pSS_Withvariationandconstant";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Withvariationandconstant){}/* CQT */
            aPrototype.pSS_Withvariationandconstant = pSS_Withvariationandconstant;







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




        var WithvariationandconstantTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ExpectedVariationValue    = null;
            this._v_ExpectVariationFailure    = null;

            this._v_ExpectedConstantValue     = null;
            this._v_ExpectConstantFailure     = null;


            this._pInit_Withvariationandconstant( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        WithvariationandconstantTest_Constructor.prototype = aWithvariationandconstantTest_Prototype;





        var WithvariationandconstantTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aWithvariationandconstantTest_Prototype;
            this._v_Type = null;

            this._v_ExpectedVariationValue    = null;
            this._v_ExpectVariationFailure    = null;

            this._v_ExpectedConstantValue     = null;
            this._v_ExpectConstantFailure     = null;


        };
        WithvariationandconstantTest_SuperPrototypeConstructor.prototype = aWithvariationandconstantTest_Prototype;



        var aModule = {
            "WithvariationandconstantTest_Prototype": aWithvariationandconstantTest_Prototype,
            "WithvariationandconstantTest_Constructor": WithvariationandconstantTest_Constructor,
            "WithvariationandconstantTest_SuperPrototypeConstructor": WithvariationandconstantTest_SuperPrototypeConstructor
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

            var aM_runsubs_test = require('../common-test/runsubs-test');
            var aM_overrider    = require('../common-test/overrider');

            return aMod_definer(
                aM_runsubs_test,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/runsubs-test",
            "../common-test/overrider"
        ], function (
            theM_runsubs_test,
            theM_overrider
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_overrider
            );
        });
    }


}());


