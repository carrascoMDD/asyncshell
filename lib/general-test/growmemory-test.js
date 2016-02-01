'use strict';

/*
 growmemory-test.js
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_parms_general,
                                 theM_housekeepconstants,
                                 theM_platformmemory,
                                 theM_nextticker,
                                 theM_timeouter,
                                 theM_overrider) {

        var ModuleName     = "growmemory-test";
        var ModulePackages = "general-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }

            theToInit.BUFFERTOARRAYSIZEFACTOR     = 2;
            theToInit.BUFFERTOOBJECTSIZEFACTOR    = 4;
            theToInit.CONSERVATIVERETRYSIZEFACTOR = 2;

            theToInit.MINTOGROW           = 100000;
            theToInit.MINARRAYLENTOCREATE = 10000;
            theToInit.MAXARRAYLENTOCREATE = 1000000;

            theToInit.MAXGROWITERATIONS = 256;

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

            theToInit.PARMSPREFIX_GROWMEMORY = "growmemory";

            theToInit.PARM_GROWMEMORY_MAXHEAPUSED       = theToInit.PARMSPREFIX_GROWMEMORY + ".maxHeapUsed";
            theToInit.PARM_GROWMEMORY_MINHEAPAVAILABLE  = theToInit.PARMSPREFIX_GROWMEMORY + ".minHeapAvailable";
            theToInit.PARM_GROWMEMORY_BUFFERSIZE        = theToInit.PARMSPREFIX_GROWMEMORY + ".bufferSize";
            theToInit.PARM_GROWMEMORY_ECHO_URLPATH      = theToInit.PARMSPREFIX_GROWMEMORY + ".echoURLpath";
            theToInit.PARM_GROWMEMORY_CALLBACKBUFFERS   = theToInit.PARMSPREFIX_GROWMEMORY + ".callbackBuffers";
            theToInit.PARM_GROWMEMORY_REPORTBUFFERS     = theToInit.PARMSPREFIX_GROWMEMORY + ".reportBuffers";
            theToInit.PARM_GROWMEMORY_KEEPBUFFERS       = theToInit.PARMSPREFIX_GROWMEMORY + ".keepBuffers";
            theToInit.PARM_GROWMEMORY_CLEARBUFFERS      = theToInit.PARMSPREFIX_GROWMEMORY + ".clearBuffers";
            theToInit.PARM_GROWMEMORY_HOLDCONFIGBUFFERS = theToInit.PARMSPREFIX_GROWMEMORY + ".holdConfigBuffers";
            theToInit.PARM_GROWMEMORY_HOLDCALLBACKBUFFERS = theToInit.PARMSPREFIX_GROWMEMORY + ".holdCallbackBuffers";
            theToInit.PARM_GROWMEMORY_HOLDEVENTBUFFERS  = theToInit.PARMSPREFIX_GROWMEMORY + ".holdEventBuffers";

            theToInit.PARMS_GROWMEMORY = [
                theToInit.PARM_GROWMEMORY_MINHEAPAVAILABLE,
                theToInit.PARM_GROWMEMORY_MAXHEAPUSED,
                theToInit.PARM_GROWMEMORY_BUFFERSIZE,
                theToInit.PARM_GROWMEMORY_ECHO_URLPATH,
                theToInit.PARM_GROWMEMORY_CALLBACKBUFFERS,
                theToInit.PARM_GROWMEMORY_REPORTBUFFERS,
                theToInit.PARM_GROWMEMORY_KEEPBUFFERS,
                theToInit.PARM_GROWMEMORY_CLEARBUFFERS,
                theToInit.PARM_GROWMEMORY_HOLDCONFIGBUFFERS,
                theToInit.PARM_GROWMEMORY_HOLDCALLBACKBUFFERS,
                theToInit.PARM_GROWMEMORY_HOLDEVENTBUFFERS
            ];


            theToInit.EXTRATOGROW = 500000;

            theToInit.RANDOMDIGITSFACTOR = 100000000;



            theToInit.URLPATH_DEFAULT_ECHOFORIOTOGROMEMORY = "/aux/echo/echo";

            theToInit.TOECHO = "TO ECHO";
            theToInit.ECHO_REQUIREDSTATUSCODE = 200;

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











        var aGrowmemoryTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "GrowmemoryTest";


            aPrototype._v_MinHeapAvailable   = null;
            aPrototype._v_MaxHeapUsed        = null;
            aPrototype._v_CallbackBuffers    = null;
            aPrototype._v_ReportBuffers      = null;
            aPrototype._v_ClearBuffers       = null;
            aPrototype._v_KeepBuffers        = null;
            aPrototype._v_HoldConfigBuffers  = null;
            aPrototype._v_HoldCallbackBuffers= null;
            aPrototype._v_HoldEventBuffers   = null;


            aPrototype._v_MinHeapAvailableValue   = null;
            aPrototype._v_MaxHeapUsedValue        = null;
            aPrototype._v_TargetHeapUsedValue     = null;

            aPrototype._v_Buffers            = null;
            aPrototype._v_KeptBuffers        = null;



            aPrototype._v_ComputationReports     = null;
            aPrototype._v_GrowComputationReports = null;

            aPrototype._v_BaseURLEchoForIOtoGrowMemory = null;
            aPrototype._v_URLpathEchoForIOtoGrowMemory = null;




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Growmemory( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Growmemory = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_MinHeapAvailable   = null;
                this._v_MaxHeapUsed        = null;
                this._v_CallbackBuffers    = null;
                this._v_ReportBuffers      = null;
                this._v_ClearBuffers       = null;
                this._v_KeepBuffers        = null;
                this._v_HoldConfigBuffers  = null;
                this._v_HoldCallbackBuffers= null;
                this._v_HoldEventBuffers   = null;

                this._v_MinHeapAvailableValue   = null;
                this._v_MaxHeapUsedValue        = null;
                this._v_TargetHeapUsedValue     = null;

                this._v_Buffers        = [ ];
                this._v_KeptBuffers    = null;

                this._v_BaseURLEchoForIOtoGrowMemory = null;
                this._v_URLpathEchoForIOtoGrowMemory = null;

                this._v_ComputationReports     = [ ];
                this._v_ComputationReports.fAsLogObject = fAsLogObject_ComputationReport.bind( this._v_ComputationReports);

                this._v_GrowComputationReports = [ ];


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Growmemory", this.EVENTKIND_INIT, null, null, null);}

                if( this._v_KeptBuffers){}/* CQT */
            };
            if( _pInit_Growmemory){}/* CQT */
            aPrototype._pInit_Growmemory = _pInit_Growmemory;







            var fAsLogObject_MemoryReport = function() {
                return this;
            };




            var fAsLogObject_Buffers = function() {
                return "BuffersWithLenght" + ( this.length || 0);
            };





            var fAsLogObject_ComputationReport = function() {
                return this;
            };










            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Growmemory( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Growmemory = function( theReleaseParms, theReleaseDone) {

                this._v_MinHeapAvailable     = undefined;
                this._v_MaxHeapUsed          = undefined;
                this._v_CallbackBuffers      = undefined;
                this._v_ReportBuffers        = undefined;
                this._v_ClearBuffers         = undefined;
                this._v_KeepBuffers          = undefined;
                this._v_HoldConfigBuffers    = undefined;
                this._v_HoldCallbackBuffers  = undefined;
                this._v_HoldEventBuffers     = undefined;

                this._v_MinHeapAvailableValue   = undefined;
                this._v_MaxHeapUsedValue        = undefined;
                this._v_TargetHeapUsedValue     = undefined;

                this._v_Buffers        = undefined;
                /* KeptBuffers are to be released, not cleanedup
                 */
                 this._v_KeptBuffers    = undefined;

                this._v_BaseURLEchoForIOtoGrowMemory = undefined;
                this._v_URLpathEchoForIOtoGrowMemory = undefined;

                this._v_ComputationReports     = undefined;
                this._v_GrowComputationReports = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Growmemory){}/* CQT */
            aPrototype._pRelease_Growmemory = _pRelease_Growmemory;











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

                this.pCleanUpTest_Growmemory( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Growmemory = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                if( theWhatToClean && ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) < 0)) {

                    if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                        this._v_MinHeapAvailable     = undefined;
                        this._v_MaxHeapUsed          = undefined;
                        this._v_CallbackBuffers      = undefined;
                        this._v_ReportBuffers        = undefined;
                        this._v_ClearBuffers         = undefined;
                        this._v_KeepBuffers          = undefined;

                        this._v_MinHeapAvailableValue   = undefined;
                        this._v_MaxHeapUsedValue        = undefined;
                        this._v_TargetHeapUsedValue     = undefined;

                        this._v_Buffers        = undefined;
                        /* KeptBuffers are to be released, not cleanedup
                        this._v_KeptBuffers    = undefined;
                         */

                        this._v_BaseURLEchoForIOtoGrowMemory = undefined;
                        this._v_URLpathEchoForIOtoGrowMemory = undefined;

                        this._v_ComputationReports     = undefined;
                        this._v_GrowComputationReports = undefined;
                    }
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Growmemory){}/* CQT */
            aPrototype.pCleanUpTest_Growmemory = pCleanUpTest_Growmemory;
















            var pS_retrieveGrowmemoryParms = function( theCallback) {

                var aMethodName = "pS_retrieveGrowmemoryParms";

                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }



                var someParmsToResolve = this.PARMS_GROWMEMORY.slice();

                var someResolutionsByName = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !someResolutionsByName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }





                var aMinHeapAvailableResolution = someResolutionsByName[ this.PARM_GROWMEMORY_MINHEAPAVAILABLE];
                if( aMinHeapAvailableResolution && aMinHeapAvailableResolution._v_Success) {
                    this._v_MinHeapAvailable = aMinHeapAvailableResolution._v_ParmValue;

                }
                if( !this._v_MinHeapAvailable) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_MinHeapAvailable", null));
                    return;
                }
                var aMinHeapAvailable =  this.fParmValueReplacement( this._v_MinHeapAvailable);
                if( !aMinHeapAvailable || !( typeof aMinHeapAvailable == "number") || ( aMinHeapAvailable < 1)) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fParmValueReplacement( this._v_MinHeapAvailable)", this._v_ComputationReports));
                    return;
                }

                this._v_MinHeapAvailableValue = Math.floor( aMinHeapAvailable * theM_housekeepconstants.MEGAFACTOR);

                this._v_ComputationReports.push( "this._v_MinHeapAvailableValue=" + this._v_MinHeapAvailableValue);







                var aMaxHeapUsedResolution = someResolutionsByName[ this.PARM_GROWMEMORY_MAXHEAPUSED];
                if( aMaxHeapUsedResolution && aMaxHeapUsedResolution._v_Success) {
                    this._v_MaxHeapUsed = aMaxHeapUsedResolution._v_ParmValue;

                }
                if( !this._v_MaxHeapUsed) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_MaxHeapUsed", null));
                    return;
                }
                var aMaxHeapUsed =  this.fParmValueReplacement( this._v_MaxHeapUsed);
                if( !aMaxHeapUsed || !( typeof aMaxHeapUsed == "number") || ( aMaxHeapUsed < 1)) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fParmValueReplacement( this._v_MaxHeapUsed)", this._v_ComputationReports));
                    return;
                }
                this._v_MaxHeapUsedValue = Math.floor( aMaxHeapUsed * theM_housekeepconstants.MEGAFACTOR);

                this._v_ComputationReports.push( "this._v_MaxHeapUsedValue=" + this._v_MaxHeapUsedValue);






                this._v_TargetHeapUsedValue = this._v_MaxHeapUsedValue - this._v_MinHeapAvailableValue + this.EXTRATOGROW;
                this._v_ComputationReports.push( "this._v_TargetHeapUsedValue=" + this._v_TargetHeapUsedValue +
                    " := this._v_MaxHeapUsedValue=" + this._v_MaxHeapUsedValue + "  -  this._v_MinHeapAvailableValue=" + this._v_MinHeapAvailableValue + "  + this.EXTRATOGROW=" + this.EXTRATOGROW);






                var aCallbackBuffersResolution = someResolutionsByName[ this.PARM_GROWMEMORY_CALLBACKBUFFERS];
                if( aCallbackBuffersResolution && aCallbackBuffersResolution._v_Success) {
                    this._v_CallbackBuffers = aCallbackBuffersResolution._v_ParmValue;

                    if( this._v_CallbackBuffers) {
                        this._v_CallbackBuffers =  this.fParmValueReplacement( this._v_CallbackBuffers);
                    }
                }





                var aReportBuffersResolution = someResolutionsByName[ this.PARM_GROWMEMORY_REPORTBUFFERS];
                if( aReportBuffersResolution && aReportBuffersResolution._v_Success) {
                    this._v_ReportBuffers = aReportBuffersResolution._v_ParmValue;

                    if( this._v_ReportBuffers) {
                        this._v_ReportBuffers =  this.fParmValueReplacement( this._v_ReportBuffers);
                    }
                }





                var aKeepBuffersResolution = someResolutionsByName[ this.PARM_GROWMEMORY_KEEPBUFFERS];
                if( aKeepBuffersResolution && aKeepBuffersResolution._v_Success) {
                    this._v_KeepBuffers = aKeepBuffersResolution._v_ParmValue;

                    if( this._v_KeepBuffers) {
                        this._v_KeepBuffers =  this.fParmValueReplacement( this._v_KeepBuffers);
                    }
                }





                var aCleanBuffersResolution = someResolutionsByName[ this.PARM_GROWMEMORY_CLEARBUFFERS];
                if( aCleanBuffersResolution && aCleanBuffersResolution._v_Success) {
                    this._v_ClearBuffers = aCleanBuffersResolution._v_ParmValue;

                    if( this._v_ClearBuffers) {
                        this._v_ClearBuffers =  this.fParmValueReplacement( this._v_ClearBuffers);
                    }
                }





                var aHoldConfigBuffersResolution = someResolutionsByName[ this.PARM_GROWMEMORY_HOLDCONFIGBUFFERS];
                if( aHoldConfigBuffersResolution && aHoldConfigBuffersResolution._v_Success) {
                    this._v_HoldConfigBuffers = aHoldConfigBuffersResolution._v_ParmValue;

                    if( this._v_HoldConfigBuffers) {
                        this._v_HoldConfigBuffers =  this.fParmValueReplacement( this._v_HoldConfigBuffers);
                    }
                }




                var aHoldCallbackBuffersResolution = someResolutionsByName[ this.PARM_GROWMEMORY_HOLDCALLBACKBUFFERS];
                if( aHoldCallbackBuffersResolution && aHoldCallbackBuffersResolution._v_Success) {
                    this._v_HoldCallbackBuffers = aHoldCallbackBuffersResolution._v_ParmValue;

                    if( this._v_HoldCallbackBuffers) {
                        this._v_HoldCallbackBuffers =  this.fParmValueReplacement( this._v_HoldCallbackBuffers);
                    }
                }

                
                

                var aHoldEventBuffersResolution = someResolutionsByName[ this.PARM_GROWMEMORY_HOLDEVENTBUFFERS];
                if( aHoldEventBuffersResolution && aHoldEventBuffersResolution._v_Success) {
                    this._v_HoldEventBuffers = aHoldEventBuffersResolution._v_ParmValue;

                    if( this._v_HoldEventBuffers) {
                        this._v_HoldEventBuffers =  this.fParmValueReplacement( this._v_HoldEventBuffers);
                    }
                }



                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_retrieveGrowmemoryParms){}/* CQT */
            aPrototype.pS_retrieveGrowmemoryParms = pS_retrieveGrowmemoryParms;




















            var pInitFinderToGrowNext = function() {
                this._v_GrowIterationsCounter    = 0;
            };
            if( pInitFinderToGrowNext){}/* CQT */
            aPrototype.pInitFinderToGrowNext = pInitFinderToGrowNext;










            var pTryToScheduleNextGrow = function( theCallback) {

                var aMethodName = "pTryToScheduleNextGrow";

                if( this._v_GrowIterationsCounter >= this.MAXGROWITERATIONS) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, this._v_GrowIterationsCounter, "aNumGrowIterations >= this.MAXGROWITERATIONS", this.MAXGROWITERATIONS));
                    return;
                }

                this._v_GrowIterationsCounter += 1;

                this.pNextGrow( theCallback);

            };
            if( pTryToScheduleNextGrow){}/* CQT */
            aPrototype.pTryToScheduleNextGrow = pTryToScheduleNextGrow;







            var pNextGrow = function( theCallback) {

                this.pNextGrow_Echo( theCallback);
            };
            if( pNextGrow){}/* CQT */
            aPrototype.pNextGrow = pNextGrow;












            var pNextGrow_Echo = function( theCallback) {

                var aMethodName = "pNextGrow_Echo";


                var aNextGrowEchoHandler = this.fNextGrowEchoHandler( theCallback);
                if( !aNextGrowEchoHandler) {
                    theCallback( this.fRecord( this._v_Type, this._v_GrowId, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fNextGrowTimeoutHandler( theCallback)", null));
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextGrowHandler( aNextGrowEchoHandler);

                try {
                    this.pS_EchoForIOtoGrowMemory( aNextGrowEchoHandler);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }


            };
            if( pNextGrow_Echo){}/* CQT */
            aPrototype.pNextGrow_Echo = pNextGrow_Echo;











            var fNextGrowEchoHandler = function( theCallback) {
                var aMethodName = "fNextGrowEchoHandler";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function() {

                    var otherComputationReports = this._v_ComputationReports.slice();
                    otherComputationReports.fAsLogObject = fAsLogObject_ComputationReport.bind( otherComputationReports);
                    this._v_GrowComputationReports.push( otherComputationReports);

                    var anErrorReport = this.fGrowmemoryIterationAndErrorReportOrMustRetry( otherComputationReports);

                    if( typeof anErrorReport == "object") {
                        theCallback( anErrorReport);
                        return;
                    }

                    if( anErrorReport == false) {
                        theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_MEMORYGROWN, otherComputationReports, null, null));
                        return;
                    }


                    aThis.pTryToScheduleNextGrow( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fNextGrowCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fNextGrowEchoHandler){}/* CQT */
            aPrototype.fNextGrowEchoHandler = fNextGrowEchoHandler;









            var fNextGrowTimeoutHandler = function( theCallback) {
                var aMethodName = "fNextGrowTimeoutHandler";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function() {

                    var otherComputationReports = this._v_ComputationReports.slice();
                    otherComputationReports.fAsLogObject = fAsLogObject_ComputationReport.bind( otherComputationReports);
                    this._v_GrowComputationReports.push( otherComputationReports);



                    var anErrorReport = this.fGrowmemoryIterationAndErrorReportOrMustRetry( otherComputationReports);

                    if( typeof anErrorReport == "object") {
                        theCallback( anErrorReport);
                        return;
                    }



                    if( anErrorReport == false) {
                        theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_MEMORYGROWN, otherComputationReports, null, null));
                        return;
                    }


                    aThis.pTryToScheduleNextGrow( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fNextGrowCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fNextGrowTimeoutHandler){}/* CQT */
            aPrototype.fNextGrowTimeoutHandler = fNextGrowTimeoutHandler;










            var fGrowmemoryIterationAndErrorReportOrMustRetry = function( theComputationReports) {

                var aMethodName = "fGrowmemoryIterationAndErrorReportOrMustRetry";

                var someComputationReports = theComputationReports;
                if( !someComputationReports) {
                    someComputationReports = this._v_ComputationReports.slice();
                    someComputationReports.fAsLogObject = fAsLogObject_ComputationReport.bind( someComputationReports);
                    this._v_GrowComputationReports.push( someComputationReports);
                }


                if( !this._v_MinHeapAvailableValue) {
                    return this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_MinHeapAvailableValue", null);
                }
                someComputationReports.push( "this._v_MinHeapAvailableValue=" + this._v_MinHeapAvailableValue);


                if( !this._v_MaxHeapUsedValue) {
                    return this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_MaxHeapUsedValue", someComputationReports);
                }
                someComputationReports.push( "this._v_MaxHeapUsedValue=" + this._v_MaxHeapUsedValue);


                if( !this._v_TargetHeapUsedValue) {
                    return this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_TargetHeapUsedValue", null);
                }

                someComputationReports.push( "this._v_TargetHeapUsedValue=" + this._v_TargetHeapUsedValue);




                theM_platformmemory.fGarbageCollect();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_GARBAGECOLLECT, null, "BEFORE GROW", null);




                var aMemoryReport = theM_platformmemory.fMemoryReport();
                if( !aMemoryReport) {
                    return this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!theM_platformmemory.fMemoryReport() BEFORE GROW", someComputationReports);
                }


                if( !aMemoryReport.fAsLogObject) {
                    aMemoryReport.fAsLogObject = fAsLogObject_MemoryReport.bind( aMemoryReport);
                }
                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_MEMORYREPORT, aMemoryReport, "BEFORE GROW", someComputationReports);



                var aHeapUsed  = aMemoryReport[ "heapUsed"];

                if( !aHeapUsed) {
                    return this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!theM_platformmemory.fMemoryReport()[ 'heapUsed'] BEFORE GROW", someComputationReports);
                }

                someComputationReports.push( "aHeapUsedBEFOREGROW=" + aHeapUsed);






                var aHeapAvailableOrGrowable = this._v_MaxHeapUsedValue - aHeapUsed;

                someComputationReports.push( "aHeapAvailableOrGrowableBEFOREGROW=" + aHeapAvailableOrGrowable + " := this._v_MaxHeapUsedValue=" + this._v_MaxHeapUsedValue + "  -  aHeapUsedBEFOREGROW=" + aHeapUsed);


                if( aHeapAvailableOrGrowable < this._v_MinHeapAvailableValue) {

                    someComputationReports.push( "aHeapAvailableOrGrowableBEFOREGROW=" + aHeapAvailableOrGrowable + " < this._v_MinHeapAvailableValue=" + this._v_MinHeapAvailableValue);

                    return false;
                }



                var aHowMuchToGrow = this._v_TargetHeapUsedValue - aHeapUsed;

                someComputationReports.push( "aHowMuchToGrowBEFOREGROW=" + aHowMuchToGrow);

                if( aHowMuchToGrow <= 0) {
                    return false;
                }



                this.pAllocateBuffers( aHowMuchToGrow);




                var aMemoryReportAfter = theM_platformmemory.fMemoryReport();
                if( !aMemoryReportAfter) {
                    return this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!theM_platformmemory.fMemoryReport() AFTER GROW", someComputationReports);
                }




                theM_platformmemory.fGarbageCollect();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_GARBAGECOLLECT, null, "AFTER GROW", null);







                aMemoryReportAfter = theM_platformmemory.fMemoryReport();
                if( !aMemoryReportAfter) {
                    return this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!theM_platformmemory.fMemoryReport() AFTER GROW", someComputationReports);
                }


                if( !aMemoryReportAfter.fAsLogObject) {
                    aMemoryReportAfter.fAsLogObject = fAsLogObject_MemoryReport.bind( aMemoryReportAfter);
                }
                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_MEMORYREPORT, aMemoryReportAfter, "AFTER GROW", someComputationReports);



                var aHeapUsedAfter  = aMemoryReportAfter[ "heapUsed"];

                if( !aHeapUsedAfter) {
                    return this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!theM_platformmemory.fMemoryReport()[ 'heapUsed'] AFTER GROW", someComputationReports);
                }

                someComputationReports.push( "aHeapUsedAFTERGROW=" + aHeapUsedAfter);



                var aHeapAvailableOrGrowableAfter = this._v_MaxHeapUsedValue - aHeapUsedAfter;

                someComputationReports.push( "aHeapAvailableOrGrowableAFTERGROW=" + aHeapAvailableOrGrowableAfter + " := this._v_MaxHeapUsedValue=" + this._v_MaxHeapUsedValue + "  -  aHeapUsedAFTERGROW=" + aHeapUsedAfter);




                if( aHeapAvailableOrGrowableAfter < this._v_MinHeapAvailableValue) {
                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_GROWCOMPUTATIONREPORT, someComputationReports, "AFTER GROW", "aHeapAvailableOrGrowableAfter < this._v_MinHeapAvailableValue");
                    return false;
                }


                var aHowMuchToGrowAfter = this._v_TargetHeapUsedValue - aHeapUsedAfter;
                someComputationReports.push( "aHowMuchToGrowAFTERGROW=" + aHowMuchToGrowAfter);

                if( aHowMuchToGrowAfter <= 0) {
                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_GROWCOMPUTATIONREPORT, someComputationReports, "AFTER GROW", "aHowMuchToGrowAfter <= 0");
                    return false;
                }

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_GROWCOMPUTATIONREPORT, someComputationReports, "AFTER GROW", null);


                return true;

            };
            if( fGrowmemoryIterationAndErrorReportOrMustRetry){}/* CQT */
            aPrototype.fGrowmemoryIterationAndErrorReportOrMustRetry = fGrowmemoryIterationAndErrorReportOrMustRetry;









            var pAllocateBuffers = function( theHowMuchToGrow) {

                if( !theHowMuchToGrow) {
                    return;
                }

                this.pAllocateBuffers_Arrays( theHowMuchToGrow);

            };
            if( pAllocateBuffers){}/* CQT */
            aPrototype.pAllocateBuffers = pAllocateBuffers;








            var pAllocateBuffers_Arrays = function( theHowMuchToGrow) {

                if( !theHowMuchToGrow) {
                    return;
                }

                var aHowMuchToGrow = theHowMuchToGrow;
                if( aHowMuchToGrow < this.MINTOGROW) {
                    aHowMuchToGrow = this.MINTOGROW;
                }



                var anArrayLenToCreate = Math.floor( aHowMuchToGrow / this.BUFFERTOARRAYSIZEFACTOR / this.BUFFERTOOBJECTSIZEFACTOR / this.CONSERVATIVERETRYSIZEFACTOR);
                if( !anArrayLenToCreate) {
                    return;
                }

                if( anArrayLenToCreate < this.MINARRAYLENTOCREATE) {
                    anArrayLenToCreate = this.MINARRAYLENTOCREATE;
                }

                var aRemainingArrayLenToCreate = anArrayLenToCreate;

                while( aRemainingArrayLenToCreate > 0) {

                    var aOneArrayLenToCreate = aRemainingArrayLenToCreate;
                    if( aOneArrayLenToCreate > this.MAXARRAYLENTOCREATE) {
                        aOneArrayLenToCreate = this.MAXARRAYLENTOCREATE;
                    }

                    var anArray = new Array( aOneArrayLenToCreate);
                    for( var anArrayIdx=0; anArrayIdx < aOneArrayLenToCreate; anArrayIdx++) {
                        /*
                        var anObject = new Object();
                        anObject[ "idx"] = "" + anArrayIdx;

                        anArray[ anArrayIdx] = anObject;

                         */
                        anArray[ anArrayIdx] = anArrayIdx;
                    }

                    this._v_Buffers.push( anArray);

                    aRemainingArrayLenToCreate -= aOneArrayLenToCreate;
                }
            };
            if( pAllocateBuffers_Arrays){}/* CQT */
            aPrototype.pAllocateBuffers_Arrays = pAllocateBuffers_Arrays;










            var fExceptionNextGrowHandler = function( theCallback, theMethodName) {

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

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextGrowHandler){}/* CQT */
            aPrototype.fExceptionNextGrowHandler = fExceptionNextGrowHandler;


















            var fLazyInitializerEchoForIOtoGrowMemory = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */


                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {

                    if( !aThis._v_Configuration) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration", null));
                        return  false;
                    }


                    var someParmsToResolve = [
                        theM_parms_general.PARM_HITPOINT_BASEURL,
                        aThis.PARM_GROWMEMORY_ECHO_URLPATH
                    ];

                    var aParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                    if( !aParmResolutionsDict) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                        return  false;
                    }


                    var aBaseURLResolution = aParmResolutionsDict[ theM_parms_general.PARM_HITPOINT_BASEURL];
                    if( !aBaseURLResolution || !aBaseURLResolution._v_Success || !aBaseURLResolution._v_ParmValue) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " +  theM_parms_general.PARM_HITPOINT_BASEURL + ")", null));
                        return  false;
                    }
                    aThis._v_BaseURLEchoForIOtoGrowMemory = aBaseURLResolution._v_ParmValue;


                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_GROWMEMORY_ECHO_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpathEchoForIOtoGrowMemory = aURLpathResolution._v_ParmValue;
                    }

                    return true;

                }).bind( this);
                if( aLazyInitializerFunction){}/* CQT */

                return aLazyInitializerFunction;
            };
            if( fLazyInitializerEchoForIOtoGrowMemory){}/* CQT */
            aPrototype.fLazyInitializerEchoForIOtoGrowMemory = fLazyInitializerEchoForIOtoGrowMemory;








            var fURLpathEchoForIOtoGrowMemory = function( theCallback) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    if( !aThis._v_BaseURLEchoForIOtoGrowMemory) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_BaseURLEchoForIOtoGrowMemory", null));
                        return null;
                    }

                    var aURLpath = aThis._v_URLpathEchoForIOtoGrowMemory;
                    if( !aURLpath) {
                        aURLpath = aThis.URLPATH_DEFAULT_ECHOFORIOTOGROMEMORY;
                    }
                    if( !aURLpath) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_URLpath && !aThis.URLPATH_DEFAULT", null));
                        return null;
                    }


                    var aURL = aThis._v_BaseURLEchoForIOtoGrowMemory + aURLpath;


                    var aToEchoEncoded = encodeURIComponent( aThis.TOECHO);
                    if( aToEchoEncoded) {
                        aURL += "?theToEcho=";
                        aURL += aToEchoEncoded;
                    }

                    return aURL;


                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fURLpathEchoForIOtoGrowMemory){}/* CQT */
            aPrototype.fURLpathEchoForIOtoGrowMemory = fURLpathEchoForIOtoGrowMemory;








            var fRequestDataEchoForIOtoGrowMemory = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */
                if( theMethodName){}/* CQT */

                var aThis = this;
                if( aThis){}/* CQT */

                var aFunction = (function( theOtherCallback) {
                    if( theOtherCallback){}/* CQT */

                    var aRequestData = { };
                    if( aRequestData){}/* CQT */

                    return aRequestData;

                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fRequestDataEchoForIOtoGrowMemory){}/* CQT */
            aPrototype.fRequestDataEchoForIOtoGrowMemory = fRequestDataEchoForIOtoGrowMemory;







            var fRequiredStatusCodeEchoForIOtoGrowMemory = function( theCallback) {
                if( theCallback){}/* CQT */
                return this.ECHO_REQUIREDSTATUSCODE;
            };
            if( fRequiredStatusCodeEchoForIOtoGrowMemory){}/* CQT */
            aPrototype.fRequiredStatusCodeEchoForIOtoGrowMemory = fRequiredStatusCodeEchoForIOtoGrowMemory;






            var fResultParserEchoForIOtoGrowMemory = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */
                if( theMethodName){}/* CQT */

                var aThis = this;

                var aResultParserFunction = (function( theCallback, theError, theResponse, theBody) {
                    if( theError){}/* CQT */
                    if( theBody){}/* CQT */

                    if( !theResponse) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                        return false;
                    }

                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParserEchoForIOtoGrowMemory){}/* CQT */
            aPrototype.fResultParserEchoForIOtoGrowMemory = fResultParserEchoForIOtoGrowMemory;










            var pS_EchoForIOtoGrowMemory = function( theCallback) {

                var aMethodName = "pS_EchoForIOtoGrowMemory";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var aLazyInitializer    = this.fLazyInitializerEchoForIOtoGrowMemory( theCallback, aMethodName);
                var aURLpath            = this.fURLpathEchoForIOtoGrowMemory( theCallback);
                var aRequestData        = this.fRequestDataEchoForIOtoGrowMemory( theCallback, aMethodName);
                var aRequiredStatusCode = this.fRequiredStatusCodeEchoForIOtoGrowMemory( theCallback);
                var aResultParser       = this.fResultParserEchoForIOtoGrowMemory( theCallback, aMethodName);

                this.pS_AsyncRequestGet(
                    theCallback,
                    aMethodName,
                    aLazyInitializer,
                    aURLpath,
                    aRequestData,
                    aRequiredStatusCode,
                    aResultParser
                );
            };
            if( pS_EchoForIOtoGrowMemory){}/* CQT */
            aPrototype.pS_EchoForIOtoGrowMemory = pS_EchoForIOtoGrowMemory;















            var fOverallGrowCallback = function( theCallback) {
                var aMethodName = "fOverallGrowCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        if( theCallback) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, theError, null));
                        }
                        return;
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, null, null, null));


                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fOverallGrowCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fOverallGrowCallback){}/* CQT */
            aPrototype.fOverallGrowCallback = fOverallGrowCallback;












            var fOverallExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallExceptionHandler){}/* CQT */
            aPrototype.fOverallExceptionHandler = fOverallExceptionHandler;








            var pS_growmemory = function( theCallback) {
                var aMethodName = "pS_growmemory";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);


                if( !this._v_MinHeapAvailableValue) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_MinHeapAvailableValue", null));
                    return;
                }


                if( !this._v_MaxHeapUsedValue) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_MaxHeapUsedValue", this._v_ComputationReports));
                    return;
                }


                if( !this._v_TargetHeapUsedValue) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_TargetHeapUsedValue", null));
                    return;
                }





                var aExceptionHandler = this.fOverallExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallGrowCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fOverallGrowCallback( theCallback)", null));
                        return;
                    }




                    this.pInitFinderToGrowNext();



                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToScheduleNextGrow( aCallback);
                            }
                            catch( anException) {
                                aExceptionHandler( anException);
                            }
                        }
                    );

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_growmemory){}/* CQT */
            aPrototype.pS_growmemory = pS_growmemory;












            var pS_keepbuffers = function( theCallback) {
                var aMethodName = "pS_keepbuffers";


                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                if( this._v_KeepBuffers) {

                    this._v_KeptBuffers = this._v_Buffers;
                }

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null);

                theCallback();

            };
            if( pS_keepbuffers){}/* CQT */
            aPrototype.pS_keepbuffers = pS_keepbuffers;










            var pS_callbackbuffers = function( theCallback) {
                var aMethodName = "pS_callbackbuffers";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);


                if( this._v_CallbackBuffers) {
                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null);

                    if( !this._v_Buffers.fAsLogObject) {
                        this._v_Buffers.fAsLogObject = fAsLogObject_Buffers.bind( this._v_Buffers);
                    }


                    var someBuffers = this._v_Buffers;

                    theM_nextticker.pNextTick(
                        function() {
                            theCallback( null, someBuffers);
                        }
                    );



                }
                else {
                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null);

                    theCallback();
                }
            };
            if( pS_callbackbuffers){}/* CQT */
            aPrototype.pS_callbackbuffers = pS_callbackbuffers;











            var pS_reportbuffers = function( theCallback) {
                var aMethodName = "pS_reportbuffers";


                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                if( this._v_ReportBuffers) {

                    if( !this._v_Buffers.fAsLogObject) {
                        this._v_Buffers.fAsLogObject = fAsLogObject_Buffers.bind( this._v_Buffers);
                    }

                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_INFO, this._v_Buffers, null, null);
                }

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null);

                theCallback();

            };
            if( pS_reportbuffers){}/* CQT */
            aPrototype.pS_reportbuffers = pS_reportbuffers;









            var pS_holdconfigbuffers = function( theCallback) {
                var aMethodName = "pS_holdconfigbuffers";


                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                if( this._v_HoldConfigBuffers) {
                    if( this._v_Configuration) {
                        this._v_Configuration.pHoldBuffersFromCleanUpUntilConfigsRelease( this._v_Buffers);
                    }
                }

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null);

                theCallback();

            };
            if( pS_holdconfigbuffers){}/* CQT */
            aPrototype.pS_holdconfigbuffers = pS_holdconfigbuffers;










            var pS_holdcallbackbuffers = function( theCallback) {
                var aMethodName = "pS_holdcallbackbuffers";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);


                if( this._v_HoldCallbackBuffers) {

                    theCallback.pHoldBuffersFromCleanUpUntilCallbacksRelease( this._v_Buffers);
                }

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null);

                theCallback();

            };
            if( pS_holdcallbackbuffers){}/* CQT */
            aPrototype.pS_holdcallbackbuffers = pS_holdcallbackbuffers;










            var pS_holdeventbuffers = function( theCallback) {
                var aMethodName = "pS_holdeventbuffers";


                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                if( this._v_HoldEventBuffers) {

                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_INFO, this._v_Buffers, null, null);

                    aRecord.pHoldBuffersFromCleanUpUntilEventsRelease( this._v_Buffers);
                }

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null);

                theCallback();

            };
            if( pS_holdeventbuffers){}/* CQT */
            aPrototype.pS_holdeventbuffers = pS_holdeventbuffers;








            var pS_cleanbuffers = function( theCallback) {
                var aMethodName = "pS_cleanbuffers";


                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                if( this._v_ClearBuffers) {
                    this._v_Buffers = null;
                }

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null);

                theCallback();

            };
            if( pS_cleanbuffers){}/* CQT */
            aPrototype.pS_cleanbuffers = pS_cleanbuffers;











            var pF_Growmemory = function( theCallback) {
                var aMethodName = "pF_Growmemory";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Growmemory){}/* CQT */
            aPrototype.pF_Growmemory = pF_Growmemory;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Growmemory.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Growmemory = function( theCallback) {
                var aMethodName = "pSS_Growmemory";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_retrieveGrowmemoryParms.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_growmemory.bind( this),
                    this.pS_keepbuffers.bind( this),
                    this.pS_callbackbuffers.bind( this),
                    this.pS_reportbuffers.bind( this),
                    this.pS_holdconfigbuffers.bind( this),
                    this.pS_holdcallbackbuffers.bind( this),
                    this.pS_holdeventbuffers.bind( this),
                    this.pS_cleanbuffers.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Growmemory){}/* CQT */
            aPrototype.pSS_Growmemory = pSS_Growmemory;







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




        var GrowmemoryTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_MinHeapAvailable = null;
            this._v_MaxHeapUsed      = null;
            this._v_CallbackBuffers  = null;
            this._v_ReportBuffers    = null;
            this._v_ClearBuffers     = null;
            this._v_KeepBuffers      = null;
            this._v_HoldConfigBuffers  = null;
            this._v_HoldCallbackBuffers= null;
            this._v_HoldEventBuffers   = null;

            this._v_MinHeapAvailableValue   = null;
            this._v_MaxHeapUsedValue        = null;
            this._v_TargetHeapUsedValue     = null;

            this._v_Buffers        = null;
            this._v_KeptBuffers    = null;

            this._v_ComputationReports     = null;
            this._v_GrowComputationReports = null;

            this._v_BaseURLEchoForIOtoGrowMemory = null;

            this._pInit_Growmemory( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        GrowmemoryTest_Constructor.prototype = aGrowmemoryTest_Prototype;





        var GrowmemoryTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aGrowmemoryTest_Prototype;
            this._v_Type = null;

            this._v_MinHeapAvailable = null;
            this._v_MaxHeapUsed      = null;
            this._v_CallbackBuffers  = null;
            this._v_ReportBuffers    = null;
            this._v_ClearBuffers     = null;
            this._v_KeepBuffers      = null;
            this._v_HoldConfigBuffers  = null;
            this._v_HoldCallbackBuffers= null;
            this._v_HoldEventBuffers   = null;

            this._v_MinHeapAvailableValue   = null;
            this._v_MaxHeapUsedValue        = null;
            this._v_TargetHeapUsedValue     = null;

            this._v_Buffers        = null;
            this._v_KeptBuffers    = null;

            this._v_ComputationReports     = null;
            this._v_GrowComputationReports = null;

            this._v_BaseURLEchoForIOtoGrowMemory = null;

        };
        GrowmemoryTest_SuperPrototypeConstructor.prototype = aGrowmemoryTest_Prototype;



        var aModule = {
            "GrowmemoryTest_Prototype": aGrowmemoryTest_Prototype,
            "GrowmemoryTest_Constructor": GrowmemoryTest_Constructor,
            "GrowmemoryTest_SuperPrototypeConstructor": GrowmemoryTest_SuperPrototypeConstructor
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
            var aM_parms_general      = require('./parms-general');
            var aM_housekeepconstants = require('../common-test/housekeep/housekeep-constants');
            var aM_platformmemory     = require('../infrasvcs/memory/memory');
            var aM_nextticker         = require('../infrasvcs/nextticker/nextticker');
            var aM_timeouter          = require('../infrasvcs/timeouter/timeouter');
            var aM_overrider          = require('../common-test/overrider');

            return aMod_definer(
                aM_runsubs_test,
                aM_parms_general,
                aM_housekeepconstants,
                aM_platformmemory,
                aM_nextticker,
                aM_timeouter,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/runsubs-test",
            "./parms-general",
            "../common-test/housekeep/housekeep-constants",
            "../infrasvcs/memory/memory",
            "../infrasvcs/nextticker/nextticker",
            "../infrasvcs/timeouter/timeouter",
            "../common-test/overrider"
        ], function (
                theM_runsubs_test,
                theM_parms_general,
                theM_housekeepconstants,
                theM_platformmemory,
                theM_nextticker,
                theM_timeouter,
                theM_overrider
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_parms_general,
                theM_housekeepconstants,
                theM_platformmemory,
                theM_nextticker,
                theM_timeouter,
                theM_overrider
            );
        });
    }


}());


