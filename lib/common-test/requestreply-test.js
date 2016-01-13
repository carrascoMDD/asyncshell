'use strict';

/*
 requestreply-test.js
 Creado 201409171855
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_parms_general,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_specloader,
                                 theM_fs,
                                 theM_path,
                                 theM_traversals,
                                 theM_payloadholder) {


        var ModuleName     = "requestreply-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.DUMP_URL          = false;
            theToInit.DUMP_REQUESTDATA  = false;
            theToInit.DUMP_REPLY        = false;

            theToInit.UPLOADFILENAMEDEFAULT = "unknoaded.txt";

            theToInit.UPLOADLINESJOIN = "\n";
            theToInit.UPLOADCONTENTYPEDEFAULT = "text/plain";

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


            theToInit.HTTPQUERYCHAR     = "?";
            theToInit.HTTPEXTRAPARMCHAR = "&";
            theToInit.URLPATHSEPARATOR  = "/";


            theToInit.PARM_SESSIONTEST       = "sessiontest";

            theToInit.PARM_IDERROR           = "iderror";

            theToInit.PARMSPREFIX_REQUESTREPLY = "requestreply";

            theToInit.PARM_BASEURLPARMNAME = theToInit.PARMSPREFIX_REQUESTREPLY + ".baseURLparmName";

            theToInit.PARMURLPATH = "URLpath";

            theToInit.PARM_REQUESTREPLY_LAZY    = theToInit.PARMSPREFIX_REQUESTREPLY + ".lazy";

            theToInit.REQUESTREPLYLAZY_DEFAULT = false;


            theToInit.PARM_REQUESTREPLY_URLPATH             = theToInit.PARMSPREFIX_REQUESTREPLY + ".URLpath";
            theToInit.PARM_REQUESTREPLY_URLFULL             = theToInit.PARMSPREFIX_REQUESTREPLY + ".URLfull";
            theToInit.PARM_REQUESTREPLY_URLPARMS            = theToInit.PARMSPREFIX_REQUESTREPLY + ".URLparms";
            theToInit.PARM_REQUESTREPLY_URLPARMSNOTENCODED  = theToInit.PARMSPREFIX_REQUESTREPLY + ".URLparmsnotencoded";
            theToInit.PARM_REQUESTREPLY_URLPATHPARMS        = theToInit.PARMSPREFIX_REQUESTREPLY + ".URLpathParms";
            theToInit.PARM_REQUESTREPLY_REQUESTMETHOD       = theToInit.PARMSPREFIX_REQUESTREPLY + ".requestmethod";
            theToInit.PARM_REQUESTREPLY_REQUESTDATA         = theToInit.PARMSPREFIX_REQUESTREPLY + ".requestdata";
            theToInit.PARM_REQUESTREPLY_REQUESTCONTRIBUTORS = theToInit.PARMSPREFIX_REQUESTREPLY + ".requestcontributors";
            theToInit.PARM_REQUESTREPLY_MULTIPARTS          = theToInit.PARMSPREFIX_REQUESTREPLY + ".multiparts";
            theToInit.PARM_REQUESTREPLY_UPLOADS             = theToInit.PARMSPREFIX_REQUESTREPLY + ".uploads";
            theToInit.PARM_REQUESTREPLY_REPLYCONSUMERS      = theToInit.PARMSPREFIX_REQUESTREPLY + ".replyconsumers";
            theToInit.PARM_REQUESTREPLY_STATUSCODE          = theToInit.PARMSPREFIX_REQUESTREPLY + ".statuscode";
            theToInit.PARM_REQUESTREPLY_FORGIVABLESTATUSCODES = theToInit.PARMSPREFIX_REQUESTREPLY + ".forgivablestatuscodes";
            theToInit.PARM_REQUESTREPLY_EXPECTEDRESPONSE    = theToInit.PARMSPREFIX_REQUESTREPLY + ".expectedresponse";
            theToInit.PARM_REQUESTREPLY_EXPECTEDRESPONSEPART = theToInit.PARMSPREFIX_REQUESTREPLY +".expectedresponsepart";
            theToInit.PARM_REQUESTREPLY_EXPECTEDEXCEPTIONS  = theToInit.PARMSPREFIX_REQUESTREPLY +".expectedexceptions";
            theToInit.PARM_REQUESTREPLY_DUMP_URL            = theToInit.PARMSPREFIX_REQUESTREPLY + ".dumpurl";
            theToInit.PARM_REQUESTREPLY_DUMP_REQUESTDATA    = theToInit.PARMSPREFIX_REQUESTREPLY + ".dumprequestdata";
            theToInit.PARM_REQUESTREPLY_SESSIONTESTPARMNAME = theToInit.PARMSPREFIX_REQUESTREPLY + ".sessiontestparmname";
            theToInit.PARM_REQUESTREPLY_DUMP_REPLY          = theToInit.PARMSPREFIX_REQUESTREPLY + ".dumpreply";
            theToInit.PARM_REQUESTREPLY_CONTENTKIND         = theToInit.PARMSPREFIX_REQUESTREPLY + ".contentkind";
            theToInit.PARM_REQUESTREPLY_CONTENTENCODING     = theToInit.PARMSPREFIX_REQUESTREPLY + ".contentencoding";

            theToInit.PARM_REQUESTREPLY_USEPAYLOADHOLDER    = theToInit.PARMSPREFIX_REQUESTREPLY + ".usePayloadHolder";

            theToInit.PARM_REQUESTREPLY_SUBPROPERTY_MULTIPARTPARMNAME    = "parmName";
            theToInit.PARM_REQUESTREPLY_SUBPROPERTY_MULTIPARTPARMVALUE   = "parmValue";
            theToInit.PARM_REQUESTREPLY_SUBPROPERTY_MULTIPARTCONTENTTYPE = "contentType";
            theToInit.PARM_REQUESTREPLY_UPLOADSUBPROPERTY_UPLOADFILEPATH = "filePath";
            theToInit.PARM_REQUESTREPLY_UPLOADSUBPROPERTY_UPLOADFILENAME = "fileName";
            theToInit.PARM_REQUESTREPLY_UPLOADSUBPROPERTY_UPLOADLINES    = "uploadLines";
            theToInit.PARM_REQUESTREPLY_UPLOADSUBPROPERTY_UPLOADBYTES    = "uploadBytes";



            theToInit.PARMS_REQUESTREPLY = [
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_REQUESTREPLY_URLPATH,
                theToInit.PARM_REQUESTREPLY_URLFULL,
                theToInit.PARM_REQUESTREPLY_URLPARMS,
                theToInit.PARM_REQUESTREPLY_URLPARMSNOTENCODED,
                theToInit.PARM_REQUESTREPLY_URLPATHPARMS,
                theToInit.PARM_REQUESTREPLY_REQUESTMETHOD,
                theToInit.PARM_REQUESTREPLY_LAZY,
                theToInit.PARM_REQUESTREPLY_REQUESTDATA,
                theToInit.PARM_REQUESTREPLY_REQUESTCONTRIBUTORS,
                theToInit.PARM_REQUESTREPLY_MULTIPARTS,
                theToInit.PARM_REQUESTREPLY_UPLOADS,
                theToInit.PARM_REQUESTREPLY_REPLYCONSUMERS,
                theToInit.PARM_REQUESTREPLY_STATUSCODE,
                theToInit.PARM_REQUESTREPLY_FORGIVABLESTATUSCODES,
                theToInit.PARM_REQUESTREPLY_EXPECTEDRESPONSE,
                theToInit.PARM_REQUESTREPLY_EXPECTEDRESPONSEPART,
                theToInit.PARM_REQUESTREPLY_EXPECTEDEXCEPTIONS,
                theToInit.PARM_REQUESTREPLY_DUMP_URL,
                theToInit.PARM_REQUESTREPLY_DUMP_REQUESTDATA,
                theToInit.PARM_REQUESTREPLY_DUMP_REPLY,
                theToInit.PARM_REQUESTREPLY_SESSIONTESTPARMNAME,
                theToInit.PARM_REQUESTREPLY_CONTENTKIND,
                theToInit.PARM_REQUESTREPLY_CONTENTENCODING,
                theToInit.PARM_REQUESTREPLY_USEPAYLOADHOLDER
            ];


            theToInit.REQUESTREPLY_REQUESTMETHOD_GET     = "GET";
            theToInit.REQUESTREPLY_REQUESTMETHOD_POST    = "POST";
            theToInit.REQUESTREPLY_REQUESTMETHOD_PUT     = "PUT";
            theToInit.REQUESTREPLY_REQUESTMETHOD_DELETE  = "DELETE";


            theToInit.REQUESTREPLY_REQUESTMETHODDEFAULT = theToInit.REQUESTREPLY_REQUESTMETHOD_GET;

            theToInit.REQUESTREPLY_REQUESTMETHODS = [
                theToInit.REQUESTREPLY_REQUESTMETHOD_GET,
                theToInit.REQUESTREPLY_REQUESTMETHOD_POST,
                theToInit.REQUESTREPLY_REQUESTMETHOD_PUT,
                theToInit.REQUESTREPLY_REQUESTMETHOD_DELETE
            ];

            theToInit.REQUESTREPLY_NOEXPECTEDRESPONSESENTINEL = {};

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











        var aRequestReply_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "RequestReply";

            aPrototype._v_Prototype_RequestReply = aPrototype;


            aPrototype._v_BaseURLparmName     = null;
            aPrototype._v_BaseURL             = null;
            aPrototype._v_URLpath             = null;
            aPrototype._v_URLfull             = null;
            aPrototype._v_URLparms            = null;
            aPrototype._v_URLparmsnotencoded  = null;
            aPrototype._v_URLpathParms        = null;
            aPrototype._v_RequestMethod       = null;
            aPrototype._v_RequestData         = null;
            aPrototype._v_RequestContributors = null;
            aPrototype._v_Multiparts          = null;
            aPrototype._v_Uploads             = null;
            aPrototype._v_ReplyConsumers      = null;
            aPrototype._v_StatusCode          = null;
            aPrototype._v_ForgivableStatusCodes= null;
            aPrototype._v_ExpectedResponse    = null;
            aPrototype._v_ExpectedResponsePart= null;
            aPrototype._v_ExpectedExceptions  = null;
            aPrototype._v_DumpUrl             = null;
            aPrototype._v_DumpRequestData     = null;
            aPrototype._v_DumpReply           = null;
            aPrototype._v_SessionTestParmName = null;
            aPrototype._v_ContentKind         = null;
            aPrototype._v_ContentEncoding     = null;

            aPrototype._v_Session               = null;

            aPrototype._v_RequestReplyLazy      = null;
            aPrototype._v_RequestReplyRetrieved = null;


            aPrototype._v_StatusCodeHasBeenForgiven    = null;

            aPrototype._v_Reply                 = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_RequestReply(
                    theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_RequestReply = function(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_RequestReplyLazy = null;
                this._v_RequestReplyRetrieved = false;

                this._v_BaseURLparmName     = null;
                this._v_BaseURL             = null;
                this._v_URLpath             = null;
                this._v_URLfull             = null;
                this._v_URLparms            = null;
                this._v_URLparmsnotencoded  = null;
                this._v_URLpathParms        = null;
                this._v_RequestMethod       = null;
                this._v_RequestData         = null;
                this._v_RequestContributors = null;
                this._v_Uploads             = null;
                this._v_Multiparts          = null;
                this._v_ReplyConsumers      = null;
                this._v_StatusCode          = null;
                this._v_ForgivableStatusCodes =null;
                this._v_ExpectedResponse    = this.REQUESTREPLY_NOEXPECTEDRESPONSESENTINEL;
                this._v_ExpectedResponsePart= this.REQUESTREPLY_NOEXPECTEDRESPONSESENTINEL;
                this._v_ExpectedExceptions  = null;
                this._v_DumpUrl             = null;
                this._v_DumpRequestData     = null;
                this._v_DumpReply           = null;
                this._v_SessionTestParmName = null;
                this._v_ContentKind         = null;
                this._v_ContentEncoding     = null;
                this._v_UsePayloadHolder    = null;

                this._v_Session            = theSession;

                this._v_StatusCodeHasBeenForgiven  = null;

                this._v_Reply               = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_RequestReply", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_RequestReply){}/* CQT */
            aPrototype._pInit_RequestReply = _pInit_RequestReply;










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

                this._pRelease_RequestReply( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_RequestReply = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_RequestReplyLazy = undefined;
                this._v_RequestReplyRetrieved = undefined;

                this._v_BaseURLparmName     = undefined;
                this._v_BaseURL             = undefined;
                this._v_URLpath             = undefined;
                this._v_URLfull             = undefined;
                this._v_URLparms            = undefined;
                this._v_URLparmsnotencoded  = undefined;
                this._v_URLpathParms        = undefined;
                this._v_RequestMethod       = undefined;
                this._v_RequestData         = undefined;
                this._v_RequestContributors = undefined;
                this._v_Multiparts          = undefined;
                this._v_Uploads             = undefined;
                this._v_ReplyConsumers      = undefined;
                this._v_StatusCode          = undefined;
                this._v_ForgivableStatusCodes =undefined;
                this._v_ExpectedResponse    = undefined;
                this._v_ExpectedResponsePart= undefined;
                this._v_ExpectedExceptions  = undefined;
                this._v_DumpUrl             = undefined;
                this._v_DumpRequestData     = undefined;
                this._v_DumpReply           = undefined;
                this._v_SessionTestParmName = undefined;
                this._v_ContentKind         = undefined;
                this._v_ContentEncoding     = undefined;
                this._v_UsePayloadHolder    = undefined;

                this._v_Session             = undefined;

                this._v_StatusCodeHasBeenForgiven  = undefined;

                if( this._v_Reply && ( typeof this._v_Reply == "object") && this._v_Reply.pReleasePayload && ( typeof this._v_Reply.pReleasePayload == "function")) {
                    this._v_Reply.pReleasePayload();
                }
                this._v_Reply               = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_RequestReply){}/* CQT */
            aPrototype._pRelease_RequestReply = _pRelease_RequestReply;









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

                this.pCleanUpTest_RequestReply( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_RequestReply = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_URLparms = undefined;
                    this._v_URLparmsnotencoded  = undefined;
                    this._v_URLpathParms        = undefined;
                    this._v_RequestData         = undefined;
                    this._v_Multiparts          = undefined;
                    this._v_Uploads             = undefined;

                    if( this._v_Reply && ( typeof this._v_Reply == "object") && this._v_Reply.pReleasePayload && ( typeof this._v_Reply.pReleasePayload == "function")) {
                        this._v_Reply.pReleasePayload();
                    }
                    this._v_Reply               = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_RequestReply){}/* CQT */
            aPrototype.pCleanUpTest_RequestReply = pCleanUpTest_RequestReply;



















            var pS_CheckLazy = function( theCallback) {

                var aMethodName = "pS_CheckLazy";

                if( !( this._v_RequestReplyLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_RequestReplyLazy = this.fResolvedParmValue(  this.PARM_REQUESTREPLY_LAZY);
                if( this._v_RequestReplyLazy == null) {
                    this._v_RequestReplyLazy = this.REQUESTREPLYLAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;










            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */



                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {


                    aThis.pResolveParms_RequestReply( theOtherCallback, theMethodName);

                    
                    return aThis._v_RequestMethod;


                }).bind( this);
                if( aLazyInitializerFunction){}/* CQT */

                return aLazyInitializerFunction;
            };
            if( fLazyInitializer){}/* CQT */
            aPrototype.fLazyInitializer = fLazyInitializer;












            var pResolveParms_RequestReply = function( theCallback, theMethodName) {
                
                if( ( this._v_RequestReplyLazy == true) && this._v_RequestReplyRetrieved) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return null;
                }


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return  null;
                }


                var someParmsToResolve = [
                    this.PARM_BASEURLPARMNAME,
                    theM_parms_general.PARM_HITPOINT_BASEURL,
                    this.PARM_REQUESTREPLY_URLPATH,
                    this.PARM_REQUESTREPLY_URLFULL,
                    this.PARM_REQUESTREPLY_URLPARMS,
                    this.PARM_REQUESTREPLY_URLPARMSNOTENCODED,
                    this.PARM_REQUESTREPLY_URLPATHPARMS,
                    this.PARM_REQUESTREPLY_REQUESTMETHOD,
                    this.PARM_REQUESTREPLY_REQUESTDATA,
                    this.PARM_REQUESTREPLY_REQUESTCONTRIBUTORS,
                    this.PARM_REQUESTREPLY_MULTIPARTS,
                    this.PARM_REQUESTREPLY_UPLOADS,
                    this.PARM_REQUESTREPLY_REPLYCONSUMERS,
                    this.PARM_REQUESTREPLY_STATUSCODE,
                    this.PARM_REQUESTREPLY_FORGIVABLESTATUSCODES,
                    this.PARM_REQUESTREPLY_EXPECTEDRESPONSE,
                    this.PARM_REQUESTREPLY_EXPECTEDRESPONSEPART,
                    this.PARM_REQUESTREPLY_EXPECTEDEXCEPTIONS,
                    this.PARM_REQUESTREPLY_DUMP_URL,
                    this.PARM_REQUESTREPLY_DUMP_REQUESTDATA,
                    this.PARM_REQUESTREPLY_DUMP_REPLY,
                    this.PARM_REQUESTREPLY_CONTENTKIND,
                    this.PARM_REQUESTREPLY_CONTENTENCODING,
                    this.PARM_REQUESTREPLY_USEPAYLOADHOLDER
                ];

                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return  false;
                }




                this._v_RequestReplyLazy = this.fResolvedParmValue(  this.PARM_REQUESTREPLY_LAZY);
                if( this._v_RequestReplyLazy == null) {
                    this._v_RequestReplyLazy = this.REQUESTREPLYLAZY_DEFAULT;
                }


                var aURLfullResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_URLFULL];
                if( aURLfullResolution && aURLfullResolution._v_Success && aURLfullResolution._v_ParmValue) {
                    this._v_URLfull = aURLfullResolution._v_ParmValue;
                }


                if( !this._v_URLfull) {

                    var aBaseURLparmName = null;

                    var aBaseURLparmNameResolution = aParmResolutionsDict[ this.PARM_BASEURLPARMNAME];
                    if( aBaseURLparmNameResolution && aBaseURLparmNameResolution._v_Success && aBaseURLparmNameResolution._v_ParmValue) {
                        aBaseURLparmName = aBaseURLparmNameResolution._v_ParmValue;
                    }
                    else {
                        aBaseURLparmName = theM_parms_general.PARM_HITPOINT_BASEURL;
                    }
                    if( !aBaseURLparmName) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " +  theM_parms_general.PARM_HITPOINT_BASEURLPARMNAME + ")  &&  !theM_parms_general.PARM_HITPOINT_BASEURL", null));
                        return  false;
                    }


                    var aResolvedBaseURL = this.fResolvedParmValue(  aBaseURLparmName);
                    if( !aResolvedBaseURL) {
                        theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!this.fResolvedParmValue( aBaseURLparmName = " +  aBaseURLparmName+ ")", null));
                        return  false;
                    }
                    this._v_BaseURL = aResolvedBaseURL;



                    if( !this._v_URLpath) {
                        var aURLpathResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_URLPATH];
                        if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                            this._v_URLpath = aURLpathResolution._v_ParmValue;
                        }
                    }


                    if( !this._v_URLparms) {
                        var aURLparmsResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_URLPARMS];
                        if( aURLparmsResolution && aURLparmsResolution._v_Success && aURLparmsResolution._v_ParmValue) {
                            this._v_URLparms = aURLparmsResolution._v_ParmValue;
                        }
                    }


                    if( !this._v_URLparmsnotencoded) {
                        var aURLparmsnotencodedResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_URLPARMSNOTENCODED];
                        if( aURLparmsnotencodedResolution && aURLparmsnotencodedResolution._v_Success && aURLparmsnotencodedResolution._v_ParmValue) {
                            this._v_URLparmsnotencoded = aURLparmsnotencodedResolution._v_ParmValue;
                        }
                    }


                    if( !this._v_URLpathParms) {
                        var aURLpathParmsResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_URLPATHPARMS];
                        if( aURLpathParmsResolution && aURLpathParmsResolution._v_Success && aURLpathParmsResolution._v_ParmValue) {
                            this._v_URLpathParms = aURLpathParmsResolution._v_ParmValue;
                        }
                    }

                }




                if( this._v_RequestMethod == null) {

                    var aRequestMethodResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_REQUESTMETHOD];
                    if( aRequestMethodResolution && aRequestMethodResolution._v_Success && aRequestMethodResolution._v_ParmValue) {
                        var aRequestMethod = aRequestMethodResolution._v_ParmValue.toUpperCase();
                        if( this.REQUESTREPLY_REQUESTMETHODS.indexOf( aRequestMethod) < 0) {
                            theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "! this._v_Configuration.fParmResolutions( " +  this.PARM_REQUESTREPLY_REQUESTMETHOD + " in " + this.REQUESTREPLY_REQUESTMETHODS.join( ','), aRequestMethod));
                            return  false;
                        }

                        this._v_RequestMethod = aRequestMethod;
                    }

                    if( this._v_RequestMethod == null) {
                        this._v_RequestMethod = this.REQUESTREPLY_REQUESTMETHODDEFAULT;
                    }
                }







                if( this._v_RequestData == null) {

                    var aRequestDataResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_REQUESTDATA];
                    if( aRequestDataResolution && aRequestDataResolution._v_Success && aRequestDataResolution._v_ParmValue) {
                        this._v_RequestData = aRequestDataResolution._v_ParmValue;
                    }
                }






                if( this._v_RequestContributors == null) {

                    var aRequestContributorsResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_REQUESTCONTRIBUTORS];
                    if( aRequestContributorsResolution && aRequestContributorsResolution._v_Success && aRequestContributorsResolution._v_ParmValue) {
                        this._v_RequestContributors = aRequestContributorsResolution._v_ParmValue;
                    }
                }





                if( this._v_Multiparts == null) {

                    var aMultipartsResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_MULTIPARTS];
                    if( aMultipartsResolution && aMultipartsResolution._v_Success && aMultipartsResolution._v_ParmValue) {
                        this._v_Multiparts = aMultipartsResolution._v_ParmValue;
                    }
                }





                if( this._v_Uploads == null) {

                    var aUploadsResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_UPLOADS];
                    if( aUploadsResolution && aUploadsResolution._v_Success && aUploadsResolution._v_ParmValue) {
                        this._v_Uploads = aUploadsResolution._v_ParmValue;
                    }
                }





                if( this._v_ReplyConsumers  == null) {

                    var aReplyConsumersResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_REPLYCONSUMERS];
                    if( aReplyConsumersResolution && aReplyConsumersResolution._v_Success && aReplyConsumersResolution._v_ParmValue) {
                        this._v_ReplyConsumers = aReplyConsumersResolution._v_ParmValue;
                    }
                }



                if( this._v_StatusCode == null) {

                    var aStatusCodeResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_STATUSCODE];
                    if( aStatusCodeResolution && aStatusCodeResolution._v_Success && aStatusCodeResolution._v_ParmValue) {
                        this._v_StatusCode = aStatusCodeResolution._v_ParmValue;
                    }
                }



                if( this._v_ForgivableStatusCodes == null) {

                    var aForgivableStatusCodesResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_FORGIVABLESTATUSCODES];
                    if( aForgivableStatusCodesResolution && aForgivableStatusCodesResolution._v_Success && aForgivableStatusCodesResolution._v_ParmValue) {
                        this._v_ForgivableStatusCodes = aForgivableStatusCodesResolution._v_ParmValue;
                    }
                }



                if( this._v_ExpectedResponse === this.REQUESTREPLY_NOEXPECTEDRESPONSESENTINEL) {

                    var aExpectedResponseResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_EXPECTEDRESPONSE];
                    if(       aExpectedResponseResolution && aExpectedResponseResolution._v_Success
                        && !( typeof aExpectedResponseResolution._v_ParmValue == "undefined")
                        && !( aExpectedResponseResolution._v_ParmValue == null)) {

                        this._v_ExpectedResponse = aExpectedResponseResolution._v_ParmValue;
                    }
                }



                if( this._v_ExpectedResponsePart === this.REQUESTREPLY_NOEXPECTEDRESPONSESENTINEL) {

                    var aExpectedResponsePartResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_EXPECTEDRESPONSEPART];
                    if(       aExpectedResponsePartResolution && aExpectedResponsePartResolution._v_Success
                        && !( typeof aExpectedResponsePartResolution._v_ParmValue == "undefined")
                        && !( aExpectedResponsePartResolution._v_ParmValue == null)) {

                        this._v_ExpectedResponsePart = aExpectedResponsePartResolution._v_ParmValue;
                    }
                }



                if( !this._v_ExpectedExceptions) {

                    var aExpecteExceptionsResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_EXPECTEDEXCEPTIONS];
                    if( aExpecteExceptionsResolution && aExpecteExceptionsResolution._v_Success && aExpecteExceptionsResolution._v_ParmValue) {
                        this._v_ExpectedExceptions = aExpecteExceptionsResolution._v_ParmValue;
                    }
                }




                if( this._v_DumpUrl == null) {

                    var aDumpUrlResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_DUMP_URL];
                    if( aDumpUrlResolution && aDumpUrlResolution._v_Success) {
                        this._v_DumpUrl = aDumpUrlResolution._v_ParmValue;
                    }


                    if( this._v_DumpUrl == null) {
                        this._v_DumpUrl = this.DUMP_URL;
                    }
                }


                if( this._v_DumpRequestData == null) {

                    var aDumpRequestDataResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_DUMP_REQUESTDATA];
                    if( aDumpRequestDataResolution && aDumpRequestDataResolution._v_Success) {
                        this._v_DumpRequestData = aDumpRequestDataResolution._v_ParmValue;
                    }

                    if( this._v_DumpRequestData == null) {
                        this._v_DumpRequestData = this.DUMP_REQUESTDATA;
                    }
                }

                if( this._v_DumpReply == null) {

                    var aDumpReplyResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_DUMP_REPLY];
                    if( aDumpReplyResolution && aDumpReplyResolution._v_Success) {
                        this._v_DumpReply = aDumpReplyResolution._v_ParmValue;
                    }

                    if( this._v_DumpReply == null) {
                        this._v_DumpReply = this.DUMP_REPLY;
                    }
                }


                if( this._v_ContentKind == null) {

                    var aContentKindResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_CONTENTKIND];
                    if( aContentKindResolution && aContentKindResolution._v_Success) {
                        this._v_ContentKind = aContentKindResolution._v_ParmValue;
                    }
                }



                if( this._v_ContentEncoding == null) {

                    var aContentEncodingResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_CONTENTENCODING];
                    if( aContentEncodingResolution && aContentEncodingResolution._v_Success) {
                        this._v_ContentEncoding = aContentEncodingResolution._v_ParmValue;
                    }
                }


                if( this._v_UsePayloadHolder == null) {

                    var aUsePayloadHolderResolution = aParmResolutionsDict[ this.PARM_REQUESTREPLY_USEPAYLOADHOLDER];
                    if( aUsePayloadHolderResolution && aUsePayloadHolderResolution._v_Success) {
                        this._v_UsePayloadHolder = aUsePayloadHolderResolution._v_ParmValue;
                    }
                }

            };
            if( pResolveParms_RequestReply){}/* CQT */
            aPrototype.pResolveParms_RequestReply = pResolveParms_RequestReply;










            var fContributorsContributeTo = function( theContributeFunctionName, theContributedTo) {

                if( !theContributeFunctionName) {
                    return theContributedTo;
                }


                if( !this._v_RequestContributors) {
                    return theContributedTo;
                }


                if( typeof this._v_RequestContributors == "function") {

                    var aContributedSingle = this._v_RequestContributors( theContributedTo);
                    if( aContributedSingle){}/* CQT */
                    return aContributedSingle;
                }


                var aContributeFunction = this.fContributorFunction( theContributeFunctionName, this._v_RequestContributors);

                if( aContributeFunction) {
                    var aContributedOne = aContributeFunction( theContributedTo);
                    if( aContributedOne){}/* CQT */
                    return aContributedOne;
                }


                var aContributedTo = theContributedTo;

                if( !( typeof this._v_RequestContributors.length  == "undefined")) {

                    var aNumRequestContributors = this._v_RequestContributors.length;
                    for( var aRequestContributorIdx=0; aRequestContributorIdx < aNumRequestContributors; aRequestContributorIdx++) {

                        var aRequestContributor = this._v_RequestContributors[ aRequestContributorIdx];
                        if( aRequestContributor) {

                            var aContributorFunction = this.fContributorFunction( theContributeFunctionName, aRequestContributor);
                            if( aContributorFunction) {

                                aContributedTo = aContributorFunction( aContributedTo);
                            }
                        }
                    }
                }
                else {


                    var someContributorsKeys = Object.keys( this._v_RequestContributors);
                    var aNumeContributorKeys = someContributorsKeys.length;
                    for( var aContributorKeyIdx=0; aContributorKeyIdx < aNumeContributorKeys; aContributorKeyIdx++) {

                        var aContributorKey = someContributorsKeys[ aContributorKeyIdx];
                        var otherRequestContributor = this._v_RequestContributors[ aContributorKey];
                        if( otherRequestContributor) {

                            var otherContributorFunction = this.fContributorFunction( theContributeFunctionName, otherRequestContributor);
                            if( otherContributorFunction) {

                                aContributedTo = otherContributorFunction( aContributedTo);
                            }
                        }
                    }

                }

                return aContributedTo;
            };
            if( fContributorsContributeTo){}/* CQT */
            aPrototype.fContributorsContributeTo = fContributorsContributeTo;











            var fContributorFunction = function( theContributeFunctionName, theContributor) {

                if( !theContributeFunctionName) {
                    return null;
                }

                if( !theContributor) {
                    return null;
                }

                if( typeof theContributor == "function") {
                    return theContributor;
                }


                var aContributeFunction = theContributor[ theContributeFunctionName];
                if( aContributeFunction) {

                    if( typeof aContributeFunction == "function") {

                        var aBoundContributeFunction = this.fBoundFunction( aContributeFunction, theContributor);
                        if( aBoundContributeFunction){}/* CQT */
                        return aBoundContributeFunction;
                    }
                }

                return null;
            };
            if( fContributorFunction){}/* CQT */
            aPrototype.fContributorFunction = fContributorFunction;








            var fBoundFunction = function( theFunction, theContributor) {

                if( !theFunction) {
                    return null;
                }

                if( !( typeof theFunction == "function")) {
                    return null;
                }


                if( !theContributor) {
                    return null;
                }


                if( !( typeof theContributor == "object")) {
                    return theFunction;
                }


                if( !( typeof theContributor._v_Type == "string")) {
                    return theFunction;
                }

                var aBoundFunction = theFunction.bind( theContributor);
                if( aBoundFunction){}/* CQT */

                return aBoundFunction;
            };
            if( fBoundFunction){}/* CQT */
            aPrototype.fBoundFunction = fBoundFunction;








            var fConsumersConsumeFrom = function( theConsumeFunctionName, theConsumerOpinionFrom) {

                if( !theConsumeFunctionName) {
                    return theConsumerOpinionFrom;
                }


                if( !this._v_ReplyConsumers) {
                    return theConsumerOpinionFrom;
                }


                if( typeof this._v_ReplyConsumers == "function") {

                    var aConsumerOpinionSingle = this._v_ReplyConsumers( theConsumerOpinionFrom);
                    if( aConsumerOpinionSingle){}/* CQT */
                    return aConsumerOpinionSingle;
                }


                var aConsumeFunction = this._v_ReplyConsumers[ theConsumeFunctionName];
                if( aConsumeFunction) {

                    if( typeof aConsumeFunction == "function") {

                        var aConsumerOpinionOne = aConsumeFunction( theConsumerOpinionFrom);
                        if( aConsumerOpinionOne){}/* CQT */
                        return aConsumerOpinionOne;
                    }
                }

                var aConsumerOpinion = true;

                if( !( typeof this._v_ReplyConsumers.length  == "undefined")) {

                    var aNumRequestConsumers = this._v_ReplyConsumers.length;
                    for( var aRequestConsumerIdx=0; aRequestConsumerIdx < aNumRequestConsumers; aRequestConsumerIdx++) {

                        var aRequestConsumer = this._v_ReplyConsumers[ aRequestConsumerIdx];
                        if( aRequestConsumer) {

                            if( typeof aRequestConsumer == "function") {
                                aConsumerOpinion = aRequestConsumer( theConsumerOpinionFrom);
                            }
                            else {
                                var aConsumerFunction = aRequestConsumer[ theConsumeFunctionName];
                                if( aConsumerFunction && ( typeof aConsumerFunction == "function")) {

                                    aConsumerOpinion = aConsumeFunction( theConsumerOpinionFrom);
                                }
                            }
                        }

                        if( !aConsumerOpinion) {
                            break;
                        }
                    }
                }
                else {

                    var someConsumersKeys = Object.keys( this._v_ReplyConsumers);
                    var aNumeConsumerKeys = someConsumersKeys.length;
                    for( var aConsumerKeyIdx=0; aConsumerKeyIdx < aNumeConsumerKeys; aConsumerKeyIdx++) {

                        var aConsumerKey = someConsumersKeys[ aConsumerKeyIdx];
                        var otherRequestConsumer = this._v_ReplyConsumers[ aConsumerKey];
                        if( otherRequestConsumer) {

                            var otherConsumerFunction = otherRequestConsumer[ theConsumeFunctionName];
                            if( otherConsumerFunction && ( typeof otherConsumerFunction == "function")) {

                                aConsumerOpinion = otherConsumerFunction( theConsumerOpinionFrom);
                            }
                        }

                        if( !aConsumerOpinion) {
                            break;
                        }
                    }
                }

                return aConsumerOpinion;
            };
            if( fConsumersConsumeFrom){}/* CQT */
            aPrototype.fConsumersConsumeFrom = fConsumersConsumeFrom;














            var fURLpath = function( theCallback) {
                if( theCallback){}/* CQT */


                var aMethodName = "fURLpath";

                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    var aMethod = "";
                    if( aThis._v_RequestMethod) {
                        aMethod = aThis._v_RequestMethod;
                    }

                    if( aThis._v_URLfull) {

                        if( aThis._v_DumpUrl) {
                            
                            aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_INFO, aThis._v_URLfull,  "aThis._v_URLfull", aMethod);
                            aThis.pToConsoleLikeEvent( aMethod + " URLfull " + aThis._v_URLfull);
                        }

                        return aThis._v_URLfull;
                    }

                    if( !aThis._v_BaseURL) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_BaseURL", null));
                        return null;
                    }

                    var aURLpath = aThis._v_URLpath;
                    if( !aURLpath) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_URLpath", null));
                        return null;
                    }



                    var aURL = aThis._v_BaseURL + aURLpath;




                    if( aThis._v_URLpathParms) {

                        var someUrlpathParmKeys = Object.keys( aThis._v_URLpathParms);
                        var anNumUrlpathParmKeys = someUrlpathParmKeys.length;


                        for( var aUrlpathParmKeyIdx=0; aUrlpathParmKeyIdx < anNumUrlpathParmKeys; aUrlpathParmKeyIdx++) {

                            var aUrlpathParmKey = someUrlpathParmKeys[ aUrlpathParmKeyIdx];
                            var aUrlpathParmValue =  aThis._v_URLpathParms[ aUrlpathParmKey];

                            if( !( aUrlpathParmValue == null)) {

                                aUrlpathParmValue = aThis.fParmValueReplacement( aUrlpathParmValue);

                                if( !( aUrlpathParmValue == null)) {

                                    var aUrlpathParmValueEncoded = aUrlpathParmValue;

                                    if( !aThis._v_URLparmsnotencoded || ( aThis._v_URLparmsnotencoded.indexOf( aUrlpathParmKey) < 0)) {
                                        aUrlpathParmValueEncoded = encodeURIComponent( aUrlpathParmValue);
                                    }

                                    if( !( aURL[ aURL.length - 1] == aThis.URLPATHSEPARATOR)) {
                                        aURL +=  aThis.URLPATHSEPARATOR;
                                    }

                                    aURL +=  aUrlpathParmValueEncoded;
                                }
                            }
                        }
                    }





                    if( aThis._v_URLparms) {

                        var someURLparmKeys = Object.keys( aThis._v_URLparms);
                        var anNumURLparmKeys = someURLparmKeys.length;

                        for( var aURLparmKeyIdx=0; aURLparmKeyIdx < anNumURLparmKeys; aURLparmKeyIdx++) {

                            var aURLparmKey = someURLparmKeys[ aURLparmKeyIdx];
                            var aURLparmValue =  aThis._v_URLparms[ aURLparmKey];

                            if( !( aURLparmValue == null)) {

                                aURLparmValue = aThis.fParmValueReplacement( aURLparmValue);

                                if( !( aURLparmValue == null)) {

                                    var aURLparmKeyEncoded   = encodeURIComponent( aURLparmKey);
                                    var aURLparmValueEncoded = aURLparmValue;

                                    if( !aThis._v_URLparmsnotencoded || ( aThis._v_URLparmsnotencoded.indexOf( aURLparmKey) < 0)) {
                                        aURLparmValueEncoded = encodeURIComponent( aURLparmValue);
                                    }

                                    var aURLparmAndValue = aURLparmKeyEncoded + "=" + aURLparmValueEncoded;

                                    if( aURL.indexOf( aThis.HTTPQUERYCHAR) < 0) {
                                        aURL +=  aThis.HTTPQUERYCHAR;
                                    }
                                    else {
                                        aURL +=  aThis.HTTPEXTRAPARMCHAR;
                                    }

                                    aURL +=  aURLparmAndValue;
                                }
                            }
                        }
                    }




                    var aContributedURL = this.fContributorsContributeTo ( "fContributeToURL", aURL);
                    if( aContributedURL){}/* CQT */


                    if( aThis._v_DumpUrl) {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_INFO, aContributedURL, "aContributedURL", aMethod);
                        aThis.pToConsoleLikeEvent( aMethod + " URL " + aContributedURL);
                    }

                    return aContributedURL;

                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fURLpath){}/* CQT */
            aPrototype.fURLpath = fURLpath;







            var fFormMultiparts = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */
                if( theMethodName){}/* CQT */

                var aThis = this;

                var aFunction = (function( theOtherCallback) {
                    if( theOtherCallback){}/* CQT */

                    if( !aThis._v_Multiparts) {
                        return null;
                    }

                    var aNumMultiparts = aThis._v_Multiparts.length;
                    if( !aNumMultiparts) {
                        return null;
                    }

                    var someMultiparts = [ ];

                    for( var aMultipartIdx=0; aMultipartIdx < aNumMultiparts; aMultipartIdx++) {
                        var aMultipart = aThis._v_Multiparts[ aMultipartIdx];
                        if( aMultipart) {

                            var aMultipartParmName = aMultipart[ aThis.PARM_REQUESTREPLY_SUBPROPERTY_MULTIPARTPARMNAME];
                            if( aMultipartParmName) {

                                var aMultipartValue =  aMultipart[ aThis.PARM_REQUESTREPLY_SUBPROPERTY_MULTIPARTPARMVALUE];

                                if( !( typeof aMultipartValue == "undefined")) {

                                    var aMultipartContentType =  aMultipart[ aThis.PARM_REQUESTREPLY_SUBPROPERTY_MULTIPARTCONTENTTYPE];
                                    if( !aMultipartContentType) {
                                        aMultipartContentType = aThis.UPLOADCONTENTYPEDEFAULT;
                                    }

                                    var aFormMultipart = {
                                        "parmName":  aMultipartParmName,
                                        "parmValue": aMultipartValue,
                                        "contentType": aMultipartContentType
                                    };

                                    someMultiparts.push( aFormMultipart);
                                }
                            }
                        }
                    }

                    return someMultiparts;


                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fFormMultiparts){}/* CQT */
            aPrototype.fFormMultiparts = fFormMultiparts;





            var fUploadFileContent = function( theUploadFilePath) {

                if( !theUploadFilePath) {
                    return null;
                }

                var someFullLoadPaths = theM_specloader.fgGlobalSpecLoader().fFullLoadPathsForResNamed( theUploadFilePath);
                if( !someFullLoadPaths) {
                    return null;
                }

                var aNumPaths = someFullLoadPaths.length;
                if( !aNumPaths) {
                    return null;
                }

                var aFileContent = null;
                for( var aPathIdx=0; aPathIdx < aNumPaths; aPathIdx++) {
                    var aPath = someFullLoadPaths[ aPathIdx];
                    if( aPath) {
                        try {
                            aFileContent = theM_fs.readFileSync(aPath)
                        }
                        catch( anException) {
                        }
                        if( !( aFileContent == null)) {
                            return aFileContent;
                        }
                    }
                }

                return null;
            };
            if( fUploadFileContent){}/* CQT */
            aPrototype.fUploadFileContent = fUploadFileContent;







            var fFormUploads = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */
                if( theMethodName){}/* CQT */

                var aThis = this;

                var aFunction = (function( theOtherCallback) {
                    if( theOtherCallback){}/* CQT */

                    if( !aThis._v_Uploads) {
                        return null;
                    }

                    var aNumUploads = aThis._v_Uploads.length;
                    if( !aNumUploads) {
                        return null;
                    }

                    var someUploads = [ ];

                    for( var anUploadIdx=0; anUploadIdx < aNumUploads; anUploadIdx++) {
                        var anUpload = aThis._v_Uploads[ anUploadIdx];
                        if( anUpload) {

                            var anUploadParmName = anUpload[ aThis.PARM_REQUESTREPLY_SUBPROPERTY_MULTIPARTPARMNAME];
                            if( anUploadParmName) {


                                var anUploadFileName =  anUpload[ aThis.PARM_REQUESTREPLY_UPLOADSUBPROPERTY_UPLOADFILENAME];
                                if( !anUploadFileName) {
                                    anUploadFileName = aThis.UPLOADFILENAMEDEFAULT;
                                }

                                var anUploadContent = null;

                                var anUploadFilePath =  anUpload[ aThis.PARM_REQUESTREPLY_UPLOADSUBPROPERTY_UPLOADFILEPATH];
                                if( anUploadFilePath) {

                                    var someFullLoadPaths = theM_specloader.fgGlobalSpecLoader().fFullLoadPathsForResNamed( anUploadFilePath);
                                    if( someFullLoadPaths && someFullLoadPaths.length) {

                                        var aNumPaths = someFullLoadPaths.length;
                                        if( !aNumPaths) {
                                            return null;
                                        }

                                        for( var aPathIdx=0; aPathIdx < aNumPaths; aPathIdx++) {
                                            var aPath = someFullLoadPaths[ aPathIdx];
                                            if( aPath) {

                                                var aPathResolvedByRequire = theM_specloader.fgGlobalSpecLoader().fPathResolvedByRequire( aPath);
                                                if( aPathResolvedByRequire) {
                                                    var aFileContent = null;
                                                    try {
                                                        aFileContent = theM_fs.readFileSync( aPathResolvedByRequire);
                                                    }
                                                    catch( anException) {
                                                    }
                                                    if( !( aFileContent == null)) {
                                                        anUploadFileName = theM_path.basename( aPathResolvedByRequire);
                                                        anUploadContent = aFileContent;
                                                        break;
                                                    }
                                                }

                                            }
                                        }
                                    }
                                }


                                if( anUploadContent == null) {

                                    var anUploadLinesOrParmName = anUpload[ aThis.PARM_REQUESTREPLY_UPLOADSUBPROPERTY_UPLOADLINES];
                                    if( anUploadLinesOrParmName) {
                                        var someUploadLines = aThis.fParmValueReplacement( anUploadLinesOrParmName);
                                        if( someUploadLines) {
                                            if( someUploadLines.length) {
                                                anUploadContent = someUploadLines.join( aThis.UPLOADLINESJOIN);
                                            }
                                            else {
                                                anUploadContent = "";
                                            }
                                        }
                                    }
                                }

                                if( anUploadContent == null) {
                                    var anUploadBytesOrParmName = anUpload[ aThis.PARM_REQUESTREPLY_UPLOADSUBPROPERTY_UPLOADBYTES];
                                    if( anUploadBytesOrParmName) {
                                        var someUploadBytes = aThis.fParmValueReplacement( anUploadBytesOrParmName);
                                        if( someUploadBytes) {
                                            anUploadContent = someUploadBytes;
                                        }
                                    }
                                }





                                var anUploadContentType =  anUpload[ aThis.PARM_REQUESTREPLY_SUBPROPERTY_MULTIPARTCONTENTTYPE];
                                if( !anUploadContentType) {
                                    anUploadContentType = aThis.UPLOADCONTENTYPEDEFAULT;
                                }

                                if( !( anUploadContent == null)) {

                                    var aFormUpload = {
                                        "parmName": anUploadParmName,
                                        "fileData": anUploadContent,
                                        "filename": anUploadFileName,
                                        "contentType": anUploadContentType
                                    };

                                    someUploads.push( aFormUpload);
                                }
                            }
                        }
                    }

                    return someUploads;


                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fFormUploads){}/* CQT */
            aPrototype.fFormUploads = fFormUploads;












            var fRequestData = function( theCallback, theMethodName) {
                var aThis = this;

                var aFunction = (function( theOtherCallback) {


                    var aFormData = null;

                    if( !( aThis._v_RequestData == null)) {

                        aFormData = { };

                        var someRequestDataKeys = Object.keys( aThis._v_RequestData);
                        var aNumRequestDataKeys = someRequestDataKeys.length;

                        for( var aRequestDataKeyIdx=0; aRequestDataKeyIdx < aNumRequestDataKeys; aRequestDataKeyIdx++) {

                            var aRequestDataKey = someRequestDataKeys[ aRequestDataKeyIdx];
                            var aRequestDataValue = aThis._v_RequestData[ aRequestDataKey];

                            var aReplacementValue = aThis.fParmValueReplacement( aRequestDataValue);
                            if( aReplacementValue){}/* CQT */

                            aFormData[ aRequestDataKey] = aReplacementValue;
                        }
                    }



                    var aRequestData =  {};

                    if( !( aFormData == null)) {
                        aRequestData[ "form"] = aFormData;
                    }


                    var aContributedRequestData = aThis.fContributorsContributeTo ( "fContributeToRequestData", aRequestData);


                    if( typeof aContributedRequestData[ "json"] == "undefined") {
                        aContributedRequestData[ "json"] = true;
                    }

                    /* ACV OJO TODO Anadir ala http requests de tests end2end JSON API el header "User-Agent"
                     *   (non-Javadoc)
                     * @see org.springframework.security.web.authentication.AuthenticationSuccessHandler#onAuthenticationSuccess(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, org.springframework.security.core.Authentication)
                     */
                    if( ( typeof aContributedRequestData[ "headers"] == "undefined") || ( typeof aContributedRequestData[ "headers"][ "cookie"]  == "undefined")) {


                        if( !aThis._v_Session) {
                            aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_INFO, null, "!aThis._v_Session: trying fResolvedParmValue(  aThis.PARM_SESSIONTEST)", null);

                            var aSessionTestParmName =  aThis.fResolvedParmValue(  aThis.PARM_REQUESTREPLY_SESSIONTESTPARMNAME);
                            if( !aSessionTestParmName) {
                                aSessionTestParmName = aThis.PARM_SESSIONTEST;
                            }
                            this._v_SessionTestParmName = aSessionTestParmName;

                            aThis._v_Session = aThis.fResolvedParmValue( aSessionTestParmName);
                        }


                        if( aThis._v_Session) {

                            if( !aThis._v_Session._v_IsInSession) {
                                theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null,  "!aThis._v_Session._v_IsInSession", null));
                                return false;
                            }

                            if( !aThis._v_Session._v_Login || !aThis._v_Session._v_Login._v_Cookies || !aThis._v_Session._v_Login._v_Cookies.length) {
                                theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Session._v_Login || !aThis._v_Session._v_Login._v_Cookies || !aThis._v_Session._v_Login._v_Cookies.length", null));
                                return null;
                            }

                            if( !aThis._v_Session._v_IsAuthenticated || !aThis._v_Session._v_IsAuthenticated._v_IsAuthenticated) {
                                theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Session._v_IsAuthenticated || !aThis._v_Session._v_IsAuthenticated._v_IsAuthenticated", null));
                                return null;
                            }
                        }


                        if( aThis._v_Session) {
                            aContributedRequestData[ "headers"] = {
                                "cookie": aThis._v_Session._v_Login._v_Cookies[ 0]
                            };
                        }


                    }


                    if( aThis._v_DumpRequestData) {

                        var aRequiredStatusCode = this.fRequiredStatusCode( theOtherCallback);
                        if( aRequiredStatusCode && ( typeof aRequiredStatusCode == "function")) {
                            aRequiredStatusCode = aRequiredStatusCode();
                        }
                        if( !( typeof aRequiredStatusCode == "undefined") && !( aRequiredStatusCode == null) && ( typeof aRequiredStatusCode == "number")) {
                            aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_INFO, aRequiredStatusCode, "aRequiredStatusCode", null);

                            aThis.pToConsoleLikeEvent( "RequiredStatusCode=" + aRequiredStatusCode);
                        }

                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_INFO, aContributedRequestData, "aContributedRequestData", null);

                        var aRequestDataJSONstr = JSON.stringify( aContributedRequestData, null, 4);
                        aThis.pToConsoleLikeEvent( "RequestData " + this.fModConversions().fConvertValueToJSONstr( aRequestDataJSONstr));
                    }


                    return aContributedRequestData;

                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fRequestData){}/* CQT */
            aPrototype.fRequestData = fRequestData;









            var fRequiredStatusCode = function( theCallback) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    return aThis._v_StatusCode;
                }).bind( this);

                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fRequiredStatusCode){}/* CQT */
            aPrototype.fRequiredStatusCode = fRequiredStatusCode;




            


            var fForgivableStatusCodes = function( theCallback) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aFunction = (function() {

                    return aThis._v_ForgivableStatusCodes;
                }).bind( this);

                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fForgivableStatusCodes){}/* CQT */
            aPrototype.fForgivableStatusCodes = fForgivableStatusCodes;






            var fExpectedExceptions = function( theCallback) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    return aThis._v_ExpectedExceptions;
                }).bind( this);

                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fExpectedExceptions){}/* CQT */
            aPrototype.fExpectedExceptions = fExpectedExceptions;






            var fContentKind = function( theCallback) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    return aThis._v_ContentKind;
                }).bind( this);

                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fContentKind){}/* CQT */
            aPrototype.fContentKind = fContentKind;









            var fContentEncoding = function( theCallback) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    return aThis._v_ContentEncoding
                }).bind( this);

                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fContentEncoding){}/* CQT */
            aPrototype.fContentEncoding = fContentEncoding;








            var fStatusCodeHasBeenForgiven = function() {

                var aThis = this;

                var aStatusCodeHasBeenForgivenFunction = (function( theForgivenStatusCode, theForgivableStatusCodes) {

                    aThis.pAvoidMatchChecks( true);
                    aThis.pSkipNextSteps(    true);
                    aThis.pSkipFurtherSubs(  true);

                    aThis._v_StatusCodeHasBeenForgiven  = theForgivenStatusCode;

                }).bind( this);
                if( aStatusCodeHasBeenForgivenFunction){}/* CQT */

                return aStatusCodeHasBeenForgivenFunction;
            };
            if( fStatusCodeHasBeenForgiven){}/* CQT */
            aPrototype.fStatusCodeHasBeenForgiven = fStatusCodeHasBeenForgiven;







            var fResultParser = function( theCallback, theMethodName) {

                var aThis = this;

                var aResultParserFunction = (function( theOtherCallback, theError, theResponse) {

                    if( !( aThis._v_ContentKind == aThis.CONTENTKIND_BINARY)) {
                        return aThis.fResultParser_NoBinary( theCallback, theMethodName, theOtherCallback, theError, theResponse);
                    }
                    else {
                        return aThis.fResultParser_Binary(   theCallback, theMethodName, theOtherCallback, theError, theResponse);
                    }
                });

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;






            var fResultParser_NoBinary = function( theCallback, theMethodName, theOtherCallback, theError, theResponse) {

                if( !theResponse) {
                    theOtherCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                    return false;
                }


                var aResponseBody = theResponse.body;

                var aConsumersOpinion = this.fConsumersConsumeFrom( "fConsumeReply", aResponseBody);

                if( !aConsumersOpinion) {
                    theOtherCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "! all this._v_ReplyConsumers fConsumeReply", null));
                    return null;
                }

                this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_RETRIEVEDDATA, this.fModConversions().fConvertValueToJSONstr( aResponseBody), "(RequestReply) theResponse.body", null);

                if( this._v_UsePayloadHolder) {

                    this._v_Reply = new theM_payloadholder.PayloadHolder_Constructor( aResponseBody);
                }
                else {
                    this._v_Reply = aResponseBody;
                }



                if( this._v_DumpReply) {

                    this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_INFO, theResponse.statusCode, "theResponse.statusCode", null);
                    this.pToConsoleLikeEvent( "StatusCode=" + theResponse.statusCode);

                    this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_INFO, this._v_Reply, "this._v_Reply", null);

                    var aReplyJSONstr = JSON.stringify( this._v_Reply, null, 4);
                    console.log( "Reply\n" + aReplyJSONstr);
                    /*
                    this.pToConsoleLikeEvent( "Reply " + this.fModConversions().fConvertValueToJSONstr( aReplyJSONstr));
                     */
                }


                return true;
            };
            if( fResultParser_NoBinary){}/* CQT */
            aPrototype.fResultParser_NoBinary = fResultParser_NoBinary;







            var fResultParser_Binary = function( theCallback, theMethodName, theOtherCallback, theError, theResponse) {

                if( !theResponse) {
                    theOtherCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                    return false;
                }


                var aResponseBody = theResponse.body;

                var aConsumersOpinion = this.fConsumersConsumeFrom( "fConsumeReply", aResponseBody);

                if( !aConsumersOpinion) {
                    theOtherCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "! all this._v_ReplyConsumers fConsumeReply", null));
                    return null;
                }

                this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_RETRIEVEDDATA, this.fModConversions().fConvertValueToJSONstr( aResponseBody), "(RequestReply) theResponse.body", null);


                if( this._v_UsePayloadHolder) {

                    this._v_Reply = new theM_payloadholder.PayloadHolder_Constructor( aResponseBody);
                }
                else {
                    this._v_Reply = aResponseBody;
                }

                if( this._v_DumpReply) {

                    this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_INFO, theResponse.statusCode, "theResponse.statusCode", null);
                    this.pToConsoleLikeEvent( "StatusCode=" + theResponse.statusCode);

                    this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_INFO, null, "this._v_Reply", null);

                    this.pToConsoleLikeEvent( "Reply " + this.fModConversions().fConvertValueToJSONstr(  this._v_Reply));
                }


                return true;

            };
            if( fResultParser_Binary){}/* CQT */
            aPrototype.fResultParser_Binary = fResultParser_Binary;









            var pS_RequestReply = function( theCallback) {

                var aMethodName = "pS_RequestReply";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( ( this._v_RequestReplyLazy == true) &&
                    !this._v_RequestReplyRetrieved &&
                    !( this._v_Reply == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                var aLazyInitializer    = this.fLazyInitializer( theCallback, aMethodName);
                var aURLpath            = this.fURLpath( theCallback);
                var aRequestData        = this.fRequestData( theCallback, aMethodName);
                var aFormMultiparts     = this.fFormMultiparts( theCallback, aMethodName);
                var aFormUploads        = this.fFormUploads( theCallback, aMethodName);
                var aRequiredStatusCode = this.fRequiredStatusCode( theCallback);
                var aForgivableStatusCodes = this.fForgivableStatusCodes( theCallback);
                var aResultParser       = this.fResultParser( theCallback, aMethodName);
                var aExpectedExceptions = this.fExpectedExceptions( theCallback, aMethodName);
                var aContentKind        = this.fContentKind( theCallback, aMethodName);
                var aContentEncoding    = this.fContentEncoding( theCallback, aMethodName);
                var aStatusCodeHasBeenForgivenFunction = this.fStatusCodeHasBeenForgiven();


                this.pS_AsyncRequestMethodFromLazyInitializer(
                    theCallback,
                    aMethodName,
                    aLazyInitializer,
                    aURLpath,
                    aRequestData,
                    aFormMultiparts,
                    aFormUploads,
                    aRequiredStatusCode,
                    aResultParser,
                    aExpectedExceptions,
                    aContentKind,
                    aContentEncoding,
                    null, /* theOptions */
                    aForgivableStatusCodes,
                    aStatusCodeHasBeenForgivenFunction
                );
            };
            if( pS_RequestReply){}/* CQT */
            aPrototype.pS_RequestReply = pS_RequestReply;










            var pS_VerifyExpectedResponse = function( theCallback) {

                var aMethodName = "pS_VerifyExpectedResponse";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( this._v_ExpectedResponse === this.REQUESTREPLY_NOEXPECTEDRESPONSESENTINEL) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_ExpectedResponse", null));
                    return;
                }

                var aReply = this._v_Reply;
                if( this._v_UsePayloadHolder) {
                    aReply = this._v_Reply._v_Payload;
                }


                var aFirstDiff = theM_traversals.fgFirstDiff( aReply, this._v_ExpectedResponse);
                if( !( aFirstDiff == null)) {

                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_EXPECTEDRESPONSEFAILED, null, "theM_traversals.fgFirstDiff( this._v_Reply, this._v_ExpectedResponse)", aFirstDiff);

                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "theM_traversals.fgFirstDiff( this._v_Reply, this._v_ExpectedResponse)", aFirstDiff));
                    return;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!theM_traversals.fgFirstDiff( this._v_Reply, this._v_ExpectedResponse)", null));
            };
            if( pS_VerifyExpectedResponse){}/* CQT */
            aPrototype.pS_VerifyExpectedResponse = pS_VerifyExpectedResponse;








            var pS_VerifyExpectedResponsePart = function( theCallback) {

                var aMethodName = "pS_VerifyExpectedResponsePart";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( this._v_ExpectedResponsePart === this.REQUESTREPLY_NOEXPECTEDRESPONSESENTINEL) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_ExpectedResponsePart", null));
                    return;
                }

                var aReply = this._v_Reply;
                if( this._v_UsePayloadHolder) {
                    aReply = this._v_Reply._v_Payload;
                }

                var aFirstDiff = theM_traversals.fgFirstDiffFromLeft( aReply, this._v_ExpectedResponsePart);
                if( !( aFirstDiff == null)) {

                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_EXPECTEDRESPONSEFAILED, null, "theM_traversals.fgFirstDiff( this._v_Reply, this._v_ExpectedResponsePart)", aFirstDiff);

                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "theM_traversals.fgFirstDiff( this._v_Reply, this._v_ExpectedResponsePart)", aFirstDiff));
                    return;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!theM_traversals.fgFirstDiff( this._v_Reply, this._v_ExpectedResponsePart)", null));
            };
            if( pS_VerifyExpectedResponsePart){}/* CQT */
            aPrototype.pS_VerifyExpectedResponsePart = pS_VerifyExpectedResponsePart;







            var pF_RequestReply = function( theCallback) {
                var aMethodName = "pF_RequestReply";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_RequestReply){}/* CQT */
            aPrototype.pF_RequestReply = pF_RequestReply;







            var fOwnTestMethodToRun = function() {
                return this.pSS_RequestReply.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_RequestReply = function( theCallback) {
                var aMethodName = "pSS_RequestReply";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_RequestReply.bind( this),
                    this.pS_VerifyExpectedResponse.bind( this),
                    this.pS_VerifyExpectedResponsePart.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_RequestReply){}/* CQT */
            aPrototype.pSS_RequestReply = pSS_RequestReply;







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






            var fReleasePayloads_RequestReply = function( ) {

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
            if( fReleasePayloads_RequestReply){}/* CQT */
            aPrototype.fReleasePayloads_RequestReply = fReleasePayloads_RequestReply;







            return aPrototype;

        })();




        var RequestReply_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_RequestReplyLazy = null;
            this._v_RequestReplyRetrieved = null;

            this._v_BaseURLparmName     = null;
            this._v_BaseURL             = null;
            this._v_URLpath             = null;
            this._v_URLfull             = null;
            this._v_URLparms            = null;
            this._v_URLparmsnotencoded  = null;
            this._v_URLpathParms        = null;
            this._v_RequestMethod       = null;
            this._v_RequestData         = null;
            this._v_RequestContributors = null;
            this._v_Multiparts          = null;
            this._v_Uploads             = null;
            this._v_ReplyConsumers      = null;
            this._v_StatusCode          = null;
            this._v_ForgivableStatusCodes =null;
            this._v_ExpectedResponse    = null;
            this._v_ExpectedResponsePart= null;
            this._v_ExpectedExceptions  = null;
            this._v_DumpUrl             = null;
            this._v_DumpRequestData     = null;
            this._v_DumpReply           = null;
            this._v_SessionTestParmName = null;
            this._v_ContentKind         = null;
            this._v_ContentEncoding     = null;
            this._v_UsePayloadHolder    = null;

            this._v_Session             = null;

            this._v_StatusCodeHasBeenForgiven  = null;

            this._v_Reply               = null;

            this._pInit_RequestReply(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        RequestReply_Constructor.prototype = aRequestReply_Prototype;





        var RequestReply_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aRequestReply_Prototype;
            this._v_Type = null;

            this._v_RequestReplyLazy = null;
            this._v_RequestReplyRetrieved = null;

            this._v_BaseURLparmName     = null;
            this._v_BaseURL             = null;
            this._v_URLpath             = null;
            this._v_URLfull             = null;
            this._v_URLparms            = null;
            this._v_URLparmsnotencoded  = null;
            this._v_URLpathParms        = null;
            this._v_RequestMethod       = null;
            this._v_RequestData         = null;
            this._v_RequestContributors = null;
            this._v_Uploads             = null;
            this._v_Multiparts          = null;
            this._v_ReplyConsumers      = null;
            this._v_StatusCode          = null;
            this._v_ForgivableStatusCodes =null;
            this._v_ExpectedResponse    = null;
            this._v_ExpectedResponsePart= null;
            this._v_ExpectedExceptions  = null;
            this._v_DumpUrl             = null;
            this._v_DumpRequestData     = null;
            this._v_DumpReply           = null;
            this._v_SessionTestParmName = null;
            this._v_ContentKind         = null;
            this._v_ContentEncoding     = null;
            this._v_UsePayloadHolder    = null;

            this._v_Session             = null;

            this._v_StatusCodeHasBeenForgiven  = null;

            this._v_Reply               = null;
        };
        RequestReply_SuperPrototypeConstructor.prototype = aRequestReply_Prototype;



        var aModule = {
            "RequestReply_Prototype": aRequestReply_Prototype,
            "RequestReply_Constructor": RequestReply_Constructor,
            "RequestReply_SuperPrototypeConstructor": RequestReply_SuperPrototypeConstructor
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

            var aM_runsubs_test  = require('./runsubs-test');
            var aM_parms_general = require('../general-test/parms-general');
            var aM_overrider     = require('./overrider');
            var aM_sentinels     = require('./sentinels');
            var aM_specloader    = require('./resloader/specloader');
            var aM_fs            = require('fs');
            var aM_path          = require('path');
            var aM_traversals    = require('./traversals/traversals');
            var aM_payloadholder = require('./payloadholder');


            return aMod_definer(
                aM_runsubs_test,
                aM_parms_general,
                aM_overrider,
                aM_sentinels,
                aM_specloader,
                aM_fs,
                aM_path,
                aM_traversals,
                aM_payloadholder
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./runsubs-test",
            "../general-test/parms-general",
            "./overrider",
            "./sentinels",
            "./resloader/specloader",
            "fs",
            "path",
            "./traversals/traversals",
            "./payloadholder"
        ], function (
                theM_runsubs_test,
                theM_parms_general,
                theM_overrider,
                theM_sentinels,
                theM_specloader,
                theM_fs,
                theM_path,
                theM_traversals,
                theM_payloadholder
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_parms_general,
                theM_overrider,
                theM_sentinels,
                theM_specloader,
                theM_fs,
                theM_path,
                theM_traversals,
                theM_payloadholder
            );
        });
    }


}());


