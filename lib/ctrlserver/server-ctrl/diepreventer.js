'use strict';

/*
 diepreventer.js
 Created 201408161733
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

    var aMod_definer =function( theM_ctrlrecorded,
                                theM_exceptiondetails,
                                theM_overrider,
                                theM_exiter,
                                theM_timeouter) {


        var ModuleName     = "diepreventer";
        var ModulePackages = "ctrlserver/server-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}



        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.KEEPENGAGEDTIMEOUTMILLIS = Math.floor( 1000 / 60);

            theToInit.KEEPENGAGEDMAXIMUMLOOPS  =  60 * 3;
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









        var pgInitModuleGlobalsOn = function( theToInit) {

            if( !theToInit) {
            }
        };



        var ModuleGlobals = { };
        pgInitModuleGlobalsOn( ModuleGlobals);









        var aDiePreventer_Prototype = (function() {


            var aPrototype = new theM_ctrlrecorded.CtrlRecorded_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;


            aPrototype._v_Type   = "DiePreventer";
            aPrototype._v_Module = null;

            aPrototype._v_PreventDeathTimeout = null;
            aPrototype._v_StopPreventDeath    = null;
            aPrototype._v_EngagedLoopCounter = null;








            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_DiePreventer( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_DiePreventer = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlRecorded.apply( this, [ theTitle, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_PreventDeathTimeout = null;
                this._v_StopPreventDeath    = null;
                this._v_EngagedLoopCounter = null;
            };
            if( _pInit_DiePreventer){}/* CQT */
            aPrototype._pInit_DiePreventer = _pInit_DiePreventer;






            var fIsPreventingDeath = function() {

                var aIsPreventing = false;
                if( this._v_PreventDeathTimeout && !this._v_StopPreventDeath) {
                    aIsPreventing = true;
                }

                return aIsPreventing;
            };
            if( fIsPreventingDeath){}/* CQT */
            aPrototype.fIsPreventingDeath = fIsPreventingDeath;









            var pPreventDeath = function() {
                if( this.fIsPreventingDeath()) {
                    return;
                }

                theM_exiter.pRegisterInterestedParty( this);

                this._v_EngagedLoopCounter = 0;

                this.pEngagedLoop();
            };
            if( pPreventDeath){}/* CQT */
            aPrototype.pPreventDeath = pPreventDeath;








            var pEngagedLoop = function() {

                this._v_PreventDeathTimeout = null;

                if( this._v_StopPreventDeath) {

                    theM_exiter.pDropInterestedParty( this);

                    return;
                }


                if( !( this._v_EngagedLoopCounter == null)) {

                    this._v_EngagedLoopCounter += 1;

                    if( this.KEEPENGAGEDMAXIMUMLOOPS && ( this.KEEPENGAGEDMAXIMUMLOOPS >= 0) &&
                        ( this._v_EngagedLoopCounter >= this.KEEPENGAGEDMAXIMUMLOOPS)) {

                        this.pDoNotPreventDeathAnyMore( );

                        return;
                    }
                }


                this._v_PreventDeathTimeout = theM_timeouter.p_Timeout( this.pEngagedLoop.bind( this), this.KEEPENGAGEDTIMEOUTMILLIS);
            };
            if( pEngagedLoop){}/* CQT */
            aPrototype.pEngagedLoop = pEngagedLoop;







            var pDoNotPreventDeathAnyMore= function() {

                this._v_StopPreventDeath = true;

                if( this._v_PreventDeathTimeout) {
                    theM_timeouter.p_ClearTimeout( this._v_PreventDeathTimeout);
                    this._v_PreventDeathTimeout = null;
                }

                theM_exiter.pDropInterestedParty( this);
            };
            if( pDoNotPreventDeathAnyMore){}/* CQT */
            aPrototype.pDoNotPreventDeathAnyMore = pDoNotPreventDeathAnyMore;








            var fExitVote = function( theExitCode) {
                if( theExitCode){}/* CQT */

                this.pDoNotPreventDeathAnyMore();

                return true;
            };
            if( fExitVote){}/* CQT */
            aPrototype.fExitVote = fExitVote;







            return aPrototype;

        })();









        var DiePreventer_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_PreventDeathTimeout = null;
            this._v_StopPreventDeath    = null;
            this._v_EngagedLoopCounter  = null;

            this._pInit_DiePreventer( theTitle, theIdentifier, theRecorder);
        };
        DiePreventer_Constructor.prototype = aDiePreventer_Prototype;






        var DiePreventer_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = aDiePreventer_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_PreventDeathTimeout = null;
            this._v_StopPreventDeath    = null;
            this._v_EngagedLoopCounter  = null;
        };
        DiePreventer_SuperPrototypeConstructor.prototype = aDiePreventer_Prototype;









        var aModule = {
            "DiePreventer_Prototype": aDiePreventer_Prototype,
            "DiePreventer_Constructor": DiePreventer_Constructor,
            "DiePreventer_SuperPrototypeConstructor": DiePreventer_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aDiePreventer_Prototype._v_Module = aModule;

        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ctrlrecorded     = require('../common-ctrl/ctrlrecorded');
            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');
            var aM_exiter           = require('../../infrasvcs/exiter/exiter');
            var aM_timeouter        = require('../../infrasvcs/timeouter/timeouter');



            return aMod_definer( aM_ctrlrecorded, aM_exceptiondetails, aM_overrider, aM_exiter, aM_timeouter);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-ctrl/ctrlrecorded",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider",
            "../../infrasvcs/exiter/exiter",
            "../../infrasvcs/timeouter/timeouter"
        ], function (
            theM_ctrlrecorded,
            theM_exceptiondetails,
            theM_overrider,
            theM_exiter,
            theM_timeouter
            ) {
            return aMod_definer(
                theM_ctrlrecorded,
                theM_exceptiondetails,
                theM_overrider,
                theM_exiter,
                theM_timeouter
            );
        });
    }

}());

















