'use strict';

/*
 specparser-check.js
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

    var aMod_definer =function( theM_parsedconfig, theM_checkoutcome, theM_specparser) {

        var ModuleName     = "specparser-check";
        var ModulePackages = "common-test/configs/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}




        var aSpecParserCheck_Prototype = (function() {


            var aPrototype = new theM_specparser.SpecParser_SuperPrototypeConstructor();



            aPrototype._v_SuperPrototype = theM_specparser.SpecParser_Prototype;


            aPrototype._v_Type = "SpecParserCheck";






            var _pInit = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                this._pInit_SpecParserCheck( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_SpecParserCheck = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParser.apply( this, [ theIdentifier, theConfigSpec, theParentParser, theSkipPopulation]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                if( theParentParser && theParentParser._v_Title) {
                    this._v_Title = "SpecParserCheck-For-" + theParentParser._v_Title;
                }

            };
            if( _pInit_SpecParserCheck){}/* CQT */
            aPrototype._pInit_SpecParserCheck = _pInit_SpecParserCheck;

















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecParserCheck( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecParserCheck = function( theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SpecParser.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecParserCheck){}/* CQT */
            aPrototype._pRelease_SpecParserCheck = _pRelease_SpecParserCheck;









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

                this.pCleanUpTest_SpecParserCheck( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_SpecParserCheck= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_SpecParser.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_SpecParserCheck){}/* CQT */
            aPrototype.pCleanUpTest_SpecParserCheck = pCleanUpTest_SpecParserCheck;
















            var fSyntax = function() {

            };
            if( fSyntax){}/* CQT */
            aPrototype.fSyntax = fSyntax;









            var pInstantiateConfPopulated = function() {
                if( this._v_SkipPopulation) {
                    return;
                }


                this._v_ConfPopulated = new theM_checkoutcome.CheckOutcome_Constructor( this._v_ConfigSpec.name, this._v_Identifier);
                if( !this._v_ConfPopulated) {
                    this.pReport_Error( "!new theM_checkoutcome.CheckOutcome_Constructor( '" + this._v_ConfigSpec.name + "', this._v_Identifier)");
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
                        this._v_ParentParser._v_ConfPopulated.pAddCheck( this._v_ConfPopulated);
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

                if( !this.fParse_Check_fields()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                return aSucceeded;
            };
            if( fParse_own){}/* CQT */
            aPrototype.fParse_own = fParse_own;











            var fParse_Check_fields = function() {
                return this.fParse_withHandlers( ParseFieldsHandlersByJSONname_Check);
            };
            if( fParse_Check_fields){}/* CQT */
            aPrototype.fParse_Check_fields = fParse_Check_fields;









            var ParseFieldsHandlersByJSONname_Check = {};
            aPrototype.ParseFieldsHandlersByJSONname_Check = ParseFieldsHandlersByJSONname_Check;





            ParseFieldsHandlersByJSONname_Check[ theM_parsedconfig.JSONNAME_NAME] = function( theThis) {

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





            ParseFieldsHandlersByJSONname_Check[ theM_checkoutcome.JSONNAME_CHECKWHEN] = function( theThis) {

                var aCheckWhen = null;
                var aParsing_CheckWhen = theThis._v_ConfigSpec[ theM_checkoutcome.JSONNAME_CHECKWHEN];
                if( aParsing_CheckWhen) {
                    theThis.pJSONnameEncountered( theM_checkoutcome.JSONNAME_CHECKWHEN);
                    aCheckWhen = theThis.fParseEnum( aParsing_CheckWhen, theM_checkoutcome.CHECKWHENS);

                    if( aCheckWhen == null) {
                        theThis.pSyntax_Error( theM_checkoutcome.JSONNAME_CHECKWHEN, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE, theM_checkoutcome.CHECKWHENS);
                        return false;
                    }
                }
                if( aCheckWhen == null) {
                    theThis.pSyntax_Error( theM_checkoutcome.JSONNAME_CHECKWHEN, theThis.ERRORCONDITION_REQUIRED, null);
                    return false;
                }

                theThis.pPopulate_Field( "_v_CheckWhen", aCheckWhen, theM_checkoutcome.JSONNAME_CHECKWHEN);

                return true;
            };




            ParseFieldsHandlersByJSONname_Check[ theM_checkoutcome.JSONNAME_CHECKNEGATE] = function( theThis) {

                var aParsing_CheckNegate = theThis._v_ConfigSpec[ theM_checkoutcome.JSONNAME_CHECKNEGATE];
                if( !( typeof aParsing_CheckNegate == "undefined") && !( aParsing_CheckNegate == null)) {

                    theThis.pJSONnameEncountered( theM_checkoutcome.JSONNAME_CHECKNEGATE);

                    var aCheckNegate = theThis.fParseBoolean( aParsing_CheckNegate);
                    if( aCheckNegate == null) {
                        theThis.pSyntax_Error( theM_checkoutcome.JSONNAME_CHECKNEGATE, theThis.ERRORCONDITION_UNSUPPORTEDBOOLEANVALUE);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_CheckNegate", aCheckNegate, theM_checkoutcome.JSONNAME_CHECKNEGATE);
                }

                return true;
            };



            

            ParseFieldsHandlersByJSONname_Check[ theM_checkoutcome.JSONNAME_CHECKKIND] = function( theThis) {

                var aCheckKind = null;
                var aParsing_CheckKind = theThis._v_ConfigSpec[ theM_checkoutcome.JSONNAME_CHECKKIND];
                if( aParsing_CheckKind) {
                    theThis.pJSONnameEncountered( theM_checkoutcome.JSONNAME_CHECKKIND);
                    aCheckKind = theThis.fParseEnum( aParsing_CheckKind, theM_checkoutcome.CHECKKINDS);
                    if( aCheckKind == null) {
                        theThis.pSyntax_Error( theM_checkoutcome.JSONNAME_CHECKKIND, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE, theM_checkoutcome.CHECKKINDS);
                        return false;
                    }
                }
                if( aCheckKind == null) {
                    theThis.pSyntax_Error( theM_checkoutcome.JSONNAME_CHECKKIND, theThis.ERRORCONDITION_REQUIRED, null);
                    return false;
                }

                theThis.pPopulate_Field( "_v_CheckKind", aCheckKind, theM_checkoutcome.JSONNAME_CHECKKIND);

                return true;
            };





            ParseFieldsHandlersByJSONname_Check[ theM_checkoutcome.JSONNAME_CHECKORIGIN] = function( theThis) {

                var aCheckOrigin = null;
                var aParsing_CheckOrigin = theThis._v_ConfigSpec[ theM_checkoutcome.JSONNAME_CHECKORIGIN];
                if( aParsing_CheckOrigin) {

                    theThis.pJSONnameEncountered( theM_checkoutcome.JSONNAME_CHECKORIGIN);

                    aCheckOrigin = theThis.fParseEnum( aParsing_CheckOrigin, theM_checkoutcome.CHECKORIGINS);
                    if( aCheckOrigin == null) {
                        theThis.pSyntax_Error( theM_checkoutcome.JSONNAME_CHECKORIGIN, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE, theM_checkoutcome.CHECKORIGINS);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_CheckOrigin", aCheckOrigin, theM_checkoutcome.JSONNAME_CHECKORIGIN);
                }
                if( aCheckOrigin == null) {
                    theThis.pSyntax_Error( theM_checkoutcome.JSONNAME_CHECKORIGIN, theThis.ERRORCONDITION_REQUIRED);
                    return false;
                }

                return true;
            };





            ParseFieldsHandlersByJSONname_Check[ theM_checkoutcome.JSONNAME_CHECKSOURCE] = function( theThis) {

                var aCheckSource = null;
                var aParsing_CheckSource = theThis._v_ConfigSpec[ theM_checkoutcome.JSONNAME_CHECKSOURCE];
                if( aParsing_CheckSource) {
                    theThis.pJSONnameEncountered( theM_checkoutcome.JSONNAME_CHECKSOURCE);
                    aCheckSource = theThis.fParseString( aParsing_CheckSource);
                }
                if( aCheckSource == null) {
                    theThis.pSyntax_Error( theM_checkoutcome.JSONNAME_CHECKSOURCE, theThis.ERRORCONDITION_REQUIRED);
                    return false;
                }

                theThis.pPopulate_Field( "_v_CheckSource", aParsing_CheckSource, theM_checkoutcome.JSONNAME_CHECKSOURCE);

                return true;
            };








            /*
            ParseFieldsHandlersByJSONname_Check[ theM_checkoutcome.JSONNAME_CHECKVALUE] = function( theThis) {

                var aParsing_CheckValue = theThis._v_ConfigSpec[ theM_checkoutcome.JSONNAME_CHECKVALUE];
                if( !( typeof aParsing_CheckValue == "undefined")) {
                    theThis.pJSONnameEncountered( theM_checkoutcome.JSONNAME_CHECKVALUE);

                    theThis.pPopulate_Field( "_v_CheckValue", aParsing_CheckValue, theM_checkoutcome.JSONNAME_CHECKVALUE);
                }

                return true;
            };
            */






            ParseFieldsHandlersByJSONname_Check[ theM_checkoutcome.JSONNAME_CHECKVALUE] = function( theThis) {

                var aParsing_CheckValue = theThis._v_ConfigSpec[ theM_checkoutcome.JSONNAME_CHECKVALUE];
                if( typeof aParsing_CheckValue == "undefined") {
                    theThis.pSyntax_Error( theM_checkoutcome.JSONNAME_CHECKSOURCE, theThis.ERRORCONDITION_REQUIRED);
                    return false;
                }

                theThis.pJSONnameEncountered( theM_checkoutcome.JSONNAME_CHECKVALUE);

                theThis.pPopulate_Field( "_v_CheckValue", aParsing_CheckValue, theM_checkoutcome.JSONNAME_CHECKVALUE);

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

                this.pToStoreJSON_Populated_into( theM_checkoutcome.JSONNAMESBYFIELDNAME_CHECK, theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;








            return aPrototype;

        })();


        var SpecParserCheck_Constructor = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_SpecParserCheck( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
        };
        SpecParserCheck_Constructor.prototype = aSpecParserCheck_Prototype;





        var SpecParserCheck_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = aSpecParserCheck_Prototype;
            this._v_Type = null;
        };
        SpecParserCheck_SuperPrototypeConstructor.prototype = aSpecParserCheck_Prototype;







        var aModule = {
            "SpecParserCheck_Prototype": aSpecParserCheck_Prototype,
            "SpecParserCheck_Constructor": SpecParserCheck_Constructor,
            "SpecParserCheck_SuperPrototypeConstructor": SpecParserCheck_SuperPrototypeConstructor
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
            var aM_checkoutcome    = require('../checkoutcome');

            var aM_specparser    = require('./specparser');

            return aMod_definer( aM_parsedconfig, aM_checkoutcome, aM_specparser);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "../parsedconfig", "../checkoutcome", "./specparser"], function (
            theM_parsedconfig, theM_checkoutcome, theM_specparser) {
            return aMod_definer( theM_parsedconfig, theM_checkoutcome, theM_specparser);
        });
    }


}());