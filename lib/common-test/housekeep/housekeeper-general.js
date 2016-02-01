'use strict';

/*
 housekeeper-general.js
 Created 201504071628
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



        var ModuleName     = "housekeeper-general";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }




            theToInit.HOUEVKINDSNOTFORCONSOLE = "HOUEVKINDS_NOTFORCONSOLE_NONE";
            theToInit.HOUEVKINDSNOTFORCONSOLE = "HOUEVKINDS_NOTFORCONSOLE_RESTRICTIVE";



            theToInit.COLOREDEVENTS = true;
            /*
             Black      0;30       Dark Gray    1;30
             Red        0;31       Bold Red     1;31
             Green      0;32       Bold Green   1;32
             Yellow     0;33       Bold Yellow  1;33
             Blue       0;34       Bold Blue    1;34
             Purple     0;35       Bold Purple  1;35
             Cyan       0;36       Bold Cyan    1;36
             Light Gray 0;37       White        1;37
             */
            theToInit.RECORDCOLORESCAPE_NORMAL = "\u001b[0m";
            theToInit.RECORDCOLORESCAPE_RED    = "\u001b[31m";
            theToInit.RECORDCOLORESCAPE_GREEN  = "\u001b[32m";
            theToInit.RECORDCOLORESCAPE_YELLOW = "\u001b[33m";
            theToInit.RECORDCOLORESCAPE_BLUE   = "\u001b[34m";
            theToInit.RECORDCOLORESCAPE_PURPLE = "\u001b[35m";
            theToInit.RECORDCOLORESCAPE_CYAN   = "\u001b[36m";


            theToInit.LOGRECORDS  = true;

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

            theToInit.HOUSEKEEPERKIND_GENERAL = "GENERAL";



            theToInit.ANNOTATELAUNCHERCALLBACKS          = true;
            theToInit.RECORDLAUNCHERCALLBACKINVOCATIONS  = false;
            theToInit.RECORDLAUNCHERCALLBACKARGS         = false;



            theToInit.HOUEVKIND_PASSED     = "PASSED";
            theToInit.HOUEVKIND_NOTPASSED  = "NOTPASSED";
            theToInit.HOUEVKIND_RETRY      = "RETRY";

            theToInit.HOUEVKIND_HOUSEKEEPGIVEUP  = "HOUSEKEEPGIVEUP";

            theToInit.HOUEVKIND_INIT     = "INIT";
            theToInit.HOUEVKIND_ALREADY  = "ALREADY";
            theToInit.HOUEVKIND_BEGIN    = "BEGIN";
            theToInit.HOUEVKIND_SENT     = "SENT";
            theToInit.HOUEVKIND_RECEIVED = "RECEIVED";
            theToInit.HOUEVKIND_FAIL     = "FAIL";
            theToInit.HOUEVKIND_OK       = "OK";
            theToInit.HOUEVKIND_EXIT     = "EXIT";
            theToInit.HOUEVKIND_INFO     = "INFO";


            theToInit.HOUEVKIND_HOUSEKEEPOPTIONSFROMTEST      = "HOUSEKEEPOPTIONSFROMTEST";

            theToInit.HOUEVKIND_SNAPSHOTMEMORY                = "SNAPSHOTMEMORY";
            theToInit.HOUEVKIND_GARBAGECOLLECT                = "GARBAGECOLLECT";
            theToInit.HOUEVKIND_NOTHINGTOCLEAN                = "NOTHINGTOCLEAN";
            theToInit.HOUEVKIND_SOMETHINGTOCLEAN              = "SOMETHINGTOCLEAN";
            theToInit.HOUEVKIND_SOMETHINGTOCLEANTOAVOIDTHRASHING = "SOMETHINGTOCLEANTOAVOIDTHRASHING";

            theToInit.HOUEVKIND_RECOMMEND                     = "HOUSEKEEPRECOMMENDATION";
            theToInit.HOUEVKIND_MEMORYREPORT                  = "MEMORYREPORT";

            theToInit.HOUEVKIND_ACTIONSTARTED                 = "HOUSEKEEPACTIONSTARTED";
            theToInit.HOUEVKIND_ACTIONPERFORMED               = "HOUSEKEEPACTIONPERFORMED";
            theToInit.HOUEVKIND_ACTIONFAILED                  = "HOUSEKEEPACTIONFAILED";

            theToInit.HOUEVKIND_HOUSEKEEPINGSTARTED           = "HOUSEKEEPINGSTARTED";
            theToInit.HOUEVKIND_HOUSEKEEPINGPERFORMED         = "HOUSEKEEPINGPERFORMED";
            theToInit.HOUEVKIND_HOUSEKEEPINGFAILED            = "HOUSEKEEPINGFAILED";

            theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTSTARTED    = "HOUSEKEEPINGATTEMPTSTARTED";
            theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTPERFORMED  = "HOUSEKEEPINGATTEMPTPERFORMED";
            theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTFAILED     = "HOUSEKEEPINGATTEMPTFAILED";

            theToInit.HOUEVKIND_HOUSEKEEPINGCHECKSTARTED      = "HOUSEKEEPINGCHECKSTARTED";
            theToInit.HOUEVKIND_HOUSEKEEPINGCHECKOK           = "HOUSEKEEPINGCHECKOK";
            theToInit.HOUEVKIND_HOUSEKEEPINGCHECKFAILED       = "HOUSEKEEPINGCHECKFAILED";



            theToInit.HOUEVKINDS = [

                theToInit.HOUEVKIND_PASSED,
                theToInit.HOUEVKIND_NOTPASSED,
                theToInit.HOUEVKIND_RETRY,

                theToInit.HOUEVKIND_HOUSEKEEPGIVEUP,

                theToInit.HOUEVKIND_INIT,
                theToInit.HOUEVKIND_ALREADY,
                theToInit.HOUEVKIND_BEGIN,
                theToInit.HOUEVKIND_SENT,
                theToInit.HOUEVKIND_RECEIVED,
                theToInit.HOUEVKIND_FAIL,
                theToInit.HOUEVKIND_OK,
                theToInit.HOUEVKIND_EXIT,
                theToInit.HOUEVKIND_INFO,

                theToInit.HOUEVKIND_HOUSEKEEPOPTIONSFROMTEST,

                theToInit.HOUEVKIND_SNAPSHOTMEMORY,
                theToInit.HOUEVKIND_GARBAGECOLLECT,
                theToInit.HOUEVKIND_NOTHINGTOCLEAN,
                theToInit.HOUEVKIND_SOMETHINGTOCLEAN,
                theToInit.HOUEVKIND_SOMETHINGTOCLEANTOAVOIDTHRASHING,
                theToInit.HOUEVKIND_RECOMMEND,
                theToInit.HOUEVKIND_MEMORYREPORT,

                theToInit.HOUEVKIND_ACTIONSTARTED,
                theToInit.HOUEVKIND_ACTIONPERFORMED,
                theToInit.HOUEVKIND_ACTIONFAILED,

                theToInit.HOUEVKIND_HOUSEKEEPINGSTARTED,
                theToInit.HOUEVKIND_HOUSEKEEPINGPERFORMED,
                theToInit.HOUEVKIND_HOUSEKEEPINGFAILED,

                theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTSTARTED,
                theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTPERFORMED,
                theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTFAILED,

                theToInit.HOUEVKIND_HOUSEKEEPINGCHECKSTARTED,
                theToInit.HOUEVKIND_HOUSEKEEPINGCHECKOK,
                theToInit.HOUEVKIND_HOUSEKEEPINGCHECKFAILED
            ];





            theToInit.HOUEVKINDS_NOTFORCONSOLE_RESTRICTIVE = [


                theToInit.HOUEVKIND_PASSED,
                theToInit.HOUEVKIND_NOTPASSED,
                theToInit.HOUEVKIND_RETRY,

                theToInit.HOUEVKIND_HOUSEKEEPGIVEUP,

                theToInit.HOUEVKIND_INIT,
                theToInit.HOUEVKIND_ALREADY,
                theToInit.HOUEVKIND_BEGIN,
                theToInit.HOUEVKIND_SENT,
                theToInit.HOUEVKIND_RECEIVED,
                theToInit.HOUEVKIND_FAIL,
                theToInit.HOUEVKIND_OK,
                theToInit.HOUEVKIND_EXIT,
                theToInit.HOUEVKIND_INFO,

                theToInit.HOUEVKIND_HOUSEKEEPOPTIONSFROMTEST,

                /*
                theToInit.HOUEVKIND_SNAPSHOTMEMORY,

                theToInit.HOUEVKIND_GARBAGECOLLECT,
                 */

                theToInit.HOUEVKIND_NOTHINGTOCLEAN,

                /*
                theToInit.HOUEVKIND_SOMETHINGTOCLEAN,
                theToInit.HOUEVKIND_SOMETHINGTOCLEANTOAVOIDTHRASHING,
                */
                theToInit.HOUEVKIND_RECOMMEND,


                theToInit.HOUEVKIND_MEMORYREPORT,


                theToInit.HOUEVKIND_ACTIONSTARTED,
                theToInit.HOUEVKIND_ACTIONPERFORMED,
                theToInit.HOUEVKIND_ACTIONFAILED,


                theToInit.HOUEVKIND_HOUSEKEEPINGSTARTED,
                theToInit.HOUEVKIND_HOUSEKEEPINGPERFORMED,
                theToInit.HOUEVKIND_HOUSEKEEPINGFAILED,


                theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTSTARTED,
                theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTPERFORMED,
                theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTFAILED,

                theToInit.HOUEVKIND_HOUSEKEEPINGCHECKSTARTED,
                theToInit.HOUEVKIND_HOUSEKEEPINGCHECKOK,
                theToInit.HOUEVKIND_HOUSEKEEPINGCHECKFAILED

            ];

            /*
            theToInit.HOUEVKINDS_NOTFORCONSOLE_RESTRICTIVE = [ ];
             */





            theToInit.HOUEVKINDS_NOTFORCONSOLE_NONE = [];
            theToInit.HOUEVKINDS_NOTFORCONSOLE_ALL = theToInit.HOUEVKINDS.slice();

            theToInit.HOUEVKINDS_NOTFORCONSOLE_DEFAULT = theToInit.HOUEVKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();

            if( theToInit.HOUEVKINDSNOTFORCONSOLE) {

                if( typeof theToInit.HOUEVKINDSNOTFORCONSOLE == "string") {
                    var anEventsSetNotForConsole = theToInit[ theToInit.HOUEVKINDSNOTFORCONSOLE];
                    if( anEventsSetNotForConsole) {
                        theToInit.HOUEVKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                    }
                    else {
                        theToInit.HOUEVKINDS_NOTFORCONSOLE = [];
                    }
                }
                else {
                    theToInit.HOUEVKINDS_NOTFORCONSOLE = theToInit.HOUEVKINDSNOTFORCONSOLE;
                }
            }
            else {
                theToInit.HOUEVKINDS_NOTFORCONSOLE = theToInit.HOUEVKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }
            if( !theToInit.HOUEVKINDS_NOTFORCONSOLE) {
                theToInit.HOUEVKINDS_NOTFORCONSOLE = theToInit.HOUEVKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }





            theToInit.RECORDCOLORNAME_NORMAL  = "NORMAL";
            theToInit.RECORDCOLORNAME_RED     = 'RED';
            theToInit.RECORDCOLORNAME_GREEN   = 'GREEN';
            theToInit.RECORDCOLORNAME_YELLOW  = 'YELLOW';
            theToInit.RECORDCOLORNAME_BLUE    = 'BLUE';
            theToInit.RECORDCOLORNAME_CYAN    = 'CYAN';
            theToInit.RECORDCOLORNAME_PURPLE  = 'PURPLE';


            theToInit.RECORDCOLORESCAPES_BYNAME = {};
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_NORMAL ] = theToInit.RECORDCOLORESCAPE_NORMAL ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_RED    ] = theToInit.RECORDCOLORESCAPE_RED   ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_GREEN  ] = theToInit.RECORDCOLORESCAPE_GREEN ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_YELLOW ] = theToInit.RECORDCOLORESCAPE_YELLOW;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_BLUE   ] = theToInit.RECORDCOLORESCAPE_BLUE  ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_CYAN   ] = theToInit.RECORDCOLORESCAPE_CYAN  ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_PURPLE ] = theToInit.RECORDCOLORESCAPE_PURPLE  ;


            theToInit.COLOREVENTS = {};
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_RED ]    = [ theToInit.HOUEVKIND_NOTPASSED];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_GREEN  ] = [ theToInit.HOUEVKIND_PASSED];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_YELLOW ] = [ theToInit.HOUEVKIND_RETRY];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_BLUE ]   = [ theToInit.HOUEVKIND_HOUSEKEEPGIVEUP];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_CYAN ]   = [ theToInit.HOUEVKIND_ACTIONFAILED,
                                                                          theToInit.HOUEVKIND_HOUSEKEEPINGATTEMPTFAILED,
                                                                          theToInit.HOUEVKIND_HOUSEKEEPINGFAILED,
                                                                          theToInit.HOUEVKIND_HOUSEKEEPINGCHECKFAILED];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_PURPLE ] = [ theToInit.HOUEVKIND_ACTIONPERFORMED];





            theToInit.EVENTCOLORNAMES = {};
            Object.keys( theToInit.COLOREVENTS).forEach( function( athColorName) {
                var someEvents = theToInit.COLOREVENTS[ athColorName];
                if( someEvents) {
                    someEvents.forEach( function( athEvent) {
                        theToInit.EVENTCOLORNAMES[ athEvent] = athColorName;
                    })
                }
            });


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








        var aHousekeeperGeneral_Prototype = (function() {


            var aPrototype = {};
            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "HousekeeperGeneral";


            aPrototype._v_HousekeeperKind = null;

            aPrototype._v_OwnRecords = null;

            aPrototype._v_HousekeeperTitle = null;
            aPrototype._v_HousekeeperId = null;

            aPrototype._v_HousekeeperIdentifier = null;
            aPrototype._v_HousekeeperRecorder   = null;

            aPrototype._v_HousekeepOptions  = null;
            aPrototype._v_HousekeptLauncher = null;







            var _pInit = function( theTitle,
                                   theHousekeeperIdentifier,
                                   theHousekeeperRecorder,
                                   theHousekeepOptions,
                                   theHousekeptLauncher) {

                this._pInit_HousekeeperGeneral( theTitle,
                                                theHousekeeperIdentifier,
                                                theHousekeeperRecorder,
                                                theHousekeepOptions,
                                                theHousekeptLauncher);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_HousekeeperGeneral = function( theTitle,
                                                      theHousekeeperIdentifier,
                                                      theHousekeeperRecorder,
                                                      theHousekeepOptions,
                                                      theHousekeptLauncher) {
                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */
                this._v_Type = aPrototype._v_Type;


                this._v_HousekeeperKind = theM_housekeepconstants.HOUSEKEEPERKIND_GENERAL;


                this._v_OwnRecords = [ ];

                this._v_HousekeeperTitle = theTitle;
                if( this._v_HousekeeperTitle == null) {
                    this._v_HousekeeperTitle = "";
                }

                this._v_HousekeeperId = null;


                this._v_HousekeeperIdentifier = theHousekeeperIdentifier;
                this._v_HousekeeperRecorder   = theHousekeeperRecorder;

                if( !this._v_HousekeeperIdentifier) {
                    this._v_HousekeeperIdentifier = theM_shared_housekeep_identifier.fGetOrCreateSharedHousekeepIdentifier();
                }

                this._v_HousekeeperId = this.fReserveId();


                if( !this._v_HousekeeperRecorder) {
                    this._v_HousekeeperRecorder   = theM_shared_housekeep_recorder.fGetOrCreateSharedHousekeepRecorder();
                }


                this._v_HousekeepOptions  = theHousekeepOptions;

                this._v_HousekeptLauncher = theHousekeptLauncher;

                if( this._v_HousekeepOptions){}/* CQT */
                if( this._v_HousekeptLauncher){}/* CQT */
            };
            if( _pInit_HousekeeperGeneral){}/* CQT */
            aPrototype._pInit_HousekeeperGeneral = _pInit_HousekeeperGeneral;







            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeeperGeneral( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_HousekeeperGeneral = function( theReleaseParms, theReleaseDone) {
                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */

                this._v_HousekeeperKind    = undefined;

                this._v_HousekeeperTitle   = undefined;
                this._v_HousekeeperId      = undefined;

                this._v_HousekeeperIdentifier = undefined;
                this._v_HousekeeperRecorder   = undefined;


                this._v_HousekeepOptions   = undefined;
                this._v_HousekeptLauncher  = undefined;

            };
            if( _pRelease_HousekeeperGeneral){}/* CQT */
            aPrototype._pRelease_HousekeeperGeneral = _pRelease_HousekeeperGeneral;












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
                        var anEventKind = theRecord._v_EventKind;
                        if( this.HOUEVKINDS_NOTFORCONSOLE.indexOf( anEventKind) < 0) {
                            var aLogString = theRecord.fLogString( this.COLOREDEVENTS);
                            if( aLogString) {
                                console.log( "," + aLogString);
                            }
                        }
                    }
                }
            };
            if( pLogRecord){}/* CQT */
            aPrototype.pLogRecord = pLogRecord;














            var fEventColoredString= function( theEventKind, theString) {
                if( !theEventKind) {
                    return theString;
                }

                if( !theString) {
                    return "";
                }

                var anEventColorName = this.EVENTCOLORNAMES[ theEventKind];
                if( !anEventColorName) {
                    return theString;
                }

                if( anEventColorName == this.RECORDCOLORNAME_NORMAL) {
                    return theString;
                }

                var aColorEscape = this.RECORDCOLORESCAPES_BYNAME[ anEventColorName];
                if( !aColorEscape) {
                    return theString;
                }

                var aColoredString = aColorEscape + theString + this.RECORDCOLORESCAPE_NORMAL;
                if( aColoredString){}/* CQT */

                return aColoredString;
            };
            if( fEventColoredString){}/* CQT */
            aPrototype.fEventColoredString = fEventColoredString;









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
                    "id":  this._v_HousekeeperId
                };
                if( aIdentifiyingJSON){}/* CQT */

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;








            var fIdentifyingWithTitleJSON = function() {

                var aIdentifiyingJSON = this.fIdentifyingJSON();

                if( !( this._v_HousekeeperTitle == null)) {
                    aIdentifiyingJSON.title = this._v_HousekeeperTitle;
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




        var HousekeeperGeneral_Constructor = function( theTitle,
                                                       theHousekeeperIdentifier,
                                                       theHousekeeperRecorder,
                                                       theHousekeepOptions,
                                                       theHousekeptLauncher) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_HousekeeperKind = null;

            this._v_OwnRecords = null;

            this._v_HousekeeperId    = null;
            this._v_HousekeeperTitle = null;

            this._v_HousekeeperIdentifier = null;
            this._v_HousekeeperRecorder   = null;

            this._v_HousekeepOptions  = null;
            this._v_HousekeptLauncher = null;

            this._pInit_HousekeeperGeneral( theTitle,
                                            theHousekeeperIdentifier,
                                            theHousekeeperRecorder,
                                            theHousekeepOptions,
                                            theHousekeptLauncher);
        };
        HousekeeperGeneral_Constructor.prototype = aHousekeeperGeneral_Prototype;





        var HousekeeperGeneral_SuperPrototypeConstructor = function() {
            this._v_Prototype = aHousekeeperGeneral_Prototype;
            this._v_Type = null;

            this._v_HousekeeperKind = null;

            this._v_OwnRecords = null;

            this._v_HousekeeperId    = null;
            this._v_HousekeeperTitle = null;

            this._v_HousekeeperIdentifier = null;
            this._v_HousekeeperRecorder   = null;

            this._v_HousekeepOptions  = null;
            this._v_HousekeptLauncher = null;
        };
        HousekeeperGeneral_SuperPrototypeConstructor.prototype = aHousekeeperGeneral_Prototype;





        var aModule = {
            "HousekeeperGeneral_Prototype": aHousekeeperGeneral_Prototype,
            "HousekeeperGeneral_Constructor": HousekeeperGeneral_Constructor,
            "HousekeeperGeneral_SuperPrototypeConstructor": HousekeeperGeneral_SuperPrototypeConstructor
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
            var aM_exceptiondetails            = require('../exceptiondetails');
            var aM_overrider                   = require('../overrider');

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

