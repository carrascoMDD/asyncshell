'use strict';

/*
 scheduleroot-test.js
 Creado 201408150235
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
    var aMod_definer =function( theM_composite_test, theM_scheduleone_test, theM_schedulegroup_test) {

        var ModuleName     = "scheduleroot-test";
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








        var aScheduleRootTest_Prototype = (function() {


            var aPrototype = new theM_composite_test.CompositeTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_composite_test.CompositeTest_Prototype;

            aPrototype._v_Type = "ScheduleRootTest";

            aPrototype._v_Prototype_ScheduleRootTest = aPrototype;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_ScheduleRoot( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_ScheduleRoot = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Composite.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Scheduled", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_ScheduleRoot){}/* CQT */
            aPrototype._pInit_ScheduleRoot = _pInit_ScheduleRoot;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ScheduleRoot( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ScheduleRoot = function( theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Composite.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ScheduleRoot){}/* CQT */
            aPrototype._pRelease_ScheduleRoot = _pRelease_ScheduleRoot;










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

                this.pCleanUpTest_ScheduleRoot( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ScheduleRoot = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Composite.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ScheduleRoot){}/* CQT */
            aPrototype.pCleanUpTest_ScheduleRoot = pCleanUpTest_ScheduleRoot;










            var pS_ScheduleOne = function( theConfiguration, theCallback, theExceptionHandler) {

                this.pS_Schedule_withConstructorAndMethodName( theConfiguration, theCallback, theExceptionHandler,
                    "pS_ScheduleOne", theM_scheduleone_test.ScheduleOneTest_Constructor, "pF_ScheduleOne");
            };
            if( pS_ScheduleOne){}/* CQT */
            aPrototype.pS_ScheduleOne = pS_ScheduleOne;











            var pS_ScheduleMoreThanOne = function( theCallback, theExceptionHandler) {

                this.pS_Schedule_withConstructorAndMethodName( this._v_Configuration, theCallback, theExceptionHandler,
                    "pS_ScheduleMoreThanOne", theM_schedulegroup_test.ScheduleGroupTest_Constructor, "pF_ScheduleGroup");
            };
            if( pS_ScheduleMoreThanOne){}/* CQT */
            aPrototype.pS_ScheduleMoreThanOne = pS_ScheduleMoreThanOne;









            var pS_Schedule_withConstructorAndMethodName = function( theConfiguration, theCallback, theExceptionHandler, theMethodName, theConstructor, theTestMethodName) {

                this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_INFO, null, null, null);


                if( !theConfiguration) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!theConfiguration", null));
                    return;
                }

                if( !theConstructor) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!theConstructor", null));
                    return;
                }

                if( !theTestMethodName) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!theTestMethodName", null));
                    return;
                }


                var aCallback = this.fScheduleRootCallback( theCallback, theMethodName);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleOneCallback( theCallback)", null));
                    return;
                }


                var aTest = new theConstructor( theConfiguration._v_Title, theConfiguration, this._v_Identifier, this._v_Recorder);
                if( !aTest) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!aTest", null));
                    return;
                }
                this.pAddSubordinateTest( aTest);


                var aTestMethod = aTest[ theTestMethodName];
                if( !aTestMethod) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!new theConstructor()[ theTestMethodName]", null));
                    return;
                }

                var aBoundTestMethod = aTestMethod.bind( aTest);




                /* *******************************
                 * INVOKE NOW
                 */
                try {
                    this.pF_AsyncNextTick(
                        function() {
                            aBoundTestMethod( aCallback);
                        },
                        theExceptionHandler
                    );
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }

            };
            if( pS_Schedule_withConstructorAndMethodName){}/* CQT */
            aPrototype.pS_Schedule_withConstructorAndMethodName = pS_Schedule_withConstructorAndMethodName;











            var fScheduleRootCallback = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        aThis.pNowFailed();
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.pNowSucceeded();
                    var aRecordOk = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, this.EVENTKIND_OK, null, null, null);
                    if( theCallback) {
                        theCallback( null, aRecordOk);
                    }
                }).bind( this);
                if( aCallback){}/* CQT */

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fScheduleRootCallback", theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleRootCallback){}/* CQT */
            aPrototype.fScheduleRootCallback = fScheduleRootCallback;









            var fExceptionRootHandler = function( theCallback, theMethodName) {

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

                    aThis.pNowFailed();
                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionRootHandler){}/* CQT */
            aPrototype.fExceptionRootHandler = fExceptionRootHandler;









            var pF_ScheduleRoot = function( theCallback) {
                var aMethodName = "pF_ScheduleRoot";

                this.pNowStarted();
                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                var aExceptionHandler = this.fExceptionRootHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {


                    if( !this._v_Configuration) {
                        this.pNowFailed();
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                        return;
                    }

                    if( this._v_Configuration._v_Runnable) {
                        this.pS_ScheduleOne( this._v_Configuration, theCallback, aExceptionHandler);
                        return;
                    }


                    var aFirstAndThereAreMoreRunnables = this._v_Configuration.fFirstRunnableAndThereAreMoreRunnables();


                    if( !aFirstAndThereAreMoreRunnables || !aFirstAndThereAreMoreRunnables.first) {
                        this.pNowSucceeded();
                        theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "No runnable", null));
                        return;
                    }

                    var aFirstRunnable = aFirstAndThereAreMoreRunnables.first;
                    if( !aFirstRunnable) {
                        this.pNowSucceeded();
                        theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "No first runnable", null));
                        return;
                    }

                    var aThereAreMore = aFirstAndThereAreMoreRunnables.thereAreMore;
                    if( !aThereAreMore) {
                        this.pS_ScheduleOne( aFirstRunnable, theCallback, aExceptionHandler);
                        return;
                    }

                    this.pS_ScheduleMoreThanOne( theCallback, aExceptionHandler);
                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pF_ScheduleRoot){}/* CQT */
            aPrototype.pF_ScheduleRoot = pF_ScheduleRoot;




            return aPrototype;

        })();






        var ScheduleRootTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composite_test.CompositeTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_ScheduleRoot( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        ScheduleRootTest_Constructor.prototype = aScheduleRootTest_Prototype;





        var ScheduleRootTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composite_test.CompositeTest_Prototype;

            this._v_Prototype = aScheduleRootTest_Prototype;
            this._v_Type = null;
        };
        ScheduleRootTest_SuperPrototypeConstructor.prototype = aScheduleRootTest_Prototype;



        var aModule = {
            "ScheduleRootTest_Prototype": aScheduleRootTest_Prototype,
            "ScheduleRootTest_Constructor": ScheduleRootTest_Constructor,
            "ScheduleRootTest_SuperPrototypeConstructor": ScheduleRootTest_SuperPrototypeConstructor
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

            var aM_composite_test     = require('./composite-test');
            var aM_scheduleone_test   = require('./scheduleone-test');
            var aM_schedulegroup_test = require('./schedulegroup-test');

            return aMod_definer( aM_composite_test, aM_scheduleone_test, aM_schedulegroup_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./composite-test",
            "scheduleone-test",
            "schedulegroup"
        ], function (
            theM_composite_test, theM_scheduleone_test, theM_schedulegroup_test) {
            return aMod_definer( theM_composite_test, theM_scheduleone_test, theM_schedulegroup_test);
        });
    }


}());















