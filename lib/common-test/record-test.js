'use strict';

/*
 record-test.js
 Creado 201408161804
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
    var aMod_definer = function( theM_housekeepconstants,
                                 theM_housekeeputils,
                                 theM_conversions) {


        var ModuleName     = "record-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.DUMPINSTTITLE = false;

            theToInit.COLORINSTIDANDTITLE = false;


            theToInit.MAXDATASTRINGLEN = 1024;

            theToInit.MAXJSONSTRINGLEN = 16 * 1024;


            theToInit.EXCEEDEDMAXJSONSTRINGLENMSG = "LENEXCEEDED"

            theToInit.ESCAPEDESCAPE   = "\\u001b";
            theToInit.UNESCAPEDESCAPE = "\u001b";



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





        var aRecordTest_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_Type = "RecordTest";

            aPrototype._v_Prototype_RecordTest = aPrototype;


            aPrototype._v_Timestamp    = null;
            aPrototype._v_RecorderId   = null;
            aPrototype._v_RecordId     = null;
            aPrototype._v_RecordedType = null;
            aPrototype._v_RecordedId   = null;
            aPrototype._v_Instance     = null;
            aPrototype._v_Step         = null;
            aPrototype._v_EventKind    = null;
            aPrototype._v_Data         = null;
            aPrototype._v_ErrorReason  = null;
            aPrototype._v_ErrorDetail  = null;

            aPrototype._v_Released  = null;

            aPrototype._v_BuffersHeldFromCleanUpUntilEventsRelease  = null;






            var _pInit = function( theRecorderId, theRecordId, theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                this._pInit_Record( theRecorderId, theRecordId, theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Record = function( theRecorderId, theRecordId, theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                this._v_Type = aPrototype._v_Type;

                this._v_Timestamp    = Date.now();
                this._v_RecorderId   = theRecorderId;
                this._v_RecordId     = theRecordId;
                this._v_RecordedType = theRecordedType;
                this._v_RecordedId   = theRecordedId;
                this._v_Instance     = theInstance;
                this._v_Step         = theStep;
                this._v_EventKind    = theEventKind;
                this._v_Data         = theData;
                this._v_ErrorReason  = theErrorReason;
                this._v_ErrorDetail  = theErrorDetail;

                this._v_Released  = null;

                this._v_BuffersHeldFromCleanUpUntilEventsRelease  = null;

                if( this._v_RecorderId){}/* CQT */
                if( this._v_RecordedType){}/* CQT */
                if( this._v_RecordedId){}/* CQT */
                if( this._v_BuffersHeldFromCleanUpUntilEventsRelease){}/* CQT */
            };
            if( _pInit_Record){}/* CQT */
            aPrototype._pInit_Record = _pInit_Record;










            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRelease_Record( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Record = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released  === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                this._v_Timestamp    = undefined;
                this._v_RecorderId   = undefined;
                this._v_RecordId     = undefined;
                this._v_RecordedType = undefined;
                this._v_RecordedId   = undefined;
                this._v_Instance     = undefined;
                this._v_Step         = undefined;
                this._v_EventKind    = undefined;
                this._v_Data         = undefined;
                this._v_ErrorReason  = undefined;
                this._v_ErrorDetail  = undefined;

                this._v_BuffersHeldFromCleanUpUntilEventsRelease = undefined;

                this._v_Released  = this.HASBEENRELEASED_SINGLETONSENTINEL;

            };
            if( _pRelease_Record){}/* CQT */
            aPrototype._pRelease_Record = _pRelease_Record;
















            var pCleanUpRecord = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                if( !theWhatToClean) {
                    return;
                }

                if( !theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_EVENTS)) {
                    return;
                }


                if( theWhatToClean.indexOf( theM_housekeepconstants.WHATTOCLEAN_EVENTS) >= 0) {

                    this._pRelease_Record( theReleaseParms, theReleaseDone);

                    return;
                }


                this._v_Instance     = undefined;
                this._v_Data         = undefined;
                this._v_ErrorReason  = undefined;
                this._v_ErrorDetail  = undefined;

            };
            if( pCleanUpRecord){}/* CQT */
            aPrototype.pCleanUpRecord = pCleanUpRecord;











            var pHoldBuffersFromCleanUpUntilEventsRelease = function( theBuffers) {

                this._v_BuffersHeldFromCleanUpUntilEventsRelease = theBuffers;
            };
            if( pHoldBuffersFromCleanUpUntilEventsRelease){}/* CQT */
            aPrototype.pHoldBuffersFromCleanUpUntilEventsRelease = pHoldBuffersFromCleanUpUntilEventsRelease;












            var fCopyWithoutException = function() {

                var aCopy = new RecordTest_Constructor(
                    this._v_RecorderId,
                    this._v_RecordId,
                    this._v_RecordedType,
                    this._v_RecordedId,
                    this._v_Instance,
                    this._v_Step,
                    this._v_EventKind,
                    this._v_Data,
                    this._v_ErrorReason,
                    this._v_ErrorDetail
                );

                aCopy._v_Timestamp = this._v_Timestamp;

                if( aCopy._v_Data) {
                    if( aCopy._v_Data.name) {

                        if(aCopy._v_Data.name == "Error") {
                            aCopy._v_Data = null;
                        }

                        if( aCopy._v_Data.name == "ForcedException") {
                            aCopy._v_Data = null;
                        }
                    }
                }

                if( aCopy._v_ErrorReason) {
                    if( aCopy._v_ErrorReason.name) {

                        if(aCopy._v_ErrorReason.name == "Error") {
                            aCopy._v_ErrorReason = null;
                        }

                        if( aCopy._v_ErrorReason.name == "ForcedException") {
                            aCopy._v_ErrorReason = null;
                        }
                    }
                }

                if( aCopy._v_ErrorDetail) {
                    if( aCopy._v_ErrorDetail.name) {

                        if(aCopy._v_ErrorDetail.name == "Error") {
                            aCopy._v_ErrorDetail = null;
                        }

                        if( aCopy._v_ErrorDetail.name == "ForcedException") {
                            aCopy._v_ErrorDetail = null;
                        }
                    }
                }

                return aCopy;
            };
            if( fCopyWithoutException){}/* CQT */
            aPrototype.fCopyWithoutException = fCopyWithoutException;











            var fLogJSONreplacer = function( theKey, theValue) {

                if( !theKey) {
                    return theValue;
                }

                if( !this._v_EventKind) {
                    return theValue;
                }

                if( !this._v_Instance) {
                    return theValue;
                }

                var aReplacement = theValue;

                switch( theKey) {
                    case "kind":
                        aReplacement = this._v_Instance.fEventColoredString( this._v_EventKind, theValue);
                        break;

                    case "step":
                        aReplacement = this._v_Instance.fEventColoredString( this._v_EventKind, theValue);
                        break;

                    case "inst":
                        var anIdAndTitle = "";
                        var anId = theValue.id;
                        if( anId) {
                            anIdAndTitle += anId;
                        }
                        if( this.DUMPINSTTITLE) {
                            var aTitle = theValue.title;
                            if( aTitle) {
                                anIdAndTitle += ":";
                                anIdAndTitle += aTitle;
                            }
                        }
                        if( anIdAndTitle) {

                            aReplacement = anIdAndTitle;

                            if( this.COLORINSTIDANDTITLE) {
                                aReplacement = this._v_Instance.fEventColoredString( this._v_EventKind, anIdAndTitle);
                            }
                        }
                        break;

                    default:
                }

                return aReplacement;
            };
            if( fLogJSONreplacer){}/* CQT */
            aPrototype.fLogJSONreplacer = fLogJSONreplacer;






            var fLogString = function( theColoredEvent) {

                var aLog = this.fAsLogObject();
                if( aLog == null) {
                    return "";
                }

                var aLogString = "";
                try {
                    if( theColoredEvent && this._v_Instance && this._v_Instance.fEventColoredString) {
                        aLogString = JSON.stringify( aLog, this.fLogJSONreplacer.bind( this));

                        aLogString = aLogString.replace( /\\u001b/g, "\u001b")

                    }
                    else {
                        aLogString = JSON.stringify( aLog);
                    }
                }
                catch( anException) {}

                return aLogString;
            };
            if( fLogString){}/* CQT */
            aPrototype.fLogString = fLogString;











            var toString = function() {
                return this.fLogString();
            };
            if( toString){}/* CQT */
            aPrototype.toString = toString;






            var fAsLogObject = function() {

                var aLog = {};
                var aHasLog = false;


                if( this._v_Timestamp) {
                    aHasLog = true;
                    aLog.time = new Date( this._v_Timestamp).toISOString();
                }

                if( this._v_RecordId) {
                    aHasLog = true;
                    aLog.rec = this._v_RecordId;
                }

                var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                if( !( aEventKind == null)) {
                    aHasLog = true;
                    aLog.kind = aEventKind;
                }

                var aStep = this.fConvertValueToJSON( this._v_Step);
                if( !( aStep == null)) {
                    aHasLog = true;
                    aLog.step = aStep;
                }


                var aInstance = this.fConvertValueToJSON( this._v_Instance);
                if( !( aInstance == null)) {
                    aHasLog = true;
                    aLog.inst = aInstance;
                }


                var aData = this.fConvertValueToJSON( this._v_Data);
                if( !( aData == null)) {
                    aHasLog = true;
                    aLog.data = aData;
                }

                var aErrorReason = this.fConvertReasonToJSON( this._v_ErrorReason);
                if( !( aErrorReason == null)) {
                    aHasLog = true;
                    aLog.reason = aErrorReason;
                }

                var aDetail = this.fConvertValueToJSON( this._v_ErrorDetail);
                if( !( aDetail == null)) {
                    aHasLog = true;
                    aLog.detail = aDetail;
                }

                if( !aHasLog) {
                    return null;
                }

                return aLog;
            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;









            var fConvertReasonToJSON = function( theValue) {

                if( theValue == null) {
                    return null;
                }

                if( typeof theValue == "number") {
                    return theValue;
                }

                if( typeof theValue == "string") {
                    return theValue;
                }

                if( ( theValue === this)) {
                    return "this";
                }

                if( theValue.fAsReasonChain) {
                    return theValue.fAsReasonChain();
                }

                if( theValue.fAsLogObject) {
                    return theValue.fAsLogObject();
                }

                if( theValue.fIdentifyingWithTitleJSON) {
                    return theValue.fIdentifyingWithTitleJSON();
                }

                if( theValue.fIdentifyingJSON) {
                    return theValue.fIdentifyingJSON();
                }

                if( theValue.fIdentifyingString) {
                    return theValue.fIdentifyingString();
                }

                if( theValue.fLogString) {
                    return theValue.fLogString();
                }

                var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                if( aStr){}/* CQT */
                return aStr;
            };
            if( fConvertReasonToJSON){}/* CQT */
            aPrototype.fConvertReasonToJSON = fConvertReasonToJSON;








            var fAsReasonChain = function( theAlready) {


                if( theAlready && ( theAlready.indexOf( this) >= 0)) {
                    return null;
                }

                var anAlready = theAlready;
                if( !anAlready) {
                    anAlready = [ ];
                }

                anAlready.push( this);


                var aLog = {};
                var aHasLog = false;


                if( this._v_Id) {
                    aHasLog = true;
                    aLog.tre = this._v_Id;
                }

                var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                if( !( aEventKind == null)) {
                    aHasLog = true;
                    aLog.kind = aEventKind;
                }

                if( this._v_ErrorReason) {
                    var aErrorReason = null;
                    if( this._v_ErrorReason.fAsReasonChain) {
                        aErrorReason = this._v_ErrorReason.fAsReasonChain( anAlready);
                    }
                    else {
                        aErrorReason = this.fConvertValueToJSON( this._v_ErrorReason);
                    }
                    if( !( aErrorReason == null)) {
                        aHasLog = true;
                        aLog.reason = aErrorReason;
                    }
                }


                var aDetail = this.fConvertValueToJSON( this._v_ErrorDetail);
                if( !( aDetail == null)) {
                    aHasLog = true;
                    aLog.detail = aDetail;
                }

                if( !aHasLog) {
                    return null;
                }

                return aLog;
            };
            if( fAsReasonChain){}/* CQT */
            aPrototype.fAsReasonChain = fAsReasonChain;





            var fConvertValueToJSON = function( theValue, theIncludeMembers) {

                return theM_conversions.fConvertValueToJSON( theValue, theIncludeMembers);
            };
            if( fConvertValueToJSON){}/* CQT */
            aPrototype.fConvertValueToJSON = fConvertValueToJSON;







            var fConvertValueToJSON_ORIG = function( theValue, theIncludeMembers) {

                if( typeof theValue == "undefined") {
                    return null;
                }

                if( theValue == null) {
                    return null;
                }

                var aValue = theValue;

                if( typeof aValue == "number") {
                    return aValue;
                }

                if( typeof aValue == "string") {
                    var aValueLength = aValue.length;
                    if( aValueLength > this.MAXJSONSTRINGLEN) {
                        aValue = this.EXCEEDEDMAXJSONSTRINGLENMSG + " len=" + aValueLength + " " + aValue.substring( 0 , this.MAXJSONSTRINGLEN);
                    }
                    return aValue;
                }

                if( ( typeof aValue == "object") && aValue.constructor && ( aValue.constructor.name == "Buffer")) {
                    var aValueLength = aValue.length;
                    aValue = "Buffer" + " len=" + aValueLength;
                    return aValue;
                }



                    if( ( aValue === this)) {
                    return "this";
                }

                if( aValue._v_Type && ( aValue._v_Type == this._v_Type)) {
                    return aValue.fIdentifyingJSON();
                }

                if( aValue.fAsLogObject) {
                    return aValue.fAsLogObject();
                }

                if( aValue.fIdentifyingWithTitleJSON) {
                    return aValue.fIdentifyingWithTitleJSON();
                }

                if( aValue.fIdentifyingJSON) {
                    return aValue.fIdentifyingJSON();
                }

                if( aValue.fIdentifyingString) {
                    return aValue.fIdentifyingString();
                }

                if( aValue.fLogString) {
                    return aValue.fLogString();
                }

                if( theIncludeMembers) {
                    if( aValue.fToResultJSON) {
                        return aValue.fToResultJSON();
                    }

                    try {
                        var aJSONstr = JSON.stringify( aValue);
                        if( aJSONstr){}/* CQT */
                        return aJSONstr;
                    }
                    catch( anException) {}
                }

                var aStr = aValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                if( aStr){}/* CQT */
                return aStr;
            };
            if( fConvertValueToJSON_ORIG){}/* CQT */
            aPrototype.fConvertValueToJSON_ORIG = fConvertValueToJSON_ORIG;








            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "recref": this._v_RecordId
                };
                if( aIdentifiyingJSON){}/* CQT */

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;






            var fRecordHasEvent_recursive = function( theExpectedEvent, theAlready) {

                if( !theExpectedEvent) {
                    return false;
                }

                if( theAlready  && ( theAlready.indexOf( this) >= 0)) {
                    return false;
                }

                if( this._v_EventKind && ( this._v_EventKind == theExpectedEvent)) {
                    return true;
                }

                if( theAlready) {
                    theAlready.push( this);
                }


                if( this._v_ErrorReason) {
                    if( this._v_ErrorReason.fRecordHasEvent_recursive) {
                        return this._v_ErrorReason.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                    }

                    if( this._v_ErrorReason._v_Record) {
                        return this._v_ErrorReason._v_Record.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                    }
                }

                return false;
            };
            if( fRecordHasEvent_recursive){}/* CQT */
            aPrototype.fRecordHasEvent_recursive = fRecordHasEvent_recursive;






            return aPrototype;
        })();




        var RecordTest_Constructor = function( theRecorderId, theRecordId, theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

            this._v_Type = null;

            this._v_RecorderId   = null;
            this._v_RecordId     = null;
            this._v_RecordedType = null;
            this._v_Instance     = null;
            this._v_Step         = null;
            this._v_EventKind    = null;
            this._v_Data         = null;
            this._v_ErrorReason  = null;
            this._v_ErrorDetail  = null;

            this._v_Released  = null;

            this._v_BuffersHeldFromCleanUpUntilEventsRelease  = null;

            this._pInit_Record( theRecorderId, theRecordId, theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
        };
        RecordTest_Constructor.prototype = aRecordTest_Prototype;





        var RecordTest_SuperPrototypeConstructor = function() {

            this._v_Type = null;

            this._v_RecorderId   = null;
            this._v_RecordId     = null;
            this._v_RecordedType = null;
            this._v_Instance     = null;
            this._v_Step         = null;
            this._v_EventKind    = null;
            this._v_Data         = null;
            this._v_ErrorReason  = null;
            this._v_ErrorDetail  = null;

            this._v_Released  = null;

            this._v_BuffersHeldFromCleanUpUntilEventsRelease  = null;
        };
        RecordTest_SuperPrototypeConstructor.prototype = aRecordTest_Prototype;









        var aModule = {
            "ModuleConstants": ModuleConstants,
            "RecordTest_Prototype": aRecordTest_Prototype,
            "RecordTest_Constructor": RecordTest_Constructor,
            "RecordTest_SuperPrototypeConstructor": RecordTest_SuperPrototypeConstructor
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


            var aM_housekeepconstants     = require('./housekeep/housekeep-constants');
            var aM_housekeeputils         = require('./housekeep/housekeep-utils');
            var aM_conversions            = require('./conversions');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeeputils,
                aM_conversions
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./housekeep/housekeep-constants",
            "./housekeep/housekeep-utils",
            "./conversions"
        ], function (
            theM_housekeepconstants,
            theM_housekeeputils,
            theM_conversions
        ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_conversions
            );
        });
    }


}());





