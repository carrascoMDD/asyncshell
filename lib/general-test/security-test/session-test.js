'use strict';

/*
 session-test.js
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

    var aMod_definer = function( theM_runsubs_test) {

        var ModuleName     = "session-test";
        var ModulePackages = "general-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.SESSIONLAZY_DEFAULT = false;


            theToInit.PARMSPREFIX_SESSION = "session";

            theToInit.PARM_SESSION_URLPATH = theToInit.PARMSPREFIX_SESSION + ".URLpath";
            theToInit.PARM_SESSION_LAZY    = theToInit.PARMSPREFIX_SESSION + ".lazy";

            theToInit.PARM_LOGINTEST = "logintest";
            theToInit.PARM_ISAUTHENTICATEDTEST = "isauthenticatedtest";


            theToInit.PARM_SESSION_LOGINTESTPARMNAME           = theToInit.PARMSPREFIX_SESSION + ".logintestparmname";
            theToInit.PARM_SESSION_ISAUTHENTICATEDTESTPARMNAME = theToInit.PARMSPREFIX_SESSION + ".isauthenticatedtestparmname";


            theToInit.PARMS_SESSION = [
                theToInit.PARM_SESSION_URLPATH,
                theToInit.PARM_SESSION_LAZY,
                theToInit.PARM_LOGINTEST,
                theToInit.PARM_ISAUTHENTICATEDTEST,
                theToInit.PARM_SESSION_LOGINTESTPARMNAME,
                theToInit.PARM_SESSION_ISAUTHENTICATEDTESTPARMNAME
            ];

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









        var aSessionTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "SessionTest";

            aPrototype._v_Login            = null;
            aPrototype._v_IsAuthenticated  = null;

            aPrototype._v_SessionLazy = null;

            aPrototype._v_AlreadyChecked_SessionLazy = null;


            aPrototype._v_IsInSession      = null;




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated) {

                this._pInit_Session( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Session = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Login            = theLogin;
                this._v_IsAuthenticated  = theIsAuthenticated;

                this._v_SessionLazy = null;

                this._v_IsInSession      = false;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Session", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Session){}/* CQT */
            aPrototype._pInit_Session = _pInit_Session;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Session( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Session = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Session){}/* CQT */
            aPrototype._pRelease_Session = _pRelease_Session;











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

                this.pCleanUpTest_Session( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Session = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Session){}/* CQT */
            aPrototype.pCleanUpTest_Session = pCleanUpTest_Session;








            var pS_CheckLazy = function( theCallback) {

                var aMethodName = "pS_CheckLazy";

                if( !( this._v_SessionLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_SessionLazy = this.fResolvedParmValue(  this.PARM_SESSION_LAZY);
                if( this._v_SessionLazy == null) {
                    this._v_SessionLazy = this.SESSIONLAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;














            var pS_IsInSesssion = function( theCallback) {

                var aMethodName = "pS_IsInSesssion";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);



                if( ( this._v_SessionLazy == true) && ( this._v_IsInSession == true)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }


                this._v_IsInSession = false;


                if( !this._v_Login) {
                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_INFO, null, "!this._v_Login", null);

                    var aLoginTestParmName =  this.fResolvedParmValue(  this.PARM_SESSION_LOGINTESTPARMNAME);
                    if( !aLoginTestParmName) {
                        aLoginTestParmName = this.PARM_LOGINTEST;
                    }

                    this._v_Login = this.fResolvedParmValue(  aLoginTestParmName);
                }
                if( !this._v_Login) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null,  "!this._v_Login", null));
                    return;
                }

                if( !this._v_Login._v_Cookies || !this._v_Login._v_Cookies.length) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null,  "!this._v_Login._v_Cookies || !this._v_Login._v_Cookies.length", null));
                    return;
                }






                if( !this._v_IsAuthenticated) {
                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_INFO, null, "!this._v_IsAuthenticated", null);

                    var anIsAuthenticatedTestParmName =  this.fResolvedParmValue(  this.PARM_SESSION_ISAUTHENTICATEDTESTPARMNAME);
                    if( !anIsAuthenticatedTestParmName) {
                        anIsAuthenticatedTestParmName = this.PARM_ISAUTHENTICATEDTEST;
                    }

                    this._v_IsAuthenticated = this.fResolvedParmValue(  anIsAuthenticatedTestParmName);
                }
                if( !this._v_IsAuthenticated) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null,  "!this._v_IsAuthenticated", null));
                    return;
                }
                if( !this._v_IsAuthenticated._v_IsAuthenticated) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null,  "!this._v_IsAuthenticated._v_IsAuthenticated", null));
                    return;
                }


                this._v_IsInSession = true;

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, this._v_IsInSession, null, null));
            };
            if( pS_IsInSesssion){}/* CQT */
            aPrototype.pS_IsInSesssion = pS_IsInSesssion;













            var pF_Session = function( theCallback) {
                var aMethodName = "pF_Session";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Session){}/* CQT */
            aPrototype.pF_Session = pF_Session;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Session.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Session = function( theCallback) {
                var aMethodName = "pSS_Session";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_IsInSesssion.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Session){}/* CQT */
            aPrototype.pSS_Session = pSS_Session;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);


                var aLoginResultJSON = null;
                if( this._v_Login) {
                    aLoginResultJSON = this._v_Login.fToResultJSON( theCommonObjects, theAlready)
                }

                var aIsAuthenticatedResultJSON = null;
                if( this._v_IsAuthenticated) {
                    aIsAuthenticatedResultJSON = this._v_IsAuthenticated.fToResultJSON( theCommonObjects, theAlready)
                }


                aResultJSON.login           = aLoginResultJSON;
                aResultJSON.isAuthenticated = aIsAuthenticatedResultJSON;

                aResultJSON.isInSession     = this._v_IsInSession;

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;










            var fContributeToRequestData = function( theContributedTo) {
                var aContributedTo = theContributedTo;

                if( !aContributedTo) {
                    aContributedTo = { };
                }

                if( !this._v_IsInSession) {
                   return aContributedTo;
                }

                if( !this._v_Login || !this._v_Login._v_Cookies || !this._v_Login._v_Cookies.length) {
                    return aContributedTo;
                }

                if( !this._v_IsAuthenticated || !this._v_IsAuthenticated._v_IsAuthenticated) {
                    return aContributedTo;
                }

                /* ACV OJO TODO Anadir ala http requests de tests end2end JSON API el header "User-Agent"
                 *   (non-Javadoc)
                 * @see org.springframework.security.web.authentication.AuthenticationSuccessHandler#onAuthenticationSuccess(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, org.springframework.security.core.Authentication)
                 */
                aContributedTo[ "headers"] = {
                    "cookie": this._v_Login._v_Cookies[ 0]
                };


                return aContributedTo;
            };
            if( fContributeToRequestData){}/* CQT */
            aPrototype.fContributeToRequestData = fContributeToRequestData;



            return aPrototype;

        })();




        var SessionTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Login            = null;
            this._v_IsAuthenticated  = null;

            this._v_IsInSession      = null;

            this._pInit_Session( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated);

        };
        SessionTest_Constructor.prototype = aSessionTest_Prototype;





        var SessionTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aSessionTest_Prototype;
            this._v_Type = null;

            this._v_Login            = null;
            this._v_IsAuthenticated  = null;

            this._v_IsInSession      = null;
        };
        SessionTest_SuperPrototypeConstructor.prototype = aSessionTest_Prototype;



        var aModule = {
            "SessionTest_Prototype": aSessionTest_Prototype,
            "SessionTest_Constructor": SessionTest_Constructor,
            "SessionTest_SuperPrototypeConstructor": SessionTest_SuperPrototypeConstructor
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

            return aMod_definer( aM_runsubs_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../common-test/runsubs-test"], function (
            theM_runsubs_test) {
            return aMod_definer( theM_runsubs_test);
        });
    }


}());


