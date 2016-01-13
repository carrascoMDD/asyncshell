'use strict';

/*
 resolutionparm.js
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

    var aMod_definer =function( theM_resolutionconfig) {


        var ModuleName     = "resolutionparm";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.PARMRESOLUTIONKIND_EXPORTED     = "EXPORTED";
            theToInit.PARMRESOLUTIONKIND_CONFIGPARMS  = "CONFIGPARMS";
            theToInit.PARMRESOLUTIONKIND_OWNERCONFIG  = "OWNERCONFIG";
            theToInit.PARMRESOLUTIONKIND_IMPORTED     = "IMPORTED";
            theToInit.PARMRESOLUTIONKIND_DEFAULTS     = "DEFAULTS";
            theToInit.PARMRESOLUTIONKIND_INJECTEDPARM = "INJECTEDPARM";
            theToInit.PARMRESOLUTIONKIND_GLOBALS      = "GLOBALS";

            theToInit.PARMRESOLUTIONKINDS = [
                theToInit.PARMRESOLUTIONKIND_EXPORTED,
                theToInit.PARMRESOLUTIONKIND_CONFIGPARMS,
                theToInit.PARMRESOLUTIONKIND_OWNERCONFIG,
                theToInit.PARMRESOLUTIONKIND_IMPORTED,
                theToInit.PARMRESOLUTIONKIND_DEFAULTS,
                theToInit.PARMRESOLUTIONKIND_INJECTEDPARM
            ]
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









        var aResolutionParm_Prototype = (function() {


            var aPrototype = new theM_resolutionconfig.ResolutionConfig_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_resolutionconfig.ResolutionConfig_Prototype;


            aPrototype._v_Type = "ResolutionParm";


            aPrototype._v_ParmName  = null;
            aPrototype._v_ParmValue = null;

            aPrototype._v_HasAnyStepsWithParmPrefix = null;



            var _pInit = function( theTitle, theIdentifier, theConfiguration, theParmName, theHasAnyStepsWithParmPrefix) {

                this._pInit_ResolutionParm( theTitle, theIdentifier, theConfiguration, theParmName, theHasAnyStepsWithParmPrefix);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_ResolutionParm = function( theTitle, theIdentifier, theConfiguration, theParmName, theHasAnyStepsWithParmPrefix) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ResolutionConfig.apply( this, [  theTitle, theIdentifier, theConfiguration]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ParmName  = theParmName;
                this._v_ParmValue = null;

                this._v_HasAnyStepsWithParmPrefix = false;
                if( theHasAnyStepsWithParmPrefix) {
                    this._v_HasAnyStepsWithParmPrefix = true;
                }
                
                if( this._v_HasAnyStepsWithParmPrefix ){}/* CQT */
            };
            if( _pInit_ResolutionParm){}/* CQT */
            aPrototype._pInit_ResolutionParm = _pInit_ResolutionParm;


















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ResolutionParm( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ResolutionParm = function( theReleaseParms, theReleaseDone) {

                this._v_ParmName  = undefined;
                this._v_ParmValue = undefined;

                this._v_HasAnyStepsWithParmPrefix = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ResolutionConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ResolutionParm){}/* CQT */
            aPrototype._pRelease_ResolutionParm = _pRelease_ResolutionParm;









            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

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

                this.pCleanUpTest_ResolutionParm( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ResolutionParm= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_ParmName  = undefined;
                    this._v_ParmValue = undefined;

                    this._v_HasAnyStepsWithParmPrefix = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ResolutionConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ResolutionParm){}/* CQT */
            aPrototype.pCleanUpTest_ResolutionParm = pCleanUpTest_ResolutionParm;















            var pResolveParmWithValue = function( theValue, theResolutionSourceKind, theResolverResolution) {

                this._v_ParmValue = theValue;


                aPrototype._v_SuperPrototype.pResolveWithValue.apply( this, [  theValue, theResolutionSourceKind, theResolverResolution]);


                if( this._v_ResolvedResolutions) {

                    var aNumResolvedResolutions = this._v_ResolvedResolutions.length;
                    for( var aResolvedResolutionIdx=0; aResolvedResolutionIdx < aNumResolvedResolutions; aResolvedResolutionIdx++) {

                        var aResolvedResolution = this._v_ResolvedResolutions[ aResolvedResolutionIdx];
                        if( aResolvedResolution && aResolvedResolution.pResolveParmWithValue) {
                            aResolvedResolution.pResolveParmWithValue( theValue);
                        }
                    }
                }
            };
            if( pResolveParmWithValue){}/* CQT */
            aPrototype.pResolveParmWithValue = pResolveParmWithValue;













            /*
            var pUpdateExpressionWithParmPrefix = function() {

                if( !this._v_ParmName) {
                    return;
                }

                if( this._v_ResolverResolution) {
                    this._v_ResolverResolution.pUpdateExpressionWithParmPrefix();
                    return;
                }



            };
            if( pUpdateExpressionWithParmPrefix){}
            aPrototype.pUpdateExpressionWithParmPrefix = pUpdateExpressionWithParmPrefix;
             */





            var pInvalidateByExportParm = function() {

                this.pUnresolveToResolveAgain();

                var aNumResolvedResolutions = this._v_ResolvedResolutions.length;
                for( var aResolvedResolutionIdx=0; aResolvedResolutionIdx < aNumResolvedResolutions; aResolvedResolutionIdx++) {

                    var aResolvedResolution = this._v_ResolvedResolutions[ aResolvedResolutionIdx];
                    if( aResolvedResolution && aResolvedResolution.pInvalidateByExportParm) {
                        aResolvedResolution.pInvalidateByExportParm();
                    }
                }
            };
            if( pInvalidateByExportParm){}
            aPrototype.pInvalidateByExportParm = pInvalidateByExportParm;








            var fAsLogObject = function( ) {
                return this.fToResultJSON();
            };
            if( fAsLogObject){}/* CQT */
            aPrototype.fAsLogObject = fAsLogObject;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( theCommonObjects){}/* CQT */
                if( theAlready){}/* CQT */

                var aResultJSON = {
                    "parmName": this._v_ParmName,
                    "success": this._v_Success,
                    "parmValue": this._v_ParmValue
                };
                if( aResultJSON){}/* CQT */

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;







            return aPrototype;

        })();







        var ResolutionParm_Constructor = function( theTitle, theIdentifier, theConfiguration, theParmName, theHasAnyStepsWithParmPrefix) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_resolutionconfig.ResolutionConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ParmName  = null;
            this._v_ParmValue = null;

            this._v_HasAnyStepsWithParmPrefix = null;

            this._pInit_ResolutionParm( theTitle, theIdentifier, theConfiguration, theParmName, theHasAnyStepsWithParmPrefix);
        };
        ResolutionParm_Constructor.prototype = aResolutionParm_Prototype;





        var ResolutionParm_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_resolutionconfig.ResolutionConfig_Prototype;

            this._v_Prototype = aResolutionParm_Prototype;
            this._v_Type = null;

            this._v_ParmName  = null;
            this._v_ParmValue = null;
        };
        ResolutionParm_SuperPrototypeConstructor.prototype = aResolutionParm_Prototype;



        var aModule = {
            "ResolutionParm_Prototype": aResolutionParm_Prototype,
            "ResolutionParm_Constructor": ResolutionParm_Constructor,
            "ResolutionParm_SuperPrototypeConstructor": ResolutionParm_SuperPrototypeConstructor
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

            var aM_resolutionconfig   = require('./resolutionconfig');

            return aMod_definer( aM_resolutionconfig);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "./resolutionconfig"], function ( theM_resolutionconfig) {
            return aMod_definer( theM_resolutionconfig);
        });
    }


}());