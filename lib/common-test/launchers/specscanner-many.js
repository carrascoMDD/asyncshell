'use strict';

/*
 specscanner-many.js
 Created 201504051101
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



(function() {

    var aMod_definer = function( theM_specscannergeneral,
                                 theM_specscannerone,
                                 theM_specloader,
                                 theM_nextticker,
                                 theM_exiter,
                                 theM_sentinels,
                                 theM_overrider) {


        var ModuleName     = "specscanner-many";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.LAUNCHABLESNAME        = "/launchables.json";
            theToInit.LAUNCHABLESBASE        = "launchables";
            theToInit.LAUNCHABLESPOSTFIX     = ".json";

            theToInit.LAUNCHABLESFORCERRNAME = "/launchables-forcerr.json";
            theToInit.LAUNCHABLESFORCERRBASE = "launchables";
            theToInit.LAUNCHABLESFORCERRFRAGMENT = "-forcerr";
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






        var aSpecscannerManyTest_Prototype = (function() {


            var aPrototype = new theM_specscannergeneral.SpecscannerGeneral_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_specscannergeneral.SpecscannerGeneral_Prototype;


            aPrototype._v_Type = "SpecscannerMany";




            aPrototype._v_ConfigSpecsOrPathsOrListPath = null;

            aPrototype._v_ConfigSpecsListPath = null;
            aPrototype._v_ConfigSpecsOrPaths  = null;
            aPrototype._v_SynthetizedConfigSpecsOrPaths  = null;

            aPrototype._v_SubScanners = null;

            aPrototype._v_AlreadyScanned = null;

            aPrototype._v_AlreadyScannedByPath = null;

            aPrototype._v_CollectedSpecOrPaths = null;









            var _pInit = function( theTitle,
                                   theConfigSpecsOrPathsOrListPath,
                                   theIdentifier,
                                   theRecorder,
                                   theRunOptions,
                                   theIsTopScanner,
                                   theAlreadyScannedByPath) {

                this._pInit_SpecscannerMany( theTitle,
                                             theConfigSpecsOrPathsOrListPath,
                                             theIdentifier,
                                             theRecorder,
                                             theRunOptions,
                                             theIsTopScanner,
                                             theAlreadyScannedByPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_SpecscannerMany = function( theTitle,
                                                   theConfigSpecsOrPathsOrListPath,
                                                   theIdentifier,
                                                   theRecorder,
                                                   theRunOptions,
                                                   theIsTopScanner,
                                                   theAlreadyScannedByPath) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecscannerGeneral.apply( this, [ theTitle, theIdentifier, theRecorder, theRunOptions, theIsTopScanner]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ConfigSpecsOrPathsOrListPath = theConfigSpecsOrPathsOrListPath;

                this._v_AlreadyScannedByPath = theAlreadyScannedByPath;
                if( !this._v_AlreadyScannedByPath || !(typeof this._v_AlreadyScannedByPath == "object")) {
                    this._v_AlreadyScannedByPath = { };
                }

                this._v_ConfigSpecsListPath = null;
                this._v_ConfigSpecsOrPaths  = null;
                this._v_SynthetizedConfigSpecsOrPaths = null;

                this._v_SubScanners    = [ ];
                this._v_AlreadyScanned = [ ];

                this._v_CollectedSpecOrPaths = null;
            };
            if( _pInit_SpecscannerMany){}/* CQT */
            aPrototype._pInit_SpecscannerMany = _pInit_SpecscannerMany;





            
            





            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecscannerMany( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecscannerMany = function( theReleaseParms, theReleaseDone) {

                this._v_ConfigSpecsOrPathsOrListPath = undefined;

                this._v_ConfigSpecsListPath = undefined;
                this._v_ConfigSpecsOrPaths  = undefined;
                this._v_SynthetizedConfigSpecsOrPaths  = undefined;
                
                if( this._v_SubScanners) {
                    var aNumSubScanners = this._v_SubScanners.length;
                    for( var aSubScannerIdx=0; aSubScannerIdx < aNumSubScanners; aSubScannerIdx++) {
    
                        var aSubScanner = this._v_SubScanners[ aSubScannerIdx];
                        if( aSubScanner) {
    
                            if( aSubScanner._pRelease && ( typeof aSubScanner._pRelease == "function")) {
                                aSubScanner._pRelease( theReleaseParms, theReleaseDone);
                            }
                        }
                    }
                }

                this._v_SubScanners = undefined;

                this._v_AlreadyScanned = undefined;

                this._v_AlreadyScannedByPath = undefined;

                this._v_CollectedSpecOrPaths = undefined;
                

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SpecscannerGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecscannerMany){}/* CQT */
            aPrototype._pRelease_SpecscannerMany = _pRelease_SpecscannerMany;

            
            
            







            var pSL_readConfigSpecsList = function( theCallback) {

                if( this.READCONFIG_ASYNC) {
                    this.pSL_readConfigSpecsList_async( theCallback);
                    return;
                }

                this.pSL_readConfigSpecsList_sync( theCallback);
            };
            if( pSL_readConfigSpecsList){}/* CQT */
            aPrototype.pSL_readConfigSpecsList = pSL_readConfigSpecsList;









            var pSL_readConfigSpecsList_sync = function( theCallback) {

                var aMethodName = "pSL_readConfigSpecsList";


                this._v_ConfigSpecsListPath = null;
                this._v_ConfigSpecsOrPaths  = null;


                if( !this._v_ConfigSpecsOrPathsOrListPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this._v_ConfigSpecsOrPathsOrListPath", null));
                    return;
                }


                if( typeof this._v_ConfigSpecsOrPathsOrListPath == "object") {

                    if( typeof this._v_ConfigSpecsOrPathsOrListPath.length == "undefined") {
                        this._v_ConfigSpecsOrPaths = [ this._v_ConfigSpecsOrPathsOrListPath];
                    }
                    else {
                        this._v_ConfigSpecsOrPaths = this._v_ConfigSpecsOrPathsOrListPath;
                    }

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", null, null, null));
                    return;
                }





                if( !( typeof this._v_ConfigSpecsOrPathsOrListPath == "string")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!(typeof this._v_ConfigSpecsOrPathsOrListPath == 'object'') && !( typeof this._v_ConfigSpecsOrPathsOrListPath == 'string'')", null));
                    return;
                }



                this._v_ConfigSpecsListPath = this._v_ConfigSpecsOrPathsOrListPath;



                if( this._v_AlreadyScannedByPath) {

                    var someAlreadyScannedConfigSpecsOrPaths = this._v_AlreadyScannedByPath[ this._v_ConfigSpecsListPath];
                    if( !( typeof someAlreadyScannedConfigSpecsOrPaths == "undefined")) {

                        if( !( someAlreadyScannedConfigSpecsOrPaths == null)) {

                            if( typeof someAlreadyScannedConfigSpecsOrPaths == "object") {

                                if( typeof someAlreadyScannedConfigSpecsOrPaths.length == "undefined") {
                                    this._v_ConfigSpecsOrPaths = [ someAlreadyScannedConfigSpecsOrPaths];
                                }
                                else {
                                    this._v_ConfigSpecsOrPaths = someAlreadyScannedConfigSpecsOrPaths;
                                }

                                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpecsOrPaths, null, null));
                                return;
                            }
                        }
                    }
                }





                var someConfigSpecsOrPaths = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( this._v_ConfigSpecsListPath);

                if( someConfigSpecsOrPaths == null) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!fLoadSpecNamed( " + this._v_ConfigSpecsListPath + ")", null));
                    return;
                }


                if( !( typeof someConfigSpecsOrPaths == "object")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!( typeof fLoadSpecNamed( " + this._v_ConfigSpecsListPath + ") == 'object')", null));
                    return;
                }

                if( typeof someConfigSpecsOrPaths.length == "undefined") {
                    this._v_ConfigSpecsOrPaths = [ someConfigSpecsOrPaths];
                }
                else {
                    this._v_ConfigSpecsOrPaths = someConfigSpecsOrPaths;
                }


                this._v_AlreadyScannedByPath[ this._v_ConfigSpecsListPath] = this._v_ConfigSpecsOrPaths;


                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpecsOrPaths, null, null));
            };
            if( pSL_readConfigSpecsList_sync){}/* CQT */
            aPrototype.pSL_readConfigSpecsList_sync = pSL_readConfigSpecsList_sync;











            var pSL_readConfigSpecsList_async = function( theCallback) {

                var aMethodName = "pSL_readConfigSpecsList_async";


                if( !this._v_ConfigSpecsOrPathsOrListPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this._v_ConfigSpecsOrPathsOrListPath", null));
                    return;
                }

                this._v_ConfigSpecsListPath = null;
                this._v_ConfigSpecsOrPaths  = null;



                if( typeof this._v_ConfigSpecsOrPathsOrListPath == "object") {

                    if( typeof this._v_ConfigSpecsOrPathsOrListPath.length == "undefined") {
                        this._v_ConfigSpecsOrPaths = [ this._v_ConfigSpecsOrPathsOrListPath];
                    }
                    else {
                        this._v_ConfigSpecsOrPaths = this._v_ConfigSpecsOrPathsOrListPath;
                    }

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", null, null, null));
                    return;
                }





                if( !( typeof this._v_ConfigSpecsOrPathsOrListPath == "string")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!(typeof this._v_ConfigSpecsOrPathsOrListPath == 'object'') && !( typeof this._v_ConfigSpecsOrPathsOrListPath == 'string'')", null));
                    return;
                }


                this._v_ConfigSpecsListPath = this._v_ConfigSpecsOrPathsOrListPath;




                if( this._v_AlreadyScannedByPath) {

                    var someAlreadyScannedConfigSpecsOrPaths = this._v_AlreadyScannedByPath[ this._v_ConfigSpecsListPath];
                    if( !( typeof someAlreadyScannedConfigSpecsOrPaths == "undefined")) {

                        if( !( someAlreadyScannedConfigSpecsOrPaths == null)) {

                            if( typeof someAlreadyScannedConfigSpecsOrPaths == "object") {

                                if( typeof someAlreadyScannedConfigSpecsOrPaths.length == "undefined") {
                                    this._v_ConfigSpecsOrPaths = [ someAlreadyScannedConfigSpecsOrPaths];
                                }
                                else {
                                    this._v_ConfigSpecsOrPaths = someAlreadyScannedConfigSpecsOrPaths;
                                }

                                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpecsOrPaths, null, null));
                                return;
                            }
                        }
                    }
                }




                var aCallback = this.fReadConfigSpecsListAsyncCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEPS_FAIL, null, "!this.fReadConfigSpecsListAsyncCallback( theCallback)", null));
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionReadConfigSpecsListAsyncHandler( aCallback);

                try {
                    theM_specloader.fgGlobalSpecLoader().pLoadSpecNamed( this._v_ConfigSpecsListPath, aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }

            };
            if( pSL_readConfigSpecsList_async){}/* CQT */
            aPrototype.pSL_readConfigSpecsList_async = pSL_readConfigSpecsList_async;








            var fReadConfigSpecsListAsyncCallback = function( theCallback) {
                var aMethodName = "fReadConfigSpecsListAsyncCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_READSPEC_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }


                    if( theResult == null) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL", null, "theResult == null", null));
                        return;
                    }


                    if( !( typeof theResult == "object")) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL", null, "!( typeof theResult == 'object')", null));
                        return;
                    }

                    if( typeof theResult.length == "undefined") {
                        aThis._v_ConfigSpecsOrPaths = [ theResult];
                    }
                    else {
                        aThis._v_ConfigSpecsOrPaths = theResult;
                    }


                    if( aThis._v_AlreadyScannedByPath) {
                        aThis._v_AlreadyScannedByPath[ aThis._v_ConfigSpecsListPath] = aThis._v_ConfigSpecsOrPaths;
                    }

                    theCallback();

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fReadConfigSpecsListAsyncCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fReadConfigSpecsListAsyncCallback){}/* CQT */
            aPrototype.fReadConfigSpecsListAsyncCallback = fReadConfigSpecsListAsyncCallback;









            var fExceptionReadConfigSpecsListAsyncHandler = function( theCallback, theMethodName) {

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

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_READSPEC_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionReadConfigSpecsListAsyncHandler){}/* CQT */
            aPrototype.fExceptionReadConfigSpecsListAsyncHandler = fExceptionReadConfigSpecsListAsyncHandler;






















            var pSL_scanConfigSpecs = function( theCallback) {
                var aMethodName = "pSL_scanConfigSpecs";


                this._v_CollectedSpecOrPaths = [ ];

                if( !this._v_ConfigSpecsOrPaths) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpec, null, null));
                }

                if( !this._v_RunOptions || !this._v_RunOptions[ "synthetic"]) {

                    this._v_CollectedSpecOrPaths = this._v_ConfigSpecsOrPaths;

                    this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpec, null, null);

                    theCallback( null, this._v_ConfigSpecsOrPathsOrListPath);
                    return;
                }


                var aNumSpecsOrPaths = this._v_ConfigSpecsOrPaths.length;

                if( !aNumSpecsOrPaths) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpec, null, null));
                }
                
                this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "BEGIN", null, null, null);

                

                var aExceptionHandler = this.fOverallExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallSpecscannerManyCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fOverallSpecscannerManyCallback( theCallback)", null));
                        return;
                    }


                    this.pInitFinderToScanNext();



                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToScanNextSpecOrPath( aCallback);
                            }
                            catch( anException) {
                                aExceptionHandler( anException);
                            }
                        }
                    );

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pSL_scanConfigSpecs){}/* CQT */
            aPrototype.pSL_scanConfigSpecs = pSL_scanConfigSpecs;














            var pInitFinderToScanNext = function() {
                this._v_SubScanners    = [ ];

                this._v_AlreadyScanned = [ ];

                if( !this._v_AlreadyScannedByPath) {
                    this._v_AlreadyScannedByPath = { };
                }

                this._v_CollectedSpecOrPaths = [ ];
            };
            if( pInitFinderToScanNext){}/* CQT */
            aPrototype.pInitFinderToScanNext = pInitFinderToScanNext;










            var pTryToScanNextSpecOrPath = function( theCallback) {
                var aMethodName = "pTryToScanNextSpecOrPath";
                if( aMethodName){}/* CQT */

                var aSpecOrPathToScanNext = this.fFindSpecOrPathToScanNext();
                if( !aSpecOrPathToScanNext) {
                    theCallback();
                    return;
                }

                this._v_AlreadyScanned.push( aSpecOrPathToScanNext);

                this.pScanNextSpecOrPath( theCallback, aSpecOrPathToScanNext);
            };
            if( pTryToScanNextSpecOrPath){}/* CQT */
            aPrototype.pTryToScanNextSpecOrPath = pTryToScanNextSpecOrPath;









            var fFindSpecOrPathToScanNext = function() {

                if( !this._v_ConfigSpecsOrPaths) {
                    return null;
                }

                var aNumSpecsOrPaths = this._v_ConfigSpecsOrPaths.length;
                if( !aNumSpecsOrPaths) {
                    return null;
                }

                if( this._v_AlreadyScanned == null) {
                    return null;
                }

                var aNumAlreadyScheduled = this._v_AlreadyScanned.length;
                if( aNumAlreadyScheduled >= aNumSpecsOrPaths) {
                    return null;
                }


                var aPendingSpecOrPath = this._v_ConfigSpecsOrPaths[ aNumAlreadyScheduled];
                if( !aPendingSpecOrPath) {
                    return null;
                }

                return aPendingSpecOrPath;

            };
            if( fFindSpecOrPathToScanNext){}/* CQT */
            aPrototype.fFindSpecOrPathToScanNext = fFindSpecOrPathToScanNext;














            var fMustScanSpecPathAsMany = function( theSpecPath) {

                if( !( typeof theSpecPath == "string")) {
                    return false;
                }

                if( ( ( theSpecPath.indexOf( this.LAUNCHABLESNAME) >= 0) || ( theSpecPath.indexOf( this.LAUNCHABLESFORCERRNAME) >= 0)))  {
                    return true;
                }

                if( ( ( theSpecPath.indexOf( this.LAUNCHABLESBASE) >= 0) &&  ( theSpecPath.indexOf( this.LAUNCHABLESPOSTFIX) >= 0)))  {
                    return true;
                }

                var aMustScanSpecPathAsMany = false;
                if( ( ( theSpecPath.indexOf( this.LAUNCHABLESFORCERRBASE) >= 0) &&
                    ( theSpecPath.indexOf( this.LAUNCHABLESFORCERRFRAGMENT) >= 0) &&
                    ( theSpecPath.indexOf( this.LAUNCHABLESPOSTFIX) >= 0)))  {
                    aMustScanSpecPathAsMany = true;
                }
                if( aMustScanSpecPathAsMany){}/* CQT */

                return aMustScanSpecPathAsMany;
            };
            if( fMustScanSpecPathAsMany){}/* CQT */
            aPrototype.fMustScanSpecPathAsMany = fMustScanSpecPathAsMany;










            var pScanNextSpecOrPath = function( theCallback, theSpecOrPath) {

                var aMethodName = "pScanNextSpecOrPath";

                if( !theSpecOrPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!theSpecsOrPathModuleOrName", null));
                    return;
                }


                var aTitle = theSpecOrPath;
                if( ( typeof aTitle == "object") && aTitle.name) {
                    aTitle = aTitle.name;
                }


                var aScanner = null;
                var aMethod  = null;

                if( ( typeof theSpecOrPath == "string") && this.fMustScanSpecPathAsMany( theSpecOrPath))  {
                    aScanner = new SpecscannerManyTest_Constructor(
                        aTitle,
                        theSpecOrPath,
                        this._v_Identifier,
                        this._v_Recorder,
                        this._v_RunOptions,
                        false, /* theIsTopScanner */
                        this._v_AlreadyScannedByPath);

                    aMethod = aScanner.pF_SpecscannerMany.bind( aScanner);
                }
                else {
                    aScanner = new theM_specscannerone.SpecscannerOne_Constructor(
                        aTitle,
                        theSpecOrPath,
                        this._v_Identifier,
                        this._v_Recorder,
                        this._v_RunOptions,
                        false, /* theIsTopScanner */
                        this._v_AlreadyScannedByPath);

                    aMethod = aScanner.pF_SpecscannerOne.bind( aScanner);
                }
                if( !aScanner) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!aScanner", null));
                    return;
                }
                if( !aMethod) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!aMethod", null));
                    return;
                }
                if( !( typeof aMethod == "function")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!( typeof aMethod == 'function')", null));
                    return;
                }



                this. _v_SubScanners.push( aScanner);



                var aCallback = this.fScanNextScannerCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this.fScanNextScannerCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextScannerHandler( aCallback);

                try {
                    aMethod( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pScanNextSpecOrPath){}/* CQT */
            aPrototype.pScanNextSpecOrPath = pScanNextSpecOrPath;













            var fScanNextScannerCallback = function( theCallback) {
                var aMethodName = "fScanNextScannerCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theConfigSpecOrPath) {

                    if( theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL", null, theError, null));
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "OK", theConfigSpecOrPath, null, null);




                    if( theConfigSpecOrPath) {

                        var aLastScanned = null;

                        if( aThis._v_AlreadyScanned) {
                            var aNumAlreadyScanned = aThis._v_AlreadyScanned.length;
                            if( aNumAlreadyScanned) {
                                aLastScanned = aThis._v_AlreadyScanned[ aNumAlreadyScanned - 1];
                            }
                        }




                        if( !aThis._v_RunOptions || !aThis._v_RunOptions[ "synthetic"]) {

                            if( aLastScanned) {

                                aThis._v_CollectedSpecOrPaths.push( aLastScanned);
                            }
                        }
                        else {

                            if( aThis._v_RunOptions[ "flat"]) {

                                if( ( typeof theConfigSpecOrPath == "object") && !( typeof theConfigSpecOrPath.length == "undefined")) {

                                    var aNumConfigSpecOrPath = theConfigSpecOrPath.length;
                                    if( aNumConfigSpecOrPath) {
                                        Array.prototype.push.apply( aThis._v_CollectedSpecOrPaths, theConfigSpecOrPath);
                                    }
                                }
                                else {
                                    aThis._v_CollectedSpecOrPaths.push( theConfigSpecOrPath);
                                }
                            }
                            else {
                                aThis._v_CollectedSpecOrPaths.push( theConfigSpecOrPath);
                            }
                        }
                    }

                    aThis.pTryToScanNextSpecOrPath( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fScanNextScannerCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fScanNextScannerCallback){}/* CQT */
            aPrototype.fScanNextScannerCallback = fScanNextScannerCallback;









            var fExceptionNextScannerHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextScannerHandler){}/* CQT */
            aPrototype.fExceptionNextScannerHandler = fExceptionNextScannerHandler;




























            var pSL_synthetizeConfigSpecs = function( theCallback) {

                var aMethodName = "pSL_synthetizeConfigSpecs";


                this._v_SynthetizedConfigSpecsOrPaths = [];


                if( !this._v_RunOptions || !this._v_RunOptions[ "synthetic"]) {

                    if( !this._v_ConfigSpecsOrPaths) {
                        theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_CollectedSpecOrPaths, "!this._v_ConfigSpecsOrPaths", null));
                    }

                    this._v_SynthetizedConfigSpecsOrPaths = this._v_ConfigSpecsOrPaths;

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_SynthetizedConfigSpecsOrPaths, "this._v_RunOptions || !this._v_RunOptions[ 'synthetic']", null));
                    return;
                }





                if( !this._v_CollectedSpecOrPaths) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_CollectedSpecOrPaths, "!this._v_CollectedSpecOrPaths", null));
                    return;
                }

                var aNumSpecsOrPaths = this._v_CollectedSpecOrPaths.length;
                if( !aNumSpecsOrPaths) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ScannedConfigSpecsOrPaths, "!this._v_CollectedSpecOrPaths.length", null));
                    return;
                }


                this._v_SynthetizedConfigSpecsOrPaths = this._v_CollectedSpecOrPaths;



                var aNumRepeats = this._v_RunOptions[ "numRepeats"];
                if( aNumRepeats > 1) {

                    var aMustRepeat    = false;
                    var aMustRepeatAll = false;

                    if( this._v_IsTopScanner) {

                        if( this._v_RunOptions[ "flat"]) {
                            aMustRepeat    = true;
                            aMustRepeatAll = true;
                        }
                        else {
                            aMustRepeat    = true;
                            aMustRepeatAll = false;
                        }
                    }
                    else {
                        if( this._v_RunOptions[ "flat"]) {
                            aMustRepeat    = false;
                            aMustRepeatAll = false;
                        }
                        else {
                            aMustRepeat    = true;
                            aMustRepeatAll = false;
                        }
                    }


                    var someRepeatedConfigSpecsOrPaths = this._v_SynthetizedConfigSpecsOrPaths;

                    if( aMustRepeat) {

                        if( aMustRepeatAll) {
                            someRepeatedConfigSpecsOrPaths = this._v_SynthetizedConfigSpecsOrPaths.slice();

                            for( var aRepeatIdx=0; aRepeatIdx < aNumRepeats; aRepeatIdx++) {
                                Array.prototype.push.apply( someRepeatedConfigSpecsOrPaths, this._v_SynthetizedConfigSpecsOrPaths);
                            }

                            this._v_SynthetizedConfigSpecsOrPaths = someRepeatedConfigSpecsOrPaths;
                        }
                        else {
                            someRepeatedConfigSpecsOrPaths = this._v_SynthetizedConfigSpecsOrPaths.slice();

                            var aNumSynthetizedConfigSpecsOrPaths = this._v_SynthetizedConfigSpecsOrPaths.length;

                            for( var aRepeatIdx2=0; aRepeatIdx2 < aNumRepeats; aRepeatIdx2++) {

                                for( var aSpecIdx=0; aSpecIdx < aNumSynthetizedConfigSpecsOrPaths; aSpecIdx++) {

                                    var aSpec = this._v_SynthetizedConfigSpecsOrPaths[ aSpecIdx];
                                    if( aSpec) {

                                        if( typeof aSpec == "string") {
                                            someRepeatedConfigSpecsOrPaths.push( aSpec);
                                        }
                                    }
                                }
                            }
                        }
                    }

                    this._v_SynthetizedConfigSpecsOrPaths = someRepeatedConfigSpecsOrPaths;
                }







                if( this._v_RunOptions[ "random"]) {
                    this._v_SynthetizedConfigSpecsOrPaths = this.fRandomizeList( this._v_SynthetizedConfigSpecsOrPaths);
                }







                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_SynthetizedConfigSpecsOrPaths, null, null));

            };
            if( pSL_synthetizeConfigSpecs){}/* CQT */
            aPrototype.pSL_synthetizeConfigSpecs = pSL_synthetizeConfigSpecs;


















            var fOverallSpecscannerManyCallback = function( theCallback) {
                var aMethodName = "fOverallSpecscannerManyCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL", null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "OK", this._v_CollectedSpecOrPaths, null, null));


                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fOverallSpecscannerManyCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fOverallSpecscannerManyCallback){}/* CQT */
            aPrototype.fOverallSpecscannerManyCallback = fOverallSpecscannerManyCallback;










            var fOverallExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, "FAIL", null, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallExceptionHandler){}/* CQT */
            aPrototype.fOverallExceptionHandler = fOverallExceptionHandler;















            var pF_SpecscannerMany = function( theCallback) {

                var aMethodName = "pF_SpecscannerMany";

                this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "BEGIN", null, null, null);

                try {

                    var aThis = this;
                    theM_nextticker.pNextTick(
                        function() {

                            try {

                                var someTestFunctions = [
                                    aThis.pSL_readConfigSpecsList.bind( aThis),
                                    aThis.pSL_scanConfigSpecs.bind( aThis),
                                    aThis.pSL_synthetizeConfigSpecs.bind( aThis)
                                ];


                                var aSeriesRunnedCallback = (function() {
                                    var aCbkFunction = function( theError){
                                        try {
                                            if( theError) {
                                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL", null, theError, null));
                                                return;
                                            }

                                            aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "OK", aThis._v_SynthetizedConfigSpecsOrPaths, null, null);


                                            if( !aThis._v_RunOptions || !aThis._v_RunOptions[ "synthetic"]) {

                                                if( aThis._v_IsTopScanner) {

                                                    theCallback( null, aThis._v_ConfigSpecsOrPaths);
                                                    return;
                                                }


                                                theCallback( null, aThis._v_ConfigSpecsOrPathsOrListPath);
                                                return;
                                            }



                                            theCallback( null, aThis._v_SynthetizedConfigSpecsOrPaths);

                                        }
                                        catch( anException) {
                                            var aExceptionDetail = aThis.fExceptionDetail( anException);
                                            var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL, null", aRecord, null));
                                        }
                                    };
                                    if( aCbkFunction){}/* CQT */
                                    return aCbkFunction;
                                })();


                                var aWrappedCallback = aThis.fChainNewLauncherCallbackForCallback( aSeriesRunnedCallback, "pF_SpecscannerMany", theCallback, aMethodName);


                                aThis.pRunSeries(
                                    someTestFunctions,
                                    aWrappedCallback
                                );
                            }
                            catch( anException) {
                                var aExceptionDetail = aThis.fExceptionDetail( anException);
                                var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL", null, aRecord, null));
                            }
                        }
                    );
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, aRecord, null));
                }
            };
            if( pF_SpecscannerMany){}/* CQT */
            aPrototype.pF_SpecscannerMany = pF_SpecscannerMany;









            return aPrototype;

        })();




        var SpecscannerManyTest_Constructor = function( theTitle,
                                                        theConfigSpecsOrPathsOrListPath,
                                                        theIdentifier,
                                                        theRecorder,
                                                        theRunOptions,
                                                        theIsTopScanner,
                                                        theAlreadyScannedByPath) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specscannergeneral.SpecscannerGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ConfigSpecsOrPathsOrListPath = null;

            this._v_ConfigSpecsListPath = null;
            this._v_ConfigSpecsOrPaths  = null;
            this._v_SynthetizedConfigSpecsOrPaths = null;

            this._v_SubScanners    = null;
            this._v_AlreadyScanned = null;

            this._v_CollectedSpecOrPaths = null;
            this._v_AlreadyScannedByPath = null;


            this._pInit_SpecscannerMany( theTitle,
                                         theConfigSpecsOrPathsOrListPath,
                                         theIdentifier,
                                         theRecorder,
                                         theRunOptions,
                                         theIsTopScanner,
                                         theAlreadyScannedByPath);
        };
        SpecscannerManyTest_Constructor.prototype = aSpecscannerManyTest_Prototype;





        var SpecscannerManyTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specscannergeneral.SpecscannerGeneral_Prototype;

            this._v_Prototype = aSpecscannerManyTest_Prototype;
            this._v_Type = null;

            this._v_ConfigSpecsOrPathsOrListPath = null;

            this._v_ConfigSpecsListPath = null;
            this._v_ConfigSpecsOrPaths  = null;
            this._v_SynthetizedConfigSpecsOrPaths = null;

            this._v_SubScanners    = null;
            this._v_AlreadyScanned = null;

            this._v_CollectedSpecOrPaths = null;
            this._v_AlreadyScannedByPath = null;
        };
        SpecscannerManyTest_SuperPrototypeConstructor.prototype = aSpecscannerManyTest_Prototype;








        var aModule = {
            "SpecscannerManyTest_Prototype": aSpecscannerManyTest_Prototype,
            "SpecscannerManyTest_Constructor": SpecscannerManyTest_Constructor,
            "SpecscannerManyTest_SuperPrototypeConstructor": SpecscannerManyTest_SuperPrototypeConstructor
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

            var aM_specscannergeneral     = require('./specscanner-general');
            var aM_specscanner            = require('./specscanner-one');
            var aM_specloader             = require('../resloader/specloader');
            var aM_nextticker             = require('../../infrasvcs/nextticker/nextticker');
            var aM_exiter                 = require('../../infrasvcs/exiter/exiter');
            var aM_sentinels              = require('../sentinels');
            var aM_overrider              = require('../overrider');

            return aMod_definer(
                aM_specscannergeneral,
                aM_specscanner,
                aM_specloader,
                aM_nextticker,
                aM_exiter,
                aM_sentinels,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./specscanner-general",
            "./specscanner-one",
            "../resloader/specloader",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/exiter/exiter",
            "../sentinels",
            "../overrider"
        ], function (
                theM_specscannergeneral,
                theM_specscannerone,
                theM_specloader,
                theM_nextticker,
                theM_exiter,
                theM_sentinels,
                theM_overrider
            ) {
            return aMod_definer(
                theM_specscannergeneral,
                theM_specscannerone,
                theM_specloader,
                theM_nextticker,
                theM_exiter,
                theM_sentinels,
                theM_overrider
            );
        });
    }

})();

