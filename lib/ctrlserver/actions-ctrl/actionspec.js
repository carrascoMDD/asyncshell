'use strict';

/*
 ctrlaction.js
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
                                theM_overrider,
                                theM_ctrleventkinds) {


        var ModuleName     = "ctrlaction";
        var ModulePackages = "ctrlserver/actions-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.METHOD_GET  = "GET";
            theToInit.METHOD_POST = "POST";

            theToInit.METHODS = [
                theToInit.METHOD_GET,
                theToInit.METHOD_POST
            ];


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








        var aActionSpec_Prototype = (function() {


            var aPrototype = new theM_ctrlrecorded.CtrlRecorded_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            aPrototype._v_Type = "ActionSpec";

            aPrototype._v_Module = null;


            aPrototype._v_ActionPort       = null;
            aPrototype._v_ActionMethod     = null;
            aPrototype._v_ActionRoute       = null;

            aPrototype._v_BehaviorFunction        = null;
            aPrototype._v_BehaviorConstructor      = null;
            aPrototype._v_BehaviorModuleName       = null;
            aPrototype._v_BehaviorConstructorName  = null;
            aPrototype._v_BehaviorMethodName       = null;







            var _pInit = function( theTitle,
                                   theIdentifier,
                                   theRecorder,
                                   thePort,
                                   theMethod,
                                   theRoute,
                                   theBehaviorFunction,
                                   theBehaviorConstructor,
                                   theBehaviorModuleName,
                                   theBehaviorConstructorName,
                                   theBehaviorMethodName) {

                this._pInit_ActionSpec( theTitle,
                                        theIdentifier,
                                        theRecorder,
                                        thePort,
                                        theMethod,
                                        theRoute,
                                        theBehaviorFunction,
                                        theBehaviorConstructor,
                                        theBehaviorModuleName,
                                        theBehaviorConstructorName,
                                        theBehaviorMethodName);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ActionSpec = function( theTitle,
                                              theIdentifier,
                                              theRecorder,
                                              thePort,
                                              theMethod,
                                              theRoute,
                                              theBehaviorFunction,
                                              theBehaviorConstructor,
                                              theBehaviorModuleName,
                                              theBehaviorConstructorName,
                                              theBehaviorMethodName) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlRecorded.apply( this, [ theTitle, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_ActionPort       = thePort;
                this._v_ActionMethod     = theMethod;
                this._v_ActionRoute      = theRoute;

                this._v_BehaviorFunction         = theBehaviorFunction;
                this._v_BehaviorConstructor      = theBehaviorConstructor;
                this._v_BehaviorModuleName       = theBehaviorModuleName;
                this._v_BehaviorConstructorName  = theBehaviorConstructorName;
                this._v_BehaviorMethodName       = theBehaviorMethodName;

                if( this._v_BehaviorMethodName){}/* CQT */
            };
            if( _pInit_ActionSpec){}/* CQT */
            aPrototype._pInit_ActionSpec = _pInit_ActionSpec;










            var fReleaseActionSpec = function() {

                return true;
            };
            if( fReleaseActionSpec){}/* CQT */
            aPrototype.fReleaseActionSpec = fReleaseActionSpec;








            var fIsSameActionSpecAs = function( theActionSpec) {

                if( !theActionSpec) {
                    return false;
                }

                if( !this._v_ActionPort || !theActionSpec._v_ActionPort || !( this._v_ActionPort == theActionSpec._v_ActionPort)) {
                    return false;
                }

                if( !this._v_ActionMethod || !theActionSpec._v_ActionMethod || !( this._v_ActionMethod == theActionSpec._v_ActionMethod)) {
                    return false;
                }

                if( !this._v_ActionRoute || !theActionSpec._v_ActionRoute || !( this._v_ActionRoute == theActionSpec._v_ActionRoute)) {
                    return false;
                }

                if( theActionSpec){}/* CQT */

                return true;
            };
            if( fIsSameActionSpecAs){}/* CQT */
            aPrototype.fIsSameActionSpecAs = fIsSameActionSpecAs;






            var fBehaviorFunction = function() {

                return this._v_BehaviorFunction ;
            };
            if( fBehaviorFunction){}/* CQT */
            aPrototype.fBehaviorFunction = fBehaviorFunction;













            var fBehaviorConstructor = function() {

                var aMethodName = "fBehaviorConstructor";


                if( this._v_BehaviorConstructor) {
                    return this._v_BehaviorConstructor;
                }

                if( !this._v_BehaviorModuleName) {
                    return null;
                }

                if( !this._v_BehaviorConstructorName) {
                    return null;
                }



                var aModule = null;
                try {
                    aModule = require( this._v_BehaviorModuleName);
                }
                catch( anException) {
                    var anExceptionDetails = this.fExceptionDetail( anException);
                    this.fRecord( aMethodName, theM_ctrleventkinds.ACTEVT_FAIL, null, anExceptionDetails, anException);
                    return null;
                }

                if( !aModule) {
                    this.fRecord( aMethodName, theM_ctrleventkinds.ACTEVT_FAIL, null, "!require( '" + this._v_BehaviorModuleName + "')", null);
                    return null;
                }

                var aBehaviorConstructor = aModule[ this._v_BehaviorConstructorName];
                if( !aBehaviorConstructor) {
                    this.fRecord( aMethodName, theM_ctrleventkinds.ACTEVT_FAIL, null, "!require( '" + this._v_BehaviorModuleName + "')[ '" + this._v_BehaviorConstructorName + "']", null);
                    return null;
                }

                return aBehaviorConstructor;

            };
            if( fBehaviorConstructor){}/* CQT */
            aPrototype.fBehaviorConstructor = fBehaviorConstructor;






            return aPrototype;

        })();









        var ActionSpec_Constructor = function( theTitle,
                                               theIdentifier,
                                               theRecorder,
                                               thePort,
                                               theMethod,
                                               theRoute,
                                               theBehaviorFunction,
                                               theBehaviorConstructor,
                                               theBehaviorModuleName,
                                               theBehaviorConstructorName,
                                               theBehaviorMethodName) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = null;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_ActionPort       = null;
            this._v_ActionMethod     = null;
            this._v_ActionRoute      = null;

            this._v_BehaviorFunction         = null;
            this._v_BehaviorConstructor      = null;
            this._v_BehaviorModuleName       = null;
            this._v_BehaviorConstructorName  = null;
            this._v_BehaviorMethodName       = null;

            this._pInit_ActionSpec( theTitle,
                                    theIdentifier,
                                    theRecorder,
                                    thePort,
                                    theMethod,
                                    theRoute,
                                    theBehaviorFunction,
                                    theBehaviorConstructor,
                                    theBehaviorModuleName,
                                    theBehaviorConstructorName,
                                    theBehaviorMethodName);
        };
        ActionSpec_Constructor.prototype = aActionSpec_Prototype;






        var ActionSpec_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlrecorded.CtrlRecorded_Prototype;

            this._v_Prototype = aActionSpec_Prototype;
            this._v_Type     = null;
            this._v_Module   = null;

            this._v_ActionPort       = null;
            this._v_ActionMethod     = null;
            this._v_ActionRoute      = null;

            this._v_BehaviorFunction         = null;
            this._v_BehaviorConstructor      = null;
            this._v_BehaviorModuleName       = null;
            this._v_BehaviorConstructorName  = null;
            this._v_BehaviorMethodName       = null;
        };
        ActionSpec_SuperPrototypeConstructor.prototype = aActionSpec_Prototype;









        var aModule = {
            "ActionSpec_Prototype": aActionSpec_Prototype,
            "ActionSpec_Constructor": ActionSpec_Constructor,
            "ActionSpec_SuperPrototypeConstructor": ActionSpec_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aActionSpec_Prototype._v_Module = aModule;


        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ctrlrecorded     = require('../common-ctrl/ctrlrecorded');
            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');
            var aM_ctrleventkinds   = require('../common-ctrl/ctrleventkinds');

            return aMod_definer(
                aM_ctrlrecorded,
                aM_exceptiondetails,
                aM_overrider,
                aM_ctrleventkinds
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-ctrl/ctrlrecorded",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider",
            "../common-ctrl/ctrleventkinds"
        ], function (
                theM_ctrlrecorded,
                theM_exceptiondetails,
                theM_overrider,
                theM_ctrleventkinds
            ) {
            return aMod_definer(
                theM_ctrlrecorded,
                theM_exceptiondetails,
                theM_overrider,
                theM_ctrleventkinds
            );
        });
    }

}());

















