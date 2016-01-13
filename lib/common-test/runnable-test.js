'use strict';

/*
 runnable-test.js
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

    var aMod_definer = function( theM_composite_test,
                                 theM_overrider,
                                 theM_exportparm,
                                 theM_checkoutcome) {


        var ModuleName     = "runnable-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.RECORDLOOPINFOS         = false;
            theToInit.DUMP_UNWINDEXCEPTIONS   = true;
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














        var aRunnableTest_Prototype = (function() {


            var aPrototype = new theM_composite_test.CompositeTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_composite_test.CompositeTest_Prototype;

            aPrototype._v_Type = "RunnableTest";

            aPrototype._v_Prototype_RunnableTest = aPrototype;


            aPrototype._v_AvoidMatchChecks  = null;

            aPrototype._v_OnUnwindFunctions  = null;
            aPrototype._v_NextOnUnwindFunctionToInvokeIndex  = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Runnable( theTitle, theConfiguration, theIdentifier, theRecorder);

            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_Runnable = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Composite.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_AvoidMatchChecks = false;

                this._v_OnUnwindFunctions  = [ ];
                this._v_NextOnUnwindFunctionToInvokeIndex = 0;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Runnable", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Runnable){}/* CQT */
            aPrototype._pInit_Runnable = _pInit_Runnable;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Runnable( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_Runnable = function( theReleaseParms, theReleaseDone) {


                this._v_AvoidMatchChecks   = undefined;
                this._v_OnUnwindFunctions  = undefined;
                this._v_NextOnUnwindFunctionToInvokeIndex = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Composite.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Runnable){}/* CQT */
            aPrototype._pRelease_Runnable = _pRelease_Runnable;










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

                this.pCleanUpTest_Runnable( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Runnable = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                this._v_OnUnwindFunctions  = undefined;
                this._v_NextOnUnwindFunctionToInvokeIndex = undefined;

                
                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Composite.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Runnable){}/* CQT */
            aPrototype.pCleanUpTest_Runnable = pCleanUpTest_Runnable;












            var fEsAsimilableActualEventAExpectedEvent = function( theEvent, theExpectedEvent) {
                if( !theEvent) {
                    return false;
                }

                if( !theExpectedEvent) {
                    return false;
                }

                if( !theEvent == theExpectedEvent) {
                    return true;
                }

                if( theEvent._v_Type && ( theEvent._v_Type == "RecordTest")) {
                    if( theEvent.fRecordHasEvent_recursive( theExpectedEvent)) {
                        return true;
                    }
                }

                return false;
            };
            if( fEsAsimilableActualEventAExpectedEvent){}/* CQT */
            aPrototype.fEsAsimilableActualEventAExpectedEvent = fEsAsimilableActualEventAExpectedEvent;









            var pNowSucceeded = function() {
                this.pNowSucceeded_base();

                this.fRecord( this._v_Type, this._v_Id, this, this._v_Title, this.EVENTKIND_PASSED, null, null, null)
            };
            if( pNowSucceeded){}/* CQT */
            aPrototype.pNowSucceeded = pNowSucceeded;







            var pNowFailed= function() {
                this.pNowFailed_base();

                this.fRecord( this._v_Type, this._v_Id, this, this._v_Title, this.EVENTKIND_NOTPASSED, null, null, null)
            };
            if( pNowFailed){}/* CQT */
            aPrototype.pNowFailed = pNowFailed;









            var pAvoidMatchChecks = function( theAvoidMatchChecks) {

                this._v_AvoidMatchChecks = ( theAvoidMatchChecks && true) || false;
            };
            if( pAvoidMatchChecks){}/* CQT */
            aPrototype.pAvoidMatchChecks = pAvoidMatchChecks;







            var pRegisterOnUnwindFunction = function( theOnUnwindFunction) {

                if( !theOnUnwindFunction) {
                    return;
                }
                if( !( typeof theOnUnwindFunction == "function")) {
                    return;
                }

                if( !this._v_OnUnwindFunctions) {
                    return;
                }

                this._v_OnUnwindFunctions.push( theOnUnwindFunction);

            };
            if( pRegisterOnUnwindFunction){}/* CQT */
            aPrototype.pRegisterOnUnwindFunction = pRegisterOnUnwindFunction;







            var pInvokeOnUnwindFunctions = function() {

                if( !this._v_OnUnwindFunctions) {
                    return;
                }

                var aNumOnUnwindFunctions = this._v_OnUnwindFunctions.length;
                if( !aNumOnUnwindFunctions) {
                    return;
                }

                if( ( typeof this._v_NextOnUnwindFunctionToInvokeIndex == "undefined") || ( this._v_NextOnUnwindFunctionToInvokeIndex == null)) {
                    return;
                }

                while(  this._v_NextOnUnwindFunctionToInvokeIndex < aNumOnUnwindFunctions) {

                    var anOnUnwindFunction = this._v_OnUnwindFunctions[ this._v_NextOnUnwindFunctionToInvokeIndex];

                    this._v_NextOnUnwindFunctionToInvokeIndex += 1;

                    if( !anOnUnwindFunction) {
                        continue;
                    }
                    if( !( typeof anOnUnwindFunction == "function")) {
                        continue;
                    }

                    try {
                        anOnUnwindFunction();
                    }
                    catch( anException) {
                        if( anException) {
                            if( this.DUMP_UNWINDEXCEPTIONS) {
                                console.log( anException);
                            }
                        }
                    }
                }
            };
            if( pInvokeOnUnwindFunctions){}/* CQT */
            aPrototype.pInvokeOnUnwindFunctions = pInvokeOnUnwindFunctions;











            var fOverallRunnableCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    aThis.pInvokeOnUnwindFunctions();

                    if( !aThis._v_Configuration) {
                        aThis.pNowFailed();
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration", theError));
                        return;
                    }



                    var aExpectSuccess = true;
                    var aExpectedEvent = null;

                    var aResolutionsDict = aThis._v_Configuration.fFieldResolutionsByName( aThis._v_Configuration.QUERY_FIELDS_EXPECTATION);

                    var aExpectSuccessResolution = aResolutionsDict[ "_v_ExpectSuccess"];
                    if( aExpectSuccessResolution && aExpectSuccessResolution._v_Success) {
                        aExpectSuccess = aExpectSuccessResolution._v_FieldValue;
                    }

                    var aExpectedEventResolution = aResolutionsDict[ "_v_ExpectedEvent"];
                    if( aExpectedEventResolution && aExpectedEventResolution._v_Success) {
                        aExpectedEvent = aExpectedEventResolution._v_FieldValue;
                    }


                    var anError = theError;
                    
                    

                    if( !theError) {

                        if( !this._v_AvoidMatchChecks) {

                            this._v_Configuration.pMatchChecksNow( theM_checkoutcome.CHECKWHEN_AFTER, this);
                            var aFirstCheckFailed = this._v_Configuration.fFirstCheckFailedToMatchNow( theM_checkoutcome.CHECKWHEN_AFTER);
                            if( aFirstCheckFailed) {

                                anError = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CHECKFAILED, null, aFirstCheckFailed, null);
                            }
                            else {
                                this._v_Configuration.pMatchChecksNow( theM_checkoutcome.CHECKWHEN_OK, this);
                                var otherFirstCheckFailed = this._v_Configuration.fFirstCheckFailedToMatchNow( theM_checkoutcome.CHECKWHEN_OK);
                                if( otherFirstCheckFailed) {
                                    anError = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CHECKFAILED, null, otherFirstCheckFailed, null);
                                }
                            }
                        }

                    }



                    if( !anError) {

                        if( aExpectSuccess) {
                            var aSuccessRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, null, null, null);

                            if( aThis.fHandleForceError( aThis.EVENTKIND_OK, theCallback, aSuccessRecord)) {
                                aThis.pNowFailed_base();
                                return;
                            }
                            else {
                                aThis.pNowSucceeded();

                                this._v_Configuration.pResolveExportsNow( theM_exportparm.EXPORTWHEN_OK, this);
                                var anExportFailedToResolve = this._v_Configuration.fFirstExportFailedToResolveNow( "OK");
                                if( anExportFailedToResolve) {
                                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, "EXPORTFAILEDTORESOLVE AT OK", null, anExportFailedToResolve._v_Title, anExportFailedToResolve));
                                    return;
                                }

                                theCallback( null,  aSuccessRecord);
                                return;
                            }
                        }

                        if( aThis.fHandleForceError( aThis.EVENTKIND_OK, aCallback, aSuccessRecord)) {
                            aThis.pNowFailed_base();
                            return;
                        }


                        aThis.pNowFailed();
                        var aNotHappenedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_EXPECTEDERRORNOTHAPPENED_FAIL, null, null, null);
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, aNotHappenedRecord, null));
                        return;
                    }



                    if( aExpectSuccess && ( aExpectSuccess == this._v_Configuration.EXPECTSUCCESS_VALUE_SUCCEEDALWAYS)) {
                        var aSuccessRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, null, null, null);

                        if( aThis.fHandleForceError( aThis.EVENTKIND_OK, theCallback, aSuccessRecord)) {
                            aThis.pNowFailed_base();
                            return;
                        }
                        else {
                            aThis.pNowSucceeded();

                            theCallback( null,  aSuccessRecord);
                            return;
                        }
                    }


                    if( aExpectSuccess) {
                        aThis.pNowFailed();
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, anError, null));
                        return;
                    }




                    if( !aExpectedEvent) {
                        var aHappenedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_EXPECTEDERRORHAPPENED_OK, null, anError, null);

                        if( aThis.fHandleForceError( aThis.EVENTKIND_STEP_OK, theCallback, aHappenedRecord)) {
                            aThis.pNowFailed_base();
                            return;
                        }
                        else {
                            aThis.pNowSucceeded();
                            var aHappenedSuccessRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, aHappenedRecord, null, null);
                            theCallback( null,  aHappenedSuccessRecord);
                            return;
                        }
                    }




                    if( aThis.fEsAsimilableActualEventAExpectedEvent( anError, aExpectedEvent)){
                        var aExpectedHappenedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_EXPECTEDERRORHAPPENED_OK, null, anError, null);

                        if( aThis.fHandleForceError( aThis.EVENTKIND_STEP_OK, theCallback, aExpectedHappenedRecord)) {
                            aThis.pNowFailed_base();
                            return;
                        }
                        else {
                            aThis.pNowSucceeded();
                            var aExpectedSuccessRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, aExpectedHappenedRecord, null, null);
                            theCallback( null,  aExpectedSuccessRecord);
                            return;
                        }
                    }



                    var aOtherHappenedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_ERROROTHERTHANEXPECTED_FAIL, null, anError, null);
                    aThis.pNowFailed();
                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aOtherHappenedRecord, null));

                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fOverallRunnableCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fOverallRunnableCallback){}/* CQT */
            aPrototype.fOverallRunnableCallback = fOverallRunnableCallback;












            var fOverallExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    aThis.pInvokeOnUnwindFunctions();

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);



                    if( !aThis._v_Configuration) {
                        aThis.pNowFailed();
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration", aCatchedRecord));
                        return;
                    }


                    var aExpectSuccess = true;
                    var aExpectedException = null;

                    var aResolutionsDict = aThis._v_Configuration.fFieldResolutionsByName( aThis._v_Configuration.QUERY_FIELDS_EXPECTATION);

                    var aExpectSuccessResolution = aResolutionsDict[ "_v_ExpectSuccess"];
                    if( aExpectSuccessResolution && aExpectSuccessResolution._v_Success) {
                        aExpectSuccess = aExpectSuccessResolution._v_FieldValue;
                    }

                    var aExpectedExceptionResolution = aResolutionsDict[ "_v_ExpectedException"];
                    if( aExpectedExceptionResolution && aExpectedExceptionResolution._v_Success) {
                        aExpectedException = aExpectedExceptionResolution._v_FieldValue;
                    }




                    if( aExpectSuccess) {
                        aThis.pNowFailed();
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));
                        return;
                    }



                    if( !aExpectedException) {
                        aThis.pNowSucceeded();
                        var aExpectedHappenedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_EXPECTEDERRORHAPPENED_OK, null, aCatchedRecord, null);
                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_OK, null, aExpectedHappenedRecord, null));
                        return;
                    }



                    console.log( "!!!!!!!!!!!!1OJOJOJOJOJOJO!!!!!!!!!!!!!!!!\n\n\n undefined runnable-test-js fEsAsimilableActualExceptionAExpectedException");

                    if( aThis.fEsAsimilableActualExceptionAExpectedException( theException, aExpectedException)) {
                        aThis.pNowSucceeded();
                        var otherExpectedHappenedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_EXPECTEDERRORHAPPENED_OK, null, aCatchedRecord, null);
                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_OK, null, otherExpectedHappenedRecord, null));
                        return;
                    }




                    aThis.pNowFailed();
                    var aUnxpectedHappenedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_ERROROTHERTHANEXPECTED_FAIL, null, aCatchedRecord, null);
                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, aUnxpectedHappenedRecord, null));


                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fOverallExceptionHandler){}/* CQT */
            aPrototype.fOverallExceptionHandler = fOverallExceptionHandler;













            var fOwnTestMethodToRun = function() {
                return null;
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;








            var pF_Runnable = function( theCallback, theMethodName) {
                var aMethodName = theMethodName;
                if( !aMethodName) {
                    aMethodName = "pF_Runnable";
                }

                this.pNowStarted();
                var aBeginRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGINRUNNABLE, null, null, null);


                this.pReceivedTestCallbackArg( theCallback, aMethodName);




                var aExceptionHandler = this.fOverallExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {


                    var aCallback = this.fOverallRunnableCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        this.pNowFailed();
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleOneCallback( theCallback)", null));
                        return;
                    }

                    if( this.fHandleForceError( this.EVENTKIND_BEGIN, aCallback, aBeginRecord)) {
                        this.pNowFailed_base();
                        return;
                    }





                    this._v_Configuration.pMatchChecksNow( theM_checkoutcome.CHECKWHEN_START, this);
                    var aFirstCheckFailed = this._v_Configuration.fFirstCheckFailedToMatchNow( theM_checkoutcome.CHECKWHEN_START);
                    if( aFirstCheckFailed) {

                        this.pHasBeenSkipped( theM_checkoutcome.JSONNAME_CHECKWHEN, theM_checkoutcome.CHECKWHEN_START);

                        var aCheckFailedStartRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aFirstCheckFailed, "CHECKWHEN_START", aFirstCheckFailed);
                        theCallback( null,  aCheckFailedStartRecord);
                        return;
                    }





                    var anOwnMethodToRun = this.fOwnTestMethodToRun();
                    if( !anOwnMethodToRun) {
                        this.pNowFailed();
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fOwnTestMethodToRun()", null));
                        return;
                    }

                    /* *******************************
                     * INVOKE NOW
                     */
                    this.pF_AsyncNextTick(
                        function() {
                            anOwnMethodToRun( aCallback);
                        },
                        aExceptionHandler
                    );


                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pF_Runnable){}/* CQT */
            aPrototype.pF_Runnable = pF_Runnable;




            





            return aPrototype;

        })();




        var RunnableTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composite_test.CompositeTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._v_AvoidMatchChecks   = null;
            this._v_OnUnwindFunctions  = null;

            this._pInit_Runnable( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        RunnableTest_Constructor.prototype = aRunnableTest_Prototype;





        var RunnableTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composite_test.CompositeTest_Prototype;

            this._v_Prototype = aRunnableTest_Prototype;
            this._v_Type = null;

            this._v_AvoidMatchChecks   = null;
            this._v_OnUnwindFunctions  = null;

        };
        RunnableTest_SuperPrototypeConstructor.prototype = aRunnableTest_Prototype;



        var aModule = {
            "RunnableTest_Prototype": aRunnableTest_Prototype,
            "RunnableTest_Constructor": RunnableTest_Constructor,
            "RunnableTest_SuperPrototypeConstructor": RunnableTest_SuperPrototypeConstructor
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

            var aM_composite_test  = require('./composite-test');
            var aM_overrider       = require('./overrider');
            var aM_exportparm      = require('./configs/exportparm');
            var aM_checkoutcome    = require('./configs/checkoutcome');

            return aMod_definer(
                aM_composite_test,
                aM_overrider,
                aM_exportparm,
                aM_checkoutcome
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./composite-test",
            "./overrider",
            "./configs/exportparm"
        ], function (
                theM_composite_test,
                theM_overrider,
                theM_exportparm,
                theM_checkoutcome
            ) {
            return aMod_definer(
                theM_composite_test,
                theM_overrider,
                theM_exportparm,
                theM_checkoutcome
            );
        });
    }


}());


