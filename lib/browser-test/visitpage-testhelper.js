
'use strict';

/*
 visitpage-testhelper.js
 Creado 201410191958
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
    var aMod_definer = function( theM_common_testhelper,
                                 theM_forcedexception,
                                 theM_parms_general,
                                 theM_overrider) {

        var ModuleName     = "visitpage-testhelper";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.SLEEPATPAGEVISIT   = 1;
            theToInit.SLEEPATMISSINGPARM = 1;
            theToInit.SLEEPATEMPTYSTEP   = 1;
            theToInit.SLEEPATCHECKSCOMPLETED   = 1;

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


            theToInit.PARM_VISITPAGE = "visit";

            theToInit.PARM_VISITPAGE_NAME              = "name";
            theToInit.PARM_VISITPAGE_FULLURL           = "visitFullURL";
            theToInit.PARM_VISITPAGE_URL               = "visitURL";
            theToInit.PARM_VISITPAGE_ISANGULAR         = "isAngular";
            theToInit.PARM_VISITPAGE_EXPECTEDPAGETITLE = "expectedPageTitle";
            theToInit.PARM_VISITPAGE_DOMELEMENTCHECKS  = "domElementChecks";



            theToInit.PARMS_VISITPAGE = [
                theToInit.PARM_VISITPAGE_NAME,
                theToInit.PARM_VISITPAGE_FULLURL,
                theToInit.PARM_VISITPAGE_URL,
                theToInit.PARM_VISITPAGE_ISANGULAR,
                theToInit.PARM_VISITPAGE_EXPECTEDPAGETITLE,
                theToInit.PARM_VISITPAGE_DOMELEMENTCHECKS
            ];




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













        var aVisitPageTestHelper_Prototype = (function() {


            var aPrototype = new theM_common_testhelper.CommonTestHelper_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            aPrototype._v_Type = "VisitPageTestHelper";

            aPrototype._v_Module = null;


            aPrototype._v_ProtractorTest = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest) {

                this._pInit_VisitPageTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_VisitPageTestHelper = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_CommonTestHelper.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_ProtractorTest = theProtractorTest;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_VisitPageTestHelper", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_VisitPageTestHelper){}/* CQT */
            aPrototype._pInit_VisitPageTestHelper = _pInit_VisitPageTestHelper;












            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_VisitPageTestHelper( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;








            var _pRelease_VisitPageTestHelper = function( theReleaseParms, theReleaseDone) {


                this._v_ProtractorTest = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_CommonTestHelper.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_VisitPageTestHelper){}/* CQT */
            aPrototype._pRelease_VisitPageTestHelper = _pRelease_VisitPageTestHelper;

















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

                this.pCleanUpTest_VisitPageTestHelper( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_VisitPageTestHelper = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_CommonTestHelper.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_VisitPageTestHelper){}/* CQT */
            aPrototype.pCleanUpTest_VisitPageTestHelper = pCleanUpTest_VisitPageTestHelper;














            var fAtPtr_AtPageVisit= function() {
                return browser.sleep( this.SLEEPATPAGEVISIT);
            };
            if( fAtPtr_AtPageVisit){}/* CQT */
            aPrototype.fAtPtr_AtPageVisit = fAtPtr_AtPageVisit;






            var fAtPtr_MissingParm = function() {
                return browser.sleep( this.SLEEPATMISSINGPARM);
            };
            if( fAtPtr_MissingParm){}/* CQT */
            aPrototype.fAtPtr_MissingParm = fAtPtr_MissingParm;




            var fAtPtr_EmptyStep = function() {
                return browser.sleep( this.SLEEPATEMPTYSTEP);
            };
            if( fAtPtr_EmptyStep){}/* CQT */
            aPrototype.fAtPtr_EmptyStep = fAtPtr_EmptyStep;





            var fAtPtr_ChecksCompleted = function() {
                return browser.sleep( this.SLEEPATCHECKSCOMPLETED);
            };
            if( fAtPtr_ChecksCompleted){}/* CQT */
            aPrototype.fAtPtr_ChecksCompleted = fAtPtr_ChecksCompleted;






            var fItPtrFunction_VisitPage = function( theHelperParms) {

                var someHelperParms = theHelperParms;

                var aThis = this;
                var aDoPtrFunction_VisitPage = (function() {

                    var someHelperParms_here = someHelperParms;
                    var aThis_here = aThis;

                    return (function() {

                        var aThis_here_here = aThis_here;

                        var someParmsVisitPage = someHelperParms_here[ aThis_here.PARM_VISITPAGE];
                        if( !someParmsVisitPage) {
                            return aThis_here.fAtPtr_MissingParm();
                        }

                        var aFullVisitURL            = someParmsVisitPage[ aThis_here.PARM_VISITPAGE_FULLURL];
                        var aVisitURL                = someParmsVisitPage[ aThis_here.PARM_VISITPAGE_URL];
                        var aIsAngular               = someParmsVisitPage[ aThis_here.PARM_VISITPAGE_ISANGULAR];
                        var aExpectedPageTitle       = someParmsVisitPage[ aThis_here.PARM_VISITPAGE_EXPECTEDPAGETITLE];
                        var someDomElementChecks     = someParmsVisitPage[ aThis_here.PARM_VISITPAGE_DOMELEMENTCHECKS];

                        var aURL = aFullVisitURL;
                        if( !aURL) {
                            var aBaseURL = null;
                            if( aThis_here._v_ProtractorTest) {
                                aBaseURL = aThis_here._v_ProtractorTest.PROTRACTOR_HITPOINT;
                            }
                            if( !aBaseURL) {
                                aBaseURL = aThis_here.fResolvedParmValue( theM_parms_general.PARM_HITPOINT_BASEURL);
                            }
                            if( !aBaseURL) {
                                aBaseURL = "";
                            }

                            aURL = aBaseURL + aVisitURL;
                        }



                        browser.ignoreSynchronization = aIsAngular ? false : true;



                        var aBrowserGetPromise = browser.get( aURL);

                        var anAfterBrowserGetPromise = aBrowserGetPromise;

                        if( aIsAngular) {
                            anAfterBrowserGetPromise =
                                aBrowserGetPromise
                                .then( function() {
                                    return browser.waitForAngular();
                                });
                        }



                        return anAfterBrowserGetPromise
                            .then( function() {
                                if( !( aExpectedPageTitle == null)) {
                                    expect( browser.getTitle()).toEqual( aExpectedPageTitle);
                                }
                                
                                if( someDomElementChecks) {

                                    var aNumDomElementChecks = someDomElementChecks.length;
                                    for( var anDomElementCheckIdx=0; anDomElementCheckIdx < aNumDomElementChecks; anDomElementCheckIdx++) {

                                        var anDomElementCheck = someDomElementChecks[ anDomElementCheckIdx];
                                        if( anDomElementCheck) {

                                            var aDomId = anDomElementCheck[ "domId"];
                                            if( aDomId) {

                                                var aText = anDomElementCheck[ "text"];
                                                var aIsRegexp  = anDomElementCheck[ "isRegexp"];

                                                if( !( typeof aText == "undefined") && !( aText == null)) {

                                                    if( aIsRegexp) {
                                                        var aRegexp = new RegExp( aText);
                                                        expect( element( by.id( aDomId)).getText()).toMatch( aRegexp);
                                                    }
                                                    else {
                                                        expect( element( by.id( aDomId)).getText()).toEqual( aText);
                                                    }
                                                }
                                            }

                                        }
                                    }
                                }

                                return aThis_here_here.fAtPtr_AtPageVisit();
                            });

                    });

                })();
                if( aDoPtrFunction_VisitPage){}/* CQT */

                return aDoPtrFunction_VisitPage;
            };
            if( fItPtrFunction_VisitPage){}/* CQT */
            aPrototype.fItPtrFunction_VisitPage = fItPtrFunction_VisitPage;


            
            



            var pDoPtr_VisitPage = function( theHelperParms) {

                if( !theHelperParms) {
                    return;
                }

                var aItPtrFunction_VisitPage = this.fItPtrFunction_VisitPage( theHelperParms);
                if( !aItPtrFunction_VisitPage) {
                    return;
                }

                var aHelperName = null;
                var someParmsLogin = theHelperParms[ this.PARM_VISITPAGE];
                if( someParmsLogin) {
                    aHelperName = someParmsLogin[ this.PARM_VISITPAGE_NAME];
                }
                if( !aHelperName) {
                    aHelperName = "UnnamedHelper";
                }




                /* ******************************************
                 Submit a protractor/jasmine "it"

                 Shall schedule tests when ItPtrFunction is executed
                 */

                it( aHelperName, aItPtrFunction_VisitPage);


            };
            if( pDoPtr_VisitPage){}/* CQT */
            aPrototype.pDoPtr_VisitPage = pDoPtr_VisitPage;






            return aPrototype;

        })();




        var VisitPageTestHelper_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ProtractorTest = null;

            this._pInit_VisitPageTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest);

        };
        VisitPageTestHelper_Constructor.prototype = aVisitPageTestHelper_Prototype;





        var VisitPageTestHelper_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = aVisitPageTestHelper_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ProtractorTest = null;
        };
        VisitPageTestHelper_SuperPrototypeConstructor.prototype = aVisitPageTestHelper_Prototype;



        var aModule = {
            "VisitPageTestHelper_Prototype": aVisitPageTestHelper_Prototype,
            "VisitPageTestHelper_Constructor": VisitPageTestHelper_Constructor,
            "VisitPageTestHelper_SuperPrototypeConstructor": VisitPageTestHelper_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aVisitPageTestHelper_Prototype._v_Module = aModule;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_common_testhelper   = require('./common-testhelper');
            var aM_forcedexception     = require('../common-test/forcedexception');
            var aM_parms_general       = require('../general-test/parms-general');
            var aM_overrider           = require('../common-test/overrider');

            return aMod_definer(
                aM_common_testhelper,
                aM_forcedexception,
                aM_parms_general,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./common-testhelper",
            "../common-test/forcedexception",
            "../general-test/parms-general",
            "../common-test/overrider"
        ], function (
            theM_common_testhelper,
            theM_forcedexception,
            theM_parms_general,
            theM_overrider
            ) {
            return aMod_definer(
                theM_common_testhelper,
                theM_forcedexception,
                theM_parms_general,
                theM_overrider
            );
        });
    }


}());


































