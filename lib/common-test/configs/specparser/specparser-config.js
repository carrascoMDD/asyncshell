'use strict';

/*
 specparser-config.js
 Created 201408130113
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
        theM_configuration,
        theM_specparser,
        theM_parmsparser,
        theM_defaultsparser,
        theM_specparser_import,
        theM_specparser_export,
        theM_specparser_check) {



        var ModuleName     = "specparser-config";
        var ModulePackages = "common-test/configs/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var aSpecParserConfig_Prototype = (function() {


            var aPrototype = new theM_specparser.SpecParser_SuperPrototypeConstructor();


            aPrototype._v_SuperPrototype = theM_specparser.SpecParser_Prototype;


            aPrototype._v_Type = "SpecParserConfig";



            aPrototype._v_ParmsParsers   = null;
            aPrototype._v_ImportParsers  = null;
            aPrototype._v_RequiredParsers  = null;
            aPrototype._v_ExportParsers  = null;
            aPrototype._v_CheckParsers   = null;





            var _pInit = function( theIdentifier, theConfigSpec, theParentParser,
                                   theSkipPopulation, theAbandonAtFirstSyntaxError) {

                this._pInit_SpecParserConfig( theIdentifier, theConfigSpec, theParentParser,
                    theSkipPopulation, theAbandonAtFirstSyntaxError);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_SpecParserConfig = function( theIdentifier, theConfigSpec, theParentParser,
                                                    theSkipPopulation, theAbandonAtFirstSyntaxError) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParser.apply( this,
                    [ theIdentifier, theConfigSpec, theParentParser, theSkipPopulation, theAbandonAtFirstSyntaxError]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_ParmsParsers   = [ ];
                this._v_ImportParsers  = [ ];
                this._v_RequiredParsers  = [ ];
                this._v_ExportParsers  = [ ];
                this._v_CheckParsers   = [ ];
            };
            if( _pInit_SpecParserConfig){}/* CQT */
            aPrototype._pInit_SpecParserConfig = _pInit_SpecParserConfig;










            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecParserConfig( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecParserConfig = function( theReleaseParms, theReleaseDone) {

                if( this._v_ParmsParsers) {
                    var aNumParmsParsers = this._v_ParmsParsers.length;
                    if( aNumParmsParsers) {
                        for( var aParmsParserIdx=0; aParmsParserIdx < aNumParmsParsers; aParmsParserIdx++) {
                            var aParmsParser = this._v_ParmsParsers[ aParmsParserIdx];
                            if( aParmsParser) {
                                if( typeof aParmsParser._pRelease == "function") {
                                    aParmsParser._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_ParmsParsers   = undefined;


                
                if( this._v_ImportParsers) {
                    var aNumImportParsers = this._v_ImportParsers.length;
                    if( aNumImportParsers) {
                        for( var aImportParserIdx=0; aImportParserIdx < aNumImportParsers; aImportParserIdx++) {
                            var aImportParser = this._v_ImportParsers[ aImportParserIdx];
                            if( aImportParser) {
                                if( typeof aImportParser._pRelease == "function") {
                                    aImportParser._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_ImportParsers  = undefined;

                
                
                if( this._v_RequiredParsers) {
                    var aNumRequiredParsers = this._v_RequiredParsers.length;
                    if( aNumRequiredParsers) {
                        for( var aRequiredParserIdx=0; aRequiredParserIdx < aNumRequiredParsers; aRequiredParserIdx++) {
                            var aRequiredParser = this._v_RequiredParsers[ aRequiredParserIdx];
                            if( aRequiredParser) {
                                if( typeof aRequiredParser._pRelease == "function") {
                                    aRequiredParser._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_RequiredParsers  = undefined;

                

                if( this._v_ExportParsers) {
                    var aNumExportParsers = this._v_ExportParsers.length;
                    if( aNumExportParsers) {
                        for( var aExportParserIdx=0; aExportParserIdx < aNumExportParsers; aExportParserIdx++) {
                            var aExportParser = this._v_ExportParsers[ aExportParserIdx];
                            if( aExportParser) {
                                if( typeof aExportParser._pRelease == "function") {
                                    aExportParser._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_ExportParsers  = undefined;


                
                if( this._v_CheckParsers) {
                    var aNumCheckParsers = this._v_CheckParsers.length;
                    if( aNumCheckParsers) {
                        for( var aCheckParserIdx=0; aCheckParserIdx < aNumCheckParsers; aCheckParserIdx++) {
                            var aCheckParser = this._v_CheckParsers[ aCheckParserIdx];
                            if( aCheckParser) {
                                if( typeof aCheckParser._pRelease == "function") {
                                    aCheckParser._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_CheckParsers   = undefined;
                

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SpecParser.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecParserConfig){}/* CQT */
            aPrototype._pRelease_SpecParserConfig = _pRelease_SpecParserConfig;









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

                this.pCleanUpTest_SpecParserConfig( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_SpecParserConfig= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {

                    if( this._v_ParmsParsers) {
                        var aNumParmsParsers = this._v_ParmsParsers.length;
                        if( aNumParmsParsers) {
                            for( var aParmsParserIdx=0; aParmsParserIdx < aNumParmsParsers; aParmsParserIdx++) {
                                var aParmsParser = this._v_ParmsParsers[ aParmsParserIdx];
                                if( aParmsParser) {
                                    if( typeof aParmsParser.pCleanUpTest == "function") {
                                        aParmsParser.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
    
    
                    if( this._v_ImportParsers) {
                        var aNumImportParsers = this._v_ImportParsers.length;
                        if( aNumImportParsers) {
                            for( var aImportParserIdx=0; aImportParserIdx < aNumImportParsers; aImportParserIdx++) {
                                var aImportParser = this._v_ImportParsers[ aImportParserIdx];
                                if( aImportParser) {
                                    if( typeof aImportParser.pCleanUpTest == "function") {
                                        aImportParser.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
    
    
                    if( this._v_RequiredParsers) {
                        var aNumRequiredParsers = this._v_RequiredParsers.length;
                        if( aNumRequiredParsers) {
                            for( var aRequiredParserIdx=0; aRequiredParserIdx < aNumRequiredParsers; aRequiredParserIdx++) {
                                var aRequiredParser = this._v_RequiredParsers[ aRequiredParserIdx];
                                if( aRequiredParser) {
                                    if( typeof aRequiredParser.pCleanUpTest == "function") {
                                        aRequiredParser.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
    
    
                    if( this._v_ExportParsers) {
                        var aNumExportParsers = this._v_ExportParsers.length;
                        if( aNumExportParsers) {
                            for( var aExportParserIdx=0; aExportParserIdx < aNumExportParsers; aExportParserIdx++) {
                                var aExportParser = this._v_ExportParsers[ aExportParserIdx];
                                if( aExportParser) {
                                    if( typeof aExportParser.pCleanUpTest == "function") {
                                        aExportParser.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
    
    
                    if( this._v_CheckParsers) {
                        var aNumCheckParsers = this._v_CheckParsers.length;
                        if( aNumCheckParsers) {
                            for( var aCheckParserIdx=0; aCheckParserIdx < aNumCheckParsers; aCheckParserIdx++) {
                                var aCheckParser = this._v_CheckParsers[ aCheckParserIdx];
                                if( aCheckParser) {
                                    if( typeof aCheckParser.pCleanUpTest == "function") {
                                        aCheckParser.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_SpecParser.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_SpecParserConfig){}/* CQT */
            aPrototype.pCleanUpTest_SpecParserConfig = pCleanUpTest_SpecParserConfig;















            var fSyntax = function() {

            };
            if( fSyntax){}/* CQT */
            aPrototype.fSyntax = fSyntax;






            var pInstantiateConfPopulated = function() {
                if( this._v_SkipPopulation) {
                    return;
                }


                this._v_ConfPopulated = new theM_configuration.Configuration_Constructor( this._v_ConfigSpec.name, this._v_Identifier);
                if( !this._v_ConfPopulated) {
                    this.pReport_Error( "new theM_configuration.Configuration_Constructor( this._v_Identifier)");
                    return;
                }

                this.pReport_Field( "_v_Title", this._v_ConfigSpec.name, this.JSONNAME_NAME);


                this._v_ConfPopulated.pFromParser( this);

                this.pAddConfPopulatedToParentParserConfPopulated();
            };
            if( pInstantiateConfPopulated){}/* CQT */
            aPrototype.pInstantiateConfPopulated = pInstantiateConfPopulated;







            var pAddConfPopulatedToParentParserConfPopulated = function() {
                if( this._v_SkipPopulation) {
                    return;
                }

                if( !this._v_ConfPopulated) {
                    return;
                }

                if( this._v_ParentParser && !this._v_ParentParser._v_SkipPopulation) {
                    if( this._v_ParentParser._v_ConfPopulated) {
                        this._v_ParentParser._v_ConfPopulated.pAddSubConfiguration( this._v_ConfPopulated);
                    }
                }
            };
            if( pAddConfPopulatedToParentParserConfPopulated){}/* CQT */
            aPrototype.pAddConfPopulatedToParentParserConfPopulated = pAddConfPopulatedToParentParserConfPopulated;













            var fParse_own = function() {

                var aSucceeded = true;

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "this._v_ConfigSpec", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }

                if( !this.fParse_Config_fields()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                if( !this.fParse_Imports()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                if( !this.fParse_Exports()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                if( !this.fParse_Parms()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                if( !this.fParse_Defaults()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }


                if( !this.fParse_Requireds()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }


                if( !this.fParse_Checks()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                if( !this.fParse_Subs()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                return aSucceeded;
            };
            if( fParse_own){}/* CQT */
            aPrototype.fParse_own = fParse_own;











            var fParse_Config_fields = function() {
                return this.fParse_withHandlers( ParseFieldsHandlersByJSONname_Config);
            };
            if( fParse_Config_fields){}/* CQT */
            aPrototype.fParse_Config_fields = fParse_Config_fields;










            var ParseFieldsHandlersByJSONname_Config = {};
            aPrototype.ParseFieldsHandlersByJSONname_Config = ParseFieldsHandlersByJSONname_Config;




            
            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_NAME] = function( theThis) {

                var aName = null;
                var aParsing_Name = theThis._v_ConfigSpec[ theM_parsedconfig.JSONNAME_NAME];
                if( aParsing_Name) {
                    theThis.pJSONnameEncountered( theM_parsedconfig.JSONNAME_NAME);
                    aName = theThis.fParseString( aParsing_Name);
                }
                if( aName == null) {
                    theThis.pSyntax_Error( theM_parsedconfig.JSONNAME_NAME, theThis.ERRORCONDITION_REQUIRED);
                    return false;
                }

                theThis.pPopulate_Field( "_v_Title", aParsing_Name, theM_parsedconfig.JSONNAME_NAME);

                return true;
            };






            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_RUNNABLE] = function( theThis) {

                var aParsing_Runnable = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_RUNNABLE];
                if( !( typeof aParsing_Runnable == "undefined") && !( aParsing_Runnable == null)) {
    
                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_RUNNABLE);
    
                    var aRunnable = theThis.fParseBoolean( aParsing_Runnable);
                    if( aRunnable == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_RUNNABLE, theThis.ERRORCONDITION_UNSUPPORTEDBOOLEANVALUE);
                        return false;
                    }
    
                    theThis.pPopulate_Field( "_v_Runnable", aRunnable, theM_configuration.JSONNAME_RUNNABLE);
                }

                return true;
            };







            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_INHERITMODE] = function( theThis) {

                var aParsing_Inherit = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_INHERITMODE];
                if( aParsing_Inherit) {

                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_INHERITMODE);

                    var anInherit = theThis.fParseEnum( aParsing_Inherit, theM_configuration.INHERITMODES);
                    if( anInherit == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_INHERITMODE, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE, theM_configuration.INHERITMODES);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_InheritMode", anInherit, theM_configuration.JSONNAME_INHERITMODE);
                }

                return true;
            };






            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_EXPECTSUCCESS] = function( theThis) {

                var aParsing_ExpectSuccess = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_EXPECTSUCCESS];
                if( !( typeof aParsing_ExpectSuccess == "undefined") && !( aParsing_ExpectSuccess == null)) {

                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_EXPECTSUCCESS);

                    var aExpectSuccess = theThis.fParseBoolean( aParsing_ExpectSuccess);
                    if( aExpectSuccess == null) {

                        var aExpectSuccess_SucceedAlways = theThis.fParseString( aParsing_ExpectSuccess);
                        if( !( aExpectSuccess_SucceedAlways == null)
                            && ( aExpectSuccess_SucceedAlways == theM_configuration.EXPECTSUCCESS_VALUE_SUCCEEDALWAYS)) {

                            aExpectSuccess = aExpectSuccess_SucceedAlways;
                        }
                        else {
                            theThis.pSyntax_Error( theM_configuration.JSONNAME_EXPECTSUCCESS, theThis.ERRORCONDITION_UNSUPPORTEDBOOLEANVALUE);
                            return false;
                        }
                    }

                    theThis.pPopulate_Field( "_v_ExpectSuccess", aExpectSuccess, theM_configuration.JSONNAME_EXPECTSUCCESS);
                }

                return true;
            };






            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_EXPECTEDEVENT] = function( theThis) {

                var aParsing_Expected = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_EXPECTEDEVENT];
                if( aParsing_Expected) {

                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_EXPECTEDEVENT);

                    var anExpected = theThis.fParseEnum( aParsing_Expected, theM_configuration.EXPECTEDEVENTS);
                    if( anExpected == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_EXPECTEDEVENT, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE, theM_configuration.EXPECTEDEVENTS);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ExpectedEvent", anExpected, theM_configuration.JSONNAME_EXPECTEDEVENT);
                }

                return true;
            };




            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_CONSTRUCTORMODULENAME] = function( theThis) {

                var aParsing_ConstructorModuleName = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_CONSTRUCTORMODULENAME];
                if( aParsing_ConstructorModuleName) {
                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_CONSTRUCTORMODULENAME);

                    var aConstructorModuleName = theThis.fParseString( aParsing_ConstructorModuleName);
                    if( aConstructorModuleName == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_CONSTRUCTORMODULENAME, theThis.ERRORCONDITION_NOTSTRING);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ConstructorModuleName", aConstructorModuleName, theM_configuration.JSONNAME_CONSTRUCTORMODULENAME);
                }

                return true;
            };




            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_CONSTRUCTORNAME] = function( theThis) {

                var aParsing_ConstructorName = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_CONSTRUCTORNAME];
                if( aParsing_ConstructorName) {
                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_CONSTRUCTORNAME);

                    var aConstructorName = theThis.fParseString( aParsing_ConstructorName);
                    if( aConstructorName == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_CONSTRUCTORNAME, theThis.ERRORCONDITION_NOTSTRING);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ConstructorName", aConstructorName, theM_configuration.JSONNAME_CONSTRUCTORNAME);
                }

                return true;
            };





            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_METHODNAME] = function( theThis) {

                var aParsing_MethodName = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_METHODNAME];
                if( aParsing_MethodName) {
                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_METHODNAME);

                    var aMethodName = theThis.fParseString( aParsing_MethodName);
                    if( aMethodName == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_METHODNAME, theThis.ERRORCONDITION_NOTSTRING);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_MethodName", aMethodName, theM_configuration.JSONNAME_METHODNAME);
                }

                return true;
            };





            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_FORCEERROR] = function( theThis) {

                var aParsing_ForceError = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_FORCEERROR];
                if( !( typeof aParsing_ForceError == "undefined") && !( aParsing_ForceError == null)) {

                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_FORCEERROR);

                    var aForceError = theThis.fParseBoolean( aParsing_ForceError);
                    if( aForceError == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_FORCEERROR, theThis.ERRORCONDITION_UNSUPPORTEDBOOLEANVALUE);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ForceError", aForceError, theM_configuration.JSONNAME_FORCEERROR);
                }

                return true;
            };





            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_FORCEERRORDETAIL] = function( theThis) {

                var aParsing_ForceErrorDetail = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_FORCEERRORDETAIL];
                if( aParsing_ForceErrorDetail) {
                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_FORCEERRORDETAIL);

                    var aForceErrorDetail = theThis.fParseString( aParsing_ForceErrorDetail);
                    if( aForceErrorDetail == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_FORCEERROR, theThis.ERRORCONDITION_UNSUPPORTEDBOOLEANVALUE);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ForceErrorDetail", aForceErrorDetail, theM_configuration.JSONNAME_FORCEERRORDETAIL);
                }

                return true;
            };






            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_FORCEERRORWHEN] = function( theThis) {

                var aParsing_ForceErrorWhen = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_FORCEERRORWHEN];
                if( aParsing_ForceErrorWhen) {

                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_FORCEERRORWHEN);

                    var anForceErrorWhen = theThis.fParseEnum( aParsing_ForceErrorWhen, theM_configuration.FORCEERRORWHENS);
                    if( anForceErrorWhen == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_EXPECTEDEVENT, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE, theM_configuration.FORCEERRORWHENS);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ForceErrorWhen", anForceErrorWhen, theM_configuration.JSONNAME_FORCEERRORWHEN);
                }

                return true;
            };






            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_FORCEERRORKIND] = function( theThis) {

                var aParsing_ForceErrorKind = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_FORCEERRORKIND];
                if( aParsing_ForceErrorKind) {

                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_FORCEERRORKIND);

                    var anForceErrorKind = theThis.fParseEnum( aParsing_ForceErrorKind, theM_configuration.FORCEERRORKINDS);
                    if( anForceErrorKind == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_EXPECTEDEVENT, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE, theM_configuration.FORCEERRORKINDS);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ForceErrorKind", anForceErrorKind, theM_configuration.JSONNAME_FORCEERRORKIND);
                }

                return true;
            };





            ParseFieldsHandlersByJSONname_Config[ theM_configuration.JSONNAME_SCHEDULESUBS] = function( theThis) {

                var aParsing_ScheduleSubs = theThis._v_ConfigSpec[ theM_configuration.JSONNAME_SCHEDULESUBS];
                if( aParsing_ScheduleSubs) {

                    theThis.pJSONnameEncountered( theM_configuration.JSONNAME_SCHEDULESUBS);

                    var aScheduleSubs = theThis.fParseEnum( aParsing_ScheduleSubs, theM_configuration.SCHEDULEMODEALL);
                    if( aScheduleSubs == null) {
                        theThis.pSyntax_Error( theM_configuration.JSONNAME_SCHEDULESUBS, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE, theM_configuration.SCHEDULEMODEALL);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ScheduleSubs", aScheduleSubs, theM_configuration.JSONNAME_SCHEDULESUBS);
                }
                return true;
            };












            var fParse_Parms = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec");
                    return false;
                }

                var aParmsSpec = this._v_ConfigSpec[ theM_configuration.JSONNAME_PARMS];

                if( typeof aParmsSpec == "undefined") {
                    return true;
                }

                this.pJSONnameEncountered( theM_configuration.JSONNAME_PARMS);

                if( this._v_ConfPopulated) {
                    this._v_ConfPopulated.pRelationPopulatedFromParser( "_v_Parms");
                }

                if( !aParmsSpec) {
                    return true;
                }

                if( !( typeof aParmsSpec == "object")) {
                    this.pSyntax_Error( theM_configuration.JSONNAME_PARMS, this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var aParms_Parser = new theM_parmsparser.ParmsParser_Constructor(
                    this._v_Identifier, aParmsSpec, this,this._v_SkipPopulation);

                if( !aParms_Parser) {
                    this.pReport_Error( "!new theM_parmsparser.ParmsParser_Constructor()");
                    return false;
                }

                this._v_ParmsParsers.push( aParms_Parser);

                aParms_Parser._v_AbandonAtFirstSyntaxError = this._v_AbandonAtFirstSyntaxError;

                var aParseParmsSucceeded = aParms_Parser.fParse();
                if( !aParseParmsSucceeded) {
                    this.pReport_Error( "!aParseParmsSucceeded");
                    return false;
                }

                return true;
            };
            if( fParse_Parms){}/* CQT */
            aPrototype.fParse_Parms = fParse_Parms;







            var fParse_Defaults = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec");
                    return false;
                }

                var aDefaultsSpec = this._v_ConfigSpec[ theM_configuration.JSONNAME_DEFAULTS];

                if( typeof aDefaultsSpec == "undefined") {
                    return true;
                }

                this.pJSONnameEncountered( theM_configuration.JSONNAME_DEFAULTS);

                if( this._v_ConfPopulated) {
                    this._v_ConfPopulated.pRelationPopulatedFromParser( "_v_Defaults");
                }

                if( !aDefaultsSpec) {
                    return true;
                }

                if( !( typeof aDefaultsSpec == "object")) {
                    this.pSyntax_Error( theM_configuration.JSONNAME_DEFAULTS, this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var aDefaults_Parser = new theM_defaultsparser.DefaultsParser_Constructor(
                    this._v_Identifier, aDefaultsSpec, this,this._v_SkipPopulation);

                if( !aDefaults_Parser) {
                    this.pReport_Error( "!new theM_defaultsparser.DefaultsParser_Constructor()");
                    return false;
                }

                this._v_ParmsParsers.push( aDefaults_Parser);

                aDefaults_Parser._v_AbandonAtFirstSyntaxError = this._v_AbandonAtFirstSyntaxError;

                var aParseDefaultsSucceeded = aDefaults_Parser.fParse();
                if( !aParseDefaultsSucceeded) {
                    this.pReport_Error( "!aParseDefaultsSucceeded");
                    return false;
                }

                return true;
            };
            if( fParse_Defaults){}/* CQT */
            aPrototype.fParse_Defaults = fParse_Defaults;







            var fParse_Imports = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec");
                    return false;
                }

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var someImports = this._v_ConfigSpec[ theM_configuration.JSONNAME_IMPORTS];
                if( typeof someImports == "undefined") {
                    return true;
                }

                this.pJSONnameEncountered( theM_configuration.JSONNAME_IMPORTS);
                if( this._v_ConfPopulated) {
                    this._v_ConfPopulated.pRelationPopulatedFromParser( "_v_Imports");
                }

                if( !someImports) {
                    return true;
                }

                var aNumImports = someImports.length;
                if( !aNumImports) {
                    return true;
                }


                if( !( typeof someImports == "object")) {
                    this.pSyntax_Error( theM_configuration.JSONNAME_IMPORTS, this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var aSucceeded = true;

                this._v_ParseStatus = this.PARSESTATUS_PARSINGIMPORTS;
                this.pReport_ParseStatus( this._v_ParseStatus);

                try {


                    for( var anImportIdx = 0; anImportIdx < aNumImports; anImportIdx++) {

                        var anImportSpec = someImports[ anImportIdx];
                        if( anImportSpec) {
                            var anImportName = anImportSpec[ theM_parsedconfig.JSONNAME_NAME];
                            if( !anImportName) {
                                this.pSyntax_Error( theM_configuration.JSONNAME_IMPORTS + "." + theM_parsedconfig.JSONNAME_NAME, this.ERRORCONDITION_REQUIRED);
                                if( this._v_AbandonAtFirstSyntaxError) {
                                    return false;
                                }
                                else {
                                    aSucceeded = false;
                                }
                            }
                            else {
                                var aImport_Parser = new theM_specparser_import.SpecParserImport_Constructor(
                                    this._v_Identifier, anImportSpec, this, this._v_SkipPopulation);

                                if( !aImport_Parser) {
                                    this.pReport_Error( "!new theM_specparser_import.SpecParserImport_Constructor()");
                                    return false;
                                }
                                else {
                                    this._v_ImportParsers.push( aImport_Parser);

                                    var aParseImportSucceeded = aImport_Parser.fParse();
                                    if( !aParseImportSucceeded) {
                                        this.pReport_Error( "!aParseImportSucceeded for import [" + anImportIdx + "]");
                                        if( this._v_AbandonAtFirstSyntaxError) {
                                            return false;
                                        }
                                        else {
                                            aSucceeded = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                finally {
                    this._v_ParseStatus = this.PARSESTATUS_TERMINATEDIMPORTS;
                    this.pReport_ParseStatus( this._v_ParseStatus);
                }

                return aSucceeded;
            };
            if( fParse_Imports){}/* CQT */
            aPrototype.fParse_Imports = fParse_Imports;




            



            var fParse_Requireds = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec");
                    return false;
                }

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var someRequireds = this._v_ConfigSpec[ theM_configuration.JSONNAME_REQUIRED];
                if( typeof someRequireds == "undefined") {
                    return true;
                }

                this.pJSONnameEncountered( theM_configuration.JSONNAME_REQUIRED);
                if( this._v_ConfPopulated) {
                    this._v_ConfPopulated.pRelationPopulatedFromParser( "_v_Requireds");
                }

                if( !someRequireds) {
                    return true;
                }

                var aNumRequireds = someRequireds.length;
                if( !aNumRequireds) {
                    return true;
                }


                if( !( typeof someRequireds == "object")) {
                    this.pSyntax_Error( theM_configuration.JSONNAME_REQUIRED, this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var aSucceeded = true;

                this._v_ParseStatus = this.PARSESTATUS_PARSINGREQUIREDS;
                this.pReport_ParseStatus( this._v_ParseStatus);

                try {


                    for( var anRequiredIdx = 0; anRequiredIdx < aNumRequireds; anRequiredIdx++) {

                        var anRequiredSpec = someRequireds[ anRequiredIdx];
                        if( anRequiredSpec) {
                            var anRequiredName = anRequiredSpec[ theM_parsedconfig.JSONNAME_NAME];
                            if( !anRequiredName) {
                                this.pSyntax_Error( theM_configuration.JSONNAME_REQUIRED + "." + theM_parsedconfig.JSONNAME_NAME, this.ERRORCONDITION_REQUIRED);
                                if( this._v_AbandonAtFirstSyntaxError) {
                                    return false;
                                }
                                else {
                                    aSucceeded = false;
                                }
                            }
                            else {

                                var aM_specparser_required = require( "./specparser-required");

                                var aRequired_Parser = new aM_specparser_required.SpecParserRequired_Constructor(
                                    this._v_Identifier, anRequiredSpec, this, this._v_SkipPopulation);

                                if( !aRequired_Parser) {
                                    this.pReport_Error( "!new require( './specparser-required').SpecParserRequired_Constructor()");
                                    return false;
                                }
                                else {
                                    this._v_RequiredParsers.push( aRequired_Parser);

                                    var aParseRequiredSucceeded = aRequired_Parser.fParse();
                                    if( !aParseRequiredSucceeded) {
                                        this.pReport_Error( "!aParseRequiredSucceeded for required [" + anRequiredIdx + "]");
                                        if( this._v_AbandonAtFirstSyntaxError) {
                                            return false;
                                        }
                                        else {
                                            aSucceeded = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                finally {
                    this._v_ParseStatus = this.PARSESTATUS_TERMINATEDREQUIREDS;
                    this.pReport_ParseStatus( this._v_ParseStatus);
                }

                return aSucceeded;
            };
            if( fParse_Requireds){}/* CQT */
            aPrototype.fParse_Requireds = fParse_Requireds;





            var fParse_Exports = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec");
                    return false;
                }

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }

                var someExports = this._v_ConfigSpec[ theM_configuration.JSONNAME_EXPORTS];

                if( typeof someExports == "undefined") {
                    return true;
                }

                this.pJSONnameEncountered( theM_configuration.JSONNAME_EXPORTS);
                if( this._v_ConfPopulated) {
                    this._v_ConfPopulated.pRelationPopulatedFromParser( "_v_Exports");
                }


                if( !someExports) {
                    return true;
                }

                var aNumExports = someExports.length;
                if( !aNumExports) {
                    return true;
                }


                if( !( typeof someExports == "object")) {
                    this.pSyntax_Error( theM_configuration.JSONNAME_EXPORTS, this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var aSucceeded = true;

                this._v_ParseStatus = this.PARSESTATUS_PARSINGEXPORTS;
                this.pReport_ParseStatus( this._v_ParseStatus);

                try {

                    for( var anExportIdx = 0; anExportIdx < aNumExports; anExportIdx++) {

                        var anExportSpec = someExports[ anExportIdx];
                        if( anExportSpec) {
                            var anExportName = anExportSpec[ theM_parsedconfig.JSONNAME_NAME];
                            if( !anExportName) {
                                this.pSyntax_Error( theM_configuration.JSONNAME_EXPORTS + "." + theM_parsedconfig.JSONNAME_NAME, this.ERRORCONDITION_REQUIRED);
                                if( this._v_AbandonAtFirstSyntaxError) {
                                    return false;
                                }
                                else {
                                    aSucceeded = false;
                                }
                            }
                            else {
                                var aExport_Parser = new theM_specparser_export.SpecParserExport_Constructor(
                                    this._v_Identifier, anExportSpec, this, this._v_SkipPopulation);

                                if( !aExport_Parser) {
                                    this.pReport_Error( "!new theM_specparser_export.SpecParserExport_Constructor()");
                                    return false;
                                }
                                else {
                                    this._v_ExportParsers.push( aExport_Parser);

                                    aExport_Parser._v_AbandonAtFirstSyntaxError = this._v_AbandonAtFirstSyntaxError;

                                    var aParseExportSucceeded = aExport_Parser.fParse();
                                    if( !aParseExportSucceeded) {
                                        this.pReport_Error( "!aParseExportSucceeded for export [" + anExportIdx + "]");
                                        if( this._v_AbandonAtFirstSyntaxError) {
                                            return false;
                                        }
                                        else {
                                            aSucceeded = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                finally {
                    this._v_ParseStatus = this.PARSESTATUS_TERMINATEDEXPORTS;
                    this.pReport_ParseStatus( this._v_ParseStatus);
                }

                return aSucceeded;
            };
            if( fParse_Exports){}/* CQT */
            aPrototype.fParse_Exports = fParse_Exports;








            var fParse_Checks = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec");
                    return false;
                }

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }

                var someChecks = this._v_ConfigSpec[ theM_configuration.JSONNAME_CHECKS];

                if( typeof someChecks == "undefined") {
                    return true;
                }

                this.pJSONnameEncountered( theM_configuration.JSONNAME_CHECKS);
                if( this._v_ConfPopulated) {
                    this._v_ConfPopulated.pRelationPopulatedFromParser( "_v_Checks");
                }



                if( !someChecks) {
                    return true;
                }

                var aNumChecks = someChecks.length;
                if( !aNumChecks) {
                    return true;
                }


                if( !( typeof someChecks == "object")) {
                    this.pSyntax_Error( theM_configuration.JSONNAME_CHECKS, this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var aSucceeded = true;

                this._v_ParseStatus = this.PARSESTATUS_PARSINGCHECKS;
                this.pReport_ParseStatus( this._v_ParseStatus);

                try {

                    for( var anCheckIdx = 0; anCheckIdx < aNumChecks; anCheckIdx++) {

                        var anCheckSpec = someChecks[ anCheckIdx];
                        if( anCheckSpec) {
                            var anCheckName = anCheckSpec[ theM_parsedconfig.JSONNAME_NAME];
                            if( !anCheckName) {
                                this.pSyntax_Error( theM_configuration.JSONNAME_CHECKS + "." + theM_parsedconfig.JSONNAME_NAME, this.ERRORCONDITION_REQUIRED);
                                if( this._v_AbandonAtFirstSyntaxError) {
                                    return false;
                                }
                                else {
                                    aSucceeded = false;
                                }
                            }
                            else {
                                var aCheck_Parser = new theM_specparser_check.SpecParserCheck_Constructor(
                                    this._v_Identifier, anCheckSpec, this, this._v_SkipPopulation);

                                if( !aCheck_Parser) {
                                    this.pReport_Error( "!new theM_specparser_check.SpecParserCheck_Constructor()");
                                    return false;
                                }
                                else {
                                    this._v_CheckParsers.push( aCheck_Parser);

                                    aCheck_Parser._v_AbandonAtFirstSyntaxError = this._v_AbandonAtFirstSyntaxError;

                                    var aParseCheckSucceeded = aCheck_Parser.fParse();
                                    if( !aParseCheckSucceeded) {
                                        this.pReport_Error( "!aParseCheckSucceeded for check [" + anCheckIdx + "]");
                                        if( this._v_AbandonAtFirstSyntaxError) {
                                            return false;
                                        }
                                        else {
                                            aSucceeded = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                finally {
                    this._v_ParseStatus = this.PARSESTATUS_TERMINATEDCHECKS;
                    this.pReport_ParseStatus( this._v_ParseStatus);
                }

                return aSucceeded;
            };
            if( fParse_Checks){}/* CQT */
            aPrototype.fParse_Checks = fParse_Checks;









            var fParse_Subs = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec");
                    return false;
                }


                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }

                var someSubSpecs = this._v_ConfigSpec[ theM_configuration.JSONNAME_SUBS];

                if( typeof someSubSpecs == "undefined") {
                    return true;
                }

                this.pJSONnameEncountered( theM_configuration.JSONNAME_SUBS);
                if( this._v_ConfPopulated) {
                    this._v_ConfPopulated.pRelationPopulatedFromParser( "_v_SubConfigurations");
                }

                if( !someSubSpecs) {
                    return true;
                }

                var aNumSubs = someSubSpecs.length;
                if( !aNumSubs) {
                    return true;
                }


                if( !( typeof someSubSpecs == "object")) {
                    this.pSyntax_Error( theM_configuration.JSONNAME_SUBS, this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var aSucceeded = true;

                this._v_ParseStatus = this.PARSESTATUS_PARSINGSUBS;
                this.pReport_ParseStatus( this._v_ParseStatus);

                try {
                    for( var anSubIdx = 0; anSubIdx < aNumSubs; anSubIdx++) {

                        var aSubSpec = someSubSpecs[ anSubIdx];
                        if( aSubSpec) {
                            var aSubSpecName = aSubSpec[ theM_parsedconfig.JSONNAME_NAME];
                            if( !aSubSpecName) {
                                this.pSyntax_Error( theM_configuration.JSONNAME_EXPORTS + "." + theM_configuration.JSONNAME_NAME, this.ERRORCONDITION_REQUIRED);
                                if( this._v_AbandonAtFirstSyntaxError) {
                                    return false;
                                }
                                else {
                                    aSucceeded = false;
                                }
                            }
                            else {

                                var aSub_Parser = new aModule.SpecParserConfig_Constructor( this._v_Identifier, aSubSpec, this, this._v_SkipPopulation);

                                if( !aSub_Parser) {
                                    this.pReport_Error( "!new theM_specparser_config.SpecParserConfig_Constructor()");
                                    return false;
                                }
                                else {
                                    aSub_Parser._v_AbandonAtFirstSyntaxError = this._v_AbandonAtFirstSyntaxError;

                                    var aParseSubSucceeded = aSub_Parser.fParse();
                                    if( !aParseSubSucceeded) {
                                        this.pReport_Error( "!aParseSubSucceeded for sub [" + anSubIdx + "]");
                                        if( this._v_AbandonAtFirstSyntaxError) {
                                            return false;
                                        }
                                        else {
                                            aSucceeded = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                finally {
                    this._v_ParseStatus = this.PARSESTATUS_TERMINATEDSUBS;
                    this.pReport_ParseStatus( this._v_ParseStatus);
                }

                return aSucceeded;
            };
            if( fParse_Subs){}/* CQT */
            aPrototype.fParse_Subs = fParse_Subs;



















            var fToStoreJSON = function( theConfiguration, theCommonObjects, theAlready) {

                if( !theConfiguration) {
                    return null;
                }

                var aToStoreJSON = {};

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( theConfiguration)){
                        aToStoreJSON[ theM_parsedconfig.JSONNAME_NAME] = this._v_Title;
                        return aToStoreJSON;
                    }
                }


                this.pToStoreJSON_Populated_into( theM_configuration.JSONNAMESBYFIELDNAME_CONFIGURATION, theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                this.pToStoreJSON_Parms_into(     theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                this.pToStoreJSON_Defaults_into(  theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                this.pToStoreJSON_Imports_into(   theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                this.pToStoreJSONRequireds_into(  theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                this.pToStoreJSON_Exports_into(   theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                this.pToStoreJSON_Checks_into(    theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                this.pToStoreJSON_Subs_into(      theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;










            var pToStoreJSON_Parms_into = function( theConfiguration, theToStoreJSON, theCommonObjects, theAlready) {
                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */

                if( !theConfiguration) {
                    return;
                }


                if( !theToStoreJSON) {
                    return;
                }

                if( theConfiguration._v_ConfigParms) {
                    theToStoreJSON[ theM_configuration.JSONNAME_PARMS] = theConfiguration._v_ConfigParms.fToStoreJSON();
                }
            };
            if( pToStoreJSON_Parms_into){}/* CQT */
            aPrototype.pToStoreJSON_Parms_into = pToStoreJSON_Parms_into;








            var pToStoreJSON_Defaults_into = function( theConfiguration, theToStoreJSON, theCommonObjects, theAlready) {
                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */

                if( !theConfiguration) {
                    return;
                }


                if( !theToStoreJSON) {
                    return;
                }

                if( theConfiguration._v_Defaults) {
                    theToStoreJSON[ theM_configuration.JSONNAME_DEFAULTS] = theConfiguration._v_Defaults.fToStoreJSON();
                }
            };
            if( pToStoreJSON_Defaults_into){}/* CQT */
            aPrototype.pToStoreJSON_Defaults_into = pToStoreJSON_Defaults_into;






            var pToStoreJSON_Imports_into = function( theConfiguration, theToStoreJSON, theCommonObjects, theAlready) {
                if( !theConfiguration) {
                    return;
                }

                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */


                if( !theToStoreJSON) {
                    return;
                }

                if( !theConfiguration._v_Imports) {
                    return;
                }

                var aNumImports = theConfiguration._v_Imports.length;
                if( !aNumImports) {
                    return;
                }


                var someImportStoreJSONs = [ ];

                for( var anImportIdx=0; anImportIdx < aNumImports; anImportIdx++) {
                    var anImport = theConfiguration._v_Imports[ anImportIdx];

                    var anImportStoreJSON = anImport.fToStoreJSON( theCommonObjects, theAlready);
                    if( anImportStoreJSON) {
                        someImportStoreJSONs.push( anImportStoreJSON);
                    }
                }
                if( someImportStoreJSONs && someImportStoreJSONs.length) {
                    theToStoreJSON[ theM_configuration.JSONNAME_IMPORTS] = someImportStoreJSONs;
                }
            };
            if( pToStoreJSON_Imports_into){}/* CQT */
            aPrototype.pToStoreJSON_Imports_into = pToStoreJSON_Imports_into;






            var pToStoreJSONRequireds_into = function( theConfiguration, theToStoreJSON, theCommonObjects, theAlready) {
                if( !theConfiguration) {
                    return;
                }

                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */


                if( !theToStoreJSON) {
                    return;
                }

                if( !theConfiguration._v_Requireds) {
                    return;
                }

                var aNumRequireds = theConfiguration._v_Requireds.length;
                if( !aNumRequireds) {
                    return;
                }


                var someRequiredsStoreJSONs = [ ];

                for( var anRequiredsIdx=0; anRequiredsIdx < aNumRequireds; anRequiredsIdx++) {
                    var anRequireds = theConfiguration._v_Requireds[ anRequiredsIdx];

                    var anRequiredsStoreJSON = anRequireds.fToStoreJSON( theCommonObjects, theAlready);
                    if( anRequiredsStoreJSON) {
                        someRequiredsStoreJSONs.push( anRequiredsStoreJSON);
                    }
                }
                if( someRequiredsStoreJSONs && someRequiredsStoreJSONs.length) {
                    theToStoreJSON[ theM_configuration.JSONNAME_REQUIRED] = someRequiredsStoreJSONs;
                }
            };
            if( pToStoreJSONRequireds_into){}/* CQT */
            aPrototype.pToStoreJSONRequireds_into = pToStoreJSONRequireds_into;








            var pToStoreJSON_Exports_into = function( theConfiguration, theToStoreJSON, theCommonObjects, theAlready) {
                if( !theConfiguration) {
                    return;
                }

                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */


                if( !theToStoreJSON) {
                    return;
                }

                if( !theConfiguration._v_Exports) {
                    return;
                }

                var aNumExports = theConfiguration._v_Exports.length;
                if( !aNumExports) {
                    return;
                }


                var someExportStoreJSONs = [ ];

                for( var anExportIdx=0; anExportIdx < aNumExports; anExportIdx++) {
                    var anExport = theConfiguration._v_Exports[ anExportIdx];

                    var anExportStoreJSON = anExport.fToStoreJSON( theCommonObjects, theAlready);
                    if( anExportStoreJSON) {
                        someExportStoreJSONs.push( anExportStoreJSON);
                    }
                }
                if( someExportStoreJSONs && someExportStoreJSONs.length) {
                    theToStoreJSON[ theM_configuration.JSONNAME_EXPORTS] = someExportStoreJSONs;
                }
            };
            if( pToStoreJSON_Exports_into){}/* CQT */
            aPrototype.pToStoreJSON_Exports_into = pToStoreJSON_Exports_into;






            var pToStoreJSON_Checks_into = function( theConfiguration, theToStoreJSON, theCommonObjects, theAlready) {
                if( !theConfiguration) {
                    return;
                }

                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */


                if( !theToStoreJSON) {
                    return;
                }

                if( !theConfiguration._v_Checks) {
                    return;
                }

                var aNumChecks = theConfiguration._v_Checks.length;
                if( !aNumChecks) {
                    return;
                }


                var someCheckStoreJSONs = [ ];

                for( var anCheckIdx=0; anCheckIdx < aNumChecks; anCheckIdx++) {
                    var anCheck = theConfiguration._v_Checks[ anCheckIdx];

                    var anCheckStoreJSON = anCheck.fToStoreJSON( theCommonObjects, theAlready);
                    if( anCheckStoreJSON) {
                        someCheckStoreJSONs.push( anCheckStoreJSON);
                    }
                }
                if( someCheckStoreJSONs && someCheckStoreJSONs.length) {
                    theToStoreJSON[ theM_configuration.JSONNAME_CHECKS] = someCheckStoreJSONs;
                }
            };
            if( pToStoreJSON_Checks_into){}/* CQT */
            aPrototype.pToStoreJSON_Checks_into = pToStoreJSON_Checks_into;





            var pToStoreJSON_Subs_into = function( theConfiguration, theToStoreJSON, theCommonObjects, theAlready) {

                if( !theConfiguration) {
                    return;
                }

                if( !theToStoreJSON) {
                    return;
                }

                if( !theConfiguration._v_SubConfigurations) {
                    return;
                }

                var aNumSubConfigurations = theConfiguration._v_SubConfigurations.length;
                if( !aNumSubConfigurations) {
                    return;
                }


                var someSubConfigurationStoreJSONs = [ ];

                for( var anSubConfigurationIdx=0; anSubConfigurationIdx < aNumSubConfigurations; anSubConfigurationIdx++) {
                    var anSubConfiguration = theConfiguration._v_SubConfigurations[ anSubConfigurationIdx];

                    var aSubConfigurationStoreJSON = anSubConfiguration.fToStoreJSON( theCommonObjects, theAlready);
                    if( aSubConfigurationStoreJSON) {
                        someSubConfigurationStoreJSONs.push( aSubConfigurationStoreJSON);
                    }
                }
                if( someSubConfigurationStoreJSONs && someSubConfigurationStoreJSONs.length) {
                    theToStoreJSON[ "subs"] = someSubConfigurationStoreJSONs;
                }
            };
            if( pToStoreJSON_Subs_into){}/* CQT */
            aPrototype.pToStoreJSON_Subs_into = pToStoreJSON_Subs_into;








            return aPrototype;

        })();


        var SpecParserConfig_Constructor = function( theIdentifier, theConfigSpec, theParentParser,
                                                     theSkipPopulation, theAbandonAtFirstSyntaxError) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ParmsParsers     = null;
            this._v_ImportParsers    = null;
            this._v_RequiredParsers  = null;
            this._v_ExportParsers    = null;
            this._v_CheckParsers     = null;

            this._pInit_SpecParserConfig( theIdentifier, theConfigSpec, theParentParser,
                theSkipPopulation, theAbandonAtFirstSyntaxError);
        };
        SpecParserConfig_Constructor.prototype = aSpecParserConfig_Prototype;
        aSpecParserConfig_Prototype.SpecParserConfig_Constructor = SpecParserConfig_Constructor;




        var SpecParserConfig_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = aSpecParserConfig_Prototype;
            this._v_Type = null;

            this._v_ParmsParsers     = null;
            this._v_ImportParsers    = null;
            this._v_RequiredParsers  = null;
            this._v_ExportParsers    = null;
            this._v_CheckParsers     = null;
        };
        SpecParserConfig_SuperPrototypeConstructor.prototype = aSpecParserConfig_Prototype;







        var aModule = {
            "SpecParserConfig_Prototype": aSpecParserConfig_Prototype,
            "SpecParserConfig_Constructor": SpecParserConfig_Constructor,
            "SpecParserConfig_SuperPrototypeConstructor": SpecParserConfig_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_parsedconfig   = require('../parsedconfig');
            var aM_configuration  = require('../configuration');

            var aM_specparser          = require('./specparser');
            var aM_parmsparser         = require('./parmsparser');
            var aM_defaultsparser      = require('./defaultsparser');
            var aM_specparser_import   = require('./specparser-import');
            var aM_specparser_export   = require('./specparser-export');
            var aM_specparser_check    = require('./specparser-check');

            return aMod_definer(
                aM_parsedconfig,
                aM_configuration,
                aM_specparser,
                aM_parmsparser,
                aM_defaultsparser,
                aM_specparser_import,
                aM_specparser_export,
                aM_specparser_check
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../parsedconfig",
            "../configuration",
            "./specparser",
            "./parmsparser",
            "./defaultsparser",
            "./specparser-import",
            "./specparser-export",
            "./specparser-check",
            "../../recorded-test",
            "../../async-test"], function (
            theM_parsedconfig,
            theM_configuration,
            theM_specparser,
            theM_parmsparser,
            theM_defaultsparser,
            theM_specparser_import,
            theM_specparser_export,
            theM_specparser_check) {
            return aMod_definer(
                theM_parsedconfig,
                theM_configuration,
                theM_specparser,
                theM_parmsparser,
                theM_defaultsparser,
                theM_specparser_import,
                theM_specparser_export,
                theM_specparser_check);
        });
    }


}());



