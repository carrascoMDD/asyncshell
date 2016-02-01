'use strict';

/*
 composite-test.js
 Created 201408050911
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
    var aMod_definer = function( theM_async_test) {


        var ModuleName     = "composite-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}




        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.PREBUILTMODULE_GROUP     = "GROUP";

            theToInit.PREBUILTMODULES = { };
            theToInit.PREBUILTMODULES[ theToInit.PREBUILTMODULE_GROUP] = {
                "_v_ConstructorModuleName":  "@cmppath/common-test/runsubs-test",
                "_v_ConstructorName":       "RunSubsTest_Constructor",
                "_v_MethodName":            "pF_Runnable"
            };

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










        var aCompositeTest_Prototype = (function() {


            var aPrototype = new theM_async_test.AsyncTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_async_test.AsyncTest_Prototype;

            aPrototype._v_Type = "CompositeTest";

            aPrototype._v_Prototype_CompositeTest = aPrototype;



            aPrototype._v_SubordinateTests = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Composite( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Composite = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Async.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_SubordinateTests = [];

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Composite", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Composite){}/* CQT */
            aPrototype._pInit_Composite = _pInit_Composite;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Composite( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_Composite = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                if( this._v_SubordinateTests) {

                    var aNumSubordinateTests = this._v_SubordinateTests.length;
                    if( aNumSubordinateTests) {
                        for( var aSubordinateTestIdx=0; aSubordinateTestIdx < aNumSubordinateTests; aSubordinateTestIdx++) {
                            var aSubordinateTest = this._v_SubordinateTests[ aSubordinateTestIdx];
                            if( aSubordinateTest) {
                                if( typeof aSubordinateTest._pRelease == "function") {
                                    aSubordinateTest._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }

                this._v_SubordinateTests = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Async.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Composite){}/* CQT */
            aPrototype._pRelease_Composite = _pRelease_Composite;









            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

                if( this._v_SubordinateTests) {

                    var aNumSubordinateTests = this._v_SubordinateTests.length;
                    if( aNumSubordinateTests) {
                        for( var aSubordinateTestIdx=0; aSubordinateTestIdx < aNumSubordinateTests; aSubordinateTestIdx++) {
                            var aSubordinateTest = this._v_SubordinateTests[ aSubordinateTestIdx];
                            if( aSubordinateTest) {
                                if( theReleaseChildren.indexOf( aSubordinateTest) < 0) {
                                    theReleaseChildren.push( aSubordinateTest);
                                    if( typeof aSubordinateTest._pReleaseChildrenInto == "function") {
                                        aSubordinateTest._pReleaseChildrenInto( theReleaseChildren);
                                    }
                                }
                            }
                        }
                    }
                }
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

                this.pCleanUpTest_Composite( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Composite = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {

                    if( this._v_SubordinateTests) {

                        var aNumSubordinateTests = this._v_SubordinateTests.length;
                        if( aNumSubordinateTests) {
                            for( var aSubordinateTestIdx=0; aSubordinateTestIdx < aNumSubordinateTests; aSubordinateTestIdx++) {
                                var aSubordinateTest = this._v_SubordinateTests[ aSubordinateTestIdx];
                                if( aSubordinateTest) {
                                    if( typeof aSubordinateTest.pCleanUpTest == "function") {
                                        aSubordinateTest.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Async.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Composite){}/* CQT */
            aPrototype.pCleanUpTest_Composite = pCleanUpTest_Composite;















            var pAddSubordinateTest = function( theSubordinateTest) {
                if( !theSubordinateTest) {
                    return;
                }

                this._v_SubordinateTests.push( theSubordinateTest);

                this.fRecord( this._v_Type, this._v_Id, this, null, this.EVENTKIND_ADDEDSUBORDINATETEST, theSubordinateTest, null, null);
            };
            if( pAddSubordinateTest){}/* CQT */
            aPrototype.pAddSubordinateTest = pAddSubordinateTest;








            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);


                var someSubTests = [];
                aResultJSON.tests = someSubTests;

                var aNumSubTests = this._v_SubordinateTests.length;
                for( var aSubTestIdx = 0; aSubTestIdx < aNumSubTests; aSubTestIdx++) {
                    var aSubTest = this._v_SubordinateTests[ aSubTestIdx];

                    var aSubResultJSON = aSubTest.fToResultJSON( theCommonObjects, theAlready);
                    if( aSubResultJSON) {
                        someSubTests.push( aSubResultJSON);
                    }
                }

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;





            var fAllTests = function() {
                var someTests = [ ];

                this.pAllTests_into( someTests);

                return someTests;
            };
            if( fAllTests){}/* CQT */
            aPrototype.fAllTests = fAllTests;





            var pAllTests_into = function( theTests) {
                if( theTests == null) {
                    return;
                }

                aPrototype._v_SuperPrototype.pAllTests_into.apply( this, [ theTests]);


                if( this._v_SubordinateTests == null) {
                    return;
                }

                var aNumSubordinateTests = this._v_SubordinateTests.length;
                for( var aSubordinateTestIdx = 0; aSubordinateTestIdx < aNumSubordinateTests; aSubordinateTestIdx++) {
                    var aSubordinateTest = this._v_SubordinateTests[ aSubordinateTestIdx];

                    aSubordinateTest.pAllTests_into( theTests);
                }
            };
            if( pAllTests_into){}/* CQT */
            aPrototype.pAllTests_into = pAllTests_into;







            var fAllRecorders = function() {
                var someRecorders = [ ];

                this.pAllRecorders_into( someRecorders);

                return someRecorders;
            };
            if( fAllRecorders){}/* CQT */
            aPrototype.fAllRecorders = fAllRecorders;





            var pAllRecorders_into = function( theRecorders) {
                if( theRecorders == null) {
                    return;
                }

                aPrototype._v_SuperPrototype.pAllRecorders_into.apply( this, [ theRecorders]);


                if( this._v_SubordinateTests == null) {
                    return;
                }

                var aNumSubordinateTests = this._v_SubordinateTests.length;
                for( var aSubordinateTestIdx = 0; aSubordinateTestIdx < aNumSubordinateTests; aSubordinateTestIdx++) {
                    var aSubordinateTest = this._v_SubordinateTests[ aSubordinateTestIdx];

                    if( aSubordinateTest.pAllRecorders_into) {
                        aSubordinateTest.pAllRecorders_into( theRecorders);
                    }
                }
            };
            if( pAllRecorders_into){}/* CQT */
            aPrototype.pAllRecorders_into = pAllRecorders_into;






            return aPrototype;

        })();








        var CompositeTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_async_test.AsyncTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_SubordinateTests = null;

            this._pInit_Composite( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        CompositeTest_Constructor.prototype = aCompositeTest_Prototype;





        var CompositeTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_async_test.AsyncTest_Prototype;

            this._v_Prototype = aCompositeTest_Prototype;
            this._v_Type = null;

            this._v_SubordinateTests = null;

        };
        CompositeTest_SuperPrototypeConstructor.prototype = aCompositeTest_Prototype;



        var aModule = {
            "CompositeTest_Prototype": aCompositeTest_Prototype,
            "CompositeTest_Constructor": CompositeTest_Constructor,
            "CompositeTest_SuperPrototypeConstructor": CompositeTest_SuperPrototypeConstructor
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

            var aM_async_test = require('./async-test');

            return aMod_definer( aM_async_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "./async-test"], function ( theM_async_test) {
            return aMod_definer( theM_async_test);
        });
    }


}());

