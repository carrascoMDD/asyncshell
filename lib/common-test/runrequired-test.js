'use strict';

/*
 runrequired-test.js
 Creado 201409052145
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
    var aMod_definer =function( theM_nextticker, theM_runnable_test, theM_cmploader) {

        var ModuleName     = "runrequired-test";
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










        var aRunRequiredTest_Prototype = (function() {


            var aPrototype = new theM_runnable_test.RunnableTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = theM_runnable_test.RunnableTest_Prototype;

            aPrototype._v_Type = "RunRequiredTest";

            aPrototype._v_Prototype_RunRequiredTest = aPrototype;


            aPrototype._v_ParmNamesPending = null;

            aPrototype._v_SuppliersAlreadyScheduled = null;

            aPrototype._v_SupplierTests = null;







            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_RunRequired( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_RunRequired = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Runnable.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_ParmNamesPending = null;

                this._v_SuppliersAlreadyScheduled = [ ];

                this._v_SupplierTests = [ ];

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_RunRequired", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_RunRequired){}/* CQT */
            aPrototype._pInit_RunRequired = _pInit_RunRequired;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_RunRequired( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_RunRequired = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */


                this._v_ParmNamesPending = undefined;


                this._v_SuppliersAlreadyScheduled = undefined;


                if( this._v_SupplierTests) {

                    var aNumSupplierTests = this._v_SupplierTests.length;
                    if( aNumSupplierTests) {
                        for( var aSupplierTestIdx=0; aSupplierTestIdx < aNumSupplierTests; aSupplierTestIdx++) {
                            var aSupplierTest = this._v_SupplierTests[ aSupplierTestIdx];
                            if( aSupplierTest) {
                                if( typeof aSupplierTest._pRelease == "function") {
                                    aSupplierTest._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }


                this._v_SupplierTests = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Runnable.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_RunRequired){}/* CQT */
            aPrototype._pRelease_RunRequired = _pRelease_RunRequired;









            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

            };
            if( _pReleaseChildrenInto){}/* CQT */
            aPrototype._pReleaseChildrenInto = _pReleaseChildrenInto;












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

                this.pCleanUpTest_RunRequired( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_RunRequired = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {

                    if( this._v_SupplierTests) {

                        var aNumSupplierTests = this._v_SupplierTests.length;
                        if( aNumSupplierTests) {
                            for( var aSupplierTestIdx=0; aSupplierTestIdx < aNumSupplierTests; aSupplierTestIdx++) {
                                var aSupplierTest = this._v_SupplierTests[ aSupplierTestIdx];
                                if( aSupplierTest) {
                                    if( typeof aSupplierTest.pCleanUpTest == "function") {
                                        aSupplierTest.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Composite.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_RunRequired){}/* CQT */
            aPrototype.pCleanUpTest_RunRequired = pCleanUpTest_RunRequired;


















            var pAddSupplierTest = function( theSupplierTest) {
                if( !theSupplierTest) {
                    return;
                }

                if( this._v_SupplierTests.indexOf( theSupplierTest) < 0) {
                    this._v_SupplierTests.push( theSupplierTest);
                }
            };
            if( pAddSupplierTest){}/* CQT */
            aPrototype.pAddSupplierTest = pAddSupplierTest;









            var fRunSuppliersCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUPPLIERS_FAIL, null, theError, null));
                        return;
                    }

                    var aSuccessRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUPPLIERS_OK, null, null, null);

                    if( aThis.fHandleForceError( aThis.EVENTKIND_SUPPLIERS_OK, theCallback, aSuccessRecord)) {
                        return;
                    }

                    theCallback( null, aSuccessRecord);


                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fRunSuppliersCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fRunSuppliersCallback){}/* CQT */
            aPrototype.fRunSuppliersCallback = fRunSuppliersCallback;









            var fExceptionRequiredsHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUPPLIERS_FAIL, null, "null Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUPPLIERS_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionRequiredsHandler){}/* CQT */
            aPrototype.fExceptionRequiredsHandler = fExceptionRequiredsHandler;












            var pInitFinderToScheduleNextSupplier = function() {
                this._v_ParmNamesPending = this._v_Configuration._v_ParmNames;
                this._v_SuppliersAlreadyScheduled = [];
            };
            if( pInitFinderToScheduleNextSupplier){}/* CQT */
            aPrototype.pInitFinderToScheduleNextSupplier = pInitFinderToScheduleNextSupplier;








            var pTryToScheduleNextSupplier = function( theCallback) {
                var aMethodName = "pTryToScheduleNextSupplier";

                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FINDNEXT, null, null, null);}

                if( !this._v_Configuration || !this._v_Configuration._v_OwnerConfiguration) {
                    return;
                }

                if( !this._v_ParmNamesPending || !this._v_ParmNamesPending.length) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_NOMORENAMES, null, null, null));
                    return;
                }


                var aParmResolutionsDict = this._v_Configuration._v_OwnerConfiguration.fParmResolutionsByName( this._v_ParmNamesPending.slice());
                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "! this._v_Configuration.fParmResolutionsByName( this._v_ParmNamesPending.slice())", null));
                    return;
                }


                var someParmNamesPending = this._v_ParmNamesPending.slice();
                var aNumParmNamesPending = someParmNamesPending.length;
                for( var aParmNameIdx=0; aParmNameIdx < aNumParmNamesPending; aParmNameIdx++) {

                    var aParmName = someParmNamesPending[ aParmNameIdx];
                    var aParmResolution = aParmResolutionsDict[ aParmName];

                    if( aParmResolution && aParmResolution._v_Success && aParmResolution._v_ParmValue) {

                        var aParmIndex = this._v_ParmNamesPending.indexOf( aParmName);
                        if( aParmIndex >= 0) {
                            this._v_ParmNamesPending.splice( aParmIndex, 1);
                        }

                        if( !this._v_ParmNamesPending.length) {
                            theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_NOMORENAMES, null, null, null));
                            return;
                        }
                    }
                }




                var aSupplierConfigurationToScheduleNext = this.fFindSupplierToScheduleNext();
                if( !aSupplierConfigurationToScheduleNext) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_NOMORE, null, null, null));
                    return;
                }

                if( aSupplierConfigurationToScheduleNext == this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "aConfigurationToScheduleNext == this._v_Configuration", null));
                    return;
                }


                var aConstructorModuleName = null;
                var aConstructorName = null;
                var aTestMethodName = null;

                var aResolutionsDict = aSupplierConfigurationToScheduleNext.fFieldResolutionsByName( aSupplierConfigurationToScheduleNext.QUERY_FIELDS_TORUN);
                if( !aResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!aResolutionsDict", null));
                    return;
                }

                var aConstructorModuleNameResolution = aResolutionsDict[ "_v_ConstructorModuleName"];
                if( aConstructorModuleNameResolution && aConstructorModuleNameResolution._v_Success) {
                    aConstructorModuleName = aConstructorModuleNameResolution._v_FieldValue;
                }
                if( !aConstructorModuleName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!aConstructorModuleName", null));
                    return;
                }

                var aPreBuiltModule = this.PREBUILTMODULES[ aConstructorModuleName];
                if( aPreBuiltModule) {
                    aConstructorModuleName = aPreBuiltModule._v_ConstructorModuleName;
                    if( !aConstructorModuleName) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!aConstructorModuleName", null));
                        return;
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
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!aConstructorName", null));
                    return;
                }

                if( !aTestMethodName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!aTestMethodName", null));
                    return;
                }



                var aModule = theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( aConstructorModuleName);
                if( !aModule) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!fLoadCmpNamed(" + aConstructorModuleName + ")", null));
                }



                var aConstructor = aModule[ aConstructorName];
                if( !aConstructor) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!fLoadCmpNamed(" + aConstructorModuleName + ")[ " + aConstructorName + "]", null));
                    return;
                }

                var aTest = new aConstructor( aSupplierConfigurationToScheduleNext._v_Title, aSupplierConfigurationToScheduleNext, this._v_Identifier, this._v_Recorder);
                if( !aTest) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!aTest", null));
                    return;
                }

                this.pAddSupplierTest( aTest);





                var aTestMethod = aTest[ aTestMethodName];
                if( !aTestMethod) {
                    return;
                }

                var aBoundTestMethod = aTestMethod.bind( aTest);
                if( aBoundTestMethod){}/* CQT */



                var aCallback = this.fScheduleNextSupplierCallback( theCallback);
                if( !aCallback) {
                    this.pNowFailed();
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!this.fScheduleNextSupplierCallback( theCallback)", null));
                    return;
                }





                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextSupplierHandler( aCallback);


                theM_nextticker.pNextTick( function() {
                    try {
                        aBoundTestMethod( aCallback);
                    }
                    catch( anException) {
                        anExceptionHandler( anException);
                    }
                });

            };
            if( pTryToScheduleNextSupplier){}/* CQT */
            aPrototype.pTryToScheduleNextSupplier = pTryToScheduleNextSupplier;








            var fFindSupplierToScheduleNext = function() {

                if( !this._v_Configuration) {
                    return null;
                }

                var someSuppliers = this._v_Configuration._v_Suppliers;
                if( !someSuppliers || !someSuppliers.length) {
                    return null;
                }

                var aPendingSupplier = null;

                var aNumSuppliers = someSuppliers.length;
                for( var aSupplierIdx=0; aSupplierIdx < aNumSuppliers; aSupplierIdx++) {
                    var aSupplierRunSteps = someSuppliers[ aSupplierIdx];
                    if( this._v_SuppliersAlreadyScheduled.indexOf( aSupplierRunSteps) < 0) {
                        aPendingSupplier = aSupplierRunSteps;
                        break;
                    }
                }
                if( !aPendingSupplier) {
                    return null;
                }

                this._v_SuppliersAlreadyScheduled.push( aPendingSupplier);
                if( this.RECORDLOOPINFOS) { this.fRecord( this._v_Type, this._v_Id, this, "fFindSupplierToScheduleNext", this.EVENTKIND_INFO, aPendingSupplier, "FOUND Supplier", null);}

                return aPendingSupplier;
            };
            if( fFindSupplierToScheduleNext){}/* CQT */
            aPrototype.fFindSupplierToScheduleNext = fFindSupplierToScheduleNext;













            var fScheduleNextSupplierCallback = function( theCallback) {
                var aMethodName = "fScheduleNextSupplierCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_SUPPLIERS_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_SUPPLIERS_OK, null, null, null);

                    aThis.pTryToScheduleNextSupplier( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, "fScheduleNextSupplierCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fScheduleNextSupplierCallback){}/* CQT */
            aPrototype.fScheduleNextSupplierCallback = fScheduleNextSupplierCallback;








            var fExceptionNextSupplierHandler = function( theCallback, theMethodName) {

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

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_SUPPLIERS_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextSupplierHandler){}/* CQT */
            aPrototype.fExceptionNextSupplierHandler = fExceptionNextSupplierHandler;








            var fOwnTestMethodToRun = function() {
                return null;
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_RunSuppliers = function( theCallback) {
                var aMethodName = "pSS_RunSuppliers";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }


                if( !this._v_Configuration._v_Suppliers || !this._v_Configuration._v_Suppliers.length) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_Configuration._v_Suppliers || !this._v_Configuration._v_Suppliers.length", null));
                    return;
                }



                var aExceptionHandler = this.fExceptionRequiredsHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fRunSuppliersCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    if( !this._v_Configuration) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUPPLIERS_FAIL, null, "!this._v_Configuration", null));
                        return;
                    }


                    this.pInitFinderToScheduleNextSupplier();

                    this.pTryToScheduleNextSupplier( aCallback);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pSS_RunSuppliers){}/* CQT */
            aPrototype.pSS_RunSuppliers = pSS_RunSuppliers;










            return aPrototype;

        })();






        var RunRequiredTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runnable_test.RunnableTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_SuppliersAlreadyScheduled = null;

            this._pInit_RunRequired( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        RunRequiredTest_Constructor.prototype = aRunRequiredTest_Prototype;





        var RunRequiredTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runnable_test.RunnableTest_Prototype;

            this._v_Prototype = aRunRequiredTest_Prototype;
            this._v_Type = null;

            this._v_SuppliersAlreadyScheduled = null;
        };
        RunRequiredTest_SuperPrototypeConstructor.prototype = aRunRequiredTest_Prototype;



        var aModule = {
            "RunRequiredTest_Prototype": aRunRequiredTest_Prototype,
            "RunRequiredTest_Constructor": RunRequiredTest_Constructor,
            "RunRequiredTest_SuperPrototypeConstructor": RunRequiredTest_SuperPrototypeConstructor
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

            var aM_nextticker    = require('../infrasvcs/nextticker/nextticker');
            var aM_runnable_test = require('./runnable-test');
            var aM_cmploader     = require('./resloader/cmploader');

            return aMod_definer( aM_nextticker, aM_runnable_test, aM_cmploader);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../infrasvcs/nextticker/nextticker",
            "./runnable-test",
            "./resloader/cmploader"
        ], function ( theM_nextticker, theM_runnable_test, theM_cmploader) {
            return aMod_definer( theM_nextticker, theM_runnable_test, theM_cmploader);
        });
    }


}());















