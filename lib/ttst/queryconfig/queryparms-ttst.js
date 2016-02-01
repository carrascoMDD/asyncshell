'use strict';

/*
 queryparms-ttst.js
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


        var ModuleName     = "queryparms-ttst";
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








        var aQueryParmsTtst_Prototype = (function() {


            var aPrototype = new theM_queryexpected.QueryExpectedTtst_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_queryexpected.QueryExpectedTtst_Prototype;


            aPrototype._v_Type = "QueryParmsTtst";







            var _pInit = function( theTitle, theConfigSpec, theExpectedValues) {

                this._pInit_QueryParmsTtst( theTitle, theConfigSpec, theExpectedValues);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_QueryParmsTtst = function( theTitle, theConfigSpec, theExpectedValues) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_QueryExpectedTtst.apply( this, [ theTitle, theConfigSpec, theExpectedValues]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this.fRecord( "_pInit_QueryParmsTtst", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_QueryParmsTtst){}/* CQT */
            aPrototype._pInit_QueryParmsTtst = _pInit_QueryParmsTtst;













            var fCompareParmResolvedValueWithExpected = function( theResolvedValue, theExpectedValue) {
                /* ACV OJO 201511181623 WAS
                 if( ( typeof theResolvedValue == "undefined") || ( typeof theExpectedValue == "theExpectedValue")) {
                */
                if( typeof theResolvedValue == "undefined") {
                    return false;
                }

                /* ACV OJO 201511181623 WAS
                 if( theResolvedValue == theExpectedValue)
                */
                if( theResolvedValue === theExpectedValue) {
                    return true;
                }

                var aFirstDiff = this.fJSONsFirstDiff( theResolvedValue, theExpectedValue);
                if( !aFirstDiff) {
                    return true;
                }
                if( aFirstDiff){}/* CQT */

                return false;
            };
            if( fCompareParmResolvedValueWithExpected){}/* CQT */
            aPrototype.fCompareParmResolvedValueWithExpected = fCompareParmResolvedValueWithExpected;










            var pS_parmResolutionsForExpected= function( theCallback) {
                var aMethodName = "pS_parmResolutionsForExpected";

                if( !(typeof this._v_ExpectedValues == "object") || !this._v_ExpectedValues || !this._v_ExpectedValues.length) {
                    theCallback( null, this.fRecord( aMethodName, this.EVTKIND_OK, this._v_ParmResolutions, null, null));
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


                        aThis._v_ParmResolutions = [ ];






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



                                var someExpectedParms    = anExpectedSpec[ "expectedParms"];

                                var someFailedParmNames  = anExpectedSpec[ "failedParms"];
                                if( !someFailedParmNames) {
                                    someFailedParmNames = [];
                                }
                                var someAbsentParmNames  = anExpectedSpec[ "absentParms"];
                                if( !someAbsentParmNames) {
                                    someAbsentParmNames = [];
                                }


                                if( someExpectedParms) {

                                    var someExpectedParmNames = Object.keys( someExpectedParms);


                                    var aNumFailedParmNames = someFailedParmNames.length;
                                    for( var otherParmIdx=0; otherParmIdx < aNumFailedParmNames; otherParmIdx++) {
                                        var otherParmName = someFailedParmNames[ otherParmIdx];
                                        if( someExpectedParmNames.indexOf( otherParmName) < 0) {
                                            someExpectedParmNames.push( otherParmName);
                                        }
                                    }

                                    var aNumAbsentParmNames = someAbsentParmNames.length;
                                    for( var anotherParmIdx=0; anotherParmIdx < aNumAbsentParmNames; anotherParmIdx++) {
                                        var anotherParmName = someAbsentParmNames[ anotherParmIdx];
                                        if( someExpectedParmNames.indexOf( anotherParmName) < 0) {
                                            someExpectedParmNames.push( anotherParmName);
                                        }
                                    }


                                    var someResolutionsByName = aConfigurationToQuery.fParmResolutionsByName( someExpectedParmNames.slice());

                                    var aNumExpectedParmNames = someExpectedParmNames.length;
                                    for( var anExpectedParmNameIdx=0; anExpectedParmNameIdx < aNumExpectedParmNames; anExpectedParmNameIdx++) {

                                        var anExpectedParmName  = someExpectedParmNames[ anExpectedParmNameIdx];
                                        var anExpectedParmValue = someExpectedParms[ anExpectedParmName];

                                        var anExpectedResolution = someResolutionsByName[ anExpectedParmName];

                                        if( !anExpectedResolution) {
                                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "Internal: no Resolution obtained for parm name", anExpectedParmName));
                                            return;
                                        }


                                        var anOutcomeMessage = null;


                                        if( !anOutcomeMessage) {
                                            if( !anExpectedResolution._v_Success) {
                                                if ( someAbsentParmNames.indexOf( anExpectedParmName) < 0) {
                                                    anOutcomeMessage = "Parm not resolved and not in absent list";
                                                }
                                            }
                                        }




                                        if( !anOutcomeMessage) {
                                            if( anExpectedResolution._v_Success) {

                                                aThis._v_ParmResolutions.push( anExpectedResolution);

                                                aThis.fRecord( aMethodName, aThis.EVTKIND_INFO, anExpectedResolution, null, null);


                                                var aResolvedParmValue  = anExpectedResolution._v_ParmValue;

                                                if( aThis.fCompareParmResolvedValueWithExpected( aResolvedParmValue, anExpectedParmValue)) {

                                                    if ( someFailedParmNames.indexOf( anExpectedParmName) >= 0) {
                                                        anOutcomeMessage = "Parm in failed list has resolved with correct value";
                                                    }
                                                }
                                                else {
                                                    if ( someFailedParmNames.indexOf( anExpectedParmName)  < 0){
                                                        anOutcomeMessage = "Parm resolved with wrong value but not in failed list";
                                                    }
                                                }
                                            }
                                        }




                                        if( anOutcomeMessage) {
                                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, anExpectedResolution, anOutcomeMessage, anExpectedParmName));
                                            return;
                                        }

                                    }
                                }
                            }
                        }



                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ParmResolutions, null, null));
                    }
                );
            };
            if( pS_parmResolutionsForExpected){}/* CQT */
            aPrototype.pS_parmResolutionsForExpected = pS_parmResolutionsForExpected;









            var fOwnTtstMethodToRun = function() {
                return this.pSS_QueryParmsTtst.bind( this);
            };
            if( fOwnTtstMethodToRun){}/* CQT */
            aPrototype.fOwnTtstMethodToRun = fOwnTtstMethodToRun;








            var pSS_QueryParmsTtst = function( theCallback) {
                var aMethodName = "pF_QueryParmsTtst";
                this.fRecord( aMethodName, this.EVTKIND_INFO, this._v_ExpectedValues, null, null);

                this.pNowStarted();

                this.pF_LightAsyncSeries(
                    theCallback,
                    aMethodName,
                    [
                        this.pS_readConfig.bind( this),
                        this.pS_readExpectedValues.bind( this),
                        this.pS_parse.bind( this),
                        this.pS_storeJSON.bind( this),
                        this.pS_resolveImports.bind( this),
                        this.pS_resolveExports.bind( this),
                        this.pS_parmResolutionsForExpected.bind( this)
                    ]
                );
            };
            if( pSS_QueryParmsTtst){}/* CQT */
            aPrototype.pSS_QueryParmsTtst = pSS_QueryParmsTtst;








            return aPrototype;

        })();







        var QueryParmsTtst_Constructor = function( theTitle, theConfigSpec, theExpectedValues) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_queryexpected.QueryExpectedTtst_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_QueryParmsTtst( theTitle, theConfigSpec, theExpectedValues);
        };
        QueryParmsTtst_Constructor.prototype = aQueryParmsTtst_Prototype;





        var QueryParmsTtst_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_queryexpected.QueryExpectedTtst_Prototype;

            this._v_Prototype = aQueryParmsTtst_Prototype;
            this._v_Type = null;
        };
        QueryParmsTtst_SuperPrototypeConstructor.prototype = aQueryParmsTtst_Prototype;



        var aModule = {
            "QueryParmsTtst_Prototype": aQueryParmsTtst_Prototype,
            "QueryParmsTtst_Constructor": QueryParmsTtst_Constructor,
            "QueryParmsTtst_SuperPrototypeConstructor": QueryParmsTtst_SuperPrototypeConstructor
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



























