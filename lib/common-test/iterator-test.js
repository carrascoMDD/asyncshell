'use strict';

/*
 iterator-test.js
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
                                 theM_overrider,
                                 theM_sentinels) {


        var ModuleName     = "iterator-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.MAXITERATIONS = 100000;
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

            theToInit.PARMSPREFIX_ITERATOR = "iterator";

            theToInit.PARM_ITERATOR_UNIQUEIDS    = theToInit.PARMSPREFIX_ITERATOR + ".uniqueIds";
            theToInit.PARM_ITERATOR_RANGEPARM    = theToInit.PARMSPREFIX_ITERATOR + ".rangeParm";
            theToInit.PARM_ITERATOR_EACHPARM     = theToInit.PARMSPREFIX_ITERATOR + ".eachParm";
            theToInit.PARM_ITERATOR_INDEXPARM    = theToInit.PARMSPREFIX_ITERATOR + ".indexParm";
            theToInit.PARM_ITERATOR_STARTIDX     = theToInit.PARMSPREFIX_ITERATOR + ".startidx";
            theToInit.PARM_ITERATOR_ENDIDX       = theToInit.PARMSPREFIX_ITERATOR + ".endidx";
            theToInit.PARM_ITERATOR_DELTAIDX     = theToInit.PARMSPREFIX_ITERATOR + ".deltaidx";

            theToInit.PARM_ITERATOR_RANGEPARMOTHER    = theToInit.PARMSPREFIX_ITERATOR + ".rangeParmOther";
            theToInit.PARM_ITERATOR_EACHPARMOTHER     = theToInit.PARMSPREFIX_ITERATOR + ".eachParmOther";
            theToInit.PARM_ITERATOR_INDEXPARMOTHER    = theToInit.PARMSPREFIX_ITERATOR + ".indexParmOther";
            theToInit.PARM_ITERATOR_SHIFTOTHER        = theToInit.PARMSPREFIX_ITERATOR + ".shiftidxOther";

            theToInit.PARM_ITERATOR_RANGEPARMANOTHER    = theToInit.PARMSPREFIX_ITERATOR + ".rangeParmAnother";
            theToInit.PARM_ITERATOR_EACHPARMANOTHER     = theToInit.PARMSPREFIX_ITERATOR + ".eachParmAnother";
            theToInit.PARM_ITERATOR_INDEXPARMANOTHER    = theToInit.PARMSPREFIX_ITERATOR + ".indexParmAnother";
            theToInit.PARM_ITERATOR_SHIFTANOTHER        = theToInit.PARMSPREFIX_ITERATOR + ".shiftidxAnother";

            theToInit.PARMS_ITERATOR = [
                theToInit.PARM_ITERATOR_UNIQUEIDS,
                theToInit.PARM_ITERATOR_RANGEPARM,
                theToInit.PARM_ITERATOR_EACHPARM,
                theToInit.PARM_ITERATOR_INDEXPARM,
                theToInit.PARM_ITERATOR_STARTIDX,
                theToInit.PARM_ITERATOR_ENDIDX,
                theToInit.PARM_ITERATOR_DELTAIDX,

                theToInit.PARM_ITERATOR_RANGEPARMOTHER,
                theToInit.PARM_ITERATOR_EACHPARMOTHER,
                theToInit.PARM_ITERATOR_INDEXPARMOTHER,
                theToInit.PARM_ITERATOR_SHIFTOTHER,

                theToInit.PARM_ITERATOR_RANGEPARMANOTHER,
                theToInit.PARM_ITERATOR_EACHPARMANOTHER,
                theToInit.PARM_ITERATOR_INDEXPARMANOTHER,
                theToInit.PARM_ITERATOR_SHIFTANOTHER
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











        var aIteratorTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "IteratorTest";

            aPrototype._v_Prototype_IteratorTest = aPrototype;



            aPrototype._v_UniqueIds  = null;

            aPrototype._v_RangeParm  = null;
            aPrototype._v_EachParm   = null;
            aPrototype._v_IndexParm  = null;
            aPrototype._v_StartIdx   = null;
            aPrototype._v_EndIdx     = null;
            aPrototype._v_DeltaIdx   = null;

            aPrototype._v_RangeParmOther  = null;
            aPrototype._v_EachParmOther   = null;
            aPrototype._v_IndexParmOther  = null;
            aPrototype._v_ShiftOther  = null;

            aPrototype._v_RangeParmAnother  = null;
            aPrototype._v_EachParmAnother   = null;
            aPrototype._v_IndexParmAnother  = null;
            aPrototype._v_ShiftAnother  = null;

            aPrototype._v_IterationCounter = null;

            aPrototype._v_IterationsAlreadyScheduled = null;
            aPrototype._v_IterationElementsAlreadyScheduled = null;

            aPrototype._v_IterationsAlreadyScheduledOther = null;
            aPrototype._v_IterationsAlreadyScheduledAnother = null;



            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Iterator( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Iterator = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_UniqueIds  = null;
                this._v_RangeParm  = null;
                this._v_EachParm   = null;
                this._v_IndexParm  = null;
                this._v_StartIdx   = null;
                this._v_EndIdx     = null;

                this._v_RangeParmOther  = null;
                this._v_EachParmOther   = null;
                this._v_IndexParmOther  = null;
                this._v_ShiftOther  = null;

                this._v_RangeParmAnother  = null;
                this._v_EachParmAnother   = null;
                this._v_IndexParmAnother  = null;
                this._v_ShiftAnother  = null;


                this._v_IterationCounter = null;
                this._v_IterationsAlreadyScheduled = [ ];
                this._v_IterationElementsAlreadyScheduled = [ ];

                this._v_IterationsAlreadyScheduledOther = [ ];
                this._v_IterationsAlreadyScheduledAnother = [ ];


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Iterator", this.EVENTKIND_INIT, null, null, null);}

                if( this._v_IterationsAlreadyScheduledOther){}/* CQT */
                if( this._v_IterationsAlreadyScheduledAnother){}/* CQT */
            };
            if( _pInit_Iterator){}/* CQT */
            aPrototype._pInit_Iterator = _pInit_Iterator;












            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Iterator( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Iterator = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_UniqueIds  = undefined;
                this._v_RangeParm  = undefined;
                this._v_EachParm   = undefined;
                this._v_IndexParm  = undefined;
                this._v_StartIdx   = undefined;
                this._v_EndIdx     = undefined;

                this._v_RangeParmOther  = undefined;
                this._v_EachParmOther   = undefined;
                this._v_IndexParmOther  = undefined;
                this._v_ShiftOther  = undefined;

                this._v_RangeParmAnother  = undefined;
                this._v_EachParmAnother   = undefined;
                this._v_IndexParmAnother  = undefined;
                this._v_ShiftAnother  = undefined;


                this._v_IterationCounter = undefined;
                this._v_IterationsAlreadyScheduled = undefined;
                this._v_IterationElementsAlreadyScheduled = undefined;

                this._v_IterationsAlreadyScheduledOther = undefined;
                this._v_IterationsAlreadyScheduledAnother = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Iterator){}/* CQT */
            aPrototype._pRelease_Iterator = _pRelease_Iterator;











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

                this.pCleanUpTest_Iterator( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Iterator = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_UniqueIds  = undefined;
                    this._v_RangeParm  = undefined;
                    this._v_EachParm   = undefined;
                    this._v_IndexParm  = undefined;
                    this._v_StartIdx   = undefined;
                    this._v_EndIdx     = undefined;

                    this._v_RangeParmOther  = undefined;
                    this._v_EachParmOther   = undefined;
                    this._v_IndexParmOther  = undefined;
                    this._v_ShiftOther  = undefined;

                    this._v_RangeParmAnother  = undefined;
                    this._v_EachParmAnother   = undefined;
                    this._v_IndexParmAnother  = undefined;
                    this._v_ShiftAnother  = undefined;


                    this._v_IterationCounter = undefined;
                    this._v_IterationsAlreadyScheduled = undefined;
                    this._v_IterationElementsAlreadyScheduled = undefined;

                    this._v_IterationsAlreadyScheduledOther = undefined;
                    this._v_IterationsAlreadyScheduledAnother = undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Iterator){}/* CQT */
            aPrototype.pCleanUpTest_Iterator = pCleanUpTest_Iterator;













            var pS_retrieveIteratorParms = function( theCallback) {

                var aMethodName = "pS_retrieveIteratorParms";

                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }



                var someParmsToResolve = [
                    this.PARM_ITERATOR_UNIQUEIDS,

                    this.PARM_ITERATOR_RANGEPARM,
                    this.PARM_ITERATOR_EACHPARM,
                    this.PARM_ITERATOR_INDEXPARM,
                    this.PARM_ITERATOR_STARTIDX,
                    this.PARM_ITERATOR_ENDIDX,
                    this.PARM_ITERATOR_DELTAIDX,

                    this.PARM_ITERATOR_RANGEPARMOTHER,
                    this.PARM_ITERATOR_EACHPARMOTHER,
                    this.PARM_ITERATOR_INDEXPARMOTHER,
                    this.PARM_ITERATOR_SHIFTOTHER,

                    this.PARM_ITERATOR_RANGEPARMANOTHER,
                    this.PARM_ITERATOR_EACHPARMANOTHER,
                    this.PARM_ITERATOR_INDEXPARMANOTHER,
                    this.PARM_ITERATOR_SHIFTANOTHER
                ];

                var someResolutionsByName = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);


                if( !someResolutionsByName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }



                if( this._v_UniqueIds == null) {
                    var aUniqueIdsParmResolution = someResolutionsByName[ this.PARM_ITERATOR_UNIQUEIDS];
                    if( aUniqueIdsParmResolution && aUniqueIdsParmResolution._v_Success) {
                        this._v_UniqueIds = aUniqueIdsParmResolution._v_ParmValue;
                    }
                }



                if( !this._v_RangeParm) {
                    var aRangeParmResolution = someResolutionsByName[ this.PARM_ITERATOR_RANGEPARM];
                    if( !aRangeParmResolution || !aRangeParmResolution._v_Success || !aRangeParmResolution._v_ParmValue) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!aRangeParmResolution || !aRangeParmResolution._v_Success || !aRangeParmResolution._v_ParmValue", null));
                        return;
                    }

                    this._v_RangeParm = aRangeParmResolution._v_ParmValue;

                    this._v_RangeParm = this.fParmValueReplacement( this._v_RangeParm);
                }



                if( !this._v_EachParm) {
                    var aEachParmResolution = someResolutionsByName[ this.PARM_ITERATOR_EACHPARM];
                    if( aEachParmResolution && aEachParmResolution._v_Success && aEachParmResolution._v_ParmValue) {
                        this._v_EachParm = aEachParmResolution._v_ParmValue;
                    }
                }



                if( !this._v_IndexParm) {
                    var aIndexParmResolution = someResolutionsByName[ this.PARM_ITERATOR_INDEXPARM];
                    if( aIndexParmResolution && aIndexParmResolution._v_Success && aIndexParmResolution._v_ParmValue) {
                        this._v_IndexParm = aIndexParmResolution._v_ParmValue;
                    }
                }



                if( this._v_StartIdx == null) {
                    var aStartIdxResolution = someResolutionsByName[ this.PARM_ITERATOR_STARTIDX];
                    if( aStartIdxResolution && aStartIdxResolution._v_Success) {
                        var aStartIdx = aStartIdxResolution._v_ParmValue;
                        aStartIdx = this.fParmValueReplacement( aStartIdx);
                        if( typeof aStartIdx == "number") {
                            this._v_StartIdx = aStartIdx;
                        }
                    }
                }



                if( this._v_EndIdx == null) {
                    var anEndIdxResolution = someResolutionsByName[ this.PARM_ITERATOR_ENDIDX];
                    if( anEndIdxResolution && anEndIdxResolution._v_Success) {
                        var anEndIdx = anEndIdxResolution._v_ParmValue;
                        anEndIdx = this.fParmValueReplacement( anEndIdx);
                        if( typeof anEndIdx == "number") {
                            this._v_EndIdx = anEndIdx;
                        }
                    }
                }


                if( this._v_DeltaIdx == null) {
                    var aDeltaIdxResolution = someResolutionsByName[ this.PARM_ITERATOR_DELTAIDX];
                    if( aDeltaIdxResolution && aDeltaIdxResolution._v_Success) {
                        var aDeltaIdx = aDeltaIdxResolution._v_ParmValue;
                        aDeltaIdx = this.fParmValueReplacement( aDeltaIdx);
                        if( typeof aDeltaIdx == "number") {
                            this._v_DeltaIdx = aDeltaIdx;
                        }
                    }
                }








                if( !this._v_RangeParmOther) {
                    var aRangeParmOtherResolution = someResolutionsByName[ this.PARM_ITERATOR_RANGEPARMOTHER];
                    if( aRangeParmOtherResolution && aRangeParmOtherResolution._v_Success && aRangeParmOtherResolution._v_ParmValue) {
                        this._v_RangeParmOther = aRangeParmOtherResolution._v_ParmValue;
                    }
                }



                if( !this._v_EachParmOther) {
                    var aEachParmOtherResolution = someResolutionsByName[ this.PARM_ITERATOR_EACHPARMOTHER];
                    if( aEachParmOtherResolution && aEachParmOtherResolution._v_Success && aEachParmOtherResolution._v_ParmValue) {
                        this._v_EachParmOther = aEachParmOtherResolution._v_ParmValue;
                    }
                }



                if( !this._v_IndexParmOther) {
                    var aIndexParmOtherResolution = someResolutionsByName[ this.PARM_ITERATOR_INDEXPARMOTHER];
                    if( aIndexParmOtherResolution && aIndexParmOtherResolution._v_Success && aIndexParmOtherResolution._v_ParmValue) {
                        this._v_IndexParmOther = aIndexParmOtherResolution._v_ParmValue;
                    }
                }



                if( this._v_ShiftOther == null) {
                    var aShiftOtherResolution = someResolutionsByName[ this.PARM_ITERATOR_SHIFTOTHER];
                    if( aShiftOtherResolution && aShiftOtherResolution._v_Success) {
                        var aShiftOther = aShiftOtherResolution._v_ParmValue;
                        if( typeof aShiftOther == "number") {
                            this._v_ShiftOther = aShiftOther;
                        }
                    }
                }








                if( !this._v_RangeParmAnother) {
                    var aRangeParmAnotherResolution = someResolutionsByName[ this.PARM_ITERATOR_RANGEPARMANOTHER];
                    if( aRangeParmAnotherResolution && aRangeParmAnotherResolution._v_Success && aRangeParmAnotherResolution._v_ParmValue) {
                        this._v_RangeParmAnother = aRangeParmAnotherResolution._v_ParmValue;
                    }
                }



                if( !this._v_EachParmAnother) {
                    var aEachParmAnotherResolution = someResolutionsByName[ this.PARM_ITERATOR_EACHPARMANOTHER];
                    if( aEachParmAnotherResolution && aEachParmAnotherResolution._v_Success && aEachParmAnotherResolution._v_ParmValue) {
                        this._v_EachParmAnother = aEachParmAnotherResolution._v_ParmValue;
                    }
                }



                if( !this._v_IndexParmAnother) {
                    var aIndexParmAnotherResolution = someResolutionsByName[ this.PARM_ITERATOR_INDEXPARMANOTHER];
                    if( aIndexParmAnotherResolution && aIndexParmAnotherResolution._v_Success && aIndexParmAnotherResolution._v_ParmValue) {
                        this._v_IndexParmAnother = aIndexParmAnotherResolution._v_ParmValue;
                    }
                }



                if( this._v_ShiftAnother == null) {
                    var aShiftAnotherResolution = someResolutionsByName[ this.PARM_ITERATOR_SHIFTANOTHER];
                    if( aShiftAnotherResolution && aShiftAnotherResolution._v_Success) {
                        var aShiftAnother = aShiftAnotherResolution._v_ParmValue;
                        if( ( typeof aShiftAnother == "number") && ( aShiftAnother >= 0)) {
                            this._v_ShiftAnother = aShiftAnother;
                        }
                    }
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_retrieveIteratorParms){}/* CQT */
            aPrototype.pS_retrieveIteratorParms = pS_retrieveIteratorParms;















            var fRunIterationsCallback = function( theCallback, theMethodName, theCallbackName) {
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
                    aCallbackName = "fRunIterationsCallback";
                }

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fRunIterationsCallback){}/* CQT */
            aPrototype.fRunIterationsCallback = fRunIterationsCallback;









            var fExceptionIterationsHandler = function( theCallback, theMethodName) {

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
            if( fExceptionIterationsHandler){}/* CQT */
            aPrototype.fExceptionIterationsHandler = fExceptionIterationsHandler;












            var pInitFinderToScheduleNextIteration = function() {

                this._v_IterationCounter = 0;

                this._v_IterationsAlreadyScheduled = [];
                this._v_IterationElementsAlreadyScheduled = [];

                this._v_IterationsAlreadyScheduledOther = [];
                this._v_IterationsAlreadyScheduledAnother = [];

            };
            if( pInitFinderToScheduleNextIteration){}/* CQT */
            aPrototype.pInitFinderToScheduleNextIteration = pInitFinderToScheduleNextIteration;








            var pTryToScheduleNextIteration = function( theCallback) {
                var aMethodName = "pTryToScheduleNextIteration";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FINDNEXT, null, null, null);}

                if( !this._v_Configuration) {
                    return;
                }

                var anIterationAndIndexToScheduleNext = this.fFindIterationAndIndexToScheduleNext();
                if( anIterationAndIndexToScheduleNext == null) {

                    if( !this._v_IterationsAlreadyScheduled || !this._v_IterationsAlreadyScheduled.length) {

                        this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_NOITERATIONS, null, null, null);

                        this.pHasBeenSkipped( ModuleFullName, "fFindIterationAndIndexToScheduleNext");
                    }

                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_NOMORE, null, null, null));
                    return;
                }

                this._v_SubsAlreadyScheduled = [];




                var aBoundTestMethod = this.pS_RunSubs.bind( this);



                var aCallback = this.fScheduleNextIterationCallback( theCallback);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FAIL, null, "!this.fScheduleNextIterationCallback( theCallback)", null));
                    return;
                }





                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextIterationHandler( aCallback);

                try {
                    aBoundTestMethod( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }



            };
            if( pTryToScheduleNextIteration){}/* CQT */
            aPrototype.pTryToScheduleNextIteration = pTryToScheduleNextIteration;









            var fFindIterationAndIndexToScheduleNext = function() {

                if( !this._v_Configuration) {
                    return null;
                }


                if( ( typeof this._v_IterationCounter == "undefined") || ( this._v_IterationCounter == null)) {
                    return null;
                }


                if( !( this.MAXITERATIONS == null) && ( this.MAXITERATIONS >= 0)) {
                    var aNumAlreadyScheduled = this._v_IterationsAlreadyScheduled.length;
                    if( aNumAlreadyScheduled > this.MAXITERATIONS) {
                        return null;
                    }
                }



                var allIterations = null;

                if( typeof this._v_RangeParm == "string") {
                    var aRangeParmWithPrefix = theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX + this._v_RangeParm;
                    allIterations = this.fParmValueReplacement( aRangeParmWithPrefix);
                }
                else {
                    allIterations = this._v_RangeParm;
                }


                if( !allIterations) {
                    return null;
                }

                if( typeof allIterations.length == "undefined") {
                    return null;
                }

                var aNumAllIterations = allIterations.length;
                if( !aNumAllIterations) {
                    return null;
                }





                var anIterationIndex = this._v_IterationCounter;



                /* Increment counter to be checked at next iteration attempt, if any */
                if( !( this._v_DeltaIdx == null)) {
                    this._v_IterationCounter += this._v_DeltaIdx;
                }
                else {
                    this._v_IterationCounter += 1;
                }







                if( !( this._v_StartIdx == null)) {
                    anIterationIndex += this._v_StartIdx;
                }
                if( !( this._v_EndIdx == null)) {
                    if( anIterationIndex >= this._v_EndIdx) {
                        return null;
                    }
                }

                if( anIterationIndex < 0) {
                    return null;
                }

                if( anIterationIndex >= aNumAllIterations) {
                    return null;
                }


                var anIterationElement = allIterations[ anIterationIndex];



                if( this._v_UniqueIds) {
                    if( this._v_IterationElementsAlreadyScheduled) {

                        var aNumIterationElementsAlreadyScheduled = this._v_IterationElementsAlreadyScheduled.length;
                        if( aNumIterationElementsAlreadyScheduled) {
                            if( this._v_IterationElementsAlreadyScheduled.contains( anIterationElement)) {
                                return null;
                            }
                        }
                    }
                }






                /* Result next iteration found and main iterator parms set for the iteration; element and index */
                var anIterationAndIndexToScheduleNext = [ anIterationElement, anIterationIndex];

                this._v_IterationsAlreadyScheduled.push( anIterationAndIndexToScheduleNext);
                this._v_IterationElementsAlreadyScheduled.push( anIterationElement);

                if( this._v_EachParm) {
                    this._v_Configuration.pInjectExportedParm( this._v_EachParm, anIterationElement);
                }

                if( this._v_IndexParm) {
                    this._v_Configuration.pInjectExportedParm( this._v_IndexParm, anIterationIndex);
                }













                /* Set Other iterator parms set for the iteration; element and index */

                var allIterationsOther = null;

                if( !( typeof this._v_RangeParmOther == "undefined") && !( this._v_RangeParmOther == null)) {

                    var anIterationElementOther = undefined;
                    var anIterationIndexOther   = undefined;

                    if( typeof this._v_RangeParmOther == "string") {
                        var aRangeParmWithPrefixOther = theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX + this._v_RangeParmOther;
                        allIterationsOther = this.fParmValueReplacement( aRangeParmWithPrefixOther);
                    }
                    else {
                        allIterationsOther = this._v_RangeParmOther;
                    }

                    if( !( typeof allIterationsOther == "undefined") && !( allIterationsOther == null)) {

                        if( typeof allIterationsOther.length == "number") {

                            var aNumAllIterationsOther = allIterationsOther.length;
                            if( aNumAllIterationsOther) {

                                anIterationIndexOther = anIterationIndex;
                                if( !( this._v_ShiftOther == null)) {
                                    anIterationIndexOther += this._v_ShiftOther;
                                }

                                if( anIterationIndexOther >= 0) {


                                    if( anIterationIndexOther < aNumAllIterationsOther) {

                                        anIterationElementOther = allIterationsOther[ anIterationIndexOther];

                                        var anIterationAndIndexToScheduleNextOther = [ anIterationElementOther, anIterationIndexOther];
                                        this._v_IterationsAlreadyScheduledOther.push( anIterationAndIndexToScheduleNextOther);


                                    }
                                }
                            }
                        }
                    }


                    if( this._v_EachParmOther) {
                        this._v_Configuration.pInjectExportedParm( this._v_EachParmOther, anIterationElementOther);
                    }

                    if( this._v_IndexParmOther) {
                        this._v_Configuration.pInjectExportedParm( this._v_IndexParmOther, anIterationIndexOther);
                    }
                }









                /* Set Another iterator parms set for the iteration; element and index */

                var allIterationsAnother = null;

                if( !( typeof this._v_RangeParmAnother == "undefined") && !( this._v_RangeParmAnother == null)) {

                    var anIterationElementAnother = undefined;
                    var anIterationIndexAnother   = undefined;

                    if( typeof this._v_RangeParmAnother == "string") {
                        var aRangeParmWithPrefixAnother = theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX + this._v_RangeParmAnother;
                        allIterationsAnother = this.fParmValueReplacement( aRangeParmWithPrefixAnother);
                    }
                    else {
                        allIterationsAnother = this._v_RangeParmAnother;
                    }

                    if( !( typeof allIterationsAnother == "undefined") && !( allIterationsAnother == null)) {

                        if( typeof allIterationsAnother.length == "number") {

                            var aNumAllIterationsAnother = allIterationsAnother.length;
                            if( aNumAllIterationsAnother) {

                                anIterationIndexAnother = anIterationIndex;
                                if( !( this._v_ShiftAnother == null)) {
                                    anIterationIndexAnother += this._v_ShiftAnother;
                                }

                                if( anIterationIndexAnother >= 0) {


                                    if( anIterationIndexAnother < aNumAllIterationsAnother) {

                                        anIterationElementAnother = allIterationsAnother[ anIterationIndexAnother];

                                        var anIterationAndIndexToScheduleNextAnother = [ anIterationElementAnother, anIterationIndexAnother];
                                        this._v_IterationsAlreadyScheduledAnother.push( anIterationAndIndexToScheduleNextAnother);


                                    }
                                }
                            }
                        }
                    }


                    if( this._v_EachParmAnother) {
                        this._v_Configuration.pInjectExportedParm( this._v_EachParmAnother, anIterationElementAnother);
                    }

                    if( this._v_IndexParmAnother) {
                        this._v_Configuration.pInjectExportedParm( this._v_IndexParmAnother, anIterationIndexAnother);
                    }

                    if( false && DEBUGTITLES.indexOf( this._v_Title) >= 0) {
                        console.log( "anIterationIndexOther = " + anIterationIndexAnother + "\n" + JSON.stringify( anIterationElementAnother, null, 4));
                    }
                }








                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, "fFindIterationAndIndexToScheduleNext", this.EVENTKIND_INFO, anIterationAndIndexToScheduleNext, "FOUND SUB", null);}

                return anIterationAndIndexToScheduleNext;
            };
            if( fFindIterationAndIndexToScheduleNext){}/* CQT */
            aPrototype.fFindIterationAndIndexToScheduleNext = fFindIterationAndIndexToScheduleNext;













            var fScheduleNextIterationCallback = function( theCallback) {
                var aMethodName = "fScheduleNextIterationCallback";

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

                    aThis.pTryToScheduleNextIteration( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fScheduleNextIterationCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextIterationCallback){}/* CQT */
            aPrototype.fScheduleNextIterationCallback = fScheduleNextIterationCallback;








            var fExceptionNextIterationHandler = function( theCallback, theMethodName) {

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
            if( fExceptionNextIterationHandler){}/* CQT */
            aPrototype.fExceptionNextIterationHandler = fExceptionNextIterationHandler;








            var pS_RunIterations = function( theCallback) {
                var aMethodName = "pS_RunIterations";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }


                var aExceptionHandler = this.fExceptionIterationsHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fRunIterationsCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    if( !this._v_Configuration) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ITERATOR_FAIL, null, "!this._v_Configuration", null));
                        return;
                    }


                    this.pInitFinderToScheduleNextIteration();

                    this.pTryToScheduleNextIteration( aCallback, aMethodName);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_RunIterations){}/* CQT */
            aPrototype.pS_RunIterations = pS_RunIterations;









            var pF_Iterator = function( theCallback) {
                var aMethodName = "pF_Iterator";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Iterator){}/* CQT */
            aPrototype.pF_Iterator = pF_Iterator;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Iterator.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Iterator = function( theCallback) {
                var aMethodName = "pSS_Iterator";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_retrieveIteratorParms.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_RunIterations.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Iterator){}/* CQT */
            aPrototype.pSS_Iterator = pSS_Iterator;









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




        var IteratorTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_RangeParm = null;
            this._v_EachParm  = null;
            this._v_IndexParm = null;
            this._v_StartIdx  = null;
            this._v_EndIdx    = null;
            this._v_DeltaIdx  = null;

            this._v_RangeParmOther  = null;
            this._v_EachParmOther   = null;
            this._v_IndexParmOther  = null;
            this._v_ShiftOther  = null;

            this._v_RangeParmAnother  = null;
            this._v_EachParmAnother   = null;
            this._v_IndexParmAnother  = null;
            this._v_ShiftAnother  = null;

            this._v_IterationCounter = null;
            this._v_IterationsAlreadyScheduled = null;
            this._v_IterationElementsAlreadyScheduled = null;

            this._v_IterationsAlreadyScheduledOther = null;
            this._v_IterationsAlreadyScheduledAnother = null;

            this._pInit_Iterator( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        IteratorTest_Constructor.prototype = aIteratorTest_Prototype;





        var IteratorTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aIteratorTest_Prototype;
            this._v_Type = null;

            this._v_RangeParm = null;
            this._v_EachParm  = null;
            this._v_IndexParm = null;
            this._v_StartIdx  = null;
            this._v_EndIdx    = null;
            this._v_DeltaIdx  = null;

            this._v_RangeParmOther  = null;
            this._v_EachParmOther   = null;
            this._v_IndexParmOther  = null;
            this._v_ShiftOther  = null;

            this._v_RangeParmAnother  = null;
            this._v_EachParmAnother   = null;
            this._v_IndexParmAnother  = null;
            this._v_ShiftAnother  = null;

            this._v_IterationCounter = null;
            this._v_IterationsAlreadyScheduled = null;
            this._v_IterationElementsAlreadyScheduled = null;

            this._v_IterationsAlreadyScheduledOther = null;
            this._v_IterationsAlreadyScheduledAnother = null;
        };
        IteratorTest_SuperPrototypeConstructor.prototype = aIteratorTest_Prototype;



        var aModule = {
            "IteratorTest_Prototype": aIteratorTest_Prototype,
            "IteratorTest_Constructor": IteratorTest_Constructor,
            "IteratorTest_SuperPrototypeConstructor": IteratorTest_SuperPrototypeConstructor
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
            var aM_overrider    = require('./overrider');
            var aM_sentinels    = require('./sentinels');

            return aMod_definer(
                aM_runsubs_test,
                aM_overrider,
                aM_sentinels
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/runsubs-test",
            "./overrider",
            "./sentinels"
        ], function (
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels
            );
        });
    }


}());


