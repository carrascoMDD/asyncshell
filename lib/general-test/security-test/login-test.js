'use strict';

/*
 login-test.js
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

    var aMod_definer = function( theM_runsubs_test, theM_parms_general, theM_parms_credentials) {

        var ModuleName     = "login-test";
        var ModulePackages = "general-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGINLAZY_DEFAULT = false;


            theToInit.PARMSPREFIX_LOGIN = "login";


            theToInit.PARM_LOGIN_URLPATH = theToInit.PARMSPREFIX_LOGIN + ".URLpath";
            theToInit.PARM_LOGIN_LAZY    = theToInit.PARMSPREFIX_LOGIN + ".lazy";

            theToInit.PARMS_LOGIN = [
                theToInit.PARM_LOGIN_URLPATH,
                theToInit.PARM_LOGIN_LAZY
            ];




            theToInit.URLPATH_DEFAULT =  "/resources/j_spring_security_check";

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








        var aLoginTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "LoginTest";

            aPrototype._v_Cookies = null;

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;
            aPrototype._v_Username = null;
            aPrototype._v_Password = null;

            aPrototype._v_LoginLazy  = null;



            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Login( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Login = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;
                this._v_Username = null;
                this._v_Password = null;

                this._v_LoginLazy = null;

                this._v_Cookies = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Login", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Login){}/* CQT */
            aPrototype._pInit_Login = _pInit_Login;























            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Login( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Login = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Login){}/* CQT */
            aPrototype._pRelease_Login = _pRelease_Login;











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

                this.pCleanUpTest_Login( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Login = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Login){}/* CQT */
            aPrototype.pCleanUpTest_Login = pCleanUpTest_Login;














            var fUrlPathDefault = function() {
                return this.URLPATH_DEFAULT;
            };
            if( fUrlPathDefault){}/* CQT */
            aPrototype.fUrlPathDefault = fUrlPathDefault;









            var pS_CheckLazy = function( theCallback) {

                var aMethodName = "pS_CheckLazy";

                if( !( this._v_LoginLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_LoginLazy = this.fResolvedParmValue(  this.PARM_LOGIN_LAZY);
                if( this._v_LoginLazy == null) {
                    this._v_LoginLazy = this.LOGINLAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;








            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {

                    if( !aThis._v_Configuration) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration", null));
                        return  false;
                    }

                    var someParmsToResolve = [
                        theM_parms_general.PARM_HITPOINT_BASEURL,
                        theM_parms_credentials.PARM_CREDENTIALS_USERNAME,
                        theM_parms_credentials.PARM_CREDENTIALS_PASSWORD,
                        aThis.PARM_LOGIN_URLPATH,
                        aThis.PARM_LOGIN_LAZY
                    ];

                    var aParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                    if( !aParmResolutionsDict) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                        return  false;
                    }



                    aThis._v_Cookies = null;

                    var aBaseURLResolution = aParmResolutionsDict[ theM_parms_general.PARM_HITPOINT_BASEURL];
                    if( !aBaseURLResolution || !aBaseURLResolution._v_Success || !aBaseURLResolution._v_ParmValue) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + theM_parms_general.PARM_HITPOINT_BASEURL + ")", null));
                        return  false;
                    }
                    aThis._v_BaseURL = aBaseURLResolution._v_ParmValue;


                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_LOGIN_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }


                    var aUsernameResolution = aParmResolutionsDict[ theM_parms_credentials.PARM_CREDENTIALS_USERNAME];
                    if( !aUsernameResolution || !aUsernameResolution._v_Success || !aUsernameResolution._v_ParmValue) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + theM_parms_credentials.PARM_CREDENTIALS_USERNAME + ")", null));
                        return false;
                    }
                    aThis._v_Username = aUsernameResolution._v_ParmValue;

                    
                    var aPasswordResolution = aParmResolutionsDict[ theM_parms_credentials.PARM_CREDENTIALS_PASSWORD];
                    if( !aPasswordResolution || !aPasswordResolution._v_Success || !aPasswordResolution._v_ParmValue) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + theM_parms_credentials.PARM_CREDENTIALS_PASSWORD + ")", null));
                        return false;
                    }
                    aThis._v_Password = aPasswordResolution._v_ParmValue;


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

                    if( !aThis._v_Username) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Username", null));
                        return null;
                    }

                    if( !aThis._v_Password) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Password", null));
                        return null;
                    }

                    return {
                        "form": {
                            "j_username": aThis._v_Username,
                            "j_password": aThis._v_Password,
                            "login": null
                        }
                    };
                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fRequestData){}/* CQT */
            aPrototype.fRequestData = fRequestData;







            var fRequiredStatusCode = function( theCallback) {
                if( theCallback){}/* CQT */
                return 302;
            };
            if( fRequiredStatusCode){}/* CQT */
            aPrototype.fRequiredStatusCode = fRequiredStatusCode;






            var fResultParser = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aResultParserFunction = (function( theCallback, theError, theResponse, theBody) {
                    if( theBody){}/* CQT */

                    var aSetCookie = theResponse.headers[ "set-cookie"];
                    if( !aSetCookie) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!theResponse.headers[ 'set-cookie']", null));
                        return false;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aSetCookie, "theResponse.headers[ 'set-cookie']", null);

                    aThis._v_Cookies = aSetCookie;

                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;






            var pS_login = function( theCallback) {

                var aMethodName = "pS_login";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( ( this._v_LoginLazy == true) && this._v_Cookies && this._v_Cookies.length) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }


                var aLazyInitializer    = this.fLazyInitializer( theCallback, aMethodName);
                var aURLpath            = this.fURLpath( theCallback);
                var aRequestData        = this.fRequestData( theCallback, aMethodName);
                var aRequiredStatusCode = this.fRequiredStatusCode( theCallback);
                var aResultParser       = this.fResultParser( theCallback, aMethodName);

                this.pS_AsyncRequestPost(
                    theCallback,
                    aMethodName,
                    aLazyInitializer,
                    aURLpath,
                    aRequestData,
                    aRequiredStatusCode,
                    aResultParser
                );
            };
            if( pS_login){}/* CQT */
            aPrototype.pS_login = pS_login;








            var pF_Login = function( theCallback) {
                var aMethodName = "pF_Login";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Login){}/* CQT */
            aPrototype.pF_Login = pF_Login;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Login.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Login = function( theCallback) {
                var aMethodName = "pSS_Login";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_login.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Login){}/* CQT */
            aPrototype.pSS_Login = pSS_Login;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = null;
                if( !( aPrototype._v_SuperPrototype.fToResultJSON === fToResultJSON)) {
                    aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);
                }
                else {
                    aResultJSON = {};
                }

                aResultJSON.cookies    = this._v_Cookies;

                aResultJSON.lazy = this._v_LoginLazy ? true : false;


                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();




        var LoginTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Cookies = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;
            this._v_Username = null;
            this._v_Password = null;

            this._v_LoginLazy = false;

            this._pInit_Login( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        LoginTest_Constructor.prototype = aLoginTest_Prototype;





        var LoginTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aLoginTest_Prototype;
            this._v_Type = null;

            this._v_Cookies = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;
            this._v_Username = null;
            this._v_Password = null;

            this._v_LoginLazy = null;
        };
        LoginTest_SuperPrototypeConstructor.prototype = aLoginTest_Prototype;



        var aModule = {
            "LoginTest_Prototype": aLoginTest_Prototype,
            "LoginTest_Constructor": LoginTest_Constructor,
            "LoginTest_SuperPrototypeConstructor": LoginTest_SuperPrototypeConstructor
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

            var aM_runsubs_test       = require('../../common-test/runsubs-test');

            var aM_parms_general       = require('../parms-general');
            var aM_parms_credentials   = require('./parms-credentials');


            return aMod_definer( aM_runsubs_test, aM_parms_general, aM_parms_credentials);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([ "../../common-test/runsubs-test", "../parms-general", "./parms-credentials"], function (
            theM_runsubs_test, theM_parms_general, theM_parms_credentials) {
            return aMod_definer( theM_runsubs_test, theM_parms_general, theM_parms_credentials);
        });
    }


}());


