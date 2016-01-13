'use strict';

/*
 dicomrepr-test.js
 Creado 2014511191345
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
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_traversals,
                                 theM_payloadholder,
                                 theM_dicomconstants,
                                 theM_dicomreprconstants,
                                 theM_dicomdirectoryrepr,
                                 theM_dicompatientrepr,
                                 theM_dicomstudyrepr,
                                 theM_dicomseriesrepr,
                                 theM_dicominstancerepr,
                                 theM_dicomelementrepr,
                                 theM_dicomfragmentrepr) {


        var ModuleName     = "dicomrepr-test";
        var ModulePackages = "dicom-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.USEPAYLOADHOLDER    = false;

            theToInit.MARSHALLROOT        = false;
            theToInit.MARSHALLTRAVERSED   = false;
            theToInit.MARSHALLCREATED     = false;

            theToInit.DUMP_CREATIONS      = false;
            theToInit.DUMP_CREATEERRORS   = false;
            theToInit.DUMP_MARSHALLED     = false;

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

            theToInit.PARMSPREFIX_DICOMREPR = "dicomrepr";


            theToInit.PARM_DICOMREPR_USEPAYLOADHOLDER   = theToInit.PARMSPREFIX_DICOMREPR + ".usePayloadHolder";

            theToInit.PARM_DICOMREPR_ROOT               = theToInit.PARMSPREFIX_DICOMREPR + ".root";
            theToInit.PARM_DICOMREPR_TRAVERSAL          = theToInit.PARMSPREFIX_DICOMREPR + ".traversal";
            theToInit.PARM_DICOMREPR_CREATESPECS        = theToInit.PARMSPREFIX_DICOMREPR + ".createSpecs";

            theToInit.PARM_DICOMREPR_MARSHALLROOT       = theToInit.PARMSPREFIX_DICOMREPR + ".marshallRoot";
            theToInit.PARM_DICOMREPR_MARSHALLTRAVERSED  = theToInit.PARMSPREFIX_DICOMREPR + ".marshallTraversed";
            theToInit.PARM_DICOMREPR_MARSHALLCREATED    = theToInit.PARMSPREFIX_DICOMREPR + ".marshallCreated";


            theToInit.PARM_DICOMREPR_DUMP_CREATIONS     = theToInit.PARMSPREFIX_DICOMREPR + ".dump_Creations";
            theToInit.PARM_DICOMREPR_DUMP_CREATEERRORS  = theToInit.PARMSPREFIX_DICOMREPR + ".dump_CreateErrors";
            theToInit.PARM_DICOMREPR_DUMP_MARSHALLED    = theToInit.PARMSPREFIX_DICOMREPR + ".dump_Marshalled";


            theToInit.PARMS_DICOMREPR = [
                theToInit.PARM_DICOMREPR_USEPAYLOADHOLDER,

                theToInit.PARM_DICOMREPR_ROOT,
                theToInit.PARM_DICOMREPR_TRAVERSAL,
                theToInit.PARM_DICOMREPR_CREATESPECS,

                theToInit.PARM_DICOMREPR_MARSHALLROOT,
                theToInit.PARM_DICOMREPR_MARSHALLTRAVERSED,
                theToInit.PARM_DICOMREPR_MARSHALLCREATED,

                theToInit.PARM_DICOMREPR_DUMP_CREATIONS,
                theToInit.PARM_DICOMREPR_DUMP_CREATEERRORS,
                theToInit.PARM_DICOMREPR_DUMP_MARSHALLED
            ];


            theToInit.DICOMREPRERROR_UNSUPPORTEDDICOMSTRUCTURETYPE = "UNSUPPORTEDDICOMSTRUCTURETYPE";
            theToInit.DICOMREPRERROR_NOTCREATED                    = "NOTCREATED";
            theToInit.DICOMREPRERROR_WRONGPARENTTYPE               = "WRONGPARENTTYPE";
            theToInit.DICOMREPRERROR_WRONGROLEINPARENT             = "WRONGROLEINPARENT";
            theToInit.DICOMREPRERROR_MISSINGPARENT                 = "MISSINGPARENT";
            theToInit.DICOMREPRERROR_MISSINGFACTORYPARM            = "MISSINGFACTORYPARM";


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











        var aDicomReprTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "DicomReprTest";

            aPrototype._v_Prototype_DicomReprTest = aPrototype;



            aPrototype._v_UsePayloadHolder   = null;

            aPrototype._v_Root               = null;
            aPrototype._v_Traversal          = null;
            aPrototype._v_CreateSpecs        = null;

            aPrototype._v_MarshallRoot       = null;
            aPrototype._v_MarshallTraversed  = null;
            aPrototype._v_MarshallCreated    = null;

            aPrototype._v_Dump_Creations     = null;
            aPrototype._v_Dump_CreateErrors  = null;
            aPrototype._v_Dump_Marshalled    = null;

            aPrototype._v_Traversed          = null;
            aPrototype._v_CreationCtxt       = null;
            aPrototype._v_Created            = null;
            aPrototype._v_Marshalled         = null;




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_DicomReprTest(
                    theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomReprTest = function(
                theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_UsePayloadHolder   = null;

                this._v_Root               = null;
                this._v_Traversal          = null;
                this._v_CreateSpecs        = null;

                this._v_MarshallRoot       = null;
                this._v_MarshallTraversed  = null;
                this._v_MarshallCreated    = null;

                this._v_Dump_Creations     = null;
                this._v_Dump_CreateErrors  = null;
                this._v_Dump_Marshalled    = null;


                this._v_Traversed          = null;
                this._v_CreationCtxt       = null;
                this._v_Created            = null;

                this._v_Marshalled         = null;


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_DicomReprTest", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_DicomReprTest){}/* CQT */
            aPrototype._pInit_DicomReprTest = _pInit_DicomReprTest;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_DicomReprTest( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomReprTest = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_UsePayloadHolder   = undefined;

                this._v_Root               = undefined;
                this._v_Traversal          = undefined;
                this._v_CreateSpecs        = undefined;

                this._v_MarshallRoot       = undefined;
                this._v_MarshallTraversed  = undefined;
                this._v_MarshallCreated    = undefined;

                this._v_Dump_Creations     = null;
                this._v_Dump_CreateErrors  = null;
                this._v_Dump_Marshalled    = null;

                this._v_Traversed          = null;
                this._v_CreationCtxt       = null;
                this._v_Created            = null;
                this._v_Marshalled         = null;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_DicomReprTest){}/* CQT */
            aPrototype._pRelease_DicomReprTest = _pRelease_DicomReprTest;









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

                this.pCleanUpTest_DicomReprTest( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;







            var pCleanUpTest_DicomReprTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {


                    if( this._v_Root && ( typeof this._v_Root == "object") && this._v_Root.pReleasePayload && ( typeof this._v_Root.pReleasePayload == "function")) {
                        this._v_Root.pReleasePayload();
                    }
                    this._v_Root          = undefined;



                    if( this._v_Traversed && ( typeof this._v_Traversed == "object") && this._v_Traversed.pReleasePayload && ( typeof this._v_Traversed.pReleasePayload == "function")) {
                        this._v_Traversed.pReleasePayload();
                    }
                    this._v_Traversed          = undefined;



                    if( this._v_CreationCtxt && ( typeof this._v_CreationCtxt == "object") && this._v_CreationCtxt.pReleasePayload && ( typeof this._v_CreationCtxt.pReleasePayload == "function")) {
                        this._v_CreationCtxt.pReleasePayload();
                    }
                    this._v_CreationCtxt          = undefined;



                    if( this._v_Created && ( typeof this._v_Created == "object") && this._v_Created.pReleasePayload && ( typeof this._v_Created.pReleasePayload == "function")) {
                        this._v_Created.pReleasePayload();
                    }
                    this._v_Created          = undefined;


                    if( this._v_Marshalled && ( typeof this._v_Marshalled == "object") && this._v_Marshalled.pReleasePayload && ( typeof this._v_Marshalled.pReleasePayload == "function")) {
                        this._v_Marshalled.pReleasePayload();
                    }
                    this._v_Marshalled          = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_DicomReprTest){}/* CQT */
            aPrototype.pCleanUpTest_DicomReprTest = pCleanUpTest_DicomReprTest;












            var fUsePayloadHolder = function( ) {

                return this._v_UsePayloadHolder;
            };
            if( fUsePayloadHolder){}/* CQT */
            aPrototype.fUsePayloadHolder = fUsePayloadHolder;









            var pS_ResolveParms = function( theCallback) {
                var aMethodName = "pS_ResolveParms";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var someParmsToResolve = [
                    this.PARM_DICOMREPR_USEPAYLOADHOLDER,

                    this.PARM_DICOMREPR_ROOT,
                    this.PARM_DICOMREPR_TRAVERSAL,
                    this.PARM_DICOMREPR_CREATESPECS,

                    this.PARM_DICOMREPR_MARSHALLROOT,
                    this.PARM_DICOMREPR_MARSHALLTRAVERSED,
                    this.PARM_DICOMREPR_MARSHALLCREATED,

                    this.PARM_DICOMREPR_DUMP_CREATIONS,
                    this.PARM_DICOMREPR_DUMP_CREATEERRORS,
                    this.PARM_DICOMREPR_DUMP_MARSHALLED
                ];

                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }




                if( this._v_MarshallRoot == null) {
                    var aMarshallRootResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_MARSHALLROOT];
                    if( aMarshallRootResolution && aMarshallRootResolution._v_Success) {
                        this._v_MarshallRoot = aMarshallRootResolution._v_ParmValue;
                    }
                    else {
                        this._v_MarshallRoot = this.MARSHALLROOT;
                    }
                }

                if( this._v_MarshallTraversed == null) {
                    var aMarshallTraversedResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_MARSHALLTRAVERSED];
                    if( aMarshallTraversedResolution && aMarshallTraversedResolution._v_Success) {
                        this._v_MarshallTraversed = aMarshallTraversedResolution._v_ParmValue;
                    }
                    else {
                        this._v_MarshallTraversed = this.MARSHALLTRAVERSED;
                    }
                }



                if( this._v_MarshallCreated == null) {
                    var aMarshallCreatedResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_MARSHALLCREATED];
                    if( aMarshallCreatedResolution && aMarshallCreatedResolution._v_Success) {
                        this._v_MarshallCreated = aMarshallCreatedResolution._v_ParmValue;
                    }
                    else {
                        this._v_MarshallCreated = this.MARSHALLCREATED;
                    }
                }





                if( this._v_Dump_Creations == null) {
                    var aDump_CreationsResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_DUMP_CREATIONS];
                    if( aDump_CreationsResolution && aDump_CreationsResolution._v_Success) {
                        this._v_Dump_Creations = aDump_CreationsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Creations = this.DUMP_CREATIONS;
                    }
                }





                if( this._v_Dump_CreateErrors == null) {
                    var aDump_CreateErrorsResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_DUMP_CREATEERRORS];
                    if( aDump_CreateErrorsResolution && aDump_CreateErrorsResolution._v_Success) {
                        this._v_Dump_CreateErrors = aDump_CreateErrorsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_CreateErrors = this.DUMP_CREATEERRORS;
                    }
                }




                if( this._v_Dump_Marshalled == null) {
                    var aDump_MarshalledResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_DUMP_MARSHALLED];
                    if( aDump_MarshalledResolution && aDump_MarshalledResolution._v_Success) {
                        this._v_Dump_Marshalled = aDump_MarshalledResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Marshalled = this.DUMP_MARSHALLED;
                    }
                }









                if( this._v_UsePayloadHolder == null) {
                    var aUsePayloadHolderResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_USEPAYLOADHOLDER];
                    if( aUsePayloadHolderResolution && aUsePayloadHolderResolution._v_Success) {
                        this._v_UsePayloadHolder = aUsePayloadHolderResolution._v_ParmValue;
                    } else {
                        this._v_UsePayloadHolder = this.USEPAYLOADHOLDER;
                    }
                }




                if( this._v_Root == null) {
                    var aRootResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_ROOT];
                    if( aRootResolution && aRootResolution._v_Success && aRootResolution._v_ParmValue) {
                        this._v_Root = aRootResolution._v_ParmValue;
                    }
                }
                if( this._v_Root) {
                    this._v_Root = this.fUnwrapPayloadFromHolder( this._v_Root);
                }
                if( this._v_Root && this._v_UsePayloadHolder) {
                    this._v_Root = this.fWrapPayloadWithHolder( this._v_Root);
                }



                if( this._v_Traversal == null) {
                    var aTraversalResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_TRAVERSAL];
                    if( aTraversalResolution && aTraversalResolution._v_Success) {
                        this._v_Traversal = aTraversalResolution._v_ParmValue;
                    }
                }



                if( this._v_CreateSpecs== null) {
                    var aCreateSpecResolution = aParmResolutionsDict[ this.PARM_DICOMREPR_CREATESPECS];
                    if( aCreateSpecResolution && aCreateSpecResolution._v_Success) {
                        this._v_CreateSpecs= aCreateSpecResolution._v_ParmValue;
                    }
                }



                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_ResolveParms){}/* CQT */
            aPrototype.pS_ResolveParms = pS_ResolveParms;











            var pS_RetrieveRoot = function( theCallback) {
                var aMethodName = "pS_RetrieveRoot";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Root) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_Root", null));
                    return;
                }


                var aRoot = this.fUnwrapPayloadFromHolder( this._v_Root);
                if( !aRoot) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fUnwrapPayloadFromHolder( this._v_Root)", null));
                    return;
                }


                var aReplacedRoot = this.fParmValueReplacement( aRoot);
                if( !aReplacedRoot) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fParmValueReplacement( this.fUnwrapPayloadFromHolder( this._v_Root))", null));
                    return;
                }


                if( this._v_UsePayloadHolder) {
                    this._v_Root = this.fWrapPayloadWithHolder( aReplacedRoot);
                }
                else {
                    this._v_Root = aReplacedRoot;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_RetrieveRoot){}/* CQT */
            aPrototype.pS_RetrieveRoot = pS_RetrieveRoot;











            var pS_TraverseFromRoot = function( theCallback) {
                var aMethodName = "pS_TraverseFromRoot";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Traversal) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_Traversal", null));
                    return;
                }


                if( !this._v_Root) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Root", null));
                    return;
                }


                var aRoot = this.fUnwrapPayloadFromHolder( this._v_Root);
                if( !aRoot) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fUnwrapPayloadFromHolder( this._v_Root)", null));
                    return;
                }


                this._v_Traversal = this.fParmValueReplacement( this._v_Traversal);


                var aTraversed = theM_traversals.fgTraverseToFromValue( this._v_Traversal, aRoot, null);
                if( !aTraversed) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!theM_traversals.fgTraverseToFromValue( this._v_Traversal, this.fUnwrapPayloadFromHolder( this._v_Root))", null));
                    return;
                }

                var aTraversedValue = aTraversed[ "value"];

                if( this._v_UsePayloadHolder) {
                    this._v_Traversed = this.fWrapPayloadWithHolder( aTraversedValue);
                }
                else {
                    this._v_Traversed = aTraversedValue;
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_TraverseFromRoot){}/* CQT */
            aPrototype.pS_TraverseFromRoot = pS_TraverseFromRoot;








            var fNewVoidCreationCtxt = function( ) {

                var aNewVoidCreationCtxt = {
                    "lastPath":  null,
                    "creations": [ ],
                    "errors":    [ ]
                };

                return aNewVoidCreationCtxt;

            };
            if( fNewVoidCreationCtxt){}/* CQT */
            aPrototype.fNewVoidCreationCtxt = fNewVoidCreationCtxt;







            var pS_CreateDicomReprs = function( theCallback) {
                var aMethodName = "pS_CreateDicomReprs";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_CreateSpecs) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_CreateSpecs", null));
                    return;
                }


                var aCreationParent = this.fUnwrapPayloadFromHolder( this._v_Traversed);
                if( !aCreationParent) {
                    aCreationParent = this.fUnwrapPayloadFromHolder( this._v_Root);
                }



                this._v_CreationCtxt = this.fNewVoidCreationCtxt();


                
                var someCreated = this.fPerformCreateSpecs( aCreationParent, this._v_CreateSpecs);

                if( !someCreated || !someCreated.length) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fPerformCreateSpecs( aCreationParent, this._v_CreateSpecs)", null));
                    return;
                }


                if( this._v_UsePayloadHolder) {
                    this._v_Created = this.fWrapPayloadWithHolder( someCreated);
                }
                else {
                    this._v_Created = someCreated;
                }

                if( this._v_CreationCtxt[ "errors"].length) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "this._v_CreationCtxt[ 'errors'].length", null));
                    return;
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_CreateDicomReprs){}/* CQT */
            aPrototype.pS_CreateDicomReprs = pS_CreateDicomReprs;











            var fExtendPath = function( thePath, theRole, theIdentifier) {


                var aPath = "";
                if( thePath) {
                    aPath += thePath;
                }


                if( theRole) {
                    if( aPath) {
                        aPath += theM_sentinels.TRAVERSALSTEPSSEPARATOR;
                    }
                    aPath += theRole;
                }


                if( theIdentifier) {
                    if( aPath) {
                        aPath += theM_sentinels.TRAVERSALSTEPSSEPARATOR;
                    }
                    aPath += theIdentifier;
                }


                return aPath;

            };
            if( fExtendPath){}/* CQT */
            aPrototype.fExtendPath = fExtendPath;











            var fPerformCreateSpecs = function( theParent, theCreateSpecs) {

                if( !theCreateSpecs) {
                    return null;
                }

                var aNumCreateSpecs = theCreateSpecs.length;

                var someCreated = [ ];

                var aPath = this._v_Traversal;
                if( !aPath) {
                    aPath = "";
                }

                this._v_CreationCtxt[ "lastPath"] = aPath;


                for( var aCreateSpecIdx=0; aCreateSpecIdx < aNumCreateSpecs; aCreateSpecIdx++) {
                    var aCreateSpec = theCreateSpecs[ aCreateSpecIdx];
                    if( aCreateSpec) {

                        var aCreated = this.fPerformOneCreateSpec( theParent, aCreateSpec, aPath);
                        if( !aCreated) {
                            return someCreated;
                        }

                        someCreated.push( aCreated);
                    }
                }

                return someCreated;

            };
            if( fPerformCreateSpecs){}/* CQT */
            aPrototype.fPerformCreateSpecs = fPerformCreateSpecs;










            var fPerformOneCreateSpec = function( theParent, theCreateSpec, thePath) {

                if( !theCreateSpec) {
                    return null;
                }

                var aDicomStructureType = theCreateSpec[ "dicomStructureType"];
                if( !aDicomStructureType) {
                    return null;
                }

                switch( aDicomStructureType) {

                    case theM_dicomreprconstants.DICOMSTRUCTURETYPE_DIRECTORY:
                        return this.fPerformCreate_Directory( theParent, theCreateSpec, thePath);

                    case theM_dicomreprconstants.DICOMSTRUCTURETYPE_PATIENT:
                        return this.fPerformCreate_Patient(   theParent, theCreateSpec, thePath);

                    case theM_dicomreprconstants.DICOMSTRUCTURETYPE_STUDY:
                        return this.fPerformCreate_Study(     theParent, theCreateSpec, thePath);

                    case theM_dicomreprconstants.DICOMSTRUCTURETYPE_SERIES:
                        return this.fPerformCreate_Series(    theParent, theCreateSpec, thePath);

                    case theM_dicomreprconstants.DICOMSTRUCTURETYPE_INSTANCE:
                        return this.fPerformCreate_Instance(  theParent, theCreateSpec, thePath);

                    case theM_dicomreprconstants.DICOMSTRUCTURETYPE_ELEMENT:
                        return this.fPerformCreate_Element(   theParent, theCreateSpec, thePath);

                    case theM_dicomreprconstants.DICOMSTRUCTURETYPE_FRAGMENT:
                        return this.fPerformCreate_Fragment(  theParent, theCreateSpec, thePath);

                    default:
                }



                this._v_CreationCtxt[ "errors"].push( {
                    "error": this.DICOMREPRERROR_UNSUPPORTEDDICOMSTRUCTURETYPE,
                    "spec":  theCreateSpec
                });

                if( this._v_Dump_CreateErrors) {
                    console.log( "CREATEERROR " + this.DICOMREPRERROR_UNSUPPORTEDDICOMSTRUCTURETYPE);
                }

                return null;

            };
            if( fPerformOneCreateSpec){}/* CQT */
            aPrototype.fPerformOneCreateSpec = fPerformOneCreateSpec;









            var fPerformCreate_Subs = function( theOwner, theCreateSpec, thePath) {

                if( !theCreateSpec) {
                    return null;
                }

                if( !theOwner) {
                    return null;
                }

                var someSubCreateSpecs = theCreateSpec[ "factorySubs"];
                if( someSubCreateSpecs) {

                    var aNumSubCreateSpecs = someSubCreateSpecs.length;
                    for( var aSubCreateSpecIdx=0; aSubCreateSpecIdx < aNumSubCreateSpecs; aSubCreateSpecIdx++) {
                        var aSubCreateSpec = someSubCreateSpecs[ aSubCreateSpecIdx];
                        if( aSubCreateSpec) {

                            var aSubCreated = this.fPerformOneCreateSpec( theOwner, aSubCreateSpec, thePath)
                            if( !aSubCreated) {
                                return null;
                            }
                        }
                    }
                }

                return theOwner;

            };
            if( fPerformCreate_Subs){}/* CQT */
            aPrototype.fPerformCreate_Subs = fPerformCreate_Subs;










            var fPerformCreate_Directory = function( theParent, theCreateSpec, thePath) {

                if( !theCreateSpec) {
                    return null;
                }

                var aDicomStructureType = theCreateSpec[ "dicomStructureType"];
                if( !aDicomStructureType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_DIRECTORY) {
                    return null;
                }


                var aDirectoryId = null;

                var aDirectoryFactoryParms = theCreateSpec[ "factoryParms"];
                if( aDirectoryFactoryParms) {
                    aDirectoryId = aDirectoryFactoryParms[ "id"];
                }



                var aPath = this.fExtendPath( thePath, null, aDirectoryId);
                
                this._v_CreationCtxt[ "lastPath"] = aPath;




                var aCreatedDirectory = new theM_dicomdirectoryrepr.DicomDirectoryRepr_Constructor( aDirectoryId);
                if( !aCreatedDirectory) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_NOTCREATED,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                this._v_CreationCtxt[ "creations"].push( {
                    "object": aCreatedDirectory,
                    "spec":  theCreateSpec
                });


                if( this._v_Dump_Creations) {
                    console.log( "CREATED " + aDicomStructureType + " " + aPath);
                }



                if( !this.fPerformCreate_Subs ( aCreatedDirectory, theCreateSpec, aPath)) {
                    return null;
                }

                return aCreatedDirectory;

            };
            if( fPerformCreate_Directory){}/* CQT */
            aPrototype.fPerformCreate_Directory = fPerformCreate_Directory;










            var fPerformCreate_Patient = function( theParent, theCreateSpec, thePath) {

                if( !theCreateSpec) {
                    return null;
                }

                var aDicomStructureType = theCreateSpec[ "dicomStructureType"];
                if( !aDicomStructureType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_PATIENT) {
                    return null;
                }


                var aParent       = this.fUnwrapPayloadFromHolder( theParent);

                if( aParent) {
                    if( !aParent.fDicomStructureType || !( aParent.fDicomStructureType() == theM_dicomreprconstants.DICOMSTRUCTURETYPE_DIRECTORY)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGPARENTTYPE,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }



                var aRoleInParent = theCreateSpec[ "roleInParent"];

                if( aParent) {
                    if( aRoleInParent && theM_dicomreprconstants.DICOMNESTINGROLES[ theM_dicomreprconstants.DICOMSTRUCTURETYPE_DIRECTORY]
                        && ( theM_dicomreprconstants.DICOMNESTINGROLES[ theM_dicomreprconstants.DICOMSTRUCTURETYPE_DIRECTORY].indexOf( aRoleInParent) < 0)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGROLEINPARENT,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }


                var aPatientId = null;

                var aPatientFactoryParms = theCreateSpec[ "factoryParms"];
                if( aPatientFactoryParms) {
                    aPatientId = aPatientFactoryParms[ "id"];
                }



                var aPath = this.fExtendPath( thePath, aRoleInParent, aPatientId);
                this._v_CreationCtxt[ "lastPath"] = aPath;



                var aCreatedPatient = null;

                if( aParent) {
                    aCreatedPatient = aParent.fNew_Patient( aPatientId);
                }
                else {
                    aCreatedPatient = new theM_dicompatientrepr.DicomPatientRepr_Constructor( aParent, aPatientId);
                }

                if( !aCreatedPatient) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_NOTCREATED,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                this._v_CreationCtxt[ "creations"].push( {
                    "object": aCreatedPatient,
                    "spec":  theCreateSpec
                });



                if( this._v_Dump_Creations) {
                    console.log( "CREATED " + aDicomStructureType + " " + aPath);
                }



                if( !this.fPerformCreate_Subs ( aCreatedPatient, theCreateSpec, aPath)) {
                    return null;
                }

                return aCreatedPatient;

            };
            if( fPerformCreate_Patient){}/* CQT */
            aPrototype.fPerformCreate_Patient = fPerformCreate_Patient;












            var fPerformCreate_Study = function( theParent, theCreateSpec, thePath) {

                if( !theCreateSpec) {
                    return null;
                }

                var aDicomStructureType = theCreateSpec[ "dicomStructureType"];
                if( !aDicomStructureType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_STUDY) {
                    return null;
                }


                var aParent       = this.fUnwrapPayloadFromHolder( theParent);

                if( aParent) {
                    if( !aParent.fDicomStructureType || !( aParent.fDicomStructureType() == theM_dicomreprconstants.DICOMSTRUCTURETYPE_PATIENT)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGPARENTTYPE,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }




                var aRoleInParent = theCreateSpec[ "roleInParent"];

                if( aParent) {
                    if( aRoleInParent && theM_dicomreprconstants.DICOMNESTINGROLES[ theM_dicomreprconstants.DICOMSTRUCTURETYPE_PATIENT]
                        && ( theM_dicomreprconstants.DICOMNESTINGROLES[ theM_dicomreprconstants.DICOMSTRUCTURETYPE_PATIENT].indexOf( aRoleInParent) < 0)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGROLEINPARENT,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }


                var aStudyId = null;

                var aStudyFactoryParms = theCreateSpec[ "factoryParms"];
                if( aStudyFactoryParms) {
                    aStudyId = aStudyFactoryParms[ "id"];
                }



                var aPath = this.fExtendPath( thePath, aRoleInParent, aStudyId);
                this._v_CreationCtxt[ "lastPath"] = aPath;



                var aCreatedStudy = null;

                if( aParent) {
                    aCreatedStudy = aParent.fNew_Study( aStudyId);
                }
                else {
                    aCreatedStudy = new theM_dicomstudyrepr.DicomStudyRepr_Constructor( aParent, aStudyId);
                }

                if( !aCreatedStudy) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_NOTCREATED,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                this._v_CreationCtxt[ "creations"].push( {
                    "object": aCreatedStudy,
                    "spec":  theCreateSpec
                });



                if( this._v_Dump_Creations) {
                    console.log( "CREATED " + aDicomStructureType + " " + aPath);
                }



                if( !this.fPerformCreate_Subs ( aCreatedStudy, theCreateSpec, aPath)) {
                    return null;
                }

                return aCreatedStudy;

            };
            if( fPerformCreate_Study){}/* CQT */
            aPrototype.fPerformCreate_Study = fPerformCreate_Study;















            var fPerformCreate_Series = function( theParent, theCreateSpec, thePath) {

                if( !theCreateSpec) {
                    return null;
                }

                var aDicomStructureType = theCreateSpec[ "dicomStructureType"];
                if( !aDicomStructureType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_SERIES) {
                    return null;
                }


                var aParent       = this.fUnwrapPayloadFromHolder( theParent);

                if( aParent) {
                    if( !aParent.fDicomStructureType || !( aParent.fDicomStructureType() == theM_dicomreprconstants.DICOMSTRUCTURETYPE_STUDY)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGPARENTTYPE,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }




                var aRoleInParent = theCreateSpec[ "roleInParent"];

                if( aParent) {
                    if( aRoleInParent && theM_dicomreprconstants.DICOMNESTINGROLES[ theM_dicomreprconstants.DICOMSTRUCTURETYPE_STUDY]
                        && ( theM_dicomreprconstants.DICOMNESTINGROLES[ theM_dicomreprconstants.DICOMSTRUCTURETYPE_STUDY].indexOf( aRoleInParent) < 0)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGROLEINPARENT,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }


                var aSeriesId = null;

                var aSeriesFactoryParms = theCreateSpec[ "factoryParms"];
                if( aSeriesFactoryParms) {
                    aSeriesId = aSeriesFactoryParms[ "id"];
                }



                var aPath = this.fExtendPath( thePath, aRoleInParent, aSeriesId);
                this._v_CreationCtxt[ "lastPath"] = aPath;



                var aCreatedSeries = null;

                if( aParent) {
                    aCreatedSeries = aParent.fNew_Series( aSeriesId);
                }
                else {
                    aCreatedSeries = new theM_dicomseriesrepr.DicomSeriesRepr_Constructor( aParent, aSeriesId, aPath);
                }

                if( !aCreatedSeries) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_NOTCREATED,
                        "spec":  theCreateSpec
                    });

                    return null;
                }

                this._v_CreationCtxt[ "creations"].push( {
                    "object": aCreatedSeries,
                    "spec":  theCreateSpec
                });



                if( this._v_Dump_Creations) {
                    console.log( "CREATED " + aDicomStructureType + " " + aPath);
                }




                if( !this.fPerformCreate_Subs ( aCreatedSeries, theCreateSpec, aPath)) {
                    return null;
                }

                return aCreatedSeries;

            };
            if( fPerformCreate_Series){}/* CQT */
            aPrototype.fPerformCreate_Series = fPerformCreate_Series;

















            var fPerformCreate_Instance = function( theParent, theCreateSpec, thePath) {

                if( !theCreateSpec) {
                    return null;
                }

                var aDicomStructureType = theCreateSpec[ "dicomStructureType"];
                if( !aDicomStructureType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_INSTANCE) {
                    return null;
                }


                var aParent       = this.fUnwrapPayloadFromHolder( theParent);

                var aParentType = null;
                if( aParent) {
                    if( aParent.fDicomStructureType) {
                        aParentType = aParent.fDicomStructureType();
                    }
                    if(    !( aParentType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_SERIES)
                        && !( aParentType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_ELEMENT)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGPARENTTYPE,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }



                var aRoleInParent = theCreateSpec[ "roleInParent"];

                if( aParent) {
                    if( aRoleInParent && theM_dicomreprconstants.DICOMNESTINGROLES[ aParentType]
                        && ( theM_dicomreprconstants.DICOMNESTINGROLES[ aParentType].indexOf( aRoleInParent) < 0)) {


                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGROLEINPARENT,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }



                var anInstanceId = null;

                var anInstanceFactoryParms = theCreateSpec[ "factoryParms"];
                if( anInstanceFactoryParms) {
                    anInstanceId = anInstanceFactoryParms[ "id"];
                }



                var aPath = this.fExtendPath( thePath, aRoleInParent, anInstanceId);
                this._v_CreationCtxt[ "lastPath"] = aPath;

                

                var aCreatedInstance = null;

                if( aParent) {
                    if( aParentType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_SERIES) {
                        aCreatedInstance = aParent.fNew_Instance( anInstanceId);
                    }
                    else {
                        if( aParentType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_ELEMENT) {
                            aCreatedInstance = aParent.fNew_Item( anInstanceId);
                        }
                    }
                }
                else {
                    aCreatedInstance = new theM_dicominstancerepr.DicomInstanceRepr_Constructor( aParent, null, anInstanceId, aPath);
                }

                if( !aCreatedInstance) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_NOTCREATED,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                this._v_CreationCtxt[ "creations"].push( {
                    "object": aCreatedInstance,
                    "spec":  theCreateSpec
                });



                if( this._v_Dump_Creations) {
                    console.log( "CREATED " + aDicomStructureType + " " + aPath);
                }



                if( !this.fPerformCreate_Subs ( aCreatedInstance, theCreateSpec, aPath)) {
                    return null;
                }

                return aCreatedInstance;

            };
            if( fPerformCreate_Instance){}/* CQT */
            aPrototype.fPerformCreate_Instance = fPerformCreate_Instance;

















            var fPerformCreate_Element = function( theParent, theCreateSpec, thePath) {

                if( !theCreateSpec) {
                    return null;
                }

                var aDicomStructureType = theCreateSpec[ "dicomStructureType"];
                if( !aDicomStructureType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_ELEMENT) {
                    return null;
                }


                var aParent       = this.fUnwrapPayloadFromHolder( theParent);

                if( !aParent) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_MISSINGPARENT,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                var aParentType = null;
                if( aParent) {
                    if( aParent.fDicomStructureType) {
                        aParentType = aParent.fDicomStructureType();
                    }
                    if( !( aParentType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_INSTANCE)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGPARENTTYPE,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }




                var aRoleInParent = theCreateSpec[ "roleInParent"];

                if( aParent) {
                    if( aRoleInParent && ( theM_dicomreprconstants.DICOMNESTINGROLES[ theM_dicomreprconstants.DICOMSTRUCTURETYPE_INSTANCE].indexOf( aRoleInParent) < 0)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGROLEINPARENT,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }



                var aElementFactoryParms = theCreateSpec[ "factoryParms"];



                var aTag = null;
                if( aElementFactoryParms) {
                    aTag = aElementFactoryParms[ "tag"];
                }
                if( !aTag) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_MISSINGFACTORYPARM,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                var aTagName = null;
                if( aElementFactoryParms) {
                    aTagName = aElementFactoryParms[ "tagName"];
                }



                var aPath = this.fExtendPath( thePath, aRoleInParent, aTag);
                this._v_CreationCtxt[ "lastPath"] = aPath;


                var aCreatedElement = null;

                if( aParent) {
                    aCreatedElement = aParent.fNew_Element( aTag, aTagName);
                }
                else {
                    aCreatedElement = new theM_dicomelementrepr.DicomElementRepr_Constructor( aParent, aTag, aTagName);
                }

                if( !aCreatedElement) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_NOTCREATED,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                this._v_CreationCtxt[ "creations"].push( {
                    "object": aCreatedElement,
                    "spec":  theCreateSpec
                });



                if( this._v_Dump_Creations) {
                    console.log( "CREATED " + aDicomStructureType + " " + aPath);
                }



                if( !this.fPerformCreate_Subs ( aCreatedElement, theCreateSpec, aPath)) {
                    return null;
                }

                return aCreatedElement;

            };
            if( fPerformCreate_Element){}/* CQT */
            aPrototype.fPerformCreate_Element = fPerformCreate_Element;












            var fPerformCreate_Fragment = function( theParent, theCreateSpec, thePath) {

                if( !theCreateSpec) {
                    return null;
                }

                var aDicomStructureType = theCreateSpec[ "dicomStructureType"];
                if( !aDicomStructureType == theM_dicomreprconstants.DICOMSTRUCTURETYPE_FRAGMENT) {
                    return null;
                }


                var aParent       = this.fUnwrapPayloadFromHolder( theParent);

                if( !aParent) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_MISSINGPARENT,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                if( aParent) {
                    if( !aParent.fDicomStructureType || !( aParent.fDicomStructureType() == theM_dicomreprconstants.DICOMSTRUCTURETYPE_ELEMENT)) {

                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGPARENTTYPE,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }




                var aRoleInParent = theCreateSpec[ "roleInParent"];

                if( aParent) {
                    if( aRoleInParent && theM_dicomreprconstants.DICOMNESTINGROLES[ theM_dicomreprconstants.DICOMSTRUCTURETYPE_ELEMENT]
                        && ( theM_dicomreprconstants.DICOMNESTINGROLES[ theM_dicomreprconstants.DICOMSTRUCTURETYPE_ELEMENT].indexOf( aRoleInParent) < 0)) {


                        this._v_CreationCtxt[ "errors"].push( {
                            "error": this.DICOMREPRERROR_WRONGROLEINPARENT,
                            "spec":  theCreateSpec
                        });

                        return null;
                    }
                }



                var aElementFactoryParms = theCreateSpec[ "factoryParms"];


                var anIndex = null;
                if( aElementFactoryParms) {
                    anIndex = aElementFactoryParms[ "index"];
                }
                if( !anIndex) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_MISSINGFACTORYPARM,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                var aPath = this.fExtendPath( thePath, aRoleInParent, anIndex);
                this._v_CreationCtxt[ "lastPath"] = aPath;


                var aCreatedFragment = null;

                if( aParent) {
                    aCreatedFragment = aParent.fNew_Fragment( anIndex);
                }
                else {
                    aCreatedFragment = new theM_dicomfragmentrepr.DicomFragmentRepr_Constructor( aParent, anIndex);
                }

                if( !aCreatedFragment) {

                    this._v_CreationCtxt[ "errors"].push( {
                        "error": this.DICOMREPRERROR_NOTCREATED,
                        "spec":  theCreateSpec
                    });

                    return null;
                }


                this._v_CreationCtxt[ "creations"].push( {
                    "object": aCreatedFragment,
                    "spec":  theCreateSpec
                });



                if( this._v_Dump_Creations) {
                    console.log( "CREATED " + aDicomStructureType + " " + aPath);
                }



                if( !this.fPerformCreate_Subs ( aCreatedFragment, theCreateSpec, aPath)) {
                    return null;
                }

                return aCreatedFragment;

            };
            if( fPerformCreate_Fragment){}/* CQT */
            aPrototype.fPerformCreate_Fragment = fPerformCreate_Fragment;











            var pS_MarshallDicom = function( theCallback) {
                var aMethodName = "pS_MarshallDicom";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_MarshallRoot && !this._v_MarshallTraversed && !this._v_MarshallCreated) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_MarshallRoot && !this._v_MarshallTraversed && !this._v_MarshallCreated", null));
                    return;
                }


                if( !this._v_Root && !this._v_Traversed && !this._v_Created) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_Root && !this._v_Traversed && !this._v_Created", null));
                    return;
                }


                var aToMarshall = null;
                if( this._v_MarshallRoot && this._v_Root) {
                    aToMarshall = this._v_Root;
                }
                if( !aToMarshall) {
                    if( this._v_MarshallTraversed && this._v_Traversed) {
                        aToMarshall = this._v_Traversed;
                    }
                }
                if( !aToMarshall) {
                    if( this._v_MarshallCreated && this._v_Created) {
                        aToMarshall = this._v_Created;
                    }
                }

                if( !this._v_Root && !this._v_Traversed && !this._v_Created) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!( this._v_MarshallRoot && this._v_Root) && !( this._v_MarshallTraversed && this._v_Traversed) && !( this._v_MarshallCreated && this._v_Created)", null));
                    return;
                }


                var aLogObject = null;
                if( typeof aToMarshall.length == "undefined") {
                    aLogObject = aToMarshall.fAsLogObject();
                }
                else {
                    aLogObject = [ ];

                    var aNumToMarshall = aToMarshall.length;
                    for( var aOneToMarshallIdx=0; aOneToMarshallIdx < aNumToMarshall; aOneToMarshallIdx++) {

                        var aOneToMarshall = aToMarshall[ aOneToMarshallIdx];
                        if( aOneToMarshall) {

                            var aOneLogObject = aOneToMarshall.fAsLogObject();
                            aLogObject.push( aOneLogObject);
                        }
                    }
                }

                this._v_Marshalled = aLogObject;

                var aLogObjectJSON = JSON.stringify( aLogObject, null, 4);

                console.log( "MARSHALLED " + aLogObjectJSON)


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_MarshallDicom){}/* CQT */
            aPrototype.pS_MarshallDicom = pS_MarshallDicom;













            var pF_DicomReprTest = function( theCallback) {
                var aMethodName = "pF_DicomReprTest";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_DicomReprTest){}/* CQT */
            aPrototype.pF_DicomReprTest = pF_DicomReprTest;









            var fOwnTestMethodToRun = function() {
                return this.pSS_DicomReprTest.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;










            var pSS_DicomReprTest = function( theCallback) {
                var aMethodName = "pSS_DicomReprTest";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_ResolveParms.bind( this),
                    this.pS_RetrieveRoot.bind( this),
                    this.pS_TraverseFromRoot.bind( this),
                    this.pS_CreateDicomReprs.bind( this),
                    this.pS_MarshallDicom.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_DicomReprTest){}/* CQT */
            aPrototype.pSS_DicomReprTest = pSS_DicomReprTest;







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






            var fReleasePayloads_DicomReprTest = function( ) {

                var aReleasePayloads_Async_Result = this._v_SuperPrototype.fReleasePayloads_Async.apply( this);
                if( !aReleasePayloads_Async_Result) {
                    return false;
                }

                if( this._v_DicomArray && ( typeof this._v_DicomArray == "object") && this._v_DicomArray.pReleasePayload && ( typeof this._v_DicomArray.pReleasePayload == "function")) {
                    this._v_DicomArray.pReleasePayload();
                }
                this._v_DicomArray          = undefined;

                if( this._v_DicomImage && ( typeof this._v_DicomImage == "object") && this._v_DicomImage.pReleasePayload && ( typeof this._v_DicomImage.pReleasePayload == "function")) {
                    this._v_DicomImage.pReleasePayload();
                }
                this._v_DicomImage          = undefined;

                if( this._v_DicomDataSet && ( typeof this._v_DicomDataSet == "object") && this._v_DicomDataSet.pReleasePayload && ( typeof this._v_DicomDataSet.pReleasePayload == "function")) {
                    this._v_DicomDataSet.pReleasePayload();
                }
                this._v_DicomDataSet         = undefined;

                this._v_DicomInstanceUID     = undefined;


                return true;
            };
            if( fReleasePayloads_DicomReprTest){}/* CQT */
            aPrototype.fReleasePayloads_DicomReprTest = fReleasePayloads_DicomReprTest;







            return aPrototype;

        })();




        var DicomReprTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_UsePayloadHolder   = null;

            this._v_Root               = null;
            this._v_Traversal          = null;
            this._v_CreateSpecs        = null;

            this._v_MarshallRoot       = null;
            this._v_MarshallTraversed  = null;
            this._v_MarshallCreated    = null;

            this._v_Dump_Creations     = null;
            this._v_Dump_CreateErrors  = null;
            this._v_Dump_Marshalled    = null;

            this._v_Traversed          = null;
            this._v_CreationCtxt       = null;
            this._v_Created            = null;
            this._v_Marshalled         = null;


            this._pInit_DicomReprTest(
                theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        DicomReprTest_Constructor.prototype = aDicomReprTest_Prototype;





        var DicomReprTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aDicomReprTest_Prototype;
            this._v_Type = null;

            this._v_UsePayloadHolder   = null;

            this._v_Root               = null;
            this._v_Traversal          = null;
            this._v_CreateSpecs        = null;

            this._v_MarshallRoot       = null;
            this._v_MarshallTraversed  = null;
            this._v_MarshallCreated    = null;

            this._v_Dump_Creations     = null;
            this._v_Dump_CreateErrors  = null;
            this._v_Dump_Marshalled    = null;

            this._v_Traversed          = null;
            this._v_CreationCtxt       = null;
            this._v_Created            = null;
            this._v_Marshalled         = null;

        };
        DicomReprTest_SuperPrototypeConstructor.prototype = aDicomReprTest_Prototype;



        var aModule = {
            "DicomReprTest_Prototype": aDicomReprTest_Prototype,
            "DicomReprTest_Constructor": DicomReprTest_Constructor,
            "DicomReprTest_SuperPrototypeConstructor": DicomReprTest_SuperPrototypeConstructor
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

            var aM_runsubs_test       = require('../../common-test/runsubs-test');
            var aM_overrider          = require('../../common-test/overrider');
            var aM_sentinels          = require('../../common-test/sentinels');
            var aM_traversals         = require('../../common-test/traversals/traversals');
            var aM_payloadholder      = require('../../common-test/payloadholder');
            var aM_dicomconstants     = require('../dicom-constants');
            var aM_dicomreprconstants = require('./dicom-repr-constants');
            var aM_dicomdirectoryrepr = require('./dicomdirectory-repr');
            var aM_dicompatientrepr   = require('./dicompatient-repr');
            var aM_dicomstudyrepr     = require('./dicomstudy-repr');
            var aM_dicomseriesrepr    = require('./dicomseries-repr');
            var aM_dicominstancerepr  = require('./dicominstance-repr');
            var aM_dicomelementrepr   = require('./dicomelement-repr');
            var aM_dicomfragmentrepr  = require('./dicomfragment-repr');





            return aMod_definer(
                aM_runsubs_test,
                aM_overrider,
                aM_sentinels,
                aM_traversals,
                aM_payloadholder,
                aM_dicomconstants,
                aM_dicomreprconstants,
                aM_dicomdirectoryrepr,
                aM_dicompatientrepr,
                aM_dicomstudyrepr,
                aM_dicomseriesrepr,
                aM_dicominstancerepr,
                aM_dicomelementrepr,
                aM_dicomfragmentrepr
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../common-test/runsubs-test",
            "../../common-test/overrider",
            "../../common-test/sentinels",
            "../../common-test/traversals/traversals",
            "../../common-test/payloadholder",
            "../dicom-constants",
            "./dicom-repr-constants",
            "./dicomdirectory-repr",
            "./dicompatient-repr",
            "./dicomstudy-repr",
            "./dicomseries-repr",
            "./dicominstance-repr",
            "./dicomelement-repr",
            "./dicomfragment-repr"
    ], function (
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels,
                theM_traversals,
                theM_payloadholder,
                theM_dicomconstants,
                theM_dicomreprconstants,
                theM_dicomdirectoryrepr,
                theM_dicompatientrepr,
                theM_dicomstudyrepr,
                theM_dicomseriesrepr,
                theM_dicominstancerepr,
                theM_dicomelementrepr,
                theM_dicomfragmentrepr
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels,
                theM_traversals,
                theM_payloadholder,
                theM_dicomconstants,
                theM_dicomreprconstants,
                theM_dicomdirectoryrepr,
                theM_dicompatientrepr,
                theM_dicomstudyrepr,
                theM_dicomseriesrepr,
                theM_dicominstancerepr,
                theM_dicomelementrepr,
                theM_dicomfragmentrepr
            );
        });
    }


}());


