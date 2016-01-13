'use strict';

/*
 actionhandler.js
 Creado 201408161733
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

    var aMod_definer =function( theM_ctrlrecorded,
                                theM_exceptiondetails,
                                theM_overrider) {


        var ModuleName     = "actionhandler";
        var ModulePackages = "ctrlserver/actions-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }
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








        var aActionHandler_Prototype = (function() {


            var aPrototype = new theM_ctrlrecorded.CtrlRecorded_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            aPrototype._v_Type = "ActionHandler";

            aPrototype._v_Module = null;


            aPrototype._v_ActionsRegistry = null;
            aPrototype._v_ActionSpec      = null;

            aPrototype._v_HandlerFunction   = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder, theActionRegistry, theActionSpec) {

                this._pInit_ActionHandler( theTitle, theIdentifier, theRecorder, theActionRegistry, theActionSpec);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;





            var _pInit_ActionHandler = function( theTitle, theIdentifier, theRecorder, theActionRegistry, theActionSpec) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlRecorded.apply( this, [ theTitle, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_ActionsRegistry = theActionRegistry;
                this._v_ActionSpec      = theActionSpec;

                this._v_HandlerFunction   = null;
            };
            if( _pInit_ActionHandler){}/* CQT */
            aPrototype._pInit_ActionHandler = _pInit_ActionHandler;








            var fActionSpec = function( theActionSpec) {

                return this._v_ActionSpec;
            };
            if( fActionSpec){}/* CQT */
            aPrototype.fActionSpec = fActionSpec;






            var fIsRegisteredForActionSpec = function( theActionSpec) {

                if( !theActionSpec) {
                    return false;
                }

                if( !this._v_ActionSpec) {
                    return false;
                }

                var aIsSameAction = this._v_ActionSpec.fIsSameActionSpecAs( theActionSpec);
                if( aIsSameAction){}/* CQT */

                return aIsSameAction;
            };
            if( fIsRegisteredForActionSpec){}/* CQT */
            aPrototype.fIsRegisteredForActionSpec = fIsRegisteredForActionSpec;






            var pReleaseActionHandler = function( theActionSpec) {

                this._v_ActionSpec = null;
            };
            if( pReleaseActionHandler){}/* CQT */
            aPrototype.pReleaseActionHandler = pReleaseActionHandler;







            var fHandlerFunction = function() {

                if( !this._v_ActionSpec) {
                    return null;
                }

                var anActionSpec   = this._v_ActionSpec;

                var aThis = this;
                var aHandlerFunction = function( theRequest, theResponse) {

                    var aBehaviorFunction = anActionSpec.fBehaviorFunction();
                    if( aBehaviorFunction && ( typeof aBehaviorFunction == "function")) {

                        var aResult = aBehaviorFunction( theRequest, theResponse);
                        theResponse.send( aResult);
                        return;
                    }

                    var aBehaviorConstructor = anActionSpec.fBehaviorConstructor();
                    if( !aBehaviorConstructor) {
                        theResponse.send( "");
                        return;
                    }

                    var aBehavior = aBehaviorConstructor( anActionSpec._v_Title, aThis._v_Identifier, aThis._v_Recorder, aThis, anActionSpec);

                    if( aBehavior.fPerformBehavior) {
                        var aHandleResult = aBehavior.fPerformBehavior( theRequest, theResponse);
                        if( aHandleResult){}/* CQT */

                        theResponse.send( aHandleResult);
                        return;
                    }

                    theResponse.send( "");

                };
                if( aHandlerFunction){}/* CQT */


                return aHandlerFunction;
            };
            if( fHandlerFunction){}/* CQT */
            aPrototype.fHandlerFunction = fHandlerFunction;







            return aPrototype;

        })();









        var ActionHandler_Constructor = function( theTitle, theIdentifier, theRecorder, theActionRegistry, theActionSpec) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = null;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_ActionsRegistry = null;
            this._v_ActionSpec      = null;

            this._v_HandlerFunction   = null;

            this._pInit_ActionHandler( theTitle, theIdentifier, theRecorder, theActionRegistry, theActionSpec);
        };
        ActionHandler_Constructor.prototype = aActionHandler_Prototype;






        var ActionHandler_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = aActionHandler_Prototype;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_ActionsRegistry = null;
            this._v_ActionSpec      = null;

            this._v_HandlerFunction   = null;
        };
        ActionHandler_SuperPrototypeConstructor.prototype = aActionHandler_Prototype;









        var aModule = {
            "ActionHandler_Prototype": aActionHandler_Prototype,
            "ActionHandler_Constructor": ActionHandler_Constructor,
            "ActionHandler_SuperPrototypeConstructor": ActionHandler_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aActionHandler_Prototype._v_Module = aModule;


        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ctrlrecorded     = require('../common-ctrl/ctrlrecorded');
            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');

            return aMod_definer(
                aM_ctrlrecorded,
                aM_exceptiondetails,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-ctrl/ctrlrecorded",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider"
        ], function (
            theM_ctrlrecorded,
            theM_exceptiondetails,
            theM_overrider
            ) {
            return aMod_definer(
                theM_ctrlrecorded,
                theM_exceptiondetails,
                theM_overrider
            );
        });
    }

}());

















