
'use strict';

/*
 composable-testhelper.js
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
    var aMod_definer = function( theM_common_testhelper,
                                 theM_forcedexception,
                                 theM_overrider) {

        var ModuleName     = "composable-testhelper";
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













        var aComposableTestHelper_Prototype = (function() {


            var aPrototype = new theM_common_testhelper.CommonTestHelper_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            aPrototype._v_Type = "ComposableTestHelper";

            aPrototype._v_Module = null;

            aPrototype._v_WidgetCtrlsHelper   = null;

            aPrototype._v_ParentCtrlsHelper   = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                   theWidgetCtrlsHelper, theParentCtrlsHelper) {

                this._pInit_ComposableTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                  theWidgetCtrlsHelper, theParentCtrlsHelper);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ComposableTestHelper = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                        theWidgetCtrlsHelper, theParentCtrlsHelper) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_CommonTestHelper.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_WidgetCtrlsHelper   = theWidgetCtrlsHelper;
                this._v_ParentCtrlsHelper   = theParentCtrlsHelper;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_ComposableTestHelper", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_ComposableTestHelper){}/* CQT */
            aPrototype._pInit_ComposableTestHelper = _pInit_ComposableTestHelper;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ComposableTestHelper( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;






            var _pRelease_ComposableTestHelper = function( theReleaseParms, theReleaseDone) {


                this._v_WidgetCtrlsHelper = undefined;

                this._v_ParentCtrlsHelper = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_CommonTestHelper.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ComposableTestHelper){}/* CQT */
            aPrototype._pRelease_ComposableTestHelper = _pRelease_ComposableTestHelper;











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

                this.pCleanUpTest_ComposableTestHelper( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ComposableTestHelper = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_CommonTestHelper.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ComposableTestHelper){}/* CQT */
            aPrototype.pCleanUpTest_ComposableTestHelper = pCleanUpTest_ComposableTestHelper;









            var fRunningTestInfo = function( ) {

                var aRunningTestInfo = null;

                if( !this._v_ParentCtrlsHelper || !this._v_ParentCtrlsHelper.fRunningTestInfo) {
                    aRunningTestInfo = this._v_WidgetCtrlsHelper.fNewVoidRunningTestInfo();
                    aRunningTestInfo[ "top"]     = this._v_Title;
                    aRunningTestInfo[ "full"]    = [ this._v_Title];
                    aRunningTestInfo[ "current"] = this._v_Title;
                    return aRunningTestInfo;
                }


                aRunningTestInfo = this._v_ParentCtrlsHelper.fRunningTestInfo();
                if( !aRunningTestInfo) {
                    aRunningTestInfo = this._v_WidgetCtrlsHelper.fNewVoidRunningTestInfo();
                }
                if( !aRunningTestInfo[ "top"]) {
                    aRunningTestInfo[ "top"] = this._v_Title;
                }
                if( !aRunningTestInfo[ "full"]) {
                    aRunningTestInfo[ "full"] = [ ];
                }

                aRunningTestInfo[ "full"].push( this._v_Title);

                aRunningTestInfo[ "current"] = this._v_Title;

                return aRunningTestInfo;
            };
            if( fRunningTestInfo){}/* CQT */
            aPrototype.fRunningTestInfo = fRunningTestInfo;






            var fRunningTestInfoAtCompositeSpec = function( theCompositeSpec) {
                if( !theCompositeSpec) {
                    return this.fRunningTestInfo();
                }

                var aName = theCompositeSpec[ "name"] || this._v_Title;

                var aRunningTestInfo = this.fRunningTestInfo();
                if( !aRunningTestInfo) {
                    aRunningTestInfo = this._v_WidgetCtrlsHelper.fNewVoidRunningTestInfo();
                }
                if( !aRunningTestInfo[ "top"]) {
                    aRunningTestInfo[ "top"] = aName;
                }
                if( !aRunningTestInfo[ "full"]) {
                    aRunningTestInfo[ "full"] = [ ];
                }

                aRunningTestInfo[ "full"].push( aName);

                aRunningTestInfo[ "current"] = aName;

                return aRunningTestInfo;
            };
            if( fRunningTestInfoAtCompositeSpec){}/* CQT */
            aPrototype.fRunningTestInfoAtCompositeSpec = fRunningTestInfoAtCompositeSpec;






            var fRunningTestInfoAtCompositeSpecAction = function( theCompositeSpec, theAction) {
                if( !theCompositeSpec) {
                    return this.fRunningTestInfo();
                }


                var aName = theAction[ "name"];
                if( !aName) {
                    aName = "";
                }


                var anActionKind = theAction[ "actionKind"];
                if( anActionKind) {
                    aName += ( aName ? " " : "") + anActionKind;
                }


                var aGridName = theAction[ "gridName"];
                if( aGridName) {
                    aName += ( aName ? " " : "") + aGridName;
                }


                var anEditorName = theAction[ "gridName"];
                if( anEditorName) {
                    aName += ( aName ? " " : "") + anEditorName;
                }


                var aCreatorName = theAction[ "gridName"];
                if( aCreatorName) {
                    aName += ( aName ? " " : "") + aCreatorName;
                }


                var aFinder = theAction[ "finder"];
                if( aFinder) {
                    var aFinderStr = null;
                    try {
                        aFinderStr = JSON.stringify( aFinder);
                    }
                    catch( anException) {}
                    if( aFinderStr) {
                        aName += ( aName ? " " : "") + aFinderStr;
                    }
                }


                var someFieldEdits = theAction[ "fieldEdits"];
                if( someFieldEdits) {
                    someFieldEdits.forEach( function( athFieldEdit) {
                        if( athFieldEdit[ "fieldName"]) {
                            aName += ( aName ? " " : "") + athFieldEdit[ "fieldName"];
                        }
                    });
                }


                var someFieldInits = theAction[ "fieldInits"];
                if( someFieldInits) {
                    someFieldInits.forEach( function( athFieldEdit) {
                        if( athFieldEdit[ "fieldName"]) {
                            aName += ( aName ? " " : "") + athFieldEdit[ "fieldName"];
                        }
                    });
                }


                var aRunningTestInfo = this.fRunningTestInfoAtCompositeSpec( theCompositeSpec);
                if( !aRunningTestInfo) {
                    aRunningTestInfo = this._v_WidgetCtrlsHelper.fNewVoidRunningTestInfo();
                }
                if( !aRunningTestInfo[ "top"]) {
                    aRunningTestInfo[ "top"] = aName;
                }
                if( !aRunningTestInfo[ "full"]) {
                    aRunningTestInfo[ "full"] = [ ];
                }

                aRunningTestInfo[ "full"].push( aName);

                aRunningTestInfo[ "current"] = aName;

                return aRunningTestInfo;
            };
            if( fRunningTestInfoAtCompositeSpecAction){}/* CQT */
            aPrototype.fRunningTestInfoAtCompositeSpecAction = fRunningTestInfoAtCompositeSpecAction;




            return aPrototype;

        })();




        var ComposableTestHelper_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                                                        theWidgetCtrlsHelper, theParentCtrlsHelper) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_WidgetCtrlsHelper   = null;
            this._v_ParentCtrlsHelper   = null;

            this._pInit_ComposableTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder,
                                             theWidgetCtrlsHelper, theParentCtrlsHelper);

        };
        ComposableTestHelper_Constructor.prototype = aComposableTestHelper_Prototype;





        var ComposableTestHelper_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = aComposableTestHelper_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_WidgetCtrlsHelper   = null;
            this._v_ParentCtrlsHelper   = null;
        };
        ComposableTestHelper_SuperPrototypeConstructor.prototype = aComposableTestHelper_Prototype;



        var aModule = {
            "ComposableTestHelper_Prototype": aComposableTestHelper_Prototype,
            "ComposableTestHelper_Constructor": ComposableTestHelper_Constructor,
            "ComposableTestHelper_SuperPrototypeConstructor": ComposableTestHelper_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aComposableTestHelper_Prototype._v_Module = aModule;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_common_testhelper   = require('./common-testhelper');
            var aM_forcedexception     = require('../common-test/forcedexception');
            var aM_overrider           = require('../common-test/overrider');

            return aMod_definer(
                aM_common_testhelper,
                aM_forcedexception,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./common-testhelper",
            "../common-test/forcedexception",
            "../common-test/overrider"
        ], function (
            theM_common_testhelper,
            theM_forcedexception,
            theM_overrider
            ) {
            return aMod_definer(
                theM_common_testhelper,
                theM_forcedexception,
                theM_overrider
            );
        });
    }


}());


































