'use strict';

/*
 runsubs-test.js
 Creado 201408150235
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
    var aMod_definer =function( theM_runsteps_test,
                                theM_exportparm,
                                theM_checkoutcome,
                                theM_cmploader,
                                theM_nextticker) {

        var ModuleName     = "runsubs-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }

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










        var aRunSubsTest_Prototype = (function() {


            var aPrototype = new theM_runsteps_test.RunStepsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = theM_runsteps_test.RunStepsTest_Prototype;

            aPrototype._v_Type = "RunSubsTest";

            aPrototype._v_Prototype_RunSubsTest = aPrototype;

            aPrototype._v_SubsAlreadyScheduled = null;

            aPrototype._v_AvoidFurtherSteps = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_RunSubs( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_RunSubs = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSteps.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_SubsAlreadyScheduled = [ ];

                this._v_AvoidFurtherSteps = false;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_RunSubs", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_RunSubs){}/* CQT */
            aPrototype._pInit_RunSubs = _pInit_RunSubs;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_RunSubs( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;


            


            var _pRelease_RunSubs = function( theReleaseParms, theReleaseDone) {


                this._v_SubsAlreadyScheduled = undefined;

                this._v_AvoidFurtherSteps = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSteps.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_RunSubs){}/* CQT */
            aPrototype._pRelease_RunSubs = _pRelease_RunSubs;











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

                this.pCleanUpTest_RunSubs( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_RunSubs = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSteps.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_RunSubs){}/* CQT */
            aPrototype.pCleanUpTest_RunSubs = pCleanUpTest_RunSubs;











            var fSkipFurtherSubsFunction = function() {

                var aSkipFurtherSubsFunction = this.pSkipNextSteps.bind( this);
                if( aSkipFurtherSubsFunction){}/* CQT */

                return aSkipFurtherSubsFunction;
            };
            if( fSkipFurtherSubsFunction){}/* CQT */
            aPrototype.fSkipFurtherSubsFunction = fSkipFurtherSubsFunction;










            var pSkipFurtherSubs = function( theSkipFurtherSubs) {

                this._v_SkipFurtherSubs = theSkipFurtherSubs;

            };
            if( pSkipFurtherSubs){}/* CQT */
            aPrototype.pSkipFurtherSubs = pSkipFurtherSubs;









            var fRunSubsCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUBS_FAIL, null, theError, null));
                        return;
                    }

                    var aSuccessRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUBS_OK, null, null, null);

                    if( aThis.fHandleForceError( aThis.EVENTKIND_SUBS_OK, theCallback, aSuccessRecord)) {
                        return;
                    }

                    theCallback( null, aSuccessRecord);


                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fRunSubsCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fRunSubsCallback){}/* CQT */
            aPrototype.fRunSubsCallback = fRunSubsCallback;









            var fExceptionSubsHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUBS_FAIL, null, "null Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUBS_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionSubsHandler){}/* CQT */
            aPrototype.fExceptionSubsHandler = fExceptionSubsHandler;












            var pInitFinderToScheduleNextSub = function() {
                this._v_SubsAlreadyScheduled = [];
            };
            if( pInitFinderToScheduleNextSub){}/* CQT */
            aPrototype.pInitFinderToScheduleNextSub = pInitFinderToScheduleNextSub;








            var pTryToScheduleNextSub = function( theCallback) {
                var aMethodName = "pTryToScheduleNextSub";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FINDNEXT, null, null, null);}

                if( !this._v_Configuration) {
                    return;
                }

                if( this._v_SubsAlreadyScheduled && this._v_SubsAlreadyScheduled.length) {

                    this._v_Configuration.pMatchChecksNow( theM_checkoutcome.CHECKWHEN_BETWEENSUBS, this);
                    var aFirstCheckFailed = this._v_Configuration.fFirstCheckFailedToMatchNow( theM_checkoutcome.CHECKWHEN_BETWEENSUBS);
                    if( aFirstCheckFailed) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_CHECKFAILED, null, "CHECKWHEN_BETWEENSUBS", aFirstCheckFailed));
                        return;
                    }
                }



                var aConfigurationToScheduleNext = this.fFindSubConfigurationToScheduleNext();
                if( !aConfigurationToScheduleNext) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_NOMORE, null, null, null));
                    return;
                }

                if( aConfigurationToScheduleNext == this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "aConfigurationToScheduleNext == this._v_Configuration", null));
                    return;
                }


                var aConstructorModuleName = null;
                var aConstructorName = null;
                var aTestMethodName = null;

                var somePendingFieldNames = [ ];
                var aResolutionsDict = aConfigurationToScheduleNext.fFieldResolutionsByName( this._v_Configuration.QUERY_FIELDS_TORUN, somePendingFieldNames);
                if( !aResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!aResolutionsDict", null));
                    return;
                }

                var aConstructorModuleNameResolution = aResolutionsDict[ "_v_ConstructorModuleName"];
                if( aConstructorModuleNameResolution && aConstructorModuleNameResolution._v_Success) {
                    aConstructorModuleName = aConstructorModuleNameResolution._v_FieldValue;
                }
                if( !aConstructorModuleName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!aConstructorModuleName", null));
                    return;
                }

                var aPreBuiltModule = this.PREBUILTMODULES[ aConstructorModuleName];
                if( aPreBuiltModule) {
                    aConstructorModuleName = aPreBuiltModule._v_ConstructorModuleName;
                    if( !aConstructorModuleName) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!aConstructorModuleName", null));
                        return;
                    }
                }
                else {
                    var aConstructorNameResolution = aResolutionsDict[ "_v_ConstructorName"];
                    if( aConstructorNameResolution && aConstructorNameResolution._v_Success) {
                        aConstructorName = aConstructorNameResolution._v_FieldValue;
                    }

                    var theMethodNameResolution = aResolutionsDict[ "_v_MethodName"];
                    if( theMethodNameResolution && theMethodNameResolution._v_Success) {
                        aTestMethodName = theMethodNameResolution._v_FieldValue;
                    }
                }

                if( !aConstructorName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!aConstructorName", null));
                    return;
                }

                if( !aTestMethodName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!aTestMethodName", null));
                    return;
                }


                var aModule = theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( aConstructorModuleName);
                if( !aModule) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!fLoadCmpNamed(" + aConstructorModuleName + ")", null));
                }




                var aConstructor = aModule[ aConstructorName];
                if( !aConstructor) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!fLoadCmpNamed(" + aConstructorModuleName + ")[ " + aConstructorName + "]", null));
                    return;
                }

                var aTest = new aConstructor( aConfigurationToScheduleNext._v_Title, aConfigurationToScheduleNext, this._v_Identifier, this._v_Recorder);
                if( !aTest) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!aTest", null));
                    return;
                }

                this.pAddSubordinateTest( aTest);





                var aTestMethod = aTest[ aTestMethodName];
                if( !aTestMethod) {
                    return;
                }

                var aBoundTestMethod = aTestMethod.bind( aTest);
                if( aBoundTestMethod){}/* CQT */



                var aCallback = this.fScheduleNextSubCallback( theCallback);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!this.fScheduleNextSubCallback( theCallback)", null));
                    return;
                }





                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextSubHandler( aCallback);

                theM_nextticker.pNextTick( function() {
                    try {
                        aBoundTestMethod( aCallback);
                    }
                    catch( anException) {
                        anExceptionHandler( anException);
                    }
                });

            };
            if( pTryToScheduleNextSub){}/* CQT */
            aPrototype.pTryToScheduleNextSub = pTryToScheduleNextSub;








            var fFindSubConfigurationToScheduleNext = function() {

                if( !this._v_Configuration) {
                    return null;
                }

                if( this._v_SkipFurtherSubs) {
                    return null;
                }

                var someSubs = this._v_Configuration.fSubRunnablesWOself();
                if( !someSubs || !someSubs.length) {
                    return null;
                }

                var aPendingSub = null;

                var aNumSubs = someSubs.length;
                for( var aSubIdx=0; aSubIdx < aNumSubs; aSubIdx++) {
                    var aSubRunSteps = someSubs[ aSubIdx];
                    if( this._v_SubsAlreadyScheduled.indexOf( aSubRunSteps) < 0) {
                        aPendingSub = aSubRunSteps;
                        break;
                    }
                }
                if( !aPendingSub) {
                    return null;
                }

                this._v_SubsAlreadyScheduled.push( aPendingSub);
                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, "fFindSubConfigurationToScheduleNext", this.EVENTKIND_INFO, aPendingSub, "FOUND SUB", null);}

                return aPendingSub;
            };
            if( fFindSubConfigurationToScheduleNext){}/* CQT */
            aPrototype.fFindSubConfigurationToScheduleNext = fFindSubConfigurationToScheduleNext;













            var fScheduleNextSubCallback = function( theCallback) {
                var aMethodName = "fScheduleNextSubCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_SUB_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_SUB_OK, null, null, null);

                    aThis.pTryToScheduleNextSub( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fScheduleNextSubCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextSubCallback){}/* CQT */
            aPrototype.fScheduleNextSubCallback = fScheduleNextSubCallback;








            var fExceptionNextSubHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUB_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextSubHandler){}/* CQT */
            aPrototype.fExceptionNextSubHandler = fExceptionNextSubHandler;








            var fOwnTestMethodToRun = function() {
                return null;
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pS_RunSubs = function( theCallback) {
                var aMethodName = "pS_RunSubs";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }

                if( !this._v_Configuration._v_ScheduleSubs) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_NOSUBS, null, null, null));
                    return;
                }



                var aExceptionHandler = this.fExceptionSubsHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fRunSubsCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    if( !this._v_Configuration) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, "!this._v_Configuration", null));
                        return;
                    }


                    this._v_Configuration.pMatchChecksNow( theM_checkoutcome.CHECKWHEN_BEFORESUBS, this);
                    var aFirstCheckFailed = this._v_Configuration.fFirstCheckFailedToMatchNow( theM_checkoutcome.CHECKWHEN_BEFORESUBS);
                    if( aFirstCheckFailed) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_CHECKFAILED, null, "CHECKWHEN_BEFORESUBS", aFirstCheckFailed));
                        return;
                    }


                    this._v_Configuration.pResolveExportsNow( theM_exportparm.EXPORTWHEN_EXBEFORESUBS, this);
                    var anExportFailedToResolve = this._v_Configuration.fFirstExportFailedToResolveNow( theM_exportparm.EXPORTWHEN_EXBEFORESUBS);
                    if( anExportFailedToResolve) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_FAIL, null, anExportFailedToResolve._v_Title, anExportFailedToResolve));
                        return;
                    }


                    this.pInitFinderToScheduleNextSub();

                    this.pTryToScheduleNextSub( aCallback);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_RunSubs){}/* CQT */
            aPrototype.pS_RunSubs = pS_RunSubs;








            var fStatusCodeHasBeenForgiven = function() {

                var aThis = this;

                var aStatusCodeHasBeenForgivenFunction = (function( theForgivenStatusCode, theForgivableStatusCodes) {

                    aThis.pAvoidMatchChecks( true);

                    aThis._v_StatusCodeHasBeenForgiven  = null;

                }).bind( this);
                if( aStatusCodeHasBeenForgivenFunction){}/* CQT */

                return aStatusCodeHasBeenForgivenFunction;
            };
            if( fStatusCodeHasBeenForgiven){}/* CQT */
            aPrototype.fStatusCodeHasBeenForgiven = fStatusCodeHasBeenForgiven;







            return aPrototype;

        })();






        var RunSubsTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsteps_test.RunStepsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_SubsAlreadyScheduled = null;

            this._v_AvoidFurtherSteps = null;


            this._pInit_RunSubs( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        RunSubsTest_Constructor.prototype = aRunSubsTest_Prototype;





        var RunSubsTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsteps_test.RunStepsTest_Prototype;

            this._v_Prototype = aRunSubsTest_Prototype;
            this._v_Type = null;

            this._v_SubsAlreadyScheduled = null;

            this._v_AvoidFurtherSteps = null;
        };
        RunSubsTest_SuperPrototypeConstructor.prototype = aRunSubsTest_Prototype;



        var aModule = {
            "RunSubsTest_Prototype": aRunSubsTest_Prototype,
            "RunSubsTest_Constructor": RunSubsTest_Constructor,
            "RunSubsTest_SuperPrototypeConstructor": RunSubsTest_SuperPrototypeConstructor
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

            var aM_runsteps_test  = require('./runsteps-test');
            var aM_exportparm     = require('./configs/exportparm');
            var aM_checkoutcome   = require('./configs/checkoutcome');
            var aM_cmploader      = require('./resloader/cmploader');
            var aM_nextticker     = require('../infrasvcs/nextticker/nextticker');

            return aMod_definer(
                aM_runsteps_test,
                aM_exportparm,
                aM_checkoutcome,
                aM_cmploader,
                aM_nextticker
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./runsteps-test",
            "./configs/exportparm",
            "./configs/checkoutcome",
            "./resloader/cmploader",
            "../infrasvcs/nextticker/nextticker"
        ], function (
                theM_runsteps_test,
                theM_exportparm,
                theM_checkoutcome,
                theM_cmploader,
                theM_nextticker
        ) {
            return aMod_definer(
                theM_runsteps_test,
                theM_exportparm,
                theM_checkoutcome,
                theM_cmploader,
                theM_nextticker
            );
        });
    }


}());















