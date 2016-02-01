'use strict';

/*
 alloc-test.js
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_overrider) {

        var ModuleName     = "alloc-test";
        var ModulePackages = "general-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.MAXARRAYLENTOCREATE = 1000000;

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

            theToInit.PARMSPREFIX_ALLOC = "alloc";

            theToInit.PARM_ALLOC_NUMBUFFERS = theToInit.PARMSPREFIX_ALLOC + ".numBuffers";
            theToInit.PARM_ALLOC_BUFFERSIZE = theToInit.PARMSPREFIX_ALLOC + ".bufferSize";


            theToInit.PARMS_ALLOC = [
                theToInit.PARM_ALLOC_NUMBUFFERS,
                theToInit.PARM_ALLOC_BUFFERSIZE
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
        pgInitWithModuleConstants(  ModuleConstants);











        var aAllocTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "AllocTest";


            aPrototype._v_NumBuffers     = null;
            aPrototype._v_BufferSize     = null;
            
            aPrototype._v_Buffers        = null;


            
            


            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Alloc( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Alloc = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_NumBuffers     = null;
                this._v_BufferSize     = null;

                this._v_Buffers        = [ ];

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Alloc", this.EVENTKIND_INIT, null, null, null);}

                if( this._v_AllocResult){}/* CQT */
            };
            if( _pInit_Alloc){}/* CQT */
            aPrototype._pInit_Alloc = _pInit_Alloc;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Alloc( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Alloc = function( theReleaseParms, theReleaseDone) {

                this._v_NumBuffers     = undefined;
                this._v_BufferSize     = undefined;

                this._v_Buffers        = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Alloc){}/* CQT */
            aPrototype._pRelease_Alloc = _pRelease_Alloc;











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

                this.pCleanUpTest_Alloc( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Alloc = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( theWhatToClean && ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) < 0)) {

                    if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                        this._v_NumBuffers     = undefined;
                        this._v_BufferSize     = undefined;

                        this._v_Buffers        = undefined;
                    }
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Alloc){}/* CQT */
            aPrototype.pCleanUpTest_Alloc = pCleanUpTest_Alloc;














            var pS_retrieveAllocParms = function( theCallback) {

                var aMethodName = "pS_retrieveAllocParms";

                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }



                var someParmsToResolve = this.PARMS_ALLOC.slice();

                var someResolutionsByName = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);


                if( !someResolutionsByName) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }


                var aAllocNumBuffersResolution = someResolutionsByName[ this.PARM_ALLOC_NUMBUFFERS];
                if( aAllocNumBuffersResolution && aAllocNumBuffersResolution._v_Success) {
                    this._v_NumBuffers = aAllocNumBuffersResolution._v_ParmValue;
                }


                var aAllocBufferSizeResolution = someResolutionsByName[ this.PARM_ALLOC_NUMBUFFERS];
                if( aAllocBufferSizeResolution && aAllocBufferSizeResolution._v_Success) {
                    this._v_BufferSize = aAllocBufferSizeResolution._v_ParmValue;
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_retrieveAllocParms){}/* CQT */
            aPrototype.pS_retrieveAllocParms = pS_retrieveAllocParms;










            var pS_alloc = function( theCallback) {

                var aMethodName = "pS_alloc";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_Buffers = [ ];


                if( !this._v_NumBuffers) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_NumBuffers", null));
                    return;
                }


                if( this._v_NumBuffers < 1) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "this._v_NumBuffers < 1", null));
                    return;
                }

                if( !this._v_BufferSize) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_BufferSize", null));
                    return;
                }


                if( this._v_BufferSize < 1) {
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "this._v_BufferSize < 1", null));
                    return;
                }


                for( var aBufferIdx=0; aBufferIdx < this._v_NumBuffers; aBufferIdx++) {

                    var aBuffer = this.fAllocateBuffer_Arrays( this._v_BufferSize);
                    if( aBuffer){
                        this._v_Buffers.push( aBuffer);
                    }
                }

                theCallback();
            };
            if( pS_alloc){}/* CQT */
            aPrototype.pS_alloc = pS_alloc;








            var fAllocateBuffer_Arrays = function() {

                if( !this._v_BufferSize) {
                    return;
                }


                var anArrayLenToCreate = this._v_BufferSize;

                var aRemainingArrayLenToCreate = anArrayLenToCreate;

                var someArrays = [ ];

                while( aRemainingArrayLenToCreate > 0) {

                    var aOneArrayLenToCreate = aRemainingArrayLenToCreate;
                    if( aOneArrayLenToCreate > this.MAXARRAYLENTOCREATE) {
                        aOneArrayLenToCreate = this.MAXARRAYLENTOCREATE;
                    }

                    var anArray = new Array( aOneArrayLenToCreate);
                    for( var anArrayIdx=0; anArrayIdx < aOneArrayLenToCreate; anArrayIdx++) {
                        /*
                         var anObject = new Object();
                         anObject[ "idx"] = "" + anArrayIdx;

                         anArray[ anArrayIdx] = anObject;

                         */
                        anArray[ anArrayIdx] = anArrayIdx;
                    }

                    someArrays.push( anArray);

                    aRemainingArrayLenToCreate -= aOneArrayLenToCreate;
                }

                if( !someArrays.length) {
                    return null;
                }

                if( someArrays.length == 1) {
                    return someArrays[ 0];
                }

                return someArrays;

            };
            if( fAllocateBuffer_Arrays){}/* CQT */
            aPrototype.fAllocateBuffer_Arrays = fAllocateBuffer_Arrays;















            var pF_Alloc = function( theCallback) {
                var aMethodName = "pF_Alloc";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Alloc){}/* CQT */
            aPrototype.pF_Alloc = pF_Alloc;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Alloc.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Alloc = function( theCallback) {
                var aMethodName = "pSS_Alloc";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_retrieveAllocParms.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_alloc.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_Alloc){}/* CQT */
            aPrototype.pSS_Alloc = pSS_Alloc;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = null;
                if( !( aPrototype._v_SuperPrototype.fToResultJSON === fToResultJSON)) {
                    aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);
                }
                else {
                    aResultJSON = {};
                }

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();




        var AllocTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            
            this._v_NumBuffers     = null;
            this._v_BufferSize     = null;

            this._v_Buffers        = null;

            this._pInit_Alloc( theTitle, theConfiguration, theIdentifier, theRecorder);

        };
        AllocTest_Constructor.prototype = aAllocTest_Prototype;





        var AllocTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aAllocTest_Prototype;
            this._v_Type = null;

            this._v_NumBuffers     = null;
            this._v_BufferSize     = null;

            this._v_Buffers        = null;
        };
        AllocTest_SuperPrototypeConstructor.prototype = aAllocTest_Prototype;



        var aModule = {
            "AllocTest_Prototype": aAllocTest_Prototype,
            "AllocTest_Constructor": AllocTest_Constructor,
            "AllocTest_SuperPrototypeConstructor": AllocTest_SuperPrototypeConstructor
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

            var aM_runsubs_test = require('../common-test/runsubs-test');
            var aM_overrider    = require('../common-test/overrider');

            return aMod_definer(
                aM_runsubs_test,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../common-test/runsubs-test",
            "../common-test/overrider"
        ], function (
                theM_runsubs_test,
                theM_overrider
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_overrider
            );
        });
    }


}());


