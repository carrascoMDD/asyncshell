'use strict';

/*
 requestcached-test.js
 Created 201511120222
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

    var aMod_definer = function( theM_requestreply_test,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_fileaccess_test,
                                 theM_directory_test,
                                 theM_payloadholder) {


        var ModuleName     = "requestcached-test";
        var ModulePackages = "common-test";
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
                return;
            }


            theToInit.PARMSPREFIX_REQUESTCACHED = "requestcached";



            theToInit.PARM_REQUESTCACHED_DOREADCACHE           = theToInit.PARMSPREFIX_REQUESTCACHED + ".doReadCache";
            theToInit.PARM_REQUESTCACHED_DOREQUESTREPLY        = theToInit.PARMSPREFIX_REQUESTCACHED + ".doRequestReply";
            theToInit.PARM_REQUESTCACHED_DOWRITECACHE          = theToInit.PARMSPREFIX_REQUESTCACHED + ".doWriteCache";



            theToInit.PARMS_REQUESTCACHED = [
                theToInit.PARM_REQUESTCACHED_DOREADCACHE,
                theToInit.PARM_REQUESTCACHED_DOREQUESTREPLY,
                theToInit.PARM_REQUESTCACHED_DOWRITECACHE
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











        var aRequestCached_Prototype = (function() {


            var aPrototype = new theM_requestreply_test.RequestReply_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_requestreply_test.RequestReply_Prototype;

            aPrototype._v_Type = "RequestCached";

            aPrototype._v_Prototype_RequestCached = aPrototype;





            aPrototype._v_DoReadCache               = false;
            aPrototype._v_DoRequestReply            = false;
            aPrototype._v_DoWriteCache              = false;

            aPrototype._v_ReadFileAccessTest        = null;
            aPrototype._v_WriteFileAccessTest       = null;

            aPrototype._v_RetrievedFromCache        = null;
            aPrototype._v_RetrievedFromRequestReply = null;
            aPrototype._v_WrittenToCache            = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_RequestCached(
                    theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_RequestCached = function(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RequestReply.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder, theSession]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_DoReadCache               = null;
                this._v_DoRequestReply            = null;
                this._v_DoWriteCache              = null;

                this._v_ReadFileAccessTest        = null;
                this._v_WriteFileAccessTest       = null;

                this._v_RetrievedFromCache        = false;
                this._v_RetrievedFromRequestReply = false;
                this._v_WrittenToCache            = false;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_RequestCached", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_RequestCached){}/* CQT */
            aPrototype._pInit_RequestCached = _pInit_RequestCached;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_RequestCached( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_RequestCached = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */


                if(  this._v_ReadFileAccessTest) {
                    if( typeof  this._v_ReadFileAccessTest._pRelease == "function") {
                        this._v_ReadFileAccessTest._pRelease( theReleaseParms, theReleaseDone);
                    }
                }


                if(  this._v_WriteFileAccessTest) {
                    if( typeof  this._v_WriteFileAccessTest._pRelease == "function") {
                        this._v_WriteFileAccessTest._pRelease( theReleaseParms, theReleaseDone);
                    }
                }

                this._v_DoReadCache               = undefined;
                this._v_DoRequestReply            = undefined;
                this._v_DoWriteCache              = undefined;

                this._v_ReadFileAccessTest        = undefined;
                this._v_WriteFileAccessTest       = undefined;

                this._v_RetrievedFromCache        = undefined;
                this._v_RetrievedFromRequestReply = undefined;
                this._v_WrittenToCache            = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RequestReply.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_RequestCached){}/* CQT */
            aPrototype._pRelease_RequestCached = _pRelease_RequestCached;









            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

                if(  this._v_ReadFileAccessTest) {
                    if( typeof  this._v_ReadFileAccessTest._pReleaseChildrenInto == "function") {
                        this._v_ReadFileAccessTest._pReleaseChildrenInto( theReleaseChildren);
                    }
                }


                if(  this._v_WriteFileAccessTest) {
                    if( typeof  this._v_WriteFileAccessTest._pReleaseChildrenInto == "function") {
                        this._v_WriteFileAccessTest._pReleaseChildrenInto( theReleaseChildren);
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

                this.pCleanUpTest_RequestCached( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_RequestCached = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                this._v_ReadFileAccessTest        = undefined;
                this._v_WriteFileAccessTest       = undefined;

                this._v_RetrievedFromCache        = undefined;
                this._v_RetrievedFromRequestReply = undefined;
                this._v_WrittenToCache            = undefined;


                if(  this._v_ReadFileAccessTest) {
                    if( typeof  this._v_ReadFileAccessTest.pCleanUpTest == "function") {
                        this._v_ReadFileAccessTest.pCleanUpTest( theReleaseChildren);
                    }
                }


                if(  this._v_WriteFileAccessTest) {
                    if( typeof  this._v_WriteFileAccessTest.pCleanUpTest == "function") {
                        this._v_WriteFileAccessTest.pCleanUpTest( theReleaseChildren);
                    }
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RequestReply.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_RequestCached){}/* CQT */
            aPrototype.pCleanUpTest_RequestCached = pCleanUpTest_RequestCached;














            var pS_ResolveParms = function( theCallback) {

                var aMethodName = "pS_ResolveParms";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_Configuration", null));
                    return  null;
                }




                var someParmsToResolve = [
                    this.PARM_REQUESTREPLY_USEPAYLOADHOLDER,

                    this.PARM_REQUESTCACHED_DOREADCACHE,
                    this.PARM_REQUESTCACHED_DOREQUESTREPLY,
                    this.PARM_REQUESTCACHED_DOWRITECACHE
                ];



                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return  false;
                }




                if( this._v_UsePayloadHolder == null) {

                    var aUsePayloadHolderResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_USEPAYLOADHOLDER];
                    if( aUsePayloadHolderResolution && aUsePayloadHolderResolution._v_Success) {
                        this._v_UsePayloadHolder = aUsePayloadHolderResolution._v_ParmValue;
                    }
                }





                if( this._v_DoReadCache == null) {

                    var aDoReadCacheResolution = aParmResolutionsDict[ this.PARM_REQUESTCACHED_DOREADCACHE];
                    if( aDoReadCacheResolution && aDoReadCacheResolution._v_Success) {
                        this._v_DoReadCache = aDoReadCacheResolution._v_ParmValue;
                    }
                }




                if( this._v_DoRequestReply == null) {

                    var aDoRequestReplyResolution = aParmResolutionsDict[ this.PARM_REQUESTCACHED_DOREQUESTREPLY];
                    if( aDoRequestReplyResolution && aDoRequestReplyResolution._v_Success) {
                        this._v_DoRequestReply = aDoRequestReplyResolution._v_ParmValue;
                    }
                }

                

                if( this._v_DoWriteCache == null) {

                    var aDoWriteCacheResolution = aParmResolutionsDict[ this.PARM_REQUESTCACHED_DOWRITECACHE];
                    if( aDoWriteCacheResolution && aDoWriteCacheResolution._v_Success) {
                        this._v_DoWriteCache = aDoWriteCacheResolution._v_ParmValue;
                    }
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, null,  null));

            };
            if( pS_ResolveParms){}/* CQT */
            aPrototype.pS_ResolveParms = pS_ResolveParms;




            











            var fDoFileAccessReadCacheCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    /* ACV OJOTODO 201511120502 Check for raised exceptions that must be considered and progressed with error treatment
                    Otherwise no need to check, as the following steps shall attempt to RequestReply and write file with the contents that failed to be read

                    if( !theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, theError, null));
                        return;
                    }

                    if( !this._v_ReadFileAccessTest) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!this._v_ReadFileAccessTest", null));
                        return;
                    }

                    if( !this._v_ReadFileAccessTest._v_FileReadBefore) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, " !this._v_ReadFileAccessTest._v_FileReadBefore", null));
                        return;                    }


                    if( !this._v_ReadFileAccessTest._v_FileContentsBefore) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!this._v_ReadFileAccessTest._v_FileContentsBefore", null));
                        return;
                    }

                    */

                    
                    if( aThis._v_ReadFileAccessTest && aThis._v_ReadFileAccessTest._v_FileReadBefore && !( typeof aThis._v_ReadFileAccessTest._v_FileContentsBefore == "undefined") && !( aThis._v_ReadFileAccessTest._v_FileContentsBefore == null)) {

                        aThis._v_RetrievedFromCache = true;
                    }



                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, null, null, null));


                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fDoFileAccessReadCacheCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fDoFileAccessReadCacheCallback){}/* CQT */
            aPrototype.fDoFileAccessReadCacheCallback = fDoFileAccessReadCacheCallback;








            var fExceptionDoFileAccessReadCacheHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    /* ACV OJOTODO 201511120502 Check for raised exceptions that must be considered and progressed with error treatment
                    Otherwise no need to check, as the following steps shall attempt to RequestReply and write file with the contents that failed to be read

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "null Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                    */



                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, null, null, null));


                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionDoFileAccessReadCacheHandler){}/* CQT */
            aPrototype.fExceptionDoFileAccessReadCacheHandler = fExceptionDoFileAccessReadCacheHandler;








            var pTryToDoFileAccessReadCache = function( theCallback) {
                var aMethodName = "pTryToDoFileAccessReadCache";


                var aFileAccessTitle = "ReadFileAccessFor-" + this._v_Title;

                var aSyntheticFileAccessConfiguration = this._v_Configuration.fNewSyntheticConfiguration(
                    aFileAccessTitle,
                    {
                        "_v_Runnable" :     true,
                        "_v_ExpectSuccess": true,
                        "_v_ForceError":    false,
                        "_v_ScheduleSubs":  false,
                        "_v_ConstructorModuleName": "@cmppath/common-test/fileaccess-test",
                        "_v_ConstructorName":       "FileAccess_Constructor",
                        "_v_MethodName":           "pF_FileAccess"
                    },
                    [
                        {
                            "checkWhen": "AFTER",
                            "checkNegate": false,
                            "checkKind": "EQ",
                            "checkOrigin": "TEST",
                            "checkSource": "_v_FileReadBefore",
                            "checkValue": true
                        }
                    ]
                );

                aSyntheticFileAccessConfiguration._v_OwnerConfiguration = this._v_Configuration;

                var aFileAccessParms = this.fResolvedParmValue(  theM_fileaccess_test.PARMSPREFIX_FILEACCESS);
                if( aFileAccessParms && ( typeof aFileAccessParms == "object")) {

                    var someFileAccessParmNames = Object.keys( aFileAccessParms);
                    var aNumFileAccessParmNames = someFileAccessParmNames.length;

                    for( var aFileAccessParmNameIdx=0; aFileAccessParmNameIdx < aNumFileAccessParmNames; aFileAccessParmNameIdx++) {

                        var aFileAccessParmName = someFileAccessParmNames[ aFileAccessParmNameIdx];
                        if( aFileAccessParmName) {
                            if( aFileAccessParms.hasOwnProperty( aFileAccessParmName)) {

                                var aFileAccessParmValue = aFileAccessParms[ aFileAccessParmName];

                                var aFullParmName = theM_fileaccess_test.PARMSPREFIX_FILEACCESS + theM_sentinels.TRAVERSALSTEPSSEPARATOR + aFileAccessParmName;

                                aSyntheticFileAccessConfiguration.pInjectConfigParm( aFullParmName, aFileAccessParmValue);
                            }
                        }
                    }
                }


                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_READCONTENTS,            true);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_CREATEFILE,              false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_TOUCH,                   false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_TRUNCATE,                false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_APPENDTO,                false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_WRITECONTENTS,           false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_UNLINK,                  false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_FAILIFEMPTY,             false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_FAILIFNOTEMPTY,          false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_FAILIFFILENOTEXISTS,     true);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_FAILIFFILEALREADYEXISTS, false);



                var aDirectoryParms = this.fResolvedParmValue(  theM_directory_test.PARMSPREFIX_DIRECTORY);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_directory_test.PARMSPREFIX_DIRECTORY, aDirectoryParms);




                this._v_ReadFileAccessTest = new theM_fileaccess_test.FileAccess_Constructor(
                    aFileAccessTitle,
                    aSyntheticFileAccessConfiguration,
                    this._v_Identifier,
                    this._v_Recorder);


                var aFileAccessMethod = this._v_ReadFileAccessTest.pF_FileAccess;

                var aBoundFileAccessMethod = aFileAccessMethod.bind( this._v_ReadFileAccessTest);

                aBoundFileAccessMethod( theCallback)

            };
            if( pTryToDoFileAccessReadCache){}/* CQT */
            aPrototype.pTryToDoFileAccessReadCache = pTryToDoFileAccessReadCache;










            var pS_DoFileAccessReadCache = function( theCallback) {
                var aMethodName = "pS_DoFileAccessReadCache";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_DoReadCache) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_DoFileAccessReadCache", null));
                    return;
                }


                var aExceptionHandler = this.fExceptionDoFileAccessReadCacheHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fDoFileAccessReadCacheCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    this.pTryToDoFileAccessReadCache( aCallback);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_DoFileAccessReadCache){}/* CQT */
            aPrototype.pS_DoFileAccessReadCache = pS_DoFileAccessReadCache;



















            var pS_RequestReply_IfNotReadCache = function( theCallback) {

                var aMethodName = "pS_RequestReply_IfNotReadCache";



                var aThis = this;


                if( !this._v_ReadFileAccessTest || !this._v_ReadFileAccessTest._v_FileReadBefore || ( typeof this._v_ReadFileAccessTest._v_FileContentsBefore == "undefined") || ( this._v_ReadFileAccessTest._v_FileContentsBefore == null)) {

                    if( this._v_DoRequestReply) {

                        
                        this.pS_RequestReply( function( theError) {

                            if(theError) {
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, null, null, null));
                                return;
                            }

                            if( ( ( typeof aThis._v_Reply == "undefined") || ( aThis._v_Reply == null)) && !aThis._v_StatusCodeHasBeenForgiven) {

                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, "( ( typeof aThis._v_Reply == 'undefined') || ( aThis._v_Reply == null)) && !aThis._v_StatusCodeHasBeenForgiven", null));
                                return;
                            }

                            aThis._v_RetrievedFromRequestReply = true;

                            theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, null, null, null));
                            return;

                        });

                    }
                    else {

                        this.pF_AsyncNextTick(
                            function() {
                                theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, null, "pS_RequestReply_IfNotReadCache NOTHASBEENREADFROMCACHE && !this._v_DoRequestReply", null));
                            }
                        );
                    }

                    return;
                }

                var aResponseBody = this._v_ReadFileAccessTest._v_FileContentsBefore;




                if( this.fHandleForceError( this.EVENTKIND_SENT,     theCallback, "pS_RequestReply_IfNotReadCache HASBEENREADFROMCACHE")) {
                    return;
                }

                if( this.fHandleForceError( this.EVENTKIND_RECEIVED, theCallback, "pS_RequestReply_IfNotReadCache HASBEENREADFROMCACHE")) {
                    return;
                }


                if( aResponseBody.fIsPayloadHolder && aResponseBody.fIsPayloadHolder()) {
                    aResponseBody = aResponseBody._v_Payload;
                }


                this._v_ReceivedError        = null;
                this._v_ReceivedStatusCode   = theM_sentinels.HTTPSTATUSCODE_OK;


                var aReceivedResponse    = {
                    "body":       aResponseBody,
                    "statusCode": this._v_ReceivedStatusCode
                };




                if( this._v_UsePayloadHolder) {

                    this._v_ReceivedResponse = new theM_payloadholder.PayloadHolder_Constructor( aReceivedResponse);

                    var aBodyPayloadHolder   = new theM_payloadholder.PayloadHolder_Constructor( aResponseBody);
                    this._v_ReceivedBody     = aBodyPayloadHolder;
                    this._v_Reply            = aBodyPayloadHolder;
                }
                else {

                    this._v_ReceivedResponse = aReceivedResponse;
                    this._v_ReceivedBody    = aResponseBody;
                    this._v_Reply           = aResponseBody;
                }



                this.pResolveParms_RequestReply( theCallback, aMethodName);


                var aResultParser       = this.fResultParser( theCallback, aMethodName);

                if( aResultParser && ( typeof aResultParser == "function")) {
                    var aParseResult = aResultParser( theCallback, null /* No Error */, aReceivedResponse);
                    if( !aParseResult) {
                        return;
                    }
                }


                if( this.fHandleForceError( this.EVENTKIND_STEP_OK, theCallback)) {
                   return;
                }

                
                this.pF_AsyncNextTick(
                    function() {
                        theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, null, "pS_RequestReply_IfNotReadCache HASBEENREADFROMCACHE", null));
                    }
                );

            };
            if( pS_RequestReply_IfNotReadCache){}/* CQT */
            aPrototype.pS_RequestReply_IfNotReadCache = pS_RequestReply_IfNotReadCache;


















            var fDoFileAccessWriteCacheCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, theError, null));
                        return;
                    }

                    if( !aThis._v_WriteFileAccessTest) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_WriteFileAccessTest", null));
                        return;
                    }

                    if( !aThis._v_WriteFileAccessTest._v_FileWritten) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, " !aThis._v_WriteFileAccessTest._v_FileWritten", null));
                        return;
                    }


                    aThis._v_WrittenToCache = true;


                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, null, null, null));


                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fDoFileAccessWriteCacheCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fDoFileAccessWriteCacheCallback){}/* CQT */
            aPrototype.fDoFileAccessWriteCacheCallback = fDoFileAccessWriteCacheCallback;








            var fExceptionDoFileAccessWriteCacheHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "null Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionDoFileAccessWriteCacheHandler){}/* CQT */
            aPrototype.fExceptionDoFileAccessWriteCacheHandler = fExceptionDoFileAccessWriteCacheHandler;








            var pTryToDoFileAccessWriteCache = function( theCallback) {
                var aMethodName = "pTryToDoFileAccessWriteCache";


                var aResponseBodyOrFileContents = this._v_Reply;
                if( aResponseBodyOrFileContents.fIsPayloadHolder && aResponseBodyOrFileContents.fIsPayloadHolder()) {
                    aResponseBodyOrFileContents = aResponseBodyOrFileContents._v_Payload;
                }


                if( ( typeof aResponseBodyOrFileContents == "undefined") || ( aResponseBodyOrFileContents == null)) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_Reply", null));
                    return;
                }



                var aFileAccessTitle = "WriteFileAccessFor-" + this._v_Title;

                var aSyntheticFileAccessConfiguration = this._v_Configuration.fNewSyntheticConfiguration(
                    aFileAccessTitle,
                    {
                        "_v_Runnable" :     true,
                        "_v_ExpectSuccess": true,
                        "_v_ForceError":    false,
                        "_v_ScheduleSubs":  false,
                        "_v_ConstructorModuleName": "@cmppath/common-test/fileaccess-test",
                        "_v_ConstructorName":       "FileAccess_Constructor",
                        "_v_MethodName":           "pF_FileAccess"
                    },
                    [
                        {
                            "checkWhen": "AFTER",
                            "checkNegate": false,
                            "checkKind": "EQ",
                            "checkOrigin": "TEST",
                            "checkSource": "_v_FileWritten",
                            "checkValue": true
                        }
                    ]
                );

                aSyntheticFileAccessConfiguration._v_OwnerConfiguration = this._v_Configuration;

                var aFileAccessParms = this.fResolvedParmValue(  theM_fileaccess_test.PARMSPREFIX_FILEACCESS);
                if( aFileAccessParms && ( typeof aFileAccessParms == "object")) {

                    var someFileAccessParmNames = Object.keys( aFileAccessParms);
                    var aNumFileAccessParmNames = someFileAccessParmNames.length;

                    for( var aFileAccessParmNameIdx=0; aFileAccessParmNameIdx < aNumFileAccessParmNames; aFileAccessParmNameIdx++) {

                        var aFileAccessParmName = someFileAccessParmNames[ aFileAccessParmNameIdx];
                        if( aFileAccessParmName) {
                            if( aFileAccessParms.hasOwnProperty( aFileAccessParmName)) {

                                var aFileAccessParmValue = aFileAccessParms[ aFileAccessParmName];

                                var aFullParmName = theM_fileaccess_test.PARMSPREFIX_FILEACCESS + theM_sentinels.TRAVERSALSTEPSSEPARATOR + aFileAccessParmName;

                                aSyntheticFileAccessConfiguration.pInjectConfigParm( aFullParmName, aFileAccessParmValue);
                            }
                        }
                    }
                }


                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_CONTENTSTOWRITE,         aResponseBodyOrFileContents);

                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_READCONTENTS,            false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_CREATEFILE,              true);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_TOUCH,                   false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_TRUNCATE,                true);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_APPENDTO,                false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_WRITECONTENTS,           true);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_UNLINK,                  false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_FAILIFEMPTY,             false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_FAILIFNOTEMPTY,          false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_FAILIFFILENOTEXISTS,     false);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_fileaccess_test.PARM_FILEACCESS_FAILIFFILEALREADYEXISTS, false);


                var aDirectoryParms = this.fResolvedParmValue(  theM_directory_test.PARMSPREFIX_DIRECTORY);
                aSyntheticFileAccessConfiguration.pInjectConfigParm( theM_directory_test.PARMSPREFIX_DIRECTORY, aDirectoryParms);



                this._v_WriteFileAccessTest = new theM_fileaccess_test.FileAccess_Constructor(
                    aFileAccessTitle,
                    aSyntheticFileAccessConfiguration,
                    this._v_Identifier,
                    this._v_Recorder);


                var aFileAccessMethod = this._v_WriteFileAccessTest.pF_FileAccess;

                var aBoundFileAccessMethod = aFileAccessMethod.bind( this._v_WriteFileAccessTest);

                aBoundFileAccessMethod( theCallback)

            };
            if( pTryToDoFileAccessWriteCache){}/* CQT */
            aPrototype.pTryToDoFileAccessWriteCache = pTryToDoFileAccessWriteCache;










            var pS_DoFileAccessWriteCache = function( theCallback) {
                var aMethodName = "pS_DoFileAccessWriteCache";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( !this._v_DoWriteCache) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_DoFileAccessWriteCache", null));
                    return;
                }


                if( this._v_RetrievedFromCache) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "this._v_RetrievedFromCache", null));
                    return;
                }



                var aResponseBodyOrFileContents = this._v_Reply;
                if( aResponseBodyOrFileContents.fIsPayloadHolder && aResponseBodyOrFileContents.fIsPayloadHolder()) {
                    aResponseBodyOrFileContents = aResponseBodyOrFileContents._v_Payload;
                }


                if( ( typeof aResponseBodyOrFileContents == "undefined") || ( aResponseBodyOrFileContents == null)) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, "!this._v_Reply", null));
                    return;
                }



                var aExceptionHandler = this.fExceptionDoFileAccessWriteCacheHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    })
                }


                try {

                    var aCallback = this.fDoFileAccessWriteCacheCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fScheduleManyCallback( theCallback)", null));
                        return;
                    }


                    this.pTryToDoFileAccessWriteCache( aCallback);

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pS_DoFileAccessWriteCache){}/* CQT */
            aPrototype.pS_DoFileAccessWriteCache = pS_DoFileAccessWriteCache;


















            var pF_RequestCached = function( theCallback) {
                var aMethodName = "pF_RequestCached";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_RequestCached){}/* CQT */
            aPrototype.pF_RequestCached = pF_RequestCached;







            var fOwnTestMethodToRun = function() {
                return this.pSS_RequestCached.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_RequestCached = function( theCallback) {
                var aMethodName = "pSS_RequestCached";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_ResolveParms.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_DoFileAccessReadCache.bind( this),
                    this.pS_RequestReply_IfNotReadCache.bind( this),
                    this.pS_VerifyExpectedResponse.bind( this),
                    this.pS_VerifyExpectedResponsePart.bind( this),
                    this.pS_DoFileAccessWriteCache.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_RequestCached){}/* CQT */
            aPrototype.pSS_RequestCached = pSS_RequestCached;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);


                var aSessionResultJSON = null;
                if( this._v_Session) {
                    aSessionResultJSON = this._v_Session.fToResultJSON( theCommonObjects, theAlready)
                }


                aResultJSON.session           = aSessionResultJSON;


                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            var fReleasePayloads_RequestCached = function( ) {

                var aReleasePayloads_Async_Result = this._v_SuperPrototype.fReleasePayloads_Async.apply( this);
                if( !aReleasePayloads_Async_Result) {
                    return false;
                }

                this._v_RequestData         = undefined;
                this._v_Multiparts          = undefined;
                this._v_Uploads             = undefined;

                if( this._v_Reply && ( typeof this._v_Reply == "object") && this._v_Reply.pReleasePayload && ( typeof this._v_Reply.pReleasePayload == "function")) {
                    this._v_Reply.pReleasePayload();
                }
                this._v_Reply               = undefined;


                return true;
            };
            if( fReleasePayloads_RequestCached){}/* CQT */
            aPrototype.fReleasePayloads_RequestCached = fReleasePayloads_RequestCached;







            return aPrototype;

        })();




        var RequestCached_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_requestreply_test.RequestReply_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_DoReadCache               = null;
            this._v_DoRequestReply            = null;
            this._v_DoWriteCache              = null;

            this._v_ReadFileAccessTest        = null;
            this._v_WriteFileAccessTest       = null;

            this._v_RetrievedFromCache        = null;
            this._v_RetrievedFromRequestReply = null;
            this._v_WrittenToCache            = null;



            this._pInit_RequestCached(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        RequestCached_Constructor.prototype = aRequestCached_Prototype;





        var RequestCached_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_requestreply_test.RequestReply_Prototype;

            this._v_Prototype = aRequestCached_Prototype;
            this._v_Type = null;

            this._v_DoReadCache               = null;
            this._v_DoRequestReply            = null;
            this._v_DoWriteCache              = null;

            this._v_ReadFileAccessTest        = null;
            this._v_WriteFileAccessTest       = null;

            this._v_RetrievedFromCache        = null;
            this._v_RetrievedFromRequestReply = null;
            this._v_WrittenToCache            = null;


        };
        RequestCached_SuperPrototypeConstructor.prototype = aRequestCached_Prototype;



        var aModule = {
            "RequestCached_Prototype": aRequestCached_Prototype,
            "RequestCached_Constructor": RequestCached_Constructor,
            "RequestCached_SuperPrototypeConstructor": RequestCached_SuperPrototypeConstructor
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

            var aM_requestreply_test  = require('./requestreply-test');
            var aM_overrider          = require('./overrider');
            var aM_sentinels          = require('./sentinels');
            var aM_fileaccess_test    = require('./fileaccess-test');
            var aM_directory_test     = require('./directory-test');
            var aM_payloadholder      = require('./payloadholder');


            return aMod_definer(
                aM_requestreply_test,
                aM_overrider,
                aM_sentinels,
                aM_fileaccess_test,
                aM_directory_test,
                aM_payloadholder
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./requestreply-test",
            "./overrider",
            "./sentinels",
            "./fileaccess-test",
            "./directory-test",
            "./payloadholder"
        ], function (
                theM_requestreply_test,
                theM_overrider,
                theM_sentinels,
                theM_fileaccess_test,
                theM_directory_test,
                theM_payloadholder
            ) {
            return aMod_definer(
                theM_requestreply_test,
                theM_overrider,
                theM_sentinels,
                theM_fileaccess_test,
                theM_directory_test,
                theM_payloadholder
            );
        });
    }


}());


