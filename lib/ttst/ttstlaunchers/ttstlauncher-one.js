'use strict';

/*
 ttstlauncher-one.js
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

    var aMod_definer = function( theM_ttstlaunchergeneral,
                                 theM_firsttorun,
                                 theM_cmploader,
                                 theM_nextticker,
                                 theM_exiter) {


        var ModuleName     = "ttstlauncher-one";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var aTtstLauncherOne_Prototype = (function() {


            var aPrototype = new theM_ttstlaunchergeneral.TtstLauncherGeneral_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;


            aPrototype._v_Type = "TtstLauncherOne";



            aPrototype._v_TtstConstructorModuleName = null;
            aPrototype._v_TtstConstructorName       = null;
            aPrototype._v_TtstMethodName            = null;

            aPrototype._v_TtstConfigSpecOrPath      = null;

            aPrototype._v_TtstExpectSucceed         = null;
            aPrototype._v_AbandonAtFirstSyntaxError = null;


            aPrototype._v_LaunchedTtst = null;




            var _pInit = function( theTitle,
                                   theTtstConstructorModuleName,
                                   theTtstConstructorName,
                                   theTtstMethodName,
                                   theConfigSpecOrPath,
                                   theExpectSucceed,
                                   theAbandonAtFirstSyntaxError) {

                this._pInit_TtstLauncherOne(
                    theTitle,
                    theTtstConstructorModuleName,
                    theTtstConstructorName,
                    theTtstMethodName,
                    theConfigSpecOrPath,
                    theExpectSucceed,
                    theAbandonAtFirstSyntaxError);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_TtstLauncherOne = function(
                theTitle,
                theTtstConstructorModuleName,
                theTtstConstructorName,
                theTtstMethodName,
                theConfigSpecOrPath,
                theExpectSucceed,
                theAbandonAtFirstSyntaxError) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstLauncherGeneral.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_TtstConstructorModuleName  = theTtstConstructorModuleName;
                this._v_TtstConstructorName        = theTtstConstructorName;
                this._v_TtstMethodName             = theTtstMethodName;
                this._v_TtstConfigSpecOrPath       = theConfigSpecOrPath;
                this._v_TtstExpectSucceed          = theExpectSucceed;
                this._v_AbandonAtFirstSyntaxError  = theAbandonAtFirstSyntaxError;


                this._v_LaunchedTtst = null;
            };
            if( _pInit_TtstLauncherOne){}/* CQT */
            aPrototype._pInit_TtstLauncherOne = _pInit_TtstLauncherOne;











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
                    this._v_AbandonAtFirstSyntaxError
                );
                if( !aTtst) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!new fLoadCmpNamed( " + this._v_TtstConstructorModuleName + ")[ " + this._v_TtstConstructorName + "]", null));
                }

                this._v_LaunchedTtst = aTtst;


                theCallback( null, this.fRecord( aMethodName, "OK", aTtst, null, null));
            };
            if( pSL_createTtst){}/* CQT */
            aPrototype.pSL_createTtst = pSL_createTtst;











            var pSL_runTtst = function( theCallback) {

                var aMethodName = "pSL_runTtst";

                if( !this._v_LaunchedTtst) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_LaunchedTtst", null));
                    return;
                }


                if( !this._v_TtstMethodName) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_TtstMethodName", null));
                    return;
                }

                var aTtstMethod = this._v_LaunchedTtst[ this._v_TtstMethodName];
                if( !aTtstMethod) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_LaunchedTtst[ " + this._v_TtstMethodNam + "]", null));
                    return;
                }

                if( !( typeof aTtstMethod == "function")) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "! !( typeof this._v_LaunchedTtst[ " + this._v_TtstMethodNam + "] == 'function')", null));
                    return;
                }

                var aBoundTtstMethod = aTtstMethod.bind( this._v_LaunchedTtst);


                var aThis = this;
                try {
                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aBoundTtstMethod(
                                    function( theError) {

                                        if( theError) {
                                            theCallback( theError);
                                            return;
                                        }

                                        theCallback();
                                    }
                                );
                            }
                            catch( anException) {
                                var aExceptionDetail = aThis.fExceptionDetail( anException);
                                var aRecord = aThis.fRecord( aMethodName, "CATCHED_EXCEPTION", aThis._v_LaunchedTtst, anException, aExceptionDetail);
                                theCallback( aThis.fRecord( aMethodName, "FAIL", aThis._v_LaunchedTtst, aRecord, null));
                            }
                        }
                    );
                }
                catch( anException) {
                    var aExceptionDetail = this.fExceptionDetail( anException);
                    var aRecord = this.fRecord( aMethodName, "CATCHED_EXCEPTION", this._v_LaunchedTtst, anException, aExceptionDetail);
                    theCallback( this.fRecord( aMethodName, "FAIL", this._v_LaunchedTtst, aRecord, null));
                }

            };
            if( pSL_runTtst){}/* CQT */
            aPrototype.pSL_runTtst = pSL_runTtst;








            var pF_TtstLauncherOne = function( theCallback) {

                var aMethodName = "pF_TtstLauncherOne";

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


                                var aWrappedCallback = aThis.fChainNewTtstLauncherCallbackForCallback( aSeriesRunnedCallback, "pF_TtstLauncherOne", theCallback, aMethodName);

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
            if( pF_TtstLauncherOne){}/* CQT */
            aPrototype.pF_TtstLauncherOne = pF_TtstLauncherOne;








            return aPrototype;

        })();




        var TtstLauncherOne_Constructor = function(  theTitle,
                                                     theTtstConstructorModuleName,
                                                     theTtstConstructorName,
                                                     theTtstMethodName,
                                                     theConfigSpecOrPath,
                                                     theExpectSucceed,
                                                     theAbandonAtFirstSyntaxError) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_TtstConstructorModuleName  = null;
            this._v_TtstConstructorName        = null;
            this._v_TtstMethodName             = null;

            this._v_TtstConfigSpecOrPath       = null;

            this._v_TtstExpectSucceed          = null;
            this._v_AbandonAtFirstSyntaxError  = null;

            this._v_LaunchedTtst               = null;

            this._pInit_TtstLauncherOne(
                theTitle,
                theTtstConstructorModuleName,
                theTtstConstructorName,
                theTtstMethodName,
                theConfigSpecOrPath,
                theExpectSucceed,
                theAbandonAtFirstSyntaxError);
        };
        TtstLauncherOne_Constructor.prototype = aTtstLauncherOne_Prototype;





        var TtstLauncherOne_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = aTtstLauncherOne_Prototype;
            this._v_Type = null;

            this._v_TtstConstructorModuleName  = null;
            this._v_TtstConstructorName        = null;
            this._v_TtstMethodName             = null;

            this._v_TtstConfigSpecOrPath       = null;

            this._v_TtstExpectSucceed          = null;
            this._v_AbandonAtFirstSyntaxError  = null;

            this._v_LaunchedTtst               = null
        };
        TtstLauncherOne_SuperPrototypeConstructor.prototype = aTtstLauncherOne_Prototype;








        var TtstLauncherOneFactory = function(
            theTitle,
            theTtstConstructorModuleName,
            theTtstConstructorName,
            theTtstMethodName,
            theConfigSpecOrPath,
            theExpectSucceed,
            theAbandonAtFirstSyntaxError) {

            var aTtstLauncherOne = new TtstLauncherOne_Constructor(
                theTitle,
                theTtstConstructorModuleName,
                theTtstConstructorName,
                theTtstMethodName,
                theConfigSpecOrPath,
                theExpectSucceed,
                theAbandonAtFirstSyntaxError);

            var aMethod = aTtstLauncherOne.pF_TtstLauncherOne.bind( aTtstLauncherOne);

            return { "launcher": aTtstLauncherOne, "method": aMethod};
        };












        var fDefineTtstLauncherOne_andRunIfFirst = function(
            theTitle,
            theTtstConstructorModuleName,
            theTtstConstructorName,
            theTtstMethodName,
            theConfigSpecOrPath,
            theExpectSucceed,
            theAbandonAtFirstSyntaxError) {

            var aLastLauncher = null;


            var aTitle = theTitle;
            var aTtstConstructorModuleName = theTtstConstructorModuleName;
            var aTtstConstructorName = theTtstConstructorName;
            var aTtstMethodName = theTtstMethodName;
            var aConfigSpecOrPath = theConfigSpecOrPath;
            var aExpectSucceed = theExpectSucceed;
            var aAbandonAtFirstSyntaxError = theAbandonAtFirstSyntaxError;
            
            
            var aTtstLauncherFactory = function() {

                var aLauncherAndMethod =  TtstLauncherOneFactory(
                    aTitle,
                    aTtstConstructorModuleName,
                    aTtstConstructorName,
                    aTtstMethodName,
                    aConfigSpecOrPath,
                    aExpectSucceed,
                    aAbandonAtFirstSyntaxError
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
            "TtstLauncherOne_Prototype": aTtstLauncherOne_Prototype,
            "TtstLauncherOne_Constructor": TtstLauncherOne_Constructor,
            "TtstLauncherOne_SuperPrototypeConstructor": TtstLauncherOne_SuperPrototypeConstructor,

            "TtstLauncherOneFactory": TtstLauncherOneFactory,

            "fDefineTtstLauncherOne_andRunIfFirst": fDefineTtstLauncherOne_andRunIfFirst
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

