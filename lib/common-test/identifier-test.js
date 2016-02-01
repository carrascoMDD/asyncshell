'use strict';

/*
 identifier-test.js
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

    var aMod_definer = function( theM_configured_test,
                                 theM_overrider) {


        var ModuleName     = "identifier-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.MAXIDS = 1000000000;
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

            theToInit.CALLBACKIDPREFIX = "CB";
            theToInit.CONFIGIDPREFIX   = "CF";

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






        var aIdentifierTest_Prototype = (function() {


            var aPrototype = new theM_configured_test.ConfiguredTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_configured_test.ConfiguredTest_Prototype;

            aPrototype._v_Type = "IdentifierTest";

            aPrototype._v_Prototype_IdentifierTest = aPrototype;



            aPrototype._v_Id = null;

            aPrototype._v_IdCounter         = null;
            aPrototype._v_CallbackIdCounter = null;
            aPrototype._v_ConfigIdCounter   = null;



            var _pInit = function( theConfiguration, theIdentifierId) {

                this._pInit_Identifier( theConfiguration, theIdentifierId);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_Identifier = function( theConfiguration, theIdentifierId) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Configured.apply( this, [ theConfiguration]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_IdCounter         = 0;
                this._v_CallbackIdCounter = 0;
                this._v_ConfigIdCounter   = 0;

                this._v_Id = theIdentifierId;
                if( this._v_Id == null) {
                    var anId = this.fReserveId();
                    if( anId){}/* CQT */
                    this._v_Id = anId;
                }
            };
            if( _pInit_Identifier){}/* CQT */
            aPrototype._pInit_Identifier = _pInit_Identifier;








            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Identifier( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Identifier = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                if( this.RELEASE_WITHID_ID) {
                    this._v_Id = undefined;
                }

                if( this.RELEASE_WITHID_TITLE) {
                    this._v_Title      = undefined;
                }

                this._v_IdCounter         = undefined;
                this._v_CallbackIdCounter = undefined;
                this._v_ConfigIdCounter   = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Configured.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Identifier){}/* CQT */
            aPrototype._pRelease_Identifier = _pRelease_Identifier;













            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

            };
            if( _pReleaseChildrenInto){}/* CQT */
            aPrototype._pReleaseChildrenInto = _pReleaseChildrenInto;












            var fCurrentIdCounter = function( ) {

                var aMethodName= "fCurrentIdCounter";

                if( !this._v_IdCounter) {
                    return 0;
                }

                return this._v_IdCounter;
            };
            if( fCurrentIdCounter){}/* CQT */
            aPrototype.fCurrentIdCounter = fCurrentIdCounter;











            var fCurrentId = function( ) {

                var aMethodName= "fCurrentId";

                if( !this._v_IdCounter) {
                    this._v_IdCounter = 0;
                }

                if( !this._v_Id) {
                    return "" + this._v_IdCounter;
                }

                return this._v_Id + "," + this._v_IdCounter;
            };
            if( fCurrentId){}/* CQT */
            aPrototype.fCurrentId = fCurrentId;











            var fReserveId = function( ) {

                var aMethodName= "fReserveId";

                if( !this._v_IdCounter) {
                    this._v_IdCounter = 0;
                }

                this._v_IdCounter += 1;

                if( this._v_IdCounter > this.MAXIDS) {
                    console.log( "this._v_IdCounter=" + this._v_IdCounter + "  this.MAXIDS=" + this.MAXIDS);
                    throw new Error( "REACHED MAX IDS at " + this._v_Module.ModuleFullName + "." + aMethodName +  " this._v_IdCounter=" + this._v_IdCounter + "  this.MAXIDS=" + this.MAXIDS);
                }

                if( !this._v_Id) {
                    return "" + this._v_IdCounter;
                }

                return this._v_Id + "," + this._v_IdCounter;
            };
            if( fReserveId){}/* CQT */
            aPrototype.fReserveId = fReserveId;









            var fReserveCallbackId = function( ) {

                var aMethodName= "fReserveCallbackId";

                if( !this._v_CallbackIdCounter) {
                    this._v_CallbackIdCounter = 0;
                }

                this._v_CallbackIdCounter += 1;

                if( this._v_CallbackIdCounter > this.MAXIDS) {
                    console.log( "this._v_CallbackIdCounter=" + this._v_CallbackIdCounter + "  this.MAXIDS=" + this.MAXIDS);
                    throw new Error( "REACHED MAX IDS at " + this._v_Module.ModuleFullName + "." + aMethodName +  " this._v_CallbackIdCounter=" + this._v_CallbackIdCounter + "  this.MAXIDS=" + this.MAXIDS);
                }

                if( !this._v_Id) {
                    return  this.CALLBACKIDPREFIX + this._v_CallbackIdCounter;
                }

                return this._v_Id + "," + this.CALLBACKIDPREFIX + this._v_CallbackIdCounter;
            };
            if( fReserveCallbackId){}/* CQT */
            aPrototype.fReserveCallbackId = fReserveCallbackId;








            var fReserveConfigId = function( ) {

                var aMethodName= "fReserveConfigId";

                if( !this._v_ConfigIdCounter) {
                    this._v_ConfigIdCounter = 0;
                }

                this._v_ConfigIdCounter += 1;

                if( this._v_ConfigIdCounter > this.MAXIDS) {
                    console.log( "this._v_ConfigIdCounter=" + this._v_ConfigIdCounter + "  this.MAXIDS=" + this.MAXIDS);
                    throw new Error( "REACHED MAX IDS at " + this._v_Module.ModuleFullName + "." + aMethodName +  " this._v_ConfigIdCounter=" + this._v_ConfigIdCounter + "  this.MAXIDS=" + this.MAXIDS);
                }

                if( !this._v_Id) {
                    return  this.CONFIGIDPREFIX + this._v_ConfigIdCounter;
                }

                return this._v_Id + "," + this.CONFIGIDPREFIX + this._v_ConfigIdCounter;
            };
            if( fReserveConfigId){}/* CQT */
            aPrototype.fReserveConfigId = fReserveConfigId;










            return aPrototype;

        })();




        var IdentifierTest_Constructor = function( theConfiguration, theIdentifierId) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_configured_test.ConfiguredTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Id = null;

            this._v_IdCounter         = null;
            this._v_CallbackIdCounter = null;
            this._v_ConfigIdCounter   = null;

            this._pInit_Identifier( theConfiguration, theIdentifierId);
        };
        IdentifierTest_Constructor.prototype = aIdentifierTest_Prototype;





        var IdentifierTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_configured_test.ConfiguredTest_Prototype;

            this._v_Prototype = aIdentifierTest_Prototype;
            this._v_Type = null;

            this._v_Id = null;

            this._v_IdCounter         = null;
            this._v_CallbackIdCounter = null;
            this._v_ConfigIdCounter   = null;

        };
        IdentifierTest_SuperPrototypeConstructor.prototype = aIdentifierTest_Prototype;








        var aModule = {
            "IdentifierTest_Prototype": aIdentifierTest_Prototype,
            "IdentifierTest_Constructor": IdentifierTest_Constructor,
            "IdentifierTest_SuperPrototypeConstructor": IdentifierTest_SuperPrototypeConstructor
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

            var aM_configured_test = require('./configured-test');
            var aM_overrider       = require('./overrider');

            return aMod_definer( aM_configured_test, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./configured-test",
            "./overrider"
        ], function ( theM_configured_test, theM_overrider) {
            return aMod_definer( theM_configured_test, theM_overrider);
        });
    }


}());






