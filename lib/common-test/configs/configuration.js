'use strict';

/*
 configuration.js
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

    var aMod_definer =function( theM_parsedconfig,
                                theM_configparms,
                                theM_defaults,
                                theM_specparser_config,
                                theM_queryfields,
                                theM_queryparms,
                                theM_resolutionfield,
                                theM_resolutionparm,
                                theM_recorded_test,
                                theM_async_test,
                                theM_globalconfigholder,
                                theM_sentinels) {

        var ModuleName     = "configuration";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.EXPECTSUCCESS_VALUE_SUCCEEDALWAYS = "SUCCEEDALWAYS";



            theToInit.JSONNAME_RUNNABLE              = "runnable";
            theToInit.JSONNAME_INHERITMODE           = "inherit";
            theToInit.JSONNAME_SCHEDULESUBS          = "scheduleSubs";
            theToInit.JSONNAME_EXPECTSUCCESS         = "expectSuccess";
            theToInit.JSONNAME_EXPECTEDEVENT         = "expectedEvent";
            theToInit.JSONNAME_CONSTRUCTORMODULENAME = "module";
            theToInit.JSONNAME_CONSTRUCTORNAME       = "constructorName";
            theToInit.JSONNAME_METHODNAME            = "methodName";
            theToInit.JSONNAME_FORCEERROR            = "forceError";
            theToInit.JSONNAME_FORCEERRORDETAIL      = "forceErrorDetail";
            theToInit.JSONNAME_FORCEERRORKIND        = "forceErrorKind";
            theToInit.JSONNAME_FORCEERRORWHEN        = "forceErrorWhen";

            theToInit.JSONNAME_PARMS                 = "parms";
            theToInit.JSONNAME_DEFAULTS              = "defaults";
            theToInit.JSONNAME_IMPORTS               = "imports";
            theToInit.JSONNAME_REQUIRED              = "required";
            theToInit.JSONNAME_EXPORTS               = "exports";
            theToInit.JSONNAME_SUBS                  = "subs";
            theToInit.JSONNAME_CHECKS                = "checks";


            theToInit.JSONNAMES_CONFIGURATION = [
                theToInit.JSONNAME_RUNNABLE,
                theToInit.JSONNAME_INHERITMODE,
                theToInit.JSONNAME_SCHEDULESUBS,
                theToInit.JSONNAME_EXPECTSUCCESS,
                theToInit.JSONNAME_EXPECTEDEVENT,
                theToInit.JSONNAME_CONSTRUCTORMODULENAME,
                theToInit.JSONNAME_CONSTRUCTORNAME,
                theToInit.JSONNAME_METHODNAME,
                theToInit.JSONNAME_FORCEERROR,
                theToInit.JSONNAME_FORCEERRORDETAIL,
                theToInit.JSONNAME_FORCEERRORKIND,
                theToInit.JSONNAME_FORCEERRORWHEN,
                theToInit.JSONNAME_PARMS,
                theToInit.JSONNAME_DEFAULTS,
                theToInit.JSONNAME_IMPORTS,
                theToInit.JSONNAME_REQUIRED,
                theToInit.JSONNAME_EXPORTS,
                theToInit.JSONNAME_SUBS,
                theToInit.JSONNAME_CHECKS
            ];


            theToInit.EXPECTEDEVENTS  = theM_recorded_test.EVENTKINDS.slice();
            theToInit.INHERITMODES    = theM_parsedconfig.MERGEMODEALL.slice();
            theToInit.FORCEERRORWHENS = theM_recorded_test.EVENTKINDS.slice();
            theToInit.FORCEERRORKINDS = theM_async_test.FORCEERRORKINDS.slice();



            theToInit.SCHEDULEMODE_SERIES       = "SERIES";
            theToInit.SCHEDULEMODE_IFTHEN       = "IFTHEN";
            theToInit.SCHEDULEMODE_IFTHENELSE   = "IFTHENELSE";

            theToInit.SCHEDULEMODEALL = [
                theToInit.SCHEDULEMODE_SERIES /*,
                 theToInit.SCHEDULEMODE_IFTHEN,
                 theToInit.SCHEDULEMODE_IFTHENELSE */
            ];




            theToInit.REQUIREDJSONNAMES = [

            ];



            theToInit.SUBPATH_THIS = ".";


            theToInit.POPULABLEFIELDS_CONFIGURATION = [
                "_v_Runnable",
                "_v_InheritMode",
                "_v_ScheduleSubs",
                "_v_ExpectSuccess",
                "_v_ExpectedEvent",
                "_v_ConstructorModuleName",
                "_v_ConstructorName",
                "_v_MethodName",
                "_v_ForceError",
                "_v_ForceErrorDetail",
                "_v_ForceErrorKind",
                "_v_ForceErrorWhen"
            ];

            theToInit.POPULABLEFIELDS = theM_parsedconfig.POPULABLEFIELDS.concat( theToInit.POPULABLEFIELDS_CONFIGURATION);


            theToInit.RELATIONFIELDS = [
                "_v_Imports",
                "_v_Requireds",
                "_v_Exports",
                "_v_Subs",
                "_v_Checks"
            ];






            theToInit.JSONNAMESBYFIELDNAME_CONFIGURATION = {
                "_v_Runnable":              theToInit.JSONNAME_RUNNABLE,
                "_v_InheritMode":           theToInit.JSONNAME_INHERITMODE,
                "_v_ScheduleSubs":          theToInit.JSONNAME_SCHEDULESUBS,
                "_v_ExpectSuccess":         theToInit.JSONNAME_EXPECTSUCCESS,
                "_v_ExpectedEvent":         theToInit.JSONNAME_EXPECTEDEVENT,
                "_v_ConstructorModuleName": theToInit.JSONNAME_CONSTRUCTORMODULENAME,
                "_v_ConstructorName":       theToInit.JSONNAME_CONSTRUCTORNAME,
                "_v_MethodName":            theToInit.JSONNAME_METHODNAME,
                "_v_ForceError":            theToInit.JSONNAME_FORCEERROR,
                "_v_ForceErrorDetail":      theToInit.JSONNAME_FORCEERRORDETAIL,
                "_v_ForceErrorKind":        theToInit.JSONNAME_FORCEERRORKIND,
                "_v_ForceErrorWhen":        theToInit.JSONNAME_FORCEERRORWHEN
            };

            for( var aFieldName in theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG) {
                if( theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG.hasOwnProperty( aFieldName)) {
                    theToInit.JSONNAMESBYFIELDNAME_CONFIGURATION[ aFieldName] = theM_parsedconfig.JSONNAMESBYFIELDNAME_PARSEDCONFIG[ aFieldName];
                }
            }

            /*
             theToInit.QUERY_FIELDS_SOME = [
             "_v_Runnable",
             "_v_InheritMode",
             "_v_ScheduleSubs"
             ];

             theToInit.QUERY_FIELDS_EXPECTATION = [
             "_v_ExpectSuccess",
             "_v_ExpectedEvent",
             "_v_ExpectedException"
             ];

             theToInit.QUERY_FIELDS_TORUN = [
             "_v_ConstructorModuleName",
             "_v_ConstructorName",
             "_v_MethodName"
             ];

             theToInit.QUERY_FIELDS_FORCEEEROR = [
             "_v_ForceError",
             "_v_ForceErrorDetail",
             "_v_ForceErrorKind",
             "_v_ForceErrorWhen"
             ];

             theToInit.QUERY_FIELDS_ALL = [ ];
             Array.prototype.push.apply( theToInit.QUERY_FIELDS_ALL, theToInit.QUERY_FIELDS_SOME);
             Array.prototype.push.apply( theToInit.QUERY_FIELDS_ALL, theToInit.QUERY_FIELDS_EXPECTATION);
             Array.prototype.push.apply( theToInit.QUERY_FIELDS_ALL, theToInit.QUERY_FIELDS_TORUN);
             Array.prototype.push.apply( theToInit.QUERY_FIELDS_ALL, theToInit.QUERY_FIELDS_FORCEEEROR);


             theToInit.ALL_FIELDS = [ "_v_Title"];
             Array.prototype.push.apply( theToInit.ALL_FIELDS, theToInit.QUERY_FIELDS_ALL);
             */


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









        var aConfiguration_Prototype = (function() {


            var aPrototype = new theM_parsedconfig.ParsedConfig_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;


            aPrototype._v_Type = "Configuration";

            aPrototype._v_Runnable = null;

            aPrototype._v_InheritMode = null;

            aPrototype._v_ExpectSuccess = null;
            aPrototype._v_ExpectedEvent = null;

            aPrototype._v_ConstructorModuleName = null;
            aPrototype._v_ConstructorName       = null;
            aPrototype._v_MethodName            = null;

            aPrototype._v_ForceError       = null;
            aPrototype._v_ForceErrorDetail = null;
            aPrototype._v_ForceErrorKind  = null;
            aPrototype._v_ForceErrorWhen  = null;

            aPrototype._v_ScheduleSubs  = null;

            aPrototype._v_OwnerConfiguration = null;

            aPrototype._v_SubConfigurations =  null;

            aPrototype._v_Defaults       = null;
            aPrototype._v_ConfigParms    = null;
            aPrototype._v_Imports        = null;
            aPrototype._v_Requireds      = null;
            aPrototype._v_Exports        = null;
            aPrototype._v_Checks         = null;

            aPrototype._v_ExportedParms  = null;

            aPrototype._v_ParmResolutionsByName   =  null;
            aPrototype._v_FieldResolutionsByName  =  null;

            aPrototype._v_BuffersHeldFromCleanUpUntilConfigsRelease =  null;




            var _pInit = function( theTitle, theIdentifier) {

                this._pInit_Configuration( theTitle, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_Configuration = function( theTitle, theIdentifier) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ParsedConfig.apply( this, [ theTitle, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Runnable = null;

                this._v_InheritMode = null;

                this._v_ExpectSuccess = null;
                this._v_ExpectedEvent = null;

                this._v_ConstructorModuleName = null;
                this._v_ConstructorName = null;
                this._v_MethodName = null;

                this._v_ForceError = null;
                this._v_ForceErrorDetail = null;
                this._v_ForceErrorKind = null;
                this._v_ForceErrorWhen = null;

                this._v_ScheduleSubs  = null;

                this._v_OwnerConfiguration = null;

                this._v_SubConfigurations   = [ ];

                this._v_Defaults       = null;
                this._v_ConfigParms    = null;
                this._v_Imports        = [ ];
                this._v_Requireds      = [ ];
                this._v_Exports        = [ ];
                this._v_Checks         = [ ];

                this._v_ImportedIntoConfigurations = [ ];
                this._v_ExportedParms  = null;

                this._v_ParmResolutionsByName   =  { };
                this._v_FieldResolutionsByName  =  { };

                this._v_BuffersHeldFromCleanUpUntilConfigsRelease =  null;

                if( this._v_BuffersHeldFromCleanUpUntilConfigsRelease){}/* CQT */
            };
            if( _pInit_Configuration){}/* CQT */
            aPrototype._pInit_Configuration = _pInit_Configuration;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Configuration( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Configuration = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                 return;
                 }
                 this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */


                this._v_Runnable = null;

                this._v_InheritMode = null;

                this._v_ExpectSuccess = null;
                this._v_ExpectedEvent = null;

                this._v_ConstructorModuleName = null;
                this._v_ConstructorName = null;
                this._v_MethodName = null;

                this._v_ForceError = null;
                this._v_ForceErrorDetail = null;
                this._v_ForceErrorKind = null;
                this._v_ForceErrorWhen = null;

                this._v_ScheduleSubs  = null;

                this._v_OwnerConfiguration = null;




                if( this._v_SubConfigurations) {
                    var aNumSubConfigurations = this._v_SubConfigurations.length;
                    if( aNumSubConfigurations) {
                        for( var aSubConfigurationsIdx=0; aSubConfigurationsIdx < aNumSubConfigurations; aSubConfigurationsIdx++) {
                            var aSubConfigurations = this._v_SubConfigurations[ aSubConfigurationsIdx];
                            if( aSubConfigurations) {
                                if( typeof aSubConfigurations._pRelease == "function") {
                                    aSubConfigurations._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_SubConfigurations   = undefined;




                if( this._v_Defaults) {
                    if( typeof this._v_Defaults._pRelease == "function") {
                        this._v_Defaults._pRelease( theReleaseParms, theReleaseDone);
                    }
                }
                this._v_Defaults   = undefined;




                if( this._v_ConfigParms) {
                    if( typeof this._v_ConfigParms._pRelease == "function") {
                        this._v_ConfigParms._pRelease( theReleaseParms, theReleaseDone);
                    }
                }
                this._v_ConfigParms   = undefined;





                if( this._v_Imports) {
                    var aNumImports = this._v_Imports.length;
                    if( aNumImports) {
                        for( var aImportsIdx=0; aImportsIdx < aNumImports; aImportsIdx++) {
                            var aImports = this._v_Imports[ aImportsIdx];
                            if( aImports) {
                                if( typeof aImports._pRelease == "function") {
                                    aImports._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_Imports   = undefined;



                if( this._v_Requireds) {
                    var aNumRequireds = this._v_Requireds.length;
                    if( aNumRequireds) {
                        for( var aRequiredsIdx=0; aRequiredsIdx < aNumRequireds; aRequiredsIdx++) {
                            var aRequireds = this._v_Requireds[ aRequiredsIdx];
                            if( aRequireds) {
                                if( typeof aRequireds._pRelease == "function") {
                                    aRequireds._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_Requireds   = undefined;





                if( this._v_Exports) {
                    var aNumExports = this._v_Exports.length;
                    if( aNumExports) {
                        for( var aExportIdx=0; aExportIdx < aNumExports; aExportIdx++) {
                            var anExport = this._v_Exports[ aExportIdx];
                            if( anExport) {
                                if( typeof anExport._pRelease == "function") {
                                    anExport._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_Exports   = undefined;





                if( this._v_Checks) {
                    var aNumChecks = this._v_Checks.length;
                    if( aNumChecks) {
                        for( var aChecksIdx=0; aChecksIdx < aNumChecks; aChecksIdx++) {
                            var aChecks = this._v_Checks[ aChecksIdx];
                            if( aChecks) {
                                if( typeof aChecks._pRelease == "function") {
                                    aChecks._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_Checks   = undefined;




                this._v_ImportedIntoConfigurations = undefined;





                if( this._v_ExportedParms) {
                    if( typeof this._v_ExportedParms._pRelease == "function") {
                        this._v_ExportedParms._pRelease( theReleaseParms, theReleaseDone);
                    }
                }
                this._v_ExportedParms   = undefined;





                if( this._v_ParmResolutionsByName) {
                    var someParmResolutionsByNameKeys = Object.keys( this._v_ParmResolutionsByName);
                    if( someParmResolutionsByNameKeys) {
                        var aNumParmResolutionsByNameKeys = someParmResolutionsByNameKeys.length;
                        for( var aParmResolutionsByNameKeyIdx=0; aParmResolutionsByNameKeyIdx < aNumParmResolutionsByNameKeys; aParmResolutionsByNameKeyIdx++) {
                            var aParmResolutionsByNameKey = someParmResolutionsByNameKeys[ aParmResolutionsByNameKeyIdx];
                            if( aParmResolutionsByNameKey) {

                                var aParmResolutionsByName = this._v_ParmResolutionsByName[ aParmResolutionsByNameKey];
                                if( aParmResolutionsByName) {
                                    if( typeof aParmResolutionsByName._pRelease == "function") {
                                        aParmResolutionsByName._pRelease( theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }
                this._v_ParmResolutionsByName   =  undefined;




                if( this._v_FieldResolutionsByName) {
                    var someFieldResolutionsByNameKeys = Object.keys( this._v_FieldResolutionsByName);
                    if( someFieldResolutionsByNameKeys) {
                        var aNumFieldResolutionsByNameKeys = someFieldResolutionsByNameKeys.length;
                        for( var aFieldResolutionsByNameKeyIdx=0; aFieldResolutionsByNameKeyIdx < aNumFieldResolutionsByNameKeys; aFieldResolutionsByNameKeyIdx++) {
                            var aFieldResolutionsByNameKey = someFieldResolutionsByNameKeys[ aFieldResolutionsByNameKeyIdx];
                            if( aFieldResolutionsByNameKey) {

                                var aFieldResolutionsByName = this._v_FieldResolutionsByName[ aFieldResolutionsByNameKey];
                                if( aFieldResolutionsByName) {
                                    if( typeof aFieldResolutionsByName._pRelease == "function") {
                                        aFieldResolutionsByName._pRelease( theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }
                }
                this._v_FieldResolutionsByName  =  undefined;


                this._v_BuffersHeldFromCleanUpUntilConfigsRelease = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ParsedConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Configuration){}/* CQT */
            aPrototype._pRelease_Configuration = _pRelease_Configuration;















            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);


                if( this._v_SubConfigurations) {
                    var aNumSubConfigurations = this._v_SubConfigurations.length;
                    if( aNumSubConfigurations) {
                        for( var aSubConfigurationsIdx=0; aSubConfigurationsIdx < aNumSubConfigurations; aSubConfigurationsIdx++) {
                            var aSubConfigurations = this._v_SubConfigurations[ aSubConfigurationsIdx];
                            if( aSubConfigurations) {
                                if( theReleaseChildren.indexOf( aSubConfigurations) < 0) {
                                    theReleaseChildren.push( aSubConfigurations);
                                    if( typeof aSubConfigurations._pReleaseChildrenInto == "function") {
                                        aSubConfigurations._pReleaseChildrenInto( theReleaseChildren);
                                    }
                                }
                            }
                        }
                    }
                }



                if( this._v_Defaults) {
                    if( theReleaseChildren.indexOf( this._v_Defaults) < 0) {
                        theReleaseChildren.push( this._v_Defaults);
                        if( typeof this._v_Defaults._pReleaseChildrenInto == "function") {
                            this._v_Defaults._pReleaseChildrenInto( theReleaseChildren);
                        }
                    }
                }




                if( this._v_ConfigParms) {
                    if( theReleaseChildren.indexOf( this._v_ConfigParms) < 0) {
                        theReleaseChildren.push( this._v_ConfigParms);
                        if( typeof this._v_ConfigParms._pReleaseChildrenInto == "function") {
                            this._v_ConfigParms._pReleaseChildrenInto( theReleaseChildren);
                        }
                    }
                }





                if( this._v_Imports) {
                    var aNumImports = this._v_Imports.length;
                    if( aNumImports) {
                        for( var aImportsIdx=0; aImportsIdx < aNumImports; aImportsIdx++) {
                            var aImports = this._v_Imports[ aImportsIdx];
                            if( aImports) {
                                if( theReleaseChildren.indexOf( aImports) < 0) {
                                    theReleaseChildren.push( aImports);
                                    if( typeof aImports._pReleaseChildrenInto == "function") {
                                        aImports._pReleaseChildrenInto( theReleaseChildren);
                                    }
                                }
                            }
                        }
                    }
                }




                if( this._v_Requireds) {
                    var aNumRequireds = this._v_Requireds.length;
                    if( aNumRequireds) {
                        for( var aRequiredsIdx=0; aRequiredsIdx < aNumRequireds; aRequiredsIdx++) {
                            var aRequireds = this._v_Requireds[ aRequiredsIdx];
                            if( aRequireds) {
                                if( theReleaseChildren.indexOf( aRequireds) < 0) {
                                    theReleaseChildren.push( aRequireds);
                                    if( typeof aRequireds._pReleaseChildrenInto == "function") {
                                        aRequireds._pReleaseChildrenInto( theReleaseChildren);
                                    }
                                }
                            }
                        }
                    }
                }





                if( this._v_Exports) {
                    var aNumExports = this._v_Exports.length;
                    if( aNumExports) {
                        for( var aExportIdx=0; aExportIdx < aNumExports; aExportIdx++) {
                            var anExport = this._v_Exports[ aExportIdx];
                            if( anExport) {
                                if( theReleaseChildren.indexOf( anExport) < 0) {
                                    theReleaseChildren.push( anExport);
                                    if( typeof anExport._pReleaseChildrenInto == "function") {
                                        anExport._pReleaseChildrenInto( theReleaseChildren);
                                    }
                                }
                            }
                        }
                    }
                }





                if( this._v_Checks) {
                    var aNumChecks = this._v_Checks.length;
                    if( aNumChecks) {
                        for( var aChecksIdx=0; aChecksIdx < aNumChecks; aChecksIdx++) {
                            var aChecks = this._v_Checks[ aChecksIdx];
                            if( aChecks) {
                                if( theReleaseChildren.indexOf( aChecks) < 0) {
                                    theReleaseChildren.push( aChecks);
                                    if( typeof aChecks._pReleaseChildrenInto == "function") {
                                        aChecks._pReleaseChildrenInto( theReleaseChildren);
                                    }
                                }
                            }
                        }
                    }
                }




                if( this._v_ExportedParms) {
                    if( theReleaseChildren.indexOf( this._v_ExportedParms) < 0) {
                        theReleaseChildren.push( this._v_ExportedParms);
                        if( typeof this._v_ExportedParms._pReleaseChildrenInto == "function") {
                            this._v_ExportedParms._pReleaseChildrenInto( theReleaseChildren);
                        }
                    }
                }




                if( this._v_ParmResolutionsByName) {
                    var someParmResolutionsByNameKeys = Object.keys( this._v_ParmResolutionsByName);
                    if( someParmResolutionsByNameKeys) {
                        var aNumParmResolutionsByNameKeys = someParmResolutionsByNameKeys.length;
                        for( var aParmResolutionsByNameKeyIdx=0; aParmResolutionsByNameKeyIdx < aNumParmResolutionsByNameKeys; aParmResolutionsByNameKeyIdx++) {
                            var aParmResolutionsByNameKey = someParmResolutionsByNameKeys[ aParmResolutionsByNameKeyIdx];
                            if( aParmResolutionsByNameKey) {

                                var aParmResolutionsByName = this._v_ParmResolutionsByName[ aParmResolutionsByNameKey];
                                if( aParmResolutionsByName) {
                                    if( theReleaseChildren.indexOf( aParmResolutionsByName) < 0) {
                                        theReleaseChildren.push( aParmResolutionsByName);
                                        if( typeof aParmResolutionsByName._pReleaseChildrenInto == "function") {
                                            aParmResolutionsByName._pReleaseChildrenInto( theReleaseChildren);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }




                if( this._v_FieldResolutionsByName) {
                    var someFieldResolutionsByNameKeys = Object.keys( this._v_FieldResolutionsByName);
                    if( someFieldResolutionsByNameKeys) {
                        var aNumFieldResolutionsByNameKeys = someFieldResolutionsByNameKeys.length;
                        for( var aFieldResolutionsByNameKeyIdx=0; aFieldResolutionsByNameKeyIdx < aNumFieldResolutionsByNameKeys; aFieldResolutionsByNameKeyIdx++) {
                            var aFieldResolutionsByNameKey = someFieldResolutionsByNameKeys[ aFieldResolutionsByNameKeyIdx];
                            if( aFieldResolutionsByNameKey) {

                                var aFieldResolutionsByName = this._v_FieldResolutionsByName[ aFieldResolutionsByNameKey];
                                if( aFieldResolutionsByName) {
                                    if( theReleaseChildren.indexOf( aFieldResolutionsByName) < 0) {
                                        theReleaseChildren.push( aFieldResolutionsByName);
                                        if( typeof aFieldResolutionsByName._pReleaseChildrenInto == "function") {
                                            aFieldResolutionsByName._pReleaseChildrenInto( theReleaseChildren);
                                        }
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

                this.pCleanUpTest_Configuration( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Configuration= function( theWhatToClean, theReleaseParms, theReleaseDone) {


                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);

                    this.pUpdateCleanedUpWithWhatToClean( theWhatToClean);

                    return;
                }


                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_Runnable = undefined;

                    this._v_InheritMode = undefined;

                    this._v_ExpectSuccess = undefined;
                    this._v_ExpectedEvent = undefined;

                    this._v_ConstructorModuleName = undefined;
                    this._v_ConstructorName = undefined;
                    this._v_MethodName = undefined;

                    this._v_ForceError = undefined;
                    this._v_ForceErrorDetail = undefined;
                    this._v_ForceErrorKind = undefined;
                    this._v_ForceErrorWhen = undefined;

                    this._v_ScheduleSubs  = undefined;

                    this._v_OwnerConfiguration = undefined;
                }



                if( this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_CONFIGS)) {

                    if( this._v_SubConfigurations) {
                        var aNumSubConfigurations = this._v_SubConfigurations.length;
                        if( aNumSubConfigurations) {
                            for( var aSubConfigurationsIdx=0; aSubConfigurationsIdx < aNumSubConfigurations; aSubConfigurationsIdx++) {
                                var aSubConfigurations = this._v_SubConfigurations[ aSubConfigurationsIdx];
                                if( aSubConfigurations) {
                                    if( typeof aSubConfigurations.pCleanUpTest == "function") {
                                        aSubConfigurations.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }



                    if( this._v_Defaults) {
                        if( typeof this._v_Defaults.pCleanUpTest == "function") {
                            this._v_Defaults.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                        }
                    }



                    if( this._v_ConfigParms) {
                        if( typeof this._v_ConfigParms.pCleanUpTest == "function") {
                            this._v_ConfigParms.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                        }
                    }



                    if( this._v_Imports) {
                        var aNumImports = this._v_Imports.length;
                        if( aNumImports) {
                            for( var aImportsIdx=0; aImportsIdx < aNumImports; aImportsIdx++) {
                                var aImports = this._v_Imports[ aImportsIdx];
                                if( aImports) {
                                    if( typeof aImports.pCleanUpTest == "function") {
                                        aImports.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }



                    if( this._v_Requireds) {
                        var aNumRequireds = this._v_Requireds.length;
                        if( aNumRequireds) {
                            for( var aRequiredsIdx=0; aRequiredsIdx < aNumRequireds; aRequiredsIdx++) {
                                var aRequireds = this._v_Requireds[ aRequiredsIdx];
                                if( aRequireds) {
                                    if( typeof aRequireds.pCleanUpTest == "function") {
                                        aRequireds.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }



                    if( this._v_Exports) {
                        var aNumExports = this._v_Exports.length;
                        if( aNumExports) {
                            for( var aExportIdx=0; aExportIdx < aNumExports; aExportIdx++) {
                                var anExport = this._v_Exports[ aExportIdx];
                                if( anExport) {
                                    if( typeof anExport.pCleanUpTest == "function") {
                                        anExport.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }



                    if( this._v_Checks) {
                        var aNumChecks = this._v_Checks.length;
                        if( aNumChecks) {
                            for( var aChecksIdx=0; aChecksIdx < aNumChecks; aChecksIdx++) {
                                var aChecks = this._v_Checks[ aChecksIdx];
                                if( aChecks) {
                                    if( typeof aChecks.pCleanUpTest == "function") {
                                        aChecks.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                                    }
                                }
                            }
                        }
                    }



                    if( this._v_ExportedParms) {
                        if( typeof this._v_ExportedParms.pCleanUpTest == "function") {
                            this._v_ExportedParms.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                        }
                    }



                    if( this._v_ParmResolutionsByName) {
                        var someParmResolutionsByNameKeys = Object.keys( this._v_ParmResolutionsByName);
                        if( someParmResolutionsByNameKeys) {
                            var aNumParmResolutionsByNameKeys = someParmResolutionsByNameKeys.length;
                            for( var aParmResolutionsByNameKeyIdx=0; aParmResolutionsByNameKeyIdx < aNumParmResolutionsByNameKeys; aParmResolutionsByNameKeyIdx++) {
                                var aParmResolutionsByNameKey = someParmResolutionsByNameKeys[ aParmResolutionsByNameKeyIdx];
                                if( aParmResolutionsByNameKey) {

                                    var aParmResolutionsByName = this._v_ParmResolutionsByName[ aParmResolutionsByNameKey];
                                    if( aParmResolutionsByName) {
                                        if( typeof aParmResolutionsByName.pCleanUpTest == "function") {
                                            aParmResolutionsByName.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                                        }
                                    }
                                }
                            }
                        }
                    }



                    if( this._v_FieldResolutionsByName) {
                        var someFieldResolutionsByNameKeys = Object.keys( this._v_FieldResolutionsByName);
                        if( someFieldResolutionsByNameKeys) {
                            var aNumFieldResolutionsByNameKeys = someFieldResolutionsByNameKeys.length;
                            for( var aFieldResolutionsByNameKeyIdx=0; aFieldResolutionsByNameKeyIdx < aNumFieldResolutionsByNameKeys; aFieldResolutionsByNameKeyIdx++) {
                                var aFieldResolutionsByNameKey = someFieldResolutionsByNameKeys[ aFieldResolutionsByNameKeyIdx];
                                if( aFieldResolutionsByNameKey) {

                                    var aFieldResolutionsByName = this._v_FieldResolutionsByName[ aFieldResolutionsByNameKey];
                                    if( aFieldResolutionsByName) {
                                        if( typeof aFieldResolutionsByName.pCleanUpTest == "function") {
                                            aFieldResolutionsByName.pCleanUpTest( theWhatToClean,  theReleaseParms, theReleaseDone);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ParsedConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Configuration){}/* CQT */
            aPrototype.pCleanUpTest_Configuration = pCleanUpTest_Configuration;












            var pHoldBuffersFromCleanUpUntilConfigsRelease = function( theBuffers) {

                this._v_BuffersHeldFromCleanUpUntilConfigsRelease = theBuffers;
            };
            if( pHoldBuffersFromCleanUpUntilConfigsRelease){}/* CQT */
            aPrototype.pHoldBuffersFromCleanUpUntilConfigsRelease = pHoldBuffersFromCleanUpUntilConfigsRelease;

















            var pAddImportedIntoConfigurations = function( theConfiguration) {
                if( !theConfiguration) {
                    return;
                }

                this._v_ImportedIntoConfigurations.push( theConfiguration);
            };
            if( pAddImportedIntoConfigurations){}/* CQT */
            aPrototype.pAddImportedIntoConfigurations = pAddImportedIntoConfigurations;




            var pSetConfigParms = function( theConfigParms) {

                this._v_ConfigParms = theConfigParms;

                if( theConfigParms) {
                    theConfigParms._v_OwnerConfiguration = this;
                }
            };
            if( pSetConfigParms){}/* CQT */
            aPrototype.pSetConfigParms = pSetConfigParms;







            var fGetOrCreateConfigParms = function() {

                if( this._v_ConfigParms) {
                    return this._v_ConfigParms;
                }

                this._v_ConfigParms = new theM_configparms.ConfigParms_Constructor( "ConfigParmsFor-" + ( this._v_Title || ""), this._v_Identifier);

                return this._v_ConfigParms;
            };
            if( fGetOrCreateConfigParms){}/* CQT */
            aPrototype.fGetOrCreateConfigParms = fGetOrCreateConfigParms;







            var fGetOrCreateExportedParms = function() {

                if( this._v_ExportedParms) {
                    return this._v_ExportedParms;
                }

                this._v_ExportedParms = new theM_configparms.ConfigParms_Constructor( "ExportedParmsFor-" + ( this._v_Title || ""), this._v_Identifier);

                return this._v_ExportedParms;
            };
            if( fGetOrCreateExportedParms){}/* CQT */
            aPrototype.fGetOrCreateExportedParms = fGetOrCreateExportedParms;






            var pSetDefaults = function( theDefaults) {

                this._v_Defaults = theDefaults;

                if( theDefaults) {
                    theDefaults._v_OwnerConfiguration = this;
                }
            };
            if( pSetDefaults){}/* CQT */
            aPrototype.pSetDefaults = pSetDefaults;







            var fGetOrCreateDefaults = function() {

                if( this._v_Defaults) {
                    return this._v_Defaults;
                }

                this._v_Defaults = new theM_defaults.Defaults_Constructor( "DefaultsFor-" + ( this._v_Title || ""), this._v_Identifier);

                return this._v_Defaults;
            };
            if( fGetOrCreateDefaults){}/* CQT */
            aPrototype.fGetOrCreateDefaults = fGetOrCreateDefaults;







            var pAddImport = function( theImport) {
                if( !theImport) {
                    return;
                }

                this._v_Imports.push( theImport);

                theImport._v_OwnerConfiguration = this;
            };
            if( pAddImport){}/* CQT */
            aPrototype.pAddImport = pAddImport;




            var pAddRequired = function( theRequired) {
                if( !theRequired) {
                    return;
                }

                this._v_Requireds.push( theRequired);

                theRequired._v_OwnerConfiguration = this;
            };
            if( pAddRequired){}/* CQT */
            aPrototype.pAddRequired = pAddRequired;




            var pAddExport = function( theExport) {
                if( !theExport) {
                    return;
                }

                this._v_Exports.push( theExport);

                theExport._v_OwnerConfiguration = this;
            };
            if( pAddExport){}/* CQT */
            aPrototype.pAddExport = pAddExport;






            var pAddSubConfiguration = function( theConfiguration) {
                if( !theConfiguration) {
                    return;
                }

                this._v_SubConfigurations.push( theConfiguration);

                theConfiguration._v_OwnerConfiguration = this;
            };
            if( pAddSubConfiguration){}/* CQT */
            aPrototype.pAddSubConfiguration = pAddSubConfiguration;







            var pAddCheck = function( theCheck) {
                if( !theCheck) {
                    return;
                }

                this._v_Checks.push( theCheck);

                theCheck._v_OwnerConfiguration = this;
            };
            if( pAddCheck){}/* CQT */
            aPrototype.pAddCheck = pAddCheck;









            var fSubNamed = function( theSubName) {

                if( !theSubName) {
                    return null;
                }

                if( !this._v_SubConfigurations) {
                    return null;
                }

                var aNumSubConfigurations = this._v_SubConfigurations.length;
                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];
                    if( aSubConfiguration._v_Title == theSubName) {
                        return aSubConfiguration;
                    }
                }

                return null;
            };
            if( fSubNamed){}/* CQT */
            aPrototype.fSubNamed = fSubNamed;






            var fSubWithPath = function( theSubsPath) {

                if( !theSubsPath) {
                    return null;
                }

                if( !this._v_SubConfigurations) {
                    return null;
                }

                if( theSubsPath == this.SUBPATH_THIS) {
                    return this;
                }


                var someSubsSteps = theSubsPath;

                if( typeof someSubsSteps == "string") {
                    if( someSubsSteps.indexOf( theM_sentinels.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someSubsSteps = someSubsSteps.split( theM_sentinels.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someSubsSteps = [ someSubsSteps];
                    }
                }
                if( !someSubsSteps || !someSubsSteps.length) {
                    return null;
                }

                var aSubConfig = this.fSubNamed( someSubsSteps[ 0].trim());
                if( !aSubConfig) {
                    return null;
                }

                var aNumSubsSteps = someSubsSteps.length;
                if( aNumSubsSteps == 1) {
                    return aSubConfig;
                }

                var someRemainingSteps = someSubsSteps.slice( 1);
                var aSubSubConfig = aSubConfig.fSubWithPath( someRemainingSteps);
                if( aSubSubConfig){}/* CQT */

                return aSubSubConfig;
            };
            if( fSubWithPath){}/* CQT */
            aPrototype.fSubWithPath = fSubWithPath;














            var fResolveImports = function( theAlreadyResolved) {

                var anAlreadyResolved = theAlreadyResolved;
                if( !anAlreadyResolved) {
                    anAlreadyResolved = {
                        "byName": { },
                        "byPath": { }
                    };
                }

                if( !this.fResolveImports_own( anAlreadyResolved)) {
                    return false;
                }

                if( !this.fResolveImports_subs( anAlreadyResolved)) {
                    return false;
                }

                var aResolveImports_requireds = this.fResolveImports_requireds( anAlreadyResolved);
                if( aResolveImports_requireds){}/* CQT */

                return aResolveImports_requireds;
            };
            if( fResolveImports){}/* CQT */
            aPrototype.fResolveImports = fResolveImports;






            var fResolveImports_own = function( theAlreadyResolved) {
                if( !this._v_Imports) {
                    return true;
                }

                var aNumImports = this._v_Imports.length;
                for( var anImportIdx=0; anImportIdx < aNumImports; anImportIdx++) {
                    var anImport = this._v_Imports[ anImportIdx];
                    if( !anImport.fResolveImport( theAlreadyResolved)) {
                        return false;
                    }
                }

                return true;
            };
            if( fResolveImports_own){}/* CQT */
            aPrototype.fResolveImports_own = fResolveImports_own;






            var fResolveImports_subs = function( theAlreadyResolved) {
                if( !this._v_SubConfigurations) {
                    return true;
                }

                var aNumSubConfigurations = this._v_SubConfigurations.length;
                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                    if( !aSubConfiguration.fResolveImports( theAlreadyResolved)) {
                        return false;
                    }
                }

                return true;
            };
            if( fResolveImports_subs){}/* CQT */
            aPrototype.fResolveImports_subs = fResolveImports_subs;









            var fResolveImports_requireds = function( theAlreadyResolved) {
                if( !this._v_Requireds) {
                    return true;
                }

                var aNumRequireds = this._v_Requireds.length;
                for( var aRequiredIdx=0; aRequiredIdx < aNumRequireds; aRequiredIdx++) {
                    var aRequired = this._v_Requireds[ aRequiredIdx];

                    if( !aRequired.fResolveImports( theAlreadyResolved)) {
                        return false;
                    }
                }

                return true;
            };
            if( fResolveImports_requireds){}/* CQT */
            aPrototype.fResolveImports_requireds = fResolveImports_requireds;





            var fResolveRequireds = function( theAlreadyResolved) {

                var anAlreadyResolved = theAlreadyResolved;
                if( !anAlreadyResolved) {
                    anAlreadyResolved = {
                        "byName": { },
                        "byPath": { }
                    };
                }

                if( !this.fResolveRequireds_own( anAlreadyResolved)) {
                    return false;
                }

                var aResolveRequireds_subs = this.fResolveRequireds_subs( anAlreadyResolved);
                if( aResolveRequireds_subs){}/* CQT */

                return aResolveRequireds_subs;
            };
            if( fResolveRequireds){}/* CQT */
            aPrototype.fResolveRequireds = fResolveRequireds;






            var fResolveRequireds_own = function( theAlreadyResolved) {
                if( !this._v_Requireds) {
                    return true;
                }

                var aNumRequireds = this._v_Requireds.length;
                for( var aRequiredIdx=0; aRequiredIdx < aNumRequireds; aRequiredIdx++) {
                    var aRequired = this._v_Requireds[ aRequiredIdx];
                    if( !aRequired.fResolveRequired( theAlreadyResolved)) {
                        return false;
                    }
                }

                return true;
            };
            if( fResolveRequireds_own){}/* CQT */
            aPrototype.fResolveRequireds_own = fResolveRequireds_own;






            var fResolveRequireds_subs = function( theAlreadyResolved) {
                if( !this._v_SubConfigurations) {
                    return true;
                }

                var aNumSubConfigurations = this._v_SubConfigurations.length;
                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                    if( !aSubConfiguration.fResolveRequireds( theAlreadyResolved)) {
                        return false;
                    }
                }

                return true;
            };
            if( fResolveRequireds_subs){}/* CQT */
            aPrototype.fResolveRequireds_subs = fResolveRequireds_subs;








            var fHasRequiredsOwnedOrInImports = function( theAlreadyVisited) {

                if( this._v_Requireds && this._v_Requireds.length) {
                    return true;
                }


                var anAlreadyVisited = theAlreadyVisited;
                if( !anAlreadyVisited) {
                    anAlreadyVisited = [ ];
                }

                if( anAlreadyVisited.indexOf( this) >= 0) {
                    return false;
                }
                anAlreadyVisited.push( this);


                if( !this._v_Imports || this._v_Imports.length) {
                    return false;
                }


                var aNumImports = this._v_Imports.length;
                for( var anImportIdx=0; anImportIdx < aNumImports; anImportIdx++) {
                    var anImport = this._v_Imports[ anImportIdx];

                    var anImportedConfiguration = anImport._v_ImportedConfiguration;
                    if( anImportedConfiguration) {
                        if ( anImportedConfiguration.fHasRequiredsOwnedOrInImports( anAlreadyVisited)) {
                            return true;
                        }
                    }
                }

                return false;
            };
            if( fHasRequiredsOwnedOrInImports){}/* CQT */
            aPrototype.fHasRequiredsOwnedOrInImports = fHasRequiredsOwnedOrInImports;








            var pResolveExportsNow = function( theNow, theTest) {

                this.pResolveExportsNow_own( theNow, theTest);


                this.pResolveExportsNow_nonrunnablesubs( theNow, theTest);

            };
            if( pResolveExportsNow){}/* CQT */
            aPrototype.pResolveExportsNow = pResolveExportsNow;






            var pResolveExportsNow_own = function( theNow, theTest) {
                if( !this._v_Exports) {
                    return;
                }

                var aNumExports = this._v_Exports.length;
                for( var anExportIdx=0; anExportIdx < aNumExports; anExportIdx++) {

                    var anExport = this._v_Exports[ anExportIdx];

                    anExport.pResolveExportNow( theNow, theTest);
                }
            };
            if( pResolveExportsNow_own){}/* CQT */
            aPrototype.pResolveExportsNow_own = pResolveExportsNow_own;






            var pResolveExportsNow_nonrunnablesubs = function( theNow, theTest) {
                if( !this._v_SubConfigurations) {
                    return;
                }


                var aNumSubConfigurations = this._v_SubConfigurations.length;
                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                    if( !aSubConfiguration._v_Runnable) {
                        aSubConfiguration.pResolveExportsNow( theNow, theTest);

                    }
                }
            };
            if( pResolveExportsNow_nonrunnablesubs){}/* CQT */
            aPrototype.pResolveExportsNow_nonrunnablesubs = pResolveExportsNow_nonrunnablesubs;









            var fHasAnyExportFailedToResolveNow = function( theNow) {

                if( this.fHasAnyExportFailedToResolveNow_own( theNow)) {
                    return true;
                }

                return this.fHasAnyExportFailedToResolveNow_nonrunnablesubs( theNow);
            };
            if( fHasAnyExportFailedToResolveNow){}/* CQT */
            aPrototype.fHasAnyExportFailedToResolveNow = fHasAnyExportFailedToResolveNow;






            var fHasAnyExportFailedToResolveNow_own = function( theNow) {
                if( !this._v_Exports) {
                    return false;
                }

                /* if( true) { ACV OJO do not resolve exports from subs in the context of parent Test
                 return false;
                 }
                 */
                var aNumExports = this._v_Exports.length;
                for( var anExportIdx=0; anExportIdx < aNumExports; anExportIdx++) {

                    var anExport = this._v_Exports[ anExportIdx];

                    if( anExport.fHasFailedToResolveExportNow( theNow)) {
                        return true;
                    }
                }

                return false;
            };
            if( fHasAnyExportFailedToResolveNow_own){}/* CQT */
            aPrototype.fHasAnyExportFailedToResolveNow_own = fHasAnyExportFailedToResolveNow_own;






            var fHasAnyExportFailedToResolveNow_nonrunnablesubs = function( theNow) {
                if( !this._v_SubConfigurations) {
                    return true;
                }

                var aNumSubConfigurations = this._v_SubConfigurations.length;
                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                    if( !aSubConfiguration._v_Runnable) {

                        if( aSubConfiguration.fHasAnyExportFailedToResolveNow( theNow)) {
                            return true;
                        }
                    }
                }

                return false;
            };
            if( fHasAnyExportFailedToResolveNow_nonrunnablesubs){}/* CQT */
            aPrototype.fHasAnyExportFailedToResolveNow_nonrunnablesubs = fHasAnyExportFailedToResolveNow_nonrunnablesubs;










            var fFirstExportFailedToResolveNow = function( theNow) {

                var anExportFailedToResolve = this.fFirstExportFailedToResolveNow_own( theNow);
                if( anExportFailedToResolve) {
                    return anExportFailedToResolve;
                }

                return null;

                /*
                 return this.fFirstExportFailedToResolveNow_subs( theNow);
                 */
            };
            if( fFirstExportFailedToResolveNow){}/* CQT */
            aPrototype.fFirstExportFailedToResolveNow = fFirstExportFailedToResolveNow;






            var fFirstExportFailedToResolveNow_own = function( theNow) {
                if( !this._v_Exports) {
                    return false;
                }

                var aNumExports = this._v_Exports.length;
                for( var anExportIdx=0; anExportIdx < aNumExports; anExportIdx++) {

                    var anExport = this._v_Exports[ anExportIdx];

                    if( anExport.fHasFailedToResolveExportNow( theNow)) {
                        return anExport;
                    }
                }

                return null;
            };
            if( fFirstExportFailedToResolveNow_own){}/* CQT */
            aPrototype.fFirstExportFailedToResolveNow_own = fFirstExportFailedToResolveNow_own;







            var fFirstExportFailedToResolveNow_subs = function( theNow) {
                if( !this._v_SubConfigurations) {
                    return true;
                }


                var aNumSubConfigurations = this._v_SubConfigurations.length;
                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                    var anExportFailedToResolve = aSubConfiguration.fFirstExportFailedToResolveNow( theNow);
                    if( anExportFailedToResolve) {
                        return anExportFailedToResolve;
                    }

                }

                return null;
            };
            if( fFirstExportFailedToResolveNow_subs){}/* CQT */
            aPrototype.fFirstExportFailedToResolveNow_subs = fFirstExportFailedToResolveNow_subs;











            var pMatchChecksNow = function( theNow, theTest) {

                this.pMatchChecksNow_own( theNow, theTest);

                this.pMatchChecksNow_subs( theNow, theTest);
            };
            if( pMatchChecksNow){}/* CQT */
            aPrototype.pMatchChecksNow = pMatchChecksNow;






            var pMatchChecksNow_own = function( theNow, theTest) {
                if( !this._v_Checks) {
                    return;
                }

                var aNumChecks = this._v_Checks.length;
                for( var anCheckIdx=0; anCheckIdx < aNumChecks; anCheckIdx++) {

                    var anCheck = this._v_Checks[ anCheckIdx];

                    anCheck.pMatchCheckNow( theNow, theTest);
                }
            };
            if( pMatchChecksNow_own){}/* CQT */
            aPrototype.pMatchChecksNow_own = pMatchChecksNow_own;






            var pMatchChecksNow_subs = function( theNow, theTest) {
                if( !theTest) {
                    return;
                }

                if( !theNow) {
                    return;
                }

                if( !( theNow == "PARSE")) {
                    return;
                }

                if( !this._v_SubConfigurations) {
                    return;
                }

                var aNumSubConfigurations = this._v_SubConfigurations.length;
                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                    aSubConfiguration.pMatchChecksNow( theNow, theTest);
                }
            };
            if( pMatchChecksNow_subs){}/* CQT */
            aPrototype.pMatchChecksNow_subs = pMatchChecksNow_subs;












            var fFirstCheckFailedToMatchNow = function( theNow) {

                var aFirstCheckFailed = this.fFirstCheckFailedToMatchNow_own( theNow);
                if( aFirstCheckFailed) {
                    return aFirstCheckFailed;
                }

                return this.fFirstCheckFailedToMatchNow_subs( theNow);
            };
            if( fFirstCheckFailedToMatchNow){}/* CQT */
            aPrototype.fFirstCheckFailedToMatchNow = fFirstCheckFailedToMatchNow;






            var fFirstCheckFailedToMatchNow_own = function( theNow) {
                if( !this._v_Checks) {
                    return null;
                }

                var aNumChecks = this._v_Checks.length;
                for( var anCheckIdx=0; anCheckIdx < aNumChecks; anCheckIdx++) {

                    var anCheck = this._v_Checks[ anCheckIdx];

                    if( anCheck.fHasFailedToMatchCheckNow( theNow)) {
                        return anCheck;
                    }
                }

                return null;
            };
            if( fFirstCheckFailedToMatchNow_own){}/* CQT */
            aPrototype.fFirstCheckFailedToMatchNow_own = fFirstCheckFailedToMatchNow_own;






            var fFirstCheckFailedToMatchNow_subs = function( theNow) {
                if( !this._v_SubConfigurations) {
                    return null;
                }

                var aNumSubConfigurations = this._v_SubConfigurations.length;
                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                    var aFirstCheckFailed = aSubConfiguration.fFirstCheckFailedToMatchNow( theNow);
                    if( aFirstCheckFailed) {
                        return aFirstCheckFailed;
                    }
                }

                return null;
            };
            if( fFirstCheckFailedToMatchNow_subs){}/* CQT */
            aPrototype.fFirstCheckFailedToMatchNow_subs = fFirstCheckFailedToMatchNow_subs;









            var fToStoreJSON = function( theCommonObjects, theAlready) {

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fToStoreJSON_identifying();
                    }
                }

                var aParser = this._v_Parser;
                if( !aParser) {
                    aParser = new theM_specparser_config.SpecParserConfig_Constructor( this._v_Identifier, null, null, true);
                }

                var aToStoreJSON = aParser.fToStoreJSON( this, theCommonObjects, theAlready);
                if( aToStoreJSON){}/* CQT */
                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;










            var fFirstRunnableAndThereAreMoreRunnables = function() {

                var aFirstAndThereAreMore = { "first": null, "thereAreMore": false};
                var anAlready = null;

                this.pFirstRunnableAndThereAreMoreRunnables_into( aFirstAndThereAreMore, anAlready);

                return aFirstAndThereAreMore;
            };
            if( fFirstRunnableAndThereAreMoreRunnables){}/* CQT */
            aPrototype.fFirstRunnableAndThereAreMoreRunnables = fFirstRunnableAndThereAreMoreRunnables;








            var pFirstRunnableAndThereAreMoreRunnables_into = function( theFirstAndThereAreMore, theAlready) {
                if( !theFirstAndThereAreMore) {
                    return;
                }

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)) {
                        return;
                    }
                }


                if( this._v_Runnable) {
                    if( theFirstAndThereAreMore.first) {
                        theFirstAndThereAreMore.thereAreMore = true;
                        return;
                    }
                    else {
                        theFirstAndThereAreMore.first = this;
                    }
                }

                if( !this._v_SubConfigurations) {
                    return;
                }

                var aNumSubConfigurations = this._v_SubConfigurations.length;
                if( !aNumSubConfigurations) {
                    return;
                }

                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                    aSubConfiguration.pFirstRunnableAndThereAreMoreRunnables_into( theFirstAndThereAreMore, theAlready);
                }
            };
            if( pFirstRunnableAndThereAreMoreRunnables_into){}/* CQT */
            aPrototype.pFirstRunnableAndThereAreMoreRunnables_into = pFirstRunnableAndThereAreMoreRunnables_into;











            var fSubRunnables = function() {

                var someRunnables = [ ];
                var anAlready = null;

                this.pSubRunnables_into( someRunnables, anAlready);

                return someRunnables;
            };
            if( fSubRunnables){}/* CQT */
            aPrototype.fSubRunnables = fSubRunnables;






            var fSubRunnablesWOself = function() {

                var someRunnables = [ ];
                var anAlready = null;

                this.pSubRunnables_into( someRunnables, anAlready);

                return someRunnables;
            };
            if( fSubRunnablesWOself){}/* CQT */
            aPrototype.fSubRunnablesWOself = fSubRunnablesWOself;









            var pRunnables_into = function( theRunnables, theAlready) {

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)) {
                        return;
                    }
                }

                if( theRunnables && ( theRunnables.indexOf( this) >= 0)) {
                    return;
                }

                if( this._v_Runnable) {
                    theRunnables.push( this);
                    return;
                }

                this.pSubRunnables_into( theRunnables, theAlready);
            };
            if( pRunnables_into){}/* CQT */
            aPrototype.pRunnables_into = pRunnables_into;







            var pSubRunnables_into = function( theRunnables, theAlready) {

                if( !this._v_SubConfigurations) {
                    return;
                }

                var aNumSubConfigurations = this._v_SubConfigurations.length;
                if( !aNumSubConfigurations) {
                    return;
                }

                for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                    var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                    aSubConfiguration.pRunnables_into( theRunnables, theAlready);
                }
            };
            if( pSubRunnables_into){}/* CQT */
            aPrototype.pSubRunnables_into = pSubRunnables_into;











            var fRequiredsWithImportedRequireds = function() {

                if( !( this._v_Requireds && this._v_Requireds.length) && !( this._v_Imports && this._v_Imports.length)) {
                    return [ ];
                }

                var someRequireds = [ ];
                var anAlready = null;

                this.pRequiredsWithImportedRequireds_into( someRequireds, anAlready);

                return someRequireds;
            };
            if( fRequiredsWithImportedRequireds){}/* CQT */
            aPrototype.fRequiredsWithImportedRequireds = fRequiredsWithImportedRequireds;








            var pRequiredsWithImportedRequireds_into = function( theRequireds, theAlready) {

                if( !( this._v_Requireds && this._v_Requireds.length) && !( this._v_Imports && this._v_Imports.length)) {
                    return;
                }

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)) {
                        return;
                    }
                }

                if( this._v_Requireds && this._v_Requireds.length) {

                    var aNumRequireds = this._v_Requireds.length;
                    for( var aRequiredIdx=0; aRequiredIdx < aNumRequireds; aRequiredIdx++) {

                        var aRequired = this._v_Requireds[ aRequiredIdx];

                        if( theRequireds.indexOf( aRequired) < 0) {
                            theRequireds.push( aRequired);
                        }
                    }
                }


                if( this._v_Imports && this._v_Imports.length) {

                    var aNumImports = this._v_Imports.length;
                    for( var anImportIdx=0; anImportIdx < aNumImports; anImportIdx++) {

                        var anImport = this._v_Imports[ anImportIdx];

                        var anImportedConfiguration = anImport._v_ImportedConfiguration;
                        if( anImportedConfiguration) {
                            anImportedConfiguration.pRequiredsWithImportedRequireds_into( theRequireds, theAlready);
                        }
                    }
                }
            };
            if( pRequiredsWithImportedRequireds_into){}/* CQT */
            aPrototype.pRequiredsWithImportedRequireds_into = pRequiredsWithImportedRequireds_into;









            var fAllPassableRecordedTitles = function() {

                var somePassableRecordedTitles = [ ];

                var somePassableRecorded = this.fAllPassableRecorded();
                if( !somePassableRecorded) {
                    return somePassableRecordedTitles;
                }

                var aNumPassableRecorded = somePassableRecorded.length;
                for( var aPassableRecordedIdx=0; aPassableRecordedIdx < aNumPassableRecorded; aPassableRecordedIdx++) {
                    var aPassableRecorded = somePassableRecorded[ aPassableRecordedIdx];
                    if( aPassableRecorded) {
                        var aPassableRecordedTitle = aPassableRecorded._v_Title;
                        if( aPassableRecordedTitle) {
                            somePassableRecordedTitles.push( aPassableRecordedTitle);
                        }
                    }
                }

                return somePassableRecordedTitles;
            };
            if( fAllPassableRecordedTitles){}/* CQT */
            aPrototype.fAllPassableRecordedTitles = fAllPassableRecordedTitles;






            var fAllPassableRecorded = function() {

                var somePassableRecorded = [ ];
                var anAlready = null;

                this.pPassableRecorded_into( somePassableRecorded, anAlready);

                return somePassableRecorded;
            };
            if( fAllPassableRecorded){}/* CQT */
            aPrototype.fAllPassableRecorded = fAllPassableRecorded;






            var pPassableRecorded_into = function( thePassableRecorded, theAlready) {

                if( !thePassableRecorded) {
                    return;
                }

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)) {
                        return;
                    }
                }


                if( this._v_Runnable) {
                    if( thePassableRecorded.indexOf( this) < 0) {
                        if( this._v_ExpectSuccess) {
                            thePassableRecorded.push( this);
                        }
                    }
                }


                if( this._v_Requireds) {

                    var aNumRequireds = this._v_Requireds.length;
                    for( var aRequiredIdx=0; aRequiredIdx < aNumRequireds; aRequiredIdx++) {

                        var aRequired = this._v_Requireds[ aRequiredIdx];
                        if( aRequired) {
                            var someSuppliers = aRequired._v_Suppliers;
                            if( someSuppliers) {
                                var aNumSuppliers = someSuppliers.length;
                                for( var aSupplierIdx=0; aSupplierIdx<aNumSuppliers; aSupplierIdx++) {
                                    var aSupplier = someSuppliers[ aSupplierIdx];
                                    if( aSupplier) {
                                        if( thePassableRecorded.indexOf( aSupplier) < 0) {

                                            aSupplier.pPassableRecorded_into( thePassableRecorded, theAlready);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                /*
                if( this._v_Imports) {

                    var aNumImports = this._v_Imports.length;
                    for( var anImportIdx=0; anImportIdx < aNumImports; anImportIdx++) {

                        var anImport = this._v_Imports[ anImportIdx];

                        var anImportedConfiguration = anImport._v_ImportedConfiguration;
                        if( anImportedConfiguration) {
                            anImportedConfiguration.pPassableRecorded_into( thePassableRecorded, theAlready);
                        }
                    }
                }
*/

                if( this._v_SubConfigurations) {

                    var aNumSubConfigurations = this._v_SubConfigurations.length;

                    for( var aSubConfigurationIdx=0; aSubConfigurationIdx < aNumSubConfigurations; aSubConfigurationIdx++) {
                        var aSubConfiguration = this._v_SubConfigurations[ aSubConfigurationIdx];

                        aSubConfiguration.pPassableRecorded_into( thePassableRecorded, theAlready);
                    }
                }

            };
            if( pPassableRecorded_into){}/* CQT */
            aPrototype.pPassableRecorded_into = pPassableRecorded_into;







            var fResolvableFieldNames = function( theFieldNames) {
                if( !theFieldNames || !theFieldNames.length) {
                    return null;
                }

                var someFieldNames = [ ];

                var aNumFieldNames = theFieldNames.length;
                for( var aFieldNameIdx=0; aFieldNameIdx < aNumFieldNames; aFieldNameIdx++) {
                    var aFieldName = theFieldNames[ aFieldNameIdx];
                    if( this.ALL_FIELDS.indexOf( aFieldName) >= 0) {
                        if( someFieldNames.indexOf( aFieldName) < 0) {
                            someFieldNames.push( aFieldName);
                        }
                    }
                }

                return someFieldNames;
            };
            if( fResolvableFieldNames){}/* CQT */
            aPrototype.fResolvableFieldNames = fResolvableFieldNames;










            var fFieldResolutionsByName = function( theFieldNames) {

                if( !theFieldNames) {
                    return null;
                }

                var someFieldNames = this.fResolvableFieldNames( theFieldNames);
                if( !someFieldNames || !someFieldNames.length) {
                    return null;
                }

                var aNumFieldNames = someFieldNames.length;
                if( !aNumFieldNames) {
                    return {};
                }

                var aQueryFields = new theM_queryfields.QueryFields_Constructor(
                    "On-" + this._v_Title,
                    this._v_Identifier,
                    this,
                    someFieldNames
                );


                aQueryFields.pResolveFieldsQuery();

                var someResolutions = { };
                for( var aFieldNameIdx=0; aFieldNameIdx < aNumFieldNames; aFieldNameIdx++) {
                    var aFieldName = someFieldNames[ aFieldNameIdx];
                    var aResolution = this._v_FieldResolutionsByName[ aFieldName];
                    if( aResolution) {
                        someResolutions[ aFieldName] = aResolution;
                    }
                }

                return someResolutions;
            };
            if( fFieldResolutionsByName){}/* CQT */
            aPrototype.fFieldResolutionsByName = fFieldResolutionsByName;








            var fParmResolutionsByName = function( theParmNames, theMapForStepsWithParmPrefix) {

                if( !theParmNames) {
                    return null;
                }


                var aNumParmNames = theParmNames.length;
                if( !aNumParmNames) {
                    return {};
                }

                var aQueryParms = new theM_queryparms.QueryParms_Constructor(
                    "On-" + this._v_Title,
                    this._v_Identifier,
                    this,
                    theParmNames,
                    theMapForStepsWithParmPrefix
                );


                aQueryParms.pResolveParmsQuery();

                var someResolutions = { };
                for( var aParmNameIdx=0; aParmNameIdx < aNumParmNames; aParmNameIdx++) {
                    var aParmName = theParmNames[ aParmNameIdx];
                    var aResolution = this._v_ParmResolutionsByName[ aParmName];
                    if( aResolution) {
                        someResolutions[ aParmName] = aResolution;
                    }
                }

                return someResolutions;
            };
            if( fParmResolutionsByName){}/* CQT */
            aPrototype.fParmResolutionsByName = fParmResolutionsByName;









            var fParmResolutionsResolvedValuesByName = function( theParmNames, theMapForStepsWithParmPrefix) {

                var someResolvedValuesByName = { };

                if( !theParmNames) {
                    return someResolvedValuesByName;
                }

                var aNumParmNames = theParmNames.length;
                if( !aNumParmNames) {
                    return someResolvedValuesByName;
                }

                var someParmResolutionsByName = this.fParmResolutionsByName( theParmNames, theMapForStepsWithParmPrefix);
                if( !someParmResolutionsByName) {
                    return someResolvedValuesByName;
                }

                for( var aParmNameIdx=0; aParmNameIdx < aNumParmNames; aParmNameIdx++) {

                    var aParmName = theParmNames[ aParmNameIdx];
                    if( aParmName) {

                        var aParmResolution = someParmResolutionsByName[ aParmName];
                        if( aParmResolution)  {

                            if( aParmResolution._v_ParmName == aParmName) {
                                if( aParmResolution._v_Success) {

                                    var aResolvedValue = aParmResolution._v_ParmValue;
                                    if( !( typeof aResolvedValue == "undefined")) {

                                        someResolvedValuesByName[ aParmName] = aResolvedValue;
                                    }
                                }
                            }
                        }
                    }
                }

                return someResolvedValuesByName;
            };
            if( fParmResolutionsResolvedValuesByName){}/* CQT */
            aPrototype.fParmResolutionsResolvedValuesByName = fParmResolutionsResolvedValuesByName;









            var fNewSyntheticConfiguration = function( theTitle, theOverridenFields, theChecks) {

                var someOverridenFieldKeys = null;

                var aNewTitle = theTitle;
                if( !aNewTitle) {
                    aNewTitle = "";
                }

                var aThisTitle = this._v_Title || "";
                if( !aThisTitle) {
                    aThisTitle = "";
                }

                var aTitle = aNewTitle;
                aTitle += "-SynthFrom-";
                aTitle += aThisTitle;

                var aNewConfiguration = new Configuration_Constructor( aTitle, this._v_Identifier);
                aNewConfiguration._v_OwnerConfiguration = this;

                if( theOverridenFields) {
                    someOverridenFieldKeys = Object.keys( theOverridenFields);

                    if( someOverridenFieldKeys) {
                        var aNumFieldKeys = someOverridenFieldKeys.length;
                        for( var aFieldKeyIdx=0; aFieldKeyIdx < aNumFieldKeys; aFieldKeyIdx++) {

                            var aFieldKey = someOverridenFieldKeys[ aFieldKeyIdx];
                            var aFieldValue = theOverridenFields[ aFieldKey];

                            if( this.POPULABLEFIELDS_CONFIGURATION.indexOf( aFieldKey) >= 0) {
                                aNewConfiguration.pPopulateFieldFromParser( aFieldKey, aFieldValue);
                            }
                        }
                    }
                }

                if( theChecks) {
                    var aNumChecks = theChecks.length;
                    for( var aCheckIdx=0; aCheckIdx < aNumChecks; aCheckIdx++) {

                        var aCheck = theChecks[ aCheckIdx];
                        if( aCheck) {

                            var aM_checkoutcome    = require('./checkoutcome');

                            var aNewCheckOutcome = new aM_checkoutcome.CheckOutcome_Constructor( "Check-" + aCheckIdx + "-For-" + aTitle, this._v_Identifier);
                            aNewCheckOutcome._v_OwnerConfiguration = aNewConfiguration;

                            var someCheckJSONnames = Object.keys( aCheck);

                            if( someCheckJSONnames) {
                                var aNumJSONnames = someCheckJSONnames.length;
                                for( var aJSONnameIdx=0; aJSONnameIdx < aNumJSONnames; aJSONnameIdx++) {

                                    var aJSONname = someCheckJSONnames[ aJSONnameIdx];
                                    var otherFieldName =  aNewCheckOutcome.FIELDNAMESBYJSONNAME_CHECK[ aJSONname];
                                    if( otherFieldName) {
                                        var otherFieldValue = aCheck[ aJSONname];

                                        if( aNewCheckOutcome.POPULABLEFIELDS_CHECK.indexOf( otherFieldName) >= 0) {
                                            aNewCheckOutcome.pPopulateFieldFromParser( otherFieldName, otherFieldValue);
                                        }
                                    }
                                }
                            }

                            aNewConfiguration.pAddCheck( aNewCheckOutcome);
                        }
                    }
                }

                return aNewConfiguration;
            };
            if( fNewSyntheticConfiguration){}/* CQT */
            aPrototype.fNewSyntheticConfiguration = fNewSyntheticConfiguration;







            var pInjectConfigParm = function( theParmName, theParmValue) {

                var aConfigParms = this.fGetOrCreateConfigParms();
                if( !aConfigParms) {
                    return;
                }
                aConfigParms.pSetParmValue( theParmName, theParmValue);

                var aParmResolution = this._v_ParmResolutionsByName[ theParmName];
                if( aParmResolution) {
                    aParmResolution.pResolveParmWithValue( theParmValue, aParmResolution.PARMRESOLUTIONKIND_INJECTEDPARM, null);
                }

            };
            if( pInjectConfigParm){}/* CQT */
            aPrototype.pInjectConfigParm = pInjectConfigParm;












            var fExportTargetConfiguration = function( theExportToParent) {

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportTargetConfiguration Configuration Begin " , JSON.stringify( this.fToStoreJSON_identifying()));
                }


//                if( this._v_ImportedIntoConfigurations && this._v_ImportedIntoConfigurations.length) {
//
//                    if( this.LOGEXPORTTARGETS) {
//                        console.log( "fExportTargetConfiguration Configuration ", " delegating into this._v_ImportedIntoConfigurations[ 0]", JSON.stringify( this.fToStoreJSON_identifying()));
//                    }
//
//                    var anImportedIntoConfiguration = this._v_ImportedIntoConfigurations[ 0];
//
//                    var anExportTargetConfiguration = anImportedIntoConfiguration.fExportTargetConfiguration( theExportToParent);
//
//                    if( anExportTargetConfiguration){}/* CQT */
//                    return anExportTargetConfiguration;
//                }


                if( !this._v_OwnerConfiguration && this._v_OwnerRequired) {

                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportTargetConfiguration Configuration ", " delegating into this._v_OwnerRequired", JSON.stringify( this.fToStoreJSON_identifying()));
                    }

                    var otherExportTargetConfiguration = this._v_OwnerRequired.fExportTargetConfiguration( theExportToParent);

                    if( otherExportTargetConfiguration){}/* CQT */
                    return otherExportTargetConfiguration;
                }


                if( theExportToParent) {
                    if( !this._v_OwnerConfiguration) {
                        if( this.LOGEXPORTTARGETS) {
                            console.log( "fExportTargetConfiguration Configuration ", " null target because theExportToParent && !this._v_OwnerConfiguration", JSON.stringify( this.fToStoreJSON_identifying()));
                        }
                        return null;
                    }

                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportTargetConfiguration Configuration ", " delegating into this._v_OwnerConfiguration", JSON.stringify( this.fToStoreJSON_identifying()));
                    }

                    var anotherExportTargetConfiguration = this._v_OwnerConfiguration.fExportTargetConfiguration( false);

                    if( anotherExportTargetConfiguration){}/* CQT */
                    return anotherExportTargetConfiguration;
                }

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportTargetConfiguration Configuration Target=this " , JSON.stringify( this.fToStoreJSON_identifying()));
                }

                return this;
            };
            if( fExportTargetConfiguration){}/* CQT */
            aPrototype.fExportTargetConfiguration = fExportTargetConfiguration;










            var fExportToGlobalsTargetConfiguration = function() {

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportToGlobalsTargetConfiguration Configuration Begin " , JSON.stringify( this.fToStoreJSON_identifying()));

                }


                if( !this._v_OwnerConfiguration && this._v_OwnerRequired) {

                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportToGlobalsTargetConfiguration Configuration ", " delegating into this._v_OwnerRequired", JSON.stringify( this.fToStoreJSON_identifying()));
                    }

                    var anExportTargetConfiguration = this._v_OwnerRequired.fExportToGlobalsTargetConfiguration();

                    if( anExportTargetConfiguration){}/* CQT */
                    return anExportTargetConfiguration;
                }



                if( this._v_OwnerConfiguration) {
                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportToGlobalsTargetConfiguration Configuration ", " delegating into this._v_OwnerConfiguration", JSON.stringify( this.fToStoreJSON_identifying()));
                    }

                    var anotherExportTargetConfiguration = this._v_OwnerConfiguration.fExportToGlobalsTargetConfiguration( false);

                    if( anotherExportTargetConfiguration){}/* CQT */
                    return anotherExportTargetConfiguration;
                }



                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportToGlobalsTargetConfiguration Configuration ", " found this because has no owner configuration or owner required", JSON.stringify( this.fToStoreJSON_identifying()));
                }

                var otherExportTargetConfiguration = this.fGetOrCreateGlobalConfiguration();

                if( otherExportTargetConfiguration){}/* CQT */
                return otherExportTargetConfiguration;
            };
            if( fExportToGlobalsTargetConfiguration){}/* CQT */
            aPrototype.fExportToGlobalsTargetConfiguration = fExportToGlobalsTargetConfiguration;










            var fGetOrCreateGlobalConfiguration = function() {

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fGetOrCreateGlobalConfiguration Configuration Begin " , JSON.stringify( this.fToStoreJSON_identifying()));

                }

                var aGlobalConfiguration = theM_globalconfigholder.fGlobalConfiguration();
                if( aGlobalConfiguration) {
                    return aGlobalConfiguration;
                }

                aGlobalConfiguration = new Configuration_Constructor( theM_globalconfigholder.GLOBALCONFIGURATIONNAME, this._v_Identifier);

                theM_globalconfigholder.pSetGlobalConfiguration( aGlobalConfiguration);


                if( this.LOGEXPORTTARGETS) {
                    console.log( "fGetOrCreateGlobalConfiguration Created Global Configuration ", theM_globalconfigholder.GLOBALCONFIGURATIONNAME, JSON.stringify( this.fToStoreJSON_identifying()));
                }

                if( aGlobalConfiguration){}/* CQT */
                return aGlobalConfiguration;
            };
            if( fGetOrCreateGlobalConfiguration){}/* CQT */
            aPrototype.fGetOrCreateGlobalConfiguration = fGetOrCreateGlobalConfiguration;










            var fGetGlobalConfiguration = function() {

                var aGlobalConfiguration = theM_globalconfigholder.fGlobalConfiguration();

                if( aGlobalConfiguration){}/* CQT */
                return aGlobalConfiguration;
            };
            if( fGetGlobalConfiguration){}/* CQT */
            aPrototype.fGetGlobalConfiguration = fGetGlobalConfiguration;








            var fExportToRootTargetConfiguration = function() {

                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportToRootTargetConfiguration Configuration Begin " , JSON.stringify( this.fToStoreJSON_identifying()));

                }


                if( !this._v_OwnerConfiguration && this._v_OwnerRequired) {

                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportToRootTargetConfiguration Configuration ", " delegating into this._v_OwnerRequired", JSON.stringify( this.fToStoreJSON_identifying()));
                    }

                    var otherExportTargetConfiguration = this._v_OwnerRequired.fExportToRootTargetConfiguration();

                    if( otherExportTargetConfiguration){}/* CQT */
                    return otherExportTargetConfiguration;
                }


                if( !this._v_OwnerConfiguration) {
                    if( this.LOGEXPORTTARGETS) {
                        console.log( "fExportToRootTargetConfiguration Configuration ", " found this because has no owner configuration or owner required", JSON.stringify( this.fToStoreJSON_identifying()));
                    }
                    return this;
                }


                if( this.LOGEXPORTTARGETS) {
                    console.log( "fExportToRootTargetConfiguration Configuration ", " delegating into this._v_OwnerConfiguration", JSON.stringify( this.fToStoreJSON_identifying()));
                }

                var anotherExportTargetConfiguration = this._v_OwnerConfiguration.fExportToRootTargetConfiguration( false);

                if( anotherExportTargetConfiguration){}/* CQT */
                return anotherExportTargetConfiguration;
            };
            if( fExportToRootTargetConfiguration){}/* CQT */
            aPrototype.fExportToRootTargetConfiguration = fExportToRootTargetConfiguration;








            var pInjectExportedParm = function( theParmName, theParmValue) {

                var aExportedParms = this.fGetOrCreateExportedParms();
                if( !aExportedParms) {
                    return;
                }
                aExportedParms.pSetParmValue( theParmName, theParmValue);


                var aParmResolution = this._v_ParmResolutionsByName[ theParmName];
                if( aParmResolution) {
                    aParmResolution.pResolveParmWithValue( theParmValue, aParmResolution.PARMRESOLUTIONKIND_EXPORTED, null);
                }


                var aParmNameForChildParms = theParmName + theM_sentinels.TRAVERSALSTEPSSEPARATOR;


                if( this._v_ParmResolutionsByName) {

                    var someParmResolutionsByNameKeys = Object.keys( this._v_ParmResolutionsByName);
                    if( someParmResolutionsByNameKeys) {

                        var aNumParmResolutionsByNameKeys = someParmResolutionsByNameKeys.length;
                        for( var aParmResolutionsByNameKeyIdx=0; aParmResolutionsByNameKeyIdx < aNumParmResolutionsByNameKeys; aParmResolutionsByNameKeyIdx++) {

                            var aParmResolutionsByNameKey = someParmResolutionsByNameKeys[ aParmResolutionsByNameKeyIdx];
                            if( aParmResolutionsByNameKey) {

                                var aParmResolutionsByNameKeyFragment = aParmResolutionsByNameKey.substring( 0, aParmNameForChildParms.length);

                                if( aParmResolutionsByNameKeyFragment ==  aParmNameForChildParms) {

                                    var aParmResolutionsByName = this._v_ParmResolutionsByName[ aParmResolutionsByNameKey];
                                    if( aParmResolutionsByName) {
                                        aParmResolutionsByName.pInvalidateByExportParm( this, theParmName);
                                    }
                                }
                            }
                        }
                    }
                }
            };
            if( pInjectExportedParm){}/* CQT */
            aPrototype.pInjectExportedParm = pInjectExportedParm;










            var pAddJustCreatedFieldResolution = function( theFieldResolution) {

                if( !theFieldResolution) {
                    return;
                }

                var aFieldName = theFieldResolution._v_FieldName;
                if( !aFieldName) {
                    return;
                }

                this._v_FieldResolutionsByName[ aFieldName] = theFieldResolution;
            };
            if( pAddJustCreatedFieldResolution){}/* CQT */
            aPrototype.pAddJustCreatedFieldResolution = pAddJustCreatedFieldResolution;









            var pAddJustCreatedParmResolution = function( theParmResolution) {

                if( !theParmResolution) {
                    return;
                }

                var aParmName = theParmResolution._v_ParmName;
                if( !aParmName) {
                    return;
                }

                this._v_ParmResolutionsByName[ aParmName] = theParmResolution;
            };
            if( pAddJustCreatedParmResolution){}/* CQT */
            aPrototype.pAddJustCreatedParmResolution = pAddJustCreatedParmResolution;
























            return aPrototype;

        })();






        var Configuration_Constructor = function( theTitle, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Runnable = null;

            this._v_InheritMode = null;

            this._v_ExpectSuccess = null;
            this._v_ExpectedEvent = null;

            this._v_ConstructorModuleName = null;
            this._v_ConstructorName       = null;
            this._v_MethodName            = null;

            this._v_ForceError       = null;
            this._v_ForceErrorDetail = null;
            this._v_ForceErrorKind   = null;
            this._v_ForceErrorWhen   = null;

            this._v_ScheduleSubs  = null;

            this._v_OwnerConfiguration = null;
            this._v_SubConfigurations   = null;

            this._v_Defaults       = null;
            this._v_ConfigParms    = null;
            this._v_Imports        = null;
            this._v_Requireds      = null;
            this._v_Exports        = null;
            this._v_Checks         = null;

            this._v_ImportedIntoConfigurations = null;
            this._v_ExportedParms  = null;

            this._v_ParmResolutionsByName  =  null;
            this._v_FieldResolutionsByName =  null;

            this._v_BuffersHeldFromCleanUpUntilConfigsRelease =  null;

            this._pInit_Configuration( theTitle, theIdentifier);
        };
        Configuration_Constructor.prototype = aConfiguration_Prototype;





        var Configuration_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = aConfiguration_Prototype;
            this._v_Type = null;

            this._v_Runnable = null;

            this._v_InheritMode = null;

            this._v_ExpectSuccess = null;
            this._v_ExpectedEvent = null;

            this._v_ConstructorModuleName = null;
            this._v_ConstructorName       = null;
            this._v_MethodName            = null;

            this._v_ForceError       = null;
            this._v_ForceErrorDetail = null;
            this._v_ForceErrorKind   = null;
            this._v_ForceErrorWhen   = null;

            this._v_ScheduleSubs  = null;

            this._v_Defaults       = null;
            this._v_ConfigParms    = null;
            this._v_Imports        = null;
            this._v_Requireds      = null;
            this._v_Exports        = null;
            this._v_Checks         = null;

            this._v_ImportedIntoConfigurations = null;
            this._v_ExportedParms  = null;

            this._v_OwnerConfiguration = null;
            this._v_SubConfigurations  =  null;

            this._v_ParmResolutionsByName  =  null;
            this._v_FieldResolutionsByName =  null;

            this._v_BuffersHeldFromCleanUpUntilConfigsRelease =  null;
        };
        Configuration_SuperPrototypeConstructor.prototype = aConfiguration_Prototype;



        var aModule = {
            "Configuration_Prototype": aConfiguration_Prototype,
            "Configuration_Constructor": Configuration_Constructor,
            "Configuration_SuperPrototypeConstructor": Configuration_SuperPrototypeConstructor
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

            var aM_parsedconfig     = require('./parsedconfig');
            var aM_configparms      = require('./configparms');
            var aM_defaults         = require('./defaults');

            var aM_specparser_config = require('./specparser/specparser-config');

            var aM_queryfields     = require('./queryfields');
            var aM_queryparms      = require('./queryparms');
            var aM_resolutionfield = require('./resolutionfield');
            var aM_resolutionparm  = require('./resolutionparm');

            var aM_recorded_test   = require('../recorded-test');
            var aM_async_test      = require('../async-test');

            var aM_globalconfigholder = require('../globalconfigholder');

            var aM_sentinels = require('../sentinels');


            return aMod_definer(
                aM_parsedconfig,
                aM_configparms,
                aM_defaults,
                aM_specparser_config,
                aM_queryfields,
                aM_queryparms,
                aM_resolutionfield,
                aM_resolutionparm,
                aM_recorded_test,
                aM_async_test,
                aM_globalconfigholder,
                aM_sentinels
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./parsedconfig",
            "./configparms",
            "./defaults",
            "./specparser/specparser-config",
            "./queryfields",
            "./queryparms",
            "./resolutionfield",
            "./resolutionparm",
            "../recorded-test",
            "../async-test",
            "../globalconfigholder",
            "../sentinels"
        ], function (
            theM_parsedconfig,
            theM_configparms,
            theM_defaults,
            theM_specparser_config,
            theM_queryfields,
            theM_queryparms,
            theM_resolutionfield,
            theM_resolutionparm,
            theM_recorded_test,
            theM_async_test,
            theM_globalconfigholder,
            theM_sentinels
        ) {
            return aMod_definer(
                theM_parsedconfig,
                theM_configparms,
                theM_defaults,
                theM_specparser_config,
                theM_queryfields,
                theM_queryparms,
                theM_resolutionfield,
                theM_resolutionparm,
                theM_recorded_test,
                theM_async_test,
                theM_globalconfigholder,
                theM_sentinels
            );
        });
    }


}());