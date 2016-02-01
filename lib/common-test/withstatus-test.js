'use strict';

/*
 withstatus-test.js
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
    var aMod_definer =function( theM_funsims,
                                theM_withid_test,
                                theM_overrider) {


        var ModuleName     = "withstatus-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.RELEASE_WITHSTATUS_TIMESTAMPS = false;

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


            theToInit.STATUS_CREATED   = "CREATED";
            theToInit.STATUS_STARTED   = "STARTED";
            theToInit.STATUS_TERMNATED = "TERMINATED";
            theToInit.STATUSALL = [
                theToInit.STATUS_CREATED,
                theToInit.STATUS_STARTED,
                theToInit.STATUS_TERMNATED
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







        var aWithStatusTest_Prototype = (function() {



            var aPrototype = new theM_withid_test.WithIdTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);





            aPrototype._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;

            aPrototype._v_Type = "WithStatusTest";

            aPrototype._v_Prototype_WithStatusTest = aPrototype;

            aPrototype._v_Status = null;
            aPrototype._v_Success = null;

            aPrototype._v_CreationTimestamp = null;
            aPrototype._v_BeginTimestamp    = null;
            aPrototype._v_LastTimestamp     = null;





            var _pInit = function( theTitle) {

                this._pInit_WithStatus( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_WithStatus = function( theTitle) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_WithId.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Status = this.STATUS_CREATED;
                this._v_Success = false;

                this._v_CreationTimestamp = Date.now();
                this._v_BeginTimestamp    = null;
                this._v_LastTimestamp     = null;
            };
            if( _pInit_WithStatus){}/* CQT */
            aPrototype._pInit_WithStatus = _pInit_WithStatus;








            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_WithStatus( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_WithStatus = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                if( this.RELEASE_WITHSTATUS_TIMESTAMPS) {

                    this._v_CreationTimestamp = undefined;
                    this._v_BeginTimestamp    = undefined;
                    this._v_LastTimestamp     = undefined;
                }

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_WithId.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_WithStatus){}/* CQT */
            aPrototype._pRelease_WithStatus = _pRelease_WithStatus;











            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

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

                this.pCleanUpTest_WithStatus( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_WithStatus = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_WithId.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_WithStatus){}/* CQT */
            aPrototype.pCleanUpTest_WithStatus = pCleanUpTest_WithStatus;














            var pNowStarted = function() {

                this._v_Status = this.STATUS_STARTED;

                this._v_BeginTimestamp = Date.now();
            };
            if( pNowStarted){}/* CQT */
            aPrototype.pNowStarted = pNowStarted;






            var pNowSucceeded = function() {

                this.pNowSucceeded_base();
            };
            if( pNowSucceeded){}/* CQT */
            aPrototype.pNowSucceeded = pNowSucceeded;



            var pNowSucceeded_base = function() {

                this._v_Status = this.STATUS_TERMNATED;
                this._v_Success = true;

                this._v_LastTimestamp = Date.now();
            };
            if( pNowSucceeded_base){}/* CQT */
            aPrototype.pNowSucceeded_base = pNowSucceeded_base;







            var pNowFailed= function() {

                this.pNowFailed_base();
            };
            if( pNowFailed){}/* CQT */
            aPrototype.pNowFailed = pNowFailed;






            var pNowFailed_base= function() {

                this._v_Status = this.STATUS_TERMNATED;
                this._v_Success = false;

                this._v_LastTimestamp = Date.now();
            };
            if( pNowFailed_base){}/* CQT */
            aPrototype.pNowFailed_base = pNowFailed_base;






            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);

                aResultJSON.status  = this._v_Status;
                aResultJSON.success = this._v_Success;

                if( this._v_CreationTimestamp) {
                    aResultJSON.created = new Date( this._v_CreationTimestamp).toISOString();
                }

                if( this._v_BeginTimestamp) {
                    aResultJSON.begin = new Date( this._v_BeginTimestamp).toISOString()
                }

                if( this._v_LastTimestamp) {
                    aResultJSON.last = new Date( this._v_LastTimestamp).toISOString()
                }


                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;





            return aPrototype;

        })();


        var WithStatusTest_Constructor = function( theTitle) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Status = null;
            this._v_Success = null;

            this._v_CreationTimestamp = null;
            this._v_BeginTimestamp    = null;
            this._v_LastTimestamp     = null;

            this._pInit_WithStatus( theTitle);
        };
        WithStatusTest_Constructor.prototype = aWithStatusTest_Prototype;





        var WithStatusTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_withid_test.WithIdTest_Prototype;

            this._v_Prototype = aWithStatusTest_Prototype;
            this._v_Type = null;

            this._v_Status = null;
            this._v_Success = null;

            this._v_CreationTimestamp = null;
            this._v_BeginTimestamp    = null;
            this._v_LastTimestamp     = null;
        };
        WithStatusTest_SuperPrototypeConstructor.prototype = aWithStatusTest_Prototype;



        var aModule = {
            "WithStatusTest_Prototype": aWithStatusTest_Prototype,
            "WithStatusTest_Constructor": WithStatusTest_Constructor,
            "WithStatusTest_SuperPrototypeConstructor": WithStatusTest_SuperPrototypeConstructor
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

            var aM_funsims      = require('./funsims');
            var aM_withid_test  = require('./withid-test');
            var aM_overrider    = require('./overrider');

            return aMod_definer(
                aM_funsims,
                aM_withid_test,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./funsims",
            "./withid-test",
            "./overrider"
        ], function (
            theM_funsims,
            theM_withid_test,
            theM_overrider
        ) {
            return aMod_definer(
                theM_funsims,
                theM_withid_test,
                theM_overrider
            );
        });
    }


}());


