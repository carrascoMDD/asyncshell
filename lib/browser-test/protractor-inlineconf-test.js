'use strict';

/*
 protractor-inlineconf.js
 Creado 201409171855
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

    var aMod_definer = function( theM_protractor_test,
                                 theM_parms_general,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_protractor_runner,
                                 theM_protractor_configparser) {


        var ModuleName     = "protractor-inlineconf-test";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGFUNCTIONSPECS = true;

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
            }
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











        var aProtractorInlineConfTest_Prototype = (function() {


            var aPrototype = new theM_protractor_test.ProtractorTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_protractor_test.ProtractorTest_Prototype;

            aPrototype._v_Type = "ProtractorInlineConfTest";

            aPrototype._v_Module = null;




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_ProtractorInlineConfTest( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ProtractorInlineConfTest = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ProtractorTest.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_ProtractorTest", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_ProtractorInlineConfTest){}/* CQT */
            aPrototype._pInit_ProtractorInlineConfTest = _pInit_ProtractorInlineConfTest;

















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ProtractorInlineConfTest( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ProtractorInlineConfTest = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ProtractorTest.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ProtractorInlineConfTest){}/* CQT */
            aPrototype._pRelease_ProtractorInlineConfTest = _pRelease_ProtractorInlineConfTest;











            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

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

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_ProtractorInlineConfTest( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ProtractorInlineConfTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ProtractorTest.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ProtractorInlineConfTest){}/* CQT */
            aPrototype.pCleanUpTest_ProtractorInlineConfTest = pCleanUpTest_ProtractorInlineConfTest;














            var fProtractorConf = function() {

                var aProtractorAdditionalConfig = {
                    /* seleniumAddress: this.PROTRACTOR_SELENIUMADDRESS, */
                    specs: ['tests/springnut/browser-springnut/edivalidaciones-browser-springnut/edivalidaciones-instrumentacion-browser-springnut/edivalidaciones18-forinlineconf-spec.js'],
                    jasmineNodeOpts: {
                        defaultTimeoutInterval: 180000
                    }
                };


                /*
                 var aThis = this;
                 aProtractorAdditionalConfig.specs.push(
                     (function( ) {

                         return (
                            function( theParm) {
                                if( theParm){}

                                if( aThis.LOGFUNCTIONSPECS) {
                                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, "fProtractorConf", aThis.EVENTKIND_INFO, "Function run from jasmine springnut/src/test/end2end/node_modules/protractor/node_modules/minijasminenode/lib/index.js exports.executeSpecs = function(options) {}", null, null);
                                }

                                describe('Springnut - 01 - titulo pagina de login', function() {

                                    beforeEach(function() {
                                        return browser.ignoreSynchronization = true;
                                    });

                                    it('should have a title', function() {
                                        browser.get('http://localhost:8080/springnut/login');

                                        expect(browser.getTitle()).toEqual('SpringNut ejemplo de instrumentacion - Identificación');
                                    });
                                });
                            }
                         );
                     })()
                 );
                 */
                var aProtractorCapabilities =  {
                    browserName: 'chrome',

                    // Number of times to run this set of capabilities (in parallel, unless
                    // limited by maxSessions). Default is 1.
                    count: 1,

                    // If this is set to be true, specs will be sharded by file (i.e. all
                    // files to be run by this set of capabilities will run in parallel).
                    // Default is false.
                    shardTestFiles: false,

                    // Maximum number of browser instances that can run in parallel for this
                    // set of capabilities. This is only needed if shardTestFiles is true.
                    // Default is 1.
                    maxInstances: 1

                    // Additional spec files to be run on this capability only.
                    // specs: ['spec/chromeOnlySpec.js'],

                    // Spec files to be excluded on this capability only.
                    // exclude: ['spec/doNotRunInChromeSpec.js']
                };






                var aProtractorConfigParser = new theM_protractor_configparser();
                aProtractorConfigParser.addConfig( aProtractorAdditionalConfig);

                var aProtractorConfig = aProtractorConfigParser.getConfig();

                aProtractorConfig.capabilities = aProtractorCapabilities;

                if( this.PROTRACTOR_SELENIUMADDRESS) {
                    aProtractorConfig.seleniumAddress =  this.PROTRACTOR_SELENIUMADDRESS;
                }

                return aProtractorConfig;
            };
            if( fProtractorConf){}/* CQT */
            aPrototype.fProtractorConf = fProtractorConf;








            return aPrototype;

        })();




        var ProtractorInlineConfTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_protractor_test.ProtractorTest_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_ProtractorInlineConfTest( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        ProtractorInlineConfTest_Constructor.prototype = aProtractorInlineConfTest_Prototype;





        var ProtractorInlineConfTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_protractor_test.ProtractorTest_Prototype;

            this._v_Prototype = aProtractorInlineConfTest_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;
        };
        ProtractorInlineConfTest_SuperPrototypeConstructor.prototype = ProtractorInlineConfTest_SuperPrototypeConstructor;



        var aModule = {
            "ProtractorInlineConfTest_Prototype": aProtractorInlineConfTest_Prototype,
            "ProtractorInlineConfTest_Constructor": ProtractorInlineConfTest_Constructor,
            "ProtractorInlineConfTest_SuperPrototypeConstructor": ProtractorInlineConfTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aProtractorInlineConfTest_Prototype._v_Module = aModule;


        return aModule;
    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_protractor_test         = require('./protractor-test');
            var aM_parms_general              = require('../general-test/parms-general');
            var aM_overrider                  = require('../common-test/overrider');
            var aM_sentinels                  = require('../common-test/sentinels');

            var aM_protractor_runner          = require('protractor-relaunchable/lib/runner');
            var aM_protractor_configparser    = require('protractor-relaunchable/lib/configParser');


            return aMod_definer(
                aM_protractor_test, aM_parms_general, aM_overrider, aM_sentinels,
                aM_protractor_runner,
                aM_protractor_configparser
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./protractor-test",
            "../general-test/parms-general",
            "../common-test/overrider",
            "../common-test/sentinels",
            "protractor-relaunchable/lib/runner",
            "protractor-relaunchable/lib/configParser"
        ], function (
            theM_protractor_test,
            theM_parms_general,
            theM_overrider,
            theM_sentinels,
            theM_protractor_runner,
            theM_protractor_configparser
            ) {
            return aMod_definer(
                theM_protractor_test,
                theM_parms_general,
                theM_overrider,
                theM_sentinels,
                theM_protractor_runner,
                theM_protractor_configparser
            );
        });
    }


}());


