'use strict';

/*
 delay-test.js
 Created 201408050911
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_timeouter,
                                 theM_overrider) {

        var ModuleName     = "delay-test";
        var ModulePackages = "general-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName || "delay-test.js");}





        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.DELAY_DEFAULT = 0;

            theToInit.LOGMINDELAY   = 2000;

            theToInit.LOGDELAYBEGIN = true;
            theToInit.LOGDELAYDONE  = true;

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



            theToInit.PARMSPREFIX_DELAY = "delay";

            theToInit.PARMS_DELAY = [];

            theToInit.PARM_DELAY_MILLIS   = theToInit.PARMSPREFIX_DELAY + ".millis";

            theToInit.PARMS_DELAY = [
                theToInit.PARM_DELAY_MILLIS
            ];



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








        var aDelayTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "DelayTest";


            aPrototype._v_Delay = null;




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Delay( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Delay = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Delay = this.DELAY_DEFAULT;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Delay", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Delay){}/* CQT */
            aPrototype._pInit_Delay = _pInit_Delay;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Delay( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Delay = function( theReleaseParms, theReleaseDone) {

                this._v_Delay = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Delay){}/* CQT */
            aPrototype._pRelease_Delay = _pRelease_Delay;











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

                this.pCleanUpTest_Delay( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Delay = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                this._v_Delay = undefined;

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Delay){}/* CQT */
            aPrototype.pCleanUpTest_Delay = pCleanUpTest_Delay;











            var pS_retrieveDelayParms = function( theCallback) {

                var aMethodName = "pS_retrieveDelayParms";

                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }



                var someParmsToResolve = this.PARMS_DELAY.slice();

                var someResolutionsByName = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);


                if( !someResolutionsByName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }


                var aDelayMillisResolution = someResolutionsByName[ this.PARM_DELAY_MILLIS];
                if( aDelayMillisResolution && aDelayMillisResolution._v_Success) {
                    this._v_Delay = aDelayMillisResolution._v_ParmValue;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_retrieveDelayParms){}/* CQT */
            aPrototype.pS_retrieveDelayParms = pS_retrieveDelayParms;













            var pS_delay = function( theCallback) {

                var aMethodName = "pS_delay";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);



                var aMillis = this._v_Delay;
                if( !aMillis || ( aMillis < 0)) {
                    aMillis = 0;
                }

                var aDelayCompletedCallback = this.fDelayCompletedCallback( theCallback, aMethodName, "fDelayCompletedCallback");

                if( this.LOGDELAYBEGIN && this.LOGMINDELAY && ( aMillis >= this.LOGMINDELAY)) {
                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_DELAYBEGIN, aMillis, null, null)
                }


                theM_timeouter.p_Timeout( aDelayCompletedCallback, aMillis);

            };
            if( pS_delay){}/* CQT */
            aPrototype.pS_delay = pS_delay;









            var fDelayCompletedCallback = function( theCallback, theMethodName, theCallbackName) {
                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function() {

                    if( aThis.LOGDELAYDONE && aThis.LOGMINDELAY && ( aMillis >= aThis.LOGMINDELAY)) {

                        var aMillis = aThis._v_Delay;
                        if( !aMillis || ( aMillis < 0)) {
                            aMillis = 0;
                        }

                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_DELAYDONE, aMillis, null, null)
                    }
                    
                    var aSuccessRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, null, null, null);
                    if( aSuccessRecord){}/* CQT */

                    theCallback( null, aSuccessRecord);


                }).bind( this);

                var aCallbackName = theCallbackName;
                if( !aCallbackName) {
                    aCallbackName = "fDelayCompletedCallback";
                }
                var aWrappedCallback = this.fChainNewTestCallbackForCallback( aCallback, aCallbackName, theCallback, theMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;


            };
            if( fDelayCompletedCallback){}/* CQT */
            aPrototype.fDelayCompletedCallback = fDelayCompletedCallback;








            var pF_Delay = function( theCallback) {
                var aMethodName = "pF_Delay";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Delay){}/* CQT */
            aPrototype.pF_Delay = pF_Delay;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Delay.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Delay = function( theCallback) {
                var aMethodName = "pSS_Delay";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_retrieveDelayParms.bind( this),
                    this.pS_delay.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Delay){}/* CQT */
            aPrototype.pSS_Delay = pSS_Delay;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = null;
                if( !( aPrototype._v_SuperPrototype.fToResultJSON === fToResultJSON)) {
                    aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);
                }
                else {
                    aResultJSON = {};
                }

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();




        var DelayTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Delay = null;

            this._pInit_Delay( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        DelayTest_Constructor.prototype = aDelayTest_Prototype;





        var DelayTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aDelayTest_Prototype;
            this._v_Type = null;

            this._v_Delay = null;
        };
        DelayTest_SuperPrototypeConstructor.prototype = aDelayTest_Prototype;



        var aModule = {
            "DelayTest_Prototype": aDelayTest_Prototype,
            "DelayTest_Constructor": DelayTest_Constructor,
            "DelayTest_SuperPrototypeConstructor": DelayTest_SuperPrototypeConstructor
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

            var aM_runsubs_test    = require('../common-test/runsubs-test');
            var aM_timeouter       = require('../infrasvcs/timeouter/timeouter');
            var aM_overrider       = require('../common-test/overrider');

            return aMod_definer(
                aM_runsubs_test,
                aM_timeouter,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/runsubs-test",
            "../infrasvcs/timeouter/timeouter",
            "../common-test/overrider"
        ], function (
            theM_runsubs_test,
            theM_timeouter,
            theM_overrider
        ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_timeouter,
                theM_overrider
            );
        });
    }


}());


