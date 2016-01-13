'use strict';

/*
 resolutionconfig.js
 Creado 201408122316
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

    var aMod_definer =function( theM_withid_test, theM_identifier) {


        var ModuleName     = "resolutionconfig";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.RESOLUTIONSTATUS_PENDING    = "PENDING";
            theToInit.RESOLUTIONSTATUS_TERMINATED = "TERMINATED";
            theToInit.RESOLUTIONSTATUSALL = [
                theToInit.RESOLUTIONSTATUS_PENDING,
                theToInit.RESOLUTIONSTATUS_TERMINATED
            ];

        };



        var ModuleConstants = {};
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








        var aResolutionConfig_Prototype = (function() {


            var aPrototype = new theM_withid_test.WithIdTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;


            aPrototype._v_Type = "ResolutionConfig";


            aPrototype._v_Identifier = null;
            aPrototype._v_IdentifierIsOwn = null;


            aPrototype._v_Configuration     = null;

            aPrototype._v_ResolutionSourceKind  = null;
            aPrototype._v_ResolverResolution    = null;
            aPrototype._v_ResolvedResolutions   = [ ];


            aPrototype._v_ResolutionStatus = null;
            aPrototype._v_Success     = null;






            var _pInit = function( theTitle, theIdentifier, theConfiguration) {

                this._pInit_ResolutionConfig( theTitle, theIdentifier, theConfiguration);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_ResolutionConfig = function( theTitle, theIdentifier, theConfiguration) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_WithId.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Identifier = theIdentifier;
                this._v_IdentifierIsOwn = false;
                if( !this._v_Identifier) {
                    this._v_IdentifierIsOwn = true;
                    this._v_Identifier = new theM_identifier.IdentifierTest_Constructor( {});
                }

                this._v_Id = this.fReserveId();

                this._v_Configuration     = theConfiguration;
                if( this._v_Configuration) {
                    this._v_Configuration.pAddJustCreatedParmResolution( this);
                }

                this._v_ResolutionSourceKind = null;
                this._v_ResolverResolution   = null;
                this._v_ResolvedResolutions  = [ ];

                this._v_ResolutionStatus = this.RESOLUTIONSTATUS_PENDING;
                this._v_Success     = false;

                if( this._v_ResolutionStatus){}/* CQT */
                if( this._v_ResolutionSourceKind){}/* CQT */
                if( this._v_ResolverResolution){}/* CQT */
            };
            if( _pInit_ResolutionConfig){}/* CQT */
            aPrototype._pInit_ResolutionConfig = _pInit_ResolutionConfig;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ResolutionConfig( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ResolutionConfig = function( theReleaseParms, theReleaseDone) {

                if( this._v_Identifier) {
                    if( this._v_IdentifierIsOwn) {
                        if( typeof this._v_Identifier._pRelease == "function") {
                            this._v_Identifier._pRelease( theReleaseParms, theReleaseDone);
                        }
                    }
                }
                this._v_Identifier = undefined;
                this._v_IdentifierIsOwn = undefined;

                this._v_Configuration     = undefined;

                this._v_ResolutionSourceKind  = undefined;
                this._v_ResolverResolution    = undefined;
                this._v_ResolvedResolutions   = undefined;

                this._v_ResolutionStatus = undefined;
                this._v_Success     = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_WithId.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ResolutionConfig){}/* CQT */
            aPrototype._pRelease_ResolutionConfig = _pRelease_ResolutionConfig;










            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);


                if( this._v_Identifier) {
                    if( this._v_IdentifierIsOwn) {
                        if( theReleaseChildren.indexOf( this._v_Identifier) < 0) {
                            theReleaseChildren.push( this._v_Identifier);
                            if( typeof this._v_Identifier._pReleaseChildrenInto == "function") {
                                this._v_Identifier._pReleaseChildrenInto( theReleaseChildren);
                            }
                        }
                    }
                }

            };
            if( _pReleaseChildrenInto){}/* CQT */
            aPrototype._pReleaseChildrenInto = _pReleaseChildrenInto;










            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_CONFIGS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_ResolutionConfig( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;







            var pCleanUpTest_ResolutionConfig= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_ResolutionSourceKind  = undefined;
                    this._v_ResolverResolution    = undefined;
                    this._v_ResolvedResolutions   = undefined;

                    this._v_ResolutionStatus = undefined;
                    this._v_Success     = undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_WithId.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ResolutionConfig){}/* CQT */
            aPrototype.pCleanUpTest_ResolutionConfig = pCleanUpTest_ResolutionConfig;















            var fReserveId = function() {

                if( !this._v_Identifier) {
                    return null;
                }

                return  this._v_Identifier.fReserveId();
            };
            if( fReserveId){}/* CQT */
            aPrototype.fReserveId = fReserveId;








            var pResolveWithValue = function( theValue, theResolutionSourceKind, theResolverResolution) {

                this._v_ResolutionStatus = this.RESOLUTIONSTATUS_TERMINATED;
                this._v_Success          = true;

                if( theResolutionSourceKind) {
                    this._v_ResolutionSourceKind = theResolutionSourceKind;
                }

                if( theResolverResolution) {
                    this._v_ResolverResolution = theResolverResolution;

                    if( theResolverResolution && theResolverResolution._v_ResolvedResolutions) {
                        if( theResolverResolution._v_ResolvedResolutions.indexOf( this) < 0) {
                            theResolverResolution._v_ResolvedResolutions.push( this);
                        }
                    }
                }
            };
            if( pResolveWithValue){}/* CQT */
            aPrototype.pResolveWithValue = pResolveWithValue;







            var pAddResolvedResolution = function( theResolvedResolution) {
                if( !theResolvedResolution) {
                    return;
                }

                if( this._v_ResolvedResolutions.indexOf( theResolvedResolution) < 0) {
                    this._v_ResolvedResolutions.push( theResolvedResolution);
                }
            };
            if( pAddResolvedResolution){}/* CQT */
            aPrototype.pAddResolvedResolution = pAddResolvedResolution;






            var pUnresolveToResolveAgain = function() {

                this._v_ResolutionStatus = this.RESOLUTIONSTATUS_PENDING;
                this._v_Success     = false;
            };
            if( pUnresolveToResolveAgain){}/* CQT */
            aPrototype.pUnresolveToResolveAgain = pUnresolveToResolveAgain;







            return aPrototype;

        })();







        var ResolutionConfig_Constructor = function( theTitle, theIdentifier, theConfiguration) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Identifier = null;
            this._v_IdentifierIsOwn = null;

            this._v_Configuration     = null;

            this._v_ResolutionSourceKind = null;
            this._v_ResolverResolution  = null;
            this._v_ResolvedResolutions = [ ];

            this._v_ResolutionStatus = null;
            this._v_Success     = null;

            this._pInit_ResolutionConfig( theTitle, theIdentifier, theConfiguration);
        };
        ResolutionConfig_Constructor.prototype = aResolutionConfig_Prototype;





        var ResolutionConfig_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;

            this._v_Prototype = aResolutionConfig_Prototype;
            this._v_Type = null;

            this._v_Identifier = null;
            this._v_IdentifierIsOwn = null;

            this._v_Configuration     = null;

            this._v_ResolutionSourceKind = null;
            this._v_ResolverResolution  = null;
            this._v_ResolvedResolutions = [ ];

            this._v_ResolutionStatus = null;
            this._v_Success     = null;
        };
        ResolutionConfig_SuperPrototypeConstructor.prototype = aResolutionConfig_Prototype;



        var aModule = {
            "ResolutionConfig_Prototype": aResolutionConfig_Prototype,
            "ResolutionConfig_Constructor": ResolutionConfig_Constructor,
            "ResolutionConfig_SuperPrototypeConstructor": ResolutionConfig_SuperPrototypeConstructor
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

            var aM_withid_test   = require('../withid-test');
            var aM_identifier    = require('../identifier-test');

            return aMod_definer( aM_withid_test, aM_identifier);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "../withid-test", "../identifier-test"], function ( theM_withid_test, theM_identifier) {
            return aMod_definer( theM_withid_test, theM_identifier);
        });
    }


}());