'use strict';

/*
 ctrlrecorded.js
 Created 201408081950
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

    var aMod_definer = function( theM_ctrlidentified,
                                 theM_exceptiondetails,
                                 theM_overrider,
                                 theM_ctrleventkinds) {


        var ModuleName     = "ctrlrecorded";
        var ModulePackages = "ctrlserver/common-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.RECORDINITS = true;
            theToInit.LOGRECORDS  = true;

            theToInit.EVENTSSET_NOTFORCONSOLE = "DEFAULT";

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


            if( theToInit.EVENTSSET_NOTFORCONSOLE) {

                if( typeof theToInit.EVENTSSET_NOTFORCONSOLE == "string") {

                    if( theM_ctrleventkinds.EVENTSSETS_NOTFORCONSOLE.hasOwnProperty( theToInit.EVENTSSET_NOTFORCONSOLE)) {
                        theToInit.EVENTKINDS_NOTFORCONSOLE = theM_ctrleventkinds.EVENTSSETS_NOTFORCONSOLE[ theToInit.EVENTSSET_NOTFORCONSOLE];
                    }
                }
                else {
                    if( typeof theToInit.EVENTSSET_NOTFORCONSOLE == "object") {
                        theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTSSETNOTFORCONSOLE;
                    }
                }
            }

            if( !theToInit.EVENTKINDS_NOTFORCONSOLE) {
                theToInit.EVENTKINDS_NOTFORCONSOLE =  theM_ctrleventkinds.EVENTKINDS_NOTFORCONSOLE_DEFAULT;
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









        var anCtrlRecorded_Prototype = (function() {


            var aPrototype = new theM_ctrlidentified.CtrlIdentified_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlidentified.CtrlIdentified_Prototype;

            aPrototype._v_Type = "CtrlRecorded";

            aPrototype._v_Module = null;


            aPrototype._v_Recorder   = null;
            aPrototype._v_OwnRecords = null;







            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_CtrlRecorded( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_CtrlRecorded = function( theTitle, theIdentifier, theRecorder) {

                var aMethodName = "_pInit_CtrlRecorded";

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlIdentified.apply( this, [ theTitle, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Module = aPrototype._v_Module;

                this._v_Recorder   = theRecorder;
                this._v_OwnRecords = [ ];

                if( this.RECORDINITS) {
                    this.fRecord( aMethodName, theM_ctrleventkinds.ACTEVT_INIT, null, null, null);
                }
            };
            if( _pInit_CtrlRecorded){}/* CQT */
            aPrototype._pInit_CtrlRecorded = _pInit_CtrlRecorded;











            var fRecord = function( theMethodName, theEventKind, theData, theReason, theDetail) {

                if( this._v_Recorder == null) {
                    return null;
                }

                var aRecord = this._v_Recorder.fCreateAndRegisterRecord( this, theMethodName, theEventKind, theData, theReason, theDetail);
                this._v_OwnRecords.push( aRecord);

                if( this.LOGRECORDS) {
                    this.pLogRecord( aRecord);
                }

                return aRecord;
            };
            if( fRecord){}/* CQT */
            aPrototype.fRecord = fRecord;






            var fRecordCallback = function( theEventKind, theCallback, theError, theResult) {

                if( this._v_Recorder == null) {
                    return null;
                }

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
                        if( this.EVENTKINDS_NOTFORCONSOLE.indexOf( anEventKind) < 0) {
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








            var fAllRecorders = function() {
                if( this._v_Recorder == null) {
                    return [];
                }

                return [ this._v_Recorder];
            };
            if( fAllRecorders){}/* CQT */
            aPrototype.fAllRecorders = fAllRecorders;









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


                if( this._v_OwnRecords) {
                    var someRecordIds = [];

                    var aNumRecords = this._v_OwnRecords.length;
                    for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {
                        var aRecord = this._v_OwnRecords[ aRecordIdx];
                        if( aRecord._v_RecordId) {
                            someRecordIds.push( aRecord._v_RecordId);
                        }
                    }

                    aResultJSON.events = someRecordIds;
                }


                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;







            return aPrototype;

        })();




        var CtrlRecorded_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlidentified.CtrlIdentified_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_Recorder   = null;
            this._v_OwnRecords = null;

            this._pInit_CtrlRecorded( theTitle, theIdentifier, theRecorder);
        };
        CtrlRecorded_Constructor.prototype = anCtrlRecorded_Prototype;





        var CtrlRecorded_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlidentified.CtrlIdentified_Prototype;

            this._v_Prototype = anCtrlRecorded_Prototype;
            this._v_Type = null;
            this._v_Module = null;

            this._v_Recorder   = null;
            this._v_OwnRecords = null;
        };
        CtrlRecorded_SuperPrototypeConstructor.prototype = anCtrlRecorded_Prototype;








        var aModule = {
            "CtrlRecorded_Prototype": anCtrlRecorded_Prototype,
            "CtrlRecorded_Constructor": CtrlRecorded_Constructor,
            "CtrlRecorded_SuperPrototypeConstructor": CtrlRecorded_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        anCtrlRecorded_Prototype._v_Module = aModule;


        return aModule;

    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ctrlidentified    = require('./ctrlidentified');
            var aM_exceptiondetails  = require('../../common-test/exceptiondetails');
            var aM_overrider         = require('../../common-test/overrider');
            var aM_ctrleventkinds    = require('./ctrleventkinds');
            var aM_ctrlidentifier    = require('./ctrlidentifier');
            var aM_ctrlrecord        = require('./ctrlrecord');

            return aMod_definer(
                aM_ctrlidentified,
                aM_exceptiondetails,
                aM_overrider,
                aM_ctrleventkinds,
                aM_ctrlidentifier,
                aM_ctrlrecord
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./ctrlidentified",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider",
            "./ctrleventkinds",
            "./ctrlidentifier"
        ], function (
            theM_ctrlidentified,
            theM_exceptiondetails,
            theM_overrider,
            theM_ctrleventkinds,
            theM_ctrlidentifier,
            theM_ctrlrecord
            ) {
            return aMod_definer(
                theM_ctrlidentified,
                theM_exceptiondetails,
                theM_overrider,
                theM_ctrleventkinds,
                theM_ctrlidentifier,
                theM_ctrlrecord
            );
        });
    }


}());


