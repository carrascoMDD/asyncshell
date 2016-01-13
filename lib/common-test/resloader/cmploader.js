'use strict';

/*
 cmploader.js
 Creado 201409182249
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
    var aMod_definer = function( theM_exceptiondetails,
                                 theM_resloader,
                                 theM_overrider,
                                 theM_sentinels) {


        var ModuleName     = "cmploader";
        var ModulePackages = "common-test/resloader";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.LOADCMP_FORCESYNC = false;




            theToInit.DEFAULTCMPPATHSFORPACKAGEPATHS = [
                /*
                {
                    "comment":     "#root is defined in resloader.js as the relative path from the resloader.js file to the root of the project  RESLOADER_PATH_TO_ROOT = ../../../"
                },
                {
                    "packagePath": "common-test",
                    "resPath":     "#root/lib/common-test/"
                },
                {
                    "packagePath": "ttst",
                    "resPath":     "#root/lib/ttst/"
                },
                {
                    "packagePath": "general-test",
                    "resPath":     "#root/lib/general-test/"
                },
                {
                    "packagePath": "springnut-test",
                    "resPath":     "#root/lib/springnut-test/"
                },
                {
                    "packagePath": "modulo10-test",
                    "resPath":     "#root/lib/modulo10-test/"
                },



                {
                    "packagePath": "#remote",
                    "resPath":     "http://localhost:8080/springnut/tests"
                },
                {
                    "packagePath": "#springnutremote",
                    "resPath":     "#remote/springnut/lib/"
                },
                {
                    "packagePath": "springnut-test-example-remote",
                    "resPath":     "#springnutremote/springnut-test/",
                    "comment":     "Expands to:  http://localhost:8080/springnut/tests/     /springnut/lib/    /springnut-test/",
                    "comment2":    "De forma que @cmppath/springnut-test-example-remote/ine-test/ficheros-test/ficheros-list-ine-springnut-test",
                    "comment3":    "Expande a  http://localhost:8080/springnut/tests/    /springnut/lib/    /springnut-test/    ine-test/ficheros-test/ficheros-list-ine-springnut-test   auto terminado en .js"
                },





                {
                    "packagePath_OLD": "common-test",
                    "resPath":     "../"
                },
                {
                    "packagePath_OLD": "ttst",
                    "resPath":     "../../ttst/"
                },
                {
                    "packagePath_OLD": "general-test",
                    "resPath":     "../../general-test/"
                },
                {
                    "packagePath_OLD": "springnut-test",
                    "resPath":     "../../springnut-test/"
                },
                {
                    "packagePath_OLD": "modulo10-test",
                    "resPath":     "../../modulo10-test/"
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

            theToInit.CMPPATHPREFIX = "@cmppath";

            theToInit.LOADERKIND = "CMP";

            theToInit.CMPLOADERSINGLETONNAME = "CmpLoaderSingleton";

            theToInit.LOADERKIND_CMP = "CMP";

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








        var ModuleGlobals = { };
        ModuleGlobals.gCmpLoaderSingleton = null;








        var aCmpLoader_Prototype = (function() {


            var aPrototype = new theM_resloader.ResLoader_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_resloader.ResLoader_Prototype;

            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "CmpLoader";





            var _pInit = function( theTitle) {

                this._pInit_CmpLoader( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_CmpLoader = function( theTitle) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ResLoader.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;

                this._v_Type = aPrototype._v_Type;
            };
            if( _pInit_CmpLoader){}/* CQT */
            aPrototype._pInit_CmpLoader = _pInit_CmpLoader;








            var fLibPathPrefix = function( ) {

                return this.CMPPATHPREFIX;
            };
            if( fLibPathPrefix){}/* CQT */
            aPrototype.fLibPathPrefix = fLibPathPrefix;







            var fLoadForceSync = function() {

                return this.LOADCMP_FORCESYNC;
            };
            if( fLoadForceSync){}/* CQT */
            aPrototype.fLoadForceSync = fLoadForceSync;









            var fLoadCmpNamed = function( theCmpName) {

                return this.fLoadResNamed( theCmpName);
            };
            if( fLoadCmpNamed){}/* CQT */
            aPrototype.fLoadCmpNamed = fLoadCmpNamed;







            var pLoadCmpNamed = function( theCmpName, theCallback) {

                this.pLoadResNamed( theCmpName, theCallback);
            };
            if( pLoadCmpNamed){}/* CQT */
            aPrototype.pLoadCmpNamed = pLoadCmpNamed;








            var pParseResReceived = function(  theCallback, theResFullPath, theBody) {

                this.pParseCmpReceived( theCallback, theResFullPath, theBody);
            };
            if( pParseResReceived){}/* CQT */
            aPrototype.pParseResReceived = pParseResReceived;










            var pParseCmpReceived = function(  theCallback, theResFullPath, theBody) {

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


                theCallback( null, aBodyObject);

            };
            if( pParseCmpReceived){}/* CQT */
            aPrototype.pParseCmpReceived = pParseCmpReceived;








            return aPrototype;

        })();






        var CmpLoader_Constructor = function( theTitle) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_resloader.ResLoader_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_CmpLoader( theTitle);
        };
        CmpLoader_Constructor.prototype = aCmpLoader_Prototype;





        var CmpLoader_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_resloader.ResLoader_Prototype;

            this._v_Prototype = aCmpLoader_Prototype;
            this._v_Type = null;
        };
        CmpLoader_SuperPrototypeConstructor.prototype = aCmpLoader_Prototype;






        var fgGlobalCmpLoader = function() {

            if( !ModuleGlobals.gCmpLoaderSingleton) {
                ModuleGlobals.gCmpLoaderSingleton = new CmpLoader_Constructor( ModuleConstants.CMPLOADERSINGLETONNAME);
                ModuleGlobals.gCmpLoaderSingleton.pClearResLoaderPaths();
                ModuleGlobals.gCmpLoaderSingleton.fAddResAndPackagePaths( ModuleConstants.DEFAULTCMPPATHSFORPACKAGEPATHS);
            }

            return ModuleGlobals.gCmpLoaderSingleton;
        };







        var aModule = {
            "fgGlobalCmpLoader":   fgGlobalCmpLoader,
            "CmpLoader_Prototype": aCmpLoader_Prototype,
            "CmpLoader_Constructor": CmpLoader_Constructor,
            "CmpLoader_SuperPrototypeConstructor": CmpLoader_SuperPrototypeConstructor
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

            var aM_exceptiondetails  = require('../exceptiondetails');
            var aM_resloader         = require('./resloader');
            var aM_overrider         = require('../overrider');
            var aM_sentinels           = require('../sentinels');

            return aMod_definer( aM_exceptiondetails, aM_resloader, aM_overrider, aM_sentinels);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../exceptiondetails",
            "./resloader",
            "../overrider",
            "../sentinels"
        ], function (
                theM_exceptiondetails,
                theM_resloader,
                theM_overrider,
                theM_sentinels
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_resloader,
                theM_overrider,
                theM_sentinels
            );
        });
    }



}());