'use strict';

/*
 dicomrepr-reusable.js
 Created 2014511241233
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
                                 theM_payloadholder,
                                 theM_dicomconstants,
                                 theM_dicomutils,
                                 theM_dicominstancerepr) {


        var ModuleName     = "dicomrepr-reusable";
        var ModulePackages = "dicom-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.FAILIF_OBSERVATIONS     = false;
            theToInit.FAILIF_WARNINGS         = false;
            theToInit.FAILIF_ERRORS           = false;

            theToInit.FAILONFIRST_OBSERVATION = false;
            theToInit.FAILONFIRST_WARNING     = false;
            theToInit.FAILONFIRST_ERROR       = false;

            theToInit.DUMP_IMPLEMENTORMATCHES = false;
            theToInit.DUMP_INSTANCEUID        = false;
            theToInit.DUMP_DICOMREPR          = false;
            theToInit.DUMP_OBSERVATIONS       = false;
            theToInit.DUMP_WARNINGS           = false;
            theToInit.DUMP_ERRORS             = false;
            theToInit.DUMP_PRIVATEGROUPS      = false;

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




            theToInit.PARMSPREFIX_DICOMREPRREUSABLE = "dicomreprreusable";


            theToInit.PARMNAME_DICOMREPRREUSABLE_IMPLEMENTORMATCHES      = ".implementorMatches";

            theToInit.PARMNAME_DICOMREPRREUSABLE_FAILIF_OBSERVATIONS     = ".failif_observations";
            theToInit.PARMNAME_DICOMREPRREUSABLE_FAILIF_WARNINGS         = ".failif_warnings";
            theToInit.PARMNAME_DICOMREPRREUSABLE_FAILIF_ERRORS           = ".failif_errors";

            theToInit.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_OBSERVATION = ".failonfirst_observation";
            theToInit.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_WARNING     = ".failonfirst_warning";
            theToInit.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_ERROR       = ".failonfirst_error";

            theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_IMPLEMENTORMATCHES = ".dump_implementorMatches";
            theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_INSTANCEUID        = ".dump_instanceUID";
            theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_DICOMREPR          = ".dump_dicomRepr";
            theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_OBSERVATIONS       = ".dump_observations";
            theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_WARNINGS           = ".dump_warnings";
            theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_ERRORS             = ".dump_errors";
            theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_PRIVATEGROUPS      = ".dump_privateGroups";



            theToInit.PARM_DICOMREPRREUSABLE_IMPLEMENTORMATCHES      = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_IMPLEMENTORMATCHES      ;

            theToInit.PARM_DICOMREPRREUSABLE_FAILIF_OBSERVATIONS     = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_FAILIF_OBSERVATIONS     ;
            theToInit.PARM_DICOMREPRREUSABLE_FAILIF_WARNINGS         = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_FAILIF_WARNINGS         ;
            theToInit.PARM_DICOMREPRREUSABLE_FAILIF_ERRORS           = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_FAILIF_ERRORS           ;

            theToInit.PARM_DICOMREPRREUSABLE_FAILONFIRST_OBSERVATION = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_OBSERVATION ;
            theToInit.PARM_DICOMREPRREUSABLE_FAILONFIRST_WARNING     = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_WARNING     ;
            theToInit.PARM_DICOMREPRREUSABLE_FAILONFIRST_ERROR       = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_ERROR       ;

            theToInit.PARM_DICOMREPRREUSABLE_DUMP_IMPLEMENTORMATCHES = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_IMPLEMENTORMATCHES ;
            theToInit.PARM_DICOMREPRREUSABLE_DUMP_INSTANCEUID        = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_INSTANCEUID        ;
            theToInit.PARM_DICOMREPRREUSABLE_DUMP_DICOMREPR          = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_DICOMREPR          ;
            theToInit.PARM_DICOMREPRREUSABLE_DUMP_OBSERVATIONS       = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_OBSERVATIONS       ;
            theToInit.PARM_DICOMREPRREUSABLE_DUMP_WARNINGS           = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_WARNINGS           ;
            theToInit.PARM_DICOMREPRREUSABLE_DUMP_ERRORS             = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_ERRORS             ;
            theToInit.PARM_DICOMREPRREUSABLE_DUMP_PRIVATEGROUPS      = theToInit.PARMSPREFIX_DICOMREPRREUSABLE + theToInit.PARMNAME_DICOMREPRREUSABLE_DUMP_PRIVATEGROUPS      ;


            theToInit.PARMS_DICOMREPRREUSABLE = [
                theToInit.PARM_DICOMREPRREUSABLE_FAILIF_OBSERVATIONS,
                theToInit.PARM_DICOMREPRREUSABLE_FAILIF_WARNINGS,
                theToInit.PARM_DICOMREPRREUSABLE_FAILIF_ERRORS,

                theToInit.PARM_DICOMREPRREUSABLE_FAILONFIRST_OBSERVATION,
                theToInit.PARM_DICOMREPRREUSABLE_FAILONFIRST_WARNING,
                theToInit.PARM_DICOMREPRREUSABLE_FAILONFIRST_ERROR,

                theToInit.PARM_DICOMREPRREUSABLE_DUMP_IMPLEMENTORMATCHES,
                theToInit.PARM_DICOMREPRREUSABLE_DUMP_INSTANCEUID,
                theToInit.PARM_DICOMREPRREUSABLE_DUMP_DICOMREPR,
                theToInit.PARM_DICOMREPRREUSABLE_DUMP_OBSERVATIONS,
                theToInit.PARM_DICOMREPRREUSABLE_DUMP_WARNINGS,
                theToInit.PARM_DICOMREPRREUSABLE_DUMP_ERRORS,
                theToInit.PARM_DICOMREPRREUSABLE_DUMP_PRIVATEGROUPS
            ];



            theToInit.OBSERVATIONKIND_GROUPALREADYRESERVED             = "GROUPALREADYRESERVED";
            theToInit.OBSERVATIONKIND_MATCHINGIMPLEMENTORS             = "MATCHINGIMPLEMENTORS";

            theToInit.OBSERVATIONKINDS = [
                theToInit.OBSERVATIONKIND_GROUPALREADYRESERVED,
                theToInit.OBSERVATIONKIND_MATCHINGIMPLEMENTORS
            ];



            theToInit.WARNINGKIND_UNCATALOGEDDICOMTAG              = "UNCATALOGEDDICOMTAG";
            theToInit.WARNINGKIND_DIFFERENTTAGNAME                 = "DIFFERENTTAGNAME";
            theToInit.WARNINGKIND_MISSINGORTHANCTYPE               = "MISSINGORTHANCTYPE";
            theToInit.WARNINGKIND_UNKNOWNDICOMTYPE                 = "UNKNOWNDICOMTYPE";
            theToInit.WARNINGKIND_WRONGVRINPRIVATEBLOCKRESERVATION = "WRONGVRINPRIVATEBLOCKRESERVATION";
            theToInit.WARNINGKIND_NOTARESERVEDBLOCK                = "NOTARESERVEDBLOCK";
            theToInit.WARNINGKIND_BLOCKWASNOTRESERVED              = "BLOCKWASNOTRESERVED";
            theToInit.WARNINGKIND_EXCEEDSMAXVRSTRINGLEN            = "EXCEEDSMAXVRSTRINGLEN";

            theToInit.WARNINGKINDS = [
                theToInit.WARNINGKIND_UNCATALOGEDDICOMTAG,
                theToInit.WARNINGKIND_DIFFERENTTAGNAME,
                theToInit.WARNINGKIND_MISSINGORTHANCTYPE,
                theToInit.WARNINGKIND_UNKNOWNDICOMTYPE,
                theToInit.WARNINGKIND_WRONGVRINPRIVATEBLOCKRESERVATION,
                theToInit.WARNINGKIND_NOTARESERVEDBLOCK,
                theToInit.WARNINGKIND_BLOCKWASNOTRESERVED,
                theToInit.WARNINGKIND_EXCEEDSMAXVRSTRINGLEN
            ];



            theToInit.ERRORKIND_INCORRECTORTHANCTAG      = "INCORRECTORTHANCTAG";
            theToInit.ERRORKIND_UNKNOWNDICOMTAG          = "UNKNOWNDICOMTAG";
            theToInit.ERRORKIND_INCORRECTDICOMTAG        = "INCORRECTDICOMTAG";
            theToInit.ERRORKIND_ELEMENTFACTORYFAILED     = "ELEMENTFACTORYFAILED";
            theToInit.ERRORKIND_BADSEQUENCE              = "BADSEQUENCE";
            theToInit.ERRORKIND_RESERVEDOTHERIMPLEMENTOR = "RESERVEDOTHERIMPLEMENTOR";


            theToInit.ERRORKINDS = [
                theToInit.ERRORKIND_INCORRECTORTHANCTAG,
                theToInit.ERRORKIND_UNKNOWNDICOMTAG,
                theToInit.ERRORKIND_INCORRECTDICOMTAG,
                theToInit.ERRORKIND_ELEMENTFACTORYFAILED,
                theToInit.ERRORKIND_BADSEQUENCE,
                theToInit.ERRORKIND_RESERVEDOTHERIMPLEMENTOR,
            ];




            theToInit.EXTRATYPENAMETOVRMAPPINGS_ORTHANC = {
                "TooLong":  { "code": "TL", "maxLength": -1,    "title": "TooLong", "comment": "Orthanc delivers some elements with Type 'TooLong'"},
                "Null":     { "code": "NU", "maxLength": -1,    "title": "Null",    "comment": "Orthanc delivers some elements with Type 'Null'"}
            };





            theToInit.EXTRAVRTOYPENAMEMAPPINGS_ORTHANC = { };

            var someTypeNames = Object.keys( theToInit.EXTRATYPENAMETOVRMAPPINGS_ORTHANC);
            var aNumTypeNames = someTypeNames.length;
            for( var aTypeNameIdx=0; aTypeNameIdx < aNumTypeNames; aTypeNameIdx++) {
                var aTypeName = someTypeNames[ aTypeNameIdx];
                var aTypeNameSpec = theToInit.EXTRATYPENAMETOVRMAPPINGS_ORTHANC[ aTypeName];
                var aVR = aTypeNameSpec[ "code"];

                theToInit.EXTRAVRTOYPENAMEMAPPINGS_ORTHANC[ aVR] = aTypeName;
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











        var aDicomreprReusable_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "DicomreprReusable";

            aPrototype._v_Prototype_DicomreprReusable = aPrototype;


            aPrototype._v_ImplementorMatches      = null;

            aPrototype._v_Dump_ImplementorMatches = null;
            aPrototype._v_Dump_InstanceUID        = null;
            aPrototype._v_Dump_DicomRepr          = null;
            aPrototype._v_Dump_Observations       = null;
            aPrototype._v_Dump_Warnings           = null;
            aPrototype._v_Dump_Errors             = null;
            aPrototype._v_Dump_PrivateGroups      = null;

            aPrototype._v_DicomInstanceUID        = null;
            aPrototype._v_DicomInstanceRepr       = null;

            aPrototype._v_Observations            = null;
            aPrototype._v_Warnings                = null;
            aPrototype._v_Errors                  = null;

            aPrototype._v_RegisteredPrivateGroups = null;
            aPrototype._v_RegExpsBySource         = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_DicomreprReusable(
                    theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DicomreprReusable = function(
                theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ImplementorMatches      = null;

                this._v_Dump_ImplementorMatches = null;
                this._v_Dump_InstanceUID        = null;
                this._v_Dump_DicomRepr          = null;
                this._v_Dump_Observations       = null;
                this._v_Dump_Warnings           = null;
                this._v_Dump_Errors             = null;
                this._v_Dump_PrivateGroups      = null;

                this._v_DicomInstanceUID        = null;
                this._v_DicomInstanceRepr       = null;

                this._v_Observations            = [ ];
                this._v_Warnings                = [ ];
                this._v_Errors                  = [ ];

                this._v_RegisteredPrivateGroups = { };
                this._v_RegExpsBySource         = { };


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_DicomreprReusable", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_DicomreprReusable){}/* CQT */
            aPrototype._pInit_DicomreprReusable = _pInit_DicomreprReusable;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_DicomreprReusable( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DicomreprReusable = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                 return;
                 }
                 this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_ImplementorMatches    = undefined;

                this._v_Dump_ImplementorMatches = undefined;
                this._v_Dump_InstanceUID      = undefined;
                this._v_Dump_DicomRepr        = undefined;
                this._v_Dump_Observations     = undefined;
                this._v_Dump_Warnings         = undefined;
                this._v_Dump_Errors           = undefined;
                this._v_Dump_PrivateGroups    = undefined;

                this._v_DicomInstanceUID      = undefined;
                this._v_DicomInstanceRepr     = undefined;

                this._v_Observations          = undefined;
                this._v_Warnings              = undefined;
                this._v_Errors                = undefined;

                this._v_RegisteredPrivateGroups = undefined;
                this._v_RegExpsBySource         = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_DicomreprReusable){}/* CQT */
            aPrototype._pRelease_DicomreprReusable = _pRelease_DicomreprReusable;









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

                this.pCleanUpTest_DicomreprReusable( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;








            var pCleanUpTest_DicomreprReusable = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_ImplementorMatches    = undefined;

                    this._v_DicomInstanceUID      = undefined;
                    this._v_DicomInstanceRepr     = undefined;
                    this._v_Warnings              = undefined;
                    this._v_Errors                = undefined;

                    this._v_RegisteredPrivateGroups = undefined;
                    this._v_RegExpsBySource         = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_DicomreprReusable){}/* CQT */
            aPrototype.pCleanUpTest_DicomreprReusable = pCleanUpTest_DicomreprReusable;









            var fParmPrefix = function() {

                return this.PARMSPREFIX_DICOMREPRREUSABLE;

            };
            if( fParmPrefix){}/* CQT */
            aPrototype.fParmPrefix = fParmPrefix;








            var fResolveParms_DicomReprReusable = function( theMethodName, theParmsPrefix) {

                /* Specific type shall call
                this.pReceivedTestCallbackArg( theCallback, theMethodName);
                 */


                var aParmsPrefix = theParmsPrefix;
                if( !aParmsPrefix) {
                    aParmsPrefix = this.PARMSPREFIX_DICOMREPRREUSABLE;
                }
                
                
                var someParmsToResolve = [
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_IMPLEMENTORMATCHES      ,

                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILIF_OBSERVATIONS     ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILIF_WARNINGS         ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILIF_ERRORS           ,
    
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_OBSERVATION ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_WARNING     ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_ERROR       ,
    
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_IMPLEMENTORMATCHES ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_INSTANCEUID        ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_DICOMREPR          ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_OBSERVATIONS       ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_WARNINGS           ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_ERRORS             ,
                    aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_PRIVATEGROUPS  
                ];

                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    return this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null);
                }




                if( this._v_FailIf_Observations == null) {
                    var aFailIf_ObservationsResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILIF_OBSERVATIONS];
                    if( aFailIf_ObservationsResolution && aFailIf_ObservationsResolution._v_Success) {
                        this._v_FailIf_Observations = aFailIf_ObservationsResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIf_Observations = this.FAILIF_OBSERVATIONS;
                    }
                }



                if( this._v_FailIf_Warnings == null) {
                    var aFailIf_WarningsResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILIF_WARNINGS];
                    if( aFailIf_WarningsResolution && aFailIf_WarningsResolution._v_Success) {
                        this._v_FailIf_Warnings = aFailIf_WarningsResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIf_Warnings = this.FAILIF_WARNINGS;
                    }
                }



                if( this._v_FailIf_Errors == null) {
                    var aFailIf_ErrorsResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILIF_ERRORS];
                    if( aFailIf_ErrorsResolution && aFailIf_ErrorsResolution._v_Success) {
                        this._v_FailIf_Errors = aFailIf_ErrorsResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIf_Errors = this.FAILIF_ERRORS;
                    }
                }




                if( this._v_FailOnFirst_Observation == null) {
                    var aFailOnFirst_ObservationResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_OBSERVATION];
                    if( aFailOnFirst_ObservationResolution && aFailOnFirst_ObservationResolution._v_Success) {
                        this._v_FailOnFirst_Observation = aFailOnFirst_ObservationResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailOnFirst_Observation = this.FAILONFIRST_OBSERVATION;
                    }
                }



                if( this._v_FailOnFirst_Warning == null) {
                    var aFailOnFirst_WarningResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_WARNING];
                    if( aFailOnFirst_WarningResolution && aFailOnFirst_WarningResolution._v_Success) {
                        this._v_FailOnFirst_Warning = aFailOnFirst_WarningResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailOnFirst_Warning = this.FAILONFIRST_WARNING;
                    }
                }



                if( this._v_FailOnFirst_Error == null) {
                    var aFailOnFirst_ErrorResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_FAILONFIRST_ERROR];
                    if( aFailOnFirst_ErrorResolution && aFailOnFirst_ErrorResolution._v_Success) {
                        this._v_FailOnFirst_Error = aFailOnFirst_ErrorResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailOnFirst_Error = this.FAILONFIRST_ERROR;
                    }
                }






                if( this._v_Dump_ImplementorMatches == null) {
                    var aDump_ImplementorMatchesResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_IMPLEMENTORMATCHES];
                    if( aDump_ImplementorMatchesResolution && aDump_ImplementorMatchesResolution._v_Success) {
                        this._v_Dump_ImplementorMatches = aDump_ImplementorMatchesResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_ImplementorMatches = this.DUMP_IMPLEMENTORMATCHES;
                    }
                }





                if( this._v_Dump_InstanceUID == null) {
                    var aDump_InstanceUIDResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_INSTANCEUID];
                    if( aDump_InstanceUIDResolution && aDump_InstanceUIDResolution._v_Success) {
                        this._v_Dump_InstanceUID = aDump_InstanceUIDResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_InstanceUID = this.DUMP_INSTANCEUID;
                    }
                }




                if( this._v_Dump_DicomRepr == null) {
                    var aDump_DicomReprResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_DICOMREPR];
                    if( aDump_DicomReprResolution && aDump_DicomReprResolution._v_Success) {
                        this._v_Dump_DicomRepr = aDump_DicomReprResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_DicomRepr = this.DUMP_DICOMREPR;
                    }
                }






                if( this._v_Dump_Observations == null) {
                    var aDump_ObservationsResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_OBSERVATIONS];
                    if( aDump_ObservationsResolution && aDump_ObservationsResolution._v_Success) {
                        this._v_Dump_Observations = aDump_ObservationsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Observations = this.DUMP_OBSERVATIONS;
                    }
                }




                if( this._v_Dump_Warnings == null) {
                    var aDump_WarningsResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_WARNINGS];
                    if( aDump_WarningsResolution && aDump_WarningsResolution._v_Success) {
                        this._v_Dump_Warnings = aDump_WarningsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Warnings = this.DUMP_WARNINGS;
                    }
                }




                if( this._v_Dump_Errors == null) {
                    var aDump_ErrorsResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_ERRORS];
                    if( aDump_ErrorsResolution && aDump_ErrorsResolution._v_Success) {
                        this._v_Dump_Errors = aDump_ErrorsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_Errors = this.DUMP_ERRORS;
                    }
                }




                if( this._v_Dump_PrivateGroups == null) {
                    var aDump_PrivateGroupsResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_DUMP_PRIVATEGROUPS];
                    if( aDump_PrivateGroupsResolution && aDump_PrivateGroupsResolution._v_Success) {
                        this._v_Dump_PrivateGroups = aDump_PrivateGroupsResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_PrivateGroups = this.DUMP_PRIVATEGROUPS;
                    }
                }









                if( this._v_ImplementorMatches == null) {
                    var aImplementorMatchesResolution = aParmResolutionsDict [ aParmsPrefix + this.PARMNAME_DICOMREPRREUSABLE_IMPLEMENTORMATCHES];
                    if( aImplementorMatchesResolution && aImplementorMatchesResolution._v_Success && aImplementorMatchesResolution._v_ParmValue) {
                        this._v_ImplementorMatches = aImplementorMatchesResolution._v_ParmValue;
                    }
                    if( this._v_ImplementorMatches) {
                        this._v_ImplementorMatches = this.fParmValueReplacement( this._v_ImplementorMatches);
                    }
                }
                if( this._v_Dump_ImplementorMatches) {
                    var anImplementorMatchesJSONstr = JSON.stringify( this._v_ImplementorMatches, null, 4);
                    console.log( ',"IMPLEMENTORMATCHES"\n,' + anImplementorMatchesJSONstr);
                }



                if( this._v_ImplementorMatches) {
                    var aNumImplementorMatches = this._v_ImplementorMatches.length;
                    for( var anImplementorMatchIdx=0; anImplementorMatchIdx < aNumImplementorMatches; anImplementorMatchIdx++) {
                        var anImplementorMatch = this._v_ImplementorMatches[ anImplementorMatchIdx];
                        if( anImplementorMatch) {

                            var aRegExp = null;
                            try {
                                aRegExp = new RegExp( anImplementorMatch)
                            }
                            catch( anException) {
                                if( anException) {
                                    return this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, anImplementorMatch, "RegExp compile error", anException);
                                }
                            }

                            if( !aRegExp) {
                                return this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, anImplementorMatch, "RegExp compile error", null);
                            }

                            this._v_RegExpsBySource[ anImplementorMatch] = aRegExp;
                        }
                    }
                }


                /* Specific type shall call
                 theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_OK, null, null, null));
                 */

                return null;
            };
            if( fResolveParms_DicomReprReusable){}/* CQT */
            aPrototype.fResolveParms_DicomReprReusable = fResolveParms_DicomReprReusable;














            var fDicomGroupElementToOrthancTag = function( theGroupAndElement) {

                if( !theGroupAndElement) {
                    return null;
                }

                if( !( theGroupAndElement.length == 2)) {
                    return null;
                }

                var anOrthancTag = ( "" + theGroupAndElement[ 0] + "," + theGroupAndElement[ 1]).toLowerCase();
                if( anOrthancTag){}/* CQT */

                return anOrthancTag;

            };
            if( fDicomGroupElementToOrthancTag){}/* CQT */
            aPrototype.fDicomGroupElementToOrthancTag = fDicomGroupElementToOrthancTag;












            var pS_ExtractDicomInstanceUID = function( theCallback) {

                var aMethodName = "pS_ExtractDicomInstanceUID";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBTYPERESPONSIBILITY, null, null, null));

            };
            if( pS_ExtractDicomInstanceUID){}/* CQT */
            aPrototype.pS_ExtractDicomInstanceUID = pS_ExtractDicomInstanceUID;












            var fNewVoidObservation = function() {

                var aObservation = {
                    "tagsPath":    null,
                    "observationKind": null,
                    "one":         null,
                    "other":       null
                };

                return aObservation;

            };
            if( fNewVoidObservation){}/* CQT */
            aPrototype.fNewVoidObservation = fNewVoidObservation;





            var fNewVoidWarning = function() {

                var aWarning = {
                    "tagsPath":    null,
                    "warningKind": null,
                    "one":         null,
                    "other":       null
                };

                return aWarning;

            };
            if( fNewVoidWarning){}/* CQT */
            aPrototype.fNewVoidWarning = fNewVoidWarning;





            var fNewVoidError = function() {

                var aError = {
                    "tagsPath":    null,
                    "errorKind":   null,
                    "one":         null,
                    "other":       null
                };

                return aError;

            };
            if( fNewVoidError){}/* CQT */
            aPrototype.fNewVoidError = fNewVoidError;













            var pS_ConvertToDicomRepr = function( theCallback) {

                var aMethodName = "pS_ConvertToDicomRepr";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBTYPERESPONSIBILITY, null, null, null));

            };
            if( pS_ConvertToDicomRepr){}/* CQT */
            aPrototype.pS_ConvertToDicomRepr = pS_ConvertToDicomRepr;







            var fNewVoidPrivateReservedGroupRegistration = function() {

                var aPrivateGroupRegistration = {
                    "tag":                   null,
                    "group":                 null,
                    "privateCreator":        null,
                    "blocks":                { }
                };
                if( aPrivateGroupRegistration){}/* CQT */

                return aPrivateGroupRegistration;

            };
            if( fNewVoidPrivateReservedGroupRegistration){}/* CQT */
            aPrototype.fNewVoidPrivateReservedGroupRegistration = fNewVoidPrivateReservedGroupRegistration;







            var fNewVoidPrivateReservedBlockRegistration = function() {

                var aPrivateBlockRegistration = {
                    "tag":                   null,
                    "block":                 null,
                    "elementTags":           [ ]
                };
                if( aPrivateBlockRegistration){}/* CQT */

                return aPrivateBlockRegistration;

            };
            if( fNewVoidPrivateReservedBlockRegistration){}/* CQT */
            aPrototype.fNewVoidPrivateReservedBlockRegistration = fNewVoidPrivateReservedBlockRegistration;












            var pRegisterPrivateReservedGroupAndBlock = function( thePrivateReservedGroup, thePrivateReservedBlock, theDicomTag, thePrivateCreator) {

                if( !thePrivateReservedGroup || !thePrivateReservedBlock) {
                    return;
                }

                var aGroupRegistration = this._v_RegisteredPrivateGroups[ thePrivateReservedGroup];
                if( !aGroupRegistration) {
                    aGroupRegistration = this.fNewVoidPrivateReservedGroupRegistration();
                    aGroupRegistration[ "tag"]                   = theDicomTag;
                    aGroupRegistration[ "group"]                 = thePrivateReservedGroup;
                    aGroupRegistration[ "privateCreator"]        = thePrivateCreator;

                    this._v_RegisteredPrivateGroups[ thePrivateReservedGroup] = aGroupRegistration;
                }


                var aBlockRegistration =  aGroupRegistration[ "blocks"][ thePrivateReservedBlock];
                if( aBlockRegistration) {
                    return;
                }

                var aBlockRegistration = this.fNewVoidPrivateReservedBlockRegistration();
                aBlockRegistration[ "tag"]                   = theDicomTag;
                aBlockRegistration[ "block"]                 = thePrivateReservedBlock;

                aGroupRegistration[ "blocks"][ thePrivateReservedBlock] = aBlockRegistration;

            };
            if( pRegisterPrivateReservedGroupAndBlock){}/* CQT */
            aPrototype.pRegisterPrivateReservedGroupAndBlock = pRegisterPrivateReservedGroupAndBlock;










            var fPrivateReservedBlockRegistration = function( theGroup, theBlock) {

                if( !theGroup || !theBlock) {
                    return null;
                }

                var aGroupRegistration = this._v_RegisteredPrivateGroups[ theGroup];
                if( !aGroupRegistration) {
                    return null;
                }


                var aBlockRegistration =  aGroupRegistration[ "blocks"][ theBlock];
                if( !aBlockRegistration) {
                    return null;
                }

                return aBlockRegistration;

            };
            if( fPrivateReservedBlockRegistration){}/* CQT */
            aPrototype.fPrivateReservedBlockRegistration = fPrivateReservedBlockRegistration;









            var fPrivateReservedGroup = function( theGroup) {

                if( !theGroup) {
                    return null;
                }

                var aGroupRegistration = this._v_RegisteredPrivateGroups[ theGroup];
                if( !aGroupRegistration) {
                    return null;
                }

                return aGroupRegistration;

            };
            if( fPrivateReservedGroup){}/* CQT */
            aPrototype.fPrivateReservedGroup = fPrivateReservedGroup;









            var pHandleObservation = function( theTagsPath, theObservationKind, theOne, theOther) {

                if( !theTagsPath) {
                    return;
                }

                if( !theObservationKind) {
                    return;
                }

                var anObservation = this.fNewVoidObservation();
                anObservation[ "tagsPath"]          = theTagsPath;
                anObservation[ "observationKind"]   = theObservationKind;

                if( !( typeof theOne == "undefined")) {
                    anObservation[ "one"]     = theOne;
                }

                if( !( typeof theOther == "undefined")) {
                    anObservation[ "other"]   = theOther;
                }

                this._v_Observations.push( anObservation);

                if( this._v_FailOnFirst_Observation) {
                    throw anObservation;
                }

            };
            if( pHandleObservation){}/* CQT */
            aPrototype.pHandleObservation = pHandleObservation;









            var pHandleWarning = function( theTagsPath, theWarningKind, theOne, theOther) {

                if( !theTagsPath) {
                    return;
                }

                if( !theWarningKind) {
                    return;
                }

                var anWarning = this.fNewVoidWarning();
                anWarning[ "tagsPath"]      = theTagsPath;
                anWarning[ "warningKind"]   = theWarningKind;

                if( !( typeof theOne == "undefined")) {
                    anWarning[ "one"]     = theOne;
                }

                if( !( typeof theOther == "undefined")) {
                    anWarning[ "other"]   = theOther;
                }

                this._v_Warnings.push( anWarning);

                if( this._v_FailOnFirst_Warning) {
                    throw anWarning;
                }

            };
            if( pHandleWarning){}/* CQT */
            aPrototype.pHandleWarning = pHandleWarning;







            var pHandleError = function( theTagsPath, theErrorKind, theOne, theOther) {

                if( !theTagsPath) {
                    return;
                }

                if( !theErrorKind) {
                    return;
                }

                switch( theErrorKind) {

                    case this.ERRORKIND_RESERVEDOTHERIMPLEMENTOR:

                        if( !theOne || !theOther) {
                            break;
                        }
                        if( this._v_RegExpsBySource) {


                            var anAnyMatched = false;

                            var someImplementorMatches = Object.keys( this._v_RegExpsBySource);
                            var aNumImplementorMatches = someImplementorMatches.length;

                            for( var anImplementorMatchIdx=0; anImplementorMatchIdx < aNumImplementorMatches; anImplementorMatchIdx++) {
                                var anImplementorMatch = someImplementorMatches[ anImplementorMatchIdx];
                                if( anImplementorMatch) {

                                    var anImplementorRegExp = this._v_RegExpsBySource[ anImplementorMatch];
                                    if( anImplementorRegExp) {

                                        if( theOne.match( anImplementorRegExp)) {
                                            if( theOther.match( anImplementorRegExp)) {

                                                anAnyMatched = true;
                                                break;
                                            }
                                        }
                                    }
                                }
                            }

                            if( anAnyMatched) {

                                this.pHandleObservation( theTagsPath, this.OBSERVATIONKIND_MATCHINGIMPLEMENTORS, theOne, theOther);
                                return;
                            }
                        }
                        break;

                    default:
                }

                var anError = this.fNewVoidError();
                anError[ "tagsPath"]    = theTagsPath;
                anError[ "errorKind"]   = theErrorKind;

                if( !( typeof theOne == "undefined")) {
                    anError[ "one"]     = theOne;
                }

                if( !( typeof theOther == "undefined")) {
                    anError[ "other"]   = theOther;
                }

                this._v_Errors.push( anError);

                if( this._v_FailOnFirst_Error) {
                    throw anError;
                }

            };
            if( pHandleError){}/* CQT */
            aPrototype.pHandleError = pHandleError;















            var pF_DicomreprReusable = function( theCallback) {
                var aMethodName = "pF_DicomreprReusable";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_DicomreprReusable){}/* CQT */
            aPrototype.pF_DicomreprReusable = pF_DicomreprReusable;







            var fOwnTestMethodToRun = function() {
                return this.pSS_DicomreprReusable.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_DicomreprReusable = function( theCallback) {
                var aMethodName = "pSS_DicomreprReusable";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_ResolveParms.bind( this, this.PARMSPREFIX_DICOMREPRREUSABLE),
                    this.pS_ExtractDicomInstanceUID.bind( this),
                    this.pS_ConvertToDicomRepr.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_DicomreprReusable){}/* CQT */
            aPrototype.pSS_DicomreprReusable = pSS_DicomreprReusable;







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






            var fReleasePayloads_DicomreprReusable = function( ) {

                var aReleasePayloads_Async_Result = this._v_SuperPrototype.fReleasePayloads_Async.apply( this);
                if( !aReleasePayloads_Async_Result) {
                    return false;
                }

                this._v_DicomInstanceRepr    = undefined;

                this._v_DicomInstanceUID     = undefined;

                return true;
            };
            if( fReleasePayloads_DicomreprReusable){}/* CQT */
            aPrototype.fReleasePayloads_DicomreprReusable = fReleasePayloads_DicomreprReusable;







            return aPrototype;

        })();




        var DicomreprReusable_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ImplementorMatches    = null;

            this._v_Dump_ImplementorMatches = null;
            this._v_Dump_InstanceUID      = null;
            this._v_Dump_DicomRepr        = null;
            this._v_Dump_Observations     = null;
            this._v_Dump_Warnings         = null;
            this._v_Dump_Errors           = null;
            this._v_Dump_PrivateGroups    = null;

            this._v_DicomInstanceUID      = null;
            this._v_DicomInstanceRepr     = null;

            this._v_Observations          = null;
            this._v_Warnings              = null;
            this._v_Errors                = null;

            this._v_RegisteredPrivateGroups = null;
            this._v_RegExpsBySource         = null;


            this._pInit_DicomreprReusable(
                theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        DicomreprReusable_Constructor.prototype = aDicomreprReusable_Prototype;







        var DicomreprReusable_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aDicomreprReusable_Prototype;
            this._v_Type = null;

            this._v_ImplementorMatches    = null;

            this._v_Dump_ImplementorMatches = null;
            this._v_Dump_InstanceUID      = null;
            this._v_Dump_DicomRepr        = null;
            this._v_Dump_Observations     = null;
            this._v_Dump_Warnings         = null;
            this._v_Dump_Errors           = null;
            this._v_Dump_PrivateGroups = null;

            this._v_DicomInstanceUID      = null;
            this._v_DicomInstanceRepr     = null;

            this._v_Observations          = null;
            this._v_Warnings              = null;
            this._v_Errors                = null;

            this._v_RegisteredPrivateGroups = null;
            this._v_RegExpsBySource         = null;

        };
        DicomreprReusable_SuperPrototypeConstructor.prototype = aDicomreprReusable_Prototype;





        var aModule = {
            "DicomreprReusable_Prototype": aDicomreprReusable_Prototype,
            "DicomreprReusable_Constructor": DicomreprReusable_Constructor,
            "DicomreprReusable_SuperPrototypeConstructor": DicomreprReusable_SuperPrototypeConstructor
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

            var aM_runsubs_test      = require('../../common-test/runsubs-test');
            var aM_overrider         = require('../../common-test/overrider');
            var aM_sentinels         = require('../../common-test/sentinels');
            var aM_traversals        = require('../../common-test/traversals/traversals');
            var aM_payloadholder     = require('../../common-test/payloadholder');
            var aM_dicomconstants    = require('../dicom-constants');
            var aM_dicomutils        = require('../dicom-utils');
            var aM_dicominstancerepr = require('../dicom-repr/dicominstance-repr');
            var aM_orthancrepr       = require('dicom-parser');

            return aMod_definer(
                aM_runsubs_test,
                aM_overrider,
                aM_sentinels,
                aM_traversals,
                aM_payloadholder,
                aM_dicomconstants,
                aM_dicomutils,
                aM_dicominstancerepr,
                aM_orthancrepr
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
            "../dicom-utils",
            "../dicom-repr/dicominstance-repr",
            "dicom-parser"
        ], function (
            theM_runsubs_test,
            theM_overrider,
            theM_sentinels,
            theM_traversals,
            theM_payloadholder,
            theM_dicomconstants,
            theM_dicomutils,
            theM_dicominstancerepr
        ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels,
                theM_traversals,
                theM_payloadholder,
                theM_dicomconstants,
                theM_dicomutils,
                theM_dicominstancerepr
            );
        });
    }


}());


