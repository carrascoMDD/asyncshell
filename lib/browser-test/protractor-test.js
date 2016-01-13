'use strict';

/*
 protractor-test.js
 Creado 201410201035
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

    var aMod_definer = function( theM_commonbrowser_test,
                                 theM_parms_general,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_protractor_runner,
                                 theM_protractor_configparser) {


        var ModuleName     = "protractor-test";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var PROTRACTOR_SELENIUMADDRESS_DEFAULT = "http://localhost:4444/wd/hub";
        var PROTRACTOR_HITPOINT_DEFAULT        = "http://localhost:8080/springnut";



        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.PROTRACTOR_RETRIES_DEFAULT = 0;


            theToInit.PROTRACTOR_SELENIUMADDRESS = PROTRACTOR_SELENIUMADDRESS_DEFAULT;
            theToInit.PROTRACTOR_HITPOINT        = PROTRACTOR_HITPOINT_DEFAULT;


            theToInit.LOGTERMINALREPORTERTOCONSOLE = true;
            theToInit.LOGFUNCTIONSPECS             = true;

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



            theToInit.PARM_PROTRACTOR        = "protractor";
            theToInit.PARM_PROTRACTORRETRIES = "protractorRetries";

            theToInit.PARMS_PROTRACTOR = [
                theToInit.PARM_PROTRACTOR,
                theToInit.PARM_PROTRACTORRETRIES
            ];
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











        var aProtractorTest_Prototype = (function() {


            var aPrototype = new theM_commonbrowser_test.CommonBrowserTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_commonbrowser_test.CommonBrowserTest_Prototype;

            aPrototype._v_Type = "ProtractorTest";

            aPrototype._v_Module = null;

            aPrototype._v_ProtractorTestLazy   = null;
            aPrototype._v_ProtractorTested = null;


            aPrototype._v_Retries = null;
            aPrototype._v_Retried = null;



            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_ProtractorTest(
                    theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ProtractorTest = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_CommonBrowser.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_Retries = 0;
                this._v_Retried = 0;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_ProtractorTest", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_ProtractorTest){}/* CQT */
            aPrototype._pInit_ProtractorTest = _pInit_ProtractorTest;

















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ProtractorTest( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ProtractorTest = function( theReleaseParms, theReleaseDone) {

                this._v_Retries = undefined;
                this._v_Retried = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_CommonBrowser.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ProtractorTest){}/* CQT */
            aPrototype._pRelease_ProtractorTest = _pRelease_ProtractorTest;











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

                this.pCleanUpTest_ProtractorTest( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ProtractorTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_Retries = undefined;
                    this._v_Retried = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_CommonBrowser.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ProtractorTest){}/* CQT */
            aPrototype.pCleanUpTest_ProtractorTest = pCleanUpTest_ProtractorTest;















            var pS_ReadProperties = function( theCallback) {

                var aMethodName = "pS_ReadProperties";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                var someParmsToResolve = [
                    this.PARM_PROTRACTORRETRIES
                ];

                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }


                var aProtractorRetriesResolution = aParmResolutionsDict[ this.PARM_PROTRACTORRETRIES];
                if( aProtractorRetriesResolution && aProtractorRetriesResolution._v_Success) {
                    this._v_Retries = aProtractorRetriesResolution._v_ParmValue;
                }
                else {
                    this._v_Retries = this.PROTRACTOR_RETRIES_DEFAULT;
                }

                theCallback();

            };
            if( pS_ReadProperties){}/* CQT */
            aPrototype.pS_ReadProperties = pS_ReadProperties;










            var fProtractorConf = function() {

                return null;
            };
            if( fProtractorConf){}/* CQT */
            aPrototype.fProtractorConf = fProtractorConf;





            var fExampleProtractorConf = function() {

                var aProtractorAdditionalConfig = {
                    seleniumAddress: this.PROTRACTOR_SELENIUMADDRESS,
                    specs: ['tests/springnut/browser-springnut/edivalidaciones-browser-springnut/edivalidaciones-instrumentacion-browser-springnut/edivalidaciones-instrumentacion-trials-browser-springnut/edivalidaciones18-spec.js'],
                    jasmineNodeOpts: {
                        defaultTimeoutInterval: 180000
                    }
                };


                var aThis = this;

                aProtractorAdditionalConfig.specs.push(
                    (function( ) {

                        return ( function( theParm) {
                                if(theParm){}/* CQT */

                                if( aThis.LOGFUNCTIONSPECS) {
                                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, "fProtractorConf", aThis.EVENTKIND_INFO, "Function run from jasmine springnut/src/test/end2end/node_modules/protractor/node_modules/minijasminenode/lib/index.js exports.executeSpecs = function(options) {}", null, null);
                                }

                                describe('Springnut - 01 - titulo pagina de login', function() {

                                    beforeEach(function() {
                                        return browser.ignoreSynchronization = true;
                                    });

                                    it('should have a title', function() {
                                        browser.get( aThis.PROTRACTOR_HITPOINT + '/login');

                                        expect(browser.getTitle()).toEqual('SpringNut ejemplo de instrumentacion - Identificación');
                                    });
                                });
                            });
                    })()
                );


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
            if( fExampleProtractorConf){}/* CQT */
            aPrototype.fExampleProtractorConf = fExampleProtractorConf;











            var fTerminalReporterPrintFunction = function() {

                if( !this.LOGTERMINALREPORTERTOCONSOLE) {
                    return function( theMessage){
                        if( theMessage){}/* CQT */
                    };
                }


                var aTerminalReporterPrintFunction = (function() {

                    var somePending = [ ];

                    return function( theMessage) {

                        if( !theMessage || !theMessage.length || !theMessage.trim().length) {
                            return;
                        }

                        var aNoCRsMessage = theMessage.replace( /\n/g, "").trim();
                        if( !aNoCRsMessage || !aNoCRsMessage.length) {
                            return;
                        }

                        if( ( theMessage == "." ) || ( theMessage == "\u001b[32m.\u001b[0m")) {
                            somePending.push( theMessage);
                            return;
                        }



                        var aPending = "";

                        if( somePending && somePending.length) {
                            aPending = somePending.join( "") + " ";
                            somePending = [ ];
                        }


                        var aMessage = theMessage;

                        aMessage = aMessage.replace( /\n\n\n\n/g, "\n");
                        aMessage = aMessage.replace( /\n\n\n/g, "\n");
                        aMessage = aMessage.replace( /\n\n/g, "\n");
                        if( aMessage[ 0] == "\n") {
                            aMessage = aMessage.substring( 1);
                        }
                        if( aMessage[ 0] == "\n") {
                            aMessage = aMessage.substring( 1);
                        }

                        var aMsgLen = aMessage.length;
                        if( aMessage[ aMsgLen - 1] == "\n") {
                            aMessage = aMessage.substring( 0, aMsgLen - 1);
                        }
                        aMsgLen = aMessage.length;
                        if( aMessage[ aMsgLen - 1] == "\n") {
                            aMessage = aMessage.substring( 0, aMsgLen - 1);
                        }

                        aMessage = aMessage.replace( "\n\u001b[0m", "\u001b[0m");

                        console.log( ',{ "' + aPending + aMessage + '"}');
                    }
                })();
                if( aTerminalReporterPrintFunction){}/* CQT */

                return aTerminalReporterPrintFunction;

            };
            if( fTerminalReporterPrintFunction){}/* CQT */
            aPrototype.fTerminalReporterPrintFunction = fTerminalReporterPrintFunction;








            var pS_ProtractorTest = function( theCallback) {

                var aMethodName = "pS_ProtractorTest";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var aProtractorConf = this.fProtractorConf();
                if( !aProtractorConf) {
                    theCallback( null);
                    return;
                }




                var aTerminalReporterPrintFunction = this.fTerminalReporterPrintFunction();


                if( aProtractorConf.jasmineNodeOpts) {
                    aProtractorConf.jasmineNodeOpts.print = aTerminalReporterPrintFunction;
                }





                if( !aProtractorConf.params) {
                    aProtractorConf.params = {};
                }


                aProtractorConf.params[ "terminalReporterPrintFunction"] = aTerminalReporterPrintFunction;



                var someConstants = { };
                pgInitFromModuleConstants( someConstants);
                aProtractorConf.params[ "protractorTestConstants"] = someConstants;




                var aProtractorRunner = new theM_protractor_runner( aProtractorConf);


                var aRunnerResetter = this.fRunnerResetterFunction( aProtractorRunner);



                var aThis = this;

                aProtractorRunner.on(
                    'testPass',
                    function() {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, null, null, null);
                    }
                );

                aProtractorRunner.on(
                    'testFail',
                    function() {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, null, null, null);
                    }
                );


                aProtractorRunner.on(
                    'testsDone',
                    function( theFailedCount) {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEPS_NOMORE, theFailedCount, null, null);
                    }
                );


                aProtractorRunner
                    .run( aRunnerResetter ) /* ACV OJO 201410262213 to reset info held from previous protractor Runner and jasmine executions in same node js process.*/
                    .then( function( theExitCode) {

                        if( theExitCode) {

                            if( aTerminalReporterPrintFunction) {
                                aTerminalReporterPrintFunction( "theExitCode=" + theExitCode);
                            }

                            var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, theExitCode, null);
                            theCallback( aRecord);
                            return;
                        }

                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, null, null, null);
                        theCallback( null);

                     })
                    .catch( function( theErr) {

                        if( aTerminalReporterPrintFunction) {
                            aTerminalReporterPrintFunction( "theErr.message=" + theErr.message);
                        }

                        var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, theErr.message, theErr);

                        theCallback( aRecord);
                    });

            };
            if( pS_ProtractorTest){}/* CQT */
            aPrototype.pS_ProtractorTest = pS_ProtractorTest;












            var pS_ProtractorTest_Retrying = function( theCallback) {

                var aMethodName = "pS_ProtractorTest_Retrying";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var aProtractorConf = this.fProtractorConf();
                if( !aProtractorConf) {
                    theCallback( null);
                    return;
                }


                var aTerminalReporterPrintFunction = this.fTerminalReporterPrintFunction();


                if( aProtractorConf.jasmineNodeOpts) {
                    aProtractorConf.jasmineNodeOpts.print = aTerminalReporterPrintFunction;
                }


                if( !aProtractorConf.params) {
                    aProtractorConf.params = {};
                }


                aProtractorConf.params[ "terminalReporterPrintFunction"] = aTerminalReporterPrintFunction;



                var someConstants = { };
                pgInitFromModuleConstants( someConstants);
                aProtractorConf.params[ "protractorTestConstants"] = someConstants;




                var aProtractorRunner = new theM_protractor_runner( aProtractorConf);


                var aRunnerResetter = this.fRunnerResetterFunction( aProtractorRunner);





                var aThis = this;

                aProtractorRunner.on(
                    'testPass',
                    function() {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_OK, null, null, null);
                    }
                );

                aProtractorRunner.on(
                    'testFail',
                    function() {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEP_FAIL, null, null, null);
                    }
                );


                aProtractorRunner.on(
                    'testsDone',
                    function( theFailedCount) {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_STEPS_NOMORE, theFailedCount, null, null);
                    }
                );


                aProtractorRunner
                    .run( aRunnerResetter ) /* ACV OJO 201410262213 to reset info held from previous protractor Runner and jasmine executions in same node js process.*/
                    .then( function( theExitCode) {

                        if( theExitCode) {

                            if( aTerminalReporterPrintFunction) {
                                aTerminalReporterPrintFunction( "theExitCode=" + theExitCode);
                            }

                            var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, theExitCode, null);

                            if( aThis._v_Retries && ( aThis._v_Retried < aThis._v_Retries)) {

                                aThis._v_Retried += 1;

                                aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_RETRY, aThis._v_Retried, theExitCode, aThis._v_Retries);

                                aThis.pS_ProtractorTest_Retrying( theCallback);
                                return;
                            }

                            theCallback( aRecord);
                            return;
                        }

                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_OK, null, null, null);
                        theCallback( null);

                    })
                    .catch( function( theErr) {

                        if( aTerminalReporterPrintFunction) {
                            aTerminalReporterPrintFunction( "theErr.message=" + theErr.message);
                        }

                        var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, theErr.message, theErr);

                        if( aThis._v_Retries && ( aThis._v_Retried < aThis._v_Retries)) {

                            aThis._v_Retried += 1;

                            aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.EVENTKIND_RETRY, aThis._v_Retried, theErr, aThis._v_Retries);

                            aThis.pS_ProtractorTest_Retrying( theCallback);
                            return;
                        }

                        theCallback( aRecord);
                    });

            };
            if( pS_ProtractorTest_Retrying){}/* CQT */
            aPrototype.pS_ProtractorTest_Retrying = pS_ProtractorTest_Retrying;










            var fRunnerResetterFunction = function( theRunner) {

                var aRunnerResetterFunction = function( theContextKind, theContext, theWhat) { /* ACV OJO 201410262213 to reset info held from previous protractor Runner and jasmine executions in same node js process. */

                    switch( theContextKind) {

                        case "Runner":

                            switch( theWhat) {

                                case "Runner.preparers_":
                                    /* preparers_ seems to be always empty at this point even after multiple runner launchers ??? */
                                    if( theContext && !( typeof theContext.preparers_ == "undefined") && theContext.preparers_.length) {
                                        theContext.preparers_ = [ ];
                                    }
                                    break;

                                default:
                            }
                            break;




                        case "jasmine.js.run":

                            switch( theWhat) {



                                case "jasmine.subReporters_":

                                    if( theContext) {
                                        if( !( typeof theContext.getEnv == "undefined")) {

                                            var aJasmineGetEnv = theContext.getEnv();
                                            if( aJasmineGetEnv) {

                                                var aSubReporters_Holder = null;

                                                if( !( typeof aJasmineGetEnv.subReporters_ == "undefined")) {
                                                    aSubReporters_Holder = aJasmineGetEnv;
                                                }
                                                else  {
                                                    if( !( typeof aJasmineGetEnv.reporter == "undefined")) {
                                                        if( !( typeof aJasmineGetEnv.reporter.subReporters_ == "undefined")) {
                                                            aSubReporters_Holder = aJasmineGetEnv.reporter;
                                                        }
                                                    }
                                                }

                                                if( aSubReporters_Holder) {
                                                    if( aSubReporters_Holder.subReporters_ && aSubReporters_Holder.subReporters_.length) {
                                                        aSubReporters_Holder.subReporters_ = [ ];
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    break;




                                case "minijn.pResetSpecFiles":

                                    if( theContext) {
                                        if( !( typeof theContext.pResetSpecFiles == "undefined")) {

                                            theContext.pResetSpecFiles();
                                        }
                                    }
                                    break;




                                case "jasmine.currentEnv_":

                                    if( theContext) {
                                        if( !( typeof theContext.currentEnv_ == "undefined")) {
                                            theContext.currentEnv_ = null;
                                        }
                                    }
                                    break;


                                default:
                            }
                            break;


                        default:
                    }
                };
                if( aRunnerResetterFunction){}/* CQT */

                return aRunnerResetterFunction;

            };
            if( fRunnerResetterFunction){}/* CQT */
            aPrototype.fRunnerResetterFunction = fRunnerResetterFunction;













            var pF_ProtractorTest = function( theCallback) {
                var aMethodName = "pF_ProtractorTest";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_ProtractorTest){}/* CQT */
            aPrototype.pF_ProtractorTest = pF_ProtractorTest;







            var fOwnTestMethodToRun = function() {
                return this.pSS_ProtractorTest.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_ProtractorTest = function( theCallback) {
                var aMethodName = "pSS_ProtractorTest";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_ReadProperties.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_ProtractorTest_Retrying.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_ProtractorTest){}/* CQT */
            aPrototype.pSS_ProtractorTest = pSS_ProtractorTest;








            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);
                if( aResultJSON){}/* CQT */

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            // Added to
            //
            // springnut/src/test/end2end/node_modules/protractor/node_modules/minijasminenode/lib/index.js
            //
            // exports.executeSpecs = function(options) {}
            //
            //
            // /* ACV OJO 20110200136 to supply specs as functions from end2end tests to protractor jasmine
            //  */
            // if( typeof filename == "function") {
            //     filename();
            //     continue;
            // }
            //
            //


            /* ACV OJO 201410262213 to reset info held from previous protractor Runner and jasmine executions in same node js process.
             It seems that protractor / jasmine are usually executed within their own forked process
             and not like withing end2end, without exiting program.
             Because jasminewd/index.js  minijasminenode etc hold information from previous runs,
             the results from all previous runs are reported at the end of each run,
             and the specs are appended to the previous ones, causing re-repeated runs of the specs when using the end2end protractor-parmsspec-text.js


             See:

             springnut/src/test/end2end/node_modules/protractor/lib/frameworks/jasmine.js

             Which requires;
             var minijn = require('minijasminenode');
             require('jasminewd'); // global jasmine

             And calls
             running all registered reporters from previous launches at the end of each launch,
             and adding the spec(s) of each launch to the specs of the previous launch

             ?? may be fixed by setting the onComplete to null:

             or with runner.getConfig().jasmineNodeOpts ???

             or may be done(jasmineRunner.results()); Yes, at each launch results hold the ones from all previous launches


             runner.runTestPreparers().then(function() {
             var jasmineNodeOpts = runner.getConfig().jasmineNodeOpts;
             var originalOnComplete = runner.getConfig().onComplete;
             jasmineNodeOpts.onComplete = function(jasmineRunner, log) {
             if (originalOnComplete) {
             originalOnComplete(jasmineRunner, log);
             }
             done(jasmineRunner.results());
             };

             minijn.addSpecs(specs);
             minijn.executeSpecs(jasmineNodeOpts);
             });



             ------------------------------------
             Also see:
             springnut/src/test/end2end/node_modules/protractor/node_modules/minijasminenode/lib/jasmine-1.3.1.js

             jasmine.Queue.prototype.results = function() {
             var results = new jasmine.NestedResults();
             for (var i = 0; i < this.blocks.length; i++) {
             if (this.blocks[i].results) {
             results.addResult(this.blocks[i].results());
             }
             }
             return results;
             };



             ------------------------------------
             Affected:

             springnut/src/test/end2end/node_modules/protractor/node_modules/jasminewd/index.js

             function pResetFlow() {
             if( flow) {
             flow.reset();
             }
             }







             Also modified:
             ACV OJO 201410200136 to supply specs as functions from end2end tests to protractor jasmine
             springnut/src/test/end2end/node_modules/protractor/node_modules/minijasminenode/lib

             */





            return aPrototype;

        })();




        var ProtractorTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_commonbrowser_test.CommonBrowserTest_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Retries = null;
            this._v_Retried = null;

            this._pInit_ProtractorTest( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        ProtractorTest_Constructor.prototype = aProtractorTest_Prototype;





        var ProtractorTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_commonbrowser_test.CommonBrowserTest_Prototype;

            this._v_Prototype = aProtractorTest_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Retries = null;
            this._v_Retried = null;
        };
        ProtractorTest_SuperPrototypeConstructor.prototype = aProtractorTest_Prototype;



        var aModule = {
            "ProtractorTest_Prototype": aProtractorTest_Prototype,
            "ProtractorTest_Constructor": ProtractorTest_Constructor,
            "ProtractorTest_SuperPrototypeConstructor": ProtractorTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aProtractorTest_Prototype._v_Module = aModule;


        return aModule;
    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_commonbrowser_test         = require('./commonbrowser-test');
            var aM_parms_general              = require('../general-test/parms-general');
            var aM_overrider                  = require('../common-test/overrider');
            var aM_sentinels                  = require('../common-test/sentinels');

            var aM_protractor_runner          = require('../protractor-131-relaunchable/lib/runner');
            var aM_protractor_configparser    = require('../protractor-131-relaunchable/lib/configParser');


            return aMod_definer(
                aM_commonbrowser_test, aM_parms_general, aM_overrider, aM_sentinels,
                aM_protractor_runner,
                aM_protractor_configparser
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./commonbrowser-test",
            "../general-test/parms-general",
            "../common-test/overrider",
            "../common-test/sentinels",
            "../protractor-131-relaunchable/lib/runner",
            "../protractor-131-relaunchable/lib/configParser"
        ], function (
                theM_commonbrowser_test,
                theM_parms_general,
                theM_overrider,
                theM_sentinels,
                theM_protractor_runner,
                theM_protractor_configparser
            ) {
            return aMod_definer(
                theM_commonbrowser_test,
                theM_parms_general,
                theM_overrider,
                theM_sentinels,
                theM_protractor_runner,
                theM_protractor_configparser
            );
        });
    }


}());


