'use strict';

/*
 specparser-export.js
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

    var aMod_definer =function( theM_parsedconfig,
                                theM_exportparm,
                                theM_specparser) {


        var ModuleName     = "specparser-export";
        var ModulePackages = "common-test/configs/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var gM_exportparm = null;

        var fgM_exportparm = function() {
            if( !gM_exportparm || !gM_exportparm.ExportParm_Constructor) {
                gM_exportparm = require( "../exportparm");
            }
            return gM_exportparm;

        };








        var aSpecParserExport_Prototype = (function() {


            var aPrototype = new theM_specparser.SpecParser_SuperPrototypeConstructor();


            aPrototype._v_SuperPrototype = theM_specparser.SpecParser_Prototype;


            aPrototype._v_Type = "SpecParserExport";


            /* **************
               ACV OJO 20150402127 Duplicate declarations removed. Now it seems to work nicely.
               ACV OJO 201409290559 Declarations where Duplicated from exportparm.js to aoid injecting the dependency,
               which arrives empty when launched as launchall.js on the alllaunchables.json
               
             */


            var _pInit = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                this._pInit_SpecParserExport( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_SpecParserExport = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParser.apply( this, [ theIdentifier, theConfigSpec, theParentParser, theSkipPopulation]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( theParentParser && theParentParser._v_Title) {
                    this._v_Title = "SpecParserExport-For-" + theParentParser._v_Title;
                }

            };
            if( _pInit_SpecParserExport){}/* CQT */
            aPrototype._pInit_SpecParserExport = _pInit_SpecParserExport;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecParserExport( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecParserExport = function( theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SpecParser.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecParserExport){}/* CQT */
            aPrototype._pRelease_SpecParserExport = _pRelease_SpecParserExport;









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

                this.pCleanUpTest_SpecParserExport( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_SpecParserExport= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_SpecParser.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_SpecParserExport){}/* CQT */
            aPrototype.pCleanUpTest_SpecParserExport = pCleanUpTest_SpecParserExport;








            



            var fSyntax = function() {

            };
            if( fSyntax){}/* CQT */
            aPrototype.fSyntax = fSyntax;









            var pInstantiateConfPopulated = function() {
                if( this._v_SkipPopulation) {
                    return;
                }


                var aM_exportparm = fgM_exportparm();

                this._v_ConfPopulated = new aM_exportparm.ExportParm_Constructor( this._v_ConfigSpec.name, this._v_Identifier);

                if( !this._v_ConfPopulated) {
                    this.pReport_Error( "!new theM_exportparm.ExportParm_Constructor( '" + this._v_ConfigSpec.name + "', this._v_Identifier)");
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
                        this._v_ParentParser._v_ConfPopulated.pAddExport( this._v_ConfPopulated);
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

                if( !this.fParse_Export_fields()) {
                    if( this._v_AbandonAtFirstSyntaxError) {
                        return false;
                    }
                    aSucceeded = false;
                }

                return aSucceeded;
            };
            if( fParse_own){}/* CQT */
            aPrototype.fParse_own = fParse_own;











            var fParse_Export_fields = function() {
                if( !this.fParse_withHandlers( ParseFieldsHandlersByJSONname_Export)) {
                    return false;
                }


                if( this.fHasEncounteredJSONname( theM_exportparm.JSONNAME_EXPORTORIGIN)) {

                    if( this._v_ConfPopulated) {
                        var anExportOrigin = this._v_ConfPopulated._v_ExportOrigin;
                        if( anExportOrigin == theM_exportparm.EXPORTORIGIN_TEST) {

                            if( this.fHasEncounteredJSONname( theM_exportparm.JSONNAME_EXPORTWHEN)) {

                                var anExportWhen = this._v_ConfPopulated._v_ExportWhen;
                                if( anExportWhen == theM_exportparm.EXPORTWHEN_PARSE) {

                                    this.pSyntax_Error( theM_parsedconfig.JSONNAME_NAME, this.ERRORCONDITION_INCOMPATIBLE,
                                        "exportOrigin: " + anExportOrigin + " exportWhen:" + anExportWhen
                                    );

                                    return false;
                                }
                            }
                        }
                    }
                }

                return true;
            };
            if( fParse_Export_fields){}/* CQT */
            aPrototype.fParse_Export_fields = fParse_Export_fields;









            var ParseFieldsHandlersByJSONname_Export = {};
            aPrototype.ParseFieldsHandlersByJSONname_Export = ParseFieldsHandlersByJSONname_Export;





            ParseFieldsHandlersByJSONname_Export[ theM_parsedconfig.JSONNAME_NAME] = function( theThis) {

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









            ParseFieldsHandlersByJSONname_Export[ theM_exportparm.JSONNAME_EXPORTAS] = function( theThis) {

                var aExportAs = null;
                var aParsing_ExportAs = theThis._v_ConfigSpec[ theM_exportparm.JSONNAME_EXPORTAS];
                if( aParsing_ExportAs) {
                    theThis.pJSONnameEncountered( theM_exportparm.JSONNAME_EXPORTAS);
                    aExportAs = theThis.fParseString( aParsing_ExportAs);
                }
                if( aExportAs == null) {
                    theThis.pSyntax_Error( theM_exportparm.JSONNAME_EXPORTAS, theThis.ERRORCONDITION_REQUIRED);
                    return false;
                }

                theThis.pPopulate_Field( "_v_ExportAs", aParsing_ExportAs, theM_exportparm.JSONNAME_EXPORTAS);

                return true;
            };




            ParseFieldsHandlersByJSONname_Export[ theM_exportparm.JSONNAME_EXPORTORIGIN] = function( theThis) {

                var anExportOrigin = null;

                var aParsing_ExportOrigin = theThis._v_ConfigSpec[ theM_exportparm.JSONNAME_EXPORTORIGIN];
                if( aParsing_ExportOrigin) {

                    theThis.pJSONnameEncountered( theM_exportparm.JSONNAME_EXPORTORIGIN);

                    anExportOrigin = theThis.fParseEnum( aParsing_ExportOrigin,theM_exportparm.EXPORTORIGINS);
                    if( anExportOrigin == null) {
                        theThis.pSyntax_Error( theM_exportparm.JSONNAME_EXPORTORIGIN, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE,theM_exportparm.EXPORTORIGINS);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ExportOrigin", anExportOrigin, theM_exportparm.JSONNAME_EXPORTORIGIN);
                }
                if( anExportOrigin == null) {
                    theThis.pSyntax_Error( theM_exportparm.JSONNAME_EXPORTAS, theThis.ERRORCONDITION_REQUIRED);
                    return false;
                }

                return true;
            };





            ParseFieldsHandlersByJSONname_Export[ theM_exportparm.JSONNAME_EXPORTSOURCE] = function( theThis) {

                var aExportSource = null;
                var aParsing_ExportSource = theThis._v_ConfigSpec[ theM_exportparm.JSONNAME_EXPORTSOURCE];
                if( aParsing_ExportSource) {
                    theThis.pJSONnameEncountered( theM_exportparm.JSONNAME_EXPORTSOURCE);
                    aExportSource = theThis.fParseString( aParsing_ExportSource);
                }
                if( aExportSource == null) {
                    theThis.pSyntax_Error( theM_exportparm.JSONNAME_EXPORTSOURCE, theThis.ERRORCONDITION_REQUIRED);
                    return false;
                }

                theThis.pPopulate_Field( "_v_ExportSource", aParsing_ExportSource, theM_exportparm.JSONNAME_EXPORTSOURCE);

                return true;
            };





            ParseFieldsHandlersByJSONname_Export[ theM_exportparm.JSONNAME_EXPORTTARGET] = function( theThis) {

                var aExportTarget = null;
                var aParsing_ExportTarget = theThis._v_ConfigSpec[ theM_exportparm.JSONNAME_EXPORTTARGET];
                if( aParsing_ExportTarget) {
                    theThis.pJSONnameEncountered( theM_exportparm.JSONNAME_EXPORTTARGET);
                    aExportTarget = theThis.fParseString( aParsing_ExportTarget);
                }
                if( !( aExportTarget == null)) {
                    theThis.pPopulate_Field( "_v_ExportTarget", aParsing_ExportTarget, theM_exportparm.JSONNAME_EXPORTTARGET);
                }

                return true;
            };





            ParseFieldsHandlersByJSONname_Export[ theM_exportparm.JSONNAME_EXPORTWHEN] = function( theThis) {

                var aParsing_ExportWhen = theThis._v_ConfigSpec[ theM_exportparm.JSONNAME_EXPORTWHEN];
                if( aParsing_ExportWhen) {

                    theThis.pJSONnameEncountered( theM_exportparm.JSONNAME_EXPORTWHEN);

                    var anExportWhen = theThis.fParseEnum( aParsing_ExportWhen,theM_exportparm.EXPORTWHENS);
                    if( anExportWhen == null) {
                        theThis.pSyntax_Error( theM_exportparm.JSONNAME_EXPORTWHEN, theThis.ERRORCONDITION_UNSUPPORTEDENUMVALUE,theM_exportparm.EXPORTWHENS);
                        return false;
                    }

                    theThis.pPopulate_Field( "_v_ExportWhen", anExportWhen, theM_exportparm.JSONNAME_EXPORTWHEN);
                }

                return true;
            };






            ParseFieldsHandlersByJSONname_Export[ theM_exportparm.JSONNAME_EXPORTCOMPUTATION] = function( theThis) {

                var anExportComputation = null;
                var aParsing_ExportComputation = theThis._v_ConfigSpec[ theM_exportparm.JSONNAME_EXPORTCOMPUTATION];
                if( aParsing_ExportComputation) {
                    theThis.pJSONnameEncountered( theM_exportparm.JSONNAME_EXPORTCOMPUTATION);
                    anExportComputation = theThis.fParseComputation( aParsing_ExportComputation);
                }
                if( !( anExportComputation == null)) {
                    theThis.pPopulate_Field( "_v_ExportComputation", anExportComputation, theM_exportparm.JSONNAME_EXPORTCOMPUTATION);
                }

                return true;
            };






            ParseFieldsHandlersByJSONname_Export[ theM_exportparm.JSONNAME_EXPORTCOMPUEXTRAPARMS] = function( theThis) {

                var anExportCompuExtraParms = null;
                var aParsing_ExportCompuExtraParms = theThis._v_ConfigSpec[ theM_exportparm.JSONNAME_EXPORTCOMPUEXTRAPARMS];
                if( aParsing_ExportCompuExtraParms) {
                    theThis.pJSONnameEncountered( theM_exportparm.JSONNAME_EXPORTCOMPUEXTRAPARMS);
                    anExportCompuExtraParms = theThis.fParseCompuExtraParms( aParsing_ExportCompuExtraParms);
                }
                if( !( anExportCompuExtraParms == null)) {
                    theThis.pPopulate_Field( "_v_ExportCompuExtraParms", anExportCompuExtraParms, theM_exportparm.JSONNAME_EXPORTCOMPUEXTRAPARMS);
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

                this.pToStoreJSON_Populated_into( theM_exportparm.JSONNAMESBYFIELDNAME_EXPORT, theConfiguration, aToStoreJSON, theCommonObjects, theAlready);

                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;








            return aPrototype;

        })();


        var SpecParserExport_Constructor = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_SpecParserExport( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
        };
        SpecParserExport_Constructor.prototype = aSpecParserExport_Prototype;





        var SpecParserExport_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = aSpecParserExport_Prototype;
            this._v_Type = null;
        };
        SpecParserExport_SuperPrototypeConstructor.prototype = aSpecParserExport_Prototype;







        var aModule = {
            "SpecParserExport_Prototype": aSpecParserExport_Prototype,
            "SpecParserExport_Constructor": SpecParserExport_Constructor,
            "SpecParserExport_SuperPrototypeConstructor": SpecParserExport_SuperPrototypeConstructor
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
            var aM_exportparm    = require('../exportparm');
            var aM_specparser    = require('./specparser');

            return aMod_definer(
                aM_parsedconfig,
                aM_exportparm,
                aM_specparser
            );

        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../parsedconfig",
            "../exportparm",
            "./specparser"
        ], function (
                theM_parsedconfig,
                theM_exportparm,
                theM_specparser
        ) {
            return aMod_definer(
                theM_parsedconfig,
                theM_exportparm,
                theM_specparser
            );
        });
    }


}());