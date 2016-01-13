'use strict';

/*
 resloader.js
 Creado 201409190238
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
    var aMod_definer = function( theM_exceptiondetails,
                                 theM_resrecord,
                                 theM_nextticker,
                                 theM_httprequest,
                                 theM_callbacker,
                                 theM_overrider,
                                 theM_sentinels) {

        var ModuleName     = "recorder-test";
        var ModulePackages = "common-test/resloader";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName || "resloader.js");}




        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGRECORDS  = false;
            theToInit.LOGRESLOADS = true;

            theToInit.ANNOTATERESLOADERCALLBACKS          = true;
            theToInit.RECORDRESLOADERCALLBACKINVOCATIONS  = true;
            theToInit.RECORDRESLOADERCALLBACKARGS         = true;

            theToInit.LOGEXCEPTIONDETAILS         = true;

            theToInit.RESEVTSSETNOTFORCONSOLE = "RESEVTKINDS_NOTFORCONSOLE_NONE";

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

            theToInit.RESLOADER_PATH_TO_ROOT = "../../..";

            theToInit.RESNAMESTEPSEPARATOR = "/";

            theToInit.LOADERKIND_RES = "RES";

            theToInit.PATHURLPREFIX = "http://";

            theToInit.RESLOADSTATUSCODESOK = [ 200];



            theToInit.RESEVEKIND_LOADED     = "LOADED";
            theToInit.RESEVEKIND_NOTLOADED  = "NOTLOADED";
            theToInit.RESEVEKIND_SENT       = "SENT";
            theToInit.RESEVEKIND_RECEIVED   = "RECEIVED";
            theToInit.RESEVEKIND_CATCHED_EXCEPTION   = "CATCHED_EXCEPTION";


            theToInit.RESEVEKIND_CALLBACKCHAINED  = "CALLBACKCHAINED";
            theToInit.RESEVEKIND_CALLBACKINVOKED  = "CALLBACKINVOKED";
            theToInit.RESEVEKIND_CALLBACKRECEIVED = "CALLBACKRECEIVED";


            theToInit.RESEVEKINDS = [
                theToInit.RESEVEKIND_LOADED,
                theToInit.RESEVEKIND_NOTLOADED,
                theToInit.RESEVEKIND_SENT,
                theToInit.RESEVEKIND_RECEIVED,
                theToInit.RESEVEKIND_CATCHED_EXCEPTION,
                theToInit.RESEVEKIND_CALLBACKCHAINED,
                theToInit.RESEVEKIND_CALLBACKINVOKED,
                theToInit.RESEVEKIND_CALLBACKRECEIVED

            ];


            theToInit.RESEVTKINDS_NOTFORCONSOLE_RESTRICTIVE = [
            ];


            theToInit.RESEVTKINDS_NOTFORCONSOLE_LIGHT = [
            ];


            theToInit.RESEVTKINDS_NOTFORCONSOLE_NONE = [ ];
            theToInit.RESEVTKINDS_NOTFORCONSOLE_ALL     = theToInit.RESEVEKINDS.slice();
            theToInit.RESEVTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.RESEVTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();

            theToInit.RESEVTKINDS_NOTFORCONSOLE = theToInit.RESEVTKINDS_NOTFORCONSOLE_LIGHT.slice();
            theToInit.RESEVTKINDS_NOTFORCONSOLE = theToInit.RESEVTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();

            if( theToInit.RESEVTSSETNOTFORCONSOLE) {

                if( typeof theToInit.RESEVTSSETNOTFORCONSOLE == "string") {
                    var anEventsSetNotForConsole = theToInit[ theToInit.RESEVTSSETNOTFORCONSOLE];
                    if( anEventsSetNotForConsole) {
                        theToInit.RESEVTKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                    }
                    else {
                        theToInit.RESEVTKINDS_NOTFORCONSOLE = [];
                    }
                }
                else {
                    theToInit.RESEVTKINDS_NOTFORCONSOLE = theToInit.RESEVTSSETNOTFORCONSOLE;
                }
            }
            else {
                theToInit.RESEVTKINDS_NOTFORCONSOLE = theToInit.RESEVTKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }
            if( !theToInit.RESEVTKINDS_NOTFORCONSOLE) {
                theToInit.RESEVTKINDS_NOTFORCONSOLE = theToInit.RESEVTKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }
        };





        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
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











        var aResLoader_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "ResLoader";


            aPrototype._v_Title      = null;

            aPrototype._v_ResAndPackagePaths = null;

            aPrototype._v_ParentResLoader = null;
            aPrototype._v_SubResLoaders   = null;

            aPrototype._v_Records = null;

            aPrototype._v_ResPathsToAttempt        = null;
            aPrototype._v_ResPathsAlreadyAttempted = null;





            var _pInit = function( theTitle) {

                this._pInit_ResLoader( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ResLoader = function( theTitle) {

                this._v_Prototype = aPrototype;

                this._v_Type = aPrototype._v_Type;

                this._v_Title      = theTitle;

                this._v_ResAndPackagePaths = [ ];

                this._v_ParentResLoader = null;
                this._v_SubResLoaders   = [ ];

                this._v_Records = [ ];

                this._v_ResPathsToAttempt        = null;
                this._v_ResPathsAlreadyAttempted = null;
            };
            if( _pInit_ResLoader){}/* CQT */
            aPrototype._pInit_ResLoader = _pInit_ResLoader;






            var fLibPathPrefix = function( ) {

                return null;
            };
            if( fLibPathPrefix){}/* CQT */
            aPrototype.fLibPathPrefix = fLibPathPrefix;


















            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "type": this._v_Type
                };
                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;






            var fIdentifyingString = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingString){}/* CQT */
            aPrototype.fIdentifyingString = fIdentifyingString;







            var fIdentifyingWithTitleJSON = function() {

                return this.fIdentifyingJSON();
            };
            if( fIdentifyingWithTitleJSON){}/* CQT */
            aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






            var fIdentifyingWithTitleString = function() {

                var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingWithTitleString){}/* CQT */
            aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;









            var fToResultJSON = function( theResLoaderObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = this.fIdentifyingWithTitleJSON();
                if( aResultJSON){}/* CQT */

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;



















            var fRecord = function( theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecord = new theM_resrecord.ResRecord_Constructor( this, theStep, theEventKind, theData, theErrorReason, theErrorDetail);

                if( aRecord) {
                    this._v_Records.push( aRecord);

                    if( this.LOGRECORDS) {
                        this.pLogRecord( aRecord);
                    }
                }

                return aRecord;
            };
            if( fRecord){}/* CQT */
            aPrototype.fRecord = fRecord;







            var fRecordCallback = function( theEventKind, theCallback, theError, theResult) {
                var aMethodName = theCallback.__MethodName;
                if( !aMethodName) {
                    aMethodName = null;
                }
                return this.fRecord( aMethodName, theEventKind, theCallback, theError, theResult);
            };
            if( fRecordCallback){}/* CQT */
            aPrototype.fRecordCallback = fRecordCallback;






            var pLogRecord = function( theRecord) {
                if( this.LOGRECORDS) {
                    if( theRecord) {
                        var anEventKind = theRecord._v_EventKind;
                        if( this.RESEVTKINDS_NOTFORCONSOLE.indexOf( anEventKind) < 0) {
                            var aLogString = theRecord.fLogString();
                            if( aLogString) {
                                console.log( "," + aLogString);
                            }
                        }
                    }
                }
            };
            if( pLogRecord){}/* CQT */
            aPrototype.pLogRecord = pLogRecord;







            var fChainNewResloaderCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATERESLOADERCALLBACKS) {
                    return theNewCallback;
                }

                return theM_callbacker.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewResloaderCallbackForCallback){}/* CQT */
            aPrototype.fChainNewResloaderCallbackForCallback = fChainNewResloaderCallbackForCallback;







            var pReceivedResloaderCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATERESLOADERCALLBACKS) {
                    return;
                }

                if( !this.RECORDRESLOADERCALLBACKARGS) {
                    return;
                }

                if( !theCallback) {
                    return;
                }

                theM_callbacker.pReceivedCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedResloaderCallbackArg){}/* CQT */
            aPrototype.pReceivedResloaderCallbackArg = pReceivedResloaderCallbackArg;




















            var pClearResLoaderPaths = function( ) {

                this._v_ResAndPackagePaths = [ ];
            };
            if( pClearResLoaderPaths){}/* CQT */
            aPrototype.pClearResLoaderPaths = pClearResLoaderPaths;









            var fNewVoidResAndPackagePath = function( ) {

               return {
                   "packagePath": null,
                   "resPath":     null
               };
            };
            if( fNewVoidResAndPackagePath){}/* CQT */
            aPrototype.fNewVoidResAndPackagePath = fNewVoidResAndPackagePath;








            var fAddResAndPackagePaths = function( theResAndPackagePaths) {
                if( !theResAndPackagePaths) {
                    return false;
                }

                var anAdded = true;

                var aNumResAndPackagePaths = theResAndPackagePaths.length;
                for( var aResAndPackagePathsIdx=0; aResAndPackagePathsIdx < aNumResAndPackagePaths; aResAndPackagePathsIdx++) {
                    var aResAndPackagePaths = theResAndPackagePaths[ aResAndPackagePathsIdx];
                    if( aResAndPackagePaths) {
                        var aPackagePath = aResAndPackagePaths[ "packagePath"];
                        var aResPath     = aResAndPackagePaths[ "resPath"];
                        if( aPackagePath && aResPath) {
                            if( !this.fAddResPath( aPackagePath, aResPath)) {
                                anAdded = false;
                            }
                        }
                    }
                }

                return anAdded;
            };
            if( fAddResAndPackagePaths){}/* CQT */
            aPrototype.fAddResAndPackagePaths = fAddResAndPackagePaths;









            var fAddResPath = function( thePackagePath, theResPath) {

                if( !thePackagePath) {
                    return false;
                }

                if( !theResPath) {
                    return false;
                }

                var aNumResAndPackagePaths = this._v_ResAndPackagePaths.length;
                for( var aResAndPackagePathIdx=0; aResAndPackagePathIdx < aNumResAndPackagePaths; aResAndPackagePathIdx++) {

                    var aResAndPackagePath =  this._v_ResAndPackagePaths[ aResAndPackagePathIdx];

                    var aPackagePath = aResAndPackagePath[ "packagePath"];
                    var aResPath     = aResAndPackagePath[ "resPath"];
                    if( thePackagePath == aPackagePath) {

                        var aResResult = theResPath == aResPath;
                        if( aResResult){}/* CQT */
                        return aResResult;
                    }
                }


                var aNewResAndPackagePath = this.fNewVoidResAndPackagePath();
                aNewResAndPackagePath[ "packagePath"] = thePackagePath;
                aNewResAndPackagePath[ "resPath"]     = theResPath;

                this._v_ResAndPackagePaths.push( aNewResAndPackagePath);

                return true;
            };
            if( fAddResPath){}/* CQT */
            aPrototype.fAddResPath = fAddResPath;









            var fRemovePackagePath = function( thePackagePath) {

                if( !thePackagePath) {
                    return false;
                }

                var aFoundResAndPackagePathIndex = null;

                var aNumResAndPackagePaths = this._v_ResAndPackagePaths.length;
                for( var aResAndPackagePathIdx=0; aResAndPackagePathIdx < aNumResAndPackagePaths; aResAndPackagePathIdx++) {

                    var aResAndPackagePath =  this._v_ResAndPackagePaths[ aResAndPackagePathIdx];

                    var aPackagePath = aResAndPackagePath[ "packagePath"];

                    if( thePackagePath == aPackagePath) {
                        aFoundResAndPackagePathIndex = aResAndPackagePathIdx;
                        break;
                    }
                }

                if( aFoundResAndPackagePathIndex == null) {
                    return false;
                }


                this._v_ResAndPackagePaths.splice( aFoundResAndPackagePathIndex);

                return true;
            };
            if( fRemovePackagePath){}/* CQT */
            aPrototype.fRemovePackagePath = fRemovePackagePath;





            














            var fCreateSubResLoader = function( ) {

                var aNewSubResLoader = new ResLoader_Constructor( ( this._v_Title ? this._v_Title : "") + "-sub");
                aNewSubResLoader._v_ParentResLoader = this;
                this._v_SubResLoaders.push( aNewSubResLoader);

                return aNewSubResLoader;
            };
            if( fCreateSubResLoader){}/* CQT */
            aPrototype.fCreateSubResLoader = fCreateSubResLoader;









            var fRemoveSubResLoader = function( theSubResLoader ) {
                if( !theSubResLoader) {
                    return false;
                }

                var aFoundSubLoaderIndex = null;
                var aFoundSubLoader      = null;

                var aNumSubLoaders = this._v_SubResLoaders.length;
                for( var aSubLoaderIdx=0; aSubLoaderIdx < aNumSubLoaders; aSubLoaderIdx++) {
                    var aSubLoader = this._v_SubResLoaders[ aSubLoaderIdx];
                    if( aSubLoader === theSubResLoader) {
                        aFoundSubLoader      = aSubLoader;
                        aFoundSubLoaderIndex = aSubLoaderIdx;
                        break
                    }
                }

                if( ( aFoundSubLoaderIndex == null) || ( aFoundSubLoader == null)) {
                    return false;
                }

                aFoundSubLoader._v_ParentResLoader = null;
                this._v_SubResLoaders.splice( aFoundSubLoaderIndex, 1);

                return true;
            };
            if( fRemoveSubResLoader){}/* CQT */
            aPrototype.fRemoveSubResLoader = fRemoveSubResLoader;









            var pReleaseResLoader = function( ) {

                this.pClearResLoaderPaths();

                var aNumSubLoaders = this._v_SubResLoaders.length;
                for( var aSubLoaderIdx=0; aSubLoaderIdx < aNumSubLoaders; aSubLoaderIdx++) {
                    var aSubLoader = this._v_SubResLoaders[ aSubLoaderIdx];
                    if( aSubLoader){}/* CQT */
                    aSubLoader.pReleaseResLoader();
                }

                if( !( this._v_ParentResLoader == null)) {
                    this._v_ParentResLoader.fRemoveSubResLoader( this);
                }
            };
            if( pReleaseResLoader){}/* CQT */
            aPrototype.pReleaseResLoader = pReleaseResLoader;








            var fPathResolvedByRequire = function( thePath) {

                if( !thePath) {
                    return null;
                }

                var aResolvedPath = null;
                try {
                    aResolvedPath = require.resolve( thePath);
                }
                catch( anException) {
                }

                return aResolvedPath;
            };
            if( fPathResolvedByRequire){}/* CQT */
            aPrototype.fPathResolvedByRequire = fPathResolvedByRequire;







            var fFullLoadPathsForResNamed = function( theResName) {

                if( !theResName) {
                    return null;
                }


                var someFullLoadPaths = [ theResName];



                var someResNameSteps = theResName.split( this.RESNAMESTEPSEPARATOR);
                if( !someResNameSteps) {
                    return someFullLoadPaths;
                }

                var aNumResNameSteps = someResNameSteps.length;
                if( !aNumResNameSteps) {
                    return someFullLoadPaths;
                }




                var aLibPathPrefix = this.fLibPathPrefix();
                if( aLibPathPrefix) {
                    var aFirstResNameStep = someResNameSteps[ 0];

                    if( aFirstResNameStep == aLibPathPrefix) {

                        if( aNumResNameSteps < 2) {
                            return null;
                        }
                        var someRemainingResNameSteps = null;

                        if( aNumResNameSteps == 2) {
                            someRemainingResNameSteps = [ theM_sentinels.ROOTPATHSTEPSYMBOL, someResNameSteps[ 1]];
                        }
                        else {
                            someRemainingResNameSteps = someResNameSteps.slice( 1);
                        }
                        if( !someRemainingResNameSteps || !someRemainingResNameSteps.length) {
                            return null;
                        }

                        someFullLoadPaths = this.fLibPathsForResNameSteps( someRemainingResNameSteps);
                    }
                }

                return someFullLoadPaths;
            };
            if( fFullLoadPathsForResNamed){}/* CQT */
            aPrototype.fFullLoadPathsForResNamed = fFullLoadPathsForResNamed;










            var fLibPathsForResNameSteps = function( theResNameSteps) {

                var someLibPaths = [ ];

                this.pLibPathsForResNameStepsExceptSub_into( theResNameSteps, null, someLibPaths);

                return someLibPaths;
            };
            if( fLibPathsForResNameSteps){}/* CQT */
            aPrototype.fLibPathsForResNameSteps = fLibPathsForResNameSteps;










            var pLibPathsForResNameStepsExceptSub_into = function( theResNameSteps, theSubResLoader, theLibPaths) {

                if( !theResNameSteps || !theResNameSteps.length) {
                    return;
                }

                this.pLibPathsForResNameSteps_own_into( theResNameSteps, theLibPaths);


                var aNumSubLoaders = this._v_SubResLoaders.length;
                for( var aSubLoaderIdx=0; aSubLoaderIdx < aNumSubLoaders; aSubLoaderIdx++) {

                    var aSubLoader = this._v_SubResLoaders[ aSubLoaderIdx];

                    if( !theSubResLoader || !( aSubLoader === theSubResLoader)) {

                        aSubLoader.pLibPathsForResNameStepsExceptSub_into( theResNameSteps, null, theLibPaths);
                    }
                }


                if( !( this._v_ParentResLoader == null)) {
                    this._v_ParentResLoader.pLibPathsForResNameStepsExceptSub_into( theResNameSteps, this, theLibPaths);
                }

            };
            if( pLibPathsForResNameStepsExceptSub_into){}/* CQT */
            aPrototype.pLibPathsForResNameStepsExceptSub_into = pLibPathsForResNameStepsExceptSub_into;









            var pLibPathsForResNameSteps_own_into = function( theResNameSteps, theFullLoadPaths) {
                if( !theFullLoadPaths) {
                    return;
                }

                if( !theResNameSteps) {
                    return;
                }

                var aNumResNameSteps = theResNameSteps.length;
                if( !aNumResNameSteps) {
                    return;
                }


                var anExtraPath = "";

                if( aNumResNameSteps > 1) {
                    var someRemainingSteps = theResNameSteps.slice( 1);
                    anExtraPath = someRemainingSteps.join( this.RESNAMESTEPSEPARATOR);
                }


                var aPackageName = theResNameSteps[ 0];


                var aNumResAndPackagePaths = this._v_ResAndPackagePaths.length;
                for( var aResAndPackagePathIdx=0; aResAndPackagePathIdx < aNumResAndPackagePaths; aResAndPackagePathIdx++) {

                    var aResAndPackagePathOrPaths =  this._v_ResAndPackagePaths[ aResAndPackagePathIdx];

                    var aPackagePath = aResAndPackagePathOrPaths[ "packagePath"];

                    if( aPackageName == aPackagePath) {

                        var aResPathOrPaths = aResAndPackagePathOrPaths[ "resPath"];


                        if( typeof aResPathOrPaths == "string") {
                            if( aResPathOrPaths) {
                                var aLibPath =  aResPathOrPaths + anExtraPath;
                                theFullLoadPaths.push( aLibPath);
                            }
                            continue;
                        }


                        if( !anExtraPath) {
                            Array.prototype.push.apply( theFullLoadPaths, aResPathOrPaths);
                            continue;
                        }


                        var aNumResPaths = aResPathOrPaths.length;
                        for( var aResPathIdx=0; aResPathIdx < aNumResPaths; aResPathIdx++) {
                            var aResPath = aResPathOrPaths[ aResPathIdx];
                            var otherLibPath =  aResPath + anExtraPath;
                            theFullLoadPaths.push( otherLibPath);
                        }

                    }
                }
            };
            if( pLibPathsForResNameSteps_own_into){}/* CQT */
            aPrototype.pLibPathsForResNameSteps_own_into = pLibPathsForResNameSteps_own_into;
























            var fLoadResNamed = function( theResName) {

                var aMethodName = "fLoadResNamed";

                var someFullLoadPaths = this.fFullLoadPathsForResNamed( theResName);
                if( !someFullLoadPaths || !someFullLoadPaths.length) {
                    if( this.LOGRESLOADS) {
                        this.fRecord( aMethodName, this.RESEVEKIND_NOTLOADED, null, "!this.fLibPathsForResNameSteps( " + theResName + ")", null);
                    }
                    return null;
                }


                var aRes = this.fLoadResWithFullLoadPaths( someFullLoadPaths);
                if( !aRes){
                    if( this.LOGRESLOADS) {
                        this.fRecord( aMethodName, this.RESEVEKIND_NOTLOADED, null, "!this.fLoadResWithFullLoadPaths( " + someFullLoadPaths.join( ",") + ")", theResName);
                    }
                    return null;
                }

                if( this.LOGRESLOADS) {
                    this.fRecord( aMethodName, this.RESEVEKIND_LOADED, aRes, theResName,  someFullLoadPaths.join( ","));
                }

                return aRes;
            };
            if( fLoadResNamed){}/* CQT */
            aPrototype.fLoadResNamed = fLoadResNamed;










            var fLoadResWithFullLoadPaths = function( theFullLoadPaths) {

                if( !theFullLoadPaths || !theFullLoadPaths.length) {
                    return null;
                }

                var aNumResFullPaths = theFullLoadPaths.length;
                if( !aNumResFullPaths) {
                    return null;
                }

                for( var aResFullPathIdx=0; aResFullPathIdx < aNumResFullPaths; aResFullPathIdx++) {
                    var aResFullPath = theFullLoadPaths[ aResFullPathIdx];
                    if( aResFullPath) {
                        var aRes = this.fLoadResWithFullLoadPath_single( aResFullPath);
                        if( !( aRes == null)) {
                            return aRes;
                        }
                    }
                }

                return null;
            };
            if( fLoadResWithFullLoadPaths){}/* CQT */
            aPrototype.fLoadResWithFullLoadPaths = fLoadResWithFullLoadPaths;








            var fLoadResWithFullLoadPath_single = function( theFullLoadPath) {

                if( !theFullLoadPath || !theFullLoadPath.length) {
                    return null;
                }

                var aRes = null;
                try {
                    aRes = require( theFullLoadPath);
                }
                catch( anException) {
                    if( this.LOGEXCEPTIONDETAILS) {
                        theM_exceptiondetails.fExceptionDetail( anException);
                    }
                }
                if( !aRes) {
                    return null;
                }

                return aRes;
            };
            if( fLoadResWithFullLoadPath_single){}/* CQT */
            aPrototype.fLoadResWithFullLoadPath_single = fLoadResWithFullLoadPath_single;



















            var pLoadResNamed = function( theResName, theCallback) {

                var aMethodName = "pLoadResNamed";

                this.pReceivedResloaderCallbackArg( theCallback, aMethodName);


                var someFullLoadPaths = this.fFullLoadPathsForResNamed( theResName);
                if( !someFullLoadPaths || !someFullLoadPaths.length) {
                    if( this.LOGRESLOADS) {
                        this.fRecord( aMethodName, this.RESEVEKIND_NOTLOADED, null, "!this.fLibPathsForResNameSteps( " + theResName + ")", null);
                    }
                    return;
                }

                this.pLoadResWithFullLoadPaths( someFullLoadPaths, theCallback);
            };
            if( pLoadResNamed){}/* CQT */
            aPrototype.pLoadResNamed = pLoadResNamed;







            var fLoadForceSync = function() {

               return false;
            };
            if( fLoadForceSync){}/* CQT */
            aPrototype.fLoadForceSync = fLoadForceSync;









            var pLoadResWithFullLoadPaths = function( theFullLoadPaths, theCallback) {

                var aMethodName = "pLoadResWithFullLoadPaths";

                if( !theFullLoadPaths || !theFullLoadPaths.length) {
                    return;
                }


                if( this.fLoadForceSync()) {
                    var aResSyncLoaded = this.fLoadResWithFullLoadPaths( theFullLoadPaths);

                    theCallback( null, aResSyncLoaded);
                    return;
                }



                this.pInitFinderToScheduleNextResPath( theFullLoadPaths);


                var aExceptionHandler = this.fAllResPathsExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fAllResPathsCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, this.RESEVEKIND_NOTLOADED, null, "!this.fAllResPathsCallback( theCallback)", null));
                        return;
                    }



                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToScheduleNextResPath( aCallback);
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
            if( pLoadResWithFullLoadPaths){}/* CQT */
            aPrototype.pLoadResWithFullLoadPaths = pLoadResWithFullLoadPaths;














            var pInitFinderToScheduleNextResPath = function( theResPathsToAttempt) {

                if( theResPathsToAttempt) {
                    this._v_ResPathsToAttempt = theResPathsToAttempt.slice();
                }
                else {
                    this._v_ResPathsToAttempt = [ ];
                }

                this._v_ResPathsAlreadyAttempted = [ ];
            };
            if( pInitFinderToScheduleNextResPath){}/* CQT */
            aPrototype.pInitFinderToScheduleNextResPath = pInitFinderToScheduleNextResPath;










            var pTryToScheduleNextResPath = function( theCallback) {
                var aMethodName = "pTryToScheduleNextResPath";
                if( aMethodName){}/* CQT */

                var aResPathToScheduleNext = this.fFindResPathToScheduleNext();
                if( !aResPathToScheduleNext) {
                    theCallback();
                    return;
                }

                this._v_ResPathsAlreadyAttempted.push( aResPathToScheduleNext);

                this.pScheduleNextResPath( theCallback, aResPathToScheduleNext);
            };
            if( pTryToScheduleNextResPath){}/* CQT */
            aPrototype.pTryToScheduleNextResPath = pTryToScheduleNextResPath;








            var fFindResPathToScheduleNext = function() {

                if( !this._v_ResPathsToAttempt) {
                    return null;
                }

                var aPendingResPath = null;

                var aNumResPaths = this._v_ResPathsToAttempt.length;
                for( var aResPathIdx=0; aResPathIdx < aNumResPaths; aResPathIdx++) {

                    var aResPath = this._v_ResPathsToAttempt[ aResPathIdx];

                    if( this._v_ResPathsAlreadyAttempted.indexOf( aResPath) < 0) {
                        aPendingResPath = aResPath;
                        break;
                    }
                }
                if( !aPendingResPath) {
                    return null;
                }

                return aPendingResPath;
            };
            if( fFindResPathToScheduleNext){}/* CQT */
            aPrototype.fFindResPathToScheduleNext = fFindResPathToScheduleNext;










            var pScheduleNextResPath = function( theCallback, theResFullPath) {

                var aMethodName = "pScheduleNextResPath";

                if( !theResFullPath) {
                    theCallback( this.fRecord( aMethodName, this.RESEVEKIND_NOTLOADED, null, "!theResFullPath", null));
                    return;
                }


                var aCallback = this.fScheduleNextResPathCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, this.RESEVEKIND_NOTLOADED, null, "this.fScheduleNextResPathCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * Attempt to load from path NOW
                 */
                var anExceptionHandler = this.fExceptionNextResPathHandler( aCallback);

                try {

                    if( theResFullPath.indexOf( this.PATHURLPREFIX) == 0) {
                        this.pLoadResWithFullPath_async_remote( theResFullPath, aCallback);
                        return;
                    }

                    this.pLoadResWithFullPath_async_local( theResFullPath, aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pScheduleNextResPath){}/* CQT */
            aPrototype.pScheduleNextResPath = pScheduleNextResPath;













            var fScheduleNextResPathCallback = function( theCallback) {
                var aMethodName = "fScheduleNextResPathCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( theError) {
                        aThis.pTryToScheduleNextResPath( theCallback);
                        return;
                    }


                    if( theResult == null) {
                        theCallback( aThis.fRecord( aMethodName, aThis.RESEVEKIND_NOTLOADED, null, null, null));
                        return;
                    }


                    theCallback( null, theResult);

                }).bind( this);
                if( aCallback){}/* CQT */

                return aCallback;
            };
            if( fScheduleNextResPathCallback){}/* CQT */
            aPrototype.fScheduleNextResPathCallback = fScheduleNextResPathCallback;









            var fExceptionNextResPathHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, aThis.RESEVEKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, aThis.RESEVEKIND_NOTLOADED, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextResPathHandler){}/* CQT */
            aPrototype.fExceptionNextResPathHandler = fExceptionNextResPathHandler;















            var pLoadResWithFullPath_async_local = function( theResFullPath, theCallback) {

                if( !theResFullPath) {
                    return;
                }

                var aThis = this;

                theM_nextticker.pNextTick( function() {
                    aRes = aThis.fLoadResWithFullLoadPath_single( theResFullPath);

                    theCallback( null, aRes);
                });
            };
            if( pLoadResWithFullPath_async_local){}/* CQT */
            aPrototype.pLoadResWithFullPath_async_local = pLoadResWithFullPath_async_local;













            var pLoadResWithFullPath_async_remote = function( theResFullPath, theCallback) {

                var aMethodName = "pLoadResWithFullPath_async_remote";

                this.pReceivedResloaderCallbackArg( theCallback, aMethodName);


                if( !theResFullPath) {
                    return;
                }

                if( theResFullPath.indexOf( this.PATHURLPREFIX) < 0) {
                    theCallback( "theResFullPath.indexOf( " + this.PATHURLPREFIX + ") < 0");
                    return;
                }




                var aThis = this;

                try {

                    var aRequestGetCallback = function ( theError, theResponse, theBody) {

                        try {
                            if( theBody){}/* CQT */

                            aThis.fRecord( aMethodName, aThis.RESEVEKIND_RECEIVED, null, null, null);


                            if( theError) {
                                theCallback( aThis.fRecord( aMethodName, aThis.RESEVEKIND_NOTLOADED, null, "theError", theError));
                                return;
                            }

                            if( !theResponse) {
                                theCallback( aThis.fRecord( aMethodName, aThis.RESEVEKIND_NOTLOADED, null, "!theResponse", null));
                                return;
                            }


                            if( !theResponse.statusCode || ( aThis.RESLOADSTATUSCODESOK.indexOf( theResponse.statusCode) < 0)) {
                                theCallback( aThis.fRecord( aMethodName, aThis.RESEVEKIND_NOTLOADED, null, "!( theResponse.statusCode in " + aThis.RESLOADSTATUSCODESOK.join( ",") + ")", theResponse.statusCode));
                            }


                            var aBody = theResponse.body;
                            if( typeof aBody == "undefined") {
                                theCallback( aThis.fRecord( aMethodName, aThis.RESEVEKIND_NOTLOADED, null, "typeof theResponse.body == 'undefined'", null));
                                return;
                            }




                            aThis.pParseResReceived( theCallback, theResFullPath, aBody);

                        }
                        catch( anException) {
                            var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                            var aRecord = aThis.fRecord( aMethodName, aThis.RESEVEKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                            theCallback( aThis.fRecord( aMethodName, aThis.RESEVEKIND_NOTLOADED, null, aRecord, null));
                        }
                    };




                    var aWrappedRequestGetCallback = this.fChainNewResloaderCallbackForCallback( aRequestGetCallback, "pLoadResWithFullPath_async_remote", theCallback, aMethodName);


                    /* *************************+
                     Send request and receive reply now
                     */
                    theM_httprequest.pHttpRequest_get(
                        theResFullPath,
                        {},
                        aWrappedRequestGetCallback
                    );



                }
                catch( anException) {
                    var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                    var aRecord = this.fRecord( aMethodName, this.RESEVEKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                    theCallback( this.fRecord( aMethodName, this.RESEVEKIND_NOTLOADED, null, aRecord, null));
                }
            };
            if( pLoadResWithFullPath_async_remote){}/* CQT */
            aPrototype.pLoadResWithFullPath_async_remote = pLoadResWithFullPath_async_remote;










            var pParseResReceived = function(  theCallback, theResFullPath, theBody) {

                if( this.LOGRESLOADS) {
                    this.fRecord( aMethodName, this.RESEVEKIND_LOADED, theBody, theResFullPath);
                }

                theCallback( null, theBody);
            };
            if( pParseResReceived){}/* CQT */
            aPrototype.pParseResReceived = pParseResReceived;
















            var fAllResPathsCallback = function( theCallback) {
                var aMethodName = "fAllResPathsCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( theError) {
                        theCallback( aThis.fRecord( aMethodName, aThis.RESEVEKIND_NOTLOADED, null, theError, null));
                        return;
                    }


                    if( theResult == null) {
                        theCallback( aThis.fRecord( aMethodName, aThis.RESEVEKIND_NOTLOADED, null, "theResult == null", null));
                        return;
                    }

                    theCallback( null, theResult);

                }).bind( this);
                if( aCallback){}/* CQT */

                return aCallback;
            };
            if( fAllResPathsCallback){}/* CQT */
            aPrototype.fAllResPathsCallback = fAllResPathsCallback;










            var fAllResPathsExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( theMethodName, aThis.RESEVEKIND_NOTLOADED, null, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, aThis.RESEVEKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, aThis.RESEVEKIND_NOTLOADED, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fAllResPathsExceptionHandler){}/* CQT */
            aPrototype.fAllResPathsExceptionHandler = fAllResPathsExceptionHandler;









            return aPrototype;

        })();






        var ResLoader_Constructor = function( theTitle) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Title      = null;

            this._v_ResAndPackagePaths = null;

            this._v_ParentResLoader = null;
            this._v_SubResLoaders   = null;

            this._v_Records =  null;

            this._v_ResPathsToAttempt        = null;
            this._v_ResPathsAlreadyAttempted = null;

            this._pInit_ResLoader( theTitle);
        };
        ResLoader_Constructor.prototype = aResLoader_Prototype;





        var ResLoader_SuperPrototypeConstructor = function() {
            this._v_Prototype = aResLoader_Prototype;
            this._v_Type = null;

            this._v_Title      = null;

            this._v_ResAndPackagePaths = null;

            this._v_ParentResLoader = null;
            this._v_SubResLoaders   = null;

            this._v_Records =  null;

            this._v_ResPathsToAttempt        = null;
            this._v_ResPathsAlreadyAttempted = null;
        };
        ResLoader_SuperPrototypeConstructor.prototype = aResLoader_Prototype;







        var aRes = {
            "ResLoader_Prototype": aResLoader_Prototype,
            "ResLoader_Constructor": ResLoader_Constructor,
            "ResLoader_SuperPrototypeConstructor": ResLoader_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aRes);




        return aRes;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../exceptiondetails');
            var aM_resrecord        = require('./resrecord');
            var aM_nextticker       = require('../../infrasvcs/nextticker/nextticker');
            var aM_httprequest      = require('../../infrasvcs/httprequest/httprequest');
            var aM_callbacker       = require('../callbacker');
            var aM_overrider        = require('../overrider');
            var aM_sentinels        = require('../sentinels');

            return aMod_definer( aM_exceptiondetails, aM_resrecord, aM_nextticker, aM_httprequest, aM_callbacker, aM_overrider, aM_sentinels);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../exceptiondetails",
            "./resrecord",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/httprequest/httprequest",
            "../callbacker",
            "../overrider",
            "../sentinels"
        ], function (
                theM_exceptiondetails,
                theM_resrecord,
                theM_nextticker,
                theM_httprequest,
                theM_callbacker,
                theM_overrider,
                theM_sentinels
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_resrecord,
                theM_nextticker,
                theM_httprequest,
                theM_callbacker,
                theM_overrider,
                theM_sentinels
            );
        });
    }



}());