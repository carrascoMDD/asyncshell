'use strict';

/*
 httprequest-generic-test.js
 Created 201409212117
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

    var aMod_definer = function( theM_sentinels,
                                 theM_stacktrace,
                                 theM_overrider) {


        var ModuleName     = "httprequest-generic-test";
        var ModulePackages = "infrasvcs-test/httprequest";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.URLHOSTREPLACEABLE = "{{host}}";
            theToInit.URLPORTREPLACEABLE = "{{port}}";

            theToInit.URLHOSTREPLACEMENT = "localhost";
            theToInit.URLPORTREPLACEMENT = "8080";

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

            theToInit.LOGEXCEPTIONDETAILS = true;
            theToInit.LOGSPECPATHS        = true;
            theToInit.LOGREQUESTS         = true;
            theToInit.LOGREPLIES          = true;
            theToInit.LOGERRORS           = true;

            theToInit.MAXERRORSTRINGLEN    = 32768;
            theToInit.MAXRESPONSESTRINGLEN = 32768;

            theToInit.HTTPREQUESTTESTPATHTOROOT = "../../..";

            theToInit.HTTPREQUESTTESTPATHTOTESTSROOT = theToInit.HTTPREQUESTTESTPATHTOROOT + "/tests";

            theToInit.PATHSEPARATOR = "/";

            theToInit.SCHEMEDEFAULT = "http://";
            theToInit.PORTSEPARATOR = ":";
            theToInit.URLQUERY = "?";
            theToInit.URLEXTRAPARM = "&";
            theToInit.URLPARMEQUAL = "=";


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













        var aHttpRequestGenericTest_Prototype = (function() {


            var aPrototype = { };

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_Type = "HttpRequestGenericTest";
            aPrototype._v_Module = null;


            aPrototype._v_RequestSpecsOrPath    = null;

            aPrototype._v_RequestSpecs          = null;
            aPrototype._v_AlreadyRequestedSpecs = null;

            aPrototype._v_RequestReplyReports   = null;







            var _pInit = function( theTitle, theRequestSpecsPath) {

                this._pInit_HttpRequestGenericTest( theTitle, theRequestSpecsPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_HttpRequestGenericTest = function( theTitle, theRequestSpecsPath) {

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_RequestSpecsOrPath    = theRequestSpecsPath;

                this._v_RequestSpecs          = null;
                this._v_AlreadyRequestedSpecs = [ ];

                this._v_RequestReplyReports   = [ ];
            };
            if( _pInit_HttpRequestGenericTest){}/* CQT */
            aPrototype._pInit_HttpRequestGenericTest = _pInit_HttpRequestGenericTest;









            var fExceptionDetail = function( theException) {
                if( !theException) {
                    return null;
                }


                var anExceptionDetail = {
                    exception: theException.toString()
                };


                var anExceptionTrace = theM_stacktrace( { e: theException});
                if( anExceptionTrace) {
                    anExceptionDetail.trace = anExceptionTrace;
                }

                if( this.LOGEXCEPTIONDETAILS) {
                    console.log( "exception:" + anExceptionDetail.exception);
                    console.log( anExceptionDetail.recex);
                    console.log( anExceptionDetail.trace);
                }

                return anExceptionDetail;
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;













            var pInitFinderToRequestNext = function( theRequestSpecs) {
                this._v_RequestSpecs          = theRequestSpecs;
                this._v_AlreadyRequestedSpecs = [ ];
            };
            if( pInitFinderToRequestNext){}/* CQT */
            aPrototype.pInitFinderToRequestNext = pInitFinderToRequestNext;






            var pTryToRequestNextSpec = function( theCallback) {

                var aSpecToRequestNext = this.fFindSpecToRequestNext();
                if( !aSpecToRequestNext) {
                    theCallback();
                    return;
                }

                this._v_AlreadyRequestedSpecs.push( aSpecToRequestNext);

                this.pRequestNextSpec( theCallback, aSpecToRequestNext);
            };
            if( pTryToRequestNextSpec){}/* CQT */
            aPrototype.pTryToRequestNextSpec = pTryToRequestNextSpec;








            var fFindSpecToRequestNext = function() {

                if( !this._v_RequestSpecs) {
                    return null;
                }

                var aPendingRequestSpec = null;

                var aNumRequestSpecs = this._v_RequestSpecs.length;
                for( var aRequestSpecIdx=0; aRequestSpecIdx < aNumRequestSpecs; aRequestSpecIdx++) {

                    var aRequestSpec = this._v_RequestSpecs[ aRequestSpecIdx];

                    if( this._v_AlreadyRequestedSpecs.indexOf( aRequestSpec) < 0) {
                        aPendingRequestSpec = aRequestSpec;
                        break;
                    }
                }
                if( !aPendingRequestSpec) {
                    return null;
                }

                return aPendingRequestSpec;
            };
            if( fFindSpecToRequestNext){}/* CQT */
            aPrototype.fFindSpecToRequestNext = fFindSpecToRequestNext;








            var fRequestNextSpecCallback = function( theCallback) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;

                var aCallback = (function( theError) {

                    if( theError) {
                        theCallback( theError);
                        return;
                    }

                    aThis.pTryToRequestNextSpec( theCallback);

                });
                if( aCallback){}/* CQT */

                return aCallback;
            };
            if( fRequestNextSpecCallback){}/* CQT */
            aPrototype.fRequestNextSpecCallback = fRequestNextSpecCallback;








            var fExceptionNextRequestSpecHandler = function( theCallback) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;

                var anExceptionHandler = function( theException) {

                    if( !theException) {
                        theCallback( "!theException");
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    if( aExceptionDetail){}/* CQT */

                    theCallback( aExceptionDetail);

                };
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;

            };
            if( fExceptionNextRequestSpecHandler){}/* CQT */
            aPrototype.fExceptionNextRequestSpecHandler = fExceptionNextRequestSpecHandler;















            var fOverallHttpRequestGenericCallback = function( theCallback) {

                if( !theCallback) {
                    return null;
                }

                var aCallback = function( theError) {

                    if( theError) {
                        if( theCallback) {
                            theCallback( theError);
                        }
                        return;
                    }

                    theCallback();

                };
                if( aCallback){}/* CQT */

                return aCallback;
            };
            if( fOverallHttpRequestGenericCallback){}/* CQT */
            aPrototype.fOverallHttpRequestGenericCallback = fOverallHttpRequestGenericCallback;








            var fOverallExceptionHandler = function( theCallback) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;

                var anExceptionHandler = function( theException) {

                    if( !theException) {
                        theCallback( "!theException");
                        return;
                    }

                    var anExceptionDetail = aThis.fExceptionDetail( theException);
                    if( anExceptionDetail){}/* CQT */

                    theCallback( anExceptionDetail);

                };
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallExceptionHandler){}/* CQT */
            aPrototype.fOverallExceptionHandler = fOverallExceptionHandler;















            var fNewVoidRequestReplyReport = function() {

                var aRequestReplyReport = {
                    "spec": null,
                    "request": {
                        "url":     null,
                        "method":  null,
                        "data":    null
                    },
                    "reply": {
                        "error":    null,
                        "response": null,
                        "status":   null,
                        "body":     null
                    }
                };
                if( aRequestReplyReport){}/* CQT */

                return aRequestReplyReport;
            };
            if( fNewVoidRequestReplyReport){}/* CQT */
            aPrototype.fNewVoidRequestReplyReport = fNewVoidRequestReplyReport;






            var pAddRequestReplyReport = function( theRequestReplyReport) {
                if( !theRequestReplyReport) {
                    return;
                }

                if( this._v_RequestReplyReports.indexOf( theRequestReplyReport) >= 0) {
                    return;
                }

                this._v_RequestReplyReports.push( theRequestReplyReport);
            };
            if( pAddRequestReplyReport){}/* CQT */
            aPrototype.pAddRequestReplyReport = pAddRequestReplyReport;










            var pRequestNextSpec = function( theCallback, theRequestTestSpec) {

                if( !theCallback) {
                    return;
                }

                if( !theRequestTestSpec) {
                    theCallback();
                    return;
                }



                var aRequestReplyReport = this.fNewVoidRequestReplyReport();
                aRequestReplyReport[ "spec"] = theRequestTestSpec;

                this.pAddRequestReplyReport( aRequestReplyReport);



                var aName = theRequestTestSpec[ "name"];
                if( !aName) {
                    aName = "?";
                }

                var aURL = theRequestTestSpec[ "url"];
                if( !aURL) {

                    var aScheme = theRequestTestSpec[ "scheme"];
                    if( !aScheme) {
                        aScheme = this.SCHEMEDEFAULT;
                    }

                    var aHost = theRequestTestSpec[ "host"];
                    if( !aHost) {
                        theCallback( "!aURL && !aHost");
                        return;
                    }

                    var aPort = theRequestTestSpec[ "port"];
                    if( !aPort) {
                        theCallback( "!aURL && !aPort");
                        return;
                    }

                    var aPath = theRequestTestSpec[ "urlpath"];
                    if( !aPath) {
                        theCallback( "!aURL && !aPath");
                        return;
                    }

                    aURL = aScheme + aHost + this.PORTSEPARATOR + aPort + aPath;
                }

                if( !aURL) {
                    theCallback( "!aURL");
                    return;
                }


                if( this.URLHOSTREPLACEABLE && this.URLHOSTREPLACEMENT) {
                    if ( aURL.indexOf( this.URLHOSTREPLACEABLE) >= 0) {
                        aURL = aURL.replace( this.URLHOSTREPLACEABLE, this.URLHOSTREPLACEMENT);
                    }
                }

                if( this.URLPORTREPLACEABLE && this.URLPORTREPLACEMENT) {
                    if ( aURL.indexOf( this.URLPORTREPLACEABLE) >= 0) {
                        aURL = aURL.replace( this.URLPORTREPLACEABLE, this.URLPORTREPLACEMENT);
                    }
                }


                var aParms = theRequestTestSpec[ "parms"];
                if( aParms) {

                    var someParmKeys = Object.keys( aParms);
                    var aNumParmKeys = someParmKeys.length;
                    for( var aParmKeyIdx=0; aParmKeyIdx < aNumParmKeys; aParmKeyIdx++) {

                        var aParmKey   = someParmKeys[ aParmKeyIdx];
                        var aParmValue = aParms[ aParmKey];

                        var aParmKeyEncoded = encodeURIComponent( aParmKey);

                        var aParmValueEncoded = null;
                        if( !( aParmValue == null)) {
                            aParmValueEncoded = encodeURIComponent( aParmValue);
                        }

                        if( aURL.indexOf( this.URLQUERY) < 0) {
                            aURL += this.URLQUERY;
                        }
                        else {
                            aURL += this.URLEXTRAPARM;
                        }

                        aURL += aParmKeyEncoded + this.URLPARMEQUAL + aParmValueEncoded;
                    }
                }

                aRequestReplyReport[ "request"][ "url"] = aURL;




                var aMethod = theRequestTestSpec[ "method"];
                if( !( ( aMethod == "get") || ( aMethod == "post"))) {
                    theCallback( "!( ( aMethod == 'get') || ( aMethod == 'post'))");
                    return;
                }

                aRequestReplyReport[ "request"][ "method"] = aURL;




                var aRequestData = { };


                var aJson = theRequestTestSpec[ "json"];
                if( !( typeof aJson == "undefined") && !( aJson == null)) {
                    aRequestData[ "json"] = true;
                }


                var aForm = theRequestTestSpec[ "form"];
                if( aForm) {
                    aRequestData[ "form"] = aForm;
                }

                var aBody = theRequestTestSpec[ "body"];
                if( aBody) {
                    aRequestData[ "body"] = aBody;
                }

                aRequestReplyReport[ "request"][ "data"] = aRequestData;


                if( this.LOGREQUESTS) {
                    console.log( "\n" + aName + " " + aMethod.toUpperCase() + " URL=" + aURL + "    DATA=" + JSON.stringify( aRequestData));
                }



                var aCallback = this.fRequestNextSpecCallback( theCallback);
                if( !aCallback) {
                    theCallback( "!aCallback");
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */
                var anExceptionHandler = this.fExceptionNextRequestSpecHandler( aCallback);

                try {

                    var aRequestVerbCallback = this.fRequestVerbCallback( aCallback, theRequestTestSpec, aRequestReplyReport);

                    this.pInvokeRequest( aMethod, aURL, aRequestData, aRequestVerbCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
            };
            if( pRequestNextSpec){}/* CQT */
            aPrototype.pRequestNextSpec = pRequestNextSpec;











            var pInvokeRequest = function( theMethod, theURL, theRequestData, theRequestVerbCallback) {

                if( !theRequestVerbCallback) {
                    return;
                }

                if( !theMethod) {
                    theRequestVerbCallback( "pInvokeRequest !theMethod");
                    return;
                }

                if( !theURL) {
                    theRequestVerbCallback( "pInvokeRequest !theURL");
                    return;
                }

                if( !theRequestData) {
                    theRequestVerbCallback( "pInvokeRequest !theRequestData");
                    return;
                }


                theCallback( "pInvokeRequest subtype responsibility");
            };
            if( pInvokeRequest){}/* CQT */
            aPrototype.pInvokeRequest = pInvokeRequest;







            var fRequestVerbCallback = function( theCallback, theRequestTestSpec, theRequestReplyReport) {

                if( !theCallback) {
                    return null;
                }

                var aRequestTestSpec    = theRequestTestSpec;
                var aRequestReplyReport = theRequestReplyReport;


                var aThis = this;
                var aCallback = function ( theError, theResponse, theBody) {

                    if( aRequestReplyReport) {
                        aRequestReplyReport[ "reply"][ "error"]    = theError;
                        aRequestReplyReport[ "reply"][ "response"] = theResponse;
                        aRequestReplyReport[ "reply"][ "body"]     = theBody;
                        if( theResponse) {
                            aRequestReplyReport[ "reply"][ "status"]   = theResponse.statusCode;
                        }
                    }

                    if ( theError) {
                        var anErrorStr = "";
                        try {
                            anErrorStr = JSON.stringify( theError);
                        }
                        catch( anException) {
                            anErrorStr = theError.toString();
                        }

                        if( aThis.LOGERRORS) {
                            var aMessage = "fRequestVerbCallback Error " + anErrorStr.slice( 0, aThis.MAXERRORSTRINGLEN);
                            console.log( aMessage);
                        }

                        theCallback( aMessage);
                        return;
                    }


                    if ( !theResponse.statusCode == 200) {
                        if( aThis.LOGERRORS) {
                            var otherMessage = "fRequestVerbCallback ErrorstatusCode=" + theResponse.statusCode;
                            console.log( otherMessage);
                        }

                        theCallback( otherMessage);
                        return;
                    }


                    var aExpected = aRequestTestSpec[ "expect"];
                    if( aExpected) {

                        if( typeof aExpected == "string") {
                            if( !( theBody == aExpected)) {
                                theCallback( "fRequestVerbCallback !( theBody == '" + aExpected + "')  theBody=" + theBody);
                                return;
                            }
                        }
                        else {
                            var someExpectedKeys = Object.keys( aExpected);
                            var aNumExpectedKeys = someExpectedKeys.length;
                            for( var anExpectedKeyIdx=0; anExpectedKeyIdx < aNumExpectedKeys; anExpectedKeyIdx++) {

                                var anExpectedKey = someExpectedKeys[ anExpectedKeyIdx];

                                var aBodyValue = theBody[ anExpectedKey];

                                if( typeof aBodyValue == "undefined") {
                                    theCallback( "fRequestVerbCallback undefined theBody['" +  anExpectedKey + "']");
                                    return;
                                }

                                var anExpectedValue = aExpected[ anExpectedKey];

                                if( !( aBodyValue == anExpectedValue)) {
                                    theCallback( "fRequestVerbCallback !( theBody['" +  anExpectedKey + "'] == " + anExpectedValue + ")");
                                    return;
                                }
                            }
                        }
                    }

                    if( aThis.LOGREPLIES) {

                        var aBodyStr = "";
                        try {
                            aBodyStr = JSON.stringify( theBody);
                        }
                        catch( anException) {
                            aBodyStr = aBodyStr.toString() + "\nException in JSON.stringify:\n" + aThis.fExceptionDetail( anException);
                        }
                        if( !aBodyStr) {
                            aBodyStr = "";
                        }
                        console.log( "Response " + aBodyStr.slice( 0, aThis.MAXRESPONSESTRINGLEN));
                    }

                    theCallback( null, theBody);

                };
                if( aCallback){}/* CQT */

                return aCallback;
            };
            if( fRequestVerbCallback){}/* CQT */
            aPrototype.fRequestVerbCallback = fRequestVerbCallback;












            var fReplaceRootSymbolInPath = function( theOriginal, theRootSymbol, theRootPath) {
                if( !theOriginal) {
                    return theOriginal;
                }

                if( !theRootSymbol) {
                    return theOriginal;
                }

                if( !( typeof theRootPath == "string") || !theRootPath.length)  {
                    return theOriginal;
                }


                var aReplaced = theOriginal;

                var someNameSteps = theOriginal.split( this.PATHSEPARATOR);
                if( someNameSteps) {
                    var aNumNameSteps = someNameSteps.length;
                    if( aNumNameSteps) {

                        var aFirstStep = someNameSteps[ 0];
                        if( aFirstStep == theRootSymbol) {

                            someNameSteps[ 0] = theRootPath;
                            aReplaced = someNameSteps.join( this.PATHSEPARATOR);
                        }
                    }
                }

                return aReplaced;
            };
            if( fReplaceRootSymbolInPath){}/* CQT */
            aPrototype.fReplaceRootSymbolInPath = fReplaceRootSymbolInPath;






            var fLoadRequestSpecs = function( theCallback) {

                if( this._v_RequestSpecs) {
                    return this._v_RequestSpecs;
                }

                if( !this._v_RequestSpecsOrPath) {
                    return null;
                }


                if( typeof this._v_RequestSpecsOrPath == "object") {

                    if( typeof this._v_RequestSpecsOrPath.length == "undefined") {
                        return null;
                    }

                    return this._v_RequestSpecsOrPath;
                }


                if( this.LOGSPECPATHS) {
                    console.log( "RequestSpecPath=" + this._v_RequestSpecsOrPath);
                }



                var aRequestSpecsPath = this.fReplaceRootSymbolInPath(
                    this._v_RequestSpecsOrPath,
                    theM_sentinels.ROOTPATHSTEPSYMBOL,
                    this.HTTPREQUESTTESTPATHTOROOT
                );


                aRequestSpecsPath = this.fReplaceRootSymbolInPath(
                    aRequestSpecsPath,
                    theM_sentinels.SPECPATHROOTPATHSTEPSYMBOL,
                    this.HTTPREQUESTTESTPATHTOTESTSROOT
                );


                if( this.LOGSPECPATHS) {
                    console.log("Replaced RequestSpecPath=" +  aRequestSpecsPath);
                }


                var aRequestSpecs = null;
                try {
                    aRequestSpecs = require( aRequestSpecsPath);
                }
                catch( anException) {
                    var anExceptionDetails = this.fExceptionDetail( anException);
                    if( this.LOGEXCEPTIONDETAILS) {
                        console.log( anExceptionDetails);
                    }

                    theCallback( anExceptionDetails);
                    return null;
                }
                if( !aRequestSpecs) {
                    theCallback( "!aRequestSpecs");
                    return null;
                }

                return aRequestSpecs;
            };
            if( fLoadRequestSpecs){}/* CQT */
            aPrototype.fLoadRequestSpecs = fLoadRequestSpecs;









            var pF_HttpRequestGenericTest = function( theCallback) {

                this._v_RequestSpecs = this.fLoadRequestSpecs();

                if( !this._v_RequestSpecs) {
                    theCallback( "!this._v_RequestSpecs");
                    return;
                }




                var aExceptionHandler = this.fOverallExceptionHandler( theCallback);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }



                try {

                    var aCallback = this.fOverallHttpRequestGenericCallback( theCallback);
                    if( !aCallback) {
                        theCallback( "!aCallback");
                        return;
                    }


                    this.pInitFinderToRequestNext( this._v_RequestSpecs);


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    process.nextTick(
                        function() {
                            try {
                                aThis.pTryToRequestNextSpec( aCallback);
                            }
                            catch( anException) {
                                aExceptionHandler( anException);
                            }
                        }
                    );

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pF_HttpRequestGenericTest){}/* CQT */
            aPrototype.pF_HttpRequestGenericTest = pF_HttpRequestGenericTest;






            var pF_HttpRequestTest = function( theCallback) {

                theCallback( );

                /* sybtype responsibility pF_HttpRequestTest

                this.pF_HttpRequestGenericTest( theCallback);
                */
            };
            if( pF_HttpRequestTest){}/* CQT */
            aPrototype.pF_HttpRequestTest = pF_HttpRequestTest;






            return aPrototype;

        })();




        var HttpRequestGenericTest_Constructor = function( theTitle, theRequestSpecsOrPath) {

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_RequestSpecsOrPath    = null;

            this._v_RequestSpecs          = null;
            this._v_AlreadyRequestedSpecs = null;

            this._v_RequestReplyReports   = null;

            this._pInit_HttpRequestGenericTest( theTitle, theRequestSpecsOrPath);
        };
        HttpRequestGenericTest_Constructor.prototype = aHttpRequestGenericTest_Prototype;





        var HttpRequestGenericTest_SuperPrototypeConstructor = function() {

            this._v_Prototype = aHttpRequestGenericTest_Prototype;
            this._v_Type = null;
            this._v_Module    = null;

            this._v_RequestSpecsOrPath    = null;

            this._v_RequestSpecs          = null;
            this._v_AlreadyRequestedSpecs = null;

            this._v_RequestReplyReports   = null;
        };
        HttpRequestGenericTest_SuperPrototypeConstructor.prototype = aHttpRequestGenericTest_Prototype;






        var aModule = {
            "HttpRequestGenericTest_Prototype": aHttpRequestGenericTest_Prototype,
            "HttpRequestGenericTest_Constructor": HttpRequestGenericTest_Constructor,
            "HttpRequestGenericTest_SuperPrototypeConstructor": HttpRequestGenericTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aHttpRequestGenericTest_Prototype._v_Module = aModule;


        return aModule;
    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_sentinels   = require('../../common-test/sentinels');
            var aM_stacktrace  = require('../../thirdparty/stacktrace');
            var aM_overrider   = require('../../common-test/overrider');

            return aMod_definer(
                aM_sentinels,
                aM_stacktrace,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../common-test/sentinels",
            "../../thirdparty/stacktrace",
            "'../../common-test/overrider"
        ], function (
            theM_sentinels,
            theM_stacktrace,
            theM_overrider
            ) {
            return aMod_definer(
                theM_sentinels,
                theM_stacktrace,
                theM_overrider
            );
        });
    }


}());