'use strict';

/*
 memory-test.js
 Creado 201510240217
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_platformmemory) {


        var ModuleName     = "memory-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.MINHEAPAVAILABLE                        = 10; /* -1 is No minimum. other values GT 0 in MB */
            theToInit.MAXHEAPUSED                             = -1; /* -1 is No maximum. other values GT 0 in MB */
            theToInit.MAXHEAPTOTAL                            = -1; /* -1 is No maximum. other values GT 0 in MB */

            theToInit.FAILIF_UNDERMINHEAPAVAILABLE            = false;
            theToInit.FAILIF_OVERMAXHEAPUSED                  = false;
            theToInit.FAILIF_OVERMAXHEAPTOTAL                 = false;

            theToInit.GARBAGECOLLECTIF_UNDERMINHEAPAVAILABLE  = false;
            theToInit.GARBAGECOLLECTIF_OVERMAXHEAPUSED        = false;
            theToInit.GARBAGECOLLECTIF_OVERMAXHEAPTOTAL       = false;
            theToInit.GARBAGECOLLECTALWAYS                    = false;

            theToInit.REPORTMEMORYAFTER                       = false;

            theToInit.DUMP_MEMORYREPORT                       = false;
            theToInit.DUMP_GARBAGECOLLECT                     = false;

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


            theToInit.PARMSPREFIX_MEMORY  = "memory";

            theToInit.PARM_MEMORYACCESS_MINHEAPAVAILABLE                         = theToInit.PARMSPREFIX_MEMORY + ".minHeapAvailable";
            theToInit.PARM_MEMORYACCESS_MAXHEAPUSED                              = theToInit.PARMSPREFIX_MEMORY + ".maxHeapUsed";
            theToInit.PARM_MEMORYACCESS_MAXHEAPTOTAL                             = theToInit.PARMSPREFIX_MEMORY + ".maxHeapTotal";

            theToInit.PARM_MEMORYACCESS_FAILIF_UNDERMINHEAPAVAILABLE             = theToInit.PARMSPREFIX_MEMORY + ".failIfUnderMinHeapAvailable";
            theToInit.PARM_MEMORYACCESS_FAILIF_OVERMAXHEAPUSED                   = theToInit.PARMSPREFIX_MEMORY + ".failIfOverMaxHeapUsed";
            theToInit.PARM_MEMORYACCESS_FAILIF_OVERMAXHEAPTOTAL                  = theToInit.PARMSPREFIX_MEMORY + ".failIfOverMaxHeapTotal";

            theToInit.PARM_MEMORYACCESS_GARBAGECOLLECTIF_UNDERMINHEAPAVAILABLE   = theToInit.PARMSPREFIX_MEMORY + ".garbageCollectIfMinHeapAvailable";
            theToInit.PARM_MEMORYACCESS_GARBAGECOLLECTIF_OVERMAXHEAPUSED         = theToInit.PARMSPREFIX_MEMORY + ".garbageCollectIfMaxHeapUsed";
            theToInit.PARM_MEMORYACCESS_GARBAGECOLLECTIF_OVERMAXHEAPTOTAL        = theToInit.PARMSPREFIX_MEMORY + ".garbageCollectIfMaxHeapTotal";
            theToInit.PARM_MEMORYACCESS_GARBAGECOLLECT_ALWAYS                    = theToInit.PARMSPREFIX_MEMORY + ".garbageCollectAlways";

            theToInit.PARM_MEMORYACCESS_REPORTMEMORYAFTER                        = theToInit.PARMSPREFIX_MEMORY + ".reportMemoryAfter";

            theToInit.PARM_MEMORYACCESS_DUMP_MEMORYREPORT                        = theToInit.PARMSPREFIX_MEMORY + ".dumpmemoryreport";
            theToInit.PARM_MEMORYACCESS_DUMP_GARBAGECOLLECT                      = theToInit.PARMSPREFIX_MEMORY + ".dumpgarbagecollect";


            theToInit.PARMS_MEMORY = [

                theToInit.PARM_MEMORYACCESS_MINHEAPAVAILABLE                         ,
                theToInit.PARM_MEMORYACCESS_MAXHEAPUSED                              ,
                theToInit.PARM_MEMORYACCESS_MAXHEAPTOTAL                             ,

                theToInit.PARM_MEMORYACCESS_FAILIF_UNDERMINHEAPAVAILABLE             ,
                theToInit.PARM_MEMORYACCESS_FAILIF_OVERMAXHEAPUSED                   ,
                theToInit.PARM_MEMORYACCESS_FAILIF_OVERMAXHEAPTOTAL                  ,

                theToInit.PARM_MEMORYACCESS_GARBAGECOLLECTIF_UNDERMINHEAPAVAILABLE   ,
                theToInit.PARM_MEMORYACCESS_GARBAGECOLLECTIF_OVERMAXHEAPUSED         ,
                theToInit.PARM_MEMORYACCESS_GARBAGECOLLECTIF_OVERMAXHEAPTOTAL        ,
                theToInit.PARM_MEMORYACCESS_GARBAGECOLLECT_ALWAYS                    ,

                theToInit.PARM_MEMORYACCESS_REPORTMEMORYAFTER                        ,

                theToInit.PARM_MEMORYACCESS_DUMP_MEMORYREPORT                        ,
                theToInit.PARM_MEMORYACCESS_DUMP_GARBAGECOLLECT
            ];



            theToInit.BYTESPERLIMITUNIT = 1024 * 1024; /* Min and Max limits in Megabytes */

            theToInit.MINHEAPAVAILABLE_DEFAULT  = 10; /* -1 is No minimum. other values GT 0 in MB */
            theToInit.MAXHEAPUSED_DEFAULT       = -1; /* -1 is No maximum. other values GT 0 in MB */
            theToInit.MAXHEAPTOTAL_DEFAULT      = -1; /* MB */

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











        var aMemory_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "Memory";

            aPrototype._v_Prototype_Memory = aPrototype;



            aPrototype._v_MinHeapAvailable                       = null;
            aPrototype._v_MaxHeapUsed                            = null;
            aPrototype._v_MaxHeapTotal                           = null;

            aPrototype._v_FailIf_UnderMinHeapAvailable           = null;
            aPrototype._v_FailIf_OverMaxHeapUsed                 = null;
            aPrototype._v_FailIf_OverMaxHeapTotal                = null;

            aPrototype._v_GarbageCollectIf_UnderMinHeapAvailable = null;
            aPrototype._v_GarbageCollectIf_OverMaxHeapUsed       = null;
            aPrototype._v_GarbageCollectIf_OverMaxHeapTotal      = null;
            aPrototype._v_GarbageCollect_Always                  = null;

            aPrototype._v_ReportMemoryAfter                      = null;

            aPrototype._v_Dump_MemoryReport                      = null;
            aPrototype._v_Dump_GarbageCollect                    = null;

            
            aPrototype._v_MemoryReport_Before                    = null;
            aPrototype._v_MemoryReport_After                     = null;
            
            aPrototype._v_HeapUsed_Before                        = null;
            aPrototype._v_HeapUsed_After                         = null;

            aPrototype._v_HeapTotal_Before                       = null;
            aPrototype._v_HeapTotal_After                        = null;

            aPrototype._v_HeapAvailable_Before                   = null;
            aPrototype._v_HeapAvailable_After                    = null;

            aPrototype._v_MillisBeforeGarbageCollect             = null;
            aPrototype._v_MillisAfterGarbageCollect              = null;

            aPrototype._v_GarbageCollectDurationMillis           = null;

            aPrototype._v_HasAttemptedToGarbageCollect           = null;
            aPrototype._v_HasGarbageCollected                    = null;





            
            

            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Memory(
                    theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_Memory = function(
                theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = this;
                this._v_Type = this._v_Type;

                this._v_MinHeapAvailable                       = null;
                this._v_MaxHeapUsed                            = null;
                this._v_MaxHeapTotal                           = null;

                this._v_FailIf_UnderMinHeapAvailable           = null;
                this._v_FailIf_OverMaxHeapUsed                 = null;
                this._v_FailIf_OverMaxHeapTotal                = null;

                this._v_GarbageCollectIf_UnderMinHeapAvailable = null;
                this._v_GarbageCollectIf_OverMaxHeapUsed       = null;
                this._v_GarbageCollectIf_OverMaxHeapTotal      = null;
                this._v_GarbageCollect_Always                  = null;

                this._v_ReportMemoryAfter                      = null;

                this._v_Dump_MemoryReport                      = null;
                this._v_Dump_GarbageCollect                    = null;
                

                this._v_MemoryReport_Before                    = null;
                this._v_MemoryReport_After                     = null;

                this._v_HeapUsed_Before                        = null;
                this._v_HeapUsed_After                         = null;

                this._v_HeapTotal_Before                       = null;
                this._v_HeapTotal_After                        = null;

                this._v_HeapAvailable_Before                   = null;
                this._v_HeapAvailable_After                    = null;

                this._v_MillisBeforeGarbageCollect             = null;
                this._v_MillisAfterGarbageCollect              = null;

                this._v_GarbageCollectDurationMillis           = null;

                this._v_HasAttemptedToGarbageCollect           = null;
                this._v_HasGarbageCollected                    = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Memory", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Memory){}/* CQT */
            aPrototype._pInit_Memory = _pInit_Memory;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Directory( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Directory = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                 return;
                 }
                 this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_MinHeapAvailable                       = undefined;
                this._v_MaxHeapUsed                            = undefined;
                this._v_MaxHeapTotal                           = undefined;

                this._v_FailIf_UnderMinHeapAvailable           = undefined;
                this._v_FailIf_OverMaxHeapUsed                 = undefined;
                this._v_FailIf_OverMaxHeapTotal                = undefined;

                this._v_GarbageCollectIf_UnderMinHeapAvailable = undefined;
                this._v_GarbageCollectIf_OverMaxHeapUsed       = undefined;
                this._v_GarbageCollectIf_OverMaxHeapTotal      = undefined;
                this._v_GarbageCollect_Always                  = undefined;

                this._v_ReportMemoryAfter                      = undefined;

                this._v_Dump_MemoryReport                      = undefined;
                this._v_Dump_GarbageCollect                    = undefined;

                
                this._v_MemoryReport_Before                    = undefined;
                this._v_MemoryReport_After                     = undefined;

                this._v_HeapUsed_Before                        = undefined;
                this._v_HeapUsed_After                         = undefined;

                this._v_HeapTotal_Before                       = undefined;
                this._v_HeapTotal_After                        = undefined;

                this._v_HeapAvailable_Before                   = undefined;
                this._v_HeapAvailable_After                    = undefined;

                this._v_MillisBeforeGarbageCollect             = undefined;
                this._v_MillisAfterGarbageCollect              = undefined;

                this._v_GarbageCollectDurationMillis           = undefined;

                this._v_HasAttemptedToGarbageCollect           = undefined;
                this._v_HasGarbageCollected                    = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Directory){}/* CQT */
            aPrototype._pRelease_Directory = _pRelease_Directory;









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

                this.pCleanUpTest_Memory( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Memory = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_MemoryReport_Before                    = undefined;
                    this._v_MemoryReport_After                     = undefined;

                    this._v_HeapUsed_Before                        = undefined;
                    this._v_HeapUsed_After                         = undefined;

                    this._v_HeapTotal_Before                       = undefined;
                    this._v_HeapTotal_After                        = undefined;

                    this._v_HeapAvailable_Before                   = undefined;
                    this._v_HeapAvailable_After                    = undefined;

                    this._v_MillisBeforeGarbageCollect             = undefined;
                    this._v_MillisAfterGarbageCollect              = undefined;

                    this._v_GarbageCollectDurationMillis           = undefined;

                    this._v_HasAttemptedToGarbageCollect           = undefined;
                    this._v_HasGarbageCollected                    = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Memory){}/* CQT */
            aPrototype.pCleanUpTest_Memory = pCleanUpTest_Memory;








            var pS_ResolveParms = function( theCallback) {

                var aMethodName = "pS_ResolveParms";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "this._v_Configuration", null));
                    return  null;
                }


                this._v_MemoryLazy = this.fResolvedParmValue(  this.PARM_MEMORYACCESSACCESS_LAZY);
                if( this._v_MemoryLazy == null) {
                    this._v_MemoryLazy = this.FILEACCESSLAZY_DEFAULT;
                }



                var someParmsToResolve = [

                    this.PARM_MEMORYACCESS_MINHEAPAVAILABLE                         ,
                    this.PARM_MEMORYACCESS_MAXHEAPUSED                              ,
                    this.PARM_MEMORYACCESS_MAXHEAPTOTAL                             ,

                    this.PARM_MEMORYACCESS_FAILIF_UNDERMINHEAPAVAILABLE             ,
                    this.PARM_MEMORYACCESS_FAILIF_OVERMAXHEAPUSED                   ,
                    this.PARM_MEMORYACCESS_FAILIF_OVERMAXHEAPTOTAL                  ,

                    this.PARM_MEMORYACCESS_GARBAGECOLLECTIF_UNDERMINHEAPAVAILABLE   ,
                    this.PARM_MEMORYACCESS_GARBAGECOLLECTIF_OVERMAXHEAPUSED         ,
                    this.PARM_MEMORYACCESS_GARBAGECOLLECTIF_OVERMAXHEAPTOTAL        ,
                    this.PARM_MEMORYACCESS_GARBAGECOLLECT_ALWAYS                    ,

                    this.PARM_MEMORYACCESS_REPORTMEMORYAFTER                        ,

                    this.PARM_MEMORYACCESS_DUMP_MEMORYREPORT                        ,
                    this.PARM_MEMORYACCESS_DUMP_GARBAGECOLLECT

                ];



                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return  false;
                }





                if( this._v_Dump_MemoryReport == null) {

                    var aDump_MemoryReportResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_DUMP_MEMORYREPORT];
                    if( aDump_MemoryReportResolution && aDump_MemoryReportResolution._v_Success) {
                        this._v_Dump_MemoryReport = aDump_MemoryReportResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_MemoryReport = this.DUMP_MEMORYREPORT;
                    }
                }



                if( this._v_Dump_GarbageCollect == null) {

                    var aDump_GarbageCollectResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_DUMP_GARBAGECOLLECT];
                    if( aDump_GarbageCollectResolution && aDump_GarbageCollectResolution._v_Success) {
                        this._v_Dump_GarbageCollect = aDump_GarbageCollectResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_GarbageCollect = this.DUMP_GARBAGECOLLECT;
                    }
                }







                if( this._v_MinHeapAvailable == null) {

                    var aMinHeapAvailableResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_MINHEAPAVAILABLE];
                    if( aMinHeapAvailableResolution && aMinHeapAvailableResolution._v_Success) {
                        this._v_MinHeapAvailable = aMinHeapAvailableResolution._v_ParmValue;
                    }
                    else {
                        this._v_MinHeapAvailable = this.MINHEAPAVAILABLE;
                    }
                }
                if( ( this._v_MinHeapAvailable == null) || ( typeof this._v_MinHeapAvailable == "undefined")) {
                    this._v_MinHeapAvailable = this.MINHEAPAVAILABLE_DEFAULT;
                }
                if( this._v_MinHeapAvailable > 0) {
                    this._v_MinHeapAvailable *= this.BYTESPERLIMITUNIT;
                }





                if( this._v_MaxHeapUsed == null) {

                    var aMaxHeapUsedResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_MAXHEAPUSED];
                    if( aMaxHeapUsedResolution && aMaxHeapUsedResolution._v_Success) {
                        this._v_MaxHeapUsed = aMaxHeapUsedResolution._v_ParmValue;
                    }
                    else {
                        this._v_MaxHeapUsed = this.MAXHEAPUSED;
                    }

                }
                if( ( this._v_MaxHeapUsed == null) || ( typeof this._v_MaxHeapUsed == "undefined")) {
                    this._v_MaxHeapUsed = this.MAXHEAPUSED_DEFAULT
                }
                if( this._v_MaxHeapUsed > 0) {
                    this._v_MaxHeapUsed *= this.BYTESPERLIMITUNIT;
                }




                if( this._v_MaxHeapTotal == null) {

                    var aMaxHeapTotalResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_MAXHEAPTOTAL];
                    if( aMaxHeapTotalResolution && aMaxHeapTotalResolution._v_Success) {
                        this._v_MaxHeapTotal = aMaxHeapTotalResolution._v_ParmValue;
                    }
                    else {
                        this._v_MaxHeapTotal = this.MAXHEAPTOTAL;
                    }
                }
                if( ( this._v_MaxHeapTotal == null) || ( typeof this._v_MaxHeapTotal == "undefined")) {
                    this._v_MaxHeapTotal = this.MAXHEAPTOTAL_DEFAULT;
                }
                if( this._v_MaxHeapTotal > 0) {
                    this._v_MaxHeapTotal *= this.BYTESPERLIMITUNIT;
                }




                if( this._v_FailIf_UnderMinHeapAvailable == null) {

                    var aFailIf_UnderMinHeapAvailableResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_FAILIF_UNDERMINHEAPAVAILABLE];
                    if( aFailIf_UnderMinHeapAvailableResolution && aFailIf_UnderMinHeapAvailableResolution._v_Success) {
                        this._v_FailIf_UnderMinHeapAvailable = aFailIf_UnderMinHeapAvailableResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIf_UnderMinHeapAvailable = this.FAILIF_UNDERMINHEAPAVAILABLE;
                    }
                }



                if( this._v_FailIf_OverMaxHeapUsed == null) {

                    var aFailIf_OverMaxHeapUsedResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_FAILIF_OVERMAXHEAPUSED];
                    if( aFailIf_OverMaxHeapUsedResolution && aFailIf_OverMaxHeapUsedResolution._v_Success) {
                        this._v_FailIf_OverMaxHeapUsed = aFailIf_OverMaxHeapUsedResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIf_OverMaxHeapUsed = this.FAILIF_OVERMAXHEAPUSED;
                    }
                }



                if( this._v_FailIf_OverMaxHeapTotal == null) {

                    var aFailIf_OverMaxHeapTotalResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_FAILIF_OVERMAXHEAPTOTAL];
                    if( aFailIf_OverMaxHeapTotalResolution && aFailIf_OverMaxHeapTotalResolution._v_Success) {
                        this._v_FailIf_OverMaxHeapTotal = aFailIf_OverMaxHeapTotalResolution._v_ParmValue;
                    }
                    else {
                        this._v_FailIf_OverMaxHeapTotal = this.FAILIF_OVERMAXHEAPTOTAL;
                    }
                }


                
                


                if( this._v_GarbageCollect_Always == null) {

                    var aGarbageCollectAlwaysResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_GARBAGECOLLECT_ALWAYS];
                    if( aGarbageCollectAlwaysResolution && aGarbageCollectAlwaysResolution._v_Success) {
                        this._v_GarbageCollect_Always = aGarbageCollectAlwaysResolution._v_ParmValue;
                    }
                    else {
                        this._v_GarbageCollect_Always = this.GARBAGECOLLECTALWAYS;
                    }
                }





                if( this._v_GarbageCollectIf_UnderMinHeapAvailable == null) {

                    var aGarbageCollectIf_UnderMinHeapAvailableResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_GARBAGECOLLECTIF_UNDERMINHEAPAVAILABLE];
                    if( aGarbageCollectIf_UnderMinHeapAvailableResolution && aGarbageCollectIf_UnderMinHeapAvailableResolution._v_Success) {
                        this._v_GarbageCollectIf_UnderMinHeapAvailable = aGarbageCollectIf_UnderMinHeapAvailableResolution._v_ParmValue;
                    }
                    else {
                        this._v_GarbageCollectIf_UnderMinHeapAvailable = this.GARBAGECOLLECTIF_UNDERMINHEAPAVAILABLE;
                    }
                }





                if( this._v_GarbageCollectIf_OverMaxHeapUsed == null) {

                    var aGarbageCollectIf_OverMaxHeapUsedResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_GARBAGECOLLECTIF_OVERMAXHEAPUSED];
                    if( aGarbageCollectIf_OverMaxHeapUsedResolution && aGarbageCollectIf_OverMaxHeapUsedResolution._v_Success) {
                        this._v_GarbageCollectIf_OverMaxHeapUsed = aGarbageCollectIf_OverMaxHeapUsedResolution._v_ParmValue;
                    }
                    else {
                        this._v_GarbageCollectIf_OverMaxHeapUsed = this.GARBAGECOLLECTIF_OVERMAXHEAPUSED;
                    }
                }




                
                if( this._v_GarbageCollectIf_OverMaxHeapTotal == null) {

                    var aGarbageCollectIf_OverMaxHeapTotalResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_GARBAGECOLLECTIF_OVERMAXHEAPTOTAL];
                    if( aGarbageCollectIf_OverMaxHeapTotalResolution && aGarbageCollectIf_OverMaxHeapTotalResolution._v_Success) {
                        this._v_GarbageCollectIf_OverMaxHeapTotal = aGarbageCollectIf_OverMaxHeapTotalResolution._v_ParmValue;
                    }
                    else {
                        this._v_GarbageCollectIf_OverMaxHeapTotal = this.GARBAGECOLLECTIF_OVERMAXHEAPTOTAL;
                    }
                }





                if( this._v_ReportMemoryAfter == null) {

                    var aReportMemoryAfterResolution = aParmResolutionsDict[ this.PARM_MEMORYACCESS_REPORTMEMORYAFTER];
                    if( aReportMemoryAfterResolution && aReportMemoryAfterResolution._v_Success) {
                        this._v_ReportMemoryAfter = aReportMemoryAfterResolution._v_ParmValue;
                    }
                    else {
                        this._v_ReportMemoryAfter = this.REPORTMEMORYAFTER;
                    }
                }
                


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, null, null,  null));

            };
            if( pS_ResolveParms){}/* CQT */
            aPrototype.pS_ResolveParms = pS_ResolveParms;















            var pS_ReportMemoryBefore = function( theCallback) {

                var aMethodName = "pS_ReportMemoryBefore";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_MemoryReport_Before = theM_platformmemory.fMemoryReport();

                if( this._v_MemoryReport_Before && !this._v_MemoryReport_Before.fAsLogObject) {
                    this._v_MemoryReport_Before.fAsLogObject = ( function(){ return this;}).bind( this._v_MemoryReport_Before);
                }


                if( this._v_MemoryReport_Before) {

                    this._v_HeapUsed_Before  = this._v_MemoryReport_Before[ "heapUsed"];
                    this._v_HeapTotal_Before = this._v_MemoryReport_Before[ "heapTotal"];
                }



                if( ( this._v_HeapUsed_Before && this._v_HeapUsed_Before > 0)) {

                    if( this._v_MaxHeapUsed && ( this._v_MaxHeapUsed > 0)) {

                        this._v_MemoryReport_Before[ "MaxHeapUsed"] = this._v_MaxHeapUsed;


                        if( this._v_HeapUsed_Before > this._v_MaxHeapUsed) {

                            if( this._v_Dump_MemoryReport) {
                                var aMemoryReport_Before_JSONstr = JSON.stringify( this._v_MemoryReport_Before);
                                this.pToConsoleLikeEvent( "MEMORY REPORT BEFORE " + aMemoryReport_Before_JSONstr)
                            }

                            if( this._v_FailIf_OverMaxHeapUsed) {

                                theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "this._v_HeapUsed_Before > this._v_MaxHeapUsed", "this._v_HeapUsed_Before=" + this._v_HeapUsed_Before + "  >  this._v_MaxHeapUsed=" + this._v_MaxHeapUsed));
                                return;
                            }
                        }
                    }


                    if( this._v_MaxHeapTotal && ( this._v_MaxHeapTotal > 0)) {

                        this._v_MemoryReport_Before[ "MaxHeapTotal"] = this._v_MaxHeapTotal;


                        if( this._v_HeapTotal_Before > this._v_MaxHeapTotal) {

                            if( this._v_Dump_MemoryReport) {
                                var aMemoryReport_Before_JSONstr = JSON.stringify( this._v_MemoryReport_Before);
                                this.pToConsoleLikeEvent( "MEMORY REPORT BEFORE " + aMemoryReport_Before_JSONstr)
                            }

                            if( this._v_FailIf_OverMaxHeapTotal) {

                                theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "this._v_HeapTotal_Before > this._v_MaxHeapTotal", "this._v_HeapTotal_Before=" + this._v_HeapTotal_Before + "  >  this._v_MaxHeapTotal=" + this._v_MaxHeapTotal));
                                return;
                            }
                        }
                    }
                }





                if( ( this._v_HeapUsed_Before && this._v_HeapUsed_Before > 0) && ( this._v_HeapTotal_Before && this._v_HeapTotal_Before > 0)) {

                    this._v_HeapAvailable_Before = this._v_HeapTotal_Before - this._v_HeapUsed_Before;

                    this._v_MemoryReport_Before[ "HeapAvailable"] = this._v_HeapAvailable_Before ;


                    if( this._v_MinHeapAvailable && ( this._v_MinHeapAvailable > 0)) {

                        this._v_MemoryReport_Before[ "MinHeapAvailable"] = this._v_MinHeapAvailable;


                        if( this._v_HeapAvailable_Before < this._v_MinHeapAvailable) {

                            if( this._v_Dump_MemoryReport) {
                                var aMemoryReport_Before_JSONstr = JSON.stringify( this._v_MemoryReport_Before);
                                this.pToConsoleLikeEvent( "MEMORY REPORT BEFORE " + aMemoryReport_Before_JSONstr)
                            }

                            if( this._v_FailIf_UnderMinHeapAvailable) {

                                theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "this._v_HeapAvailable_Before > this._v_MinHeapAvailable", "this._v_HeapAvailable_Before=" + this._v_HeapAvailable_Before + "  <  this._v_MinHeapAvailable=" + this._v_MaxHeapUsed));
                                return;
                            }
                        }
                    }
                }


                if( this._v_Dump_MemoryReport) {
                    var aMemoryReport_Before_JSONstr = JSON.stringify( this._v_MemoryReport_Before);
                    this.pToConsoleLikeEvent( "MEMORY REPORT BEFORE " + aMemoryReport_Before_JSONstr)
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, this._v_MemoryReport_Before, null,  null));

            };
            if( pS_ReportMemoryBefore){}/* CQT */
            aPrototype.pS_ReportMemoryBefore = pS_ReportMemoryBefore;













            var pS_ReportMemoryAfter = function( theCallback) {

                var aMethodName = "pS_ReportMemoryAfter";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_MemoryReport_After = theM_platformmemory.fMemoryReport();

                if( this._v_MemoryReport_After && !this._v_MemoryReport_After.fAsLogObject) {
                    this._v_MemoryReport_After.fAsLogObject = ( function(){ return this;}).bind( this._v_MemoryReport_After);
                }


                if( this._v_MemoryReport_After) {

                    this._v_HeapUsed_After  = this._v_MemoryReport_After[ "heapUsed"];
                    this._v_HeapTotal_After = this._v_MemoryReport_After[ "heapTotal"];
                }



                if( ( this._v_HeapUsed_After && this._v_HeapUsed_After > 0)) {

                    if( this._v_MaxHeapUsed && ( this._v_MaxHeapUsed > 0)) {

                        this._v_MemoryReport_After[ "MaxHeapUsed"] = this._v_MaxHeapUsed;


                        if( this._v_HeapUsed_After > this._v_MaxHeapUsed) {

                            if( this._v_Dump_MemoryReport) {
                                var aMemoryReport_After_JSONstr = JSON.stringify( this._v_MemoryReport_After);
                                this.pToConsoleLikeEvent( "MEMORY REPORT AFTER " + aMemoryReport_After_JSONstr)
                            }

                            if( this._v_FailIf_OverMaxHeapUsed) {

                                theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "this._v_HeapUsed_After > this._v_MaxHeapUsed", "this._v_HeapUsed_After=" + this._v_HeapUsed_After + "  >  this._v_MaxHeapUsed=" + this._v_MaxHeapUsed));
                                return;
                            }
                        }
                    }


                    if( this._v_MaxHeapTotal && ( this._v_MaxHeapTotal > 0)) {

                        this._v_MemoryReport_After[ "MaxHeapTotal"] = this._v_MaxHeapTotal;


                        if( this._v_HeapTotal_After > this._v_MaxHeapTotal) {

                            if( this._v_Dump_MemoryReport) {
                                var aMemoryReport_After_JSONstr = JSON.stringify( this._v_MemoryReport_After);
                                this.pToConsoleLikeEvent( "MEMORY REPORT AFTER " + aMemoryReport_After_JSONstr)
                            }

                            if( this._v_FailIf_OverMaxHeapTotal) {

                                theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "this._v_HeapTotal_After > this._v_MaxHeapTotal", "this._v_HeapTotal_After=" + this._v_HeapTotal_After + "  >  this._v_MaxHeapTotal=" + this._v_MaxHeapTotal));
                                return;
                            }
                        }
                    }
                }





                if( ( this._v_HeapUsed_After && this._v_HeapUsed_After > 0) && ( this._v_HeapTotal_After && this._v_HeapTotal_After > 0)) {

                    this._v_HeapAvailable_After = this._v_HeapTotal_After - this._v_HeapUsed_After;

                    this._v_MemoryReport_After[ "HeapAvailable"] = this._v_HeapAvailable_After ;


                    if( this._v_MinHeapAvailable && ( this._v_MinHeapAvailable > 0)) {

                        this._v_MemoryReport_After[ "MinHeapAvailable"] = this._v_MinHeapAvailable;


                        if( this._v_HeapAvailable_After > this._v_MinHeapAvailable) {

                            if( this._v_Dump_MemoryReport) {
                                var aMemoryReport_After_JSONstr = JSON.stringify( this._v_MemoryReport_After);
                                this.pToConsoleLikeEvent( "MEMORY REPORT AFTER " + aMemoryReport_After_JSONstr)
                            }

                            if( this._v_FailIf_UnderMinHeapAvailable) {

                                theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, null, "this._v_HeapUsed_After > this._v_MaxHeapUsed", "this._v_HeapUsed_After=" + this._v_HeapUsed_After + "  >  this._v_MaxHeapUsed=" + this._v_MaxHeapUsed));
                                return;
                            }
                        }
                    }
                }


                if( this._v_Dump_MemoryReport) {
                    var aMemoryReport_After_JSONstr = JSON.stringify( this._v_MemoryReport_After);
                    this.pToConsoleLikeEvent( "MEMORY REPORT AFTER " + aMemoryReport_After_JSONstr)
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, this._v_MemoryReport_After, null,  null));

            };
            if( pS_ReportMemoryAfter){}/* CQT */
            aPrototype.pS_ReportMemoryAfter = pS_ReportMemoryAfter;











            var pS_GarbageCollect = function( theCallback) {

                var aMethodName = "pS_GarbageCollect";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);



                var aGarbageCollectionReport = "NOGARBAGECOLLECTIONATTEMPTED";


                
                if( this._v_GarbageCollect_Always) {

                    this._v_HasAttemptedToGarbageCollect = true;

                    theM_platformmemory.fGarbageCollect();

                    this._v_HasGarbageCollected = true;

                    aGarbageCollectionReport = "GARBAGECOLLECTIONPERFORMED ALWAYS";
                }





                if( this._v_GarbageCollectIf_OverMaxHeapUsed) {

                    if( ( this._v_HeapUsed_Before && this._v_HeapUsed_Before > 0)) {

                        if( this._v_MaxHeapUsed && ( this._v_MaxHeapUsed > 0)) {

                            if( this._v_HeapUsed_Before > this._v_MaxHeapUsed) {

                                if( !this._v_HasAttemptedToGarbageCollect) {

                                    this._v_HasAttemptedToGarbageCollect = true;

                                    theM_platformmemory.fGarbageCollect();

                                    this._v_HasGarbageCollected = true;

                                    aGarbageCollectionReport = "GARBAGECOLLECTIONPERFORMED this._v_HeapUsed_Before=" + this._v_HeapUsed_Before + "  >  this._v_MaxHeapUsed=" + this._v_MaxHeapUsed + " => this._v_HasGarbageCollected=" + this._v_HasGarbageCollected;

                                }
                            }
                        }
                    }
                }




                if( this._v_GarbageCollectIf_OverMaxHeapTotal) {

                    if( this._v_MaxHeapTotal && ( this._v_MaxHeapTotal > 0)) {

                        if( this._v_HeapTotal_Before > this._v_MaxHeapTotal) {

                            if( !this._v_HasAttemptedToGarbageCollect) {

                                this._v_HasAttemptedToGarbageCollect = true;

                                theM_platformmemory.fGarbageCollect();

                                this._v_HasGarbageCollected = true;
                            }

                            aGarbageCollectionReport = "GARBAGECOLLECTIONPERFORMED this._v_HeapTotal_Before=" + this._v_HeapTotal_Before + "  >  this._v_MaxHeapTotal=" + this._v_MaxHeapTotal + " => this._v_HasGarbageCollected=" + this._v_HasGarbageCollected;
                        }
                    }
                }





                if( this._v_GarbageCollectIf_UnderMinHeapAvailable) {

                    if( ( this._v_HeapUsed_Before && this._v_HeapUsed_Before > 0) && ( this._v_HeapTotal_Before && this._v_HeapTotal_Before > 0)) {

                        this._v_HeapAvailable_Before = this._v_HeapTotal_Before - this._v_HeapUsed_Before;

                        /* ACV 201512281357 REMOVED because of error with nodejs v4.2.4

                        this._v_Dump_MemoryReport[ "HeapAvailable"] = this._v_HeapAvailable_Before ;

                         exception:TypeError: Cannot assign to read only property 'HeapAvailable' of true
                         undefined
                         [ 'Object.pS_GarbageCollect@/home/acv/Works/MDD/SVNs_seedspn/de225springnut/springnut/src/test/end2end/lib/common-test/memory-test.js:1129:69',
                         'Immediate._onImmediate@/home/acv/Works/MDD/SVNs_seedspn/de225springnut/springnut/src/test/end2end/lib/common-test/runsteps-test.js:415:25',
                         */


                        if( this._v_MinHeapAvailable && ( this._v_MinHeapAvailable > 0)) {

                            if( this._v_HeapAvailable_Before < this._v_MinHeapAvailable) {

                                if( !this._v_HasAttemptedToGarbageCollect) {

                                    this._v_HasAttemptedToGarbageCollect = true;

                                    theM_platformmemory.fGarbageCollect();

                                    this._v_HasGarbageCollected = true;
                                }

                                aGarbageCollectionReport = "GARBAGECOLLECTIONPERFORMED this._v_HeapAvailable_Before=" + this._v_HeapAvailable_Before + "  < this._v_MinHeapAvailable=" + this._v_MinHeapAvailable + " => this._v_HasGarbageCollected=" + this._v_HasGarbageCollected;
                            }
                        }
                    }
                }



                if( !this._v_HasGarbageCollected) {
                    if( this._v_HasAttemptedToGarbageCollect) {
                        aGarbageCollectionReport = "ERROR GARBAGECOLLECTIONATTEMPTEDNOTPERFORMED";
                    }
                }


                if( this._v_Dump_GarbageCollect) {
                    this.pToConsoleLikeEvent( aGarbageCollectionReport);
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_OK, aGarbageCollectionReport, null,  null));

            };
            if( pS_GarbageCollect){}/* CQT */
            aPrototype.pS_GarbageCollect = pS_GarbageCollect;














            var pF_Memory = function( theCallback) {
                var aMethodName = "pF_Memory";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_Memory){}/* CQT */
            aPrototype.pF_Memory = pF_Memory;







            var fOwnTestMethodToRun = function() {
                return this.pSS_Memory.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_Memory = function( theCallback) {
                var aMethodName = "pSS_Memory";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_ResolveParms.bind( this),
                    this.pS_ReportMemoryBefore.bind( this),
                    this.pS_GarbageCollect.bind( this),
                    this.pS_ReportMemoryAfter.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_Memory){}/* CQT */
            aPrototype.pSS_Memory = pSS_Memory;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;










            return aPrototype;

        })();




        var Memory_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_MinHeapAvailable                       = null;
            this._v_MaxHeapUsed                            = null;
            this._v_MaxHeapTotal                           = null;

            this._v_FailIf_UnderMinHeapAvailable           = null;
            this._v_FailIf_OverMaxHeapUsed                 = null;
            this._v_FailIf_OverMaxHeapTotal                = null;

            this._v_GarbageCollectIf_UnderMinHeapAvailable = null;
            this._v_GarbageCollectIf_OverMaxHeapUsed       = null;
            this._v_GarbageCollectIf_OverMaxHeapTotal      = null;
            this._v_GarbageCollect_Always                  = null;

            this._v_ReportMemoryAfter                      = null;

            this._v_Dump_MemoryReport                      = null;
            this._v_Dump_GarbageCollect                    = null;
            

            this._v_MemoryReport_Before                    = null;
            this._v_MemoryReport_After                     = null;

            this._v_HeapUsed_Before                        = null;
            this._v_HeapUsed_After                         = null;

            this._v_HeapTotal_Before                       = null;
            this._v_HeapTotal_After                        = null;

            this._v_HeapAvailable_Before                   = null;
            this._v_HeapAvailable_After                    = null;

            this._v_MillisBeforeGarbageCollect             = null;
            this._v_MillisAfterGarbageCollect              = null;

            this._v_GarbageCollectDurationMillis           = null;

            this._v_HasAttemptedToGarbageCollect           = null;
            this._v_HasGarbageCollected                    = null;

            this._pInit_Memory(
                theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        Memory_Constructor.prototype = aMemory_Prototype;





        var Memory_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aMemory_Prototype;
            this._v_Type = null;

            this._v_MinHeapAvailable                       = null;
            this._v_MaxHeapUsed                            = null;
            this._v_MaxHeapTotal                           = null;

            this._v_FailIf_UnderMinHeapAvailable           = null;
            this._v_FailIf_OverMaxHeapUsed                 = null;
            this._v_FailIf_OverMaxHeapTotal                = null;

            this._v_GarbageCollectIf_UnderMinHeapAvailable = null;
            this._v_GarbageCollectIf_OverMaxHeapUsed       = null;
            this._v_GarbageCollectIf_OverMaxHeapTotal      = null;
            this._v_GarbageCollect_Always                  = null;

            this._v_ReportMemoryAfter                      = null;

            this._v_Dump_MemoryReport                      = null;
            this._v_Dump_GarbageCollect                    = null;
            

            this._v_MemoryReport_Before                    = null;
            this._v_MemoryReport_After                     = null;

            this._v_HeapUsed_Before                        = null;
            this._v_HeapUsed_After                         = null;

            this._v_HeapTotal_Before                       = null;
            this._v_HeapTotal_After                        = null;

            this._v_HeapAvailable_Before                   = null;


            this._v_MillisBeforeGarbageCollect             = null;
            this._v_MillisAfterGarbageCollect              = null;

            this._v_GarbageCollectDurationMillis           = null;

            this._v_HasAttemptedToGarbageCollect           = null;
            this._v_HasGarbageCollected                    = null;

        };
        Memory_SuperPrototypeConstructor.prototype = aMemory_Prototype;



        var aModule = {
            "Memory_Prototype": aMemory_Prototype,
            "Memory_Constructor": Memory_Constructor,
            "Memory_SuperPrototypeConstructor": Memory_SuperPrototypeConstructor
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

            var aM_runsubs_test   = require('./runsubs-test');
            var aM_overrider      = require('./overrider');
            var aM_sentinels      = require('./sentinels');
            var aM_platformmemory = require('../infrasvcs/memory/memory');

            return aMod_definer(
                aM_runsubs_test,
                aM_overrider,
                aM_sentinels,
                aM_platformmemory
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./runsubs-test",
            "./overrider",
            "./sentinels",
            "../infrasvcs/memory/memory"
        ], function (
            theM_runsubs_test,
            theM_overrider,
            theM_sentinels,
            theM_platformmemory
        ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_overrider,
                theM_sentinels,
                theM_platformmemory
            );
        });
    }


}());


