'use strict';

/*
 ctrlserver.js
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

    var aMod_definer =function( theM_actionsserver,
                                theM_exceptiondetails,
                                theM_overrider,
                                theM_ctrleventkinds,
                                theM_actionspec) {


        var ModuleName     = "ctrlserver";
        var ModulePackages = "ctrlserver/server-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}





        var METHOD_GET  = "GET";
        var METHOD_POST = "POST";


        var CTRLPORT = 8881;




        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.PORT_ECHO                      = CTRLPORT;
            theToInit.METHOD_ECHO                    = METHOD_GET;
            theToInit.ROUTE_ECHO                     = "/daerth/echo";
            theToInit.MODULE_ECHO                    = "../behaviors-ctrl/behavior-echo";
            theToInit.CONSTRUCTOR_ECHO               = "BehaviorEcho_Constructor";
            theToInit.FUNCTION_ECHO                  = "fPerformBehavior";

            theToInit.PORT_INITIAL                   = CTRLPORT;
            theToInit.METHOD_INITIAL                 = METHOD_GET;
            theToInit.ROUTE_INITIAL                  = "/daerth/initial";
            theToInit.MODULE_INITIAL                 = "../behaviors-ctrl/behavior-initial";
            theToInit.CONSTRUCTOR_INITIAL            = "BehaviorInitial_Constructor";
            theToInit.FUNCTION_INITIAL               = "fPerformBehavior";

            theToInit.PORT_ASKTODO                   = CTRLPORT;
            theToInit.METHOD_ASKTODO                 = METHOD_GET;
            theToInit.ROUTE_ASKTODO                  = "/daerth/asktodo";
            theToInit.MODULE_ASKTODO                 = "../behaviors-ctrl/behavior-echo";
            theToInit.CONSTRUCTOR_ASKTODO            = "BehaviorEcho_Constructor";
            theToInit.FUNCTION_ASKTODO               = "fPerformBehavior";

            theToInit.PORT_RESULT_AND_ASKTODO        = CTRLPORT;
            theToInit.METHOD_RESULT_AND_ASKTODO      = METHOD_POST;
            theToInit.ROUTE_RESULT_AND_ASKTODO       = "/daerth/resultandasktodo";
            theToInit.MODULE_RESULT_AND_ASKTODO      = "../behaviors-ctrl/behavior-echo";
            theToInit.CONSTRUCTOR_RESULT_AND_ASKTODO = "BehaviorEcho_Constructor";
            theToInit.FUNCTION_RESULT_AND_ASKTODO    = "fPerformBehavior";

            theToInit.PORT_TERMINATED                = CTRLPORT;
            theToInit.METHOD_TERMINATED              = METHOD_GET;
            theToInit.ROUTE_TERMINATED               = "/daerth/terminated";
            theToInit.MODULE_TERMINATED              = "../behaviors-ctrl/behavior-echo";
            theToInit.CONSTRUCTOR_TERMINATED         = "BehaviorEcho_Constructor";
            theToInit.FUNCTION_TERMINATED            = "fPerformBehavior";

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

            theToInit.ACTION_ECHO = {
                "port":        theToInit.PORT_ECHO,
                "method":      theToInit.METHOD_ECHO,
                "route":       theToInit.ROUTE_ECHO,
                "module":      theToInit.MODULE_ECHO,
                "constructor": theToInit.CONSTRUCTOR_ECHO,
                "function":    theToInit.FUNCTION_ECHO
            };

            theToInit.ACTION_INITIAL = {
                "port":        theToInit.PORT_INITIAL,
                "method":      theToInit.METHOD_INITIAL,
                "route":       theToInit.ROUTE_INITIAL,
                "module":      theToInit.MODULE_INITIAL,
                "constructor": theToInit.CONSTRUCTOR_INITIAL,
                "function":    theToInit.FUNCTION_INITIAL
            };

            theToInit.ACTION_ASKTODO = {
                "port":        theToInit.PORT_ASKTODO,
                "method":      theToInit.METHOD_ASKTODO,
                "route":       theToInit.ROUTE_ASKTODO,
                "module":      theToInit.MODULE_ASKTODO,
                "constructor": theToInit.CONSTRUCTOR_ASKTODO,
                "function":    theToInit.FUNCTION_ASKTODO
            };

            theToInit.ACTION_RESULT_AND_ASKTODO = {
                "port":        theToInit.PORT_RESULT_AND_ASKTODO,
                "method":      theToInit.METHOD_RESULT_AND_ASKTODO,
                "route":       theToInit.ROUTE_RESULT_AND_ASKTODO,
                "module":      theToInit.MODULE_RESULT_AND_ASKTODO,
                "constructor": theToInit.CONSTRUCTOR_RESULT_AND_ASKTODO,
                "function":    theToInit.FUNCTION_RESULT_AND_ASKTODO
            };

            theToInit.ACTION_TERMINATED = {
                "port":        theToInit.PORT_TERMINATED,
                "method":      theToInit.METHOD_TERMINATED,
                "route":       theToInit.ROUTE_TERMINATED,
                "module":      theToInit.MODULE_TERMINATED,
                "constructor": theToInit.CONSTRUCTOR_TERMINATED,
                "function":    theToInit.FUNCTION_TERMINATED
            };


            theToInit.ACTIONS = [
                theToInit.ACTION_ECHO,
                theToInit.ACTION_INITIAL,
                theToInit.ACTION_ASKTODO,
                theToInit.ACTION_RESULT_AND_ASKTODO,
                theToInit.ACTION_TERMINATED
            ];

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








        var anCtrlServer_Prototype = (function() {


            var aPrototype = new theM_actionsserver.ActionsServer_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_actionsserver.ActionsServer_Prototype;

            aPrototype._v_Type = "CtrlServer";

            aPrototype._v_Module = null;


            aPrototype._v_ActionSpecs  = null;







            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_CtrlServer( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;





            var _pInit_CtrlServer = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_ActionsServer.apply( this, [ theTitle, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_ActionSpecs  = [ ];
            };
            if( _pInit_CtrlServer){}/* CQT */
            aPrototype._pInit_CtrlServer = _pInit_CtrlServer;








            var fSetupCtrlServer = function() {

                var aSuperResult = aPrototype._v_SuperPrototype.fSetupCtrlServer.apply( this);
                if( !aSuperResult) {
                    return false;
                }

                this.pCreateActionSpecs();

                this.pRegisterActionSpecs();

                return true;
            };
            if( fSetupCtrlServer){}/* CQT */
            aPrototype.fSetupCtrlServer = fSetupCtrlServer;







            var fActionSpecs= function() {

                return this._v_ActionSpecs;
            };
            if( fActionSpecs){}/* CQT */
            aPrototype.fActionSpecs = fActionSpecs;









            var pCreateActionSpecs= function() {

                var someActions = this.ACTIONS;
                if( !someActions) {
                    return;
                }

                var aNumActions = someActions.length;
                for( var anActionIdx=0; anActionIdx < aNumActions; anActionIdx++) {

                    var anAction = someActions[ anActionIdx];
                    if( anAction) {

                        /*  theTitle,
                         theIdentifier,
                         theRecorder,
                         thePort,
                         theMethod,
                         theRoute,
                         theBehaviorFunction,
                         theBehaviorConstructor,
                         theBehaviorModuleName,
                         theBehaviorConstructorName,
                         theBehaviorMethodName
                         */

                        var anActionSpec = new theM_actionspec.ActionSpec_Constructor(
                            anAction[ "route"],
                            this._v_Identifier,
                            this._v_Recorder,
                            anAction[ "port"],
                            anAction[ "method"],
                            anAction[ "route"],
                            null, /* theBehaviorFunction */
                            null, /* theBehaviorConstructor */
                            anAction[ "module"],      /* theBehaviorModuleName */
                            anAction[ "constructor"], /* theBehaviorConstructorName */
                            anAction[ "function"]    /* theBehaviorMethodName */
                        );

                        this._v_ActionSpecs.push( anActionSpec);
                    }
                }


            };
            if( pCreateActionSpecs){}/* CQT */
            aPrototype.pCreateActionSpecs = pCreateActionSpecs;









            var pRegisterActionSpecs= function() {

                if( !this._v_ActionSpecs) {
                    return;
                }


                var anActionsRegistry = this.fActionsRegistry();
                if( !anActionsRegistry) {
                    return;
                }

                var aNumActionSpecs = this._v_ActionSpecs.length;
                for( var anActionSpecIdx=0; anActionSpecIdx < aNumActionSpecs; anActionSpecIdx++) {

                    var anActionSpec = this._v_ActionSpecs[ anActionSpecIdx];
                    if( anActionSpec) {

                        if( !anActionsRegistry.fRegisterActionSpec( anActionSpec)) {
                            return;
                        }
                    }
                }


            };
            if( pRegisterActionSpecs){}/* CQT */
            aPrototype.pRegisterActionSpecs = pRegisterActionSpecs;








            var pReleaseCtrlServer = function() {

                if( this._v_ActionSpecs) {
                    this.pReleaseAllActionSpecs();
                }

                aPrototype._v_SuperPrototype.pReleaseCtrlServer.apply( this);
            };
            if( pReleaseCtrlServer){}/* CQT */
            aPrototype.pReleaseCtrlServer = pReleaseCtrlServer;







            var pReleaseAllActionSpecs = function() {

                if( !this._v_ActionSpecs) {
                    return;
                }

                var anActionsRegistry = this.fActionsRegistry();


                var aNumActionSpecs = this._v_ActionSpecs.length;
                for( var anActionSpecIdx=0; anActionSpecIdx < aNumActionSpecs; anActionSpecIdx++) {

                    var anActionSpec = this._v_ActionSpecs[ anActionSpecIdx];
                    if( anActionSpec) {

                        if( anActionsRegistry) {
                            if( !anActionsRegistry.fUnregisterActionSpec( anActionSpec)) {
                                return;
                            }
                        }

                        anActionSpec.fReleaseActionSpec();
                    }
                }

                this._v_ActionSpecs = null;
            };
            if( pReleaseAllActionSpecs){}/* CQT */
            aPrototype.pReleaseAllActionSpecs = pReleaseAllActionSpecs;







            return aPrototype;

        })();









        var CtrlServer_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_actionsserver.ActionsServer_Prototype;

            this._v_Prototype = null;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_CtrlListener     = null;
            this._v_DiePreventer     = null;
            this._v_ActionSpecs  = null;

            this._pInit_CtrlServer( theTitle, theIdentifier, theRecorder);

            if( this.RECORDINITS) {
                this.fRecord( "CtrlServer_Constructor", theM_ctrleventkinds.ACTEVT_INIT, null, null, null);
            }
        };
        CtrlServer_Constructor.prototype = anCtrlServer_Prototype;






        var CtrlServer_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_actionsserver.ActionsServer_Prototype;

            this._v_Prototype = anCtrlServer_Prototype;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_CtrlListener     = null;
            this._v_DiePreventer     = null;
            this._v_ActionSpecs  = null;
        };
        CtrlServer_SuperPrototypeConstructor.prototype = CtrlServer_SuperPrototypeConstructor;









        var aModule = {
            "CtrlServer_Prototype": anCtrlServer_Prototype,
            "CtrlServer_Constructor": CtrlServer_Constructor,
            "CtrlServer_SuperPrototypeConstructor": CtrlServer_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        anCtrlServer_Prototype._v_Module = aModule;


        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_actionsserver    = require('./actionsserver');
            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');
            var aM_ctrleventkinds   = require('../common-ctrl/ctrleventkinds');
            var aM_actionspec       = require('../actions-ctrl/actionspec');

            return aMod_definer(
                aM_actionsserver,
                aM_exceptiondetails,
                aM_overrider,
                aM_ctrleventkinds,
                aM_actionspec
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./actionsserver",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider",
            "../common-ctrl/ctrleventkinds",
            "../actions-ctrl/actionspec"
        ], function (
                theM_actionsserver,
                theM_exceptiondetails,
                theM_overrider,
                theM_ctrleventkinds,
                theM_actionspec
            ) {
            return aMod_definer(
                theM_actionsserver,
                theM_exceptiondetails,
                theM_overrider,
                theM_ctrleventkinds,
                theM_actionspec
            );
        });
    }

}());

















