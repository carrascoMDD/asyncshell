'use strict';

/*
 checkoutcome.js
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

    var aMod_definer =function(
        theM_parsedconfig,
        theM_specparser_check,
        theM_sentinels,
        theM_traversals
    ) {


        var ModuleName     = "checkoutcome";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.JSONNAME_CHECKWHEN   = "checkWhen";
            theToInit.JSONNAME_CHECKNEGATE = "checkNegate";
            theToInit.JSONNAME_CHECKKIND   = "checkKind";
            theToInit.JSONNAME_CHECKORIGIN = "checkOrigin";
            theToInit.JSONNAME_CHECKSOURCE = "checkSource";
            theToInit.JSONNAME_CHECKVALUE  = "checkValue";


            theToInit.JSONNAMES_CHECKPARM = [
                theToInit.JSONNAME_CHECKWHEN,
                theToInit.JSONNAME_CHECKNEGATE,
                theToInit.JSONNAME_CHECKKIND,
                theToInit.JSONNAME_CHECKORIGIN,
                theToInit.JSONNAME_CHECKSOURCE,
                theToInit.JSONNAME_CHECKVALUE
            ];



            theToInit.REQUIREDJSONNAMES = [
                theToInit.JSONNAME_CHECKWHEN,
                theToInit.JSONNAME_CHECKKIND,
                theToInit.JSONNAME_CHECKORIGIN,
                theToInit.JSONNAME_CHECKSOURCE,
                theToInit.JSONNAME_CHECKVALUE
            ];



            theToInit.CHECKKIND_TYPE_BOOL      = "TYPE_BOOL";
            theToInit.CHECKKIND_TYPE_STRING    = "TYPE_STRING";
            theToInit.CHECKKIND_TYPE_NUMBER    = "TYPE_NUMBER";
            theToInit.CHECKKIND_TYPE_OBJECT    = "TYPE_OBJECT";
            theToInit.CHECKKIND_TYPE_LIST      = "TYPE_LIST";
            theToInit.CHECKKIND_TYPE_FUNCTION  = "TYPE_FUNCTION";
            theToInit.CHECKKIND_NULL           = "NULL";
            theToInit.CHECKKIND_NOTNULL        = "NOTNULL";
            theToInit.CHECKKIND_EMPTYSTRING    = "EMPTYSTRING";
            theToInit.CHECKKIND_NOTEMPTYSTRING = "NOTEMPTYSTRING";
            theToInit.CHECKKIND_STRINGLEN      = "STRINGLEN";
            theToInit.CHECKKIND_EMPTYLIST      = "EMPTYLIST";
            theToInit.CHECKKIND_NOTEMPTYLIST   = "NOTEMPTYLIST";
            theToInit.CHECKKIND_LISTSIZE       = "LISTSIZE";
            theToInit.CHECKKIND_EMPTYDICT      = "EMPTYDICT";
            theToInit.CHECKKIND_NOTEMPTYDICT   = "NOTEMPTYDICT";
            theToInit.CHECKKIND_DICTSIZE       = "DICTSIZE";
            theToInit.CHECKKIND_EQ             = "EQ";
            theToInit.CHECKKIND_NEQ            = "NEQ";
            theToInit.CHECKKIND_GT             = "GT";
            theToInit.CHECKKIND_GTE            = "GTE";
            theToInit.CHECKKIND_LT             = "LT";
            theToInit.CHECKKIND_LTE            = "LTE";
            theToInit.CHECKKIND_INLIST         = "INLIST";
            theToInit.CHECKKIND_NOTINLIST      = "NOTINLIST";
            theToInit.CHECKKIND_LISTCONTAINS   = "LISTCONTAINS";
            theToInit.CHECKKIND_LISTNOTCONTAINS= "LISTNOTCONTAINS";
            theToInit.CHECKKIND_INKEYS         = "INKEYS";
            theToInit.CHECKKIND_NOTINKEYS      = "NOTINKEYS";
            theToInit.CHECKKIND_INVALUES       = "INVALUES";
            theToInit.CHECKKIND_NOTINVALUES    = "NOTINVALUES";
            theToInit.CHECKKIND_DICTCONTAINSKEY= "DICTCONTAINSKEY";
            theToInit.CHECKKIND_DICTNOTCONTAINSKEY= "DICTNOTCONTAINSKEY";
            theToInit.CHECKKIND_DICTCONTAINSVALUE= "DICTCONTAINSVALUE";
            theToInit.CHECKKIND_DICTNOTCONTAINSVALUE= "DICTNOTCONTAINSVALUE";


            theToInit.CHECKKINDS = [
                theToInit.CHECKKIND_TYPE_BOOL,
                theToInit.CHECKKIND_TYPE_STRING,
                theToInit.CHECKKIND_TYPE_NUMBER,
                theToInit.CHECKKIND_TYPE_OBJECT,
                theToInit.CHECKKIND_TYPE_LIST,
                theToInit.CHECKKIND_TYPE_FUNCTION,
                theToInit.CHECKKIND_NULL,
                theToInit.CHECKKIND_NOTNULL,
                theToInit.CHECKKIND_EMPTYSTRING,
                theToInit.CHECKKIND_NOTEMPTYSTRING,
                theToInit.CHECKKIND_STRINGLEN,
                theToInit.CHECKKIND_EMPTYLIST,
                theToInit.CHECKKIND_NOTEMPTYLIST,
                theToInit.CHECKKIND_LISTSIZE,
                theToInit.CHECKKIND_EMPTYDICT,
                theToInit.CHECKKIND_NOTEMPTYDICT,
                theToInit.CHECKKIND_DICTSIZE,
                theToInit.CHECKKIND_EQ,
                theToInit.CHECKKIND_NEQ,
                theToInit.CHECKKIND_GT,
                theToInit.CHECKKIND_GTE,
                theToInit.CHECKKIND_LT,
                theToInit.CHECKKIND_LTE,
                theToInit.CHECKKIND_INLIST,
                theToInit.CHECKKIND_NOTINLIST,
                theToInit.CHECKKIND_LISTCONTAINS,
                theToInit.CHECKKIND_LISTNOTCONTAINS,
                theToInit.CHECKKIND_INKEYS,
                theToInit.CHECKKIND_NOTINKEYS,
                theToInit.CHECKKIND_INVALUES,
                theToInit.CHECKKIND_NOTINVALUES,
                theToInit.CHECKKIND_DICTCONTAINSKEY,
                theToInit.CHECKKIND_DICTNOTCONTAINSKEY,
                theToInit.CHECKKIND_DICTCONTAINSVALUE,
                theToInit.CHECKKIND_DICTNOTCONTAINSVALUE
            ];

            

            theToInit.CHECKORIGIN_PARMS   = "PARMS";
            theToInit.CHECKORIGIN_TEST    = "TEST";
            theToInit.CHECKORIGIN_DYNPARMS   = "DYNPARMS";

            theToInit.CHECKORIGINS = [
                theToInit.CHECKORIGIN_PARMS,
                theToInit.CHECKORIGIN_TEST,
                theToInit.CHECKORIGIN_DYNPARMS
            ];




            theToInit.CHECKWHEN_PARSE        = "PARSE";
            theToInit.CHECKWHEN_AFTERINIT    = "AFTERINIT";
            theToInit.CHECKWHEN_BETWEENSTEPS = "BETWEENSTEPS";
            theToInit.CHECKWHEN_AFTERSTEPS   = "AFTERSTEPS";
            theToInit.CHECKWHEN_BETWEENSUBS  = "BETWEENSUBS";
            theToInit.CHECKWHEN_OK           = "OK";
            theToInit.CHECKWHEN_FAIL         = "FAIL";
            theToInit.CHECKWHEN_AFTER        = "AFTER";
            theToInit.CHECKWHEN_NEVER        = "NEVER";
            theToInit.CHECKWHEN_BEFORESUBS   = "BEFORESUBS";
            theToInit.CHECKWHEN_START        = "START";


            theToInit.CHECKWHENS = [
                theToInit.CHECKWHEN_PARSE,
                theToInit.CHECKWHEN_AFTERINIT,
                theToInit.CHECKWHEN_BETWEENSTEPS,
                theToInit.CHECKWHEN_AFTERSTEPS,
                theToInit.CHECKWHEN_BETWEENSUBS,
                theToInit.CHECKWHEN_OK,
                theToInit.CHECKWHEN_FAIL,
                theToInit.CHECKWHEN_AFTER,
                theToInit.CHECKWHEN_NEVER,
                theToInit.CHECKWHEN_BEFORESUBS,
                theToInit.CHECKWHEN_START
            ];

            theToInit.CHECKWHEN_DEFAULT = theToInit.CHECKWHEN_PARSE;



            theToInit.POPULABLEFIELDS_CHECK = [
                "_v_CheckWhen",
                "_v_CheckNegate",
                "_v_CheckKind",
                "_v_CheckOrigin",
                "_v_CheckSource",
                "_v_CheckValue"
            ];

            theToInit.POPULABLEFIELDS = theM_parsedconfig.POPULABLEFIELDS.concat( theToInit.POPULABLEFIELDS_CHECK);





            theToInit.JSONNAMESBYFIELDNAME_CHECK = {
                "_v_CheckWhen":   theToInit.JSONNAME_CHECKWHEN,
                "_v_CheckNegate": theToInit.JSONNAME_CHECKNEGATE,
                "_v_CheckKind":   theToInit.JSONNAME_CHECKKIND,
                "_v_CheckOrigin": theToInit.JSONNAME_CHECKORIGIN,
                "_v_CheckSource": theToInit.JSONNAME_CHECKSOURCE,
                "_v_CheckValue":  theToInit.JSONNAME_CHECKVALUE
            };

            for( var aFieldName in theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG) {
                if( theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG.hasOwnProperty( aFieldName)) {
                    theToInit.JSONNAMESBYFIELDNAME_CHECK[ aFieldName] = theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG[ aFieldName];
                }
            }



            theToInit.FIELDNAMESBYJSONNAME_CHECK = { };

            for( var otherFieldName in theToInit.JSONNAMESBYFIELDNAME_CHECK) {
                if( theToInit.JSONNAMESBYFIELDNAME_CHECK.hasOwnProperty( otherFieldName)) {

                    var aJSONname = theToInit.JSONNAMESBYFIELDNAME_CHECK[ otherFieldName];

                    theToInit.FIELDNAMESBYJSONNAME_CHECK[ aJSONname] = otherFieldName;

                }
            }


        };



        var ModuleConstants = {};
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










        var aCheckOutcome_Prototype = (function() {


            var aPrototype = new theM_parsedconfig.ParsedConfig_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;


            aPrototype._v_Type = "CheckOutcome";


            aPrototype._v_CheckWhen     = null;
            aPrototype._v_CheckNegate   = null;
            aPrototype._v_CheckKind   = null;
            aPrototype._v_CheckOrigin = null;
            aPrototype._v_CheckSource = null;
            aPrototype._v_CheckValue = null;

            aPrototype._v_Checked      = null;
            aPrototype._v_CheckError   = null;
            aPrototype._v_CheckMatched = null;


  



            var _pInit = function( theTitle, theIdentifier) {

                this._pInit_CheckOutcome( theTitle, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_CheckOutcome = function( theTitle, theIdentifier) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ParsedConfig.apply( this, [  theTitle, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_CheckWhen     = null;
                this._v_CheckNegate   = null;
                this._v_CheckKind   = null;
                this._v_CheckOrigin = null;
                this._v_CheckSource = null;
                this._v_CheckValue = null;

                this._v_Checked      = null;
                this._v_CheckError   = null;
                this._v_CheckMatched = null;

                if( this._v_Checked){}/* CQT */
                if( this._v_CheckError){}/* CQT */
            };
            if( _pInit_CheckOutcome){}/* CQT */
            aPrototype._pInit_CheckOutcome = _pInit_CheckOutcome;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_CheckOutcome( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_CheckOutcome = function( theReleaseParms, theReleaseDone) {

                this._v_CheckWhen     = undefined;
                this._v_CheckNegate   = undefined;
                this._v_CheckKind   = undefined;
                this._v_CheckOrigin = undefined;
                this._v_CheckSource = undefined;
                this._v_CheckValue = undefined;

                this._v_Checked      = undefined;
                this._v_CheckError   = undefined;
                this._v_CheckMatched = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ParsedConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_CheckOutcome){}/* CQT */
            aPrototype._pRelease_CheckOutcome = _pRelease_CheckOutcome;









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

                this.pCleanUpTest_CheckOutcome( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_CheckOutcome= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_CheckWhen     = undefined;
                    this._v_CheckNegate   = undefined;
                    this._v_CheckKind   = undefined;
                    this._v_CheckOrigin = undefined;
                    this._v_CheckSource = undefined;
                    this._v_CheckValue = undefined;

                    this._v_Checked      = undefined;
                    this._v_CheckError   = undefined;
                    this._v_CheckMatched = undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ParsedConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_CheckOutcome){}/* CQT */
            aPrototype.pCleanUpTest_CheckOutcome = pCleanUpTest_CheckOutcome;
















            var pMatchCheckNow = function( theNow, theTest) {
                if( !theNow) {
                    return;
                }

                if( this.CHECKWHENS.indexOf( theNow) < 0) {
                    return;
                }

                var anCheckWhen = this._v_CheckWhen;
                if( !anCheckWhen) {
                    anCheckWhen = this.CHECKWHEN_DEFAULT;
                }

                if( !( theNow == anCheckWhen)) {
                    return;
                }

                if( !this._v_CheckOrigin) {
                    return;
                }

                if( this._v_CheckOrigin == this.CHECKORIGIN_PARMS) {
                    this.pMatchCheckFromParms();
                    return;
                }


                if( this._v_CheckOrigin == this.CHECKORIGIN_DYNPARMS) {
                    this.pMatchCheckFromDynParms();
                    return;
                }



                if(!theTest) {
                    return;
                }

                if( this._v_CheckOrigin == this.CHECKORIGIN_TEST) {
                    this.pMatchCheckFromTest( theTest);
                }

            };
            if( pMatchCheckNow){}/* CQT */
            aPrototype.pMatchCheckNow = pMatchCheckNow;








            var pMatchCheckFromParms = function() {

                if( !( this._v_CheckOrigin == this.CHECKORIGIN_PARMS)) {
                    return;
                }

                if( !this._v_CheckKind) {
                    return;
                }

                if( !this._v_CheckOrigin) {
                    return;
                }

                if( !this._v_CheckSource) {
                    return;
                }

                if( !this._v_OwnerConfiguration) {
                    return;
                }



                this._v_Checked      = true;
                this._v_CheckMatched = false;
                this._v_CheckError   = null;

                var aMapForStepsWithParmPrefix = { };

                var someStepsWithParmPrefix = theM_traversals.fgStepsWithParmPrefix( this._v_CheckSource);
                theM_traversals.fgStepsWithParmPrefix( this._v_CheckValue, someStepsWithParmPrefix);

                if( someStepsWithParmPrefix && someStepsWithParmPrefix.length) {
                    aMapForStepsWithParmPrefix = this._v_OwnerConfiguration.fParmResolutionsResolvedValuesByName( someStepsWithParmPrefix, null);
                }



                var someParmResolutions = this._v_OwnerConfiguration.fParmResolutionsByName( [ this._v_CheckSource], aMapForStepsWithParmPrefix);

                var aParmResolution = someParmResolutions[ this._v_CheckSource];
                if( !aParmResolution) {
                    return;
                }

                if( !aParmResolution || !aParmResolution._v_Success) {
                    return;
                }

                var aParmValue = aParmResolution._v_ParmValue;

                var aValueToCheckAgainst = this.fParmCompareValue( this._v_OwnerConfiguration, this._v_CheckValue, aMapForStepsWithParmPrefix);

                var aFirstValueDiff = theM_traversals.fgFirstDiff( aParmValue, aValueToCheckAgainst);

                if( aFirstValueDiff) {

                    if( !this._v_CheckNegate) {
                        this._v_CheckError = aFirstValueDiff;
                        this._v_CheckMatched = false;
                        return;
                    }
                }
                else {
                    if( this._v_CheckNegate) {
                        this._v_CheckError = "this._v_CheckNegate && !aFirstValueDiff";
                        this._v_CheckMatched = false;
                        return;
                    }
                }

                this._v_CheckMatched = true;
            };
            if( pMatchCheckFromParms){}/* CQT */
            aPrototype.pMatchCheckFromParms = pMatchCheckFromParms;

















            var pMatchCheckFromDynParms = function() {

                if( !( this._v_CheckOrigin == this.CHECKORIGIN_DYNPARMS)) {
                    return;
                }

                if( !this._v_CheckKind) {
                    return;
                }

                if( !this._v_CheckOrigin) {
                    return;
                }

                if( !this._v_CheckSource) {
                    return;
                }

                if( !this._v_OwnerConfiguration) {
                    return;
                }



                this._v_Checked      = true;
                this._v_CheckMatched = false;
                this._v_CheckError   = null;

                var aMapForStepsWithParmPrefix = { };

                var someStepsWithParmPrefix = theM_traversals.fgStepsWithParmPrefix( this._v_CheckSource);
                theM_traversals.fgStepsWithParmPrefix( this._v_CheckValue, someStepsWithParmPrefix);

                if( someStepsWithParmPrefix && someStepsWithParmPrefix.length) {
                    aMapForStepsWithParmPrefix = this._v_OwnerConfiguration.fParmResolutionsResolvedValuesByName( someStepsWithParmPrefix, null);
                }


                var aCheckSourceWithParmReplacementPrefix = theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX +  this._v_CheckSource;
                var aCheckSourceParmReplacementValue = theM_traversals.fgParmValueReplacement( this._v_OwnerConfiguration, aCheckSourceWithParmReplacementPrefix, aMapForStepsWithParmPrefix);


                var aValueToCheckAgainst = this.fParmCompareValue( this._v_OwnerConfiguration, this._v_CheckValue, aMapForStepsWithParmPrefix);



                var aFirstValueDiff = theM_traversals.fgFirstDiff( aCheckSourceParmReplacementValue, aValueToCheckAgainst);
                if( aFirstValueDiff) {

                    if( !this._v_CheckNegate) {
                        this._v_CheckError = aFirstValueDiff;
                        this._v_CheckMatched = false;
                        return;
                    }
                }
                else {
                    if( this._v_CheckNegate) {
                        this._v_CheckError = "this._v_CheckNegate && !aFirstValueDiff";
                        this._v_CheckMatched = false;
                        return;
                    }
                }


                this._v_CheckMatched = true;
            };
            if( pMatchCheckFromDynParms){}/* CQT */
            aPrototype.pMatchCheckFromDynParms = pMatchCheckFromDynParms;












            var fParmCompareValue= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {

                if( !theParmValue) {
                    return theParmValue;
                }

                if( !( typeof theParmValue == "string")) {
                    return theParmValue;
                }

                var aReplacementValue = theM_traversals.fgParmValueReplacement( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
                if( aReplacementValue){}/* CQT */
                return aReplacementValue;
            };
            if( fParmCompareValue){}/* CQT */
            aPrototype.fParmCompareValue = fParmCompareValue;














            var pMatchCheckFromTest = function( theTest) {

                if( !( this._v_CheckOrigin == this.CHECKORIGIN_TEST)) {
                    return;
                }

                if( !theTest) {
                    return;
                }

                if( !this._v_CheckKind) {
                    return;
                }

                if( !this._v_CheckSource) {
                    return;
                }

                this._v_Checked      = true;
                this._v_CheckMatched = false;
                this._v_CheckError   = null;



                var aValueToCheckAgainst = this.fParmCompareValue( theTest._v_Configuration, this._v_CheckValue);

                if( !this.fDoesMatchCheckValueFromTest( theTest, aValueToCheckAgainst, this._v_CheckSource)) {

                    if( !this._v_CheckNegate) {
                        this._v_CheckError = "!this.fDoesMatchCheckValueFromTest( theTest, aValueToCheckAgainst, this._v_CheckSource)";
                        this._v_CheckMatched = false;
                        return;
                    }
                }
                else {
                    if( this._v_CheckNegate) {
                        this._v_CheckError = "this._v_CheckNegate && this.fDoesMatchCheckValueFromTest( theTest, aValueToCheckAgainst, this._v_CheckSource)";
                        this._v_CheckMatched = false;
                        return;
                    }
                }



                this._v_CheckMatched = true;
            };
            if( pMatchCheckFromTest){}/* CQT */
            aPrototype.pMatchCheckFromTest = pMatchCheckFromTest;











            var fTraverseTestToSource = function( theTest, theCheckSource) {

                if( !theTest) {
                    return null;
                }

                if( !theCheckSource) {
                    return theTest;
                }


                var aTraversalResult = theM_traversals.fgTraverseToFromValue( theCheckSource, theTest, theTest._v_Configuration);
                if( !aTraversalResult) {
                    return null;
                }

                var aTraversalValue = aTraversalResult[ "value"];
                if( aTraversalValue){}/* CQT */

                return aTraversalValue;
            };
            if( fTraverseTestToSource){}/* CQT */
            aPrototype.fTraverseTestToSource = fTraverseTestToSource;










            var fDoesMatchCheckValueFromTest = function( theTest, theCheckValue, theCheckSource) {

                if( !theTest) {
                    return false;
                }

                if( !( typeof theTest == "object" )) {
                    return false;
                }

                if( !theCheckSource) {
                    return false;
                }

                if( typeof theCheckValue == "undefined") {
                    return false;
                }


                var aTestValue = this.fTraverseTestToSource( theTest, theCheckSource);

                /* ACV 201511022254 WAS
                return this.fIsSameAsValueFromTest( theCheckValue, aTestValue);
                 */

                var aMatchResult = this.fCheckCheck( aTestValue, theCheckValue);
                return aMatchResult;
            };
            if( fDoesMatchCheckValueFromTest){}/* CQT */
            aPrototype.fDoesMatchCheckValueFromTest = fDoesMatchCheckValueFromTest;















            var fCheckCheck = function( theActualValue, theCheckValue) {

                if( !this._v_CheckKind) {
                    return undefined;
                }


                var aCheckedCheckResult = undefined;
                var someKeys            = undefined;
                var aNumKeys            = undefined;
                var aKeyIdx             = undefined;
                var aValue              = undefined;

                try {

                    switch( this._v_CheckKind) {


                        case this.CHECKKIND_TYPE_BOOL:

                            aCheckedCheckResult = typeof theActualValue == typeof true;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_TYPE_STRING:

                            aCheckedCheckResult = typeof theActualValue == typeof "";
                            return aCheckedCheckResult;



                        case this.CHECKKIND_TYPE_NUMBER:

                            aCheckedCheckResult = typeof theActualValue == typeof (1);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_TYPE_OBJECT:

                            aCheckedCheckResult = typeof theActualValue == typeof {};
                            return aCheckedCheckResult;



                        case this.CHECKKIND_TYPE_LIST:

                            aCheckedCheckResult = ( typeof theActualValue == typeof []) && ( typeof theActualValue.length == typeof (0));
                            return aCheckedCheckResult;



                        case this.CHECKKIND_TYPE_FUNCTION:

                            aCheckedCheckResult = typeof theActualValue == typeof ( this.fCheckCheck);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_NULL:

                            aCheckedCheckResult = theActualValue === null;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_NOTNULL:

                            aCheckedCheckResult = !( theActualValue === null);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_EMPTYSTRING:

                            aCheckedCheckResult = ( typeof theActualValue == typeof "") && ( theActualValue === "");
                            return aCheckedCheckResult;



                        case this.CHECKKIND_NOTEMPTYSTRING:

                            aCheckedCheckResult = ( typeof theActualValue == typeof "") && !( theActualValue === "");
                            return aCheckedCheckResult;



                        case this.CHECKKIND_STRINGLEN:

                            if( !( typeof theActualValue == typeof "")) {
                                return undefined;
                            }

                            if( !( typeof theCheckValue == typeof (0))) {
                                return undefined;
                            }

                            aCheckedCheckResult = theActualValue.length === theCheckValue;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_EMPTYLIST:

                            aCheckedCheckResult = ( typeof theActualValue == typeof []) && ( typeof theActualValue.length == typeof (0)) && ( theActualValue.length === 0);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_NOTEMPTYLIST:

                            aCheckedCheckResult = ( typeof theActualValue == typeof []) && ( typeof theActualValue.length == typeof (0)) && ( theActualValue.length > 0);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_LISTSIZE:

                            if( !( typeof theActualValue == typeof []) || !( typeof theActualValue.length == typeof (0))) {
                                return undefined;
                            }

                            if( !( typeof theCheckValue == typeof (0))) {
                                return undefined;
                            }

                            aCheckedCheckResult = theActualValue.length === theCheckValue;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_EMPTYDICT:

                            if( !theActualValue || !( typeof theActualValue == typeof {})) {
                                return undefined;
                            }

                            someKeys = Object.keys( theActualValue);
                            aCheckedCheckResult = ( typeof someKeys == typeof []) && ( typeof someKeys.length == typeof (0)) && ( someKeys.length === 0);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_NOTEMPTYDICT:

                            if( !theActualValue || !( typeof theActualValue == typeof {})) {
                                return undefined;
                            }

                            someKeys = Object.keys( theActualValue);
                            aCheckedCheckResult = ( typeof someKeys == typeof []) && ( typeof someKeys.length == typeof (0)) && ( someKeys.length > 0);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_DICTSIZE:

                            if( !( typeof theActualValue == typeof {})) {
                                return undefined;
                            }

                            someKeys = Object.keys( theActualValue);
                            if( !( typeof someKeys == typeof []) || !( typeof someKeys.length == typeof (0))) {
                                return undefined;
                            }

                            aCheckedCheckResult = someKeys.length === theCheckValue;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_EQ:
                            aCheckedCheckResult = this.fIsSameAsValueFromTest( theCheckValue, theActualValue);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_NEQ:

                            aCheckedCheckResult = !this.fIsSameAsValueFromTest( theCheckValue, theActualValue);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_GT:

                            aCheckedCheckResult = theActualValue > theCheckValue;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_GTE:

                            aCheckedCheckResult = theActualValue >= theCheckValue;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_LT:

                            aCheckedCheckResult = theActualValue < theCheckValue;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_LTE:

                            aCheckedCheckResult = theActualValue <= theCheckValue;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_INLIST:

                            if( !theCheckValue || !( typeof theCheckValue == typeof []) || !( typeof theCheckValue.length == typeof (0))) {
                                return undefined;
                            }

                            if( !theCheckValue.indexOf || !(( typeof theCheckValue.indexOf) == (typeof this.fCheckCheck))) {
                                return undefined;
                            }

                            aCheckedCheckResult = theCheckValue.indexOf( theActualValue) >= 0;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_NOTINLIST:

                            if( !theCheckValue || !( typeof theCheckValue == typeof []) || !( typeof theCheckValue.length == typeof (0))) {
                                return undefined;
                            }

                            if( !theCheckValue.indexOf || !(( typeof theCheckValue.indexOf) == (typeof this.fCheckCheck))) {
                                return undefined;
                            }

                            aCheckedCheckResult = theCheckValue.indexOf( theActualValue) < 0;
                            return aCheckedCheckResult;




                        case this.CHECKKIND_LISTCONTAINS:

                            if( !theActualValue || !( typeof theActualValue == typeof []) || !( typeof theActualValue.length == typeof (0))) {
                                return undefined;
                            }

                            if( !theActualValue.indexOf || !(( typeof theActualValue.indexOf) == (typeof this.fCheckCheck))) {
                                return undefined;
                            }

                            aCheckedCheckResult = theActualValue.indexOf( theCheckValue) >= 0;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_LISTNOTCONTAINS:

                            if( !theActualValue || !( typeof theActualValue == typeof []) || !( typeof theActualValue.length == typeof (0))) {
                                return undefined;
                            }

                            if( !theActualValue.indexOf || !(( typeof theActualValue.indexOf) == (typeof this.fCheckCheck))) {
                                return undefined;
                            }

                            aCheckedCheckResult = theActualValue.indexOf( theCheckValue) < 0;
                            return aCheckedCheckResult;



                        case this.CHECKKIND_DICTCONTAINSKEY:

                            if( !theCheckValue || !( typeof theCheckValue == typeof {})) {
                                return undefined;
                            }

                            aCheckedCheckResult = theCheckValue.hasOwnProperty( theActualValue);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_DICTNOTCONTAINSKEY:

                            if( typeof theActualValue == typeof undefined) {
                                return true;
                            }

                            if( !theCheckValue || !( typeof theCheckValue == typeof {})) {
                                return undefined;
                            }

                            aCheckedCheckResult = !theCheckValue.hasOwnProperty( theActualValue);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_INKEYS:

                            if( !theActualValue || !( typeof theActualValue == typeof {})) {
                                return undefined;
                            }

                            aCheckedCheckResult = theActualValue.hasOwnProperty( theCheckValue);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_NOTINKEYS:

                            if( !theActualValue || !( typeof theActualValue == typeof {})) {
                                return undefined;
                            }

                            aCheckedCheckResult = !theActualValue.hasOwnProperty( theCheckValue);
                            return aCheckedCheckResult;



                        case this.CHECKKIND_DICTCONTAINSVALUE:

                            if( !theActualValue || !( typeof theActualValue == typeof {})) {
                                return undefined;
                            }

                            someKeys = Object.keys( theActualValue);
                            aNumKeys = someKeys.length;

                            for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                                var aKey = someKeys[ aKeyIdx];
                                if( theActualValue.hasOwnProperty( aKey)) {
                                    aValue = theActualValue[ aKey];

                                    if( this.fIsSameAsValueFromTest( theCheckValue, aValue)) {
                                        return true;
                                    }
                                }
                            }

                            return false;



                        case this.CHECKKIND_DICTNOTCONTAINSVALUE:

                            if( !theActualValue || !( typeof theActualValue == typeof {})) {
                                return undefined;
                            }

                            someKeys = Object.keys( theActualValue);
                            aNumKeys = someKeys.length;

                            for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                                var aKey = someKeys[ aKeyIdx];
                                if( theActualValue.hasOwnProperty( aKey)) {
                                    aValue = theActualValue[ aKey];

                                    if( this.fIsSameAsValueFromTest( theCheckValue, aValue)) {
                                        return false;
                                    }
                                }
                            }

                            return true;




                        case this.CHECKKIND_INVALUES:

                            if( !theCheckValue || !( typeof theCheckValue == typeof {})) {
                                return undefined;
                            }

                            someKeys = Object.keys( theCheckValue);
                            aNumKeys = someKeys.length;

                            for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                                var aKey = someKeys[ aKeyIdx];
                                if( theCheckValue.hasOwnProperty( aKey)) {
                                    aValue = theCheckValue[ aKey];

                                    if( this.fIsSameAsValueFromTest( aValue, theActualValue)) {
                                        return true;
                                    }
                                }
                            }

                            return false;




                        case this.CHECKKIND_NOTINVALUES:

                            if( !theCheckValue || !( typeof theCheckValue == typeof {})) {
                                return undefined;
                            }

                            someKeys = Object.keys( theCheckValue);
                            aNumKeys = someKeys.length;

                            for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                                var aKey = someKeys[ aKeyIdx];
                                if( theCheckValue.hasOwnProperty( aKey)) {
                                    aValue = theCheckValue[ aKey];

                                    if( this.fIsSameAsValueFromTest( aValue, theActualValue)) {
                                        return false;
                                    }
                                }
                            }

                            return true;




                        default:
                    }
                }
                catch( anException) {}


                return undefined;
            };
            if( fCheckCheck){}/* CQT */
            aPrototype.fCheckCheck = fCheckCheck;





            var fIsSameAsValueFromTest = function( theCheckValue, theActualValue) {


                if( ( typeof theActualValue == "undefined") && ( typeof theCheckValue == "undefined") ) {
                    return false;
                }

                if( ( typeof theActualValue == "undefined") || ( typeof theCheckValue == "undefined") ) {
                    return false;
                }


                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return true;
                }

                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return false;
                }


                if( !( ( typeof theActualValue) == ( typeof theCheckValue))) {
                    return false;
                }





                if( typeof theActualValue == "string" ) {
                    return  theActualValue == theCheckValue;
                }


                if( typeof theActualValue == "number" ) {
                    return  theActualValue == theCheckValue;
                }


                if( typeof theActualValue == "boolean" ) {
                    return  theActualValue == theCheckValue;
                }



                if( !( typeof theActualValue == "object" )) {
                    return false;
                }





                var someCheckValueKeys   = Object.keys( theCheckValue);
                var aNumCheckValueKeys = someCheckValueKeys.length;

                var someActualValueKeys = Object.keys( theActualValue);
                var aNumActualValueKeys = someActualValueKeys.length;

                if( !( aNumActualValueKeys == aNumCheckValueKeys)) {
                    return false;
                }

                for( var aKeyIdx=0; aKeyIdx < aNumCheckValueKeys; aKeyIdx++) {
                    var aKey = someCheckValueKeys[ aKeyIdx];

                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return false;
                    }

                    var aCheckValueSub = theCheckValue[ aKey];
                    var anActualSub   = theActualValue[ aKey];


                    if( !this.fIsSameAsValueFromTest( aCheckValueSub, anActualSub)) {
                        return false;
                    }
                }





                var anActualLen    = theActualValue.length;
                var aCheckValueLen = theCheckValue.length;

                if( ( typeof anActualLen == "undefined") && ( typeof aCheckValueLen == "undefined")) {
                    return true;
                }

                if( ( typeof anActualLen == "undefined") || ( typeof aCheckValueLen == "undefined")) {
                    return false;
                }

                if( !( anActualLen == aCheckValueLen)) {
                    return false;
                }

                for( var aSubIdx=0; aSubIdx < anActualLen; aSubIdx++) {
                    var anActualListSub    = theActualValue[ aSubIdx];
                    var aCheckValueListSub = theCheckValue[ aSubIdx];

                    if( !this.fIsSameAsValueFromTest( aCheckValueListSub, anActualListSub)) {
                        return false;
                    }

                }

                return true;
            };
            if( fIsSameAsValueFromTest){}/* CQT */
            aPrototype.fIsSameAsValueFromTest = fIsSameAsValueFromTest;







            var fHasFailedToMatchCheckNow = function( theNow) {
                if( !theNow) {
                    return false;
                }

                if( this.CHECKWHENS.indexOf( theNow) < 0) {
                    return false;
                }


                var anCheckWhen = this._v_CheckWhen;
                if( !anCheckWhen) {
                    anCheckWhen = this.CHECKWHEN_DEFAULT;
                }

                if( !( theNow == anCheckWhen)) {
                    return false;
                }

                /* ACV OJO 201504022354 ADDED */
                if( !this._v_Checked) {
                    return false;
                }

                var aHasFailed = !this._v_CheckMatched;
                if( aHasFailed){}/* CQT */

                return aHasFailed;
            };
            if( fHasFailedToMatchCheckNow){}/* CQT */
            aPrototype.fHasFailedToMatchCheckNow = fHasFailedToMatchCheckNow;












            var fToStoreJSON = function( theCommonObjects, theAlready) {

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fToStoreJSON_identifying();
                    }
                }

                var aParser = this._v_Parser;
                if( !aParser) {
                    aParser = new theM_specparser_check.SpecParserCheck_Constructor( this._v_Identifier, null, null, true);
                }

                var aToStoreJSON = aParser.fToStoreJSON( this, theCommonObjects, theAlready);
                if( aToStoreJSON){}/* CQT */
                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;










            return aPrototype;

        })();




        var CheckOutcome_Constructor = function( theTitle, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_CheckWhen     = null;
            this._v_CheckNegate   = null;
            this._v_CheckKind   = null;
            this._v_CheckOrigin = null;
            this._v_CheckSource = null;
            this._v_CheckValue = null;

            this._v_Checked      = null;
            this._v_CheckError   = null;
            this._v_CheckMatched = null;

            this._pInit_CheckOutcome( theTitle, theIdentifier);
        };
        CheckOutcome_Constructor.prototype = aCheckOutcome_Prototype;





        var CheckOutcome_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = aCheckOutcome_Prototype;
            this._v_Type = null;

            this._v_CheckWhen     = null;
            this._v_CheckNegate   = null;
            this._v_CheckKind   = null;
            this._v_CheckOrigin = null;
            this._v_CheckSource = null;
            this._v_CheckValue = null;

            this._v_Checked      = null;
            this._v_CheckError   = null;
            this._v_CheckMatched = null;
        };
        CheckOutcome_SuperPrototypeConstructor.prototype = aCheckOutcome_Prototype;



        var aModule = {
            "CheckOutcome_Prototype": aCheckOutcome_Prototype,
            "CheckOutcome_Constructor": CheckOutcome_Constructor,
            "CheckOutcome_SuperPrototypeConstructor": CheckOutcome_SuperPrototypeConstructor
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

            var aM_parsedconfig       = require('./parsedconfig');
            var aM_specparser_check   = require('./specparser/specparser-check');
            var aM_sentinels          = require('../sentinels');
            var aM_traversals         = require('../traversals/traversals');

            return aMod_definer(
                aM_parsedconfig,
                aM_specparser_check,
                aM_sentinels,
                aM_traversals
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./parsedconfig",
            "./specparser/specparser-check",
            "../sentinels",
            "../traversals/traversals"
        ], function (
            theM_parsedconfig,
            theM_specparser_check,
            theM_sentinels,
            theM_traversals
        ) {
            return aMod_definer(
                theM_parsedconfig,
                theM_specparser_check,
                theM_sentinels,
                theM_traversals
            );
        });
    }


}());