'use strict';

/*
 callbackerwooverrides.js
 Created 201409201736
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



    var aMod_definer = function( theM_releasingconstants,
                                 theM_cleanupconstants,
                                 theM_housekeepconstants,
                                 theM_housekeeputils,
                                 theM_sentinels,
                                 theOverrides) {


        var ModuleName     = "callbackerwooverrides";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.ANNOTATECALLBACKS          = true;

            theToInit.RECORDNEWCALLBACKS         = true;
            theToInit.RECORDCALLBACKINVOCATIONS  = true;
            theToInit.RECORDCALLBACKARGS         = true;

            theToInit.LOOPOVERPARENTCALLBACKS     = true;
            theToInit.LOOPOVERPARENTCALLBACKS_ANY = true;
            theToInit.LOOPOVERPARENTCALLBACKS_ALL = true;

            theToInit.LOGRECEIVEDBYMETHODNAMES    = true;

            theToInit.LOGRELEASECALLBACKRECORDS             = false;
            theToInit.REGISTERRELEASEDCALLBACKIDENTIFYINGS  = false;

            theToInit.LOGCLEANUPCALLBACKRECORDS             = false;
            theToInit.REGISTERCLEANEDUPCALLBACKIDENTIFYINGS = false;




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


        if( theOverrides) {

            if( typeof theOverrides == "object") {

                var someOverrideKeys = Object.keys( ModuleVariations);

                var aNumOverrideKeys = someOverrideKeys.length;
                for( var anOverrideKeyIdx=0; anOverrideKeyIdx < aNumOverrideKeys; anOverrideKeyIdx++) {

                    var anOverrideKey = someOverrideKeys[ anOverrideKeyIdx];

                    if( theOverrides.hasOwnProperty( anOverrideKey)) {

                        var anOverrideValue = theOverrides[ anOverrideKey];
                        if( anOverrideValue){}/* CQT */

                        ModuleVariations[ anOverrideKey] = anOverrideValue;
                    }
                }
            }
        }






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.MAXPARENTCALLBACKLOOPS = 1000;

            theToInit.MAXDATASTRINGLEN       = 1024;

            theToInit.MAXFUNCTIONSTRINGLEN   = 64;

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










        var fChainNewCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theCallbackCreator, theMethodName) {
            if( !aModule.ANNOTATECALLBACKS) {
                return theNewCallback;
            }

            if( !theNewCallback) {
                return null;
            }

            if( theParentCallback && ( theNewCallback == theParentCallback)) {
                return null;
            }

            var aCallbackId = null;
            if( theCallbackCreator) {
                if( theCallbackCreator && theCallbackCreator.fReserveCallbackId) {
                    aCallbackId = theCallbackCreator.fReserveCallbackId();
                }
                if( !aCallbackId) {
                    aCallbackId = ( theNewCallbackName || "?")  + "-" + ( theCallbackCreator._v_Title || "?")  + "-" + ( theMethodName || "?");
                }
            }

            theNewCallback._v_Released  = null;

            theNewCallback._v_CleanedUp = null;


            theNewCallback.__CallbackId      = aCallbackId;


            theNewCallback.__CallbackName    = theNewCallbackName;
            theNewCallback.__ParentCallback  = theParentCallback;
            theNewCallback.__CallbackCreator = theCallbackCreator;
            theNewCallback.__CallbackCreatorIdentifying = null;
            if( theNewCallback.__CallbackCreator) {
                if( theNewCallback.__CallbackCreator.fIdentifyingWithTitleJSON) {
                    theNewCallback.__CallbackCreatorIdentifying = theNewCallback.__CallbackCreator.fIdentifyingWithTitleJSON();
                }
            }

            theNewCallback.__MethodName      = theMethodName;
            theNewCallback.__CallbackInvoked = false;
            theNewCallback.__CallbackError   = null;
            theNewCallback.__CallbackResult  = null;
            theNewCallback.__AnySubCallbackInvoked  = false;
            theNewCallback.__AllSubCallbacksInvoked = false;
            theNewCallback.__SubCallbacks           = [ ];
            theNewCallback.__ReceivedBy             = [ ];
            theNewCallback.__CallbackWrapper        = null;

            theNewCallback.__ChainedTimestamp = Date.now();
            theNewCallback.__InvokedTimestamp = null;

            theNewCallback.__BuffersHeldFromCleanUpUntilCallbacksRelease = null;




            if( theParentCallback) {
                var aParentCallback = fUnwrappedCallback( theParentCallback);
                if( !aParentCallback.__SubCallbacks) {
                    aParentCallback.__SubCallbacks = [ ];
                }
                if( aParentCallback.__SubCallbacks.indexOf( theNewCallback) < 0) {
                    aParentCallback.__SubCallbacks.push( theNewCallback);
                }
            }


            pAddFunctionsToCallback( theNewCallback);




            var aWrappedCallback = fWrappedCallback( theNewCallback);

            if( aModule.RECORDNEWCALLBACKS) {
                if( theNewCallback.__CallbackCreator) {
                    if( theNewCallback.__CallbackCreator.fRecordCallback) {
                        theNewCallback.__CallbackCreator.fRecordCallback( "CALLBACKCHAINED", theNewCallback, null, null);
                    }
                }
            }


            pAddFunctionsToCallbackWrapper( aWrappedCallback);

            if( this.__CallbackWrapper){}/* CQT */

            return aWrappedCallback;

        };









        var fUnwrappedCallback = function( theCallback) {

            if( !theCallback) {
                return null;
            }

            if( theCallback.__WrappedCallback) {
                return theCallback.__WrappedCallback;
            }

            return theCallback;
        };











        var _pRelease_NewCallback = function( theReleaseParms, theReleaseDone) {

            if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                return;
            }

            var aWasInvoked = this.__CallbackInvoked;

            if( aWasInvoked) {

                this._v_Released = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;

                _pRegisterReleasedIdentifyingAndRecordRelease( this, theReleaseParms, theReleaseDone);
            }


            var aNumSubCallbacks = this.__SubCallbacks.length;
            if( aNumSubCallbacks) {

                for( var aSubCallbackIdx=0; aSubCallbackIdx < aNumSubCallbacks; aSubCallbackIdx++) {
                    var aSubCallback = this.__SubCallbacks[ aSubCallbackIdx];
                    if( aSubCallback) {

                        if( aSubCallback._pRelease && ( typeof aSubCallback._pRelease == "function")) {

                            aSubCallback._pRelease( theReleaseParms, theReleaseDone);
                        }
                    }
                }
            }


            if( aWasInvoked) {
                this.__CallbackId      = undefined;
                this.__CallbackName    = undefined;
                this.__ParentCallback  = undefined;
                this.__CallbackCreator = undefined;
                this.__CallbackCreatorIdentifying = undefined;
                this.__MethodName      = undefined;
                this.__CallbackInvoked = undefined;
                this.__CallbackError   = undefined;
                this.__CallbackResult  = undefined;
                this.__AnySubCallbackInvoked  = undefined;
                this.__AllSubCallbacksInvoked = undefined;
                this.__SubCallbacks           = undefined;
                this.__ReceivedBy             = undefined;
                this.__CallbackWrapper        = undefined;
                this.__ChainedTimestamp = undefined;
                this.__InvokedTimestamp = undefined;
                this.__SubCallbacks = undefined;
            }

        };







        var _fReleaseChildren_NewCallback = function( ) {

            if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                return null;
            }

            var someReleaseChildren = [ ];

            this._pReleaseChildrenInto( someReleaseChildren);

            return someReleaseChildren;
        };





        var _pReleaseChildrenInto_NewCallback = function( theReleaseChildren) {

            if( !theReleaseChildren) {
                return;
            }

            if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                return;
            }

            if( theReleaseChildren.indexOf( this) >= 0) {
                return;
            }


            if( this.__CallbackInvoked) {
                theReleaseChildren.push( this);
            }


            if( this.__SubCallbacks) {

                var aNumSubCallbacks = this.__SubCallbacks.length;
                if( aNumSubCallbacks) {
                    for( var aSubCallbackIdx=0; aSubCallbackIdx < aNumSubCallbacks; aSubCallbackIdx++) {
                        var aSubCallback = this.__SubCallbacks[ aSubCallbackIdx];
                        if( aSubCallback) {
                            if( typeof aSubCallback._pReleaseChildrenInto == "function") {
                                aSubCallback._pReleaseChildrenInto( theReleaseChildren);
                            }
                        }
                    }
                }
            }
        };










        var _pRegisterReleasedIdentifyingAndRecordRelease = function( theNewCallback, theReleaseParms, theReleaseDone) {

            if( !theNewCallback) {
                return;
            }

            if( !theReleaseParms) {
                return;
            }

            if( !theReleaseDone) {
                return;
            }

            if(    !aModule.REGISTERRELEASEDCALLBACKIDENTIFYINGS
                && !( theReleaseParms && theReleaseParms[ theM_releasingconstants.RELEASEPARMS_REGISTERRELEASEDCALLBACKIDENTIFYINGS_FIELDNAME])
                && !aModule.LOGRELEASECALLBACKRECORDS
                && !( theReleaseParms && theReleaseParms[ theM_releasingconstants.RELEASEPARMS_LOGRELEASECALLBACKRECORDS_FIELDNAME])) {
                return;
            }

            var anIdentifying = theNewCallback.fIdentifyingWithTitleJSON();
            if( !anIdentifying) {
                return;
            }



            if(      aModule.REGISTERRELEASEDCALLBACKIDENTIFYINGS
                || ( theReleaseParms && theReleaseParms[ theM_releasingconstants.RELEASEPARMS_REGISTERRELEASEDCALLBACKIDENTIFYINGS_FIELDNAME])) {

                var someReleaseIdentifyings = theReleaseDone[ theM_releasingconstants.RELEASEDONE_CALLBACKIDENTIFYINGS_FIELDNAME];

                if( !someReleaseIdentifyings) {
                    someReleaseIdentifyings = [ ];
                    theReleaseDone[ theM_releasingconstants.RELEASEDONE_CALLBACKIDENTIFYINGS_FIELDNAME] = someReleaseIdentifyings;
                }

                someReleaseIdentifyings.push( anIdentifying);
            }

            if(      aModule.LOGRELEASECALLBACKRECORDS
                || ( theReleaseParms && theReleaseParms[ theM_releasingconstants.RELEASEPARMS_LOGRELEASECALLBACKRECORDS_FIELDNAME])) {

                var aLog = { "CALLBACKRELEASED": anIdentifying};

                var aLogStr = JSON.stringify( aLog);
                if( aLogStr){}/* CQT */
                console.log( "," + aLogStr);
            }

        };


        
        






        var pHoldBuffersFromCleanUpUntilCallbacksRelease_NewCallback = function( theBuffers) {

            this.__BuffersHeldFromCleanUpUntilCallbacksRelease = theBuffers;
        };




        
        






        var pCleanUpCallback_NewCallback = function( theWhatToClean, theReleaseParms, theReleaseDone) {

            if( !theWhatToClean) {
                return;
            }

            if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                return;
            }


            if( !theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_CALLBACKS)) {
                return;
            }

            if( ( theWhatToClean.indexOf( theM_housekeepconstants.WHATTOCLEAN_CALLBACKS) >= 0)) {

                this._pRelease( theReleaseParms, theReleaseDone);

                pUpdateCleanedUpWithWhatToClean( this, theWhatToClean);

                return;
            }

            if( theM_housekeeputils.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                return;
            }


            var aWasInvoked = this.__CallbackInvoked;

            if( aWasInvoked) {

                _pRegisterCleanUpIdentifyingAndRecordCleanUp( this, theWhatToClean, theReleaseParms, theReleaseDone);

            }



            var aNumSubCallbacks = this.__SubCallbacks.length;
            if( aNumSubCallbacks) {

                for( var aSubCallbackIdx=0; aSubCallbackIdx < aNumSubCallbacks; aSubCallbackIdx++) {
                    var aSubCallback = this.__SubCallbacks[ aSubCallbackIdx];
                    if( aSubCallback) {

                        if( aSubCallback.pCleanUpCallback && ( typeof aSubCallback.pCleanUpCallback == "function")) {

                            aSubCallback.pCleanUpCallback( theWhatToClean, theReleaseParms, theReleaseDone);
                        }
                    }
                }
            }

            if( aWasInvoked) {

                if(  ( theWhatToClean.indexOf( theM_housekeepconstants.WHATTOCLEAN_CALLBACKSPAYLOADS) >= 0)) {

                    this.__CallbackCreator = undefined;
                    this.__CallbackError   = undefined;
                    this.__CallbackResult  = undefined;
                    this.__ReceivedBy      = undefined;
                }

                pUpdateCleanedUpWithWhatToClean( this, theWhatToClean);
            }

        };











        var _pRegisterCleanUpIdentifyingAndRecordCleanUp = function( theNewCallback, theWhatToClean, theReleaseParms, theReleaseDone) {

            if( !theNewCallback) {
                return;
            }

            if( !theReleaseParms) {
                return;
            }

            if( !theReleaseDone) {
                return;
            }

            if(    !aModule.REGISTERCLEANEDUPCALLBACKIDENTIFYINGS
                && !( theReleaseParms && theReleaseParms[ theM_cleanupconstants.CLEANUPPARMS_REGISTERCLEANEDUPCALLBACKIDENTIFYINGS_FIELDNAME])
                && !aModule.LOGRELEASECALLBACKRECORDS
                && !( theReleaseParms && theReleaseParms[ theM_cleanupconstants.CLEANUPPARMS_LOGCLEANUPCALLBACKRECORDS_FIELDNAME])) {
                return;
            }

            var anIdentifying = theNewCallback.fIdentifyingWithTitleJSON();
            if( !anIdentifying) {
                return;
            }


            var anIdentifyingWithCleanedUp = {};
            Object.keys( anIdentifying).forEach( function( athKey) {
                anIdentifyingWithCleanedUp[ athKey] = anIdentifying[ athKey];
            });
            anIdentifyingWithCleanedUp[ "WHATTOCLEAN"] = theWhatToClean;


            if(      aModule.REGISTERCLEANEDUPCALLBACKIDENTIFYINGS
                || ( theReleaseParms && theReleaseParms[ theM_cleanupconstants.CLEANUPPARMS_REGISTERCLEANEDUPCALLBACKIDENTIFYINGS_FIELDNAME])) {

                var someReleaseIdentifyings = theReleaseDone[ theM_cleanupconstants.CLEANEDUPONE_CALLBACKIDENTIFYINGS_FIELDNAME];

                if( !someReleaseIdentifyings) {
                    someReleaseIdentifyings = [ ];
                    theReleaseDone[ theM_cleanupconstants.CLEANEDUPONE_CALLBACKIDENTIFYINGS_FIELDNAME] = someReleaseIdentifyings;
                }

                someReleaseIdentifyings.push( anIdentifyingWithCleanedUp);
            }

            if(      aModule.LOGRELEASECALLBACKRECORDS
                || ( theReleaseParms && theReleaseParms[ theM_cleanupconstants.CLEANUPPARMS_LOGCLEANUPCALLBACKRECORDS_FIELDNAME])) {

                var aLog = { "WHATTOCLEANUP": theWhatToClean, "CALLBACKCLEANEDUP": anIdentifyingWithCleanedUp};


                var aLogStr = JSON.stringify( aLog);
                if( aLogStr){}/* CQT */
                console.log( "," + aLogStr);
            }

        };









        var pUpdateCleanedUpWithWhatToClean = function( theNewCallback, theWhatToClean) {

            if( !theNewCallback) {
                return;
            }

            if( !theWhatToClean) {
                return;
            }


            if( !theNewCallback._v_CleanedUp) {
                theNewCallback._v_CleanedUp = theWhatToClean;
            }
            else {
                if( typeof theNewCallback._v_CleanedUp == "boolean") {
                    theNewCallback._v_CleanedUp = theWhatToClean;
                }
                else {
                    if( !(typeof theNewCallback._v_CleanedUp == "object") || !(typeof theNewCallback._v_CleanedUp.length == "number")) {
                        theNewCallback._v_CleanedUp = [ theNewCallback._v_CleanedUp];
                    }

                    Array.prototype.push.apply( theNewCallback._v_CleanedUp, theWhatToClean);
                }
            }
        };








        var pAddFunctionsToCallback = function( theNewCallback) {

            if( !aModule.ANNOTATECALLBACKS) {
                return;
            }


            theNewCallback.fIdentifyingJSON = (function() {
                var aCallback = theNewCallback;
                return function( ) {
                    return fIdentifyingJSON( aCallback);
                }
            })();


            theNewCallback.fIdentifyingWithTitleJSON = (function() {
                var aCallback = theNewCallback;
                return function( ) {
                    return fIdentifyingWithTitleJSON( aCallback);
                }
            })();


            theNewCallback.fAsLogObject = (function() {
                var aCallback = theNewCallback;
                return function( ) {
                    return fAsLogObject( aCallback);
                }
            })();


            theNewCallback.fConvertValueToJSON = (function() {
                var aCallback = theNewCallback;
                return function( ) {
                    return fConvertValueToJSON( aCallback);
                }
            })();

            theNewCallback.fRootCallback         = fRootCallback_NewCallback.bind( theNewCallback);

            theNewCallback._pRelease             = _pRelease_NewCallback.bind( theNewCallback);
            theNewCallback._fReleaseChildren     = _fReleaseChildren_NewCallback.bind( theNewCallback);
            theNewCallback._pReleaseChildrenInto = _pReleaseChildrenInto_NewCallback.bind( theNewCallback);



            theNewCallback.pCleanUpCallback             = pCleanUpCallback_NewCallback.bind( theNewCallback);
            /*
            theNewCallback.fCleanUpCallbackChildren     = fCleanUpCallbackChildren_NewCallback.bind( theNewCallback);
            theNewCallback.pCleanUpCallbackChildrenInto = pCleanUpCallbackChildrenInto_NewCallback.bind( theNewCallback);
             */


            theNewCallback.pHoldBuffersFromCleanUpUntilCallbacksRelease  = pHoldBuffersFromCleanUpUntilCallbacksRelease_NewCallback.bind( theNewCallback);


        };







        var fRootCallback_NewCallback = function() {
            if( !this.__ParentCallback) {
                return this;
            }

            if( !( this.__ParentCallback.fRootCallback && ( typeof this.__ParentCallback.fRootCallback == "function"))) {
                return this;
            }

            var aRootCallback = this.__ParentCallback.fRootCallback();
            if( !aRootCallback) {
                return this.__ParentCallback;
            }

            return aRootCallback;
        };










        var fWrappedCallback = function( theNewCallback) {

            if( !aModule.ANNOTATECALLBACKS) {
                return theNewCallback;
            }

            if( !theNewCallback) {
                return null;
            }

            var aWrappedCallback = (function() {

                var aNewCallback      = theNewCallback;

                var aWrapper = function( theError, theResult) {

                    pCallbackInvoked( aNewCallback, theError, theResult);

                    return theNewCallback( theError, theResult);
                };

                aWrapper.__WrappedCallback = aNewCallback;
                aNewCallback.__CallbackWrapper = aWrapper;

                return aWrapper;

            })();

            if( aWrappedCallback){}/* CQT */

            return aWrappedCallback;
        };













        var pAddFunctionsToCallbackWrapper = function( theCallbackWrapper) {
            if( !theCallbackWrapper) {
                return;
            }

            if( !theCallbackWrapper.__WrappedCallback) {
                return;
            }


            theCallbackWrapper.fIdentifyingJSON = (function() {
                var aWrappedCallback = theCallbackWrapper.__WrappedCallback;
                return function( ) {
                    return fIdentifyingJSON( aWrappedCallback);
                }
            })();


            theCallbackWrapper.fIdentifyingWithTitleJSON = (function() {
                var aWrappedCallback = theCallbackWrapper.__WrappedCallback;
                return function( ) {
                    return fIdentifyingWithTitleJSON( aWrappedCallback);
                }
            })();


            theCallbackWrapper.fAsLogObject = (function() {
                var aWrappedCallback = theCallbackWrapper.__WrappedCallback;
                return function( ) {
                    return fAsLogObject( aWrappedCallback);
                }
            })();


            theCallbackWrapper.fConvertValueToJSON = (function() {
                var aWrappedCallback = theCallbackWrapper.__WrappedCallback;
                return function( ) {
                    return fConvertValueToJSON( aWrappedCallback);
                }
            })();

            theCallbackWrapper.fRootCallback         = fRootCallback_NewCallbackWrapper.bind( theCallbackWrapper);

            theCallbackWrapper._pRelease             = _pRelease_NewCallbackWrapper.bind( theCallbackWrapper);
            theCallbackWrapper._fReleaseChildren     = _fReleaseChildren_NewCallbackWrapper.bind( theCallbackWrapper);
            theCallbackWrapper._pReleaseChildrenInto = _pReleaseChildrenInto_NewCallbackWrapper.bind( theCallbackWrapper);


            theCallbackWrapper.pCleanUpCallback             = pCleanUpCallback_NewCallbackWrapper.bind( theCallbackWrapper);
            /*
             theCallbackWrapper.fCleanUpCallbackChildren     = _fReleaseChildren_NewCallbackWrapper.bind( theCallbackWrapper);
             theCallbackWrapper.pCleanUpCallbackChildrenInto = _pReleaseChildrenInto_NewCallbackWrapper.bind( theCallbackWrapper);
             */

            theCallbackWrapper.pHoldBuffersFromCleanUpUntilCallbacksRelease = pHoldBuffersFromCleanUpUntilCallbacksRelease_NewCallbackWrapper.bind( theCallbackWrapper);

        };











        var _pRelease_NewCallbackWrapper = function( theReleaseParms, theReleaseDone) {

            if( !this.__WrappedCallback) {
                return;
            }

            if( this.__WrappedCallback._pRelease && ( typeof this.__WrappedCallback._pRelease == "function")) {

                this.__WrappedCallback._pRelease( theReleaseParms, theReleaseDone);
            }
        };





        var _fReleaseChildren_NewCallbackWrapper = function( theReleaseParms, theReleaseDone) {

            if( !this.__WrappedCallback) {
                return null;
            }

            if( !( this.__WrappedCallback._fReleaseChildren && ( typeof this.__WrappedCallback._fReleaseChildren == "function"))) {
                return null;
            }

            return this.__WrappedCallback._fReleaseChildren( theReleaseParms, theReleaseDone);
        };








        var _pReleaseChildrenInto_NewCallbackWrapper = function( theReleaseChildren) {

            if( !this.__WrappedCallback) {
                return;
            }

            if( this.__WrappedCallback._pReleaseChildrenInto && ( typeof this.__WrappedCallback._pReleaseChildrenInto == "function")) {

                this.__WrappedCallback._pReleaseChildrenInto( theReleaseChildren);
            }
        };








        var pCleanUpCallback_NewCallbackWrapper = function( theWhatToClean, theReleaseParms, theReleaseDone) {

            if( !this.__WrappedCallback) {
                return;
            }

            if( this.__WrappedCallback.pCleanUpCallback && ( typeof this.__WrappedCallback.pCleanUpCallback == "function")) {

                this.__WrappedCallback.pCleanUpCallback( theWhatToClean, theReleaseParms, theReleaseDone);
            }
        };




        /*
        var fCleanUpChildren_NewCallbackWrapper = function( ) {

            if( !this.__WrappedCallback) {
                return null;
            }

            if( !( this.__WrappedCallback.fCleanUpChildren && ( typeof this.__WrappedCallback.fCleanUpChildren == "function"))) {
                return null;
            }

            return this.__WrappedCallback.fCleanUpChildren();
        };




        var pCleanUpChildrenInto_NewCallbackWrapper = function( theReleaseChildren) {

            if( !this.__WrappedCallback) {
                return;
            }

            if( this.__WrappedCallback.pCleanUpChildrenInto && ( typeof this.__WrappedCallback.pCleanUpChildrenInto == "function")) {

                this.__WrappedCallback.pCleanUpChildrenInto( theReleaseChildren);
            }
        };
        */






        var fRootCallback_NewCallbackWrapper = function() {

            if( !this.__WrappedCallback) {
                return null;
            }

            if( !( this.__WrappedCallback.fRootCallback && ( typeof this.__WrappedCallback.fRootCallback == "function"))) {
                return null;
            }

            return this.__WrappedCallback.fRootCallback();

        };




        var pHoldBuffersFromCleanUpUntilCallbacksRelease_NewCallbackWrapper = function( theBuffers) {

            if( !this.__WrappedCallback) {
                return;
            }

            if( this.__WrappedCallback.pHoldBuffersFromCleanUpUntilCallbacksRelease && ( typeof this.__WrappedCallback.pHoldBuffersFromCleanUpUntilCallbacksRelease == "function")) {

                this.__WrappedCallback.pHoldBuffersFromCleanUpUntilCallbacksRelease( theBuffers);
            }
        };














        var pCallbackInvoked = function( theCallback, theError, theResult) {
            if( !aModule.ANNOTATECALLBACKS) {
                return;
            }

            if( theResult === "this._v_Buffers") {
                var a= 1;
            }

            if( !theCallback) {
                return;
            }

            theCallback.__CallbackInvoked  = true;
            theCallback.__InvokedTimestamp = Date.now();
            theCallback.__CallbackError    = theError;
            theCallback.__CallbackResult   = theResult;



            if( aModule.LOOPOVERPARENTCALLBACKS) {

                if( aModule.LOOPOVERPARENTCALLBACKS_ANY) {

                    var aCountLoopsAny = 0;

                    var aParentCallbackAny = theCallback.__ParentCallback;

                    while( aParentCallbackAny && ( aCountLoopsAny < aModule.MAXPARENTCALLBACKLOOPS)) {
                        if( aParentCallbackAny.__AnySubCallbackInvoked) {
                            break;
                        }
                        aParentCallbackAny.__AnySubCallbackInvoked = true;
                        aParentCallbackAny = aParentCallbackAny.__ParentCallback;
                        aCountLoopsAny += 1;
                    }
                }




                if( aModule.LOOPOVERPARENTCALLBACKS_ALL) {

                    var aCountLoopsAll = 0;

                    var aParentCallbackAll = theCallback.__ParentCallback;

                    while( aParentCallbackAll && ( aCountLoopsAll < aModule.MAXPARENTCALLBACKLOOPS)) {

                        if( aParentCallbackAll.__AllSubCallbacksInvoked) {
                            break;
                        }

                        var someParentSubCallbacks = aParentCallbackAll.__SubCallbacks;
                        if( someParentSubCallbacks) {
                            var anAllSubCallbacksInvoked = true;

                            var aNumParentSubCallbacks = someParentSubCallbacks.length;
                            for( var aParentSubCallbackIdx=0; aParentSubCallbackIdx < aNumParentSubCallbacks; aParentSubCallbackIdx++) {
                                var aParentSubCallback = someParentSubCallbacks[ aParentSubCallbackIdx];
                                if( !aParentSubCallback.__CallbackInvoked) {
                                    anAllSubCallbacksInvoked = false;
                                    break;
                                }
                            }
                            if( !anAllSubCallbacksInvoked) {
                                break;
                            }
                        }

                        aParentCallbackAll.__AllSubCallbacksInvoked = true;

                        aParentCallbackAll = aParentCallbackAll.__ParentCallback;
                        aCountLoopsAll += 1;
                    }
                }
            }


            if( !aModule.RECORDCALLBACKINVOCATIONS) {
                return;
            }

            if( theCallback.__CallbackCreator) {
                if( theCallback.__CallbackCreator.fRecordCallback) {
                    /* ACV OJO 201504250057 NOT PASSING to the fRecordCallback theError and theResult, as separate parameters,
                    to avoid getting the objects registered in a Record,
                    which would prevente successful CleanUp Memory by just WhatToClean CALLBACKSPAYLOADS.
                     theError and theResult are anyway recorded in theCallback, and will be released upon  WhatToClean CALLBACKSPAYLOADS or CALLBACKS or Callback Release
                     */
                    theCallback.__CallbackCreator.fRecordCallback( "CALLBACKINVOKED", theCallback, null /* theError */, null /* theResult */);
                }
            }
        };














        var pReceivedCallbackArg = function( theCallback, theReceiver, theMethodName) {
            if( !aModule.ANNOTATECALLBACKS) {
                return;
            }

            if( !aModule.RECORDCALLBACKARGS) {
                return;
            }

            
            if( !aModule.LOGRECEIVEDBYMETHODNAMES) {
                return;
            }

            if( !theCallback) {
                return;
            }

            var anUnwrappedCallback = fUnwrappedCallback( theCallback);

            if( anUnwrappedCallback.__ReceivedBy) {
                anUnwrappedCallback.__ReceivedBy.push( { "receiver": theReceiver, "methodName": theMethodName});
            }


            if( theReceiver && theReceiver.fRecordCallback) {
                theReceiver.fRecordCallback( "CALLBACKRECEIVED", anUnwrappedCallback, theReceiver, theMethodName);
            }
            else {
                if( anUnwrappedCallback.__CallbackCreator && anUnwrappedCallback.__CallbackCreator.fRecordCallback) {
                    anUnwrappedCallback.__CallbackCreator.fRecordCallback( "CALLBACKRECEIVED", anUnwrappedCallback, theReceiver, theMethodName);
                }
            }
        };











        var fIdentifyingJSON = function( theCallback) {

            var aIdentifiyingJSON = {
                "car": theCallback.__CallbackId
            };
            if( aIdentifiyingJSON){}/* CQT */

            return aIdentifiyingJSON;
        };




        var fIdentifyingWithTitleJSON = function( theCallback) {

            var aIdentifiyingJSON = {
                "car":   theCallback.__CallbackId,
                "title": theCallback.__CallbackName,
                "creator": theCallback.__CallbackCreatorIdentifying
            };
            if( aIdentifiyingJSON){}/* CQT */

            return aIdentifiyingJSON;
        };
        if( fIdentifyingWithTitleJSON){}/* CQT */







        var fAsLogObject = function( theCallback) {

            var aLog = {};
            var aHasLog = false;


            if( theCallback.__CallbackId) {
                aHasLog = true;
                aLog.car = theCallback.__CallbackId;
            }

            if( theCallback.__CallbackName) {
                aHasLog = true;
                aLog.title = theCallback.__CallbackName;
            }

            if( !( typeof theCallback.__CallbackInvoked == "undefined") && !( theCallback.__CallbackInvoked == null)) {
                aHasLog = true;
                aLog.invoked = theCallback.__CallbackInvoked;
            }

            if( !( typeof theCallback.__CallbackCreator == "undefined") && !( theCallback.__CallbackCreator == null)) {
                aHasLog = true;
                aLog.by = fConvertValueToIdentifyingJSON( theCallback.__CallbackCreator);
            }

            if( !( typeof theCallback.__CallbackError == "undefined") && !( theCallback.__CallbackError == null)) {
                aHasLog = true;
                aLog.error = fConvertValueToJSON( theCallback.__CallbackError);
            }

            if( !( typeof theCallback.__CallbackResult == "undefined") && !( theCallback.__CallbackResult == null)) {
                aHasLog = true;
                aLog.result = fConvertValueToJSON( theCallback.__CallbackResult);
            }

            if( !( typeof theCallback.__ParentCallback == "undefined") && !( theCallback.__ParentCallback == null)) {
                aHasLog = true;
                aLog.parent = fConvertValueToIdentifyingJSON( theCallback.__ParentCallback);
            }

            if( !( typeof theCallback.__AllSubCallbacksInvoked == "undefined") && !( theCallback.__AllSubCallbacksInvoked == null)) {
                aHasLog = true;
                aLog.allSubsInvoked = theCallback.__AllSubCallbacksInvoked;
            }

            if( !( typeof theCallback.__AnySubCallbackInvoked == "undefined") && !( theCallback.__AnySubCallbackInvoked == null)) {
                aHasLog = true;
                aLog.anySubsInvoked = theCallback.__AnySubCallbackInvoked;
            }

            if( !( typeof theCallback.__SubCallbacks == "undefined") && !( theCallback.__SubCallbacks == null)  &&
                !( typeof theCallback.__SubCallbacks.length ==  "undefined")) {
                aHasLog = true;
                aLog.numSubs = theCallback.__SubCallbacks.length;
            }

            if( theCallback.__ChainedTimestamp) {
                aHasLog = true;
                aLog.timeChained = new Date( theCallback.__ChainedTimestamp).toISOString();
            }

            if( theCallback.__InvokedTimestamp) {
                aHasLog = true;
                aLog.timeInvoked = new Date( theCallback.__InvokedTimestamp).toISOString();
            }


            if( !aHasLog) {
                return null;
            }

            return aLog;
        };







        var fConvertValueToIdentifyingJSON = function( theValue) {

            if( theValue == null) {
                return null;
            }

            if( typeof theValue == "number") {
                return theValue;
            }

            if( typeof theValue == "string") {
                return theValue;
            }


            if( theValue.fIdentifyingWithTitleJSON) {
                return theValue.fIdentifyingWithTitleJSON();
            }

            if( theValue.fIdentifyingJSON) {
                return theValue.fIdentifyingJSON();
            }

            if( theValue.fIdentifyingString) {
                return theValue.fIdentifyingString();
            }

            if( theValue.fAsLogObject) {
                return theValue.fAsLogObject();
            }


            if( theValue.fLogString) {
                return theValue.fLogString();
            }


            if( typeof theValue == "function") {
                var aStrFunction = theValue.toString().substr( 0, aModule.MAXFUNCTIONSTRINGLEN);
                if( aStrFunction){}/* CQT */
                return aStrFunction;
            }

            var aStr = theValue.toString().substr( 0, aModule.MAXDATASTRINGLEN);
            if( aStr){}/* CQT */
            return aStr;
        };






        var fConvertValueToJSON = function( theValue, theIncludeMembers) {

            if( theValue == null) {
                return null;
            }

            if( typeof theValue == "number") {
                return theValue;
            }

            if( typeof theValue == "string") {
                return theValue;
            }


            if( theValue.fAsLogObject) {
                return theValue.fAsLogObject();
            }

            if( theValue.fIdentifyingWithTitleJSON) {
                return theValue.fIdentifyingWithTitleJSON();
            }

            if( theValue.fIdentifyingJSON) {
                return theValue.fIdentifyingJSON();
            }

            if( theValue.fIdentifyingString) {
                return theValue.fIdentifyingString();
            }

            if( theValue.fLogString) {
                return theValue.fLogString();
            }

            if( theIncludeMembers) {
                if( theValue.fToResultJSON) {
                    return theValue.fToResultJSON();
                }

                try {
                    var aJSONstr = JSON.stringify( theValue);
                    if( aJSONstr){}/* CQT */
                    return aJSONstr;
                }
                catch( anException) {}
            }

            var aStr = theValue.toString().substr( 0, aModule.MAXDATASTRINGLEN);
            if( aStr){}/* CQT */
            return aStr;
        };







        var aModule = {
            "ModuleConstants": ModuleConstants,
            "fChainNewCallbackForCallback":       fChainNewCallbackForCallback,
            "pReceivedCallbackArg":               pReceivedCallbackArg
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

            return aMod_definer;
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define(function ( ) {
            return aMod_definer;
        });
    }


}());

