'use strict';

/*
 actionsserver.js
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

    var aMod_definer =function( theM_minserver,
                                theM_exceptiondetails,
                                theM_overrider,
                                theM_actionsregistry,
                                theM_ctrleventkinds) {


        var ModuleName     = "actionsserver";
        var ModulePackages = "ctrlserver/server-ctrl";
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








        var anActionsServer_Prototype = (function() {


            var aPrototype = new theM_minserver.MinServer_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_minserver.MinServer_Prototype;

            aPrototype._v_Type = "ActionsServer";

            aPrototype._v_Module = null;


            aPrototype._v_ActionsRegistry  = null;







            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_ActionsServer( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;





            var _pInit_ActionsServer = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_MinServer.apply( this, [ theTitle, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_ActionsRegistry  = null;
            };
            if( _pInit_ActionsServer){}/* CQT */
            aPrototype._pInit_ActionsServer = _pInit_ActionsServer;








            var fSetupCtrlServer = function() {

                var aSuperResult = aPrototype._v_SuperPrototype.fSetupCtrlServer.apply( this);
                if( !aSuperResult) {
                    return false;
                }

                this.pCreateActionsRegistry();

                return true;
            };
            if( fSetupCtrlServer){}/* CQT */
            aPrototype.fSetupCtrlServer = fSetupCtrlServer;







            var pCreateActionsRegistry = function( ) {

                if( this._v_ActionsRegistry) {
                    return;
                }

                var aTitle = this._v_Title;
                if( !aTitle)  {
                    aTitle = "?";
                }
                this._v_ActionsRegistry = new theM_actionsregistry.ActionsRegistry_Constructor(
                    "ActionsServer-For-" + aTitle,
                    this._v_Identifier,
                    this._v_Recorder,
                    this
                );

            };
            if( pCreateActionsRegistry){}/* CQT */
            aPrototype.pCreateActionsRegistry = pCreateActionsRegistry;






            var fActionsRegistry= function() {

                return this._v_ActionsRegistry;
            };
            if( fActionsRegistry){}/* CQT */
            aPrototype.fActionsRegistry = fActionsRegistry;






            var pReleaseCtrlServer = function() {

                if( this._v_ActionsRegistry) {
                    this.pReleaseActionsRegistry();
                }

                aPrototype._v_SuperPrototype.pReleaseCtrlServer.apply( this);
            };
            if( pReleaseCtrlServer){}/* CQT */
            aPrototype.pReleaseCtrlServer = pReleaseCtrlServer;






            var pReleaseActionsRegistry = function() {

                if( !this._v_ActionsRegistry) {
                    return;
                }

                this._v_ActionsRegistry.pReleaseActionsRegistry();

                this._v_ActionsRegistry = null;
            };
            if( pReleaseActionsRegistry){}/* CQT */
            aPrototype.pReleaseActionsRegistry = pReleaseActionsRegistry;







            return aPrototype;

        })();









        var ActionsServer_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_minserver.MinServer_Prototype;

            this._v_Prototype = null;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_CtrlListener     = null;
            this._v_DiePreventer     = null;
            this._v_ActionsRegistry  = null;

            this._pInit_ActionsServer( theTitle, theIdentifier, theRecorder);

            if( this.RECORDINITS) {
                this.fRecord( "ActionsServer_Constructor", theM_ctrleventkinds.ACTEVT_INIT, null, null, null);
            }
        };
        ActionsServer_Constructor.prototype = anActionsServer_Prototype;






        var ActionsServer_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_minserver.MinServer_Prototype;

            this._v_Prototype = anActionsServer_Prototype;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_CtrlListener     = null;
            this._v_DiePreventer     = null;
            this._v_ActionsRegistry  = null;
        };
        ActionsServer_SuperPrototypeConstructor.prototype = ActionsServer_SuperPrototypeConstructor;









        var aModule = {
            "ActionsServer_Prototype": anActionsServer_Prototype,
            "ActionsServer_Constructor": ActionsServer_Constructor,
            "ActionsServer_SuperPrototypeConstructor": ActionsServer_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        anActionsServer_Prototype._v_Module = aModule;


        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_minserver        = require('./minserver');
            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');
            var aM_actionsregistry  = require('../actions-ctrl/actionsregistry');
            var aM_ctrleventkinds   = require('../common-ctrl/ctrleventkinds');

            return aMod_definer(
                aM_minserver,
                aM_exceptiondetails,
                aM_overrider,
                aM_actionsregistry,
                aM_ctrleventkinds
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./minserver",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider",
            "../actions-ctrl/actionsregistry",
            "../common-ctrl/ctrleventkinds"
        ], function (
                theM_minserver,
                theM_exceptiondetails,
                theM_overrider,
                theM_actionsregistry,
                theM_ctrleventkinds
            ) {
            return aMod_definer(
                theM_minserver,
                theM_exceptiondetails,
                theM_overrider,
                theM_actionsregistry,
                theM_ctrleventkinds
            );
        });
    }

}());

















