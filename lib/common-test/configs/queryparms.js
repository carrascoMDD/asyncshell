'use strict';

/*
 queryparms.js
 Created 201408122316
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

    var aMod_definer =function( theM_queryconfig,
                                theM_resolutionparm,
                                theM_traversals,
                                theM_overrider) {


        var ModuleName     = "queryparms";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGRESOLVEDINGLOBALS     = false;
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











        var aQueryParms_Prototype = (function() {


            var aPrototype = new theM_queryconfig.QueryConfig_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_queryconfig.WithIdTest_Prototype;


            aPrototype._v_Type = "QueryParms";

            aPrototype._v_ParmNamesToQuery = null;
            aPrototype._v_MapForStepsWithParmPrefix = null;



            var _pInit = function( theTitle, theIdentifier, theConfiguration, theParmsToQuery, theMapForStepsWithParmPrefix) {

                this._pInit_QueryParms( theTitle, theIdentifier, theConfiguration, theParmsToQuery, theParmsToQuery, theMapForStepsWithParmPrefix);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;





            var _pInit_QueryParms = function( theTitle, theIdentifier, theConfiguration, theParmsToQuery, theMapForStepsWithParmPrefix) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_QueryConfig.apply( this, [ theTitle, theIdentifier, theConfiguration]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ParmNamesToQuery = theParmsToQuery;
                this._v_MapForStepsWithParmPrefix = theMapForStepsWithParmPrefix;
            };
            if( _pInit_QueryParms){}/* CQT */
            aPrototype._pInit_QueryParms = _pInit_QueryParms;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_QueryParms( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_QueryParms = function( theReleaseParms, theReleaseDone) {

                this._v_ParmNamesToQuery = undefined;
                this._v_MapForStepsWithParmPrefix = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_QueryConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_QueryParms){}/* CQT */
            aPrototype._pRelease_QueryParms = _pRelease_QueryParms;







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

                this.pCleanUpTest_QueryParms( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_QueryParms= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_ParmNamesToQuery = undefined;
                    this._v_MapForStepsWithParmPrefix = undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_QueryConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_QueryParms){}/* CQT */
            aPrototype.pCleanUpTest_QueryParms = pCleanUpTest_QueryParms;

















            var pResolveParmsQuery = function( theResolvingInImportedConfiguration) {
                if( !this._v_Configuration) {
                    return;
                }

                if( !this._v_ParmNamesToQuery || !this._v_ParmNamesToQuery.length) {
                    return;
                }


                this.pCreateParmResolutionsIfAbsent();
                if( !this._v_UnresolvedNames.length) {
                    return;
                }


                this.pResolveParmsQuery_FromExportedParms();
                if( !this._v_UnresolvedNames.length) {
                    return;
                }


                this.pResolveParmsQuery_FromConfigParms();
                if( !this._v_UnresolvedNames.length) {
                    return;
                }


                if( !theResolvingInImportedConfiguration) {
                    this.pResolveParmsQuery_FromOwnerConfiguration();
                    if( !this._v_UnresolvedNames.length) {
                        return;
                    }
                }


                this.pResolveParmsQuery_FromImportedConfigurations();
                if( !this._v_UnresolvedNames.length) {
                    return;
                }


                if( !theResolvingInImportedConfiguration) {
                    this.pResolveParmsQuery_FromGlobals();
                    if( !this._v_UnresolvedNames.length) {
                        return;
                    }
                }


                this.pResolveParmsQuery_FromDefaults();

            };
            if( pResolveParmsQuery){}/* CQT */
            aPrototype.pResolveParmsQuery = pResolveParmsQuery;








            var pCreateParmResolutionsIfAbsent = function() {

                if( !this._v_Configuration) {
                    return;
                }


                if( !this._v_ParmNamesToQuery || !this._v_ParmNamesToQuery.length) {
                    return;
                }


                var aNumParmsToQuery = this._v_ParmNamesToQuery.length;

                for( var aParmToQueryIdx = 0; aParmToQueryIdx < aNumParmsToQuery; aParmToQueryIdx++) {

                    var aParmToQuery = this._v_ParmNamesToQuery[ aParmToQueryIdx];


                    var aHasAnyStepsWithParmPrefix = theM_traversals.fgHasAnyStepsWithParmPrefix( aParmToQuery);
                    if( aHasAnyStepsWithParmPrefix) {
                        console.log( aParmToQuery + "    pCreateParmResolutionsIfAbsent aHasAnyStepsWithParmPrefix " + this._v_Configuration._v_Title);
                    }

                    var aResolution = this._v_Configuration._v_ParmResolutionsByName[ aParmToQuery];
                    if( aResolution) {

                        if( aHasAnyStepsWithParmPrefix) {

                            aResolution.pUnresolveToResolveAgain();

                            this._v_InitiallyUnresolvedNames.push( aParmToQuery);
                            this._v_UnresolvedNames.push(          aParmToQuery);

                        }
                        else {

                            if( aResolution._v_Success) {

                                this._v_InitiallyResolvedNames.push( aParmToQuery);

                            }
                            else {

                                this._v_InitiallyUnresolvedNames.push( aParmToQuery);
                                this._v_UnresolvedNames.push(          aParmToQuery);
                            }
                        }
                        continue;
                    }


                    var aParmResolutionTitle = "";
                    if( this._v_Configuration && this._v_Configuration._v_Title) {
                        aParmResolutionTitle += this._v_Configuration._v_Title
                    }
                    if( aParmResolutionTitle) {
                        aParmResolutionTitle += " ";
                    }
                    aParmResolutionTitle += aParmToQuery;

                    var aParmResolution = new theM_resolutionparm.ResolutionParm_Constructor(
                        aParmResolutionTitle, this._v_Identifier, this._v_Configuration, aParmToQuery, aHasAnyStepsWithParmPrefix
                    );

                    this._v_Configuration.pAddJustCreatedParmResolution( aParmResolution);


                    this._v_UnresolvedNames.push( aParmToQuery);
                    this._v_JustCreatedNames.push( aParmToQuery);
                }
            };
            if( pCreateParmResolutionsIfAbsent){}/* CQT */
            aPrototype.pCreateParmResolutionsIfAbsent = pCreateParmResolutionsIfAbsent;










            var pResolveParmsQuery_FromExportedParms = function( ) {

                if( !this._v_Configuration) {
                    return;
                }

                if( !this._v_Configuration._v_ExportedParms) {
                    return;
                }

                if( !this._v_Configuration._v_ParmResolutionsByName) {
                    return;
                }


                var someUnresolvedNames = this._v_UnresolvedNames.slice();
                if( !someUnresolvedNames || !someUnresolvedNames.length) {
                    return;
                }

                var aNumParmNames = someUnresolvedNames.length;
                for( var aParmNameIdx=0; aParmNameIdx < aNumParmNames; aParmNameIdx++) {

                    var aParmName = someUnresolvedNames[ aParmNameIdx];

                    var aResolution = this._v_Configuration._v_ParmResolutionsByName[ aParmName];
                    if( aResolution) {

                        var aParmNameValue = this._v_Configuration._v_ExportedParms.fParmNameValue( aParmName, this._v_MapForStepsWithParmPrefix);

                        if( !( aParmNameValue == null) &&  ( aParmNameValue.hasOwnProperty( "value")))   {

                            var aValue = aParmNameValue[ "value"];

                            aResolution.pResolveParmWithValue( aValue, aResolution.PARMRESOLUTIONKIND_EXPORTED, null);

                            var anUnresolvedNameIndex = this._v_UnresolvedNames.indexOf( aParmName);
                            if( anUnresolvedNameIndex >= 0) {
                                this._v_UnresolvedNames.splice( anUnresolvedNameIndex, 1);
                            }

                            var aJustResolvedNameIndex = this._v_JustResolvedNames.indexOf( aParmName);
                            if( aJustResolvedNameIndex < 0) {
                                this._v_JustResolvedNames.push( aParmName);
                            }
                        }
                    }
                }
            };
            if( pResolveParmsQuery_FromExportedParms){}/* CQT */
            aPrototype.pResolveParmsQuery_FromExportedParms = pResolveParmsQuery_FromExportedParms;








            var pResolveParmsQuery_FromConfigParms = function( ) {

                if( !this._v_Configuration) {
                    return;
                }

                if( !this._v_Configuration._v_ConfigParms) {
                    return;
                }


                if( !this._v_Configuration._v_ParmResolutionsByName) {
                    return;
                }


                var someUnresolvedNames = this._v_UnresolvedNames.slice();
                if( !someUnresolvedNames || !someUnresolvedNames.length) {
                    return;
                }

                var aNumUnresolvedNames = someUnresolvedNames.length;
                for( var anUnresolvedNameIdx=0; anUnresolvedNameIdx < aNumUnresolvedNames; anUnresolvedNameIdx++) {

                    var anUnresolvedName = someUnresolvedNames[ anUnresolvedNameIdx];

                    var aResolution = this._v_Configuration._v_ParmResolutionsByName[ anUnresolvedName];
                    if( aResolution) {

                        var aParmNameValue = this._v_Configuration._v_ConfigParms.fParmNameValue( anUnresolvedName, this._v_MapForStepsWithParmPrefix);

                        if( !( aParmNameValue == null) &&  ( aParmNameValue.hasOwnProperty( "value")))   {

                            var aValue = aParmNameValue[ "value"];

                            aResolution.pResolveParmWithValue( aValue, theM_resolutionparm.PARMRESOLUTIONKIND_CONFIGPARMS, null);

                            var anUnresolvedNameIndex = this._v_UnresolvedNames.indexOf( anUnresolvedName);
                            if( anUnresolvedNameIndex >= 0) {
                                this._v_UnresolvedNames.splice( anUnresolvedNameIndex, 1);
                            }

                            var aJustResolvedNameIndex = this._v_JustResolvedNames.indexOf( anUnresolvedName);
                            if( aJustResolvedNameIndex < 0) {
                                this._v_JustResolvedNames.push( anUnresolvedName);
                            }
                        }
                    }
                }
            };
            if( pResolveParmsQuery_FromConfigParms){}/* CQT */
            aPrototype.pResolveParmsQuery_FromConfigParms = pResolveParmsQuery_FromConfigParms;








            var pResolveParmsQuery_FromDefaults = function( ) {

                if( !this._v_Configuration) {
                    return;
                }

                if( !this._v_Configuration._v_Defaults) {
                    return;
                }


                if( !this._v_Configuration._v_ParmResolutionsByName) {
                    return;
                }


                var someUnresolvedNames = this._v_UnresolvedNames.slice();
                if( !someUnresolvedNames || !someUnresolvedNames.length) {
                    return;
                }

                var aNumUnresolvedNames = someUnresolvedNames.length;
                for( var anUnresolvedNameIdx=0; anUnresolvedNameIdx < aNumUnresolvedNames; anUnresolvedNameIdx++) {

                    var anUnresolvedName = someUnresolvedNames[ anUnresolvedNameIdx];

                    var aResolution = this._v_Configuration._v_ParmResolutionsByName[ anUnresolvedName];
                    if( aResolution) {

                        var aParmNameValue = this._v_Configuration._v_Defaults.fParmNameValue( anUnresolvedName, this._v_MapForStepsWithParmPrefix);

                        if( !( aParmNameValue == null) &&  ( aParmNameValue.hasOwnProperty( "value")))   {

                            var aValue = aParmNameValue[ "value"];

                            aResolution.pResolveParmWithValue( aValue, theM_resolutionparm.PARMRESOLUTIONKIND_DEFAULTS, null);

                            var anUnresolvedNameIndex = this._v_UnresolvedNames.indexOf( anUnresolvedName);
                            if( anUnresolvedNameIndex >= 0) {
                                this._v_UnresolvedNames.splice( anUnresolvedNameIndex, 1);
                            }

                            var aJustResolvedNameIndex = this._v_JustResolvedNames.indexOf( anUnresolvedName);
                            if( aJustResolvedNameIndex < 0) {
                                this._v_JustResolvedNames.push( anUnresolvedName);
                            }
                        }
                    }
                }
            };
            if( pResolveParmsQuery_FromDefaults){}/* CQT */
            aPrototype.pResolveParmsQuery_FromDefaults = pResolveParmsQuery_FromDefaults;












            var pResolveParmsQuery_FromGlobals = function( ) {

                if( !this._v_Configuration) {
                    return;
                }


                var somePreviousUnresolvedNames = null;
                if( this.LOGRESOLVEDINGLOBALS) {
                    somePreviousUnresolvedNames = this._v_UnresolvedNames.slice();
                    if( !somePreviousUnresolvedNames || !somePreviousUnresolvedNames.length) {
                        return;
                    }
                }

                var aGlobalConfiguration = this._v_Configuration.fGetGlobalConfiguration();
                if( !aGlobalConfiguration) {
                    return;
                }

                if( this._v_Configuration === aGlobalConfiguration) {
                    return;
                }

                this.pResolveParmsQuery_FromConfiguration( aGlobalConfiguration, theM_resolutionparm.PARMRESOLUTIONKIND_GLOBALS);

                if(  this.LOGRESOLVEDINGLOBALS) {
                    var someJustResolvedNames = [ ];

                    if( this._v_UnresolvedNames.length < somePreviousUnresolvedNames.length) {
                        var aNumNames = somePreviousUnresolvedNames.length;
                        for( var aNameIdx=0; aNameIdx < aNumNames; aNameIdx++) {
                            var aName = somePreviousUnresolvedNames[ aNameIdx];
                            if( aName) {
                                if( this._v_UnresolvedNames.indexOf( aName) <0) {
                                    someJustResolvedNames.push( aName);
                                }
                            }
                        }
                        if( someJustResolvedNames.length) {
                            console.log( ',{ "Resolved in Globals", "' + someJustResolvedNames.join(" ,") + '"}');
                        }
                    }
                }
            };
            if( pResolveParmsQuery_FromGlobals){}/* CQT */
            aPrototype.pResolveParmsQuery_FromGlobals = pResolveParmsQuery_FromGlobals;









            var pResolveParmsQuery_FromOwnerConfiguration = function( ) {

                if( !this._v_Configuration) {
                    return;
                }

                var anOwnerConfiguration = this._v_Configuration._v_OwnerConfiguration;
                if( !anOwnerConfiguration) {
                    if(  !this._v_Configuration._v_OwnerRequired || !this._v_Configuration._v_OwnerRequired._v_OwnerConfiguration) {
                        return;
                    }
                    anOwnerConfiguration = this._v_Configuration._v_OwnerRequired._v_OwnerConfiguration;
                }

                this.pResolveParmsQuery_FromConfiguration( anOwnerConfiguration, theM_resolutionparm.PARMRESOLUTIONKIND_OWNERCONFIG);
            };
            if( pResolveParmsQuery_FromOwnerConfiguration){}/* CQT */
            aPrototype.pResolveParmsQuery_FromOwnerConfiguration = pResolveParmsQuery_FromOwnerConfiguration;









            var pResolveParmsQuery_FromImportedConfigurations = function() {


                if( !this._v_Configuration) {
                    return;
                }

                if( !this._v_Configuration._v_Imports) {
                    return;
                }

                if( !this._v_UnresolvedNames.length) {
                    return;
                }


                var aNumImports = this._v_Configuration._v_Imports.length;

                for( var anImportIdx=0; anImportIdx < aNumImports; anImportIdx++) {
                    var anImport = this._v_Configuration._v_Imports[ anImportIdx];
                    if( anImport._v_Resolved) {
                        var anImportedConfiguration = anImport._v_ImportedConfiguration;
                        if( anImportedConfiguration) {

                            this.pResolveParmsQuery_FromConfiguration( anImportedConfiguration, theM_resolutionparm.PARMRESOLUTIONKIND_IMPORTED, true);

                            if( !this._v_UnresolvedNames.length) {
                                return;
                            }
                        }
                    }
                }
            };
            if( pResolveParmsQuery_FromImportedConfigurations){}/* CQT */
            aPrototype.pResolveParmsQuery_FromImportedConfigurations = pResolveParmsQuery_FromImportedConfigurations;








            var pResolveParmsQuery_FromConfiguration = function(
                theConfiguraction,
                theResolutionSourceKind,
                theResolvingInImportedConfiguration) {


                if( !this._v_Configuration) {
                    return;
                }

                if( !this._v_Configuration._v_ParmResolutionsByName) {
                    return;
                }

                if( !theConfiguraction) {
                    return;
                }

                if( !theConfiguraction._v_ParmResolutionsByName) {
                    return;
                }

                if( !this._v_UnresolvedNames || !this._v_UnresolvedNames.length) {
                    return;
                }

                var someUnresolvedNames = this._v_UnresolvedNames.slice();


                var aQueryParms = new QueryParms_Constructor(
                    "On-" +theConfiguraction._v_Title,
                    this._v_Identifier,
                    theConfiguraction,
                    someUnresolvedNames,
                    this._v_MapForStepsWithParmPrefix
                );
                aQueryParms.pResolveParmsQuery( theResolvingInImportedConfiguration);

                var aNumUnresolvedNames = someUnresolvedNames.length;
                for( var anUnresolvedNameIdx=0; anUnresolvedNameIdx < aNumUnresolvedNames; anUnresolvedNameIdx++) {

                    var anUnresolvedName = someUnresolvedNames[ anUnresolvedNameIdx];

                    var anObtainedResolution = theConfiguraction._v_ParmResolutionsByName[ anUnresolvedName];

                    if( anObtainedResolution) {

                        if( anObtainedResolution._v_Success) {

                            var aValue = anObtainedResolution._v_ParmValue;

                            var aResolutionHere = this._v_Configuration._v_ParmResolutionsByName[ anUnresolvedName];
                            if( aResolutionHere) {
                                aResolutionHere.pResolveParmWithValue( aValue, theResolutionSourceKind, anObtainedResolution);
                            }


                            var anUnresolvedNameIndex = this._v_UnresolvedNames.indexOf( anUnresolvedName);
                            if( anUnresolvedNameIndex >= 0) {
                                this._v_UnresolvedNames.splice( anUnresolvedNameIndex, 1);
                            }

                            var aJustResolvedNameIndex = this._v_JustResolvedNames.indexOf( anUnresolvedName);
                            if( aJustResolvedNameIndex < 0) {
                                this._v_JustResolvedNames.push( anUnresolvedName);
                            }
                        }
                    }
                }
            };
            if( pResolveParmsQuery_FromConfiguration){}/* CQT */
            aPrototype.pResolveParmsQuery_FromConfiguration = pResolveParmsQuery_FromConfiguration;





            return aPrototype;

        })();






        var QueryParms_Constructor = function( theTitle, theIdentifier, theConfiguration, theParmsToQuery, theMapForStepsWithParmPrefix) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_queryconfig.QueryConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ParmNamesToQuery = null;
            this._v_MapForStepsWithParmPrefix = null;

            this._pInit_QueryParms( theTitle, theIdentifier, theConfiguration, theParmsToQuery, theMapForStepsWithParmPrefix);
        };
        QueryParms_Constructor.prototype = aQueryParms_Prototype;







        var QueryParms_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_queryconfig.QueryConfig_Prototype;

            this._v_Prototype = aQueryParms_Prototype;
            this._v_Type = null;

            this._v_ParmNamesToQuery = null;
            this._v_MapForStepsWithParmPrefix = null;
        };
        QueryParms_SuperPrototypeConstructor.prototype = aQueryParms_Prototype;



        var aModule = {
            "QueryParms_Prototype": aQueryParms_Prototype,
            "QueryParms_Constructor": QueryParms_Constructor,
            "QueryParms_SuperPrototypeConstructor": QueryParms_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_queryconfig    = require('./queryconfig');
            var aM_resolutionparm = require('./resolutionparm');
            var aM_traversals     = require('../traversals/traversals');
            var aM_overrider      = require('../overrider');

            return aMod_definer(
                aM_queryconfig,
                aM_resolutionparm,
                aM_traversals,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./queryconfig",
            "./resolutionparm",
            "../traversals/traversals",
            "../overrider"
        ], function (
            theM_queryconfig,
            theM_resolutionparm,
            theM_traversals,
            theM_overrider
            ) {
            return aMod_definer(
                theM_queryconfig,
                theM_resolutionparm,
                theM_traversals,
                theM_overrider
            );
        });
    }


}());