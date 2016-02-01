'use strict';

/*
 specparser-import.js
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

    var aMod_definer =function( theM_parsedconfig,
                                theM_importconfig,
                                theM_specparser) {

        var ModuleName     = "specparser-import";
        var ModulePackages = "common-test/configs/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var aSpecParserImport_Prototype = (function() {


            var aPrototype = new theM_specparser.SpecParser_SuperPrototypeConstructor();


            aPrototype._v_SuperPrototype = theM_specparser.SpecParser_Prototype;


            aPrototype._v_Type = "SpecParserImport";






            var _pInit = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                this._pInit_SpecParserImport( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_SpecParserImport = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParser.apply( this, [ theIdentifier, theConfigSpec, theParentParser, theSkipPopulation]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( theParentParser && theParentParser._v_Title) {
                    this._v_Title = "SpecParserImport-For-" + theParentParser._v_Title;
                }
            };
            if( _pInit_SpecParserImport){}/* CQT */
            aPrototype._pInit_SpecParserImport = _pInit_SpecParserImport;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecParserImport( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecParserImport = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SpecParser.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecParserImport){}/* CQT */
            aPrototype._pRelease_SpecParserImport = _pRelease_SpecParserImport;









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

                this.pCleanUpTest_SpecParserImport( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_SpecParserImport= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_SpecParser.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_SpecParserImport){}/* CQT */
            aPrototype.pCleanUpTest_SpecParserImport = pCleanUpTest_SpecParserImport;









            



            var fSyntax = function() {

            };
            if( fSyntax){}/* CQT */
            aPrototype.fSyntax = fSyntax;






            var pInstantiateConfPopulated = function() {
                if( this._v_SkipPopulation) {
                    return;
                }


                this._v_ConfPopulated = new theM_importconfig.ImportConfig_Constructor( this._v_ConfigSpec.name, this._v_Identifier);
                if( !this._v_ConfPopulated) {
                    this.pReport_Error( "!new theM_importconfig.ImportConfig_Constructor( '" + this._v_ConfigSpec.name + "', this._v_Identifier)");
                    return;
                }


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
                        this._v_ParentParser._v_ConfPopulated.pAddImport( this._v_ConfPopulated);
                    }
                }
            };
            if( pAddConfPopulatedToParentParserConfPopulated){}/* CQT */
            aPrototype.pAddConfPopulatedToParentParserConfPopulated = pAddConfPopulatedToParentParserConfPopulated;











            var fParse_own = function() {

                var aSucceeded = true;

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }

                if( !this.fParse_Import_fields()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                return aSucceeded;
            };
            if( fParse_own){}/* CQT */
            aPrototype.fParse_own = fParse_own;








            var fParse_Import_fields = function() {
                return this.fParse_withHandlers( ParseFieldsHandlersByJSONname_Import);
            };
            if( fParse_Import_fields){}/* CQT */
            aPrototype.fParse_Import_fields = fParse_Import_fields;









            var ParseFieldsHandlersByJSONname_Import = {};
            aPrototype.ParseFieldsHandlersByJSONname_Import = ParseFieldsHandlersByJSONname_Import;





            ParseFieldsHandlersByJSONname_Import[ theM_parsedconfig.JSONNAME_NAME] = function( theThis) {

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









            ParseFieldsHandlersByJSONname_Import[ theM_importconfig.JSONNAME_CONFIGURATIONPATH] = function( theThis) {

                var aConfigurationPath = null;
                var aParsing_ConfigurationPath = theThis._v_ConfigSpec[ theM_importconfig.JSONNAME_CONFIGURATIONPATH];
                if( aParsing_ConfigurationPath) {
                    theThis.pJSONnameEncountered( theM_importconfig.JSONNAME_CONFIGURATIONPATH);
                    aConfigurationPath = theThis.fParseString( aParsing_ConfigurationPath);
                }
                if( aConfigurationPath == null) {
                    theThis.pSyntax_Error( theM_importconfig.JSONNAME_CONFIGURATIONPATH, theThis.ERRORCONDITION_REQUIRED);
                    return false;
                }

                theThis.pPopulate_Field( "_v_ConfigurationPath", aParsing_ConfigurationPath, theM_importconfig.JSONNAME_CONFIGURATIONPATH);

                return true;
            };






            ParseFieldsHandlersByJSONname_Import[ theM_importconfig.JSONNAME_IMPORTMODE] = function( theThis) {

                var aParsing_ImportMode = theThis._v_ConfigSpec[ theM_importconfig.JSONNAME_IMPORTMODE];
                if( aParsing_ImportMode) {

                    theThis.pJSONnameEncountered( theM_importconfig.JSONNAME_IMPORTMODE);

                    var anImportMode = theThis.fParseEnum( aParsing_ImportMode, theM_importconfig.IMPORTMODES);
                    if( anImportMode == null) {
                        theThis.pSyntax_Error( theM_importconfig.JSONNAME_IMPORTMODE, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE, theM_importconfig.IMPORTMODES);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ImportMode", anImportMode, theM_importconfig.JSONNAME_IMPORTMODE);
                }

                return true;
            };














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

                this.pToStoreJSON_Populated_into( theM_importconfig.JSONNAMESBYFIELDNAME_IMPORT, theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;







            return aPrototype;

        })();


        var SpecParserImport_Constructor = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_SpecParserImport( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
        };
        SpecParserImport_Constructor.prototype = aSpecParserImport_Prototype;





        var SpecParserImport_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = aSpecParserImport_Prototype;
            this._v_Type = null;
        };
        SpecParserImport_SuperPrototypeConstructor.prototype = aSpecParserImport_Prototype;







        var aModule = {
            "SpecParserImport_Prototype": aSpecParserImport_Prototype,
            "SpecParserImport_Constructor": SpecParserImport_Constructor,
            "SpecParserImport_SuperPrototypeConstructor": SpecParserImport_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;



        return aModule;

    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_parsedconfig  = require('../parsedconfig');
            var aM_importconfig  = require('../importconfig');
            var aM_specparser    = require('./specparser');

            return aMod_definer(
                aM_parsedconfig,
                aM_importconfig,
                aM_specparser
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../parsedconfig",
            "../importconfig",
            "./specparser"
        ], function (
            theM_parsedconfig,
            theM_importconfig,
            theM_specparser
        ) {
            return aMod_definer(
                theM_parsedconfig,
                theM_importconfig,
                theM_specparser
            );
        });
    }


}());