'use strict';

/*
 scheduleone-test.js
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
    var aMod_definer =function( theM_composite_test, theM_cmploader) {

        var ModuleName     = "scheduleone-test";
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










        var aScheduleOneTest_Prototype = (function() {


            var aPrototype = new theM_composite_test.CompositeTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = theM_composite_test.CompositeTest_Prototype;

            aPrototype._v_Type = "ScheduleOneTest";

            aPrototype._v_Prototype_ScheduleOneTest = aPrototype;







            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_ScheduleOne( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_ScheduleOne = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Composite.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_ScheduleOne", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_ScheduleOne){}/* CQT */
            aPrototype._pInit_ScheduleOne = _pInit_ScheduleOne;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ScheduleOne( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ScheduleOne = function( theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Composite.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ScheduleOne){}/* CQT */
            aPrototype._pRelease_ScheduleOne = _pRelease_ScheduleOne;













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

                this.pCleanUpTest_ScheduleOne( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ScheduleOne = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Composite.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ScheduleOne){}/* CQT */
            aPrototype.pCleanUpTest_ScheduleOne = pCleanUpTest_ScheduleOne;













            var fScheduleOneCallback = function( theCallback, theMethodName) {

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

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fScheduleOneCallback", theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleOneCallback){}/* CQT */
            aPrototype.fScheduleOneCallback = fScheduleOneCallback;







            var fExceptionOneHandler = function( theCallback, theMethodName) {

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
                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_NOTPASSED, null, aCatchedRecord, null);

                    aThis.pNowFailed();
                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionOneHandler){}/* CQT */
            aPrototype.fExceptionOneHandler = fExceptionOneHandler;










            var fOwnTestMethodToSchedule = function( theMethodName) {
                if( theMethodName){}/* CQT */

                if( !this._v_Configuration) {
                    return null;
                }

                if( !this._v_Configuration._v_Runnable) {
                    return null;
                }


                var aConstructorModuleName = null;
                var aConstructorName = null;
                var aTestMethodName = null;

                var somePendingFieldNames = [ ];
                var aResolutionsDict = this._v_Configuration.fFieldResolutionsByName( this._v_Configuration.QUERY_FIELDS_TORUN, somePendingFieldNames);
                if( !aResolutionsDict) {
                    return null;
                }

                var aConstructorModuleNameResolution = aResolutionsDict[ "_v_ConstructorModuleName"];
                if( aConstructorModuleNameResolution && aConstructorModuleNameResolution._v_Success) {
                    aConstructorModuleName = aConstructorModuleNameResolution._v_FieldValue;
                }
                if( !aConstructorModuleName) {
                    return null;
                }

                var aPreBuiltModule = this.PREBUILTMODULES[ aConstructorModuleName];
                if( aPreBuiltModule) {
                    aConstructorModuleName = aPreBuiltModule._v_ConstructorModuleName;
                    if( !aConstructorModuleName) {
                        return null;
                    }
                }
                else {
                    var aConstructorNameResolution = aResolutionsDict[ "_v_ConstructorName"];
                    if( aConstructorNameResolution && aConstructorNameResolution._v_Success) {
                        aConstructorName = aConstructorNameResolution._v_FieldValue;
                    }

                    var theMethodNameResolution = aResolutionsDict[ "_v_MethodName"];
                    if( theMethodNameResolution && theMethodNameResolution._v_Success) {
                        aTestMethodName = theMethodNameResolution._v_FieldValue;
                    }
                }

                if( !aConstructorName) {
                    return null;
                }

                if( !aTestMethodName) {
                    return null;
                }



                var aModule = theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( aConstructorModuleName);
                if( !aModule) {
                    return null;
                }



                var aConstructor = aModule[ aConstructorName];
                if( !aConstructor) {
                    return null;
                }





                var aTest = new aConstructor( this._v_Configuration._v_Title, this._v_Configuration, this._v_Identifier, this._v_Recorder);
                if( !aTest) {
                    return null;
                }

                this.pAddSubordinateTest( aTest);





                var aTestMethod = aTest[ aTestMethodName];
                if( !aTestMethod) {
                    return null;
                }

                var aBoundTestMethod = aTestMethod.bind( aTest);
                if( aBoundTestMethod){}/* CQT */

                return aBoundTestMethod;

            };
            if( fOwnTestMethodToSchedule){}/* CQT */
            aPrototype.fOwnTestMethodToSchedule = fOwnTestMethodToSchedule;












            var pF_ScheduleOne = function( theCallback) {
                var aMethodName = "pF_ScheduleOne";

                this.pNowStarted();
                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var aExceptionHandler = this.fExceptionOneHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {


                    var aCallback = this.fScheduleOneCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        this.pNowFailed();
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleOneCallback( theCallback)", null));
                        return;
                    }


                    var anOwnMethodToRun = this.fOwnTestMethodToSchedule( aMethodName);
                    if( !anOwnMethodToRun) {
                        this.pNowFailed();
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fOwnTestMethodToSchedule( theCallback)", null));
                        return;
                    }

                    /* *******************************
                     * INVOKE NOW
                     */
                    this.pF_AsyncNextTick(
                        function() {
                            anOwnMethodToRun( aCallback);
                        },
                        aExceptionHandler
                    );

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pF_ScheduleOne){}/* CQT */
            aPrototype.pF_ScheduleOne = pF_ScheduleOne;










            return aPrototype;

        })();






        var ScheduleOneTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composite_test.CompositeTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_ScheduleOne( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        ScheduleOneTest_Constructor.prototype = aScheduleOneTest_Prototype;





        var ScheduleOneTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composite_test.CompositeTest_Prototype;

            this._v_Prototype = aScheduleOneTest_Prototype;
            this._v_Type = null;
        };
        ScheduleOneTest_SuperPrototypeConstructor.prototype = aScheduleOneTest_Prototype;



        var aModule = {
            "ScheduleOneTest_Prototype": aScheduleOneTest_Prototype,
            "ScheduleOneTest_Constructor": ScheduleOneTest_Constructor,
            "ScheduleOneTest_SuperPrototypeConstructor": ScheduleOneTest_SuperPrototypeConstructor
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

            var aM_composite_test = require('./composite-test');
            var aM_cmploader      = require('./resloader/cmploader');

            return aMod_definer( aM_composite_test, aM_cmploader);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./composite-test",
            "./resloader/cmploader"
        ], function ( theM_composite_test, theM_cmploader) {
            return aMod_definer( theM_composite_test, theM_cmploader);
        });
    }


}());















