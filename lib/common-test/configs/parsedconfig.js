'use strict';

/*
 parsedconfig.js
 Creado 201408122316
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

    var aMod_definer =function( theM_withid_test,
                                theM_identifier,
                                theM_overrider) {


        var ModuleName     = "parsedconfig";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGEXPORTTARGETS = false;
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




            theToInit.JSONNAME_NAME     = "name";

            theToInit.JSONNAMES_EXPORT = [
                theToInit.JSONNAME_NAME
            ];




            theToInit.PARSESTATUS_PENDING    = "PENDING";
            theToInit.PARSESTATUS_PARSING    = "PARSING";
            theToInit.PARSESTATUS_TERMINATED = "TERMINATED";
            theToInit.PARSESTATUSALL = [
                theToInit.PARSESTATUS_PENDING,
                theToInit.PARSESTATUS_PARSING,
                theToInit.PARSESTATUS_TERMINATED
            ];






            theToInit.MERGEMODE_STATIC             = "STATIC";
            /* theToInit.MERGEMODE_STATIC_ADDONLY     = "STATIC_ADDONLY";
            theToInit.MERGEMODE_STATIC_REMOVEONLY  = "STATIC_REMOVEONLY";
            theToInit.MERGEMODE_DYNAMIC            = "DYNAMIC";
            theToInit.MERGEMODE_DYNAMIC_ADDONLY    = "DYNAMIC_ADDONLY";
            theToInit.MERGEMODE_DYNAMIC_REMOVEONLY = "DYNAMIC_REMOVEONLY";
            theToInit.MERGEMODE_PROMPT             = "PROMPT";
            theToInit.MERGEMODE_ARGUMENTS          = "ARGUMENTS";
            */
            theToInit.MERGEMODEALL = [
                theToInit.MERGEMODE_STATIC /*,
                theToInit.MERGEMODE_STATIC_ADDONLY,
                theToInit.MERGEMODE_STATIC_REMOVEONLY,
                theToInit.MERGEMODE_DYNAMIC,
                theToInit.MERGEMODE_DYNAMIC_ADDONLY,
                theToInit.MERGEMODE_DYNAMIC_REMOVEONLY,
                theToInit.MERGEMODE_PROMPT,
                theToInit.MERGEMODE_ARGUMENTS
                */
            ];





            theToInit.POPULABLEFIELDS = [
                "_v_Title"
            ];




            theToInit.RELATIONFIELDS = [
            ];



            theToInit.JSONNAMESBYFIELDNAME_PARSEDCONFIG = {
                "_v_Title":  theToInit.JSONNAME_NAME
            };




            theToInit.REQUIREDJSONNAMES = [];




            theToInit.QUERY_FIELDS_SOME = [
                "_v_Runnable",
                "_v_InheritMode",
                "_v_ScheduleSubs"
            ];

            theToInit.QUERY_FIELDS_EXPECTATION = [
                "_v_ExpectSuccess",
                "_v_ExpectedEvent",
                "_v_ExpectedException"
            ];

            theToInit.QUERY_FIELDS_TORUN = [
                "_v_ConstructorModuleName",
                "_v_ConstructorName",
                "_v_MethodName"
            ];

            theToInit.QUERY_FIELDS_FORCEEEROR = [
                "_v_ForceError",
                "_v_ForceErrorDetail",
                "_v_ForceErrorKind",
                "_v_ForceErrorWhen"
            ];

            theToInit.QUERY_FIELDS_ALL = [ ];
            Array.prototype.push.apply( theToInit.QUERY_FIELDS_ALL, theToInit.QUERY_FIELDS_SOME);
            Array.prototype.push.apply( theToInit.QUERY_FIELDS_ALL, theToInit.QUERY_FIELDS_EXPECTATION);
            Array.prototype.push.apply( theToInit.QUERY_FIELDS_ALL, theToInit.QUERY_FIELDS_TORUN);
            Array.prototype.push.apply( theToInit.QUERY_FIELDS_ALL, theToInit.QUERY_FIELDS_FORCEEEROR);



            theToInit.ALL_FIELDS = [ "_v_Title"];
            Array.prototype.push.apply( theToInit.ALL_FIELDS, theToInit.QUERY_FIELDS_ALL);
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








        var aParsedConfig_Prototype = (function() {


            var aPrototype = new theM_withid_test.WithIdTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;


            aPrototype._v_Type = "ParsedConfig";


            aPrototype._v_Identifier = null;
            aPrototype._v_IdentifierIsOwn = null;


            aPrototype._v_OwnerConfiguration = null;

            aPrototype._v_Parser  = null;

            aPrototype._v_MembersPopulatedByParser = null;
            aPrototype._v_JSONnamesParsed          = null;


            var _pInit = function( theTitle, theIdentifier) {

                this._pInit_ParsedConfig( theTitle, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;





            var _pInit_ParsedConfig = function( theTitle, theIdentifier) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_WithId.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Identifier = theIdentifier;
                this._v_IdentifierIsOwn = false;
                if( !this._v_Identifier) {
                    this._v_IdentifierIsOwn = true;
                    this._v_Identifier = new theM_identifier.IdentifierTest_Constructor( {});
                }

                this._v_Id = this.fReserveConfigId();

                this._v_OwnerConfiguration = [ ];

                this._v_Parser  = null;

                this._v_MembersPopulatedByParser = [ ];
                this._v_JSONnamesParsed          = [ ];

                if( theTitle) {
                    this._v_MembersPopulatedByParser.push( "_v_Title");
                    this._v_JSONnamesParsed.push( this.JSONNAME_NAME);
                }

                if(this. _v_OwnerConfiguration){}/* CQT */
            };
            if( _pInit_ParsedConfig){}/* CQT */
            aPrototype._pInit_ParsedConfig = _pInit_ParsedConfig;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ParsedConfig( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ParsedConfig = function( theReleaseParms, theReleaseDone) {

                if( this._v_Identifier) {
                    if( this._v_IdentifierIsOwn) {
                        if( typeof this._v_Identifier._pRelease == "function") {
                            this._v_Identifier._pRelease( theReleaseParms, theReleaseDone);
                        }
                    }
                }
                this._v_Identifier = undefined;
                this._v_IdentifierIsOwn = undefined;

                this._v_OwnerConfiguration = undefined;

                if( this._v_Parser) {
                    if( typeof this._v_Parser._pRelease == "function") {
                        this._v_Parser._pRelease( theReleaseParms, theReleaseDone);
                    }
                }

                this._v_Parser  = undefined;

                this._v_MembersPopulatedByParser = undefined;
                this._v_JSONnamesParsed          = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_WithId.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ParsedConfig){}/* CQT */
            aPrototype._pRelease_ParsedConfig = _pRelease_ParsedConfig;










            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);


                if( this._v_Identifier) {
                    if( this._v_IdentifierIsOwn) {
                        if( theReleaseChildren.indexOf( this._v_Identifier) < 0) {
                            theReleaseChildren.push( this._v_Identifier);
                            if( typeof this._v_Identifier._pReleaseChildrenInto == "function") {
                                this._v_Identifier._pReleaseChildrenInto( theReleaseChildren);
                            }
                        }
                    }
                }


                if( this._v_Parser) {
                    if( theReleaseChildren.indexOf( this._v_Parser) < 0) {
                        theReleaseChildren.push( this._v_Parser);
                        if( typeof this._v_Parser._pReleaseChildrenInto == "function") {
                            this._v_Parser._pReleaseChildrenInto( theReleaseChildren);
                        }
                    }
                }
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

                this.pCleanUpTest_ParsedConfig( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ParsedConfig= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_MembersPopulatedByParser = undefined;
                    this._v_JSONnamesParsed          = undefined;
                }


                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_CONFIGS)) {

                    if( this._v_Parser) {
                        if( typeof this._v_Parser.pCleanUpTest == "function") {
                            this._v_Parser.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                        }
                    }
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_WithId.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ParsedConfig){}/* CQT */
            aPrototype.pCleanUpTest_ParsedConfig = pCleanUpTest_ParsedConfig;












            var fReserveConfigId = function() {

                if( !this._v_Identifier) {
                    return null;
                }

                return  this._v_Identifier.fReserveConfigId();
            };
            if( fReserveConfigId){}/* CQT */
            aPrototype.fReserveConfigId = fReserveConfigId;






            var pFromParser = function( theParser) {
                if( !theParser) {
                    return;
                }

                if( this._v_Parser) {
                    console.log( "ALREADY KNOWS A PARSER");
                    return;
                }
                this._v_Parser = theParser;
            };
            if( pFromParser){}/* CQT */
            aPrototype.pFromParser = pFromParser;





            var pJSONnameEncounteredByParser = function( theJSONname) {
                if( !theJSONname) {
                    return;
                }

                if( this._v_JSONnamesParsed.indexOf( theJSONname) < 0) {
                    this._v_JSONnamesParsed.push( theJSONname);
                }
            };
            if( pJSONnameEncounteredByParser){}/* CQT */
            aPrototype.pJSONnameEncounteredByParser = pJSONnameEncounteredByParser;






            var fHasParserEncounteredJSONname = function( theJSONname) {
                if( !theJSONname) {
                    return false;
                }

                return this._v_JSONnamesParsed.indexOf( theJSONname) >= 0;
            };
            if( fHasParserEncounteredJSONname){}/* CQT */
            aPrototype.fHasParserEncounteredJSONname = fHasParserEncounteredJSONname;







            var pPopulateFieldFromParser = function( theFieldName, theValue) {
                if( !theFieldName) {
                    return;
                }

                if( this.POPULABLEFIELDS.indexOf( theFieldName) < 0) {
                    return;
                }

                if( this._v_MembersPopulatedByParser.indexOf( theFieldName) < 0) {
                    this._v_MembersPopulatedByParser.push( theFieldName);
                }

                this[ theFieldName] = theValue;
            };
            if( pPopulateFieldFromParser){}/* CQT */
            aPrototype.pPopulateFieldFromParser = pPopulateFieldFromParser;





            var pRelationPopulatedFromParser = function( theFieldName) {
                if( !theFieldName) {
                    return;
                }

                if( this.RELATIONFIELDS.indexOf( theFieldName) < 0) {
                    return;
                }

                if( this._v_MembersPopulatedByParser.indexOf( theFieldName) < 0) {
                    this._v_MembersPopulatedByParser.push( theFieldName);
                }
            };
            if( pRelationPopulatedFromParser){}/* CQT */
            aPrototype.pRelationPopulatedFromParser = pRelationPopulatedFromParser;




            var fIsFieldPopulatedFromParser = function( theFieldName) {
                if( !theFieldName) {
                    return false;
                }

                var aIsFieldPopulated = this._v_MembersPopulatedByParser.indexOf( theFieldName) >= 0;
                if( aIsFieldPopulated){}/* CQT */
                return aIsFieldPopulated;
            };
            if( fIsFieldPopulatedFromParser){}/* CQT */
            aPrototype.fIsFieldPopulatedFromParser = fIsFieldPopulatedFromParser;




            var fFieldsPopulatedFromParser = function() {

                var someFields = this._v_MembersPopulatedByParser;
                if( !someFields) {
                    return [];
                }

                return someFields.slice();
            };
            if( fFieldsPopulatedFromParser){}/* CQT */
            aPrototype.fFieldsPopulatedFromParser = fFieldsPopulatedFromParser;







            var fToStoreJSON_identifying = function() {

                var aToStoreJSON =  {
                    "type": this._v_Type,
                    "id": this._v_Id,
                    "name": this._v_Title
                };
                if( aToStoreJSON){}/* CQT */

                return aToStoreJSON;
            };
            if( fToStoreJSON_identifying){}/* CQT */
            aPrototype.fToStoreJSON_identifying = fToStoreJSON_identifying;







            return aPrototype;

        })();


        var ParsedConfig_Constructor = function( theTitle, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Identifier = null;
            this._v_IdentifierIsOwn = null;

            this._v_OwnerConfiguration = null;

            this._v_Parser  = null;

            this._v_MembersPopulatedByParser = null;
            this._v_JSONnamesParsed          = null;

            this._pInit_ParsedConfig( theTitle, theIdentifier);
        };
        ParsedConfig_Constructor.prototype = aParsedConfig_Prototype;





        var ParsedConfig_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;

            this._v_Prototype = aParsedConfig_Prototype;
            this._v_Type = null;

            this._v_Identifier = null;
            this._v_IdentifierIsOwn = null;

            this._v_OwnerConfiguration = null;

            this._v_Parser  = null;

            this._v_MembersPopulatedByParser = null;
            this._v_JSONnamesParsed          = null;
        };
        ParsedConfig_SuperPrototypeConstructor.prototype = aParsedConfig_Prototype;



        var aModule = {
            "ParsedConfig_Prototype": aParsedConfig_Prototype,
            "ParsedConfig_Constructor": ParsedConfig_Constructor,
            "ParsedConfig_SuperPrototypeConstructor": ParsedConfig_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);


        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_withid_test   = require('../withid-test');
            var aM_identifier    = require('../identifier-test');
            var aM_overrider     = require('../overrider');

            return aMod_definer( aM_withid_test, aM_identifier, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../withid-test",
            "../identifier-test",
            "../overrider"
        ], function (
                theM_withid_test,
                theM_identifier,
                theM_overrider
            ) {
            return aMod_definer(
                theM_withid_test,
                theM_identifier,
                theM_overrider
            );
        });
    }


}());