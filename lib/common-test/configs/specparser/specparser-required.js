'use strict';

/*
 specparser-required.js
 Created 201409051530
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
        theM_required,
        theM_specparser,
        theM_specparser_supplier_config) {



        var ModuleName     = "specparser-config";
        var ModulePackages = "common-test/configs/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}





        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }



            theToInit.PARSESTATUS_PENDING             = "PENDING";
            theToInit.PARSESTATUS_PARSING             = "PARSING";
            theToInit.PARSESTATUS_PARSINGSUPPLIERS    = "PARSINGSUPPLIERS";
            theToInit.PARSESTATUS_TERMINATEDSUPPLIERS = "TERMINATEDSUPPLIERS";

            theToInit.PARSESTATUSALL = [
                theToInit.PARSESTATUS_PENDING,
                theToInit.PARSESTATUS_PARSING,
                theToInit.PARSESTATUS_PARSINGSUPPLIERS,
                theToInit.PARSESTATUS_TERMINATEDSUPPLIERS

            ];

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









        var aSpecParserRequired_Prototype = (function() {


            var aPrototype = new theM_specparser.SpecParser_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_specparser.SpecParser_Prototype;


            aPrototype._v_Type = "SpecParserRequired";


            aPrototype._v_SupplierParsers   = null;






            var _pInit = function( theIdentifier, theConfigSpec, theParentParser,
                                   theSkipPopulation, theAbandonAtFirstSyntaxError) {

                this._pInit_SpecParserRequired( theIdentifier, theConfigSpec, theParentParser,
                    theSkipPopulation, theAbandonAtFirstSyntaxError);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_SpecParserRequired = function( theIdentifier, theConfigSpec, theParentParser,
                                                      theSkipPopulation, theAbandonAtFirstSyntaxError) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParser.apply( this,
                    [ theIdentifier, theConfigSpec, theParentParser, theSkipPopulation, theAbandonAtFirstSyntaxError]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( theParentParser && theParentParser._v_Title) {
                    this._v_Title = "SpecParserRequired-For-" + theParentParser._v_Title;
                }

                this._v_SupplierParsers   = [ ];
            };
            if( _pInit_SpecParserRequired){}/* CQT */
            aPrototype._pInit_SpecParserRequired = _pInit_SpecParserRequired;













            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecParserRequired( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecParserRequired = function( theReleaseParms, theReleaseDone) {

                if( this._v_SupplierParsers) {
                    var aNumSupplierParsers = this._v_SupplierParsers.length;
                    if( aNumSupplierParsers) {
                        for( var aSupplierParserIdx=0; aSupplierParserIdx < aNumSupplierParsers; aSupplierParserIdx++) {
                            var aSupplierParser = this._v_SupplierParsers[ aSupplierParserIdx];
                            if( aSupplierParser) {
                                if( typeof aSupplierParser._pRelease == "function") {
                                    aSupplierParser._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_SupplierParsers   = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SpecParser.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecParserRequired){}/* CQT */
            aPrototype._pRelease_SpecParserRequired = _pRelease_SpecParserRequired;









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

                this.pCleanUpTest_SpecParserRequired( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_SpecParserRequired= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {

                    if( this._v_SupplierParsers) {
                        var aNumSupplierParsers = this._v_SupplierParsers.length;
                        if( aNumSupplierParsers) {
                            for( var aSupplierParserIdx=0; aSupplierParserIdx < aNumSupplierParsers; aSupplierParserIdx++) {
                                var aSupplierParser = this._v_SupplierParsers[ aSupplierParserIdx];
                                if( aSupplierParser) {
                                    if( typeof aSupplierParser.pCleanUpTest == "function") {
                                        aSupplierParser.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_SpecParser.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_SpecParserRequired){}/* CQT */
            aPrototype.pCleanUpTest_SpecParserRequired = pCleanUpTest_SpecParserRequired;











            var fSyntax = function() {

            };
            if( fSyntax){}/* CQT */
            aPrototype.fSyntax = fSyntax;






            var pInstantiateConfPopulated = function() {
                if( this._v_SkipPopulation) {
                    return;
                }


                this._v_ConfPopulated = new theM_required.Required_Constructor( this._v_ConfigSpec.name, this._v_Identifier);
                if( !this._v_ConfPopulated) {
                    this.pReport_Error( "new theM_required.Required_Constructor( this._v_Identifier)");
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
                        this._v_ParentParser._v_ConfPopulated.pAddRequired( this._v_ConfPopulated);
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

                if( !this.fParse_Required_fields()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                if( !this.fParse_Suppliers()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                return aSucceeded;
            };
            if( fParse_own){}/* CQT */
            aPrototype.fParse_own = fParse_own;











            var fParse_Required_fields = function() {
                return this.fParse_withHandlers( ParseFieldsHandlersByJSONname_Required);
            };
            if( fParse_Required_fields){}/* CQT */
            aPrototype.fParse_Required_fields = fParse_Required_fields;










            var ParseFieldsHandlersByJSONname_Required = {};
            aPrototype.ParseFieldsHandlersByJSONname_Required = ParseFieldsHandlersByJSONname_Required;





            ParseFieldsHandlersByJSONname_Required[ theM_required.JSONNAME_NAME] = function( theThis) {

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







            ParseFieldsHandlersByJSONname_Required[ theM_required.JSONNAME_PARMNAMES] = function( theThis) {

                var someParmNames = null;
                var aParsing_someParmNames = theThis._v_ConfigSpec[ theM_required.JSONNAME_PARMNAMES];
                if( aParsing_someParmNames) {
                    theThis.pJSONnameEncountered( theM_required.JSONNAME_PARMNAMES);
                    someParmNames = theThis.fParseStringsList( aParsing_someParmNames);
                }
                if( ( someParmNames == null) || !someParmNames.length) {
                    theThis.pSyntax_Error( theM_required.JSONNAME_PARMNAMES, theThis.ERRORCONDITION_REQUIRED);
                    return false;
                }

                theThis.pPopulate_Field( "_v_ParmNames", someParmNames, theM_required.ERRORCONDITION_REQUIRED);

                return true;
            };








            var fParse_Suppliers = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec");
                    return false;
                }

                if( !( typeof this._v_ConfigSpec == "object")) {
                    this.pSyntax_Error( "", this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var someSuppliers = this._v_ConfigSpec[ theM_required.JSONNAME_SUPPLIERS];
                if( typeof someSuppliers == "undefined") {
                    return true;
                }

                this.pJSONnameEncountered( theM_required.JSONNAME_SUPPLIERS);
                if( this._v_ConfPopulated) {
                    this._v_ConfPopulated.pRelationPopulatedFromParser( "_v_Suppliers");
                }

                if( !someSuppliers) {
                    return true;
                }

                var aNumSuppliers = someSuppliers.length;
                if( !aNumSuppliers) {
                    return true;
                }


                if( !( typeof someSuppliers == "object")) {
                    this.pSyntax_Error( theM_required.JSONNAME_SUPPLIERS, this.ERRORCONDITION_NOTOBJECT);
                    return false;
                }


                var aSucceeded = true;

                this._v_ParseStatus = this.PARSESTATUS_PARSINGSUPPLIERS;
                this.pReport_ParseStatus( this._v_ParseStatus);

                try {


                    for( var anSupplierIdx = 0; anSupplierIdx < aNumSuppliers; anSupplierIdx++) {

                        var aSupplierSpec = someSuppliers[ anSupplierIdx];
                        if( aSupplierSpec) {
                            var anSupplierName = aSupplierSpec[ theM_parsedconfig.JSONNAME_NAME];
                            if( !anSupplierName) {
                                this.pSyntax_Error( theM_required.JSONNAME_SUPPLIERS + "." + theM_parsedconfig.JSONNAME_NAME, this.ERRORCONDITION_REQUIRED);
                                if( this._v_AbandonAtFirstSyntaxError) {
                                    return false;
                                }
                                else {
                                    aSucceeded = false;
                                }
                            }
                            else {
                                var aSupplier_Parser = new theM_specparser_supplier_config.SpecParserSupplierConfig_Constructor(
                                    this._v_Identifier, aSupplierSpec, this, this._v_SkipPopulation);

                                if( !aSupplier_Parser) {
                                    this.pReport_Error( "!new theM_specparser_supplier_config.SpecParserSupplierConfig_Constructor()");
                                    return false;
                                }
                                else {
                                    this._v_SupplierParsers.push( aSupplier_Parser);


                                    var aParseSupplierSucceeded = aSupplier_Parser.fParseComplete();
                                    if( !aParseSupplierSucceeded) {
                                        this.pReport_Error( "!aParseSupplierSucceeded for supplier [" + anSupplierIdx + "]");
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
                    this._v_ParseStatus = this.PARSESTATUS_TERMINATEDSUPPLIERS;
                    this.pReport_ParseStatus( this._v_ParseStatus);
                }

                return aSucceeded;
            };
            if( fParse_Suppliers){}/* CQT */
            aPrototype.fParse_Suppliers = fParse_Suppliers;










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


                this.pToStoreJSON_Populated_into( theM_required.JSONNAMESBYFIELDNAME_REQUIRED, theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                this.pToStoreJSON_Suppliers_into(   theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;










            var pToStoreJSON_Suppliers_into = function( theConfiguration, theToStoreJSON, theCommonObjects, theAlready) {
                if( !theConfiguration) {
                    return;
                }

                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */


                if( !theToStoreJSON) {
                    return;
                }

                if( !theConfiguration._v_Suppliers) {
                    return;
                }

                var aNumSuppliers = theConfiguration._v_Suppliers.length;
                if( !aNumSuppliers) {
                    return;
                }


                var someSupplierStoreJSONs = [ ];

                for( var anSupplierIdx=0; anSupplierIdx < aNumSuppliers; anSupplierIdx++) {
                    var anSupplier = theConfiguration._v_Suppliers[ anSupplierIdx];

                    var anSupplierStoreJSON = anSupplier.fToStoreJSON( theCommonObjects, theAlready);
                    if( anSupplierStoreJSON) {
                        someSupplierStoreJSONs.push( anSupplierStoreJSON);
                    }
                }
                if( someSupplierStoreJSONs && someSupplierStoreJSONs.length) {
                    theToStoreJSON[ theM_required.JSONNAME_SUPPLIERS] = someSupplierStoreJSONs;
                }
            };
            if( pToStoreJSON_Suppliers_into){}/* CQT */
            aPrototype.pToStoreJSON_Suppliers_into = pToStoreJSON_Suppliers_into;








            return aPrototype;

        })();








        var SpecParserRequired_Constructor = function( theIdentifier, theConfigSpec, theParentParser,
                                                     theSkipPopulation, theAbandonAtFirstSyntaxError) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_SupplierParsers   = null;

            this._pInit_SpecParserRequired( theIdentifier, theConfigSpec, theParentParser,
                theSkipPopulation, theAbandonAtFirstSyntaxError);
        };
        SpecParserRequired_Constructor.prototype = aSpecParserRequired_Prototype;
        aSpecParserRequired_Prototype.SpecParserRequired_Constructor = SpecParserRequired_Constructor;







        var SpecParserRequired_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = aSpecParserRequired_Prototype;
            this._v_Type = null;

            this._v_SupplierParsers   = null;
        };
        SpecParserRequired_SuperPrototypeConstructor.prototype = aSpecParserRequired_Prototype;







        var aModule = {
            "SpecParserRequired_Prototype": aSpecParserRequired_Prototype,
            "SpecParserRequired_Constructor": SpecParserRequired_Constructor,
            "SpecParserRequired_SuperPrototypeConstructor": SpecParserRequired_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_parsedconfig   = require('../parsedconfig');
            var aM_required        = require('../required');

            var aM_specparser       = require('./specparser');
            var aM_specparser_supplier_config    = require('./specparser-supplier-config');

            return aMod_definer(
                aM_parsedconfig,
                aM_required,
                aM_specparser,
                aM_specparser_supplier_config
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../parsedconfig",
            "../required",
            "./specparser",
            "./specparser-supplier-config"], function (
            theM_parsedconfig,
            theM_required,
            theM_specparser,
            theM_specparser_supplier_config) {
            return aMod_definer(
                theM_parsedconfig,
                theM_required,
                theM_specparser,
                theM_specparser_supplier_config);
        });
    }


}());
