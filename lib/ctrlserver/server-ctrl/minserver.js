'use strict';

/*
 minserver.js
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
                                theM_ctrllistener,
                                theM_diepreventer) {


        var ModuleName     = "minserver";
        var ModulePackages = "ctrlserver/server-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






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








        var aMinServer_Prototype = (function() {


            var aPrototype = new theM_ctrlrecorded.CtrlRecorded_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            aPrototype._v_Type = "MinServer";

            aPrototype._v_Module = null;

            aPrototype._v_CtrlListener     = null;
            aPrototype._v_DiePreventer     = null;







            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_MinServer( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;





            var _pInit_MinServer = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlRecorded.apply( this, [ theTitle, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_CtrlListener     = null;
                this._v_DiePreventer     = null;
            };
            if( _pInit_MinServer){}/* CQT */
            aPrototype._pInit_MinServer = _pInit_MinServer;








            var fSetupCtrlServer = function() {

                this.pCreateCtrlListener();

                this.pCreateDiePreventer();

                return true;
            };
            if( fSetupCtrlServer){}/* CQT */
            aPrototype.fSetupCtrlServer = fSetupCtrlServer;





            var pReleaseCtrlServer = function() {

                if( !this._v_CtrlListener) {
                    return;
                }

                this._v_CtrlListener.fReleaseListener();

            };
            if( pReleaseCtrlServer){}/* CQT */
            aPrototype.pReleaseCtrlServer = pReleaseCtrlServer;









            var pCreateCtrlListener= function() {

                if( this._v_CtrlListener) {
                    return;
                }

                var aTitle = this._v_Title;
                if( !aTitle)  {
                    aTitle = "?";
                }
                this._v_CtrlListener = new theM_ctrllistener.CtrlListener_Constructor(
                    "CtrlListener-For-" + aTitle,
                    this._v_Identifier,
                    this._v_Recorder
                );

            };
            if( pCreateCtrlListener){}/* CQT */
            aPrototype.pCreateCtrlListener = pCreateCtrlListener;









            var fCtrlListener= function() {

                return this._v_CtrlListener;
            };
            if( fCtrlListener){}/* CQT */
            aPrototype.fCtrlListener = fCtrlListener;










            var pCreateDiePreventer = function( ) {

                if( this._v_DiePreventer) {
                    return;
                }

                var aTitle = this._v_Title;
                if( !aTitle)  {
                    aTitle = "?";
                }
                this._v_DiePreventer = new theM_diepreventer.DiePreventer_Constructor(
                    "DiePreventer-For-" + aTitle,
                    this._v_Identifier,
                    this._v_Recorder
                );

            };
            if( pCreateDiePreventer){}/* CQT */
            aPrototype.pCreateDiePreventer = pCreateDiePreventer;










            var fStartServing = function() {

                if( !this._v_CtrlListener) {
                    return false;
                }


                var aStartServingResult = this._v_CtrlListener.fStartListening();
                if( aStartServingResult){}/* CQT */

                return aStartServingResult;
            };
            if( fStartServing){}/* CQT */
            aPrototype.fStartServing = fStartServing;






            var fStopServing = function() {

                if( !this._v_CtrlListener) {
                    return false;
                }


                var aStopServingResult = this._v_CtrlListener.fStopListening();
                if( aStopServingResult){}/* CQT */

                return aStopServingResult;
            };
            if( fStopServing){}/* CQT */
            aPrototype.fStopServing = fStopServing;








            return aPrototype;

        })();









        var MinServer_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = null;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_CtrlListener     = null;
            this._v_DiePreventer     = null;

            this._pInit_MinServer( theTitle, theIdentifier, theRecorder);
        };
        MinServer_Constructor.prototype = aMinServer_Prototype;






        var MinServer_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = aMinServer_Prototype;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_CtrlListener     = null;
            this._v_DiePreventer     = null;
        };
        MinServer_SuperPrototypeConstructor.prototype = aMinServer_Prototype;









        var aModule = {
            "MinServer_Prototype": aMinServer_Prototype,
            "MinServer_Constructor": MinServer_Constructor,
            "MinServer_SuperPrototypeConstructor": MinServer_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aMinServer_Prototype._v_Module = aModule;


        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ctrlrecorded     = require('../common-ctrl/ctrlrecorded');
            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');
            var aM_ctrllistener     = require('./ctrllistener');
            var aM_diepreventer     = require('./diepreventer');

            return aMod_definer(
                aM_ctrlrecorded,
                aM_exceptiondetails,
                aM_overrider,
                aM_ctrllistener,
                aM_diepreventer
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-ctrl/ctrlrecorded",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider",
            "./ctrllistener",
            "./diepreventer"
        ], function (
            theM_ctrlrecorded,
            theM_exceptiondetails,
            theM_overrider,
            theM_ctrllistener,
            theM_diepreventer
            ) {
            return aMod_definer(
                theM_ctrlrecorded,
                theM_exceptiondetails,
                theM_overrider,
                theM_ctrllistener,
                theM_diepreventer
            );
        });
    }

}());

















