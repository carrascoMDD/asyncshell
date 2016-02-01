
'use strict';

/*
 visitmanypages-testhelper.js
 Created 201502130031
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
    var aMod_definer = function( theM_common_testhelper,
                                 theM_forcedexception,
                                 theM_parms_general,
                                 theM_overrider,
                                 theM_sentinels) {

        var ModuleName     = "visitmanypages-testhelper";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.SLEEPATPAGEVISIT   = 1;
            theToInit.SLEEPATMISSINGPARM = 1;
            theToInit.SLEEPATEMPTYSTEP   = 1;
            theToInit.SLEEPATCHECKSCOMPLETED   = 1;

            theToInit.IGNOREURLPREFIX = "!IGNORE!";

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


            theToInit.PARM_VISITMANYPAGES = "visit";

            theToInit.PARM_VISITMANYPAGES_NAME              = "name";
            theToInit.PARM_VISITMANYPAGES_FULLURLS          = "visitFullURLs";
            theToInit.PARM_VISITMANYPAGES_URLS              = "visitURLs";
            theToInit.PARM_VISITMANYPAGES_FULLURL           = "visitFullURL";
            theToInit.PARM_VISITMANYPAGES_URL               = "visitURL";
            theToInit.PARM_VISITMANYPAGES_ISANGULAR         = "isAngular";
            theToInit.PARM_VISITMANYPAGES_EXPECTEDPAGETITLE = "expectedPageTitle";
            theToInit.PARM_VISITMANYPAGES_DOMELEMENTCHECKS  = "domElementChecks";


            theToInit.PARMS_VISITMANYPAGES = [
                theToInit.PARM_VISITMANYPAGES_NAME,
                theToInit.PARM_VISITMANYPAGES_FULLURLS,
                theToInit.PARM_VISITMANYPAGES_URLS,
                theToInit.PARM_VISITMANYPAGES_ISANGULAR,
                theToInit.PARM_VISITMANYPAGES_EXPECTEDPAGETITLE,
                theToInit.PARM_VISITMANYPAGES_DOMELEMENTCHECKS
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













        var aVisitManyPagesTestHelper_Prototype = (function() {


            var aPrototype = new theM_common_testhelper.CommonTestHelper_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            aPrototype._v_Type = "VisitManyPagesTestHelper";

            aPrototype._v_Module = null;


            aPrototype._v_ProtractorTest = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest) {

                this._pInit_VisitManyPagesTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_VisitManyPagesTestHelper = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_CommonTestHelper.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_ProtractorTest = theProtractorTest;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_VisitManyPagesTestHelper", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_VisitManyPagesTestHelper){}/* CQT */
            aPrototype._pInit_VisitManyPagesTestHelper = _pInit_VisitManyPagesTestHelper;













            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_VisitManyPagesTestHelper( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;








            var _pRelease_VisitManyPagesTestHelper = function( theReleaseParms, theReleaseDone) {


                if( this._v_ProtractorTest) {
                    if( typeof this._v_ProtractorTest._pRelease == "function") {
                        this._v_ProtractorTest._pRelease( theReleaseParms, theReleaseDone);
                    }
                }

                this._v_ProtractorTest = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_CommonTestHelper.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_VisitManyPagesTestHelper){}/* CQT */
            aPrototype._pRelease_VisitManyPagesTestHelper = _pRelease_VisitManyPagesTestHelper;








            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

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

                this.pCleanUpTest_VisitManyPagesTestHelper( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_VisitManyPagesTestHelper = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_CommonTestHelper.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_VisitManyPagesTestHelper){}/* CQT */
            aPrototype.pCleanUpTest_VisitManyPagesTestHelper = pCleanUpTest_VisitManyPagesTestHelper;
















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






            var fItPtrFunction_VisitManyPages = function( theHelperParms) {

                var someHelperParms = theHelperParms;

                var aThis = this;
                var aDoPtrFunction_VisitManyPages = (function() {

                    var someHelperParms_here = someHelperParms;
                    var aThis_here = aThis;

                    return (function() {

                        var aThis_here_here = aThis_here;

                        var someParmsVisitManyPages = someHelperParms_here[ aThis_here.PARM_VISITMANYPAGES];
                        if( !someParmsVisitManyPages) {
                            return aThis_here.fAtPtr_MissingParm();
                        }

                        var aFullVisitURL            = someParmsVisitManyPages[ aThis_here.PARM_VISITMANYPAGES_FULLURL];
                        var aVisitURL                = someParmsVisitManyPages[ aThis_here.PARM_VISITMANYPAGES_URL];
                        var aIsAngular               = someParmsVisitManyPages[ aThis_here.PARM_VISITMANYPAGES_ISANGULAR];
                        var aExpectedPageTitle       = someParmsVisitManyPages[ aThis_here.PARM_VISITMANYPAGES_EXPECTEDPAGETITLE];
                        var someDomElementChecks     = someParmsVisitManyPages[ aThis_here.PARM_VISITMANYPAGES_DOMELEMENTCHECKS];

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
                if( aDoPtrFunction_VisitManyPages){}/* CQT */

                return aDoPtrFunction_VisitManyPages;
            };
            if( fItPtrFunction_VisitManyPages){}/* CQT */
            aPrototype.fItPtrFunction_VisitManyPages = fItPtrFunction_VisitManyPages;


            
            







            var pDoPtr_VisitManyPages = function( theHelperParms) {

                if( !theHelperParms) {
                    return;
                }

                var aBaseURL = null;
                if( this._v_ProtractorTest) {
                    aBaseURL = this._v_ProtractorTest.PROTRACTOR_HITPOINT;
                }
                if( !aBaseURL) {
                    aBaseURL = this.fResolvedParmValue( theM_parms_general.PARM_HITPOINT_BASEURL);
                }
                if( !aBaseURL) {
                    aBaseURL = "";
                }


                var aHelperName = null;
                var someParmsLogin = theHelperParms[ this.PARM_VISITMANYPAGES];
                if( someParmsLogin) {
                    aHelperName = someParmsLogin[ this.PARM_VISITMANYPAGES_NAME];
                }
                if( !aHelperName) {
                    aHelperName = "UnnamedHelper";
                }


                var aExpectedPageTitle = null;

                var someURLsAndTitlesToVisit = [ ];
                var aURLsAreFull = false;

                var someParmsVisitManyPages = theHelperParms[ this.PARM_VISITMANYPAGES];
                if( someParmsVisitManyPages) {

                    aExpectedPageTitle = someParmsVisitManyPages[ this.PARM_VISITMANYPAGES_EXPECTEDPAGETITLE];

                    var someFullVisitURLsAndTitles = someParmsVisitManyPages[ this.PARM_VISITMANYPAGES_FULLURLS];
                    var someVisitURLsAndTitles     = someParmsVisitManyPages[ this.PARM_VISITMANYPAGES_URLS];

                    if( someFullVisitURLsAndTitles) {
                        aURLsAreFull = true;
                        someURLsAndTitlesToVisit = someFullVisitURLsAndTitles;
                    }
                    else {
                        someURLsAndTitlesToVisit = someVisitURLsAndTitles;
                    }
                }


                if( !someURLsAndTitlesToVisit) {
                    return;
                }

                var aNumURLsAndTitlesToVisitURLs = someURLsAndTitlesToVisit.length;
                if( !aNumURLsAndTitlesToVisitURLs) {
                    return;
                }

                var someResolvedParmValuesByName = { };

                for( var aURLToVisitIdx=0; aURLToVisitIdx < aNumURLsAndTitlesToVisitURLs; aURLToVisitIdx++) {

                    var aURLAndTitleToVisit = someURLsAndTitlesToVisit[ aURLToVisitIdx];
                    if( aURLAndTitleToVisit) {

                        var aURL             = null;
                        var aTitle           = null;
                        var someReplaceURL   = null;
                        var someReplaceTitle = null;

                        if( typeof aURLAndTitleToVisit == "string") {
                            aURL   = aURLAndTitleToVisit;
                        }
                        else {
                            aURL             = aURLAndTitleToVisit[ "url"];
                            aTitle           = aURLAndTitleToVisit[ "title"];
                            someReplaceURL   = aURLAndTitleToVisit[ "replaceURL"];
                            someReplaceTitle = aURLAndTitleToVisit[ "replaceTitle"];
                        }

                        if( !aURL) {
                            continue;
                        }

                        if( aURL.indexOf( this.IGNOREURLPREFIX) == 0) {
                            continue;
                        }

                        if( !aTitle) {
                            aTitle = aExpectedPageTitle;
                        }

                        if( someReplaceURL) {
                            var aNumReplaceURL = someReplaceURL.length;
                            if( aNumReplaceURL) {
                                for( var aReplaceURLidx=0; aReplaceURLidx < aNumReplaceURL; aReplaceURLidx++) {
                                    var aReplaceURL = someReplaceURL[ aReplaceURLidx];
                                    if( aReplaceURL && ( aReplaceURL.length > 1)) {

                                        var aToReplaceURL           = aReplaceURL[ 0];
                                        var aReplacementURLParmName = aReplaceURL[ 1];
                                        if( !aToReplaceURL) {
                                            continue;
                                        }
                                        var aReplacementValue = null;
                                        if( aReplacementURLParmName) {
                                            if( someResolvedParmValuesByName.hasOwnProperty( aReplacementURLParmName)) {
                                                aReplacementValue = someResolvedParmValuesByName[ aReplacementURLParmName];
                                            }
                                            else {
                                                /* ACV OJO 201504052359 TODO Asegurarse que no rompe al cambiar  fResolvedParmValue por fParmValueReplacement

                                                 */

                                                var aReplacementURLParmNameWithPrefix = theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX + aReplacementURLParmName;
                                                aReplacementValue = this.fParmValueReplacement( aReplacementURLParmNameWithPrefix);
                                                if( !( typeof aReplacementValue == "undefined")) {
                                                    someResolvedParmValuesByName[ aReplacementURLParmName] = aReplacementValue;
                                                }
                                            }
                                        }
                                        if( !aReplacementValue) {
                                            aReplacementValue = "";
                                        }
                                        var aReplacedURL = aURL.replace( aToReplaceURL, aReplacementValue);
                                        if( aReplacedURL){}/* CQT */
                                        aURL = aReplacedURL;
                                    }
                                }
                            }
                        }


                        if( someReplaceTitle) {
                            var aNumReplaceTitle = someReplaceTitle.length;
                            if( aNumReplaceTitle) {
                                for( var aReplaceTitleidx=0; aReplaceTitleidx < aNumReplaceTitle; aReplaceTitleidx++) {
                                    var aReplaceTitle = someReplaceTitle[ aReplaceTitleidx];
                                    if( aReplaceTitle && ( aReplaceTitle.length > 1)) {

                                        var aToReplaceTitle           = aReplaceTitle[ 0];
                                        var aReplacementTitleParmName = aReplaceTitle[ 1];
                                        if( !aToReplaceTitle) {
                                            continue;
                                        }
                                        var aReplacementTitleValue = null;
                                        if( aReplacementTitleParmName) {
                                            if( someResolvedParmValuesByName.hasOwnProperty( aReplacementTitleParmName)) {
                                                aReplacementTitleValue = someResolvedParmValuesByName[ aReplacementTitleParmName];
                                            }
                                            else {
                                                aReplacementTitleValue = this.fResolvedParmValue( aReplacementTitleParmName);
                                                if( !( typeof aReplacementTitleValue == "undefined")) {
                                                    someResolvedParmValuesByName[ aReplacementTitleParmName] = aReplacementTitleValue;
                                                }
                                            }
                                        }
                                        if( !aReplacementTitleValue) {
                                            aReplacementTitleValue = "";
                                        }
                                        var aReplacedTitle = aTitle.replace( aToReplaceTitle, aReplacementTitleValue);
                                        if( aReplacedTitle){}/* CQT */
                                        aTitle = aReplacedTitle;
                                    }
                                }
                            }
                        }

                        if( !aURL) {
                            continue;
                        }

                        var aURLAndTitle = {
                            "url":   aURL,
                            "title": aTitle
                        };

                        var aHelperParms = this.fCopyHelperParms( theHelperParms, aURLsAreFull, aURLAndTitle);

                        var aItPtrFunction_VisitPage = this.fItPtrFunction_VisitManyPages( aHelperParms);
                        if( aItPtrFunction_VisitPage && ( typeof aItPtrFunction_VisitPage == "function")) {

                            /* ******************************************
                            Submit a protractor/jasmine "it"

                            Shall schedule tests when ItPtrFunction is executed
                            */

                            it( aHelperName, aItPtrFunction_VisitPage);
                        }
                    }
                }

            };
            if( pDoPtr_VisitManyPages){}/* CQT */
            aPrototype.pDoPtr_VisitManyPages = pDoPtr_VisitManyPages;









            var fCopyHelperParms = function( theHelperParms, theURLsAreFull, theURLAndTitle) {

                if( !theHelperParms) {
                    return null;
                }

                if( !theURLAndTitle) {
                    return null;
                }

                var aURL   = theURLAndTitle[ "url"];
                if( !aURL) {
                    return null;
                }


                var aVisitParm = theHelperParms[ this.PARM_VISITMANYPAGES];
                if( !aVisitParm) {
                    return {};
                }

                var someKeys = Object.keys( aVisitParm);
                var aNumKeys = someKeys.length;
                if( !aNumKeys) {
                    return {};
                }

                var aVisitParmCopy = { };


                var aTitle = theURLAndTitle[ "title"];
                if( !( aTitle == null) && !( typeof aTitle == "undefined")) {
                    aVisitParmCopy[ this.PARM_VISITMANYPAGES_EXPECTEDPAGETITLE] = aTitle;
                }


                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = someKeys[ aKeyIdx];
                    if( aKey) {
                        if( ( aKey == this.PARM_VISITMANYPAGES_FULLURLS) || ( aKey == this.PARM_VISITMANYPAGES_URLS)) {
                            continue;
                        }

                        if( aVisitParm.hasOwnProperty( aKey)) {
                            var aValue = aVisitParm[ aKey];
                            if( aValue){}/* CQT */
                            aVisitParmCopy[ aKey] = aValue
                        }
                    }
                }

                if( theURLsAreFull) {
                    aVisitParmCopy[ this.PARM_VISITMANYPAGES_FULLURL] = aURL;
                }
                else  {
                    aVisitParmCopy[ this.PARM_VISITMANYPAGES_URL]     = aURL;
                }

                var aHelperParmsCopy = { };
                aHelperParmsCopy[  this.PARM_VISITMANYPAGES] = aVisitParmCopy;

                return aHelperParmsCopy;
            };
            if( fCopyHelperParms){}/* CQT */
            aPrototype.fCopyHelperParms = fCopyHelperParms;







        return aPrototype;

        })();




        var VisitManyPagesTestHelper_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ProtractorTest = null;

            this._pInit_VisitManyPagesTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest);

        };
        VisitManyPagesTestHelper_Constructor.prototype = aVisitManyPagesTestHelper_Prototype;





        var VisitManyPagesTestHelper_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = aVisitManyPagesTestHelper_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ProtractorTest = null;
        };
        VisitManyPagesTestHelper_SuperPrototypeConstructor.prototype = aVisitManyPagesTestHelper_Prototype;



        var aModule = {
            "VisitManyPagesTestHelper_Prototype": aVisitManyPagesTestHelper_Prototype,
            "VisitManyPagesTestHelper_Constructor": VisitManyPagesTestHelper_Constructor,
            "VisitManyPagesTestHelper_SuperPrototypeConstructor": VisitManyPagesTestHelper_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aVisitManyPagesTestHelper_Prototype._v_Module = aModule;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_common_testhelper   = require('./common-testhelper');
            var aM_forcedexception     = require('../common-test/forcedexception');
            var aM_parms_general       = require('../general-test/parms-general');
            var aM_overrider           = require('../common-test/overrider');
            var aM_sentinels           = require('../common-test/sentinels');

            return aMod_definer(
                aM_common_testhelper,
                aM_forcedexception,
                aM_parms_general,
                aM_overrider,
                aM_sentinels
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./common-testhelper",
            "../common-test/forcedexception",
            "../general-test/parms-general",
            "../common-test/overrider",
            "../common-test/sentinels"
        ], function (
            theM_common_testhelper,
            theM_forcedexception,
            theM_parms_general,
            theM_overrider,
            theM_sentinels
            ) {
            return aMod_definer(
                theM_common_testhelper,
                theM_forcedexception,
                theM_parms_general,
                theM_overrider,
                theM_sentinels
            );
        });
    }


}());


































