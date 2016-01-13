'use strict';

/*
 specparser.js
 Creado 201408130113
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

    var aMod_definer =function( theM_exceptiondetails,
                                theM_withid_test,
                                theM_identifier,
                                theM_overrider) {


        var ModuleName     = "specparser";
        var ModulePackages = "common-test/configs/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}





        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGREPORTS = true;


            theToInit.ABANDONATFIRSTSYNTAXERROR = true;

            theToInit.VALUESCASEINSENSITIVE = true;
            theToInit.STRICTBOOLEANVALUES   = true;
            theToInit.STRICTENUMVALUES      = true;
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



            theToInit.ERRORCONDITION_NOTREAD                 = "NOTREAD";
            theToInit.ERRORCONDITION_REQUIRED                = "REQUIRED";
            theToInit.ERRORCONDITION_NOTOBJECT               = "NOTOBJECT";
            theToInit.ERRORCONDITION_EMPTYOBJECT             = "EMPTYOBJECT";
            theToInit.ERRORCONDITION_LISTINSTEADOFOBJECT     = "LISTINSTEADOFOBJECT";
            theToInit.ERRORCONDITION_UNSUPPORTEDBOOLEANVALUE = "UNSUPPORTEDBOOLEANVALUE";
            theToInit.ERRORCONDITION_UNSUPPORTEDENUMVALUE    = "UNSUPPORTEDENUMVALUE";
            theToInit.ERRORCONDITION_EXTRAFIELDS             = "EXTRAFIELDS";
            theToInit.ERRORCONDITION_NOTSTRING               = "NOTSTRING";
            theToInit.ERRORCONDITION_INCOMPATIBLE            = "INCOMPATIBLE";




            theToInit.PARSESTATUS_PENDING           = "PENDING";
            theToInit.PARSESTATUS_PARSING           = "PARSING";
            theToInit.PARSESTATUS_PARSINGIMPORTS    = "PARSINGIMPORTS";
            theToInit.PARSESTATUS_TERMINATEDIMPORTS = "TERMINATEDIMPORTS";
            theToInit.PARSESTATUS_PARSINGREQUIREDS  = "PARSINGREQUIREDS";
            theToInit.PARSESTATUS_TERMINATEDREQUIREDS = "TERMINATEDREQUIREDS";
            theToInit.PARSESTATUS_PARSINGEXPORTS    = "PARSINGEXPORTS";
            theToInit.PARSESTATUS_TERMINATEDEXPORTS = "TERMINATEDEXPORTS";
            theToInit.PARSESTATUS_PARSINGSUBS       = "PARSINGSUBS";
            theToInit.PARSESTATUS_TERMINATEDSUBS    = "TERMINATEDSUBS";
            theToInit.PARSESTATUS_PARSINGCHECKS     = "PARSINGCHECKS";
            theToInit.PARSESTATUS_TERMINATEDCHECKS  = "TERMINATEDCHECKS";
            theToInit.PARSESTATUS_TERMINATED        = "TERMINATED";

            theToInit.PARSESTATUSALL = [
                theToInit.PARSESTATUS_PENDING,
                theToInit.PARSESTATUS_PARSING,
                theToInit.PARSESTATUS_PARSINGIMPORTS,
                theToInit.PARSESTATUS_TERMINATEDIMPORTS,
                theToInit.PARSESTATUS_PARSINGREQUIREDS,
                theToInit.PARSESTATUS_TERMINATEDREQUIREDS,
                theToInit.PARSESTATUS_PARSINGEXPORTS,
                theToInit.PARSESTATUS_TERMINATEDEXPORTS,
                theToInit.PARSESTATUS_PARSINGSUBS,
                theToInit.PARSESTATUS_TERMINATEDSUBS,
                theToInit.PARSESTATUS_PARSINGCHECKS,
                theToInit.PARSESTATUS_TERMINATEDCHECKS,
                theToInit.PARSESTATUS_TERMINATED
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
    
    

    

    
    
    
    
    
        var aSpecParser_Prototype = (function() {
    
    
            var aPrototype = new theM_withid_test.WithIdTest_SuperPrototypeConstructor();
    
            pgInitFromModuleConstants( aPrototype);


    
    
            aPrototype._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;
    
    
            aPrototype._v_Type = "SpecParser";
    
            aPrototype._v_Identifier = null;
            aPrototype._v_IdentifierIsOwn = null;

            aPrototype._v_SkipPopulation = null;
            aPrototype._v_AbandonAtFirstSyntaxError = null;

            aPrototype._v_ValuesCaseInsensitive = null;
            aPrototype._v_StrictBooleanValues   = null;
            aPrototype._v_StrictEnumValues      = null;

            aPrototype._v_ConfigSpec     = null;
            aPrototype._v_ParentParser   = null;
            aPrototype._v_SubParsers     = null;


            aPrototype._v_ConfPopulated = null;
    
            aPrototype._v_ParseSuccess  = null;
            aPrototype._v_ParseStatus   = null;
            aPrototype._v_ParseReport   = null;
            aPrototype._v_SyntaxError   = null;


            aPrototype._v_FailedConfigPaths   = null;



            var _pInit = function( theIdentifier, theConfigSpec, theParentParser,
                                   theSkipPopulation, theAbandonAtFirstSyntaxError) {
    
                this._pInit_SpecParser( theIdentifier, theConfigSpec, theParentParser,
                    theSkipPopulation, theAbandonAtFirstSyntaxError);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;
    
    
    
    
    
    
    
            var _pInit_SpecParser = function( theIdentifier, theConfigSpec, theParentParser,
                                              theSkipPopulation, theAbandonAtFirstSyntaxError) {
    
                var aTitle = "SpecParser-For-";
                if( theConfigSpec && theConfigSpec.name) {
                    aTitle += theConfigSpec.name;
                }
                else {
                    aTitle += "?";
                }
                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_WithId.apply( this, [ aTitle]);
    
                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;
    
                this._v_Identifier = theIdentifier;
                this._v_IdentifierIsOwn = false;
                if( !this._v_Identifier) {
                    this._v_IdentifierIsOwn = true;
                    this._v_Identifier = new theM_identifier.IdentifierTest_Constructor( {});
                }
    
                this._v_Id = this.fReserveId();


                this._v_SkipPopulation = false;
                if( theSkipPopulation) {
                    this._v_SkipPopulation = theSkipPopulation;
                }

                this._v_AbandonAtFirstSyntaxError = false;
                if( theAbandonAtFirstSyntaxError) {
                    this._v_AbandonAtFirstSyntaxError = theAbandonAtFirstSyntaxError;
                }

                this._v_ValuesCaseInsensitive = this.VALUESCASEINSENSITIVE;
                this._v_StrictBooleanValues   = this.STRICTBOOLEANVALUES;
                this._v_StrictEnumValues      = this.STRICTENUMVALUES;

                this._v_ConfigSpec   = theConfigSpec;
                this._v_ParentParser = null;

                if( theParentParser) {
                    this._v_ParentParser = theParentParser;
                    this._v_ParentParser.pAddSubParser( this);
                }
    

                this._v_ConfPopulated = null;
    
                this._v_ParseSuccess = false;
                this._v_ParseStatus  = this.PARSESTATUS_PENDING;

                this._v_ParseReport  = null;
                this._v_SyntaxError  = null;

                this._v_SubParsers = [ ];

                this._v_FailedConfigPaths = [ ];

                if( this._v_SyntaxError){}/* CQT */
            };
            if( _pInit_SpecParser){}/* CQT */
            aPrototype._pInit_SpecParser = _pInit_SpecParser;













            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecParser( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecParser = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */


                if( this._v_Identifier) {
                    if( this._v_IdentifierIsOwn) {
                        if( typeof this._v_Identifier._pRelease == "function") {
                            this._v_Identifier._pRelease( theReleaseParms, theReleaseDone);
                        }
                    }
                }
                this._v_Identifier = undefined;
                this._v_IdentifierIsOwn = undefined;


                this._v_SkipPopulation = undefined;
                this._v_AbandonAtFirstSyntaxError = undefined;

                this._v_ValuesCaseInsensitive = undefined;
                this._v_StrictBooleanValues   = undefined;
                this._v_StrictEnumValues      = undefined;

                this._v_ConfigSpec     = undefined;

                this._v_ParentParser   = undefined;

                if( this._v_SubParsers) {
                    var aNumSubParsers = this._v_SubParsers.length;
                    if( aNumSubParsers) {
                        for( var aSubParserIdx=0; aSubParserIdx < aNumSubParsers; aSubParserIdx++) {
                            var aSubParser = this._v_SubParsers[ aSubParserIdx];
                            if( aSubParser) {
                                if( typeof aSubParser._pRelease == "function") {
                                    aSubParser._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_SubParsers     = undefined;

                if( this._v_ConfPopulated) {
                    if( typeof this._v_ConfPopulated._pRelease == "function") {
                        this._v_ConfPopulated._pRelease( theReleaseParms, theReleaseDone);
                    }
                }
                this._v_ConfPopulated = undefined;

                this._v_ParseSuccess  = undefined;
                this._v_ParseStatus   = undefined;
                this._v_ParseReport   = undefined;
                this._v_SyntaxError   = undefined;

                this._v_FailedConfigPaths   = null;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_WithId.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecParser){}/* CQT */
            aPrototype._pRelease_SpecParser = _pRelease_SpecParser;









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

                this.pCleanUpTest_SpecParser( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_SpecParser= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {

                    if( this._v_ConfPopulated) {
                        if( typeof this._v_ConfPopulated.pCleanUpTest == "function") {
                            this._v_ConfPopulated.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                        }
                    }

                    if( this._v_SubParsers) {
                        var aNumSubParsers = this._v_SubParsers.length;
                        if( aNumSubParsers) {
                            for( var aSubParserIdx=0; aSubParserIdx < aNumSubParsers; aSubParserIdx++) {
                                var aSubParser = this._v_SubParsers[ aSubParserIdx];
                                if( aSubParser) {
                                    if( typeof aSubParser.pCleanUpTest == "function") {
                                        aSubParser.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_WithId.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_SpecParser){}/* CQT */
            aPrototype.pCleanUpTest_SpecParser = pCleanUpTest_SpecParser;


















            var fReserveId = function() {

                if( !this._v_Identifier) {
                    return null;
                }

                return  this._v_Identifier.fReserveId();
            };
            if( fReserveId){}/* CQT */
            aPrototype.fReserveId = fReserveId;





            var fSyntax = function() {

            };
            if( fSyntax){}/* CQT */
            aPrototype.fSyntax = fSyntax;







            var pAddSubParser = function( theSubParser) {
                if( !theSubParser) {
                    return;
                }

                this._v_SubParsers.push( theSubParser);
            };
            if( pAddSubParser){}/* CQT */
            aPrototype.pAddSubParser = pAddSubParser;





            var pAddFailedConfigPath = function( theFailedConfigPath) {
                if( !theFailedConfigPath) {
                    return;
                }

                this._v_FailedConfigPaths.push( theFailedConfigPath);
            };
            if( pAddFailedConfigPath){}/* CQT */
            aPrototype.pAddFailedConfigPath = pAddFailedConfigPath;








            var fAllFailedConfigPaths = function() {

                var someFailedTestPaths = [ ];
                this.pAllFailedConfigPaths_into( someFailedTestPaths);

                return someFailedTestPaths;
            };
            if( fAllFailedConfigPaths){}/* CQT */
            aPrototype.fAllFailedConfigPaths = fAllFailedConfigPaths;







            var pAllFailedConfigPaths_into = function( theFailedTestPaths) {
                if( theFailedTestPaths == null) {
                    return;
                }

                if( this._v_FailedConfigPaths && this._v_FailedConfigPaths.length) {
                    Array.prototype.push.apply( theFailedTestPaths, this._v_FailedConfigPaths);
                }

                var aNumSubParsers = this._v_SubParsers.length;
                for( var aSubParserIdx=0; aSubParserIdx < aNumSubParsers; aSubParserIdx++) {
                    var aSubParser = this._v_SubParsers[ aSubParserIdx];
                    aSubParser.pAllFailedConfigPaths_into( theFailedTestPaths);
                }
            };
            if( pAllFailedConfigPaths_into){}/* CQT */
            aPrototype.pAllFailedConfigPaths_into = pAllFailedConfigPaths_into;












            var fParseComplete = function() {

                this._v_ParseSuccess = false;
                this._v_ParseReport  = [ ];
                this._v_SyntaxError  = null;
                this._v_ParseReport.push( { "parseStatus": this._v_ParseStatus});
                this._v_ImportParsers = [ ];
                this._v_ParmsParsers = [ ];
                this._v_SubParsers = [ ];

                this._v_ParseStatus  = this.PARSESTATUS_PARSING;

                this.pReport_ParseStatus( this._v_ParseStatus);

                try {
                    if( !this.fParse_outer()) {
                        return false;
                    }

                    if( !this._v_ConfPopulated) {
                        return false;
                    }


                    var aResolveImportsResult = this._v_ConfPopulated.fResolveImports( "PARSE");
                    if( !aResolveImportsResult) {
                        return false;
                    }

                    this._v_ConfPopulated.pResolveExportsNow( "PARSE");
                    if( this._v_ConfPopulated.fHasAnyExportFailedToResolveNow( "PARSE")) {
                        return false;
                    }

                    this._v_ConfPopulated.pMatchChecksNow( "PARSE");
                    if( this._v_ConfPopulated.fFirstCheckFailedToMatchNow( "PARSE")) {
                        return false;
                    }

                    this._v_ParseSuccess = true;

                    this.pReport_Success();

                    return true;
                }
                finally {
                    this._v_ParseStatus  = this.PARSESTATUS_TERMINATED;
                    this.pReport_ParseStatus( this._v_ParseStatus);
                }
            };
            if( fParseComplete){}/* CQT */
            aPrototype.fParseComplete = fParseComplete;











            var fParse = function() {
    
                this._v_ParseSuccess = false;
                this._v_ParseReport  = [ ];
                this._v_SyntaxError  = null;
                this._v_ParseReport.push( { "parseStatus": this._v_ParseStatus});
                this._v_ImportParsers = [ ];
                this._v_ParmsParsers = [ ];
                this._v_SubParsers = [ ];
    
                this._v_ParseStatus  = this.PARSESTATUS_PARSING;
    
                this.pReport_ParseStatus( this._v_ParseStatus);
    
                try {
                    if( !this.fParse_outer()) {
                        return false;
                    }

                    this._v_ParseSuccess = true;
    
                    this.pReport_Success();

                    return true;
                }
                finally {
                    this._v_ParseStatus  = this.PARSESTATUS_TERMINATED;
                    this.pReport_ParseStatus( this._v_ParseStatus);
                }
            };
            if( fParse){}/* CQT */
            aPrototype.fParse = fParse;






            var fParse_outer = function() {

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }

                var aConfigSpecLen = this._v_ConfigSpec.length;
                if( !( typeof aConfigSpecLen == "undefined")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_LISTINSTEADOFOBJECT);
                    return false;
                }

                var someConfigSpecKeys = Object.keys( this._v_ConfigSpec);
                if( !someConfigSpecKeys || !someConfigSpecKeys.length) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_EMPTYOBJECT);
                    return false;
                }

                if( !this.fParse_inner()) {
                    return false;
                }

                var someJSONnamesNotParsed = this.fJSONnamesNotParsed();
                if( someJSONnamesNotParsed && someJSONnamesNotParsed.length) {
                    this.pSyntax_Error( someJSONnamesNotParsed, this.ERRORCONDITION_EXTRAFIELDS, someJSONnamesNotParsed);
                    return false;
                }

                var someRequiredJSONnamesMissing = this.fRequiredJSONnamesMissing();
                if( someRequiredJSONnamesMissing && someRequiredJSONnamesMissing.length) {
                    this.pSyntax_Error( someJSONnamesNotParsed, this.ERRORCONDITION_REQUIRED, someRequiredJSONnamesMissing);
                    return false;
                }

                return true;
            };
            if( fParse_outer){}/* CQT */
            aPrototype.fParse_outer = fParse_outer;









            var fParse_inner = function() {

                var aParseBase = this.fParse_Base();
                if( !aParseBase) {
                    return false;
                }

                var aParseOwn = this.fParse_own();
                if( aParseOwn){}/* CQT */

                return aParseOwn;
            };
            if( fParse_inner){}/* CQT */
            aPrototype.fParse_inner = fParse_inner;
    
    
    
    
    
    
    
    
    
    
            var fParse_Base = function() {
    
                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec ");
                    return false;
                }

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }

                if( this._v_ConfPopulated) {
                    this.pReport_Warn( "this._v_ConfPopulated ALREADY EXISTS (is repeating the parse?)");
                    return false;
                }

                this.pInstantiateConfPopulated();

                return true;
            };
            if( fParse_Base){}/* CQT */
            aPrototype.fParse_Base = fParse_Base;
    
    
    
    
    
    
            var fParse_own = function() {
    
                return true;
            };
            if( fParse_own){}/* CQT */
            aPrototype.fParse_own = fParse_own;










            var fParse_withHandlers = function( theParseHandlers) {

                if( !theParseHandlers) {
                    this.pReport_Error( "!theParseHandlers");
                    return false;
                }


                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec");
                    return false;
                }

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var someConfigSpecKeys = Object.keys( this._v_ConfigSpec);
                if( !someConfigSpecKeys) {
                    return true;
                }


                var aSucceeded = true;

                var aNumConfigSpecKeys = someConfigSpecKeys.length;
                for( var aConfigSpecKeyIdx=0; aConfigSpecKeyIdx < aNumConfigSpecKeys; aConfigSpecKeyIdx++) {

                    var aConfigSpecKey = someConfigSpecKeys[ aConfigSpecKeyIdx];

                    var aParseFieldHandler = theParseHandlers[ aConfigSpecKey];

                    if( aParseFieldHandler) {

                        var aParseResult = aParseFieldHandler( this);

                        if( !aParseResult) {
                            aSucceeded = false;
                            if( this._v_AbandonAtFirstSyntaxError) {
                                return false;
                            }
                        }
                    }
                }

                return aSucceeded;
            };
            if( fParse_withHandlers){}/* CQT */
            aPrototype.fParse_withHandlers = fParse_withHandlers;










            var fJSONnamesNotParsed = function() {

                if( !this._v_ConfigSpec) {
                    return null;
                }

                if( !this._v_ConfPopulated) {
                    return null;
                }

                if( !( typeof this._v_ConfigSpec == "object")) {
                    return null;
                }


                var someJSONnamesParsed = this._v_ConfPopulated._v_JSONnamesParsed;

                var someSpecKeys = Object.keys( this._v_ConfigSpec);
                if( !someSpecKeys || !someSpecKeys.length) {
                    return [];
                }

                var someFieldsNotParsed = [ ];

                var aNumSpecKeys = someSpecKeys.length;
                for( var aSpecKeyIdx=0; aSpecKeyIdx < aNumSpecKeys; aSpecKeyIdx++) {
                    var aSpecKey = someSpecKeys[ aSpecKeyIdx];
                    if( someJSONnamesParsed.indexOf( aSpecKey) < 0) {
                        someFieldsNotParsed.push( aSpecKey);
                    }
                }

                return someFieldsNotParsed;
            };
            if( fJSONnamesNotParsed){}/* CQT */
            aPrototype.fJSONnamesNotParsed = fJSONnamesNotParsed;







            var fRequiredJSONnamesMissing = function() {

                if( !this._v_ConfigSpec) {
                    return null;
                }

                if( !this._v_ConfPopulated) {
                    return null;
                }

                if( !( typeof this._v_ConfigSpec == "object")) {
                    return null;
                }


                var someJSONnamesParsed = this._v_ConfPopulated._v_JSONnamesParsed;

                var someJSONnames = this._v_ConfPopulated.REQUIREDJSONNAMES;

                var someFieldsMissing = [ ];

                var aNumSpecKeys = someJSONnames.length;
                for( var aSpecKeyIdx=0; aSpecKeyIdx < aNumSpecKeys; aSpecKeyIdx++) {
                    var aSpecKey = someJSONnames[ aSpecKeyIdx];
                    if( someJSONnamesParsed.indexOf( aSpecKey) < 0) {
                        someFieldsMissing.push( aSpecKey);
                    }
                }

                return someFieldsMissing;
            };
            if( fRequiredJSONnamesMissing){}/* CQT */
            aPrototype.fRequiredJSONnamesMissing = fRequiredJSONnamesMissing;



            var fParseBoolean = function( theBooleanSource) {
                if( theBooleanSource == null) {
                    return null;
                }

                if( typeof theBooleanSource == "undefined") {
                    return null;
                }

                if( !( typeof theBooleanSource == "boolean")) {
                    return null;
                }

                var aBoolean = null;

                if( this._v_StrictBooleanValues) {
                    if( theBooleanSource == true) {
                        aBoolean = true;
                    }
                    else {
                        if( theBooleanSource == false) {
                            aBoolean = false;
                        }
                    }
                }
                else {
                    aBoolean = theBooleanSource ? true : false;
                }

                return aBoolean;
            };
            if( fParseBoolean){}/* CQT */
            aPrototype.fParseBoolean = fParseBoolean;






            var fParseString = function( theStringSource) {
                if( theStringSource == null) {
                    return null;
                }

                if( typeof theStringSource == "undefined") {
                    return null;
                }

                if( !( typeof theStringSource == "string")) {
                    return null;
                }

                return theStringSource;
            };
            if( fParseString){}/* CQT */
            aPrototype.fParseString = fParseString;








            var fParseListOfStrings = function( theListOfStringsSource) {
                if( theListOfStringsSource == null) {
                    return null;
                }

                if( typeof theListOfStringsSource == "undefined") {
                    return null;
                }

                if( !( typeof theListOfStringsSource == "object")) {
                    return null;
                }

                var aListOfStringsSourceLen = theListOfStringsSource.length;
                if( !( typeof aListOfStringsSourceLen == "number")) {
                    return null;
                }

                for( var aStringIdx=0; aStringIdx < aListOfStringsSourceLen; aStringIdx++) {
                    var aString = theListOfStringsSource[ aStringIdx];
                    if( !this.fParseString( aString)) {
                        return null;
                    }
                }
                return theListOfStringsSource;
            };
            if( fParseListOfStrings){}/* CQT */
            aPrototype.fParseListOfStrings = fParseListOfStrings;






            var fParseComputation = function( theStringSource) {
                if( theStringSource == null) {
                    return null;
                }

                var aParsedComputation = this.fParseString( theStringSource);
                return aParsedComputation;
            };
            if( fParseComputation){}/* CQT */
            aPrototype.fParseComputation = fParseComputation;








            var fParseCompuExtraParms = function( theStringOrListOfStringsSource) {
                if( theStringOrListOfStringsSource == null) {
                    return null;
                }


                var aParsedCompuExtraParmsList = this.fParseListOfStrings( theStringOrListOfStringsSource);
                if( aParsedCompuExtraParmsList) {
                    return aParsedCompuExtraParmsList;
                }

                var aParsedCompuExtraParm = this.fParseString( theStringOrListOfStringsSource);
                return [ aParsedCompuExtraParm];

            };
            if( fParseCompuExtraParms){}/* CQT */
            aPrototype.fParseCompuExtraParms = fParseCompuExtraParms;







            var fParseStringsList = function( theStringsSource) {
                if( theStringsSource == null) {
                    return null;
                }

                if( typeof theStringsSource == "undefined") {
                    return null;
                }

                if( !( typeof theStringsSource == "object")) {
                    return null;
                }


                if( typeof theStringsSource.length == "undefined") {
                    return null;
                }

                var someStrings = [ ];

                var aNumStrings = theStringsSource.length;
                for( var aStringIdx=0; aStringIdx < aNumStrings; aStringIdx++) {

                    var aString = theStringsSource[ aStringIdx];
                    if( !aString || !( typeof aString == "string")) {
                        return null;
                    }

                    someStrings.push( aString);
                }
                if( !someStrings.length) {
                    return null;
                }

                return someStrings;
            };
            if( fParseStringsList){}/* CQT */
            aPrototype.fParseStringsList = fParseStringsList;









            var fParseEnum = function( theEnumSource, theEnumeration) {
                if( theEnumSource == null) {
                    return null;
                }
                if( !theEnumeration) {
                    return null;
                }

                if( typeof theEnumSource == "undefined") {
                    return null;
                }

                if( !( typeof theEnumSource == "string")) {
                    return null;
                }

                var anEnum = null;

                var anEnumSource = theEnumSource;

                if( this._v_ValuesCaseInsensitive) {
                    anEnumSource = anEnumSource.toUpperCase();
                }
                
                var anEnumIndex = theEnumeration.indexOf( anEnumSource);
                if( this._v_StrictEnumValues) {
                    if( anEnumIndex >= 0) {
                        anEnum = anEnumSource;
                    }
                }
                else {
                    anEnum = anEnumSource;
                }

                return anEnum;
            };
            if( fParseEnum){}/* CQT */
            aPrototype.fParseEnum = fParseEnum;






            var pInstantiateConfPopulated = function() {
            };
            if( pInstantiateConfPopulated){}/* CQT */
            aPrototype.pInstantiateConfPopulated = pInstantiateConfPopulated;
    
    
    
    

    
    
    
            var fIsAcceptableSubParsingKindHereAndToParentParsers = function( theParsingKind) {

                return theParsingKind ? true : false;
            };
            if( fIsAcceptableSubParsingKindHereAndToParentParsers){}/* CQT */
            aPrototype.fIsAcceptableSubParsingKindHereAndToParentParsers = fIsAcceptableSubParsingKindHereAndToParentParsers;
    
    
    
    
    
    
    
            var pAddConfPopulatedToParentParserConfPopulated = function() {
            };
            if( pAddConfPopulatedToParentParserConfPopulated){}/* CQT */
            aPrototype.pAddConfPopulatedToParentParserConfPopulated = pAddConfPopulatedToParentParserConfPopulated;






            var fParsePath = function() {
                var aParsePath = [ ];

                this.pParsePath_into( aParsePath);

                aParsePath.reverse();

                return aParsePath;
            };
            if( fParsePath){}/* CQT */
            aPrototype.fParsePath = fParsePath;






            var pParsePath_into = function( thePath) {
                if ( !thePath) {
                    return;
                }

                if( !this._v_ConfigSpec || !this._v_ConfigSpec.name) {
                    thePath.push( "");
                }
                else {
                    thePath.push( this._v_ConfigSpec[ "name"]);
                }

                if( this._v_ParentParser) {
                    this._v_ParentParser.pParsePath_into( thePath);
                }

            };
            if( pParsePath_into){}/* CQT */
            aPrototype.pParsePath_into = pParsePath_into;







            var pSyntax_Error = function( theJSONname, theCondition, theExpected) {

                if( !theJSONname && !theCondition  && !theExpected) {
                    return;
                }

                var aSyntaxReport = {
                    "success": false,
                    "syntaxError": true
                };

                var aParsePath = this.fParsePath();
                if( aParsePath) {
                    aSyntaxReport[ "path"] = aParsePath;

                    this.pAddFailedConfigPath( aParsePath);
                }

                if( theJSONname) {
                    aSyntaxReport[ "name"] = theJSONname;
                }

                if( theCondition) {
                    aSyntaxReport[ "condition"] = theCondition;
                }

                if( theExpected) {
                    aSyntaxReport[ "expected"] = theExpected;
                }

                this._v_SyntaxError = aSyntaxReport;

                if( this._v_ParseReport) {
                    this._v_ParseReport.push( aSyntaxReport);
                }
                if( this.LOGREPORTS) {
                    this.pLogReport( aSyntaxReport);
                }
            };
            if( pSyntax_Error){}/* CQT */
            aPrototype.pSyntax_Error = pSyntax_Error;








            var pPopulate_Field = function( theFieldName, theValue, theJSONname) {

                this.pReport_Field( theFieldName, theValue, theJSONname);

                if( this._v_SkipPopulation) {
                    return;
                }
    
                if( !this._v_ConfPopulated) {
                    return;
                }
    
                this._v_ConfPopulated.pPopulateFieldFromParser( theFieldName, theValue);
            };
            if( pPopulate_Field){}/* CQT */
            aPrototype.pPopulate_Field = pPopulate_Field;






            var pJSONnameEncountered = function( theJSONname) {

                if( !this._v_ConfPopulated) {
                    return;
                }

                this._v_ConfPopulated.pJSONnameEncounteredByParser( theJSONname);
            };
            if( pJSONnameEncountered){}/* CQT */
            aPrototype.pJSONnameEncountered = pJSONnameEncountered;





            var fHasEncounteredJSONname = function( theJSONname) {

                if( !this._v_ConfPopulated) {
                    return false;
                }

                return this._v_ConfPopulated.fHasParserEncounteredJSONname( theJSONname);
            };
            if( fHasEncounteredJSONname){}/* CQT */
            aPrototype.fHasEncounteredJSONname = fHasEncounteredJSONname;





            var pLogReport = function( theReport) {
    
                if( !this.LOGREPORTS) {
                    return;
                }
    
                if( !theReport) {
                    return;
                }
    
                var aLog = {
                    "tid": this._v_Id,
                    "type": this._v_Type
                };
                if( this._v_ConfigSpec && this._v_ConfigSpec.name) {
                    aLog.name = this._v_ConfigSpec.name;
                }

                aLog.rep = theReport;

                var aLogStr = JSON.stringify( aLog);
                console.log( "," + aLogStr);
            };
            if( pLogReport){}/* CQT */
            aPrototype.pLogReport = pLogReport;






            var pReport_ParseStatus  = function( theParseStatus ) {
                if( !theParseStatus ) {
                    return;
                }

                if( !this._v_ParseReport && ! this.LOGREPORTS) {
                    return;
                }

                var aReport = { "status": theParseStatus };
                if( this._v_ParseReport) {
                    this._v_ParseReport.push( aReport);
                }
                if( this.LOGREPORTS) {
                    this.pLogReport( aReport);
                }
            };
            if( pReport_ParseStatus ){}/* CQT */
            aPrototype.pReport_ParseStatus  = pReport_ParseStatus ;








            var pReport_Field = function( theField, theValue, theJSONname) {
                if( !theField) {
                    return;
                }

                if( !this._v_ParseReport && ! this.LOGREPORTS) {
                    return;
                }

                var aReport = { "field": theField, "value": theValue, "name": theJSONname};
                if( this._v_ParseReport) {
                    this._v_ParseReport.push( aReport);
                }
                if( this.LOGREPORTS) {
                    this.pLogReport( aReport);
                }
            };
            if( pReport_Field){}/* CQT */
            aPrototype.pReport_Field = pReport_Field;





            var pReport_Parms = function( theParms) {
                if( !theParms) {
                    return;
                }

                if( !this._v_ParseReport && ! this.LOGREPORTS) {
                    return;
                }

                var aReport = { "parms": theParms};
                if( this._v_ParseReport) {
                    this._v_ParseReport.push( aReport);
                }
                if( this.LOGREPORTS) {
                    this.pLogReport( aReport);
                }
            };
            if( pReport_Parms){}/* CQT */
            aPrototype.pReport_Parms = pReport_Parms;






            var pReport_Error = function( theErrorReason) {
                if( !this._v_ParseReport && ! this.LOGREPORTS) {
                    return;
                }
    
                if( theErrorReason) {
                    var aReasonReport = { "error": theErrorReason};
                    if( this._v_ParseReport) {
                        this._v_ParseReport.push( aReasonReport);
                    }
                    if( this.LOGREPORTS) {
                        this.pLogReport( aReasonReport);
                    }
                }

                var aReport = { "success": false};
                if( this._v_ParseReport) {
                    this._v_ParseReport.push( aReport);
                }

                if( this.LOGREPORTS) {
                    this.pLogReport( aReport);
                }
            };
            if( pReport_Error){}/* CQT */
            aPrototype.pReport_Error = pReport_Error;
    
    


    
    
            var pReport_Info = function( theInfo) {
                if( !theInfo) {
                    return;
                }

                if( !this._v_ParseReport && ! this.LOGREPORTS) {
                    return;
                }

                var aReport = { "info": theInfo};
                if( this._v_ParseReport) {
                    this._v_ParseReport.push( aReport);
                }
                if( this.LOGREPORTS) {
                    this.pLogReport( aReport);
                }
            };
            if( pReport_Info){}/* CQT */
            aPrototype.pReport_Info = pReport_Info;
    



    
    
    
            var pReport_Warn = function( theWarnReason) {
                if( !theWarnReason) {
                    return;
                }

                if( !this._v_ParseReport && ! this.LOGREPORTS) {
                    return;
                }

                var aReport = { "warn": theInfo};
                if( this._v_ParseReport) {
                    this._v_ParseReport.push( aReport);
                }
                if( this.LOGREPORTS) {
                    this.pLogReport( aReport);
                }
            };
            if( pReport_Warn){}/* CQT */
            aPrototype.pReport_Warn = pReport_Error;
    
    
    
    
    
            var pReport_Success = function() {
                if( !this._v_ParseReport && ! this.LOGREPORTS) {
                    return;
                }

                var aReport = { "success": true};
                if( this._v_ParseReport) {
                    this._v_ParseReport.push( aReport);
                }
                if( this.LOGREPORTS) {
                    this.pLogReport( aReport);
                }
            };
            if( pReport_Success){}/* CQT */
            aPrototype.pReport_Success = pReport_Success;
    
    
    
    
    
    
    
    
    
            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }
    
                var aResultJSON =  aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);
                if( aResultJSON){}/* CQT */
    
                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;








            var fExceptionDetail = function( theException) {
                return theM_exceptiondetails.fExceptionDetail( theException);
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;









            var pToStoreJSON_Populated_into = function( theFieldsToJsonNamesMap, theConfiguration, theToStoreJSON, theCommonObjects, theAlready) {
                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */

                if( !theFieldsToJsonNamesMap) {
                    return;
                }

                if( !theConfiguration) {
                    return;
                }

                if( !theToStoreJSON) {
                    return;
                }

                var somePopulatedFields = theConfiguration.fFieldsPopulatedFromParser();
                var aNumPopulatedFields = somePopulatedFields.length;

                for( var aPopulatedFieldIdx=0; aPopulatedFieldIdx < aNumPopulatedFields; aPopulatedFieldIdx++) {
                    var aPopulatedField = somePopulatedFields[ aPopulatedFieldIdx];
                    var aJSONname = theFieldsToJsonNamesMap[ aPopulatedField];
                    if( aJSONname) {
                        theToStoreJSON[ aJSONname] = theConfiguration[ aPopulatedField];

                    }
                }
            };
            if( pToStoreJSON_Populated_into){}/* CQT */
            aPrototype.pToStoreJSON_Populated_into = pToStoreJSON_Populated_into;



            return aPrototype;
    
        })();
    
    
        var SpecParser_Constructor = function( theIdentifier, theConfigSpec, theParentParser,
                                               theSkipPopulation, theAbandonAtFirstSyntaxError) {
    
            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;
    
            this._v_Prototype = null;
            this._v_Type = null;
    
            this._v_Identifier = null;
            this._v_IdentifierIsOwn = null;

            this._v_SkipPopulation = null;
            this._v_AbandonAtFirstSyntaxError = null;

            this._v_ValuesCaseInsensitive = null;
            this._v_StrictBooleanValues   = null;
            this._v_StrictEnumValues      = null;

            this._v_ConfigSpec   = null;
            this._v_ParentParser = null;

            this._v_ConfPopulated  = null;
    
            this._v_ParseSuccess = null;
            this._v_ParseStatus  = null;
            this._v_ParseReport  = null;

            this._v_SubParsers = null;

            this._v_FailedConfigPaths = null;

            this._pInit_SpecParser( theIdentifier, theConfigSpec, theParentParser,
                theSkipPopulation, theAbandonAtFirstSyntaxError);
        };
        SpecParser_Constructor.prototype = aSpecParser_Prototype;
    
    
    
    
    
        var SpecParser_SuperPrototypeConstructor = function() {
    
            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;
    
            this._v_Prototype = aSpecParser_Prototype;
            this._v_Type = null;
    
            this._v_Identifier = null;
            this._v_IdentifierIsOwn = null;

            this._v_SkipPopulation = null;
            this._v_AbandonAtFirstSyntaxError = null;

            this._v_ValuesCaseInsensitive = null;
            this._v_StrictBooleanValues   = null;
            this._v_StrictEnumValues      = null;

            this._v_ConfigSpec   = null;
            this._v_ParentParser = null;

            this._v_ConfPopulated  = null;
    
            this._v_ParseSuccess = null;
            this._v_ParseStatus  = null;
            this._v_ParseReport  = null;

            this._v_SubParsers = null;

            this._v_FailedConfigPaths = null;
        };
        SpecParser_SuperPrototypeConstructor.prototype = aSpecParser_Prototype;
    
    
    
    
    
    
    
        var aModule = {
            "SpecParser_Prototype": aSpecParser_Prototype,
            "SpecParser_Constructor": SpecParser_Constructor,
            "SpecParser_SuperPrototypeConstructor": SpecParser_SuperPrototypeConstructor
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

            var aM_exceptiondetails = require('../../../common-test/exceptiondetails');

            var aM_withid_test   = require('../../withid-test');
            var aM_identifier    = require('../../identifier-test');
            var aM_overrider     = require('../../overrider');

            return aMod_definer(
                aM_exceptiondetails,
                aM_withid_test, 
                aM_identifier,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define(
            [
                '../../../common-test/exceptiondetails',
                "../../withid-test", 
                "../../identifier-test",
                "../parsedconfig",
                "../../overrider"
            ], function (
                theM_exceptiondetails,
                theM_withid_test,
                theM_identifier,
                theM_overrider
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_withid_test,
                theM_identifier,
                theM_overrider
            );
        });
    }


}());