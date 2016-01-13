
'use strict';

/*
 multiaction-testhelper.js
 Creado 201410191958
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
    var aMod_definer = function( theM_composable_testhelper,
                                 theM_forcedexception,
                                 theM_overrider) {

        var ModuleName     = "multiaction-testhelper";
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
            }


            theToInit.ACTIONKIND_GRID            = "GRID";
            theToInit.ACTIONKIND_SHOWTAB         = "SHOWTAB";
            theToInit.ACTIONKIND_SHOWGRID        = "SHOWGRID";
            theToInit.ACTIONKIND_SELECT          = "SELECT";
            theToInit.ACTIONKIND_SELECTIFEXISTS  = "SELECTIFEXISTS";
            theToInit.ACTIONKIND_EDIT            = "EDIT";
            theToInit.ACTIONKIND_DELETE          = "DELETE";
            theToInit.ACTIONKIND_CREATE          = "CREATE";
            theToInit.ACTIONKIND_ALLARGUMENTS    = "ALLARGUMENTS";
            theToInit.ACTIONKIND_ANYARGUMENTS    = "ANYARGUMENTS";
            theToInit.ACTIONKIND_APPLYARGUMENTS  = "APPLYARGUMENTS";
            theToInit.ACTIONKIND_ARGUMENTS       = "ARGUMENTS";
            theToInit.ACTIONKIND_PAGEMAXSIZE     = "PAGEMAXSIZE";
            theToInit.ACTIONKIND_FIRSTPAGE    = "FIRSTPAGE";
            theToInit.ACTIONKIND_PREVPAGE     = "PREVPAGE";
            theToInit.ACTIONKIND_NEXTPAGE     = "NEXTPAGE";
            theToInit.ACTIONKIND_LASTPAGE     = "LASTPAGE";

            theToInit.ACTIONKIND_SELECTOR        = "SELECTOR";


            theToInit.ACTIONSKINDS = [
                theToInit.ACTIONKIND_GRID,
                theToInit.ACTIONKIND_SHOWTAB,
                theToInit.ACTIONKIND_SHOWGRID,
                theToInit.ACTIONKIND_SELECT,
                theToInit.ACTIONKIND_SELECTIFEXISTS,
                theToInit.ACTIONKIND_EDIT,
                theToInit.ACTIONKIND_DELETE,
                theToInit.ACTIONKIND_CREATE,
                theToInit.ACTIONKIND_ALLARGUMENTS,
                theToInit.ACTIONKIND_ANYARGUMENTS,
                theToInit.ACTIONKIND_APPLYARGUMENTS,
                theToInit.ACTIONKIND_ARGUMENTS,
                theToInit.ACTIONKIND_PAGEMAXSIZE,
                theToInit.ACTIONKIND_FIRSTPAGE,
                theToInit.ACTIONKIND_PREVPAGE,
                theToInit.ACTIONKIND_NEXTPAGE,
                theToInit.ACTIONKIND_LASTPAGE,
                theToInit.ACTIONKIND_SELECTOR

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













        var aMultiActionTestHelper_Prototype = (function() {


            var aPrototype = new theM_composable_testhelper.ComposableTestHelper_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_composable_testhelper.ComposableTestHelper_Prototype;

            aPrototype._v_Type = "MultiActionTestHelper";

            aPrototype._v_Module = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                   theWidgetCtrlsHelper, theParentCtrlsHelper) {

                this._pInit_MultiActionTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder,
                    theWidgetCtrlsHelper, theParentCtrlsHelper);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_MultiActionTestHelper = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                         theWidgetCtrlsHelper, theParentCtrlsHelper) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ComposableTestHelper.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder,
                    theWidgetCtrlsHelper, theParentCtrlsHelper]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_MultiActionTestHelper", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_MultiActionTestHelper){}/* CQT */
            aPrototype._pInit_MultiActionTestHelper = _pInit_MultiActionTestHelper;













            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_MultiActionTestHelper( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_MultiActionTestHelper = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ComposableTestHelper.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_MultiActionTestHelper){}/* CQT */
            aPrototype._pRelease_MultiActionTestHelper = _pRelease_MultiActionTestHelper;











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

                this.pCleanUpTest_MultiActionTestHelper( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_MultiActionTestHelper = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ComposableTestHelper.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_MultiActionTestHelper){}/* CQT */
            aPrototype.pCleanUpTest_MultiActionTestHelper = pCleanUpTest_MultiActionTestHelper;



























            var fDoPtr_Action_Select = function( theGrid, theAction) {

                var aMethodName = "fDoPtr_Selection";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, theGrid);


                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theGrid", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridName = theGrid[ "gridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!aGridName", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aRowSelectedPromise = null;

                var aFinder = theAction[ "finder"];
                if( aFinder) {
                    aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCellWithFinder( aGridName, aFinder);
                }
                else {
                    var aSelectionIndex = theAction[ "selectionIndex"];
                    if( !( typeof aSelectionIndex == "undefined")) {

                        aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCell( aGridName, aSelectionIndex, 0);
                    }
                }

                if( !aRowSelectedPromise) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, theAction, null, theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                }


                var aThis = this;

                return aRowSelectedPromise
                    .then( function() {
                        return aThis.fDoPtr_SelectActions( theGrid, theAction)
                    })
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, theGrid);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });
            };
            if( fDoPtr_Action_Select){}/* CQT */
            aPrototype.fDoPtr_Action_Select = fDoPtr_Action_Select;








            var fDoPtr_Action_SelectIfExists = function( theGrid, theAction) {

                var aMethodName = "fDoPtr_Action_SelectIfExists";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, theGrid);


                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theGrid", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridName = theGrid[ "gridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!aGridName", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aRowSelectedPromise = null;

                var aFinder = theAction[ "finder"];
                if( aFinder) {
                    aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCellWithFinderIfExists( aGridName, aFinder);
                }
                else {
                    var aSelectionIndex = theAction[ "selectionIndex"];
                    if( !( typeof aSelectionIndex == "undefined")) {

                        aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCellIfExists( aGridName, aSelectionIndex, 0);
                    }
                }

                if( !aRowSelectedPromise) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, theAction, null, theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                }


                var aThis = this;

                return aRowSelectedPromise
                    .then(
                    function() {
                        return aThis.fDoPtr_SelectActions( theGrid, theAction);
                    },
                    function() {
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    }
                )
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, theGrid);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });
            };
            if( fDoPtr_Action_SelectIfExists){}/* CQT */
            aPrototype.fDoPtr_Action_SelectIfExists = fDoPtr_Action_SelectIfExists;
















            var fDoPtr_Action_SelectCandidateIfExists = function( theGrid, theAction, theFieldEditSpec) {

                var aMethodName = "fDoPtr_Action_SelectCandidateIfExists";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theFieldEditSpec, null, theAction);


                if( !theFieldEditSpec) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theFieldEditSpec, "!theFieldEditSpec", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                if( !theFieldEditSpec) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theFieldEditSpec, "!theFieldEditSpec", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aGridName = theFieldEditSpec[ "candidatesGridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theFieldEditSpec, "!theFieldEditSpec[ 'candidatesGridName']", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aRowSelectedPromise = null;

                var aFinder = theFieldEditSpec[ "candidateFinder"];
                if( aFinder) {
                    aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCellWithFinderIfExists( aGridName, aFinder);
                }
                else {
                    var aSelectionIndex = theFieldEditSpec[ "selectionIndex"];
                    if( !( typeof aSelectionIndex == "undefined")) {

                        aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCellIfExists( aGridName, aSelectionIndex, 0);
                    }
                }

                if( !aRowSelectedPromise) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, theFieldEditSpec, null, theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                }


                var aThis = this;

                return aRowSelectedPromise
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theFieldEditSpec, null, theAction);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });
            };
            if( fDoPtr_Action_SelectCandidateIfExists){}/* CQT */
            aPrototype.fDoPtr_Action_SelectCandidateIfExists = fDoPtr_Action_SelectCandidateIfExists;













            var fDoPtr_Action_Selector = function( theGrid, theAction) {

                var aMethodName = "fDoPtr_Selection";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, theGrid);


                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theGrid", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aSelectorName = theAction[ "selectorName"];
                if( !aSelectorName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!aSelectorName", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aRowSelectedPromise = null;

                var aFinder = theAction[ "finder"];
                if( aFinder) {
                    aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCellWithFinder( aSelectorName, aFinder);
                }
                else {
                    var aSelectionIndex = theAction[ "selectionIndex"];
                    if( !( typeof aSelectionIndex == "undefined")) {

                        aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCell( aSelectorName, aSelectionIndex, 0);
                    }
                }

                if( !aRowSelectedPromise) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, theAction, null, theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                }


                var aThis = this;

                return aRowSelectedPromise.then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, theGrid);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });
            };
            if( fDoPtr_Action_Selector){}/* CQT */
            aPrototype.fDoPtr_Action_Selector = fDoPtr_Action_Selector;









            var fDoPtr_Action_SelectorIfExists = function( theGrid, theAction) {

                var aMethodName = "fDoPtr_Action_SelectorIfExists";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, theGrid);


                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theGrid", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aSelectorName = theAction[ "selectorName"];
                if( !aSelectorName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!aSelectorName", theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aRowSelectedPromise = null;

                var aFinder = theAction[ "finder"];
                if( aFinder) {
                    aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCellWithFinderIfExists( aSelectorName, aFinder);
                }
                else {
                    var aSelectionIndex = theAction[ "selectionIndex"];
                    if( !( typeof aSelectionIndex == "undefined")) {

                        aRowSelectedPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectRowCellIfExists( aSelectorName, aSelectionIndex, 0);
                    }
                }

                if( !aRowSelectedPromise) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, theAction, null, theGrid);
                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                }


                var aThis = this;

                return aRowSelectedPromise
                    .then(
                        function() {
                            return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                        },
                        function() {
                            return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                        }
                    )
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, theGrid);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });
            };
            if( fDoPtr_Action_SelectorIfExists){}/* CQT */
            aPrototype.fDoPtr_Action_SelectorIfExists = fDoPtr_Action_SelectorIfExists;












            var fDoPtr_Action_Edit = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_Edit";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);


                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var anEditorName = theAction[ "editorName"];
                if( !anEditorName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!anEditorName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var someFieldEdits = theAction[ "fieldEdits"];

                var aThis = this;

                if( !someFieldEdits || !someFieldEdits.length) {

                    return  this._v_WidgetCtrlsHelper.fDoPtr_EditorOpen( anEditorName)
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorClose( anEditorName);
                        })
                        .then( function() {
                            return  aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                        })
                        .then( function() {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_EMPTY, theAction, null, null);
                            return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                        });
                }



                var aEditorOpenedPromise = this._v_WidgetCtrlsHelper.fDoPtr_EditorOpen( anEditorName);

                var anAfterCancelPromise = aEditorOpenedPromise;

                var aDoCancel  = theAction[ "doCancel"];
                if( aDoCancel) {
                    anAfterCancelPromise = aEditorOpenedPromise
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_ChangeFields( theGrid, theAction);
                        })
                        .then( function() {
                            return aThis.fDoPtr_Action_Candidates( theGrid, theAction);
                        })
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorCancel( anEditorName);
                        });
                }


                var aDoNotSave = theAction[ "doNotSave"];
                if( aDoNotSave) {
                    return anAfterCancelPromise
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_ChangeFields( theGrid, theAction);
                        })
                        .then( function() {
                            return aThis.fDoPtr_Action_Candidates( theGrid, theAction);
                        })
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorClose( anEditorName);
                        })
                        .then( function() {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, null);
                            return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                        });
                }

                var aDoNotRefresh = theAction[ "noRefresh"];
                if( aDoNotRefresh) {
                    return anAfterCancelPromise
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_ChangeFields( theGrid, theAction);
                        })
                        .then( function() {
                            return aThis.fDoPtr_Action_Candidates( theGrid, theAction);
                        })
                        .then( function() {
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorSave( anEditorName);
                        })
                        .then( function() {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, null);
                            return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                        });

                }

                return anAfterCancelPromise
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_ChangeFields( theGrid, theAction);
                    })
                    .then( function() {
                        return aThis.fDoPtr_Action_Candidates( theGrid, theAction);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorSave( anEditorName);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_EditorRefresh( anEditorName);
                    })
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, null);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });
            };
            if( fDoPtr_Action_Edit){}/* CQT */
            aPrototype.fDoPtr_Action_Edit = fDoPtr_Action_Edit;
















            var fDoPtr_Action_Candidates = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_Candidates";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);


                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var anEditorName = theAction[ "editorName"];
                if( !anEditorName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!anEditorName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var someFieldEdits = theAction[ "fieldEdits"];
                if( !someFieldEdits || !someFieldEdits.length) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, theAction, "!someFieldEdits || !someFieldEdits.length", null);

                    return  this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                }


                var anAllActionsPromise = null;

                var aGrid    = theGrid;
                var anAction = theAction;
                var aThis = this;

                var aNumFieldChangeSpecs = someFieldEdits.length;
                if( aNumFieldChangeSpecs) {

                    for( var aFieldChangeSpecIdx=0; aFieldChangeSpecIdx < aNumFieldChangeSpecs; aFieldChangeSpecIdx++) {

                        var aFieldChangeSpec = someFieldEdits[ aFieldChangeSpecIdx];
                        if( aFieldChangeSpec) {

                            var aIsCandidates = aFieldChangeSpec[ "candidates"];
                            if( !aIsCandidates) {
                                continue;
                            }

                            if( aThis.LOGDOPTRSTEPS) {
                                aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, aFieldChangeSpec, "aFieldChangeSpec", null);
                            }

                            var aFieldName = aFieldChangeSpec[ "fieldName"];
                            if( aFieldName) {

                                var anAfterSelectCandidatePromise =
                                    this._v_WidgetCtrlsHelper.fDoPtr_CandidatesOpen( anEditorName, aFieldChangeSpec)
                                        .then( (function() {
                                            var aGrid_here    = aGrid;
                                            var anAction_here = anAction;
                                            var aFieldChangeSpec_here = aFieldChangeSpec;
                                            return (function() {
                                                return aThis.fDoPtr_Action_SelectCandidateIfExists( aGrid_here, anAction_here, aFieldChangeSpec_here);
                                            });
                                        })());


                                if( anAfterSelectCandidatePromise) {
                                    if( !anAllActionsPromise) {
                                        anAllActionsPromise = anAfterSelectCandidatePromise
                                    }
                                    else {
                                        anAllActionsPromise = anAllActionsPromise.then( anAfterSelectCandidatePromise);
                                    }
                                }
                            }
                        }
                    }
                }

                if( !anAllActionsPromise) {
                    return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                }


                return anAllActionsPromise
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, theGrid);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });
            };
            if( fDoPtr_Action_Candidates){}/* CQT */
            aPrototype.fDoPtr_Action_Candidates = fDoPtr_Action_Candidates;







            var fDoPtr_Action_CreatorCandidates = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_CreatorCandidates";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);


                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var anEditorName = theAction[ "creatorName"];
                if( !anEditorName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!anEditorName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var someFieldEdits = theAction[ "fieldInits"];
                if( !someFieldEdits || !someFieldEdits.length) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, theAction, "!someFieldEdits || !someFieldEdits.length", null);

                    return  this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                }


                var anAllActionsPromise = null;

                var aGrid    = theGrid;
                var anAction = theAction;
                var aThis = this;

                var aNumFieldChangeSpecs = someFieldEdits.length;
                if( aNumFieldChangeSpecs) {

                    for( var aFieldChangeSpecIdx=0; aFieldChangeSpecIdx < aNumFieldChangeSpecs; aFieldChangeSpecIdx++) {

                        var aFieldChangeSpec = someFieldEdits[ aFieldChangeSpecIdx];
                        if( aFieldChangeSpec) {

                            var aIsCandidates = aFieldChangeSpec[ "candidates"];
                            if( !aIsCandidates) {
                                continue;
                            }

                            if( aThis.LOGDOPTRSTEPS) {
                                aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, aFieldChangeSpec, "aFieldChangeSpec", null);
                            }

                            var aFieldName = aFieldChangeSpec[ "fieldName"];
                            if( aFieldName) {

                                var anAfterSelectCandidatePromise =
                                    this._v_WidgetCtrlsHelper.fDoPtr_CreatorCandidatesOpen( anEditorName, aFieldChangeSpec)
                                        .then( (function() {
                                            var aGrid_here    = aGrid;
                                            var anAction_here = anAction;
                                            var aFieldChangeSpec_here = aFieldChangeSpec;
                                            return (function() {
                                                return aThis.fDoPtr_Action_SelectCandidateIfExists( aGrid_here, anAction_here, aFieldChangeSpec_here);
                                            });
                                        })());


                                if( anAfterSelectCandidatePromise) {
                                    if( !anAllActionsPromise) {
                                        anAllActionsPromise = anAfterSelectCandidatePromise
                                    }
                                    else {
                                        anAllActionsPromise = anAllActionsPromise.then( anAfterSelectCandidatePromise);
                                    }
                                }
                            }
                        }
                    }
                }

                if( !anAllActionsPromise) {
                    return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                }


                return anAllActionsPromise
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, theGrid);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });
            };
            if( fDoPtr_Action_CreatorCandidates){}/* CQT */
            aPrototype.fDoPtr_Action_CreatorCandidates = fDoPtr_Action_CreatorCandidates;









            var fDoPtr_Action_Delete = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_Delete";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);

                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theGrid", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theAction", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridName = theGrid[ "gridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!aGridName", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aThis = this;

                return this._v_WidgetCtrlsHelper.fDoPtr_SelectionDelete( aGridName)
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, null);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });

            };
            if( fDoPtr_Action_Delete){}/* CQT */
            aPrototype.fDoPtr_Action_Delete = fDoPtr_Action_Delete;










            var fDoPtr_Action_Create = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_Create";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);

                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theGrid", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theAction", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridName = theGrid[ "gridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!aGridName", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aCreatorName = theAction[ "creatorName"];
                if( !aCreatorName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!aCreatorName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var someFieldEdits = theAction[ "fieldInits"];

                var aThis = this;

                if( !someFieldEdits || !someFieldEdits.length) {

                    return  this._v_WidgetCtrlsHelper.fDoPtr_CreatorOpen( aGridName)
                        .then( function() {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_EMPTY, theAction, null, null);
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_CreatorCancel( aCreatorName);
                        })
                        .then( function() {
                            return  aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                        })
                        .then( function() {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_EMPTY, theAction, null, null);
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_CreatorCancel( aCreatorName);
                        });
                }




                return this._v_WidgetCtrlsHelper.fDoPtr_CreatorOpen( aGridName)
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_InitFields( theGrid, theAction);
                    })
                    .then( function() {
                        return aThis.fDoPtr_Action_CreatorCandidates( theGrid, theAction);
                    })
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_CreatorSave( aCreatorName);
                    })
                    .then( function() {
                        return  aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                    })
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, null);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });

            };
            if( fDoPtr_Action_Create){}/* CQT */
            aPrototype.fDoPtr_Action_Create = fDoPtr_Action_Create;








            var fDoPtr_Action_AllArguments = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_AllArguments";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);

                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theGrid", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theAction", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridName = theGrid[ "gridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!aGridName", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var anArgumentsName = theAction[ "argumentsName"];
                if( !anArgumentsName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!anArgumentsName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aThis = this;

                return  this._v_WidgetCtrlsHelper.fDoPtr_AllArguments( anArgumentsName)
                    .then( function() {
                        return  aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                    });

            };
            if( fDoPtr_Action_AllArguments){}/* CQT */
            aPrototype.fDoPtr_Action_AllArguments = fDoPtr_Action_AllArguments;









            var fDoPtr_Action_AnyArguments = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_AnyArguments";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);

                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theGrid", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theAction", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridName = theGrid[ "gridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!aGridName", theAction);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var anArgumentsName = theAction[ "argumentsName"];
                if( !anArgumentsName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!anArgumentsName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aThis = this;

                return  this._v_WidgetCtrlsHelper.fDoPtr_AnyArguments( anArgumentsName)
                    .then( function() {
                        return  aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                    });

            };
            if( fDoPtr_Action_AnyArguments){}/* CQT */
            aPrototype.fDoPtr_Action_AnyArguments = fDoPtr_Action_AnyArguments;










            var fDoPtr_Action_Arguments = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_Arguments";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);


                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var anArgumentsName = theAction[ "argumentsName"];
                if( !anArgumentsName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!anArgumentsName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }




                var someFieldEdits = theAction[ "fieldEdits"];
                var aDoNotApply    = theAction[ "doNotApply"];



                if( ( !( someFieldEdits && someFieldEdits.length)) && aDoNotApply) {

                    return  this._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                }


                var aFieldsChangedPromise = null;

                if( someFieldEdits && someFieldEdits.length) {
                    aFieldsChangedPromise = this._v_WidgetCtrlsHelper.fDoPtr_ChangeFields( theGrid, theAction)
                }

                if( aDoNotApply) {
                    return aFieldsChangedPromise;
                }


                var aThis = this;

                return aFieldsChangedPromise.then( function() {
                    return  aThis._v_WidgetCtrlsHelper.fDoPtr_ApplyArguments( anArgumentsName);
                })
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, null);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                    });

            };
            if( fDoPtr_Action_Arguments){}/* CQT */
            aPrototype.fDoPtr_Action_Arguments = fDoPtr_Action_Arguments;











            var fDoPtr_Action_PageMaxSize = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_PageMaxSize";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);


                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aPageMaxSize = theAction[ "pageMaxSize"];
                if( !aPageMaxSize) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!anArgumentsName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aSpecName = theGrid[ "gridName"];
                if( !aSpecName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "theGrid[ 'gridName']", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridPageMaxSizePromise = this._v_WidgetCtrlsHelper.fDoPtr_GridPageMaxSize( aSpecName, aPageMaxSize)

                var aThis = this;

                return aGridPageMaxSizePromise.then( function() {
                    aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, null);
                    return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                });

            };
            if( fDoPtr_Action_PageMaxSize){}/* CQT */
            aPrototype.fDoPtr_Action_PageMaxSize = fDoPtr_Action_PageMaxSize;










            var fDoPtr_Action_GoToPage = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Action_GoToPage";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, null);


                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var anActionKind = theAction[ "actionKind"];
                if( !anActionKind) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!anActionKind", theSpec);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aPageToGo = null;
                switch( anActionKind) {

                    case this.ACTIONKIND_FIRSTPAGE:
                        aPageToGo = "First";
                        break;

                    case this.ACTIONKIND_PREVPAGE:
                        aPageToGo = "Prev";
                        break;

                    case this.ACTIONKIND_NEXTPAGE:
                        aPageToGo = "Next";
                        break;


                    case this.ACTIONKIND_LASTPAGE:
                        aPageToGo = "Last";
                        break;

                    default:
                }


                if( !aPageToGo) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!aPageToGo", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aSpecName = theGrid[ "gridName"];
                if( !aSpecName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "theGrid[ 'gridName']", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGotoPagePromise = this._v_WidgetCtrlsHelper.fDoPtr_GotoPage( aSpecName, aPageToGo)

                var aThis = this;

                return aGotoPagePromise.then( function() {
                    aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, theAction, null, null);
                    return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd();
                });

            };
            if( fDoPtr_Action_GoToPage){}/* CQT */
            aPrototype.fDoPtr_Action_GoToPage = fDoPtr_Action_GoToPage;









            var fDoPtr_Action = function( theSpec, theAction) {

                var aMethodName = "fDoPtr_Action";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theAction, null, theSpec);

                if( !theSpec) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theSpec", theSpec);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!theAction", theSpec);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var anActionKind = theAction[ "actionKind"];
                if( !anActionKind) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theAction, "!anActionKind", theSpec);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                if( this.ACTIONSKINDS.indexOf( anActionKind) < 0) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_UNSUPPORTEDACTION, theAction, "this.ACTIONSKINDS.indexOf( '" + anActionKind + "') < 0)", theSpec);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aRunningTestInfo = this.fRunningTestInfoAtCompositeSpecAction( theSpec, theAction);

                var aShowRunningTestPromise = this._v_WidgetCtrlsHelper.fDoPtr_ShowRunningTest( aRunningTestInfo);


                var anActionPromise = null;

                var anAction = theAction;
                var aThis = this;

                switch( anActionKind) {

                    case this.ACTIONKIND_GRID:

                        var aSpecName = theSpec[ "gridName"];
                        if( !aSpecName) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theSpec, "!aSpecName", null);
                            return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                        }

                        anActionPromise = this._v_WidgetCtrlsHelper.fDoPtr_UnpinTabIfPinned( aSpecName)
                            .then( function() {
                                return aThis.fDoPtr_Grid( anAction);
                            });
                        break;




                    case this.ACTIONKIND_SELECTOR:

                        var aSpecName = theSpec[ "gridName"];
                        if( !aSpecName) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theSpec, "!aSpecName", null);
                            return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                        }

                        var aSelectorName = anAction[ "selectorName"];
                        if( !aSelectorName) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theSpec, "!aSelectorName", null);
                            return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                        }

                        anActionPromise = this.fDoPtr_Selector( theSpec, theAction);
                        break;




                    case this.ACTIONKIND_SHOWTAB:
                        var aTabName = theAction[ "tabName"];
                        if( !aTabName) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theSpec, "!aTabName", null);
                            return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                        }

                        var aSpecName = theSpec[ "gridName"];
                        if( aSpecName) {
                            anActionPromise = this._v_WidgetCtrlsHelper.fDoPtr_UnpinTabIfPinned( aSpecName)
                                .then( function() {
                                    return aThis._v_WidgetCtrlsHelper.fDoPtr_SelectTab( aTabName);
                                })
                                .then( function() {
                                    return aThis.fDoPtr_WaitForAngular();
                                });
                        }
                        else {

                            anActionPromise = this._v_WidgetCtrlsHelper.fDoPtr_SelectTab( aTabName)
                                .then( function() {
                                    return aThis.fDoPtr_WaitForAngular();
                                });
                        }
                        break;




                    case this.ACTIONKIND_SHOWGRID:

                        var aGridName = theAction[ "gridName"];
                        if( !aGridName) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theSpec, "!aGridName", null);
                            return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                        }

                        anActionPromise = this._v_WidgetCtrlsHelper.fDoPtr_UnpinTabIfPinned( aGridName)
                            .then( function() {
                                return aThis._v_WidgetCtrlsHelper.fDoPtr_SelectTab( aGridName);
                            })
                            .then( function() {
                                return aThis._v_WidgetCtrlsHelper.fDoPtr_PinTab( aGridName);
                            });
                        break;




                    case this.ACTIONKIND_SELECT:
                        anActionPromise = this.fDoPtr_Action_Select( theSpec, theAction);
                        break;

                    case this.ACTIONKIND_SELECTIFEXISTS:
                        anActionPromise = this.fDoPtr_Action_SelectIfExists( theSpec, theAction);
                        break;

                    case this.ACTIONKIND_EDIT:
                        anActionPromise = this.fDoPtr_Action_Edit( theSpec, theAction);
                        break;

                    case this.ACTIONKIND_DELETE:
                        anActionPromise = this.fDoPtr_Action_Delete( theSpec, theAction);
                        break;

                    case this.ACTIONKIND_CREATE:
                        anActionPromise = this.fDoPtr_Action_Create( theSpec, theAction);
                        break;

                    case this.ACTIONKIND_ALLARGUMENTS:
                        anActionPromise = this.fDoPtr_Action_AllArguments( theSpec, theAction);
                        break;

                    case this.ACTIONKIND_ANYARGUMENTS:
                        anActionPromise = this.fDoPtr_Action_AnyArguments( theSpec, theAction);
                        break;

                    case this.ACTIONKIND_ARGUMENTS:
                        anActionPromise = this.fDoPtr_Action_Arguments( theSpec, theAction);
                        break;

                    case this.ACTIONKIND_PAGEMAXSIZE:
                        anActionPromise = this.fDoPtr_Action_PageMaxSize( theSpec, theAction);
                        break;

                    case this.ACTIONKIND_FIRSTPAGE:
                    case this.ACTIONKIND_PREVPAGE:
                    case this.ACTIONKIND_NEXTPAGE:
                    case this.ACTIONKIND_LASTPAGE:
                        anActionPromise = this.fDoPtr_Action_GoToPage( theSpec, theAction);
                        break;


                    default:
                }

                if( !anActionPromise) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_UNSUPPORTEDACTION, theAction, null, theSpec);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                return anActionPromise;

            };
            if( fDoPtr_Action){}/* CQT */
            aPrototype.fDoPtr_Action = fDoPtr_Action;









            var fDoPtr_Actions = function( theSpec, theActions) {
                var aMethodName = "fDoPtr_Actions";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theActions, null, theSpec);

                if( !theSpec) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theActions, "!theSpec", theSpec);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }



                var aSpecName = theSpec[ "gridName"];
                if( !aSpecName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theSpec, "!aSpecName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aThis = this;


                if( !theActions || !theActions.length) {

                    return this._v_WidgetCtrlsHelper.fAtPtr_EmptyStep()
                        .then( function() {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_EMPTY, theActions, null, theSpec);
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_UnpinTabIfPinned( aSpecName);
                        });
                }



                var anAllActionsPromise = null;

                var aSpec = theSpec;

                var aNumActions = theActions.length;
                for( var anActionIdx=0; anActionIdx < aNumActions; anActionIdx++) {

                    var anAction = theActions[ anActionIdx];
                    if( anAction) {

                        var aOneActionPromiseFunction = (function() {

                            var aSpec_here     = aSpec;
                            var anAction_here  = anAction;
                            return function() {
                                return aThis.fDoPtr_Action( aSpec_here, anAction_here);
                            }
                        })();

                        if( aOneActionPromiseFunction) {
                            if( !anAllActionsPromise) {
                                anAllActionsPromise = aOneActionPromiseFunction();
                            }
                            else {
                                anAllActionsPromise = anAllActionsPromise.then( aOneActionPromiseFunction);
                            }
                        }
                    }
                }

                if( !anAllActionsPromise) {
                    return this._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                }


                return anAllActionsPromise
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_ACTIONSOK, theActions, null, theSpec);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                    });
            };
            if( fDoPtr_Actions){}/* CQT */
            aPrototype.fDoPtr_Actions = fDoPtr_Actions;









            var fDoPtr_GridActions = function( theGrid) {
                var aMethodName = "fDoPtr_GridActions";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theGrid, null, null);

                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theGrid", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aGridName = theGrid[ "gridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!aGridName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }



                var aGrid = theGrid;
                var aThis = this;

                var someActions = theGrid[ "actions"];
                if( !someActions || !someActions.length) {

                    return aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep()
                        .then( function() {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_ACTIONSOK, aGrid, null, someActions);
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_UnpinTabIfPinned( aGridName);
                        });
                }



                var anActionsPromise = this.fDoPtr_Actions( theGrid, someActions);
                if( !anActionsPromise) {
                    aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_EMPTY, theGrid, null, someActions);
                    return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                }


                return anActionsPromise
                    .then( function() {
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                    })
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_ACTIONSOK, theGrid, null, someActions);
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_UnpinTabIfPinned( aGridName);
                    });
            };
            if( fDoPtr_GridActions){}/* CQT */
            aPrototype.fDoPtr_GridActions = fDoPtr_GridActions;










            var fDoPtr_SelectActions = function( theGrid, theSelectAction) {
                var aMethodName = "fDoPtr_SelectActions";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theSelectAction, null, null);


                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theSelectAction, "!theGrid", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theSelectAction) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theSelectAction, "!theSelectAction", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aThis = this;

                var someActions = theSelectAction[ "actions"];
                if( !someActions || !someActions.length) {

                    var aGridName = theGrid[ "gridName"];
                    if( !aGridName) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!aGridName", null);
                        return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                    }


                    return aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep()
                        .then( function() {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_ACTIONSOK, theSelectAction, null, someActions);
                            return aThis._v_WidgetCtrlsHelper.fDoPtr_UnpinTabIfPinned( aGridName);
                        });
                }



                var anActionsPromise = this.fDoPtr_Actions( theGrid, someActions);
                if( !anActionsPromise) {
                    aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_EMPTY, theSelectAction, null, someActions);
                    return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                }


                return anActionsPromise
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_ACTIONSOK, theSelectAction, null, someActions);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                    });
            };
            if( fDoPtr_SelectActions){}/* CQT */
            aPrototype.fDoPtr_SelectActions = fDoPtr_SelectActions;











            var fDoPtr_Grid = function( theGrid) {
                var aMethodName = "fDoPtr_Grid";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theGrid, null, null);


                if( !this._v_WidgetCtrlsHelper) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!this._v_WidgetCtrlsHelper", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theGrid", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridName = theGrid[ "gridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!aGridName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aRunningTestInfo = this.fRunningTestInfoAtCompositeSpec( theGrid);

                var aShowRunningTestPromise = this._v_WidgetCtrlsHelper.fDoPtr_ShowRunningTest( aRunningTestInfo);



                var aGrid = theGrid;
                var aThis = this;

                var anAvoidPinTab  = theGrid[ "noPin"];
                var anAvoidRefresh = theGrid[ "noRefresh"];

                return this._v_WidgetCtrlsHelper.fDoPtr_SelectTab( aGridName)
                    .then( function() {
                        if( anAvoidPinTab) {
                            return aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                        }
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_PinTab( aGridName);
                    })
                    .then( function() {
                        if( anAvoidRefresh) {
                            return aThis._v_WidgetCtrlsHelper.fAtPtr_EmptyStep();
                        }
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_RefreshGrid( aGridName);
                    })
                    .then( function() {
                        return aThis.fDoPtr_GridActions( aGrid);
                    })
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_GRIDOK, aGrid, null, null);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                    }).then( function() {
                        return aThis._v_WidgetCtrlsHelper.fDoPtr_UnpinTabIfPinned( aGridName);
                    });
            };
            if( fDoPtr_Grid){}/* CQT */
            aPrototype.fDoPtr_Grid = fDoPtr_Grid;












            var fDoPtr_Selector = function( theGrid, theAction) {
                var aMethodName = "fDoPtr_Selector";
                this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theGrid, null, null);


                if( !this._v_WidgetCtrlsHelper) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!this._v_WidgetCtrlsHelper", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theGrid) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!theGrid", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aGridName = theGrid[ "gridName"];
                if( !aGridName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!aGridName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aSelectorName = theAction[ "selectorName"];
                if( !aSelectorName) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theGrid, "!aSelectorName", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }


                var aRunningTestInfo = this.fRunningTestInfoAtCompositeSpecAction( theGrid, theAction);

                var aShowRunningTestPromise = this._v_WidgetCtrlsHelper.fDoPtr_ShowRunningTest( aRunningTestInfo);



                var aGrid = theGrid;
                var aThis = this;


                var aDoNotOpenSelector = theAction[ "doNotOpenSelector"];
                if( aDoNotOpenSelector) {
                    return this.fDoPtr_Action_Selector( theGrid, theAction)
                        .then( function() {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_GRIDOK, aGrid, null, null);
                            return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                        });
                }



                return this._v_WidgetCtrlsHelper.fDoPtr_OpenSelector( aGridName)
                    .then( function() {
                        return aThis.fDoPtr_Action_Selector( theGrid, theAction);
                    })
                    .then( function() {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_GRIDOK, aGrid, null, null);
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                    });
            };
            if( fDoPtr_Selector){}/* CQT */
            aPrototype.fDoPtr_Selector = fDoPtr_Selector;










            var fDoPtr_MultiAction = function( theComposite) {

                var aMethodName = "fDoPtr_MultiAction";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !this._v_WidgetCtrlsHelper) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theComposite, "!this._v_WidgetCtrlsHelper", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                if( !theComposite) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, theComposite, "!theComposite", null);
                    return this._v_WidgetCtrlsHelper.fAtPtr_MissingParm();
                }

                var aRunningTestInfo = this.fRunningTestInfo();

                var aShowRunningTestPromise = this._v_WidgetCtrlsHelper.fDoPtr_ShowRunningTest( aRunningTestInfo);


                var aComposite = theComposite;
                var aThis = this;

                return aShowRunningTestPromise
                    .then( function() {
                        return aThis.fDoPtr_Grid( theComposite)
                    })
                    .then( function() {
                        if( aThis.LOGDOPTRSTEPS) {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, aComposite, null, null);
                        }
                        return aThis._v_WidgetCtrlsHelper.fAtPtr_StepEnd()
                    });
            };
            if( fDoPtr_MultiAction){}/* CQT */
            aPrototype.fDoPtr_MultiAction = fDoPtr_MultiAction;







            return aPrototype;

        })();




        var MultiActionTestHelper_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                          theWidgetCtrlsHelper, theParentCtrlsHelper) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composable_testhelper.ComposableTestHelper_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_MultiActionTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder,
                theWidgetCtrlsHelper, theParentCtrlsHelper);

        };
        MultiActionTestHelper_Constructor.prototype = aMultiActionTestHelper_Prototype;





        var MultiActionTestHelper_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_composable_testhelper.ComposableTestHelper_Prototype;

            this._v_Prototype = aMultiActionTestHelper_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;
        };
        MultiActionTestHelper_SuperPrototypeConstructor.prototype = aMultiActionTestHelper_Prototype;



        var aModule = {
            "MultiActionTestHelper_Prototype": aMultiActionTestHelper_Prototype,
            "MultiActionTestHelper_Constructor": MultiActionTestHelper_Constructor,
            "MultiActionTestHelper_SuperPrototypeConstructor": MultiActionTestHelper_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aMultiActionTestHelper_Prototype._v_Module = aModule;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_composable_testhelper   = require('./composable-testhelper');
            var aM_forcedexception         = require('../common-test/forcedexception');
            var aM_overrider               = require('../common-test/overrider');

            return aMod_definer(
                aM_composable_testhelper,
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


































