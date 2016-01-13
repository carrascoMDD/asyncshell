'use strict';

/*
 async-test.js
 Creado 201408110644
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
    var aMod_definer = function( theM_recorded_test,
                                 theM_forcedexception,
                                 theM_nextticker,
                                 theM_httprequest,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_payloadholder) {

        var ModuleName     = "async-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGREMOTEEXCEPTIONDETAILS = true;

            theToInit.LOGSOMETIPOS = true;



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

            theToInit.FORCEERRORKIND_EXCEPTION = "EXCEPTION";
            theToInit.FORCEERRORKIND_CALLBACK  = "CALLBACK";
            theToInit.FORCEERRORKINDS = [
                theToInit.FORCEERRORKIND_EXCEPTION,
                theToInit.FORCEERRORKIND_CALLBACK
            ];

            theToInit.TIPOEXCEPCION_EXCEPCIONJSON    = "ExcepcionJSON";
            theToInit.TIPOEXCEPCION_NOAUTORIZADOJSON = "NoAutorizado";


            theToInit.TIPOSEXCEPCIONES = [
                theToInit.TIPOEXCEPCION_EXCEPCIONJSON
            ];



            theToInit.EVENTKINDS_POR_TIPOEXCEPCION = { };
            theToInit.EVENTKINDS_POR_TIPOEXCEPCION[ theToInit.TIPOEXCEPCION_EXCEPCIONJSON]    = theM_recorded_test.EVENTKIND_REMOTEEXCEPTION;


            theToInit.EVENTKINDS_TOLOG_POR_TIPOEXCEPCION = { };
            theToInit.EVENTKINDS_TOLOG_POR_TIPOEXCEPCION[ theToInit.TIPOEXCEPCION_EXCEPCIONJSON]    = theM_recorded_test.EVENTKIND_REMOTEEXCEPTION;
            theToInit.EVENTKINDS_TOLOG_POR_TIPOEXCEPCION[ theToInit.TIPOEXCEPCION_NOAUTORIZADOJSON] = theM_recorded_test.EVENTKIND_NOAUTORIZADOEXCEPTION;
            theToInit.EVENTKINDS_TOLOG_POR_TIPOEXCEPCION = { };


            theToInit.EVENTKINDS_TOINFO_POR_TIPOEXCEPCION = { };
            theToInit.EVENTKINDS_TOINFO_POR_TIPOEXCEPCION[ theToInit.TIPOEXCEPCION_NOAUTORIZADOJSON] = theM_recorded_test.EVENTKIND_NOAUTORIZADOEXCEPTION;

            theToInit.METHOD_GET     = "GET";
            theToInit.METHOD_POST    = "POST";
            theToInit.METHOD_DELETE  = "DELETE";
            theToInit.METHOD_PUT     = "METHOD_PUT";
            theToInit.METHODS = [
                theToInit.METHOD_GET,
                theToInit.METHOD_POST,
                theToInit.METHOD_DELETE,
                theToInit.METHOD_PUT
            ];


            theToInit.CONTENTKIND_JSON   = "JSON";
            theToInit.CONTENTKIND_BINARY = "BINARY";
            theToInit.CONTENTKINDS   = [
                theToInit.CONTENTKIND_JSON,
                theToInit.CONTENTKIND_BINARY
            ];


            theToInit.CONTENTENCODING_UTF8      = "UTF-8";
            theToInit.CONTENTENCODING_DEFAULT   = theToInit.CONTENTENCODING_UTF8;
            theToInit.CONTENTENCODINGS = [
                theToInit.CONTENTENCODING_UTF8
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













        var aAsyncTest_Prototype = (function() {


            var aPrototype = new theM_recorded_test.RecordedTest_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_Module = null;

            aPrototype._v_SuperPrototype = theM_recorded_test.RecordedTest_Prototype;

            aPrototype._v_Type = "AsyncTest";

            aPrototype._v_Prototype_AsyncTest = aPrototype;


            aPrototype._v_UsedContentKind      = null;
            aPrototype._v_UsedContentEncoding  = null;
            aPrototype._v_UsedOptions          = null;
            aPrototype._v_UsedURL              = null;
            aPrototype._v_UsedRequestData      = null;
            aPrototype._v_UsedUploads          = null;
            aPrototype._v_UsedStatusCode       = null;
            aPrototype._v_UsedForgivableStatusCodes = null;
            aPrototype._v_ReceivedResponse     = null;
            aPrototype._v_ReceivedStatusCode   = null;
            aPrototype._v_ReceivedBody         = null;
            aPrototype._v_ReceivedError        = null;








            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Async( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Async = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Recorded.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_UsedContentKind      = null;
                this._v_UsedContentEncoding  = null;
                this._v_UsedOptions          = null;
                this._v_UsedURL              = null;
                this._v_UsedRequestData      = null;
                this._v_UsedUploads          = null;
                this._v_UsedStatusCode       = null;
                this._v_UsedForgivableStatusCodes = null;
                this._v_ReceivedResponse     = null;
                this._v_ReceivedStatusCode   = null;
                this._v_ReceivedBody         = null;
                this._v_ReceivedError        = null;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Async", this.EVENTKIND_INIT, null, null, null);}

                if( this._v_UsedContentKind){}/* CQT */
                if( this._v_UsedContentEncoding){}/* CQT */
                if( this._v_UsedOptions){}/* CQT */
                if( this._v_UsedURL){}/* CQT */
                if( this._v_UsedRequestData){}/* CQT */
                if( this._v_UsedUploads){}/* CQT */
                if( this._v_UsedStatusCode){}/* CQT */
                if( this._v_UsedForgivableStatusCodes){}/* CQT */
                if( this._v_ReceivedResponse){}/* CQT */
                if( this._v_ReceivedStatusCode){}/* CQT */
                if( this._v_ReceivedBody){}/* CQT */
                if( this._v_ReceivedError){}/* CQT */
            };
            if( _pInit_Async){}/* CQT */
            aPrototype._pInit_Async = _pInit_Async;



















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Async( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Async = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                 return;
                 }
                 this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_UsedContentKind      = undefined;
                this._v_UsedContentEncoding  = undefined;
                this._v_UsedOptions          = undefined;
                this._v_UsedURL              = undefined;
                this._v_UsedRequestData      = undefined;
                this._v_UsedUploads          = undefined;
                this._v_UsedStatusCode       = undefined;
                this._v_UsedForgivableStatusCodes = undefined;
                this._v_ReceivedStatusCode   = undefined;
                this._v_ReceivedError        = undefined;

                if( this._v_ReceivedResponse && ( typeof this._v_ReceivedResponse == "object") && this._v_ReceivedResponse.pReleasePayload && ( typeof this._v_ReceivedResponse.pReleasePayload == "function")) {
                    this._v_ReceivedResponse.pReleasePayload();
                }
                this._v_ReceivedResponse     = undefined;

                if( this._v_ReceivedBody && ( typeof this._v_ReceivedBody == "object") && this._v_ReceivedBody.pReleasePayload && ( typeof this._v_ReceivedBody.pReleasePayload == "function")) {
                    this._v_ReceivedBody.pReleasePayload();
                }
                this._v_ReceivedBody         = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Recorded.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Async){}/* CQT */
            aPrototype._pRelease_Async = _pRelease_Async;











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

                this.pCleanUpTest_Async( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Async = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_UsedContentKind      = undefined;
                    this._v_UsedContentEncoding  = undefined;
                    this._v_UsedOptions          = undefined;
                    this._v_UsedURL              = undefined;
                    this._v_UsedRequestData      = undefined;
                    this._v_UsedUploads          = undefined;
                    this._v_ReceivedStatusCode   = undefined;
                    this._v_ReceivedError        = undefined;

                    if( this._v_ReceivedResponse && ( typeof this._v_ReceivedResponse == "object") && this._v_ReceivedResponse.pReleasePayload && ( typeof this._v_ReceivedResponse.pReleasePayload == "function")) {
                        this._v_ReceivedResponse.pReleasePayload();
                    }
                    this._v_ReceivedResponse     = undefined;

                    if( this._v_ReceivedBody && ( typeof this._v_ReceivedBody == "object") && this._v_ReceivedBody.pReleasePayload && ( typeof this._v_ReceivedBody.pReleasePayload == "function")) {
                        this._v_ReceivedBody.pReleasePayload();
                    }
                    this._v_ReceivedBody         = undefined;

                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Recorded.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Async){}/* CQT */
            aPrototype.pCleanUpTest_Async = pCleanUpTest_Async;




















            var fHandleForceError = function( theWhenNow, theCallback, theCauseRecord) {
                if( !theWhenNow) {
                    return false;
                }

                if( !this._v_Configuration) {
                    return false;
                }

                var aResolutionsDict = this._v_Configuration.fFieldResolutionsByName( this._v_Configuration.QUERY_FIELDS_FORCEEEROR);

                var aForceErrorResolution = aResolutionsDict[ "_v_ForceError"];
                if( !aForceErrorResolution || !aForceErrorResolution._v_Success || !aForceErrorResolution._v_FieldValue) {
                    return false;
                }

                var aForceErrorDetailResolution = aResolutionsDict[ "_v_ForceErrorDetail"];
                if( aForceErrorDetailResolution){}/* CQT */


                var aForceErrorKindResolution = aResolutionsDict[ "_v_ForceErrorKind"];
                if( !aForceErrorKindResolution || !aForceErrorKindResolution._v_Success || !aForceErrorKindResolution._v_FieldValue) {
                    return false;
                }

                if( this.FORCEERRORKINDS.indexOf( aForceErrorKindResolution._v_FieldValue) < 0) {
                    return false;
                }


                var aForceErrorWhenResolution = aResolutionsDict[ "_v_ForceErrorWhen"];




                var aMustForceError = false;
                var aWhen = aForceErrorWhenResolution._v_FieldValue;
                if( !aWhen) {
                    aMustForceError = true;
                    aWhen = "";
                }

                if( !aMustForceError) {
                    if( typeof aWhen == "string") {
                        if( theWhenNow == aWhen) {
                            aMustForceError = true;
                        }
                    }
                    else {
                        if( aWhen.indexOf && ( aWhen.indexOf( theWhenNow) >= 0)) {
                            aMustForceError = true;
                        }
                    }
                }
                if( !aMustForceError) {
                    return false;
                }


                var aErrorMessage = "FORCE " + aForceErrorKindResolution._v_FieldValue + " WHEN " + aWhen + " NOW " + theWhenNow;

                if( aForceErrorKindResolution._v_FieldValue == this.FORCEERRORKIND_CALLBACK) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, null, this.EVENTKIND_FORCEERROR_CALLBACK, null, aErrorMessage, theCauseRecord);
                    theCallback( aRecord);
                    return true;
                }

                if( aForceErrorKindResolution._v_FieldValue == this.FORCEERRORKIND_EXCEPTION) {
                    var aRecord2 = this.fRecord( this._v_Type, this._v_Id, this, null, this.EVENTKIND_FORCEERROR_EXCEPTION, null, aErrorMessage, theCauseRecord);
                    throw new theM_forcedexception.ForcedException_Constructor( aRecord2);
                }

                return false;
            };
            if( fHandleForceError){}/* CQT */
            aPrototype.fHandleForceError = fHandleForceError;












            var pS_AsyncRequestGet = function( theCallback,
                                               theMethodName,
                                               theLazyInitializer,
                                               theURLpath,
                                               theRequestData,
                                               theRequiredStatusCode,
                                               theResultParser,
                                               theExpectedExceptions,
                                               theContentKind,
                                               theContentEncoding,
                                               theOptions,
                                               theForgivableStatusCodes,
                                               theStatusCodeHasBeenForgivenFunction) {

                this.pReceivedTestCallbackArg( theCallback, theMethodName);

                return this.pS_AsyncRequestGetOrPost(
                    this.METHOD_GET,
                    theCallback,
                    theMethodName + "-pS_AsyncRequestGet",
                    theLazyInitializer,
                    theURLpath,
                    theRequestData,
                    null,
                    null,
                    theRequiredStatusCode,
                    theResultParser,
                    theExpectedExceptions,
                    theContentKind,
                    theContentEncoding,
                    theOptions,
                    theForgivableStatusCodes,
                    theStatusCodeHasBeenForgivenFunction
                )
            };
            if( pS_AsyncRequestGet){}/* CQT */
            aPrototype.pS_AsyncRequestGet = pS_AsyncRequestGet;










            var pS_AsyncRequestPost = function( theCallback,
                                                theMethodName,
                                                theLazyInitializer,
                                                theURLpath,
                                                theRequestData,
                                                theRequiredStatusCode,
                                                theResultParser,
                                                theExpectedExceptions,
                                                theContentKind,
                                                theContentEncoding,
                                                theOptions,
                                                theForgivableStatusCodes,
                                                theStatusCodeHasBeenForgivenFunction) {

                return this.pS_AsyncRequestGetOrPost(
                    this.METHOD_POST,
                    theCallback,
                    theMethodName + "-pS_AsyncRequestPost",
                    theLazyInitializer,
                    theURLpath,
                    theRequestData,
                    null,
                    null,
                    theRequiredStatusCode,
                    theResultParser,
                    theExpectedExceptions,
                    theContentKind,
                    theContentEncoding,
                    theOptions,
                    theForgivableStatusCodes,
                    theStatusCodeHasBeenForgivenFunction
                )
            };
            if( pS_AsyncRequestPost){}/* CQT */
            aPrototype.pS_AsyncRequestPost = pS_AsyncRequestPost;









            var pS_AsyncRequestMethodFromLazyInitializer = function( theCallback,
                                                                     theMethodName,
                                                                     theLazyInitializer,
                                                                     theURLpath,
                                                                     theRequestData,
                                                                     theFormMultiparts,
                                                                     theFormUploads,
                                                                     theRequiredStatusCode,
                                                                     theResultParser,
                                                                     theExpectedExceptions,
                                                                     theContentKind,
                                                                     theContentEncoding,
                                                                     theOptions,
                                                                     theForgivableStatusCodes,
                                                                     theStatusCodeHasBeenForgivenFunction) {


                if( theLazyInitializer && ( typeof theLazyInitializer == "function")) {
                    var aRequestMethod = theLazyInitializer( theCallback);
                    if( !aRequestMethod) {
                        return;
                    }
                }


                var aRequestMethodUpper = aRequestMethod.toUpperCase();
                if( !( this.METHODS.indexOf( aRequestMethodUpper) >= 0)) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_STEP_FAIL, null, "!( this.METHODS.indexOf( aRequestMethodUpper) >= 0)", aRequestMethodUpper));
                    return;
                }

                return this.pS_AsyncRequestGetOrPost(
                    aRequestMethodUpper,
                    theCallback,
                    theMethodName + "-pS_AsyncRequestMethodFromLazyInitializer",
                    theLazyInitializer,
                    theURLpath,
                    theRequestData,
                    theFormMultiparts,
                    theFormUploads,
                    theRequiredStatusCode,
                    theResultParser,
                    theExpectedExceptions,
                    theContentKind,
                    theContentEncoding,
                    theOptions,
                    theForgivableStatusCodes,
                    theStatusCodeHasBeenForgivenFunction
                )
            };
            if( pS_AsyncRequestMethodFromLazyInitializer){}/* CQT */
            aPrototype.pS_AsyncRequestMethodFromLazyInitializer = pS_AsyncRequestMethodFromLazyInitializer;









            var pS_AsyncRequestGetOrPost = function( theRequestMethodName,
                                                     theCallback,
                                                     theMethodName,
                                                     theLazyInitializer,
                                                     theURLpath,
                                                     theRequestData,
                                                     theFormMultiparts,
                                                     theFormUploads,
                                                     theRequiredStatusCode,
                                                     theResultParser,
                                                     theExpectedExceptions,
                                                     theContentKind,
                                                     theContentEncoding,
                                                     theOptions,
                                                     theForgivableStatusCodes,
                                                     theStatusCodeHasBeenForgivenFunction) {

                var aMethodName = "pS_AsyncRequestGetOrPost";

                this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_BEGINASYNC, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, theMethodName);


                try {

                    if( theLazyInitializer && ( typeof theLazyInitializer == "function")) {
                        var aLazyResult = theLazyInitializer( theCallback);
                        if( !aLazyResult) {
                            return;
                        }
                    }




                    var aUsedOptions = { };


                    var aRequestMethodUpper = theRequestMethodName.toUpperCase();
                    if( !( this.METHODS.indexOf( theRequestMethodName) >= 0)) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_STEP_FAIL, null, "!( this.METHODS.indexOf( aRequestMethodUpper) >= 0)", aRequestMethodUpper));
                        return;
                    }
                    aUsedOptions[ "method"] = aRequestMethodUpper;



                    var anOptions = theOptions;
                    if( anOptions && ( typeof anOptions == "function")) {
                        anOptions = anOptions( theCallback);
                    }

                    if( anOptions && ( typeof anOptions == "object")) {

                        var someOptionsKeys = Object.keys( anOptions);
                        var aNumOptionsKeys = someOptionsKeys.length;
                        if( aNumOptionsKeys) {
                            for( var aKeyIdx=0; aKeyIdx < aNumOptionsKeys; aKeyIdx++) {
                                var aKey = someOptionsKeys[ aKeyIdx];
                                if( aKey) {
                                    if( anOptions.hasOwnProperty ( aKey)) {
                                        var aValue = anOptions[ aKey];
                                        if( aValue){}/* CQT */
                                        aUsedOptions[ aKey] = aValue;
                                    }
                                }
                            }
                        }
                    }





                    var aURLpath = theURLpath;

                    if( aURLpath && ( typeof aURLpath == "function")) {
                        aURLpath = aURLpath( theCallback);
                        if( !aURLpath) {
                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_STEP_FAIL, null, "!aURLpath", null));
                            return;
                        }
                    }
                    aUsedOptions[ "url"] = aURLpath;




                    var aRequestData = theRequestData;
                    if( aRequestData && ( typeof aRequestData == "function")) {
                        aRequestData = aRequestData( theCallback);
                    }

                    if( aRequestData) {
                        var aForm = aRequestData[ "form"];
                        if( aForm) {
                            aUsedOptions[ "form"] = aForm;
                        }

                        var aHeaders = aRequestData[ "headers"];
                        if( aHeaders) {
                            aUsedOptions[ "headers"] = aHeaders;
                        }


                        var aIsJSON = aRequestData[ "json"];
                        if( aIsJSON) {
                            aUsedOptions[ "json"] = true;
                        }
                    }


                    var someFormMultiparts = theFormMultiparts;
                    if( someFormMultiparts && ( typeof someFormMultiparts == "function")) {
                        someFormMultiparts = someFormMultiparts( theCallback);
                    }


                    var someFormUploads = theFormUploads;
                    if( someFormUploads && ( typeof someFormUploads == "function")) {
                        someFormUploads = someFormUploads( theCallback);
                    }


                    var someExpectedExceptions = theExpectedExceptions;
                    if( someExpectedExceptions && ( typeof someExpectedExceptions == "function")) {
                        someExpectedExceptions = someExpectedExceptions( theCallback);
                    }


                    var aContentKind = theContentKind;
                    if( aContentKind && ( typeof aContentKind == "function")) {
                        aContentKind = aContentKind( theCallback);
                    }

                    if( aContentKind == this.CONTENTKIND_JSON) {
                        aUsedOptions[ "json"] = true;
                    }




                    var aContentEncoding = theContentEncoding;
                    if( aContentEncoding && ( typeof aContentEncoding == "function")) {
                        aContentEncoding = aContentEncoding( theCallback);
                    }

                    if( aContentKind == this.CONTENTKIND_BINARY) {
                        aUsedOptions[ "encoding"] = null;
                        aUsedOptions[ "json"] = false;
                    }
                    else {
                        if( aContentEncoding && !( aContentEncoding ==  this.CONTENTENCODING_DEFAULT)) {
                            aUsedOptions[ "encoding"] = aContentEncoding;
                        }
                    }





                    this._v_UsedContentKind     = aContentKind;
                    this._v_UsedContentEncoding = aContentEncoding;
                    this._v_UsedOptions         = aUsedOptions;
                    this._v_UsedURL             = aURLpath;
                    this._v_UsedRequestData     = aRequestData;

                    this._v_UsedUploads         = null;
                    this._v_ReceivedResponse    = null;
                    this._v_ReceivedStatusCode  = null;
                    this._v_ReceivedBody        = null;
                    this._v_ReceivedError       = null;



                    var aSentRecord = this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_SENT, aURLpath, null, theRequestMethodName);

                    if( this.fHandleForceError( this.EVENTKIND_SENT, theCallback, aSentRecord)) {
                        return;
                    }


                    var aRequestGetOrPostCallback = null;

                    if( !( aContentKind == this.CONTENTKIND_BINARY)) {
                        aRequestGetOrPostCallback = this.fRequestGetOrPostCallback_NoBinary( theCallback, theMethodName, theRequiredStatusCode, theResultParser, theForgivableStatusCodes, theStatusCodeHasBeenForgivenFunction, someExpectedExceptions);
                    }
                    else {
                        aRequestGetOrPostCallback = this.fRequestGetOrPostCallback_Binary(   theCallback, theMethodName, theRequiredStatusCode, theResultParser, theForgivableStatusCodes, theStatusCodeHasBeenForgivenFunction, someExpectedExceptions);
                    }



                    if( !aRequestGetOrPostCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_STEP_FAIL, aURLpath, "!aRequestGetOrPostCallback", theRequestMethodName));
                        return;
                    }



                    /* *************************+
                     Send request and receive reply now
                     */
                    var aRequest = theM_httprequest.pHttpRequest(
                        aUsedOptions,
                        aRequestGetOrPostCallback
                    );




                    if( someFormUploads || someFormMultiparts) {

                        var aFormMultipartsAndUploads = aRequest.form();
                        if( aFormMultipartsAndUploads) {

                            if( someFormMultiparts) {

                                var aNumFormMultiparts = someFormMultiparts.length;
                                for( var aFormMultipartIdx=0; aFormMultipartIdx < aNumFormMultiparts; aFormMultipartIdx++) {
                                    var aFormMultipart = someFormMultiparts[ aFormMultipartIdx];
                                    if( aFormMultipart) {

                                        var aParmName = aFormMultipart[ "parmName"];
                                        if( aParmName) {

                                            var aParmValue = aFormMultipart[ "parmValue"];

                                            if( !( typeof aParmValue == "undefined")) {

                                                aParmValue = this.fUnwrapPayloadFromHolder( aParmValue);

                                                var aContentType = aFormMultipart[ "contentType"];
                                                if( aContentType) {

                                                    aFormMultipartsAndUploads.append(
                                                        aParmName,
                                                        aParmValue,
                                                        {
                                                            contentType: aContentType
                                                        }
                                                    );
                                                }
                                                else {
                                                    aFormMultipartsAndUploads.append(
                                                        aParmName,
                                                        aParmValue
                                                    );

                                                    /*
                                                    console.log( JSON.stringify( { "MULTIPART": true, "aParmName": aParmName}));
                                                     */

                                                }
                                            }
                                        }
                                    }
                                }
                            }


                            /* ACV OJO 201511090801 removed from condition  || someFormMultiparts */
                            if( someFormUploads) {

                                var aNumFormUploads = someFormUploads.length;
                                for( var aFormUploadIdx=0; aFormUploadIdx < aNumFormUploads; aFormUploadIdx++) {
                                    var aFormUpload = someFormUploads[ aFormUploadIdx];
                                    if( aFormUpload) {

                                        var aParmNameUpload = aFormUpload[ "parmName"];
                                        if( aParmNameUpload) {

                                            var aFileData = aFormUpload[ "fileData"];
                                            if( !( typeof aFileData == "undefined")) {

                                                aFileData = this.fUnwrapPayloadFromHolder( aFileData);

                                                var aFileName    = aFormUpload[ "filename"];
                                                if( aFileName) {
                                                    aFileName = this.fParmValueReplacement( aFileName);
                                                }

                                                var aContentTypeUpload = aFormUpload[ "contentType"];

                                                aFormMultipartsAndUploads.append(
                                                    aParmNameUpload,
                                                    aFileData,
                                                    {
                                                        filename: aFileName,
                                                        contentType: aContentTypeUpload
                                                    }
                                                );

                                                /*
                                                console.log( JSON.stringify( { "UPLOAD": true, "aParmNameUpload": aParmNameUpload, "aFileName": aFileName, "aContentTypeUpload": aContentTypeUpload}));
                                                 */
                                            }
                                        }
                                    }
                                }
                            }

                        }
                    }

                    this._v_UsedUploads      = someFormUploads;
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, aRecord, theRequestMethodName));
                }
            };
            if( pS_AsyncRequestGetOrPost){}/* CQT */
            aPrototype.pS_AsyncRequestGetOrPost = pS_AsyncRequestGetOrPost;










            var fRequestGetOrPostCallback_NoBinary = function( theCallback,
                                                               theMethodName,
                                                               theRequiredStatusCode,
                                                               theResultParser,
                                                               theForgivableStatusCodes,
                                                               theStatusCodeHasBeenForgivenFunction,
                                                               theExpectedExceptions) {


                var aThis = this;

                var aRequestGetOrPostCallback_NoBinary = function ( theError, theResponse) {

                    try {

                        var aUsePayloadHolder = aThis.fUsePayloadHolder && aThis.fUsePayloadHolder();
                        if( aUsePayloadHolder) {

                            this._v_ReceivedResponse = new theM_payloadholder.PayloadHolder_Constructor( theResponse);
                        }
                        else {
                            aThis._v_ReceivedResponse     = theResponse;
                        }

                        aThis._v_ReceivedError        = theError;
                        aThis._v_ReceivedStatusCode   = null;

                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RECEIVED, null, null, null);

                        if( aThis.fHandleForceError( aThis.EVENTKIND_RECEIVED, theCallback)) {
                            return;
                        }


                        if( theError) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "theError", theError));
                            return;
                        }

                        if( !theResponse) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                            return;
                        }



                        if( aUsePayloadHolder) {

                            aThis._v_ReceivedBody = new theM_payloadholder.PayloadHolder_Constructor( theResponse.body);
                        }
                        else {
                            aThis._v_ReceivedBody     = theResponse.body;
                        }


                        aThis._v_ReceivedBody         = theResponse.body;
                        aThis._v_ReceivedStatusCode   = theResponse.statusCode;



                        /* ACV OJO 201502061743  TODO manejar el caso de vTipo NoAutenticado y status 403.
                         */

                        var aBody = theResponse.body;

                        if( aBody) {

                            var aTipo = aBody[ "vTipo"];

                            if( aTipo) {

                                var aRecord = null;
                                var anEventKind = aThis.EVENTKINDS_TOLOG_POR_TIPOEXCEPCION[ aTipo];
                                if( anEventKind) {
                                    if( aThis.LOGSOMETIPOS) {
                                        aThis.pToConsoleLikeEvent( "vTipo=" + aTipo + "; EVENTKIND=" + anEventKind + " aBody=" + aThis.fModConversions().fConvertValueToJSONstr( aBody));
                                    }

                                    aRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, anEventKind, aBody, "typeof theResponse.body.vTipo in this.EVENTKINDS_TOLOG_POR_TIPOEXCEPCION");
                                }


                                if( aThis.TIPOSEXCEPCIONES.indexOf( aTipo) >= 0) {

                                    var anEventKindTipoExcepcion = aThis.EVENTKINDS_POR_TIPOEXCEPCION[ aTipo];
                                    if( !anEventKindTipoExcepcion) {
                                        anEventKindTipoExcepcion = aThis.EVENTKIND_REMOTEEXCEPTION;
                                    }

                                    if( aThis.LOGREMOTEEXCEPTIONDETAILS) {
                                        aThis.pToConsoleLikeEvent( "REMOTEEXCEPTION details; vTipo=" + aTipo + "; EVENTKIND=" + anEventKindTipoExcepcion + " aBody=" + aThis.fModConversions().fConvertValueToJSONstr( aBody));
                                    }

                                    if( !aRecord) {
                                        aRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, anEventKindTipoExcepcion, aBody, "typeof theResponse.body.vTipo in this.TIPOSEXCEPCIONES", null);
                                    }

                                    var anExceptionIsExpected = false;

                                    if( theExpectedExceptions) {

                                        if( typeof theExpectedExceptions == "string") {

                                            if( theExpectedExceptions == theM_sentinels.ANYEXCEPTION) {
                                                anExceptionIsExpected = true;
                                            }
                                            else {
                                                if( aTipo == theExpectedExceptions) {
                                                    anExceptionIsExpected = true;
                                                }
                                            }
                                        }
                                        else {
                                            if( ( typeof theExpectedExceptions == "object") && !( typeof theExpectedExceptions.length == "undefined")) {
                                                if( theExpectedExceptions.indexOf( aTipo) >= 0) {
                                                    anExceptionIsExpected = true;
                                                }
                                            }
                                        }
                                    }


                                    if( !anExceptionIsExpected) {
                                        theCallback( aRecord);
                                        return;
                                    }
                                }
                                else {

                                    var anEventKindToInfo = aThis.EVENTKINDS_TOINFO_POR_TIPOEXCEPCION[ aTipo];
                                    if( anEventKindToInfo) {
                                        if( !aRecord) {
                                            aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, anEventKindToInfo, aBody, "typeof theResponse.body.vTipo in this.EVENTKINDS_TOINFO_POR_TIPOEXCEPCION", aTipo);
                                        }
                                    }
                                }
                            }
                        }






                        var aRequiredStatusCode = theRequiredStatusCode;
                        if( aRequiredStatusCode && ( typeof aRequiredStatusCode == "function")) {
                            aRequiredStatusCode = aRequiredStatusCode();
                            aThis._v_UsedStatusCode = aRequiredStatusCode;
                        }

                        var aForgivableStatusCodesStr = "undefined";
                        var aForgivableStatusCodes = theForgivableStatusCodes;
                        if( aForgivableStatusCodes && ( typeof aForgivableStatusCodes == "function")) {
                            aForgivableStatusCodes = aForgivableStatusCodes();
                            aThis._v_UsedForgivableStatusCodes = aForgivableStatusCodes;
                            aForgivableStatusCodesStr = JSON.stringify( aForgivableStatusCodes);
                        }


                        if( !( typeof aRequiredStatusCode == "undefined") && !( aRequiredStatusCode == null) && ( typeof aRequiredStatusCode == "number")) {
                            if ( !( theResponse.statusCode == aRequiredStatusCode)) {

                                if ( ( aForgivableStatusCodes == null) || !( typeof aForgivableStatusCodes == "object")
                                    || (typeof aForgivableStatusCodes.length == "undefined") || ( aForgivableStatusCodes.indexOf( theResponse.statusCode) < 0)) {

                                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RESPONSESTATUSCODEFAILED, theResponse.statusCode, "!( theResponse.statusCode == aRequiredStatusCode) && ( aForgivableStatusCodes.indexOf( theResponse.statusCode) < 0)", aRequiredStatusCode);

                                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, theResponse.statusCode, "!( theResponse.statusCode == aRequiredStatusCode) &&  ( aForgivableStatusCodes.indexOf( theResponse.statusCode) < 0) :  theResponse.statusCode=" + theResponse.statusCode + "; aRequiredStatusCode=" + aRequiredStatusCode  + "; aForgivableStatusCodesStr=" + aForgivableStatusCodesStr));
                                    return;
                                }
                                else {

                                    aThis.pHasBeenSkipped( aThis.EVENTKIND_RESPONSESTATUSCODEFORGIVABLE, theResponse.statusCode);


                                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RESPONSESTATUSCODEFORGIVABLE, theResponse.statusCode, "aForgivableStatusCodesStr'", aForgivableStatusCodesStr);

                                    if( theStatusCodeHasBeenForgivenFunction && ( typeof theStatusCodeHasBeenForgivenFunction == "function")) {
                                        theStatusCodeHasBeenForgivenFunction( theResponse.statusCode, aForgivableStatusCodes);
                                    }

                                    aThis.pF_AsyncNextTick(
                                        function() {
                                            theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_OK, null, null, null));
                                        }
                                    );
                                    return;
                                }
                            }
                        }


                        if( typeof aBody == "undefined") {

                            aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_NORESPONSEFAILED, null, "typeof aBody == 'undefined'", null);

                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "typeof theResponse.body == 'undefined'", null));
                            return;
                        }




                        if( theResultParser && ( typeof theResultParser == "function")) {
                            var aParseResult = theResultParser( theCallback, theError, theResponse);
                            if( !aParseResult) {
                                return;
                            }
                        }

                        if( !aThis.fHandleForceError( aThis.EVENTKIND_STEP_OK, theCallback)) {
                            aThis.pF_AsyncNextTick(
                                function() {
                                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_OK, null, null, null));
                                }
                            );
                        }
                    }
                    catch( anException) {
                        var aExceptionDetail = aThis.fExceptionDetail( anException);
                        var aRecordException = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, aRecordException, null));
                    }
                };

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aRequestGetOrPostCallback_NoBinary, "fRequestGetOrPostCallback_NoBinary", theCallback, theMethodName);

                return aWrappedCallback;

            };
            if( fRequestGetOrPostCallback_NoBinary){}/* CQT */
            aPrototype.fRequestGetOrPostCallback_NoBinary = fRequestGetOrPostCallback_NoBinary;









            var fRequestGetOrPostCallback_Binary = function( theCallback,
                                                             theMethodName,
                                                             theRequiredStatusCode,
                                                             theResultParser,
                                                             theForgivableStatusCodes,
                                                             theStatusCodeHasBeenForgivenFunction,
                                                             theExpectedExceptions) {


                var aThis = this;

                var aRequestGetOrPostCallback_Binary = function ( theError, theResponse) {

                    try {

                        var aUsePayloadHolder = aThis.fUsePayloadHolder && aThis.fUsePayloadHolder();
                        if( aUsePayloadHolder) {

                            aThis._v_ReceivedResponse = new theM_payloadholder.PayloadHolder_Constructor( theResponse);
                        }
                        else {
                            aThis._v_ReceivedResponse     = theResponse;
                        }

                        aThis._v_ReceivedError        = theError;
                        aThis._v_ReceivedStatusCode   = null;

                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RECEIVED, null, null, null);

                        if( aThis.fHandleForceError( aThis.EVENTKIND_RECEIVED, theCallback)) {
                            return;
                        }


                        if( theError) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "theError", theError));
                            return;
                        }

                        if( !theResponse) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                            return;
                        }

                        if( aUsePayloadHolder) {

                            aThis._v_ReceivedBody = new theM_payloadholder.PayloadHolder_Constructor( theResponse.body);
                        }
                        else {
                            aThis._v_ReceivedBody     = theResponse.body;
                        }

                        aThis._v_ReceivedStatusCode   = theResponse.statusCode;


                        /* ACV OJO 201502061743  TODO manejar el caso de vTipo NoAutenticado y status 403.
                         */

                        var aRequiredStatusCode = theRequiredStatusCode;
                        if( aRequiredStatusCode && ( typeof aRequiredStatusCode == "function")) {
                            aRequiredStatusCode = aRequiredStatusCode();
                            aThis._v_UsedStatusCode = aRequiredStatusCode;
                        }

                        var aForgivableStatusCodesStr = "undefined";
                        var aForgivableStatusCodes = theForgivableStatusCodes;
                        if( aForgivableStatusCodes && ( typeof aForgivableStatusCodes == "function")) {
                            aForgivableStatusCodes = aForgivableStatusCodes();
                            aThis._v_UsedForgivableStatusCodes = aForgivableStatusCodes;
                            aForgivableStatusCodesStr = JSON.stringify( aForgivableStatusCodes);
                        }


                        if( !( typeof aRequiredStatusCode == "undefined") && !( aRequiredStatusCode == null) && ( typeof aRequiredStatusCode == "number")) {
                            if ( !( theResponse.statusCode == aRequiredStatusCode)) {

                                if ( ( aForgivableStatusCodes == null) || !( typeof aForgivableStatusCodes == "object")
                                    || (typeof aForgivableStatusCodes.length == "undefined") || ( aForgivableStatusCodes.indexOf( theResponse.statusCode) < 0)) {

                                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RESPONSESTATUSCODEFAILED, theResponse.statusCode, "!( theResponse.statusCode == aRequiredStatusCode) && ( aForgivableStatusCodes.indexOf( theResponse.statusCode) < 0)", aRequiredStatusCode);

                                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, theResponse.statusCode, "!( theResponse.statusCode == aRequiredStatusCode) &&  ( aForgivableStatusCodes.indexOf( theResponse.statusCode) < 0) :  theResponse.statusCode=" + theResponse.statusCode + "; aRequiredStatusCode=" + aRequiredStatusCode  + "; aForgivableStatusCodesStr=" + aForgivableStatusCodesStr));
                                    return;
                                }
                                else {
                                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RESPONSESTATUSCODEFORGIVABLE, theResponse.statusCode, "aForgivableStatusCodesStr'", aForgivableStatusCodesStr);

                                    if( theStatusCodeHasBeenForgivenFunction && ( typeof theStatusCodeHasBeenForgivenFunction == "function")) {
                                        theStatusCodeHasBeenForgivenFunction( theResponse.statusCode, aForgivableStatusCodes);
                                    }

                                    aThis.pF_AsyncNextTick(
                                        function() {
                                            theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_OK, null, null, null));
                                        }
                                    );
                                    return;
                                }
                            }
                        }


                        if( typeof aThis._v_ReceivedBody == "undefined") {

                            aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_NORESPONSEFAILED, null, "typeof aBody == 'undefined'", null);

                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "typeof theResponse.body == 'undefined'", null));
                            return;
                        }




                        if( theResultParser && ( typeof theResultParser == "function")) {
                            var aParseResult = theResultParser( theCallback, theError, theResponse);
                            if( !aParseResult) {
                                return;
                            }
                        }

                        if( !aThis.fHandleForceError( aThis.EVENTKIND_STEP_OK, theCallback)) {
                            aThis.pF_AsyncNextTick(
                                function() {
                                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_OK, null, null, null));
                                }
                            );
                        }
                    }
                    catch( anException) {
                        var aExceptionDetail = aThis.fExceptionDetail( anException);
                        var aRecordException = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, aRecordException, null));
                    }
                };

                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aRequestGetOrPostCallback_Binary, "fRequestGetOrPostCallback_Binary", theCallback, theMethodName);

                return aWrappedCallback;

            };
            if( fRequestGetOrPostCallback_Binary){}/* CQT */
            aPrototype.fRequestGetOrPostCallback_Binary = fRequestGetOrPostCallback_Binary;








            var pF_AsyncNextTick = function( theFunction, theExceptionHandler) {

                this.pF_AsyncNextTick_ExceptionWrappedTwice(  theFunction, theExceptionHandler);
            };
            if( pF_AsyncNextTick){}/* CQT */
            aPrototype.pF_AsyncNextTick = pF_AsyncNextTick;






            var pF_AsyncNextTick_ExceptionWrappedTwice = function( theFunction, theExceptionHandler) {

                try {
                    theM_nextticker.pNextTick( function() {
                        try {
                            theFunction();
                        }
                        catch( anException) {
                            if( theExceptionHandler) {
                                theExceptionHandler( anException);
                            }
                        }
                    });
                }
                catch( anException) {
                    if( theExceptionHandler) {
                        theExceptionHandler( anException);
                    }
                }

            };
            if( pF_AsyncNextTick_ExceptionWrappedTwice){}/* CQT */
            aPrototype.pF_AsyncNextTick_ExceptionWrappedTwice = pF_AsyncNextTick_ExceptionWrappedTwice;






            var pF_AsyncNextTick_unwrapped = function( theFunction) {

                theM_nextticker.pNextTick( theFunction);

            };
            if( pF_AsyncNextTick_unwrapped){}/* CQT */
            aPrototype.pF_AsyncNextTick_unwrapped = pF_AsyncNextTick_unwrapped;






            var fReleasePayloads_Async = function( ) {

                var aReleasePayloads_Async_Result = this._v_SuperPrototype.fReleasePayloads_Common.apply( this);
                if( !aReleasePayloads_Async_Result) {
                    return false;
                }


                if( this._v_UsedRequestData && ( typeof this._v_UsedRequestData == "object") && this._v_UsedRequestData.pReleasePayload && ( typeof this._v_UsedRequestData.pReleasePayload == "function")) {
                    this._v_UsedRequestData.pReleasePayload();
                }
                this._v_UsedRequestData      = undefined;


                if( this._v_UsedUploads && ( typeof this._v_UsedUploads == "object") && this._v_UsedUploads.pReleasePayload && ( typeof this._v_UsedUploads.pReleasePayload == "function")) {
                    this._v_UsedUploads.pReleasePayload();
                }
                this._v_UsedUploads          = undefined;


                if( this._v_ReceivedResponse && ( typeof this._v_ReceivedResponse == "object") && this._v_ReceivedResponse.pReleasePayload && ( typeof this._v_ReceivedResponse.pReleasePayload == "function")) {
                    this._v_ReceivedResponse.pReleasePayload();
                }
                this._v_ReceivedResponse     = undefined;


                if( this._v_ReceivedBody && ( typeof this._v_ReceivedBody == "object") && this._v_ReceivedBody.pReleasePayload && ( typeof this._v_ReceivedBody.pReleasePayload == "function")) {
                    this._v_ReceivedBody.pReleasePayload();
                }
                this._v_ReceivedBody         = undefined;

                
                return true;
            };
            if( fReleasePayloads_Async){}/* CQT */
            aPrototype.fReleasePayloads_Async = fReleasePayloads_Async;











            var fUnwrapPayloadFromHolder = function( thePayloadOrHolder) {

                if( typeof thePayloadOrHolder == "undefined") {
                    return thePayloadOrHolder;
                }

                if( thePayloadOrHolder == null) {
                    return thePayloadOrHolder;
                }

                if( ( typeof thePayloadOrHolder == "object") && thePayloadOrHolder.fIsPayloadHolder && thePayloadOrHolder.fIsPayloadHolder()) {

                    var aPayload = thePayloadOrHolder._v_Payload;
                    if( aPayload){}/* CQT */

                    return thePayloadOrHolder._v_Payload;
                }

                return thePayloadOrHolder;

            };
            if( fUnwrapPayloadFromHolder){}/* CQT */
            aPrototype.fUnwrapPayloadFromHolder = fUnwrapPayloadFromHolder;







            var fWrapPayloadWithHolder = function( thePayloadOrHolder) {

                if( typeof thePayloadOrHolder == "undefined") {
                    return thePayloadOrHolder;
                }

                if( thePayloadOrHolder == null) {
                    return thePayloadOrHolder;
                }

                if( ( typeof thePayloadOrHolder == "object") && thePayloadOrHolder.fIsPayloadHolder && thePayloadOrHolder.fIsPayloadHolder()) {

                    return thePayloadOrHolder;
                }


                var aPayloadHolder = new theM_payloadholder.PayloadHolder_Constructor( thePayloadOrHolder);
                return aPayloadHolder;

            };
            if( fWrapPayloadWithHolder){}/* CQT */
            aPrototype.fWrapPayloadWithHolder = fWrapPayloadWithHolder;






            return aPrototype;

        })();




        var AsyncTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_recorded_test.RecordedTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_UsedContentKind      = null;
            this._v_UsedContentEncoding  = null;
            this._v_UsedOptions      = null;
            this._v_UsedURL          = null;
            this._v_UsedRequestData  = null;
            this._v_UsedUploads      = null;
            this._v_UsedStatusCode       = null;
            this._v_UsedForgivableStatusCodes = null;
            this._v_ReceivedResponse = null;
            this._v_ReceivedStatusCode   = null;
            this._v_ReceivedBody     = null;
            this._v_ReceivedError      = null;

            this._pInit_Async( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        AsyncTest_Constructor.prototype = aAsyncTest_Prototype;





        var AsyncTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_recorded_test.RecordedTest_Prototype;

            this._v_Prototype = aAsyncTest_Prototype;
            this._v_Type = null;

            this._v_UsedContentKind      = null;
            this._v_UsedContentEncoding  = null;
            this._v_UsedOptions      = null;
            this._v_UsedURL          = null;
            this._v_UsedRequestData  = null;
            this._v_UsedUploads      = null;
            this._v_UsedStatusCode       = null;
            this._v_UsedForgivableStatusCodes = null;
            this._v_ReceivedResponse = null;
            this._v_ReceivedStatusCode   = null;
            this._v_ReceivedBody     = null;
            this._v_ReceivedError      = null;
        };
        AsyncTest_SuperPrototypeConstructor.prototype = aAsyncTest_Prototype;



        var aModule = {
            "AsyncTest_Prototype": aAsyncTest_Prototype,
            "AsyncTest_Constructor": AsyncTest_Constructor,
            "AsyncTest_SuperPrototypeConstructor": AsyncTest_SuperPrototypeConstructor
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

            var aM_recorded_test    = require('./recorded-test');
            var aM_forcedexception  = require('./forcedexception');
            var aM_nextticker       = require('../infrasvcs/nextticker/nextticker');
            var aM_httprequest      = require('../infrasvcs/httprequest/httprequest');
            var aM_overrider        = require('./overrider');
            var aM_sentinels        = require('./sentinels');
            var aM_payloadholder    = require('./payloadholder');

            return aMod_definer(
                aM_recorded_test,
                aM_forcedexception,
                aM_nextticker,
                aM_httprequest,
                aM_overrider,
                aM_sentinels,
                aM_payloadholder
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./recorded-test",
            "./forcedexception",
            "../infrasvcs/nextticker/nextticker",
            "../infrasvcs/httprequest/httprequest",
            "./overrider",
            "./sentinels",
            "./payloadholder"
        ], function (
            theM_recorded_test,
            theM_forcedexception,
            theM_nextticker,
            theM_httprequest,
            theM_overrider,
            theM_sentinels,
            theM_payloadholder
        ) {
            return aMod_definer(
                theM_recorded_test,
                theM_forcedexception,
                theM_nextticker,
                theM_httprequest,
                theM_overrider,
                theM_sentinels,
                theM_payloadholder
            );
        });
    }


}());