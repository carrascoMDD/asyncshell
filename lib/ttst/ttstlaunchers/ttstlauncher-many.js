'use strict';

/*
 ttstlauncher-many.js
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

    var aMod_definer = function( theM_firsttorun,
                                 theM_ttstlaunchergeneral,
                                 theM_ttstlauncherone,
                                 theM_ttstlauncheronebad,
                                 theM_cmploader,
                                 theM_specloader,
                                 theM_nextticker,
                                 theM_exiter) {


        var ModuleName     = "ttstlauncher-many";
        var ModulePackages = "ttst";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var aTtstLauncherMany_Prototype = (function() {


            var aPrototype = new theM_ttstlaunchergeneral.TtstLauncherGeneral_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;


            aPrototype._v_Type = "TtstLauncherMany";


            aPrototype._v_LauncherSpecsOrPath = null;
            aPrototype._v_LauncherSpecs = null;


            aPrototype._v_SubLaunchers = null;

            aPrototype._v_AlreadyLaunched = null;




            var _pInit = function( theTitle, theLauncherSpecsOrPath) {

                this._pInit_TtstLauncherMany( theTitle, theLauncherSpecsOrPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_TtstLauncherMany = function( theTitle, theLauncherSpecsOrPath) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_TtstLauncherGeneral.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_LauncherSpecsOrPath = theLauncherSpecsOrPath;
                this._v_LauncherSpecs = null;

                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];
            };
            if( _pInit_TtstLauncherMany){}/* CQT */
            aPrototype._pInit_TtstLauncherMany = _pInit_TtstLauncherMany;











            var pSL_readTtstLauncherSpecs = function( theCallback) {

                var aMethodName = "pSL_readTtstLauncherSpecs";

                if( !this._v_LauncherSpecsOrPath) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this._v_LauncherSpecsOrPath", null));
                    return;
                }


                this._v_LauncherSpecs = null;



                if( typeof this._v_LauncherSpecsOrPath == "object") {

                    if( typeof this._v_LauncherSpecsOrPath.length == "undefined") {
                        this._v_LauncherSpecs = [ this._v_LauncherSpecsOrPath];
                    }
                    else {
                        this._v_LauncherSpecs = this._v_LauncherSpecsOrPath;
                    }

                    theCallback( null, this.fRecord( aMethodName, "OK", null, null, null));
                    return;
                }





                if( !( typeof this._v_LauncherSpecsOrPath == "string")) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!(typeof this._v_LauncherSpecsOrPath == 'object'') && !( typeof this._v_LauncherSpecsOrPath == 'string'')", null));
                    return;
                }


                var someLauncherSpecs = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( this._v_LauncherSpecsOrPath);

                if( someLauncherSpecs == null) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!fLoadSpecNamed( " + this._v_LauncherSpecsOrPath + ")", null));
                    return;
                }


                if( !( typeof someLauncherSpecs == "object")) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!( typeof fLoadSpecNamed( " + this._v_LauncherSpecsOrPath + ") == 'object')", null));
                    return;
                }


                if( typeof someLauncherSpecs.length == "undefined") {
                    someLauncherSpecs = [ someLauncherSpecs];
                }


                var allLauncherSpecs = [ ];

                var aNumLauncherSpecs = someLauncherSpecs.length;
                for( var aLauncherSpecIdx=0; aLauncherSpecIdx < aNumLauncherSpecs; aLauncherSpecIdx++) {
                    var aLauncherSpec = someLauncherSpecs[ aLauncherSpecIdx];
                    if( typeof aLauncherSpec == "object") {
                        allLauncherSpecs.push( aLauncherSpec);
                    }
                    else {
                        if( typeof aLauncherSpec == "string") {

                            var otherLauncherSpecs = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( aLauncherSpec);

                            if( otherLauncherSpecs && ( typeof otherLauncherSpecs == "object")) {

                                if( typeof otherLauncherSpecs.length == "undefined") {
                                    otherLauncherSpecs = [ otherLauncherSpecs];
                                }

                                Array.prototype.push.apply( allLauncherSpecs, otherLauncherSpecs);
                            }
                        }
                    }
                }


                this._v_LauncherSpecs = allLauncherSpecs;

                theCallback( null, this.fRecord( aMethodName, "OK", this._v_ConfigSpec, null, null));
            };
            if( pSL_readTtstLauncherSpecs){}/* CQT */
            aPrototype.pSL_readTtstLauncherSpecs = pSL_readTtstLauncherSpecs;











            var pInitFinderToScheduleNext = function() {
                this._v_SubLaunchers    = [ ];
                this._v_AlreadyLaunched = [ ];
            };
            if( pInitFinderToScheduleNext){}/* CQT */
            aPrototype.pInitFinderToScheduleNext = pInitFinderToScheduleNext;












            var pTryToScheduleNextTtstLaunchSpec = function( theCallback) {
                var aMethodName = "pTryToScheduleNextTtstLaunchSpec";
                if( aMethodName){}/* CQT */

                var aLauncherSpecToScheduleNext = this.fFindTtstLauncherSpecToScheduleNext();
                if( !aLauncherSpecToScheduleNext) {
                    theCallback();
                    return;
                }

                this._v_AlreadyLaunched.push( aLauncherSpecToScheduleNext);

                this.pScheduleNextTtstLaunchSpec( theCallback, aLauncherSpecToScheduleNext);
            };
            if( pTryToScheduleNextTtstLaunchSpec){}/* CQT */
            aPrototype.pTryToScheduleNextTtstLaunchSpec = pTryToScheduleNextTtstLaunchSpec;








            var fFindTtstLauncherSpecToScheduleNext = function() {

                if( !this._v_LauncherSpecs) {
                    return null;
                }

                var aPendingLauncherSpec = null;

                var aNumLauncherSpecs = this._v_LauncherSpecs.length;
                for( var aLauncherSpecIdx=0; aLauncherSpecIdx < aNumLauncherSpecs; aLauncherSpecIdx++) {

                    var aLauncherSpec = this._v_LauncherSpecs[ aLauncherSpecIdx];

                    if( this._v_AlreadyLaunched.indexOf( aLauncherSpec) < 0) {
                        aPendingLauncherSpec = aLauncherSpec;
                        break;
                    }
                }
                if( !aPendingLauncherSpec) {
                    return null;
                }

                return aPendingLauncherSpec;
            };
            if( fFindTtstLauncherSpecToScheduleNext){}/* CQT */
            aPrototype.fFindTtstLauncherSpecToScheduleNext = fFindTtstLauncherSpecToScheduleNext;










            var pScheduleNextTtstLaunchSpec = function( theCallback, theLauncherSpec) {

                var aMethodName = "pScheduleNextTtstLaunchSpec";

                if( !theLauncherSpec) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theLauncherSpec", null));
                    return;
                }

                if( typeof theLauncherSpec == "object") {
                    this.pScheduleNextTtstLaunchSpec_One( theCallback, theLauncherSpec);
                    return;
                }


                if( typeof theLauncherSpec == "string") {
                    this.pScheduleNextTtstLaunchSpec_Launchtogether( theCallback, theLauncherSpec);
                    return;
                }

                theCallback( this.fRecord( theMethodName, "FAIL", null, "!( typeof theLauncherSpec == 'object') && !( typeof theLauncherSpec == 'string')", null));
            };
            if( pScheduleNextTtstLaunchSpec){}/* CQT */
            aPrototype.pScheduleNextTtstLaunchSpec = pScheduleNextTtstLaunchSpec;










            var pScheduleNextTtstLaunchSpec_One = function( theCallback, theLauncherSpec) {

                var aMethodName = "pScheduleNextTtstLaunchSpec_One";

                if( !theLauncherSpec) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theLauncherSpec", null));
                    return;
                }

                var aTitle                     = theLauncherSpec[ "title"];
                var aTtstConstructorModuleName = theLauncherSpec[ "module"];
                var aTtstConstructorName       = theLauncherSpec[ "constructor"];
                var aTtstMethodName            = theLauncherSpec[ "method"];
                var aConfigSpecOrPath          = theLauncherSpec[ "specOrPath"];
                var aExpectedValues            = theLauncherSpec[ "expectedValues"];
                var aAbandonAtFirstSyntaxError = theLauncherSpec[ "abandonAtFirstSyntaxError"];
                var aExpectedFailedConfigPaths = theLauncherSpec[ "expectedFailedConfigPaths"];




                var aLauncherAndMethod = null;

                if( aExpectedFailedConfigPaths) {
                    aLauncherAndMethod = theM_ttstlauncheronebad.TtstLauncherOneBadFactory(
                        aTitle,
                        aConfigSpecOrPath,
                        aExpectedValues,
                        aAbandonAtFirstSyntaxError,
                        aExpectedFailedConfigPaths
                    );
                }
                else {
                    aLauncherAndMethod = theM_ttstlauncherone.TtstLauncherOneFactory(
                        aTitle,
                        aTtstConstructorModuleName,
                        aTtstConstructorName,
                        aTtstMethodName,
                        aConfigSpecOrPath,
                        aExpectedValues,
                        aAbandonAtFirstSyntaxError
                    );
                }


                if( !aLauncherAndMethod) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!TtstLauncherManyFactory() && !theM_launcherone.LauncherOneFactory()", null));
                }


                var aLauncher = aLauncherAndMethod[ "launcher"];
                if( !aLauncher) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!theM_launcherone.LauncherOneFactory().launcher", null));
                }
                this._v_SubLaunchers.push( aLauncher);


                var aMethod = aLauncherAndMethod[ "method"];
                if( !aMethod) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!theM_launcherone.LauncherOneFactory().method", null));
                }

                if( !( typeof aMethod == "function")) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!( typeof theM_launcherone.LauncherOneFactory().method == 'function)", null));
                }





                var aCallback = this.fScheduleNextTtstLauncherCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fScheduleNextTtstLauncherCallback( theCallback)", null));
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
            if( pScheduleNextTtstLaunchSpec_One){}/* CQT */
            aPrototype.pScheduleNextTtstLaunchSpec_One = pScheduleNextTtstLaunchSpec_One;









            var pScheduleNextTtstLaunchSpec_Launchtogether = function( theCallback, theLaunchtogetherPath) {

                var aMethodName = "pScheduleNextTtstLaunchSpec_Launchtogether";

                if( !theLaunchtogetherPath) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!theLaunchtogetherPath", null));
                    return;
                }


                var aModule = theM_cmploader.fgGlobalCmpLoader().fLoadCmpNamed( theLaunchtogetherPath);

                if( !aModule) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!fLoadCmpNamed( " + theLaunchtogetherPath + ")", null));
                }

                var someLauncherSpecs = aModule[ "LauncherSpecs"];
                if( !someLauncherSpecs) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!fLoadCmpNamed( " + theLaunchtogetherPath + ")[ LauncherSpecs]", null));
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
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!fLoadCmpNamed( " + theLaunchtogetherPath + ")[ LauncherFactory]().launcher", null));
                }
                this._v_SubLaunchers.push( aLauncher);


                var aMethod = aLauncherAndMethod[ "method"];
                if( !aMethod) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!fLoadCmpNamed( " + theLaunchtogetherPath + ")[ LauncherFactory]().method", null));
                }

                if( !( typeof aMethod == "function")) {
                    theCallback( this.fRecord( theMethodName, "FAIL", null, "!( typeof !fLoadCmpNamed( " + theLaunchtogetherPath + ")[ LauncherFactory]().method == 'function)", null));
                }





                var aCallback = this.fScheduleNextTtstLauncherCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, "FAIL", null, "!this.fScheduleNextTtstLauncherCallback( theCallback)", null));
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
            if( pScheduleNextTtstLaunchSpec_Launchtogether){}/* CQT */
            aPrototype.pScheduleNextTtstLaunchSpec_Launchtogether = pScheduleNextTtstLaunchSpec_Launchtogether;









            var fScheduleNextTtstLauncherCallback = function( theCallback) {
                var aMethodName = "fScheduleNextTtstLauncherCallback";

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

                    aThis.pTryToScheduleNextTtstLaunchSpec( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewTtstLauncherCallbackForCallback( aCallback, "fScheduleNextTtstLauncherCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fScheduleNextTtstLauncherCallback){}/* CQT */
            aPrototype.fScheduleNextTtstLauncherCallback = fScheduleNextTtstLauncherCallback;









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
















            var fOverallTtstLauncherManyCallback = function( theCallback) {
                var aMethodName = "fOverallTtstLauncherManyCallback";

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

                var aWrappedCallback = this.fChainNewTtstLauncherCallbackForCallback( aCallback, "fOverallTtstLauncherManyCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fOverallTtstLauncherManyCallback){}/* CQT */
            aPrototype.fOverallTtstLauncherManyCallback = fOverallTtstLauncherManyCallback;










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


                    var aCallback = this.fOverallTtstLauncherManyCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( aMethodName, this.EVENTKIND_FAIL, null, "!this.fOverallTtstLauncherManyCallback( theCallback)", null));
                        return;
                    }


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToScheduleNextTtstLaunchSpec( aCallback);
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








            var pF_TtstLauncherMany = function( theCallback) {

                var aMethodName = "pF_TtstLauncherMany";

                this.fRecord( aMethodName, "BEGIN", null, null, null);


                try {


                    var aThis = this;
                    theM_nextticker.pNextTick(
                        function() {

                            try {

                                var someTestFunctions = [
                                    aThis.pSL_loadcmpandtestspaths.bind( aThis),
                                    aThis.pSL_readTtstLauncherSpecs.bind( aThis),
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


                                var aWrappedCallback = aThis.fChainNewTtstLauncherCallbackForCallback( aSeriesRunnedCallback, "pF_TtstLauncherMany", theCallback, aMethodName);


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
            if( pF_TtstLauncherMany){}/* CQT */
            aPrototype.pF_TtstLauncherMany = pF_TtstLauncherMany;







            return aPrototype;

        })();




        var TtstLauncherMany_Constructor = function( theTitle, theLauncherSpecsOrPath) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_LauncherSpecsOrPath = null;

            this._v_LauncherSpecs = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;

            this._pInit_TtstLauncherMany( theTitle, theLauncherSpecsOrPath);
        };
        TtstLauncherMany_Constructor.prototype = aTtstLauncherMany_Prototype;





        var TtstLauncherMany_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ttstlaunchergeneral.TtstLauncherGeneral_Prototype;

            this._v_Prototype = aTtstLauncherMany_Prototype;
            this._v_Type = null;

            this._v_LauncherSpecsOrPath = null;

            this._v_LauncherSpecs = null;

            this._v_SubLaunchers    = null;
            this._v_AlreadyLaunched = null;
        };
        TtstLauncherMany_SuperPrototypeConstructor.prototype = aTtstLauncherMany_Prototype;











        var TtstLauncherManyFactory = function(
            theTitle, theLauncherSpecsOrPath) {

            var aLauncherMany = new TtstLauncherMany_Constructor( theTitle, theLauncherSpecsOrPath);

            var aMethod = aLauncherMany.pF_TtstLauncherMany.bind( aLauncherMany);

            return { "launcher": aLauncherMany, "method": aMethod};
        };











        var fDefineTtstLauncherMany_andRunIfFirst = function( theTitle, theLauncherSpecsOrPath) {


            var aLastLauncher = null;


            var aLauncherFactory = function() {

                var aLauncherAndMethod =  TtstLauncherManyFactory( theTitle, theLauncherSpecsOrPath);
                if( !aLauncherAndMethod) {
                    return null;
                }

                aLastLauncher = aLauncherAndMethod[ "launcher"];

                return aLauncherAndMethod;
            };



            var aModule = {
                "LauncherSpecs": theLauncherSpecsOrPath,
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
            "TtstLauncherMany_Prototype": aTtstLauncherMany_Prototype,
            "TtstLauncherMany_Constructor": TtstLauncherMany_Constructor,
            "TtstLauncherMany_SuperPrototypeConstructor": TtstLauncherMany_SuperPrototypeConstructor,

            "TtstLauncherManyFactory": TtstLauncherManyFactory,

            "fDefineTtstLauncherMany_andRunIfFirst":  fDefineTtstLauncherMany_andRunIfFirst
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_firsttorun          = require('../../common-test/launchers/firsttorun');
            var aM_ttstlaunchergeneral = require('./ttstlauncher-general');
            var aM_ttstlauncherone     = require('./ttstlauncher-one');
            var aM_ttstlauncheronebad  = require('./ttstlauncher-one-bad');
            var aM_cmploader           = require('../../common-test/resloader/cmploader');
            var aM_specloader          = require('../../common-test/resloader/specloader');
            var aM_nextticker          = require('../../infrasvcs/nextticker/nextticker');
            var aM_exiter              = require('../../infrasvcs/exiter/exiter');

            return aMod_definer(
                aM_firsttorun,
                aM_ttstlaunchergeneral,
                aM_ttstlauncherone,
                aM_ttstlauncheronebad,
                aM_cmploader,
                aM_specloader,
                aM_nextticker,
                aM_exiter
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../common-test/launchers/firsttorun",
            "./ttstlauncher-general",
            "./ttstlauncher-one",
            "./ttstlauncher-one-bad",
            "../../common-test/resloader/cmploader",
            "../../common-test/resloader/specloader",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/exiter/exiter"
        ], function (
                theM_firsttorun,
                theM_ttstlaunchergeneral,
                theM_ttstlauncherone,
                theM_ttstlauncheronebad,
                theM_cmploader,
                theM_specloader,
                theM_nextticker,
                theM_exiter
            ) {
            return aMod_definer(
                theM_firsttorun,
                theM_ttstlaunchergeneral,
                theM_ttstlauncherone,
                theM_ttstlauncheronebad,
                theM_cmploader,
                theM_specloader,
                theM_nextticker,
                theM_exiter
            );
        });
    }

})();

