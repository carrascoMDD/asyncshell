'use strict';

/*
 ttstlauncher-one-expected.js
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


        var ModuleName     = "ttstlauncher-one-expected";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var aTtstLauncherOneExpected_Prototype = (function() {


            var aPrototype = new theM_ttstlauncherone.TtstLauncherOne_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_ttstlauncherone.TtstLauncherOne_Prototype;


            aPrototype._v_Type = "TtstLauncherOneExpected";



            aPrototype._v_ExpectedValues = null;






            var _pInit = function( theTitle,
                                   theTtstConstructorModuleName,
                                   theTtstConstructorName,
                                   theTtstMethodName,
                                   theConfigSpecOrPath,
                                   theExpectedValues) {

                this._pInit_TtstLauncherOneExpected(
                    theTitle,
                    theTtstConstructorModuleName,
                    theTtstConstructorName,
                    theTtstMethodName,
                    theConfigSpecOrPath,
                    theExpectedValues);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_TtstLauncherOneExpected = function(
                theTitle,
                theTtstConstructorModuleName,
                theTtstConstructorName,
                theTtstMethodName,
                theConfigSpecOrPath,
                theExpectedValues) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstLauncherOne.apply( this, [
                    theTitle,
                    theTtstConstructorModuleName,
                    theTtstConstructorName,
                    theTtstMethodName,
                    theConfigSpecOrPath,
                    true,
                    true
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ExpectedValues  = theExpectedValues;
            };
            if( _pInit_TtstLauncherOneExpected){}/* CQT */
            aPrototype._pInit_TtstLauncherOneExpected = _pInit_TtstLauncherOneExpected;











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
                    this._v_ExpectedValues
                );
                if( !aTtst) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!new fLoadCmpNamed( " + this._v_TtstConstructorModuleName + ")[ " + this._v_TtstConstructorName + "]", null));
                }

                this._v_LaunchedTtst = aTtst;


                theCallback( null, this.fRecord( aMethodName, "OK", aTtst, null, null));
            };
            if( pSL_createTtst){}/* CQT */
            aPrototype.pSL_createTtst = pSL_createTtst;











            var pF_TtstLauncherOneExpected = function( theCallback) {

                var aMethodName = "pF_TtstLauncherOneExpected";

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


                                var aWrappedCallback = aThis.fChainNewTtstLauncherCallbackForCallback( aSeriesRunnedCallback, "pF_TtstLauncherOneExpected", theCallback, aMethodName);

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
            if( pF_TtstLauncherOneExpected){}/* CQT */
            aPrototype.pF_TtstLauncherOneExpected = pF_TtstLauncherOneExpected;








            return aPrototype;

        })();




        var TtstLauncherOneExpected_Constructor = function(  theTitle,
                                                             theTtstConstructorModuleName,
                                                             theTtstConstructorName,
                                                             theTtstMethodName,
                                                             theConfigSpecOrPath,
                                                             theExpectedValues) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlauncherone.TtstLauncherOne_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ExpectedValues  = null;
            this._pInit_TtstLauncherOneExpected(
                theTitle,
                theTtstConstructorModuleName,
                theTtstConstructorName,
                theTtstMethodName,
                theConfigSpecOrPath,
                theExpectedValues);
        };
        TtstLauncherOneExpected_Constructor.prototype = aTtstLauncherOneExpected_Prototype;





        var TtstLauncherOneExpected_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlauncherone.TtstLauncherOne_Prototype;

            this._v_Prototype = aTtstLauncherOneExpected_Prototype;
            this._v_Type = null;

            this._v_ExpectedValues  = null;
        };
        TtstLauncherOneExpected_SuperPrototypeConstructor.prototype = aTtstLauncherOneExpected_Prototype;








        var TtstLauncherOneExpectedFactory = function(
            theTitle,
            theTtstConstructorModuleName,
            theTtstConstructorName,
            theTtstMethodName,
            theConfigSpecOrPath,
            theExpectedValues) {

            var aTtstLauncherOneExpected = new TtstLauncherOneExpected_Constructor(
                theTitle,
                theTtstConstructorModuleName,
                theTtstConstructorName,
                theTtstMethodName,
                theConfigSpecOrPath,
                theExpectedValues);

            var aMethod = aTtstLauncherOneExpected.pF_TtstLauncherOneExpected.bind( aTtstLauncherOneExpected);

            return { "launcher": aTtstLauncherOneExpected, "method": aMethod};
        };












        var fDefineTtstLauncherOneExpected_andRunIfFirst = function(
            theTitle,
            theTtstConstructorModuleName,
            theTtstConstructorName,
            theTtstMethodName,
            theConfigSpecOrPath,
            theExpectedValues) {

            var aLastLauncher = null;


            var aTitle = theTitle;
            var aTtstConstructorModuleName = theTtstConstructorModuleName;
            var aTtstConstructorName = theTtstConstructorName;
            var aTtstMethodName = theTtstMethodName;
            var aConfigSpecOrPath = theConfigSpecOrPath;
            var aExpectedValues = theExpectedValues;


            var aTtstLauncherFactory = function() {

                var aLauncherAndMethod =  TtstLauncherOneExpectedFactory(
                    aTitle,
                    aTtstConstructorModuleName,
                    aTtstConstructorName,
                    aTtstMethodName,
                    aConfigSpecOrPath,
                    aExpectedValues
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
            "TtstLauncherOneExpected_Prototype": aTtstLauncherOneExpected_Prototype,
            "TtstLauncherOneExpected_Constructor": TtstLauncherOneExpected_Constructor,
            "TtstLauncherOneExpected_SuperPrototypeConstructor": TtstLauncherOneExpected_SuperPrototypeConstructor,

            "TtstLauncherOneExpectedFactory": TtstLauncherOneExpectedFactory,

            "fDefineTtstLauncherOneExpected_andRunIfFirst": fDefineTtstLauncherOneExpected_andRunIfFirst
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
                aM_exiter
            );
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
                theM_exiter
            ) {
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

