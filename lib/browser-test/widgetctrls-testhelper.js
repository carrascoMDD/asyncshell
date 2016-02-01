
'use strict';

/*
 widgetctrls-testhelper.js
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
                                 theM_sentinels) {

        if( theM_sentinels){}/* CQT */

        var ModuleName     = "widgetctrls-testhelper";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.WAITFORANGULAR_ANY = true;
            theToInit.WAITFORANGULAR_ALL = true;

            theToInit.WAITFORANGULAR_AFTERSELECTTAB      = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTERPINTAB         = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTERUNPINTAB       = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTERREFRESHGRID    = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTERSELECTROWCELL  = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTEREDITOROPEN     = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTEREDITORCANCEL   = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTEREDITORCLOSE    = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTEREDITORSAVE     = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTEREDITORREFRESH  = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTERSELECIONDELETE = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTERCREATOROPEN    = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTERCREATORCANCEL  = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTERCREATORSAVE    = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;

            theToInit.WAITFORANGULAR_AFTERANYARGUMENTS    = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;
            theToInit.WAITFORANGULAR_AFTERAPPLYYARGUMENTS = theToInit.WAITFORANGULAR_ANY && theToInit.WAITFORANGULAR_ALL;


            theToInit.SHALLSLEEP_ANY = false;
            theToInit.SHALLSLEEP_ALL = true;

            theToInit.SHALLSLEEP_ATMISSINGPARM      = theToInit.SHALLSLEEP_ANY && theToInit.SHALLSLEEP_ALL;
            theToInit.SHALLSLEEP_ATCOMPOSITEEND     = theToInit.SHALLSLEEP_ANY && theToInit.SHALLSLEEP_ALL;
            theToInit.SHALLSLEEP_ATSTEPEND          = theToInit.SHALLSLEEP_ANY && theToInit.SHALLSLEEP_ALL;
            theToInit.SHALLSLEEP_ATWAITASECONDORTWO = theToInit.SHALLSLEEP_ANY && theToInit.SHALLSLEEP_ALL;
            theToInit.SHALLSLEEP_ATEMPTYSTEP        = theToInit.SHALLSLEEP_ANY && theToInit.SHALLSLEEP_ALL;



            theToInit.SLEEPATEMPTYSTEP    = 100;
            theToInit.SLEEPATSTEPEND      = 100;
            theToInit.SLEEPATMISSINGPARM  = 1;
            theToInit.SLEEPATCOMPOSITEEND = 100;
            theToInit.SLEEPASECONDORTWO   = 100;

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

            theToInit.PARM_WIDGETCTRLS = "widgetctrls";


            theToInit.PARM_WIDGETCTRLS_NAME              = "name";
            theToInit.PARM_WIDGETCTRLS_DOMIDPREFIX       = "domIdPrefix";



            theToInit.PARMS_WIDGETCTRLS = [
                theToInit.PARM_WIDGETCTRLS_NAME,
                theToInit.PARM_WIDGETCTRLS_DOMIDPREFIX
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













        var aWidgetCtrlsTestHelper_Prototype = (function() {


            var aPrototype = new theM_common_testhelper.CommonTestHelper_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            aPrototype._v_Type = "WidgetCtrlsTestHelper";

            aPrototype._v_Module = null;

            aPrototype._v_DomIdPrefix   = null;







            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                   theProtractorTest,
                                   theDomIdPrefix) {

                this._pInit_WidgetCtrlsTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                           theProtractorTest,
                                                           theDomIdPrefix);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_WidgetCtrlsTestHelper = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                                 theProtractorTest,
                                                                 theDomIdPrefix) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_CommonTestHelper.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder,
                                                                              theProtractorTest]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_DomIdPrefix   = theDomIdPrefix;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_WidgetCtrlsTestHelper", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_WidgetCtrlsTestHelper){}/* CQT */
            aPrototype._pInit_WidgetCtrlsTestHelper = _pInit_WidgetCtrlsTestHelper;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_WidgetCtrlsTestHelper( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;








            var _pRelease_WidgetCtrlsTestHelper = function( theReleaseParms, theReleaseDone) {

                this._v_DomIdPrefix = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_CommonTestHelper.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_WidgetCtrlsTestHelper){}/* CQT */
            aPrototype._pRelease_WidgetCtrlsTestHelper = _pRelease_WidgetCtrlsTestHelper;














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

                this.pCleanUpTest_WidgetCtrlsTestHelper( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_WidgetCtrlsTestHelper = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_DomIdPrefix = undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_CommonTestHelper.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_WidgetCtrlsTestHelper){}/* CQT */
            aPrototype.pCleanUpTest_WidgetCtrlsTestHelper = pCleanUpTest_WidgetCtrlsTestHelper;














            var fPrmPtr_NewDeferred = function() {

                return protractor.promise.defer();
            };
            if( fPrmPtr_NewDeferred){}/* CQT */
            aPrototype.fPrmPtr_NewDeferred = fPrmPtr_NewDeferred;





            var fPrmPtr_NewResolvedPromise = function( theResolution) {

                var aDeferred = this.fPrmPtr_NewDeferred();

                if( !( typeof theResolution == "undefined")) {
                    aDeferred.fulfill( theResolution);
                }
                else {
                    aDeferred.fulfill();
                }

                return aDeferred.promise;
            };
            if( fPrmPtr_NewResolvedPromise){}/* CQT */
            aPrototype.fPrmPtr_NewResolvedPromise = fPrmPtr_NewResolvedPromise;








            var fDoPtr_WaitForAngular = function() {

                return browser.waitForAngular();
            };
            if( fDoPtr_WaitForAngular){}/* CQT */
            aPrototype.fDoPtr_WaitForAngular = fDoPtr_WaitForAngular;











            var fShowRunningTestScript = function( theRunningTestInfo) {

                if( !theRunningTestInfo) {
                    return null;
                }

                var aScriptWithParms ="return RunningTest( " + JSON.stringify( theRunningTestInfo) + ");";
                if( aScriptWithParms){}/* CQT */

                return aScriptWithParms;

            };
            if( fShowRunningTestScript){}/* CQT */
            aPrototype.fShowRunningTestScript = fShowRunningTestScript;







            var fDoPtr_ShowRunningTest = function( theRunningTestInfo) {

                var aMethodName = "fDoPtr_ShowRunningTest";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, theRunningTestInfo, null, null);
                }

                if( !theRunningTestInfo) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theRowIndexFinderSpec", null);
                    }
                    return this.fAtPtr_MissingParm();
                }


                var aScriptWithParms = this.fShowRunningTestScript( theRunningTestInfo);
                if( !aScriptWithParms) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_FAIL, null, "!aScriptWithParms", null);
                    }
                    return this.fAtPtr_MissingParm();
                }
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aScriptWithParms, "aScriptWithParms", null);
                }


                return browser.driver.executeScript( aScriptWithParms);

            };
            if( fDoPtr_ShowRunningTest){}/* CQT */
            aPrototype.fDoPtr_ShowRunningTest = fDoPtr_ShowRunningTest;
















            var fElPtr_Tab = function( theTabName) {

                var aTabId =  this._v_DomIdPrefix + "_TopTabs_Tab_" + theTabName;

                var aTabElement = element( by.id( aTabId));

                expect( aTabElement.isPresent()).toBe( true);

                return aTabElement;
            };
            if( fElPtr_Tab){}/* CQT */
            aPrototype.fElPtr_Tab = fElPtr_Tab;





            var fElPtr_TabLink = function( theTabName) {

                var aTabLinkId =  this._v_DomIdPrefix + "_TopTabs_Tab_" + theTabName + "_Link";

                var aTabLinkElement = element( by.id( aTabLinkId));

                expect( aTabLinkElement.isPresent()).toBe( true);
                expect( aTabLinkElement.isDisplayed()).toBe( true);

                return aTabLinkElement;
            };
            if( fElPtr_TabLink){}/* CQT */
            aPrototype.fElPtr_TabLink = fElPtr_TabLink;








            var fDoPtr_SelectTab = function( theTabName) {

                var aPtrEl_Tab = this.fElPtr_Tab( theTabName);

                var aPtrEl_TabLink = this.fElPtr_TabLink( theTabName);

                aPtrEl_TabLink.click();

                expect( aPtrEl_Tab.isDisplayed()).toBe( true);

                if( this.WAITFORANGULAR_AFTERSELECTTAB) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_SelectTab){}/* CQT */
            aPrototype.fDoPtr_SelectTab = fDoPtr_SelectTab;





            var fElPtr_PinnedTabImg = function( theTabName) {

                var aTabPinnedId =  this._v_DomIdPrefix + "_TopTabs_Tab_" + theTabName + "_Img_Pinned";

                var aTabPinnedElement = element( by.id( aTabPinnedId));
                if( aTabPinnedElement){}/* CQT */

                return aTabPinnedElement;
            };
            if( fElPtr_PinnedTabImg){}/* CQT */
            aPrototype.fElPtr_PinnedTabImg = fElPtr_PinnedTabImg;




            var fElPtr_UnpinnedTabImg = function( theTabName) {

                var aTabUnpinnedId =  this._v_DomIdPrefix + "_TopTabs_Tab_" + theTabName + "_Img_Unpinned";

                var aTabUnpinnedElement = element( by.id( aTabUnpinnedId));
                if( aTabUnpinnedElement){}/* CQT */

                return aTabUnpinnedElement;
            };
            if( fElPtr_UnpinnedTabImg){}/* CQT */
            aPrototype.fElPtr_UnpinnedTabImg = fElPtr_UnpinnedTabImg;





            var fDoPtr_PinTab = function( theTabName) {

                var aPtrEl_UnpinnedTabImg = this.fElPtr_UnpinnedTabImg( theTabName);

                aPtrEl_UnpinnedTabImg.click();

                var aPtrEl_PinnedTabImg   = this.fElPtr_PinnedTabImg(   theTabName);

                expect( aPtrEl_PinnedTabImg.isDisplayed()).toBe( true);

                if( this.WAITFORANGULAR_AFTERPINTAB) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_PinTab){}/* CQT */
            aPrototype.fDoPtr_PinTab = fDoPtr_PinTab;





            var fDoPtr_UnpinTab = function( theTabName) {

                var aPtrEl_PinnedTabImg   = this.fElPtr_PinnedTabImg(   theTabName);

                aPtrEl_PinnedTabImg.click();

                if( this.WAITFORANGULAR_AFTERUNPINTAB) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_UnpinTab){}/* CQT */
            aPrototype.fDoPtr_UnpinTab = fDoPtr_UnpinTab;





            var fDoPtr_UnpinTabIfPinned = function( theTabName) {

                var aPtrEl_PinnedTabImg   = this.fElPtr_PinnedTabImg(   theTabName);

                var aThis = this;

                return aPtrEl_PinnedTabImg.isDisplayed()
                    .then(
                    function() {
                        return aPtrEl_PinnedTabImg.click()
                            .then( function() {

                                if( aThis.WAITFORANGULAR_AFTERUNPINTAB) {
                                    return aThis.fDoPtr_WaitForAngular();
                                }

                                return aThis.fPrmPtr_NewResolvedPromise();
                            });
                    },
                    function() {
                        if( aThis.WAITFORANGULAR_AFTERUNPINTAB) {
                            return aThis.fDoPtr_WaitForAngular();
                        }

                        return aThis.fPrmPtr_NewResolvedPromise();
                    }
                );
            };
            if( fDoPtr_UnpinTabIfPinned){}/* CQT */
            aPrototype.fDoPtr_UnpinTabIfPinned = fDoPtr_UnpinTabIfPinned;











            var fElPtr_GridOpenSelectorButton = function( theGridName) {

                var aGridOpenSelectorButtonId = this._v_DomIdPrefix + "_Grid_" + theGridName + "_Button_OpenSelector";

                var aGridOpenSelectorButton = element( by.id( aGridOpenSelectorButtonId));

                expect( aGridOpenSelectorButton.isPresent()).toBe( true);
                expect( aGridOpenSelectorButton.isDisplayed()).toBe( true);

                return aGridOpenSelectorButton;
            };
            if( fElPtr_GridOpenSelectorButton){}/* CQT */
            aPrototype.fElPtr_GridOpenSelectorButton = fElPtr_GridOpenSelectorButton;







            var fDoPtr_OpenSelector = function( theGridName) {

                var aPtr_GridGotoPageButton = this.fElPtr_GridOpenSelectorButton( theGridName);

                aPtr_GridGotoPageButton.click( );

                if( this.WAITFORANGULAR_AFTERREFRESHGRID) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();

            };
            if( fDoPtr_OpenSelector){}/* CQT */
            aPrototype.fDoPtr_OpenSelector = fDoPtr_OpenSelector;









            var fElPtr_GridPageMaxSizeField = function( theGridName) {

                var aGridPageMaxSizeFieldId = this._v_DomIdPrefix + "_Grid_" + theGridName + "_Field_PageMaxSize_Input";

                var aGridPageMaxSizeField = element( by.id( aGridPageMaxSizeFieldId));

                expect( aGridPageMaxSizeField.isPresent()).toBe( true);
                expect( aGridPageMaxSizeField.isDisplayed()).toBe( true);

                return aGridPageMaxSizeField;
            };
            if( fElPtr_GridPageMaxSizeField){}/* CQT */
            aPrototype.fElPtr_GridPageMaxSizeField = fElPtr_GridPageMaxSizeField;







            var fDoPtr_GridPageMaxSize = function( theGridName, thePageMaxSize) {

                var aPageMaxSize = thePageMaxSize;
                if( typeof aPageMaxSize == "undefined") {
                    aPageMaxSize = "";
                }

                if( typeof aPageMaxSize == "number") {
                    aPageMaxSize = "" + aPageMaxSize;
                }

                if( !typeof aPageMaxSize == "string") {
                    aPageMaxSize = "";
                }

                var aPtr_GridPageMaxSizeField = this.fElPtr_GridPageMaxSizeField( theGridName);

                aPtr_GridPageMaxSizeField.sendKeys( protractor.Key.chord(protractor.Key.CONTROL, "a"));
                aPtr_GridPageMaxSizeField.sendKeys( protractor.Key.BACK_SPACE);

                var aPtr_GridPageMaxSizeFieldClearPromise = aPtr_GridPageMaxSizeField.clear();
                if( aPtr_GridPageMaxSizeFieldClearPromise){}/* CQT */

                aPtr_GridPageMaxSizeField.sendKeys( aPageMaxSize);

                if( this.WAITFORANGULAR_AFTERREFRESHGRID) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();

            };
            if( fDoPtr_GridPageMaxSize){}/* CQT */
            aPrototype.fDoPtr_GridPageMaxSize = fDoPtr_GridPageMaxSize;










            var fElPtr_GridGotoPageButton = function( theGridName, thePageToGo) {

                var aGridGotoPageButtonId = this._v_DomIdPrefix + "_Grid_" + theGridName + "_Button_Length_" + thePageToGo;

                var aGridGotoPageButton = element( by.id( aGridGotoPageButtonId));

                expect( aGridGotoPageButton.isPresent()).toBe( true);
                expect( aGridGotoPageButton.isDisplayed()).toBe( true);

                return aGridGotoPageButton;
            };
            if( fElPtr_GridGotoPageButton){}/* CQT */
            aPrototype.fElPtr_GridGotoPageButton = fElPtr_GridGotoPageButton;







            var fDoPtr_GotoPage = function( theGridName, thePageToGo) {

                if( !( typeof thePageToGo == "undefined")) {

                    var aPtr_GridGotoPageButton = this.fElPtr_GridGotoPageButton( theGridName, thePageToGo);

                    aPtr_GridGotoPageButton.click( );
                }

                if( this.WAITFORANGULAR_AFTERREFRESHGRID) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();

            };
            if( fDoPtr_GotoPage){}/* CQT */
            aPrototype.fDoPtr_GotoPage = fDoPtr_GotoPage;








            var fElPtr_GridButtonRefresh = function( theTabName) {

                var aRefreshButtonId =  this._v_DomIdPrefix + "_Grid_" + theTabName + "_Button_Refresh";

                var aRefreshButtonElement = element( by.id( aRefreshButtonId));

                expect( aRefreshButtonElement.isPresent()).toBe( true);
                expect( aRefreshButtonElement.isDisplayed()).toBe( true);

                return aRefreshButtonElement;
            };
            if( fElPtr_GridButtonRefresh){}/* CQT */
            aPrototype.fElPtr_GridButtonRefresh = fElPtr_GridButtonRefresh;





            var fDoPtr_RefreshGrid = function( theTabName) {

                var aPtrEl_GridButtonRefresh = this.fElPtr_GridButtonRefresh( theTabName);

                aPtrEl_GridButtonRefresh.click();

                if( this.WAITFORANGULAR_AFTERREFRESHGRID) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();

            };
            if( fDoPtr_RefreshGrid){}/* CQT */
            aPrototype.fDoPtr_RefreshGrid = fDoPtr_RefreshGrid;









            var fElPtr_GridCell = function( theTabName, theRowIndex, theCellIndex) {

                var aGridCellId =  this._v_DomIdPrefix + "_Grid_" + theTabName + "_Row_" + theRowIndex + "_Col_" + theCellIndex;

                var aGridCellElement = element( by.id( aGridCellId));

                expect( aGridCellElement.isPresent()).toBe( true);
                expect( aGridCellElement.isDisplayed()).toBe( true);

                return aGridCellElement;
            };
            if( fElPtr_GridCell){}/* CQT */
            aPrototype.fElPtr_GridCell = fElPtr_GridCell;





            var fElPtr_GridCellIfExists = function( theTabName, theRowIndex, theCellIndex) {

                var aGridCellId =  this._v_DomIdPrefix + "_Grid_" + theTabName + "_Row_" + theRowIndex + "_Col_" + theCellIndex;

                var aGridCellElement = element( by.id( aGridCellId));
                if( aGridCellElement){}/* CQT */

                return aGridCellElement;
            };
            if( fElPtr_GridCellIfExists){}/* CQT */
            aPrototype.fElPtr_GridCellIfExists = fElPtr_GridCellIfExists;






            var fDoPtr_SelectRowCell = function( theTabName, theRowIndex, theCellIndex) {

                var aPtrEl_GridCell = this.fElPtr_GridCell( theTabName, theRowIndex, theCellIndex);

                aPtrEl_GridCell.click();

                if( this.WAITFORANGULAR_AFTERSELECTROWCELL) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_SelectRowCell){}/* CQT */
            aPrototype.fDoPtr_SelectRowCell = fDoPtr_SelectRowCell;






            var fDoPtr_SelectRowCellIfExists = function( theTabName, theRowIndex, theCellIndex) {

                var aPtrEl_GridCell = this.fElPtr_GridCellIfExists( theTabName, theRowIndex, theCellIndex);

                var aThis = this;

                return aPtrEl_GridCell
                    .then(
                        function() {
                            aPtrEl_GridCell.click();

                            if( aThis.WAITFORANGULAR_AFTERSELECTROWCELL) {
                                return aThis.fDoPtr_WaitForAngular();
                            }

                            return aThis.fPrmPtr_NewResolvedPromise();

                        },
                        function() {
                            if( aThis.WAITFORANGULAR_AFTERSELECTROWCELL) {
                                return aThis.fDoPtr_WaitForAngular();
                            }

                            throw Error( "Selection not found at index " + theRowIndex);
                        }
                    );
            };
            if( fDoPtr_SelectRowCellIfExists){}/* CQT */
            aPrototype.fDoPtr_SelectRowCellIfExists = fDoPtr_SelectRowCellIfExists;








            var fRowIndexFinderScript = function( theGridName, theRowIndexFinderSpec) {

                if( !theGridName) {
                    return null;
                }

                if( !theRowIndexFinderSpec) {
                    return null;
                }

                var aFindCriteria = {
                    "tableId":     this._v_DomIdPrefix + "_Grid_" + theGridName + '_Table'
                };

                Object.keys( theRowIndexFinderSpec).forEach(function( athKey) {
                    aFindCriteria[ athKey] = theRowIndexFinderSpec[ athKey];
                });



                var aFindCriteriaValue = aFindCriteria[ "value"];
                if( typeof aFindCriteriaValue == "string") {
                    var aParmValueReplacement = this.fParmValueReplacement( aFindCriteriaValue);
                    if( aParmValueReplacement){}/* CQT */
                    aFindCriteria[ "value"] = aParmValueReplacement;
                }



                var someMultiColumns = aFindCriteria[ "multiColumns"];
                if( someMultiColumns) {
                    
                    var aNumMultiColumns = someMultiColumns.length;
                    if( aNumMultiColumns) {

                        var someMultiColumnsWithResolvedParmValues = [ ];

                        for( var aMultiColumnIdx=0; aMultiColumnIdx < aNumMultiColumns; aMultiColumnIdx++) {
                            
                            var aColumnCriteria = someMultiColumns[ aMultiColumnIdx];
                            if( aColumnCriteria) {
                                
                                var aColumnCriteriaWithResolvedParmValues = {};
                                Object.keys( aColumnCriteria).forEach(function( athKey) {
                                    aColumnCriteriaWithResolvedParmValues[ athKey] = aColumnCriteria[ athKey];
                                });

                                someMultiColumnsWithResolvedParmValues.push( aColumnCriteriaWithResolvedParmValues);

                                var aColumnCriteriaValue = aColumnCriteria[ "value"];
                                if( typeof aColumnCriteriaValue == "string") {
                                    var aColumnCriteriaValueReplacement = this.fParmValueReplacement( aColumnCriteriaValue);
                                    if( aColumnCriteriaValueReplacement){}/* CQT */
                                    aColumnCriteriaWithResolvedParmValues[ "value"] = aColumnCriteriaValueReplacement;
                                }
                            }
                        }

                        aFindCriteria[ "multiColumns"] = someMultiColumnsWithResolvedParmValues;
                    }
                }

                var aScriptWithParms ="return RowIndexFinder( " + JSON.stringify( aFindCriteria) + ");";
                if( aScriptWithParms){}/* CQT */

                return aScriptWithParms;

            };
            if( fRowIndexFinderScript){}/* CQT */
            aPrototype.fRowIndexFinderScript = fRowIndexFinderScript;













            var fDoPtr_SelectRowCellWithFinder = function( theGridName, theRowIndexFinderSpec) {

                var aMethodName = "fDoPtr_SelectRowCellWithFinder";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !theRowIndexFinderSpec) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theRowIndexFinderSpec", null);
                    }
                    return this.fAtPtr_MissingParm();
                }


                var aColumnToClick = theRowIndexFinderSpec[ "columnToClick"];
                if( !( typeof aColumnToClick == "number")) {
                    aColumnToClick = 0;
                }

                var aValueIndex = theRowIndexFinderSpec[ "valueIndex"];


                if( !( typeof aValueIndex == "undefined")) {

                    if( typeof aValueIndex == "string") {
                        aValueIndex = this.fParmValueReplacement( aValueIndex)
                    }


                    if( !( typeof aValueIndex == "undefined") && ( aValueIndex >= 0)) {


                        var aPtrEl_GridCell = this.fElPtr_GridCell( theGridName, aValueIndex, aColumnToClick);

                        aPtrEl_GridCell.click();

                        if( this.LOGDOPTRSTEPS) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_OK, aValueIndex, null, null);
                        }

                        if( this.WAITFORANGULAR_AFTERSELECTROWCELL) {
                            return this.fDoPtr_WaitForAngular();
                        }

                        return this.fPrmPtr_NewResolvedPromise();
                    }
                }





                var aScriptWithParms = this.fRowIndexFinderScript( theGridName, theRowIndexFinderSpec);
                if( !aScriptWithParms) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_FAIL, null, "!aScriptWithParms", null);
                    }
                    return this.fAtPtr_MissingParm();
                }
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aScriptWithParms, "aScriptWithParms", null);
                }


                var aClickColumnIndex = aColumnToClick;

                var aColumnIndex = theRowIndexFinderSpec[ "columnIndex"];
                if( !( typeof aColumnIndex == "undefined")) {
                    aClickColumnIndex = aColumnIndex;
                }

                var aThis = this;

                return browser.driver.executeScript( aScriptWithParms).then( function( athRowIndex) {

                    if( athRowIndex >= 0) {

                        var aPtrEl_GridCell = aThis.fElPtr_GridCell( theGridName, athRowIndex, aClickColumnIndex);

                        aPtrEl_GridCell.click();

                        if( aThis.LOGDOPTRSTEPS) {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, athRowIndex, null, aScriptWithParms);
                        }

                        if( aThis.WAITFORANGULAR_AFTERSELECTROWCELL) {
                            return aThis.fDoPtr_WaitForAngular();
                        }

                        return aThis.fPrmPtr_NewResolvedPromise();
                    }

                    if( aThis.LOGDOPTRSTEPS) {
                        aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_FAIL, athRowIndex, null, aScriptWithParms);
                    }

                    throw Error( "Selection not found with script\n" + aScriptWithParms + "\n");
                });
            };
            if( fDoPtr_SelectRowCellWithFinder){}/* CQT */
            aPrototype.fDoPtr_SelectRowCellWithFinder = fDoPtr_SelectRowCellWithFinder;









            var fDoPtr_SelectRowCellWithFinderIfExists = function( theGridName, theRowIndexFinderSpec) {

                var aMethodName = "fDoPtr_SelectRowCellWithFinderIfExists";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !theRowIndexFinderSpec) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theRowIndexFinderSpec", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                var aThis = this;

                var aValueIndex = theRowIndexFinderSpec[ "valueIndex"];
                if( !( typeof aValueIndex == "undefined") && ( aValueIndex >= 0)) {

                    var aPtrEl_GridCell = this.fElPtr_GridCellIfExists( theGridName, aValueIndex, 0);


                    return aPtrEl_GridCell
                        .then(
                        function() {
                            aPtrEl_GridCell.click();

                            if( aThis.WAITFORANGULAR_AFTERSELECTROWCELL) {
                                return aThis.fDoPtr_WaitForAngular();
                            }

                            return aThis.fPrmPtr_NewResolvedPromise();

                        },
                        function() {
                            if( aThis.WAITFORANGULAR_AFTERSELECTROWCELL) {
                                return aThis.fDoPtr_WaitForAngular();
                            }

                            throw Error( "Selection not found at index " + aValueIndex);
                        }
                    );
                }



                var aScriptWithParms = this.fRowIndexFinderScript( theGridName, theRowIndexFinderSpec);
                if( !aScriptWithParms) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_FAIL, null, "!aScriptWithParms", null);
                    }
                    return this.fAtPtr_MissingParm();
                }
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aScriptWithParms, "aScriptWithParms", null);
                }


                var aClickColumnIndex = 0;

                var aColumnIndex = theRowIndexFinderSpec[ "columnIndex"];
                if( !( typeof aColumnIndex == "undefined")) {
                    aClickColumnIndex = aColumnIndex;
                }

                return browser.driver.executeScript( aScriptWithParms)
                    .then( function( athRowIndex) {

                        if( athRowIndex >= 0) {

                            var aPtrEl_GridCell = aThis.fElPtr_GridCell( theGridName, athRowIndex, aClickColumnIndex);

                            aPtrEl_GridCell.click();

                            if( aThis.LOGDOPTRSTEPS) {
                                aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_OK, athRowIndex, null, aScriptWithParms);
                            }

                            if( aThis.WAITFORANGULAR_AFTERSELECTROWCELL) {
                                return aThis.fDoPtr_WaitForAngular();
                            }

                            return aThis.fPrmPtr_NewResolvedPromise();
                        }

                        if( aThis.LOGDOPTRSTEPS) {
                            aThis.fPtrRecord( aMethodName, aThis.EVENTKIND_BROWSERHELPER_SELECTIONDOESNOTEXISTS, athRowIndex, null, aScriptWithParms);
                        }

                        throw Error( "Selection not found with script\n" + aScriptWithParms + "\n");

                    });
            };
            if( fDoPtr_SelectRowCellWithFinderIfExists){}/* CQT */
            aPrototype.fDoPtr_SelectRowCellWithFinderIfExists = fDoPtr_SelectRowCellWithFinderIfExists;








            var fElPtr_EditorOpenButton = function( theEditorName) {

                var anEditorOpenButtonId =  this._v_DomIdPrefix + "_Editor_" + theEditorName + "_Button_Open";

                var anEditorOpenButtonElement = element( by.id( anEditorOpenButtonId));

                expect( anEditorOpenButtonElement.isPresent()).toBe( true);
                expect( anEditorOpenButtonElement.isDisplayed()).toBe( true);

                return anEditorOpenButtonElement;
            };
            if( fElPtr_EditorOpenButton){}/* CQT */
            aPrototype.fElPtr_EditorOpenButton = fElPtr_EditorOpenButton;







            var fDoPtr_EditorOpen = function( theEditorName) {

                var aPtrEl_EditorOpenButton = this.fElPtr_EditorOpenButton( theEditorName);

                aPtrEl_EditorOpenButton.click();

                if( this.WAITFORANGULAR_AFTEREDITOROPEN) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_EditorOpen){}/* CQT */
            aPrototype.fDoPtr_EditorOpen = fDoPtr_EditorOpen;







            var fElPtr_EditorCancelButton = function( theEditorName) {

                var anEditorCancelButtonId =  this._v_DomIdPrefix + "_Editor_" + theEditorName + "_Button_Cancel";

                var anEditorCancelButtonElement = element( by.id( anEditorCancelButtonId));

                expect( anEditorCancelButtonElement.isPresent()).toBe( true);
                expect( anEditorCancelButtonElement.isDisplayed()).toBe( true);

                return anEditorCancelButtonElement;
            };
            if( fElPtr_EditorCancelButton){}/* CQT */
            aPrototype.fElPtr_EditorCancelButton = fElPtr_EditorCancelButton;






            var fDoPtr_EditorCancel = function( theEditorName) {

                var aPtrEl_EditorCancelButton = this.fElPtr_EditorCancelButton( theEditorName);

                aPtrEl_EditorCancelButton.click();

                if( this.WAITFORANGULAR_AFTEREDITORCANCEL) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_EditorCancel){}/* CQT */
            aPrototype.fDoPtr_EditorCancel = fDoPtr_EditorCancel;









            var fElPtr_EditorCloseButton = function( theEditorName) {

                var anEditorCloseButtonId =  this._v_DomIdPrefix + "_Editor_" + theEditorName + "_Button_Close";

                var anEditorCloseButtonElement = element( by.id( anEditorCloseButtonId));

                expect( anEditorCloseButtonElement.isPresent()).toBe( true);
                expect( anEditorCloseButtonElement.isDisplayed()).toBe( true);

                return anEditorCloseButtonElement;
            };
            if( fElPtr_EditorCloseButton){}/* CQT */
            aPrototype.fElPtr_EditorCloseButton = fElPtr_EditorCloseButton;






            var fDoPtr_EditorClose = function( theEditorName) {

                var aPtrEl_EditorCloseButton = this.fElPtr_EditorCloseButton( theEditorName);

                aPtrEl_EditorCloseButton.click();

                if( this.WAITFORANGULAR_AFTEREDITORCLOSE) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_EditorClose){}/* CQT */
            aPrototype.fDoPtr_EditorClose = fDoPtr_EditorClose;







            var fElPtr_EditorSaveButton = function( theEditorName) {

                var anEditorSaveButtonId =  this._v_DomIdPrefix + "_Editor_" + theEditorName + "_Button_Save";

                var anEditorSaveButtonElement = element( by.id( anEditorSaveButtonId));

                expect( anEditorSaveButtonElement.isPresent()).toBe( true);
                expect( anEditorSaveButtonElement.isDisplayed()).toBe( true);

                return anEditorSaveButtonElement;
            };
            if( fElPtr_EditorSaveButton){}/* CQT */
            aPrototype.fElPtr_EditorSaveButton = fElPtr_EditorSaveButton;






            var fDoPtr_EditorSave = function( theEditorName) {

                var aPtrEl_EditorSaveButton = this.fElPtr_EditorSaveButton( theEditorName);

                aPtrEl_EditorSaveButton.click();

                if( this.WAITFORANGULAR_AFTEREDITORSAVE) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_EditorSave){}/* CQT */
            aPrototype.fDoPtr_EditorSave = fDoPtr_EditorSave;






            var fElPtr_EditorRefreshButton = function( theEditorName) {

                var anEditorRefreshButtonId =  this._v_DomIdPrefix + "_Editor_" + theEditorName + "_Button_Refresh";

                var anEditorRefreshButtonElement = element( by.id( anEditorRefreshButtonId));

                expect( anEditorRefreshButtonElement.isPresent()).toBe( true);
                expect( anEditorRefreshButtonElement.isDisplayed()).toBe( true);

                return anEditorRefreshButtonElement;
            };
            if( fElPtr_EditorRefreshButton){}/* CQT */
            aPrototype.fElPtr_EditorRefreshButton = fElPtr_EditorRefreshButton;








            var fDoPtr_EditorRefresh = function( theEditorName) {

                var aPtrEl_EditorRefreshButton = this.fElPtr_EditorRefreshButton( theEditorName);

                aPtrEl_EditorRefreshButton.click();

                if( this.WAITFORANGULAR_AFTEREDITORREFRESH) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_EditorRefresh){}/* CQT */
            aPrototype.fDoPtr_EditorRefresh = fDoPtr_EditorRefresh;








            var fElPtr_SelectionDeleteButton = function( theGridName) {

                var aSelectionDeleteButtonId =  this._v_DomIdPrefix + "_Grid_" + theGridName + "_Button_Delete";

                var aSelectionDeleteButtonElement = element( by.id( aSelectionDeleteButtonId));

                expect( aSelectionDeleteButtonElement.isPresent()).toBe( true);
                expect( aSelectionDeleteButtonElement.isDisplayed()).toBe( true);

                return aSelectionDeleteButtonElement;
            };
            if( fElPtr_SelectionDeleteButton){}/* CQT */
            aPrototype.fElPtr_SelectionDeleteButton = fElPtr_SelectionDeleteButton;







            var fElPtr_SelectionDeleteConfirmButton = function( theGridName) {

                var aSelectionDeleteConfirmButtonId =  this._v_DomIdPrefix + "_Grid_" + theGridName + "_Button_DeleteConfirm";

                var aSelectionDeleteConfirmButtonElement = element( by.id( aSelectionDeleteConfirmButtonId));

                expect( aSelectionDeleteConfirmButtonElement.isPresent()).toBe( true);
                expect( aSelectionDeleteConfirmButtonElement.isDisplayed()).toBe( true);

                return aSelectionDeleteConfirmButtonElement;
            };
            if( fElPtr_SelectionDeleteConfirmButton){}/* CQT */
            aPrototype.fElPtr_SelectionDeleteConfirmButton = fElPtr_SelectionDeleteConfirmButton;




            var fDoPtr_SelectionDelete = function( theSelectionName) {

                var aPtrEl_SelectionDeleteButton = this.fElPtr_SelectionDeleteButton( theSelectionName);

                aPtrEl_SelectionDeleteButton.click();


                var aPtrEl_SelectionDeleteConfirmButton = this.fElPtr_SelectionDeleteConfirmButton( theSelectionName);

                aPtrEl_SelectionDeleteConfirmButton.click();

                if( this.WAITFORANGULAR_AFTERSELECIONDELETE) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_SelectionDelete){}/* CQT */
            aPrototype.fDoPtr_SelectionDelete = fDoPtr_SelectionDelete;











            var fElPtr_CreatorOpenButton = function( theGridName) {

                var aCreatorOpenButtonId =  this._v_DomIdPrefix + "_Grid_" + theGridName + "_Button_Create";

                var aCreatorOpenButtonElement = element( by.id( aCreatorOpenButtonId));

                expect( aCreatorOpenButtonElement.isPresent()).toBe( true);
                expect( aCreatorOpenButtonElement.isDisplayed()).toBe( true);

                return aCreatorOpenButtonElement;
            };
            if( fElPtr_CreatorOpenButton){}/* CQT */
            aPrototype.fElPtr_CreatorOpenButton = fElPtr_CreatorOpenButton;






            var fDoPtr_CreatorOpen = function( theGridName) {

                var aPtrEl_CreatorOpenButton = this.fElPtr_CreatorOpenButton( theGridName);

                aPtrEl_CreatorOpenButton.click();

                if( this.WAITFORANGULAR_AFTERCREATOROPEN) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_CreatorOpen){}/* CQT */
            aPrototype.fDoPtr_CreatorOpen = fDoPtr_CreatorOpen;






            var fElPtr_CreatorCancelButton = function( theCreatorName) {

                var anCreatorCancelButtonId =  this._v_DomIdPrefix + "_Creator_" + theCreatorName + "_Button_Cancel";

                var anCreatorCancelButtonElement = element( by.id( anCreatorCancelButtonId));

                expect( anCreatorCancelButtonElement.isPresent()).toBe( true);
                expect( anCreatorCancelButtonElement.isDisplayed()).toBe( true);

                return anCreatorCancelButtonElement;
            };
            if( fElPtr_CreatorCancelButton){}/* CQT */
            aPrototype.fElPtr_CreatorCancelButton = fElPtr_CreatorCancelButton;




            var fDoPtr_CreatorCancel = function( theCreatorName) {

                var aPtrEl_CreatorCancelButton = this.fElPtr_CreatorCancelButton( theCreatorName);

                aPtrEl_CreatorCancelButton.click();

                if( this.WAITFORANGULAR_AFTERCREATORCANCEL) {
                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_CreatorCancel){}/* CQT */
            aPrototype.fDoPtr_CreatorCancel = fDoPtr_CreatorCancel;







            var fElPtr_CreatorSaveButton = function( theCreatorName) {

                var anCreatorSaveButtonId =  this._v_DomIdPrefix + "_Creator_" + theCreatorName + "_Button_Save";

                var anCreatorSaveButtonElement = element( by.id( anCreatorSaveButtonId));

                expect( anCreatorSaveButtonElement.isPresent()).toBe( true);
                expect( anCreatorSaveButtonElement.isDisplayed()).toBe( true);

                return anCreatorSaveButtonElement;
            };
            if( fElPtr_CreatorSaveButton){}/* CQT */
            aPrototype.fElPtr_CreatorSaveButton = fElPtr_CreatorSaveButton;






            var fDoPtr_CreatorSave = function( theCreatorName) {

                var aPtrEl_CreatorSaveButton = this.fElPtr_CreatorSaveButton( theCreatorName);

                aPtrEl_CreatorSaveButton.click();

                if( this.WAITFORANGULAR_AFTERCREATORSAVE) {

                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_CreatorSave){}/* CQT */
            aPrototype.fDoPtr_CreatorSave = fDoPtr_CreatorSave;




            var fElPtr_CreatorSaveAndAgainButton = function( theCreatorName) {

                var aCreatorSaveAndAgainButtonId =  this._v_DomIdPrefix + "_Creator_" + theCreatorName + "_Button_SaveAndCreateAgain";

                var aCreatorSaveAndAgainButtonElement = element( by.id( aCreatorSaveAndAgainButtonId));

                expect( aCreatorSaveAndAgainButtonElement.isPresent()).toBe( true);
                expect( aCreatorSaveAndAgainButtonElement.isDisplayed()).toBe( true);

                return aCreatorSaveAndAgainButtonElement;
            };
            if( fElPtr_CreatorSaveAndAgainButton){}/* CQT */
            aPrototype.fElPtr_CreatorSaveAndAgainButton = fElPtr_CreatorSaveAndAgainButton;






            var fDoPtr_CreatorSaveAndAgain = function( theCreatorName) {

                var aPtrEl_CreatorSaveAndAgainButton = this.fElPtr_CreatorSaveAndAgainButton( theCreatorName);

                aPtrEl_CreatorSaveAndAgainButton.click();

                if( this.WAITFORANGULAR_AFTERCREATORSAVE) {

                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_CreatorSaveAndAgain){}/* CQT */
            aPrototype.fDoPtr_CreatorSaveAndAgain = fDoPtr_CreatorSaveAndAgain;












            var fElPtr_AllArgumentsButton = function( theArgumentsName) {

                var aAllArgumentsButtonId =  this._v_DomIdPrefix + "_Arguments_" + theArgumentsName + "_Button_All";

                var aAllArgumentsButtonElement = element( by.id( aAllArgumentsButtonId));

                expect( aAllArgumentsButtonElement.isPresent()).toBe( true);
                expect( aAllArgumentsButtonElement.isDisplayed()).toBe( true);

                return aAllArgumentsButtonElement;
            };
            if( fElPtr_AllArgumentsButton){}/* CQT */
            aPrototype.fElPtr_AllArgumentsButton = fElPtr_AllArgumentsButton;






            var fDoPtr_AllArguments = function( theArgumentsName) {

                var aPtrEl_AllArgumentsButton = this.fElPtr_AllArgumentsButton( theArgumentsName);

                aPtrEl_AllArgumentsButton.click();

                if( this.WAITFORANGULAR_AFTERANYARGUMENTS) {

                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();

            };
            if( fDoPtr_AllArguments){}/* CQT */
            aPrototype.fDoPtr_AllArguments = fDoPtr_AllArguments;







            var fElPtr_AnyArgumentsButton = function( theArgumentsName) {

                var aAnyArgumentsButtonId =  this._v_DomIdPrefix + "_Arguments_" + theArgumentsName + "_Button_Any";

                var aAnyArgumentsButtonElement = element( by.id( aAnyArgumentsButtonId));

                expect( aAnyArgumentsButtonElement.isPresent()).toBe( true);
                expect( aAnyArgumentsButtonElement.isDisplayed()).toBe( true);

                return aAnyArgumentsButtonElement;
            };
            if( fElPtr_AnyArgumentsButton){}/* CQT */
            aPrototype.fElPtr_AnyArgumentsButton = fElPtr_AnyArgumentsButton;





            var fDoPtr_AnyArguments = function( theArgumentsName) {

                var aPtrEl_AnyArgumentsButton = this.fElPtr_AnyArgumentsButton( theArgumentsName);

                aPtrEl_AnyArgumentsButton.click();

                if( this.WAITFORANGULAR_AFTERANYARGUMENTS) {

                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();

            };
            if( fDoPtr_AnyArguments){}/* CQT */
            aPrototype.fDoPtr_AnyArguments = fDoPtr_AnyArguments;















            var fElPtr_ApplyArgumentsButton = function( theArgumentsName) {

                var aAnyArgumentsButtonId =  this._v_DomIdPrefix + "_Arguments_" + theArgumentsName + "_Button_Apply";

                var aAnyArgumentsButtonElement = element( by.id( aAnyArgumentsButtonId));

                expect( aAnyArgumentsButtonElement.isPresent()).toBe( true);
                expect( aAnyArgumentsButtonElement.isDisplayed()).toBe( true);

                return aAnyArgumentsButtonElement;
            };
            if( fElPtr_ApplyArgumentsButton){}/* CQT */
            aPrototype.fElPtr_ApplyArgumentsButton = fElPtr_ApplyArgumentsButton;






            var fDoPtr_ApplyArguments = function( theArgumentsName) {

                var aPtrEl_AnyArgumentsButton = this.fElPtr_ApplyArgumentsButton( theArgumentsName);

                aPtrEl_AnyArgumentsButton.click();

                if( this.WAITFORANGULAR_AFTERAPPLYYARGUMENTS) {

                    return this.fDoPtr_WaitForAngular();
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fDoPtr_ApplyArguments){}/* CQT */
            aPrototype.fDoPtr_ApplyArguments = fDoPtr_ApplyArguments;











            var fElPtr_InputField = function( theEditorName, theFieldName, theFieldType) {

                var anInputElementId = this._v_DomIdPrefix + "_Editor_" + theEditorName + "_Field_" + theFieldName + "_Edit_" + theFieldType + "_Input";

                var anInputElement = element( by.id( anInputElementId));

                expect( anInputElement.isPresent()).toBe( true);
                expect( anInputElement.isDisplayed()).toBe( true);

                return anInputElement;
            };
            if( fElPtr_InputField){}/* CQT */
            aPrototype.fElPtr_InputField = fElPtr_InputField;






            var fElPtr_CandidatesField = function( theEditorName, theFieldName, theFieldType) {

                var anInputElementId = this._v_DomIdPrefix + "_Editor_" + theEditorName + "_Field_" + theFieldName + "_RdOnly_" + theFieldType + "_Input";

                var anInputElement = element( by.id( anInputElementId));

                expect( anInputElement.isPresent()).toBe( true);
                expect( anInputElement.isDisplayed()).toBe( true);

                return anInputElement;
            };
            if( fElPtr_CandidatesField){}/* CQT */
            aPrototype.fElPtr_CandidatesField = fElPtr_CandidatesField;







            var fDoPtr_CandidatesOpen = function( theEditorName, theFieldChangeSpec) {

                var aMethodName = "fDoPtr_CandidatesOpen";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !theEditorName) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theEditorName", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                if( !theFieldChangeSpec) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theFieldChangeSpec", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                var aFieldName = theFieldChangeSpec[ "fieldName"];
                if( !aFieldName) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theFieldChangeSpec[ 'fieldName']", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                var aFieldType = theFieldChangeSpec[ "type"];
                if( !aFieldType) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theFieldChangeSpec[ 'type']", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                var aPtrEl_CandidatesInputField = this.fElPtr_CandidatesField( theEditorName, aFieldName, aFieldType);

                aPtrEl_CandidatesInputField.click();

                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_OK, null, null, null);
                }

                /* TWICE !!! because the tested application actually schedules two refreshes, because of bindonce avoiding AngujarJS machinery from observing the grid */

                this.fDoPtr_WaitForAngular();

                return this.fDoPtr_WaitForAngular();

            };
            if( fDoPtr_CandidatesOpen){}/* CQT */
            aPrototype.fDoPtr_CandidatesOpen = fDoPtr_CandidatesOpen;











            var fElPtr_CreatorCandidatesField = function( theEditorName, theFieldName, theFieldType) {

                var anInputElementId = this._v_DomIdPrefix + "_Creator_" + theEditorName + "_Field_" + theFieldName + "_RdOnly_" + theFieldType + "_Input";

                var anInputElement = element( by.id( anInputElementId));

                expect( anInputElement.isPresent()).toBe( true);
                expect( anInputElement.isDisplayed()).toBe( true);

                return anInputElement;
            };
            if( fElPtr_CreatorCandidatesField){}/* CQT */
            aPrototype.fElPtr_CreatorCandidatesField = fElPtr_CreatorCandidatesField;





            var fDoPtr_CreatorCandidatesOpen = function( theEditorName, theFieldChangeSpec) {

                var aMethodName = "fDoPtr_CreatorCandidatesOpen";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !theEditorName) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theEditorName", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                if( !theFieldChangeSpec) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theFieldChangeSpec", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                var aFieldName = theFieldChangeSpec[ "fieldName"];
                if( !aFieldName) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theFieldChangeSpec[ 'fieldName']", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                var aFieldType = theFieldChangeSpec[ "type"];
                if( !aFieldType) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theFieldChangeSpec[ 'type']", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                var aPtrEl_CandidatesInputField = this.fElPtr_CreatorCandidatesField( theEditorName, aFieldName, aFieldType);

                aPtrEl_CandidatesInputField.click();

                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_OK, null, null, null);
                }

                /* TWICE !!! because the tested application actually schedules two refreshes, because of bindonce avoiding AngujarJS machinery from observing the grid */

                this.fDoPtr_WaitForAngular();

                return this.fDoPtr_WaitForAngular();

            };
            if( fDoPtr_CreatorCandidatesOpen){}/* CQT */
            aPrototype.fDoPtr_CreatorCandidatesOpen = fDoPtr_CreatorCandidatesOpen;













            var fDoPtr_ChangeFields = function( theGrid, theAction) {

                var aMethodName = "fDoPtr_ChangeFields";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !theGrid) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theGrid", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theAction", null);
                    }
                    return this.fAtPtr_MissingParm();
                }


                var aFieldsIdName         = "_Editor_";
                var aFieldsIdNameInHeader = "_EditorInHeader_";

                var anEditorName = theAction[ "editorName"];
                if( !anEditorName) {

                    anEditorName = theAction[ "argumentsName"];
                    if( !anEditorName) {

                        if( this.LOGMISSINGPARMS) {
                            this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theAction[ 'editorName'] && !theAction[ 'argumentsName']", null);
                        }
                        return this.fAtPtr_MissingParm();
                    }
                    else {
                        aFieldsIdName = "_Arguments_";
                        aFieldsIdNameInHeader = "_ArgumentsInHeader_";
                    }
                }



                var someFieldEdits = theAction[ "fieldEdits"];

                if( !someFieldEdits || !someFieldEdits.length) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theAction[ 'fieldEdits']", null);
                    }

                    return  this.fAtPtr_EmptyStep();
                }



                var aLastPromise  = null;

                var aNumFieldChangeSpecs = someFieldEdits.length;
                if( aNumFieldChangeSpecs) {

                    for( var aFieldChangeSpecIdx=0; aFieldChangeSpecIdx < aNumFieldChangeSpecs; aFieldChangeSpecIdx++) {

                        var aFieldChangeSpec = someFieldEdits[ aFieldChangeSpecIdx];
                        if( aFieldChangeSpec) {

                            if( this.LOGDOPTRSTEPS) {
                                this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aFieldChangeSpec, "aFieldChangeSpec", null);
                            }

                            var aFieldName = aFieldChangeSpec[ "fieldName"];
                            if( aFieldName) {

                                var aIsCandidates = aFieldChangeSpec[ "candidates"];
                                if( aIsCandidates) {
                                    continue;
                                }


                                var aFieldType = aFieldChangeSpec[ "type"];
                                if( aFieldType) {

                                    var aOneFieldIdName = aFieldsIdName;
                                    var anInHeader = aFieldChangeSpec[ "inHeader"];
                                    if( anInHeader) {
                                        aOneFieldIdName = aFieldsIdNameInHeader;
                                    }

                                    var anInputElementId = this._v_DomIdPrefix + aOneFieldIdName + anEditorName + "_Field_" + aFieldName + "_Edit_" + aFieldType + "_Input";

                                    var anInputElement = element( by.id( anInputElementId));

                                    var anInputElementDirtyId = this._v_DomIdPrefix + aOneFieldIdName + anEditorName + "_Field_" + aFieldName + "_Edit_Mark_Dirty_Span";
                                    var anInputElementDirty = null;

                                    var aValue = aFieldChangeSpec[ "value"];

                                    if( aValue) {

                                        if( typeof aValue == "string") {
                                            aValue = this.fParmValueReplacement( aValue)
                                        }
                                    }



                                    if( this.LOGDOPTRSTEPS) {
                                        this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aFieldType, null, null);
                                    }

                                    var aDate = new Date();
                                    var aFecha = this.fDateToStr( aDate);
                                    var aTimestamp =  this.fDateToTimestampStr( aDate);
                                    var aMillis = "" + aDate.getTime();
                                    aMillis = aMillis.substring( aMillis.length - 4);


                                    switch( aFieldType) {

                                        case "Int":
                                            anInputElement.sendKeys( protractor.Key.chord(protractor.Key.CONTROL, "a"));
                                            anInputElement.sendKeys( protractor.Key.BACK_SPACE);

                                            aLastPromise = anInputElement.clear();

                                            if( !( typeof aValue == "undefined") && !( aValue == null)) {

                                                var aValueIntChars = aValue;

                                                if( !( typeof aValueIntChars == "string")) {
                                                    aValueIntChars = new String( aValueIntChars);
                                                }

                                                if( this.LOGDOPTRSTEPS) {
                                                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aValueIntChars, null, null);
                                                }

                                                anInputElement.sendKeys( aValueIntChars);

                                                anInputElementDirty = element( by.id( anInputElementDirtyId));

                                                aLastPromise = anInputElementDirty;
                                            }
                                            break;



                                        case "String":
                                            anInputElement.sendKeys( protractor.Key.chord(protractor.Key.CONTROL, "a"));
                                            anInputElement.sendKeys( protractor.Key.BACK_SPACE);

                                            aLastPromise = anInputElement.clear();

                                            if( aValue) {

                                                var aValueStrChars = aValue.replace(  "$timestamp", aTimestamp);
                                                aValueStrChars = aValueStrChars.replace( "$millis", aMillis);
                                                aValueStrChars = aValueStrChars.replace( "$date", aFecha);

                                                if( this.LOGDOPTRSTEPS) {
                                                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aValueStrChars, null, null);
                                                }

                                                aLastPromise = anInputElement.sendKeys( aValueStrChars);

                                                if( !anInHeader) {
                                                    anInputElementDirty = element( by.id( anInputElementDirtyId));

                                                    expect( anInputElementDirty.isPresent()).toBe( true);
                                                    expect( anInputElementDirty.isDisplayed()).toBe( true);

                                                    aLastPromise = anInputElementDirty;
                                                }

                                            }
                                            break;


                                        case "Text":

                                            anInputElement.sendKeys( protractor.Key.chord(protractor.Key.CONTROL, "a"));
                                            anInputElement.sendKeys( protractor.Key.BACK_SPACE);

                                            aLastPromise = anInputElement.clear();

                                            if( aValue) {

                                                var aValueTxtChars = aValue.replace(  "$timestamp", aTimestamp);
                                                aValueTxtChars = aValueTxtChars.replace( "$millis", aMillis);
                                                aValueTxtChars = aValueTxtChars.replace( "$date", aFecha);


                                                if( this.LOGDOPTRSTEPS) {
                                                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aValueTxtChars, null, null);
                                                }

                                                anInputElement.sendKeys( aValueTxtChars);

                                                if( !anInHeader) {
                                                    anInputElementDirty = element( by.id( anInputElementDirtyId));

                                                    expect( anInputElementDirty.isPresent()).toBe( true);
                                                    expect( anInputElementDirty.isDisplayed()).toBe( true);

                                                    aLastPromise = anInputElementDirty;
                                                }
                                            }
                                            break;


                                        case "IntYesNo":

                                            aLastPromise = anInputElement.click();

                                            if( !anInHeader) {
                                                anInputElementDirty = element( by.id( anInputElementDirtyId));
                                                expect( anInputElementDirty.isPresent()).toBe( true);
                                                expect( anInputElementDirty.isDisplayed()).toBe( true);

                                                aLastPromise = anInputElementDirty;
                                            }

                                            break;


                                        case "BoolYesNo":

                                            aLastPromise = anInputElement.click();

                                            if( !anInHeader) {
                                                anInputElementDirty = element( by.id( anInputElementDirtyId));
                                                expect( anInputElementDirty.isPresent()).toBe( true);
                                                expect( anInputElementDirty.isDisplayed()).toBe( true);

                                                aLastPromise = anInputElementDirty;
                                            }

                                            break;



                                        default:
                                    }
                                }
                            }
                        }
                    }
                }


                if( !aLastPromise) {
                    if( this.LOGDOPTRSTEPS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, "!aLastPromise", null, null);
                    }

                    return  this.fAtPtr_EmptyStep();
                }


                return aLastPromise;
            };
            if( fDoPtr_ChangeFields){}/* CQT */
            aPrototype.fDoPtr_ChangeFields = fDoPtr_ChangeFields;















            var fDateToTimestampStr = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aDate = "" + theDate.getDate();
                var aDateStr = "" + aDate;
                if( aDateStr.length < 2) {
                    aDateStr = "0" + aDateStr;
                }

                var aMonth = "" + (theDate.getMonth()+ 1);
                var aMonthStr = "" + aMonth;
                if( aMonthStr.length < 2) {
                    aMonthStr = "0" + aMonthStr;
                }

                var aFullYear = theDate.getFullYear();
                var aFullYearStr = "" + aFullYear;

                var aHours = theDate.getHours();
                var aHoursStr = "" + aHours;
                if( aHoursStr.length < 2) {
                    aHoursStr = "0" + aHoursStr;
                }

                var aMinutes = theDate.getMinutes();
                var aMinutesStr = "" + aMinutes;
                if( aMinutesStr.length < 2) {
                    aMinutesStr = "0" + aMinutesStr;
                }

                var aSeconds = theDate.getSeconds();
                var aSecondsStr = "" + aSeconds;
                if( aSecondsStr.length < 2) {
                    aSecondsStr = "0" + aSecondsStr;
                }

                var aMilliseconds = theDate.getMilliseconds();
                var aMillisecondsStr = "" + aMilliseconds;
                if( aMillisecondsStr.length < 3) {
                    if( aMillisecondsStr.length < 2) {
                        aMillisecondsStr = "00" + aMillisecondsStr;
                    }
                    else {
                        aMillisecondsStr = "0" + aMillisecondsStr;
                    }
                }

                var aTimestampStr = aDateStr + "/" + aMonthStr + "/" + aFullYearStr
                    + " "
                    + aHoursStr + ":" + aMinutesStr + ":" + aSecondsStr + "." + aMillisecondsStr;
                if( aTimestampStr){}/* CQT */

                return aTimestampStr;
            };
            if( fDateToTimestampStr){}/* CQT */
            aPrototype.fDateToTimestampStr = fDateToTimestampStr;










            var fDateToStr = function( theDate) {

                if( theDate == null) {
                    return null;
                }

                var aDate = "" + theDate.getDate();
                var aDateStr = "" + aDate;
                if( aDateStr.length < 2) {
                    aDateStr = "0" + aDateStr;
                }

                var aMonth = "" + (theDate.getMonth()+ 1);
                var aMonthStr = "" + aMonth;
                if( aMonthStr.length < 2) {
                    aMonthStr = "0" + aMonthStr;
                }

                var aFullYear = theDate.getFullYear();
                var aFullYearStr = "" + aFullYear;

                var aFullDateStr = aDateStr + "/" + aMonthStr + "/" + aFullYearStr;
                if( aFullDateStr){}/* CQT */

                return aFullDateStr;
            };
            if( fDateToStr){}/* CQT */
            aPrototype.fDateToStr = fDateToStr;











            var fDoPtr_InitFields = function( theGrid, theAction) {

                var aMethodName = "fDoPtr_InitFields";
                if( this.LOGDOPTRSTEPS) {
                    this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_BEGIN, null, null, null);
                }

                if( !theGrid) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "theGrid", null);
                    }
                    return this.fAtPtr_MissingParm();
                }

                if( !theAction) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "theAction", null);
                    }
                    return this.fAtPtr_MissingParm();
                }


                var aCreatorName = theAction[ "creatorName"];
                if( !aCreatorName) {
                    if( this.LOGMISSINGPARMS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_MISSINGPARM, null, "!theAction[ 'creatorName']", null);
                    }
                    return this.fAtPtr_MissingParm();
                }


                var someFieldInits = theAction[ "fieldInits"];
                if( !someFieldInits || !someFieldInits.length) {
                    if( this.LOGDOPTRSTEPS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, null, "!theAction[ 'fieldInits']", null);
                    }

                    return  this.fAtPtr_EmptyStep();
                }


                var aLastPromise  = null;

                var aNumFieldChangeSpecs = someFieldInits.length;
                if( aNumFieldChangeSpecs) {

                    for( var aFieldChangeSpecIdx=0; aFieldChangeSpecIdx < aNumFieldChangeSpecs; aFieldChangeSpecIdx++) {

                        var aFieldChangeSpec = someFieldInits[ aFieldChangeSpecIdx];
                        if( aFieldChangeSpec) {

                            if( this.LOGDOPTRSTEPS) {
                                this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aFieldChangeSpec, "aFieldChangeSpec", null);
                            }

                            var aFieldName = aFieldChangeSpec[ "fieldName"];
                            if( aFieldName) {

                                var aIsCandidates = aFieldChangeSpec[ "candidates"];
                                if( aIsCandidates) {
                                    continue;
                                }


                                var aFieldType = aFieldChangeSpec[ "type"];
                                if( aFieldType) {

                                    var anInputElementId = this._v_DomIdPrefix + "_Creator_" + aCreatorName + "_Field_" + aFieldName + "_Edit_" + aFieldType + "_Input";

                                    var anInputElement = element( by.id( anInputElementId));

                                    var anInputElementDirtyId = this._v_DomIdPrefix + "_Creator_" + aCreatorName + "_Field_" + aFieldName + "_Edit_Mark_Dirty_Span";
                                    var anInputElementDirty = null;

                                    var aValue = aFieldChangeSpec[ "value"];


                                    if( aValue) {

                                        if( typeof aValue == "string") {
                                            aValue = this.fParmValueReplacement( aValue)
                                        }
                                    }


                                    if( this.LOGDOPTRSTEPS) {
                                        this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aValue, "aValue", null);
                                    }


                                    var aDate = new Date();
                                    var aFecha = this.fDateToStr( aDate);
                                    var aTimestamp =  this.fDateToTimestampStr( aDate);
                                    var aMillis = "" + aDate.getTime();
                                    aMillis = aMillis.substring( aMillis.length - 4);


                                    switch( aFieldType) {

                                        case "Int":
                                            anInputElement.sendKeys( protractor.Key.chord(protractor.Key.CONTROL, "a"));
                                            anInputElement.sendKeys( protractor.Key.BACK_SPACE);

                                            aLastPromise = anInputElement.clear();

                                            if( !( typeof aValue == "undefined") && !( aValue == null)) {

                                                var aValueIntChars = aValue;

                                                if( !( typeof aValueIntChars == "string")) {
                                                    aValueIntChars = "" + aValueIntChars;
                                                }

                                                if( this.LOGDOPTRSTEPS) {
                                                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aValueIntChars, null, null);
                                                }

                                                anInputElement.sendKeys( aValueIntChars);

                                                anInputElementDirty = element( by.id( anInputElementDirtyId));

                                                aLastPromise = anInputElementDirty;
                                            }
                                            break;


                                        case "String":
                                            anInputElement.sendKeys( protractor.Key.chord(protractor.Key.CONTROL, "a"));
                                            anInputElement.sendKeys( protractor.Key.BACK_SPACE);

                                            aLastPromise = anInputElement.clear();

                                            if( aValue) {
                                                var aValueStrChars = aValue.replace(  "$timestamp", aTimestamp);
                                                aValueStrChars = aValueStrChars.replace( "$millis", aMillis);
                                                aValueStrChars = aValueStrChars.replace( "$date", aFecha);


                                                if( this.LOGDOPTRSTEPS) {
                                                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aValueStrChars, null, null);
                                                }

                                                anInputElement.sendKeys( aValueStrChars);

                                                anInputElementDirty = element( by.id( anInputElementDirtyId));

                                                aLastPromise = anInputElementDirty;
                                            }
                                            break;



                                        case "Text":
                                            anInputElement.sendKeys( protractor.Key.chord(protractor.Key.CONTROL, "a"));
                                            anInputElement.sendKeys( protractor.Key.BACK_SPACE);

                                            aLastPromise = anInputElement.clear();

                                            if( aValue) {

                                                var aValueTxtChars = aValue.replace(  "$timestamp", aTimestamp);
                                                aValueTxtChars = aValueTxtChars.replace( "$millis", aMillis);
                                                aValueTxtChars = aValueTxtChars.replace( "$date", aFecha);


                                                if( this.LOGDOPTRSTEPS) {
                                                    this.fPtrRecord( aMethodName, this.EVENTKIND_INFO, aValueTxtChars, null, null);
                                                }

                                                anInputElement.sendKeys( aValueTxtChars);

                                                anInputElementDirty = element( by.id( anInputElementDirtyId));

                                                aLastPromise = anInputElementDirty;
                                            }
                                            break;


                                        case "IntYesNo":

                                            anInputElement.click();

                                            anInputElementDirty = element( by.id( anInputElementDirtyId));
                                            expect( anInputElementDirty.isPresent()).toBe( true);
                                            expect( anInputElementDirty.isDisplayed()).toBe( true);

                                            aLastPromise = anInputElementDirty;

                                            break;


                                        case "BoolYesNo":

                                            anInputElement.click();

                                            anInputElementDirty = element( by.id( anInputElementDirtyId));
                                            expect( anInputElementDirty.isPresent()).toBe( true);
                                            expect( anInputElementDirty.isDisplayed()).toBe( true);

                                            aLastPromise = anInputElementDirty;

                                            break;

                                        default:
                                    }
                                }
                            }
                        }
                    }
                }


                if( !aLastPromise) {
                    if( this.LOGDOPTRSTEPS) {
                        this.fPtrRecord( aMethodName, this.EVENTKIND_BROWSERHELPER_EMPTY, "!aLastPromise", null, null);
                    }

                    return  this.fAtPtr_EmptyStep();
                }


                return aLastPromise;
            };
            if( fDoPtr_InitFields){}/* CQT */
            aPrototype.fDoPtr_InitFields = fDoPtr_InitFields;
















            var pDoPtr_InitWithHelperParms = function( theHelperParms) {

                if( !theHelperParms) {
                    return;
                }


                var someParmsWidgetCtrls = theHelperParms[ this.PARM_WIDGETCTRLS];
                if( !someParmsWidgetCtrls) {
                    return;
                }

                this._v_DomIdPrefix = someParmsWidgetCtrls[ this.PARM_WIDGETCTRLS_DOMIDPREFIX];
            };
            if( pDoPtr_InitWithHelperParms){}/* CQT */
            aPrototype.pDoPtr_InitWithHelperParms = pDoPtr_InitWithHelperParms;












            var fAtPtr_MissingParm = function() {

                if( this.SHALLSLEEP_ATMISSINGPARM) {
                    return browser.sleep( this.SLEEPATMISSINGPARM);
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fAtPtr_MissingParm){}/* CQT */
            aPrototype.fAtPtr_MissingParm = fAtPtr_MissingParm;








            var fAtPtr_CompositeEnd = function() {

                if( this.SHALLSLEEP_ATCOMPOSITEEND) {
                    return browser.sleep( this.SLEEPATCOMPOSITEEND);
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fAtPtr_CompositeEnd){}/* CQT */
            aPrototype.fAtPtr_CompositeEnd = fAtPtr_CompositeEnd;





            var fAtPtr_StepEnd = function() {
                if( this.SHALLSLEEP_ATSTEPEND) {
                    return browser.sleep( this.SLEEPATSTEPEND);
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fAtPtr_StepEnd){}/* CQT */
            aPrototype.fAtPtr_StepEnd = fAtPtr_StepEnd;




            var fAtPtr_WaitASecondOrTwo = function() {

                if( this.SHALLSLEEP_ATWAITASECONDORTWO) {
                    return browser.sleep( this.SLEEPASECONDORTWO);
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fAtPtr_WaitASecondOrTwo){}/* CQT */
            aPrototype.fAtPtr_WaitASecondOrTwo = fAtPtr_WaitASecondOrTwo;







            var fAtPtr_EmptyStep = function() {

                if( this.SHALLSLEEP_ATEMPTYSTEP) {
                    return browser.sleep( this.SLEEPATEMPTYSTEP);
                }

                return this.fPrmPtr_NewResolvedPromise();
            };
            if( fAtPtr_EmptyStep){}/* CQT */
            aPrototype.fAtPtr_EmptyStep = fAtPtr_EmptyStep;





            var fNewVoidRunningTestInfo = function() {

                return {
                    "top":     null,
                    "full":    [ ],
                    "current": null,
                    "extra":   null
                };
            };
            if( fNewVoidRunningTestInfo){}/* CQT */
            aPrototype.fNewVoidRunningTestInfo = fNewVoidRunningTestInfo;





            return aPrototype;

        })();




        var WidgetCtrlsTestHelper_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                                  theProtractorTest,
                                                                  theDomIdPrefix) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_DomIdPrefix   = null;

            this._pInit_WidgetCtrlsTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                       theProtractorTest,
                                                       theDomIdPrefix);

        };
        WidgetCtrlsTestHelper_Constructor.prototype = aWidgetCtrlsTestHelper_Prototype;





        var WidgetCtrlsTestHelper_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = aWidgetCtrlsTestHelper_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_DomIdPrefix   = null;
        };
        WidgetCtrlsTestHelper_SuperPrototypeConstructor.prototype = aWidgetCtrlsTestHelper_Prototype;



        var aModule = {
            "WidgetCtrlsTestHelper_Prototype": aWidgetCtrlsTestHelper_Prototype,
            "WidgetCtrlsTestHelper_Constructor": WidgetCtrlsTestHelper_Constructor,
            "WidgetCtrlsTestHelper_SuperPrototypeConstructor": WidgetCtrlsTestHelper_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aWidgetCtrlsTestHelper_Prototype._v_Module = aModule;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_widgetctrls_testhelper   = require('./common-testhelper');
            var aM_forcedexception     = require('../common-test/forcedexception');
            var aM_overrider           = require('../common-test/overrider');
            var aM_sentinels           = require('../common-test/sentinels');

            return aMod_definer(
                aM_widgetctrls_testhelper,
                aM_forcedexception,
                aM_overrider,
                aM_sentinels
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./common-testhelper",
            "../common-test/forcedexception",
            "../common-test/overrider",
            "../common-test/sentinels"
        ], function (
                theM_common_testhelper,
                theM_forcedexception,
                theM_overrider,
                theM_sentinels
            ) {
            return aMod_definer(
                theM_common_testhelper,
                theM_forcedexception,
                theM_overrider,
                theM_sentinels
            );
        });
    }


}());







