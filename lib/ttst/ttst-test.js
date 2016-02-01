'use strict';

/*
 ttst-test.js
 Created 201408161733
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

    var aMod_definer =function( theM_ttstrecord,
                                theM_exceptiondetails,
                                theM_ttstcallbacker,
                                theM_nextticker,
                                theM_overrider) {

        var ModuleName     = "ttst-test";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGRECORDS = true;

            theToInit.ANNOTATETTSTCALLBACKS         = true;
            theToInit.RECORDTTSTCALLBACKINVOCATIONS = true;
            theToInit.RECORDTTSTCALLBACKARGS        = true;


            theToInit.EVTSSETNOTFORCONSOLE = "EVTKINDS_NOTFORCONSOLE_DEFAULT";

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


            theToInit.DIFFLEN = 80;

            theToInit.JSONDIFFATTOP = "/";

            theToInit.STATE_CREATED   = "CREATED";
            theToInit.STATE_STARTED   = "STARTED";
            theToInit.STATE_TERMNATED = "TERMINATED";
            theToInit.STATEALL = [
                theToInit.STATE_CREATED,
                theToInit.STATE_STARTED,
                theToInit.STATE_TERMNATED
            ];

            theToInit.EVTKIND_PASSED     = "PASSED";
            theToInit.EVTKIND_NOTPASSED  = "NOTPASSED";

            theToInit.EVTKIND_INIT     = "INIT";
            theToInit.EVTKIND_BEGIN    = "BEGIN";
            theToInit.EVTKIND_FAIL     = "FAIL";
            theToInit.EVTKIND_OK       = "OK";
            theToInit.EVTKIND_CATCHED_EXCEPTION = "CATCHED_EXCEPTION";
            theToInit.EVTKIND_EXIT     = "EXIT";
            theToInit.EVTKIND_INFO     = "INFO";
            theToInit.EVTKIND_EXPECTEDERRORHAPPENED            = "ERRORHAPPENED";
            theToInit.EVTKIND_EXPECTEDERRORNOTHAPPENED         = "ERRORNOTHAPPENED";
            theToInit.EVTKIND_EXPECTEDFAILEDCONFIGHAPPENED     = "FAILEDCONFIGHAPPENED";
            theToInit.EVTKIND_EXPECTEDFAILEDCONFIGNOTHAPPENED  = "FAILEDCONFIGNOTHAPPENED";

            theToInit.EVTKIND_CALLBACKCHAINED  = "CALLBACKCHAINED";
            theToInit.EVTKIND_CALLBACKINVOKED  = "CALLBACKINVOKED";
            theToInit.EVTKIND_CALLBACKRECEIVED = "CALLBACKRECEIVED";

            theToInit.EVTKINDS = [
                theToInit.EVTKIND_PASSED,
                theToInit.EVTKIND_NOTPASSED,
                theToInit.EVTKIND_INIT,
                theToInit.EVTKIND_BEGIN,
                theToInit.EVTKIND_FAIL,
                theToInit.EVTKIND_OK,
                theToInit.EVTKIND_CATCHED_EXCEPTION,
                theToInit.EVTKIND_EXIT,
                theToInit.EVTKIND_INFO,
                theToInit.EVTKIND_EXPECTEDERRORHAPPENED,
                theToInit.EVTKIND_EXPECTEDERRORNOTHAPPENED,
                theToInit.EVTKIND_EXPECTEDFAILEDCONFIGHAPPENED,
                theToInit.EVTKIND_EXPECTEDFAILEDCONFIGNOTHAPPENED,
                theToInit.EVTKIND_CALLBACKCHAINED,
                theToInit.EVTKIND_CALLBACKINVOKED,
                theToInit.EVTKIND_CALLBACKRECEIVED
            ];


            theToInit.EVTKINDS_NOTFORCONSOLE_RESTRICTIVE = [
                theToInit.EVTKIND_INIT,
                theToInit.EVTKIND_BEGIN,
                theToInit.EVTKIND_FAIL,
                theToInit.EVTKIND_OK,
                theToInit.EVTKIND_CATCHED_EXCEPTION,
                theToInit.EVTKIND_EXIT,
                theToInit.EVTKIND_INFO,
                theToInit.EVTKIND_EXPECTEDERRORHAPPENED,
                theToInit.EVTKIND_EXPECTEDERRORNOTHAPPENED,
                theToInit.EVTKIND_EXPECTEDFAILEDCONFIGHAPPENED,
                theToInit.EVTKIND_EXPECTEDFAILEDCONFIGNOTHAPPENED,
                theToInit.EVTKIND_CALLBACKCHAINED,
                theToInit.EVTKIND_CALLBACKINVOKED,
                theToInit.EVTKIND_CALLBACKRECEIVED
            ];


            theToInit.EVTKINDS_NOTFORCONSOLE_LIGHT = [
                theToInit.EVTKIND_INIT,
                theToInit.EVTKIND_BEGIN,
                theToInit.EVTKIND_FAIL,
                theToInit.EVTKIND_OK,
                theToInit.EVTKIND_CATCHED_EXCEPTION,
                theToInit.EVTKIND_EXIT,
                theToInit.EVTKIND_EXPECTEDERRORHAPPENED,
                theToInit.EVTKIND_EXPECTEDERRORNOTHAPPENED,
                theToInit.EVTKIND_EXPECTEDFAILEDCONFIGHAPPENED,
                theToInit.EVTKIND_EXPECTEDFAILEDCONFIGNOTHAPPENED,
                theToInit.EVTKIND_CALLBACKCHAINED,
                theToInit.EVTKIND_CALLBACKINVOKED,
                theToInit.EVTKIND_CALLBACKRECEIVED
            ];


            theToInit.EVTKINDS_NOTFORCONSOLE_NONE = [ ];
            theToInit.EVTKINDS_NOTFORCONSOLE_ALL = theToInit.EVTKINDS;
            theToInit.EVTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVTKINDS_NOTFORCONSOLE_RESTRICTIVE;


            if( theToInit.EVTSSETNOTFORCONSOLE) {

                if( typeof theToInit.EVTSSETNOTFORCONSOLE == "string") {
                    var anEventsSetNotForConsole = theToInit[ theToInit.EVTSSETNOTFORCONSOLE];
                    if( anEventsSetNotForConsole) {
                        theToInit.EVTKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                    }
                    else {
                        theToInit.EVTKINDS_NOTFORCONSOLE = [];
                    }
                }
                else {
                    theToInit.EVTKINDS_NOTFORCONSOLE = theToInit.EVTSSETNOTFORCONSOLE;
                }
            }
            else {
                theToInit.EVTKINDS_NOTFORCONSOLE = theToInit.EVTKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }
            if( !theToInit.EVTKINDS_NOTFORCONSOLE) {
                theToInit.EVTKINDS_NOTFORCONSOLE = theToInit.EVTKINDS_NOTFORCONSOLE_DEFAULT.slice();
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









        var pgInitModuleGlobalsOn = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.gIdCounter = 0;

            theToInit.gAllRecords = [ ];
        };

        var ModuleGlobals = { };
        pgInitModuleGlobalsOn( ModuleGlobals);








        var fgReserveId = function() {

            ModuleGlobals.gIdCounter += 1;

            var aId = ModuleGlobals.gIdCounter;
            return aId.toString();
        };







        var fgRecord = function( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

            var aRecord = new theM_ttstrecord.TtstRecord_Constructor( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
            ModuleGlobals.gAllRecords.push( aRecord);

            return aRecord;
        };











        var aTtstTest_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_Type = "TtstTest";

            aPrototype._v_Id    = null;
            aPrototype._v_Title = null;

            aPrototype._v_ExpectSucceed = null;


            aPrototype._v_State  = null;
            aPrototype._v_Succeeded = null;

            aPrototype._v_CreationTimestamp = null;
            aPrototype._v_BeginTimestamp    = null;
            aPrototype._v_LastTimestamp     = null;

            aPrototype._v_Records = null;

            aPrototype._v_TtstSeriesToRun      = null;
            aPrototype._v_TtstSeriesAlreadyRun = null;






            var _pInit = function( theTitle) {

                this._pInit_TtstTest( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_TtstTest = function( theTitle, theExpectSucceed) {

                /* Delegate on super prototype initialization */
                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Id = this.fReserveId();

                this._v_Title = theTitle;

                this._v_ExpectSucceed = true;
                if( !( typeof theExpectSucceed == "undefined") && !( theExpectSucceed == null)) {
                    this._v_ExpectSucceed = theExpectSucceed;
                }

                this._v_State  = this.STATE_CREATED;
                this._v_Succeeded = false;

                this._v_CreationTimestamp = Date.now();
                this._v_BeginTimestamp    = null;
                this._v_LastTimestamp     = null;

                this._v_Records = [ ];

                this._v_TtstSeriesToRun      = null;
                this._v_TtstSeriesAlreadyRun = [ ];

                this.fRecord( "_pInit_TtstTest", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_TtstTest){}/* CQT */
            aPrototype._pInit_TtstTest = _pInit_TtstTest;









            var fReserveId = function() {

                return  fgReserveId();
            };
            if( fReserveId){}/* CQT */
            aPrototype.fReserveId = fReserveId;







            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "id": this._v_Id
                };
                if( aIdentifiyingJSON){}/* CQT */

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;








            var fIdentifyingWithTitleJSON = function() {

                var aIdentifiyingJSON = this.fIdentifyingJSON();

                if( !( this._v_Title == null)) {
                    aIdentifiyingJSON.title = this._v_Title;
                }

                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingWithTitleJSON){}/* CQT */
            aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






            var fIdentifyingString = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingString){}/* CQT */
            aPrototype.fIdentifyingString = fIdentifyingString;









            var fIdentifyingWithTitleString = function() {

                var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingWithTitleString){}/* CQT */
            aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;








            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = this.fIdentifyingWithTitleJSON();

                aResultJSON.state  = this._v_State;
                aResultJSON.succeeded = this._v_Succeeded;

                if( this._v_CreationTimestamp) {
                    aResultJSON.created = new Date( this._v_CreationTimestamp).toISOString();
                }

                if( this._v_BeginTimestamp) {
                    aResultJSON.begin = new Date( this._v_BeginTimestamp).toISOString()
                }

                if( this._v_LastTimestamp) {
                    aResultJSON.last = new Date( this._v_LastTimestamp).toISOString()
                }

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;












            var fRecord = function( theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecord = fgRecord( this, theStep, theEventKind, theData, theErrorReason, theErrorDetail);

                if( aRecord) {
                    this._v_Records.push( aRecord);

                    if( this.LOGRECORDS) {
                        this.pLogRecord( aRecord);
                    }
                }

                return aRecord;
            };
            if( fRecord){}/* CQT */
            aPrototype.fRecord = fRecord;






            var fRecordCallback = function( theEventKind, theCallback, theError, theResult) {
                var aMethodName = theCallback.__MethodName;
                if( !aMethodName) {
                    aMethodName = null;
                }
                return this.fRecord( aMethodName, theEventKind, theCallback, theError, theResult);
            };
            if( fRecordCallback){}/* CQT */
            aPrototype.fRecordCallback = fRecordCallback;






            var pLogRecord = function( theRecord) {
                if( this.LOGRECORDS) {
                    if( theRecord) {
                        var anEventKind = theRecord._v_EventKind;
                        if( this.EVTKINDS_NOTFORCONSOLE.indexOf( anEventKind) < 0) {
                            var aLogString = theRecord.fLogString();
                            if( aLogString) {
                                console.log( "," + aLogString);
                            }
                        }
                    }
                }
            };
            if( pLogRecord){}/* CQT */
            aPrototype.pLogRecord = pLogRecord;













            var pNowStarted = function() {

                this._v_State = this.STATE_STARTED;

                this._v_BeginTimestamp = Date.now();
            };
            if( pNowStarted){}/* CQT */
            aPrototype.pNowStarted = pNowStarted;






            var pNowSucceeded = function() {

                this.pNowSucceeded_base();
            };
            if( pNowSucceeded){}/* CQT */
            aPrototype.pNowSucceeded = pNowSucceeded;





            var pNowSucceeded_base = function() {

                this._v_State = this.STATE_TERMNATED;
                this._v_Succeeded = true;

                this._v_LastTimestamp = Date.now();
            };
            if( pNowSucceeded_base){}/* CQT */
            aPrototype.pNowSucceeded_base = pNowSucceeded_base;



            var pNowFailed= function() {

                this._v_State = this.STATE_TERMNATED;
                this._v_Succeeded = false;

                this._v_LastTimestamp = Date.now();
            };
            if( pNowFailed){}/* CQT */
            aPrototype.pNowFailed = pNowFailed;








            var fExceptionDetail = function( theException) {
                return theM_exceptiondetails.fExceptionDetail( theException);
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;










            var pS_NowSucceeded = function( theCallback) {
                this.pNowSucceeded();
                theCallback();
            };
            if( pS_NowSucceeded){}/* CQT */
            aPrototype.pS_NowSucceeded = pS_NowSucceeded;















            var fStringsFirstDiff = function( theOneString, theOtherString) {

                if( ( theOneString == null) && ( theOtherString == null)) {
                    return null;
                }

                if( ( theOneString == null) || ( theOtherString == null)) {

                    if( theOneString == null) {
                        return [ null, theOtherString.substr( 0, 2 * this.DIFFLEN)];
                    }

                    return [ theOneString.substr( 0, 2 * this.DIFFLEN), null];
                }

                if( !theOneString || !theOtherString) {

                    if( !theOneString) {
                        return [ "", theOtherString.substr( 0, 2 * this.DIFFLEN)];
                    }

                    return [ theOneString.substr( 0, 2 * this.DIFFLEN), ""];
                }



                var aMaxCommonIndex = -1;

                var aOneLen   = theOneString.length;
                var aOtherLen = theOtherString.length;
                var aMinLen = Math.min( aOneLen, aOtherLen);

                for( var anIdx=0; anIdx < aMinLen; anIdx++) {
                    var aOneChar = theOneString[ anIdx];
                    var aOtherChar = theOtherString[ anIdx];
                    if( !( aOneChar == aOtherChar)) {
                        break;
                    }
                    aMaxCommonIndex = anIdx;
                }

                if( aMaxCommonIndex < 0) {
                    return [ theOneString.substr( 0, 2 * this.DIFFLEN), theOtherString.substr( 0, 2 * this.DIFFLEN)];
                }

                var aOneDiff   = this.fStringAround( theOneString, aMaxCommonIndex,  this.DIFFLEN);
                var aOtherDiff = this.fStringAround( theOtherString, aMaxCommonIndex,  this.DIFFLEN);

                return [ aOneDiff, aOtherDiff];
            };
            if( fStringsFirstDiff){}/* CQT */
            aPrototype.fStringsFirstDiff = fStringsFirstDiff;






            var fStringAround = function( theOneString, theCenterIndex, theLength) {

                if( !theOneString) {
                    return null;
                }

                if( theCenterIndex < 0) {
                    return theOneString.substr( 0, 2 * theLength);
                }

                var aFirstIndex = Math.max( 0, theCenterIndex - Math.floor( theLength));
                var aStringAround = theOneString.substr( aFirstIndex, 2 * theLength);
                if( aStringAround){}/* CQT */

                return aStringAround;
            };
            if( fStringAround){}/* CQT */
            aPrototype.fStringAround = fStringAround;









            var fJSONsFirstDiff = function( theOneJSON, theOtherJSON) {

                if( ( typeof theOneJSON == "undefined") && ( typeof theOtherJSON == "undefined") ) {
                    return null;
                }

                if( ( typeof theOneJSON == "undefined") || ( typeof theOtherJSON == "undefined") ) {
                    return this.JSONDIFFATTOP;
                }


                if( ( theOneJSON == null) && ( theOtherJSON == null)) {
                    return null;
                }

                if( ( theOneJSON == null) || ( theOtherJSON == null)) {
                    return this.JSONDIFFATTOP;
                }


                if( !( ( typeof theOneJSON) == ( typeof theOtherJSON))) {
                    return this.JSONDIFFATTOP;
                }





                if( typeof theOneJSON == "string" ) {
                    if( !( theOneJSON == theOtherJSON)) {
                        return this.JSONDIFFATTOP;
                    }
                    return null;
                }


                if( typeof theOneJSON == "number" ) {
                    if( !( theOneJSON == theOtherJSON)) {
                        return this.JSONDIFFATTOP;
                    }
                    return null;
                }


                if( typeof theOneJSON == "boolean" ) {
                    if( !( theOneJSON == theOtherJSON)) {
                        return this.JSONDIFFATTOP;
                    }
                    return null;
                }



                if( !( typeof theOneJSON == "object" )) {
                    return this.JSONDIFFATTOP;
                }





                var someOneKeys = Object.keys( theOneJSON);
                var someOtherKeys = Object.keys( theOtherJSON);


                var allKeys = someOneKeys.slice();
                var aNumOtherKeys = someOtherKeys.length;

                for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                    var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                    if( allKeys.indexOf( aOtherKey) < 0) {
                        allKeys.push( aOtherKey);
                    }
                }
                allKeys.sort();


                var aNumKeys = allKeys.length;

                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = allKeys[ aKeyIdx];

                    if( !theOneJSON.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }

                    if( !theOtherJSON.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }


                    var aOneSub   = theOneJSON[ aKey];
                    var aOtherSub = theOtherJSON[ aKey];

                    var aSubsDiff = this.fJSONsFirstDiff( aOneSub, aOtherSub);
                    if( aSubsDiff) {

                        if( aSubsDiff == this.JSONDIFFATTOP) {
                            return [ aKey];
                        }

                        aSubsDiff.push( aKey);
                        aSubsDiff.reverse();

                        return aSubsDiff;
                    }
                }





                var aOneLen   = theOneJSON.length;
                var aOtherLen = theOtherJSON.length;

                if( ( typeof aOneLen == "undefined") && ( typeof aOneLen == "undefined")) {
                    return null;
                }

                if( ( typeof aOneLen == "undefined") || ( typeof aOneLen == "undefined")) {
                    return this.JSONDIFFATTOP;
                }

                if( !( aOneLen == aOtherLen)) {
                    return this.JSONDIFFATTOP;
                }

                for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                    var aOneListSub   = theOneJSON[ aSubIdx];
                    var aOtherListSub = theOtherJSON[ aSubIdx];

                    var aSubsListDiff = this.fJSONsFirstDiff( aOneListSub, aOtherListSub);
                    if( aSubsListDiff) {

                        if( aSubsListDiff == this.JSONDIFFATTOP) {
                            return [ aKey];
                        }

                        aSubsListDiff.push( aKey);
                        aSubsListDiff.reverse();

                        return aSubsListDiff;
                    }
                }


                return null;
            };
            if( fJSONsFirstDiff){}/* CQT */
            aPrototype.fJSONsFirstDiff = fJSONsFirstDiff;
























            var pS_Do = function( theCallback, theMethodName, theToDoFunction) {
                var aMethodName = theMethodName + "-pS_Do";
                this.fRecord( aMethodName, this.EVTKIND_BEGIN, null, null, null);


                try {
                    theToDoFunction( theCallback);
                }
                catch( anException) {
                    this.pNowFailed();
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( aMethodName, this.EVTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                    theCallback( this.fRecord( aMethodName, this.EVTKIND_FAIL, null, aRecord, null));
                }
            };
            if( pS_Do){}/* CQT */
            aPrototype.pS_Do = pS_Do;








            var fOverallTtstCallback = function( theCallback, theMethodName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        if( this._v_ExpectSucceed) {
                            this.pNowFailed();
                            var anErrorRecord = aThis.fRecord( theMethodName, aThis.EVTKIND_FAIL, null, theError, null);
                            theCallback( aThis.fRecord( theMethodName, aThis.EVTKIND_NOTPASSED, null, anErrorRecord, null));
                        }
                        else {
                            this.pNowSucceeded();
                            var anExpectedErrorHappenedRecord = aThis.fRecord( theMethodName, aThis.EVTKIND_EXPECTEDERRORHAPPENED, null, theError, null);
                            var anOKRecord = aThis.fRecord( theMethodName, aThis.EVTKIND_OK, null, anExpectedErrorHappenedRecord, null);
                            theCallback( null, aThis.fRecord( theMethodName, aThis.EVTKIND_PASSED, null, anOKRecord, null));
                        }
                    }
                    else {
                        if( this._v_ExpectSucceed) {
                            this.pNowSucceeded();
                            var otherOKRecord = aThis.fRecord( theMethodName, aThis.EVTKIND_OK, null, null, null);
                            theCallback( null, aThis.fRecord( theMethodName, aThis.EVTKIND_PASSED, null, otherOKRecord, null));
                        }
                        else {
                            this.pNowFailed();
                            var anExpectedErrorNotHappenedRecord = aThis.fRecord( theMethodName, aThis.EVTKIND_EXPECTEDERRORNOTHAPPENED, null, null, null);
                            var aFailRecord = aThis.fRecord( theMethodName, aThis.EVTKIND_FAIL, null, anExpectedErrorNotHappenedRecord, null);
                            theCallback( aThis.fRecord( theMethodName, aThis.EVTKIND_NOTPASSED, null, aFailRecord, null));
                        }
                    }

                }).bind( this);

                var aWrappedCallback = this.fChainNewTtstCallbackForCallback( aCallback, "fOverallTtstCallback", theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fOverallTtstCallback){}/* CQT */
            aPrototype.fOverallTtstCallback = fOverallTtstCallback;
















            var fOverallTtstExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, aThis.EVTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    if( this._v_ExpectSucceed) {
                        theCallback( aThis.fRecord( theMethodName, aThis.EVTKIND_FAIL, null, aCatchedRecord, null));
                    }
                    else {
                        var aRecord = aThis.fRecord( theMethodName, aThis.EVTKIND_EXPECTEDERRORHAPPENED, null, null, null);
                        theCallback( null, aThis.fRecord( theMethodName, aThis.EVTKIND_OK, null, aRecord, null));
                    }

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallTtstExceptionHandler){}/* CQT */
            aPrototype.fOverallTtstExceptionHandler = fOverallTtstExceptionHandler;









            var pF_AsyncNextTick = function( theFunction, theExceptionHandler) {

                this.pF_AsyncNextTick_ExceptionWrappedTwice(  theFunction, theExceptionHandler);
            };
            if( pF_AsyncNextTick){}/* CQT */
            aPrototype.pF_AsyncNextTick = pF_AsyncNextTick;






            var pF_AsyncNextTick_ExceptionWrappedTwice = function( theFunction, theExceptionHandler) {

                try {
                    theM_nextticker.pNextTick( function() {
                        try {
                            theFunction();
                        }
                        catch( anException) {
                            if( theExceptionHandler) {
                                theExceptionHandler( anException);
                            }
                        }
                    });
                }
                catch( anException) {
                    if( theExceptionHandler) {
                        theExceptionHandler( anException);
                    }
                }

            };
            if( pF_AsyncNextTick_ExceptionWrappedTwice){}/* CQT */
            aPrototype.pF_AsyncNextTick_ExceptionWrappedTwice = pF_AsyncNextTick_ExceptionWrappedTwice;








            var fOwnTestMethodToRun = function() {
                return null;
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;




            var pF_TtstMethodName = function() {
                return "pF_Ttst";
            };
            if( pF_TtstMethodName){}/* CQT */
            aPrototype.pF_TtstMethodName = pF_TtstMethodName;







            var pF_Ttst = function( theCallback) {
                var aMethodName = this.pF_TtstMethodName();
                if( !aMethodName) {
                    aMethodName = "pF_Ttst";
                }


                var aExceptionHandler = this.fOverallTtstExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fOverallTtstCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, this.EVTKIND_FAIL, null, "!aCallback", null));
                        return;
                    }


                    var anOwnMethodToRun = this.fOwnTtstMethodToRun();
                    if( !anOwnMethodToRun) {
                        theCallback( this.fRecord( aMethodName, this.EVTKIND_FAIL, null, "!anOwnMethodToRun", null));
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
            if( pF_Ttst){}/* CQT */
            aPrototype.pF_Ttst = pF_Ttst;



















            var pF_LightAsyncSeries = function( theCallback, theMethodName, theTestFunctions) {
                var aMethodName = theMethodName + "-pF_LightAsyncSeries";
                this.fRecord( aMethodName, this.EVTKIND_BEGIN, null, null, null);

                try {

                    var aThis = this;
                    theM_nextticker.pNextTick( function() {

                        try {


                            var aSeriesRunnedCallback = (function() {
                                var aCbkFunction = function( theError){
                                    try {
                                        if( theError) {
                                            aThis.pNowFailed();
                                            theCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, theError, null));
                                            return;
                                        }

                                        theCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, null, null, null));

                                    }
                                    catch( anException) {
                                        aThis.pNowFailed();
                                        var aExceptionDetail = aThis.fExceptionDetail( anException);
                                        var aRecord = aThis.fRecord( aMethodName, aThis.EVTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                                        theCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, aRecord, null));
                                    }
                                };
                                if( aCbkFunction){}/* CQT */
                                return aCbkFunction;
                            })();


                            var aWrappedCallback = aThis.fChainNewTtstCallbackForCallback( aSeriesRunnedCallback, "pF_LightAsyncSeries", theCallback, aMethodName);

                            aThis.pRunTtstSeries(
                                theTestFunctions,
                                aWrappedCallback
                            );
                        }
                        catch( anException) {
                            aThis.pNowFailed();
                            var aExceptionDetail = aThis.fExceptionDetail( anException);
                            var aRecord = aThis.fRecord( aMethodName, aThis.EVTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                            theCallback( aThis.fRecord(  aMethodName, aThis.EVTKIND_FAIL, null, aRecord, null));
                        }
                    });
                }
                catch( anException) {
                    this.pNowFailed();
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( aMethodName, this.EVTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                    theCallback( this.fRecord( aMethodName, this.EVTKIND_FAIL, null, aRecord, null));
                }
            };
            if( pF_LightAsyncSeries){}/* CQT */
            aPrototype.pF_LightAsyncSeries = pF_LightAsyncSeries;











            var pInitFinderToRunTtstSeries = function( theSeriesToRun) {

                this._v_TtstSeriesToRun      = theSeriesToRun;
                this._v_TtstSeriesAlreadyRun = [ ];
            };
            if( pInitFinderToRunTtstSeries){}/* CQT */
            aPrototype.pInitFinderToRunTtstSeries = pInitFinderToRunTtstSeries;












            var pTryToRunNextInTtstSeries = function( theCallback) {
                var aMethodName = "pTryToRunNextInTtstSeries";
                if( aMethodName){}/* CQT */

                var aSeriesToRunNext = this.fFindTtstSeriesToRunNext();
                if( !aSeriesToRunNext) {
                    theCallback();
                    return;
                }

                this._v_TtstSeriesAlreadyRun.push( aSeriesToRunNext);


                this.pRunNextInTtstSeries( theCallback, aSeriesToRunNext);

            };
            if( pTryToRunNextInTtstSeries){}/* CQT */
            aPrototype.pTryToRunNextInTtstSeries = pTryToRunNextInTtstSeries;











            var pRunNextInTtstSeries = function( theCallback, theToRun) {

                var aMethodName = "pRunNextInTtstSeries";

                if( !theToRun) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theToRun", null));
                    return;
                }


                if( !( typeof theToRun == "function")) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!( typeof theToRun == 'function)", null));
                }



                var aCallback = this.fRunNextInTtstSeriesCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fRunNextInTtstSeriesCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextInTtstSeriesHandler( aCallback);

                try {
                    theToRun( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pRunNextInTtstSeries){}/* CQT */
            aPrototype.pRunNextInTtstSeries = pRunNextInTtstSeries;







            var fFindTtstSeriesToRunNext = function() {

                if( !this._v_TtstSeriesToRun) {
                    return null;
                }

                var aPendingSeriesToRun = null;

                var aNumSeriesToRuns = this._v_TtstSeriesToRun.length;
                for( var aSeriesToRunIdx=0; aSeriesToRunIdx < aNumSeriesToRuns; aSeriesToRunIdx++) {

                    var aSeriesToRun = this._v_TtstSeriesToRun[ aSeriesToRunIdx];

                    if( this._v_TtstSeriesAlreadyRun.indexOf( aSeriesToRun) < 0) {
                        aPendingSeriesToRun = aSeriesToRun;
                        break;
                    }
                }
                if( !aPendingSeriesToRun) {
                    return null;
                }

                return aPendingSeriesToRun;
            };
            if( fFindTtstSeriesToRunNext){}/* CQT */
            aPrototype.fFindTtstSeriesToRunNext = fFindTtstSeriesToRunNext;







            var fChainNewTtstCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATETTSTCALLBACKS) {
                    return theNewCallback;
                }

                return theM_ttstcallbacker.fChainNewTtstCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewTtstCallbackForCallback){}/* CQT */
            aPrototype.fChainNewTtstCallbackForCallback = fChainNewTtstCallbackForCallback;





            var pInvokingTtstCallback = function( theCallback, theError, theResult) {
                if( !this.ANNOTATETTSTCALLBACKS) {
                    return;
                }

                if( !this.RECORDTTSTCALLBACKINVOCATIONS) {
                    return;
                }

                theM_testcallbacker.pInvokingTtstCallback( theCallback, this, theMethodName, theError, theResult);
            };
            if( pInvokingTtstCallback){}/* CQT */
            aPrototype.pInvokingTtstCallback = pInvokingTtstCallback;





            var pReceivedTtstCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATETTSTCALLBACKS) {
                    return;
                }

                if( !this.RECORDTTSTCALLBACKARGS) {
                    return;
                }

                theM_testcallbacker.pReceivedTtstCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedTtstCallbackArg){}/* CQT */
            aPrototype.pReceivedTtstCallbackArg = pReceivedTtstCallbackArg;







            var fRunNextInTtstSeriesCallback = function( theCallback) {
                var aMethodName = "fRunNextInTtstSeriesCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aMethodName, "FAIL", null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aMethodName, "OK", null, null, null);

                    aThis.pTryToRunNextInTtstSeries( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTtstCallbackForCallback( aCallback, "fRunNextInTtstSeriesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fRunNextInTtstSeriesCallback){}/* CQT */
            aPrototype.fRunNextInTtstSeriesCallback = fRunNextInTtstSeriesCallback;








            var fExceptionNextInTtstSeriesHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextInTtstSeriesHandler){}/* CQT */
            aPrototype.fExceptionNextInTtstSeriesHandler = fExceptionNextInTtstSeriesHandler;













            var fOverallRunTtstSeriesCallback = function( theCallback) {
                var aMethodName = "fOverallRunTtstSeriesCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aMethodName, "FAIL", null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    theCallback( null, aThis.fRecord( aMethodName, "OK", null, null, null));

                }).bind( this);

                var aWrappedCallback = this.fChainNewTtstCallbackForCallback( aCallback, "fRunNextInTtstSeriesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fOverallRunTtstSeriesCallback){}/* CQT */
            aPrototype.fOverallRunTtstSeriesCallback = fOverallRunTtstSeriesCallback;










            var fOverallRunTtstSeriesExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( theMethodName, "FAIL", null, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallRunTtstSeriesExceptionHandler){}/* CQT */
            aPrototype.fOverallRunTtstSeriesExceptionHandler = fOverallRunTtstSeriesExceptionHandler;












            var pRunTtstSeries = function( theSeriesToRun, theCallback) {
                var aMethodName = "pRunTtstSeries";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                var aExceptionHandler = this.fOverallRunTtstSeriesExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallRunTtstSeriesCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, this.EVTKIND_FAIL, null, "!this.fOverallRunTtstSeriesCallback( theCallback)", null));
                        return;
                    }



                    this.pInitFinderToRunTtstSeries( theSeriesToRun);


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToRunNextInTtstSeries( aCallback);
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
            if( pRunTtstSeries){}/* CQT */
            aPrototype.pRunTtstSeries = pRunTtstSeries;





















            return aPrototype;

        })();







        var TtstTest_Constructor = function( theTitle, theExpectSucceed) {

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Id    = null;
            this._v_Title = null;

            this._v_ExpectSucceed = null;
            this._v_State = null;
            this._v_Succeeded     = null;

            this._v_CreationTimestamp = null;
            this._v_BeginTimestamp    = null;
            this._v_LastTimestamp     = null;

            this._v_Records     = null;

            this._v_TtstSeriesToRun      = null;
            this._v_TtstSeriesAlreadyRun = null;

            this._pInit_TtstTest( theTitle, theExpectSucceed);
        };
        TtstTest_Constructor.prototype = aTtstTest_Prototype;





        var TtstTest_SuperPrototypeConstructor = function() {

            this._v_Prototype = aTtstTest_Prototype;
            this._v_Type = null;

            this._v_Id    = null;
            this._v_Title = null;

            this._v_ExpectSucceed = null;

            this._v_State = null;
            this._v_Succeeded     = null;

            this._v_CreationTimestamp = null;
            this._v_BeginTimestamp    = null;
            this._v_LastTimestamp     = null;

            this._v_Records     = null;

            this._v_TtstSeriesToRun      = null;
            this._v_TtstSeriesAlreadyRun = null;
        };
        TtstTest_SuperPrototypeConstructor.prototype = aTtstTest_Prototype;









        var aModule = {
            "TtstTest_Prototype": aTtstTest_Prototype,
            "TtstTest_Constructor": TtstTest_Constructor,
            "TtstTest_SuperPrototypeConstructor": TtstTest_SuperPrototypeConstructor
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

            var aM_ttstrecord       = require('./ttstrecord');
            var aM_exceptiondetails = require('../common-test/exceptiondetails');
            var aM_ttstcallbacker   = require('./ttstcallbacker');
            var aM_nextticker       = require('../infrasvcs/nextticker/nextticker');
            var aM_overrider        = require('../common-test/overrider');

            return aMod_definer( aM_ttstrecord, aM_exceptiondetails, aM_ttstcallbacker, aM_nextticker, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./ttstrecord",
            "../common-test/exceptiondetails",
            "./ttstcallbacker",
            "../infrasvcs/nextticker/nextticker",
            "../common-test/overrider"
        ], function (
                theM_ttstrecord,
                theM_exceptiondetails,
                theM_ttstcallbacker,
                theM_nextticker,
                theM_overrider
            ) {
            return aMod_definer(
                theM_ttstrecord,
                theM_exceptiondetails,
                theM_ttstcallbacker,
                theM_nextticker,
                theM_overrider
            );
        });
    }


}());

















