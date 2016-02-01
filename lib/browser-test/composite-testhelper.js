
'use strict';

/*
 composite-testhelper.js
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
    var aMod_definer = function( theM_composable_testhelper,
                                 theM_forcedexception,
                                 theM_overrider) {

        var ModuleName     = "composite-testhelper";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






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
            }
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













        var aCompositeTestHelper_Prototype = (function() {


            var aPrototype = new theM_composable_testhelper.ComposableTestHelper_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_composable_testhelper.ComposableTestHelper_Prototype;

            aPrototype._v_Type = "CompositeTestHelper";

            aPrototype._v_Module = null;

            aPrototype._v_WidgetCtrlsHelper   = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theWidgetCtrlsHelper) {

                this._pInit_CompositeTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder, theWidgetCtrlsHelper);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_CompositeTestHelper = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                       theWidgetCtrlsHelper, theParentCtrlsHelper) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ComposableTestHelper.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder,
                                                                                 theWidgetCtrlsHelper, theParentCtrlsHelper]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_CompositeTestHelper", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_CompositeTestHelper){}/* CQT */
            aPrototype._pInit_CompositeTestHelper = _pInit_CompositeTestHelper;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_CompositeTestHelper( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_CompositeTestHelper = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ComposableTestHelper.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_CompositeTestHelper){}/* CQT */
            aPrototype._pRelease_CompositeTestHelper = _pRelease_CompositeTestHelper;












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

                this.pCleanUpTest_CompositeTestHelper( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_CompositeTestHelper = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ComposableTestHelper.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_CompositeTestHelper){}/* CQT */
            aPrototype.pCleanUpTest_CompositeTestHelper = pCleanUpTest_CompositeTestHelper;














            var fDoPtr_Edition = function( theComposite, theSelection) {

                var aMethodName = "fDoPtr_Edition";
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

                var anEditorName = theSelection[ "editorName"];
                if( !anEditorName) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!anEditorName", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, anEditorName, "anEditorName", null);
                }

                var someFieldEdits = theSelection[ "fieldEdits"];

                var aThis = this;

                if( !someFieldEdits || !someFieldEdits.length) {
                    return  this._v_WidgetCtrlsHelper.fDoPtr_EditorOpen( anEditorName)
                        .then( function() {
                            if( aThis.LOGMISSINGPARMS) {
                                aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_EMPTY, null, "!someFieldEdits || !someFieldEdits.length", null);
                            }
                            return  aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                        })
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorClose( anEditorName);
                        });
                }
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, someFieldEdits, "someFieldEdits", null);
                }

                return this._v_WidgetCtrlsHelper.fDoPtr_EditorOpen( anEditorName)
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_ChangeFields( theComposite, theSelection, someFieldEdits);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorCancel( anEditorName);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorOpen( anEditorName);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_ChangeFields( theComposite, theSelection, someFieldEdits);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorSave( anEditorName);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorRefresh( anEditorName);
                    })
                    .then( function() {
                        if( aThis.LOGDOPTRSTEPS) {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, null, null, null);
                        }
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                    });
            };
            if( fDoPtr_Edition){}/* CQT */
            aPrototype.fDoPtr_Edition = fDoPtr_Edition;








            var fDoPtr_Selection = function( theComposite, theSelection) {

                var aMethodName = "fDoPtr_Selection";
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

                var aRowSelectedPromise = null;

                var aFinder = theSelection[ "finder"];
                if( aFinder) {
                    aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCellWithFinder( aGridName, aFinder);
                }
                else {
                    var aSelectionIndex = theSelection[ "selectionIndex"];
                    if( !( typeof aSelectionIndex == "undefined")) {

                        aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCell( aGridName, aSelectionIndex, 0);
                    }
                }

                if( !aRowSelectedPromise) {

                    console.log( "ACV OJO 201410270622 Rather than return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep()  Should this throw an exception " + aMethodName + " !aRowSelectedPromise");

                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_FAIL, null, "!aRowSelectedPromise", null);

                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep()
                }


                var aThis = this;

                return aRowSelectedPromise
                    .then( function() {
                        return aThis.fDoPtr_Edition( theComposite, theSelection);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_UnpinTab( aGridName);
                    })
                    .then( function() {
                        return aThis.fDoPtr_SubGrids( theComposite, theSelection);
                    })
                    .then( function() {
                        if( aThis.LOGDOPTRSTEPS) {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, null, null, null);
                        }
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                    });
            };
            if( fDoPtr_Selection){}/* CQT */
            aPrototype.fDoPtr_Selection = fDoPtr_Selection;










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

                var someInSubGrids = theSelection[ "inSubGrids"];
                if( !someInSubGrids || !someInSubGrids.length) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, null, "!someInSubGrids || !someInSubGrids.length", null);
                    }
                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep()
                }

                var aFirstInSubGrid = someInSubGrids[ 0];

                var anAllInSubGridsPromise = this.fDoPtr_Composite( aFirstInSubGrid);


                var aThis = this;

                var aNumInSubGrids = someInSubGrids.length;
                for( var aInSubGridIdx=1; aInSubGridIdx < aNumInSubGrids; aInSubGridIdx++) {

                    var aInSubGrid = someInSubGrids[ aInSubGridIdx];
                    if( aInSubGrid) {

                        var aOneInSubGridPromiseFunction = (function() {

                            var aInSubGrid_here = aInSubGrid;
                            return function() {
                                return aThis.fDoPtr_Composite( aInSubGrid_here);
                            }
                        })();

                        anAllInSubGridsPromise = anAllInSubGridsPromise.then( aOneInSubGridPromiseFunction);
                    }
                }

                return anAllInSubGridsPromise.then( function() {
                    if( aThis.LOGDOPTRSTEPS) {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, null, null, null);
                    }
                    return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                });
            };
            if( fDoPtr_SubGrids){}/* CQT */
            aPrototype.fDoPtr_SubGrids = fDoPtr_SubGrids;











            var fDoPtr_Composite = function( theComposite) {

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


                var aRunningTestInfo = this.fRunningTestInfoAtCompositeSpec( theComposite);

                var aShowRunningTestPromise = this._v_WidgetCtrlsHelper.fDoPtr_ShowRunningTest( aRunningTestInfo);


                var aThis = this;

                var aGridRefreshedPromise = aShowRunningTestPromise
                    .then( function() {
                        aThis._v_WidgetCtrlsHelper.fDoPtr_SelectTab( aGridName)
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_PinTab( aGridName);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_RefreshGrid( aGridName);
                    });



                var someSelections = theComposite[ "selections"];
                if( !someSelections || !someSelections.length) {
                    return aGridRefreshedPromise
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep()
                        })
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_UnpinTab( aGridName);
                        });
                }




                var aComposite = theComposite;

                var anAllSelectionsPromise = aGridRefreshedPromise;


                var aNumSelections = someSelections.length;
                for( var aSelectionIdx=0; aSelectionIdx < aNumSelections; aSelectionIdx++) {

                    var aSelection = someSelections[ aSelectionIdx];
                    if( aSelection) {

                        var aOneSelectionPromiseFunction = (function() {

                            var aComposite_here = aComposite;
                            var aSelection_here = aSelection;
                            return function() {
                                return aThis.fDoPtr_Selection( aComposite_here, aSelection_here);
                            }
                        })();

                        anAllSelectionsPromise = anAllSelectionsPromise.then( aOneSelectionPromiseFunction);
                    }
                }

                return anAllSelectionsPromise.then( function() {
                    if( aThis.LOGDOPTRSTEPS) {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, null, null, null);
                    }
                    return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                });
            };
            if( fDoPtr_Composite){}/* CQT */
            aPrototype.fDoPtr_Composite = fDoPtr_Composite;







            return aPrototype;

        })();




        var CompositeTestHelper_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                        theWidgetCtrlsHelper, theParentCtrlsHelper) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composable_testhelper.ComposableTestHelper_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_CompositeTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder,
                                             theWidgetCtrlsHelper, theParentCtrlsHelper);

        };
        CompositeTestHelper_Constructor.prototype = aCompositeTestHelper_Prototype;





        var CompositeTestHelper_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composable_testhelper.ComposableTestHelper_Prototype;

            this._v_Prototype = aCompositeTestHelper_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;
        };
        CompositeTestHelper_SuperPrototypeConstructor.prototype = aCompositeTestHelper_Prototype;



        var aModule = {
            "CompositeTestHelper_Prototype": aCompositeTestHelper_Prototype,
            "CompositeTestHelper_Constructor": CompositeTestHelper_Constructor,
            "CompositeTestHelper_SuperPrototypeConstructor": CompositeTestHelper_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aCompositeTestHelper_Prototype._v_Module = aModule;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_composite_testhelper   = require('./composable-testhelper');
            var aM_forcedexception     = require('../common-test/forcedexception');
            var aM_overrider           = require('../common-test/overrider');

            return aMod_definer(
                aM_composite_testhelper,
                aM_forcedexception,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./composable-testhelper",
            "../common-test/forcedexception",
            "../common-test/overrider"
        ], function (
            theM_composable_testhelper,
            theM_forcedexception,
            theM_overrider
            ) {
            return aMod_definer(
                theM_composable_testhelper,
                theM_forcedexception,
                theM_overrider
            );
        });
    }


}());


































