'use strict';

/*
 recorder-test.js
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
    var aMod_definer = function( theM_funsims,
                                 theM_identified_test,
                                 theM_identifier_test,
                                 theM_record_test,
                                 theM_overrider,
                                 theM_housekeepconstants,
                                 theM_housekeeputils,
                                 theM_releasingconstants,
                                 theM_cleanupconstants) {


        var ModuleName     = "recorder-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGRECORDS  = true;

            theToInit.LOGCLEANUPRECORDSUMMARY = false;

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






        var aRecorderTest_Prototype = (function() {



            var aPrototype = new theM_identified_test.IdentifiedTest_SuperPrototypeConstructor();
            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = theM_identified_test.IdentifiedTest_Prototype;



            aPrototype._v_Type = "RecorderTest";

            aPrototype._v_Prototype_RecorderTest = aPrototype;



            aPrototype._v_RecordsIdentifier = null;
            aPrototype._v_RecordsIdentifierIsOwn = null;

            aPrototype._v_Records = null;
            aPrototype._v_AcumRecords = null;

            aPrototype._v_LastReleasedIndex   = null;
            aPrototype._v_AcumRecordsReleased = null;

            aPrototype._v_LastCleanUpIndex    = null;
            aPrototype._v_AcumRecordsCleanUp  = null;

            aPrototype._v_EventsCollections  = null;





            var _pInit = function( theTitle, theConfiguration) {

                this._pInit_Recorder( theTitle, theConfiguration);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Recorder = function( theTitle, theConfiguration, theIdentifier) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_IdentifiedTest.apply( this, [ theTitle, theConfiguration, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_RecordsIdentifier = null;
                this._v_RecordsIdentifierIsOwn = false;

                this._v_Records = [];

                this._v_AcumRecords = 0;

                this._v_LastReleasedIndex   = -1;
                this._v_AcumRecordsReleased = 0;

                this._v_LastCleanUpIndex    = -1;
                this._v_AcumRecordsCleanUp  = 0;

                this._v_EventsCollections  = { };


                if( this.RECORDINITS) {
                    this.fCreateAndRegisterRecord( this._v_Type, this._v_Id, this, "_pInit_Recorder", "INIT", null, null, null);
                }
            };
            if( _pInit_Recorder){}/* CQT */
            aPrototype._pInit_Recorder = _pInit_Recorder;










            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Recorder( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Recorder = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                if( this._v_RecordsIdentifier) {
                    if( this._v_RecordsIdentifierIsOwn) {
                        if( typeof this._v_RecordsIdentifier._pRelease == "function") {
                            this._v_RecordsIdentifier._pRelease( theReleaseParms, theReleaseDone);
                        }
                    }
                }

                this._v_RecordsIdentifier = undefined;
                this._v_RecordsIdentifierIsOwn = undefined;

                this._v_Records = undefined;

                this._v_AcumRecords = undefined;

                this._v_LastReleasedIndex   = undefined;
                this._v_AcumRecordsReleased = undefined;

                this._v_LastCleanUpIndex    = undefined;
                this._v_AcumRecordsCleanUp  = undefined;

                this._v_EventsCollections   = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Identified.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Recorder){}/* CQT */
            aPrototype._pRelease_Recorder = _pRelease_Recorder;















            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                if( this._v_RecordsIdentifier) {
                    if( this._v_RecordsIdentifierIsOwn) {
                        if( theReleaseChildren.indexOf( this._v_RecordsIdentifier) < 0) {
                            theReleaseChildren.push( this._v_RecordsIdentifier);
                            if( typeof this._v_RecordsIdentifier._pReleaseChildrenInto == "function") {
                                this._v_RecordsIdentifier._pReleaseChildrenInto( theReleaseChildren);
                            }
                        }
                    }
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

            };
            if( _pReleaseChildrenInto){}/* CQT */
            aPrototype._pReleaseChildrenInto = _pReleaseChildrenInto;
















            var _pReleaseRecords = function( theReleaseParms,
                                             theReleaseDone,
                                             theAfterRecorderSnapshot,
                                             theBeforeRecorderSnapshot) {

                this._v_EventsCollections   = { };

                if( !this._v_Records) {
                    return;
                }

                var aNumAllRecords = this._v_Records.length;
                if( !aNumAllRecords) {
                    return;
                }


                var aBeforeSnapshotRecords = this.fAfterBeforeSnapshotRecords( false /* theToCleanUp */, theAfterRecorderSnapshot, theBeforeRecorderSnapshot);
                if( !aBeforeSnapshotRecords) {
                    return null;
                }

                var aFirsRecordIndex = aBeforeSnapshotRecords[ "firstIndex"];
                var aLastRecordIndex = aBeforeSnapshotRecords[ "lastIndex"];
                var someRecords      = aBeforeSnapshotRecords[ "records"];

                if( aFirsRecordIndex < 0) {
                    return;
                }

                if( aLastRecordIndex >= aNumAllRecords) {
                    return;
                }

                if( !someRecords) {
                    return;
                }

                var aNumRecords = someRecords.length;
                if( !aNumRecords) {
                    return;
                }

                if( aLastRecordIndex >= aNumRecords) {
                    return;
                }

                var someSummariesByEventKind = this.fSummarizeEvents( someRecords);

                if( theReleaseDone) {
                    theReleaseDone[ theM_releasingconstants.RELEASEDONE_EVENTSSUMMARY_FIELDNAME] = someSummariesByEventKind;
                }

                for( var aRecordIdx=aFirsRecordIndex; aRecordIdx <= aLastRecordIndex; aRecordIdx++) {

                    var aRecord = this._v_Records[ aRecordIdx];
                    if( aRecord) {

                        if( aRecord._v_Released && ( aRecord._v_Released == this.HASBEENRELEASED_SINGLETONSENTINEL)) {
                            continue;
                        }

                        if( typeof aRecord._pRelease == "function") {
                            aRecord._pRelease( theReleaseParms, theReleaseDone);
                        }
                    }
                }

            };
            if( _pReleaseRecords){}/* CQT */
            aPrototype._pReleaseRecords = _pReleaseRecords;




















            var pCleanUpTestRecords = function( theWhatToClean,
                                                theReleaseParms,
                                                theReleaseDone,
                                                theAfterRecorderSnapshot,
                                                theBeforeRecorderSnapshot) {

                if( !theWhatToClean) {
                    return;
                }

                if( !theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_EVENTS)) {
                    return;
                }

                this._v_EventsCollections   = { };

                if( !this._v_Records) {
                    return
                }

                var aNumAllRecords = this._v_Records.length;
                if( !aNumAllRecords) {
                    return;
                }


                var aBeforeSnapshotRecords = this.fAfterBeforeSnapshotRecords( true /* theToCleanUp */, theAfterRecorderSnapshot, theBeforeRecorderSnapshot);
                if( !aBeforeSnapshotRecords) {
                    return null;
                }

                var aFirsRecordIndex = aBeforeSnapshotRecords[ "firstIndex"];
                var aLastRecordIndex = aBeforeSnapshotRecords[ "lastIndex"];
                var someRecords      = aBeforeSnapshotRecords[ "records"];

                if( aFirsRecordIndex < 0) {
                    return;
                }

                if( aLastRecordIndex >= aNumAllRecords) {
                    return;
                }

                if( !someRecords) {
                    return;
                }

                var aNumRecords = someRecords.length;
                if( !aNumRecords) {
                    return;
                }

                if( aLastRecordIndex >= aNumRecords) {
                    return;
                }

                var someSummariesByEventKind = this.fSummarizeEvents( someRecords);

                if( someSummariesByEventKind) {
                    if( theReleaseDone) {
                        theReleaseDone[ theM_cleanupconstants.CLEANEDUPONE_EVENTSSUMMARY_FIELDNAME] = someSummariesByEventKind;

                        if(      this.LOGCLEANUPRECORDSUMMARY
                            || ( theReleaseParms && theReleaseParms[ theM_cleanupconstants.CLEANUPPARMS_LOGCLEANUPRECORDS_FIELDNAME])) {


                            var aLog = { "WHATTOCLEANUP": theWhatToClean, "CLEANEDUP": someSummariesByEventKind};

                            var aLogStr = JSON.stringify( aLog);
                            if( aLogStr){}/* CQT */
                            console.log( "," + aLogStr);
                        }
                    }
                }




                if( theWhatToClean.indexOf( theM_housekeepconstants.WHATTOCLEAN_EVENTS) >= 0) {

                    this._v_Records = [ ];

                    return;
                }



                if( theWhatToClean.indexOf( theM_housekeepconstants.WHATTOCLEAN_EVENTSPAYLOADS) >= 0) {

                    var aNumRecords = this._v_Records.length;
                    if( aNumRecords) {
                        for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {

                            var aRecord = this._v_Records[ aRecordIdx];
                            if( aRecord) {

                                if( aRecord.pCleanUpRecord && ( typeof aRecord.pCleanUpRecord == "function")) {
                                    aRecord.pCleanUpRecord( theWhatToClean, theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }

            };
            if( pCleanUpTestRecords){}/* CQT */
            aPrototype.pCleanUpTestRecords = pCleanUpTestRecords;























            var fNewVoidRecorderSnapshot = function( ) {

                var aRecorderSnapshot = {
                    "recordsLen":                         0,

                    "accumRecords":                       0,

                    "lastReleasedIndex":                  -1,
                    "accumRecordsReleased":               0,

                    "lastCleanUpIndex":                   -1,
                    "accumRecordsCleanUp":                0,

                    "recordsIdentifierCurrentIdCounter":  -1,
                    "recordsIdentifierCurrentId":         null,

                    "eventsSummary":                      null
                };
                if( aRecorderSnapshot){}/* CQT */

                return aRecorderSnapshot;
            };
            if( fNewVoidRecorderSnapshot){}/* CQT */
            aPrototype.fNewVoidRecorderSnapshot = fNewVoidRecorderSnapshot;









            var fGrabRecorderSnapshot = function( theGrabEventsSummary, theToCleanUp) {

                var aRecorderSnapshot = this.fNewVoidRecorderSnapshot();

                if( this._v_Records) {
                    aRecorderSnapshot[ "recordsLen"]      = this._v_Records.length;
                }

                aRecorderSnapshot[ "accumRecords"]         = this._v_AcumRecords;

                aRecorderSnapshot[ "lastReleasedIndex"]    = this._v_LastReleasedIndex;
                aRecorderSnapshot[ "accumRecordsReleased"] = this._v_AcumRecordsReleased;

                aRecorderSnapshot[ "lastCleanUpIndex"]     = this._v_LastCleanUpIndex;
                aRecorderSnapshot[ "accumRecordsCleanUp"]  = this._v_AcumRecordsCleanUp;

                if( this._v_RecordsIdentifier) {
                    aRecorderSnapshot[ "recordsIdentifierCurrentIdCounter"] = this._v_RecordsIdentifier.fCurrentIdCounter();
                    aRecorderSnapshot[ "recordsIdentifierCurrentId"]        = this._v_RecordsIdentifier.fCurrentId();
                }

                if( theGrabEventsSummary) {
                    var anEventsSummary = this.fGrabEventsSummary( theToCleanUp);
                    if( anEventsSummary) {
                        aRecorderSnapshot[ "eventsSummary"] = anEventsSummary;
                    }
                }

                return aRecorderSnapshot;
            };
            if( fGrabRecorderSnapshot){}/* CQT */
            aPrototype.fGrabRecorderSnapshot = fGrabRecorderSnapshot;










            var fGrabEventsSummary = function( theToCleanUp) {

                /*
                "eventKinds ( recordedType ) ( step)"
                 */

                var someRecordsToGrab = this.fCurrentRecords( theToCleanUp);
                if( !someRecordsToGrab) {
                    return null;
                }

                var aNumRecordsToGrab = someRecordsToGrab.length;
                if( !aNumRecordsToGrab) {
                    return null;
                }

                var someSummariesByEventKind = this.fSummarizeEvents( someRecordsToGrab);
                if( someSummariesByEventKind){}/* CQT */

                return someSummariesByEventKind;

            };
            if( fGrabEventsSummary){}/* CQT */
            aPrototype.fGrabEventsSummary = fGrabEventsSummary;









            var fAsLogObject_Summaries = function() {
                return this;
            }




            var fSummarizeEvents = function( theRecords) {

                /*
                 "eventKinds ( recordedType ) ( step)"
                 */

                if( !theRecords) {
                    return null;
                }

                var aNumRecordsToGrab = theRecords.length;
                if( !aNumRecordsToGrab) {
                    return null;
                }


                var aTotalEvents = 0;

                var someSummariesByEventKind = { };
                someSummariesByEventKind.fAsLogObject = fAsLogObject_Summaries.bind( someSummariesByEventKind);


                for( var aRecordIdx=0; aRecordIdx < aNumRecordsToGrab; aRecordIdx++) {

                    var aRecord = theRecords[ aRecordIdx];
                    if( aRecord) {

                        if( aRecord._v_Released && ( aRecord._v_Released == this.HASBEENRELEASED_SINGLETONSENTINEL)) {
                            continue;
                        }

                        if( !aRecord._v_EventKind) {
                            continue;
                        }


                        var aHasRecordedType = false;
                        var aHasStep         = false;


                        var aSummaryForEventKind = someSummariesByEventKind[ aRecord._v_EventKind];
                        if( !aSummaryForEventKind) {

                            aSummaryForEventKind = {
                                "eventKind":            aRecord._v_EventKind,
                                "ownEvents":            0,
                                "totalEvents":          0,
                                "eventsByRecordedType": null
                            };

                            someSummariesByEventKind[ aRecord._v_EventKind] = aSummaryForEventKind;
                        }
                        aSummaryForEventKind[ "totalEvents"]   += 1;

                        aTotalEvents += 1;



                        if( aRecord._v_RecordedType) {

                            var aHasRecordedType = true;

                            var someEventsByRecordedType = aSummaryForEventKind[ "eventsByRecordedType"];
                            if( !someEventsByRecordedType) {

                                someEventsByRecordedType = { };
                                aSummaryForEventKind[ "eventsByRecordedType"] = someEventsByRecordedType;
                            }

                            var aSummaryForRecordedType = someEventsByRecordedType[ aRecord._v_RecordedType];
                            if( !aSummaryForRecordedType) {

                                aSummaryForRecordedType = {
                                    "recordedType":  aRecord._v_RecordedType,
                                    "ownEvents":     0,
                                    "totalEvents":   0,
                                    "eventsByStep":  null
                                };

                                someEventsByRecordedType[ aRecord._v_RecordedType] = aSummaryForRecordedType;
                            }
                            aSummaryForRecordedType[ "totalEvents"] += 1;



                            if( aRecord._v_Step) {

                                var aHasStep         = true;

                                var someEventsByStep = aSummaryForRecordedType[ "eventsByStep"];
                                if( !someEventsByStep) {

                                    someEventsByStep = { };
                                    aSummaryForRecordedType[ "eventsByStep"] = someEventsByStep;
                                }

                                var aNumEventsForStep = someEventsByStep[ aRecord._v_Step];
                                if( !aNumEventsForStep) {
                                    aNumEventsForStep = 0;
                                }

                                aNumEventsForStep += 1;

                                someEventsByStep[ aRecord._v_Step] = aNumEventsForStep;
                            }


                            if( !aHasStep) {
                                aSummaryForRecordedType[ "ownEvents"] += 1;
                            }
                        }


                        if( !aHasRecordedType) {
                            aSummaryForEventKind[ "ownEvents"] += 1;
                        }
                    }
                }


                someSummariesByEventKind[ theM_releasingconstants.RELEASEDONE_TOTALEVENTS_MAGIC_EVENTTYPE] = aTotalEvents;

                return someSummariesByEventKind;

            };
            if( fSummarizeEvents){}/* CQT */
            aPrototype.fSummarizeEvents = fSummarizeEvents;












            var fCurrentRecords = function( theToCleanUp) {

                var aFirstRecordIndexToGrab = 0;

                var someRecords = this._v_Records;
                if( !someRecords) {
                    return null;
                }

                var aNumRecords = someRecords.length;
                if( !aNumRecords) {
                    return null;
                }

                if( theToCleanUp) {
                    if( this._v_LastCleanUpIndex >= 0) {
                        aFirstRecordIndexToGrab = this._v_LastCleanUpIndex + 1;
                    }
                }
                else {
                    if( this._v_LastReleasedIndex >= 0) {
                        aFirstRecordIndexToGrab = this._v_LastReleasedIndex + 1;
                    }
                }

                if( this._v_LastReleasedIndex >= 0) {
                    if( aFirstRecordIndexToGrab < ( this._v_LastReleasedIndex + 1)) {
                        aFirstRecordIndexToGrab = this._v_LastReleasedIndex + 1;
                    }
                }

                if( aFirstRecordIndexToGrab >= aNumRecords) {
                    return null;
                }

                var someGrabRecords = this._v_Records;

                if( aFirstRecordIndexToGrab > 0) {
                    someGrabRecords = this._v_Records.slice( aFirstRecordIndex, aLastRecordIndex + 1);
                }
                if( someGrabRecords){}/* CQT */

                return someGrabRecords;

            };
            if( fCurrentRecords){}/* CQT */
            aPrototype.fCurrentRecords = fCurrentRecords;












            var fAfterBeforeSnapshotRecords = function( theToCleanUp, theAfterRecorderSnapshot, theBeforeRecorderSnapshot) {

                var aFirstRecordIndex = 0;

                var someRecords = this._v_Records;
                if( !someRecords) {
                    return null;
                }

                var aNumRecords = someRecords.length;
                if( !aNumRecords) {
                    return null;
                }

                if( theToCleanUp) {
                    if( this._v_LastCleanUpIndex >= 0) {
                        aFirstRecordIndex = this._v_LastCleanUpIndex + 1;
                    }
                }
                else {
                    if( this._v_LastReleasedIndex >= 0) {
                        aFirstRecordIndex = this._v_LastReleasedIndex + 1;
                    }
                }

                if( this._v_LastReleasedIndex >= 0) {
                    if( aFirstRecordIndex < ( this._v_LastReleasedIndex + 1)) {
                        aFirstRecordIndex = this._v_LastReleasedIndex + 1;
                    }
                }

                if( aFirstRecordIndex >= aNumRecords) {
                    return null;
                }

                
                var aLastRecordIndex = aNumRecords - 1;



                if( theAfterRecorderSnapshot) {
                    var anAfterRecordId = theAfterRecorderSnapshot[ "recordsIdentifierCurrentId"];
                    if( anAfterRecordId) {

                        var anAfterRecordIndex = aFirstRecordIndex;

                        while( anAfterRecordIndex <= aLastRecordIndex) {

                            var aRecordAfter = someRecords[ anAfterRecordIndex];
                            if( !aRecordAfter) {
                                continue;
                            }

                            if( !aRecordAfter._v_RecordId) {
                                continue;
                            }

                            if( aRecordAfter._v_RecordId <= anAfterRecordId) {
                                break;
                            }

                            anAfterRecordIndex += 1;
                        }

                        if( anAfterRecordIndex <= aLastRecordIndex) {
                            aFirstRecordIndex = anAfterRecordIndex;
                        }
                    }
                }




                if( theBeforeRecorderSnapshot) {

                    var aBeforeRecordId = theBeforeRecorderSnapshot[ "recordsIdentifierCurrentId"];
                    if( aBeforeRecordId) {

                        var aBeforeRecordIndex = aLastRecordIndex;

                        while( aBeforeRecordIndex >= aFirstRecordIndex) {

                            var aRecord = someRecords[ aBeforeRecordIndex];
                            if( !aRecord) {
                                continue;
                            }

                            if( !aRecord._v_RecordId) {
                                continue;
                            }

                            if( aRecord._v_RecordId <= aBeforeRecordId) {
                                break;
                            }

                            aBeforeRecordIndex -= 1;
                        }

                        if( aBeforeRecordIndex >= aFirstRecordIndex) {
                            aLastRecordIndex = aBeforeRecordIndex;
                        }
                    }
                }

                if( aFirstRecordIndex > aLastRecordIndex) {
                    return null;
                }


                var someGrabRecords = this._v_Records;

                if( ( aFirstRecordIndex > 0) || ( aLastRecordIndex < ( aNumRecords - 1))) {
                    someGrabRecords = this._v_Records.slice( aFirstRecordIndex, aLastRecordIndex + 1);
                }

                var aBeforeSnapshotRecords = {
                    "firstIndex":   aFirstRecordIndex,
                    "lastIndex":    aLastRecordIndex,
                    "records":      someGrabRecords
                };
                if( aBeforeSnapshotRecords){}/* CQT */

                return aBeforeSnapshotRecords;

            };
            if( fAfterBeforeSnapshotRecords){}/* CQT */
            aPrototype.fAfterBeforeSnapshotRecords = fAfterBeforeSnapshotRecords;









            var fCreateAndRegisterRecord = function( theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecordsIdentifier = this.fSuppliedOrOwnRecordsIdentifier();
                if( !aRecordsIdentifier) {
                    return null;
                }

                var aRecordId = aRecordsIdentifier.fReserveId();

                var aRecord = new theM_record_test.RecordTest_Constructor( this._v_Id, aRecordId, theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
                this._v_Records.push( aRecord);

                if( !this._v_AcumRecords) {
                    this._v_AcumRecords = 0;
                }
                this._v_AcumRecords += 1;


                if( theEventKind) {
                    var someEventsCollectionsForKind = this._v_EventsCollections[ theEventKind];
                    if( someEventsCollectionsForKind) {
                        var aNumEventsCollectionsForKind = someEventsCollectionsForKind.length;
                        for( var anEventsCollectionsForKindIdx=0; anEventsCollectionsForKindIdx < aNumEventsCollectionsForKind; anEventsCollectionsForKindIdx++) {
                            var anEventsCollectionsForKind = someEventsCollectionsForKind[ anEventsCollectionsForKindIdx];
                            if( anEventsCollectionsForKind) {
                                anEventsCollectionsForKind.push( aRecord);
                            }
                        }
                    }
                }

                return aRecord;
            };
            if( fCreateAndRegisterRecord){}/* CQT */
            aPrototype.fCreateAndRegisterRecord = fCreateAndRegisterRecord;






            var fSuppliedOrOwnRecordsIdentifier = function() {

                if( this._v_RecordsIdentifier) {
                    return this._v_RecordsIdentifier;
                }

                var anIdentifierId = this._v_Identifier.fReserveId();
                this._v_RecordsIdentifier = new theM_identifier_test.IdentifierTest_Constructor( this._v_Configuration, anIdentifierId);

                this._v_RecordsIdentifierIsOwn = true;

                return this._v_RecordsIdentifier;
            };
            if( fSuppliedOrOwnRecordsIdentifier){}/* CQT */
            aPrototype.fSuppliedOrOwnRecordsIdentifier = fSuppliedOrOwnRecordsIdentifier;






            var fEventsToResultJSON = function( ) {

                var someCommonObjects = null;
                var aJSON = this.fToResultJSON( someCommonObjects);

                var someRecordLogObjects = [];
                aJSON.records = someRecordLogObjects;

                if( this._v_Records) {
                    var aNumRecords = this._v_Records.length;
                    for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {
                        var aRecord = this._v_Records[ aRecordIdx];
                        var aRecordLogObject = aRecord.fAsLogObject();
                        if( aRecordLogObject) {
                            someRecordLogObjects.push( aRecordLogObject);
                        }
                    }
                }

                return aJSON;
            };
            if( fEventsToResultJSON){}/* CQT */
            aPrototype.fEventsToResultJSON = fEventsToResultJSON;










            var pCollectEventRecordsInto = function( theRecords, theEventKinds) {

                if( !theRecords) {
                    return;
                }

                if( !theEventKinds) {
                    return;
                }

                var aNumEventKinds = theEventKinds.length;
                if( !aNumEventKinds) {
                    return;
                }

                for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                    var anEventKind = theEventKinds[ anEventKindIdx];
                    if( anEventKind) {

                        var someEventsCollectionsForKind = this._v_EventsCollections[ anEventKind];
                        if( !someEventsCollectionsForKind) {
                            someEventsCollectionsForKind = [ ];
                            this._v_EventsCollections[ anEventKind] = someEventsCollectionsForKind;
                        }

                        if( someEventsCollectionsForKind.indexOf( theRecords) < 0) {
                            someEventsCollectionsForKind.push( theRecords);
                        }
                    }
                }
            };
            if( pCollectEventRecordsInto){}/* CQT */
            aPrototype.pCollectEventRecordsInto = pCollectEventRecordsInto;





            var pDoNotCollectEventRecordsInto = function( theRecords) {

                if( !theRecords) {
                    return;
                }

                var someCollectedEventKinds = Object.keys( this._v_EventsCollections);
                var aNumCollectedEventKinds = someCollectedEventKinds.length;

                for( var aCollectedEventKindIdx=0; aCollectedEventKindIdx < aNumCollectedEventKinds; aCollectedEventKindIdx++) {
                    var aCollectedEventKind = someCollectedEventKinds[ aCollectedEventKindIdx];
                    if( this._v_EventsCollections.hasOwnProperty( aCollectedEventKind)) {
                        var anEventsCollection = this._v_EventsCollections[ aCollectedEventKind];
                        var anEventsCollectionIndex = anEventsCollection.indexOf( theRecords);
                        if( anEventsCollectionIndex >= 0) {
                            anEventsCollection.splice(anEventsCollectionIndex, 1);
                            if( !anEventsCollection.length) {
                                delete this._v_EventsCollections[ aCollectedEventKind];
                            }
                        }
                    }
                }
            };
            if( pDoNotCollectEventRecordsInto){}/* CQT */
            aPrototype.pDoNotCollectEventRecordsInto = pDoNotCollectEventRecordsInto;




            return aPrototype;

        })();




        var RecorderTest_Constructor = function( theTitle, theConfiguration, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_identified_test.IdentifiedTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_RecordsIdentifier = null;
            this._v_RecordsIdentifierIsOwn = null;

            this._v_Records = null;

            this._v_AcumRecords = null;

            this._v_LastReleasedIndex   = null;
            this._v_AcumRecordsReleased = null;

            this._v_LastCleanUpIndex    = null;
            this._v_AcumRecordsCleanUp  = null;

            this._v_EventsCollections   = null;

            this._pInit_Recorder( theTitle, theConfiguration, theIdentifier);
        };
        RecorderTest_Constructor.prototype = aRecorderTest_Prototype;





        var RecorderTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_identified_test.IdentifiedTest_Prototype;

            this._v_Prototype = aRecorderTest_Prototype;

            this._v_Type = null;

            this._v_RecordsIdentifier = null;
            this._v_RecordsIdentifierIsOwn = null;

            this._v_Records = null;

            this._v_AcumRecords = null;

            this._v_LastReleasedIndex   = null;
            this._v_AcumRecordsReleased = null;

            this._v_LastCleanUpIndex    = null;
            this._v_AcumRecordsCleanUp  = null;

            this._v_EventsCollections   = null;

        };
        RecorderTest_SuperPrototypeConstructor.prototype = aRecorderTest_Prototype;











        var aModule = {
            "ModuleConstants": ModuleConstants,
            "RecorderTest_Prototype": aRecorderTest_Prototype,
            "RecorderTest_Constructor": RecorderTest_Constructor,
            "RecorderTest_SuperPrototypeConstructor": RecorderTest_SuperPrototypeConstructor
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

            var aM_funsims            = require('./funsims');
            var aM_identified_test    = require('./identified-test');
            var aM_identifier_test    = require('./identifier-test');
            var aM_record_test        = require('./record-test');
            var aM_overrider          = require('./overrider');
            var aM_housekeepconstants = require('./housekeep/housekeep-constants');
            var aM_housekeeputils     = require('./housekeep/housekeep-utils');
            var aM_releasingconstants = require('./releasing/releasing-constants');
            var aM_cleanupconstants   = require('./cleanup/cleanup-constants');

            return aMod_definer(
                aM_funsims,
                aM_identified_test,
                aM_identifier_test,
                aM_record_test,
                aM_overrider,
                aM_housekeepconstants,
                aM_housekeeputils,
                aM_releasingconstants,
                aM_cleanupconstants
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./funsims",
            "./identified-test",
            "./identifier-test",
            "./record-test",
            "./overrider",
            "./housekeep/housekeep-constants",
            "./housekeep/housekeep-utils",
            "./releasing/releasing-constants",
            "./cleanup/cleanup-constants"
        ], function (
                theM_funsims,
                theM_identified_test,
                theM_identifier_test,
                theM_record_test,
                theM_overrider,
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_releasingconstants,
                theM_cleanupconstants
            ) {
            return aMod_definer(
                theM_funsims,
                theM_identified_test,
                theM_identifier_test,
                theM_record_test,
                theM_overrider,
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_releasingconstants,
                theM_cleanupconstants
            );
        });
    }


}());





