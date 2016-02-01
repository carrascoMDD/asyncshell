'use strict';

/*
 specscanner-one.js
 Created 201504050845
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


(function() {

    var aMod_definer = function( theM_specscannergeneral,
                                 theM_specparser_config,
                                 theM_scheduleroot_test,
                                 theM_specloader,
                                 theM_nextticker,
                                 theM_sentinels) {

        var ModuleName     = "specscanner-one";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}




        var aSpecscannerOne_Prototype = (function() {


            var aPrototype = new theM_specscannergeneral.SpecscannerGeneral_SuperPrototypeConstructor();



            aPrototype._v_SuperPrototype = theM_specscannergeneral.SpecscannerGeneral_Prototype;


            aPrototype._v_Type = "SpecscannerOne";


            aPrototype._v_ConfigSpecOrPath     = null;

            aPrototype._v_AlreadyScannedByPath = null;


            aPrototype._v_ConfigSpec = null;

            aPrototype._v_Configuration = null;

            aPrototype._v_RunOptions = null;






            var _pInit = function( theTitle,
                                   theConfigSpecOrPath,
                                   theIdentifier,
                                   theRecorder,
                                   theRunOptions,
                                   theIsTopScanner,
                                   theAlreadyScannedByPath) {

                this._pInit_SpecscannerOne( theTitle,
                                            theConfigSpecOrPath,
                                            theIdentifier,
                                            theRecorder,
                                            theRunOptions,
                                            theIsTopScanner,
                                            theAlreadyScannedByPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_SpecscannerOne = function( theTitle,
                                                  theConfigSpecOrPath,
                                                  theIdentifier,
                                                  theRecorder,
                                                  theRunOptions,
                                                  theIsTopScanner,
                                                  theAlreadyScannedByPath) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecscannerGeneral.apply( this, [ theTitle, theIdentifier, theRecorder, theRunOptions, theIsTopScanner ]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ConfigSpecOrPath     = theConfigSpecOrPath;

                this._v_AlreadyScannedByPath = theAlreadyScannedByPath;
                if( !this._v_AlreadyScannedByPath || !(typeof this._v_AlreadyScannedByPath == "object")) {
                    this._v_AlreadyScannedByPath = { };
                }

                this._v_ConfigSpec    = null;

                this._v_Configuration = null;

            };
            if( _pInit_SpecscannerOne){}/* CQT */
            aPrototype._pInit_SpecscannerOne = _pInit_SpecscannerOne;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecscannerOne( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecscannerOne = function( theReleaseParms, theReleaseDone) {

                this._v_ConfigSpecOrPath     = undefined;

                this._v_AlreadyScannedByPath = undefined;

                this._v_ConfigSpec = undefined;

                this._v_Configuration = undefined;

                this._v_RunOptions = undefined;
                

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SpecscannerGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecscannerOne){}/* CQT */
            aPrototype._pRelease_SpecscannerOne = _pRelease_SpecscannerOne;










            var pSL_readConfig = function( theCallback) {

                if( this.READCONFIG_ASYNC) {
                    this.pSL_readConfig_async( theCallback);
                    return;
                }

                this.pSL_readConfig_sync( theCallback);
            };
            if( pSL_readConfig){}/* CQT */
            aPrototype.pSL_readConfig = pSL_readConfig;









            var pSL_readConfig_sync = function( theCallback) {

                var aMethodName = "pSL_readConfig_sync";


                this._v_ConfigSpec = null;



                if( !this._v_ConfigSpecOrPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this._v_ConfigSpecOrPath", null));
                    return;
                }



                if( typeof  this._v_ConfigSpecOrPath == "object") {

                    this._v_ConfigSpec = this._v_ConfigSpecOrPath;

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", null, null, null));
                    return;
                }


                if( !( typeof this._v_ConfigSpecOrPath == "string")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!( typeof this._v_ConfigSpecOrPath == 'string')", null));
                    return;
                }





                if( this._v_AlreadyScannedByPath) {

                    var anAlreadyScannedConfigSpec = this._v_AlreadyScannedByPath[ this._v_ConfigSpecOrPath];
                    if( !( typeof anAlreadyScannedConfigSpec == "undefined")) {

                        if( !( anAlreadyScannedConfigSpec == null)) {

                            if( typeof anAlreadyScannedConfigSpec == "object") {

                                this._v_ConfigSpec = anAlreadyScannedConfigSpec;

                                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpec, null, null));
                                return;                            }
                        }
                    }
                }






                var aConfigSpec = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( this._v_ConfigSpecOrPath);


                if( aConfigSpec == null) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "aConfigSpec == null", null));
                    return;
                }


                if( !( typeof aConfigSpec == "object")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!( typeof aConfigSpec == 'object')", null));
                    return;
                }


                this._v_ConfigSpec = aConfigSpec;


                if( this._v_AlreadyScannedByPath) {
                    this._v_AlreadyScannedByPath[ this._v_ConfigSpecOrPath] = this._v_ConfigSpec;
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpec, null, null));
            };
            if( pSL_readConfig_sync){}/* CQT */
            aPrototype.pSL_readConfig_sync = pSL_readConfig_sync;









            var pSL_readConfig_async = function( theCallback) {

                var aMethodName = "pSL_readConfig_async";

                if( !this._v_ConfigSpecOrPath) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this._v_ConfigSpecOrPath", null));
                    return;
                }


                if( typeof  this._v_ConfigSpecOrPath == "object") {

                    this._v_ConfigSpec = this._v_ConfigSpecOrPath;

                    theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", null, null, null));
                    return;
                }


                if( !( typeof this._v_ConfigSpecOrPath == "string")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!( typeof this._v_ConfigSpecOrPath == 'string')", null));
                    return;
                }



                this._v_ConfigSpec = null;




                if( this._v_AlreadyScannedByPath) {

                    var anAlreadyScannedConfigSpec = this._v_AlreadyScannedByPath[ this._v_ConfigSpecOrPath];
                    if( !( typeof anAlreadyScannedConfigSpec == "undefined")) {

                        if( !( anAlreadyScannedConfigSpec == null)) {

                            if( typeof anAlreadyScannedConfigSpec == "object") {

                                this._v_ConfigSpec = anAlreadyScannedConfigSpec;

                                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpec, null, null));
                                return;                            }
                        }
                    }
                }



                var aCallback = this.fReadConfigAsyncCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.LAUEVKIND_STEPS_FAIL, null, "!this.fReadConfigAsyncCallback( theCallback)", null));
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionReadConfigAsyncHandler( aCallback);

                try {
                    theM_specloader.fgGlobalSpecLoader().pLoadSpecNamed( this._v_ConfigSpecOrPath, aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }

            };
            if( pSL_readConfig_async){}/* CQT */
            aPrototype.pSL_readConfig_async = pSL_readConfig_async;








            var fReadConfigAsyncCallback = function( theCallback) {
                var aMethodName = "fReadConfigAsyncCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.LAUEVKIND_READSPEC_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }


                    if( theResult == null) {
                        theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "theResult == null", null));
                        return;
                    }


                    aThis._v_ConfigSpec = theResult;


                    if( aThis._v_AlreadyScannedByPath) {
                        aThis._v_AlreadyScannedByPath[ aThis._v_ConfigSpecOrPath] = aThis._v_ConfigSpec;
                    }



                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, aMethodName, aThis.LAUEVKIND_READSPEC_OK, theResult, null, null);

                    theCallback();

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fReadConfigAsyncCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fReadConfigAsyncCallback){}/* CQT */
            aPrototype.fReadConfigAsyncCallback = fReadConfigAsyncCallback;









            var fExceptionReadConfigAsyncHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.LAUEVKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.LAUEVKIND_READSPEC_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionReadConfigAsyncHandler){}/* CQT */
            aPrototype.fExceptionReadConfigAsyncHandler = fExceptionReadConfigAsyncHandler;












            var pSL_parseConfig = function( theCallback) {

                var aMethodName = "pSL_parseConfig";

                if( !this._v_ConfigSpec) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this._v_ConfigSpec", null));
                    return;
                }


                var aSpecParser  = new theM_specparser_config.SpecParserConfig_Constructor( this._v_Identifier, this._v_ConfigSpec, null, false);

                var aParseResult = aSpecParser.fParse();
                if( !aParseResult) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!aSpecParser.fParse()", null));
                    return;
                }
                if( !aSpecParser._v_ParseSuccess) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!aSpecParser._v_ParseSuccess", null));
                    return;
                }

                var aConfiguration = aSpecParser._v_ConfPopulated;
                if( !aConfiguration) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!aSpecParser._v_ConfPopulated", null));
                    return;
                }




                this._v_Configuration = aConfiguration;


                var aResolveImportsResult = this._v_Configuration.fResolveImports( "PARSE");
                if( !aResolveImportsResult) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this._v_Configuration.fResolveImports( 'PARSE')", null));
                    return;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_Configuration, null, null));
            };
            if( pSL_parseConfig){}/* CQT */
            aPrototype.pSL_parseConfig = pSL_parseConfig;













            var pSL_specscanCompleted = function( theCallback) {

                var aMethodName = "pSL_specscanCompleted";


                if( !(typeof this._v_ConfigSpecOrPath == "string")) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!(typeof this._v_ConfigSpecOrPath == 'string')", null));
                    return;
                }


                if( !this._v_ConfigSpec) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this._v_ConfigSpec", null));
                    return;
                }


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!this._v_Configuration", null));
                    return;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "OK", this._v_ConfigSpecOrPath, null, null));

            };
            if( pSL_specscanCompleted){}/* CQT */
            aPrototype.pSL_specscanCompleted = pSL_specscanCompleted;













            var pF_SpecscannerOne = function( theCallback) {

                var aMethodName = "pF_SpecscannerOne";

                this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "BEGIN", null, null, null);


                try {


                    var aThis = this;
                    theM_nextticker.pNextTick(
                        function() {

                            try {

                                var someTestFunctions = [
                                    aThis.pSL_readConfig.bind( aThis),
                                    aThis.pSL_parseConfig.bind( aThis),
                                    aThis.pSL_specscanCompleted.bind( aThis)
                                ];

                                var aSeriesRunnedCallback = (function() {
                                    var aCbkFunction = function( theError){
                                        try {
                                            if( theError) {
                                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL", null, theError, null));
                                                return;
                                            }

                                            if( !aThis._v_ConfigSpecOrPath || !aThis._v_ConfigSpecOrPath.length) {
                                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL", null, "!aThis._v_ConfigSpecOrPath || !aThis._v_ConfigSpecOrPath.length", null));
                                                return;
                                            }

                                            aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "OK", aThis._v_ConfigSpecOrPath, null, null);

                                            theCallback( null, aThis._v_ConfigSpecOrPath);

                                        }
                                        catch( anException) {
                                            var aExceptionDetail = aThis.fExceptionDetail( anException);
                                            var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL, null", aRecord, null));
                                        }
                                    };
                                    if( aCbkFunction){}/* CQT */
                                    return aCbkFunction;
                                })();



                                var aWrappedCallback = aThis.fChainNewLauncherCallbackForCallback( aSeriesRunnedCallback, "pF_SpecscannerOne", theCallback, aMethodName);

                                aThis.pRunSeries(
                                    someTestFunctions,
                                    aWrappedCallback
                                );
                            }
                            catch( anException) {
                                var aExceptionDetail = aThis.fExceptionDetail( anException);
                                var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, "FAIL", null, aRecord, null));
                            }
                        }
                    );
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, aRecord, null));
                }
            };
            if( pF_SpecscannerOne){}/* CQT */
            aPrototype.pF_SpecscannerOne = pF_SpecscannerOne;




            return aPrototype;

        })();




        var SpecscannerOne_Constructor = function( theTitle,
                                                   theConfigSpecOrPath,
                                                   theIdentifier,
                                                   theRecorder,
                                                   theRunOptions,
                                                   theIsTopScanner,
                                                   theAlreadyScannedByPath) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specscannergeneral.SpecscannerGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ConfigSpecOrPath     = null;

            this._v_AlreadyScannedByPath = null;

            this._v_ConfigSpec    = null;
            this._v_Configuration = null;

            this._pInit_SpecscannerOne( theTitle,
                                        theConfigSpecOrPath,
                                        theIdentifier,
                                        theRecorder,
                                        theRunOptions,
                                        theIsTopScanner,
                                        theAlreadyScannedByPath);
        };
        SpecscannerOne_Constructor.prototype = aSpecscannerOne_Prototype;





        var SpecscannerOne_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specscannergeneral.SpecscannerGeneral_Prototype;

            this._v_Prototype = aSpecscannerOne_Prototype;
            this._v_Type = null;

            this._v_ConfigSpecOrPath     = null;

            this._v_AlreadyScannedByPath = null;

            this._v_ConfigSpec    = null;
            this._v_Configuration = null;
        };
        SpecscannerOne_SuperPrototypeConstructor.prototype = aSpecscannerOne_Prototype;












        var aModule = {
            "SpecscannerOne_Prototype": aSpecscannerOne_Prototype,
            "SpecscannerOne_Constructor": SpecscannerOne_Constructor,
            "SpecscannerOne_SuperPrototypeConstructor": SpecscannerOne_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





        return aModule;
    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_specscannergeneral  = require('./specscanner-general');
            var aM_specparser_config   = require('../../common-test/configs/specparser/specparser-config');
            var aM_scheduleroot_test   = require('../../common-test/scheduleroot-test');
            var aM_specloader          = require('../../common-test/resloader/specloader');
            var aM_nextticker          = require('../../infrasvcs/nextticker/nextticker');
            var aM_sentinels           = require('../sentinels');

            return aMod_definer(
                aM_specscannergeneral,
                aM_specparser_config,
                aM_scheduleroot_test,
                aM_specloader,
                aM_nextticker,
                aM_sentinels
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./specscanner-general",
            "../../common-test/configs/specparser/specparser-config",
            "../../common-test/scheduleroot-test",
            "../../common-test/resloader/specloader",
            "../../infrasvcs/nextticker/nextticker",
            "../sentinels"
        ], function (
                theM_specscannergeneral,
                theM_specparser_config,
                theM_scheduleroot_test,
                theM_specloader,
                theM_nextticker,
                theM_sentinels
            ) {
            return aMod_definer(
                theM_specscannergeneral,
                theM_specparser_config,
                theM_scheduleroot_test,
                theM_specloader,
                theM_nextticker,
                theM_sentinels
            );
        });
    }

})();

