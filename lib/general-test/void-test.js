'use strict';

/*
 void-test.js
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

    var aMod_definer = function( theM_runsubs_test) {

        var ModuleName     = "void-test";
        var ModulePackages = "general-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName || "void-test.js");}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }



            theToInit.PARMSPREFIX_VOID = "void";

            theToInit.PARMS_VOID = [];

            theToInit.VOID_DEFAULT = "VOID";


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






        var aVoidTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "VoidTest";


            aPrototype._v_Void = null;

            aPrototype._v_Undefined       = null;
            aPrototype._v_Bool_True       = null;
            aPrototype._v_Bool_False      = null;
            aPrototype._v_String_Empty    = null;
            aPrototype._v_String_NotEmpty = null;
            aPrototype._v_Number_0        = null;
            aPrototype._v_Number_1        = null;
            aPrototype._v_Number_2        = null;
            aPrototype._v_Object_WOKeys   = null;
            aPrototype._v_Object_WithKeys = null;
            aPrototype._v_List_Empty      = null;
            aPrototype._v_List_NotEmpty   = null;
            aPrototype._v_Function        = null;
            aPrototype._v_Null            = null;
            aPrototype._v_NotNull         = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Void( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Void = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Void = this.VOID_DEFAULT;

                this._v_Undefined       = undefined;
                this._v_Bool_True       = true;
                this._v_Bool_False      = false;
                this._v_String_Empty    = "";
                this._v_String_NotEmpty = "notemptystring";
                this._v_Number_0        = 0;
                this._v_Number_1        = 1;
                this._v_Number_2        = 2;
                this._v_Object_WOKeys   = { };
                this._v_Object_WithKeys = { "a": 1, "b": 2, "c": 3};
                this._v_List_Empty      = [ ];
                this._v_List_NotEmpty   = [ 1, 2, 3];
                this._v_Function        = ( function() { return true;});
                this._v_Null            = null;
                this._v_NotNull         = "notnull";


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Void", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Void){}/* CQT */
            aPrototype._pInit_Void = _pInit_Void;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Void( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Void = function( theReleaseParms, theReleaseDone) {

                this._v_Void  = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Void){}/* CQT */
            aPrototype._pRelease_Void = _pRelease_Void;











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

                this.pCleanUpTest_Void( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Void = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_Void  = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Void){}/* CQT */
            aPrototype.pCleanUpTest_Void = pCleanUpTest_Void;




















            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */
                if( theMethodName){}/* CQT */

                var aLazyInitializerFunction = (function( theOtherCallback) {
                    if( theOtherCallback){}/* CQT */

                    return true;

                }).bind( this);
                if( aLazyInitializerFunction){}/* CQT */

                return aLazyInitializerFunction;
            };
            if( fLazyInitializer){}/* CQT */
            aPrototype.fLazyInitializer = fLazyInitializer;







            var fURLpath = function( theCallback) {
                if( theCallback){}/* CQT */

                var aFunction = (function( theOtherCallback) {
                    if( theOtherCallback){}/* CQT */

                    return "/";
                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fURLpath){}/* CQT */
            aPrototype.fURLpath = fURLpath;






            var fRequestData = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */
                if( theMethodName){}/* CQT */

                var aFunction = (function( theOtherCallback) {
                    if( theOtherCallback){}/* CQT */

                    return {
                        "void": null
                    };
                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fRequestData){}/* CQT */
            aPrototype.fRequestData = fRequestData;







            var fRequiredStatusCode = function( theCallback) {
                if( theCallback){}/* CQT */
                return 1;
            };
            if( fRequiredStatusCode){}/* CQT */
            aPrototype.fRequiredStatusCode = fRequiredStatusCode;






            var fResultParser = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */
                if( theMethodName){}/* CQT */

                var aResultParserFunction = (function( theCallback, theError, theResponse, theBody) {
                    if( theCallback){}/* CQT */
                    if( theError){}/* CQT */
                    if( theResponse){}/* CQT */
                    if( theBody){}/* CQT */

                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;






            var pS_void = function( theCallback) {

                var aMethodName = "pS_void";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var aLazyInitializer    = this.fLazyInitializer( theCallback, aMethodName);
                var aURLpath            = this.fURLpath( theCallback);
                var aRequestData        = this.fRequestData( theCallback, aMethodName);
                var aRequiredStatusCode = this.fRequiredStatusCode( theCallback);
                var aResultParser       = this.fResultParser( theCallback, aMethodName);

                this.pS_AsyncRequestPost(
                    theCallback,
                    aMethodName,
                    aLazyInitializer,
                    aURLpath,
                    aRequestData,
                    aRequiredStatusCode,
                    aResultParser
                );
            };
            if( pS_void){}/* CQT */
            aPrototype.pS_void = pS_void;








            var pF_Void = function( theCallback) {
                var aMethodName = "pF_Void";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Void){}/* CQT */
            aPrototype.pF_Void = pF_Void;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Void.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Void = function( theCallback) {
                var aMethodName = "pSS_Void";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_void.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Void){}/* CQT */
            aPrototype.pSS_Void = pSS_Void;







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




        var VoidTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Void = null;

            this._v_Undefined       = null;
            this._v_Bool_True       = null;
            this._v_Bool_False      = null;
            this._v_String_Empty    = null;
            this._v_String_NotEmpty = null;
            this._v_Number_0        = null;
            this._v_Number_1        = null;
            this._v_Number_2        = null;
            this._v_Object_WOKeys   = null;
            this._v_Object_WithKeys = null;
            this._v_List_Empty      = null;
            this._v_List_NotEmpty   = null;
            this._v_Function        = null;
            this._v_Null            = null;
            this._v_NotNull         = null;

            this._pInit_Void( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        VoidTest_Constructor.prototype = aVoidTest_Prototype;





        var VoidTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aVoidTest_Prototype;
            this._v_Type = null;

            this._v_Void = null;

            this._v_Undefined       = null;
            this._v_Bool_True       = null;
            this._v_Bool_False      = null;
            this._v_String_Empty    = null;
            this._v_String_NotEmpty = null;
            this._v_Number_0        = null;
            this._v_Number_1        = null;
            this._v_Number_2        = null;
            this._v_Object_WOKeys   = null;
            this._v_Object_WithKeys = null;
            this._v_List_Empty      = null;
            this._v_List_NotEmpty   = null;
            this._v_Function        = null;
            this._v_Null            = null;
            this._v_NotNull         = null;



        };
        VoidTest_SuperPrototypeConstructor.prototype = aVoidTest_Prototype;



        var aModule = {
            "VoidTest_Prototype": aVoidTest_Prototype,
            "VoidTest_Constructor": VoidTest_Constructor,
            "VoidTest_SuperPrototypeConstructor": VoidTest_SuperPrototypeConstructor
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

            var aM_runsubs_test       = require('../common-test/runsubs-test');

            return aMod_definer( aM_runsubs_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "../common-test/runsubs-test"], function (
            theM_runsubs_test) {
            return aMod_definer( theM_runsubs_test);
        });
    }


}());


