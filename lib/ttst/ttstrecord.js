'use strict';

/*
 ttstrecord.js
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

    var aMod_definer =function( ) {

        var ModuleName     = "ttstrecord";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.MAXLISTVALUES = 16;

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




        var pgInitModuleGlobalsOn = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.gIdCounter = 0;
        };



        var ModuleGlobals = { };
        pgInitModuleGlobalsOn( ModuleGlobals);





        var fgReserveId = function() {

            ModuleGlobals.gIdCounter += 1;

            var aId = ModuleGlobals.gIdCounter;
            return aId.toString();
        };
        pgInitModuleGlobalsOn();








        var aTtstRecord_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_Type = "TtstRecord";

            aPrototype._v_Id    = null;

            aPrototype._v_Timestamp    = null;
            aPrototype._v_Instance     = null;
            aPrototype._v_Step         = null;
            aPrototype._v_EventKind    = null;
            aPrototype._v_Data         = null;
            aPrototype._v_ErrorReason  = null;
            aPrototype._v_ErrorDetail  = null;







            var _pInit = function( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                this._pInit_TtstRecord( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_TtstRecord = function( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_Id = fgReserveId();

                this._v_Timestamp    = Date.now();
                this._v_Instance     = theInstance;
                this._v_Step         = theStep;
                this._v_EventKind    = theEventKind;
                this._v_Data         = theData;
                this._v_ErrorReason  = theErrorReason;
                this._v_ErrorDetail  = theErrorDetail;
            };
            if( _pInit_TtstRecord){}/* CQT */
            aPrototype._pInit_TtstRecord = _pInit_TtstRecord;







            var fCopyWithoutException = function() {

                var aCopy = new TtstRecord_Constructor(
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







            var fLogString = function() {

                var aLog = this.fAsLogObject();
                if( aLog == null) {
                    return "";
                }

                var aLogString = "";
                try {
                    aLogString = JSON.stringify( aLog);
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

                if( this._v_Id) {
                    aHasLog = true;
                    aLog.tre = this._v_Id;
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

                if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                    return theValue.fIdentifyingJSON();
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

                if( theIncludeMembers) {
                    if( theValue.fToResultJSON) {
                        return theValue.fToResultJSON();
                    }

                    try {
                        var aJSONstr = JSON.stringify( theValue);
                        if( aJSONstr){}/* CQT */
                        return aJSONstr;
                    }
                    catch( anException) {}
                }

                var aNumValues = theValue.length;
                if( aNumValues) {
                    var aListJSON = [ ];
                    var aNumValuesToScan = Math.min( aNumValues, this.MAXLISTVALUES);
                    for( var aValueIdx=0; aValueIdx < aNumValuesToScan; aValueIdx++) {
                        var aValue = theValue[ aValueIdx];
                        if( aValue) {
                            aValue = this.fConvertValueToJSON( aValue);
                        }
                        aListJSON.push( aValue);
                    }
                    return aListJSON;
                }

                var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                if( aStr){}/* CQT */
                return aStr;
            };
            if( fConvertValueToJSON){}/* CQT */
            aPrototype.fConvertValueToJSON = fConvertValueToJSON;








            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "ttstrecref": this._v_Id
                };
                if( aIdentifiyingJSON){}/* CQT */

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;




            return aPrototype;

        })();









        var TtstRecord_Constructor = function( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Id    = null;

            this._v_Timestamp    = null;
            this._v_Instance     = null;
            this._v_Step         = null;
            this._v_EventKind    = null;
            this._v_Data         = null;
            this._v_ErrorReason  = null;
            this._v_ErrorDetail  = null;

            this._pInit_TtstRecord( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
        };
        TtstRecord_Constructor.prototype = aTtstRecord_Prototype;





        var TtstRecord_SuperPrototypeConstructor = function() {

            this._v_Prototype = aTtstRecord_Prototype;
            this._v_Type = null;

            this._v_Id    = null;

            this._v_Timestamp    = null;
            this._v_Instance     = null;
            this._v_Step         = null;
            this._v_EventKind    = null;
            this._v_Data         = null;
            this._v_ErrorReason  = null;
            this._v_ErrorDetail  = null;
        };
        TtstRecord_SuperPrototypeConstructor.prototype = aTtstRecord_Prototype;









        var aModule = {
            "TtstRecord_Prototype": aTtstRecord_Prototype,
            "TtstRecord_Constructor": TtstRecord_Constructor,
            "TtstRecord_SuperPrototypeConstructor": TtstRecord_SuperPrototypeConstructor
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

            return aMod_definer( );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( function ( ) {
            return aMod_definer( );
        });
    }


}());

















