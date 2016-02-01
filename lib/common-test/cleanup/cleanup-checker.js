'use strict';

/*
 cleanup-checker.js
 Created 201504201336
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

    var aMod_definer = function( theM_cleanupconstants,
                                 theM_housekeepconstants,
                                 theM_housekeeputils,
                                 theM_exceptiondetails,
                                 theM_specloader,
                                 theM_sentinels,
                                 theM_overrider) {



        var ModuleName     = "cleanup-checker";
        var ModulePackages = "common-test/cleanup";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGCHECKSEVENT   = true;
            theToInit.LOGEVENTSSUMMARY = true;
            theToInit.PRETTYDUMPCLEANEDUPEVENTSSUMMARY = true;

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








        var aCleanUpChecker_Prototype = (function() {


            var aPrototype = {};
            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "CleanUpChecker";


            aPrototype._v_Id             = null;
            aPrototype._v_Title          = null;

            aPrototype._v_CleanUpOptions = null;
            aPrototype._v_CleanUpTarget  = null;

            aPrototype._v_HasAttemptedToReadTestCleanUp= null;
            aPrototype._v_IsVoidCleanUpChecker  = null;

            aPrototype._v_TestCleanUpAll       = null;
            aPrototype._v_TestCleanUpFile      = null;
            aPrototype._v_TestCleanUp          = null;
            aPrototype._v_TestCleanUpsByPath   = null;




            var _pInit = function( theId,
                                   theTitle,
                                   theCleanUpOptions,
                                   theCleanUpTarget) {

                this._pInit_CleanUpChecker( theId,
                                            theTitle,
                                            theCleanUpOptions,
                                            theCleanUpTarget);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_CleanUpChecker = function( theId,
                                                  theTitle,
                                                  theCleanUpOptions,
                                                  theCleanUpTarget) {
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

                this._v_CleanUpOptions  = theCleanUpOptions;
                this._v_CleanUpTarget   = theCleanUpTarget;

                this._v_HasAttemptedToReadTestCleanUp = false;
                this._v_IsVoidCleanUpChecker  = true;

                this._v_TestCleanUpAll  = false;
                if( this._v_CleanUpOptions) {
                    if( this._v_CleanUpOptions[ theM_cleanupconstants.CLEANUPOPTIONS_TESTCLEANUPALLPARMNAME]) {

                        this._v_TestCleanUpAll = true;

                        this._v_IsVoidCleanUpChecker  = false;
                    }
                }
                this._v_TestCleanUpFile        = null;
                this._v_TestCleanUp            = null;
                this._v_TestCleanUpsByPath     = { };

                if( this._v_CleanUpTarget){}/* CQT */
            };
            if( _pInit_CleanUpChecker){}/* CQT */
            aPrototype._pInit_CleanUpChecker = _pInit_CleanUpChecker;











            var _pRelease = function( theReleaseParms, theReleaseDone) {


                if( this._v_CleanedUp === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_CleanedUp = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;


                this._pRelease_ReleasingChecker( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ReleasingChecker = function( theReleaseParms, theReleaseDone) {
                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */

                this._v_Id = undefined;
                this._v_Title = undefined;

                this._v_CleanUpOptions = undefined;
                this._v_CleanUpTarget  = undefined;

                this._v_HasAttemptedToReadTestCleanUp = undefined;
                this._v_IsVoidCleanUpChecker  = undefined;

                this._v_TestCleanUpFile     = undefined;
                this._v_TestCleanUp         = undefined;
                this._v_TestCleanUpsByPath  = undefined;

            };
            if( _pRelease_ReleasingChecker){}/* CQT */
            aPrototype._pRelease_ReleasingChecker = _pRelease_ReleasingChecker;










            var pReadTestCleanUp = function() {

                if( this._v_HasAttemptedToReadTestCleanUp) {
                    return;
                }

                this._v_HasAttemptedToReadTestCleanUp = true;

                this._v_TestCleanUpFile = null;
                this._v_TestCleanUp     = null;

                if( !this._v_CleanUpOptions) {
                    return;
                }


                var aTestCleanUpFile = this._v_CleanUpOptions[ theM_cleanupconstants.CLEANUPOPTIONS_TESTCLEANUPFILEPARMNAME];
                if( !aTestCleanUpFile) {
                    return;
                }


                if( typeof aTestCleanUpFile == "object") {

                    this._v_TestCleanUpFile = aTestCleanUpFile;
                    this._v_TestCleanUp     = aTestCleanUpFile;

                    this._v_IsVoidCleanUpChecker  = false;

                    return;
                }


                if( !( typeof aTestCleanUpFile == "string")) {
                    return;
                }


                this._v_TestCleanUpFile = aTestCleanUpFile;


                var aTestCleanUp = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( this._v_TestCleanUpFile);
                if( aTestCleanUp == null) {
                    return;
                }


                if( !( typeof aTestCleanUp == "object")) {
                    return;
                }


                this._v_TestCleanUp = aTestCleanUp;


                if( !this._v_TestCleanUp.fAsLogObject) {
                    this._v_TestCleanUp.fAsLogObject = fTestCleanUp_fAsLogObject.bind( this._v_TestCleanUp);
                }


                if( this.fUpdateCleanUpOptionsFromReadTestCleanUp()) {

                    this._v_IsVoidCleanUpChecker  = false;
                }


                if( this.fInitTestCleanUpsByPathFromReadTestCleanUp()) {

                    this._v_IsVoidCleanUpChecker  = false;
                }

            };
            if( pReadTestCleanUp){}/* CQT */
            aPrototype.pReadTestCleanUp = pReadTestCleanUp;





            var fIsVoidCleanUpChecker = function() {
                return this._v_IsVoidCleanUpChecker;
            };
            if( fIsVoidCleanUpChecker){}/* CQT */
            aPrototype.fIsVoidCleanUpChecker = fIsVoidCleanUpChecker;






            var fTestCleanUp_fAsLogObject = function() {
                return this;
            };




            var fCleanUpOptions_fAsLogObject = function() {
                return this;
            };




            var fAsLogObject_Checks_Event = function() {
                return this;
            };






            var fUpdateCleanUpOptionsFromReadTestCleanUp = function() {

                if( !this._v_TestCleanUp) {
                    return false;
                }

                if( !this._v_CleanUpOptions) {
                    return false;
                }

                var someCleanUpOptionsFromTestCleanUp = this._v_TestCleanUp[ theM_cleanupconstants.TESTCLEANUPFILESECTION_CLEANUPOPTIONS];
                if( !someCleanUpOptionsFromTestCleanUp) {
                    return false;
                }


                var aAnyCleanUpOption = false;


                if( someCleanUpOptionsFromTestCleanUp[ theM_cleanupconstants.CLEANUPOPTIONS_TESTCLEANUPALLPARMNAME]) {
                    this._v_TestCleanUpAll = true;
                    aAnyCleanUpOption = true;
                }


                var aCleanUpOptions = this._v_CleanUpOptions;
                Object.keys( someCleanUpOptionsFromTestCleanUp).forEach( function( athKey) {
                    if( theM_cleanupconstants.TESTCLEANUPFILE_CLEANUPOPTIONS_VALIDKEYS.indexOf( athKey) >= 0) {
                        var aCleanUpOptionsFromTestCleanUp = someCleanUpOptionsFromTestCleanUp[ athKey];
                        if( !( aCleanUpOptionsFromTestCleanUp == null)) {
                            aCleanUpOptions[ athKey] = aCleanUpOptionsFromTestCleanUp;
                            aAnyCleanUpOption = true;
                        }
                    }
                });

                if( !this._v_CleanUpOptions.fAsLogObject) {
                    this._v_CleanUpOptions.fAsLogObject = fCleanUpOptions_fAsLogObject.bind( this._v_CleanUpOptions);
                }

                return aAnyCleanUpOption;

            };
            if( fUpdateCleanUpOptionsFromReadTestCleanUp){}/* CQT */
            aPrototype.fUpdateCleanUpOptionsFromReadTestCleanUp = fUpdateCleanUpOptionsFromReadTestCleanUp;













            var fInitTestCleanUpsByPathFromReadTestCleanUp = function() {

                if( !this._v_TestCleanUp) {
                    return false;
                }

                var someTestsCleanUp = this._v_TestCleanUp[ theM_cleanupconstants.TESTCLEANUPFILESECTION_CLEANUP];
                if( !someTestsCleanUp) {
                    return false;
                }

                var aNumTestsCleanUp = someTestsCleanUp.length;
                if( !aNumTestsCleanUp) {
                    return false;
                }

                var aAnyTestCleanUp = false;

                for( var aTestCleanUpIdx=0; aTestCleanUpIdx < aNumTestsCleanUp; aTestCleanUpIdx++) {

                    var aTestCleanUp = someTestsCleanUp[ aTestCleanUpIdx];
                    if( aTestCleanUp) {

                        var aTestCleanUpPath = aTestCleanUp[ theM_cleanupconstants.TESTCLEANUP_FIELDNAME_TESTNAME];
                        if( aTestCleanUpPath) {

                            this._v_TestCleanUpsByPath[ aTestCleanUpPath] = aTestCleanUp;
                            aAnyTestCleanUp = true;
                        }
                    }
                }

                return aAnyTestCleanUp;
            };
            if( fInitTestCleanUpsByPathFromReadTestCleanUp){}/* CQT */
            aPrototype.fInitTestCleanUpsByPathFromReadTestCleanUp = fInitTestCleanUpsByPathFromReadTestCleanUp;

















            var fTestCleanUpChecks = function( theLauncher,
                                                 theSpecPath,
                                                 theTest,
                                                 theConfiguration,
                                                 theCallback,
                                                 theRecorder,
                                                 theRecorderSnapshotBeforeTest,
                                                 theRecorderSnapshotAfterTest) {

                var aMethodName = "fTestCleanUpChecks";

                if( !theLauncher) {
                    return null;
                }

                if( !theSpecPath) {
                    return null;
                }

                if( !theTest && !theConfiguration && !theCallback && !theRecorder) {
                    return null;
                }




                var someWhatToClean = this.fWhatToCleanFromTests( theSpecPath);
                if( !someWhatToClean) {
                    return null;
                }

                var aNumWhatToClean = someWhatToClean.length;
                if( !aNumWhatToClean) {
                    return null;
                }





                var aHasAnyCleanUpToCheck = false;
                if( theTest ) {
                    if( theTest.pCleanUpTest && ( typeof theTest.pCleanUpTest == "function")) {
                        aHasAnyCleanUpToCheck = true;
                    }
                }

                if( !aHasAnyCleanUpToCheck) {
                    if( theConfiguration ) {
                        if( theConfiguration.pCleanUpTest && ( typeof theConfiguration.pCleanUpTest == "function")) {
                            aHasAnyCleanUpToCheck = true;
                        }
                    }
                }


                var aRootCallback = null;

                if( theCallback) {
                    if( theCallback.fRootCallback && ( typeof theCallback.fRootCallback == "function")) {
                        var aRootCallbackToAssertCleanUpFunction = theCallback.fRootCallback();
                        if( aRootCallbackToAssertCleanUpFunction) {
                            if( aRootCallbackToAssertCleanUpFunction.pCleanUpCallback && ( typeof aRootCallbackToAssertCleanUpFunction.pCleanUpCallback == "function")) {
                                aRootCallback = aRootCallbackToAssertCleanUpFunction;
                                if( !aHasAnyCleanUpToCheck) {
                                    aHasAnyCleanUpToCheck = true;
                                }
                            }
                        }
                    }

                }


                if( !aHasAnyCleanUpToCheck) {
                    if( theRecorder) {
                        if( theRecorder.pCleanUpRecords && ( typeof theRecorder.pCleanUpRecords == "function")) {
                            aHasAnyCleanUpToCheck = true;
                        }
                    }
                }


                if( !aHasAnyCleanUpToCheck) {
                    return null;
                }




                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREBEGIN, theSpecPath, someWhatToClean, null);


                var someCapturedChildrenBeforeCleanUp = [ ];


                for( var aWhatToCleanIdx=0; aWhatToCleanIdx < aNumWhatToClean; aWhatToCleanIdx++) {

                    var aWhatToClean = someWhatToClean[ aWhatToCleanIdx];
                    if( aWhatToClean) {

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREWHATBEGIN, theSpecPath, aWhatToClean, null);


                        var someChecksForWhatToClean = this.fChecksForWhatToClean( theSpecPath, aWhatToClean);

                        switch( aWhatToClean) {

                            case theM_housekeepconstants.WHATTOCLEAN_TESTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_TESTS:

                                if( theTest ) {
                                    if( theTest.pCleanUpTest && ( typeof theTest.pCleanUpTest == "function")) {

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREBEGINTEST, theSpecPath, aWhatToClean, null);

                                        var aNumCapturesBeforeCleanUp_Test = 0;
                                        var aCapturesBeforeCleanUp_Test = this.fCapturesBeforeCleanUp( theSpecPath, theTest, someChecksForWhatToClean);
                                        if( aCapturesBeforeCleanUp_Test) {
                                            var someCapturesBeforeCleanUp_Test = aCapturesBeforeCleanUp_Test [ "capturedChildren"];
                                            if( someCapturesBeforeCleanUp_Test) {
                                                aNumCapturesBeforeCleanUp_Test = someCapturesBeforeCleanUp_Test.length;
                                                if( aNumCapturesBeforeCleanUp_Test) {
                                                    Array.prototype.push.apply( someCapturedChildrenBeforeCleanUp, someCapturesBeforeCleanUp_Test);
                                                }
                                            }
                                        }
                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREOKTEST, theSpecPath, aWhatToClean, aNumCapturesBeforeCleanUp_Test);
                                    }
                                }
                                break;




                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGS:

                                if( theConfiguration) {
                                    if( theConfiguration.pCleanUpTest && ( typeof theConfiguration.pCleanUpTest == "function")) {

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREBEGINCONFIGURATION, theSpecPath, aWhatToClean, null);

                                        var aNumCapturesBeforeCleanUp_Configuration = 0;
                                        var aCapturesBeforeCleanUp_Configuration = this.fCapturesBeforeCleanUp( theSpecPath, theConfiguration, someChecksForWhatToClean);
                                        if( aCapturesBeforeCleanUp_Configuration) {
                                            var someCapturesBeforeCleanUp_Configuration = aCapturesBeforeCleanUp_Configuration[ "capturedChildren"];
                                            if( someCapturesBeforeCleanUp_Configuration) {
                                                aNumCapturesBeforeCleanUp_Configuration = someCapturesBeforeCleanUp_Configuration.length;
                                                if( aNumCapturesBeforeCleanUp_Configuration) {
                                                    Array.prototype.push.apply( someCapturedChildrenBeforeCleanUp, someCapturesBeforeCleanUp_Configuration);
                                                }
                                            }
                                        }
                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREOKCONFIGURATION, theSpecPath, aWhatToClean, aNumCapturesBeforeCleanUp_Configuration);
                                    }
                                }
                                break;




                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKS:

                                if( aRootCallback) {
                                    if( aRootCallback.pCleanUpCallback && ( typeof aRootCallback.pCleanUpCallback == "function")) {

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREBEGINCALLBACK, theSpecPath, aWhatToClean, null);

                                        var aNumCapturesBeforeCleanUp_Callback = 0;
                                        var aCapturesBeforeCleanUp_Callback = this.fCapturesBeforeCleanUp( theSpecPath, aRootCallback, someChecksForWhatToClean);
                                        if( aCapturesBeforeCleanUp_Callback) {
                                            var someCapturesBeforeCleanUp_Callback = aCapturesBeforeCleanUp_Callback[ "capturedChildren"];
                                            if( someCapturesBeforeCleanUp_Callback) {
                                                aNumCapturesBeforeCleanUp_Callback = someCapturesBeforeCleanUp_Callback.length;
                                                if( aNumCapturesBeforeCleanUp_Callback) {
                                                    Array.prototype.push.apply( someCapturedChildrenBeforeCleanUp, someCapturesBeforeCleanUp_Callback);
                                                }
                                            }
                                        }
                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREOKCALLBACK, theSpecPath, aWhatToClean, aNumCapturesBeforeCleanUp_Callback);
                                    }
                                }
                                break;




                            case theM_housekeepconstants.WHATTOCLEAN_EVENTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_EVENTS:

                                break;



                            default:

                        }


                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREWHATOK, theSpecPath, aWhatToClean, null);
                    }
                }


                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCAPTUREOK, theSpecPath, someWhatToClean, null);













                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPBEGIN, theSpecPath, someWhatToClean, null);



                var someCleanedUpByWhatToClean = { };


                for( var otherWhatToCleanIdx=0; otherWhatToCleanIdx < aNumWhatToClean; otherWhatToCleanIdx++) {

                    var otherWhatToClean = someWhatToClean[ otherWhatToCleanIdx];
                    if( otherWhatToClean) {


                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPWHATBEGIN, theSpecPath, otherWhatToClean, null);




                        switch( otherWhatToClean) {

                            case theM_housekeepconstants.WHATTOCLEAN_TESTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_TESTS:

                                if( theTest) {
                                    if( theTest.pCleanUpTest && ( typeof theTest.pCleanUpTest == "function")) {

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPBEGINTEST, theSpecPath, otherWhatToClean, null);

                                        var someCleanUpParms_Test = { };
                                        someCleanUpParms_Test[ theM_cleanupconstants.CLEANUPPARMS_REGISTERCLEANEDUPIDENTIFYINGS_FIELDNAME] = true;
                                        someCleanUpParms_Test[ theM_cleanupconstants.CLEANUPPARMS_LOGCLEANUPRECORDS_FIELDNAME] = false;
                                        var aCleanUpDone_Test  = { };
                                        aCleanUpDone_Test[ theM_cleanupconstants.CLEANEDUPONE_IDENTIFYINGS_FIELDNAME] = [ ];

                                        var aCleanUpException_Test = null;
                                        try {


                                            theTest.pCleanUpTest(
                                                [ otherWhatToClean],
                                                someCleanUpParms_Test,
                                                aCleanUpDone_Test
                                            );


                                        }
                                        catch( anException) {
                                            aCleanUpException_Test = anException;
                                        }
                                        if( aCleanUpException_Test) {
                                            var aCleanUpExceptionDetails_Test = this.fExceptionDetail( aCleanUpException_Test);
                                            if( aCleanUpExceptionDetails_Test){}/* CQT */

                                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPFAILEDTEST, theSpecPath, otherWhatToClean, aCleanUpExceptionDetails_Test);

                                            return [ aCleanUpExceptionDetails_Test];
                                        }

                                        var someCleanedUp_Test = aCleanUpDone_Test[ theM_cleanupconstants.CLEANEDUPONE_IDENTIFYINGS_FIELDNAME];
                                        if( someCleanedUp_Test){}/* CQT */

                                        someCleanedUpByWhatToClean[ otherWhatToClean] = someCleanedUp_Test;
                                    }

                                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPOKTEST, theSpecPath, otherWhatToClean, null);
                                }
                                break;




                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGS:

                                if( theConfiguration) {
                                    if( theConfiguration.pCleanUpTest && ( typeof theConfiguration.pCleanUpTest == "function")) {

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPBEGINCONFIGURATION, theSpecPath, otherWhatToClean, null);

                                        var someCleanUpParms_Configuration = { };
                                        someCleanUpParms_Configuration[ theM_cleanupconstants.CLEANUPPARMS_REGISTERCLEANEDUPIDENTIFYINGS_FIELDNAME] = true;
                                        someCleanUpParms_Configuration[ theM_cleanupconstants.CLEANUPPARMS_LOGCLEANUPRECORDS_FIELDNAME] = false;
                                        var aCleanUpDone_Configuration  = { };
                                        aCleanUpDone_Configuration[ theM_cleanupconstants.CLEANEDUPONE_IDENTIFYINGS_FIELDNAME] = [ ];

                                        var aCleanUpException_Configuration = null;
                                        try {

                                            theConfiguration.pCleanUpTest(
                                                [ otherWhatToClean],
                                                someCleanUpParms_Configuration,
                                                aCleanUpDone_Configuration
                                            );


                                        }
                                        catch( anException) {
                                            aCleanUpException_Configuration = anException;
                                        }
                                        if( aCleanUpException_Configuration) {
                                            var aCleanUpExceptionDetails_Configuration = this.fExceptionDetail( aCleanUpException_Configuration);
                                            if( aCleanUpExceptionDetails_Configuration){}/* CQT */

                                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPFAILEDCONFIGURATION, theSpecPath, otherWhatToClean, aCleanUpExceptionDetails_Configuration);

                                            return [ aCleanUpExceptionDetails_Configuration];
                                        }


                                        var someCleanedUp_Configuration = aCleanUpDone_Configuration[ theM_cleanupconstants.CLEANEDUPONE_IDENTIFYINGS_FIELDNAME];
                                        if( someCleanedUp_Configuration){}/* CQT */

                                        someCleanedUpByWhatToClean[ otherWhatToClean] = someCleanedUp_Configuration;
                                    }

                                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPOKCONFIGURATION, theSpecPath, otherWhatToClean, null);
                                }
                                break;




                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKS:

                                if( aRootCallback) {
                                    if( aRootCallback.pCleanUpCallback && ( typeof aRootCallback.pCleanUpCallback == "function")) {

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPBEGINCALLBACK, null, null, null);

                                        var someCleanUpParms_Callback = { };
                                        someCleanUpParms_Callback[ theM_cleanupconstants.CLEANUPPARMS_REGISTERCLEANEDUPCALLBACKIDENTIFYINGS_FIELDNAME] = true;
                                        someCleanUpParms_Callback[ theM_cleanupconstants.CLEANUPPARMS_LOGCLEANUPCALLBACKRECORDS_FIELDNAME] = true;
                                        var aCleanUpDone_Callback  = { };
                                        aCleanUpDone_Callback[ theM_cleanupconstants.CLEANEDUPONE_CALLBACKIDENTIFYINGS_FIELDNAME] = [ ];

                                        var aCleanUpException_Callback = null;
                                        try {


                                            aRootCallback.pCleanUpCallback(
                                                [ otherWhatToClean],
                                                someCleanUpParms_Callback,
                                                aCleanUpDone_Callback
                                            );

                                        }
                                        catch( anException) {
                                            aCleanUpException_Callback = anException;
                                        }
                                        if( aCleanUpException_Callback) {
                                            var aCleanUpExceptionDetails_Callback = this.fExceptionDetail( aCleanUpException_Callback);
                                            if( aCleanUpExceptionDetails_Callback){}/* CQT */

                                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPFAILEDCALLBACK, null, null, aCleanUpExceptionDetails_Callback);

                                            return [ aCleanUpExceptionDetails_Callback];
                                        }

                                        var someCleanedUp_Callback = aCleanUpDone_Callback[ theM_cleanupconstants.CLEANEDUPONE_CALLBACKIDENTIFYINGS_FIELDNAME];
                                        if( someCleanedUp_Callback){}/* CQT */

                                        someCleanedUpByWhatToClean[ otherWhatToClean] = someCleanedUp_Callback;
                                    }

                                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPOKCALLBACK, null, null, null);
                                }
                                break;




                            case theM_housekeepconstants.WHATTOCLEAN_EVENTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_EVENTS:
                                if( theRecorder) {

                                    var aCleanedUpEventsSummary = null;

                                    if( theRecorder.pCleanUpTestRecords && ( typeof theRecorder.pCleanUpTestRecords == "function")) {

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPBEGINEVENTS, null, null, null);

                                        var someCleanUpParms_Event = { };
                                        someCleanUpParms_Event[ theM_cleanupconstants.CLEANUPPARMS_CLEANUPEVENTSSUMMARY_FIELDNAME] = true;
                                        someCleanUpParms_Event[ theM_cleanupconstants.CLEANUPPARMS_LOGCLEANUPEVENTRECORDS_FIELDNAME] = true;
                                        var aCleanUpDone_Event  = { };
                                        aCleanUpDone_Event[ theM_cleanupconstants.CLEANEDUPONE_EVENTSSUMMARY_FIELDNAME] = null;

                                        var aCleanUpException_Event = null;
                                        try {


                                            theRecorder.pCleanUpTestRecords(
                                                [ otherWhatToClean],
                                                someCleanUpParms_Event,
                                                aCleanUpDone_Event,
                                                theRecorderSnapshotBeforeTest,
                                                theRecorderSnapshotAfterTest
                                            );


                                        }
                                        catch( anException) {
                                            aCleanUpException_Event = anException;
                                        }
                                        if( aCleanUpException_Event) {
                                            var aCleanUpExceptionDetails_Event = this.fExceptionDetail( aCleanUpException_Event);
                                            if( aCleanUpExceptionDetails_Event){}/* CQT */

                                            theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPFAILEDEVENTS, null, null, aCleanUpExceptionDetails_Event);

                                            return [ aCleanUpExceptionDetails_Event];
                                        }

                                        aCleanedUpEventsSummary = aCleanUpDone_Event[ theM_cleanupconstants.CLEANEDUPONE_EVENTSSUMMARY_FIELDNAME];

                                        someCleanedUpByWhatToClean[ otherWhatToClean] = aCleanedUpEventsSummary;
                                    }

                                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPOKEVENTS, aCleanedUpEventsSummary, null, null);


                                    if( this.PRETTYDUMPCLEANEDUPEVENTSSUMMARY) {
                                        if( aCleanedUpEventsSummary) {

                                            var anIndexedCleanedUpEventsSummary = this.fIndexChecks_Event( aCleanedUpEventsSummary);
                                            if( anIndexedCleanedUpEventsSummary) {

                                                var anIndexedCleanedUpEventsSummaryStr = null;
                                                try {
                                                    anIndexedCleanedUpEventsSummaryStr = JSON.stringify( anIndexedCleanedUpEventsSummary, null, 4);

                                                }
                                                catch( anException){}
                                                if( !anIndexedCleanedUpEventsSummaryStr) {
                                                    anIndexedCleanedUpEventsSummaryStr = "null";
                                                }
                                                else {
                                                    anIndexedCleanedUpEventsSummaryStr = "\n" + anIndexedCleanedUpEventsSummaryStr  + "\n";
                                                }

                                                console.log( ',{ "WHATTOCLEANUP": "' +  otherWhatToClean + '", "PRETTYDUMPCLEANEDUPEVENTSSUMMARY":' + anIndexedCleanedUpEventsSummaryStr + "}");
                                            }
                                        }
                                    }
                                }
                                break;



                            default:

                        }




                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPWHATOK, theSpecPath, otherWhatToClean, null);
                    }
                }


                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPOK, theSpecPath, someWhatToClean, null);







                var someCleanUpCheckReports = this.fCleanUpCheckReports(
                    theLauncher,
                    theSpecPath,
                    theTest,
                    theConfiguration,
                    aRootCallback,
                    theRecorder,
                    someCapturedChildrenBeforeCleanUp,
                    someWhatToClean,
                    someCleanedUpByWhatToClean
                );
                if( !someCleanUpCheckReports) {
                    return null;
                }

                var aNumCleanUpCheckReports = someCleanUpCheckReports.length;
                if( !aNumCleanUpCheckReports) {
                    return null;
                }

                return someCleanUpCheckReports;
            };
            if( fTestCleanUpChecks){}/* CQT */
            aPrototype.fTestCleanUpChecks = fTestCleanUpChecks;














            var fWhatToCleanFromTests = function( theSpecPath) {

                if( !theSpecPath) {
                    return null;
                }

                if( this._v_TestCleanUpAll) {
                    return theM_housekeepconstants.WHATTOCLEAN_ALL.slice();
                }


                if( !this._v_TestCleanUpsByPath) {
                    return null;
                }

                var aTestCleanUps = this._v_TestCleanUpsByPath[ theSpecPath];
                if( !aTestCleanUps) {
                    return null;
                }

                var someTestsByWhatToClean = aTestCleanUps[ theM_cleanupconstants.TESTCLEANUP_FIELDNAME_WHATTOCLEAN];
                if( !someTestsByWhatToClean) {
                    return null;
                }


                var someWhatToClean = [ ];

                var aNumAllWhatToClean = theM_housekeepconstants.WHATTOCLEAN_ALL.length;
                for( var aWhatToCleanIdx=0; aWhatToCleanIdx < aNumAllWhatToClean; aWhatToCleanIdx++) {

                    var aWhatToClean = theM_housekeepconstants.WHATTOCLEAN_ALL[ aWhatToCleanIdx];
                    if( aWhatToClean) {

                        var aTestsOfWhatToClean = someTestsByWhatToClean[ aWhatToClean];
                        if( aTestsOfWhatToClean) {
                            if( typeof aTestsOfWhatToClean == "object") {

                                someWhatToClean.push( aWhatToClean);
                            }
                        }
                    }
                }

                if( !someWhatToClean.length) {
                    return null;
                }

                return someWhatToClean;

            };
            if( fWhatToCleanFromTests){}/* CQT */
            aPrototype.fWhatToCleanFromTests = fWhatToCleanFromTests;












            var fChecksForWhatToClean = function( theSpecPath, theWhatToClean) {

                if( !theSpecPath) {
                    return null;
                }

                if( !theWhatToClean) {
                    return null;
                }

                if( !this._v_TestCleanUpsByPath) {
                    return null;
                }

                var aTestCleanUps = this._v_TestCleanUpsByPath[ theSpecPath];
                if( !aTestCleanUps) {
                    return null;
                }

                var someChecksByWhatToClean = aTestCleanUps[ theM_cleanupconstants.TESTCLEANUP_FIELDNAME_WHATTOCLEAN];
                if( !someChecksByWhatToClean) {
                    return null;
                }


                var someChecks = someChecksByWhatToClean[ theWhatToClean];
                if( !someChecks) {
                    return null;
                }

                if( !(typeof someChecks == "object")) {
                    return null;
                }

                return someChecks;

            };
            if( fChecksForWhatToClean){}/* CQT */
            aPrototype.fChecksForWhatToClean = fChecksForWhatToClean;




















            var fCapturesBeforeCleanUp = function( theSpecPath, theTestOrConfigurationOrCallback, theTestCleanUps) {

                if( !theSpecPath) {
                    return null;
                }

                if( !theTestOrConfigurationOrCallback) {
                    return null;
                }


                var aCapturesBeforeCleanUp = this.fNewVoidCapturesBeforeCleanUp( theSpecPath, theTestOrConfigurationOrCallback, theTestCleanUps);


                var someCleanUpChildren = this.fCapturesBefore_CleanUpChildren( theSpecPath, theTestOrConfigurationOrCallback);
                if( someCleanUpChildren) {
                    if( someCleanUpChildren.length) {
                        aCapturesBeforeCleanUp[ "capturedChildren"] = someCleanUpChildren;
                    }
                }


                var someForTestCleanUps = this.fCapturesBefore_ForTestCleanUps( theSpecPath, theTestOrConfigurationOrCallback);
                if( someForTestCleanUps) {
                    if( someForTestCleanUps.length) {
                        aCapturesBeforeCleanUp[ "capturedForTests"] = someForTestCleanUps;
                    }
                }


                return aCapturesBeforeCleanUp;
            };
            if( fCapturesBeforeCleanUp){}/* CQT */
            aPrototype.fCapturesBeforeCleanUp = fCapturesBeforeCleanUp;









            var fCapturesBefore_CleanUpChildren = function( theSpecPath, theTestOrConfigurationOrCallback) {

                if( !theTestOrConfigurationOrCallback) {
                    return null;
                }

                if( !( theTestOrConfigurationOrCallback.fCleanUpChildren && ( typeof theTestOrConfigurationOrCallback.fCleanUpChildren == "function"))) {
                    return null;
                }

                var someCleanUpChildren = theTestOrConfigurationOrCallback.fCleanUpChildren();
                if( !someCleanUpChildren) {
                    return null;
                }

                var aNumCleanUpChildren = someCleanUpChildren.length;
                if( !aNumCleanUpChildren){
                    return null;
                }

                var someNonCleanedUpChildren = [ ];

                for( var aCleanUpChildIdx=0; aCleanUpChildIdx < aNumCleanUpChildren; aCleanUpChildIdx++) {
                    var aCleanUpChild = someCleanUpChildren[ aCleanUpChildIdx];
                    if( aCleanUpChild) {
                        if( aCleanUpChild._v_CleanedUp) {
                            if( aCleanUpChild._v_CleanedUp === theM_cleanupconstants.HASBEENRELEASED_SINGLETONSENTINEL) {
                                continue;
                            }
                        }

                        someNonCleanedUpChildren.push( aCleanUpChild);
                    }
                }

                return someNonCleanedUpChildren;
            };
            if( fCapturesBefore_CleanUpChildren){}/* CQT */
            aPrototype.fCapturesBefore_CleanUpChildren = fCapturesBefore_CleanUpChildren;









            var fCapturesBefore_ForTestCleanUps = function( theSpecPath, theTest) {

                if( !theTest) {
                    return null;
                }

                return null;
            };
            if( fCapturesBefore_ForTestCleanUps){}/* CQT */
            aPrototype.fCapturesBefore_ForTestCleanUps = fCapturesBefore_ForTestCleanUps;










            var fNewVoidCapturesBeforeCleanUp = function( theSpecPath, theTest, theTestCleanUps) {

                var aCapturesBeforeCleanUp = {
                    "specPath":         theSpecPath,
                    "test":             theTest,
                    "capturedChildren": null,
                    "testCleanUps":   theTestCleanUps,
                    "capturedForTests": null
                };
                if( aCapturesBeforeCleanUp){}/* CQT */

                return aCapturesBeforeCleanUp;
            };
            if( fNewVoidCapturesBeforeCleanUp){}/* CQT */
            aPrototype.fNewVoidCapturesBeforeCleanUp = fNewVoidCapturesBeforeCleanUp;










            var fCleanUpCheckReports = function(
                theLauncher,
                theSpecPath,
                theTest,
                theConfiguration,
                theTopCallback,
                theRecorder,
                theCapturedChildrenBeforeCleanUp,
                theWhatToClean,
                theCleanedUpByWhatToClean) {

                var aMethodName = "fCleanUpCheckReports";

                if( !theLauncher) {
                    return null;
                }

                if( !theSpecPath) {
                    return null;
                }

                if( !theTest && !theConfiguration  && !theTopCallback && !theRecorder) {
                    return null;
                }



                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKBEGIN, null, null, null);


                var someCleanUpCheckReports = this.fNewVoidCheckedReports();


                if( theCapturedChildrenBeforeCleanUp) {

                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKBEGINCAPTURED, theCapturedChildrenBeforeCleanUp.length, null, null);

                    var someCheckReportsFromCaptures = this.fCleanUpCheckReportsFromChildren( theCapturedChildrenBeforeCleanUp);
                    if( someCheckReportsFromCaptures && someCheckReportsFromCaptures.length) {

                        Array.prototype.push.apply( someCleanUpCheckReports, someCheckReportsFromCaptures);

                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKFAILEDCAPTURED, someCheckReportsFromCaptures.length, null, someCheckReportsFromCaptures);
                    }
                    else {
                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKOKCAPTURED, theCapturedChildrenBeforeCleanUp.length, null, null);
                    }
                }





                if( !theWhatToClean) {
                    if( !someCleanUpCheckReports.length) {
                        return null;
                    }
                    return someCleanUpCheckReports;
                }



                var aNumWhatToClean = theWhatToClean.length;
                if( !aNumWhatToClean) {
                    if( !someCleanUpCheckReports.length) {
                        return null;
                    }
                    return someCleanUpCheckReports;
                }




                for( var aWhatToCleanIdx=0; aWhatToCleanIdx < aNumWhatToClean; aWhatToCleanIdx++) {

                    var aWhatToClean = theWhatToClean[ aWhatToCleanIdx];
                    if( aWhatToClean) {

                        var someChecksForWhatToClean = this.fChecksForWhatToClean( theSpecPath, aWhatToClean);
                        if( !someChecksForWhatToClean) {
                            continue;
                        }


                        var aNumChecksForWhatToClean    = 0;

                        switch( aWhatToClean) {

                            case theM_housekeepconstants.WHATTOCLEAN_TESTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_TESTS:
                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGS:
                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKS:
                                aNumChecksForWhatToClean = someChecksForWhatToClean.length;
                                break;


                            case theM_housekeepconstants.WHATTOCLEAN_EVENTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_EVENTS:
                                aNumChecksForWhatToClean = Object.keys( someChecksForWhatToClean).length;
                                break;

                            default:
                        }
                        if( !aNumChecksForWhatToClean) {
                            continue;
                        }



                        var someCleanedUpForWhatToClean = theCleanedUpByWhatToClean[ aWhatToClean];
                        if( !someCleanedUpForWhatToClean) {
                            Array.prototype.push.apply( someCleanUpCheckReports, someChecksForWhatToClean);
                            continue;
                        }


                        var aNumCleanedUpForWhatToClean = 0;
                        switch( aWhatToClean) {

                            case theM_housekeepconstants.WHATTOCLEAN_TESTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_TESTS:
                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGS:
                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKS:
                                aNumCleanedUpForWhatToClean = someCleanedUpForWhatToClean.length;
                                break;


                            case theM_housekeepconstants.WHATTOCLEAN_EVENTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_EVENTS:
                                aNumCleanedUpForWhatToClean = Object.keys( someCleanedUpForWhatToClean).length;
                                break;

                            default:
                        }
                        if( !aNumCleanedUpForWhatToClean) {
                            Array.prototype.push.apply( someCleanUpCheckReports, someChecksForWhatToClean);
                            continue;
                        }






                        switch( aWhatToClean) {

                            case theM_housekeepconstants.WHATTOCLEAN_TESTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_TESTS:

                                if( theTest) {

                                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKBEGINTEST, theTest, null, null);

                                    var someCheckReportsFromTestCleanUps_Test = this.fCleanUpCheckReportsFromTestCleanUps(
                                        theSpecPath,
                                        someChecksForWhatToClean,
                                        someCleanedUpForWhatToClean
                                    );
                                    if( someCheckReportsFromTestCleanUps_Test && someCheckReportsFromTestCleanUps_Test.length) {

                                        Array.prototype.push.apply( someCleanUpCheckReports, someCheckReportsFromTestCleanUps_Test);

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKFAILEDTEST, someCheckReportsFromTestCleanUps_Test.length, null, someCheckReportsFromTestCleanUps_Test);
                                    }
                                    else {
                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKOKTEST, someChecksForWhatToClean.length, null, null);
                                    }
                                }
                                break;




                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CONFIGS:

                                if( theConfiguration) {

                                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKBEGINCONFIGURATION, theConfiguration, null, null);

                                    var someCheckReportsFromTestCleanUps_Configuration = this.fCleanUpCheckReportsFromTestCleanUps(
                                        theSpecPath,
                                        someChecksForWhatToClean,
                                        someCleanedUpForWhatToClean
                                    );
                                    if( someCheckReportsFromTestCleanUps_Configuration && someCheckReportsFromTestCleanUps_Configuration.length) {

                                        Array.prototype.push.apply( someCleanUpCheckReports, someCheckReportsFromTestCleanUps_Configuration);

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKFAILEDCONFIGURATION, someCheckReportsFromTestCleanUps_Configuration.length, null, someCheckReportsFromTestCleanUps_Configuration);
                                    }
                                    else {
                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKOKCONFIGURATION, someChecksForWhatToClean.length, null, null);
                                    }
                                }
                                break;




                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_CALLBACKS:

                                if( theTopCallback) {

                                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKBEGINCALLBACK, theTopCallback, null, null);

                                    var someCheckReportsFromTestCleanUps_Callback = this.fCleanUpCheckReportsFromTestCleanUps_Callback(
                                        theSpecPath,
                                        someChecksForWhatToClean,
                                        someCleanedUpForWhatToClean
                                    );
                                    if( someCheckReportsFromTestCleanUps_Callback && someCheckReportsFromTestCleanUps_Callback.length) {

                                        Array.prototype.push.apply( someCleanUpCheckReports, someCheckReportsFromTestCleanUps_Callback);

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKFAILEDCALLBACK, someCheckReportsFromTestCleanUps_Callback.length, null, someCheckReportsFromTestCleanUps_Callback);
                                    }
                                    else {
                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKOKCALLBACK, someChecksForWhatToClean.length, null, null);
                                    }
                                }
                                break;




                            case theM_housekeepconstants.WHATTOCLEAN_EVENTSPAYLOADS:
                            case theM_housekeepconstants.WHATTOCLEAN_EVENTS:

                                if( theRecorder) {

                                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKBEGINEVENT, theRecorder, null, null);

                                    var aCheckReportFromTestCleanUps_Event = this.fCleanUpCheckReportsFromTestCleanUps_Event(
                                        theSpecPath,
                                        someChecksForWhatToClean,
                                        someCleanedUpForWhatToClean
                                    );
                                    if( aCheckReportFromTestCleanUps_Event) {

                                        someCleanUpCheckReports.push( aCheckReportFromTestCleanUps_Event);

                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKFAILEDEVENT, null, aCheckReportFromTestCleanUps_Event, null);
                                    }
                                    else {
                                        theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKOKEVENT, null, null, null);
                                    }
                                }
                                break;



                            default:

                        }

                    }
                }


                if( !someCleanUpCheckReports.length) {

                    theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKOK, null, null, null);

                    return null;
                }


                theLauncher.fRecord( this._v_Type, this._v_Id, this, aMethodName, theLauncher.LAUEVKIND_CLEANUPCHECKFAILED, someCleanUpCheckReports.length, null, null);

                return someCleanUpCheckReports;
            };
            if( fCleanUpCheckReports){}/* CQT */
            aPrototype.fCleanUpCheckReports = fCleanUpCheckReports;








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










            var fCleanUpCheckReportsFromChildren = function( theCapturedChildrenBeforeCleanUp) {

                if( !theCapturedChildrenBeforeCleanUp) {
                    return null;
                }

                var aNumCapturedChildren = theCapturedChildrenBeforeCleanUp.length;
                if( !aNumCapturedChildren) {
                    return null;
                }


                var someCheckReports = this.fNewVoidCheckedReports();


                for( var aCapturedChildIdx=0; aCapturedChildIdx < aNumCapturedChildren; aCapturedChildIdx++) {
                    var aCapturedChild = theCapturedChildrenBeforeCleanUp[ aCapturedChildIdx];
                    if( aCapturedChild) {

                        if( !aCapturedChild._v_CleanedUp) {

                            someCheckReports.push( aCapturedChild);
                            continue;
                        }

                        if( !( aCapturedChild._v_CleanedUp === theM_cleanupconstants.HASBEENRELEASED_SINGLETONSENTINEL)) {
                            someCheckReports.push( aCapturedChild);
                        }
                    }
                }

                return someCheckReports;
            };
            if( fCleanUpCheckReportsFromChildren){}/* CQT */
            aPrototype.fCleanUpCheckReportsFromChildren = fCleanUpCheckReportsFromChildren;










            var fCleanUpCheckReportsFromTestCleanUps = function(
                theSpecPath,
                theChecks,
                theCleanedUpIdentifyings) {

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


                if( theCleanedUpIdentifyings) {

                    var aNumCleanedUpIdentifyings = theCleanedUpIdentifyings.length;
                    if( aNumCleanedUpIdentifyings) {

                        for( var aCleanedUpIdentifyingIdx=0; aCleanedUpIdentifyingIdx < aNumCleanedUpIdentifyings; aCleanedUpIdentifyingIdx++) {

                            var aCleanedUpIdentifying = theCleanedUpIdentifyings[ aCleanedUpIdentifyingIdx];
                            if( aCleanedUpIdentifying) {

                                var aType = aCleanedUpIdentifying[ "type"];
                                if( aType) {

                                    var aTitle =  aCleanedUpIdentifying[ "title"];
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
            if( fCleanUpCheckReportsFromTestCleanUps){}/* CQT */
            aPrototype.fCleanUpCheckReportsFromTestCleanUps = fCleanUpCheckReportsFromTestCleanUps;













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














            var fCleanUpCheckReportsFromTestCleanUps_Callback = function(
                theSpecPath,
                theChecks,
                theCleanedUpIdentifyings) {

                if( !theSpecPath) {
                    return null;
                }

                if( !theChecks) {
                    return null;
                }

                var someChecksByTitle = this.fIndexChecks_Callback( theChecks);
                if( !someChecksByTitle) {
                    return null;
                }


                if( theCleanedUpIdentifyings) {

                    var aNumCleanedUpIdentifyings = theCleanedUpIdentifyings.length;
                    if( aNumCleanedUpIdentifyings) {

                        for( var aCleanedUpIdentifyingIdx=0; aCleanedUpIdentifyingIdx < aNumCleanedUpIdentifyings; aCleanedUpIdentifyingIdx++) {

                            var aCleanedUpIdentifying = theCleanedUpIdentifyings[ aCleanedUpIdentifyingIdx];
                            if( aCleanedUpIdentifying) {

                                var aTitle =  aCleanedUpIdentifying[ "title"];
                                if( aTitle) {

                                    var someTypesOfTitle = someChecksByTitle[ aTitle];
                                    if( someTypesOfTitle) {

                                        var aCreatorType  = null;
                                        var aCreatorTitle = null;
                                        var aCreator = aCleanedUpIdentifying[ "creator"];
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
            if( fCleanUpCheckReportsFromTestCleanUps_Callback){}/* CQT */
            aPrototype.fCleanUpCheckReportsFromTestCleanUps_Callback = fCleanUpCheckReportsFromTestCleanUps_Callback;











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










            var fCleanUpCheckReportsFromTestCleanUps_Event = function(
                theSpecPath,
                theChecks,
                theCleanedUpEventsSummary) {

                if( !theSpecPath) {
                    return null;
                }

                if( !theChecks) {
                    return null;
                }

                var someIndexedChecks = this.fIndexChecks_Event( theChecks);
                if( !someIndexedChecks) {
                    return null;
                }


                if( !theCleanedUpEventsSummary) {

                    return someIndexedChecks;
                }
                    
                    
                var someEventKinds = Object.keys( theCleanedUpEventsSummary);
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

                    var anEventKindSummary = theCleanedUpEventsSummary[ anEventKind];
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
            if( fCleanUpCheckReportsFromTestCleanUps_Event){}/* CQT */
            aPrototype.fCleanUpCheckReportsFromTestCleanUps_Event = fCleanUpCheckReportsFromTestCleanUps_Event;











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

                    if( anEventKind == theM_cleanupconstants.CLEANEDUPONE_TOTALEVENTS_MAGIC_EVENTTYPE) {
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
                    "id":  this._v_CleanUpId
                };
                if( aIdentifiyingJSON){}/* CQT */

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;








            var fIdentifyingWithTitleJSON = function() {

                var aIdentifiyingJSON = this.fIdentifyingJSON();

                if( !( this._v_Title == null)) {
                    aIdentifiyingJSON.title = this._v_CleanUpTitle;
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







        var CleanUpChecker_Constructor = function( theId,
                                                     theTitle,
                                                     theCleanUpOptions,
                                                     theCleanUpTarget) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Id    = null;
            this._v_Title = null;

            this._v_CleanUpOptions = null;
            this._v_CleanUpTarget  = null;

            this._v_HasAttemptedToReadTestCleanUp= null;

            this._v_TestCleanUpAll       = null;
            this._v_TestCleanUpFile      = null;
            this._v_TestCleanUp          = null;
            this._v_TestCleanUpsByPath   = null;

            this._pInit_CleanUpChecker( theId,
                                          theTitle,
                                          theCleanUpOptions,
                                          theCleanUpTarget);
        };
        CleanUpChecker_Constructor.prototype = aCleanUpChecker_Prototype;







        var CleanUpChecker_SuperPrototypeConstructor = function() {
            this._v_Prototype = aCleanUpChecker_Prototype;
            this._v_Type = null;

            this._v_Id    = null;
            this._v_Title = null;

            this._v_CleanUpOptions = null;
            this._v_CleanUpTarget  = null;

            this._v_HasAttemptedToReadTestCleanUp= null;

            this._v_TestCleanUpAll       = null;
            this._v_TestCleanUpFile      = null;
            this._v_TestCleanUp          = null;
            this._v_TestCleanUpsByPath   = null;
        };
        CleanUpChecker_SuperPrototypeConstructor.prototype = aCleanUpChecker_Prototype;





        var aModule = {
            "CleanUpChecker_Prototype": aCleanUpChecker_Prototype,
            "CleanUpChecker_Constructor": CleanUpChecker_Constructor,
            "CleanUpChecker_SuperPrototypeConstructor": CleanUpChecker_SuperPrototypeConstructor
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

            var aM_cleanupconstants             = require('./cleanup-constants');
            var aM_housekeepconstants           = require('../housekeep/housekeep-constants');
            var aM_housekeeputils               = require('../housekeep/housekeep-utils');
            var aM_exceptiondetails             = require('../exceptiondetails');
            var aM_specloader                   = require('../resloader/specloader');
            var aM_sentinels                    = require('../sentinels');
            var aM_overrider                    = require('../overrider');


            return aMod_definer(
                aM_cleanupconstants,
                aM_housekeepconstants,
                aM_housekeeputils,
                aM_exceptiondetails,
                aM_specloader,
                aM_sentinels,
                aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./cleanup-constants",
            "../housekeep/housekeep-constants",
            "../housekeep/housekeep-utils",
            "../exceptiondetails",
            "../resloader/specloader",
            "../sentinels",
            "../overrider"
        ], function (
                theM_cleanupconstants,
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_exceptiondetails,
                theM_specloader,
                theM_sentinels,
                theM_overrider
            ) {
            return aMod_definer(
                theM_cleanupconstants,
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_exceptiondetails,
                theM_specloader,
                theM_sentinels,
                theM_overrider
            );
        });
    }

})();

