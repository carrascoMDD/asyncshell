'use strict';

/*
 queryfields.js
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

    var aMod_definer =function( theM_queryconfig, theM_resolutionfield) {


        var ModuleName     = "queryfields";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var aQueryFields_Prototype = (function() {


            var aPrototype = new theM_queryconfig.QueryConfig_SuperPrototypeConstructor();


            aPrototype._v_SuperPrototype = theM_queryconfig.WithIdTest_Prototype;


            aPrototype._v_Type = "QueryFields";

            aPrototype._v_FieldNamesToQuery = null;




            var _pInit = function( theTitle, theIdentifier, theConfiguration, theFieldsToQuery) {

                this._pInit_QueryFields( theTitle, theIdentifier, theConfiguration, theFieldsToQuery);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_QueryFields = function( theTitle, theIdentifier, theConfiguration, theFieldsToQuery) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_QueryConfig.apply( this, [ theTitle, theIdentifier, theConfiguration]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_FieldNamesToQuery = theFieldsToQuery;
            };
            if( _pInit_QueryFields){}/* CQT */
            aPrototype._pInit_QueryFields = _pInit_QueryFields;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_QueryFields( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_QueryFields = function( theReleaseParms, theReleaseDone) {

                this._v_FieldNamesToQuery = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_QueryConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_QueryFields){}/* CQT */
            aPrototype._pRelease_QueryFields = _pRelease_QueryFields;







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

                this.pCleanUpTest_QueryFields( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_QueryFields= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_FieldNamesToQuery = undefined;
                }

                    /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_QueryConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_QueryFields){}/* CQT */
            aPrototype.pCleanUpTest_QueryFields = pCleanUpTest_QueryFields;














            var pResolveFieldsQuery = function() {
                if( !this._v_Configuration) {
                    return;
                }

                if( !this._v_FieldNamesToQuery || !this._v_FieldNamesToQuery.length) {
                    return;
                }


                this.pCreateFieldResolutionsIfAbsent();



                if( !this._v_UnresolvedNames.length) {
                    return;
                }
                this.pResolveFieldsQuery_FromConfigFields();



                if( !this._v_UnresolvedNames.length) {
                    return;
                }
                this.pResolveFieldsQuery_FromOwnerConfiguration();



                if( !this._v_UnresolvedNames.length) {
                    return;
                }
                this.pResolveFieldsQuery_FromImportedConfigurations();

            };
            if( pResolveFieldsQuery){}/* CQT */
            aPrototype.pResolveFieldsQuery = pResolveFieldsQuery;










            var pCreateFieldResolutionsIfAbsent = function() {

                if( !this._v_Configuration) {
                    return;
                }


                if( !this._v_FieldNamesToQuery || !this._v_FieldNamesToQuery.length) {
                    return;
                }


                var aNumFieldsToQuery = this._v_FieldNamesToQuery.length;
                for( var aFieldToQueryIdx = 0; aFieldToQueryIdx < aNumFieldsToQuery; aFieldToQueryIdx++) {
                    var aFieldToQuery = this._v_FieldNamesToQuery[ aFieldToQueryIdx];

                    var aResolution = this._v_Configuration._v_FieldResolutionsByName[ aFieldToQuery];
                    if(aResolution) {

                        if( aResolution._v_Success) {
                            this._v_InitiallyResolvedNames.push( aFieldToQuery);
                        }
                        else {
                            this._v_InitiallyUnresolvedNames.push( aFieldToQuery);
                        }
                    }
                    else {

                        var aFieldResolutionTitle = "";
                        if( this._v_Configuration && this._v_Configuration._v_Title) {
                            aFieldResolutionTitle += this._v_Configuration._v_Title
                        }
                        if( aFieldResolutionTitle) {
                            aFieldResolutionTitle += " ";
                        }
                        aFieldResolutionTitle += aFieldToQuery;

                        var aFieldResolution = new theM_resolutionfield.ResolutionField_Constructor(
                            aFieldResolutionTitle, this._v_Identifier, this._v_Configuration, aFieldToQuery
                        );

                        this._v_Configuration.pAddJustCreatedFieldResolution( aFieldResolution);


                        this._v_UnresolvedNames.push( aFieldToQuery);
                        this._v_JustCreatedNames.push( aFieldToQuery);
                    }
                }
            };
            if( pCreateFieldResolutionsIfAbsent){}/* CQT */
            aPrototype.pCreateFieldResolutionsIfAbsent = pCreateFieldResolutionsIfAbsent;








            var pResolveFieldsQuery_FromConfigFields = function( ) {

                if( !this._v_Configuration) {
                    return;
                }

                if( !this._v_Configuration._v_FieldResolutionsByName) {
                    return;
                }


                var someUnresolvedNames = this._v_UnresolvedNames.slice();
                if( !someUnresolvedNames || !someUnresolvedNames.length) {
                    return;
                }

                var aNumUnresolvedNames = someUnresolvedNames.length;
                for( var anUnresolvedNameIdx=0; anUnresolvedNameIdx < aNumUnresolvedNames; anUnresolvedNameIdx++) {

                    var anUnresolvedName = someUnresolvedNames[ anUnresolvedNameIdx];

                    var aResolution = this._v_Configuration._v_FieldResolutionsByName[ anUnresolvedName];
                    if( aResolution) {

                        if( this._v_Configuration._v_MembersPopulatedByParser.indexOf( anUnresolvedName) >= 0) {
                            var aValue = this._v_Configuration[ anUnresolvedName];

                            aResolution.pResolveFieldWithValue( aValue, theM_resolutionfield.FIELDRESOLUTIONKIND_FIELDS, null);

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
            if( pResolveFieldsQuery_FromConfigFields){}/* CQT */
            aPrototype.pResolveFieldsQuery_FromConfigFields = pResolveFieldsQuery_FromConfigFields;











            var pResolveFieldsQuery_FromOwnerConfiguration = function( ) {

                if( !this._v_Configuration) {
                    return;
                }

                var anOwnerConfiguration = this._v_Configuration._v_OwnerConfiguration;
                if( !anOwnerConfiguration) {
                    return;
                }


                if( anOwnerConfiguration._v_Type == "Required") {
                    anOwnerConfiguration = anOwnerConfiguration._v_OwnerConfiguration;
                }
                if( !anOwnerConfiguration) {
                    return;
                }

                this.pResolveFieldsQuery_FromConfiguration( anOwnerConfiguration, theM_resolutionfield.FIELDRESOLUTIONKIND_OWNERCONFIG);
            };
            if( pResolveFieldsQuery_FromOwnerConfiguration){}/* CQT */
            aPrototype.pResolveFieldsQuery_FromOwnerConfiguration = pResolveFieldsQuery_FromOwnerConfiguration;









            var pResolveFieldsQuery_FromImportedConfigurations = function() {


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

                            this.pResolveFieldsQuery_FromConfiguration( anImportedConfiguration, theM_resolutionfield.FIELDRESOLUTIONKIND_IMPORTED);

                            if( !this._v_UnresolvedNames.length) {
                                return;
                            }
                        }
                    }
                }
            };
            if( pResolveFieldsQuery_FromImportedConfigurations){}/* CQT */
            aPrototype.pResolveFieldsQuery_FromImportedConfigurations = pResolveFieldsQuery_FromImportedConfigurations;








            var pResolveFieldsQuery_FromConfiguration = function( theConfiguraction, theResolutionSourceKind) {


                if( !this._v_Configuration) {
                    return;
                }

                if( !this._v_Configuration._v_FieldResolutionsByName) {
                    return;
                }

                if( !theConfiguraction) {
                    return;
                }

                if( !theConfiguraction._v_FieldResolutionsByName) {
                    return;
                }

                if( !this._v_UnresolvedNames || !this._v_UnresolvedNames.length) {
                    return;
                }

                var someUnresolvedNames = this._v_UnresolvedNames.slice();


                var aQueryFields = new QueryFields_Constructor(
                    "On-" +theConfiguraction._v_Title,
                    this._v_Identifier,
                    theConfiguraction,
                    someUnresolvedNames
                );
                aQueryFields.pResolveFieldsQuery();

                var aNumUnresolvedNames = someUnresolvedNames.length;
                for( var anUnresolvedNameIdx=0; anUnresolvedNameIdx < aNumUnresolvedNames; anUnresolvedNameIdx++) {

                    var anUnresolvedName = someUnresolvedNames[ anUnresolvedNameIdx];

                    var anObtainedResolution = theConfiguraction._v_FieldResolutionsByName[ anUnresolvedName];

                    if( anObtainedResolution) {

                        if( anObtainedResolution._v_Success) {

                            var aValue = anObtainedResolution._v_FieldValue;

                            var aResolutionHere = this._v_Configuration._v_FieldResolutionsByName[ anUnresolvedName];
                            if( aResolutionHere) {
                                aResolutionHere.pResolveFieldWithValue( aValue, theResolutionSourceKind, anObtainedResolution);
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
            if( pResolveFieldsQuery_FromConfiguration){}/* CQT */
            aPrototype.pResolveFieldsQuery_FromConfiguration = pResolveFieldsQuery_FromConfiguration;





            return aPrototype;

        })();





        var QueryFields_Constructor = function( theTitle, theIdentifier, theConfiguration, theFieldsToQuery) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_queryconfig.QueryConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_FieldNamesToQuery = null;

            this._pInit_QueryFields( theTitle, theIdentifier, theConfiguration, theFieldsToQuery);
        };
        QueryFields_Constructor.prototype = aQueryFields_Prototype;







        var QueryFields_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_queryconfig.QueryConfig_Prototype;

            this._v_Prototype = aQueryFields_Prototype;
            this._v_Type = null;

            this._v_FieldNamesToQuery = null;

        };
        QueryFields_SuperPrototypeConstructor.prototype = aQueryFields_Prototype;



        var aModule = {
            "QueryFields_Prototype": aQueryFields_Prototype,
            "QueryFields_Constructor": QueryFields_Constructor,
            "QueryFields_SuperPrototypeConstructor": QueryFields_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_queryconfig     = require('./queryconfig');
            var aM_resolutionfield = require('./resolutionfield');

            return aMod_definer( aM_queryconfig, aM_resolutionfield);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "./queryconfig", "./resolutionfield"], function ( theM_queryconfig, theM_resolutionfield) {
            return aMod_definer( theM_queryconfig, theM_resolutionfield);
        });
    }


}());