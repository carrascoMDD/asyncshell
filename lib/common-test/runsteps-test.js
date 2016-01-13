'use strict';

/*
 runsteps-test.js
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
    var aMod_definer =function( theM_runrequireds_test,
                                theM_nextticker) {

        var ModuleName     = "runsteps-test";
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










        var aRunStepsTest_Prototype = (function() {


            var aPrototype = new theM_runrequireds_test.RunRequiredsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = theM_runrequireds_test.RunRequiredsTest_Prototype;

            aPrototype._v_Type = "RunStepsTest";

            aPrototype._v_Prototype_RunStepsTest = aPrototype;

            aPrototype._v_StepsToRun = null;

            aPrototype._v_StepsAlreadyScheduled = null;

            aPrototype._v_SkipNextSteps = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_RunSteps( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_RunSteps = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunRequireds.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_StepsToRun = null;
                this._v_StepsAlreadyScheduled = [ ];

                this._v_SkipNextSteps = false;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_RunSteps", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_RunSteps){}/* CQT */
            aPrototype._pInit_RunSteps = _pInit_RunSteps;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_RunSteps( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_RunSteps = function( theReleaseParms, theReleaseDone) {

                this._v_StepsAlreadyScheduled = undefined;

                this._v_StepsToRun = undefined;

                this._v_SkipNextSteps = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunRequireds.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_RunSteps){}/* CQT */
            aPrototype._pRelease_RunSteps = _pRelease_RunSteps;







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

                this.pCleanUpTest_RunSteps( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_RunSteps = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunRequireds.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_RunSteps){}/* CQT */
            aPrototype.pCleanUpTest_RunSteps = pCleanUpTest_RunSteps;










            var fSkipNextStepsFunction = function() {

                var aSkipNextStepsFunction = this.pSkipNextSteps.bind( this);
                if( aSkipNextStepsFunction){}/* CQT */

                return aSkipNextStepsFunction;
            };
            if( fSkipNextStepsFunction){}/* CQT */
            aPrototype.fSkipNextStepsFunction = fSkipNextStepsFunction;








            var pSkipNextSteps = function( theSkipNextSteps) {

                this._v_SkipNextSteps = theSkipNextSteps;

            };
            if( pSkipNextSteps){}/* CQT */
            aPrototype.pSkipNextSteps = pSkipNextSteps;









            var fRunStepsCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEPS_FAIL, null, theError, null));
                        return;
                    }

                    var aSuccessRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEPS_OK, null, null, null);

                    if( aThis.fHandleForceError( aThis.EVENTKIND_STEPS_OK, theCallback, aSuccessRecord)) {
                        return;
                    }

                    theCallback( null,  aSuccessRecord);

                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fRunStepsCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fRunStepsCallback){}/* CQT */
            aPrototype.fRunStepsCallback = fRunStepsCallback;










            var fExceptionStepsHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEPS_FAIL, null, "null Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEPS_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionStepsHandler){}/* CQT */
            aPrototype.fExceptionStepsHandler = fExceptionStepsHandler;













            var pInitFinderToScheduleNext = function() {
                this._v_StepsAlreadyScheduled = [];
            };
            if( pInitFinderToScheduleNext){}/* CQT */
            aPrototype.pInitFinderToScheduleNext = pInitFinderToScheduleNext;








            var pTryToScheduleNextStep = function( theCallback) {
                var aMethodName = "pTryToScheduleNextStep";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEPS_FINDNEXT, null, null, null);}

                if( !this._v_Configuration) {
                    return;
                }


                var aStepToScheduleNext = this.fFindStepToScheduleNext();
                if( !aStepToScheduleNext) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEPS_NOMORE, null, null, null));
                    return;
                }

                var aCallback = this.fScheduleNextStepCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEPS_FAIL, null, "!this.fScheduleNextStepCallback( theCallback)", null));
                    return;
                }





                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextStepHandler( aCallback);


                theM_nextticker.pNextTick( function() {
                    try {
                        aStepToScheduleNext( aCallback);
                    }
                    catch( anException) {
                        anExceptionHandler( anException);
                    }
                });





            };
            if( pTryToScheduleNextStep){}/* CQT */
            aPrototype.pTryToScheduleNextStep = pTryToScheduleNextStep;








            var fFindStepToScheduleNext = function() {

                if( !this._v_StepsToRun) {
                    return null;
                }

                if( this._v_SkipNextSteps) {
                    return null;
                }


                var aPendingStep = null;

                var aNumSteps = this._v_StepsToRun.length;
                for( var aStepIdx=0; aStepIdx < aNumSteps; aStepIdx++) {
                    var aStep = this._v_StepsToRun[ aStepIdx];
                    if( this._v_StepsAlreadyScheduled.indexOf( aStep) < 0) {
                        aPendingStep = aStep;
                        break;
                    }
                }
                if( !aPendingStep) {
                    return null;
                }

                this._v_StepsAlreadyScheduled.push( aPendingStep);
                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, "fFindStepToScheduleNext", this.EVENTKIND_INFO, aPendingStep, "FOUND STEP", null);}

                return aPendingStep;
            };
            if( fFindStepToScheduleNext){}/* CQT */
            aPrototype.fFindStepToScheduleNext = fFindStepToScheduleNext;













            var fScheduleNextStepCallback = function( theCallback) {
                var aMethodName = "fScheduleNextStepCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_NEXTFAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, null, null, null);

                    aThis.pTryToScheduleNextStep( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fScheduleNextStepCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextStepCallback){}/* CQT */
            aPrototype.fScheduleNextStepCallback = fScheduleNextStepCallback;








            var fExceptionNextStepHandler = function( theCallback, theMethodName) {

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

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextStepHandler){}/* CQT */
            aPrototype.fExceptionNextStepHandler = fExceptionNextStepHandler;








            var fOwnTestMethodToRun = function() {
                return null;
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pS_RunSteps = function( theCallback) {
                var aMethodName = "pS_RunSteps";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEPS_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var aExceptionHandler = this.fExceptionStepsHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fRunStepsCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        this.pNowFailed();
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEPS_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    if( !this._v_Configuration) {
                        this.pNowFailed();
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEPS_FAIL, null, "!this._v_Configuration", null));
                        return;
                    }

                    this.pInitFinderToScheduleNext();

                    this.pTryToScheduleNextStep( aCallback, aMethodName);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_RunSteps){}/* CQT */
            aPrototype.pS_RunSteps = pS_RunSteps;







            return aPrototype;

        })();






        var RunStepsTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runrequireds_test.RunRequiredsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_StepsToRun = null;
            this._v_StepsAlreadyScheduled = null;

            this._v_SkipNextSteps = null;


            this._pInit_RunSteps( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        RunStepsTest_Constructor.prototype = aRunStepsTest_Prototype;





        var RunStepsTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runrequireds_test.RunRequiredsTest_Prototype;

            this._v_Prototype = aRunStepsTest_Prototype;
            this._v_Type = null;

            this._v_StepsToRun = null;
            this._v_StepsAlreadyScheduled = null;

            this._v_SkipNextSteps = null;

        };
        RunStepsTest_SuperPrototypeConstructor.prototype = aRunStepsTest_Prototype;



        var aModule = {
            "RunStepsTest_Prototype": aRunStepsTest_Prototype,
            "RunStepsTest_Constructor": RunStepsTest_Constructor,
            "RunStepsTest_SuperPrototypeConstructor": RunStepsTest_SuperPrototypeConstructor
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

            var aM_runrequireds_test = require('./runrequireds-test');
            var aM_nextticker        = require('../infrasvcs/nextticker/nextticker');

            return aMod_definer(
                aM_runrequireds_test,
                aM_nextticker
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./runrequireds-test",
            "../infrasvcs/nextticker/nextticker"
        ], function (
            theM_runrequireds_test,
            theM_nextticker
        ) {
            return aMod_definer(
                theM_runrequireds_test,
                theM_nextticker
            );
        });
    }


}());















