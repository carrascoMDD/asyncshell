'use strict';

/*
 required.js
 Created 201409051530
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

    var aMod_definer =function( theM_parsedconfig,
                                theM_configparms,
                                theM_defaults,
                                theM_specparser_required) {

        var ModuleName     = "required";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.JSONNAME_PARMNAMES             = "parmNames";

            theToInit.JSONNAME_SUPPLIERS             = "suppliers";


            theToInit.JSONNAMES_REQUIRED = [
                theToInit.JSONNAME_PARMNAMES,
                theToInit.JSONNAME_SUPPLIERS
            ];



            theToInit.REQUIREDJSONNAMES = [
                theToInit.JSONNAME_PARMNAMES
            ];



            theToInit.POPULABLEFIELDS_REQUIRED = [
                "_v_ParmNames"
            ];

            theToInit.POPULABLEFIELDS = theM_parsedconfig.POPULABLEFIELDS.concat( theToInit.POPULABLEFIELDS_REQUIRED);


            theToInit.RELATIONFIELDS = [
                "_v_Suppliers"
            ];



            
            theToInit.JSONNAMESBYFIELDNAME_REQUIRED = {
                "_v_ParmNames": theToInit.JSONNAME_PARMNAMES
            };

            for( var aFieldName in theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG) {
                if( theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG.hasOwnProperty( aFieldName)) {
                    theToInit.JSONNAMESBYFIELDNAME_REQUIRED[ aFieldName] = theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG[ aFieldName];
                }
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
        pgInitWithModuleConstants( ModuleConstants);












        var aRequired_Prototype = (function() {


            var aPrototype = new theM_parsedconfig.ParsedConfig_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;


            aPrototype._v_Type = "Required";

            aPrototype._v_ParmNames = null;

            aPrototype._v_Suppliers = null;






            var _pInit = function( theTitle, theIdentifier) {

                this._pInit_Required( theTitle, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_Required = function( theTitle, theIdentifier) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ParsedConfig.apply( this, [ theTitle, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ParmNames = null;

                this._v_Suppliers = [ ];
            };
            if( _pInit_Required){}/* CQT */
            aPrototype._pInit_Required = _pInit_Required;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Required( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;








            var _pRelease_Required = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_ParmNames = undefined;

                if( this._v_Suppliers) {
                    var aNumSuppliers = this._v_Suppliers.length;
                    if( aNumSuppliers) {
                        for( var aSuppliersParserIdx=0; aSuppliersParserIdx < aNumSuppliers; aSuppliersParserIdx++) {
                            var aSuppliersParser = this._v_Suppliers[ aSuppliersParserIdx];
                            if( aSuppliersParser) {
                                if( typeof aSuppliersParser._pRelease == "function") {
                                    aSuppliersParser._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_Suppliers   = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ParsedConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Required){}/* CQT */
            aPrototype._pRelease_Required = _pRelease_Required;








            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

                if( this._v_Suppliers) {
                    var aNumSuppliers = this._v_Suppliers.length;
                    if( aNumSuppliers) {
                        for( var aSuppliersIdx=0; aSuppliersIdx < aNumSuppliers; aSuppliersIdx++) {
                            var aSuppliers = this._v_Suppliers[ aSuppliersIdx];
                            if( aSuppliers) {
                                if( theReleaseChildren.indexOf( aSuppliers) < 0) {
                                    theReleaseChildren.push( aSuppliers);
                                    if( typeof aSuppliers._pReleaseChildrenInto == "function") {
                                        aSuppliers._pReleaseChildrenInto( theReleaseChildren);
                                    }
                                }
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

                this.pCleanUpTest_Required( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Required= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_ParmNames = undefined;

                }


                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_CONFIGS)) {

                    if( this._v_Suppliers) {
                        var aNumSuppliers = this._v_Suppliers.length;
                        if( aNumSuppliers) {
                            for( var aSuppliersParserIdx=0; aSuppliersParserIdx < aNumSuppliers; aSuppliersParserIdx++) {
                                var aSuppliersParser = this._v_Suppliers[ aSuppliersParserIdx];
                                if( aSuppliersParser) {
                                    if( typeof aSuppliersParser.pCleanUpTest == "function") {
                                        aSuppliersParser.pCleanUpTest(  theWhatToClean, theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ParsedConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Required){}/* CQT */
            aPrototype.pCleanUpTest_Required = pCleanUpTest_Required;















            var pAddSupplier = function( theSupplier) {
                if( !theSupplier) {
                    return;
                }

                this._v_Suppliers.push( theSupplier);

                theSupplier._v_OwnerRequired = this;
            };
            if( pAddSupplier){}/* CQT */
            aPrototype.pAddSupplier = pAddSupplier;














            var fResolveImports = function( theAlreadyResolved) {

                var anAlreadyResolved = theAlreadyResolved;
                if( !anAlreadyResolved) {
                    anAlreadyResolved = {
                        "byName": { },
                        "byPath": { }
                    };
                }

                var aResolveImports_suppliers = this.fResolveImports_suppliers( anAlreadyResolved);
                if( aResolveImports_suppliers){}/* CQT */

                return aResolveImports_suppliers;
            };
            if( fResolveImports){}/* CQT */
            aPrototype.fResolveImports = fResolveImports;






            var fResolveImports_suppliers = function( theAlreadyResolved) {
                if( !this._v_Suppliers) {
                    return true;
                }

                var aNumSuppliers = this._v_Suppliers.length;
                for( var aSupplierIdx=0; aSupplierIdx < aNumSuppliers; aSupplierIdx++) {
                    var aSupplier = this._v_Suppliers[ aSupplierIdx];
                    if( !aSupplier.fResolveImports( theAlreadyResolved)) {
                        return false;
                    }
                }

                return true;
            };
            if( fResolveImports_suppliers){}/* CQT */
            aPrototype.fResolveImports_suppliers = fResolveImports_suppliers;














            var fResolveRequired = function() {

                return true;
            };
            if( fResolveRequired){}/* CQT */
            aPrototype.fResolveRequired = fResolveRequired;










            var fFieldResolutionsByName = function( theFieldNames) {

                var someFieldResolutionsByName = this._v_OwnerConfiguration.fFieldResolutionsByName( theFieldNames);
                if( someFieldResolutionsByName){}/* CQT */

                return someFieldResolutionsByName;
            };
            if( fFieldResolutionsByName){}/* CQT */
            aPrototype.fFieldResolutionsByName = fFieldResolutionsByName;











            var fParmResolutionsByName = function( theParmNames) {

                var someParmResolutionsByName = this._v_OwnerConfiguration.fParmResolutionsByName( theParmNames);
                if( someParmResolutionsByName){}/* CQT */

                return someParmResolutionsByName;
            };
            if( fParmResolutionsByName){}/* CQT */
            aPrototype.fParmResolutionsByName = fParmResolutionsByName;










            var fExportTargetConfiguration = function( theExportToParent) {

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportTargetConfiguration Required Begin " , JSON.stringify( this.fToStoreJSON_identifying()));
                }

                if( !this._v_OwnerConfiguration) {
                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportTargetConfiguration ", " !this._v_OwnerConfiguration" , JSON.stringify( this.fToStoreJSON_identifying()));
                    }
                    return null;
                }

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportTargetConfiguration Required ", " delegate into this._v_OwnerConfiguration" , JSON.stringify( this.fToStoreJSON_identifying()));
                }
                var anExportTargetConfiguration = this._v_OwnerConfiguration.fExportTargetConfiguration( theExportToParent);

                if( anExportTargetConfiguration){}/* CQT */
                return anExportTargetConfiguration;
            };
            if( fExportTargetConfiguration){}/* CQT */
            aPrototype.fExportTargetConfiguration = fExportTargetConfiguration;










            var fExportToGlobalsTargetConfiguration = function( theExportToParent) {

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportToGlobalsTargetConfiguration Required Begin " , JSON.stringify( this.fToStoreJSON_identifying()));
                }

                if( !this._v_OwnerConfiguration) {
                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportToGlobalsTargetConfiguration ", " !this._v_OwnerConfiguration" , JSON.stringify( this.fToStoreJSON_identifying()));
                    }
                    return null;
                }

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportToGlobalsTargetConfiguration Required ", " delegate into this._v_OwnerConfiguration" , JSON.stringify( this.fToStoreJSON_identifying()));
                }
                var anExportTargetConfiguration = this._v_OwnerConfiguration.fExportToGlobalsTargetConfiguration( theExportToParent);

                if( anExportTargetConfiguration){}/* CQT */
                return anExportTargetConfiguration;
            };
            if( fExportToGlobalsTargetConfiguration){}/* CQT */
            aPrototype.fExportToGlobalsTargetConfiguration = fExportToGlobalsTargetConfiguration;








            var fExportToRootTargetConfiguration = function( theExportToParent) {

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportToRootTargetConfiguration Required Begin " , JSON.stringify( this.fToStoreJSON_identifying()));
                }

                if( !this._v_OwnerConfiguration) {
                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportToRootTargetConfiguration ", " !this._v_OwnerConfiguration" , JSON.stringify( this.fToStoreJSON_identifying()));
                    }
                    return null;
                }

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportToRootTargetConfiguration Required ", " delegate into this._v_OwnerConfiguration" , JSON.stringify( this.fToStoreJSON_identifying()));
                }
                var anExportTargetConfiguration = this._v_OwnerConfiguration.fExportToRootTargetConfiguration( theExportToParent);

                if( anExportTargetConfiguration){}/* CQT */
                return anExportTargetConfiguration;
            };
            if( fExportToRootTargetConfiguration){}/* CQT */
            aPrototype.fExportToRootTargetConfiguration = fExportToRootTargetConfiguration;








            var fToStoreJSON = function( theCommonObjects, theAlready) {

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fToStoreJSON_identifying();
                    }
                }

                var aParser = this._v_Parser;
                if( !aParser) {
                    aParser = new theM_specparser_required.SpecParserRequired_Constructor( this._v_Identifier, null, null, true);
                }

                var aToStoreJSON = aParser.fToStoreJSON( this, theCommonObjects, theAlready);
                if( aToStoreJSON){}/* CQT */
                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;







            return aPrototype;

        })();






        var Required_Constructor = function( theTitle, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ParmNames = null;

            this._v_Suppliers = null;

            this._pInit_Required( theTitle, theIdentifier);
        };
        Required_Constructor.prototype = aRequired_Prototype;





        var Required_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = aRequired_Prototype;
            this._v_Type = null;

            this._v_ParmNames = null;

            this._v_Suppliers = null;
        };
        Required_SuperPrototypeConstructor.prototype = aRequired_Prototype;



        var aModule = {
            "Required_Prototype": aRequired_Prototype,
            "Required_Constructor": Required_Constructor,
            "Required_SuperPrototypeConstructor": Required_SuperPrototypeConstructor
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

            var aM_parsedconfig        = require('./parsedconfig');
            var aM_configparms         = require('./configparms');
            var aM_defaults            = require('./defaults');
            var aM_specparser_required = require('./specparser/specparser-required');


            return aMod_definer(
                aM_parsedconfig,
                aM_configparms,
                aM_defaults,
                aM_specparser_required
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./parsedconfig",
            "./configparms",
            "./defaults",
            "./specparser/specparser-required"
        ], function (
            theM_parsedconfig,
            theM_configparms,
            theM_defaults,
            theM_specparser_required
            ) {
            return aMod_definer(
                theM_parsedconfig,
                theM_configparms,
                theM_defaults,
                theM_specparser_required
            );
        });
    }


}());