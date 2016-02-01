
'use strict';

/*
 multicomposite-testhelper.js
 Created 201410191958
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
    var aMod_definer = function( theM_common_testhelper,
                                 theM_forcedexception,
                                 theM_overrider,
                                 theM_cmploader) {

        var ModuleName     = "multicomposite-testhelper";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.PARM_ONECOMPOSITE_MODULE_DEFAULT           = "@cmppath/browser-test/composite-testhelper";
            theToInit.PARM_ONECOMPOSITE_CONSTRUCTORNAME_DEFAULT  = "CompositeTestHelper_Constructor";
            theToInit.PARM_ONECOMPOSITE_METHODNAME_DEFAULT       = "fDoPtr_Composite";

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


            theToInit.PARM_MULTICOMPOSITE = "multiComposite";

            theToInit.PARM_MULTICOMPOSITE_NAME           = "name";
            theToInit.PARM_MULTICOMPOSITE_COMPOSITESPECS = "compositeSpecs";


            theToInit.PARMS_MULTICOMPOSITE = [
                theToInit.PARM_MULTICOMPOSITE_NAME,
                theToInit.PARM_MULTICOMPOSITE_COMPOSITESPECS
            ];

            theToInit.PARM_ONECOMPOSITE_MODULE           = "module";
            theToInit.PARM_ONECOMPOSITE_CONSTRUCTORNAME  = "constructorName";
            theToInit.PARM_ONECOMPOSITE_METHODNAME       = "methodName";

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













        var aMultiCompositeTestHelper_Prototype = (function() {


            var aPrototype = new theM_common_testhelper.CommonTestHelper_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            aPrototype._v_Type = "MultiCompositeTestHelper";

            aPrototype._v_Module = null;



            aPrototype._v_ProtractorTest = null;

            aPrototype._v_WidgetCtrlsHelper   = null;

            aPrototype._v_CompositeHelpers    = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest,
                                   theWidgetCtrlsHelper) {

                this._pInit_MultiCompositeTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest,
                                                      theWidgetCtrlsHelper);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_MultiCompositeTestHelper = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest,
                                                            theWidgetCtrlsHelper) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_CommonTestHelper.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_ProtractorTest = theProtractorTest;

                this._v_WidgetCtrlsHelper   = theWidgetCtrlsHelper;

                this._v_CompositeHelpers    = [ ];

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_MultiCompositeTestHelper", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_MultiCompositeTestHelper){}/* CQT */
            aPrototype._pInit_MultiCompositeTestHelper = _pInit_MultiCompositeTestHelper;

















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_MultiCompositeTestHelper( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;








            var _pRelease_MultiCompositeTestHelper = function( theReleaseParms, theReleaseDone) {


                if( this._v_WidgetCtrlsHelper) {
                    if( typeof this._v_WidgetCtrlsHelper._pRelease == "function") {
                        this._v_WidgetCtrlsHelper._pRelease( theReleaseParms, theReleaseDone);
                    }
                }

                this._v_WidgetCtrlsHelper = undefined;

                if( this._v_CompositeHelpers) {

                    var aNumCompositeHelpers = this._v_CompositeHelpers.length;
                    if( aNumCompositeHelpers) {
                        for( var aCompositeHelperIdx=0; aCompositeHelperIdx < aNumCompositeHelpers; aCompositeHelperIdx++) {
                            var aCompositeHelper = this._v_CompositeHelpers[ aCompositeHelperIdx];
                            if( aCompositeHelper) {
                                if( typeof aCompositeHelper._pRelease == "function") {
                                    aCompositeHelper._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }

                        }
                    }

                }

                this._v_CompositeHelpers = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_CommonTestHelper.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_MultiCompositeTestHelper){}/* CQT */
            aPrototype._pRelease_MultiCompositeTestHelper = _pRelease_MultiCompositeTestHelper;











            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);


                if( this._v_WidgetCtrlsHelper) {
                    if( typeof this._v_WidgetCtrlsHelper._pReleaseChildrenInto == "function") {
                        this._v_WidgetCtrlsHelper._pReleaseChildrenInto( theReleaseChildren);
                    }
                }

                if( this._v_CompositeHelpers) {

                    var aNumCompositeHelpers = this._v_CompositeHelpers.length;
                    if( aNumCompositeHelpers) {
                        for( var aCompositeHelperIdx=0; aCompositeHelperIdx < aNumCompositeHelpers; aCompositeHelperIdx++) {
                            var aCompositeHelper = this._v_CompositeHelpers[ aCompositeHelperIdx];
                            if( aCompositeHelper) {
                                if( theReleaseChildren.indexOf( aCompositeHelper) < 0) {
                                    theReleaseChildren.push( aCompositeHelper);
                                    if( typeof aCompositeHelper._pReleaseChildrenInto == "function") {
                                        aCompositeHelper._pReleaseChildrenInto( theReleaseChildren);
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

                this.pCleanUpTest_MultiCompositeTestHelper( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_MultiCompositeTestHelper = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {

                    if( this._v_WidgetCtrlsHelper) {
                        if( typeof this._v_WidgetCtrlsHelper.pCleanUpTest == "function") {
                            this._v_WidgetCtrlsHelper.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                        }
                    }

                    if( this._v_CompositeHelpers) {

                        var aNumCompositeHelpers = this._v_CompositeHelpers.length;
                        if( aNumCompositeHelpers) {
                            for( var aCompositeHelperIdx=0; aCompositeHelperIdx < aNumCompositeHelpers; aCompositeHelperIdx++) {
                                var aCompositeHelper = this._v_CompositeHelpers[ aCompositeHelperIdx];
                                if( aCompositeHelper) {
                                    if( typeof aCompositeHelper.pCleanUpTest == "function") {
                                        aCompositeHelper.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }

                            }
                        }
                    }
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_CommonTestHelper.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_MultiCompositeTestHelper){}/* CQT */
            aPrototype.pCleanUpTest_MultiCompositeTestHelper = pCleanUpTest_MultiCompositeTestHelper;












            var fDoPtr_SubGrids = function( theComposite, theSelection) {

                var aMethodName = "fDoPtr_SubGrids";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !theComposite) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theComposite", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theSelection) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theSelection", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridName = theComposite[ "inGridNamed"];
                if( !aGridName) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!aGridName", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aGridName, "aGridName", null);
                }

                var someComposites = theSelection[ "inSubGrids"];
                if( !someComposites || !someComposites.length) {
                    if( this.LOGDOPTRSTEPS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, null, "theSelection[ 'inSubGrids'']", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep()
                }

                var aFirstComposite = someComposites[ 0];

                var anAllCompositesPromise = this.fDoPtr_Composite( aFirstComposite);


                var aThis = this;

                var aNumComposites = someComposites.length;
                for( var aCompositeIdx=1; aCompositeIdx < aNumComposites; aCompositeIdx++) {

                    var aComposite = someComposites[ aCompositeIdx];
                    if( aComposite) {

                        var aOneCompositePromiseFunction = (function() {

                            var aComposite_here = aComposite;
                            return function() {
                                return aThis.fDoPtr_Composite( aComposite_here);
                            }
                        })();

                        anAllCompositesPromise = anAllCompositesPromise.then( aOneCompositePromiseFunction);
                    }
                }


                return anAllCompositesPromise.then( function() {
                    if( aThis.LOGDOPTRSTEPS) {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, null, null, null);
                    }
                    return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                });
            };
            if( fDoPtr_SubGrids){}/* CQT */
            aPrototype.fDoPtr_SubGrids = fDoPtr_SubGrids;








            var fDoPtr_OneComposite = function( theComposite) {

                var aMethodName = "fDoPtr_Composite";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !this._v_WidgetCtrlsHelper) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!this._v_WidgetCtrlsHelper", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theComposite) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theComposite", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep()
                }


                var aCompositeName = theComposite[ "name"];
                if( !aCompositeName) {
                    aCompositeName = "UnnamedComposite";
                }


                var aConstructorModuleName = theComposite[ this.PARM_ONECOMPOSITE_MODULE];
                if( !aConstructorModuleName) {
                    aConstructorModuleName = this.PARM_ONECOMPOSITE_MODULE_DEFAULT;
                    if( !aConstructorModuleName) {
                        if( this.LOGMISSINGPARMS) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theComposite[ this.PARM_ONECOMPOSITE_MODULE]", null);
                        }
                        return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                    }
                }


                var aConstructorName = theComposite[ this.PARM_ONECOMPOSITE_CONSTRUCTORNAME];
                if( !aConstructorName) {
                    aConstructorName = this.PARM_ONECOMPOSITE_CONSTRUCTORNAME_DEFAULT;
                    if( !aConstructorName) {
                        if( this.LOGMISSINGPARMS) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theComposite[ this.PARM_ONECOMPOSITE_CONSTRUCTORNAME]", null);
                        }
                        return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                    }
                }


                var aOneCompositeMethodName = theComposite[ this.PARM_ONECOMPOSITE_METHODNAME];
                if( !aOneCompositeMethodName) {
                    aOneCompositeMethodName = this.PARM_ONECOMPOSITE_METHODNAME_DEFAULT;
                    if( !aOneCompositeMethodName) {
                        if( this.LOGMISSINGPARMS) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theComposite[ this.PARM_ONECOMPOSITE_METHODNAME]", null);
                        }
                        return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                    }
                }



                var aModule = theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( aConstructorModuleName);
                if( !aModule) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_FAIL, null, "!theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( aConstructorModuleName)", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aConstructor = aModule[ aConstructorName];
                if( !aConstructor) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_FAIL, null, "!theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( aConstructorModuleName)[ aConstructorName]", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }



                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }

                var aCompositeHelper = new aConstructor(
                    aCompositeName + "-For-" + aTitle,
                    this._v_Configuration,
                    this._v_Identifier,
                    this._v_Recorder,
                    this._v_WidgetCtrlsHelper,
                    this
                );

                this._v_CompositeHelpers.push( aCompositeHelper);


                var aMethod = aCompositeHelper[ aOneCompositeMethodName];
                if( !aMethod) {
                    if( this.LOGDOPTRSTEPS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_FAIL, null, "!theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( aConstructorModuleName)[ aConstructorName][ aOneCompositeMethodName]", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aThis = this;
                return aMethod.apply( aCompositeHelper, [ theComposite])
                    .then( function() {
                        if( aThis.LOGDOPTRSTEPS) {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, null, null, null);
                        }
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_CompositeEnd()
                    });
            };
            if( fDoPtr_OneComposite){}/* CQT */
            aPrototype.fDoPtr_OneComposite = fDoPtr_OneComposite;







            var fRunningTestInfo = function( ) {

                var aRunningTestInfo = this._v_WidgetCtrlsHelper.fNewVoidRunningTestInfo();
                aRunningTestInfo[ "top"]     = this._v_Title;
                aRunningTestInfo[ "full"]    = [ this._v_Title];
                aRunningTestInfo[ "current"] = this._v_Title;
                return aRunningTestInfo;
            };
            if( fRunningTestInfo){}/* CQT */
            aPrototype.fRunningTestInfo = fRunningTestInfo;




            var fRunningTestInfoOneHelper = function( theOneHelperName) {

                var aRunningTestInfo = this.fRunningTestInfo();

                aRunningTestInfo[ "current"] = theOneHelperName;
                aRunningTestInfo[ "full"].push( theOneHelperName);

                return aRunningTestInfo;
            };
            if( fRunningTestInfoOneHelper){}/* CQT */
            aPrototype.fRunningTestInfoOneHelper = fRunningTestInfoOneHelper;







            var fItPtrFunction_Composites = function( theHelperName, theHelperParms) {

                var aMethodName = "fItFunctionForComposite";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }


                if( !theHelperParms) {
                    return null;
                }

                var someHelperParms = theHelperParms;
                var aThis = this;

                var aItFunction = (function() {
                    var someHelperParms_here = someHelperParms;
                    var aThis_here     = aThis;

                    return (function() {

                        var someMultiCompositeParms = someHelperParms_here[ aThis_here.PARM_MULTICOMPOSITE];
                        if( !someMultiCompositeParms) {
                            if( this.LOGMISSINGPARMS) {
                                aThis_here.fPtrRecord( aMethodName, aThis_here.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!someHelperParms_here[ aThis_here.PARM_MULTICOMPOSITE]", null);
                            }
                            return aThis_here._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                        }




                        var aRunningTestInfo = aThis_here.fRunningTestInfoOneHelper( theHelperName);

                        var anAllCompositesPromise = aThis_here._v_WidgetCtrlsHelper.fDoPtr_ShowRunningTest( aRunningTestInfo);


                        var someComposites = someMultiCompositeParms[ aThis_here.PARM_MULTICOMPOSITE_COMPOSITESPECS];


                        var aThis = aThis_here;

                        var aNumComposites = someComposites.length;
                        for( var aCompositeIdx=0; aCompositeIdx < aNumComposites; aCompositeIdx++) {

                            var aComposite = someComposites[ aCompositeIdx];
                            if( aComposite) {

                                var aOneCompositePromiseFunction = (function() {
                                    var aComposite_here = aComposite;
                                    var aThis_here_here = aThis_here;

                                    return ( function() {
                                        return aThis_here_here.fDoPtr_OneComposite( aComposite_here);
                                    });
                                })();

                                if( !anAllCompositesPromise) {
                                    anAllCompositesPromise = aOneCompositePromiseFunction();
                                }
                                else {
                                    anAllCompositesPromise = anAllCompositesPromise.then( aOneCompositePromiseFunction);
                                }
                            }
                        }

                        var aThis_here_here = aThis_here;

                        return anAllCompositesPromise
                            .then( function() {
                                if( aThis_here_here.LOGDOPTRSTEPS) {
                                    aThis_here_here.fPtrRecord( aMethodName, aThis_here_here.EVENTKIND_BROWSERHELPER_OK, null, null, null);
                                }
                                return aThis._v_WidgetCtrlsHelper.fAtPtr_CompositeEnd()
                            });
                    });
                })();
                if( aItFunction){}/* CQT */

                return aItFunction;
            };
            if( fItPtrFunction_Composites){}/* CQT */
            aPrototype.fItPtrFunction_Composites = fItPtrFunction_Composites;








            var pDoPtr_MultiComposite = function( theHelperParms) {

                var aMethodName = "fDoPtr_MultiComposite";

                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !this._v_WidgetCtrlsHelper) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!this._v_WidgetCtrlsHelper", null);
                    }
                    return;
                }

                if( !theHelperParms) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theHelperParms", null);
                    }
                    return;
                }



                var aHelperName = null;
                var someParmsLogin = theHelperParms[ this.PARM_MULTICOMPOSITE];
                if( someParmsLogin) {
                    aHelperName = someParmsLogin[ this.PARM_MULTICOMPOSITE_NAME];
                }
                if( !aHelperName) {
                    aHelperName = "UnnamedHelper";
                }


                var aItPtrFunction_Composites = this.fItPtrFunction_Composites( aHelperName, theHelperParms);
                if( !aItPtrFunction_Composites) {
                    return;
                }


                /* ******************************************
                 Submit a protractor/jasmine "it"

                 Shall schedule tests when ItPtrFunction is executed
                 */

                it( aHelperName, aItPtrFunction_Composites);



            };
            if( pDoPtr_MultiComposite){}/* CQT */
            aPrototype.pDoPtr_MultiComposite = pDoPtr_MultiComposite;















            return aPrototype;

        })();




        var MultiCompositeTestHelper_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest,
                                                             theWidgetCtrlsHelper) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ProtractorTest = null;

            this._v_WidgetCtrlsHelper   = null;

            this._v_CompositeHelpers    = null;

            this._pInit_MultiCompositeTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest,
                                                  theWidgetCtrlsHelper);

        };
        MultiCompositeTestHelper_Constructor.prototype = aMultiCompositeTestHelper_Prototype;





        var MultiCompositeTestHelper_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = aMultiCompositeTestHelper_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ProtractorTest = null;

            this._v_WidgetCtrlsHelper   = null;

            this._v_CompositeHelpers    = null;
        };
        MultiCompositeTestHelper_SuperPrototypeConstructor.prototype = aMultiCompositeTestHelper_Prototype;



        var aModule = {
            "MultiCompositeTestHelper_Prototype": aMultiCompositeTestHelper_Prototype,
            "MultiCompositeTestHelper_Constructor": MultiCompositeTestHelper_Constructor,
            "MultiCompositeTestHelper_SuperPrototypeConstructor": MultiCompositeTestHelper_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aMultiCompositeTestHelper_Prototype._v_Module = aModule;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_common_testhelper    = require('./common-testhelper');
            var aM_forcedexception      = require('../common-test/forcedexception');
            var aM_overrider            = require('../common-test/overrider');
            var aM_cmploader            = require('../common-test/resloader/cmploader');

            return aMod_definer(
                aM_common_testhelper,
                aM_forcedexception,
                aM_overrider,
                aM_cmploader
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./common-testhelper",
            "../common-test/forcedexception",
            "../common-test/overrider",
            "../common-test/resloader/cmploader"
        ], function (
                theM_common_testhelper,
                theM_forcedexception,
                theM_overrider,
                theM_cmploader
            ) {
            return aMod_definer(
                theM_common_testhelper,
                theM_forcedexception,
                theM_overrider,
                theM_cmploader
            );
        });
    }


}());


































