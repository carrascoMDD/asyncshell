'use strict';

/*
 exportparm.js
 Created 201408122334
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

    var aMod_definer =function( theM_parsedconfig,
                                theM_specparser_export,
                                theM_queryparms,
                                theM_traversals,
                                theM_overrider) {


        var ModuleName     = "exportparm";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGEXPORTACTIONS = false;
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


            theToInit.LOGFIELDSACCESSFUNCTIONINVOCATIONS = false;
            theToInit.LOGFIELDSACCESSFUNCTIONEXCEPTIONS  = true;
            theToInit.LOGFIELDSACCESSFUNCTIONCOMPILEEXCEPTIONS  = true;




            theToInit.JSONNAME_EXPORTAS     = "exportAs";
            theToInit.JSONNAME_EXPORTORIGIN = "exportOrigin";
            theToInit.JSONNAME_EXPORTSOURCE = "exportSource";
            theToInit.JSONNAME_EXPORTTARGET = "exportTarget";
            theToInit.JSONNAME_EXPORTWHEN   = "exportWhen";
            theToInit.JSONNAME_EXPORTCOMPUTATION   = "exportComputation";
            theToInit.JSONNAME_EXPORTCOMPUEXTRAPARMS   = "exportCompuExtraParms";



            theToInit.JSONNAMES_EXPORTPARM = [
                theToInit.JSONNAME_EXPORTAS,
                theToInit.JSONNAME_EXPORTORIGIN,
                theToInit.JSONNAME_EXPORTSOURCE,
                theToInit.JSONNAME_EXPORTTARGET,
                theToInit.JSONNAME_EXPORTWHEN,
                theToInit.JSONNAME_EXPORTCOMPUTATION,
                theToInit.JSONNAME_EXPORTCOMPUEXTRAPARMS
            ];



            theToInit.REQUIREDJSONNAMES = [
                theToInit.JSONNAME_EXPORTAS,
                theToInit.JSONNAME_EXPORTORIGIN,
                theToInit.JSONNAME_EXPORTSOURCE
            ];


            theToInit.EXPORTORIGIN_PARMS   = "PARMS";
            theToInit.EXPORTORIGIN_TEST    = "TEST";



            theToInit.EXPORTORIGINS = [
                theToInit.EXPORTORIGIN_PARMS,
                theToInit.EXPORTORIGIN_TEST
            ];




            theToInit.EXPORTWHEN_PARSE        = "PARSE";
            theToInit.EXPORTWHEN_AFTERINIT    = "AFTERINIT";
            theToInit.EXPORTWHEN_EXBETWEENSTEPS = "EXBETWEENSTEPS";
            theToInit.EXPORTWHEN_EXBEFORESUBS   = "EXBEFORESUBS";
            theToInit.EXPORTWHEN_EXBEFOREREQUIREDS = "EXBEFOREREQUIREDS";
            theToInit.EXPORTWHEN_EXBETWEENSUBS  = "EXBETWEENSUBS";
            theToInit.EXPORTWHEN_OK           = "OK";
            theToInit.EXPORTWHEN_FAIL         = "FAIL";
            theToInit.EXPORTWHEN_AFTER        = "AFTER";


            theToInit.EXPORTWHENS = [
                theToInit.EXPORTWHEN_PARSE,
                theToInit.EXPORTWHEN_AFTERINIT,
                theToInit.EXPORTWHEN_EXBETWEENSTEPS,
                theToInit.EXPORTWHEN_EXBEFORESUBS,
                theToInit.EXPORTWHEN_EXBEFOREREQUIREDS,
                theToInit.EXPORTWHEN_EXBETWEENSUBS,
                theToInit.EXPORTWHEN_OK,
                theToInit.EXPORTWHEN_FAIL,
                theToInit.EXPORTWHEN_AFTER
            ];

            theToInit.EXPORTWHEN_DEFAULT = theToInit.EXPORTWHEN_PARSE;




            theToInit.POPULABLEFIELDS_EXPORT = [
                "_v_ExportAs",
                "_v_ExportOrigin",
                "_v_ExportSource",
                "_v_ExportTarget",
                "_v_ExportWhen",
                "_v_ExportComputation",
                "_v_ExportCompuExtraParms"
            ];

            theToInit.POPULABLEFIELDS = theM_parsedconfig.POPULABLEFIELDS.concat( theToInit.POPULABLEFIELDS_EXPORT);




            theToInit.JSONNAMESBYFIELDNAME_EXPORT = {
                "_v_Title":        theM_parsedconfig.JSONNAME_NAME,
                "_v_ExportAs":     theToInit.JSONNAME_EXPORTAS,
                "_v_ExportOrigin": theToInit.JSONNAME_EXPORTORIGIN,
                "_v_ExportSource": theToInit.JSONNAME_EXPORTSOURCE,
                "_v_ExportTarget": theToInit.JSONNAME_EXPORTTARGET,
                "_v_ExportWhen":   theToInit.JSONNAME_EXPORTWHEN,
                "_v_ExportComputation":             theToInit.JSONNAME_EXPORTCOMPUTATION,
                "_v_ExportCompuExtraParms":   theToInit.JSONNAME_EXPORTCOMPUEXTRAPARMS
            };

            for( var aFieldName in theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG) {
                if( theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG.hasOwnProperty( aFieldName)) {
                    theToInit.JSONNAMESBYFIELDNAME_EXPORT[ aFieldName] = theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG[ aFieldName];
                }
            }


            theToInit.EXPORTTARGET_THISCONFIG   = ".";
            theToInit.EXPORTTARGET_PARENTCONFIG = "..";
            theToInit.EXPORTTARGET_ROOT         = "/";
            theToInit.EXPORTTARGET_GLOBALS      = "GLOBALS";

            theToInit.EXPORTSOURCE_WHOLE = "*";


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







        var aExportParm_Prototype = (function() {


            var aPrototype = new theM_parsedconfig.ParsedConfig_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;


            aPrototype._v_Type = "ExportParm";


            aPrototype._v_ExportAs     = null;
            aPrototype._v_ExportOrigin = null;
            aPrototype._v_ExportSource = null;
            aPrototype._v_ExportTarget = null;
            aPrototype._v_ExportWhen   = null;
            aPrototype._v_ExportComputation            = null;
            aPrototype._v_ExportCompuExtraParms  = null;

            aPrototype._v_ExportComputationFunction  = null;

            aPrototype._v_Resolved = null;
            aPrototype._v_ResolveError= null;

            aPrototype._v_ExportedToConfiguration = null;






            var _pInit = function( theTitle, theIdentifier) {

                this._pInit_ExportParm( theTitle, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_ExportParm = function( theTitle, theIdentifier) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ParsedConfig.apply( this, [  theTitle, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ExportOrigin = null;
                this._v_ExportAs     = null;
                this._v_ExportSource = null;
                this._v_ExportTarget = null;
                this._v_ExportWhen   = null;
                this._v_ExportComputation           = null;
                this._v_ExportCompuExtraParms = null;

                this._v_ExportComputationFunction = null;

                this._v_Resolved = null;
                this._v_ResolveError= null;

                this._v_ExportedToConfiguration = null;

                if( this._v_Resolved){}/* CQT */
                if( this._v_ResolveError){}/* CQT */
                if( this._v_ExportedToConfiguration){}/* CQT */
            };
            if( _pInit_ExportParm){}/* CQT */
            aPrototype._pInit_ExportParm = _pInit_ExportParm;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ExportParm( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ExportParm = function( theReleaseParms, theReleaseDone) {

                this._v_ExportOrigin = undefined;
                this._v_ExportAs     = undefined;
                this._v_ExportSource = undefined;
                this._v_ExportTarget = undefined;
                this._v_ExportWhen   = undefined;
                this._v_ExportComputation           = undefined;
                this._v_ExportCompuExtraParms = undefined;

                this._v_ExportComputationFunction = undefined;

                this._v_Resolved = undefined;
                this._v_ResolveError= undefined;

                this._v_ExportedToConfiguration = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ParsedConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ExportParm){}/* CQT */
            aPrototype._pRelease_ExportParm = _pRelease_ExportParm;










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

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_CONFIGS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_ExportParm( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ExportParm= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_ExportOrigin = undefined;
                    this._v_ExportAs     = undefined;
                    this._v_ExportSource = undefined;
                    this._v_ExportTarget = undefined;
                    this._v_ExportWhen   = undefined;
                    this._v_ExportComputation           = undefined;
                    this._v_ExportCompuExtraParms = undefined;

                    this._v_ExportComputationFunction = undefined;

                    this._v_Resolved = undefined;
                    this._v_ResolveError= undefined;

                    this._v_ExportedToConfiguration = undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ParsedConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ExportParm){}/* CQT */
            aPrototype.pCleanUpTest_ExportParm = pCleanUpTest_ExportParm;


















            var pResolveExportNow = function( theNow, theTest) {
                if( !theNow) {
                    return;
                }

                if( this.EXPORTWHENS.indexOf( theNow) < 0) {
                    return;
                }



                var anExportWhen = this._v_ExportWhen;
                if( !anExportWhen) {
                    anExportWhen = this.EXPORTWHEN_DEFAULT;
                }

                if( !( theNow == anExportWhen)) {
                    return;
                }


                if(!this._v_ExportOrigin) {
                    return;
                }

                if( this._v_ExportOrigin == this.EXPORTORIGIN_PARMS) {
                    this.pResolveExportFromParms( theTest);
                    return;
                }

                if( this._v_ExportOrigin == this.EXPORTORIGIN_TEST) {
                    this.pResolveExportFromTest( theTest);
                }

            };
            if( pResolveExportNow){}/* CQT */
            aPrototype.pResolveExportNow = pResolveExportNow;








            var pResolveExportFromParms = function( theTest) {

                var aMethodName = "pResolveExportFromParms"

                if( theTest) {
                    theTest.fRecord( theTest._v_Type, theTest._v_Id, theTest, aMethodName, theTest.EVENTKIND_EXPORT_ABOUTTO, this, null, null);
                }

                if( !( this._v_ExportOrigin == this.EXPORTORIGIN_PARMS)) {
                    return;
                }

                if( !this._v_ExportSource) {
                    return;
                }

                if( !this._v_ExportAs) {
                    return;
                }

                if( !this._v_ExportTarget) {
                    return;
                }

                if( !this._v_OwnerConfiguration) {
                    return;
                }

                var aMapForStepsWithParmPrefix = { };

                var someStepsWithParmPrefix = theM_traversals.fgStepsWithParmPrefix( this._v_ExportSource);
                if( someStepsWithParmPrefix && someStepsWithParmPrefix.length) {
                    aMapForStepsWithParmPrefix = this._v_OwnerConfiguration.fParmResolutionsResolvedValuesByName( someStepsWithParmPrefix, null);
                }



                var aQueryParms = new theM_queryparms.QueryParms_Constructor(
                    "On-" + this._v_OwnerConfiguration._v_Title,
                    this._v_Identifier,
                    this._v_OwnerConfiguration,
                    [ this._v_ExportSource],
                    aMapForStepsWithParmPrefix
                );

                aQueryParms.pResolveParmsQuery();


                var aParmResolution =  this._v_OwnerConfiguration._v_ParmResolutionsByName[ this._v_ExportSource];
                if( !aParmResolution || !aParmResolution._v_Success) {
                    return;
                }


                var aValueToExport = aParmResolution._v_ParmValue;


                var aTargetConfig = this.fExportTargetConfiguration();
                if( !aTargetConfig) {
                    return;
                }


                if( this._v_ExportComputation) {

                    var anExportComputationFunction = this.fExportComputationFunction();
                    if( anExportComputationFunction && ( typeof anExportComputationFunction == "function")) {

                        var aComputedValueToExport = null;

                        var someExportComputExtraParms = this.fExportComputExtraParms();
                        if( someExportComputExtraParms && someExportComputExtraParms.length) {

                            var someParms = [ aValueToExport];
                            Array.prototype.push.apply( someParms, someExportComputExtraParms);

                            try {
                                aComputedValueToExport = anExportComputationFunction.apply( null, someParms);
                            }
                            catch( anException) {
                                if( this.LOGFIELDSACCESSFUNCTIONEXCEPTIONS) {
                                    console.log( "EXCEPTION Evaluating ExportComputationFunction " + this._v_ExportComputation);
                                }
                                throw anException;
                            }
                        }
                        else {

                            try {
                                aComputedValueToExport = anExportComputationFunction( aValueToExport);
                            }
                            catch( anException) {
                                if( this.LOGFIELDSACCESSFUNCTIONEXCEPTIONS) {
                                    console.log( "EXCEPTION Evaluating ExportComputationFunction " + this._v_ExportComputation);
                                }
                                throw anException;
                            }
                        }



                        aValueToExport = aComputedValueToExport;
                    }

                }



                aTargetConfig.pInjectExportedParm( this._v_ExportAs, aValueToExport);


                this._v_ExportedToConfiguration = aTargetConfig;

                this._v_Resolved = true;

                if( theTest) {
                    theTest.fRecord( theTest._v_Type, theTest._v_Id, theTest, aMethodName, theTest.EVENTKIND_EXPORT_OK, aValueToExport, null, this);
                }

            };
            if( pResolveExportFromParms){}/* CQT */
            aPrototype.pResolveExportFromParms = pResolveExportFromParms;











            var pResolveExportFromTest = function( theTest) {

                var aMethodName = "pResolveExportFromTest";

                if( theTest) {
                    theTest.fRecord( theTest._v_Type, theTest._v_Id, theTest, aMethodName, theTest.EVENTKIND_EXPORT_ABOUTTO, this, null, null);
                }


                if( !( this._v_ExportOrigin == this.EXPORTORIGIN_TEST)) {
                    return;
                }

                if( !theTest) {
                    return;
                }

                if( !this._v_ExportSource) {
                    return;
                }

                if( !this._v_ExportAs) {
                    return;
                }

                if( !this._v_ExportTarget) {
                    return;
                }

                if( !this._v_OwnerConfiguration) {
                    return;
                }

                var aTraversalResult = theM_traversals.fgTraverseToFromValue( this._v_ExportSource, theTest, theTest._v_Configuration);
                if( !aTraversalResult) {
                    return null;
                }

                var aValueToExport = aTraversalResult[ "value"];


                var aTargetConfig = this.fExportTargetConfiguration();
                if( !aTargetConfig) {
                    return;
                }


                if( this._v_ExportComputation) {

                    var anExportComputationFunction = this.fExportComputationFunction();
                    if( anExportComputationFunction && ( typeof anExportComputationFunction == "function")) {


                        var aComputedValueToExport = null;


                        var someExportComputExtraParms = this.fExportComputExtraParms();
                        if( someExportComputExtraParms && someExportComputExtraParms.length) {

                            var someParms = [ aValueToExport];
                            Array.prototype.push.apply( someParms, someExportComputExtraParms);

                            try {
                                aComputedValueToExport = anExportComputationFunction.apply( null, someParms);
                            }
                            catch( anException) {
                                if( this.LOGFIELDSACCESSFUNCTIONEXCEPTIONS) {
                                    console.log( "EXCEPTION Evaluating ExportComputationFunction " + this._v_ExportComputation);
                                }
                                throw anException;
                            }
                        }
                        else {

                            try {
                                aComputedValueToExport = anExportComputationFunction( aValueToExport);
                            }
                            catch( anException) {
                                if( this.LOGFIELDSACCESSFUNCTIONEXCEPTIONS) {
                                    console.log( "EXCEPTION Evaluating ExportComputationFunction " + this._v_ExportComputation);
                                }
                                throw anException;
                            }
                        }



                        aValueToExport = aComputedValueToExport;
                    }

                }


                aTargetConfig.pInjectExportedParm( this._v_ExportAs, aValueToExport);


                this._v_ExportedToConfiguration = aTargetConfig;

                this._v_Resolved = true;

                if( theTest) {
                    theTest.fRecord( theTest._v_Type, theTest._v_Id, theTest, aMethodName, theTest.EVENTKIND_EXPORT_OK, aValueToExport, null, this);
                }

            };
            if( pResolveExportFromTest){}/* CQT */
            aPrototype.pResolveExportFromTest = pResolveExportFromTest;








            var fExportComputExtraParms = function() {

                if ( !this._v_ExportCompuExtraParms) {
                    return null;
                }

                if ( !this._v_OwnerConfiguration) {
                    return null;
                }


                var someExtraParmsToResolve = this._v_ExportCompuExtraParms;
                if( typeof someExtraParmsToResolve == "string") {
                    someExtraParmsToResolve = [ someExtraParmsToResolve];
                }

                if ( !typeof someExtraParmsToResolve == "object") {
                    return null;
                }

                var aNumExtraParmsToResolve = someExtraParmsToResolve.length;
                if( !aNumExtraParmsToResolve) {
                    return null;
                }


                var someExtraParms       = [ ];

                for( var anExtraParmToResolveIdx=0; anExtraParmToResolveIdx < aNumExtraParmsToResolve; anExtraParmToResolveIdx++) {

                    var anExtraParmToResolve = someExtraParmsToResolve[ anExtraParmToResolveIdx];
                    if( anExtraParmToResolve) {

                        var anExtraParmReplacement = theM_traversals.fgParmValueReplacement( this._v_OwnerConfiguration, anExtraParmToResolve, null);
                        someExtraParms.push( anExtraParmReplacement);
                    }
                }

                return someExtraParms;
            };
            if( fExportComputExtraParms){}/* CQT */
            aPrototype.fExportComputExtraParms = fExportComputExtraParms;










            var fPatchLineForComputationFunction = function( theString, theLineNumber, theLineSeparator, theStart, theLength, theReplacement) {

                if( !theString) {
                    return theString;
                }

                if( theStart < 0) {
                    return theString;
                }

                if( theLength < 0) {
                    return theString;
                }



                var aLine = theString;

                var someLines = null;

                if( typeof theLineNumber == "number") {

                    if( typeof theLineSeparator == "string") {
                        someLines = theString.split( theLineSeparator);
                        if( someLines) {
                            var aNumLines = someLines.length;
                            if( !aNumLines) {
                                return theString;
                            }
                            if( aNumLines <= theLineNumber) {
                                return theString;
                            }
                            aLine = someLines[ theLineNumber];
                        }
                    }
                }

                var aLineLen = aLine.length;
                if( !aLineLen) {
                    return theString;
                }

                var aResultLine = "";
                if( theStart > 0) {
                    if( theStart < ( aLineLen - 1)) {
                        aResultLine = aLine.substring( 0, theStart);
                    }
                    else {
                        aResultLine = aLine;
                    }
                }

                var aReplacement = theReplacement;

                var aReplacementLen = theReplacement.length;
                if( aReplacementLen < theLength) {

                    var aNumFullReplacementCopies = Math.floor( theLength / aReplacementLen);
                    if( aNumFullReplacementCopies > 1) {
                        for( var aFullCopyIdx=1; aFullCopyIdx < aNumFullReplacementCopies; aFullCopyIdx++) {
                            aReplacement += theReplacement;
                        }
                    }
                    var aFullReplacementLen = aReplacement.length;
                    var aRemainingReplacementLen = theLength - aFullReplacementLen;
                    if( aRemainingReplacementLen > 0) {
                        aReplacement += theReplacement.substring( 0, aRemainingReplacementLen);
                    }

                }
                else {
                    if( aReplacementLen > theLength) {
                        aReplacement = aReplacement.substring( 0, theLength);
                    }
                }

                aResultLine += aReplacement;

                var aToCopyFromRightIdx = theStart + theLength;
                if( aToCopyFromRightIdx < aLineLen) {
                    aResultLine += aLine.substring( aToCopyFromRightIdx);
                }


                var aResult = aResultLine;

                if( !( someLines == null)) {
                    someLines[ theLineNumber] = aResultLine;
                    aResult = someLines.join( theLineSeparator);
                }

                return aResult;

            };







            var fPatchMultipleLinesForComputationFunction = function( theString, theLineReplacements) {

                if( !theString) {
                    return theString;
                }

                if( !theLineReplacements) {
                    return theString;
                }

                var aNumLineReplacements = theLineReplacements.length;
                if( !aNumLineReplacements) {
                    return theString;
                }

                var aString = theString;

                for( var aLineReplacementIdx=0; aLineReplacementIdx < aNumLineReplacements; aLineReplacementIdx++) {
                    var aLineReplacement = theLineReplacements[ aLineReplacementIdx];
                    if( aLineReplacement) {

                        var aLineReplaced = fPatchLineForComputationFunction( aString,
                            aLineReplacement[ 0], /* theLineNumber */
                            aLineReplacement[ 1], /* theLineSeparator */
                            aLineReplacement[ 2], /* theStart */
                            aLineReplacement[ 3], /* theLength */
                            aLineReplacement[ 4]  /* theReplacement */
                        );

                        aString = aLineReplaced;
                    }
                }

                return aString;
            };










            var fExtractColumnFromMultipleLinesForComputationFunction = function( theString, theLineSeparator, theColumnStart, theColumnLength) {

                if( !theString) {
                    return theString;
                }

                if( !theLineSeparator) {
                    return theString;
                }


                var someLines = theString.split( theLineSeparator);
                if( !someLines) {
                    return theString;
                }

                var aNumLines = someLines.length;
                if( !aNumLines) {
                    return theString;
                }

                var aColumnStart = theColumnStart;
                if( !( typeof theColumnStart == "number")) {
                    aColumnStart = 0;
                }
                else {
                    if( aColumnStart < 0) {
                        return theString;
                    }
                }

                var aColumnLength = theColumnLength;
                if( !( typeof theColumnLength == "number")) {
                    aColumnLength = -1;
                }
                else {
                    if( aColumnLength <= 0) {
                        return theString;
                    }
                }


                var someColumns = new Array( aNumLines); 

                for( var aLineIdx=0; aLineIdx < aNumLines; aLineIdx++) {

                    var aLine = someLines[ aLineIdx];

                    var aColumn = aLine;

                    if( aColumn) {
                        var aLineLen = aLine.length;
                        if( aColumnStart > 0) {
                            aColumn = aColumn.substring( aColumnStart);
                        }
                        if( aColumnLength > 0) {
                            var aLenForColumn = aColumnLength;
                            if( aLenForColumn > aLineLen.length) {
                                aLenForColumn = aLineLen.length;
                            }
                            aColumn = aColumn.substring( 0, aLenForColumn);
                        }
                    }
                    someColumns[ aLineIdx] = aColumn;
                }


                return someColumns;
            };










            var fSortMultipleLinesForComputationFunction = function( theString, theLineSeparator, theIndexStart, theIndexLength) {

                if( !theString) {
                    return theString;
                }

                if( !theLineSeparator) {
                    return theString;
                }


                var someLines = theString.split( theLineSeparator);
                if( !someLines) {
                    return theString;
                }

                var aNumLines = someLines.length;
                if( !aNumLines) {
                    return theString;
                }

                var anIndexStart = theIndexStart;
                if( !( typeof theIndexStart == "number")) {
                    anIndexStart = 0;
                }
                else {
                    if( anIndexStart < 0) {
                        return theString;
                    }
                }

                var anIndexLength = theIndexLength;
                if( !( typeof theIndexLength == "number")) {
                    anIndexLength = -1;
                }
                else {
                    if( anIndexLength <= 0) {
                        return theString;
                    }
                }


                var someIndexesAndLines = new Array( aNumLines); 

                for( var aLineIdx=0; aLineIdx < aNumLines; aLineIdx++) {

                    var aLine = someLines[ aLineIdx];

                    var anIndexAndLine = [ "", aLine];

                    if( aLine) {
                        var aLineLen = aLine.length;
                        var anIndex = aLine;
                        if( anIndexStart > 0) {
                            anIndex = anIndex.substring( anIndexStart);
                        }
                        if( anIndexLength > 0) {
                            var aLenForIndex = anIndexLength;
                            if( aLenForIndex > aLineLen.length) {
                                aLenForIndex = aLineLen.length;
                            }
                            anIndex = anIndex.substring( 0, aLenForIndex);
                            anIndexAndLine[ 0] = anIndex;
                        }
                    }
                    someIndexesAndLines[ aLineIdx] = anIndexAndLine;
                }


                someIndexesAndLines.sort( function( theIL1, theIL2) {

                    if( ( theIL1 == null) && ( theIL2 == null)) {
                        return 0;
                    }

                    if( theIL1 == null) {
                        return -1;
                    }

                    if( theIL2 == null) {
                        return 1;
                    }

                    var aIndex1 = theIL1[ 0];
                    var aIndex2 = theIL2[ 0];


                    if( ( aIndex1 == null) && ( aIndex2 == null)) {
                        return 0;
                    }

                    if( aIndex1 == null) {
                        return -1;
                    }

                    if( aIndex2 == null) {
                        return 1;
                    }

                    if( aIndex1 < aIndex2) {
                        return -1;
                    }

                    if( aIndex1 > aIndex2) {
                        return 1;
                    }

                    return 0;
                });



                var aNumSortedLines = someIndexesAndLines.length;
                if( !aNumSortedLines) {
                    return theString;
                }

                var someSortedLines = new Array( aNumSortedLines); 

                for( var aSortedLineIdx=0; aSortedLineIdx < aNumSortedLines; aSortedLineIdx++) {

                    var anIndexAndLine = someIndexesAndLines[ aSortedLineIdx];
                    if( anIndexAndLine) {
                        var aSortedLine = anIndexAndLine[ 1];
                        someSortedLines[ aSortedLineIdx] = aSortedLine;
                    }
                }


                var aSortedResult = someSortedLines.join( theLineSeparator);

                return aSortedResult;
            };










            var fExportComputationFunction = function() {


                if( this._v_ExportComputationFunction && ( typeof this._v_ExportComputationFunction == "function")) {
                    return this._v_ExportComputationFunction;
                }

                if( !this._v_ExportComputation) {
                    return null;
                }



                var someArgNames = [ "theFunArg"];

                if ( this._v_ExportCompuExtraParms) {

                    var someExtraParmsToResolve = this._v_ExportCompuExtraParms;
                    if( typeof someExtraParmsToResolve == "string") {
                        someExtraParmsToResolve = [ someExtraParmsToResolve];
                    }
                    if ( typeof someExtraParmsToResolve == "object") {

                        var aNumExtraParmsToResolve = someExtraParmsToResolve.length;
                        if( aNumExtraParmsToResolve) {

                            for( var anExtraParmIdx=0; anExtraParmIdx < aNumExtraParmsToResolve; anExtraParmIdx++) {

                                var anExtraArgName = "theEP" + anExtraParmIdx;
                                someArgNames.push( anExtraArgName);
                            }
                        }
                    }
                }

                var anArgNames = someArgNames.join( ",");






                var anExportComputationSourceCode = this._v_ExportComputation;



                var aMapForStepsWithParmPrefix = { };

                var someStepsWithParmPrefix = theM_traversals.fgStepsWithParmPrefix( anExportComputationSourceCode);
                if( someStepsWithParmPrefix && someStepsWithParmPrefix.length) {
                    aMapForStepsWithParmPrefix = this._v_OwnerConfiguration.fParmResolutionsResolvedValuesByName( someStepsWithParmPrefix, null);
                }




                var anExportComputationSourceCodeReplacement = theM_traversals.fgParmValueReplacement( this._v_OwnerConfiguration, anExportComputationSourceCode, aMapForStepsWithParmPrefix);







                var anExportComputationFunctionSourceCode = "(function( " + anArgNames + ") {\n" +
                    "    var aFun = ";
                anExportComputationFunctionSourceCode += "    " + anExportComputationSourceCodeReplacement;
                anExportComputationFunctionSourceCode += ";\n";

                if( this.LOGFIELDSACCESSFUNCTIONINVOCATIONS) {
                    var anExportComputationEscaped = anExportComputationSourceCodeReplacement.replace( /"/g, '\\"').replace( /'/g, "\\'");
                    anExportComputationFunctionSourceCode += "    console.log( 'ExportComputationFunction " + anExportComputationEscaped + "');\n";
                }

                anExportComputationFunctionSourceCode += "    return aFun( " + anArgNames + ");\n";
                anExportComputationFunctionSourceCode += " });";

                var aThis = this;

                var anExportComputationFunction = (function() {

                    var aParsedFunction = null;
                    try {
                        var fPL  = fPatchLineForComputationFunction;
                        var fPLs = fPatchMultipleLinesForComputationFunction;
                        var fSLs = fSortMultipleLinesForComputationFunction;
                        var fELs = fExtractColumnFromMultipleLinesForComputationFunction;
                        aParsedFunction = eval( anExportComputationFunctionSourceCode);
                    }
                    catch( anException) {
                        if( aThis.LOGFIELDSACCESSFUNCTIONCOMPILEEXCEPTIONS) {
                            console.log( "EXCEPTION Compiling ExportComputationFunction " + anExportComputationFunctionSourceCode);
                        }
                        throw anException;
                    }
                    return aParsedFunction;
                })();



                if( anExportComputationFunction && ( typeof anExportComputationFunction == "function")) {
                    this._v_ExportComputationFunction = anExportComputationFunction;
                }

                return this._v_ExportComputationFunction;

            };
            if( fExportComputationFunction){}/* CQT */
            aPrototype.fExportComputationFunction = fExportComputationFunction;















            var fExportTargetConfiguration = function() {

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportTargetConfiguration ExportParm As=" + this._v_ExportAs + " Src=" + this._v_ExportSource + " Begin" , JSON.stringify( this.fToStoreJSON_identifying()));
                }

                if( !this._v_ExportTarget) {
                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportTargetConfiguration ExportParm", " !this._v_ExportTarget" , JSON.stringify( this.fToStoreJSON_identifying()));
                    }
                    return null;
                }

                if( !this._v_OwnerConfiguration) {
                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportTargetConfiguration ExportParm ", " !this._v_OwnerConfiguration", JSON.stringify( this.fToStoreJSON_identifying()));
                    }
                    return null;
                }





                var anExportToRoot = this._v_ExportTarget == this.EXPORTTARGET_ROOT;
                if( anExportToRoot) {
                    var aRootHolderConfiguration = this._v_OwnerConfiguration.fExportToRootTargetConfiguration();

                    if( !aRootHolderConfiguration) {
                        if( this.LOGEXPORTTARGETS) {
                            console.log( "fExportTargetConfiguration ExportParm ", "( this._v_ExportTarget == this.EXPORTTARGET_GLOBALS) && !this._v_OwnerConfiguration.fExportToRootTargetConfiguration()", JSON.stringify( this.fToStoreJSON_identifying()));
                        }
                        return null;
                    }

                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportTargetConfiguration ExportParm  As=" + this._v_ExportAs + " Src=" + this._v_ExportSource + " Root ExportTarget=" , aRootHolderConfiguration ? JSON.stringify( aRootHolderConfiguration.fToStoreJSON_identifying()) : null);
                    }

                    return aRootHolderConfiguration;
                }





                var anExportToGlobals = this._v_ExportTarget == this.EXPORTTARGET_GLOBALS;
                if( anExportToGlobals) {
                    var aGlobalsHolderConfiguration = this._v_OwnerConfiguration.fExportToGlobalsTargetConfiguration();

                    if( !aGlobalsHolderConfiguration) {
                        if( this.LOGEXPORTTARGETS) {
                            console.log( "fExportTargetConfiguration ExportParm ", "( this._v_ExportTarget == this.EXPORTTARGET_GLOBALS) && !this._v_OwnerConfiguration.fExportToGlobalsTargetConfiguration()", JSON.stringify( this.fToStoreJSON_identifying()));
                        }
                        return null;
                    }

                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportTargetConfiguration ExportParm  As=" + this._v_ExportAs + " Src=" + this._v_ExportSource + " Globals ExportTarget=" , aGlobalsHolderConfiguration ? JSON.stringify( aGlobalsHolderConfiguration.fToStoreJSON_identifying()) : null);
                    }

                    return aGlobalsHolderConfiguration;
                }




                var anExportToParent = this._v_ExportTarget == this.EXPORTTARGET_PARENTCONFIG;

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportTargetConfiguration ExportParm ", " delegate into this._v_OwnerConfiguration", JSON.stringify( this.fToStoreJSON_identifying()), " anExportToParent=", anExportToParent );
                }

                var anExportTargetConfiguration = this._v_OwnerConfiguration.fExportTargetConfiguration( anExportToParent);
                if( anExportTargetConfiguration){}/* CQT */

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportTargetConfiguration ExportParm  As=" + this._v_ExportAs + " Src=" + this._v_ExportSource + " ExportTarget=" , anExportTargetConfiguration ? JSON.stringify( anExportTargetConfiguration.fToStoreJSON_identifying()) : null);
                }

                return anExportTargetConfiguration;
            };
            if( fExportTargetConfiguration){}/* CQT */
            aPrototype.fExportTargetConfiguration = fExportTargetConfiguration;










            var fHasFailedToResolveExportNow = function( theNow) {
                if( !theNow) {
                    return false;
                }

                if( this.EXPORTWHENS.indexOf( theNow) < 0) {
                    return false;
                }


                var anExportWhen = this._v_ExportWhen;
                if( !anExportWhen) {
                    anExportWhen = this.EXPORTWHEN_DEFAULT;
                }

                if( !( theNow == anExportWhen)) {
                    return false;
                }

                return !this._v_Resolved;
            };
            if( fHasFailedToResolveExportNow){}/* CQT */
            aPrototype.fHasFailedToResolveExportNow = fHasFailedToResolveExportNow;







            var fAsLogObject = function() {

                var aLogObject = {
                    "name":                this._v_Title,
                    "exportAs":            this._v_ExportAs,
                    "exportOrigin":        this._v_ExportOrigin,
                    "exportSource":        this._v_ExportSource,
                    "exportTarget":        this._v_ExportTarget,
                    "exportWhen":          this._v_ExportWhen,
                    "exportComputation":   this._v_ExportComputation,
                    "resolved":            this._v_Resolved
                };

                return aLogObject;

            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;









            var fToStoreJSON = function( theCommonObjects, theAlready) {

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fToStoreJSON_identifying();
                    }
                }

                var aParser = this._v_Parser;
                if( !aParser) {
                    aParser = new theM_specparser_export.SpecParserExport_Constructor( this._v_Identifier, null, null, true);
                }

                var aToStoreJSON = aParser.fToStoreJSON( this, theCommonObjects, theAlready);
                if( aToStoreJSON){}/* CQT */
                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;










            return aPrototype;

        })();




        var ExportParm_Constructor = function( theTitle, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ExportOrigin = null;
            this._v_ExportAs     = null;
            this._v_ExportSource = null;
            this._v_ExportTarget = null;
            this._v_ExportWhen   = null;
            this._v_ExportComputation           = null;
            this._v_ExportCompuExtraParms = null;

            this._v_ExportComputationFunction  = null;

            this._v_Resolved = null;
            this._v_ResolveError= null;

            this._v_ExportedToConfiguration = null;

            this._pInit_ExportParm( theTitle, theIdentifier);
        };
        ExportParm_Constructor.prototype = aExportParm_Prototype;





        var ExportParm_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = aExportParm_Prototype;
            this._v_Type = null;

            this._v_ExportOrigin = null;
            this._v_ExportAs     = null;
            this._v_ExportSource = null;
            this._v_ExportTarget = null;
            this._v_ExportWhen   = null;
            this._v_ExportComputation           = null;
            this._v_ExportCompuExtraParms = null;

            this._v_ExportComputationFunction  = null;

            this._v_Resolved = null;
            this._v_ResolveError= null;

            this._v_ExportedToConfiguration = null;
        };
        ExportParm_SuperPrototypeConstructor.prototype = aExportParm_Prototype;



        var aModule = {
            "ExportParm_Prototype": aExportParm_Prototype,
            "ExportParm_Constructor": ExportParm_Constructor,
            "ExportParm_SuperPrototypeConstructor": ExportParm_SuperPrototypeConstructor
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

            var aM_parsedconfig      = require('./parsedconfig');
            var aM_specparser_export = require('./specparser/specparser-export');
            var aM_queryparms        = require('./queryparms');
            var aM_traversals        = require('../traversals/traversals');
            var aM_overrider         = require('../overrider');

            return aMod_definer(
                aM_parsedconfig,
                aM_specparser_export,
                aM_queryparms,
                aM_traversals,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./parsedconfig",
            "./specparser/specparser-export",
            "./specparser/specparser-config",
            "./queryparms",
            "../traversals/traversals",
            "../overrider"
        ],
        function (
            theM_parsedconfig,
            theM_specparser_export,
            theM_queryparms,
            theM_traversals,
            theM_overrider
        ) {
            return aMod_definer(
                theM_parsedconfig,
                theM_specparser_export,
                theM_queryparms,
                theM_traversals,
                theM_overrider
            );
        });
    }


}());