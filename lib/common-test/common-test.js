'use strict';

/*
 common-test.js
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
    var aMod_definer = function( theM_housekeepconstants,
                                 theM_housekeeputils,
                                 theM_releasingconstants,
                                 theM_cleanupconstants,
                                 theM_exceptiondetails,
                                 theM_sentinels,
                                 theM_traversals,
                                 theM_overrider,
                                 theM_conversions) {

        var ModuleName     = "common-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.RELEASE_COMMON_TYPEINFO = false;

            theToInit.LOGRELEASERECORDS            = false;
            theToInit.REGISTERRELEASEDIDENTIFYINGS = false;


            theToInit.LOGCLEANUPRECORDS            = false;
            theToInit.REGISTERCLEANUPDIDENTIFYINGS = false;

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

            theToInit.HOUSEKEEPCONSTANTS = theM_housekeepconstants;


            theToInit.HOUSEKEEPUTILS = theM_housekeeputils;



            theToInit.RELEASINGCONSTANTS = theM_releasingconstants;

            theToInit.HASBEENRELEASED_SINGLETONSENTINEL = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;




            theToInit.RELEVKIND_RELEASE = "RELEVKIND_RELEASE";


            theToInit.RECORDCOLORESCAPE_NORMAL = "\u001b[0m";
            theToInit.RECORDCOLORESCAPE_GRAY   = "\u001b[30m";



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










        var aCommonTest_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = null;


            aPrototype._v_Type = "CommonTest";

            aPrototype._v_Prototype_CommonTest = aPrototype;


            aPrototype._v_Released  = null;
            aPrototype._v_ReleasedFully  = null;
            aPrototype._v_CleanedUp = null;




            var _pInit = function( theTitle) {

                this._pInit_Common( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_Common = function( theTitle) {
                if( theTitle){}/* CQT */

                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */

                this._v_Type           = aPrototype._v_Type;


                this._v_Released  = null;
                this._v_ReleasedFully  = null;
                this._v_CleanedUp = null;

            };
            if( _pInit_Common){}/* CQT */
            aPrototype._pInit_Common = _pInit_Common;








            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);



                this._pRelease_Common( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRegisterReleasedIdentifyingAndRecordRelease = function( theReleaseParms, theReleaseDone) {

                if(    !this.REGISTERRELEASEDIDENTIFYINGS
                    && !( theReleaseParms && theReleaseParms[ theM_releasingconstants.RELEASEPARMS_REGISTERRELEASEDIDENTIFYINGS_FIELDNAME])
                    && !this.LOGRELEASERECORDS
                    && !( theReleaseParms && theReleaseParms[ theM_releasingconstants.RELEASEPARMS_LOGRELEASERECORDS_FIELDNAME])) {
                    return;
                }

                var anIdentifying = this.fIdentifyingWithTitleJSON();
                if( !anIdentifying) {
                    return;
                }


                if( theReleaseDone) {
                        if(      this.REGISTERRELEASEDIDENTIFYINGS
                        || ( theReleaseParms && theReleaseParms[ theM_releasingconstants.RELEASEPARMS_REGISTERRELEASEDIDENTIFYINGS_FIELDNAME])) {

                        var someReleaseIdentifyings = theReleaseDone[ theM_releasingconstants.RELEASEDONE_IDENTIFYINGS_FIELDNAME];

                        if( !someReleaseIdentifyings) {
                            someReleaseIdentifyings = [ ];
                            theReleaseDone[ theM_releasingconstants.RELEASEDONE_IDENTIFYINGS_FIELDNAME] = someReleaseIdentifyings;
                        }

                        someReleaseIdentifyings.push( anIdentifying);
                    }
                }


                if(      this.LOGRELEASERECORDS
                    || ( theReleaseParms && theReleaseParms[ theM_releasingconstants.RELEASEPARMS_LOGRELEASERECORDS_FIELDNAME])) {

                    var aLog = { "RELEASED": anIdentifying};

                    var aLogStr = JSON.stringify( aLog);
                    if( aLogStr){}/* CQT */
                    console.log( "," + aLogStr);
                }

            };
            if( _pRegisterReleasedIdentifyingAndRecordRelease){}/* CQT */
            aPrototype._pRegisterReleasedIdentifyingAndRecordRelease = _pRegisterReleasedIdentifyingAndRecordRelease;





            
            
            





            var _pRelease_Common = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                if( this.RELEASE_COMMON_TYPEINFO) {

                    this._v_Prototype = undefined;
                    this._v_Type      = undefined;
                }


                this._v_Released      = this.HASBEENRELEASED_SINGLETONSENTINEL;
                this._v_ReleasedFully = this.HASBEENRELEASED_SINGLETONSENTINEL;

                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */
            };
            if( _pRelease_Common){}/* CQT */
            aPrototype._pRelease_Common = _pRelease_Common;






            var _fReleaseChildren = function( ) {

                var someReleaseChildren = [ ];
                this._pReleaseChildrenInto( someReleaseChildren)

                return someReleaseChildren;
            };
            if( _fReleaseChildren){}/* CQT */
            aPrototype._fReleaseChildren = _fReleaseChildren;









            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

            };
            if( _pReleaseChildrenInto){}/* CQT */
            aPrototype._pReleaseChildrenInto = _pReleaseChildrenInto;















            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_Common( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;








            var pCleanUpTest_Common = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                this.pUpdateCleanedUpWithWhatToClean( theWhatToClean);
            };
            if( pCleanUpTest_Common){}/* CQT */
            aPrototype.pCleanUpTest_Common = pCleanUpTest_Common;










            var pUpdateCleanedUpWithWhatToClean = function( theWhatToClean) {

                if( !theWhatToClean) {
                    return;
                }


                if( !this._v_CleanedUp) {
                    this._v_CleanedUp = theWhatToClean;
                }
                else {
                    if( typeof this._v_CleanedUp == "boolean") {
                        this._v_CleanedUp = theWhatToClean;
                    }
                    else {
                        if( !(typeof this._v_CleanedUp == "object") || !(typeof this._v_CleanedUp.length == "number")) {
                            this._v_CleanedUp = [ this._v_CleanedUp];
                        }

                        Array.prototype.push.apply( this._v_CleanedUp, theWhatToClean);
                    }
                }
            };
            if( pUpdateCleanedUpWithWhatToClean){}/* CQT */
            aPrototype.pUpdateCleanedUpWithWhatToClean = pUpdateCleanedUpWithWhatToClean;







            var _pRegisterCleanUpIdentifyingAndRecordCleanUp = function( theWhatToClean, theCleanUpParms, theCleanUpDone) {

                if(    !this.REGISTERCLEANUPDIDENTIFYINGS
                    && !( theCleanUpParms && theCleanUpParms[ theM_cleanupconstants.CLEANUPPARMS_REGISTERCLEANEDUPIDENTIFYINGS_FIELDNAME])
                    && !this.LOGCLEANUPRECORDS
                    && !( theCleanUpParms && theCleanUpParms[ theM_cleanupconstants.CLEANUPPARMS_LOGCLEANUPRECORDS_FIELDNAME])) {
                    return;
                }


                var anIdentifying = this.fIdentifyingWithTitleJSON();
                if( !anIdentifying) {
                    return;
                }

                var anIdentifyingWithCleanedUp = {};
                Object.keys( anIdentifying).forEach( function( athKey) {
                    anIdentifyingWithCleanedUp[ athKey] = anIdentifying[ athKey];
                });
                anIdentifyingWithCleanedUp[ "WHATTOCLEAN"] = theWhatToClean;


                if( theCleanUpDone) {
                    if(      this.REGISTERCLEANUPDIDENTIFYINGS
                        || ( theCleanUpParms && theCleanUpParms[ theM_cleanupconstants.CLEANUPPARMS_REGISTERCLEANEDUPIDENTIFYINGS_FIELDNAME])) {

                        var someCleanUpIdentifyings = theCleanUpDone[ theM_cleanupconstants.CLEANEDUPONE_IDENTIFYINGS_FIELDNAME];

                        if( !someCleanUpIdentifyings) {
                            someCleanUpIdentifyings = [ ];
                            theCleanUpDone[ theM_cleanupconstants.CLEANEDUPONE_IDENTIFYINGS_FIELDNAME] = someCleanUpIdentifyings;
                        }

                        someCleanUpIdentifyings.push( anIdentifyingWithCleanedUp);
                    }
                }


                if(      this.LOGCLEANUPRECORDS
                    || ( theCleanUpParms && theCleanUpParms[ theM_cleanupconstants.CLEANUPPARMS_LOGCLEANUPRECORDS_FIELDNAME])) {


                    var aLog = { "WHATTOCLEANUP": theWhatToClean, "CLEANEDUP": anIdentifyingWithCleanedUp};

                    var aLogStr = JSON.stringify( aLog);
                    if( aLogStr){}/* CQT */
                    console.log( "," + aLogStr);
                }

            };
            if( _pRegisterCleanUpIdentifyingAndRecordCleanUp){}/* CQT */
            aPrototype._pRegisterCleanUpIdentifyingAndRecordCleanUp = _pRegisterCleanUpIdentifyingAndRecordCleanUp;









            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "type": this._v_Type
                };
                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;






            var fIdentifyingString = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingString){}/* CQT */
            aPrototype.fIdentifyingString = fIdentifyingString;







            var fIdentifyingWithTitleJSON = function() {

                return this.fIdentifyingJSON();
            };
            if( fIdentifyingWithTitleJSON){}/* CQT */
            aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






            var fIdentifyingWithTitleString = function() {

                var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingWithTitleString){}/* CQT */
            aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;










            var fAllTests = function() {
                return [ this];
            };
            if( fAllTests){}/* CQT */
            aPrototype.fAllTests = fAllTests;







            var pAllTests_into = function( theTests) {
                if( theTests == null) {
                    return;
                }

                if ( theTests.indexOf( this) < 0) {
                    theTests.push( this);
                }
            };
            if( pAllTests_into){}/* CQT */
            aPrototype.pAllTests_into = pAllTests_into;








            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = this.fIdentifyingWithTitleJSON();
                if( aResultJSON){}/* CQT */

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;








            var fExceptionDetail = function( theException) {
                return theM_exceptiondetails.fExceptionDetail( theException);
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;








            var fReleasePayloads_Common = function( ) {

                return true;
            };
            if( fReleasePayloads_Common){}/* CQT */
            aPrototype.fReleasePayloads_Common = fReleasePayloads_Common;







            var fUsePayloadHolder = function( ) {

                return false;
            };
            if( fUsePayloadHolder){}/* CQT */
            aPrototype.fUsePayloadHolder = fUsePayloadHolder;








            var fModConversions = function( theMessage) {

                return theM_conversions;
            };
            if( fModConversions){}/* CQT */
            aPrototype.fModConversions = fModConversions;






            var pToConsoleLikeEvent = function( theMessage) {

                var aMessage = this.fModConversions().fConvertValueToJSON( theMessage);

                console.log( ',{"msg": "' + aMessage + '"}');
            };
            if( pToConsoleLikeEvent){}/* CQT */
            aPrototype.pToConsoleLikeEvent = pToConsoleLikeEvent;




            var pHasBeenSkipped = function( theSkipReason, theSkipDetail) {

                console.log( "..... !!!!! ..... SKIPPED " + this._v_Type + " " + this._v_Title);

            };
            if( pHasBeenSkipped){}/* CQT */
            aPrototype.pHasBeenSkipped = pHasBeenSkipped;




            return aPrototype;

        })();




        var CommonTest_Constructor = function() {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_SuperPrototype = null;

            this._v_Released  = null;
            this._v_ReleasedFully  = null;
            this._v_CleanedUp = null;

            this._pInit_Common();

        };
        CommonTest_Constructor.prototype = aCommonTest_Prototype;





        var CommonTest_SuperPrototypeConstructor = function() {
            this._v_Prototype = aCommonTest_Prototype;
            this._v_Type = null;

            this._v_SuperPrototype = null;


            this._v_Released  = null;
            this._v_ReleasedFully  = null;
            this._v_CleanedUp = null;
        };
        CommonTest_SuperPrototypeConstructor.prototype = aCommonTest_Prototype;



        var aModule = {
            "CommonTest_Prototype": aCommonTest_Prototype,
            "CommonTest_Constructor": CommonTest_Constructor,
            "CommonTest_SuperPrototypeConstructor": CommonTest_SuperPrototypeConstructor
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


            var aM_housekeepconstants = require('./housekeep/housekeep-constants');
            var aM_housekeeputils     = require('./housekeep/housekeep-utils');
            var aM_releasingconstants = require('./releasing/releasing-constants');
            var aM_cleanupconstants   = require('./cleanup/cleanup-constants');
            var aM_exceptiondetails   = require('./exceptiondetails');
            var aM_sentinels          = require('./sentinels');
            var aM_traversals         = require('./traversals/traversals');
            var aM_overrider          = require('./overrider');
            var aM_conversions        = require('./conversions');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeeputils,
                aM_releasingconstants,
                aM_cleanupconstants,
                aM_exceptiondetails,
                aM_sentinels,
                aM_traversals,
                aM_overrider,
                aM_conversions
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./housekeep/housekeep-constants",
            "./housekeep/housekeep-utils",
            "./releasing/releasing-constants",
            "./cleanup/cleanup-constants",
            "./exceptiondetails",
            "./sentinels",
            "./traversals/traversals",
            "./overrider",
            "./conversions"
        ], function (
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_releasingconstants,
                theM_cleanupconstants,
                theM_exceptiondetails,
                theM_sentinels,
                theM_traversals,
                theM_overrider,
                theM_conversions
            ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_releasingconstants,
                theM_cleanupconstants,
                theM_exceptiondetails,
                theM_sentinels,
                theM_traversals,
                theM_overrider,
                theM_conversions
            );
        });
    }



}());