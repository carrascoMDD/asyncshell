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

    var aMod_definer =function( theM_parmsparser) {


        var ModuleName     = "defaultsparser";
        var ModulePackages = "common-test/configs/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var aDefaultsParser_Prototype = (function() {


            var aPrototype = new theM_parmsparser.ParmsParser_SuperPrototypeConstructor();


            aPrototype._v_SuperPrototype = theM_parmsparser.ParmsParser_Prototype;


            aPrototype._v_Type = "DefaultsParser";






            var _pInit = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                this._pInit_DefaultsParser( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DefaultsParser = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ParmsParser.apply( this, [ theIdentifier, theConfigSpec, theParentParser, theSkipPopulation]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;
            };
            if( _pInit_DefaultsParser){}/* CQT */
            aPrototype._pInit_DefaultsParser = _pInit_DefaultsParser;

















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_DefaultsParser( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_DefaultsParser = function( theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ParmsParser.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_DefaultsParser){}/* CQT */
            aPrototype._pRelease_DefaultsParser = _pRelease_DefaultsParser;









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

                this.pCleanUpTest_DefaultsParser( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_DefaultsParser= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ParmsParser.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_DefaultsParser){}/* CQT */
            aPrototype.pCleanUpTest_DefaultsParser = pCleanUpTest_DefaultsParser;

















            var pInstantiateConfPopulated = function() {
                if( this._v_SkipPopulation) {
                    return;
                }

                var aM_defaults  = null;
                try {
                    aM_defaults = require('../defaults');
                }
                catch( anException){}

                if( !aM_defaults) {
                    this.pReport_Error( "!require('../defaults')");
                    return;
                }

                var aTitle = "DefaultsFor-";
                if( this._v_ParentParser && this._v_ParentParser._v_ConfPopulated) {
                    aTitle += this._v_ParentParser._v_ConfPopulated._v_Title;
                }

                this._v_ConfPopulated = new aM_defaults.Defaults_Constructor( aTitle, this._v_Identifier);
                if( !this._v_ConfPopulated) {
                    this.pReport_Error( "!new require('../defaults').Defaults_Constructor( '" + aTitle + "', this._v_Identifier)");
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
                        this._v_ParentParser._v_ConfPopulated.pSetDefaults( this._v_ConfPopulated);
                    }
                }
            };
            if( pAddConfPopulatedToParentParserConfPopulated){}/* CQT */
            aPrototype.pAddConfPopulatedToParentParserConfPopulated = pAddConfPopulatedToParentParserConfPopulated;









            return aPrototype;

        })();


        var DefaultsParser_Constructor = function( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parmsparser.ParmsParser_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_DefaultsParser( theIdentifier, theConfigSpec, theParentParser, theSkipPopulation);
        };
        DefaultsParser_Constructor.prototype = aDefaultsParser_Prototype;





        var DefaultsParser_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parmsparser.ParmsParser_Prototype;

            this._v_Prototype = aDefaultsParser_Prototype;
            this._v_Type = null;
        };
        DefaultsParser_SuperPrototypeConstructor.prototype = aDefaultsParser_Prototype;







        var aModule = {
            "DefaultsParser_Prototype": aDefaultsParser_Prototype,
            "DefaultsParser_Constructor": DefaultsParser_Constructor,
            "DefaultsParser_SuperPrototypeConstructor": DefaultsParser_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_parmsparser    = require('./parmsparser');

            return aMod_definer( aM_parmsparser);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "./parmsparser"], function ( theM_parmsparser) {
            return aMod_definer( theM_parmsparser);
        });
    }


}());