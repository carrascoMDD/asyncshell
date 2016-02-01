'use strict';

/*
 specloader.js
 Created 201409190323
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
    var aMod_definer = function( theM_exceptiondetails,
                                 theM_resloader,
                                 theM_overrider) {

        var ModuleName     = "specloader";
        var ModulePackages = "common-test/resloader";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}




        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOADSPEC_FORCESYNC = false;


            theToInit.DEFAULTSPECPATHSFORPACKAGEPATHS = [
                /*
                {
                    "comment":     "#root is defined in resloader.js as the relative path from the resloader.js file to the root of the project  RESLOADER_PATH_TO_ROOT = ../../../"
                },
                {
                    "packagePath": "#testsroot",
                    "resPath":     "#root/tests/"
                },
                {
                    "packagePath": "ttst",
                    "resPath":     "#root/tests/ttst/"
                },
                {
                    "packagePath": "general",
                    "resPath":     "#root/tests/general/"
                },



                {
                    "packagePath": "springnut-host",
                    "resPath":     "#root/tests/springnut/"
                },
                {
                    "packagePath": "#remote",
                    "resPath":     "http://localhost:8080/springnut/tests/"
                },
                {
                    "packagePath": "springnut",
                    "resPath":     [
                        "#testsroot/springnut/",
                        "#remote/springnut/specs/"
                    ]
                },



                {
                    "packagePath": "modulo10",
                    "resPath":     "#root/tests/modulo10/"
                },




                {
                    "packagePath": "teatro",
                    "resPath":     "#root/tests/teatro/"
                },





                {
                    "packagePath": "springnut-example-local",
                    "resPath":     "../../../tests/springnut/"
                },

                {
                    "packagePath": "springnut-example-local",
                    "resPath":     "../../../tests/springnut/"
                },
                {
                    "packagePath": "springnut-example-remote",
                    "resPath":     "#remotehost/springnut/specs/"
                },
                {
                    "packagePath": "springnut-example-local-andremote",
                    "resPath":     [
                        "../../../tests/springnut/",
                        "#remote/springnut/specs/"
                    ]
                },
                {
                    "packagePath": "springnut-example-remotemonitored-andlocal",
                    "resPath":     [
                        "#remote/springnut/specs/",
                        "../../../tests/springnut/"
                    ]
                },
                {
                    "packagePath": "springnut-example-remote-andlocal",
                    "resPath":     [
                        "#remote/springnut/specs/",
                        "../../../tests/springnut/"
                    ]
                }
                */
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
                return;
            }


            theToInit.SPECPATHPREFIX = "@testspath";

            theToInit.SPECLOADERSINGLETONNAME = "SpecLoaderSingleton";

            theToInit.LOADERKIND_SPEC = "SPEC";


        };



        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
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








        var ModuleGlobals = { };
        ModuleGlobals.gSpecLoaderSingleton = null;





        var aSpecLoader_Prototype = (function() {


            var aPrototype = new theM_resloader.ResLoader_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_resloader.ResLoader_Prototype;

            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "SpecLoader";





            var _pInit = function( theTitle) {

                this._pInit_SpecLoader( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_SpecLoader = function( theTitle) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ResLoader.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;

                this._v_Type = aPrototype._v_Type;
            };
            if( _pInit_SpecLoader){}/* CQT */
            aPrototype._pInit_SpecLoader = _pInit_SpecLoader;











            var fLibPathPrefix = function( ) {

                return this.SPECPATHPREFIX
            };
            if( fLibPathPrefix){}/* CQT */
            aPrototype.fLibPathPrefix = fLibPathPrefix;





            var fLoadForceSync = function() {

                return this.LOADSPEC_FORCESYNC;
            };
            if( fLoadForceSync){}/* CQT */
            aPrototype.fLoadForceSync = fLoadForceSync;










            var fLoadSpecNamed = function( theSpecName) {

                var aSpec = this.fLoadResNamed( theSpecName);
                if( aSpec){}/* CQT */
                return aSpec;
            };
            if( fLoadSpecNamed){}/* CQT */
            aPrototype.fLoadSpecNamed = fLoadSpecNamed;







            var pLoadSpecNamed = function( theSpecName, theCallback) {

                this.pLoadResNamed( theSpecName, theCallback);
            };
            if( pLoadSpecNamed){}/* CQT */
            aPrototype.pLoadSpecNamed = pLoadSpecNamed;









            var pParseResReceived = function(  theCallback, theResFullPath, theBody) {

                this.pParseSpecReceived( theCallback, theResFullPath, theBody);
            };
            if( pParseResReceived){}/* CQT */
            aPrototype.pParseResReceived = pParseResReceived;










            var pParseSpecReceived = function(  theCallback, theResFullPath, theBody) {

                var aMethodName = "pParseSpecReceived";


                var aBodyObject = null;

                if( !( typeof theBody == "object")) {
                    if( !typeof theBody == "string") {
                        theCallback( this.fRecord( aMethodName, aThis.EVENTKIND_FAIL, null, "!theResponse.body", null));
                        return;
                    }

                    if( theBody) {
                        try {
                            aBodyObject = JSON.parse( theBody);
                        }
                        catch( anException) {
                            var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                            var aRecord = this.fRecord( aMethodName, this.RESEVEKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                            theCallback( this.fRecord( aMethodName, this.RESEVEKIND_NOTLOADED, null, aRecord, null));
                            return;
                        }
                    }
                }


                if( aBodyObject == null) {
                    theCallback( this.fRecord( aMethodName, this.RESEVEKIND_NOTLOADED, null, "!JSON.parse( theResponse.body)", null));
                }


                if( this.LOGRESLOADS) {
                    this.fRecord( aMethodName, this.RESEVEKIND_LOADED, theBody, theResFullPath);
                }


                theCallback( null, aBodyObject);

            };
            if( pParseSpecReceived){}/* CQT */
            aPrototype.pParseSpecReceived = pParseSpecReceived;






            return aPrototype;

        })();






        var SpecLoader_Constructor = function( theTitle) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_resloader.ResLoader_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_SpecLoader( theTitle);
        };
        SpecLoader_Constructor.prototype = aSpecLoader_Prototype;





        var SpecLoader_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_resloader.ResLoader_Prototype;

            this._v_Prototype = aSpecLoader_Prototype;
            this._v_Type = null;
        };
        SpecLoader_SuperPrototypeConstructor.prototype = aSpecLoader_Prototype;









        var fgGlobalSpecLoader = function() {

            if( !ModuleGlobals.gSpecLoaderSingleton) {
                ModuleGlobals.gSpecLoaderSingleton = new SpecLoader_Constructor( ModuleConstants.SPECLOADERSINGLETONNAME);
                ModuleGlobals.gSpecLoaderSingleton.pClearResLoaderPaths();
                ModuleGlobals.gSpecLoaderSingleton.fAddResAndPackagePaths( ModuleConstants.DEFAULTSPECPATHSFORPACKAGEPATHS);
            }

            return ModuleGlobals.gSpecLoaderSingleton;
        };







        var aModule = {
            "fgGlobalSpecLoader":   fgGlobalSpecLoader,
            "SpecLoader_Prototype": aSpecLoader_Prototype,
            "SpecLoader_Constructor": SpecLoader_Constructor,
            "SpecLoader_SuperPrototypeConstructor": SpecLoader_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;



        aModule.ModuleGlobals = ModuleGlobals;




        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../exceptiondetails');
            var aM_resloader        = require('./resloader');
            var aM_overrider         = require('../overrider');

            return aMod_definer( aM_exceptiondetails, aM_resloader, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../exceptiondetails",
            "./resloader",
            "../overrider"
        ], function ( theM_exceptiondetails, theM_resloader, theM_overrider) {
            return aMod_definer( theM_exceptiondetails, theM_resloader, theM_overrider);
        });
    }



}());