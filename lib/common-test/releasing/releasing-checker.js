'use strict';

/*
 releasing-checker.js
 Creado 201504162330
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


(function() {

    var aMod_definer = function( theM_releasingconstants,
                                 theM_exceptiondetails,
                                 theM_specloader,
                                 theM_sentinels,
                                 theM_overrider) {



        var ModuleName     = "releasing-checker";
        var ModulePackages = "common-test/releasing";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGCHECKSEVENT   = true;
            theToInit.LOGEVENTSSUMMARY = true;
            theToInit.PRETTYDUMPRELEASEDEVENTSSUMMARY = true;

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

            theToInit.NOCREATORTYPE  = "__NOCREATORTYPE__";
            theToInit.NOCREATORTITLE = "__NOCREATORTITLE__";

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








        var aReleasingChecker_Prototype = (function() {


            var aPrototype = {};
            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "ReleasingChecker";


            aPrototype._v_Id             = null;
            aPrototype._v_Title          = null;

            aPrototype._v_ReleaseOptions = null;
            aPrototype._v_ReleaseTarget  = null;

            aPrototype._v_HasAttemptedToReadTestReleasing= null;
            aPrototype._v_IsVoidReleasingChecker  = null;

            aPrototype._v_TestReleasingAll       = null;
            aPrototype._v_TestReleasingFile      = null;
            aPrototype._v_TestReleasing          = null;
            aPrototype._v_TestReleasingsByPath   = null;




            var _pInit = function( theId,
                                   theTitle,
                                   theReleaseOptions,
                                   theReleaseTarget) {

                this._pInit_ReleasingChecker( theId,
                                              theTitle,
                                              theReleaseOptions,
                                              theReleaseTarget);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_ReleasingChecker = function( theId,
                                                    theTitle,
                                                    theReleaseOptions,
                                                    theReleaseTarget) {
                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */
                this._v_Type = aPrototype._v_Type;



                this._v_Id = theId;
                if( this._v_Id == null) {
                    this._v_Id = "";
                }

                this._v_Title = theTitle;
                if( this._v_Title == null) {
                    this._v_Title = "";
                }

                this._v_ReleaseOptions  = theReleaseOptions;
                this._v_ReleaseTarget   = theReleaseTarget;

                this._v_HasAttemptedToReadTestReleasing = false;
                this._v_IsVoidReleasingChecker  = true;

                this._v_TestReleasingAll  = false;
                if( this._v_ReleaseOptions) {
                    if( this._v_ReleaseOptions[ theM_releasingconstants.RELEASINGOPTIONS_TESTRELEASINGALLPARMNAME]) {

                        this._v_TestReleasingAll = true;
                    }
                }
                this._v_TestReleasingFile        = null;
                this._v_TestReleasing            = null;
                this._v_TestReleasingsByPath     = { };

                if( this._v_ReleaseTarget){}/* CQT */
            };
            if( _pInit_ReleasingChecker){}/* CQT */
            aPrototype._pInit_ReleasingChecker = _pInit_ReleasingChecker;










            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRelease_ReleasingChecker( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ReleasingChecker = function( theReleaseParms, theReleaseDone) {
                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */

                this._v_Id = undefined;
                this._v_Title = undefined;

                this._v_ReleaseOptions = undefined;
                this._v_ReleaseTarget  = undefined;

                this._v_HasAttemptedToReadTestReleasing = undefined;
                this._v_IsVoidReleasingChecker  = undefined;

                this._v_TestReleasingFile     = undefined;
                this._v_TestReleasing         = undefined;
                this._v_TestReleasingsByPath  = undefined;

            };
            if( _pRelease_ReleasingChecker){}/* CQT */
            aPrototype._pRelease_ReleasingChecker = _pRelease_ReleasingChecker;











            var pReadTestReleasing = function() {

                this._v_IsVoidReleasingChecker  = true;

                if( this._v_HasAttemptedToReadTestReleasing) {
                    return;
                }

                this._v_HasAttemptedToReadTestReleasing = true;

                this._v_TestReleasingFile = null;
                this._v_TestReleasing     = null;

                if( !this._v_ReleaseOptions) {
                    return;
                }


                var aTestReleasingFile = this._v_ReleaseOptions[ theM_releasingconstants.RELEASINGOPTIONS_TESTRELEASINGFILEPARMNAME];
                if( !aTestReleasingFile) {
                    return;
                }


                if( typeof aTestReleasingFile == "object") {

                    this._v_TestReleasingFile = aTestReleasingFile;
                    this._v_TestReleasing     = aTestReleasingFile;

                    this._v_IsVoidReleasingChecker  = false;

                    return;
                }


                if( !( typeof aTestReleasingFile == "string")) {
                    return;
                }


                this._v_TestReleasingFile = aTestReleasingFile;


                var aTestReleasing = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( this._v_TestReleasingFile);
                if( aTestReleasing == null) {
                    return;
                }


                if( !( typeof aTestReleasing == "object")) {
                    return;
                }


                this._v_TestReleasing = aTestReleasing;


                if( !this._v_TestReleasing.fAsLogObject) {
                    this._v_TestReleasing.fAsLogObject = fTestReleasing_fAsLogObject.bind( this._v_TestReleasing);
                }


                if( this.fUpdateReleaseOptionsFromReadTestReleasing()) {

                    this._v_IsVoidReleasingChecker  = false;
                }


                if( this.fInitTestReleasingsByPathFromReadTestReleasing()) {

                    this._v_IsVoidReleasingChecker  = false;
                }

            };
            if( pReadTestReleasing){}/* CQT */
            aPrototype.pReadTestReleasing = pReadTestReleasing;





            var fIsVoidReleasingChecker = function() {
                return this._v_IsVoidReleasingChecker;
            };
            if( fIsVoidReleasingChecker){}/* CQT */
            aPrototype.fIsVoidReleasingChecker = fIsVoidReleasingChecker;






            var fTestReleasing_fAsLogObject = function() {
                return this;
            };




            var fReleaseOptions_fAsLogObject = function() {
                return this;
            };




            var fAsLogObject_Checks_Event = function() {
                return this;
            };






            var fUpdateReleaseOptionsFromReadTestReleasing = function() {

                if( !this._v_TestReleasing) {
                    return false;
                }

                if( !this._v_ReleaseOptions) {
                    return false;
                }

                var someReleaseOptionsFromTestReleasing = this._v_TestReleasing[ theM_releasingconstants.TESTRELEASINGFILESECTION_RELEASINGOPTIONS];
                if( !someReleaseOptionsFromTestReleasing) {
                    return false;
                }


                var aAnyReleaseOption = false;


                if( someReleaseOptionsFromTestReleasing[ theM_releasingconstants.RELEASINGOPTIONS_TESTRELEASINGALLPARMNAME]) {
                    this._v_TestReleasingAll = true;
                    aAnyReleaseOption = true;
                }


                var aReleaseOptions = this._v_ReleaseOptions;
                Object.keys( someReleaseOptionsFromTestReleasing).forEach( function( athKey) {
                    if( theM_releasingconstants.TESTRELEASINGFILE_RELEASINGOPTIONS_VALIDKEYS.indexOf( athKey) >= 0) {
                        var aReleaseOptionsFromTestReleasing = someReleaseOptionsFromTestReleasing[ athKey];
                        if( !( aReleaseOptionsFromTestReleasing == null)) {
                            aReleaseOptions[ athKey] = aReleaseOptionsFromTestReleasing;
                            aAnyReleaseOption = true;
                        }
                    }
                });

                if( !this._v_ReleaseOptions.fAsLogObject) {
                    this._v_ReleaseOptions.fAsLogObject = fReleaseOptions_fAsLogObject.bind( this._v_ReleaseOptions);
                }

                return aAnyReleaseOption;

            };
            if( fUpdateReleaseOptionsFromReadTestReleasing){}/* CQT */
            aPrototype.fUpdateReleaseOptionsFromReadTestReleasing = fUpdateReleaseOptionsFromReadTestReleasing;













            var fInitTestReleasingsByPathFromReadTestReleasing = function() {

                if( !this._v_TestReleasing) {
                    return false;
                }

                var someTestsReleasing = this._v_TestReleasing[ theM_releasingconstants.TESTRELEASINGFILESECTION_RELEASING];
                if( !someTestsReleasing) {
                    return false;
                }

                var aNumTestsReleasing = someTestsReleasing.length;
                if( !aNumTestsReleasing) {
                    return false;
                }

                var aAnyTestReleasing = false;

                for( var aTestReleasingIdx=0; aTestReleasingIdx < aNumTestsReleasing; aTestReleasingIdx++) {

                    var aTestReleasing = someTestsReleasing[ aTestReleasingIdx];
                    if( aTestReleasing) {

                        var aTestReleasingPath = aTestReleasing[ theM_releasingconstants.TESTRELEASING_FIELDNAME_TESTNAME];
                        if( aTestReleasingPath) {

                            this._v_TestReleasingsByPath[ aTestReleasingPath] = aTestReleasing;
                            aAnyTestReleasing = true;
                        }
                    }
                }

                return aAnyTestReleasing;
            };
            if( fInitTestReleasingsByPathFromReadTestReleasing){}/* CQT */
            aPrototype.fInitTestReleasingsByPathFromReadTestReleasing = fInitTestReleasingsByPathFromReadTestReleasing;














            var fTestReleasingChecks = function( theLauncher,
                                                 theSpecPath,
                                                 theTest,
                                                 theConfiguration,
                                                 theCallback,
                                                 theRecorder,
                                                 theRecorderSnapshotBeforeTest,
                                                 theRecorderSnapshotAfterTest) {

                var aMethodName = "fTestReleasingChecks";

                if( !theLauncher) {
                    return null;
                }

                if( !theSpecPath) {
                    return null;
                }

                if( !theTest && !theConfiguration && !theCallback && !theRecorder) {
                    return null;
                }

                if( !this.fMustTestReleasingChecks( theSpecPath)) {
                    return null;
                }



                var aHasAnyReleaseToCheck = false;
                if( theTest ) {
                    if( theTest._pRelease && ( typeof theTest._pRelease == "function")) {
                        aHasAnyReleaseToCheck = true;
                    }
                }

                if( !aHasAnyReleaseToCheck) {
                    if( theConfiguration ) {
                        if( theConfiguration._pRelease && ( typeof theConfiguration._pRelease == "function")) {
                            aHasAnyReleaseToCheck = true;
                        }
                    }
                }


                var aRootCallback = null;

                if( theCallback) {
                    if( theCallback.fRootCallback && ( typeof theCallback.fRootCallback == "function")) {
                        aRootCallback = theCallback.fRootCallback();
                    }
                    if( !aHasAnyReleaseToCheck) {
                        if( aRootCallback) {
                            aHasAnyReleaseToCheck = true;
                        }
                    }
                }


                if( !aHasAnyReleaseToCheck) {
                    if( theRecorder) {
                        if( theRecorder._pReleaseRecords && ( typeof theRecorder._pReleaseRecords == "function")) {
                            aHasAnyReleaseToCheck = true;
                        }
                    }
                }


                if( !aHasAnyReleaseToCheck) {
                    return null;
                }




                

                var aTestReleasings = null;
                if( this._v_TestReleasingsByPath) {
                    aTestReleasings = this._v_TestReleasingsByPath[ theSpecPath];
                }




                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCAPTUREBEGIN, theSpecPath, null, null);

                
                

                var someCapturedChildrenBeforeRelease = [ ];

                if( theTest ) {
                    if( theTest._pRelease && ( typeof theTest._pRelease == "function")) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCAPTUREBEGINTEST, theSpecPath, null, null);

                        var aNumCapturesBeforeRelease_Test = 0;
                        var aCapturesBeforeRelease_Test = this.fCapturesBeforeRelease( theSpecPath, theTest, aTestReleasings);
                        if( aCapturesBeforeRelease_Test) {
                            var someCapturesBeforeRelease_Test = aCapturesBeforeRelease_Test [ "capturedChildren"];
                            if( someCapturesBeforeRelease_Test) {
                                aNumCapturesBeforeRelease_Test = someCapturesBeforeRelease_Test.length;
                                if( aNumCapturesBeforeRelease_Test) {
                                    Array.prototype.push.apply( someCapturedChildrenBeforeRelease, someCapturesBeforeRelease_Test);
                                }
                            }
                        }
                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCAPTUREOKTEST, theSpecPath, aNumCapturesBeforeRelease_Test, null);
                    }
                }


                if( theConfiguration) {
                    if( theConfiguration._pRelease && ( typeof theConfiguration._pRelease == "function")) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCAPTUREBEGINCONFIGURATION, theSpecPath, null, null);

                        var aNumCapturesBeforeRelease_Configuration = 0;
                        var aCapturesBeforeRelease_Configuration = this.fCapturesBeforeRelease( theSpecPath, theConfiguration, aTestReleasings);
                        if( aCapturesBeforeRelease_Configuration) {
                            var someCapturesBeforeRelease_Configuration = aCapturesBeforeRelease_Configuration[ "capturedChildren"];
                            if( someCapturesBeforeRelease_Configuration) {
                                aNumCapturesBeforeRelease_Configuration = someCapturesBeforeRelease_Configuration.length;
                                if( aNumCapturesBeforeRelease_Configuration) {
                                    Array.prototype.push.apply( someCapturedChildrenBeforeRelease, someCapturesBeforeRelease_Configuration);
                                }
                            }
                        }
                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCAPTUREOKCONFIGURATION, theSpecPath, aNumCapturesBeforeRelease_Configuration, null);
                    }
                }



                if( theCallback) {
                    if( theCallback.fRootCallback && ( typeof theCallback.fRootCallback == "function")) {
                        aRootCallback = theCallback.fRootCallback();
                    }
                    if( aRootCallback) {
                        if( aRootCallback._pRelease && ( typeof aRootCallback._pRelease == "function")) {

                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCAPTUREBEGINCALLBACK, theSpecPath, null, null);

                            var aNumCapturesBeforeRelease_Callback = 0;
                            var aCapturesBeforeRelease_Callback = this.fCapturesBeforeRelease( theSpecPath, aRootCallback, aTestReleasings);
                            if( aCapturesBeforeRelease_Callback) {
                                var someCapturesBeforeRelease_Callback = aCapturesBeforeRelease_Callback[ "capturedChildren"];
                                if( someCapturesBeforeRelease_Callback) {
                                    aNumCapturesBeforeRelease_Callback = someCapturesBeforeRelease_Callback.length;
                                    if( aNumCapturesBeforeRelease_Callback) {
                                        Array.prototype.push.apply( someCapturedChildrenBeforeRelease, someCapturesBeforeRelease_Callback);
                                    }
                                }
                            }

                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCAPTUREOKCALLBACK, theSpecPath, aNumCapturesBeforeRelease_Callback, null);
                        }
                    }
                }


                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCAPTUREOK, theSpecPath, someCapturedChildrenBeforeRelease.length, null);










                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGBEGIN, theSpecPath, null, null);






                var someReleasedIdentifyings_Test = null;

                if( theTest ) {
                    if( theTest._pRelease && ( typeof theTest._pRelease == "function")) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGBEGINTEST, theSpecPath, null, null);

                        var someReleaseParms_Test = { };
                        someReleaseParms_Test[ theM_releasingconstants.RELEASEPARMS_REGISTERRELEASEDIDENTIFYINGS_FIELDNAME] = true;
                        someReleaseParms_Test[ theM_releasingconstants.RELEASEPARMS_LOGRELEASERECORDS_FIELDNAME] = true;
                        var aReleaseDone_Test  = { };
                        aReleaseDone_Test[ theM_releasingconstants.RELEASEDONE_IDENTIFYINGS_FIELDNAME] = [ ];

                        var aReleaseException_Test = null;
                        try {
                            theTest._pRelease( someReleaseParms_Test, aReleaseDone_Test);
                        }
                        catch( anException) {
                            aReleaseException_Test = anException;
                        }
                        if( aReleaseException_Test) {
                            var aReleaseExceptionDetails_Test = this.fExceptionDetail( aReleaseException_Test);
                            if( aReleaseExceptionDetails_Test){}/* CQT */

                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGFAILEDTEST, theSpecPath, null, aReleaseExceptionDetails_Test);

                            return [ aReleaseExceptionDetails_Test];
                        }

                        someReleasedIdentifyings_Test = aReleaseDone_Test[ theM_releasingconstants.RELEASEDONE_IDENTIFYINGS_FIELDNAME];
                    }

                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGOKTEST, theSpecPath, null, null);
                }



                var someReleasedIdentifyings_Configuration = null;

                if( theConfiguration ) {
                    if( theConfiguration._pRelease && ( typeof theConfiguration._pRelease == "function")) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGBEGINCONFIGURATION, theSpecPath, null, null);

                        var someReleaseParms_Configuration = { };
                        someReleaseParms_Configuration[ theM_releasingconstants.RELEASEPARMS_REGISTERRELEASEDIDENTIFYINGS_FIELDNAME] = true;
                        someReleaseParms_Configuration[ theM_releasingconstants.RELEASEPARMS_LOGRELEASERECORDS_FIELDNAME] = true;
                        var aReleaseDone_Configuration  = { };
                        aReleaseDone_Configuration[ theM_releasingconstants.RELEASEDONE_IDENTIFYINGS_FIELDNAME] = [ ];

                        var aReleaseException_Configuration = null;
                        try {
                            theConfiguration._pRelease( someReleaseParms_Configuration, aReleaseDone_Configuration);
                        }
                        catch( anException) {
                            aReleaseException_Configuration = anException;
                        }
                        if( aReleaseException_Configuration) {
                            var aReleaseExceptionDetails_Configuration = this.fExceptionDetail( aReleaseException_Configuration);
                            if( aReleaseExceptionDetails_Configuration){}/* CQT */

                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGFAILEDCONFIGURATION, theSpecPath, null, aReleaseExceptionDetails_Configuration);

                            return [ aReleaseExceptionDetails_Configuration];
                        }

                        someReleasedIdentifyings_Configuration = aReleaseDone_Configuration[ theM_releasingconstants.RELEASEDONE_IDENTIFYINGS_FIELDNAME];
                    }

                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGOKCONFIGURATION, theSpecPath, null, null);
                }




                var someReleasedIdentifyings_Callback = null;

                if( aRootCallback) {
                    if( aRootCallback._pRelease && ( typeof aRootCallback._pRelease == "function")) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGBEGINCALLBACK, theSpecPath, null, null);

                        var someReleaseParms_Callback = { };
                        someReleaseParms_Callback[ theM_releasingconstants.RELEASEPARMS_REGISTERRELEASEDCALLBACKIDENTIFYINGS_FIELDNAME] = true;
                        someReleaseParms_Callback[ theM_releasingconstants.RELEASEPARMS_LOGRELEASECALLBACKRECORDS_FIELDNAME] = false;
                        var aReleaseDone_Callback  = { };
                        aReleaseDone_Callback[ theM_releasingconstants.RELEASEDONE_CALLBACKIDENTIFYINGS_FIELDNAME] = [ ];

                        var aReleaseException_Callback = null;
                        try {
                            aRootCallback._pRelease( someReleaseParms_Callback, aReleaseDone_Callback);
                        }
                        catch( anException) {
                            aReleaseException_Callback = anException;
                        }
                        if( aReleaseException_Callback) {
                            var aReleaseExceptionDetails_Callback = this.fExceptionDetail( aReleaseException_Callback);
                            if( aReleaseExceptionDetails_Callback){}/* CQT */

                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGFAILEDCALLBACK, theSpecPath, null, aReleaseExceptionDetails_Callback);

                            return [ aReleaseExceptionDetails_Callback];
                        }

                        someReleasedIdentifyings_Callback = aReleaseDone_Callback[ theM_releasingconstants.RELEASEDONE_CALLBACKIDENTIFYINGS_FIELDNAME];
                    }

                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGOKCALLBACK, theSpecPath, null, null);
                }








                var aReleasedEventsSummary = null;

                if( theRecorder) {


                    if( theRecorder._pReleaseRecords && ( typeof theRecorder._pReleaseRecords == "function")) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGBEGINEVENTS, theSpecPath, null, null);

                        var someReleaseParms_Event = { };
                        someReleaseParms_Event[ theM_releasingconstants.RELEASEPARMS_RELEASEEVENTSSUMMARY_FIELDNAME] = true;
                        someReleaseParms_Event[ theM_releasingconstants.RELEASEPARMS_LOGRELEASEEVENTRECORDS_FIELDNAME] = true;
                        var aReleaseDone_Event  = { };
                        aReleaseDone_Event[ theM_releasingconstants.RELEASEDONE_EVENTSSUMMARY_FIELDNAME] = [ ];

                        var aReleaseException_Event = null;
                        try {
                            theRecorder._pReleaseRecords( someReleaseParms_Event, aReleaseDone_Event, theRecorderSnapshotBeforeTest, theRecorderSnapshotAfterTest);
                        }
                        catch( anException) {
                            aReleaseException_Event = anException;
                        }
                        if( aReleaseException_Event) {
                            var aReleaseExceptionDetails_Event = this.fExceptionDetail( aReleaseException_Event);
                            if( aReleaseExceptionDetails_Event){}/* CQT */

                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGFAILEDEVENTS, theSpecPath, null, aReleaseExceptionDetails_Event);

                            return [ aReleaseExceptionDetails_Event];
                        }

                        aReleasedEventsSummary = aReleaseDone_Event[ theM_releasingconstants.RELEASEDONE_EVENTSSUMMARY_FIELDNAME];
                    }

                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGOKEVENTS, theSpecPath, aReleasedEventsSummary, null);


                    if( this.PRETTYDUMPRELEASEDEVENTSSUMMARY) {
                        if( aReleasedEventsSummary) {

                            var aCleanedReleasedEventsSummary = this.fIndexChecks_Event( aReleasedEventsSummary);
                            if( aCleanedReleasedEventsSummary) {

                                var aCleanedReleasedEventsSummaryStr = null;
                                try {
                                    aCleanedReleasedEventsSummaryStr = JSON.stringify( aCleanedReleasedEventsSummary, null, 4);

                                }
                                catch( anException){}
                                if( !aCleanedReleasedEventsSummaryStr) {
                                    aCleanedReleasedEventsSummaryStr = "null";
                                }
                                else {
                                    aCleanedReleasedEventsSummaryStr = "\n" + aCleanedReleasedEventsSummaryStr  + "\n";
                                }

                                console.log( ', { "PRETTYDUMPRELEASEDEVENTSSUMMARY":' + aCleanedReleasedEventsSummaryStr + "}");
                            }
                        }
                    }
                }









                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGOK, theSpecPath, null, null);




                var someReleaseCheckReports = this.fReleaseCheckReports(
                    theLauncher,
                    theSpecPath,
                    theTest,
                    theConfiguration,
                    theCallback,
                    someCapturedChildrenBeforeRelease,
                    aTestReleasings,
                    someReleasedIdentifyings_Test,
                    someReleasedIdentifyings_Configuration,
                    someReleasedIdentifyings_Callback,
                    aReleasedEventsSummary
                );
                if( !someReleaseCheckReports) {
                    return null;
                }

                var aNumReleaseCheckReports = someReleaseCheckReports.length;
                if( !aNumReleaseCheckReports) {
                    return null;
                }

                return someReleaseCheckReports;
            };
            if( fTestReleasingChecks){}/* CQT */
            aPrototype.fTestReleasingChecks = fTestReleasingChecks;











            var fMustTestReleasingChecks = function( theSpecPath) {

                if( !theSpecPath) {
                    return false;
                }

                if( this._v_TestReleasingAll) {
                    return true;
                }

                if( !this._v_TestReleasingsByPath) {
                    return false;
                }

                var aTestReleasings = this._v_TestReleasingsByPath[ theSpecPath];

                var aHasAnyReleaseToCheckReleasingChecks = ( aTestReleasings && true) || false;
                if( aHasAnyReleaseToCheckReleasingChecks){}/* CQT */

                return aHasAnyReleaseToCheckReleasingChecks;
            };
            if( fMustTestReleasingChecks){}/* CQT */
            aPrototype.fMustTestReleasingChecks = fMustTestReleasingChecks;














            var fCapturesBeforeRelease = function( theSpecPath, theTestOrConfigurationOrCallback, theTestReleasings) {

                if( !theSpecPath) {
                    return null;
                }

                if( !theTestOrConfigurationOrCallback) {
                    return null;
                }


                var aCapturesBeforeRelease = this.fNewVoidCapturesBeforeRelease( theSpecPath, theTestOrConfigurationOrCallback, theTestReleasings);


                var someReleaseChildren = this.fCapturesBefore_ReleaseChildren( theSpecPath, theTestOrConfigurationOrCallback);
                if( someReleaseChildren) {
                    if( someReleaseChildren.length) {
                        aCapturesBeforeRelease[ "capturedChildren"] = someReleaseChildren;
                    }
                }


                var someForTestReleasings = this.fCapturesBefore_ForTestReleasings( theSpecPath, theTestOrConfigurationOrCallback);
                if( someForTestReleasings) {
                    if( someForTestReleasings.length) {
                        aCapturesBeforeRelease[ "capturedForTests"] = someForTestReleasings;
                    }
                }


                return aCapturesBeforeRelease;
            };
            if( fCapturesBeforeRelease){}/* CQT */
            aPrototype.fCapturesBeforeRelease = fCapturesBeforeRelease;









            var fCapturesBefore_ReleaseChildren = function( theSpecPath, theTestOrConfigurationOrCallback) {

                if( !theTestOrConfigurationOrCallback) {
                    return null;
                }

                if( !( theTestOrConfigurationOrCallback._fReleaseChildren && ( typeof theTestOrConfigurationOrCallback._fReleaseChildren == "function"))) {
                    return null;
                }

                var someReleaseChildren = theTestOrConfigurationOrCallback._fReleaseChildren();
                if( !someReleaseChildren) {
                    return null;
                }

                var aNumReleaseChildren = someReleaseChildren.length;
                if( !aNumReleaseChildren){
                    return null;
                }

                var someNonReleasedChildren = [ ];

                for( var aReleaseChildIdx=0; aReleaseChildIdx < aNumReleaseChildren; aReleaseChildIdx++) {
                    var aReleaseChild = someReleaseChildren[ aReleaseChildIdx];
                    if( aReleaseChild) {
                        if( aReleaseChild._v_Released) {
                            if( aReleaseChild._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                                continue;
                            }
                        }

                        someNonReleasedChildren.push( aReleaseChild);
                    }
                }

                return someNonReleasedChildren;
            };
            if( fCapturesBefore_ReleaseChildren){}/* CQT */
            aPrototype.fCapturesBefore_ReleaseChildren = fCapturesBefore_ReleaseChildren;









            var fCapturesBefore_ForTestReleasings = function( theSpecPath, theTest) {

                if( !theTest) {
                    return null;
                }

                return null;
            };
            if( fCapturesBefore_ForTestReleasings){}/* CQT */
            aPrototype.fCapturesBefore_ForTestReleasings = fCapturesBefore_ForTestReleasings;










            var fNewVoidCapturesBeforeRelease = function( theSpecPath, theTest, theTestReleasings) {

                var aCapturesBeforeRelease = {
                    "specPath":         theSpecPath,
                    "test":             theTest,
                    "capturedChildren": null,
                    "testReleasings":   theTestReleasings,
                    "capturedForTests": null
                };
                if( aCapturesBeforeRelease){}/* CQT */

                return aCapturesBeforeRelease;
            };
            if( fNewVoidCapturesBeforeRelease){}/* CQT */
            aPrototype.fNewVoidCapturesBeforeRelease = fNewVoidCapturesBeforeRelease;











            var fReleaseCheckReports = function(
                theLauncher,
                theSpecPath,
                theTest,
                theConfiguration,
                theCallback,
                theCapturedChildrenBeforeRelease,
                theTestReleasings,
                theReleasedIdentifyings_Test,
                theReleasedIdentifyings_Configuration,
                theReleasedIdentifyings_Callback,
                theReleasedEventsSummary) {

                var aMethodName = "fReleaseCheckReports";

                if( !theLauncher) {
                    return null;
                }

                if( !theSpecPath) {
                    return null;
                }

                if( !theTest && !theConfiguration  && !theCallback) {
                    return null;
                }


                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKBEGIN, null, null, null);


                var someReleaseCheckReports = this.fNewVoidCheckedReports();


                if( theCapturedChildrenBeforeRelease) {

                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKBEGINCAPTURED, theCapturedChildrenBeforeRelease.length, null, null);

                    var someCheckReportsFromCaptures = this.fReleaseCheckReportsFromChildren( theCapturedChildrenBeforeRelease);
                    if( someCheckReportsFromCaptures && someCheckReportsFromCaptures.length) {

                        Array.prototype.push.apply( someReleaseCheckReports, someCheckReportsFromCaptures);

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKFAILEDCAPTURED, someCheckReportsFromCaptures.length, null, someCheckReportsFromCaptures);
                    }
                    else {
                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKOKCAPTURED, theCapturedChildrenBeforeRelease.length, null, null);
                    }
                }





                if( theTestReleasings) {


                    if( theTest) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKBEGINTEST, theTest, null, null);

                        var someChecks_Test = theTestReleasings[ theM_releasingconstants.TESTRELEASING_FIELDNAME_CHECKTEST];
                        if( someChecks_Test) {
                            var someCheckReportsFromTestReleasings_Test = this.fReleaseCheckReportsFromTestReleasings(
                                theSpecPath,
                                theTestReleasings,
                                theReleasedIdentifyings_Test,
                                someChecks_Test
                            );
                            if( someCheckReportsFromTestReleasings_Test && someCheckReportsFromTestReleasings_Test.length) {

                                Array.prototype.push.apply( someReleaseCheckReports, someCheckReportsFromTestReleasings_Test);

                                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKFAILEDTEST, someCheckReportsFromTestReleasings_Test.length, null, someCheckReportsFromTestReleasings_Test);
                            }
                            else {
                                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKOKTEST, someChecks_Test.length, null, null);
                            }
                        }
                    }





                    if( theConfiguration) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKBEGINCONFIGURATION, theConfiguration, null, null);

                        var someChecks_Configuration = theTestReleasings[ theM_releasingconstants.TESTRELEASING_FIELDNAME_CHECKCONFIGURATION];
                        if( someChecks_Configuration) {
                            var someCheckReportsFromTestReleasings_Configuration = this.fReleaseCheckReportsFromTestReleasings(
                                theSpecPath,
                                theTestReleasings,
                                theReleasedIdentifyings_Configuration,
                                someChecks_Configuration
                            );
                            if( someCheckReportsFromTestReleasings_Configuration && someCheckReportsFromTestReleasings_Configuration.length) {

                                Array.prototype.push.apply( someReleaseCheckReports, someCheckReportsFromTestReleasings_Configuration);

                                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKFAILEDCONFIGURATION, someCheckReportsFromTestReleasings_Configuration.length, null, someCheckReportsFromTestReleasings_Configuration);
                            }
                            else {
                                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKOKCONFIGURATION, someChecks_Configuration.length, null, null);
                            }
                        }
                    }





                    if( theCallback) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKBEGINCALLBACK, theCallback, null, null);

                        var someChecks_Callback = theTestReleasings[ theM_releasingconstants.TESTRELEASING_FIELDNAME_CHECKCALLBACK];
                        if( someChecks_Callback) {
                            var someCheckReportsFromTestReleasings_Callback = this.fReleaseCheckReportsFromTestReleasings_Callback(
                                theSpecPath,
                                theTestReleasings,
                                theReleasedIdentifyings_Callback,
                                someChecks_Callback
                            );
                            if( someCheckReportsFromTestReleasings_Callback && someCheckReportsFromTestReleasings_Callback.length) {

                                Array.prototype.push.apply( someReleaseCheckReports, someCheckReportsFromTestReleasings_Callback);

                                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKFAILEDCALLBACK, someCheckReportsFromTestReleasings_Callback.length, null, someCheckReportsFromTestReleasings_Callback);
                            }
                            else {
                                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKOKCALLBACK, someChecks_Callback.length, null, null);
                            }
                        }
                    }




                    if( theReleasedEventsSummary) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKBEGINEVENT, null, null, null);

                        if( this.LOGEVENTSSUMMARY) {
                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKINFO, "theReleasedEventsSummary", null, theReleasedEventsSummary);
                        }

                        var aChecks_Event = theTestReleasings[ theM_releasingconstants.TESTRELEASING_FIELDNAME_CHECKEVENT];

                        if( aChecks_Event) {

                            aChecks_Event.fAsLogObject = fAsLogObject_Checks_Event.bind( aChecks_Event);

                            if( this.LOGCHECKSEVENT) {
                                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKINFO, "aChecks_Event", null, aChecks_Event);
                            }

                            var aCheckReportFromTestReleasings_Event = this.fReleaseCheckReportsFromTestReleasings_Event(
                                theSpecPath,
                                theTestReleasings,
                                theReleasedEventsSummary,
                                aChecks_Event
                            );
                            if( aCheckReportFromTestReleasings_Event) {

                                someReleaseCheckReports.push( aCheckReportFromTestReleasings_Event);

                                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKFAILEDEVENT, null, aCheckReportFromTestReleasings_Event, null);
                            }
                            else {
                                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKOKEVENT, null, null, null);
                            }
                        }
                    }
                }






                if( !someReleaseCheckReports.length) {

                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKOK, null, null, null);

                    return null;
                }


                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_RELEASINGCHECKFAILED, someReleaseCheckReports.length, null, null);

                return someReleaseCheckReports;
            };
            if( fReleaseCheckReports){}/* CQT */
            aPrototype.fReleaseCheckReports = fReleaseCheckReports;








            var fAsLogObject_CheckedReports = function() {
                return this;
            };





            var fNewVoidCheckedReports = function() {
                var someCheckReports = [ ];
                someCheckReports.fAsLogObject = fAsLogObject_CheckedReports.bind( someCheckReports);

                return someCheckReports;
            };
            if( fNewVoidCheckedReports){}/* CQT */
            aPrototype.fNewVoidCheckedReports = fNewVoidCheckedReports;










            var fReleaseCheckReportsFromChildren = function( theCapturedChildrenBeforeRelease) {

                if( !theCapturedChildrenBeforeRelease) {
                    return null;
                }

                var aNumCapturedChildren = theCapturedChildrenBeforeRelease.length;
                if( !aNumCapturedChildren) {
                    return null;
                }


                var someCheckReports = this.fNewVoidCheckedReports();


                for( var aCapturedChildIdx=0; aCapturedChildIdx < aNumCapturedChildren; aCapturedChildIdx++) {
                    var aCapturedChild = theCapturedChildrenBeforeRelease[ aCapturedChildIdx];
                    if( aCapturedChild) {

                        if( !aCapturedChild._v_Released) {

                            someCheckReports.push( aCapturedChild);
                            continue;
                        }

                        if( !( aCapturedChild._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL)) {
                            someCheckReports.push( aCapturedChild);
                        }
                    }
                }

                return someCheckReports;
            };
            if( fReleaseCheckReportsFromChildren){}/* CQT */
            aPrototype.fReleaseCheckReportsFromChildren = fReleaseCheckReportsFromChildren;













            var fReleaseCheckReportsFromTestReleasings = function(
                theSpecPath,
                theTestReleasings,
                theReleasedIdentifyings,
                theChecks) {

                if( !theSpecPath) {
                    return null;
                }

                if( !theChecks) {
                    return null;
                }

                var someChecksByType = this.fIndexChecks( theChecks);
                if( !someChecksByType) {
                    return null;
                }


                if( theReleasedIdentifyings) {

                    var aNumReleasedIdentifyings = theReleasedIdentifyings.length;
                    if( aNumReleasedIdentifyings) {

                        for( var aReleasedIdentifyingIdx=0; aReleasedIdentifyingIdx < aNumReleasedIdentifyings; aReleasedIdentifyingIdx++) {

                            var aReleasedIdentifying = theReleasedIdentifyings[ aReleasedIdentifyingIdx];
                            if( aReleasedIdentifying) {

                                var aType = aReleasedIdentifying[ "type"];
                                if( aType) {

                                    var aTitle =  aReleasedIdentifying[ "title"];
                                    if( aTitle) {

                                        var someTitlesOfType = someChecksByType[ aType];
                                        if( someTitlesOfType) {

                                            var aNumChecksOfTitle = someTitlesOfType[ aTitle];
                                            if( aNumChecksOfTitle) {

                                                aNumChecksOfTitle -= 1;
                                                if( aNumChecksOfTitle <= 0) {
                                                    delete someTitlesOfType[ aTitle]
                                                }
                                                else {
                                                    someTitlesOfType[ aTitle] = aNumChecksOfTitle;
                                                }
                                            }

                                            if( !Object.keys( someTitlesOfType).length) {
                                                delete someChecksByType[ aType]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                var someUncheckedCheckReports = this.fNewVoidCheckedReports();

                var someUncheckedTypes = Object.keys( someChecksByType);

                if( someUncheckedTypes) {

                    var aNumUncheckedTypes = someUncheckedTypes.length;
                    if( aNumUncheckedTypes) {

                        for( var aUncheckedTypeIdx=0; aUncheckedTypeIdx < aNumUncheckedTypes; aUncheckedTypeIdx++) {
                            
                            var aUncheckedType = someUncheckedTypes[ aUncheckedTypeIdx];
                            if( aUncheckedType) {

                                var someUncheckedTitlesOfType = someChecksByType[ aUncheckedType];
                                if( someUncheckedTitlesOfType) {

                                    var someUncheckedTitles = Object.keys( someUncheckedTitlesOfType);
                                    if( someUncheckedTitles) {

                                        var aNumUncheckedTitles = someUncheckedTitles.length;
                                        if( aNumUncheckedTitles) {

                                            for( var aUncheckedTitleIdx=0; aUncheckedTitleIdx < aNumUncheckedTitles; aUncheckedTitleIdx++) {

                                                var aUncheckedTitle = someUncheckedTitles[ aUncheckedTitleIdx];
                                                if( aUncheckedTitle) {

                                                    var aNumUncheckedOfTitle = someUncheckedTitlesOfType[ aUncheckedTitle];
                                                    if( aNumUncheckedOfTitle) {

                                                        var aCheckReport = this.fUncheckedReport( aUncheckedType, aUncheckedTitle);
                                                        if( aCheckReport) {
                                                            someUncheckedCheckReports.push( aCheckReport);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                if( !someUncheckedCheckReports.length) {
                    return null;
                }

                return someUncheckedCheckReports;
            };
            if( fReleaseCheckReportsFromTestReleasings){}/* CQT */
            aPrototype.fReleaseCheckReportsFromTestReleasings = fReleaseCheckReportsFromTestReleasings;













            var fIndexChecks = function( theChecks) {

                if( !theChecks) {
                    return null;
                }

                var aNumChecks = theChecks.length;
                if( !aNumChecks) {
                    return null;
                }

                var someChecksByType = { };

                for( var aCheckIdx=0; aCheckIdx < aNumChecks; aCheckIdx++) {
                    var aCheck = theChecks[ aCheckIdx];
                    if( aCheck) {
                        var aType = aCheck[ "type"];
                        if( aType) {

                            var aTitle = aCheck[ "title"];
                            if( aTitle) {

                                var someChecksOfType = someChecksByType[ aType];
                                if( !someChecksOfType) {
                                    someChecksOfType = { };
                                    someChecksByType[ aType] = someChecksOfType;
                                }

                                var aNumChecksOfTitle = someChecksOfType[ aTitle];
                                if( !aNumChecksOfTitle) {
                                    aNumChecksOfTitle = 0;
                                }
                                aNumChecksOfTitle += 1;
                                someChecksOfType[ aTitle] = aNumChecksOfTitle
                            }
                        }
                    }
                }

                return someChecksByType;
            };
            if( fIndexChecks){}/* CQT */
            aPrototype.fIndexChecks = fIndexChecks;














            var fReleaseCheckReportsFromTestReleasings_Callback = function(
                theSpecPath,
                theTestReleasings,
                theReleasedIdentifyings,
                theChecks) {

                if( !theSpecPath) {
                    return null;
                }

                if( !theTestReleasings) {
                    return null;
                }

                if( !theChecks) {
                    return null;
                }

                var someChecksByTitle = this.fIndexChecks_Callback( theChecks);
                if( !someChecksByTitle) {
                    return null;
                }


                if( theReleasedIdentifyings) {

                    var aNumReleasedIdentifyings = theReleasedIdentifyings.length;
                    if( aNumReleasedIdentifyings) {

                        for( var aReleasedIdentifyingIdx=0; aReleasedIdentifyingIdx < aNumReleasedIdentifyings; aReleasedIdentifyingIdx++) {

                            var aReleasedIdentifying = theReleasedIdentifyings[ aReleasedIdentifyingIdx];
                            if( aReleasedIdentifying) {

                                var aTitle =  aReleasedIdentifying[ "title"];
                                if( aTitle) {

                                    var someTypesOfTitle = someChecksByTitle[ aTitle];
                                    if( someTypesOfTitle) {

                                        var aCreatorType  = null;
                                        var aCreatorTitle = null;
                                        var aCreator = aReleasedIdentifying[ "creator"];
                                        if( aCreator) {
                                            aCreatorType = aCreator[ "type"];
                                            aCreatorTitle = aCreator[ "title"];
                                        }
                                        if( !aCreatorType) {
                                            aCreatorType = this.NOCREATORTYPE;
                                        }
                                        if( !aCreatorTitle) {
                                            aCreatorTitle = this.NOCREATORTITLE;
                                        }

                                        var someCreatorTitlesOfType = someTypesOfTitle[ aCreatorType];
                                        if( someCreatorTitlesOfType) {

                                            var aNumChecksOfCreatorTitle = someCreatorTitlesOfType[ aCreatorTitle];
                                            if( aNumChecksOfCreatorTitle) {

                                                aNumChecksOfCreatorTitle -= 1;

                                                if( aNumChecksOfCreatorTitle <= 0) {

                                                    delete someCreatorTitlesOfType[ aCreatorTitle];

                                                    if( !Object.keys( someCreatorTitlesOfType).length) {
                                                        delete someTypesOfTitle[ aCreatorType]
                                                    }

                                                    if( !Object.keys( someTypesOfTitle).length) {
                                                        delete someChecksByTitle[ aTitle]
                                                    }
                                                }
                                                else {
                                                    someCreatorTitlesOfType[ aCreatorTitle] = aNumChecksOfCreatorTitle;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                var someUncheckedCheckReports = this.fNewVoidCheckedReports();

                var someUncheckedTitles = Object.keys( someChecksByTitle);

                if( someUncheckedTitles) {

                    var aNumUncheckedTitles = someUncheckedTitles.length;
                    if( aNumUncheckedTitles) {

                        for( var aUncheckedTitleIdx=0; aUncheckedTitleIdx < aNumUncheckedTitles; aUncheckedTitleIdx++) {

                            var aUncheckedTitle = someUncheckedTitles[ aUncheckedTitleIdx];
                            if( aUncheckedTitle) {

                                var someUncheckedTypesAndCreatorsOfTitle = someChecksByTitle[ aUncheckedTitle];
                                if( someUncheckedTypesAndCreatorsOfTitle) {

                                    var someUncheckedCreatorTypes = Object.keys( someUncheckedTypesAndCreatorsOfTitle);
                                    if( someUncheckedCreatorTypes) {

                                        var aNumUncheckedCreatorTypes = someUncheckedCreatorTypes.length;
                                        if( aNumUncheckedCreatorTypes) {

                                            for( var aUncheckedCreatorTypeIdx=0; aUncheckedCreatorTypeIdx < aNumUncheckedCreatorTypes; aUncheckedCreatorTypeIdx++) {

                                                var aUncheckedCreatorType = someUncheckedCreatorTypes[ aUncheckedCreatorTypeIdx];
                                                if( aUncheckedCreatorType) {

                                                    var someUncheckedCreatorsOfType = someUncheckedTypesAndCreatorsOfTitle[ aUncheckedCreatorType];
                                                    if( someUncheckedCreatorsOfType) {

                                                        var someUncheckedCreatorTitles = Object.keys( someUncheckedCreatorsOfType);
                                                        if( someUncheckedCreatorTitles) {

                                                            var aNumUncheckedCreatorTitles = someUncheckedCreatorTitles.length;
                                                            if( aNumUncheckedCreatorTitles) {

                                                                for( var aUncheckedCreatorTitleIdx=0; aUncheckedCreatorTitleIdx < aNumUncheckedCreatorTitles; aUncheckedCreatorTitleIdx++) {

                                                                    var aUncheckedCreatorTitle = someUncheckedCreatorTitles[ aUncheckedCreatorTitleIdx];
                                                                    if( aUncheckedCreatorTitle) {

                                                                        var aNumUncheckedOfCreatorTitle = someUncheckedCreatorsOfType[ aUncheckedCreatorTitle];
                                                                        if( aNumUncheckedOfCreatorTitle) {

                                                                            var aCheckReport = this.fUncheckedReport_Callback( aUncheckedTitle, aUncheckedCreatorType, aUncheckedCreatorTitle);
                                                                            if( aCheckReport) {
                                                                                someUncheckedCheckReports.push( aCheckReport);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                if( !someUncheckedCheckReports.length) {
                    return null;
                }

                return someUncheckedCheckReports;
            };
            if( fReleaseCheckReportsFromTestReleasings_Callback){}/* CQT */
            aPrototype.fReleaseCheckReportsFromTestReleasings_Callback = fReleaseCheckReportsFromTestReleasings_Callback;











            var fIndexChecks_Callback = function( theChecks) {

                if( !theChecks) {
                    return null;
                }

                var aNumChecks = theChecks.length;
                if( !aNumChecks) {
                    return null;
                }

                var someChecksByTitle = { };

                for( var aCheckIdx=0; aCheckIdx < aNumChecks; aCheckIdx++) {
                    var aCheck = theChecks[ aCheckIdx];
                    if( aCheck) {

                        var aTitle = aCheck[ "title"];
                        if( aTitle) {

                            var someChecksOfTitle = someChecksByTitle[ aTitle];
                            if( !someChecksOfTitle) {
                                someChecksOfTitle = { };
                                someChecksByTitle[ aTitle] = someChecksOfTitle;
                            }

                            var aCreatorType = aCheck[ "creatorType"];
                            if( !aCreatorType) {
                                aCreatorType = this.NOCREATORTYPE;
                            }

                            var someChecksOfType = someChecksOfTitle[ aCreatorType];
                            if( !someChecksOfType) {
                                someChecksOfType = { };
                                someChecksOfTitle[ aCreatorType] = someChecksOfType;
                            }

                            var aCreatorTitle = aCheck[ "creatorTitle"];
                            if( !aCreatorTitle) {
                                aCreatorTitle = this.NOCREATORTITLE;
                            }

                            var aNumChecksOfCreatorTitle = someChecksOfType[ aCreatorTitle];
                            if( !aNumChecksOfCreatorTitle) {
                                aNumChecksOfCreatorTitle = 0;
                            }
                            aNumChecksOfCreatorTitle += 1;
                            someChecksOfType[ aCreatorTitle] = aNumChecksOfCreatorTitle
                        }
                    }
                }

                return someChecksByTitle;
            };
            if( fIndexChecks_Callback){}/* CQT */
            aPrototype.fIndexChecks_Callback = fIndexChecks_Callback;















            var fReleaseCheckReportsFromTestReleasings_Event = function(
                theSpecPath,
                theTestReleasings,
                theReleasedEventsSummary,
                theChecks) {

                if( !theSpecPath) {
                    return null;
                }

                if( !theTestReleasings) {
                    return null;
                }


                if( !theChecks) {
                    return null;
                }

                var someIndexedChecks = this.fIndexChecks_Event( theChecks);
                if( !someIndexedChecks) {
                    return null;
                }


                if( !theReleasedEventsSummary) {

                    return someIndexedChecks;
                }
                    
                    
                var someEventKinds = Object.keys( theReleasedEventsSummary);
                if( !someEventKinds) {
                    return someIndexedChecks;
                }
                        
                var aNumEventKinds = someEventKinds.length;
                if( !aNumEventKinds) {
                    return someIndexedChecks;
                }

                for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                    var anEventKind = someEventKinds[ anEventKindIdx];
                    if( !anEventKind) {
                        continue;
                    }

                    var anEventKindSummary = theReleasedEventsSummary[ anEventKind];
                    if( !anEventKindSummary) {
                        continue;
                    }

                    if( typeof anEventKindSummary == "function") {
                        continue;
                    }

                    var anEventKindCheck = someIndexedChecks[ anEventKind];
                    if( !anEventKindCheck) {
                        continue;
                    }


                    var anEventKindNumOwnEvents = anEventKindSummary[ "ownEvents"];
                    if( ( typeof anEventKindNumOwnEvents == "number") && anEventKindNumOwnEvents) {
                        anEventKindCheck[ "ownEvents"] -= anEventKindNumOwnEvents;
                    }

                    try {
                        var someChecksByRecordedType = anEventKindCheck[   "eventsByRecordedType"];
                        if( !someChecksByRecordedType) {
                            continue;
                        }

                        var someSummariesByRecordedType = anEventKindSummary[ "eventsByRecordedType"];
                        if( !someSummariesByRecordedType) {
                            continue;
                        }

                        var someRecordedTypes = Object.keys( someSummariesByRecordedType);
                        if( !someRecordedTypes) {
                            continue;
                        }


                        var aNumRecordedTypes = someRecordedTypes.length;
                        if( !aNumRecordedTypes) {
                            continue;
                        }


                        for( var aRecordedTypeIdx=0; aRecordedTypeIdx < aNumRecordedTypes; aRecordedTypeIdx++) {

                            var aRecordedType = someRecordedTypes[ aRecordedTypeIdx];
                            if( !aRecordedType) {
                                continue;
                            }

                            var aRecordedTypeSummary = someSummariesByRecordedType[ aRecordedType];
                            if( !aRecordedTypeSummary) {
                                continue;
                            }

                            var aRecordedTypeCheck = someChecksByRecordedType[ aRecordedType];
                            if( !aRecordedTypeCheck) {
                                continue;
                            }


                            var aRecordedTypeNumOwnEvents = aRecordedTypeSummary[ "ownEvents"];
                            if( ( typeof anEventKindNumOwnEvents == "number") && aRecordedTypeNumOwnEvents) {
                                aRecordedTypeCheck[ "ownEvents"] -= aRecordedTypeNumOwnEvents;
                            }


                            try {
                                var someChecksByStep = aRecordedTypeCheck[ "eventsByStep"];
                                if( !someChecksByStep) {
                                    continue;
                                }

                                var someSummariesByStep = aRecordedTypeSummary[ "eventsByStep"];
                                if( !someSummariesByStep) {
                                    continue;
                                }

                                var someSteps = Object.keys( someSummariesByStep);
                                if( !someSteps) {
                                    continue;
                                }


                                var aNumSteps = someSteps.length;
                                if( !aNumSteps) {
                                    continue;
                                }

                                for( var aStepIdx=0; aStepIdx < aNumSteps; aStepIdx++) {

                                    var aStep = someSteps[ aStepIdx];
                                    if( !aStep) {
                                        continue;
                                    }

                                    var aCheckStepNumEvents = someChecksByStep[ aStep];
                                    if( !( typeof aCheckStepNumEvents == "number")) {
                                        continue;
                                    }

                                    var aStepNumEvents = someSummariesByStep[ aStep];
                                    if( typeof aStepNumEvents == "number") {

                                        someChecksByStep[ aStep] -= aStepNumEvents;

                                        if( !someChecksByStep[ aStep]) {

                                            delete someChecksByStep[ aStep];
                                        }
                                    }
                                }

                            }
                            finally {
                                if( !aRecordedTypeCheck[ "eventsByStep"] || !Object.keys( aRecordedTypeCheck[ "eventsByStep"]).length) {

                                    if( aRecordedTypeCheck[ "eventsByStep"]) {
                                        delete aRecordedTypeCheck[ "eventsByStep"];
                                    }

                                    if( !aRecordedTypeCheck[ "ownEvents"]) {
                                        delete someChecksByRecordedType[ aRecordedType];
                                    }
                                }
                            }
                        }
                    }
                    finally {
                        if( !anEventKindCheck[ "eventsByRecordedType"] || !Object.keys( anEventKindCheck[ "eventsByRecordedType"]).length) {

                            if( anEventKindCheck[ "eventsByRecordedType"]) {
                                delete anEventKindCheck[ "eventsByRecordedType"];
                            }

                            if( !anEventKindCheck[ "ownEvents"]) {
                                delete someIndexedChecks[ anEventKind];
                            }
                        }
                    }
                }


                if( !Object.keys( someIndexedChecks).length) {
                    return null;
                }

                someIndexedChecks.fAsLogObject = fAsLogObject_Checks_Event.bind( someIndexedChecks);

                return someIndexedChecks;
            };
            if( fReleaseCheckReportsFromTestReleasings_Event){}/* CQT */
            aPrototype.fReleaseCheckReportsFromTestReleasings_Event = fReleaseCheckReportsFromTestReleasings_Event;











            var fIndexChecks_Event = function( theChecks) {

                if( !theChecks) {
                    return null;
                }


                var someIndexedChecks = { };

                var someEventKinds = Object.keys( theChecks);
                if( !someEventKinds) {
                    return someIndexedChecks;
                }


                var aNumEventKinds = someEventKinds.length;
                if( !aNumEventKinds) {
                    return someIndexedChecks;
                }


                for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                    var anEventKind = someEventKinds[ anEventKindIdx];
                    if( !anEventKind) {
                        continue;
                    }

                    if( anEventKind == theM_releasingconstants.RELEASEDONE_TOTALEVENTS_MAGIC_EVENTTYPE) {
                        continue;
                    }

                    var anEventKindCheck = theChecks[ anEventKind];
                    if( !anEventKindCheck) {
                        continue;
                    }

                    if( typeof anEventKindCheck == "function") {
                        continue;
                    }

                    var anIndexedEventKindCheck = { };
                    someIndexedChecks[ anEventKind] = anIndexedEventKindCheck;
                    
                    
                    var anEventKindNumOwnEvents = anEventKindCheck[ "ownEvents"];
                    if( !anEventKindNumOwnEvents) {
                        anEventKindNumOwnEvents = 0;
                    }
                    anIndexedEventKindCheck[ "ownEvents"] = anEventKindNumOwnEvents;




                    var someChecksByRecordedType    = anEventKindCheck[   "eventsByRecordedType"];
                    if( !someChecksByRecordedType) {
                        continue;
                    }

                    var someRecordedTypes = Object.keys( someChecksByRecordedType);
                    if( !someRecordedTypes) {
                        continue;
                    }

                    var aNumRecordedTypes = someRecordedTypes.length;
                    if( !aNumRecordedTypes) {
                        continue;
                    }

                    var someIndexedChecksByRecordedType = { };
                    anIndexedEventKindCheck[ "eventsByRecordedType"] = someIndexedChecksByRecordedType;
                    
                    
                    for( var aRecordedTypeIdx=0; aRecordedTypeIdx < aNumRecordedTypes; aRecordedTypeIdx++) {

                        var aRecordedType = someRecordedTypes[ aRecordedTypeIdx];
                        if( !aRecordedType) {
                            continue;
                        }

                        var aRecordedTypeCheck = someChecksByRecordedType[ aRecordedType];
                        if( !aRecordedTypeCheck) {
                            continue;
                        }

                        var anIndexedRecordedTypeCheck = { };
                        someIndexedChecksByRecordedType[ aRecordedType] = anIndexedRecordedTypeCheck;

                        var aRecordedTypeNumOwnEvents = aRecordedTypeCheck[ "ownEvents"];
                        if( !aRecordedTypeNumOwnEvents) {
                            aRecordedTypeNumOwnEvents = 0;
                        }
                        anIndexedRecordedTypeCheck[ "ownEvents"] = aRecordedTypeNumOwnEvents;



                        var someChecksByStep = aRecordedTypeCheck[ "eventsByStep"];
                        if( !someChecksByStep) {
                            continue;
                        }


                        var someSteps = Object.keys( someChecksByStep);
                        if( !someSteps) {
                            continue;
                        }

                        var aNumSteps = someSteps.length;
                        if( !aNumSteps) {
                            continue;
                        }


                        var someIndexedChecksByStep = { };
                        anIndexedRecordedTypeCheck[ "eventsByStep"] = someIndexedChecksByStep;

                        
                        for( var aStepIdx=0; aStepIdx < aNumSteps; aStepIdx++) {

                            var aStep = someSteps[ aStepIdx];
                            if( !aStep) {
                                continue;
                            }

                            var aStepNumEvents = someChecksByStep[ aStep];
                            if( !( typeof aStepNumEvents == "number")) {
                                continue;
                            }

                            if( !aStepNumEvents) {
                                continue;
                            }

                            someIndexedChecksByStep[ aStep] = aStepNumEvents;
                        }
                    }
                }


                return someIndexedChecks;
            };
            if( fIndexChecks_Event){}/* CQT */
            aPrototype.fIndexChecks_Event = fIndexChecks_Event;




















            var fAsLogObject_UncheckedReport = function() {
               return this;
            };







            var fUncheckedReport = function( theType, theTitle) {

                var aCheckReport = { "type": theType, "title": theTitle};
                aCheckReport.fAsLogObject = fAsLogObject_UncheckedReport.bind( aCheckReport);

                return aCheckReport;
            };
            if( fUncheckedReport){}/* CQT */
            aPrototype.fUncheckedReport = fUncheckedReport;








            var fUncheckedReport_Callback = function( theTitle, theCreatorType, theCreatorTitle) {

                var aCheckReport = { "title": theTitle, "creatorType": theCreatorType, "creatorTitle": theCreatorTitle};
                aCheckReport.fAsLogObject = fAsLogObject_UncheckedReport.bind( aCheckReport);

                return aCheckReport;
            };
            if( fUncheckedReport_Callback){}/* CQT */
            aPrototype.fUncheckedReport_Callback = fUncheckedReport_Callback;










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
                    "id":  this._v_ReleasingId
                };
                if( aIdentifiyingJSON){}/* CQT */

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;








            var fIdentifyingWithTitleJSON = function() {

                var aIdentifiyingJSON = this.fIdentifyingJSON();

                if( !( this._v_Title == null)) {
                    aIdentifiyingJSON.title = this._v_ReleasingTitle;
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







        var ReleasingChecker_Constructor = function( theId,
                                                     theTitle,
                                                     theReleaseOptions,
                                                     theReleaseTarget) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Id    = null;
            this._v_Title = null;

            this._v_ReleaseOptions = null;
            this._v_ReleaseTarget  = null;

            this._v_HasAttemptedToReadTestReleasing= null;

            this._v_TestReleasingAll       = null;
            this._v_TestReleasingFile      = null;
            this._v_TestReleasing          = null;
            this._v_TestReleasingsByPath   = null;

            this._pInit_ReleasingChecker( theId,
                                          theTitle,
                                          theReleaseOptions,
                                          theReleaseTarget);
        };
        ReleasingChecker_Constructor.prototype = aReleasingChecker_Prototype;







        var ReleasingChecker_SuperPrototypeConstructor = function() {
            this._v_Prototype = aReleasingChecker_Prototype;
            this._v_Type = null;

            this._v_Id    = null;
            this._v_Title = null;

            this._v_ReleaseOptions = null;
            this._v_ReleaseTarget  = null;

            this._v_HasAttemptedToReadTestReleasing= null;

            this._v_TestReleasingAll       = null;
            this._v_TestReleasingFile      = null;
            this._v_TestReleasing          = null;
            this._v_TestReleasingsByPath   = null;
        };
        ReleasingChecker_SuperPrototypeConstructor.prototype = aReleasingChecker_Prototype;





        var aModule = {
            "ReleasingChecker_Prototype": aReleasingChecker_Prototype,
            "ReleasingChecker_Constructor": ReleasingChecker_Constructor,
            "ReleasingChecker_SuperPrototypeConstructor": ReleasingChecker_SuperPrototypeConstructor
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

            var aM_releasingconstants           = require('./releasing-constants');
            var aM_exceptiondetails             = require('../exceptiondetails');
            var aM_specloader                   = require('../resloader/specloader');
            var aM_sentinels                    = require('../sentinels');
            var aM_overrider                    = require('../overrider');

            return aMod_definer(
                aM_releasingconstants,
                aM_exceptiondetails,
                aM_specloader,
                aM_sentinels,
                aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./releasing-constants",
            "../exceptiondetails",
            "../resloader/specloader",
            "../sentinels",
            "../overrider"
        ], function (
                theM_releasingconstants,
                theM_exceptiondetails,
                theM_specloader,
                theM_sentinels,
                theM_overrider
            ) {
            return aMod_definer(
                theM_releasingconstants,
                theM_exceptiondetails,
                theM_specloader,
                theM_sentinels,
                theM_overrider
            );
        });
    }

})();

