'use strict';

/*
 runrequireds-test.js
 Creado 201409052115
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
    var aMod_definer =function(
        theM_nextticker,
        theM_runnable_test,
        theM_runrequired_test,
        theM_exportparm) {

        var ModuleName     = "runrequireds-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }

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










        var aRunRequiredsTest_Prototype = (function() {


            var aPrototype = new theM_runnable_test.RunnableTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = theM_runnable_test.RunnableTest_Prototype;

            aPrototype._v_Type = "RunRequiredsTest";

            aPrototype._v_Prototype_RunRequiredsTest = aPrototype;



            aPrototype._v_RequiredsAlreadyScheduled = null;

            aPrototype._v_RequiredTests = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_RunRequireds( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_RunRequireds = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Runnable.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_RequiredsAlreadyScheduled = [ ];

                this._v_RequiredTests = [ ];

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_RunRequireds", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_RunRequireds){}/* CQT */
            aPrototype._pInit_RunRequireds = _pInit_RunRequireds;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_RunRequireds( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_RunRequireds = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_RequiredsAlreadyScheduled = undefined;


                if( this._v_RequiredTests) {
                    var aNumRequiredTests = this._v_RequiredTests.length;
                    if( aNumRequiredTests) {
                        for( var aRequiredTestIdx=0; aRequiredTestIdx < aNumRequiredTests; aRequiredTestIdx++) {
                            var aRequiredTest = this._v_RequiredTests[ aRequiredTestIdx];
                            if( aRequiredTest) {
                                if( typeof aRequiredTest._pRelease == "function") {
                                    aRequiredTest._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }

                this._v_RequiredTests = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Runnable.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_RunRequireds){}/* CQT */
            aPrototype._pRelease_RunRequireds = _pRelease_RunRequireds;











            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_RunRequireds( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_RunRequireds = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {

                    if( this._v_RequiredTests) {
                        var aNumRequiredTests = this._v_RequiredTests.length;
                        if( aNumRequiredTests) {
                            for( var aRequiredTestIdx=0; aRequiredTestIdx < aNumRequiredTests; aRequiredTestIdx++) {
                                var aRequiredTest = this._v_RequiredTests[ aRequiredTestIdx];
                                if( aRequiredTest) {
                                    if( typeof aRequiredTest.pCleanUpTest == "function") {
                                        aRequiredTest.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Runnable.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_RunRequireds){}/* CQT */
            aPrototype.pCleanUpTest_RunRequireds = pCleanUpTest_RunRequireds;














            var pAddRequiredTest = function( theRequiredTest) {
                if( !theRequiredTest) {
                    return;
                }

                if( this._v_RequiredTests.indexOf( theRequiredTest) < 0) {
                    this._v_RequiredTests.push( theRequiredTest);
                }
            };
            if( pAddRequiredTest){}/* CQT */
            aPrototype.pAddRequiredTest = pAddRequiredTest;








            var fRunRequiredsCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_REQUIREDS_FAIL, null, theError, null));
                        return;
                    }

                    var aSuccessRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_REQUIREDS_OK, null, null, null);

                    if( aThis.fHandleForceError( aThis.EVENTKIND_REQUIREDS_OK, theCallback, aSuccessRecord)) {
                        return;
                    }

                    theCallback( null, aSuccessRecord);


                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fRunRequiredsCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fRunRequiredsCallback){}/* CQT */
            aPrototype.fRunRequiredsCallback = fRunRequiredsCallback;









            var fExceptionRequiredsHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_REQUIREDS_FAIL, null, "null Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_REQUIREDS_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionRequiredsHandler){}/* CQT */
            aPrototype.fExceptionRequiredsHandler = fExceptionRequiredsHandler;












            var pInitFinderToScheduleNextRequired = function() {
                this._v_RequiredsAlreadyScheduled = [ ];
            };
            if( pInitFinderToScheduleNextRequired){}/* CQT */
            aPrototype.pInitFinderToScheduleNextRequired = pInitFinderToScheduleNextRequired;








            var pTryToScheduleNextRequired = function( theCallback) {
                var aMethodName = "pTryToScheduleNextRequired";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_REQUIREDS_FINDNEXT, null, null, null);}

                if( !this._v_Configuration) {
                    return;
                }


                var aRequiredToScheduleNext = this.fFindRequiredToScheduleNext();
                if( !aRequiredToScheduleNext) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_REQUIREDS_NOMORE, null, null, null));
                    return;
                }

                if( aRequiredToScheduleNext == this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_REQUIREDS_FAIL, null, "aConfigurationToScheduleNext == this._v_Configuration", null));
                    return;
                }



                var aRunRequiredTest = new theM_runrequired_test.RunRequiredTest_Constructor(
                    aRequiredToScheduleNext._v_Title, aRequiredToScheduleNext, this._v_Identifier, this._v_Recorder
                );

                this.pAddRequiredTest( aRunRequiredTest);




                var aTestMethod = aRunRequiredTest.pSS_RunSuppliers;
                if( !aTestMethod) {
                    return;
                }

                var aBoundTestMethod = aTestMethod.bind( aRunRequiredTest);
                if( aBoundTestMethod){}/* CQT */



                var aCallback = this.fScheduleNextRequiredCallback( theCallback);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_REQUIREDS_FAIL, null, "!this.fScheduleNextRequiredCallback( theCallback)", null));
                    return;
                }





                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextRequiredHandler( aCallback);

                theM_nextticker.pNextTick( function() {
                    try {
                        aBoundTestMethod( aCallback);
                    }
                    catch( anException) {
                        anExceptionHandler( anException);
                    }
                });



            };
            if( pTryToScheduleNextRequired){}/* CQT */
            aPrototype.pTryToScheduleNextRequired = pTryToScheduleNextRequired;











            var fFindRequiredToScheduleNext = function() {

                if( !this._v_Configuration) {
                    return null;
                }

                var someRequireds = this._v_Configuration.fRequiredsWithImportedRequireds();
                if( someRequireds && someRequireds.length) {

                    var aPendingRequired = null;

                    var aNumRequireds = someRequireds.length;
                    for( var aRequiredIdx=0; aRequiredIdx < aNumRequireds; aRequiredIdx++) {

                        var aRequired = someRequireds[ aRequiredIdx];

                        if( this._v_RequiredsAlreadyScheduled.indexOf( aRequired) < 0) {
                            aPendingRequired = aRequired;
                            break;
                        }
                    }

                    if( aPendingRequired) {
                        this._v_RequiredsAlreadyScheduled.push( aPendingRequired);
                        if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, "fFindRequiredToScheduleNext", this.EVENTKIND_INFO, aPendingRequired, "FOUND Required", null);}
                        return aPendingRequired;
                    }
                }

                return null;
            };
            if( fFindRequiredToScheduleNext){}/* CQT */
            aPrototype.fFindRequiredToScheduleNext = fFindRequiredToScheduleNext;












            var fScheduleNextRequiredCallback = function( theCallback) {
                var aMethodName = "fScheduleNextRequiredCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_REQUIREDS_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_REQUIREDS_OK, null, null, null);

                    aThis.pTryToScheduleNextRequired( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fScheduleNextRequiredCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextRequiredCallback){}/* CQT */
            aPrototype.fScheduleNextRequiredCallback = fScheduleNextRequiredCallback;








            var fExceptionNextRequiredHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_REQUIREDS_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextRequiredHandler){}/* CQT */
            aPrototype.fExceptionNextRequiredHandler = fExceptionNextRequiredHandler;








            var fOwnTestMethodToRun = function() {
                return null;
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pS_RunRequireds = function( theCallback) {
                var aMethodName = "pS_RunRequireds";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_REQUIREDS_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }


                var aExceptionHandler = this.fExceptionRequiredsHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fRunRequiredsCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_REQUIREDS_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }



                    this._v_Configuration.pResolveExportsNow( theM_exportparm.EXPORTWHEN_EXBEFOREREQUIREDS, this);
                    var anExportFailedToResolve = this._v_Configuration.fFirstExportFailedToResolveNow( theM_exportparm.EXPORTWHEN_EXBEFOREREQUIREDS);
                    if( anExportFailedToResolve) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, "EXPORTFAILEDTORESOLVE AT BEFOREREQUIREDS", null, anExportFailedToResolve._v_Title, anExportFailedToResolve));
                        return;
                    }


                    this.pInitFinderToScheduleNextRequired();

                    this.pTryToScheduleNextRequired( aCallback, aMethodName);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_RunRequireds){}/* CQT */
            aPrototype.pS_RunRequireds = pS_RunRequireds;







            return aPrototype;

        })();






        var RunRequiredsTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runnable_test.RunnableTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_RequiredsAlreadyScheduled = null;

            this._v_RequiredTests = null;

            this._pInit_RunRequireds( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        RunRequiredsTest_Constructor.prototype = aRunRequiredsTest_Prototype;





        var RunRequiredsTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runnable_test.RunnableTest_Prototype;

            this._v_Prototype = aRunRequiredsTest_Prototype;
            this._v_Type = null;

            this._v_RequiredsAlreadyScheduled = null;

            this._v_RequiredTests = null;
        };
        RunRequiredsTest_SuperPrototypeConstructor.prototype = aRunRequiredsTest_Prototype;



        var aModule = {
            "RunRequiredsTest_Prototype": aRunRequiredsTest_Prototype,
            "RunRequiredsTest_Constructor": RunRequiredsTest_Constructor,
            "RunRequiredsTest_SuperPrototypeConstructor": RunRequiredsTest_SuperPrototypeConstructor
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

            var aM_nextticker        = require('../infrasvcs/nextticker/nextticker');
            var aM_runnable_test     = require('./runnable-test');
            var aM_runrequired_test  = require('./runrequired-test');
            var aM_exportparm        = require('./configs/exportparm');

            return aMod_definer(
                aM_nextticker,
                aM_runnable_test,
                aM_runrequired_test,
                aM_exportparm
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../infrasvcs/nextticker/nextticker",
            "./runnable-test",
            "./runrequired-test",
            "'./configs/exportparm"
        ], function (
            theM_nextticker,
            theM_runnable_test,
            theM_runrequired_test,
            theM_exportparm
        ) {
            return aMod_definer(
                theM_nextticker,
                theM_runnable_test,
                theM_runrequired_test,
                theM_exportparm
            );
        });
    }


}());















