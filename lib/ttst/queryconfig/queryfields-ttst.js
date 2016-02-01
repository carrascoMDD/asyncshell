'use strict';

/*
 queryfields-ttst.js
 Created 201408140155
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

    var aMod_definer =function( theM_queryexpected) {


        var ModuleName     = "queryfields-ttst";
        var ModulePackages = "ttst/queryconfig";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }
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








        var aQueryFieldsTtst_Prototype = (function() {


            var aPrototype = new theM_queryexpected.QueryExpectedTtst_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_queryexpected.QueryExpectedTtst_Prototype;


            aPrototype._v_Type = "QueryFieldsTtst";




            var _pInit = function( theTitle, theConfigSpec, theExpectedValues) {

                this._pInit_QueryFieldsTtst( theTitle, theConfigSpec, theExpectedValues);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_QueryFieldsTtst = function( theTitle, theConfigSpec, theExpectedValues) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_QueryExpectedTtst.apply( this, [ theTitle, theConfigSpec, theExpectedValues]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this.fRecord( "_pInit_QueryFieldsTtst", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_QueryFieldsTtst){}/* CQT */
            aPrototype._pInit_QueryFieldsTtst = _pInit_QueryFieldsTtst;












            var fCompareFieldResolvedValueWithExpected = function( theResolvedValue, theExpectedValue) {
                if( ( typeof theResolvedValue == "undefined") || ( typeof theExpectedValue == "theExpectedValue")) {
                    return false;
                }

                if( !( theResolvedValue === theExpectedValue)) {
                    return false;
                }

                var aComparison = theResolvedValue === theExpectedValue;
                if( aComparison){}/* CQT */

                return aComparison;
            };
            if( fCompareFieldResolvedValueWithExpected){}/* CQT */
            aPrototype.fCompareFieldResolvedValueWithExpected = fCompareFieldResolvedValueWithExpected;










            var pS_fieldResolutionsForExpected= function( theCallback) {
                var aMethodName = "pS_fieldResolutionsForExpected";

                if( !(typeof this._v_ExpectedValues == "object") || !this._v_ExpectedValues || !this._v_ExpectedValues.length) {
                    theCallback( null, this.fRecord( aMethodName, this.EVTKIND_OK, this._v_Resolutions, null, null));
                }



                var aThis = this;

                this.pS_Do(
                    theCallback,
                    aMethodName,
                    function( theOtherCallback) {

                        if( !aThis._v_ExpectedValues || !aThis._v_ExpectedValues.length) {
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, null, "!aThis._v_ExpectedValues", null));
                            return;
                        }

                        if( !aThis._v_ParsedConfiguration) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!aThis._v_ParsedConfiguration", null));
                            return;
                        }


                        aThis._v_Resolutions = [ ];


                        var aNumExpectedSpecs = aThis._v_ExpectedValues.length;
                        for( var anExpectedSpecsIdx=0; anExpectedSpecsIdx < aNumExpectedSpecs; anExpectedSpecsIdx++) {
                            var anExpectedSpec = aThis._v_ExpectedValues[ anExpectedSpecsIdx];
                            if( anExpectedSpec) {

                                var aPath = anExpectedSpec[ "path"];
                                if( !aPath) {
                                    aPath = aThis._v_ParsedConfiguration.SUBPATH_THIS;
                                }


                                var aConfigurationToQuery = aThis._v_ParsedConfiguration.fSubWithPath( aPath);
                                if( !aConfigurationToQuery) {
                                    theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "aThis._v_ParsedConfiguration.fSubWithPath( '" + aPath + "')", null));
                                    return;
                                }
                                aThis.fRecord( aMethodName, aThis.EVTKIND_INFO, aConfigurationToQuery, null, null);





                                var someExpectedFields    = anExpectedSpec[ "expectedFields"];

                                var someFailedFieldNames  = anExpectedSpec[ "failedFields"];
                                if( !someFailedFieldNames) {
                                    someFailedFieldNames = [];
                                }
                                var someAbsentFieldNames  = anExpectedSpec[ "absentFields"];
                                if( !someAbsentFieldNames) {
                                    someAbsentFieldNames = [];
                                }


                                if( someExpectedFields) {

                                    var someExpectedFieldNames = Object.keys( someExpectedFields);

                                    
                                    var aNumFailedFieldNames = someFailedFieldNames.length;
                                    for( var otherFieldIdx=0; otherFieldIdx < aNumFailedFieldNames; otherFieldIdx++) {
                                        var otherFieldName = someFailedFieldNames[ otherFieldIdx];
                                        if( someExpectedFieldNames.indexOf( otherFieldName) < 0) {
                                            someExpectedFieldNames.push( otherFieldName);
                                        }
                                    }

                                    var aNumAbsentFieldNames = someAbsentFieldNames.length;
                                    for( var anotherFieldIdx=0; anotherFieldIdx < aNumAbsentFieldNames; anotherFieldIdx++) {
                                        var anotherFieldName = someAbsentFieldNames[ anotherFieldIdx];
                                        if( someExpectedFieldNames.indexOf( anotherFieldName) < 0) {
                                            someExpectedFieldNames.push( anotherFieldName);
                                        }
                                    }




                                    var someFieldResolutions = aConfigurationToQuery.fFieldResolutionsByName( someExpectedFieldNames, [ ]);




                                    var aNumExpectedFieldNames = someExpectedFieldNames.length;
                                    for( var anExpectedFieldNameIdx=0; anExpectedFieldNameIdx < aNumExpectedFieldNames; anExpectedFieldNameIdx++) {

                                        var anExpectedFieldName  = someExpectedFieldNames[ anExpectedFieldNameIdx];
                                        var anExpectedFieldValue = someExpectedFields[ anExpectedFieldName];

                                        var anExpectedResolution = someFieldResolutions[ anExpectedFieldName];


                                        if( !anExpectedResolution) {
                                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "Internal: no Resolution obtained for field name", anExpectedFieldName));
                                            return;
                                        }



                                        var anOutcomeMessage = null;


                                        if( !anOutcomeMessage) {
                                            if( !anExpectedResolution._v_Success) {
                                                if ( someAbsentFieldNames.indexOf( anExpectedFieldName) < 0) {
                                                    anOutcomeMessage = "Field not resolved and not in absent list";
                                                }
                                            }
                                        }




                                        if( !anOutcomeMessage) {
                                            if( anExpectedResolution._v_Success) {

                                                aThis._v_Resolutions.push( anExpectedResolution);

                                                aThis.fRecord( aMethodName, aThis.EVTKIND_INFO, anExpectedResolution, null, null);


                                                var aResolvedFieldValue  = anExpectedResolution._v_FieldValue;

                                                if( aThis.fCompareFieldResolvedValueWithExpected( aResolvedFieldValue, anExpectedFieldValue)) {

                                                    if ( someFailedFieldNames.indexOf( anExpectedFieldName) >= 0) {
                                                        anOutcomeMessage = "Field in failed list has resolved with correct value";
                                                    }
                                                }
                                                else {
                                                    if ( someFailedFieldNames.indexOf( anExpectedFieldName)  < 0){
                                                        anOutcomeMessage = "Field resolved with wrong value but not in failed list";
                                                    }
                                                }
                                            }
                                        }



                                        if( anOutcomeMessage) {
                                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, anExpectedResolution, anOutcomeMessage, anExpectedFieldName));
                                            return;
                                        }

                                    }
                                }
                            }
                        }


                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_Resolutions, null, null));
                    }
                );
            };
            if( pS_fieldResolutionsForExpected){}/* CQT */
            aPrototype.pS_fieldResolutionsForExpected = pS_fieldResolutionsForExpected;







            var fOwnTtstMethodToRun = function() {
                return this.pSS_QueryFieldsTtst.bind( this);
            };
            if( fOwnTtstMethodToRun){}/* CQT */
            aPrototype.fOwnTtstMethodToRun = fOwnTtstMethodToRun;








            var pSS_QueryFieldsTtst = function( theCallback) {
                var aMethodName = "pF_QueryFieldsTtst";
                this.fRecord( aMethodName, this.EVTKIND_INFO, this._v_ExpectedValues, null, null);

                this.pNowStarted();

                this.pF_LightAsyncSeries(
                    theCallback,
                    aMethodName,
                    [
                        this.pS_readConfig.bind( this),
                        this.pS_readExpectedValues.bind( this),
                        this.pS_parse.bind( this),
                        this.pS_sanitizedspec.bind( this),
                        this.pS_storeJSON.bind( this),
                        this.pS_resolveImports.bind( this),
                        this.pS_resolveExports.bind( this),
                        this.pS_fieldResolutionsForExpected.bind( this)
                    ]
                );
            };
            if( pSS_QueryFieldsTtst){}/* CQT */
            aPrototype.pSS_QueryFieldsTtst = pSS_QueryFieldsTtst;









            return aPrototype;

        })();







        var QueryFieldsTtst_Constructor = function( theTitle, theConfigSpec, theExpectedValues) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_queryexpected.QueryExpectedTtst_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ExpectedValues    = null;
            this._v_Resolutions = null;

            this._pInit_QueryFieldsTtst( theTitle, theConfigSpec, theExpectedValues);
        };
        QueryFieldsTtst_Constructor.prototype = aQueryFieldsTtst_Prototype;





        var QueryFieldsTtst_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_queryexpected.QueryExpectedTtst_Prototype;

            this._v_Prototype = aQueryFieldsTtst_Prototype;
            this._v_Type = null;

            this._v_ExpectedValues    = null;
            this._v_Resolutions = null;
        };
        QueryFieldsTtst_SuperPrototypeConstructor.prototype = aQueryFieldsTtst_Prototype;



        var aModule = {
            "QueryFieldsTtst_Prototype": aQueryFieldsTtst_Prototype,
            "QueryFieldsTtst_Constructor": QueryFieldsTtst_Constructor,
            "QueryFieldsTtst_SuperPrototypeConstructor": QueryFieldsTtst_SuperPrototypeConstructor
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

            var aM_queryexpected = require('./queryexpected-ttst');

            return aMod_definer( aM_queryexpected);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./queryexpected-ttst"
        ], function (
            theM_queryexpected) {
            return aMod_definer( theM_queryexpected);
        });
    }


}());



























