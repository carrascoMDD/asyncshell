'use strict';

/*
 poll-test.js
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_overrider,
                                 theM_timeouter) {


        var ModuleName     = "poll-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.MAXITERATIONS = 1000;

            theToInit.MINPOLLINTERVAL = 300;

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

            theToInit.PARMSPREFIX_POLL = "poll";

            theToInit.PARM_POLL_EACHPARM     = theToInit.PARMSPREFIX_POLL + ".eachParm";
            theToInit.PARM_POLL_MAXPOLLS     = theToInit.PARMSPREFIX_POLL + ".maxPolls";
            theToInit.PARM_POLL_POLLINTERVAL = theToInit.PARMSPREFIX_POLL + ".pollInterval";


            theToInit.PARMS_POLL = [
                theToInit.PARM_POLL_EACHPARM,
                theToInit.PARM_POLL_MAXPOLLS,
                theToInit.PARM_POLL_POLLINTERVAL
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











        var aPollTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "PollTest";

            aPrototype._v_Prototype_PollTest = aPrototype;


            aPrototype._v_EachParm   = null;

            aPrototype._v_MaxPolls       = null;
            aPrototype._v_PollInterval   = null;

            aPrototype._v_PollsAlreadyScheduled = null;



            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Poll( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Poll = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_EachParm     = null;

                this._v_MaxPolls     = null;
                this._v_PollInterval = null;

                this._v_PollsAlreadyScheduled = 0;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Poll", this.EVENTKIND_INIT, null, null, null);}

                if( this._v_RangeParm){}/* CQT */
            };
            if( _pInit_Poll){}/* CQT */
            aPrototype._pInit_Poll = _pInit_Poll;


















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Poll( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Poll = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_EachParm     = undefined;

                this._v_MaxPolls     = undefined;
                this._v_PollInterval = undefined;

                this._v_PollsAlreadyScheduled = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Poll){}/* CQT */
            aPrototype._pRelease_Poll = _pRelease_Poll;













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

                this.pCleanUpTest_Poll( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Poll = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_EachParm     = undefined;

                    this._v_MaxPolls     = undefined;
                    this._v_PollInterval = undefined;

                    this._v_PollsAlreadyScheduled = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Poll){}/* CQT */
            aPrototype.pCleanUpTest_Poll = pCleanUpTest_Poll;











            var pS_retrievePollParms = function( theCallback) {

                var aMethodName = "pS_retrievePollParms";

                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }



                var someParmsToResolve = [
                    this.PARM_POLL_EACHPARM,
                    this.PARM_POLL_MAXPOLLS,
                    this.PARM_POLL_POLLINTERVAL
                ];

                var someResolutionsByName = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);


                if( !someResolutionsByName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }


                if( !this._v_EachParm) {
                    var aEachParmResolution = someResolutionsByName[ this.PARM_POLL_EACHPARM];
                    if( !aEachParmResolution || !aEachParmResolution._v_Success || !aEachParmResolution._v_ParmValue) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!aEachParmResolution || !aEachParmResolution._v_Success || !aEachParmResolution._v_ParmValue", null));
                        return;
                    }

                    this._v_EachParm = aEachParmResolution._v_ParmValue;
                }



                if( this._v_MaxPolls == null) {
                    var aMaxPollsResolution = someResolutionsByName[ this.PARM_POLL_MAXPOLLS];
                    if( aMaxPollsResolution && aMaxPollsResolution._v_Success) {

                        var aMaxPolls = aMaxPollsResolution._v_ParmValue;
                        if( ( typeof aMaxPolls == "number") && ( aMaxPolls >= 0)) {
                            this._v_MaxPolls = aMaxPolls;
                        }
                    }
                }
                if( ( this._v_MaxPolls == null)    || ( this._v_MaxPolls < 1)) {
                    if( this._v_MaxPolls > this._v_EndIdx) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_MaxPolls", null));
                    }
                }


                if( this._v_PollInterval== null) {
                    var aPollIntervalResolution = someResolutionsByName[ this.PARM_POLL_POLLINTERVAL];
                    if( aPollIntervalResolution && aPollIntervalResolution._v_Success) {
                        var aPollInterval= aPollIntervalResolution._v_ParmValue;
                        if( ( typeof aPollInterval== "number") && ( aPollInterval>= 0)) {
                            this._v_PollInterval= aPollIntervalResolution._v_ParmValue;
                        }
                    }
                }
                if( ( this._v_PollInterval == null) || ( this._v_PollInterval < this.MINPOLLINTERVAL) ) {
                    this._v_PollInterval =  this.MINPOLLINTERVAL;
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_retrievePollParms){}/* CQT */
            aPrototype.pS_retrievePollParms = pS_retrievePollParms;















            var fRunPollsCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_ITERATOR_FAIL, null, theError, null));
                        return;
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_ITERATOR_OK, null, null, null));


                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fRunPollsCallback";
                }

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fRunPollsCallback){}/* CQT */
            aPrototype.fRunPollsCallback = fRunPollsCallback;









            var fExceptionPollsHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_ITERATOR_FAIL, null, "null Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_ITERATOR_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionPollsHandler){}/* CQT */
            aPrototype.fExceptionPollsHandler = fExceptionPollsHandler;












            var pInitFinderToScheduleNextPoll = function() {
                this._v_PollsAlreadyScheduled = 0;
            };
            if( pInitFinderToScheduleNextPoll){}/* CQT */
            aPrototype.pInitFinderToScheduleNextPoll = pInitFinderToScheduleNextPoll;











            var pTryToScheduleNextPoll = function( theCallback) {
                var aMethodName = "pTryToScheduleNextPoll";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FINDNEXT, null, null, null);}

                if( !this._v_Configuration) {
                    return;
                }


                if( !this._v_MaxPolls) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_NOMORE, null, null, null));
                    return;
                }


                if( this._v_PollsAlreadyScheduled >= this._v_MaxPolls) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_NOMORE, null, null, null));
                    return;
                }


                this._v_PollsAlreadyScheduled += 1;


                if( !( this._v_EachParm == null) && this._v_EachParm.length && !( this._v_PollsAlreadyScheduled == null)) {
                    this._v_Configuration.pInjectExportedParm( this._v_EachParm, this._v_PollsAlreadyScheduled);
                }



                var aBoundTestMethod = this.pS_RunSubs.bind( this);



                var aCallback = this.fCheckSubsoutcomeAndSetTimeoutCallback( theCallback);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FAIL, null, "!this.fScheduleNextPollCallback( theCallback)", null));
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionSubsHandler( aCallback);

                try {
                    aBoundTestMethod( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }

            };
            if( pTryToScheduleNextPoll){}/* CQT */
            aPrototype.pTryToScheduleNextPoll = pTryToScheduleNextPoll;













            var fCheckSubsoutcomeAndSetTimeoutCallback = function( theCallback) {
                var aMethodName = "fCheckSubsoutcomeAndSetTimeoutCallback";

                if( !theCallback) {
                    return null;
                }


                if( !this._v_Configuration) {
                    return null;
                }

                if( !this._v_PollInterval) {
                    return null;
                }

                if( this._v_PollsAlreadyScheduled == null) {
                    return null;
                }


                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_SUB_FAIL, null, theError, null);

                        if( !this._v_MaxPolls) {
                            theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_NOMORE, null, null, null));
                            return;
                        }

                        if( this._v_PollsAlreadyScheduled >= this._v_MaxPolls) {
                            theCallback( aRecordFail);
                            return;
                        }

                        aThis.pTimeoutPoll( theCallback);
                        return;
                    }

                    if( theCallback) {
                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_SUB_OK, null, null, null));
                    }

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fCheckSubsoutcomeAndSetTimeoutCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fCheckSubsoutcomeAndSetTimeoutCallback){}/* CQT */
            aPrototype.fCheckSubsoutcomeAndSetTimeoutCallback = fCheckSubsoutcomeAndSetTimeoutCallback;







            var fExceptionSubsHandler = function( theCallback, theMethodName) {

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
            if( fExceptionSubsHandler){}/* CQT */
            aPrototype.fExceptionSubsHandler = fExceptionSubsHandler;













            var pTimeoutPoll = function( theCallback) {
                var aMethodName = "pTimeoutPoll";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FINDNEXT, null, null, null);}

                if( !this._v_Configuration) {
                    return;
                }

                var aTimeoutCallback = this.fTimeoutNextPollCallback( theCallback);
                if( !aTimeoutCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FAIL, null, "!this.fTimeoutNextPollCallback( theCallback)", null));
                    return;
                }

                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionTimeoutPollHandler( theCallback);

                var aPollInterval = this._v_PollInterval;
                if( !aPollInterval || ( aPollInterval < this.MINPOLLINTERVAL)) {
                    aPollInterval = this.MINPOLLINTERVAL;
                }

                try {
                    theM_timeouter.p_Timeout( aTimeoutCallback, aPollInterval);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pTimeoutPoll){}/* CQT */
            aPrototype.pTimeoutPoll = pTimeoutPoll;










            var fTimeoutNextPollCallback = function( theCallback) {
                var aMethodName = "fTimeoutNextPollCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function() {

                    aThis.pTryToScheduleNextPoll( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fTimeoutNextPollCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fTimeoutNextPollCallback){}/* CQT */
            aPrototype.fTimeoutNextPollCallback = fTimeoutNextPollCallback;









            var fExceptionTimeoutPollHandler = function( theCallback, theMethodName) {

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

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_TIMEOUT_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionTimeoutPollHandler){}/* CQT */
            aPrototype.fExceptionTimeoutPollHandler = fExceptionTimeoutPollHandler;













            var pS_RunPolls = function( theCallback) {
                var aMethodName = "pS_RunPolls";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }


                var aExceptionHandler = this.fExceptionPollsHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fRunPollsCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    if( !this._v_Configuration) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FAIL, null, "!this._v_Configuration", null));
                        return;
                    }


                    this.pInitFinderToScheduleNextPoll();

                    this.pTryToScheduleNextPoll( aCallback, aMethodName);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_RunPolls){}/* CQT */
            aPrototype.pS_RunPolls = pS_RunPolls;









            var pF_Poll = function( theCallback) {
                var aMethodName = "pF_Poll";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Poll){}/* CQT */
            aPrototype.pF_Poll = pF_Poll;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Poll.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Poll = function( theCallback) {
                var aMethodName = "pSS_Poll";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_retrievePollParms.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_RunPolls.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Poll){}/* CQT */
            aPrototype.pSS_Poll = pSS_Poll;









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




        var PollTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_RangeParm = null;

            this._v_RangeParm = null;
            this._v_EachParm  = null;
            this._v_MaxPolls  = null;
            this._v_PollInterval   = null;

            this._v_PollsAlreadyScheduled = null;

            this._pInit_Poll( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        PollTest_Constructor.prototype = aPollTest_Prototype;





        var PollTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aPollTest_Prototype;
            this._v_Type = null;

            this._v_RangeParm = null;

            this._v_RangeParm = null;
            this._v_EachParm  = null;
            this._v_MaxPolls  = null;
            this._v_PollInterval   = null;

            this._v_PollsAlreadyScheduled = null;
        };
        PollTest_SuperPrototypeConstructor.prototype = aPollTest_Prototype;



        var aModule = {
            "PollTest_Prototype": aPollTest_Prototype,
            "PollTest_Constructor": PollTest_Constructor,
            "PollTest_SuperPrototypeConstructor": PollTest_SuperPrototypeConstructor
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

            var aM_runsubs_test = require('./runsubs-test');
            var aM_overrider    = require('./overrider');
            var aM_timeouter    = require('../infrasvcs/timeouter/timeouter');


            return aMod_definer(
                aM_runsubs_test,
                aM_overrider,
                aM_timeouter
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./runsubs-test",
            "./overrider",
            "../infrasvcs/timeouter/timeouter"
        ], function (
                theM_runsubs_test,
                theM_overrider,
                theM_timeouter
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_overrider,
                theM_timeouter
            );
        });
    }


}());


