'use strict';

/*
 ttstlauncher-top.js
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
                                 theM_cmploader,
                                 theM_nextticker,
                                 theM_exiter) {


        var ModuleName     = "ttstlauncher-top";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var aTtstLauncherTop_Prototype = (function() {


            var aPrototype = new theM_ttstlaunchergeneral.TtstLauncherGeneral_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;


            aPrototype._v_Type = "TtstLauncherTop";


            aPrototype._v_LaunchtogetherPaths = null;


            aPrototype._v_SubLaunchers = null;

            aPrototype._v_AlreadyLaunched = null;




            var _pInit = function( theTitle, theLaunchtogetherPaths) {

                this._pInit_TtstLauncherTop( theTitle, theLaunchtogetherPaths);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_TtstLauncherTop = function( theTitle, theLaunchtogetherPaths) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstLauncherGeneral.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_LaunchtogetherPaths = theLaunchtogetherPaths;

                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];
            };
            if( _pInit_TtstLauncherTop){}/* CQT */
            aPrototype._pInit_TtstLauncherTop = _pInit_TtstLauncherTop;















            var pInitFinderToScheduleNext = function() {
                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];
            };
            if( pInitFinderToScheduleNext){}/* CQT */
            aPrototype.pInitFinderToScheduleNext = pInitFinderToScheduleNext;










            var pTryToScheduleNextLaunchtogetherPath = function( theCallback) {
                var aMethodName = "pTryToScheduleNextLaunchtogetherPath";
                if( aMethodName){}/* CQT */

                var aLaunchtogetherPathToScheduleNext = this.fFindLaunchtogetherPathToScheduleNext();
                if( !aLaunchtogetherPathToScheduleNext) {
                    theCallback();
                    return;
                }

                this._v_AlreadyLaunched.push( aLaunchtogetherPathToScheduleNext);

                this.pScheduleNextLaunchtogetherPath( theCallback, aLaunchtogetherPathToScheduleNext);
            };
            if( pTryToScheduleNextLaunchtogetherPath){}/* CQT */
            aPrototype.pTryToScheduleNextLaunchtogetherPath = pTryToScheduleNextLaunchtogetherPath;








            var fFindLaunchtogetherPathToScheduleNext = function() {

                if( !this._v_LaunchtogetherPaths) {
                    return null;
                }

                var aPendingLaunchtogetherPath = null;

                var aNumLaunchtogetherPaths = this._v_LaunchtogetherPaths.length;
                for( var aLaunchtogetherPathIdx=0; aLaunchtogetherPathIdx < aNumLaunchtogetherPaths; aLaunchtogetherPathIdx++) {

                    var aLaunchtogetherPath = this._v_LaunchtogetherPaths[ aLaunchtogetherPathIdx];

                    if( this._v_AlreadyLaunched.indexOf( aLaunchtogetherPath) < 0) {
                        aPendingLaunchtogetherPath = aLaunchtogetherPath;
                        break;
                    }
                }
                if( !aPendingLaunchtogetherPath) {
                    return null;
                }

                return aPendingLaunchtogetherPath;
            };
            if( fFindLaunchtogetherPathToScheduleNext){}/* CQT */
            aPrototype.fFindLaunchtogetherPathToScheduleNext = fFindLaunchtogetherPathToScheduleNext;










            var pScheduleNextLaunchtogetherPath = function( theCallback, theLaunchtogetherPath) {

                var aMethodName = "pScheduleNextLaunchtogetherPath";

                if( !theLaunchtogetherPath) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theLaunchtogetherPath", null));
                    return;
                }

                if( !( typeof theLaunchtogetherPath == "string")) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!(typeof theLaunchtogetherPath == 'string')", null));
                    return;
                }


                var aModule = theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( theLaunchtogetherPath);

                if( !aModule) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!fLoadCmpNamed( " + theLaunchtogetherPath + ")", null));
                }


                var aLauncherFactory = aModule[ "LauncherFactory"];
                if( !aLauncherFactory) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!fLoadCmpNamed( " + theLaunchtogetherPath + ")[ LauncherFactory]", null));
                }



                var aLauncherAndMethod = aLauncherFactory();

                if( !aLauncherAndMethod) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!fLoadCmpNamed( " + theLaunchtogetherPath + ")[ LauncherFactory]()", null));
                }


                var aLauncher = aLauncherAndMethod[ "launcher"];
                if( !aLauncher) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!fLoadCmpNamed().LauncherOneFactory().launcher", null));
                }
                this._v_SubLaunchers.push( aLauncher);


                var aMethod = aLauncherAndMethod[ "method"];
                if( !aMethod) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!fLoadCmpNamed().LauncherOneFactory().method", null));
                }

                if( !( typeof aMethod == "function")) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!( typeof fLoadCmpNamed().LauncherOneFactory().method == 'function)", null));
                }





                var aCallback = this.fScheduleNextLauncherCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fScheduleNextLauncherCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextLauncherHandler( aCallback);

                try {
                    aMethod( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pScheduleNextLaunchtogetherPath){}/* CQT */
            aPrototype.pScheduleNextLaunchtogetherPath = pScheduleNextLaunchtogetherPath;









            var fScheduleNextLauncherCallback = function( theCallback) {
                var aMethodName = "fScheduleNextLauncherCallback";

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

                    aThis.fRecord( aMethodName, "OK", null, null, null);

                    aThis.pTryToScheduleNextLaunchtogetherPath( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTtstLauncherCallbackForCallback( aCallback, "fScheduleNextLauncherCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fScheduleNextLauncherCallback){}/* CQT */
            aPrototype.fScheduleNextLauncherCallback = fScheduleNextLauncherCallback;









            var fExceptionNextLauncherHandler = function( theCallback, theMethodName) {

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
            if( fExceptionNextLauncherHandler){}/* CQT */
            aPrototype.fExceptionNextLauncherHandler = fExceptionNextLauncherHandler;
















            var fOverallTtstLauncherTopCallback = function( theCallback) {
                var aMethodName = "fOverallTtstLauncherTopCallback";

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

                var aWrappedCallback = this.fChainNewTtstLauncherCallbackForCallback( aCallback, "fOverallTtstLauncherTopCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fOverallTtstLauncherTopCallback){}/* CQT */
            aPrototype.fOverallTtstLauncherTopCallback = fOverallTtstLauncherTopCallback;










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


                    var aCallback = this.fOverallTtstLauncherTopCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, this.EVENTKIND_FAIL, null, "!this.fOverallTtstLauncherTopCallback( theCallback)", null));
                        return;
                    }


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToScheduleNextLaunchtogetherPath( aCallback);
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








            var pF_TtstLauncherTop = function( theCallback) {

                var aMethodName = "pF_TtstLauncherTop";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                try {


                    var aThis = this;
                    theM_nextticker.pNextTick(
                        function() {

                            try {

                                var someTestFunctions = [
                                    aThis.pSL_loadcmpandtestspaths.bind( aThis),
                                    aThis.pSL_launchMany.bind( aThis)
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


                                var aWrappedCallback = aThis.fChainNewTtstLauncherCallbackForCallback( aSeriesRunnedCallback, "pF_TtstLauncherTop", theCallback, aMethodName);

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
            if( pF_TtstLauncherTop){}/* CQT */
            aPrototype.pF_TtstLauncherTop = pF_TtstLauncherTop;





            return aPrototype;

        })();




        var TtstLauncherTop_Constructor = function( theTitle, theLaunchtogetherPaths) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_LaunchtogetherPaths = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;

            this._pInit_TtstLauncherTop( theTitle, theLaunchtogetherPaths);
        };
        TtstLauncherTop_Constructor.prototype = aTtstLauncherTop_Prototype;





        var TtstLauncherTop_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = aTtstLauncherTop_Prototype;
            this._v_Type = null;

            this._v_LaunchtogetherPaths = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;
        };
        TtstLauncherTop_SuperPrototypeConstructor.prototype = aTtstLauncherTop_Prototype;











        var LauncherTopFactory = function(
            theTitle, theLaunchtogetherPaths) {

            var aLauncherTop = new TtstLauncherTop_Constructor( theTitle, theLaunchtogetherPaths);

            var aMethod = aLauncherTop.pF_TtstLauncherTop.bind( aLauncherTop);

            return { "launcher": aLauncherTop, "method": aMethod};
        };











        var fDefineTtstLauncherTop_andRunIfFirst = function( theTitle, theLaunchtogetherPaths) {


            var aLastLauncher = null;


            var aLauncherFactory = function() {

                var aLauncherAndMethod =  LauncherTopFactory( theTitle, theLaunchtogetherPaths);
                if( !aLauncherAndMethod) {
                    return null;
                }

                aLastLauncher = aLauncherAndMethod[ "launcher"];

                return aLauncherAndMethod;
            };



            var aModule = {
                "LaunchtogetherPaths": theLaunchtogetherPaths,
                "LauncherFactory": aLauncherFactory
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
            "TtstLauncherTop_Prototype": aTtstLauncherTop_Prototype,
            "TtstLauncherTop_Constructor": TtstLauncherTop_Constructor,
            "TtstLauncherTop_SuperPrototypeConstructor": TtstLauncherTop_SuperPrototypeConstructor,

            "LauncherTopFactory": LauncherTopFactory,

            "fDefineTtstLauncherTop_andRunIfFirst":  fDefineTtstLauncherTop_andRunIfFirst
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ttstlaunchergeneral = require('./ttstlauncher-general');
            var aM_firsttorun          = require('../../common-test/launchers/firsttorun');
            var aM_cmploader           = require('../../common-test/resloader/cmploader');
            var aM_nextticker          = require('../../infrasvcs/nextticker/nextticker');
            var aM_exiter              = require('../../infrasvcs/exiter/exiter');

            return aMod_definer(
                aM_ttstlaunchergeneral,
                aM_firsttorun,
                aM_cmploader,
                aM_nextticker,
                aM_exiter
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./ttstlauncher-general",
            "../../common-test/launchers/firsttorun",
            "../../common-test/resloader/cmploader",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/exiter/exiter"
        ], function (
                theM_ttstlaunchergeneral,
                theM_firsttorun,
                theM_cmploader,
                theM_nextticker,
                theM_exiter
            ) {
            return aMod_definer(
                theM_ttstlaunchergeneral,
                theM_firsttorun,
                theM_cmploader,
                theM_nextticker,
                theM_exiter
            );
        });
    }

})();

