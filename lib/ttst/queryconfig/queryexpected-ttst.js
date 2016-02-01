'use strict';

/*
 queryexpected-ttst.js
 Created 201409251045
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

    var aMod_definer =function( theM_specparserwholettst,
                                theM_specloader,
                                theM_overrider) {


        var ModuleName     = "queryexpected-ttst";
        var ModulePackages = "ttst/queryconfig";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}





        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.READEXPECTEDVALUES_ASYNC = false;

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








        var aQueryExpectedTtst_Prototype = (function() {


            var aPrototype = new theM_specparserwholettst.SpecParserWholeTtst_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_specparserwholettst.SpecParserWholeTtst_Prototype;


            aPrototype._v_Type = "QueryExpectedTtst";


            aPrototype._v_ExpectedValues    = null;
            aPrototype._v_Resolutions = null;





            var _pInit = function( theTitle, theConfigSpec, theExpectedValues) {

                this._pInit_QueryExpectedTtst( theTitle, theConfigSpec, theExpectedValues);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_QueryExpectedTtst = function( theTitle, theConfigSpec, theExpectedValues) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SpecParserWholeTtst.apply( this, [ theTitle, theConfigSpec]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_ExpectedValues    = theExpectedValues;

                this._v_Resolutions = [ ];

                this.fRecord( "_pInit_QueryExpectedTtst", this.EVTKIND_INIT, null, null, null);
            };
            if( _pInit_QueryExpectedTtst){}/* CQT */
            aPrototype._pInit_QueryExpectedTtst = _pInit_QueryExpectedTtst;








            var fReadExpectedValuesAsync = function() {

                return this.READEXPECTEDVALUES_ASYNC;
            };
            if( fReadExpectedValuesAsync){}/* CQT */
            aPrototype.fReadExpectedValuesAsync = fReadExpectedValuesAsync;








            var pS_readExpectedValues= function( theCallback) {
                if( this.fReadExpectedValuesAsync()) {
                    this.pS_readExpectedValues_async( theCallback);
                    return;
                }

                this.pS_readExpectedValues_sync( theCallback);
            };
            if( pS_readExpectedValues){}/* CQT */
            aPrototype.pS_readExpectedValues = pS_readExpectedValues;










            var pS_readExpectedValues_sync= function( theCallback) {
                var aMethodName = "pS_readExpectedValues_sync";

                var aThis = this;

                this.pS_Do(
                    theCallback,
                    aMethodName,
                    function( theOtherCallback) {

                        if( !aThis._v_ExpectedValues) {
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, null, null, null));
                            return;
                        }

                        if( typeof  aThis._v_ExpectedValues == "object") {
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ExpectedValues, null, null));
                            return;
                        }

                        var aExpectedSpec = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( aThis._v_ExpectedValues);

                        if( aExpectedSpec == null) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ExpectedSpec, null, null));
                            return;
                        }

                        if( !( typeof aExpectedSpec == "object")) {
                            theOtherCallback( aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ExpectedSpec, null, null));
                            return;
                        }

                        aThis._v_ExpectedValues = aExpectedSpec;

                        theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, aThis._v_ExpectedSpec, null, null));
                    }
                );
            };
            if( pS_readExpectedValues_sync){}/* CQT */
            aPrototype.pS_readExpectedValues_sync = pS_readExpectedValues_sync;







            var pS_readExpectedValues_async= function( theCallback) {
                var aMethodName = "pS_readExpectedValues_async";

                var aThis = this;

                this.pS_Do(
                    theCallback,
                    aMethodName,
                    function( theOtherCallback) {

                        if( !aThis._v_ExpectedValues) {
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, null, null, null));
                            return;
                        }

                        if( typeof  aThis._v_ExpectedValues == "object") {
                            theOtherCallback( null, aThis.fRecord( aMethodName, aThis.EVTKIND_OK, aThis._v_ExpectedValues, null, null));
                            return;
                        }


                        var aCallback = aThis.fReadExpectedValuesAsyncCallback( theOtherCallback);
                        if( !aCallback) {
                            theCallback( this.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, "!this.fReadExpectedValuesAsyncCallback( theCallback)", null));
                            return;
                        }


                        /* *******************************
                         * INVOKE NOW
                         */
                        var anExceptionHandler = aThis.fExceptionReadExpectedValuesAsyncHandler( aCallback);

                        try {
                            theM_specloader.fgGlobalSpecLoader().pLoadSpecNamed( aThis._v_ExpectedValues, aCallback);
                        }
                        catch( anException) {
                            anExceptionHandler( anException);
                        }
                    }
                );
            };
            if( pS_readExpectedValues_async){}/* CQT */
            aPrototype.pS_readExpectedValues_async = pS_readExpectedValues_async;









            var fReadExpectedValuesAsyncCallback = function( theCallback) {
                var aMethodName = "fReadExpectedValuesAsyncCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError, theResult) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aMethodName, aThis.EVTKIND_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }


                    if( theResult == null) {
                        theCallback( this.fRecord( aMethodName,  aThis.EVTKIND_FAIL, null, "theResult == null", null));
                        return;
                    }


                    this._v_ConfigSpec = theResult;

                    aThis.fRecord( aThis.EVTKIND_OK, theResult, null, null);

                    theCallback();

                }).bind( this);
                if( aCallback){}/* CQT */

                return aCallback;
            };
            if( fReadExpectedValuesAsyncCallback){}/* CQT */
            aPrototype.fReadExpectedValuesAsyncCallback = fReadExpectedValuesAsyncCallback;









            var fExceptionReadExpectedValuesAsyncHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_READSPEC_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fExceptionReadExpectedValuesAsyncHandler){}/* CQT */
            aPrototype.fExceptionReadExpectedValuesAsyncHandler = fExceptionReadExpectedValuesAsyncHandler;









            return aPrototype;

        })();







        var QueryExpectedTtst_Constructor = function( theTitle, theConfigSpec, theExpectedValues) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserwholettst.SpecParserWholeTtst_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_ExpectedValues    = null;
            this._v_Resolutions = null;

            this._pInit_QueryExpectedTtst( theTitle, theConfigSpec, theExpectedValues);
        };
        QueryExpectedTtst_Constructor.prototype = aQueryExpectedTtst_Prototype;





        var QueryExpectedTtst_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_specparserwholettst.SpecParserWholeTtst_Prototype;

            this._v_Prototype = aQueryExpectedTtst_Prototype;
            this._v_Type = null;

            this._v_ExpectedValues    = null;
            this._v_Resolutions = null;
        };
        QueryExpectedTtst_SuperPrototypeConstructor.prototype = aQueryExpectedTtst_Prototype;



        var aModule = {
            "QueryExpectedTtst_Prototype": aQueryExpectedTtst_Prototype,
            "QueryExpectedTtst_Constructor": QueryExpectedTtst_Constructor,
            "QueryExpectedTtst_SuperPrototypeConstructor": QueryExpectedTtst_SuperPrototypeConstructor
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

            var aM_specparserwholettst = require('../specparser/specparser-whole-ttst');
            var aM_specloader          = require('../../common-test/resloader/specloader');
            var aM_overrider           = require('../../common-test/overrider');

            return aMod_definer( aM_specparserwholettst, aM_specloader, aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../specparser/specparser-whole-ttst",
            "../../common-test/resloader/specloader",
            "../../common-test/overrider"
        ], function (
                theM_specparserwholettst,
                theM_specloader,
                theM_overrider
            ) {
            return aMod_definer(
                theM_specparserwholettst,
                theM_specloader,
                theM_overrider
            );
        });
    }


}());



























