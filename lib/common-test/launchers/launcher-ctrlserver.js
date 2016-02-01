'use strict';

/*
 launcher-ctrlserver.js
 Created 201408241902
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

    var aMod_definer = function( theM_ttstlaunchergeneral,
                                 theM_firsttorun,
                                 theM_ctrlserver,
                                 theM_nextticker,
                                 theM_exiter,
                                 theM_callbacker,
                                 theM_xloader,
                                 theM_cmpandtestspathsloader,
                                 theM_overrider) {


        var ModuleName     = "launcher-ctrlserver";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.ANNOTATELAUNCHERCTRLSERVERCALLBACKS = true;
            theToInit.RECORDLAUNCHERCTRLSERVERCALLBACKINVOCATIONS  = true;
            theToInit.RECORDLAUNCHERCTRLSERVERCALLBACKARGS         = true;

            theToInit.SERVERDEFNAME_DEFAULT = "#root/serverdef.json";
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

            theToInit.CTRLSERVERTITLE = "CtrlServerTitle";

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








        var aLauncherCtrlServer_Prototype = (function() {


            var aPrototype = new theM_ttstlaunchergeneral.TtstLauncherGeneral_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_Type = "LauncherCtrlServer";


            aPrototype._v_ServerDefName   = null;
            aPrototype._v_ServerDef       = null;
            aPrototype._v_ServerDefLoader = null;

            aPrototype._v_CmpPathName     = null;
            aPrototype._v_TestsPathName   = null;

            aPrototype._v_CtrlServer = null;






            var _pInit = function( theTitle, theServerDefName) {

                this._pInit_LauncherCtrlServer( theTitle, theServerDefName);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_LauncherCtrlServer = function( theTitle, theServerDefName) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstLauncherGeneral.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ServerDefName   = theServerDefName;
                this._v_ServerDef       = null;
                this._v_ServerDefLoader = null;

                this._v_CmpPathName     = null;
                this._v_TestsPathName   = null;

                this._v_CtrlServer = null;
            };
            if( _pInit_LauncherCtrlServer){}/* CQT */
            aPrototype._pInit_LauncherCtrlServer = _pInit_LauncherCtrlServer;









            var pSL_loadserverdef = function( theCallback) {

                var aMethodName = "pSL_loadserverdef";


                var aServerDefName = this._v_ServerDefName;
                if( !aServerDefName) {
                    aServerDefName = this.SERVERDEFNAME_DEFAULT;
                }
                if( !aServerDefName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_ServerDefName && !this.SERVERDEFNAME_DEFAULT", null));
                    return;
                }


                this._v_ServerDefLoader = new theM_xloader.XLoader_Constructor( "ServerDefLoaderFor-" + this._v_Title, aServerDefName);


                var aCallback = this.fLoadXCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fLoadXCallback( theCallback)", null));
                    return;
                }


                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fLoadXExceptionHandler( aCallback);

                try {
                    this._v_ServerDefLoader.pLoadXNamed( aServerDefName, aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }


            };
            if( pSL_loadserverdef){}/* CQT */
            aPrototype.pSL_loadserverdef = pSL_loadserverdef;




            




            var fLoadXCallback = function( theCallback) {
                var aMethodName = "fLoadXCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aMethodName, "FAIL", null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis._v_ServerDef = theResult;

                    if( !aThis._v_ServerDef) {
                        var otherRecordFail = aThis.fRecord( aMethodName, "FAIL", null, "!aThis._v_ServerDef", aThis._v_ServerDefName);
                        if( theCallback) {
                            theCallback( otherRecordFail);
                        }
                        return;
                    }

                    theCallback( null, aThis.fRecord( aMethodName, "OK", aThis._v_ServerDef, null, aThis._v_ServerDefName));

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCtrlServerCallbackForCallback( aCallback, "fLoadXCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fLoadXCallback){}/* CQT */
            aPrototype.fLoadXCallback = fLoadXCallback;








            var fLoadXExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( theMethodName, "FAIL", null, "!Exception", null));
                        return;
                    }

                    var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fLoadXExceptionHandler){}/* CQT */
            aPrototype.fLoadXExceptionHandler = fLoadXExceptionHandler;













            var pSL_loadcmpandtestspaths = function( theCallback) {

                var aMethodName = "pSL_loadcmpandtestspaths";
                if( aMethodName){}/* CQT */

                if( !this._v_ServerDef) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_ServerDef", null));
                    return;
                }

                this._v_CmpPathName   = this._v_ServerDef[ "cmppath"];
                if( !this._v_CmpPathName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_CmpPathName", null));
                    return;
                }

                this._v_TestsPathName = this._v_ServerDef[ "testspath"];
                if( !this._v_TestsPathName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_TestsPathName", null));
                    return;
                }

                this._v_CmpAndTestsPathsLoader = new theM_cmpandtestspathsloader.CmpAndTestsPathsLoader_Constructor(
                    "CmpAndTestsPathsLoaderFor-" + this._v_Title,
                    this._v_CmpPathName,
                    this._v_TestsPathName
                );

                this._v_CmpAndTestsPathsLoader.pF_CmpAndTestsPathsLoader( theCallback);
            };
            if( pSL_loadcmpandtestspaths){}/* CQT */
            aPrototype.pSL_loadcmpandtestspaths = pSL_loadcmpandtestspaths;








            var pSL_launchCtrlServer = function( theCallback) {

                var aMethodName = "pSL_launchCtrlServer";

                if( !this._v_ServerDef) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_ServerDef", null));
                    return;
                }

                var aTitle = this._v_ServerDef[ "server"];
                if( !aTitle) {
                    aTitle = this.CTRLSERVERTITLE;
                    if( !aTitle) {
                        aTitle = "CtrlServerLauncherFrom-" + this._v_Title;
                    }
                }

                var aPort = this._v_ServerDef[ "port"];

                this._v_CtrlServer = new theM_ctrlserver.CtrlServer_Constructor( aTitle, aPort);

                this._v_CtrlServer.fStartListener( theCallback);

            };
            if( pSL_launchCtrlServer){}/* CQT */
            aPrototype.pSL_launchCtrlServer = pSL_launchCtrlServer;







            var fChainNewLauncherCtrlServerCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATELAUNCHERCTRLSERVERCALLBACKS) {
                    return theNewCallback;
                }

                return theM_callbacker.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewLauncherCtrlServerCallbackForCallback){}/* CQT */
            aPrototype.fChainNewLauncherCtrlServerCallbackForCallback = fChainNewLauncherCtrlServerCallbackForCallback;







            var pReceivedLauncherCtrlServerCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATELAUNCHERCTRLSERVERCALLBACKS) {
                    return;
                }

                if( !this.RECORDLAUNCHERCTRLSERVERCALLBACKARGS) {
                    return;
                }

                if( !theCallback) {
                    return;
                }

                theM_callbacker.pReceivedCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedLauncherCtrlServerCallbackArg){}/* CQT */
            aPrototype.pReceivedLauncherCtrlServerCallbackArg = pReceivedLauncherCtrlServerCallbackArg;







            var fExceptionNextLauncherCtrlServerHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextLauncherCtrlServerHandler){}/* CQT */
            aPrototype.fExceptionNextLauncherCtrlServerHandler = fExceptionNextLauncherCtrlServerHandler;












            var fOverallLauncherCtrlServerCallback = function( theCallback) {
                var aMethodName = "fOverallLauncherCtrlServerCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aMethodName, "FAIL", null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    theCallback( null, aThis.fRecord( aMethodName, "OK", null, null, null));

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCtrlServerCallbackForCallback( aCallback, "fOverallLauncherCtrlServerCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fOverallLauncherCtrlServerCallback){}/* CQT */
            aPrototype.fOverallLauncherCtrlServerCallback = fOverallLauncherCtrlServerCallback;










            var fOverallExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( theMethodName, "FAIL", null, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, "CATCHED_EXCEPTION", null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, "FAIL", null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallExceptionHandler){}/* CQT */
            aPrototype.fOverallExceptionHandler = fOverallExceptionHandler;










            var pSL_launchMany = function( theCallback) {
                var aMethodName = "pSL_launchMany";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                var aExceptionHandler = this.fOverallExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallLauncherCtrlServerCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, this.EVENTKIND_FAIL, null, "!this.fOverallLauncherCtrlServerCallback( theCallback)", null));
                        return;
                    }


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToScheduleNextLaunchtopSpec( aCallback);
                            }
                            catch( anException) {
                                aExceptionHandler( anException);
                            }
                        }
                    );

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pSL_launchMany){}/* CQT */
            aPrototype.pSL_launchMany = pSL_launchMany;








            var pF_LauncherCtrlServer = function( theCallback) {

                var aMethodName = "pF_LauncherCtrlServer";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                try {

                    this.pReceivedLauncherCtrlServerCallbackArg( theCallback, aMethodName);

                    var aThis = this;
                    theM_nextticker.pNextTick(
                        function() {

                            try {

                                var someTestFunctions = [
                                    aThis.pSL_loadserverdef.bind( aThis),
                                    aThis.pSL_loadcmpandtestspaths.bind( aThis),
                                    aThis.pSL_launchCtrlServer.bind( aThis)
                                ];


                                var aSeriesRunnedCallback = (function() {
                                    var aCbkFunction = function( theError){
                                        try {
                                            if( theError) {
                                                theCallback( aThis.fRecord( aMethodName, "FAIL", null, theError, null));
                                                return;
                                            }

                                            theCallback( null, aThis.fRecord( aMethodName, "OK", null, null, null));

                                        }
                                        catch( anException) {
                                            var aExceptionDetail = aThis.fExceptionDetail( anException);
                                            var aRecord = aThis.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                            theCallback( aThis.fRecord( aMethodName, "FAIL, null", aRecord, null));
                                        }
                                    };
                                    if( aCbkFunction){}/* CQT */
                                    return aCbkFunction;
                                    })();

                                var aWrappedCallback = aThis.fChainNewLauncherCtrlServerCallbackForCallback( aSeriesRunnedCallback, "pF_LauncherCtrlServer", theCallback, aMethodName);


                                aThis.pRunTtstLauncherSeries(
                                    someTestFunctions,
                                    aWrappedCallback
                                );
                            }
                            catch( anException) {
                                var aExceptionDetail = aThis.fExceptionDetail( anException);
                                var aRecord = aThis.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                                theCallback( aThis.fRecord( aMethodName, "FAIL", null, aRecord, null));
                            }
                        }
                    );
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( aMethodName, "CATCHED_EXCEPTION", null, anException, aExceptionDetail);
                    theCallback( this.fRecord( aMethodName, "FAIL", null, aRecord, null));
                }
            };
            if( pF_LauncherCtrlServer){}/* CQT */
            aPrototype.pF_LauncherCtrlServer = pF_LauncherCtrlServer;












            return aPrototype;

        })();




        var LauncherCtrlServer_Constructor = function( theTitle, theLaunchtopSpecsOrPath) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ServerDefName   = null;
            this._v_ServerDef       = null;
            this._v_ServerDefLoader = null;

            this._v_CmpPathName     = null;
            this._v_TestsPathName   = null;

            this._v_CtrlServer = null;

            this._pInit_LauncherCtrlServer( theTitle, theLaunchtopSpecsOrPath);
        };
        LauncherCtrlServer_Constructor.prototype = aLauncherCtrlServer_Prototype;





        var LauncherCtrlServer_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = aLauncherCtrlServer_Prototype;
            this._v_Type = null;

            this._v_ServerDefName   = null;
            this._v_ServerDef       = null;
            this._v_ServerDefLoader = null;

            this._v_CmpPathName     = null;
            this._v_TestsPathName   = null;

            this._v_CtrlServer = null;
        };
        LauncherCtrlServer_SuperPrototypeConstructor.prototype = aLauncherCtrlServer_Prototype;











        var LauncherCtrlServerFactory = function(
            theTitle, theServerDefName) {

            var aLauncherCtrlServer = new LauncherCtrlServer_Constructor( theTitle, theServerDefName);

            var aMethod = aLauncherCtrlServer.pF_LauncherCtrlServer.bind( aLauncherCtrlServer);

            return { "launcher": aLauncherCtrlServer, "method": aMethod};
        };











        var fDefineLauncherCtrlServer_andRunIfFirst = function( theTitle, theServerDefName) {


            var aLastLauncher = null;


            var aLauncherFactory = function() {

                var aLauncherAndMethod =  LauncherCtrlServerFactory( theTitle, theServerDefName);
                if( !aLauncherAndMethod) {
                    return null;
                }

                aLastLauncher = aLauncherAndMethod[ "launcher"];

                return aLauncherAndMethod;
            };



            var aModule = {
                "ServerDefName":   theServerDefName,
                "LauncherFactory": LauncherCtrlServerFactory
            };



            if( theM_firsttorun.fIsFirstToRun()) {
                (function() {

                    var aCallback = function( theError) {
                        var anExitCode = 0;
                        if( theError) {
                            anExitCode = 661;
                        }
                        if( aLastLauncher) {
                            aLastLauncher.fRecord( theTitle, "EXIT", anExitCode, theError, null);
                        }
                        else {
                            var anExitRecord = { "launcher": theTitle, "EXIT": anExitCode};
                            console.log( "," + JSON.stringify( anExitRecord));
                        }
                        theM_exiter.p_Exit( anExitCode);
                    };


                    var aLauncherAndMethod = aLauncherFactory();
                    if( !aLauncherAndMethod) {
                        aCallback( "!LauncherFactory()");
                        return;
                    }

                    var aMethod = aLauncherAndMethod[ "method"];
                    if( !aMethod) {
                        return;
                    }

                    aMethod( aCallback);
                })()
            }




            return aModule;

        };








        var aModule = {
            "LauncherCtrlServer_Prototype": aLauncherCtrlServer_Prototype,
            "LauncherCtrlServer_Constructor": LauncherCtrlServer_Constructor,
            "LauncherCtrlServer_SuperPrototypeConstructor": LauncherCtrlServer_SuperPrototypeConstructor,

            "LauncherCtrlServerFactory": LauncherCtrlServerFactory,

            "fDefineLauncherCtrlServer_andRunIfFirst":  fDefineLauncherCtrlServer_andRunIfFirst
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;




        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ttstlaunchergeneral     = require('../../ttst/ttstlaunchers/ttstlauncher-general');
            var aM_firsttorun              = require('./firsttorun');
            var aM_ctrlserver              = require('../../ctrlserver/server-ctrl/ctrlserver');
            var aM_nextticker              = require('../../infrasvcs/nextticker/nextticker');
            var aM_exiter                  = require('../../infrasvcs/exiter/exiter');
            var aM_callbacker              = require('../callbacker');
            var aM_xloader                 = require('../xloader/xloader');
            var aM_cmpandtestspathsloader  = require('../pathsloader/cmpandtestspathsloader');
            var aM_overrider               = require('../overrider');

            return aMod_definer(
                aM_ttstlaunchergeneral,
                aM_firsttorun,
                aM_ctrlserver,
                aM_nextticker,
                aM_exiter,
                aM_callbacker,
                aM_xloader,
                aM_cmpandtestspathsloader,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../ttst/ttstlaunchers/ttstlauncher-general",
            "./firsttorun",
            "../../ctrlserver/server-ctrl/ctrlserver",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/exiter/exiter",
            "../callbacker",
            "../xloader/xloader",
            "../pathsloader/cmpandtestspathsloader",
            "../overrider"
        ], function (
            theM_ttstlaunchergeneral,
            theM_firsttorun,
            theM_ctrlserver,
            theM_nextticker,
            theM_exiter,
            theM_callbacker,
            theM_xloader,
            theM_cmpandtestspathsloader,
            theM_overrider
            ) {
            return aMod_definer(
                theM_ttstlaunchergeneral,
                theM_firsttorun,
                theM_ctrlserver,
                theM_nextticker,
                theM_exiter,
                theM_callbacker,
                theM_xloader,
                theM_cmpandtestspathsloader,
                theM_overrider
            );
        });
    }

})();

