'use strict';

/*
 actionsregistry.js
 Created 201408081950
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

    var aMod_definer = function( theM_ctrlrecorded,
                                 theM_actionhandler,
                                 theM_exceptiondetails,
                                 theM_overrider) {


        var ModuleName     = "actionsregistry";
        var ModulePackages = "ctrlserver/ctrlactions";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.RECORD_REGISTRATION_FAILS = true;
            theToInit.RECORD_REGISTRATION_OKS   = true;

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









        var anActionsRegistry_Prototype = (function() {


            var aPrototype = new theM_ctrlrecorded.CtrlRecorded_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            aPrototype._v_Type = "ActionsRegistry";

            aPrototype._v_Module = null;


            aPrototype._v_CtrlServer        = null;
            aPrototype._v_ActionHandlers = null;







            var _pInit = function( theTitle, theIdentifier, theRecorder, theCtrlServer) {

                this._pInit_ActionsRegistry( theTitle, theIdentifier, theRecorder, theCtrlServer);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_ActionsRegistry = function( theTitle, theIdentifier, theRecorder, theCtrlServer) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlRecorded.apply( this, [ theTitle, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_CtrlServer        = theCtrlServer;
                this._v_ActionHandlers    = [ ];
            };
            if( _pInit_ActionsRegistry){}/* CQT */
            aPrototype._pInit_ActionsRegistry = _pInit_ActionsRegistry;








            var pReleaseActionsRegistry = function( ) {
                this.fUnregisterAllActionSpecs();
            };
            if( pReleaseActionsRegistry){}/* CQT */
            aPrototype.pReleaseActionsRegistry = pReleaseActionsRegistry;







            var fRegisterActionSpec = function( theActionSpec) {

                if( !theActionSpec) {
                    return false;
                }

                if( !this._v_CtrlServer) {
                    return false;
                }

                if( this.fHasRegisteredAction( theActionSpec)) {
                    if( !this.fUnregisterActionSpec( theActionSpec)) {
                        return false;
                    }
                }



                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }
                aTitle += "-For-";
                if( theActionSpec._v_Title) {
                    aTitle += theActionSpec._v_Title;
                }
                else {
                    aTitle += "?";
                }

                var anActionHandler = new theM_actionhandler.ActionHandler_Constructor(
                    aTitle,
                    this._v_Identifier,
                    this._v_Recorder,
                    this,
                    theActionSpec
                );


                this._v_ActionHandlers.push( anActionHandler);


                var aCtrlListener = this._v_CtrlServer.fCtrlListener();
                if( aCtrlListener) {

                    if( !theActionSpec._v_ActionMethod) {
                        return false;
                    }

                    if( !theActionSpec._v_ActionPort) {
                        return false;
                    }

                    if( !theActionSpec._v_ActionRoute) {
                        return false;
                    }


                    var aHandlerFunction = anActionHandler.fHandlerFunction();
                    if( !aHandlerFunction) {
                        return false;
                    }


                    var anAddRouteResult = null;

                    if( theActionSpec._v_ActionMethod.toUpperCase() == theActionSpec.METHOD_GET) {

                        anAddRouteResult = aCtrlListener.fAddRoute_Get(
                            theActionSpec._v_ActionPort,
                            theActionSpec._v_ActionRoute,
                            aHandlerFunction
                        );
                    }
                    else {
                        if( theActionSpec._v_ActionMethod.toUpperCase() == theActionSpec.METHOD_POST) {

                            anAddRouteResult = aCtrlListener.fAddRoute_Post(
                                theActionSpec._v_ActionPort,
                                theActionSpec._v_ActionRoute,
                                aHandlerFunction
                            );
                        }

                    }

                    if( !anAddRouteResult) {
                        return false;
                    }
                }

                return true;

            };
            if( fRegisterActionSpec){}/* CQT */
            aPrototype.fRegisterActionSpec = fRegisterActionSpec;










            var fHasRegisteredAction = function( theActionSpec) {

                if( !theActionSpec) {
                    return false;
                }

                if( !this._v_ActionHandlers) {
                    return false;
                }

                var someActionHandlers = this._v_ActionHandlers.slice();
                var aNumActionHandlers = this._v_ActionHandlers.length;
                for( var anActionHandlerIdx=0; anActionHandlerIdx < aNumActionHandlers; anActionHandlerIdx++) {

                    var anActionHandler = someActionHandlers[ anActionHandlerIdx];
                    if( anActionHandler) {

                        if( anActionHandler.fIsRegisteredForActionSpec( theActionSpec)) {

                            return true;
                        }
                    }
                }

                return false;

            };
            if( fHasRegisteredAction){}/* CQT */
            aPrototype.fHasRegisteredAction = fHasRegisteredAction;













            var fUnregisterActionSpec = function( theActionSpec) {

                if( !theActionSpec) {
                    return false;
                }

                if( !this._v_ActionHandlers) {
                    return true;
                }


                var someActionHandlers = this._v_ActionHandlers.slice();
                var aNumActionHandlers = this._v_ActionHandlers.length;
                for( var anActionHandlerIdx=0; anActionHandlerIdx < aNumActionHandlers; anActionHandlerIdx++) {

                    var anActionHandler = someActionHandlers[ anActionHandlerIdx];
                    if( anActionHandler) {

                        if( anActionHandler.fIsRegisteredForActionSpec( theActionSpec)) {

                            this._v_ActionHandlers.splice( anActionHandlerIdx);

                            var aCtrlListener = this._v_CtrlServer.fCtrlListener();
                            if( aCtrlListener) {

                                if( !theActionSpec._v_ActionMethod) {
                                    return false;
                                }

                                if( !theActionSpec._v_ActionPort) {
                                    return false;
                                }

                                if( !theActionSpec._v_ActionRoute) {
                                    return false;
                                }


                                var aRemoveRouteResult = null;

                                if( theActionSpec._v_ActionMethod == theActionSpec.METHOD_GET) {

                                    aRemoveRouteResult = aCtrlListener.fRemoveRoute_Get(
                                        theActionSpec._v_ActionPort,
                                        theActionSpec._v_ActionRoute
                                    );
                                }
                                else {
                                    if( theActionSpec._v_ActionMethod == theActionSpec.METHOD_POST) {
                                        aRemoveRouteResult = aCtrlListener.fRemoveRoute_Post(
                                            theActionSpec._v_ActionPort,
                                            theActionSpec._v_ActionRoute
                                        );
                                    }
                                }

                                if( !aRemoveRouteResult) {
                                    return false;
                                }
                            }

                            anActionHandler.pReleaseActionHandler();

                            return true;
                        }
                    }
                }

                return true;
            };
            if( fUnregisterActionSpec){}/* CQT */
            aPrototype.fUnregisterActionSpec = fUnregisterActionSpec;









            var fUnregisterAllActionSpecs = function() {

                if( !this._v_ActionHandlers) {
                    return true;
                }


                var someActionHandlers = this._v_ActionHandlers.slice();
                var aNumActionHandlers = this._v_ActionHandlers.length;
                for( var anActionHandlerIdx=0; anActionHandlerIdx < aNumActionHandlers; anActionHandlerIdx++) {

                    var anActionHandler = someActionHandlers[ anActionHandlerIdx];
                    if( anActionHandler) {

                        var anActionSpec = anActionHandler.fActionSpec();

                        if( anActionSpec) {

                            this._v_ActionHandlers.splice( anActionHandlerIdx);

                            var aCtrlListener = this._v_CtrlServer.fCtrlListener();
                            if( aCtrlListener) {

                                if( !anActionSpec._v_ActionMethod) {
                                    continue;
                                }

                                if( !anActionSpec._v_ActionPort) {
                                    continue;
                                }

                                if( !anActionSpec._v_ActionRoute) {
                                    continue;
                                }


                                var aRemoveRouteResult = null;

                                if( anActionSpec._v_ActionMethod == anActionSpec.METHOD_GET) {

                                    aRemoveRouteResult = aCtrlListener.fRemoveRoute_Get(
                                        anActionSpec._v_ActionPort,
                                        anActionSpec._v_ActionRoute
                                    );
                                }
                                else {
                                    if( anActionSpec._v_ActionMethod == anActionSpec.METHOD_POST) {
                                        aRemoveRouteResult = aCtrlListener.fRemoveRoute_Post(
                                            anActionSpec._v_ActionPort,
                                            anActionSpec._v_ActionRoute
                                        );
                                    }
                                }

                                if( !aRemoveRouteResult) {
                                    continue;
                                }
                            }
                        }

                        anActionHandler.pReleaseActionHandler();
                    }
                }

                return true;
            };
            if( fUnregisterAllActionSpecs){}/* CQT */
            aPrototype.fUnregisterAllActionSpecs = fUnregisterAllActionSpecs;








            return aPrototype;

        })();




        var ActionsRegistry_Constructor = function( theTitle, theIdentifier, theRecorder, theCtrlServer) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_CtrlServer        = null;
            this._v_ActionHandlers = null;

            this._pInit_ActionsRegistry( theTitle, theIdentifier, theRecorder, theCtrlServer);
        };
        ActionsRegistry_Constructor.prototype = anActionsRegistry_Prototype;





        var ActionsRegistry_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = anActionsRegistry_Prototype;
            this._v_Type = null;
            this._v_Module = null;

            this._v_CtrlServer        = null;
            this._v_ActionHandlers = null;
        };
        ActionsRegistry_SuperPrototypeConstructor.prototype = anActionsRegistry_Prototype;








        var aModule = {
            "ActionsRegistry_Prototype": anActionsRegistry_Prototype,
            "ActionsRegistry_Constructor": ActionsRegistry_Constructor,
            "ActionsRegistry_SuperPrototypeConstructor": ActionsRegistry_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        anActionsRegistry_Prototype._v_Module = aModule;


        return aModule;

    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ctrlrecorded      = require('../common-ctrl/ctrlrecorded');
            var aM_actionhandler     = require('../actions-ctrl/actionhandler');
            var aM_exceptiondetails  = require('../../common-test/exceptiondetails');
            var aM_overrider         = require('../../common-test/overrider');

            return aMod_definer(
                aM_ctrlrecorded,
                aM_actionhandler,
                aM_exceptiondetails,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-ctrl/ctrlrecorded",
            "../actions-ctrl/actionhandler",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider"
        ], function (
                theM_ctrlrecorded,
                theM_actionhandler,
                theM_exceptiondetails,
                theM_overrider
            ) {
            return aMod_definer(
                theM_ctrlrecorded,
                theM_actionhandler,
                theM_exceptiondetails,
                theM_overrider
            );
        });
    }


}());


