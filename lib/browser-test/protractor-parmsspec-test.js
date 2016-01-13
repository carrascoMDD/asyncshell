'use strict';

/*
 protractor-parmsspec.js
 Creado 201409171855
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

    var aMod_definer = function( theM_protractor_test,
                                 theM_parms_general,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_cmploader,
                                 theM_protractor_runner,
                                 theM_protractor_configparser) {


        var ModuleName     = "protractor-parmsspec-test";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }
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



            theToInit.PARM_HELPER_NAME                     = "name";
            theToInit.PARM_HELPER_MODULE                   = "module";
            theToInit.PARM_HELPER_CONSTRUCTORNAME          = "constructorName";
            theToInit.PARM_HELPER_REUSEINSTANCEASEXTRAPARM = "reuseInstanceAsExtraParm";
            theToInit.PARM_HELPER_METHODNAME               = "methodName";
            theToInit.PARM_HELPER_PARMS                    = "helperParms";
            theToInit.PARM_HELPER_EXTRACONSTRUCTORPARMS    = "extraConstructorParms";



            theToInit.PARMS_HELPER = [
                theToInit.PARM_HELPER_MODULE,
                theToInit.PARM_HELPER_CONSTRUCTORNAME,
                theToInit.PARM_HELPER_REUSEINSTANCEASEXTRAPARM,
                theToInit.PARM_HELPER_METHODNAME,
                theToInit.PARM_HELPER_PARMS
            ];

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











        var aProtractorParmsSpecTest_Prototype = (function() {


            var aPrototype = new theM_protractor_test.ProtractorTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_protractor_test.ProtractorTest_Prototype;

            aPrototype._v_Type = "ProtractorParmsSpecTest";

            aPrototype._v_Module = null;

            aPrototype._v_ReusableHelpers = null;




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_ProtractorTest( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ProtractorParmsSpecTest = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ProtractorTest.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_ReusableHelpers = { };

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_ProtractorTest", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_ProtractorParmsSpecTest){}/* CQT */
            aPrototype._pInit_ProtractorParmsSpecTest = _pInit_ProtractorParmsSpecTest;


















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ProtractorParmsSpecTest( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ProtractorParmsSpecTest = function( theReleaseParms, theReleaseDone) {
               
                if( this._v_ReusableHelpers) {
                    var someReusableHelpersKeys = Object.keys( this._v_ReusableHelpers);
                    if( someReusableHelpersKeys) {
                        var aNumReusableHelpersKeys = someReusableHelpersKeys.length;
                        for( var aReusableHelpersKeyIdx=0; aReusableHelpersKeyIdx < aNumReusableHelpersKeys; aReusableHelpersKeyIdx++) {
                            var aReusableHelpersKey = someReusableHelpersKeys[ aReusableHelpersKeyIdx];
                            if( aReusableHelpersKey) {

                                var aReusableHelpers = this._v_ReusableHelpers[ aReusableHelpersKey];
                                if( aReusableHelpers) {
                                    if( typeof aReusableHelpers._pRelease == "function") {
                                        aReusableHelpers._pRelease( theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }
                this._v_ReusableHelpers   =  undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ProtractorTest.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ProtractorParmsSpecTest){}/* CQT */
            aPrototype._pRelease_ProtractorParmsSpecTest = _pRelease_ProtractorParmsSpecTest;











            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }
                

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);


                if( this._v_ReusableHelpers) {
                    var someReusableHelpersKeys = Object.keys( this._v_ReusableHelpers);
                    if( someReusableHelpersKeys) {
                        var aNumReusableHelpersKeys = someReusableHelpersKeys.length;
                        for( var aReusableHelpersKeyIdx=0; aReusableHelpersKeyIdx < aNumReusableHelpersKeys; aReusableHelpersKeyIdx++) {
                            var aReusableHelpersKey = someReusableHelpersKeys[ aReusableHelpersKeyIdx];
                            if( aReusableHelpersKey) {

                                var aReusableHelpers = this._v_ReusableHelpers[ aReusableHelpersKey];
                                if( aReusableHelpers) {
                                    if( theReleaseChildren.indexOf( aReusableHelpers) < 0) {
                                        theReleaseChildren.push( aReusableHelpers);
                                        if( typeof aReusableHelpers._pReleaseChildrenInto == "function") {
                                            aReusableHelpers._pReleaseChildrenInto( theReleaseChildren);
                                        }
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

                this.pCleanUpTest_ProtractorParmsSpecTest( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;




            


            var pCleanUpTest_ProtractorParmsSpecTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_CONFIGS)) {

                    if( this._v_ReusableHelpers) {
                        var someReusableHelpersKeys = Object.keys( this._v_ReusableHelpers);
                        if( someReusableHelpersKeys) {
                            var aNumReusableHelpersKeys = someReusableHelpersKeys.length;
                            for( var aReusableHelpersKeyIdx=0; aReusableHelpersKeyIdx < aNumReusableHelpersKeys; aReusableHelpersKeyIdx++) {
                                var aReusableHelpersKey = someReusableHelpersKeys[ aReusableHelpersKeyIdx];
                                if( aReusableHelpersKey) {

                                    var aReusableHelpers = this._v_ReusableHelpers[ aReusableHelpersKey];
                                    if( aReusableHelpers) {
                                        if( typeof aReusableHelpers.pCleanUpTest == "function") {
                                            aReusableHelpers.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ProtractorTest.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ProtractorParmsSpecTest){}/* CQT */
            aPrototype.pCleanUpTest_ProtractorParmsSpecTest = pCleanUpTest_ProtractorParmsSpecTest;














            var fProtractorConf = function() {

                var someParmsToResolve = [ this.PARM_PROTRACTOR];

                var someResolutionsByName = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);
                if( !someResolutionsByName) {
                    return null;
                }

                var aProtractorConfResolution = someResolutionsByName[ this.PARM_PROTRACTOR];
                if( !aProtractorConfResolution || !aProtractorConfResolution._v_Success || !aProtractorConfResolution._v_ParmValue) {
                    return null;
                }
                var aProtractorConf = aProtractorConfResolution._v_ParmValue;




                var aProtractorConfigParser = new theM_protractor_configparser();

                aProtractorConfigParser.addConfig( aProtractorConf);

                var aProtractorConfig = aProtractorConfigParser.getConfig();




                var someSpecs = aProtractorConfig.specs;
                if( someSpecs) {

                    var someActualSpecs   = [ ];

                    var aNumSpecs = someSpecs.length;
                    for( var aSpecIdx=0; aSpecIdx < aNumSpecs; aSpecIdx++) {

                        var aSpec = someSpecs[ aSpecIdx];
                        if( aSpec) {

                            if( aSpec.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) < 0) {

                                if( typeof aSpec == "string") {
                                    someActualSpecs.push( aSpec);
                                    continue;
                                }

                                var aSpecObjectFunction = this.fHelpersFunction( aSpec);
                                if( aSpecObjectFunction) {
                                    someActualSpecs.push( aSpecObjectFunction);
                                }
                            }
                            else {
                                var someHelpersSpecs = this.fParmValueReplacement(  aSpec);
                                if( someHelpersSpecs) {

                                    var aSpecObjectFunction = this.fHelpersFunction( someHelpersSpecs);
                                    if( aSpecObjectFunction) {
                                        someActualSpecs.push( aSpecObjectFunction);
                                    }
                                }
                            }
                        }
                    }

                    aProtractorConfig.specs = someActualSpecs;
                }


                if( this.PROTRACTOR_SELENIUMADDRESS) {
                    aProtractorConfig.seleniumAddress =  this.PROTRACTOR_SELENIUMADDRESS;
                }

                return aProtractorConfig;
            };
            if( fProtractorConf){}/* CQT */
            aPrototype.fProtractorConf = fProtractorConf;








            var fHelpersFunction = function( theHelperSpecs) {

                if( !theHelperSpecs) {
                    return null;
                }

                if( !theHelperSpecs.length) {
                    return null;
                }

                var someHelperSpecs = theHelperSpecs;
                var aThis = this;

                var aHelpersFunction = (function() {
                    var someHelperSpecs_here = someHelperSpecs;
                    var aThis_here = aThis;

                    return (function() {

                        var aTopDescribeFunction = aThis_here.fTopDescribeFunctionForSpecs( someHelperSpecs_here);
                        if( !aTopDescribeFunction) {
                            return;
                        }

                        /* ******************************************
                         Submit a top protractor/jasmine "describe" for the helper specs

                         Shall schedule tests when TopDescribeFunction is executed
                         */

                        describe( "ProtractorParmsSpecTestDescribe", aTopDescribeFunction);

                    });
                })();
                if( aHelpersFunction){}/* CQT */

                return aHelpersFunction;
            };
            if( fHelpersFunction){}/* CQT */
            aPrototype.fHelpersFunction = fHelpersFunction;








            var fTopDescribeFunctionForSpecs = function( theHelperSpecs) {

                if( !theHelperSpecs) {
                    return null;
                }

                if( !theHelperSpecs.length) {
                    return null;
                }


                var someHelperSpecs = theHelperSpecs;
                var aThis = this;

                var aTopDescribeFunction = (function() {
                    var someHelperSpecs_here = someHelperSpecs;
                    var aThis_here     = aThis;

                    return (function() {

                        var aNumHelperSpecs = someHelperSpecs_here.length;
                        for( var aHelperSpecIdx=0; aHelperSpecIdx < aNumHelperSpecs; aHelperSpecIdx++) {

                            var aHelperSpec = someHelperSpecs_here[ aHelperSpecIdx];
                            if( aHelperSpec) {

                                aThis_here.pRunHelperSpec( aHelperSpec);

                            }
                        }

                    });
                })();
                if( aTopDescribeFunction){}/* CQT */

                return aTopDescribeFunction;
            };
            if( fTopDescribeFunctionForSpecs){}/* CQT */
            aPrototype.fTopDescribeFunctionForSpecs = fTopDescribeFunctionForSpecs;








            var pRunHelperSpec = function( theHelperSpec) {

                if( !theHelperSpec) {
                    return;
                }



                var aSpecName = theHelperSpec[ this.PARM_HELPER_NAME];


                var aConstructorModuleName = theHelperSpec[ this.PARM_HELPER_MODULE];
                if( !aConstructorModuleName) {
                    return;
                }

                var aConstructorName = theHelperSpec[ this.PARM_HELPER_CONSTRUCTORNAME];
                if( !aConstructorName) {
                    return;
                }




                var aMethodName = theHelperSpec[ this.PARM_HELPER_METHODNAME];

                var aReuseInstanceAsExtraParm = theHelperSpec[ this.PARM_HELPER_REUSEINSTANCEASEXTRAPARM];
                if( !aReuseInstanceAsExtraParm) {
                    if( !aMethodName) {
                        return;
                    }
                }



                var aHelperParms = theHelperSpec[ this.PARM_HELPER_PARMS];




                var aModule = theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( aConstructorModuleName);
                if( !aModule) {
                    return;
                }


                var aConstructor = aModule[ aConstructorName];
                if( !aConstructor) {
                    return;
                }




                var aTestHelper = null;

                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }

                var someExtraConstructorParms = theHelperSpec[ this.PARM_HELPER_EXTRACONSTRUCTORPARMS];
                if( !someExtraConstructorParms || !someExtraConstructorParms.length) {
                    aTestHelper = new aConstructor(
                        "TestHelper-" + aSpecName + "-For-" + aTitle ,
                        this._v_Configuration,
                        this._v_Identifier,
                        this._v_Recorder,
                        this
                    );
                }
                else {
                    var someConstructorParmValues = [
                        "TestHelper-" + aSpecName + "-For-" + aTitle ,
                        this._v_Configuration,
                        this._v_Identifier,
                        this._v_Recorder,
                        this
                    ];

                    var aNumExtraConstructorParms = someExtraConstructorParms.length;
                    for( var aExtraParmIdx=0; aExtraParmIdx < aNumExtraConstructorParms; aExtraParmIdx++) {

                        var anExtraParm = someExtraConstructorParms[ aExtraParmIdx];
                        if( anExtraParm) {

                            var anExtraParmValue = this._v_ReusableHelpers[ anExtraParm];
                            if( anExtraParmValue){}/* CQT */

                            someConstructorParmValues.push( anExtraParmValue);
                        }
                    }

                    var someActualArgs = [null].concat( someConstructorParmValues);
                    var aFactoryFunction = aConstructor.bind.apply( aConstructor, someActualArgs);
                    aTestHelper = new aFactoryFunction();
                }
                if( !aTestHelper) {
                    return;
                }




                if( aReuseInstanceAsExtraParm) {
                    this._v_ReusableHelpers[ aReuseInstanceAsExtraParm] = aTestHelper;
                }


                if( aMethodName) {

                    var aMethod = aTestHelper[ aMethodName];
                    if( !aMethod) {
                        return;
                    }

                    aMethod.apply( aTestHelper, [ aHelperParms]);
                }

            };
            if( pRunHelperSpec){}/* CQT */
            aPrototype.pRunHelperSpec = pRunHelperSpec;









            return aPrototype;

        })();




        var ProtractorParmsSpecTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_protractor_test.ProtractorTest_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ReusableHelpers = null;

            this._pInit_ProtractorParmsSpecTest( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        ProtractorParmsSpecTest_Constructor.prototype = aProtractorParmsSpecTest_Prototype;





        var ProtractorParmsSpecTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_protractor_test.ProtractorTest_Prototype;

            this._v_Prototype = aProtractorParmsSpecTest_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ReusableHelpers = null;
        };
        ProtractorParmsSpecTest_SuperPrototypeConstructor.prototype = ProtractorParmsSpecTest_SuperPrototypeConstructor;



        var aModule = {
            "ProtractorParmsSpecTest_Prototype": aProtractorParmsSpecTest_Prototype,
            "ProtractorParmsSpecTest_Constructor": ProtractorParmsSpecTest_Constructor,
            "ProtractorParmsSpecTest_SuperPrototypeConstructor": ProtractorParmsSpecTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aProtractorParmsSpecTest_Prototype._v_Module = aModule;


        return aModule;
    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_protractor_test            = require('./protractor-test');
            var aM_parms_general              = require('../general-test/parms-general');
            var aM_overrider                  = require('../common-test/overrider');
            var aM_sentinels                  = require('../common-test/sentinels');
            var aM_cmploader                  = require('../common-test/resloader/cmploader');
            var aM_protractor_runner          = require('../protractor-131-relaunchable/lib/runner');
            var aM_protractor_configparser    = require('../protractor-131-relaunchable/lib/configParser');


            return aMod_definer(
                aM_protractor_test,
                aM_parms_general,
                aM_overrider,
                aM_sentinels,
                aM_cmploader,
                aM_protractor_runner,
                aM_protractor_configparser
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./protractor-test",
            "../general-test/parms-general",
            "../common-test/overrider",
            "../common-test/sentinels",
            "../common-test/resloader/cmploader",
            "../protractor-131-relaunchable/lib/runner",
            "../protractor-131-relaunchable/lib/configParser"
        ], function (
                theM_protractor_test,
                theM_parms_general,
                theM_overrider,
                theM_sentinels,
                theM_cmploader,
                theM_protractor_runner,
                theM_protractor_configparser
            ) {
            return aMod_definer(
                theM_protractor_test,
                theM_parms_general,
                theM_overrider,
                theM_sentinels,
                theM_cmploader,
                theM_protractor_runner,
                theM_protractor_configparser
            );
        });
    }


}());


