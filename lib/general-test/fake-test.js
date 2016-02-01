'use strict';

/*
 fake-test.js
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

        var ModuleName     = "fake-test";
        var ModulePackages = "general-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.PARMSPREFIX_FAKE = "fake";

            theToInit.PARM_FAKE_RESULT    = theToInit.PARMSPREFIX_FAKE + ".fakeResult";
            theToInit.PARM_FAKE_SUCCESS   = theToInit.PARMSPREFIX_FAKE + ".fakeSuccess";
            theToInit.PARM_FAKE_RCVERROR  = theToInit.PARMSPREFIX_FAKE + ".fakeRcvError";
            theToInit.PARM_FAKE_RCVSTATUS = theToInit.PARMSPREFIX_FAKE + ".fakeRcvStatus";
            theToInit.PARM_FAKE_RCVBODY   = theToInit.PARMSPREFIX_FAKE + ".fakeRcvBody";


            theToInit.PARMS_FAKE = [
                theToInit.PARM_FAKE_RESULT,
                theToInit.PARM_FAKE_SUCCESS,
                theToInit.PARM_FAKE_RCVERROR,
                theToInit.PARM_FAKE_RCVSTATUS,
                theToInit.PARM_FAKE_RCVBODY
            ];



            theToInit.FAKE_SUCCESS_DEFAULT   = true;
            theToInit.FAKE_RCVSTATUS_DEFAULT = 200;
            theToInit.FAKE_RCVBODY_DEFAULT   = { "fake": "FAKE"};

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
        pgInitWithModuleConstants( ModuleConstants);











        var aFakeTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "FakeTest";


            aPrototype._v_FakeResult    = null;
            aPrototype._v_FakeSuccess   = null;
            aPrototype._v_FakeRcvError  = null;
            aPrototype._v_FakeRcvStatus = null;
            aPrototype._v_FakeRcvBody   = null;

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

                this._pInit_Fake( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Fake = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_FakeResult    = null;
                this._v_FakeSuccess   = null;
                this._v_FakeRcvError  = null;
                this._v_FakeRcvStatus = null;
                this._v_FakeRcvBody   = null;


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


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Fake", this.EVENTKIND_INIT, null, null, null);}

                if( this._v_FakeResult){}/* CQT */
            };
            if( _pInit_Fake){}/* CQT */
            aPrototype._pInit_Fake = _pInit_Fake;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Fake( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Fake = function( theReleaseParms, theReleaseDone) {

                this._v_FakeResult    = undefined;
                this._v_FakeSuccess   = undefined;
                this._v_FakeRcvError  = undefined;
                this._v_FakeRcvStatus = undefined;
                this._v_FakeRcvBody   = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Fake){}/* CQT */
            aPrototype._pRelease_Fake = _pRelease_Fake;











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

                this.pCleanUpTest_Fake( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Fake = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_FakeResult    = undefined;
                    this._v_FakeSuccess   = undefined;
                    this._v_FakeRcvError  = undefined;
                    this._v_FakeRcvStatus = undefined;
                    this._v_FakeRcvBody   = undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Fake){}/* CQT */
            aPrototype.pCleanUpTest_Fake = pCleanUpTest_Fake;




















            var pS_retrieveFakeParms = function( theCallback) {

                var aMethodName = "pS_retrieveFakeParms";

                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }



                var someParmsToResolve = this.PARMS_FAKE.slice();

                var someResolutionsByName = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);


                if( !someResolutionsByName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }


                var aFakeResultResolution = someResolutionsByName[ this.PARM_FAKE_RESULT];
                if( aFakeResultResolution && aFakeResultResolution._v_Success) {
                    this._v_FakeResult = aFakeResultResolution._v_ParmValue;
                }


                var aFakeSuccessResolution = someResolutionsByName[ this.PARM_FAKE_SUCCESS];
                if( aFakeSuccessResolution && aFakeSuccessResolution._v_Success) {
                    this._v_FakeSuccess = aFakeSuccessResolution._v_ParmValue;
                }


                var aFakeRcvErrorResolution = someResolutionsByName[ this.PARM_FAKE_RCVERROR];
                if( aFakeRcvErrorResolution && aFakeRcvErrorResolution._v_Success) {
                    this._v_FakeRcvError = aFakeRcvErrorResolution._v_ParmValue;
                }


                var aFakeRcvStatusResolution = someResolutionsByName[ this.PARM_FAKE_RCVSTATUS];
                if( aFakeRcvStatusResolution && aFakeRcvStatusResolution._v_Success) {
                    this._v_FakeRcvStatus = aFakeRcvStatusResolution._v_ParmValue;
                }


                var aFakeRcvBodyResolution = someResolutionsByName[ this.PARM_FAKE_RCVBODY];
                if( aFakeRcvBodyResolution && aFakeRcvBodyResolution._v_Success && aFakeRcvBodyResolution._v_ParmValue) {
                    this._v_FakeRcvBody = aFakeRcvBodyResolution._v_ParmValue;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_retrieveFakeParms){}/* CQT */
            aPrototype.pS_retrieveFakeParms = pS_retrieveFakeParms;












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
                        "fake": null
                    };
                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fRequestData){}/* CQT */
            aPrototype.fRequestData = fRequestData;







            var fRequiredStatusCode = function( theCallback) {
                if( theCallback){}/* CQT */
                return this._v_FakeRcvStatus;
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















            var pS_AsyncRequestFake = function( theCallback, theMethodName,
                                                     theLazyInitializer, theURL, theRequestData, theRequiredStatusCode, theResultParser) {

                this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_BEGINASYNC, null, null, null);

                try {
                    this.pReceivedTestCallbackArg( theCallback, theMethodName);

                    if( theLazyInitializer && ( typeof theLazyInitializer == "function")) {
                        var aLazyResult = theLazyInitializer( theCallback);
                        if( !aLazyResult) {
                            return;
                        }
                    }

                    var aRequestData = theRequestData;
                    if( aRequestData && ( typeof aRequestData == "function")) {
                        aRequestData = aRequestData( theCallback);
                    }
                    if( aRequestData){}/* CQT */



                    var aURL = theURL;

                    if( aURL && ( typeof aURL == "function")) {
                        aURL = aURL( theCallback);
                        if( !aURL) {
                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_STEP_FAIL, null, "!aURL", null));
                            return;
                        }
                    }

                    var aSentRecord = this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_SENT, null, null, null);

                    if( this.fHandleForceError( this.EVENTKIND_SENT, theCallback, aSentRecord)) {
                        return;
                    }

                    var aThis = this;

                    var aRequestFakeCallback = function ( theError, theResponse, theBody) {

                        try {
                            if( theBody){}/* CQT */

                            aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RECEIVED, null, null, null);

                            if( aThis.fHandleForceError( aThis.EVENTKIND_RECEIVED, theCallback)) {
                                return;
                            }


                            if( theError) {
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "theError", theError));
                                return;
                            }

                            if( !theResponse) {
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                                return;
                            }

                            if ( !( theResponse.statusCode == theRequiredStatusCode)) {
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!( theResponse.statusCode == " + theRequiredStatusCode + ")", theResponse.statusCode));
                                return;
                            }

                            if( theResultParser && ( typeof theResultParser == "function")) {
                                var aLazyResult = theResultParser( theCallback, theError, theResponse, theBody);
                                if( !aLazyResult) {
                                    return;
                                }
                            }

                            if( !aThis.fHandleForceError( aThis.EVENTKIND_STEP_OK, theCallback)) {
                                aThis.pF_AsyncNextTick(
                                    function() {
                                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_OK, null, null, null));
                                    }
                                );
                            }
                        }
                        catch( anException) {
                            var aExceptionDetail = aThis.fExceptionDetail( anException);
                            var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, aRecord, null));
                        }
                    };

                    var aRequestFakeWrappedCallback = this.fChainNewTestCallbackForCallback( aRequestFakeCallback, "pS_AsyncRequestFake", theCallback, theMethodName);


                    if( aThis._v_FakeRcvError) {
                        aThis.pF_AsyncNextTick(
                            function() {
                                aRequestFakeCallback( {"fakeError": "fakeError"}, { "statusCode": aThis._v_FakeRcvStatus}, aThis._v_FakeRcvBody);
                            }
                        );
                        return;
                    }

                    

                    aThis.pF_AsyncNextTick(
                        function() {
                            aRequestFakeWrappedCallback( null, { "statusCode": aThis._v_FakeRcvStatus}, aThis._v_FakeRcvBody);
                        }
                    );


                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, aRecord, null));
                }
            };
            if( pS_AsyncRequestFake){}/* CQT */
            aPrototype.pS_AsyncRequestFake = pS_AsyncRequestFake;


















            var pS_fakeSendReceive = function( theCallback) {

                var aMethodName = "pS_fakeSendReceive";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);



                var aLazyInitializer    = this.fLazyInitializer( theCallback, aMethodName);
                var aURLpath            = this.fURLpath( theCallback);
                var aRequestData        = this.fRequestData( theCallback, aMethodName);
                var aRequiredStatusCode = this.fRequiredStatusCode( theCallback);
                var aResultParser       = this.fResultParser( theCallback, aMethodName);

                this.pS_AsyncRequestFake(
                    theCallback,
                    aMethodName,
                    aLazyInitializer,
                    aURLpath,
                    aRequestData,
                    aRequiredStatusCode,
                    aResultParser
                );
            };
            if( pS_fakeSendReceive){}/* CQT */
            aPrototype.pS_fakeSendReceive = pS_fakeSendReceive;









            var pS_fakeResult = function( theCallback) {

                var aMethodName = "pS_fakeResult";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_FakeSuccess) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_FakeSuccess", null));
                    return;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, null, null));
            };
            if( pS_fakeResult){}/* CQT */
            aPrototype.pS_fakeResult = pS_fakeResult;









            var pF_Fake = function( theCallback) {
                var aMethodName = "pF_Fake";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Fake){}/* CQT */
            aPrototype.pF_Fake = pF_Fake;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Fake.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Fake = function( theCallback) {
                var aMethodName = "pSS_Fake";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_retrieveFakeParms.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_fakeSendReceive.bind( this),
                    this.pS_RunSubs.bind( this),
                    this.pS_fakeResult.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Fake){}/* CQT */
            aPrototype.pSS_Fake = pSS_Fake;







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




        var FakeTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_FakeResult = null;

            this._v_FakeResult    = null;
            this._v_FakeSuccess   = null;
            this._v_FakeRcvError  = null;
            this._v_FakeRcvStatus = null;
            this._v_FakeRcvBody   = null;


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

            this._pInit_Fake( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        FakeTest_Constructor.prototype = aFakeTest_Prototype;





        var FakeTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aFakeTest_Prototype;
            this._v_Type = null;

            this._v_FakeResult = null;

            this._v_FakeResult    = null;
            this._v_FakeSuccess   = null;
            this._v_FakeRcvError  = null;
            this._v_FakeRcvStatus = null;
            this._v_FakeRcvBody   = null;

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
        FakeTest_SuperPrototypeConstructor.prototype = aFakeTest_Prototype;



        var aModule = {
            "FakeTest_Prototype": aFakeTest_Prototype,
            "FakeTest_Constructor": FakeTest_Constructor,
            "FakeTest_SuperPrototypeConstructor": FakeTest_SuperPrototypeConstructor
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

            return aMod_definer( aM_runsubs_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/runsubs-test"
        ], function (
            theM_runsubs_test) {
            return aMod_definer( theM_runsubs_test);
        });
    }


}());


