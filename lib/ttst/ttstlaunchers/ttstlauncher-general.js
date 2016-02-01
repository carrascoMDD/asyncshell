'use strict';

/*
 ttstlauncher-general.js
 Created 201408241902
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


    var aMod_definer = function( theM_ttstrecord,
                                 theM_exceptiondetails,
                                 theM_ttstlaunchercallbacker,
                                 theM_nextticker,
                                 theM_cmpandtestspathsloader) {


        var ModuleName     = "ttstlauncher-general";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}


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
        pgInitModuleGlobalsOn();







        var fgRecord = function( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

            var aRecord = new theM_ttstrecord.TtstRecord_Constructor( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
            ModuleGlobals.gAllRecords.push( aRecord);

            return aRecord;
        };






        var aTtstLauncherGeneral_Prototype = (function() {


            var aPrototype = {};



            aPrototype.LOGRECORDS          = false;

            aPrototype.ANNOTATETTSTLAUNCHERCALLBACKS   = true;
            aPrototype.RECORDTTSTLAUNCHERCALLBACKINVOCATIONS   = true;
            aPrototype.RECORDTTSTLAUNCHERCALLBACKARGS   = true;




            aPrototype._v_Type = "TtstLauncherGeneral";

            aPrototype._v_RunOptions       = null;
            aPrototype._v_HousekeepOptions = null;
            aPrototype._v_ReleasingOptions = null;
            aPrototype._v_CleanUpOptions   = null;


            aPrototype._v_CmpAndTestsPathsLoader   = null;

            aPrototype._v_LauncherTitle = null;
            aPrototype._v_LauncherId = null;

            aPrototype._v_OwnRecords = null;


            aPrototype._v_TtstLauncherSeriesToRun      = null;
            aPrototype._v_TtstLauncherSeriesAlreadyRun = null;








            var _pInit = function( theTitle,
                                   theRunOptions,
                                   theHousekeepOptions,
                                   theReleasingOptions,
                                   theCleanUpOptions) {

                this._pInit_TtstLauncherGeneral( theTitle,
                                                 theRunOptions,
                                                 theHousekeepOptions,
                                                 theReleasingOptions,
                                                 theCleanUpOptions);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_TtstLauncherGeneral = function( theTitle,
                                                       theRunOptions,
                                                       theHousekeepOptions,
                                                       theReleasingOptions,
                                                       theCleanUpOptions) {
                if( theTitle){}/* CQT */

                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */
                this._v_Type = aPrototype._v_Type;


                this._v_OwnRecords = [ ];

                this._v_LauncherTitle = theTitle;
                if( this._v_LauncherTitle == null) {
                    this._v_LauncherTitle = "";
                }

                this._v_RunOptions         = theRunOptions;
                this._v_HousekeepOptions   = theHousekeepOptions;
                this._v_ReleasingOptions   = theReleasingOptions;
                this._v_CleanUpOptions     = theCleanUpOptions;

                this._v_LauncherId = this.fReserveId();

                this._v_TtstLauncherSeriesToRun      = null;
                this._v_TtstLauncherSeriesAlreadyRun = [ ];

                this._v_CmpAndTestsPathsLoader   = null;
            };
            if( _pInit_TtstLauncherGeneral){}/* CQT */
            aPrototype._pInit_TtstLauncherGeneral = _pInit_TtstLauncherGeneral;











            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "id": this._v_LauncherId
                };
                if( aIdentifiyingJSON){}/* CQT */

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;








            var fIdentifyingWithTitleJSON = function() {

                var aIdentifiyingJSON = this.fIdentifyingJSON();

                if( !( this._v_LauncherTitle == null)) {
                    aIdentifiyingJSON.title = this._v_LauncherTitle;
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

                if( this._v_TtstLauncherSeriesToRun && !( typeof this._v_TtstLauncherSeriesToRun.length == "undefined")) {
                    aResultJSON.torun =this._v_TtstLauncherSeriesToRun.length;
                }

                if( this._v_TtstLauncherSeriesAlreadyRun && !( typeof this._v_TtstLauncherSeriesAlreadyRun.length == "undefined")) {
                    aResultJSON.alreeadyrun =this._v_TtstLauncherSeriesAlreadyRun.length;
                }

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;











            var fReserveId = function() {

                return  fgReserveId();
            };
            if( fReserveId){}/* CQT */
            aPrototype.fReserveId = fReserveId;





            var fReserveCallbackId = function() {

                return  fgReserveId();

            };
            if( fReserveCallbackId){}/* CQT */
            aPrototype.fReserveCallbackId = fReserveCallbackId;








            var fRecord = function( theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecord = fgRecord( this, theStep, theEventKind, theData, theErrorReason, theErrorDetail);

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

















            var pSL_loadcmpandtestspaths = function( theCallback) {

                var aMethodName = "pSL_loadcmpandtestspaths";
                if( aMethodName){}/* CQT */

                var aM_cmpandtestspathsloader = theM_cmpandtestspathsloader;
                if( !aM_cmpandtestspathsloader.CmpAndTestsPathsLoader_Constructor) {
                    aM_cmpandtestspathsloader = require( "../../common-test/pathsloader/cmpandtestspathsloader");
                }

                this._v_CmpAndTestsPathsLoader = new aM_cmpandtestspathsloader.CmpAndTestsPathsLoader_Constructor( "CmpAndTestsPathsLoaderFor-" + this._v_Title);

                this._v_CmpAndTestsPathsLoader.pF_CmpAndTestsPathsLoader( theCallback);
            };
            if( pSL_loadcmpandtestspaths){}/* CQT */
            aPrototype.pSL_loadcmpandtestspaths = pSL_loadcmpandtestspaths;













            var pInitFinderToRunTtstLauncherSeries = function( theSeriesToRun) {

                this._v_TtstLauncherSeriesToRun      = theSeriesToRun;
                this._v_TtstLauncherSeriesAlreadyRun = [ ];
            };
            if( pInitFinderToRunTtstLauncherSeries){}/* CQT */
            aPrototype.pInitFinderToRunTtstLauncherSeries = pInitFinderToRunTtstLauncherSeries;












            var pTryToRunNextInTtstLauncherSeries = function( theCallback) {
                var aMethodName = "pTryToRunNextInTtstLauncherSeries";
                if( aMethodName){}/* CQT */

                var aSeriesToRunNext = this.fFindTtstLauncherSeriesToRunNext();
                if( !aSeriesToRunNext) {
                    theCallback();
                    return;
                }

                this._v_TtstLauncherSeriesAlreadyRun.push( aSeriesToRunNext);


                this.pRunNextInTtstLauncherSeries( theCallback, aSeriesToRunNext);

            };
            if( pTryToRunNextInTtstLauncherSeries){}/* CQT */
            aPrototype.pTryToRunNextInTtstLauncherSeries = pTryToRunNextInTtstLauncherSeries;











            var pRunNextInTtstLauncherSeries = function( theCallback, theToRun) {

                var aMethodName = "pRunNextInTtstLauncherSeries";

                if( !theToRun) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theToRun", null));
                    return;
                }


                if( !( typeof theToRun == "function")) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!( typeof theToRun == 'function)", null));
                }



                var aCallback = this.fRunNextInTtstLauncherSeriesCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fRunNextInTtstLauncherSeriesCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextInTtstLauncherSeriesHandler( aCallback);

                try {
                    theToRun( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pRunNextInTtstLauncherSeries){}/* CQT */
            aPrototype.pRunNextInTtstLauncherSeries = pRunNextInTtstLauncherSeries;







            var fFindTtstLauncherSeriesToRunNext = function() {

                if( !this._v_TtstLauncherSeriesToRun) {
                    return null;
                }

                var aPendingSeriesToRun = null;

                var aNumSeriesToRuns = this._v_TtstLauncherSeriesToRun.length;
                for( var aSeriesToRunIdx=0; aSeriesToRunIdx < aNumSeriesToRuns; aSeriesToRunIdx++) {

                    var aSeriesToRun = this._v_TtstLauncherSeriesToRun[ aSeriesToRunIdx];

                    if( this._v_TtstLauncherSeriesAlreadyRun.indexOf( aSeriesToRun) < 0) {
                        aPendingSeriesToRun = aSeriesToRun;
                        break;
                    }
                }
                if( !aPendingSeriesToRun) {
                    return null;
                }

                return aPendingSeriesToRun;
            };
            if( fFindTtstLauncherSeriesToRunNext){}/* CQT */
            aPrototype.fFindTtstLauncherSeriesToRunNext = fFindTtstLauncherSeriesToRunNext;












            var fRunNextInTtstLauncherSeriesCallback = function( theCallback) {
                var aMethodName = "fRunNextInTtstLauncherSeriesCallback";

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

                    aThis.pTryToRunNextInTtstLauncherSeries( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTtstLauncherCallbackForCallback( aCallback, "fRunNextInTtstLauncherSeriesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fRunNextInTtstLauncherSeriesCallback){}/* CQT */
            aPrototype.fRunNextInTtstLauncherSeriesCallback = fRunNextInTtstLauncherSeriesCallback;










            var fExceptionNextInTtstLauncherSeriesHandler = function( theCallback, theMethodName) {

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
            if( fExceptionNextInTtstLauncherSeriesHandler){}/* CQT */
            aPrototype.fExceptionNextInTtstLauncherSeriesHandler = fExceptionNextInTtstLauncherSeriesHandler;
















            var fOverallRunTtstLauncherSeriesCallback = function( theCallback) {
                var aMethodName = "fOverallRunTtstLauncherSeriesCallback";

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

                var aWrappedCallback = this.fChainNewTtstLauncherCallbackForCallback( aCallback, "fOverallRunTtstLauncherSeriesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fOverallRunTtstLauncherSeriesCallback){}/* CQT */
            aPrototype.fOverallRunTtstLauncherSeriesCallback = fOverallRunTtstLauncherSeriesCallback;










            var fOverallRunTtstLauncherSeriesExceptionHandler = function( theCallback, theMethodName) {

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
            if( fOverallRunTtstLauncherSeriesExceptionHandler){}/* CQT */
            aPrototype.fOverallRunTtstLauncherSeriesExceptionHandler = fOverallRunTtstLauncherSeriesExceptionHandler;













            var pRunTtstLauncherSeries = function( theSeriesToRun, theCallback) {
                var aMethodName = "pRunTtstLauncherSeries";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                var aExceptionHandler = this.fOverallRunTtstLauncherSeriesExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallRunTtstLauncherSeriesCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, this.EVENTKIND_FAIL, null, "!this.fOverallRunTtstLauncherSeriesCallback( theCallback)", null));
                        return;
                    }



                    this.pInitFinderToRunTtstLauncherSeries( theSeriesToRun);


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToRunNextInTtstLauncherSeries( aCallback);
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
            if( pRunTtstLauncherSeries){}/* CQT */
            aPrototype.pRunTtstLauncherSeries = pRunTtstLauncherSeries;











            var fChainNewTtstLauncherCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATETTSTLAUNCHERCALLBACKS) {
                    return theNewCallback;
                }

                return theM_ttstlaunchercallbacker.fChainNewTtstLauncherCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewTtstLauncherCallbackForCallback){}/* CQT */
            aPrototype.fChainNewTtstLauncherCallbackForCallback = fChainNewTtstLauncherCallbackForCallback;






            var pInvokingTtstLauncherCallback = function( theCallback, theError, theResult) {
                if( !this.ANNOTATETTSTLAUNCHERCALLBACKS) {
                    return;
                }

                if( !this.RECORDTTSTLAUNCHERCALLBACKINVOCATIONS) {
                    return;
                }

                theM_ttstlaunchercallbacker.pInvokingTtstLauncherCallback( theCallback, this, theMethodName, theError, theResult);
            };
            if( pInvokingTtstLauncherCallback){}/* CQT */
            aPrototype.pInvokingTtstLauncherCallback = pInvokingTtstLauncherCallback;






            var pReceivedTtstLauncherCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATETTSTLAUNCHERCALLBACKS) {
                    return;
                }

                if( !this.RECORDTTSTLAUNCHERCALLBACKARGS) {
                    return;
                }

                theM_ttstlaunchercallbacker.pReceivedTtstLauncherCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedTtstLauncherCallbackArg){}/* CQT */
            aPrototype.pReceivedTtstLauncherCallbackArg = pReceivedTtstLauncherCallbackArg;






            return aPrototype;

        })();




        var TtstLauncherGeneral_Constructor = function( theTitle, theRunOptions, theHousekeepOptions, theReleasingOptions, theCleanUpOptions) {

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_LauncherId    = null;
            this._v_LauncherTitle = null;

            this._v_RunOptions       = null;
            this._v_HousekeepOptions = null;
            this._v_ReleasingOptions = null;
            this._v_CleanUpOptions   = null;

            this._v_Identifier = null;
            this._v_Recorder   = null;

            this._v_OwnRecords = null;

            this._v_TtstLauncherSeriesToRun      = null;
            this._v_TtstLauncherSeriesAlreadyRun = null;

            this._v_CmpAndTestsPathsLoader   = null;

            this._pInit_TtstLauncherGeneral( theTitle, theRunOptions, theHousekeepOptions, theReleasingOptions, theCleanUpOptions);
        };
        TtstLauncherGeneral_Constructor.prototype = aTtstLauncherGeneral_Prototype;







        var TtstLauncherGeneral_SuperPrototypeConstructor = function() {
            this._v_Prototype = aTtstLauncherGeneral_Prototype;
            this._v_Type = null;

            this._v_LauncherId    = null;
            this._v_LauncherTitle = null;

            this._v_RunOptions       = null;
            this._v_HousekeepOptions = null;
            this._v_ReleasingOptions = null;
            this._v_CleanUpOptions   = null;

            this._v_Identifier = null;
            this._v_Recorder   = null;

            this._v_OwnRecords = null;

            this._v_TtstLauncherSeriesToRun      = null;
            this._v_TtstLauncherSeriesAlreadyRun = [ ];

            this._v_CmpAndTestsPathsLoader   = null;
        };
        TtstLauncherGeneral_SuperPrototypeConstructor.prototype = aTtstLauncherGeneral_Prototype;










        var aModule = {
            "TtstLauncherGeneral_Prototype": aTtstLauncherGeneral_Prototype,
            "TtstLauncherGeneral_Constructor": TtstLauncherGeneral_Constructor,
            "TtstLauncherGeneral_SuperPrototypeConstructor": TtstLauncherGeneral_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ttstrecord             = require('../ttstrecord');
            var aM_exceptiondetails       = require('../../common-test/exceptiondetails');
            var aM_ttstlaunchercallbacker = require('./ttstlaunchercallbacker');
            var aM_nextticker             = require('../../infrasvcs/nextticker/nextticker');
            var aM_cmpandtestspathsloader = require('../../common-test/pathsloader/cmpandtestspathsloader');

            return aMod_definer( aM_ttstrecord, aM_exceptiondetails, aM_ttstlaunchercallbacker, aM_nextticker, aM_cmpandtestspathsloader);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../ttstrecord",
            "../../common-test/exceptiondetails",
            "./ttstlaunchercallbacker",
            "../../infrasvcs/nextticker/nextticker",
            "../../common-test/pathsloader/cmpandtestspathsloader"
        ], function (
            theM_ttstrecord,
            theM_exceptiondetails,
            theM_ttstlaunchercallbacker,
            theM_nextticker,
            theM_cmpandtestspathsloader
            ) {
            return aMod_definer(
                theM_ttstrecord,
                theM_exceptiondetails,
                theM_ttstlaunchercallbacker,
                theM_nextticker,
                theM_cmpandtestspathsloader
            );
        });
    }


})();

