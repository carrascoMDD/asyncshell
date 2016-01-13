'use strict';

/*
 importconfig.js
 Creado 201408122334
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

    var aMod_definer =function( theM_parsedconfig, theM_specparser_import, theM_specloader) {


        var ModuleName     = "importconfig";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.JSONNAME_CONFIGURATIONPATH     = "configurationPath";
            theToInit.JSONNAME_IMPORTMODE            = "importMode";


            theToInit.JSONNAMES_IMPORT = [
                theToInit.JSONNAME_CONFIGURATIONPATH,
                theToInit.JSONNAME_IMPORTMODE
            ];


            theToInit.REQUIREDJSONNAMES = [
                theToInit.JSONNAME_CONFIGURATIONPATH
            ];



            theToInit.IMPORTMODES    = theM_parsedconfig.MERGEMODEALL.slice();


            theToInit.POPULABLEFIELDS_IMPORT = [
                "_v_ConfigurationPath",
                "_v_ImportMode"
            ];

            theToInit.POPULABLEFIELDS = theM_parsedconfig.POPULABLEFIELDS.concat( theToInit.POPULABLEFIELDS_IMPORT);



            theToInit.JSONNAMESBYFIELDNAME_IMPORT = {
                "_v_ConfigurationPath":    theToInit.JSONNAME_CONFIGURATIONPATH,
                "_v_ImportMode":           theToInit.JSONNAME_IMPORTMODE
            };

            for( var aFieldName in theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG) {
                if( theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG.hasOwnProperty( aFieldName)) {
                    theToInit.JSONNAMESBYFIELDNAME_IMPORT[ aFieldName] = theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG[ aFieldName];
                }
            }

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











        var aImportConfig_Prototype = (function() {


            var aPrototype = new theM_parsedconfig.ParsedConfig_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;


            aPrototype._v_Type = "ImportConfig";


            aPrototype._v_ConfigurationPath = null;
            aPrototype._v_ImportMode = null;

            aPrototype._v_Resolved = null;
            aPrototype._v_ResolveError= null;

            aPrototype._v_ImportedConfiguration = null;






            var _pInit = function( theTitle, theIdentifier) {

                this._pInit_ImportConfig( theTitle, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_ImportConfig = function( theTitle, theIdentifier) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ParsedConfig.apply( this, [  theTitle, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ConfigurationPath = null;
                this._v_ImportMode = null;

                this._v_Resolved = null;
                this._v_ResolveError= null;

                this._v_ImportedConfiguration = null;

                if( this._v_Resolved){}/* CQT */
                if( this._v_ResolveError){}/* CQT */
                if( this._v_ImportedConfiguration){}/* CQT */
            };
            if( _pInit_ImportConfig){}/* CQT */
            aPrototype._pInit_ImportConfig = _pInit_ImportConfig;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ImportConfig( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;








            var _pRelease_ImportConfig = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */


                this._v_ConfigurationPath = undefined;
                this._v_ImportMode = undefined;

                this._v_Resolved = undefined;
                this._v_ResolveError= undefined;


                if( this._v_ImportedConfiguration) {
                    if( typeof this._v_ImportedConfiguration._pRelease == "function") {
                        this._v_ImportedConfiguration._pRelease( theReleaseParms, theReleaseDone);
                    }
                }
                this._v_ImportedConfiguration   = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ParsedConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ImportConfig){}/* CQT */
            aPrototype._pRelease_ImportConfig = _pRelease_ImportConfig;









            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);


                if( this._v_ImportedConfiguration) {
                    if( theReleaseChildren.indexOf( this._v_ImportedConfiguration) < 0) {
                        theReleaseChildren.push( this._v_ImportedConfiguration);
                        if( typeof this._v_ImportedConfiguration._pReleaseChildrenInto == "function") {
                            this._v_ImportedConfiguration._pReleaseChildrenInto( theReleaseChildren);
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

                this.pCleanUpTest_ImportConfig( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_ImportConfig= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_ConfigurationPath = undefined;
                    this._v_ImportMode = undefined;

                    this._v_Resolved = undefined;
                    this._v_ResolveError= undefined;
                }

                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_CONFIGS)) {

                    if( this._v_ImportedConfiguration) {
                        if( typeof this._v_ImportedConfiguration.pCleanUpTest == "function") {
                            this._v_ImportedConfiguration.pCleanUpTest( theWhatToClean, theReleaseParms, theReleaseDone);
                        }
                    }
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ParsedConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ImportConfig){}/* CQT */
            aPrototype.pCleanUpTest_ImportConfig = pCleanUpTest_ImportConfig;
























            var fResolveImport = function( theAlreadyResolved) {
                if( !this._v_ConfigurationPath) {
                    return true;
                }

                var aResolvedConfiguration = null;
                if( theAlreadyResolved) {
                    if ( theAlreadyResolved.byPath) {
                        aResolvedConfiguration = theAlreadyResolved.byPath[ this._v_ConfigurationPath];
                    }
                }

                if( !aResolvedConfiguration) {

                    var someJSONspecs = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( this._v_ConfigurationPath);

                    if( !someJSONspecs) {
                        return false;
                    }

                    var aJSONspec = someJSONspecs;
                    if( aJSONspec && !(typeof aJSONspec.length == "undefined")) {
                        if( !aJSONspec.length) {
                            return false;
                        }
                        aJSONspec = aJSONspec [ 0];
                    }



                    if( !this._v_OwnerConfiguration) {
                        return false;
                    }
                    if( !this._v_OwnerConfiguration._v_Parser) {
                        return false;
                    }
                    if( !this._v_OwnerConfiguration._v_Parser.SpecParserConfig_Constructor) {
                        return false;
                    }
                    var aSpecParser = new this._v_OwnerConfiguration._v_Parser.SpecParserConfig_Constructor( this._v_Identifier, aJSONspec, null, false);
                    if( !aSpecParser) {
                        return false;
                    }

                    var aParseResult = aSpecParser.fParseComplete();
                    if( !aParseResult) {
                        return false;
                    }

                    var aPopulated = aSpecParser._v_ConfPopulated;
                    if( !aPopulated) {
                        return false;
                    }
                    aResolvedConfiguration = aPopulated;

                    if( theAlreadyResolved) {
                        if ( theAlreadyResolved.byPath) {
                            theAlreadyResolved.byPath[ this._v_ConfigurationPath] = aResolvedConfiguration;
                        }

                        if ( theAlreadyResolved.byName) {
                            theAlreadyResolved.byName[ this._v_Title] = aResolvedConfiguration;
                        }
                    }
                }

                if( aResolvedConfiguration) {
                    this._v_ImportedConfiguration = aResolvedConfiguration;
                    this._v_Resolved = true;

                    aResolvedConfiguration.pAddImportedIntoConfigurations( this._v_OwnerConfiguration);
                    return true;
                }

                return false;
            };
            if( fResolveImport){}/* CQT */
            aPrototype.fResolveImport = fResolveImport;











            var fToStoreJSON = function( theCommonObjects, theAlready) {

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fToStoreJSON_identifying();
                    }
                }

                var aParser = this._v_Parser;
                if( !aParser) {
                    aParser = new theM_specparser_import.SpecParserImport_Constructor( this._v_Identifier, null, null, true);
                }

                var aToStoreJSON = aParser.fToStoreJSON( this, theCommonObjects, theAlready);
                if( aToStoreJSON){}/* CQT */
                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;








            return aPrototype;

        })();




        var ImportConfig_Constructor = function( theTitle, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ConfigurationPath = null;
            this._v_ImportMode = null;

            this._v_Resolved = null;
            this._v_ResolveError= null;

            this._v_ImportedConfiguration = null;

            this._pInit_ImportConfig( theTitle, theIdentifier);
        };
        ImportConfig_Constructor.prototype = aImportConfig_Prototype;





        var ImportConfig_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = aImportConfig_Prototype;
            this._v_Type = null;

            this._v_ConfigurationPath = null;
            this._v_ImportMode = null;

            this._v_Resolved = null;
            this._v_ResolveError= null;

            this._v_ImportedConfiguration = null;
        };
        ImportConfig_SuperPrototypeConstructor.prototype = aImportConfig_Prototype;



        var aModule = {
            "ImportConfig_Prototype": aImportConfig_Prototype,
            "ImportConfig_Constructor": ImportConfig_Constructor,
            "ImportConfig_SuperPrototypeConstructor": ImportConfig_SuperPrototypeConstructor
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

            var aM_parsedconfig      = require('./parsedconfig');
            var aM_specparser_import = require('./specparser/specparser-import');
            var aM_specloader        = require('../resloader/specloader');

            return aMod_definer( aM_parsedconfig, aM_specparser_import, aM_specloader);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./parsedconfig",
            "./specparser/specparser-import",
            "./specparser/specparser-config",
            "../resloader/specloader"
        ], function ( theM_parsedconfig, theM_specparser_import, theM_specloader) {
            return aMod_definer( theM_parsedconfig, theM_specparser_import, theM_specloader);
        });
    }


}());