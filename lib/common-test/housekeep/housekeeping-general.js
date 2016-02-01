'use strict';

/*
 housekeeping-general.js
 Created 2015044081305
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


(function() {

    var aMod_definer = function( theM_shared_housekeep_identifier,
                                 theM_shared_housekeep_recorder,
                                 theM_housekeepconstants,
                                 theM_exceptiondetails,
                                 theM_overrider) {



        var ModuleName     = "housekeeping-general";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGRECORDS  = false;

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








        var aHousekeepingGeneral_Prototype = (function() {


            var aPrototype = {};
            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "HousekeepingGeneral";


            aPrototype._v_HousekeepingKind    = null;

            aPrototype._v_OwnRecords = null;

            aPrototype._v_HousekeepingTitle = null;
            aPrototype._v_HousekeepingId = null;

            aPrototype._v_HousekeeperIdentifier = null;
            aPrototype._v_HousekeeperRecorder   = null;

            aPrototype._v_HousekeepOptions = null;
            aPrototype._v_Housekeper       = null;

            aPrototype._v_HousekeepingPerformed = null;
            aPrototype._v_HousekeepingSuccess   = null;
            aPrototype._v_HousekeepingStatus    = null;
            aPrototype._v_HousekeepingDetails   = null;

            aPrototype._v_HousekeepingMoment   = null;






            var _pInit = function( theTitle,
                                   theHousekeepIdentifier,
                                   theHousekeepRecorder,
                                   theHousekeepOptions,
                                   theHousekeeper,
                                   theMoment) {

                this._pInit_HousekeepingGeneral( theTitle,
                                                 theHousekeepIdentifier,
                                                 theHousekeepRecorder,
                                                 theHousekeepOptions,
                                                 theHousekeeper,
                                                 theMoment);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeepingGeneral = function( theTitle,
                                                       theHousekeepIdentifier,
                                                       theHousekeepRecorder,
                                                       theHousekeepOptions,
                                                       theHousekeeper,
                                                       theMoment) {
                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */
                this._v_Type = aPrototype._v_Type;



                this._v_HousekeepingKind = theM_housekeepconstants.HOUSEKEEPINGKIND_GENERAL;


                this._v_OwnRecords = [ ];

                this._v_HousekeepingTitle = theTitle;
                if( this._v_HousekeepingTitle == null) {
                    this._v_HousekeepingTitle = "";
                }

                this._v_HousekeepingId = null;


                this._v_HousekeeperIdentifier    = theHousekeepIdentifier;
                this._v_HousekeeperRecorder      = theHousekeepRecorder;
                this._v_HousekeepOptions         = theHousekeepOptions;
                this._v_Housekeper               = theHousekeeper;
                this._v_HousekeepingMoment       = theMoment;


                if( !this._v_HousekeeperIdentifier) {
                    this._v_HousekeeperIdentifier = theM_shared_housekeep_identifier.fGetOrCreateSharedHousekeepIdentifier();
                }

                this._v_HousekeepingId = this.fReserveId();


                if( !this._v_HousekeeperRecorder) {
                    this._v_HousekeeperRecorder   = theM_shared_housekeep_recorder.fGetOrCreateSharedHousekeepRecorder();
                }

                this._v_HousekeepingPerformed = null;
                this._v_HousekeepingSuccess   = null;
                this._v_HousekeepingStatus    = null;
                this._v_HousekeepingDetails   = null;

                if( this._v_Housekeper){}/* CQT */
                if( this._v_HousekeepingKind){}/* CQT */
                if( this._v_HousekeepingSuccess){}/* CQT */
                if( this._v_HousekeepingStatus){}/* CQT */
                if( this._v_HousekeepingDetails){}/* CQT */
            };
            if( _pInit_HousekeepingGeneral){}/* CQT */
            aPrototype._pInit_HousekeepingGeneral = _pInit_HousekeepingGeneral;










            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeepingGeneral( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_HousekeepingGeneral = function( theReleaseParms, theReleaseDone) {
                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */

                this._v_HousekeepingKind    = undefined;

                this._v_OwnRecords = undefined;

                this._v_HousekeepingTitle = undefined;
                this._v_HousekeepingId = undefined;

                this._v_HousekeeperIdentifier = undefined;
                this._v_HousekeeperRecorder   = undefined;

                this._v_HousekeepOptions = undefined;
                this._v_Housekeper       = undefined;

                this._v_HousekeepingPerformed = undefined;
                this._v_HousekeepingSuccess   = undefined;
                this._v_HousekeepingStatus    = undefined;
                this._v_HousekeepingDetails   = undefined;

                this._v_HousekeepingMoment   = undefined;

            };
            if( _pRelease_HousekeepingGeneral){}/* CQT */
            aPrototype._pRelease_HousekeepingGeneral = _pRelease_HousekeepingGeneral;









            var fReserveId = function() {

                if( !this._v_HousekeeperIdentifier) {
                    return null;
                }

                return  this._v_HousekeeperIdentifier.fReserveId();
            };
            if( fReserveId){}/* CQT */
            aPrototype.fReserveId = fReserveId;











            var fRecord = function( theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecord = null;
                if( !this._v_HousekeeperRecorder) {

                    var aRecordId = null;
                    if( this._v_HousekeeperIdentifier) {
                        aRecordId = this._v_HousekeeperIdentifier.fReserveId();
                    }

                    aRecord = {
                        "_v_RecorderId": null,
                        "_v_RecordId": aRecordId,
                        "_v_RecordedType": theRecordedType,
                        "_v_Instance": theInstance,
                        "_v_Step": theStep,
                        "_v_EventKind": theEventKind,
                        "_v_Data": theData,
                        "_v_ErrorReason": theErrorReason,
                        "_v_ErrorDetail": theErrorDetail
                    };
                    return aRecord;
                }

                aRecord = this._v_HousekeeperRecorder.fCreateAndRegisterRecord( theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);

                if( aRecord) {
                    this._v_OwnRecords.push( aRecord);

                    if( this.LOGRECORDS) {
                        this.pLogRecord( aRecord);
                    }
                }


                return aRecord;
            };
            if( fRecord){}/* CQT */
            aPrototype.fRecord = fRecord;









            var pLogRecord = function( theRecord) {
                if( this.LOGRECORDS) {
                    if( theRecord) {
                        var aLogString = theRecord.fLogString();
                        if( aLogString) {
                            console.log( "," + aLogString);
                        }
                    }
                }
            };
            if( pLogRecord){}/* CQT */
            aPrototype.pLogRecord = pLogRecord;














            var fExceptionDetail = function( theException) {
                return theM_exceptiondetails.fExceptionDetail( theException);
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;















            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = this.fIdentifyingWithTitleJSON();
                if( aResultJSON){}/* CQT */

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;








            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "type": this._v_Type,
                    "id":  this._v_HousekeepingId
                };
                if( aIdentifiyingJSON){}/* CQT */

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;








            var fIdentifyingWithTitleJSON = function() {

                var aIdentifiyingJSON = this.fIdentifyingJSON();

                if( !( this._v_HousekeepingTitle == null)) {
                    aIdentifiyingJSON.title = this._v_HousekeepingTitle;
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








            return aPrototype;

        })();







        var HousekeepingGeneral_Constructor = function( theTitle,
                                                        theHousekeepIdentifier,
                                                        theHousekeepRecorder,
                                                        theHousekeepOptions,
                                                        theHousekeeper,
                                                        theMoment) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_OwnRecords = null;

            this._v_HousekeepingId    = null;
            this._v_HousekeepingTitle = null;

            this._v_HousekeeperIdentifier = null;
            this._v_HousekeeperRecorder   = null;

            this._v_HousekeepOptions  = null;
            this._v_Housekeper = null;

            this._v_HousekeepingPerformed = null;
            this._v_HousekeepingSuccess   = null;
            this._v_HousekeepingStatus    = null;
            this._v_HousekeepingDetails   = null;

            this._v_HousekeepingMoment       = null;


            this._pInit_HousekeepingGeneral( theTitle,
                                             theHousekeepIdentifier,
                                             theHousekeepRecorder,
                                             theHousekeepOptions,
                                             theHousekeeper,
                                             theMoment);
        };
        HousekeepingGeneral_Constructor.prototype = aHousekeepingGeneral_Prototype;







        var HousekeepingGeneral_SuperPrototypeConstructor = function() {
            this._v_Prototype = aHousekeepingGeneral_Prototype;
            this._v_Type = null;

            this._v_OwnRecords = null;

            this._v_HousekeepingId    = null;
            this._v_HousekeepingTitle = null;

            this._v_HousekeeperIdentifier = null;
            this._v_HousekeeperRecorder   = null;

            this._v_HousekeepOptions  = null;
            this._v_Housekeper = null;

            this._v_HousekeepingPerformed = null;
            this._v_HousekeepingSuccess   = null;
            this._v_HousekeepingStatus    = null;
            this._v_HousekeepingDetails   = null;

            this._v_HousekeepingMoment       = null;

        };
        HousekeepingGeneral_SuperPrototypeConstructor.prototype = aHousekeepingGeneral_Prototype;





        var aModule = {
            "HousekeepingGeneral_Prototype": aHousekeepingGeneral_Prototype,
            "HousekeepingGeneral_Constructor": HousekeepingGeneral_Constructor,
            "HousekeepingGeneral_SuperPrototypeConstructor": HousekeepingGeneral_SuperPrototypeConstructor
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


            var aM_shared_housekeep_identifier  = require('./shared-housekeep-identifier');
            var aM_shared_housekeep_recorder    = require('./shared-housekeep-recorder');
            var aM_housekeepconstants           = require('./housekeep-constants');
            var aM_exceptiondetails             = require('../exceptiondetails');
            var aM_overrider                    = require('../overrider');

            return aMod_definer(
                aM_shared_housekeep_identifier,
                aM_shared_housekeep_recorder,
                aM_housekeepconstants,
                aM_exceptiondetails,
                aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./shared-housekeep-identifier",
            "./shared-housekeep-recorder",
            "./housekeep-constants",
            "../exceptiondetails",
            "../overrider"
        ], function (
            theM_shared_housekeep_identifier,
            theM_shared_housekeep_recorder,
            theM_housekeepconstants,
            theM_exceptiondetails,
            theM_overrider
            ) {
            return aMod_definer(
                theM_shared_housekeep_identifier,
                theM_shared_housekeep_recorder,
                theM_housekeepconstants,
                theM_exceptiondetails,
                theM_overrider
            );
        });
    }

})();

