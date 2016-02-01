'use strict';

/*
 ttstlauncher-one-bad.js
 Created 201408261417
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

    var aMod_definer = function( theM_ttstlauncherone,
                                 theM_firsttorun,
                                 theM_cmploader,
                                 theM_nextticker,
                                 theM_exiter) {


        var ModuleName     = "ttstlauncher-one-bad";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var aTtstLauncherOneBad_Prototype = (function() {


            var aPrototype = new theM_ttstlauncherone.TtstLauncherOne_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_ttstlauncherone.TtstLauncherOne_Prototype;


            aPrototype._v_Type = "TtstLauncherOneBad";



            aPrototype._v_ExpectedFailedConfigPaths = null;






            var _pInit = function( theTitle,
                                   theConfigSpecOrPath,
                                   theExpectSucceed,
                                   theAbandonAtFirstSyntaxError,
                                   theExpectedFailedConfigPaths) {

                this._pInit_TtstLauncherOneBad(
                    theTitle,
                    theConfigSpecOrPath,
                    theExpectSucceed,
                    theAbandonAtFirstSyntaxError,
                    theExpectedFailedConfigPaths);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_TtstLauncherOneBad = function(
                theTitle,
                theConfigSpecOrPath,
                theExpectSucceed,
                theAbandonAtFirstSyntaxError,
                theExpectedFailedConfigPaths) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstLauncherOne.apply( this, [
                    theTitle,
                    "@cmppath/ttst/specparser/specparser-someconfigsfailed-ttst",
                    "SpecParserSomeConfigsFailedTtst_Constructor",
                    "pF_Ttst",
                    theConfigSpecOrPath,
                    theExpectSucceed,
                    theAbandonAtFirstSyntaxError]
                );

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ExpectedFailedConfigPaths  = theExpectedFailedConfigPaths;
            };
            if( _pInit_TtstLauncherOneBad){}/* CQT */
            aPrototype._pInit_TtstLauncherOneBad = _pInit_TtstLauncherOneBad;











            var pSL_createTtst = function( theCallback) {

                var aMethodName = "pSL_createTtst";

                if( !this._v_TtstConstructorModuleName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_TtstConstructorModuleName", null));
                    return;
                }

                if( !this._v_TtstConstructorName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_TtstConstructorName", null));
                    return;
                }


                var aModule = theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( this._v_TtstConstructorModuleName);

                if( !aModule) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!fLoadCmpNamed( " + this._v_TtstConstructorModuleName + ")", null));
                }


                var aConstructor = aModule[ this._v_TtstConstructorName];
                if( !aConstructor) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!fLoadCmpNamed( " + this._v_TtstConstructorModuleName + ")[ " + this._v_TtstConstructorName + "]", null));
                }


                var aTtst = new aConstructor(
                    this._v_LauncherTitle,
                    this._v_TtstConfigSpecOrPath,
                    this._v_TtstExpectSucceed,
                    this._v_AbandonAtFirstSyntaxError,
                    this._v_ExpectedFailedConfigPaths
                );
                if( !aTtst) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!new fLoadCmpNamed( " + this._v_TtstConstructorModuleName + ")[ " + this._v_TtstConstructorName + "]", null));
                }

                this._v_LaunchedTtst = aTtst;


                theCallback( null, this.fRecord( aMethodName, "OK", aTtst, null, null));
            };
            if( pSL_createTtst){}/* CQT */
            aPrototype.pSL_createTtst = pSL_createTtst;











            var pF_TtstLauncherOneBad = function( theCallback) {

                var aMethodName = "pF_TtstLauncherOneBad";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                try {


                    var aThis = this;
                    theM_nextticker.pNextTick(
                        function() {

                            try {

                                var someTestFunctions = [
                                    aThis.pSL_createTtst.bind( aThis),
                                    aThis.pSL_runTtst.bind( aThis)
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


                                var aWrappedCallback = aThis.fChainNewTtstLauncherCallbackForCallback( aSeriesRunnedCallback, "pF_TtstLauncherOneBad", theCallback, aMethodName);

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
            if( pF_TtstLauncherOneBad){}/* CQT */
            aPrototype.pF_TtstLauncherOneBad = pF_TtstLauncherOneBad;








            return aPrototype;

        })();




        var TtstLauncherOneBad_Constructor = function(  theTitle,
                                                     theConfigSpecOrPath,
                                                     theExpectSucceed,
                                                     theAbandonAtFirstSyntaxError,
                                                     theExpectedFailedConfigPaths) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlauncherone.TtstLauncherOne_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ExpectedFailedConfigPaths  = null;
            this._pInit_TtstLauncherOneBad(
                theTitle,
                theConfigSpecOrPath,
                theExpectSucceed,
                theAbandonAtFirstSyntaxError,
                theExpectedFailedConfigPaths);
        };
        TtstLauncherOneBad_Constructor.prototype = aTtstLauncherOneBad_Prototype;





        var TtstLauncherOneBad_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlauncherone.TtstLauncherOne_Prototype;

            this._v_Prototype = aTtstLauncherOneBad_Prototype;
            this._v_Type = null;

            this._v_ExpectedFailedConfigPaths  = null;
        };
        TtstLauncherOneBad_SuperPrototypeConstructor.prototype = aTtstLauncherOneBad_Prototype;








        var TtstLauncherOneBadFactory = function(
            theTitle,
            theConfigSpecOrPath,
            theExpectSucceed,
            theAbandonAtFirstSyntaxError,
            theExpectedFailedConfigPaths) {

            var aTtstLauncherOneBad = new TtstLauncherOneBad_Constructor(
                theTitle,
                theConfigSpecOrPath,
                theExpectSucceed,
                theAbandonAtFirstSyntaxError,
                theExpectedFailedConfigPaths);

            var aMethod = aTtstLauncherOneBad.pF_TtstLauncherOneBad.bind( aTtstLauncherOneBad);

            return { "launcher": aTtstLauncherOneBad, "method": aMethod};
        };












        var fDefineTtstLauncherOneBad_andRunIfFirst = function(
            theTitle,
            theConfigSpecOrPath,
            theExpectSucceed,
            theAbandonAtFirstSyntaxError,
            theExpectedFailedConfigPaths) {

            var aLastLauncher = null;


            var aTitle = theTitle;
            var aConfigSpecOrPath = theConfigSpecOrPath;
            var aExpectSucceed = theExpectSucceed;
            var aAbandonAtFirstSyntaxError = theAbandonAtFirstSyntaxError;
            var aExpectedFailedConfigPaths = theExpectedFailedConfigPaths;


            var aTtstLauncherFactory = function() {

                var aLauncherAndMethod =  TtstLauncherOneBadFactory(
                    aTitle,
                    aConfigSpecOrPath,
                    aExpectSucceed,
                    aAbandonAtFirstSyntaxError,
                    aExpectedFailedConfigPaths
                );
                if( !aLauncherAndMethod) {
                    return null;
                }

                aLastLauncher = aLauncherAndMethod[ "launcher"];

                return aLauncherAndMethod;
            };



            var aModule = {
                "LauncherFactory":     aTtstLauncherFactory
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


                    var aLauncherAndMethod = aTtstLauncherFactory();
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
            "TtstLauncherOneBad_Prototype": aTtstLauncherOneBad_Prototype,
            "TtstLauncherOneBad_Constructor": TtstLauncherOneBad_Constructor,
            "TtstLauncherOneBad_SuperPrototypeConstructor": TtstLauncherOneBad_SuperPrototypeConstructor,

            "TtstLauncherOneBadFactory": TtstLauncherOneBadFactory,

            "fDefineTtstLauncherOneBad_andRunIfFirst": fDefineTtstLauncherOneBad_andRunIfFirst
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





        return aModule;
    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ttstlauncherone = require('./ttstlauncher-one');
            var aM_firsttorun      = require('../../common-test/launchers/firsttorun');
            var aM_cmploader       = require('../../common-test/resloader/cmploader');
            var aM_nextticker      = require('../../infrasvcs/nextticker/nextticker');
            var aM_exiter          = require('../../infrasvcs/exiter/exiter');

            return aMod_definer(
                aM_ttstlauncherone,
                aM_firsttorun,
                aM_cmploader,
                aM_nextticker,
                aM_exiter);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./ttstlauncher-one",
            "../../common-test/launchers/firsttorun",
            "../../common-test/resloader/cmploader",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/exiter/exiter"
        ], function (
            theM_ttstlauncherone,
            theM_firsttorun,
            theM_cmploader,
            theM_nextticker,
            theM_exiter) {
            return aMod_definer(
                theM_ttstlauncherone,
                theM_firsttorun,
                theM_cmploader,
                theM_nextticker,
                theM_exiter
            );
        });
    }

})();

