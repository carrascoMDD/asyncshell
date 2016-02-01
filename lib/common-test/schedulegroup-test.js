'use strict';

/*
 schedulegroup-test.js
 Created 201408150235
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
    var aMod_definer =function( theM_runnable_test,
                                theM_scheduleone_test) {


        var ModuleName     = "schedulegroup-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








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










        var aScheduleGroupTest_Prototype = (function() {


            var aPrototype = new theM_runnable_test.RunnableTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = theM_runnable_test.RunnableTest_Prototype;

            aPrototype._v_Type = "ScheduleGroupTest";

            aPrototype._v_Prototype_ScheduleGroupTest = aPrototype;

            aPrototype._v_SubsAlreadyScheduled = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_ScheduleGroup( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_ScheduleGroup = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Runnable.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_SubsAlreadyScheduled = [ ];

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_ScheduleGroup", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_ScheduleGroup){}/* CQT */
            aPrototype._pInit_ScheduleGroup = _pInit_ScheduleGroup;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ScheduleGroup( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ScheduleGroup = function( theReleaseParms, theReleaseDone) {

                if( this._v_SubsAlreadyScheduled) {

                    var aNumSubsAlreadyScheduled = this._v_SubsAlreadyScheduled.length;
                    if( aNumSubsAlreadyScheduled) {
                        for( var aSubsAlreadyScheduledIdx=0; aSubsAlreadyScheduledIdx < aNumSubsAlreadyScheduled; aSubsAlreadyScheduledIdx++) {
                            var aSubsAlreadyScheduled = this._v_SubsAlreadyScheduled[ aSubsAlreadyScheduledIdx];
                            if( aSubsAlreadyScheduled) {
                                if( typeof aSubsAlreadyScheduled._pRelease == "function") {
                                    aSubsAlreadyScheduled._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }

                this._v_SubsAlreadyScheduled = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Runnable.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ScheduleGroup){}/* CQT */
            aPrototype._pRelease_ScheduleGroup = _pRelease_ScheduleGroup;











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

                this.pCleanUpTest_ScheduleGroup( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ScheduleGroup = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Runnable.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ScheduleGroup){}/* CQT */
            aPrototype.pCleanUpTest_ScheduleGroup = pCleanUpTest_ScheduleGroup;











            var fScheduleGroupCallback = function( theCallback, theMethodName) {
                return this.fOverallRunnableCallback( theCallback, theMethodName, "fScheduleGroupCallback");
            };
            if( fScheduleGroupCallback){}/* CQT */
            aPrototype.fScheduleGroupCallback = fScheduleGroupCallback;







            var fExceptionGroupHandler = function( theCallback, theMethodName) {
                return this.fOverallExceptionHandler( theCallback, theMethodName);
            };
            if( fExceptionGroupHandler){}/* CQT */
            aPrototype.fExceptionGroupHandler = fExceptionGroupHandler;













            var pInitFinderToScheduleNextInGroup = function() {
                this._v_SubsAlreadyScheduled = [];
            };
            if( pInitFinderToScheduleNextInGroup){}/* CQT */
            aPrototype.pInitFinderToScheduleNextInGroup = pInitFinderToScheduleNextInGroup;








            var pTryToScheduleNextInGroup = function( theCallback) {
                var aMethodName = "pTryToScheduleNextInGroup";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_INFO, null, null, null);}

                var aConfigurationToScheduleNext = this.fFindSubConfigurationToScheduleNext();
                if( !aConfigurationToScheduleNext) {
                    this.pNowSucceeded();
                    var aNoMoreToScheduleRecord = null;
                    if( this.RECORDLOOPINFOS) { aNoMoreToScheduleRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_INFO, "NO MORE SUBS IN SCHEDULE MANY", null, null);}
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aNoMoreToScheduleRecord, null, null));
                    return;
                }


                var aScheduleOne = new theM_scheduleone_test.ScheduleOneTest_Constructor( aConfigurationToScheduleNext._v_Title, aConfigurationToScheduleNext, this._v_Identifier, this._v_Recorder);
                if( !aScheduleOne) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!theM_scheduleone_test.ScheduleOneTest_Constructor", null));
                    return;
                }
                this.pAddSubordinateTest( aScheduleOne);

                var aScheduleOneMethod = aScheduleOne.pF_ScheduleOne;
                if( !aScheduleOneMethod) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!new theM_scheduleone_test.ScheduleOneTest_Constructor().pF_ScheduleOne", null));
                    return;
                }
                var aBoundScheduleOneMethod = aScheduleOneMethod.bind( aScheduleOne);



                var aCallback = this.fScheduleNextInGroupCallback( theCallback);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleNextInGroupCallback( theCallback)", null));
                    return;
                }





                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextHandler( aCallback);

                this.pF_AsyncNextTick(
                    function() {
                        aBoundScheduleOneMethod( aCallback);
                    },
                    anExceptionHandler
                );




            };
            if( pTryToScheduleNextInGroup){}/* CQT */
            aPrototype.pTryToScheduleNextInGroup = pTryToScheduleNextInGroup;








            var fFindSubConfigurationToScheduleNext = function() {

                if( !this._v_Configuration) {
                    return null;
                }

                var someSubRunnables = this._v_Configuration.fSubRunnablesWOself();
                if( !someSubRunnables || !someSubRunnables.length) {
                    return null;
                }

                var aPendingSubRunnable = null;

                var aNumSubRunnables = someSubRunnables.length;
                for( var aSubRunnableIdx=0; aSubRunnableIdx < aNumSubRunnables; aSubRunnableIdx++) {
                    var aSubRunnable = someSubRunnables[ aSubRunnableIdx];
                    if( this._v_SubsAlreadyScheduled.indexOf( aSubRunnable) < 0) {
                        aPendingSubRunnable = aSubRunnable;
                        break;
                    }
                }
                if( !aPendingSubRunnable) {
                    return null;
                }

                this._v_SubsAlreadyScheduled.push( aPendingSubRunnable);
                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, "fFindSubConfigurationToScheduleNext", this.EVENTKIND_INFO, aPendingSubRunnable, "FOUND SUB", null);}

                return aPendingSubRunnable;
            };
            if( fFindSubConfigurationToScheduleNext){}/* CQT */
            aPrototype.fFindSubConfigurationToScheduleNext = fFindSubConfigurationToScheduleNext;













            var fScheduleNextInGroupCallback = function( theCallback) {
                var aMethodName = "fScheduleNextInGroupCallback";

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        aThis.pNowFailed();
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.pTryToScheduleNextInGroup( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fScheduleNextInGroupCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextInGroupCallback){}/* CQT */
            aPrototype.fScheduleNextInGroupCallback = fScheduleNextInGroupCallback;








            var fExceptionNextHandler = function( theCallback, theMethodName) {

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
                    var otherRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_NOTPASSED, null, aCatchedRecord, null);
                    if( otherRecord){}/* CQT */

                    aThis.pNowFailed();
                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextHandler){}/* CQT */
            aPrototype.fExceptionNextHandler = fExceptionNextHandler;










            var pF_ScheduleGroup = function( theCallback) {
                var aMethodName = "pF_ScheduleGroup";

                this.pNowStarted();
                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var aExceptionHandler = this.fExceptionGroupHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fScheduleGroupCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        this.pNowFailed();
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    if( !this._v_Configuration) {
                        this.pNowFailed();
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                        return;
                    }

                    this.pInitFinderToScheduleNextInGroup();

                    this.pTryToScheduleNextInGroup( aCallback, aMethodName);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pF_ScheduleGroup){}/* CQT */
            aPrototype.pF_ScheduleGroup = pF_ScheduleGroup;







            return aPrototype;

        })();






        var ScheduleGroupTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runnable_test.RunnableTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_SubsAlreadyScheduled = null;

            this._pInit_ScheduleGroup( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        ScheduleGroupTest_Constructor.prototype = aScheduleGroupTest_Prototype;





        var ScheduleGroupTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runnable_test.RunnableTest_Prototype;

            this._v_Prototype = aScheduleGroupTest_Prototype;
            this._v_Type = null;

            this._v_SubsAlreadyScheduled = null;
        };
        ScheduleGroupTest_SuperPrototypeConstructor.prototype = aScheduleGroupTest_Prototype;



        var aModule = {
            "ScheduleGroupTest_Prototype": aScheduleGroupTest_Prototype,
            "ScheduleGroupTest_Constructor": ScheduleGroupTest_Constructor,
            "ScheduleGroupTest_SuperPrototypeConstructor": ScheduleGroupTest_SuperPrototypeConstructor
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

            var aM_runnable_test      = require('./runnable-test');
            var aM_scheduleone_test   = require('./scheduleone-test');

            return aMod_definer( aM_runnable_test, aM_scheduleone_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "./runnable-test", "./scheduleone-test"], function ( theM_runnable_test, theM_scheduleone_test) {
            return aMod_definer( theM_runnable_test, theM_scheduleone_test);
        });
    }


}());















