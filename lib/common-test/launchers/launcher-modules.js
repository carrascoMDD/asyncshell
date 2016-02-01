'use strict';

/*
 launcher-modules.js
 Created 201409251550
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

    var aMod_definer = function( theM_firsttorun,
                                 theM_launchmodulesrecord,
                                 theM_callbackerwooverrides,
                                 theM_releasingconstants,
                                 theM_cleanupconstants,
                                 theM_housekeepconstants,
                                 theM_housekeeputils,
                                 theM_stacktrace,
                                 theM_sentinels) {


        var ModuleName     = "launcher-modules";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var gOverrides = { };

        var gCallbackerLauncherModules = theM_callbackerwooverrides(
            theM_releasingconstants,
            theM_cleanupconstants,
            theM_housekeepconstants,
            theM_housekeeputils,
            theM_sentinels,
            gOverrides
        );






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.LOGRECORDS          = false;
            theToInit.LOGEXCEPTIONDETAILS = true;


            theToInit.LAUNCHERMODULESPATHTOROOT = "../../..";

            theToInit.LAUNCHERMODULESPATHTOTESTSROOT = "../../../tests";


            theToInit.PATHSEPARATOR = "/";

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
        pgInitWithModuleConstants( ModuleConstants);











        var pgInitModuleGlobalsOn = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.gAllRecords = [ ];
        };

        var ModuleGlobals = { };
        pgInitModuleGlobalsOn( ModuleGlobals);









        var fgRecord = function( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

            var aRecord = new theM_launchmodulesrecord.LaunchModulesRecord_Constructor( theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
            ModuleGlobals.gAllRecords.push( aRecord);

            return aRecord;
        };










        var aLauncherModules_Prototype = (function() {


            var aPrototype = { };


            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_Type = "LauncherModules";

            aPrototype._v_Title  = null;

            aPrototype._v_LaunchmodulesSpecsOrPath = null;

            aPrototype._v_LaunchmodulesSpecs = null;

            aPrototype._v_SubLaunchers = null;

            aPrototype._v_AlreadyLaunched = null;





            var _pInit = function( theTitle, theLaunchmodulesSpecsOrPath) {

                this._pInit_LauncherModules( theTitle, theLaunchmodulesSpecsOrPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_LauncherModules = function( theTitle, theLaunchmodulesSpecsOrPath) {

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Title  = theTitle;

                this._v_LaunchmodulesSpecsOrPath = theLaunchmodulesSpecsOrPath;

                this._v_LaunchmodulesSpecs = null;

                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];
            };
            if( _pInit_LauncherModules){}/* CQT */
            aPrototype._pInit_LauncherModules = _pInit_LauncherModules;












            var fRecord = function( theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecord = fgRecord( this, theStep, theEventKind, theData, theErrorReason, theErrorDetail);

                if( aRecord) {
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
                if( !theException) {
                    return null;
                }


                var anExceptionDetail = {
                    exception: theException.toString()
                };


                var anExceptionTrace = theM_stacktrace( { e: theException});
                if( anExceptionTrace) {
                    anExceptionDetail.trace = anExceptionTrace;
                }

                var aRecord = theException._v_Record;
                if( aRecord) {
                    if( aRecord.fIdentifyingJSON) {
                        aRecord = aRecord.fIdentifyingJSON();
                    }
                    else {
                        if( aRecord.fAsLogObject) {
                            aRecord = aRecord.fAsLogObject();
                        }
                    }
                    if( aRecord) {
                        anExceptionDetail.recex = aRecord;
                    }
                }

                if( this.LOGEXCEPTIONDETAILS) {
                    console.log( "exception:" + anExceptionDetail.exception);
                    console.log( anExceptionDetail.recex);
                    console.log( anExceptionDetail.trace);
                }

                anExceptionDetail.fIdentifyingJSON = function() {
                    return anExceptionDetail;
                };

                return anExceptionDetail;
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;









            var pReadLaunchmodulesSpecsList = function() {

                var aMethodName = "pReadLaunchmodulesSpecsList";
                if( aMethodName){}/* CQT */

                this._v_LaunchmodulesSpecs = null;


                if( !this._v_LaunchmodulesSpecsOrPath) {
                    return;
                }



                if( typeof this._v_LaunchmodulesSpecsOrPath == "object") {

                    if( typeof this._v_LaunchmodulesSpecsOrPath.length == "undefined") {
                        this._v_LaunchmodulesSpecs = [ this._v_LaunchmodulesSpecsOrPath];
                    }
                    else {
                        this._v_LaunchmodulesSpecs = this._v_LaunchmodulesSpecsOrPath;
                    }

                    return;
                }




                if( !( typeof this._v_LaunchmodulesSpecsOrPath == "string")) {
                    return;
                }



                var aLaunchmodulesSpecsPath = this.fReplaceRootSymbolInPath( this._v_LaunchmodulesSpecsOrPath, theM_sentinels.ROOTPATHSTEPSYMBOL, this.LAUNCHERMODULESPATHTOROOT);
                aLaunchmodulesSpecsPath = this.fReplaceRootSymbolInPath( aLaunchmodulesSpecsPath, theM_sentinels.SPECPATHROOTPATHSTEPSYMBOL, this.LAUNCHERMODULESPATHTOTESTSROOT);


                var someLaunchmodulesSpecs = null;
                try {
                    someLaunchmodulesSpecs = require( aLaunchmodulesSpecsPath);
                }
                catch( anException) {
                    this.fExceptionDetail( anException);
                    return;
                }


                if( someLaunchmodulesSpecs == null) {
                    return;
                }

                if( !( typeof someLaunchmodulesSpecs == "object")) {
                    return;
                }

                if( typeof someLaunchmodulesSpecs.length == "undefined") {
                    someLaunchmodulesSpecs = [ someLaunchmodulesSpecs];
                }


                this._v_LaunchmodulesSpecs = someLaunchmodulesSpecs;
            };
            if( pReadLaunchmodulesSpecsList){}/* CQT */
            aPrototype.pReadLaunchmodulesSpecsList = pReadLaunchmodulesSpecsList;











            var pInitFinderToScheduleNextLaunchmodulesSpec = function() {
                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];
            };
            if( pInitFinderToScheduleNextLaunchmodulesSpec){}/* CQT */
            aPrototype.pInitFinderToScheduleNextLaunchmodulesSpec = pInitFinderToScheduleNextLaunchmodulesSpec;










            var pTryToScheduleNextLaunchmodulesSpec = function( theCallback) {
                var aMethodName = "pTryToScheduleNextLaunchmodulesSpec";
                if( aMethodName){}/* CQT */

                var aLaunchmodulesSpecToScheduleNext = this.fFindLaunchmodulesSpecToScheduleNext();
                if( !aLaunchmodulesSpecToScheduleNext) {
                    theCallback();
                    return;
                }

                this._v_AlreadyLaunched.push( aLaunchmodulesSpecToScheduleNext);

                this.pScheduleNextLaunchmodulesSpec( theCallback, aLaunchmodulesSpecToScheduleNext);
            };
            if( pTryToScheduleNextLaunchmodulesSpec){}/* CQT */
            aPrototype.pTryToScheduleNextLaunchmodulesSpec = pTryToScheduleNextLaunchmodulesSpec;








            var fFindLaunchmodulesSpecToScheduleNext = function() {

                if( !this._v_LaunchmodulesSpecs) {
                    return null;
                }

                var aPendingLaunchmodulesSpec = null;

                var aNumLaunchmodulesSpecs = this._v_LaunchmodulesSpecs.length;
                for( var aLaunchmodulesSpecIdx=0; aLaunchmodulesSpecIdx < aNumLaunchmodulesSpecs; aLaunchmodulesSpecIdx++) {

                    var aLaunchmodulesSpec = this._v_LaunchmodulesSpecs[ aLaunchmodulesSpecIdx];

                    if( this._v_AlreadyLaunched.indexOf( aLaunchmodulesSpec) < 0) {
                        aPendingLaunchmodulesSpec = aLaunchmodulesSpec;
                        break;
                    }
                }
                if( !aPendingLaunchmodulesSpec) {
                    return null;
                }

                return aPendingLaunchmodulesSpec;
            };
            if( fFindLaunchmodulesSpecToScheduleNext){}/* CQT */
            aPrototype.fFindLaunchmodulesSpecToScheduleNext = fFindLaunchmodulesSpecToScheduleNext;








            var fReplaceRootSymbolInPath = function( theOriginal, theRootSymbol, theRootPath) {
                if( !theOriginal) {
                    return theOriginal;
                }

                if( !theRootSymbol) {
                    return theOriginal;
                }

                if( !( typeof theRootPath == "string") || !theRootPath.length)  {
                    return theOriginal;
                }


                var aReplaced = theOriginal;

                var someNameSteps = theOriginal.split( this.PATHSEPARATOR);
                if( someNameSteps) {
                    var aNumNameSteps = someNameSteps.length;
                    if( aNumNameSteps) {

                        var aFirstStep = someNameSteps[ 0];
                        if( aFirstStep == theRootSymbol) {

                            someNameSteps[ 0] = theRootPath;
                            aReplaced = someNameSteps.join( this.PATHSEPARATOR);
                        }
                    }
                }

                return aReplaced;
            };
            if( fReplaceRootSymbolInPath){}/* CQT */
            aPrototype.fReplaceRootSymbolInPath = fReplaceRootSymbolInPath;








            var pScheduleNextLaunchmodulesSpec = function( theCallback, theLaunchmoduleSpec) {

                var aMethodName = "pScheduleNextLaunchmodulesSpec";

                if( !theLaunchmoduleSpec) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theLaunchmoduleSpec", null));
                    return;
                }

                if( typeof theLaunchmoduleSpec == "string") {
                    this.pLaunchSubLauncherModules( theCallback, theLaunchmoduleSpec);
                    return;
                }


                var aTitle   = theLaunchmoduleSpec[ "title"];
                if( !aTitle) {
                    aTitle = "?";
                }

                var aModuleName            = theLaunchmoduleSpec[ "module"];
                if( !aModuleName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!aModuleName", null));
                    return;
                }

                aModuleName = this.fReplaceRootSymbolInPath( aModuleName, theM_sentinels.ROOTPATHSTEPSYMBOL, this.LAUNCHERMODULESPATHTOROOT);


                var aModuleConstructorName = theLaunchmoduleSpec[ "constructor"];
                if( !aModuleConstructorName) {
                    this.fRecord( aMethodName, "INFO", null, "!aModuleConstructorName", null);
                }


                var aModuleMethodName = theLaunchmoduleSpec[ "method"];
                if( !aModuleMethodName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!aModuleMethodName", null));
                    return;
                }


                var aConstructorParm = theLaunchmoduleSpec[ "constructorparm"];

                var aParm            = theLaunchmoduleSpec[ "parm"];



                var aModule = null;
                try {
                    aModule = require( aModuleName);
                }
                catch( anException) {
                    var anExceptionDetail = this.fExceptionDetail( anException);
                    theCallback( this.fRecord( aMethodName, "FAIL", null, anExceptionDetail, null));
                    return;
                }
                if( !aModule) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!aModule", null));
                    return;
                }

                var anInstance = null;

                var aConstructor = null;
                if( aModuleConstructorName) {

                    aConstructor = aModule[ aModuleConstructorName];
                    if( !aConstructor) {
                        theCallback( this.fRecord( aMethodName, "FAIL", null, "!aConstructor", null));
                        return;
                    }

                    if( !( typeof aConstructorParm == "undefined")) {

                        anInstance = new aConstructor( aTitle, aConstructorParm);
                    }
                    else {
                        anInstance = new aConstructor( aTitle);
                    }
                    if( !anInstance) {
                        theCallback( this.fRecord( aMethodName, "FAIL", null, "!anInstance", null));
                        return;
                    }
                }
                else {
                    anInstance = aModule;
                }




                var aMethod = anInstance[ aModuleMethodName];
                if( !aMethod) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!aMethod", null));
                    return;
                }
                if( !( typeof aMethod == "function")) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!( typeof aMethod == 'function)", null));
                }

                var aBoundMethod = aMethod.bind( anInstance);



                var aCallback = this.fScheduleNextLaunchermodulesCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fScheduleNextLaunchermodulesCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextLaunchermodulesHandler( aCallback);

                try {
                    if( !( typeof aParm == "undefined")) {
                        aBoundMethod( aCallback, aParm);
                    }
                    else {
                        aBoundMethod( aCallback);
                    }
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pScheduleNextLaunchmodulesSpec){}/* CQT */
            aPrototype.pScheduleNextLaunchmodulesSpec = pScheduleNextLaunchmodulesSpec;







            var pLaunchSubLauncherModules = function( theCallback, theLaunchmoduleSpecPath) {

                var aMethodName = "pLaunchSubLauncherModules";

                if( !theLaunchmoduleSpecPath) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theLaunchmoduleSpecPath", null));
                    return;
                }

                if( !( typeof theLaunchmoduleSpecPath == "string")) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, " !( typeof theLaunchmoduleSpecPath == 'string'')", null));
                    return;
                }

                var aCallback = this.fScheduleNextLaunchermodulesCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fScheduleNextLaunchermodulesCallback( theCallback)", null));
                    return;
                }

                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }

                var aSubLauncherModules = new LauncherModules_Constructor( aTitle, theLaunchmoduleSpecPath);


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextLaunchermodulesHandler( aCallback);

                try {

                    aSubLauncherModules.pF_LauncherModules( aCallback)
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pLaunchSubLauncherModules){}/* CQT */
            aPrototype.pLaunchSubLauncherModules = pLaunchSubLauncherModules;











            var fScheduleNextLaunchermodulesCallback = function( theCallback) {
                var aMethodName = "fScheduleNextLaunchermodulesCallback";

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

                    aThis.pTryToScheduleNextLaunchmodulesSpec( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewLaunchermodulesCallbackForCallback( aCallback, "fScheduleNextLaunchermodulesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextLaunchermodulesCallback){}/* CQT */
            aPrototype.fScheduleNextLaunchermodulesCallback = fScheduleNextLaunchermodulesCallback;








            var fChainNewLaunchermodulesCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATELAUNCHERTOPCALLBACKS) {
                    return theNewCallback;
                }

                return gCallbackerLauncherModules.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewLaunchermodulesCallbackForCallback){}/* CQT */
            aPrototype.fChainNewLaunchermodulesCallbackForCallback = fChainNewLaunchermodulesCallbackForCallback;







            var pReceivedLaunchermodulesCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATELAUNCHERTOPCALLBACKS) {
                    return;
                }

                if( !this.RECORDLAUNCHERTOPCALLBACKARGS) {
                    return;
                }

                if( !theCallback) {
                    return;
                }

                gCallbackerLauncherModules.pReceivedCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedLaunchermodulesCallbackArg){}/* CQT */
            aPrototype.pReceivedLaunchermodulesCallbackArg = pReceivedLaunchermodulesCallbackArg;







            var fExceptionNextLaunchermodulesHandler = function( theCallback, theMethodName) {

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
            if( fExceptionNextLaunchermodulesHandler){}/* CQT */
            aPrototype.fExceptionNextLaunchermodulesHandler = fExceptionNextLaunchermodulesHandler;












            var fOverallLaunchermodulesCallback = function( theCallback) {
                var aMethodName = "fOverallLaunchermodulesCallback";

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

                var aWrappedCallback = this.fChainNewLaunchermodulesCallbackForCallback( aCallback, "fOverallLaunchermodulesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fOverallLaunchermodulesCallback){}/* CQT */
            aPrototype.fOverallLaunchermodulesCallback = fOverallLaunchermodulesCallback;










            var fOverallExceptionHandler = function( theCallback, theMethodName) {

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
            if( fOverallExceptionHandler){}/* CQT */
            aPrototype.fOverallExceptionHandler = fOverallExceptionHandler;










            var pSL_launchModules = function( theCallback) {
                var aMethodName = "pSL_launchModules";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                this.pInitFinderToScheduleNextLaunchmodulesSpec();


                var aExceptionHandler = this.fOverallExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallLaunchermodulesCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, this.EVENTKIND_FAIL, null, "!this.fOverallLaunchermodulesCallback( theCallback)", null));
                        return;
                    }


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    process.nextTick(
                        function() {
                            try {
                                aThis.pTryToScheduleNextLaunchmodulesSpec( aCallback);
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
            if( pSL_launchModules){}/* CQT */
            aPrototype.pSL_launchModules = pSL_launchModules;








            var pF_LauncherModules = function( theCallback) {

                var aMethodName = "pF_LauncherModules";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                this.pReadLaunchmodulesSpecsList();


                if( !this._v_LaunchmodulesSpecs) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null,"!this._v_LaunchmodulesSpecs", null));
                    return;
                }


                try {
                    this.pReceivedLaunchermodulesCallbackArg( theCallback, aMethodName);

                    this.pSL_launchModules( theCallback);
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                    theCallback( this.fRecord( aMethodName, "FAIL", null, aRecord, null));
                }

            };
            if( pF_LauncherModules){}/* CQT */
            aPrototype.pF_LauncherModules = pF_LauncherModules;










            return aPrototype;

        })();




        var LauncherModules_Constructor = function( theTitle, theLaunchmodulesSpecsOrPath) {

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Title  = null;

            this._v_LaunchmodulesSpecsOrPath = null;

            this._v_LaunchmodulesSpecs = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;

            this._pInit_LauncherModules( theTitle, theLaunchmodulesSpecsOrPath);
        };
        LauncherModules_Constructor.prototype = aLauncherModules_Prototype;





        var LauncherModules_SuperPrototypeConstructor = function() {

            this._v_Prototype = aLauncherModules_Prototype;
            this._v_Type = null;

            this._v_Title  = null;

            this._v_LaunchmodulesSpecsOrPath = null;

            this._v_LaunchmodulesSpecs = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;
        };
        LauncherModules_SuperPrototypeConstructor.prototype = aLauncherModules_Prototype;











        var LauncherModulesFactory = function(
            theTitle, theLaunchmodulesSpecsOrPath) {

            var aLauncherModules = new LauncherModules_Constructor( theTitle, theLaunchmodulesSpecsOrPath);

            var aMethod = aLauncherModules.pF_LauncherModules.bind( aLauncherModules);

            return { "launcher": aLauncherModules, "method": aMethod};
        };











        var fDefineLauncherModules_andRunIfFirst = function( theTitle, theLaunchmodulesSpecsOrPath) {


            var aLastLauncher = null;


            var aLauncherFactory = function() {

                var aLauncherAndMethod =  LauncherModulesFactory( theTitle, theLaunchmodulesSpecsOrPath);
                if( !aLauncherAndMethod) {
                    return null;
                }

                aLastLauncher = aLauncherAndMethod[ "launcher"];

                return aLauncherAndMethod;
            };



            var aModule = {
                "LaunchmodulesSpecs": theLaunchmodulesSpecsOrPath,
                "LauncherFactory": LauncherModulesFactory
            };



            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }
                        if( aLastLauncher) {
                            aLastLauncher.fRecord( theTitle, "EXIT", anExitCode, theError, null);
                        }
                        else {
                            var anExitRecord = { "launcher": theTitle, "EXIT": anExitCode};
                            console.log( "," + JSON.stringify( anExitRecord));
                        }
                        process.exit( anExitCode);
                    };


                    var aLauncherAndMethod = aLauncherFactory();
                    if( !aLauncherAndMethod) {
                        aCallback( "!LauncherFactory()");
                        return;
                    }

                    var aMethod = aLauncherAndMethod[ "method"];
                    if( !aMethod) {
                        return;
                    }

                    aMethod( aCallback);
                })()
            }




            return aModule;

        };








        var aModule = {
            "LauncherModules_Prototype": aLauncherModules_Prototype,
            "LauncherModules_Constructor": LauncherModules_Constructor,
            "LauncherModules_SuperPrototypeConstructor": LauncherModules_SuperPrototypeConstructor,

            "LauncherModulesFactory": LauncherModulesFactory,

            "fDefineLauncherModules_andRunIfFirst":  fDefineLauncherModules_andRunIfFirst
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

            var aM_firsttorun             = require('./firsttorun');
            var aM_launchmodulesrecord    = require('./launchmodulesrecord');
            var aM_callbackerwooverrides  = require('../callbackerwooverrides');
            var aM_releasingconstants     = require('../releasing/releasing-constants');
            var aM_cleanupconstants       = require('../cleanup/cleanup-constants');
            var aM_housekeepconstants     = require('../housekeep/housekeep-constants');
            var aM_housekeeputils         = require('../housekeep/housekeep-utils');
            var aM_stacktrace             = require('../../thirdparty/stacktrace');
            var aM_sentinels              = require('../sentinels');

            return aMod_definer(
                aM_firsttorun,
                aM_launchmodulesrecord,
                aM_callbackerwooverrides,
                aM_releasingconstants,
                aM_housekeepconstants,
                aM_cleanupconstants,
                aM_housekeeputils,
                aM_stacktrace,
                aM_sentinels
            );
        })();
    }


    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./firsttorun",
            "./launchmodulesrecord",
            "../callbackerwooverrides",
            "../releasing/releasing-constants",
            "../cleanup/cleanup-constants",
            "../housekeep/housekeep-constants",
            "../housekeep/housekeep-utils",
            "../../thirdparty/stacktrace",
            "../sentinels"
        ], function (
            theM_firsttorun,
            theM_launchmodulesrecord,
            theM_callbackerwooverrides,
            theM_releasingconstants,
            theM_cleanupconstants,
            theM_housekeepconstants,
            theM_housekeeputils,
            theM_stacktrace,
            theM_sentinels
        ) {
            return aMod_definer(
                theM_firsttorun,
                theM_launchmodulesrecord,
                theM_callbackerwooverrides,
                theM_releasingconstants,
                theM_cleanupconstants,
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_stacktrace,
                theM_sentinels
            );
        });
    }

})();

