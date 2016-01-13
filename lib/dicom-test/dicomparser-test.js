'use strict';

/*
 dicomparser-test.js
 Creado 2014511161752
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
                                 theM_dicomutils,
                                 theM_dicominstancerepr,
                                 theM_dicomparser) {


        var ModuleName     = "dicomparser-test";
        var ModulePackages = "dicom-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.WITHDICTIONARY   = false;
            theToInit.EXTRACTIMAGE     = false;
            theToInit.USEPAYLOADHOLDER = false;


            theToInit.DUMP_SOURCENAME       = false;
            theToInit.DUMP_INSTANCEUID      = false;
            theToInit.DUMP_DATASET          = false;
            theToInit.DUMP_DATASETHEXKEYS   = null;
            theToInit.DUMP_DATASETKEYS      = null;
            
            theToInit.MAXDICOMELEMENTVALUEDUMPLEN = 128;

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

            theToInit.PARMSPREFIX_DICOMPARSER = "dicomparser";


            theToInit.PARM_DICOMPARSER_SOURCENAME           = theToInit.PARMSPREFIX_DICOMPARSER + ".sourceName";
            theToInit.PARM_DICOMPARSER_SOURCEFULLNAME       = theToInit.PARMSPREFIX_DICOMPARSER + ".sourceFullName";
            theToInit.PARM_DICOMPARSER_DICOMBYTES           = theToInit.PARMSPREFIX_DICOMPARSER + ".dicomBytes";
            theToInit.PARM_DICOMPARSER_DICOMBYTES           = theToInit.PARMSPREFIX_DICOMPARSER + ".dicomBytes";
            theToInit.PARM_DICOMPARSER_EXTRACTIMAGE         = theToInit.PARMSPREFIX_DICOMPARSER + ".extractImage";
            theToInit.PARM_DICOMPARSER_USEPAYLOADHOLDER     = theToInit.PARMSPREFIX_DICOMPARSER + ".usePayloadHolder";

            theToInit.PARM_DICOMPARSER_DUMP_SOURCENAME      = theToInit.PARMSPREFIX_DICOMPARSER + ".dump_sourceName";
            theToInit.PARM_DICOMPARSER_DUMP_INSTANCEUID     = theToInit.PARMSPREFIX_DICOMPARSER + ".dump_instanceUID";
            theToInit.PARM_DICOMPARSER_DUMP_DATASET         = theToInit.PARMSPREFIX_DICOMPARSER + ".dump_dataset";
            theToInit.PARM_DICOMPARSER_DUMP_DATASETHEXKEYS  = theToInit.PARMSPREFIX_DICOMPARSER + ".dump_datasetHexkeys";
            theToInit.PARM_DICOMPARSER_DUMP_DATASETKEYS     = theToInit.PARMSPREFIX_DICOMPARSER + ".dump_datasetKeys";


            theToInit.PARMS_DICOMPARSER = [
                theToInit.PARM_DICOMPARSER_SOURCENAME,
                theToInit.PARM_DICOMPARSER_SOURCEFULLNAME,
                theToInit.PARM_DICOMPARSER_DICOMBYTES,
                theToInit.PARM_DICOMPARSER_EXTRACTIMAGE,
                theToInit.PARM_DICOMPARSER_USEPAYLOADHOLDER,

                theToInit.PARM_DICOMPARSER_DUMP_SOURCENAME,
                theToInit.PARM_DICOMPARSER_DUMP_INSTANCEUID,
                theToInit.PARM_DICOMPARSER_DUMP_DATASET,
                theToInit.PARM_DICOMPARSER_DUMP_DATASETHEXKEYS,
                theToInit.PARM_DICOMPARSER_DUMP_DATASETKEYS
            ];

            /*
            theToInit.DICOMDICTIONARY_STANDARDDATAELEMENT_KEYHEXSTR_StudyInstanceUID = "x0020000d"; theM_dicomconstants.DICOM_TAG_StudyInstanceUID[ 0]
             */

            theToInit.DICOMDICTIONARY_STANDARDDATAELEMENT_KEYHEXSTR_StudyInstanceUID = ( "x" + theM_dicomconstants.DICOM_TAG_StudyInstanceUID[ 0] + theM_dicomconstants.DICOM_TAG_StudyInstanceUID[ 1]).toLowerCase();



            theToInit.PARSERTAGREGEXPSTR = "^x([0-9a-f]{4})([0-9a-f]{4})$";
            theToInit.PARSERTAGREGEXP    = new RegExp( theToInit.PARSERTAGREGEXPSTR);

            theToInit.ORTHANCTAG_MAXHEADER = "x" + theM_dicomconstants.DICOM_TAG_MAXHEADERGROUP + "ffff";



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











        var aDicomParser_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "DicomParser";

            aPrototype._v_Prototype_DicomParser = aPrototype;


            aPrototype._v_SourceName          = null;
            aPrototype._v_SourceFullName      = null;
            aPrototype._v_DicomBytes          = null;
            aPrototype._v_ExtractImage        = null;
            aPrototype._v_UsePayloadHolder    = null;
            
            aPrototype._v_DicomArray          = null;
            aPrototype._v_DicomParseResult    = null;
            aPrototype._v_DicomDataSet        = null;
            aPrototype._v_DicomInstanceUID    = null;
            aPrototype._v_DicomImage          = null;
            aPrototype._v_DicomInstanceRepr    = null;
            aPrototype._v_DicomDataSetDict    = null;

            aPrototype._v_Dump_SourceName     = null;
            aPrototype._v_Dump_InstanceUID    = null;
            aPrototype._v_Dump_Dataset        = null;
            aPrototype._v_Dump_DatasetHexkeys = null;
            aPrototype._v_Dump_DatasetKeys    = null;




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_DicomParser(
                    theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomParser = function(
                theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_SourceName          = null;
                this._v_SourceFullName      = null;
                this._v_DicomBytes          = null;
                this._v_ExtractImage        = null;
                this._v_UsePayloadHolder    = null;

                this._v_DicomArray          = null;
                this._v_DicomParseResult    = null;
                this._v_DicomDataSet        = null;
                this._v_DicomInstanceUID    = null;
                this._v_DicomImage          = null;
                this._v_DicomInstanceRepr    = null;
                this._v_DicomDataSetDict    = null;

                this._v_Dump_SourceName     = null;
                this._v_Dump_InstanceUID    = null;
                this._v_Dump_Dataset        = null;
                this._v_Dump_DatasetHexkeys = null;
                this._v_Dump_DatasetKeys    = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_DicomParser", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_DicomParser){}/* CQT */
            aPrototype._pInit_DicomParser = _pInit_DicomParser;









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

                this._pRelease_DicomParser( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomParser = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_SourceName          = undefined;
                this._v_SourceFullName      = undefined;
                this._v_DicomBytes          = undefined;
                this._v_ExtractImage        = undefined;
                this._v_UsePayloadHolder    = undefined;


                if( this._v_DicomArray && ( typeof this._v_DicomArray == "object") && this._v_DicomArray.pReleasePayload && ( typeof this._v_DicomArray.pReleasePayload == "function")) {
                    this._v_DicomArray.pReleasePayload();
                }
                this._v_DicomArray          = undefined;


                if( this._v_DicomParseResult && ( typeof this._v_DicomParseResult == "object") && this._v_DicomParseResult.pReleasePayload && ( typeof this._v_DicomParseResult.pReleasePayload == "function")) {
                    this._v_DicomParseResult.pReleasePayload();
                }
                this._v_DicomParseResult          = undefined;


                if( this._v_DicomDataSet && ( typeof this._v_DicomDataSet == "object") && this._v_DicomDataSet.pReleasePayload && ( typeof this._v_DicomDataSet.pReleasePayload == "function")) {
                    this._v_DicomDataSet.pReleasePayload();
                }
                this._v_DicomDataSet          = undefined;


                this._v_DicomInstanceUID    = undefined;


                if( this._v_DicomImage && ( typeof this._v_DicomImage == "object") && this._v_DicomImage.pReleasePayload && ( typeof this._v_DicomImage.pReleasePayload == "function")) {
                    this._v_DicomImage.pReleasePayload();
                }
                this._v_DicomImage          = undefined;


                if( this._v_DicomInstanceRepr && ( typeof this._v_DicomInstanceRepr == "object") && this._v_DicomInstanceRepr.pReleasePayload && ( typeof this._v_DicomInstanceRepr.pReleasePayload == "function")) {
                    this._v_DicomInstanceRepr.pReleasePayload();
                }
                this._v_DicomInstanceRepr          = undefined;


                if( this._v_DicomDataSetDict && ( typeof this._v_DicomDataSetDict == "object") && this._v_DicomDataSetDict.pReleasePayload && ( typeof this._v_DicomDataSetDict.pReleasePayload == "function")) {
                    this._v_DicomDataSetDict.pReleasePayload();
                }
                this._v_DicomDataSetDict          = undefined;


                this._v_Dump_SourceName     = undefined;
                this._v_Dump_InstanceUID    = undefined;
                this._v_Dump_Dataset        = undefined;
                this._v_Dump_DatasetHexkeys = undefined;
                this._v_Dump_DatasetKeys    = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_DicomParser){}/* CQT */
            aPrototype._pRelease_DicomParser = _pRelease_DicomParser;









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

                this.pCleanUpTest_DicomParser( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;




            
            


            var pCleanUpTest_DicomParser = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {


                    if( this._v_DicomArray && ( typeof this._v_DicomArray == "object") && this._v_DicomArray.pReleasePayload && ( typeof this._v_DicomArray.pReleasePayload == "function")) {
                        this._v_DicomArray.pReleasePayload();
                    }
                    this._v_DicomArray          = undefined;


                    if( this._v_DicomParseResult && ( typeof this._v_DicomParseResult == "object") && this._v_DicomParseResult.pReleasePayload && ( typeof this._v_DicomParseResult.pReleasePayload == "function")) {
                        this._v_DicomParseResult.pReleasePayload();
                    }
                    this._v_DicomParseResult          = undefined;


                    if( this._v_DicomDataSet && ( typeof this._v_DicomDataSet == "object") && this._v_DicomDataSet.pReleasePayload && ( typeof this._v_DicomDataSet.pReleasePayload == "function")) {
                        this._v_DicomDataSet.pReleasePayload();
                    }
                    this._v_DicomDataSet          = undefined;

                    this._v_DicomInstanceUID    = undefined;


                    if( this._v_DicomImage && ( typeof this._v_DicomImage == "object") && this._v_DicomImage.pReleasePayload && ( typeof this._v_DicomImage.pReleasePayload == "function")) {
                        this._v_DicomImage.pReleasePayload();
                    }
                    this._v_DicomImage          = undefined;


                    if( this._v_DicomInstanceRepr && ( typeof this._v_DicomInstanceRepr == "object") && this._v_DicomInstanceRepr.pReleasePayload && ( typeof this._v_DicomInstanceRepr.pReleasePayload == "function")) {
                        this._v_DicomInstanceRepr.pReleasePayload();
                    }
                    this._v_DicomInstanceRepr          = undefined;


                    if( this._v_DicomDataSetDict && ( typeof this._v_DicomDataSetDict == "object") && this._v_DicomDataSetDict.pReleasePayload && ( typeof this._v_DicomDataSetDict.pReleasePayload == "function")) {
                        this._v_DicomDataSetDict.pReleasePayload();
                    }
                    this._v_DicomDataSetDict          = undefined;

                    this._v_Dump_SourceName     = undefined;
                    this._v_Dump_InstanceUID    = undefined;
                    this._v_Dump_Dataset        = undefined;
                    this._v_Dump_DatasetHexkeys = undefined;
                    this._v_Dump_DatasetKeys    = undefined;

                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_DicomParser){}/* CQT */
            aPrototype.pCleanUpTest_DicomParser = pCleanUpTest_DicomParser;













            var pS_ResolveParms = function( theCallback) {
                var aMethodName = "pS_ResolveParms";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var someParmsToResolve = [
                    this.PARM_DICOMPARSER_SOURCENAME,
                    this.PARM_DICOMPARSER_SOURCEFULLNAME,
                    this.PARM_DICOMPARSER_DICOMBYTES,
                    this.PARM_DICOMPARSER_EXTRACTIMAGE,
                    this.PARM_DICOMPARSER_USEPAYLOADHOLDER,

                    this.PARM_DICOMPARSER_DUMP_SOURCENAME,
                    this.PARM_DICOMPARSER_DUMP_INSTANCEUID,
                    this.PARM_DICOMPARSER_DUMP_DATASET,
                    this.PARM_DICOMPARSER_DUMP_DATASETHEXKEYS,
                    this.PARM_DICOMPARSER_DUMP_DATASETKEYS
                ];

                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return  false;
                }




                if( this._v_Dump_SourceName == null) {
                    var aDump_SourceNameResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_DUMP_SOURCENAME];
                    if( aDump_SourceNameResolution && aDump_SourceNameResolution._v_Success) {
                        this._v_Dump_SourceName = aDump_SourceNameResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_SourceName = this.DUMP_SOURCENAME;
                    }
                }

                if( this._v_Dump_InstanceUID == null) {
                    var aDump_InstanceUIDResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_DUMP_INSTANCEUID];
                    if( aDump_InstanceUIDResolution && aDump_InstanceUIDResolution._v_Success) {
                        this._v_Dump_InstanceUID = aDump_InstanceUIDResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_InstanceUID = this.DUMP_INSTANCEUID;
                    }
                }



                if( this._v_Dump_Dataset == null) {
                    var aDump_DatasetResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_DUMP_DATASET];
                    if( aDump_DatasetResolution && aDump_DatasetResolution._v_Success) {
                        this._v_Dump_Dataset = aDump_DatasetResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Dataset = this.DUMP_SOURCENAME;
                    }
                }



                if( this._v_Dump_DatasetHexkeys == null) {
                    var aDump_DatasetHexkeysResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_DUMP_DATASETHEXKEYS];
                    if( aDump_DatasetHexkeysResolution && aDump_DatasetHexkeysResolution._v_Success) {
                        this._v_Dump_DatasetHexkeys = aDump_DatasetHexkeysResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_DatasetHexkeys = this.DUMP_DATASETHEXKEYS;
                    }
                }


                
                
                if( this._v_Dump_DatasetKeys == null) {
                    var aDump_DatasetKeysResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_DUMP_DATASETKEYS];
                    if( aDump_DatasetKeysResolution && aDump_DatasetKeysResolution._v_Success) {
                        this._v_Dump_DatasetKeys = aDump_DatasetKeysResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_DatasetKeys = this.DUMP_DATASETKEYS;
                    }
                }





                if( this._v_SourceName == null) {
                    var aSourceNameResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_SOURCENAME];
                    if( aSourceNameResolution && aSourceNameResolution._v_Success && aSourceNameResolution._v_ParmValue) {
                        this._v_SourceName = aSourceNameResolution._v_ParmValue;
                    }
                    if( this._v_SourceName) {
                        this._v_SourceName = this.fParmValueReplacement( this._v_SourceName);
                    }
                }
                if( this._v_Dump_SourceName) {
                    this.pToConsoleLikeEvent( this._v_Title + " _v_SourceName=" + this._v_SourceName);
                }


                if( this._v_SourceFullName == null) {
                    var aSourceFullNameResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_SOURCEFULLNAME];
                    if( aSourceFullNameResolution && aSourceFullNameResolution._v_Success && aSourceFullNameResolution._v_ParmValue) {
                        this._v_SourceFullName = aSourceFullNameResolution._v_ParmValue;
                    }
                    if( this._v_SourceFullName) {
                        this._v_SourceFullName = this.fParmValueReplacement( this._v_SourceFullName);
                    }
                }
                if( this._v_Dump_SourceName) {
                    this.pToConsoleLikeEvent( this._v_Title + " _v_SourceFullName=" + this._v_SourceFullName);
                }


                if( this._v_DicomBytes == null) {
                    var aDicomBytesResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_DICOMBYTES];
                    if( aDicomBytesResolution && aDicomBytesResolution._v_Success) {
                        this._v_DicomBytes = aDicomBytesResolution._v_ParmValue;
                    }
                }



                if( this._v_ExtractImage == null) {
                    var aExtractImageResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_EXTRACTIMAGE];
                    if( aExtractImageResolution && aExtractImageResolution._v_Success) {
                        this._v_ExtractImage = aExtractImageResolution._v_ParmValue;
                    } else {
                        this._v_ExtractImage = this.EXTRACTIMAGE;
                    }
                }



                if( this._v_UsePayloadHolder == null) {
                    var aUsePayloadHolderResolution = aParmResolutionsDict[ this.PARM_DICOMPARSER_USEPAYLOADHOLDER];
                    if( aUsePayloadHolderResolution && aUsePayloadHolderResolution._v_Success) {
                        this._v_UsePayloadHolder = aUsePayloadHolderResolution._v_ParmValue;
                    } else {
                        this._v_UsePayloadHolder = this.USEPAYLOADHOLDER;
                    }
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_ResolveParms){}/* CQT */
            aPrototype.pS_ResolveParms = pS_ResolveParms;











            var pS_ParseDicom = function( theCallback) {

                var aMethodName = "pS_ParseDicom";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( !this._v_DicomBytes) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_DicomBytes", null));
                    return;
                }

                var aDicomBytesOrPayloadHolder = this.fParmValueReplacement( this._v_DicomBytes);
                if( !aDicomBytesOrPayloadHolder) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fParmValueReplacement( this._v_DicomBytes)", null));
                    return;
                }

                var aDicomBytes = this.fUnwrapPayloadFromHolder( aDicomBytesOrPayloadHolder);
                if( !aDicomBytes) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fUnwrapPayloadFromHolder( this.fParmValueReplacement( this._v_DicomBytes))", null));
                    return;
                }

                var aDicomArray =new Uint8Array( aDicomBytes);
                if( this._v_UsePayloadHolder) {
                    this._v_DicomArray = this.fWrapPayloadWithHolder( aDicomArray);
                }
                else {
                    this._v_DicomArray = aDicomArray;
                }


                var aDicomParseResult = theM_dicomparser.parseDicom( aDicomArray);
                if( !aDicomParseResult) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!theM_dicomparser.parseDicom( this.fUnwrapPayloadFromHolder( this.fParmValueReplacement( this._v_DicomBytes)))", null));
                    return;
                }
                if( this._v_UsePayloadHolder) {
                    this._v_DicomParseResult = this.fWrapPayloadWithHolder( aDicomParseResult);
                }
                else {
                    this._v_DicomParseResult = aDicomParseResult;
                }


                var aDicomDataSet  = aDicomParseResult;
                if( this._v_UsePayloadHolder) {
                    this._v_DicomDataSet = this.fWrapPayloadWithHolder( aDicomDataSet);
                }
                else {
                    this._v_DicomDataSet = aDicomDataSet;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_ParseDicom){}/* CQT */
            aPrototype.pS_ParseDicom = pS_ParseDicom;



















            var fIsParserHeaderTag = function( theTag) {

                if( !theTag) {
                    return false;
                }

                if( !( /^x\d{8}$/.test( theTag))) {
                    return false;
                }


                if( theTag <= this.DICOM_TAG_MAXHEADER) {
                    return true;
                }

                return false;

            };
            if( fIsParserHeaderTag){}/* CQT */
            aPrototype.fIsParserHeaderTag = fIsParserHeaderTag;





            var fIsParserPrivateTag = function( theTag) {

                if( !theTag) {
                    return false;
                }

                if( !( /^x\d{8}$/.test( theTag))) {
                    return false;
                }


                if( theM_dicomparser.isPrivateTag( theTag)) {
                    return true;
                }

                return false;

            };
            if( fIsParserPrivateTag){}/* CQT */
            aPrototype.fIsParserPrivateTag = fIsParserPrivateTag;







            var fIsAsciiStr = function( theStr) {

                if( !theStr) {
                    return false;
                }

                var anIsAsciiStr = /^[\x00-\x7F]*$/.test( theStr);
                if( anIsAsciiStr){}/* CQT */

                return anIsAsciiStr;

            };
            if( fIsAsciiStr){}/* CQT */
            aPrototype.fIsAsciiStr = fIsAsciiStr;








            var fGetDicomTagFromParserTag = function( theTag) {
                if( !theTag) {
                    return null;
                }

                if( !( typeof theTag == "string")) {
                    return null;
                }

                var someMatches = this.PARSERTAGREGEXP.exec( theTag);
                if( !someMatches || !( someMatches.length == 3)) {
                    return null;
                }

                var aGroup    = someMatches[ 1];
                var anElement = someMatches[ 2];

                var aDicomTag = theM_dicomutils.fDicomTagFromGroupAndElement( aGroup, anElement);
                if( aDicomTag){}/* CQT */

                return aDicomTag;
            };
            if( fGetDicomTagFromParserTag){}/* CQT */
            aPrototype.fGetDicomTagFromParserTag = fGetDicomTagFromParserTag;









            var fMapUid = function( theUID) {
                if( !theUID) {
                    return null;
                }

                if( !( typeof theUID == "string")) {
                    return null;
                }

                var aMappedUid = theM_dicomconstants.DICOM_UIDS[ theUID];
                if( aMappedUid){}/* CQT */
                return aMappedUid;
            };
            if( fMapUid){}/* CQT */
            aPrototype.fMapUid = fMapUid;






            var fIsStringVR = function( theVR) {

                if( !theVR) {
                    return false;
                }

                if( !( typeof theVR == "string")) {
                    return false;
                }

                var anIsStringVR = theM_dicomconstants.DICOM_VALUE_REPRESENTATION_CODES_STRING.indexOf( theVR) >= 0;
                if( anIsStringVR){}/* CQT */

                return anIsStringVR;
            };
            if( fIsStringVR){}/* CQT */
            aPrototype.fIsStringVR = fIsStringVR;













            var pS_ExtractDicomInstanceUID = function( theCallback) {

                var aMethodName = "pS_ExtractDicomInstanceUID";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( !this._v_DicomDataSet) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_DicomDataSet", null));
                    return;
                }

                var aDicomDataSet = this.fUnwrapPayloadFromHolder( this._v_DicomDataSet)
                if( !aDicomDataSet) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fUnwrapPayloadFromHolder( this._v_DicomDataSet)", null));
                    return;
                }


                this._v_DicomInstanceUID = aDicomDataSet.string( this.DICOMDICTIONARY_STANDARDDATAELEMENT_KEYHEXSTR_StudyInstanceUID);
                if( !this._v_DicomInstanceUID) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_DicomInstanceUID", null));
                    return;
                }
                if( this._v_Dump_InstanceUID) {
                    this.pToConsoleLikeEvent( this._v_Title + " _v_DicomInstanceUID=" + this._v_DicomInstanceUID);
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_ExtractDicomInstanceUID){}/* CQT */
            aPrototype.pS_ExtractDicomInstanceUID = pS_ExtractDicomInstanceUID;









            // This function iterates through dataSet recursively
            var pExtractDicomInstanceRepr_into = function( theDicomDataSet, theDicomInstanceRepr) {
                // the dataSet.elements object contains properties for each element parsed.  The name of the property
                // is based on the elements tag and looks like 'xGGGGEEEE' where GGGG is the group number and EEEE is the
                // element number both with lowercase hexadecimal letters.  For example, the Series Description DICOM element 0008,103E would
                // be named 'x0008103e'.  Here we iterate over each property (element) so we can build a string describing its
                // contents to add to the output array

                if( !theDicomDataSet) {
                    return;
                }

                if( ( typeof theDicomInstanceRepr == "undefined") || ( theDicomInstanceRepr == null)) {
                    return;
                }


                var aDicomDataSet = this.fUnwrapPayloadFromHolder( theDicomDataSet)
                if( !aDicomDataSet) {
                    return;
                }


                var someDicomElements = aDicomDataSet.elements;
                if( someDicomElements) {

                    var someDicomElementKeys = Object.keys( someDicomElements);
                    if( someDicomElementKeys) {

                        var aNumDicomElementKeys = someDicomElementKeys.length;
                        if( aNumDicomElementKeys) {


                            for( var aDicomElementKeyIdx=0; aDicomElementKeyIdx < aNumDicomElementKeys; aDicomElementKeyIdx++) {

                                var aDicomElementKey = someDicomElementKeys[ aDicomElementKeyIdx];
                                if( aDicomElementKey) {

                                    if( someDicomElements.hasOwnProperty( aDicomElementKey)) {

                                        var aDicomElement = someDicomElements[ aDicomElementKey];
                                        if( aDicomElement) {

                                            var aParserDicomTag = aDicomElement.tag;
                                            if( aParserDicomTag) {


                                                var aDicomTag = this.fGetDicomTagFromParserTag( aParserDicomTag);


                                                var aDicomTagSpec = theM_dicomutils.fDicomTagSpec( aDicomTag);

                                                var aDicomTagName = null;
                                                if( aDicomTagSpec) {
                                                    aDicomTagName = aDicomTagSpec.name;
                                                }

                                                var aDicomElementRepr = theDicomInstanceRepr.fNew_Element( aDicomTag, aDicomTagName);

                                                var aLength = aDicomElement.length
                                                if( aDicomElement.hadUndefinedLength) {
                                                    aLength = -1;
                                                }
                                                aDicomElementRepr.pSet_ValueLength( aLength);





                                                var aVR = aDicomElement.vr;
                                                if( !aVR) {
                                                    if( aDicomTag) {
                                                        aVR = aDicomTag.vr;
                                                    }
                                                }
                                                if( aVR) {
                                                    aDicomElementRepr.pSet_VR( aVR);
                                                }



                                                if( this.fIsParserHeaderTag( aParserDicomTag)) {
                                                    aDicomElementRepr.pSet_IsHeader( true);
                                                }


                                                if( this.fIsParserPrivateTag( aParserDicomTag)) {
                                                    aDicomElementRepr.pSet_IsPrivate( true);
                                                }





                                                // Here we check for Sequence items and iterate over them if present.  items will not be set in the
                                                // element object for elements that don't have SQ VR type.  Note that implicit little endian
                                                // sequences will are currently not parsed.
                                                var someDicomItems = aDicomElement.items;
                                                if( someDicomItems) {

                                                    var someDicomItemsReprs = [ ];

                                                    var aNumDicomItems = someDicomItems.length;
                                                    for( var aDicomItemIdx=0; aDicomItemIdx < aNumDicomItems; aDicomItemIdx++) {

                                                        var aDicomItem = someDicomItems[ aDicomItemIdx];
                                                        if( aDicomItem) {

                                                            var aDicomItemDataSet = aDicomItem.dataSet;

                                                            if( aDicomItemDataSet) {
                                                                // each item contains its own data set so we iterate over the items
                                                                // and recursively call this function

                                                                var aDicomItemInstanceRepr = aDicomElementRepr.fNew_Item();

                                                                this.pExtractDicomInstanceRepr_into( aDicomItemDataSet, aDicomItemInstanceRepr);
                                                            }

                                                        }
                                                    }

                                                    continue;
                                                }




                                                var someDicomFragments = aDicomElement.fragments;
                                                if( someDicomFragments) {

                                                    var aBasicOffsetTable = aDicomElement.basicOffsetTable;

                                                    var someDicomFragmentsReprs = [ ];

                                                    var aNumDicomFragments = someDicomFragments.length;
                                                    for( var aDicomElementFragmentIdx=0; aDicomElementFragmentIdx < aNumDicomFragments; aDicomElementFragmentIdx++) {

                                                        var aDicomElementFragment = someDicomFragments[ aDicomElementFragmentIdx];
                                                        if( aDicomElementFragment) {

                                                            var aDicomFragmentRepr = aDicomElementRepr.fNew_Fragment( aDicomElementFragmentIdx + 1);


                                                            if( aBasicOffsetTable && ( aBasicOffsetTable.length < aDicomElementFragmentIdx)) {
                                                                aDicomFragmentRepr.pSet_BasicOffset( aBasicOffsetTable[ aDicomElementFragmentIdx]);
                                                            }

                                                            aDicomFragmentRepr.pSet_Offset( aDicomElementFragment.offset);
                                                            aDicomFragmentRepr.pSet_ValueLength( aDicomElementFragment.length);
                                                        }
                                                    }

                                                    continue;
                                                }






                                                // if the length of the element is less than 128 we try to show it.  We put this check in
                                                // to avoid displaying large strings which makes it harder to use.
                                                if ( aDicomElement.length > this.MAXDICOMELEMENTVALUEDUMPLEN) {

                                                    aDicomElementRepr.pSet_ValueReference( true);

                                                    aDicomElementRepr.pAdd_ExternalReference( "DicomParsedElement", aDicomElement);
                                                    continue;
                                                }



                                                if( aVR) {

                                                    if ( this.fIsStringVR( aVR)) {

                                                        // Next we ask the dataset to give us the element's data in string form.  Most elements are
                                                        // strings but some aren't so we do a quick check to make sure it actually has all ascii
                                                        // characters so we know it is reasonable to display it.
                                                        var aDicomElementValueAsString = aDicomDataSet.string( aDicomElementKey);

                                                        var aDicomElementValueIsAsciiStr = this.fIsAsciiStr( aDicomElementValueAsString);

                                                        if ( aDicomElementValueIsAsciiStr) {
                                                            // the string will be undefined if the element is present but has no data
                                                            // (i.e. attribute is of type 2 or 3 ) so we only display the string if it has
                                                            // data.  Note that the length of the element will be 0 to indicate "no data"
                                                            // so we don't put anything here for the value in that case.
                                                            if ( aDicomElementValueAsString !== undefined) {

                                                                var aUID = this.fMapUid( aDicomElementValueAsString);
                                                                if( aUID) {
                                                                    aDicomElementRepr.pSet_Value( aDicomElementValueAsString);
                                                                    aDicomElementRepr.pSet_ValueType(  "UID");
                                                                    aDicomElementRepr.pSet_UID(  aUID);
                                                                }
                                                                else {
                                                                    aDicomElementRepr.pSet_Value( aDicomElementValueAsString);
                                                                    aDicomElementRepr.pSet_ValueType(  "string");
                                                                }
                                                            }
                                                            continue;
                                                        }


                                                        if ( ( aDicomElement.length !== 2) && ( aDicomElement.length !== 4)) {
                                                            aDicomElementRepr.pSet_Value( null);
                                                            aDicomElementRepr.pSet_ValueType(  "BIN");
                                                        }

                                                        continue;
                                                    }



                                                    switch( aVR) {

                                                        case "US":
                                                            aDicomElementRepr.pSet_Value( aDicomDataSet.uint16( aDicomElementKey));
                                                            aDicomElementRepr.pSet_ValueType( "uint16");
                                                            break;


                                                        case "SS":
                                                            aDicomElementRepr.pSet_Value( aDicomDataSet.int16( aDicomElementKey));
                                                            aDicomElementRepr.pSet_ValueType( "int16");
                                                            break;


                                                        case "UL":
                                                            aDicomElementRepr.pSet_Value( aDicomDataSet.uint32( aDicomElementKey));
                                                            aDicomElementRepr.pSet_ValueType( "uint32");
                                                            break;


                                                        case "SL":
                                                            aDicomElementRepr.pSet_Value( aDicomDataSet.int32( aDicomElementKey));
                                                            aDicomElementRepr.pSet_ValueType( "int32");
                                                            break;


                                                        case "FD":
                                                            aDicomElementRepr.pSet_Value( aDicomDataSet.double( aDicomElementKey));
                                                            aDicomElementRepr.pSet_ValueType( "double");
                                                            break;


                                                        case "FL":
                                                            aDicomElementRepr.pSet_Value( aDicomDataSet.float( aDicomElementKey));
                                                            aDicomElementRepr.pSet_ValueType( "float");
                                                            break;


                                                        case "AT":
                                                            var aGroupInTag = aDicomDataSet.uint16( aDicomElementKey, 0);
                                                            var aGroupInTagHexStr = ("0000" + aGroup.toString( 16)).substr( -4);

                                                            var anElementInTag = aDicomDataSet.uint16( aDicomElementKey, 1);
                                                            var anElementInTagHexStr = ("0000" + anElementInTag.toString( 16)).substr( -4);

                                                            var aValue = theM_dicomutils.fDicomTagFromGroupAndElement( aGroupInTagHexStr, anElementInTagHexStr);

                                                            aDicomElementRepr.pSet_Value( aValue);
                                                            aDicomElementRepr.pSet_ValueType( "TAG");
                                                            break;


                                                        case "SQ":
                                                            break;


                                                        default:

                                                            if ( aVR === 'OB' ||  aVR === 'OW' ||  aVR === 'UN' ||  aVR === 'OF' ||  aVR === 'UT') {

                                                                if ( ( aDicomElement.length == 2)) {
                                                                    aDicomElementRepr.pSet_Value( aDicomDataSet.uint16( aDicomElementKey));
                                                                    aDicomElementRepr.pSet_ValueType( "BIN-len2");
                                                                    continue;
                                                                }


                                                                if ( ( aDicomElement.length == 4)) {
                                                                    aDicomElementRepr.pSet_Value( aDicomDataSet.uint32( aDicomElementKey));
                                                                    aDicomElementRepr.pSet_ValueType( "BIN-len4");
                                                                    continue;
                                                                }


                                                                aDicomElementRepr.pSet_Value( null);
                                                                aDicomElementRepr.pSet_ValueType( "BIN");

                                                                continue;
                                                            }
                                                    }

                                                    continue;
                                                }




                                                if (aDicomElement.length == 0) {
                                                    aDicomElementRepr[ "Empty"] = true;
                                                    aDicomElementRepr.pSet_Value( null);
                                                }
                                                else {
                                                    if ( aDicomElement.length == 2) {
                                                        aDicomElementRepr.pSet_Value( aDicomDataSet.uint16( aDicomElementKey));
                                                        aDicomElementRepr.pSet_ValueType( "uint16");
                                                    }
                                                    else {
                                                        if (aDicomElement.length == 4) {
                                                            aDicomElementRepr.pSet_Value( aDicomDataSet.uint32( aDicomElementKey));
                                                            aDicomElementRepr.pSet_ValueType( "uint32");
                                                        }
                                                    }
                                                }

                                                // Since the dataset might be encoded using implicit transfer syntax and we hava found a tag specification in the
                                                // data dictionary, we need some simple logic to figure out what data types these
                                                // elements might be.  Since the dataset might also be explicit we could be switch on the
                                                // VR and do a better job on this, perhaps we can do that in another example

                                                // First we check to see if the element's length is appropriate for a UI or US VR.
                                                // US is an important type because it is used for the
                                                // image Rows and Columns so that is why those are assumed over other VR types.

                                                // Next we ask the dataset to give us the element's data in string form.  Most elements are
                                                // strings but some aren't so we do a quick check to make sure it actually has all ascii
                                                // characters so we know it is reasonable to display it.

                                                var aDicomElementValueAsString = aDicomDataSet.string( aDicomElementKey);

                                                var aDicomElementValueIsAsciiStr = this.fIsAsciiStr( aDicomElementValueAsString);

                                                if ( aDicomElementValueIsAsciiStr) {
                                                    // the string will be undefined if the element is present but has no data
                                                    // (i.e. attribute is of type 2 or 3 ) so we only display the string if it has
                                                    // data.  Note that the length of the element will be 0 to indicate "no data"
                                                    // so we don't put anything here for the value in that case.
                                                    if ( aDicomElementValueAsString !== undefined) {

                                                        var aUID = this.fMapUid( aDicomElementValueAsString);
                                                        if( aUID) {

                                                            aDicomElementRepr.pSet_Value( aDicomElementValueAsString);
                                                            aDicomElementRepr.pSet_ValueType(  "UID");
                                                            aDicomElementRepr.pSet_UID(   aUID);
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ( ( aDicomElement.length !== 2) && ( aDicomElement.length !== 4)) {

                                                        aDicomElementRepr.pSet_Value( null);
                                                        aDicomElementRepr.pSet_ValueType( "BIN");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


            };
            if( pExtractDicomInstanceRepr_into){}/* CQT */
            aPrototype.pExtractDicomInstanceRepr_into = pExtractDicomInstanceRepr_into;














            var pS_ExtractDicomInstanceRepr = function( theCallback) {

                var aMethodName = "pS_ExtractDicomInstanceRepr";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_DicomDataSet) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_DicomDataSet", null));
                    return;
                }

                var aDicomDataSet = this.fUnwrapPayloadFromHolder( this._v_DicomDataSet)
                if( !aDicomDataSet) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fUnwrapPayloadFromHolder( this._v_DicomDataSet)", null));
                    return;
                }




                var aDicomInstanceRepr = new theM_dicominstancerepr.DicomInstanceRepr_Constructor;

                if( this._v_UsePayloadHolder) {
                    this._v_DicomInstanceRepr = this.fWrapPayloadWithHolder( aDicomInstanceRepr);
                }
                else {
                    this._v_DicomInstanceRepr = aDicomInstanceRepr;
                }



                this.pExtractDicomInstanceRepr_into( aDicomDataSet, aDicomInstanceRepr);



                if( aDicomInstanceRepr.fIsEmpty()) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "aDicomInstanceRepr.fIsEmpty()", null));
                    return;
                }



                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_ExtractDicomInstanceRepr){}/* CQT */
            aPrototype.pS_ExtractDicomInstanceRepr = pS_ExtractDicomInstanceRepr;












            var pS_DumpDicomInstance = function( theCallback) {

                var aMethodName = "pS_DumpDicomInstance";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Dump_Dataset) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, "!this._v_Dump_Dataset", null));
                    return;
                }


                if( !this._v_DicomInstanceRepr) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_DicomInstanceRepr", null));
                    return;
                }



                var aDicomInstanceRepr = this.fUnwrapPayloadFromHolder( this._v_DicomInstanceRepr)
                if( !aDicomInstanceRepr) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fUnwrapPayloadFromHolder( this._v_DicomInstanceRepr)", null));
                    return;
                }


                var aDicomInstanceJSON = aDicomInstanceRepr.fAsLogObject();

                var aDicomInstanceJSONstr = JSON.stringify( aDicomInstanceJSON, null, 4);

                console.log( aDicomInstanceJSONstr);


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_DumpDicomInstance){}/* CQT */
            aPrototype.pS_DumpDicomInstance = pS_DumpDicomInstance;







            var pF_DicomParser = function( theCallback) {
                var aMethodName = "pF_DicomParser";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_DicomParser){}/* CQT */
            aPrototype.pF_DicomParser = pF_DicomParser;







            var fOwnTestMethodToRun = function() {
                return this.pSS_DicomParser.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_DicomParser = function( theCallback) {
                var aMethodName = "pSS_DicomParser";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_ResolveParms.bind( this),
                    this.pS_ParseDicom.bind( this),
                    this.pS_ExtractDicomInstanceUID.bind( this),
                    this.pS_ExtractDicomInstanceRepr.bind( this),
                    this.pS_DumpDicomInstance.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_DicomParser){}/* CQT */
            aPrototype.pSS_DicomParser = pSS_DicomParser;







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






            var fReleasePayloads_DicomParser = function( ) {

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
            if( fReleasePayloads_DicomParser){}/* CQT */
            aPrototype.fReleasePayloads_DicomParser = fReleasePayloads_DicomParser;







            return aPrototype;

        })();




        var DicomParser_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_SourceName          = null;
            this._v_SourceFullName      = null;
            this._v_DicomBytes          = null;
            this._v_ExtractImage        = null;
            this._v_UsePayloadHolder    = null;

            this._v_DicomArray          = null;
            this._v_DicomParseResult    = null;
            this._v_DicomDataSet        = null;
            this._v_DicomInstanceUID    = null;
            this._v_DicomImage          = null;
            this._v_DicomInstanceRepr    = null;
            this._v_DicomDataSetDict    = null;

            this._v_Dump_SourceName     = null;
            this._v_Dump_InstanceUID    = null;
            this._v_Dump_Dataset        = null;
            this._v_Dump_DatasetHexkeys = null;
            this._v_Dump_DatasetKeys    = null;

            this._pInit_DicomParser(
                theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        DicomParser_Constructor.prototype = aDicomParser_Prototype;





        var DicomParser_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aDicomParser_Prototype;
            this._v_Type = null;

            this._v_SourceName          = null;
            this._v_SourceFullName      = null;
            this._v_DicomBytes          = null;
            this._v_ExtractImage        = null;
            this._v_UsePayloadHolder    = null;

            this._v_DicomArray          = null;
            this._v_DicomParseResult    = null;
            this._v_DicomDataSet        = null;
            this._v_DicomInstanceUID    = null;
            this._v_DicomImage          = null;
            this._v_DicomInstanceRepr    = null;
            this._v_DicomDataSetDict    = null;

            this._v_Dump_SourceName     = null;
            this._v_Dump_InstanceUID    = null;
            this._v_Dump_Dataset        = null;
            this._v_Dump_DatasetHexkeys = null;
            this._v_Dump_DatasetKeys    = null;
        };
        DicomParser_SuperPrototypeConstructor.prototype = aDicomParser_Prototype;



        var aModule = {
            "DicomParser_Prototype": aDicomParser_Prototype,
            "DicomParser_Constructor": DicomParser_Constructor,
            "DicomParser_SuperPrototypeConstructor": DicomParser_SuperPrototypeConstructor
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

            var aM_runsubs_test      = require('../common-test/runsubs-test');
            var aM_overrider         = require('../common-test/overrider');
            var aM_sentinels         = require('../common-test/sentinels');
            var aM_traversals        = require('../common-test/traversals/traversals');
            var aM_payloadholder     = require('../common-test/payloadholder');
            var aM_dicomconstants    = require('./dicom-constants');
            var aM_dicomutils        = require('./dicom-utils');
            var aM_dicominstancerepr = require('./dicom-repr/dicominstance-repr');
            var aM_dicomparser       = require('dicom-parser');

            return aMod_definer(
                aM_runsubs_test,
                aM_overrider,
                aM_sentinels,
                aM_traversals,
                aM_payloadholder,
                aM_dicomconstants,
                aM_dicomutils,
                aM_dicominstancerepr,
                aM_dicomparser
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/runsubs-test",
            "../common-test/overrider",
            "../common-test/sentinels",
            "../common-test/traversals/traversals",
            "../common-test/payloadholder",
            "./dicom-constants",
            "./dicom-utils",
            "./dicom-repr/dicominstance-repr",
            "dicom-parser"
        ], function (
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels,
                theM_traversals,
                theM_payloadholder,
                theM_dicomconstants,
                theM_dicomutils,
                theM_dicominstancerepr,
                theM_dicomparser
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels,
                theM_traversals,
                theM_payloadholder,
                theM_dicomconstants,
                theM_dicomutils,
                theM_dicominstancerepr,
                theM_dicomparser
            );
        });
    }


}());


