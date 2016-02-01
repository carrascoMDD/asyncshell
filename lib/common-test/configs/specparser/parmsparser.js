'use strict';

/*
 parmsparser.js
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

    var aMod_definer =function( theM_specparser) {


        var ModuleName     = "parmsparser";
        var ModulePackages = "common-test/configs/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var aParmsParser_Prototype = (function() {


            var aPrototype = new theM_specparser.SpecParser_SuperPrototypeConstructor();


            aPrototype._v_SuperPrototype = theM_specparser.SpecParser_Prototype;


            aPrototype._v_Type = "ParmsParser";






            var _pInit = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                this._pInit_ParmsParser( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ParmsParser = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParser.apply( this, [ theIdentifier, theConfigSpec, theParentParser, theSkipPopulation]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                if( theParentParser && theParentParser._v_Title) {
                    this._v_Title = "ParmsParser-For-" + theParentParser._v_Title;
                }

            };
            if( _pInit_ParmsParser){}/* CQT */
            aPrototype._pInit_ParmsParser = _pInit_ParmsParser;












            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ParmsParser( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ParmsParser = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SpecParser.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ParmsParser){}/* CQT */
            aPrototype._pRelease_ParmsParser = _pRelease_ParmsParser;









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

                this.pCleanUpTest_ParmsParser( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ParmsParser= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_SpecParser.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ParmsParser){}/* CQT */
            aPrototype.pCleanUpTest_ParmsParser = pCleanUpTest_ParmsParser;














            var pInstantiateConfPopulated = function() {
                if( this._v_SkipPopulation) {
                    return;
                }

                var aM_configparms  = null;
                try {
                    aM_configparms = require('../configparms');
                }
                catch( anException){}

                if( !aM_configparms) {
                    this.pReport_Error( "!require('../configparms')");
                    return;
                }

                var aTitle = "ParmsFor-";
                if( this._v_ParentParser && this._v_ParentParser._v_ConfPopulated) {
                    aTitle += this._v_ParentParser._v_ConfPopulated._v_Title;
                }

                this._v_ConfPopulated = new aM_configparms.ConfigParms_Constructor( aTitle, this._v_Identifier);
                if( !this._v_ConfPopulated) {
                    this.pReport_Error( "!new !require('../configparms').ConfigParms_Constructor( '" + aTitle + "', this._v_Identifier)");
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
                        this._v_ParentParser._v_ConfPopulated.pSetConfigParms( this._v_ConfPopulated);
                    }
                }
            };
            if( pAddConfPopulatedToParentParserConfPopulated){}/* CQT */
            aPrototype.pAddConfPopulatedToParentParserConfPopulated = pAddConfPopulatedToParentParserConfPopulated;







            var fParse_Base = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec ");
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
                return this.fParse_MapEntries();
            };
            if( fParse_own){}/* CQT */
            aPrototype.fParse_own = fParse_own;






            var fJSONnamesNotParsed = function() {
                return null;
            };
            if( fJSONnamesNotParsed){}/* CQT */
            aPrototype.fJSONnamesNotParsed = fJSONnamesNotParsed;





            var fParse_MapEntries = function() {

                if( !this._v_ConfigSpec ) {
                    this.pReport_Error( "!this._v_ConfigSpec ");
                    return false;
                }

                this.pPopulate_Map( this._v_ConfigSpec);

                return true;
            };
            if( fParse_MapEntries){}/* CQT */
            aPrototype.fParse_MapEntries = fParse_MapEntries;





            var pPopulate_Map = function( theMap) {

                this.pReport_Parms( theMap);

                if( this._v_SkipPopulation) {
                    return;
                }

                if( !this._v_ConfPopulated) {
                    return;
                }

                this._v_ConfPopulated.pSetMap( theMap);
            };
            if( pPopulate_Map){}/* CQT */
            aPrototype.pPopulate_Map = pPopulate_Map;












            var fToStoreJSON = function( theConfiguration, theCommonObjects, theAlready) {

                if( !theConfiguration) {
                    return null;
                }

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( theConfiguration)){
                        return {};
                    }
                }

                return theConfiguration._v_Map;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;







            return aPrototype;

        })();


        var ParmsParser_Constructor = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_ParmsParser( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
        };
        ParmsParser_Constructor.prototype = aParmsParser_Prototype;





        var ParmsParser_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparser.SpecParser_Prototype;

            this._v_Prototype = aParmsParser_Prototype;
            this._v_Type = null;
        };
        ParmsParser_SuperPrototypeConstructor.prototype = aParmsParser_Prototype;







        var aModule = {
            "ParmsParser_Prototype": aParmsParser_Prototype,
            "ParmsParser_Constructor": ParmsParser_Constructor,
            "ParmsParser_SuperPrototypeConstructor": ParmsParser_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_specparser    = require('./specparser');

            return aMod_definer( aM_specparser);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "./specparser"], function ( theM_specparser) {
            return aMod_definer( theM_specparser);
        });
    }


}());