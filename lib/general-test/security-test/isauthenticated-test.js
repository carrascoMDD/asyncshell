'use strict';

/*
 isauthenticated-test.js
 Created 201408050911
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

    var aMod_definer = function( theM_runsubs_test, theM_parms_general) {

        var ModuleName     = "isauthenticated-test";
        var ModulePackages = "general-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.ISAUTHENTICATEDLAZY_DEFAULT = false;

            theToInit.PARMSPREFIX_ISAUTHENTICATED = "isauthenticated";

            theToInit.PARM_ISAUTHENTICATED_URLPATH = theToInit.PARMSPREFIX_ISAUTHENTICATED + ".URLpath";
            theToInit.PARM_ISAUTHENTICATED_LAZY    = theToInit.PARMSPREFIX_ISAUTHENTICATED + ".lazy";

            theToInit.PARM_LOGINTEST = "logintest";

            theToInit.PARM_ISAUTHENTICATED_LOGINTESTPARMNAME = theToInit.PARMSPREFIX_ISAUTHENTICATED + ".logintestparmname";

            theToInit.PARMS_ISAUTHENTICATED = [
                theToInit.PARM_ISAUTHENTICATED_URLPATH,
                theToInit.PARM_ISAUTHENTICATED_LAZY,
                theToInit.PARM_LOGINTEST,
                theToInit.PARM_ISAUTHENTICATED_LOGINTESTPARMNAME
            ];



            theToInit.URLPATH_DEFAULT =   "/securityCheck/isAuthenticatedJSON";

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















        var aIsAuthenticatedTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "IsAuthenticatedTest";


            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_IsAuthenticatedLazy = null;

            aPrototype._v_Login = null;

            aPrototype._v_IsAuthenticated  = null;







            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest) {

                this._pInit_IsAuthenticated( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_IsAuthenticated = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL          = null;
                this._v_URLpath          = null;

                this._v_IsAuthenticatedLazy = null;

                this._v_Login            = theLoginTest;

                this._v_IsAuthenticated  = false;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_IsAuthenticated", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_IsAuthenticated){}/* CQT */
            aPrototype._pInit_IsAuthenticated = _pInit_IsAuthenticated;


















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_IsAuthenticated( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_IsAuthenticated = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_IsAuthenticated){}/* CQT */
            aPrototype._pRelease_IsAuthenticated = _pRelease_IsAuthenticated;











            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_IsAuthenticated( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_IsAuthenticated = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_IsAuthenticated){}/* CQT */
            aPrototype.pCleanUpTest_IsAuthenticated = pCleanUpTest_IsAuthenticated;




            
            







            var fUrlPathDefault = function() {
                return this.URLPATH_DEFAULT;
            };
            if( fUrlPathDefault){}/* CQT */
            aPrototype.fUrlPathDefault = fUrlPathDefault;










            var pS_CheckLazy = function( theCallback) {

                var aMethodName = "pS_CheckLazy";

                if( !( this._v_IsAuthenticatedLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_IsAuthenticatedLazy = this.fResolvedParmValue(  this.PARM_ISAUTHENTICATED_LAZY);
                if( this._v_IsAuthenticatedLazy == null) {
                    this._v_IsAuthenticatedLazy = this.ISAUTHENTICATEDLAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;











            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */



                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {

                    if( ( aThis._v_IsAuthenticatedLazy == true) && ( aThis._v_IsAuthenticated == true)) {
                        var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_ALREADY, null, null, null);
                        theOtherCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, aRecord, null, null));
                        return true;
                    }





                    aThis._v_IsAuthenticated = false;




                    if( !aThis._v_Login) {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_INFO, null, "!aThis._v_Login", null);

                        var aLoginTestParmName =  aThis.fResolvedParmValue(  aThis.PARM_ISAUTHENTICATED_LOGINTESTPARMNAME);
                        if( !aLoginTestParmName) {
                            aLoginTestParmName = aThis.PARM_LOGINTEST;
                        }

                        aThis._v_Login = aThis.fResolvedParmValue(  aLoginTestParmName);
                    }
                    if( !aThis._v_Login) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null,  "!aThis._v_Login", null));
                        return false;
                    }
                    if( !aThis._v_Login._v_Cookies || !aThis._v_Login._v_Cookies.length) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null,  "!aThis._v_Login._v_Cookies || !aThis._v_Login._v_Cookies.length", null));
                        return false;
                    }
                    



                    var otherParmsToResolve = [
                        theM_parms_general.PARM_HITPOINT_BASEURL,
                        aThis.PARM_ISAUTHENTICATED_URLPATH
                    ];

                    var otherParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( otherParmsToResolve);

                    if( !otherParmResolutionsDict) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + otherParmsToResolve.join( ",") + "))", null));
                        return false;
                    }




                    var aBaseURLResolution = otherParmResolutionsDict[ theM_parms_general.PARM_HITPOINT_BASEURL];
                    if( !aBaseURLResolution || !aBaseURLResolution._v_Success || !aBaseURLResolution._v_ParmValue) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + theM_parms_general.PARM_HITPOINT_BASEURL + ")", null));
                        return  false;
                    }
                    aThis._v_BaseURL = aBaseURLResolution._v_ParmValue;




                    var aURLpathResolution = otherParmResolutionsDict[ aThis.PARM_ISAUTHENTICATED_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }


                    return true;

                }).bind( this);
                if( aLazyInitializerFunction){}/* CQT */

                return aLazyInitializerFunction;
            };
            if( fLazyInitializer){}/* CQT */
            aPrototype.fLazyInitializer = fLazyInitializer;







            var fURLpath = function( theCallback) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    if( !aThis._v_BaseURL) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_BaseURL", null));
                        return null;
                    }


                    var aURLpath = aThis._v_URLpath;
                    if( !aURLpath) {
                        aURLpath = aThis.fUrlPathDefault();
                    }
                    if( !aURLpath) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aURLpath", null));
                        return null;
                    }

                    var aURL = aThis._v_BaseURL + aURLpath;
                    if( aURL){}/* CQT */
                    return aURL;
                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fURLpath){}/* CQT */
            aPrototype.fURLpath = fURLpath;






            var fRequestData = function( theCallback, theMethodName) {
                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    if( !aThis._v_Login || !aThis._v_Login._v_Cookies || !aThis._v_Login._v_Cookies.length) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Login || !aThis._v_Login._v_Cookies || !aThis._v_Login._v_Cookies.length", null));
                        return null;
                    }


                    /* ACV OJO TODO Anadir ala http requests de tests end2end JSON API el header "User-Agent"
                     *   (non-Javadoc)
                     * @see org.springframework.security.web.authentication.AuthenticationSuccessHandler#onAuthenticationSuccess(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, org.springframework.security.core.Authentication)
                     */
                    return {
                        "headers": {
                            cookie: aThis._v_Login._v_Cookies[ 0]
                        },
                        "json": true
                    };
                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fRequestData){}/* CQT */
            aPrototype.fRequestData = fRequestData;







            var fRequiredStatusCode = function( theCallback) {
                if( theCallback){}/* CQT */
                return 200;
            };
            if( fRequiredStatusCode){}/* CQT */
            aPrototype.fRequiredStatusCode = fRequiredStatusCode;






            var fResultParser = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aResultParserFunction = (function( theCallback, theError, theResponse, theBody) {
                    if( theBody){}/* CQT */

                    if( theResponse.body == null) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "theResponse.body == null", null));
                        return false;
                    }

                    aThis._v_IsAuthenticated = theResponse.body == true;

                    if( !aThis._v_IsAuthenticated) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_DIDNOTWORK, null, "!aThis._v_IsAuthenticated", null));
                        return  false;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aThis._v_IsAuthenticated, "theResponse.body == true", null);


                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_IsAuthenticated = function( theCallback) {

                var aMethodName = "pS_IsAuthenticated";
                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( ( this._v_IsAuthenticatedLazy == true) && ( this._v_IsAuthenticated == true)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }


                
                var aLazyInitializer    = this.fLazyInitializer( theCallback, aMethodName);
                var aURLpath            = this.fURLpath( theCallback);
                var aRequestData        = this.fRequestData( theCallback, aMethodName);
                var aRequiredStatusCode = this.fRequiredStatusCode( theCallback);
                var aResultParser       = this.fResultParser( theCallback, aMethodName);

                this.pS_AsyncRequestGet(
                    theCallback,
                    aMethodName,
                    aLazyInitializer,
                    aURLpath,
                    aRequestData,
                    aRequiredStatusCode,
                    aResultParser
                );
            };
            if( pS_IsAuthenticated){}/* CQT */
            aPrototype.pS_IsAuthenticated = pS_IsAuthenticated;







            var pF_IsAuthenticated = function( theCallback) {
                var aMethodName = "pF_IsAuthenticated";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_IsAuthenticated){}/* CQT */
            aPrototype.pF_IsAuthenticated = pF_IsAuthenticated;







            var fOwnTestMethodToRun = function() {
                return this.pSS_IsAuthenticated.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;







            var pSS_IsAuthenticated = function( theCallback) {
                var aMethodName = "pSS_IsAuthenticated";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_IsAuthenticated.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_IsAuthenticated){}/* CQT */
            aPrototype.pSS_IsAuthenticated = pSS_IsAuthenticated;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);


                aResultJSON.isAuthenticated     = this._v_IsAuthenticated;
                aResultJSON.lazy = this._v_IsAuthenticatedLazy ? true : false;


                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();




        var IsAuthenticatedTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL          = null;
            this._v_URLpath          = null;

            this._v_Login            = null;
            this._v_IsAuthenticated  = null;
            this._v_IsAuthenticatedLazy = null;

            this._pInit_IsAuthenticated( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest);

        };
        IsAuthenticatedTest_Constructor.prototype = aIsAuthenticatedTest_Prototype;





        var IsAuthenticatedTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aIsAuthenticatedTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL          = null;
            this._v_URLpath          = null;

            this._v_Login            = null;
            this._v_IsAuthenticated  = null;
            this._v_IsAuthenticatedLazy = null;
        };
        IsAuthenticatedTest_SuperPrototypeConstructor.prototype = aIsAuthenticatedTest_Prototype;



        var aModule = {
            "IsAuthenticatedTest_Prototype": aIsAuthenticatedTest_Prototype,
            "IsAuthenticatedTest_Constructor": IsAuthenticatedTest_Constructor,
            "IsAuthenticatedTest_SuperPrototypeConstructor": IsAuthenticatedTest_SuperPrototypeConstructor
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

            var aM_runsubs_test  = require('../../common-test/runsubs-test');
            var aM_parms_general = require('../parms-general');
            var aM_login_test    = require('./login-test');

            return aMod_definer( aM_runsubs_test, aM_parms_general, aM_login_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../common-test/runsubs-test",
            "../parms-general",
            "./login-test"], function (
            theM_runsubs_test, theM_parms_general, theM_login_test) {
            return aMod_definer( theM_runsubs_test, theM_parms_general, theM_login_test);
        });
    }


}());


