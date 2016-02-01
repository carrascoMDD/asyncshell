'use strict';

/*
 specparser-supplier-config.js
 Created 201409051605
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
        theM_specparserconfig) {



        var ModuleName     = "specparser-supplier-config";
        var ModulePackages = "common-test/configs/specparser";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}





        var aSpecParserSupplierConfig_Prototype = (function() {


            var aPrototype = new theM_specparserconfig.SpecParserConfig_SuperPrototypeConstructor();


            aPrototype._v_SuperPrototype = theM_specparserconfig.SpecParserConfig_Prototype;


            aPrototype._v_Type = "SpecParserSupplierConfig";





            var _pInit = function( theIdentifier, theConfigSpec, theParentParser,
                                   theSkipPopulation, theAbandonAtFirstSyntaxError) {

                this._pInit_SpecParserSupplierConfig( theIdentifier, theConfigSpec, theParentParser,
                    theSkipPopulation, theAbandonAtFirstSyntaxError);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_SpecParserSupplierConfig = function( theIdentifier, theConfigSpec, theParentParser,
                                                            theSkipPopulation, theAbandonAtFirstSyntaxError) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParserConfig.apply( this,
                    [ theIdentifier, theConfigSpec, theParentParser, theSkipPopulation, theAbandonAtFirstSyntaxError]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( theParentParser && theParentParser._v_Title) {
                    this._v_Title = "SpecParserSupplierConfig-For-" + theParentParser._v_Title;
                }

            };
            if( _pInit_SpecParserSupplierConfig){}/* CQT */
            aPrototype._pInit_SpecParserSupplierConfig = _pInit_SpecParserSupplierConfig;
















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecParserSupplierConfig( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecParserSupplierConfig = function( theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SpecParserConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecParserSupplierConfig){}/* CQT */
            aPrototype._pRelease_SpecParserSupplierConfig = _pRelease_SpecParserSupplierConfig;









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

                this.pCleanUpTest_SpecParserSupplierConfig( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_SpecParserSupplierConfig= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_SpecParserConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_SpecParserSupplierConfig){}/* CQT */
            aPrototype.pCleanUpTest_SpecParserSupplierConfig = pCleanUpTest_SpecParserSupplierConfig;








            
            



            var pAddConfPopulatedToParentParserConfPopulated = function() {
                if( this._v_SkipPopulation) {
                    return;
                }

                if( !this._v_ConfPopulated) {
                    return;
                }

                if( this._v_ParentParser && !this._v_ParentParser._v_SkipPopulation) {
                    if( this._v_ParentParser._v_ConfPopulated) {
                        this._v_ParentParser._v_ConfPopulated.pAddSupplier( this._v_ConfPopulated);
                    }
                }
            };
            if( pAddConfPopulatedToParentParserConfPopulated){}/* CQT */
            aPrototype.pAddConfPopulatedToParentParserConfPopulated = pAddConfPopulatedToParentParserConfPopulated;






            return aPrototype;

        })();










        var SpecParserSupplierConfig_Constructor = function( theIdentifier, theConfigSpec, theParentParser,
                                                     theSkipPopulation, theAbandonAtFirstSyntaxError) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserconfig.SpecParserConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._pInit_SpecParserSupplierConfig( theIdentifier, theConfigSpec, theParentParser,
                theSkipPopulation, theAbandonAtFirstSyntaxError);
        };
        SpecParserSupplierConfig_Constructor.prototype = aSpecParserSupplierConfig_Prototype;
        aSpecParserSupplierConfig_Prototype.SpecParserSupplierConfig_Constructor = SpecParserSupplierConfig_Constructor;






        var SpecParserSupplierConfig_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserconfig.SpecParserConfig_Prototype;

            this._v_Prototype = aSpecParserSupplierConfig_Prototype;
            this._v_Type = null;

        };
        SpecParserSupplierConfig_SuperPrototypeConstructor.prototype = aSpecParserSupplierConfig_Prototype;







        var aModule = {
            "SpecParserSupplierConfig_Prototype": aSpecParserSupplierConfig_Prototype,
            "SpecParserSupplierConfig_Constructor": SpecParserSupplierConfig_Constructor,
            "SpecParserSupplierConfig_SuperPrototypeConstructor": SpecParserSupplierConfig_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_specparserconfig        = require('./specparser-config');

            return aMod_definer(
                aM_specparserconfig
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./specparser-config"
        ], function (
            theM_specparserconfig
            ) {
            return aMod_definer(
                theM_specparserconfig
            );
        });
    }


}());



