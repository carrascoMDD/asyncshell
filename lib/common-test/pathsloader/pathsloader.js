'use strict';

/*
 pathsloader.js
 Creado 201409230445
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
                                 theM_pathsrecord,
                                 theM_nextticker,
                                 theM_httprequest,
                                 theM_callbacker,
                                 theM_xloader,
                                 theM_overrider,
                                 theM_sentinels) {

        var ModuleName     = "pathsloader";
        var ModulePackages = "common-test/pathsloader";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGPATHSLOADS = false;
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
        ModuleGlobals.PATHSLOADERSINGLETON = null;









        var aPathsLoader_Prototype = (function() {



            var aPrototype = new theM_xloader.XLoader_SuperPrototypeConstructor();

            aPrototype._v_SuperPrototype = theM_xloader.XLoader_Prototype;



            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "PathsLoader";


            aPrototype._v_Title      = null;

            aPrototype._v_PathsName = null;

            aPrototype._v_Records = null;

            aPrototype._v_ResAndPackagePaths = null;



            var _pInit = function( theTitle, thePathsName) {

                this._pInit_PathsLoader( theTitle, thePathsName);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_PathsLoader = function( theTitle, thePathsName) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_XLoader.apply( this, [ theTitle, thePathsName]);


                this._v_Prototype = aPrototype;

                this._v_Type = aPrototype._v_Type;

                this._v_PathsName = thePathsName;

                if( this._v_PathsName){}/* CQT */
            };
            if( _pInit_PathsLoader){}/* CQT */
            aPrototype._pInit_PathsLoader = _pInit_PathsLoader;











            var fLoadPathsNamed = function( thePathsName) {

                if( !thePathsName) {
                    return null;
                }

                this._v_PathsName = thePathsName;

                var aLoadedPaths = this.fLoadXNamed( thePathsName);
                if( aLoadedPaths){}/* CQT */

                return aLoadedPaths;
            };
            if( fLoadPathsNamed){}/* CQT */
            aPrototype.fLoadPathsNamed = fLoadPathsNamed;













            var pLoadPathsNamed = function( thePathsName, theCallback) {

                this.pLoadXNamed( thePathsName, theCallback);
            };
            if( pLoadPathsNamed){}/* CQT */
            aPrototype.pLoadPathsNamed = pLoadPathsNamed;








            var pHandleXReceived = function( theCallback, thePathsName, thePathsReceived, theMethodName) {

                this.pParsePathsReceived( theCallback, thePathsName, thePathsReceived, theMethodName);
            };
            if( pHandleXReceived){}/* CQT */
            aPrototype.pHandleXReceived = pHandleXReceived;









            var pParsePathsReceived = function(  theCallback, thePathsName, thePathsReceived, theMethodName) {

                if( this.LOGPATHSLOADS) {
                    this.fRecord( theMethodName, this.XLOEVEKIND_LOADED, thePathsName, thePathsReceived);
                }

                if( typeof thePathsReceived == "undefined") {
                    theCallback( this.fRecord( theMethodName, this.XLOEVEKIND_NOTLOADED, null, "typeof thePathsReceived == 'undefined'", null));
                    return;
                }

                if( !thePathsReceived) {
                    theCallback( this.fRecord( theMethodName, this.XLOEVEKIND_NOTLOADED, null, "!thePathsReceived", null));
                    return;
                }

                this.pReplaceInPathsReceived( theCallback, thePathsName, thePathsReceived, theMethodName);
            };
            if( pParsePathsReceived){}/* CQT */
            aPrototype.pParsePathsReceived = pParsePathsReceived;










            var pReplaceInPathsReceived = function(  theCallback, thePathsName, thePathsReceived, theMethodName) {

                if( !thePathsReceived) {
                    return;
                }

                var aNumReceivedPaths = thePathsReceived.length;
                if( !aNumReceivedPaths) {
                    return;
                }



                var someReplacedPaths = [ ];

                for( var aReceivedPathIdx=0; aReceivedPathIdx < aNumReceivedPaths; aReceivedPathIdx++) {

                    var aReceivedPath =  thePathsReceived[ aReceivedPathIdx];
                    if( aReceivedPath) {

                        var someReceivedPathKeys = Object.keys( aReceivedPath);
                        var aNumReceivedPathKeys = someReceivedPathKeys.length;
                        if( aNumReceivedPathKeys) {

                            var aReplacedPath = { };
                            for( var aReceivedPathKeyIdx=0; aReceivedPathKeyIdx < aNumReceivedPathKeys; aReceivedPathKeyIdx++) {

                                var aReceivedPathKey = someReceivedPathKeys[ aReceivedPathKeyIdx];
                                aReplacedPath[ aReceivedPathKey] = aReceivedPath[ aReceivedPathKey];
                            }
                            someReplacedPaths.push( aReplacedPath);
                        }
                    }
                }



                var somePackageNames = { };
                var someReplaceSteps = { };

                somePackageNames[ theM_sentinels.ROOTPATHSTEPSYMBOL] = this.XLOADER_PATH_TO_ROOT;
                someReplaceSteps[ theM_sentinels.ROOTPATHSTEPSYMBOL] = this.XLOADER_PATH_TO_ROOT;


                var aNumResAndPackagePaths = someReplacedPaths.length;

                for( var aResAndPackagePathIdx=0; aResAndPackagePathIdx < aNumResAndPackagePaths; aResAndPackagePathIdx++) {

                    var aResAndPackagePathOrPaths =  someReplacedPaths[ aResAndPackagePathIdx];

                    var aPackagePath = aResAndPackagePathOrPaths[ "packagePath"];
                    if( aPackagePath) {

                        var aPathOrPaths = aResAndPackagePathOrPaths[ "resPath"];
                        if( aPathOrPaths) {

                            var aReplacedPathOrPaths = null;

                            if( typeof aPathOrPaths == "string") {

                                aReplacedPathOrPaths = this.fReplaceInPath( aPathOrPaths, someReplaceSteps);

                                if( !( aReplacedPathOrPaths == aPathOrPaths)) {
                                    aResAndPackagePathOrPaths[ "resPath_OLD"] = aPathOrPaths;
                                    aResAndPackagePathOrPaths[ "resPath"] = aReplacedPathOrPaths;
                                }
                            }
                            else {
                                aReplacedPathOrPaths = aPathOrPaths;

                                aResAndPackagePathOrPaths[ "resPath_OLD"] = aPathOrPaths.slice();

                                var aNumPaths = aPathOrPaths.length;
                                for( var aPathIdx=0; aPathIdx < aNumPaths; aPathIdx++) {

                                    var aPath = aPathOrPaths[ aPathIdx];
                                    if( aPath) {

                                        var otherReplacedPath = this.fReplaceInPath( aPath, someReplaceSteps);

                                        if( !( otherReplacedPath == aPath)) {
                                            aPathOrPaths[ aPathIdx] = otherReplacedPath;
                                        }
                                    }
                                }
                            }

                            if( ( aPackagePath.indexOf( theM_sentinels.PATHSREPLACEABLESYMBOL) == 0)) {
                                someReplaceSteps[ aPackagePath] = aReplacedPathOrPaths;
                            }
                        }
                    }
                }

                if( this.LOGPATHSLOADS) {
                    this.fRecord( theMethodName, this.XLOEVEKIND_LOADED, thePathsReceived, thePathsName);
                }

                theCallback( null, someReplacedPaths);
            };
            if( pReplaceInPathsReceived){}/* CQT */
            aPrototype.pReplaceInPathsReceived = pReplaceInPathsReceived;










            var fReplaceInPath = function( thePath, theReplacements) {

                if( !thePath) {
                    return thePath;
                }

                if( !theReplacements) {
                    return thePath;
                }


                var somePathNameSteps = thePath.split( this.PATHNAMESTEPSEPARATOR);
                if( !somePathNameSteps) {
                    return thePath;
                }

                var aNumPathSteps = somePathNameSteps.length;
                if( !aNumPathSteps) {
                    return thePath;
                }

                var aFirstPathStep = somePathNameSteps[ 0];

                if( !( aFirstPathStep.indexOf( theM_sentinels.PATHSREPLACEABLESYMBOL) == 0)) {
                    return thePath;
                }

                if( !theReplacements.hasOwnProperty( aFirstPathStep)) {
                    return thePath;
                }


                var aReplacement = theReplacements[ aFirstPathStep];
                if( !aReplacement) {
                    aReplacement = "";
                }

                somePathNameSteps[ 0] = aReplacement;

                var aReplacedPath = somePathNameSteps.join( this.PATHNAMESTEPSEPARATOR);
                if( aReplacedPath){}/* CQT */

                return aReplacedPath;

            };
            if( fReplaceInPath){}/* CQT */
            aPrototype.fReplaceInPath = fReplaceInPath;










            return aPrototype;

        })();






        var PathsLoader_Constructor = function( theTitle, thePathsName) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Title      = null;

            this._v_PathsName = null;

            this._v_Records =  null;

            this._v_ResAndPackagePaths        = null;

            this._pInit_PathsLoader( theTitle, thePathsName);
        };
        PathsLoader_Constructor.prototype = aPathsLoader_Prototype;





        var PathsLoader_SuperPrototypeConstructor = function() {
            this._v_Prototype = aPathsLoader_Prototype;
            this._v_Type = null;

            this._v_Title      = null;

            this._v_PathsName = null;

            this._v_Records =  null;

            this._v_ResAndPackagePaths        = null;
        };
        PathsLoader_SuperPrototypeConstructor.prototype = aPathsLoader_Prototype;







        var aRes = {
            "PathsLoader_Prototype": aPathsLoader_Prototype,
            "PathsLoader_Constructor": PathsLoader_Constructor,
            "PathsLoader_SuperPrototypeConstructor": PathsLoader_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aRes);



        aRes.ModuleGlobals = ModuleGlobals;




        return aRes;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../exceptiondetails');
            var aM_pathsrecord      = require('./pathsrecord');
            var aM_nextticker       = require('../../infrasvcs/nextticker/nextticker');
            var aM_httprequest      = require('../../infrasvcs/httprequest/httprequest');
            var aM_callbacker       = require('../callbacker');
            var aM_xloader          = require('../xloader/xloader');
            var aM_overrider        = require('../overrider');
            var aM_sentinels        = require('../sentinels');

            return aMod_definer( aM_exceptiondetails, aM_pathsrecord, aM_nextticker, aM_httprequest, aM_callbacker, aM_xloader, aM_overrider, aM_sentinels);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../exceptiondetails",
            "./pathsrecord",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/httprequest/httprequest",
            "../callbacker",
            "../xloader/xloader",
            "../overrider",
            "../sentinels"
        ], function (
                theM_exceptiondetails,
                theM_pathsrecord,
                theM_nextticker,
                theM_httprequest,
                theM_callbacker,
                theM_xloader,
                theM_overrider,
                theM_sentinels
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_pathsrecord,
                theM_nextticker,
                theM_httprequest,
                theM_callbacker,
                theM_xloader,
                theM_overrider,
                theM_sentinels
            );
        });
    }



}());