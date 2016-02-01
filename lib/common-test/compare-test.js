'use strict';

/*
 compare-test.js
 Created 2014511171648
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_traversals,
                                 theM_payloadholder) {


        var ModuleName     = "compare-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.DUMP_LEFT              = false;
            theToInit.DUMP_RIGHT             = false;

            theToInit.DUMP_LEFTTORIGHTDELTAS = false;
            theToInit.DUMP_RIGHTTOLEFTDELTAS = false;

            theToInit.FAILIFDIFFERENT        = true;


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

            theToInit.PARMSPREFIX_COMPARE = "compare";


            theToInit.PARM_COMPARE_LEFT                   = theToInit.PARMSPREFIX_COMPARE + ".left";
            theToInit.PARM_COMPARE_RIGHT                  = theToInit.PARMSPREFIX_COMPARE + ".right";

            theToInit.PARM_COMPARE_FAILIFDIFFERENT        = theToInit.PARMSPREFIX_COMPARE + ".failIfDifferent";
            theToInit.PARM_COMPARE_EXPECTEDLEFTTORIGHTDELTAS = theToInit.PARMSPREFIX_COMPARE + ".expectedLeftToRightDeltas";
            theToInit.PARM_COMPARE_EXPECTEDRIGHTTOLEFTDELTAS = theToInit.PARMSPREFIX_COMPARE + ".expectedRightToLeftDeltas";

            theToInit.PARM_COMPARE_COMPARELEFTTORIGHT     = theToInit.PARMSPREFIX_COMPARE + ".compareLeftToRight";
            theToInit.PARM_COMPARE_COMPARERIGHTTOLEFT     = theToInit.PARMSPREFIX_COMPARE + ".compareRightToLeft";
            theToInit.PARM_COMPARE_LEFTINCLUDEDKEYS       = theToInit.PARMSPREFIX_COMPARE + ".leftIncludedKeys";
            theToInit.PARM_COMPARE_RIGHTINCLUDEDKEYS      = theToInit.PARMSPREFIX_COMPARE + ".rightIncludedKeys";
            theToInit.PARM_COMPARE_LEFTEXCLUDEDKEYS       = theToInit.PARMSPREFIX_COMPARE + ".leftExcludedKeys";
            theToInit.PARM_COMPARE_RIGHTEXCLUDEDKEYS      = theToInit.PARMSPREFIX_COMPARE + ".rightExcludedKeys";
            theToInit.PARM_COMPARE_LEFTRULES              = theToInit.PARMSPREFIX_COMPARE + ".leftRules";
            theToInit.PARM_COMPARE_RIGHTRULES             = theToInit.PARMSPREFIX_COMPARE + ".rightRules";
            theToInit.PARM_COMPARE_LEFTTORIGHTKEYSGEN     = theToInit.PARMSPREFIX_COMPARE + ".leftToRightKeysGen";
            theToInit.PARM_COMPARE_RIGHTTOLEFTKEYSGEN     = theToInit.PARMSPREFIX_COMPARE + ".rightToLeftKeysGen";

            theToInit.PARM_COMPARE_DUMP_LEFT              = theToInit.PARMSPREFIX_COMPARE + ".dump_left";
            theToInit.PARM_COMPARE_DUMP_RIGHT             = theToInit.PARMSPREFIX_COMPARE + ".dump_right";
            theToInit.PARM_COMPARE_DUMP_LEFTTORIGHTDELTAS = theToInit.PARMSPREFIX_COMPARE + ".dump_leftToRightDeltas";
            theToInit.PARM_COMPARE_DUMP_RIGHTTOLEFTDELTAS = theToInit.PARMSPREFIX_COMPARE + ".dump_rightToLeftDeltas";



            theToInit.PARMS_COMPARE = [
                theToInit.PARM_COMPARE_LEFT                   ,
                theToInit.PARM_COMPARE_RIGHT                  ,

                theToInit.PARM_COMPARE_FAILIFDIFFERENT        ,
                theToInit.PARM_COMPARE_EXPECTEDLEFTTORIGHTDELTAS,
                theToInit.PARM_COMPARE_EXPECTEDRIGHTTOLEFTDELTAS,

                theToInit.PARM_COMPARE_COMPARELEFTTORIGHT     ,
                theToInit.PARM_COMPARE_COMPARERIGHTTOLEFT     ,
                theToInit.PARM_COMPARE_LEFTINCLUDEDKEYS       ,
                theToInit.PARM_COMPARE_RIGHTINCLUDEDKEYS      ,
                theToInit.PARM_COMPARE_LEFTEXCLUDEDKEYS       ,
                theToInit.PARM_COMPARE_RIGHTEXCLUDEDKEYS      ,
                theToInit.PARM_COMPARE_LEFTRULES              ,
                theToInit.PARM_COMPARE_RIGHTRULES             ,
                theToInit.PARM_COMPARE_LEFTTORIGHTKEYSGEN     ,
                theToInit.PARM_COMPARE_RIGHTTOLEFTKEYSGEN     ,

                theToInit.PARM_COMPARE_DUMP_LEFT              ,
                theToInit.PARM_COMPARE_DUMP_RIGHT             ,
                theToInit.PARM_COMPARE_DUMP_LEFTTORIGHTDELTAS ,
                theToInit.PARM_COMPARE_DUMP_RIGHTTOLEFTDELTAS
            ];


            theToInit.COMPAREPATHSEPARATOR  = ".";
            theToInit.COMPAREPATHOPENINDEX  = "[";
            theToInit.COMPAREPATHCLOSEINDEX = "]";

            theToInit.COMPARE_NOEXPECTEDDELTASENTINEL = {};


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











        var aCompare_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "Compare";

            aPrototype._v_Prototype_Compare = aPrototype;


            aPrototype._v_Left = null;
            aPrototype._v_Right = null;

            aPrototype._v_FailIfDifferent = null;
            aPrototype._v_ExpectedLeftToRightDeltas = null;
            aPrototype._v_ExpectedRightToLeftDeltas = null;

            aPrototype._v_CompareLeftToRight = null;
            aPrototype._v_CompareRightToLeft = null;
            aPrototype._v_LeftIncludedKeys = null;
            aPrototype._v_RightIncludedKeys = null;
            aPrototype._v_LeftExcludedKeys = null;
            aPrototype._v_RightExcludedKeys = null;
            aPrototype._v_LeftRules = null;
            aPrototype._v_RightRules = null;
            aPrototype._v_LeftToRightKeysGen = null;
            aPrototype._v_RightToLeftKeysGen = null;

            aPrototype._v_Dump_Left = null;
            aPrototype._v_Dump_Right = null;
            aPrototype._v_Dump_LeftToRightDeltas = null;
            aPrototype._v_Dump_RightToLeftDeltas = null;

            aPrototype._v_LeftToRightDeltas = null;
            aPrototype._v_RightToLeftDeltas = null;

            aPrototype._v_AreEqual = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Compare(
                    theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_Compare = function(
                theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Left = null;
                this._v_Right = null;

                this._v_FailIfDifferent = null;
                this._v_ExpectedLeftToRightDeltas = null;
                this._v_ExpectedRightToLeftDeltas = null;

                this._v_CompareLeftToRight = null;
                this._v_CompareRightToLeft = null;
                this._v_LeftIncludedKeys = null;
                this._v_RightIncludedKeys = null;
                this._v_LeftExcludedKeys = null;
                this._v_RightExcludedKeys = null;
                this._v_LeftRules = null;
                this._v_RightRules = null;
                this._v_LeftToRightKeysGen = null;
                this._v_RightToLeftKeysGen = null;

                this._v_Dump_Left = null;
                this._v_Dump_Right = null;
                this._v_Dump_LeftToRightDeltas = null;
                this._v_Dump_RightToLeftDeltas = null;

                this._v_LeftToRightDeltas = null;
                this._v_RightToLeftDeltas = null;

                this._v_AreEqual = null;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Compare", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Compare){}/* CQT */
            aPrototype._pInit_Compare = _pInit_Compare;









            var fUsePayloadHolder = function( ) {

                return this._v_UsePayloadHolder;
            };
            if( fUsePayloadHolder){}/* CQT */
            aPrototype.fUsePayloadHolder = fUsePayloadHolder;













            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Compare( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_Compare = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_Left                      = undefined;
                this._v_Right                     = undefined;

                this._v_FailIfDifferent           = undefined;
                this._v_ExpectedLeftToRightDeltas = undefined;
                this._v_ExpectedRightToLeftDeltas = undefined;

                if( this._v_Left && ( typeof this._v_Left == "object") && this._v_Left.pReleasePayload && ( typeof this._v_Left.pReleasePayload == "function")) {
                    this._v_Left.pReleasePayload();
                }
                this._v_Left                   = undefined;


                if( this._v_Right && ( typeof this._v_Right == "object") && this._v_Right.pReleasePayload && ( typeof this._v_Right.pReleasePayload == "function")) {
                    this._v_Right.pReleasePayload();
                }
                this._v_Right                  = undefined;

                this._v_CompareLeftToRight     = undefined;
                this._v_CompareRightToLeft     = undefined;
                this._v_LeftIncludedKeys       = undefined;
                this._v_RightIncludedKeys      = undefined;
                this._v_LeftExcludedKeys       = undefined;
                this._v_RightExcludedKeys      = undefined;
                this._v_LeftRules              = undefined;
                this._v_RightRules             = undefined;
                this._v_LeftToRightKeysGen     = undefined;
                this._v_RightToLeftKeysGen     = undefined;

                this._v_Dump_Left              = undefined;
                this._v_Dump_Right             = undefined;
                this._v_Dump_LeftToRightDeltas = undefined;
                this._v_Dump_RightToLeftDeltas = undefined;

                this._v_LeftToRightDeltas      = undefined;
                this._v_RightToLeftDeltas      = undefined;

                this._v_AreEqual               = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Compare){}/* CQT */
            aPrototype._pRelease_Compare = _pRelease_Compare;









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

                this.pCleanUpTest_Compare( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;




            
            


            var pCleanUpTest_Compare = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {


                    if( this._v_Left && ( typeof this._v_Left == "object") && this._v_Left.pReleasePayload && ( typeof this._v_Left.pReleasePayload == "function")) {
                        this._v_Left.pReleasePayload();
                    }
                    this._v_Left              = undefined;


                    if( this._v_Right && ( typeof this._v_Right == "object") && this._v_Right.pReleasePayload && ( typeof this._v_Right.pReleasePayload == "function")) {
                        this._v_Right.pReleasePayload();
                    }
                    this._v_Right             = undefined;

                    this._v_LeftToRightDeltas = undefined;
                    this._v_RightToLeftDeltas = undefined;

                    this._v_AreEqual          = undefined;

                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Compare){}/* CQT */
            aPrototype.pCleanUpTest_Compare = pCleanUpTest_Compare;













            var pS_ResolveParms = function( theCallback) {
                var aMethodName = "pS_ResolveParms";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var someParmsToResolve = [
                    this.PARM_COMPARE_LEFT                   ,
                    this.PARM_COMPARE_RIGHT                  ,

                    this.PARM_COMPARE_FAILIFDIFFERENT        ,
                    this.PARM_COMPARE_EXPECTEDLEFTTORIGHTDELTAS,
                    this.PARM_COMPARE_EXPECTEDRIGHTTOLEFTDELTAS,
                    
                    this.PARM_COMPARE_COMPARELEFTTORIGHT     ,
                    this.PARM_COMPARE_COMPARERIGHTTOLEFT     ,
                    this.PARM_COMPARE_LEFTINCLUDEDKEYS       ,
                    this.PARM_COMPARE_RIGHTINCLUDEDKEYS      ,
                    this.PARM_COMPARE_LEFTEXCLUDEDKEYS       ,
                    this.PARM_COMPARE_RIGHTEXCLUDEDKEYS      ,
                    this.PARM_COMPARE_LEFTRULES              ,
                    this.PARM_COMPARE_RIGHTRULES             ,
                    this.PARM_COMPARE_LEFTTORIGHTKEYSGEN     ,
                    this.PARM_COMPARE_RIGHTTOLEFTKEYSGEN     ,

                    this.PARM_COMPARE_DUMP_LEFT              ,
                    this.PARM_COMPARE_DUMP_RIGHT             ,
                    this.PARM_COMPARE_DUMP_LEFTTORIGHTDELTAS ,
                    this.PARM_COMPARE_DUMP_RIGHTTOLEFTDELTAS
                ];

                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return  false;
                }




                if( this._v_Dump_Left == null) {
                    var aDump_LeftResolution = aParmResolutionsDict[ this.PARM_COMPARE_DUMP_LEFT];
                    if( aDump_LeftResolution && aDump_LeftResolution._v_Success) {
                        this._v_Dump_Left = aDump_LeftResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Left = this.DUMP_LEFT;
                    }
                }



                if( this._v_Dump_Right == null) {
                    var aDump_RightResolution = aParmResolutionsDict[ this.PARM_COMPARE_DUMP_RIGHT];
                    if( aDump_RightResolution && aDump_RightResolution._v_Success) {
                        this._v_Dump_Right = aDump_RightResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Right = this.DUMP_RIGHT;
                    }
                }





                if( this._v_Dump_LeftToRightDeltas == null) {
                    var aDump_LeftToRightDeltasResolution = aParmResolutionsDict[ this.PARM_COMPARE_DUMP_LEFTTORIGHTDELTAS];
                    if( aDump_LeftToRightDeltasResolution && aDump_LeftToRightDeltasResolution._v_Success) {
                        this._v_Dump_LeftToRightDeltas = aDump_LeftToRightDeltasResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_LeftToRightDeltas = this.DUMP_LEFTTORIGHTDELTAS;
                    }
                }



                if( this._v_Dump_RightToLeftDeltas == null) {
                    var aDump_RightToLeftDeltasResolution = aParmResolutionsDict[ this.PARM_COMPARE_DUMP_RIGHTTOLEFTDELTAS];
                    if( aDump_RightToLeftDeltasResolution && aDump_RightToLeftDeltasResolution._v_Success) {
                        this._v_Dump_RightToLeftDeltas = aDump_RightToLeftDeltasResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_RightToLeftDeltas = this.DUMP_RIGHTTOLEFTDELTAS;
                    }
                }





                if( this._v_Left == null) {
                    var aLeftResolution = aParmResolutionsDict[ this.PARM_COMPARE_LEFT];
                    if( aLeftResolution && aLeftResolution._v_Success) {
                        this._v_Left = aLeftResolution._v_ParmValue;
                    }
                }





                if( this._v_Right == null) {
                    var aRightResolution = aParmResolutionsDict[ this.PARM_COMPARE_RIGHT];
                    if( aRightResolution && aRightResolution._v_Success) {
                        this._v_Right = aRightResolution._v_ParmValue;
                    }
                }




                
                if( this._v_FailIfDifferent == null) {
                    var aFailIfDifferentResolution = aParmResolutionsDict[ this.PARM_COMPARE_FAILIFDIFFERENT];
                    if( aFailIfDifferentResolution && aFailIfDifferentResolution._v_Success) {
                        this._v_FailIfDifferent = aFailIfDifferentResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIfDifferent = this.FAILIFDIFFERENT;
                    }
                }


                if( this._v_ExpectedLeftToRightDeltas == null) {
                    var aExpectedLeftToRightDeltasResolution = aParmResolutionsDict[ this.PARM_COMPARE_EXPECTEDLEFTTORIGHTDELTAS];
                    if( aExpectedLeftToRightDeltasResolution && aExpectedLeftToRightDeltasResolution._v_Success) {
                        this._v_ExpectedLeftToRightDeltas = aExpectedLeftToRightDeltasResolution._v_ParmValue;
                    }
                    else {
                        this._v_ExpectedLeftToRightDeltas = this.COMPARE_NOEXPECTEDDELTASENTINEL
                    }
                }


                if( this._v_ExpectedRightToLeftDeltas == null) {
                    var aExpectedRightToLeftDeltasResolution = aParmResolutionsDict[ this.PARM_COMPARE_EXPECTEDRIGHTTOLEFTDELTAS];
                    if( aExpectedRightToLeftDeltasResolution && aExpectedRightToLeftDeltasResolution._v_Success) {
                        this._v_ExpectedRightToLeftDeltas = aExpectedRightToLeftDeltasResolution._v_ParmValue;
                    }
                    else {
                        this._v_ExpectedRightToLeftDeltas = this.COMPARE_NOEXPECTEDDELTASENTINEL
                    }
                }




                if( this._v_CompareLeftToRight == null) {
                    var aCompareLeftToRightResolution = aParmResolutionsDict[ this.PARM_COMPARE_COMPARELEFTTORIGHT];
                    if( aCompareLeftToRightResolution && aCompareLeftToRightResolution._v_Success) {
                        this._v_CompareLeftToRight = aCompareLeftToRightResolution._v_ParmValue;
                    }
                }


                if( this._v_CompareRightToLeft == null) {
                    var aCompareRightToLeftResolution = aParmResolutionsDict[ this.PARM_COMPARE_COMPARERIGHTTOLEFT];
                    if( aCompareRightToLeftResolution && aCompareRightToLeftResolution._v_Success) {
                        this._v_CompareRightToLeft = aCompareRightToLeftResolution._v_ParmValue;
                    }
                }
               
               
                if( this._v_LeftIncludedKeys == null) {
                    var aLeftIncludedKeysResolution = aParmResolutionsDict[ this.PARM_COMPARE_LEFTINCLUDEDKEYS];
                    if( aLeftIncludedKeysResolution && aLeftIncludedKeysResolution._v_Success) {
                        this._v_LeftIncludedKeys = aLeftIncludedKeysResolution._v_ParmValue;
                    }
                }

                
                if( this._v_RightIncludedKeys == null) {
                    var aRightIncludedKeysResolution = aParmResolutionsDict[ this.PARM_COMPARE_RIGHTINCLUDEDKEYS];
                    if( aRightIncludedKeysResolution && aRightIncludedKeysResolution._v_Success) {
                        this._v_RightIncludedKeys = aRightIncludedKeysResolution._v_ParmValue;
                    }
                }

                if( this._v_LeftExcludedKeys == null) {
                    var aLeftExcludedKeysResolution = aParmResolutionsDict[ this.PARM_COMPARE_LEFTEXCLUDEDKEYS];
                    if( aLeftExcludedKeysResolution && aLeftExcludedKeysResolution._v_Success) {
                        this._v_LeftExcludedKeys = aLeftExcludedKeysResolution._v_ParmValue;
                    }
                }


                if( this._v_RightExcludedKeys == null) {
                    var aRightExcludedKeysResolution = aParmResolutionsDict[ this.PARM_COMPARE_RIGHTEXCLUDEDKEYS];
                    if( aRightExcludedKeysResolution && aRightExcludedKeysResolution._v_Success) {
                        this._v_RightExcludedKeys = aRightExcludedKeysResolution._v_ParmValue;
                    }
                }

                if( this._v_LeftRules == null) {
                    var aLeftRulesResolution = aParmResolutionsDict[ this.PARM_COMPARE_LEFTRULES];
                    if( aLeftRulesResolution && aLeftRulesResolution._v_Success) {
                        this._v_LeftRules = aLeftRulesResolution._v_ParmValue;
                    }
                }


                if( this._v_RightRules == null) {
                    var aRightRulesResolution = aParmResolutionsDict[ this.PARM_COMPARE_RIGHTRULES];
                    if( aRightRulesResolution && aRightRulesResolution._v_Success) {
                        this._v_RightRules = aRightRulesResolution._v_ParmValue;
                    }
                }


                if( this._v_LeftToRightKeysGen == null) {
                    var aLeftToRightKeysGenResolution = aParmResolutionsDict[ this.PARM_COMPARE_LEFTTORIGHTKEYSGEN];
                    if( aLeftToRightKeysGenResolution && aLeftToRightKeysGenResolution._v_Success) {
                        this._v_LeftToRightKeysGen = aLeftToRightKeysGenResolution._v_ParmValue;
                    }
                }


                if( this._v_RightToLeftKeysGen == null) {
                    var aRightToLeftKeysGenResolution = aParmResolutionsDict[ this.PARM_COMPARE_RIGHTTOLEFTKEYSGEN];
                    if( aRightToLeftKeysGenResolution && aRightToLeftKeysGenResolution._v_Success) {
                        this._v_RightToLeftKeysGen = aRightToLeftKeysGenResolution._v_ParmValue;
                    }
                }



                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, null, null));

            };
            if( pS_ResolveParms){}/* CQT */
            aPrototype.pS_ResolveParms = pS_ResolveParms;











            var pS_Compare_LeftToRight = function( theCallback) {

                var aMethodName = "pS_Compare_LeftToRight";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( !this._v_CompareLeftToRight) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_CompareLeftToRight", null));
                    return;
                }

                var aLeft = this._v_Left;
                if( aLeft) {
                    aLeft = this.fParmValueReplacement( this._v_Left);
                    if( aLeft) {
                        aLeft = this.fUnwrapPayloadFromHolder( aLeft);
                    }
                }

                if( this._v_Dump_Left) {
                    console.log( "Left\n" + JSON.stringify( aLeft, null, 4));
                }




                var aRight = this._v_Right;
                if( aRight) {
                    aRight = this.fParmValueReplacement( this._v_Right);
                    if( aRight) {
                        aRight = this.fUnwrapPayloadFromHolder( aRight);
                    }
                }
                
                if( this._v_Dump_Right) {
                    console.log( "Right\n" + JSON.stringify( aRight, null, 4));
                }



                var someDeltas = [ ];


                this.pDiffsFromOneToOther(
                    aLeft,
                    aRight,
                    this._v_LeftIncludedKeys,
                    this._v_LeftExcludedKeys,
                    this._v_LeftRules,
                    this._v_LeftToRightKeysGen,
                    someDeltas,
                    "",
                    ""
                );

                if( someDeltas && someDeltas.length) {
                    this._v_LeftToRightDeltas = someDeltas;
                }
                else {
                    this._v_LeftToRightDeltas = null;
                }


                if( this._v_Dump_LeftToRightDeltas) {
                    console.log( "LeftToRightDeltas\n" + JSON.stringify( this._v_LeftToRightDeltas, null, 4));
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, null, null));

            };
            if( pS_Compare_LeftToRight){}/* CQT */
            aPrototype.pS_Compare_LeftToRight = pS_Compare_LeftToRight;












            var pS_Compare_RightToLeft = function( theCallback) {

                var aMethodName = "pS_Compare_RightToLeft";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( !this._v_CompareRightToLeft) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_CompareLeftToRight", null));
                    return;
                }


                var aLeft = this._v_Left;
                if( aLeft) {
                    aLeft = this.fParmValueReplacement( this._v_Left);
                    if( aLeft) {
                        aLeft = this.fUnwrapPayloadFromHolder( aLeft);
                    }
                }


                if( !this._v_CompareLeftToRight && this._v_Dump_Left) {
                    console.log( "Left\n" + JSON.stringify( aLeft, null, 4));
                }


                var aRight = this._v_Right;
                if( aRight) {
                    aRight = this.fParmValueReplacement( this._v_Right);
                    if( aRight) {
                        aRight = this.fUnwrapPayloadFromHolder( aRight);
                    }
                }


                if( !this._v_CompareLeftToRight && this._v_Dump_Right) {
                    console.log( "Right\n" + JSON.stringify( aRight, null, 4));
                }



                var someDeltas = [ ];


                this.pDiffsFromOneToOther(
                    aRight,
                    aLeft,
                    this._v_RightIncludedKeys,
                    this._v_RightExcludedKeys,
                    this._v_RightRules,
                    this._v_RightToLeftKeysGen,
                    someDeltas,
                    "",
                    ""
                );


                if( someDeltas && someDeltas.length) {
                    this._v_RightToLeftDeltas = someDeltas;
                }
                else {
                    this._v_RightToLeftDeltas = null;
                }



                if( this._v_Dump_RightToLeftDeltas) {
                    console.log( "RightToLeftDeltas\n" + JSON.stringify( this._v_RightToLeftDeltas, null, 4));
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, null, null));

            };
            if( pS_Compare_RightToLeft){}/* CQT */
            aPrototype.pS_Compare_RightToLeft = pS_Compare_RightToLeft;








            var fNewVoidCompareDelta = function() {

                var aCompareDelta = {
                    "onePath": null,
                    "otherPath": null,
                    "equal": null,
                    "reason": null /*,
                    "details": null,
                    "oneDetails": null,
                    "otherDetails": null */
                };

                return aCompareDelta;

            };
            if( fNewVoidCompareDelta){}/* CQT */
            aPrototype.fNewVoidCompareDelta = fNewVoidCompareDelta;


            






            var pDiffsFromOneToOther = function( theOneValue,
                                                 theOtherValue,
                                                 theIncludedKeys,
                                                 theExcludedKeys,
                                                 theRules,
                                                 theKeysGen,
                                                 theDeltasHolder,
                                                 theOnePath,
                                                 theOtherPath) {


                if( !theDeltasHolder) {
                    return;
                }


                if( !( typeof theOneValue == "undefined") &&  ( theOneValue === theM_sentinels.DONOTCOMPAREVALUESYMBOL)) {

                    return;
                }


                if( ( typeof theOneValue == "undefined") && ( typeof theOtherValue == "undefined")) {

                    return;
                }




                var aDelta = null;


                if( ( ( typeof theOneValue == "undefined") || ( typeof theOtherValue == "undefined"))) {

                    aDelta = this.fNewVoidCompareDelta();
                    aDelta[ "onePath"]   = theOnePath;
                    aDelta[ "otherPath"] = theOtherPath;
                    aDelta[ "equal"]     = false;
                    aDelta[ "reason"]    = "either is undefined";

                    theDeltasHolder.push( aDelta);

                    return;
                }




                if( ( theOneValue == null) && ( theOtherValue == null)) {
                    return;
                }




                if( ( theOneValue == null) || ( theOtherValue == null)) {

                    aDelta = this.fNewVoidCompareDelta();
                    aDelta[ "onePath"]   = theOnePath;
                    aDelta[ "otherPath"] = theOtherPath;
                    aDelta[ "equal"]     = false;
                    aDelta[ "reason"]    = "either is null";

                    theDeltasHolder.push( aDelta);

                    return;
                }




                if( !( ( typeof theOneValue) == ( typeof theOtherValue))) {

                    aDelta = this.fNewVoidCompareDelta();
                    aDelta[ "onePath"]      = theOnePath;
                    aDelta[ "otherPath"]    = theOtherPath;
                    aDelta[ "equal"]        = false;
                    aDelta[ "reason"]       = "types";
                    aDelta[ "oneDetails"]   = typeof theOneValue;
                    aDelta[ "otherDetails"] = typeof theOtherValue;

                    theDeltasHolder.push( aDelta);

                    return;
                }




                if( typeof theOneValue == "string" ) {
                    if( !( theOneValue == theOtherValue)) {

                        aDelta = this.fNewVoidCompareDelta();
                        aDelta[ "onePath"]      = theOnePath;
                        aDelta[ "otherPath"]    = theOtherPath;
                        aDelta[ "equal"]        = false;
                        aDelta[ "reason"]       = "values";
                        aDelta[ "details"]      = "string";
                        aDelta[ "oneDetails"]   = theOneValue;
                        aDelta[ "otherDetails"] = theOtherValue;


                        theDeltasHolder.push( aDelta);

                        return;
                    }

                    return;
                }




                if( typeof theOneValue == "number" ) {
                    if( !( theOneValue == theOtherValue)) {

                        aDelta = this.fNewVoidCompareDelta();
                        aDelta[ "onePath"]      = theOnePath;
                        aDelta[ "otherPath"]    = theOtherPath;
                        aDelta[ "equal"]        = false;
                        aDelta[ "reason"]       = "values";
                        aDelta[ "details"]      = "number";
                        aDelta[ "oneDetails"]   = theOneValue;
                        aDelta[ "otherDetails"] = theOtherValue;


                        theDeltasHolder.push( aDelta);

                        return;
                    }

                    return;
                }




                if( typeof theOneValue == "boolean" ) {

                    if( !( theOneValue == theOtherValue)) {

                        aDelta = this.fNewVoidCompareDelta();
                        aDelta[ "onePath"]      = theOnePath;
                        aDelta[ "otherPath"]    = theOtherPath;
                        aDelta[ "equal"]        = false;
                        aDelta[ "reason"]       = "values";
                        aDelta[ "details"]      = "boolean";
                        aDelta[ "oneDetails"]   = theOneValue;
                        aDelta[ "otherDetails"] = theOtherValue;

                        theDeltasHolder.push( aDelta);

                        return;
                    }

                    return;
                }




                if( !( typeof theOtherValue == "object" )) {

                    aDelta = this.fNewVoidCompareDelta();
                    aDelta[ "onePath"]      = theOnePath;
                    aDelta[ "otherPath"]    = theOtherPath;
                    aDelta[ "equal"]        = false;
                    aDelta[ "reason"]       = "values"
                    aDelta[ "details"]      = "otherNotObject";

                    theDeltasHolder.push( aDelta);

                    return;
                }









                var anIndexKeysAlreadyCompared = [ ];

                var aOneLen     = theOneValue.length;
                var aOtherLen   = theOtherValue.length;


                if( !( ( typeof aOneLen == "undefined") && ( typeof aOtherLen == "undefined"))) {




                    if( ( typeof aOneLen == "undefined") || ( typeof aOtherLen == "undefined")) {

                        aDelta = this.fNewVoidCompareDelta();
                        aDelta[ "onePath"]   = theOnePath;
                        aDelta[ "otherPath"] = theOtherPath;
                        aDelta[ "equal"]     = false;
                        aDelta[ "reason"]    = "either length is undefined";

                        theDeltasHolder.push( aDelta);

                        return;
                    }




                    if( !( aOneLen == aOtherLen)) {
                        aDelta = this.fNewVoidCompareDelta();
                        aDelta[ "onePath"]      = theOnePath;
                        aDelta[ "otherPath"]    = theOtherPath;
                        aDelta[ "equal"]        = false;
                        aDelta[ "reason"]       = "either length is undefined";
                        aDelta[ "oneDetails"]   = aOneLen;
                        aDelta[ "otherDetails"] = aOtherLen;

                        theDeltasHolder.push( aDelta);

                        return;
                    }




                    for( var aSubIdx=0; aSubIdx < aOtherLen; aSubIdx++) {


                        anIndexKeysAlreadyCompared.push( "" + aSubIdx);


                        var aOtherListSub   = theOtherValue[ aSubIdx];
                        var aOneListSub     = theOneValue[   aSubIdx];

                        var aOneIndexedPath   = theOnePath   + this.COMPAREPATHOPENINDEX + aSubIdx + this.COMPAREPATHCLOSEINDEX;
                        var aOtherIndexedPath = theOtherPath + this.COMPAREPATHOPENINDEX + aSubIdx + this.COMPAREPATHCLOSEINDEX;


                        if( aSubIdx >= aOtherLen) {

                            aDelta = this.fNewVoidCompareDelta();
                            aDelta[ "onePath"]      = aOneIndexedPath;
                            aDelta[ "otherPath"]    = aOtherIndexedPath;
                            aDelta[ "equal"]        = false;
                            aDelta[ "reason"]       = "smaller list";
                            aDelta[ "details"]       = aSubIdx;
                            aDelta[ "oneDetails"]   = aOneLen;
                            aDelta[ "otherDetails"] = aOtherLen;

                            theDeltasHolder.push( aDelta);

                            break;
                        }




                        var aOneItem     = theOneValue[   aSubIdx];
                        var aOtherItem   = theOtherValue[ aSubIdx];

                        var aSubItemsDeltasHolder = [ ];


                        this.pDiffsFromOneToOther( aOneItem, aOtherItem, theIncludedKeys, theExcludedKeys, theRules, theKeysGen, aSubItemsDeltasHolder, aOneIndexedPath, aOtherIndexedPath);



                        if( aSubItemsDeltasHolder && aSubItemsDeltasHolder.length) {

                            aDelta = this.fNewVoidCompareDelta();
                            aDelta[ "onePath"]      = theOnePath;
                            aDelta[ "otherPath"]    = theOtherPath;
                            aDelta[ "equal"]        = false;
                            aDelta[ "reason"]       = "subs";
                            aDelta[ "subDeltas"]    = aSubItemsDeltasHolder;

                            theDeltasHolder.push( aDelta);
                        }
                    }
                }









                var someKeysOne = Object.keys( theOneValue);

                var someKeysToCompare = [ ];

                var aNumKeysOne = someKeysOne.length;
                if( aNumKeysOne > 0) {

                    for( var aKeyOneIdx=0; aKeyOneIdx < aNumKeysOne; aKeyOneIdx++) {

                        var aKeyOne = someKeysOne[ aKeyOneIdx];
                        if( !aKeyOne) {
                            continue;
                        }

                        if( !theOneValue.hasOwnProperty( aKeyOne)) {
                            continue;
                        }

                        if( anIndexKeysAlreadyCompared.indexOf( aKeyOne) >= 0) {
                            continue;
                        }

                        if( theIncludedKeys && theIncludedKeys.length && ( theIncludedKeys.indexOf( aKeyOne) < 0)) {
                            continue;
                        }

                        if( theExcludedKeys && theExcludedKeys.length && ( theExcludedKeys.indexOf( aKeyOne) >= 0)) {
                            continue;
                        }

                        someKeysToCompare.push( aKeyOne);
                    }
                }





                var aNumKeysToCompare = someKeysToCompare.length;
                if( aNumKeysToCompare > 0) {

                    for( var aKeyToCompareIdx=0; aKeyToCompareIdx < aNumKeysToCompare; aKeyToCompareIdx++) {

                        var aKeyToCompare = someKeysToCompare[ aKeyToCompareIdx];
                        if( !aKeyToCompare) {
                            continue;
                        }


                        var aKeyForOther = aKeyToCompare;
                        if( theKeysGen) {
                            if( typeof theKeysGen == "object") {

                                aKeyForOther = theKeysGen[ aKeyForOther];
                            }
                            else {
                                if( typeof theKeysGen == "function") {

                                    aKeyForOther = theKeysGen( aKeyForOther);
                                }
                            }
                        }
                        if( !aKeyForOther) {
                            continue;
                        }



                        var aOnePath  = theOnePath;
                        if( aOnePath && !( aOnePath.substr( -1) == this.COMPAREPATHCLOSEINDEX)) {
                            aOnePath += this.COMPAREPATHSEPARATOR;;
                        }
                        aOnePath += aKeyForOther;


                        var aOtherPath  = theOtherPath;
                        if( aOtherPath && !( aOtherPath.substr( -1) == this.COMPAREPATHCLOSEINDEX)) {
                            aOtherPath += this.COMPAREPATHSEPARATOR;;
                        }
                        aOtherPath += aKeyForOther;

                        if( !theOtherValue.hasOwnProperty( aKeyForOther)) {

                            aDelta = this.fNewVoidCompareDelta();
                            aDelta[ "onePath"]      = aOnePath;
                            aDelta[ "otherPath"]    = aOtherPath;
                            aDelta[ "equal"]        = false;
                            aDelta[ "reason"]       = "missingKey";
                            aDelta[ "oneDetails"]   = aKeyToCompare;
                            aDelta[ "otherDetails"] = aKeyForOther;

                            theDeltasHolder.push( aDelta);

                            continue;
                        }






                        var aOneSub     = theOneValue[   aKeyToCompare];
                        var aOtherSub   = theOtherValue[ aKeyForOther];

                        var aSubsDeltasHolder = [ ];


                        this.pDiffsFromOneToOther( aOneSub, aOtherSub, theIncludedKeys, theExcludedKeys, theRules, theKeysGen, aSubsDeltasHolder, aOnePath, aOtherPath);


                        if( aSubsDeltasHolder && aSubsDeltasHolder.length) {

                            aDelta = this.fNewVoidCompareDelta();
                            aDelta[ "onePath"]      = theOnePath;
                            aDelta[ "otherPath"]    = theOtherPath;
                            aDelta[ "equal"]        = false;
                            aDelta[ "reason"]       = "subs";
                            aDelta[ "subDeltas"]    = aSubsDeltasHolder;

                            theDeltasHolder.push( aDelta);

                            continue;
                        }
                    }
                }




            };
            if( pDiffsFromOneToOther){}/* CQT */
            aPrototype.pDiffsFromOneToOther = pDiffsFromOneToOther;











            var pS_CheckLeftToRightDeltas = function( theCallback) {

                var aMethodName = "pS_CheckLeftToRightDeltas";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_CompareLeftToRight) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_CompareLeftToRight", null));
                    return;
                }

                if( this._v_ExpectedLeftToRightDeltas === this.COMPARE_NOEXPECTEDDELTASENTINEL) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_ExpectedLeftToRightDeltas", null));
                    return;
                }


                var aFirstDiff = theM_traversals.fgFirstDiffFromLeft( this._v_LeftToRightDeltas, this._v_ExpectedLeftToRightDeltas);
                if( !( aFirstDiff == null)) {

                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "theM_traversals.fgFirstDiff( this._v_LeftToRightDeltas, this._v_ExpectedLeftToRightDeltas)", aFirstDiff));
                    return;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!theM_traversals.fgFirstDiff( this._v_LeftToRightDeltas, this._v_ExpectedLeftToRightDeltas)", null));
            };
            if( pS_CheckLeftToRightDeltas){}/* CQT */
            aPrototype.pS_CheckLeftToRightDeltas = pS_CheckLeftToRightDeltas;










            var pS_CheckRightToLeftDeltas = function( theCallback) {

                var aMethodName = "pS_CheckRightToLeftDeltas";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_CompareRightToLeft) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_CompareRightToLeft", null));
                    return;
                }

                if( this._v_ExpectedRightToLeftDeltas === this.COMPARE_NOEXPECTEDDELTASENTINEL) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_ExpectedRightToLeftDeltas", null));
                    return;
                }


                var aFirstDiff = theM_traversals.fgFirstDiffFromLeft( this._v_RightToLeftDeltas, this._v_ExpectedRightToLeftDeltas);
                if( !( aFirstDiff == null)) {

                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "theM_traversals.fgFirstDiff( this._v_RightToLeftDeltas, this._v_ExpectedRightToLeftDeltas)", aFirstDiff));
                    return;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!theM_traversals.fgFirstDiff( this._v_RightToLeftDeltas, this._v_ExpectedRightToLeftDeltas)", null));
            };
            if( pS_CheckRightToLeftDeltas){}/* CQT */
            aPrototype.pS_CheckRightToLeftDeltas = pS_CheckRightToLeftDeltas;










            var pS_DetermineAreEqual = function( theCallback) {

                var aMethodName = "pS_DetermineAreEqual";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_AreEqual =  (!this._v_LeftToRightDeltas || !this._v_LeftToRightDeltas.length) &&  (!this._v_RightToLeftDeltas || !this._v_RightToLeftDeltas.length);


                if( !this._v_AreEqual) {

                    if( ( this._v_ExpectedLeftToRightDeltas === this.COMPARE_NOEXPECTEDDELTASENTINEL) && ( this._v_ExpectedRightToLeftDeltas === this.COMPARE_NOEXPECTEDDELTASENTINEL)) {

                        if( this._v_FailIfDifferent) {

                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_AreEqual", null));
                            return;
                        }
                    }
                }

                
                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, null, null));

            };
            if( pS_DetermineAreEqual){}/* CQT */
            aPrototype.pS_DetermineAreEqual = pS_DetermineAreEqual;










            var pF_Compare = function( theCallback) {
                var aMethodName = "pF_Compare";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Compare){}/* CQT */
            aPrototype.pF_Compare = pF_Compare;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Compare.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Compare = function( theCallback) {
                var aMethodName = "pSS_Compare";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_ResolveParms.bind( this),
                    this.pS_Compare_LeftToRight.bind( this),
                    this.pS_Compare_RightToLeft.bind( this),
                    this.pS_CheckLeftToRightDeltas.bind( this),
                    this.pS_CheckRightToLeftDeltas.bind( this),
                    this.pS_DetermineAreEqual.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_Compare){}/* CQT */
            aPrototype.pSS_Compare = pSS_Compare;





            


            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;







            var fReleasePayloads_Compare = function( ) {

                var aReleasePayloads_Async_Result = this._v_SuperPrototype.fReleasePayloads_Async.apply( this);
                if( !aReleasePayloads_Async_Result) {
                    return false;
                }

                if( this._v_Left && ( typeof this._v_Left == "object") && this._v_Left.pReleasePayload && ( typeof this._v_Left.pReleasePayload == "function")) {
                    this._v_Left.pReleasePayload();
                }
                this._v_Left          = undefined;


                if( this._v_Right && ( typeof this._v_Right == "object") && this._v_Right.pReleasePayload && ( typeof this._v_Right.pReleasePayload == "function")) {
                    this._v_Right.pReleasePayload();
                }
                this._v_Right          = undefined;


                return true;
            };
            if( fReleasePayloads_Compare){}/* CQT */
            aPrototype.fReleasePayloads_Compare = fReleasePayloads_Compare;







            return aPrototype;

        })();




        var Compare_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Left = null;
            this._v_Right = null;

            this._v_FailIfDifferent = null;
            this._v_ExpectedLeftToRightDeltas = null;
            this._v_ExpectedRightToLeftDeltas = null;

            this._v_CompareLeftToRight = null;
            this._v_CompareRightToLeft = null;
            this._v_LeftIncludedKeys = null;
            this._v_RightIncludedKeys = null;
            this._v_LeftExcludedKeys = null;
            this._v_RightExcludedKeys = null;
            this._v_LeftRules = null;
            this._v_RightRules = null;
            this._v_LeftToRightKeysGen = null;
            this._v_RightToLeftKeysGen = null;

            this._v_Dump_Left = null;
            this._v_Dump_Right = null;
            this._v_Dump_LeftToRightDeltas = null;
            this._v_Dump_RightToLeftDeltas = null;

            this._v_LeftToRightDeltas = null;
            this._v_RightToLeftDeltas = null;

            this._v_AreEqual = null;

            this._pInit_Compare(
                theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        Compare_Constructor.prototype = aCompare_Prototype;





        var Compare_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aCompare_Prototype;
            this._v_Type = null;

            this._v_Left = null;
            this._v_Right = null;

            this._v_FailIfDifferent = null;
            this._v_ExpectedLeftToRightDeltas = null;
            this._v_ExpectedRightToLeftDeltas = null;

            this._v_CompareLeftToRight = null;
            this._v_CompareRightToLeft = null;
            this._v_LeftIncludedKeys = null;
            this._v_RightIncludedKeys = null;
            this._v_LeftExcludedKeys = null;
            this._v_RightExcludedKeys = null;
            this._v_LeftRules = null;
            this._v_RightRules = null;
            this._v_LeftToRightKeysGen = null;
            this._v_RightToLeftKeysGen = null;

            this._v_Dump_Left = null;
            this._v_Dump_Right = null;
            this._v_Dump_LeftToRightDeltas = null;
            this._v_Dump_RightToLeftDeltas = null;

            this._v_LeftToRightDeltas = null;
            this._v_RightToLeftDeltas = null;

            this._v_AreEqual = null;
        };
        Compare_SuperPrototypeConstructor.prototype = aCompare_Prototype;



        var aModule = {
            "Compare_Prototype": aCompare_Prototype,
            "Compare_Constructor": Compare_Constructor,
            "Compare_SuperPrototypeConstructor": Compare_SuperPrototypeConstructor
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

            var aM_runsubs_test   = require('./runsubs-test');
            var aM_overrider      = require('./overrider');
            var aM_sentinels      = require('./sentinels');
            var aM_traversals     = require('./traversals/traversals');
            var aM_payloadholder  = require('./payloadholder');

            return aMod_definer(
                aM_runsubs_test,
                aM_overrider,
                aM_sentinels,
                aM_traversals,
                aM_payloadholder
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./runsubs-test",
            "./overrider",
            "./sentinels",
            "./traversals/traversals",
            "./payloadholder"
        ], function (
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels,
                theM_traversals,
                theM_payloadholder
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels,
                theM_traversals,
                theM_payloadholder
            );
        });
    }


}());


