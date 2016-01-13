'use strict';

/*
 xloader.js
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
                                 theM_xloadrecord,
                                 theM_nextticker,
                                 theM_httprequest,
                                 theM_callbacker,
                                 theM_overrider,
                                 theM_sentinels) {

        var ModuleName     = "xloader";
        var ModulePackages = "common-test/xloader";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}




        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGRECORDS = true;
            theToInit.LOGXLOADS = true;
            theToInit.LOGEXCEPTIONDETAILS   = true;

            theToInit.ANNOTATEXLOADERCALLBACKS          = true;
            theToInit.RECORDXLOADERCALLBACKINVOCATIONS  = true;
            theToInit.RECORDXLOADERCALLBACKARGS         = true;

            theToInit.XLOEVESSETNOTFORCONSOLE = "XLOEVEKINDS_NOTFORCONSOLE_DEFAULT";

            theToInit.LOADX_FORCESYNC = false;

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

            theToInit.REPLACEXLOADERNAMES = true;

            theToInit.XLOADER_PATH_TO_ROOT = "../../..";

            theToInit.XLOADERPATHREPLACEMENTS = { };
            theToInit.XLOADERPATHREPLACEMENTS[ theM_sentinels.ROOTPATHSTEPSYMBOL] = theToInit.XLOADER_PATH_TO_ROOT;

            theToInit.PATHURLPREFIX = "http://";

            theToInit.PREPEND_XLOADER_PATH = false;

            theToInit.PATHNAMESTEPSEPARATOR = "/";

            theToInit.XLOADSTATUSCODESOK = [ 200];


            theToInit.XLOEVEKIND_LOADED     = "LOADED";
            theToInit.XLOEVEKIND_NOTLOADED  = "NOTLOADED";
            theToInit.XLOEVEKIND_SENT       = "SENT";
            theToInit.XLOEVEKIND_RECEIVED   = "RECEIVED";
            theToInit.XLOEVEKIND_CATCHED_EXCEPTION   = "CATCHED_EXCEPTION";


            theToInit.XLOEVEKIND_CALLBACKCHAINED  = "CALLBACKCHAINED";
            theToInit.XLOEVEKIND_CALLBACKINVOKED  = "CALLBACKINVOKED";
            theToInit.XLOEVEKIND_CALLBACKRECEIVED = "CALLBACKRECEIVED";


            theToInit.XLOEVEKINDS = [
                theToInit.XLOEVEKIND_LOADED,
                theToInit.XLOEVEKIND_NOTLOADED,
                theToInit.XLOEVEKIND_SENT,
                theToInit.XLOEVEKIND_RECEIVED,
                theToInit.XLOEVEKIND_CATCHED_EXCEPTION,

                theToInit.XLOEVEKIND_CALLBACKCHAINED,
                theToInit.XLOEVEKIND_CALLBACKINVOKED,
                theToInit.XLOEVEKIND_CALLBACKRECEIVED
            ];


            theToInit.XLOEVEKINDS_NOTFORCONSOLE_RESTRICTIVE = [
                theToInit.XLOEVEKIND_SENT,
                theToInit.XLOEVEKIND_RECEIVED,

                theToInit.XLOEVEKIND_CALLBACKCHAINED,
                theToInit.XLOEVEKIND_CALLBACKINVOKED,
                theToInit.XLOEVEKIND_CALLBACKRECEIVED

            ];


            theToInit.XLOEVEKINDS_NOTFORCONSOLE_LIGHT = [
            ];


            theToInit.XLOEVEKINDS_NOTFORCONSOLE_NONE = [ ];
            theToInit.XLOEVEKINDS_NOTFORCONSOLE_ALL = theToInit.XLOEVEKINDS.slice();
            theToInit.XLOEVEKINDS_NOTFORCONSOLE_DEFAULT = theToInit.XLOEVEKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();


            if( theToInit.XLOEVESSETNOTFORCONSOLE) {

                if( typeof theToInit.XLOEVESSETNOTFORCONSOLE == "string") {
                    var anEventsSetNotForConsole = theToInit[ theToInit.XLOEVESSETNOTFORCONSOLE];
                    if( anEventsSetNotForConsole) {
                        theToInit.XLOEVEKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                    }
                    else {
                        theToInit.XLOEVEKINDS_NOTFORCONSOLE = [];
                    }
                }
                else {
                    theToInit.XLOEVEKINDS_NOTFORCONSOLE = theToInit.XLOEVESSETNOTFORCONSOLE;
                }
            }
            else {
                theToInit.XLOEVEKINDS_NOTFORCONSOLE = theToInit.XLOEVEKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }
            if( !theToInit.XLOEVEKINDS_NOTFORCONSOLE) {
                theToInit.XLOEVEKINDS_NOTFORCONSOLE = theToInit.XLOEVEKINDS_NOTFORCONSOLE_DEFAULT.slice();
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
        ModuleGlobals.XLOADERSINGLETON = null;









        var aXLoader_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "XLoader";


            aPrototype._v_Title      = null;
            aPrototype._v_NameToLoad = null;
            aPrototype._v_Records    = null;
            aPrototype._v_XLoaded    = null;

            aPrototype._v_NameToLoadReplaced    = null;


            var _pInit = function( theTitle, theNameToLoad) {

                this._pInit_XLoader( theTitle, theNameToLoad);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_XLoader = function( theTitle, theNameToLoad) {

                this._v_Prototype = aPrototype;

                this._v_Type = aPrototype._v_Type;

                this._v_Title      = theTitle;
                this._v_NameToLoad = theNameToLoad;
                this._v_Records    = [ ];
                this._v_XLoaded    = null;

                this._v_NameToLoadReplaced    = null;

                if( this._v_XLoaded){}/* CQT */
            };
            if( _pInit_XLoader){}/* CQT */
            aPrototype._pInit_XLoader = _pInit_XLoader;







            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "type":  this._v_Type,
                    "title": this._v_Title
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









            var fToResultJSON = function( theXLoaderObjects, theAlready) {
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
















            var fRecord = function( theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecord = new theM_xloadrecord.XLoadRecord_Constructor( this, theStep, theEventKind, theData, theErrorReason, theErrorDetail);

                if( aRecord) {
                    this._v_Records.push( aRecord);

                    if( this.LOGRECORDS) {
                        this.pLogRecord( aRecord);
                    }
                }

                return aRecord;
            };
            if( fRecord){}/* CQT */
            aPrototype.fRecord = fRecord;







            var fRecordCallback = function( theEventKind, theCallback, theError, theResult) {
                var aMethodName = theCallback.__MethodName;
                if( !aMethodName) {
                    aMethodName = null;
                }
                return this.fRecord( aMethodName, theEventKind, theCallback, theError, theResult);
            };
            if( fRecordCallback){}/* CQT */
            aPrototype.fRecordCallback = fRecordCallback;






            var pLogRecord = function( theRecord) {
                if( this.LOGRECORDS) {
                    if( theRecord) {
                        var anEventKind = theRecord._v_EventKind;
                        if( this.XLOEVEKINDS_NOTFORCONSOLE.indexOf( anEventKind) < 0) {
                            var aLogString = theRecord.fLogString();
                            if( aLogString) {
                                console.log( "," + aLogString);
                            }
                        }
                    }
                }
            };
            if( pLogRecord){}/* CQT */
            aPrototype.pLogRecord = pLogRecord;







            var fChainNewXloaderCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATEXLOADERCALLBACKS) {
                    return theNewCallback;
                }

                return theM_callbacker.fChainNewCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewXloaderCallbackForCallback){}/* CQT */
            aPrototype.fChainNewXloaderCallbackForCallback = fChainNewXloaderCallbackForCallback;







            var pReceivedXloaderCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATEXLOADERCALLBACKS) {
                    return;
                }

                if( !this.RECORDXLOADERCALLBACKARGS) {
                    return;
                }

                if( !theCallback) {
                    return;
                }

                theM_callbacker.pReceivedCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedXloaderCallbackArg){}/* CQT */
            aPrototype.pReceivedXloaderCallbackArg = pReceivedXloaderCallbackArg;












            var fReplaceInNameToLoad = function( theNameToLoad) {

                if( !this.REPLACEXLOADERNAMES) {
                    return theNameToLoad;
                }

                if( !this.XLOADERPATHREPLACEMENTS) {
                    return theNameToLoad;
                }

                if( !theNameToLoad) {
                    return null;
                }


                var someNameToLoadSteps = theNameToLoad.split( this.PATHNAMESTEPSEPARATOR);
                if( !someNameToLoadSteps) {
                    return null;
                }

                var aNumNameSteps = someNameToLoadSteps.length;
                if( !aNumNameSteps) {
                    return null;
                }

                var aFirstStep = someNameToLoadSteps[ 0];
                if( !aFirstStep) {
                    return null;
                }

                if( !this.XLOADERPATHREPLACEMENTS.hasOwnProperty( aFirstStep)) {
                    return theNameToLoad;
                }


                var aFirstStepReplaced =  this.XLOADERPATHREPLACEMENTS[ aFirstStep];
                var someReplacedSteps = [ aFirstStepReplaced];

                var someRemainingSteps =  someNameToLoadSteps.slice( 1);
                Array.prototype.push.apply( someReplacedSteps, someRemainingSteps);

                var aReplacedNameToLoad = someReplacedSteps.join( this.PATHNAMESTEPSEPARATOR);
                if( aReplacedNameToLoad){}/* CQT */

                return aReplacedNameToLoad;

            };
            if( fReplaceInNameToLoad){}/* CQT */
            aPrototype.fReplaceInNameToLoad = fReplaceInNameToLoad;








            var fLoadXNamed = function( theNameToLoad) {

                if( theNameToLoad) {
                    this._v_NameToLoad = theNameToLoad;
                }

                if( !this._v_NameToLoad) {
                    return null;
                }

                this._v_NameToLoadReplaced = this.fReplaceInNameToLoad( this._v_NameToLoad);


                if( !this._v_NameToLoadReplaced) {
                    return null;
                }

                var aFullXPath = this._v_NameToLoadReplaced;
                if( this.PREPEND_XLOADER_PATH) {
                    aFullXPath = this.XLOADER_PATH_TO_ROOT + this.PATHNAMESTEPSEPARATOR + this._v_NameToLoadReplaced;
                }

                var aXLoaded = null;
                try {
                    aXLoaded = require( aFullXPath);
                }
                catch( anException) {
                    if( this.LOGEXCEPTIONDETAILS) {
                        theM_exceptiondetails.fExceptionDetail( anException);
                    }
                }
                if( !aXLoaded) {
                    return null;
                }

                return aXLoaded;
            };
            if( fLoadXNamed){}/* CQT */
            aPrototype.fLoadXNamed = fLoadXNamed;













            var pLoadXNamed = function( theNameToLoad, theCallback) {

                var aMethodName = "pLoadXNamed";

                this.pReceivedXloaderCallbackArg( theCallback, aMethodName);

                if( !theCallback) {
                    return;
                }

                if( theNameToLoad) {
                    this._v_NameToLoad = theNameToLoad;
                }

                if( !this._v_NameToLoad) {
                    theCallback( this.fRecord( aMethodName, this.XLOEVEKIND_NOTLOADED, null, "!this._v_NameToLoad", null));
                    return;
                }


                this._v_NameToLoadReplaced = this.fReplaceInNameToLoad( this._v_NameToLoad);

                if( !this._v_NameToLoadReplaced) {
                    theCallback( this.fRecord( aMethodName, this.XLOEVEKIND_NOTLOADED, null, "!this._v_NameToLoadReplaced", null));
                    return;
                }


                if( this.LOADX_FORCESYNC) {
                    var aXSyncLoaded = this.fLoadXNamed( this._v_NameToLoadReplaced);

                    theCallback( null, aXSyncLoaded);
                    return;
                }




                var aCallback = this.fLoadXCallback( theCallback, aMethodName);
                if( !aCallback) {
                    theCallback( this.fRecord( aMethodName, this.XLOEVEKIND_NOTLOADED, null, "!this.fLoadXCallback( theCallback)", null));
                    return;
                }


                var aExceptionHandler = this.fLoadXExceptionHandler( aCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {
                    if( this._v_NameToLoadReplaced.indexOf( this.PATHURLPREFIX) == 0) {
                        this.pLoadXNamed_async_remote( this._v_NameToLoadReplaced, aCallback);
                        return;
                    }

                    this.pLoadXNamed_async_local( this._v_NameToLoadReplaced, aCallback);
                }
                catch( anException) {
                    aExceptionHandler( anException);
                }

            };
            if( pLoadXNamed){}/* CQT */
            aPrototype.pLoadXNamed = pLoadXNamed;










            var pLoadXNamed_async_local = function( theNameToLoad, theCallback) {

                var aMethodName = "pLoadXNamed_async_local";

                if( !theNameToLoad) {
                    return;
                }

                var aThis = this;

                theM_nextticker.pNextTick( function() {
                    var aRes = aThis.fLoadXNamed( theNameToLoad);

                    aThis.pHandleXReceived( theCallback, theNameToLoad, aRes, aMethodName);
                });
            };
            if( pLoadXNamed_async_local){}/* CQT */
            aPrototype.pLoadXNamed_async_local = pLoadXNamed_async_local;













            var pLoadXNamed_async_remote = function( theNameToLoad, theCallback) {

                var aMethodName = "pLoadXNamed_async_remote";

                this.pReceivedXloaderCallbackArg( theCallback, aMethodName);


                if( !theNameToLoad) {
                    return;
                }

                if( theNameToLoad.indexOf( this.PATHURLPREFIX) < 0) {
                    theCallback( "theNameToLoad.indexOf( " + this.PATHURLPREFIX + ") < 0");
                    return;
                }




                var aThis = this;

                try {

                    var aRequestGetCallback = function ( theError, theResponse, theBody) {

                        try {
                            if( theBody){}/* CQT */

                            aThis.fRecord( aMethodName, aThis.XLOEVEKIND_RECEIVED, null, null, null);


                            if( theError) {
                                theCallback( aThis.fRecord( aMethodName, aThis.XLOEVEKIND_NOTLOADED, null, "theError", theError));
                                return;
                            }

                            if( !theResponse) {
                                theCallback( aThis.fRecord( aMethodName, aThis.XLOEVEKIND_NOTLOADED, null, "!theResponse", null));
                                return;
                            }


                            if( !theResponse.statusCode || ( aThis.XLOADSTATUSCODESOK.indexOf( theResponse.statusCode) < 0)) {
                                theCallback( aThis.fRecord( aMethodName, aThis.XLOEVEKIND_NOTLOADED, null, "!( theResponse.statusCode in " + aThis.XLOADSTATUSCODESOK.join( ",") + ")", theResponse.statusCode));
                            }


                            var aBody = theResponse.body;
                            if( typeof aBody == "undefined") {
                                theCallback( aThis.fRecord( aMethodName, aThis.XLOEVEKIND_NOTLOADED, null, "typeof theResponse.body == 'undefined'", null));
                                return;
                            }


                            aThis.pHandleXReceived( theCallback, theNameToLoad, aBody, aMethodName);

                        }
                        catch( anException) {
                            var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                            var aRecord = aThis.fRecord( aMethodName, aThis.XLOEVEKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                            theCallback( aThis.fRecord( aMethodName, aThis.XLOEVEKIND_NOTLOADED, null, aRecord, null));
                        }
                    };




                    var aWrappedRequestGetCallback = this.fChainNewXloaderCallbackForCallback( aRequestGetCallback, "pLoadXNamed_async_remote", theCallback, aMethodName);


                    /* *************************+
                     Send request and receive reply now
                     */
                    theM_httprequest.pHttpRequest_get(
                        theNameToLoad,
                        {},
                        aWrappedRequestGetCallback
                    );



                }
                catch( anException) {
                    var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( anException);
                    var aRecord = this.fRecord( aMethodName, this.XLOEVEKIND_CATCHED_EXCEPTION, null, anException, aExceptionDetail);
                    theCallback( this.fRecord( aMethodName, this.XLOEVEKIND_NOTLOADED, null, aRecord, null));
                }
            };
            if( pLoadXNamed_async_remote){}/* CQT */
            aPrototype.pLoadXNamed_async_remote = pLoadXNamed_async_remote;








            var fLoadXCallback = function( theCallback) {
                var aMethodName = "fLoadXCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( theError) {
                        theCallback( aThis.fRecord( aMethodName, aThis.XLOEVEKIND_NOTLOADED, null, theError, null));
                        return;
                    }


                    if( theResult == null) {
                        theCallback( aThis.fRecord( aMethodName, aThis.XLOEVEKIND_NOTLOADED, null, "theResult == null", null));
                        return;
                    }

                    theCallback( null, theResult);

                }).bind( this);

                var aWrappedCallback = this.fChainNewXloaderCallbackForCallback( aCallback, "fLoadXCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fLoadXCallback){}/* CQT */
            aPrototype.fLoadXCallback = fLoadXCallback;










            var fLoadXExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( theMethodName, aThis.XLOEVEKIND_NOTLOADED, null, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = theM_exceptiondetails.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( theMethodName, aThis.XLOEVEKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( theMethodName, aThis.XLOEVEKIND_NOTLOADED, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fLoadXExceptionHandler){}/* CQT */
            aPrototype.fLoadXExceptionHandler = fLoadXExceptionHandler;









            var pHandleXReceived = function(  theCallback, theNameToLoad, theXReceived, theMethodName) {

                if( this.LOGXLOADS) {
                    this.fRecord( theMethodName, this.XLOEVEKIND_LOADED, theNameToLoad, theXReceived);
                }

                if( typeof theXReceived == "undefined") {
                    theCallback( this.fRecord( theMethodName, this.XLOEVEKIND_NOTLOADED, null, "typeof theXReceived == 'undefined'", null));
                    return;
                }

                if( !theXReceived) {
                    theCallback( this.fRecord( theMethodName, this.XLOEVEKIND_NOTLOADED, null, "!theXReceived", null));
                    return;
                }


                if( this.LOGXLOADS) {
                    this.fRecord( theMethodName, this.XLOEVEKIND_LOADED, theXReceived, theNameToLoad);
                }

                theCallback( null, theXReceived);

            };
            if( pHandleXReceived){}/* CQT */
            aPrototype.pHandleXReceived = pHandleXReceived;








            return aPrototype;

        })();






        var XLoader_Constructor = function( theTitle, theNameToLoad) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Title      = null;

            this._v_NameToLoad = null;
            this._v_Records    = null;
            this._v_XLoaded    = null;

            this._v_NameToLoadReplaced    = null;

            this._pInit_XLoader( theTitle, theNameToLoad);
        };
        XLoader_Constructor.prototype = aXLoader_Prototype;





        var XLoader_SuperPrototypeConstructor = function() {
            this._v_Prototype = aXLoader_Prototype;
            this._v_Type = null;

            this._v_Title      = null;

            this._v_NameToLoad = null;
            this._v_Records    = null;
            this._v_XLoaded    = null;

            this._v_NameToLoadReplaced    = null;
        };
        XLoader_SuperPrototypeConstructor.prototype = aXLoader_Prototype;







        var aRes = {
            "XLoader_Prototype": aXLoader_Prototype,
            "XLoader_Constructor": XLoader_Constructor,
            "XLoader_SuperPrototypeConstructor": XLoader_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aRes);



        aRes.ModuleGlobals = ModuleGlobals;




        return aRes;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../exceptiondetails');
            var aM_xloadrecord      = require('./xloadrecord');
            var aM_nextticker       = require('../../infrasvcs/nextticker/nextticker');
            var aM_httprequest      = require('../../infrasvcs/httprequest/httprequest');
            var aM_callbacker       = require('../callbacker');
            var aM_overrider         = require('../overrider');
            var aM_sentinels         = require('../sentinels');

            return aMod_definer( aM_exceptiondetails, aM_xloadrecord, aM_nextticker, aM_httprequest, aM_callbacker, aM_overrider, aM_sentinels);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../exceptiondetails",
            "./xloadrecord",
            "../../infrasvcs/nextticker/nextticker",
            "../../infrasvcs/httprequest/httprequest",
            "../callbacker",
            "../overrider",
            "../sentinels"
        ], function (
                theM_exceptiondetails,
                theM_xloadrecord,
                theM_nextticker,
                theM_httprequest,
                theM_callbacker,
                theM_overrider,
                theM_sentinels
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_xloadrecord,
                theM_nextticker,
                theM_httprequest,
                theM_callbacker,
                theM_overrider,
                theM_sentinels
            );
        });
    }



}());