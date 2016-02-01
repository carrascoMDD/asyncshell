'use strict';

/*
 housekeeper-memory.js
 Created 201504072147
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
                                 theM_housekeeperspecific,
                                 theM_housekeepingspecific,
                                 theM_housekeepingrecommendation,
                                 theM_housekeepingaction,
                                 theM_housekeepingcheckspecific,
                                 theM_platformmemory,
                                 theM_traversals,
                                 theM_overrider) {

        var ModuleName     = "housekeeper-memory";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.MAXHEAPUSED_DEFAULT        = 1000;    /* 1000 MB = 1 GB */
            theToInit.MAXHEAPUSED_HARDLIMIT      = 1000000; /* 1000000 MB = 1000 GB = 1TB */

            theToInit.MINHEAPAVAILABLE_DEFAULT   = 1;       /* MB */
            theToInit.MINHEAPAVAILABLE_HARDLIMIT = 1 / 4;   /* MB */

            theToInit.MINHOWMUCHTOCLEAN          = 1;       /* MB */


            theToInit.THRASHINGHEAPAVAILABLE_DEFAULT   = 100;     /* MB */
            theToInit.THRASHINGHEAPAVAILABLE_HARDLIMIT = 1 / 4;   /* MB */

            theToInit.IGNORETHRASHINGMILLIS  = false;

            theToInit.THRASHINGMILLIS_TESTSPAYLOADS      =      30 * 1000; /*  30000 */
            theToInit.THRASHINGMILLIS_CONFIGSPAYLOADS    =      60 * 1000; /*  60000 */
            theToInit.THRASHINGMILLIS_CALLBACKSPAYLOADS  =  3 * 30 * 1000; /*  90000 */
            theToInit.THRASHINGMILLIS_EVENTSPAYLOADS     =  2 * 60 * 1000; /* 120000 */
            theToInit.THRASHINGMILLIS_TESTS              =  5 * 30 * 1000; /* 150000 */
            theToInit.THRASHINGMILLIS_CONFIGS            =  3 * 60 * 1000; /* 180000 */
            theToInit.THRASHINGMILLIS_CALLBACKS          =  7 * 30 * 1000; /* 210000 */
            theToInit.THRASHINGMILLIS_EVENTS             =  0;



            theToInit.LOGRECENTHOUSEKEEPINGACTIONS = true;

            theToInit.LOGACTIONSPERFORMEDINTHISHOUSEKEEPING = true;



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

            theToInit.NUMRECENTACTIONSTOFIND = 1;


            theToInit.THRASHINGMILLIS_BYWHATTOCLEAN = { };
            theToInit.THRASHINGMILLIS_BYWHATTOCLEAN[ theM_housekeepconstants.WHATTOCLEAN_TESTSPAYLOADS    ] = theToInit.THRASHINGMILLIS_TESTSPAYLOADS    ;
            theToInit.THRASHINGMILLIS_BYWHATTOCLEAN[ theM_housekeepconstants.WHATTOCLEAN_CONFIGSPAYLOADS  ] = theToInit.THRASHINGMILLIS_CONFIGSPAYLOADS  ;
            theToInit.THRASHINGMILLIS_BYWHATTOCLEAN[ theM_housekeepconstants.WHATTOCLEAN_CALLBACKSPAYLOADS] = theToInit.THRASHINGMILLIS_CALLBACKSPAYLOADS;
            theToInit.THRASHINGMILLIS_BYWHATTOCLEAN[ theM_housekeepconstants.WHATTOCLEAN_EVENTSPAYLOADS   ] = theToInit.THRASHINGMILLIS_EVENTSPAYLOADS   ;
            theToInit.THRASHINGMILLIS_BYWHATTOCLEAN[ theM_housekeepconstants.WHATTOCLEAN_TESTS            ] = theToInit.THRASHINGMILLIS_TESTS            ;
            theToInit.THRASHINGMILLIS_BYWHATTOCLEAN[ theM_housekeepconstants.WHATTOCLEAN_CONFIGS          ] = theToInit.THRASHINGMILLIS_CONFIGS          ;
            theToInit.THRASHINGMILLIS_BYWHATTOCLEAN[ theM_housekeepconstants.WHATTOCLEAN_CALLBACKS        ] = theToInit.THRASHINGMILLIS_CALLBACKS        ;
            theToInit.THRASHINGMILLIS_BYWHATTOCLEAN[ theM_housekeepconstants.WHATTOCLEAN_EVENTS           ] = theToInit.THRASHINGMILLIS_EVENTS           ;
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







        var aHousekeeperMemory_Prototype = (function() {


            var aPrototype = new theM_housekeeperspecific.HousekeeperSpecific_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeeperspecific.HousekeeperSpecific_Prototype;

            aPrototype._v_Type = "HousekeeperMemory";



            aPrototype._v_TestsByMomentAndSpecPath = null;







            var _pInit = function( theTitle,
                                   theHousekeeperIdentifier,
                                   theHousekeeperRecorder,
                                   theHousekeepOptions,
                                   theHousekeptLauncher,
                                   theHousekeeperMaster,
                                   theSnapshotter) {

                this._pInit_HousekeeperMemory( theTitle,
                                               theHousekeeperIdentifier,
                                               theHousekeeperRecorder,
                                               theHousekeepOptions,
                                               theHousekeptLauncher,
                                               theHousekeeperMaster,
                                               theSnapshotter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeeperMemory = function( theTitle,
                                                     theHousekeeperIdentifier,
                                                     theHousekeeperRecorder,
                                                     theHousekeepOptions,
                                                     theHousekeptLauncher,
                                                     theHousekeeperMaster,
                                                     theSnapshotter) {


                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_HousekeeperSpecific.apply( this, [ theTitle,
                                                                                 theHousekeeperIdentifier,
                                                                                 theHousekeeperRecorder,
                                                                                 theHousekeepOptions,
                                                                                 theHousekeptLauncher,
                                                                                 theHousekeeperMaster,
                                                                                 theSnapshotter]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;


                this._v_HousekeeperKind = theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY;

                this._v_TestsByMomentAndSpecPath = null; /* Lazy initialize uses null as sentinel */

            };
            if( _pInit_HousekeeperMemory){}/* CQT */
            aPrototype._pInit_HousekeeperMemory = _pInit_HousekeeperMemory;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeeperMemory( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_HousekeeperMemory = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeeperSpecific.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeeperMemory){}/* CQT */
            aPrototype._pRelease_HousekeeperMemory = _pRelease_HousekeeperMemory;









            var fAsLogObject_HousekeepingRecommendationParameters = function() {
                return this;
            };



            var fAsLogObject_TestHousekeepingRecommendation= function() {
                return this;
            };



            var fAsLogObject_ComputationReport = function() {
                return this;
            };



            var fAsLogObject_MemoryReport = function() {
                return this;
            };









            var fExtractSnapshotSpecificNow = function( theMoment, theHousekeepingAttemptIndex, theLastSubLauncher) {

                if( !theMoment) {
                    return null;
                }

                if( !this._v_Snapshotter) {
                    return null;
                }

                var aSnapshot = this._v_Snapshotter.fExtractSnapshotNow( this, theMoment, theHousekeepingAttemptIndex, theLastSubLauncher);
                if( !aSnapshot) {
                    return null;
                }

                return aSnapshot;

            };
            if( fExtractSnapshotSpecificNow){}/* CQT */
            aPrototype.fExtractSnapshotSpecificNow = fExtractSnapshotSpecificNow;
















            var fAsLogObject_ActionsFindCriteria = function() {

                return this;

            };















            var fPerformHousekeepingAttemptSpecific = function( theHousekeepingAttempt, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher) {

                var aMethodName = "fPerformHousekeepingAttemptSpecific";


                if( !theHousekeepingAttempt) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                if( !theHousekeeping._v_HousekeepingMoment) {
                    return null;
                }



                var anIncrementalMode = null;
                if( this._v_HousekeepOptions) {

                    var aHousekeepOption_IncrementalMode = this._v_HousekeepOptions[ "incrementalMode"];

                    if( typeof aHousekeepOption_IncrementalMode == "boolean") {

                        anIncrementalMode =  aHousekeepOption_IncrementalMode;
                    }
                }



                var someHousekeepings = null;

                if( ( typeof anIncrementalMode == "boolean") && anIncrementalMode) {

                    someHousekeepings = this.fPerformHousekeepingAttemptSpecific_Incremental( theHousekeepingAttempt, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher);
                }
                else {

                    someHousekeepings = this.fPerformHousekeepingAttemptSpecific_AllWhats(        theHousekeepingAttempt, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher)
                }


                return someHousekeepings;
            };
            if( fPerformHousekeepingAttemptSpecific){}/* CQT */
            aPrototype.fPerformHousekeepingAttemptSpecific = fPerformHousekeepingAttemptSpecific;


















            var fPerformHousekeepingAttemptSpecific_AllWhats = function( theHousekeepingAttempt, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher) {

                var aMethodName = "";


                var aStartPerformTime = new Date();


                if( !theHousekeepingAttempt) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                if( !theHousekeeping._v_HousekeepingMoment) {
                    return null;
                }



                var someComputationReports = [ ];
                someComputationReports.fAsLogObject = fAsLogObject_ComputationReport.bind( someComputationReports);

                someComputationReports.push( "fPerformHousekeepingAttemptSpecific_AllWhats");
                someComputationReports.push( "moment="       + theHousekeeping._v_HousekeepingMoment);
                someComputationReports.push( "attemptIndex=" + theHousekeepingAttempt._v_HousekeepingAttemptIndex)

                someComputationReports.push( "MEGAFACTOR=" + theM_housekeepconstants.MEGAFACTOR);








                var aMinHeapAvailable= 0;
                if( this._v_HousekeepOptions) {

                    var aHousekeepOption_minHeapAvailable = this._v_HousekeepOptions[ "minHeapAvailable"];

                    if( aHousekeepOption_minHeapAvailable) {
                        aMinHeapAvailable =  aHousekeepOption_minHeapAvailable;

                        someComputationReports.push( "housekeepOptions.minHeapAvailable=" + aMinHeapAvailable);
                    }
                    else {
                        aMinHeapAvailable =  this.MINHEAPAVAILABLE_DEFAULT;

                        someComputationReports.push( "MINHEAPAVAILABLE_DEFAULT=" + aMinHeapAvailable);
                    }

                    if( aMinHeapAvailable) {

                        if( this.MINHEAPAVAILABLE_HARDLIMIT) {

                            someComputationReports.push( "MINHEAPAVAILABLE_HARDLIMIT=" + this.MINHEAPAVAILABLE_HARDLIMIT);

                            if( aMinHeapAvailable < this.MINHEAPAVAILABLE_HARDLIMIT) {
                                aMinHeapAvailable = this.MINHEAPAVAILABLE_HARDLIMIT;

                                someComputationReports.push( "aMinHeapAvailable=" + aMinHeapAvailable + " < MINHEAPAVAILABLE_HARDLIMIT=" + this.MINHEAPAVAILABLE_HARDLIMIT);
                            }
                        }

                        if( aMinHeapAvailable < 0) {
                            aMinHeapAvailable = 0;
                        }
                    }
                }
                aMinHeapAvailable = Math.floor( aMinHeapAvailable * theM_housekeepconstants.MEGAFACTOR);

                someComputationReports.push( "aMinHeapAvailableBYTES=" + aMinHeapAvailable);






                var aMaxHeapUsed = 0;
                if( this._v_HousekeepOptions) {

                    var aHousekeepOption_maxHeapUsed = this._v_HousekeepOptions[ "maxHeapUsed"];

                    if( aHousekeepOption_maxHeapUsed) {
                        aMaxHeapUsed =  aHousekeepOption_maxHeapUsed;

                        someComputationReports.push( "housekeepOptions.maxHeapUsed=" + aMaxHeapUsed);
                    }
                    else {
                        aMaxHeapUsed =  this.MAXHEAPUSED_DEFAULT;

                        someComputationReports.push( "MAXHEAPUSED_DEFAULT=" + aMaxHeapUsed);
                    }

                    if( aMaxHeapUsed) {

                        if( this.MAXHEAPUSED_HARDLIMIT) {

                            someComputationReports.push( "MAXHEAPUSED_HARDLIMIT=" + this.MAXHEAPUSED_HARDLIMIT);

                            if( aMaxHeapUsed > this.MAXHEAPUSED_HARDLIMIT) {
                                aMaxHeapUsed = this.MAXHEAPUSED_HARDLIMIT;

                                someComputationReports.push( "aMaxHeapUsed=" + aMaxHeapUsed + " > MAXHEAPUSED_HARDLIMIT=" + this.MAXHEAPUSED_HARDLIMIT);
                            }
                        }

                        if( aMaxHeapUsed < 0) {
                            aMaxHeapUsed = 0;
                        }
                    }
                }
                aMaxHeapUsed = Math.floor( aMaxHeapUsed * theM_housekeepconstants.MEGAFACTOR);

                someComputationReports.push( "aMaxHeapUsedBYTES=" + aMaxHeapUsed);









                var aMinHowMuchToClean = 0;
                if( this.MINHOWMUCHTOCLEAN) {
                    aMinHowMuchToClean = this.MINHOWMUCHTOCLEAN * theM_housekeepconstants.MEGAFACTOR;

                    someComputationReports.push( "aMinHowMuchToCleanBYTES=" + aMinHowMuchToClean);
                }






                if( !this.fHasFakeSnapshotter()) {

                    var aMemoryReportWOgarbagecollect = theM_platformmemory.fMemoryReport();
                    if( aMemoryReportWOgarbagecollect) {

                        aMemoryReportWOgarbagecollect.fAsLogObject = fAsLogObject_MemoryReport.bind( aMemoryReportWOgarbagecollect);

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_MEMORYREPORT,  aMemoryReportWOgarbagecollect, someComputationReports, null);

                        var aHeapUsedWOgarbagecollect  = aMemoryReportWOgarbagecollect[ "heapUsed"];
                        if( aHeapUsedWOgarbagecollect) {

                            someComputationReports.push( "memoryReportWOgarbagecollect.heapUsed=" + aHeapUsedWOgarbagecollect);


                            var aHowMuchToCleanWOgarbagecollect = this.fHowMuchToClean( aMinHeapAvailable, aMaxHeapUsed, aMinHowMuchToClean, aHeapUsedWOgarbagecollect, someComputationReports);
                            if( !aHowMuchToCleanWOgarbagecollect) {

                                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_NOTHINGTOCLEAN,  someComputationReports, null, null);
                                return null;
                            }
                        }
                    }
                }













                var aMemorySnapshot = this.fExtractSnapshotSpecificNow(
                    theHousekeeping._v_HousekeepingMoment,
                    theHousekeepingAttempt._v_HousekeepingAttemptIndex,
                    theLastSubLauncher);
                if( !aMemorySnapshot) {
                    return null;
                }

                var aMemoryReport = aMemorySnapshot[ "memoryReport"];
                if( !aMemoryReport) {
                    return null;
                }

                var aHeapUsed  = aMemoryReport[ "heapUsed"];
                if( !aHeapUsed) {
                    return null;
                }

                someComputationReports.push( "memoryReport.heapUsed=" + aHeapUsed);


                this.pAddSnapshot( aMemorySnapshot);






                var aHowMuchToClean = this.fHowMuchToClean( aMinHeapAvailable, aMaxHeapUsed, aMinHowMuchToClean, aHeapUsed, someComputationReports);

                if( !aHowMuchToClean) {

                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_NOTHINGTOCLEAN,  someComputationReports, null, null);
                    return null;
                }





                someComputationReports.push( "!fHowMuchToClean");


                var someWhatToClean = theM_housekeepconstants.WHATTOCLEAN_ALL.slice();



                someComputationReports.push( "someWhatToClean=" + someWhatToClean.join( ","));

                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_SOMETHINGTOCLEAN,  someWhatToClean, null, someComputationReports);






                var aHousekeepingSpecificMemoryIndexForTitle = 0;
                if( this._v_HousekeepingsSpecific) {
                    aHousekeepingSpecificMemoryIndexForTitle = this._v_HousekeepingsSpecific.length;
                }


                var aHousekeepingSpecificMemory = new theM_housekeepingspecific.HousekeepingSpecific_Constructor(
                    "HousekeepingSpecific-Memory[" + aHousekeepingSpecificMemoryIndexForTitle + "]For-" + ((( theHousekeepingAttempt && theHousekeepingAttempt._v_HousekeepingTitle) || "") || this._v_HousekeeperTitle),
                    this._v_HousekeeperIdentifier,
                    this._v_HousekeeperRecorder,
                    this._v_HousekeepOptions,
                    this._v_HousekeeperMaster,
                    theHousekeeping,
                    theHousekeepingAttempt,
                    this);


                theHousekeepingAttempt.pAddHousekeepingSpecific( aHousekeepingSpecificMemory);


                var aNumWhatToCleanToRecommend = someWhatToClean.length;


                for( var aWhatToCleanToRecommendIdx = 0; aWhatToCleanToRecommendIdx < aNumWhatToCleanToRecommend; aWhatToCleanToRecommendIdx++) {

                    var aWhatToCleanToRecommend = someWhatToClean[ aWhatToCleanToRecommendIdx];
                    if( aWhatToCleanToRecommend) {


                        var aHousekeepingRecommendationParameters = { };
                        aHousekeepingRecommendationParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN]    = [ aWhatToCleanToRecommend];
                        aHousekeepingRecommendationParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_HOWMUCHTOCLEAN] = aHowMuchToClean;
                        aHousekeepingRecommendationParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_COMPUTATION]    = someComputationReports;
                        aHousekeepingRecommendationParameters.fAsLogObject = fAsLogObject_HousekeepingRecommendationParameters.bind( aHousekeepingRecommendationParameters);



                        var aHousekeepingRecommendationIndexForTitle = 0;
                        if( this._v_HousekeepingRecommendations) {
                            aHousekeepingRecommendationIndexForTitle = this._v_HousekeepingRecommendations.length;
                        }

                        var aHousekeepingRecommendation = new theM_housekeepingrecommendation.HousekeepingRecommendation_Constructor(
                            "HousekeepingRecommendation[" + aHousekeepingRecommendationIndexForTitle + "]For-" + ( aHousekeepingSpecificMemory._v_HousekeepingTitle || this._v_HousekeeperTitle),
                            this._v_HousekeeperIdentifier,
                            this._v_HousekeeperRecorder,
                            this._v_HousekeepOptions,
                            this._v_HousekeeperMaster,
                            this,
                            theHousekeeping,
                            theHousekeepingAttempt,
                            aHousekeepingSpecificMemory,
                            theM_housekeepconstants.RECOMMENDATIONKIND_ACTION,
                            theM_housekeepconstants.ACTIONKIND_CLEANUP,
                            1, /* theRecommendedActionPriority */
                            theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY,
                            aHousekeepingRecommendationParameters,
                            theHousekeeping._v_HousekeepingMoment,
                            someComputationReports
                        );

                        aHousekeepingRecommendation._v_HousekeepingSuccess   = true;


                        aHousekeepingSpecificMemory._v_HousekeepingPerformed = true;
                        aHousekeepingSpecificMemory._v_HousekeepingSuccess   = true;

                        aHousekeepingSpecificMemory.pAddHousekeepingRecommendation( aHousekeepingRecommendation);


                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_RECOMMEND, aHousekeepingRecommendation, theHousekeeping._v_HousekeepingMoment, aHousekeepingRecommendationParameters);
                    }
                }

                return [ aHousekeepingSpecificMemory];
            };
            if( fPerformHousekeepingAttemptSpecific_AllWhats){}/* CQT */
            aPrototype.fPerformHousekeepingAttemptSpecific_AllWhats = fPerformHousekeepingAttemptSpecific_AllWhats;
















            var fPerformHousekeepingAttemptSpecific_Incremental = function( theHousekeepingAttempt, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher) {

                var aMethodName = "fPerformHousekeepingAttemptSpecific_Incremental";


                var aStartPerformTime = new Date();


                if( !theHousekeepingAttempt) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                if( !theHousekeeping._v_HousekeepingMoment) {
                    return null;
                }



                var someComputationReports = [ ];
                someComputationReports.fAsLogObject = fAsLogObject_ComputationReport.bind( someComputationReports);

                someComputationReports.push( "moment="       + theHousekeeping._v_HousekeepingMoment);
                someComputationReports.push( "attemptIndex=" + theHousekeepingAttempt._v_HousekeepingAttemptIndex)

                someComputationReports.push( "MEGAFACTOR=" + theM_housekeepconstants.MEGAFACTOR);




                var aMinHeapAvailable= 0;
                if( this._v_HousekeepOptions) {

                    var aHousekeepOption_minHeapAvailable = this._v_HousekeepOptions[ "minHeapAvailable"];

                    if( aHousekeepOption_minHeapAvailable) {
                        aMinHeapAvailable =  aHousekeepOption_minHeapAvailable;

                        someComputationReports.push( "housekeepOptions.minHeapAvailable=" + aMinHeapAvailable);
                    }
                    else {
                        aMinHeapAvailable =  this.MINHEAPAVAILABLE_DEFAULT;

                        someComputationReports.push( "MINHEAPAVAILABLE_DEFAULT=" + aMinHeapAvailable);
                    }

                    if( aMinHeapAvailable) {

                        if( this.MINHEAPAVAILABLE_HARDLIMIT) {

                            someComputationReports.push( "MINHEAPAVAILABLE_HARDLIMIT=" + this.MINHEAPAVAILABLE_HARDLIMIT);

                            if( aMinHeapAvailable < this.MINHEAPAVAILABLE_HARDLIMIT) {
                                aMinHeapAvailable = this.MINHEAPAVAILABLE_HARDLIMIT;

                                someComputationReports.push( "aMinHeapAvailable=" + aMinHeapAvailable + " < MINHEAPAVAILABLE_HARDLIMIT=" + this.MINHEAPAVAILABLE_HARDLIMIT);
                            }
                        }

                        if( aMinHeapAvailable < 0) {
                            aMinHeapAvailable = 0;
                        }
                    }
                }
                aMinHeapAvailable = Math.floor( aMinHeapAvailable * theM_housekeepconstants.MEGAFACTOR);

                someComputationReports.push( "aMinHeapAvailableBYTES=" + aMinHeapAvailable);






                var aMaxHeapUsed = 0;
                if( this._v_HousekeepOptions) {

                    var aHousekeepOption_maxHeapUsed = this._v_HousekeepOptions[ "maxHeapUsed"];

                    if( aHousekeepOption_maxHeapUsed) {
                        aMaxHeapUsed =  aHousekeepOption_maxHeapUsed;

                        someComputationReports.push( "housekeepOptions.maxHeapUsed=" + aMaxHeapUsed);
                    }
                    else {
                        aMaxHeapUsed =  this.MAXHEAPUSED_DEFAULT;

                        someComputationReports.push( "MAXHEAPUSED_DEFAULT=" + aMaxHeapUsed);
                    }

                    if( aMaxHeapUsed) {

                        if( this.MAXHEAPUSED_HARDLIMIT) {

                            someComputationReports.push( "MAXHEAPUSED_HARDLIMIT=" + this.MAXHEAPUSED_HARDLIMIT);

                            if( aMaxHeapUsed > this.MAXHEAPUSED_HARDLIMIT) {
                                aMaxHeapUsed = this.MAXHEAPUSED_HARDLIMIT;

                                someComputationReports.push( "aMaxHeapUsed=" + aMaxHeapUsed + " > MAXHEAPUSED_HARDLIMIT=" + this.MAXHEAPUSED_HARDLIMIT);
                            }
                        }

                        if( aMaxHeapUsed < 0) {
                            aMaxHeapUsed = 0;
                        }
                    }
                }
                aMaxHeapUsed = Math.floor( aMaxHeapUsed * theM_housekeepconstants.MEGAFACTOR);

                someComputationReports.push( "aMaxHeapUsedBYTES=" + aMaxHeapUsed);










                var aThrashingHeapAvailable = null;
                if( this._v_HousekeepOptions) {

                    var aHousekeepOption_thrashingHeapAvailable = this._v_HousekeepOptions[ "thrashingHeapAvailable"];

                    if( typeof aHousekeepOption_thrashingHeapAvailable == "number") {

                        aThrashingHeapAvailable =  aHousekeepOption_thrashingHeapAvailable;

                        someComputationReports.push( "housekeepOptions.thrashingHeapAvailable=" + aThrashingHeapAvailable);


                        if( this.THRASHINGHEAPAVAILABLE_HARDLIMIT) {

                            someComputationReports.push( "THRASHINGHEAPAVAILABLE_HARDLIMIT=" + this.THRASHINGHEAPAVAILABLE_HARDLIMIT);

                            if( aThrashingHeapAvailable < this.THRASHINGHEAPAVAILABLE_HARDLIMIT) {
                                aThrashingHeapAvailable = null;

                                someComputationReports.push( "aThrashingHeapAvailable=" + aThrashingHeapAvailable + " < THRASHINGHEAPAVAILABLE_HARDLIMIT=" + this.THRASHINGHEAPAVAILABLE_HARDLIMIT);
                            }
                        }

                        if( aThrashingHeapAvailable < 0) {
                            aThrashingHeapAvailable = null;
                        }

                    }
                }

                if( typeof aThrashingHeapAvailable == "number") {

                    someComputationReports.push( "aThrashingHeapAvailableMEGAS=" + aThrashingHeapAvailable);

                    aThrashingHeapAvailable = Math.floor( aThrashingHeapAvailable * theM_housekeepconstants.MEGAFACTOR);

                    someComputationReports.push( "aThrashingHeapAvailableBYTES=" + aThrashingHeapAvailable);

                    if( aThrashingHeapAvailable < aMinHeapAvailable) {
                        aThrashingHeapAvailable = null;
                    }
                }





                var aIgnoreThrashingMillis = null;
                if( this._v_HousekeepOptions) {

                    var aHousekeepOption_IgnoreThrashingMillis = this._v_HousekeepOptions[ "ignoreThrashingMillis"];

                    if( typeof aHousekeepOption_IgnoreThrashingMillis == "boolean") {

                        aIgnoreThrashingMillis =  aHousekeepOption_IgnoreThrashingMillis;
                    }
                }

                if( typeof aIgnoreThrashingMillis == "boolean") {

                    someComputationReports.push( "aIgnoreThrashingMillis=" + aIgnoreThrashingMillis);
                }




                var someThrashingMillisByWhatToCleanFromOptions = { };

                if( this._v_HousekeepOptions) {

                    var someThrashingMillisWhatToCleanKeys = Object.keys( this.THRASHINGMILLIS_BYWHATTOCLEAN);
                    if( someThrashingMillisWhatToCleanKeys) {

                        var aNumThrashingMillisWhatToCleanKeys = someThrashingMillisWhatToCleanKeys.length;
                        if( aNumThrashingMillisWhatToCleanKeys) {

                            var someOriginalThrasingMillisByWhatToClean = this.THRASHINGMILLIS_BYWHATTOCLEAN;
                            someThrashingMillisWhatToCleanKeys.forEach( function( athKey) {
                                someThrashingMillisByWhatToCleanFromOptions[ athKey] = someOriginalThrasingMillisByWhatToClean[ athKey];
                            });


                            var aThrashingMillisArgument = this._v_HousekeepOptions[ "thrashingMillis"];
                            if( aThrashingMillisArgument) {

                                for( var aThrashingMillisByWhatToCleanKeyIdx=0; aThrashingMillisByWhatToCleanKeyIdx < aNumThrashingMillisWhatToCleanKeys; aThrashingMillisByWhatToCleanKeyIdx++) {

                                    var aThrashingMillisByWhatToCleanKey = someThrashingMillisWhatToCleanKeys[ aThrashingMillisByWhatToCleanKeyIdx];
                                    if( aThrashingMillisByWhatToCleanKey) {

                                        var aThrashingMillisForWhatToClean = aThrashingMillisArgument[ aThrashingMillisByWhatToCleanKey];
                                        if( typeof aThrashingMillisForWhatToClean == "number") {

                                            someThrashingMillisByWhatToCleanFromOptions[ aThrashingMillisByWhatToCleanKey] = aThrashingMillisForWhatToClean;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                var someThrashingMillisByWhatToCleanKeys = Object.keys( someThrashingMillisByWhatToCleanFromOptions);
                if( someThrashingMillisByWhatToCleanKeys.length) {
                    var aThrashingMillisByWhatToCleanFromOptionsStr = "";
                    someThrashingMillisByWhatToCleanKeys.forEach( function( athKey) {
                        if( aThrashingMillisByWhatToCleanFromOptionsStr) {
                            aThrashingMillisByWhatToCleanFromOptionsStr += " ,";
                        }
                        aThrashingMillisByWhatToCleanFromOptionsStr += ( athKey + "=" + someThrashingMillisByWhatToCleanFromOptions[ athKey]);
                    });
                    someComputationReports.push( "someThrashingMillisByWhatToCleanFromOptions=" + aThrashingMillisByWhatToCleanFromOptionsStr);
                }









                var aMinHowMuchToClean = 0;
                if( this.MINHOWMUCHTOCLEAN) {
                    aMinHowMuchToClean = this.MINHOWMUCHTOCLEAN * theM_housekeepconstants.MEGAFACTOR;

                    someComputationReports.push( "aMinHowMuchToCleanBYTES=" + aMinHowMuchToClean);
                }






                if( !this.fHasFakeSnapshotter()) {

                    var aMemoryReportWOgarbagecollect = theM_platformmemory.fMemoryReport();
                    if( aMemoryReportWOgarbagecollect) {

                        aMemoryReportWOgarbagecollect.fAsLogObject = fAsLogObject_MemoryReport.bind( aMemoryReportWOgarbagecollect);

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_MEMORYREPORT,  aMemoryReportWOgarbagecollect, someComputationReports, null);

                        var aHeapUsedWOgarbagecollect  = aMemoryReportWOgarbagecollect[ "heapUsed"];
                        if( aHeapUsedWOgarbagecollect) {

                            someComputationReports.push( "memoryReportWOgarbagecollect.heapUsed=" + aHeapUsedWOgarbagecollect);


                            var aHowMuchToCleanWOgarbagecollect = this.fHowMuchToClean( aMinHeapAvailable, aMaxHeapUsed, aMinHowMuchToClean, aHeapUsedWOgarbagecollect, someComputationReports);
                            if( !aHowMuchToCleanWOgarbagecollect) {

                                if( this.fHeapAvailableIsOverThrashingThreshold( aMinHeapAvailable,
                                    aMaxHeapUsed,
                                    aThrashingHeapAvailable,
                                    aHeapUsedWOgarbagecollect,
                                    someComputationReports)) {

                                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_NOTHINGTOCLEAN,  someComputationReports, null, null);
                                    return null;
                                }
                            }
                        }
                    }
                }













                var aMemorySnapshot = this.fExtractSnapshotSpecificNow(
                    theHousekeeping._v_HousekeepingMoment,
                    theHousekeepingAttempt._v_HousekeepingAttemptIndex,
                    theLastSubLauncher);
                if( !aMemorySnapshot) {
                    return null;
                }

                var aMemoryReport = aMemorySnapshot[ "memoryReport"];
                if( !aMemoryReport) {
                    return null;
                }

                var aHeapUsed  = aMemoryReport[ "heapUsed"];
                if( !aHeapUsed) {
                    return null;
                }

                someComputationReports.push( "memoryReport.heapUsed=" + aHeapUsed);


                this.pAddSnapshot( aMemorySnapshot);



                var someActionsPerformedInThisHousekeeping = theHousekeeping.fAttemptsActionsPerformedBeforeAttempt(
                    theHousekeepingAttempt,
                    theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY,
                    theM_housekeepconstants.ACTIONKIND_CLEANUP);

                if( this.LOGACTIONSPERFORMEDINTHISHOUSEKEEPING) {
                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, "someActionsPerformedInThisHousekeeping", theM_housekeepconstants.ACTIONKIND_CLEANUP, someActionsPerformedInThisHousekeeping.length);
                }






                var aHowMuchToClean = this.fHowMuchToClean( aMinHeapAvailable, aMaxHeapUsed, aMinHowMuchToClean, aHeapUsed, someComputationReports);

                var someWhatToClean = null;


                if( aHowMuchToClean) {

                    someWhatToClean = this.fWhatToClean_OrFirst( theHousekeepingAttempt,
                        theHousekeeping,
                        someActionsPerformedInThisHousekeeping);

                    if( !someWhatToClean || !someWhatToClean.length) {

                        someComputationReports.push( "aHowMuchToClean=" + aHowMuchToClean + "  > 0  and !fWhatToClean_OrFirst");

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_NOTHINGTOCLEAN,  someComputationReports, null, null);
                        return null;
                    }

                    someComputationReports.push( "aHowMuchToClean=" + aHowMuchToClean + "  > 0  and fWhatToClean_OrFirst=" + someWhatToClean.join( ","));
                }
                else {

                    someComputationReports.push( "!fHowMuchToClean");




                    someComputationReports.push( "Trying to DetectThrashing");


                    someWhatToClean = this.fWhatToClean_ToAvoidThrashing( theHousekeepingAttempt,
                        theHousekeeping,
                        aMinHeapAvailable,
                        aMaxHeapUsed,
                        aThrashingHeapAvailable,
                        aHeapUsed,
                        aIgnoreThrashingMillis,
                        someThrashingMillisByWhatToCleanFromOptions,
                        someActionsPerformedInThisHousekeeping,
                        aStartPerformTime,
                        someComputationReports);

                    if( !someWhatToClean || !someWhatToClean.length) {
                        someComputationReports.push( "!fWhatToClean_ToAvoidThrashing()");

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_NOTHINGTOCLEAN,  someComputationReports, null, null);
                        return null;
                    }


                    someComputationReports.push( "ToAvoidThrashing fWhatToClean_ToAvoidThrashing()=" + someWhatToClean.join( ","));


                    aHowMuchToClean = aMinHowMuchToClean;

                    someComputationReports.push( "ToAvoidThrashing aHowMuchToClean=" + aHowMuchToClean + " := aMinHowMuchToClean=" + aMinHowMuchToClean);

                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_SOMETHINGTOCLEANTOAVOIDTHRASHING,  someWhatToClean, aHowMuchToClean, someComputationReports);
                }




                someComputationReports.push( "someWhatToClean=" + someWhatToClean.join( ","));

                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_SOMETHINGTOCLEAN,  someWhatToClean, null, someComputationReports);






                if( !someWhatToClean || !someWhatToClean.length) {
                    someComputationReports.push( "!someWhatToClean");

                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_NOTHINGTOCLEAN,  someComputationReports, null, null);
                    return null;
                }






                var aHousekeepingSpecificMemoryIndexForTitle = 0;
                if( this._v_HousekeepingsSpecific) {
                    aHousekeepingSpecificMemoryIndexForTitle = this._v_HousekeepingsSpecific.length;
                }


                var aHousekeepingSpecificMemory = new theM_housekeepingspecific.HousekeepingSpecific_Constructor(
                    "HousekeepingSpecific-Memory[" + aHousekeepingSpecificMemoryIndexForTitle + "]For-" + ((( theHousekeepingAttempt && theHousekeepingAttempt._v_HousekeepingTitle) || "") || this._v_HousekeeperTitle),
                    this._v_HousekeeperIdentifier,
                    this._v_HousekeeperRecorder,
                    this._v_HousekeepOptions,
                    this._v_HousekeeperMaster,
                    theHousekeeping,
                    theHousekeepingAttempt,
                    this);


                theHousekeepingAttempt.pAddHousekeepingSpecific( aHousekeepingSpecificMemory);


                var aNumWhatToCleanToRecommend = someWhatToClean.length;


                for( var aWhatToCleanToRecommendIdx = 0; aWhatToCleanToRecommendIdx < aNumWhatToCleanToRecommend; aWhatToCleanToRecommendIdx++) {

                    var aWhatToCleanToRecommend = someWhatToClean[ aWhatToCleanToRecommendIdx];
                    if( aWhatToCleanToRecommend) {


                        var aHousekeepingRecommendationParameters = { };
                        aHousekeepingRecommendationParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN]    = [ aWhatToCleanToRecommend];
                        aHousekeepingRecommendationParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_HOWMUCHTOCLEAN] = aHowMuchToClean;
                        aHousekeepingRecommendationParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_COMPUTATION]    = someComputationReports;
                        aHousekeepingRecommendationParameters.fAsLogObject = fAsLogObject_HousekeepingRecommendationParameters.bind( aHousekeepingRecommendationParameters);



                        var aHousekeepingRecommendationIndexForTitle = 0;
                        if( this._v_HousekeepingRecommendations) {
                            aHousekeepingRecommendationIndexForTitle = this._v_HousekeepingRecommendations.length;
                        }

                        var aHousekeepingRecommendation = new theM_housekeepingrecommendation.HousekeepingRecommendation_Constructor(
                            "HousekeepingRecommendation[" + aHousekeepingRecommendationIndexForTitle + "]For-" + ( aHousekeepingSpecificMemory._v_HousekeepingTitle || this._v_HousekeeperTitle),
                            this._v_HousekeeperIdentifier,
                            this._v_HousekeeperRecorder,
                            this._v_HousekeepOptions,
                            this._v_HousekeeperMaster,
                            this,
                            theHousekeeping,
                            theHousekeepingAttempt,
                            aHousekeepingSpecificMemory,
                            theM_housekeepconstants.RECOMMENDATIONKIND_ACTION,
                            theM_housekeepconstants.ACTIONKIND_CLEANUP,
                            1, /* theRecommendedActionPriority */
                            theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY,
                            aHousekeepingRecommendationParameters,
                            theHousekeeping._v_HousekeepingMoment,
                            someComputationReports
                        );

                        aHousekeepingRecommendation._v_HousekeepingSuccess   = true;


                        aHousekeepingSpecificMemory._v_HousekeepingPerformed = true;
                        aHousekeepingSpecificMemory._v_HousekeepingSuccess   = true;

                        aHousekeepingSpecificMemory.pAddHousekeepingRecommendation( aHousekeepingRecommendation);


                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_RECOMMEND, aHousekeepingRecommendation, theHousekeeping._v_HousekeepingMoment, aHousekeepingRecommendationParameters);
                    }
                }

                return [ aHousekeepingSpecificMemory];
            };
            if( fPerformHousekeepingAttemptSpecific_Incremental){}/* CQT */
            aPrototype.fPerformHousekeepingAttemptSpecific_Incremental = fPerformHousekeepingAttemptSpecific_Incremental;









            var fHowMuchToClean = function( theMinHeapAvailable, theMaxHeapUsed, theMinHowMuchToClean, theHeapUsed, theComputationReports) {

                var aHowMuchToClean = 0;


                if( !theMinHeapAvailable) {
                    return 0;
                }

                if( !theMaxHeapUsed) {
                    return 0;
                }

                var aHowMuchToClean_minHeapAvailable = 0;

                var aHeapAvailableOrGrowable = theMaxHeapUsed - theHeapUsed;

                if( theComputationReports) {
                    theComputationReports.push( "aHeapAvailableOrGrowable=" + aHeapAvailableOrGrowable + "  := theMaxHeapUsed=" + theMaxHeapUsed + "  -  theHeapUsed=" + theHeapUsed);
                }


                if( aHeapAvailableOrGrowable < theMinHeapAvailable) {

                    if( theComputationReports) {
                        theComputationReports.push( "aHeapAvailableOrGrowable=" + aHeapAvailableOrGrowable + "  <  theMinHeapAvailable=" + theMinHeapAvailable);
                    }

                    aHowMuchToClean_minHeapAvailable = theMinHeapAvailable - aHeapAvailableOrGrowable;

                    if( theComputationReports) {
                        theComputationReports.push( "aHowMuchToClean_minHeapAvailable=" + aHowMuchToClean_minHeapAvailable + " :=  theMinHeapAvailable=" + theMinHeapAvailable + "  -  aHeapAvailableOrGrowable=" + aHeapAvailableOrGrowable);
                    }

                    if( theMinHowMuchToClean) {
                        if( aHowMuchToClean_minHeapAvailable < theMinHowMuchToClean) {

                            if( theComputationReports) {
                                theComputationReports.push( "aHowMuchToClean_minHeapAvailable=" + aHowMuchToClean_minHeapAvailable + " < theMinHowMuchToClean=" + theMinHowMuchToClean);
                            }
                            aHowMuchToClean_minHeapAvailable = theMinHowMuchToClean;
                        }
                    }
                }

                if( aHowMuchToClean_minHeapAvailable) {
                    if( aHowMuchToClean_minHeapAvailable > aHowMuchToClean) {

                        if( theComputationReports) {
                            theComputationReports.push( "aHowMuchToClean_minHeapAvailable=" + aHowMuchToClean_minHeapAvailable + " > aHowMuchToClean=" + aHowMuchToClean);
                        }
                        aHowMuchToClean = aHowMuchToClean_minHeapAvailable;
                    }
                }



                if( !aHowMuchToClean) {
                    if( theComputationReports) {
                        theComputationReports.push( "NO aHowMuchToClean");
                    }
                    return 0;
                }


                if( theMinHowMuchToClean && ( aHowMuchToClean < theMinHowMuchToClean)) {

                    if( theComputationReports) {
                        theComputationReports.push( "aHowMuchToClean=" + aHowMuchToClean + "  <  theMinHowMuchToClean=" + theMinHowMuchToClean);
                    }
                    aHowMuchToClean = theMinHowMuchToClean;
                }

                if( theComputationReports) {
                    theComputationReports.push( "aHowMuchToClean=" + aHowMuchToClean);
                }

                return aHowMuchToClean;
                
            };
            if( fHowMuchToClean){}/* CQT */
            aPrototype.fHowMuchToClean = fHowMuchToClean;











            var fHeapAvailableIsOverThrashingThreshold = function( theMinHeapAvailable,
                                                                   theMaxHeapUsed,
                                                                   theThrashingHeapAvailable,
                                                                   theHeapUsed,
                                                                   theComputationReports) {

                var aMethodName = "fHeapAvailableIsOverThrashingThreshold";

                if( !theMinHeapAvailable) {
                    return false;
                }

                if( !theMaxHeapUsed) {
                    return false;
                }

                if( !theHeapUsed) {
                    return false;
                }

                if( !( typeof theThrashingHeapAvailable == "number")) {
                    return false;
                }


                if( theComputationReports) {
                    theComputationReports.push( "fHeapAvailableIsOverThrashingThreshold theMinHeapAvailable="       + theMinHeapAvailable);
                    theComputationReports.push( "fHeapAvailableIsOverThrashingThreshold theThrashingHeapAvailable=" + theThrashingHeapAvailable);
                }


                if( theThrashingHeapAvailable <= theMinHeapAvailable) {
                    theComputationReports.push( "fHeapAvailableIsOverThrashingThreshold Error config parameters theThrashingHeapAvailable <= theMinHeapAvailable");
                    return false;
                }


                var aHeapAvailableOrGrowable = theMaxHeapUsed - theHeapUsed;

                if( theComputationReports) {
                    theComputationReports.push( "fHeapAvailableIsOverThrashingThreshold aHeapAvailableOrGrowable=" + aHeapAvailableOrGrowable + "  := theMaxHeapUsed=" + theMaxHeapUsed + "  -  theHeapUsed=" + theHeapUsed);
                }

                if( aHeapAvailableOrGrowable < theThrashingHeapAvailable) {
                    if( theComputationReports) {
                        theComputationReports.push( "fHeapAvailableIsOverThrashingThreshold aHeapAvailableOrGrowable=" + aHeapAvailableOrGrowable + "  < theThrashingHeapAvailable=" + theThrashingHeapAvailable);
                    }
                    return false;
                }


                if( theComputationReports) {
                    theComputationReports.push( "fHeapAvailableIsOverThrashingThreshold NOTHINGTOCLEANUP");
                }

                return true;

            };
            if( fHeapAvailableIsOverThrashingThreshold){}/* CQT */
            aPrototype.fHeapAvailableIsOverThrashingThreshold = fHeapAvailableIsOverThrashingThreshold;








            var fWhatToClean_ToAvoidThrashing = function( theHousekeepingAttempt,
                                                          theHousekeeping,
                                                          theMinHeapAvailable,
                                                          theMaxHeapUsed,
                                                          theThrashingHeapAvailable,
                                                          theHeapUsed,
                                                          theIgnoreThrashingMillis,
                                                          theThrashingMillisByWhatToClean,
                                                          theActionsPerformedInThisHousekeeping,
                                                          theStartPerformTime,
                                                          theComputationReports) {

                var aMethodName = "fWhatToClean_ToAvoidThrashing";


                if( !theHousekeepingAttempt) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                if( !theMinHeapAvailable) {
                    return null;
                }

                if( !theMaxHeapUsed) {
                    return null;
                }

                if( !theHeapUsed) {
                    return null;
                }

                if( !( typeof theThrashingHeapAvailable == "number")) {
                    return null;
                }



                if( theComputationReports) {
                    theComputationReports.push( "ToAvoidThrashing theMinHeapAvailable="       + theMinHeapAvailable);
                    theComputationReports.push( "ToAvoidThrashing theThrashingHeapAvailable=" + theThrashingHeapAvailable);
                }

                if( theThrashingHeapAvailable <= theMinHeapAvailable) {
                    theComputationReports.push( "ToAvoidThrashing Error config parameters theThrashingHeapAvailable <= theMinHeapAvailable");
                    return null;
                }



                var aHeapAvailableOrGrowable = theMaxHeapUsed - theHeapUsed;

                if( theComputationReports) {
                    theComputationReports.push( "ToAvoidThrashing aHeapAvailableOrGrowable=" + aHeapAvailableOrGrowable + "  := theMaxHeapUsed=" + theMaxHeapUsed + "  -  theHeapUsed=" + theHeapUsed);
                }

                if( aHeapAvailableOrGrowable >= theThrashingHeapAvailable) {
                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing NothingToCleanUp aHeapAvailableOrGrowable=" + aHeapAvailableOrGrowable + "  > theThrashingHeapAvailable=" + theThrashingHeapAvailable);
                    }
                    return null;
                }






                var aNumHousekeepingAttempts = 0;
                if( theHousekeeping._v_HousekeepingAttempts) {
                    aNumHousekeepingAttempts = theHousekeeping._v_HousekeepingAttempts.length;
                }
                if( theComputationReports) {
                    theComputationReports.push( "ToAvoidThrashing aNumHousekeepingAttempts=" + aNumHousekeepingAttempts);
                }

                if( aNumHousekeepingAttempts < 2) {
                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing NO THRASHINGDETECTION AT FIRST ATTEMPT theHousekeeping._v_HousekeepingAttempts.length < 2");
                    }
                    return null;
                }









                var aLastPerformedWhatToClean = this.fLastPerformedWhatToClean( theHousekeepingAttempt, theHousekeeping, theActionsPerformedInThisHousekeeping);
                if( !aLastPerformedWhatToClean) {
                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing NothingToCleanUp !fLastPerformedWhatToClean()");
                    }
                    return null;
                }

                if( theComputationReports) {
                    theComputationReports.push( "ToAvoidThrashing fLastPerformedWhatToClean()=" + aLastPerformedWhatToClean);
                }

                var aWhatToCleanNext = this.fWhatToCleanAfter( aLastPerformedWhatToClean);
                if( !aWhatToCleanNext) {
                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing NothingToCleanUp !fWhatToCleanAfter( fLastPerformedWhatToClean())");
                    }
                    return null;
                }

                if( theComputationReports) {
                    theComputationReports.push( "ToAvoidThrashing fWhatToCleanAfter( fLastPerformedWhatToClean())=" + aWhatToCleanNext);
                }


                var someWhatToClean = [ aWhatToCleanNext];



                if( theComputationReports) {
                    theComputationReports.push( "ToAvoidThrashing aWhatToCleanNext=" + aWhatToCleanNext);
                }



                var aMustBypassTimeChecks = false;

                if( typeof theIgnoreThrashingMillis == "boolean") {

                    if( theIgnoreThrashingMillis) {

                        aMustBypassTimeChecks = true;

                        if( theComputationReports) {
                            theComputationReports.push( "ToAvoidThrashing aMustBypassTimeChecks=true because theIgnoreThrashingMillis");
                        }
                    }
                }


                if( !theThrashingMillisByWhatToClean) {

                    aMustBypassTimeChecks = true;

                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing aMustBypassTimeChecks=true    because !theThrashingMillisByWhatToClean");
                    }
                }


                if( !theStartPerformTime) {

                    aMustBypassTimeChecks = true;

                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing aMustBypassTimeChecks=true   because !theStartPerformTime");
                    }
                }





                if( aMustBypassTimeChecks) {

                    theComputationReports.push( "fWhatToClean_ToAvoidThrashing because aMustBypassTimeChecks=true  IS " + aWhatToCleanNext);

                    return someWhatToClean;
                }




                var aThrashingMillis = theThrashingMillisByWhatToClean[ aWhatToCleanNext];
                if( !( typeof aThrashingMillis == "number")) {
                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing !theThrashingMillisByWhatToClean[ '" + aWhatToCleanNext + "']");
                    }
                    return null;
                }

                theComputationReports.push( " aThrashingMillis=" + aThrashingMillis);




                var anActionsFindCriteria = { };
                anActionsFindCriteria.fAsLogObject = fAsLogObject_ActionsFindCriteria.bind( anActionsFindCriteria);
                anActionsFindCriteria[ theM_housekeepconstants.ACTIONCRITERIA_FIELD_ACTIONKIND]                 = theM_housekeepconstants.ACTIONKIND_CLEANUP;
                anActionsFindCriteria[ theM_housekeepconstants.ACTIONCRITERIA_FIELD_MEMORY_CLEANUP_WHATTOCLEAN] = [ aLastPerformedWhatToClean];

                var someRecentHousekeepingActions = this.fFindRecentHousekeepingActionsOfThisKind( theHousekeeping, this.NUMRECENTACTIONSTOFIND, anActionsFindCriteria);

                if( this.LOGRECENTHOUSEKEEPINGACTIONS) {
                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO,  "aLastPerformedWhatToClean=" + aLastPerformedWhatToClean + "  someRecentHousekeepingActions.length=" + (( someRecentHousekeepingActions && someRecentHousekeepingActions.length) || 0), someRecentHousekeepingActions, theComputationReports);
                }




                if( !someRecentHousekeepingActions || !someRecentHousekeepingActions.length) {
                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing NothingToCleanUp because !fFindRecentHousekeepingActionsOfThisKind( " + aLastPerformedWhatToClean + ")");
                    }
                    return null;
                }




                var aRecentHousekeepingAction = someRecentHousekeepingActions[ 0];
                if( !aRecentHousekeepingAction) {
                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing !fFindRecentHousekeepingActionsOfThisKind( " + aLastPerformedWhatToClean + ")[ 0]");
                    }
                    return null;
                }




                var anActionTime = aRecentHousekeepingAction.fActionTime();
                if( !anActionTime) {
                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing !aRecentHousekeepingAction.fActionTime()");
                    }
                    return null;
                }




                var anActionTimeMillis = anActionTime.getTime();
                if( !anActionTimeMillis) {
                    if( theComputationReports) {
                        theComputationReports.push( "ToAvoidThrashing !aRecentHousekeepingAction.fActionTime().getTime()");
                    }
                    return null;
                }




                var aStartPerformTimeMillis = theStartPerformTime.getTime();

                var aLapsedSinceAction = aStartPerformTimeMillis - anActionTimeMillis;

                if( theComputationReports) {
                    theComputationReports.push(  " ToAvoidThrashing aLapsedSinceAction=" + aLapsedSinceAction + "  := aStartPerformTimeMillis=" + aStartPerformTimeMillis + "  - anActionTimeMillis=" + anActionTimeMillis);
                }

                if( ( aLapsedSinceAction < 0)) {
                    if( theComputationReports) {
                        theComputationReports.push( " ToAvoidThrashing NothingToCleanUp because Internal Error aLapsedSinceAction=" + aLapsedSinceAction + "   <= 0");
                    }

                    return null;
                }


                if( aLapsedSinceAction < aThrashingMillis) {

                    if( theComputationReports) {
                        theComputationReports.push(  "aLapsedSinceAction=" + aLapsedSinceAction + " <  aThrashingMillis" + aThrashingMillis);
                        theComputationReports.push( "ToAvoidThrashing RECOMMEND TO CleanUp " + aWhatToCleanNext);
                    }
                    return someWhatToClean;
                }


                theComputationReports.push( "ToAvoidThrashing NothingToCleanUp TO CleanUp");

                return null;

            };
            if( fWhatToClean_ToAvoidThrashing){}/* CQT */
            aPrototype.fWhatToClean_ToAvoidThrashing = fWhatToClean_ToAvoidThrashing;













            var fWhatToClean_OrFirst = function( theHousekeepingAttempt, theHousekeeping, theActionsPerformedInThisHousekeeping) {

                if( !theHousekeepingAttempt) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                if( !theHousekeeping._v_HousekeepingMoment) {
                    return null;
                }

                var someWhatToClean = this.fWhatToClean_NotAlreadyPerformed( theHousekeepingAttempt, theHousekeeping, theActionsPerformedInThisHousekeeping, false /* theObtainAll */);

                if( !someWhatToClean || !someWhatToClean.length) {
                    someWhatToClean = [ theM_housekeepconstants.WHATTOCLEAN_ALL[ 0]];
                }

                return someWhatToClean;

            };
            if( fWhatToClean_OrFirst){}/* CQT */
            aPrototype.fWhatToClean_OrFirst = fWhatToClean_OrFirst;









            var fLastPerformedWhatToClean = function( theHousekeepingAttempt, theHousekeeping, theActionsPerformed) {

                if( !theHousekeepingAttempt) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                if( !theActionsPerformed) {
                    return null;
                }



                var aNumActionsPerformed = theActionsPerformed.length;
                if( !aNumActionsPerformed) {
                    return null;
                }


                var someWhatToClean = [ ];


                var somePerformedWhatToCleanUp = [ ];

                for( var anActionsPerformedIdx=0 ; anActionsPerformedIdx < aNumActionsPerformed; anActionsPerformedIdx++) {

                    var anActionPerformed = theActionsPerformed[ anActionsPerformedIdx];
                    if( anActionPerformed) {

                        if(      anActionPerformed._v_ActionHousekeeperSpecificKind
                            && ( anActionPerformed._v_ActionHousekeeperSpecificKind == theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY)) {

                            if(      anActionPerformed._v_HousekeepingActionKind
                                && ( anActionPerformed._v_HousekeepingActionKind == theM_housekeepconstants.ACTIONKIND_CLEANUP)) {

                                if( anActionPerformed._v_HousekeepingPerformed) {

                                    if( anActionPerformed._v_HousekeepingSuccess) {

                                        if( anActionPerformed._v_HousekeepingActionParameters) {

                                            var aWhatToClean = anActionPerformed._v_HousekeepingActionParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN];
                                            if( aWhatToClean) {

                                                if( typeof aWhatToClean == "string") {
                                                    if( somePerformedWhatToCleanUp.indexOf( aWhatToClean) < 0) {

                                                        somePerformedWhatToCleanUp.push( aWhatToClean);
                                                    }
                                                }
                                                else {
                                                    var aNumWhatToClean = aWhatToClean.length;
                                                    if( aNumWhatToClean) {
                                                        for( var aWhatToCleanIdx=0; aWhatToCleanIdx < aNumWhatToClean; aWhatToCleanIdx++) {

                                                            var aOneWhatToClean = aWhatToClean[ aWhatToCleanIdx];
                                                            if( aOneWhatToClean) {
                                                                if( somePerformedWhatToCleanUp.indexOf( aOneWhatToClean) < 0) {

                                                                    somePerformedWhatToCleanUp.push( aOneWhatToClean);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if( somePerformedWhatToCleanUp.length) {

                    var aNumAllWhatToCleanUp = theM_housekeepconstants.WHATTOCLEAN_ALL.length;

                    for( var aOneWhatToCleanUpIdx= aNumAllWhatToCleanUp - 1; aOneWhatToCleanUpIdx >= 0; aOneWhatToCleanUpIdx--) {

                        var aOneWhatToCleanUp = theM_housekeepconstants.WHATTOCLEAN_ALL[ aOneWhatToCleanUpIdx];
                        if( aOneWhatToCleanUp) {

                            if( somePerformedWhatToCleanUp.indexOf( aOneWhatToCleanUp) >= 0) {

                                return aOneWhatToCleanUp;
                            }
                        }
                    }
                }

                return null;

            };
            if( fLastPerformedWhatToClean){}/* CQT */
            aPrototype.fLastPerformedWhatToClean = fLastPerformedWhatToClean;











            var fWhatToCleanAfter = function( theWhatToClean) {

                if( !theWhatToClean) {
                    return null;
                }


                var aWhatToCleanIndex = theM_housekeepconstants.WHATTOCLEAN_ALL.indexOf( theWhatToClean);
                if( aWhatToCleanIndex < 0) {
                    return null;
                }

                var aNumAllWhatToCleanUp = theM_housekeepconstants.WHATTOCLEAN_ALL.length;

                var aWhatToCleanAfterIndex = aWhatToCleanIndex + 1;

                if( aWhatToCleanAfterIndex >= aNumAllWhatToCleanUp) {
                    return null;
                }


                var aWhatToCleanAfter = theM_housekeepconstants.WHATTOCLEAN_ALL[ aWhatToCleanAfterIndex];
                if( aWhatToCleanAfter){}/* CQT */

                return aWhatToCleanAfter;

            };
            if( fWhatToCleanAfter){}/* CQT */
            aPrototype.fWhatToCleanAfter = fWhatToCleanAfter;







            var fWhatToClean_NotAlreadyPerformed = function( theHousekeepingAttempt, theHousekeeping, theActionsPerformed, theObtainAll) {

                if( !theHousekeepingAttempt) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                if( !theActionsPerformed) {
                    if( theObtainAll) {
                        return theM_housekeepconstants.WHATTOCLEAN_ALL.slice();
                    }

                    return [ theM_housekeepconstants.WHATTOCLEAN_ALL[ 0]];
                }



                var aNumActionsPerformed = theActionsPerformed.length;
                if( !aNumActionsPerformed) {
                    if( theObtainAll) {
                        return theM_housekeepconstants.WHATTOCLEAN_ALL.slice();
                    }

                    return [ theM_housekeepconstants.WHATTOCLEAN_ALL[ 0]];
                }


                var someWhatToClean = [ ];


                var somePerformedWhatToCleanUp = [ ];

                for( var anActionsPerformedIdx=0 ; anActionsPerformedIdx < aNumActionsPerformed; anActionsPerformedIdx++) {

                    var anActionPerformed = theActionsPerformed[ anActionsPerformedIdx];
                    if( anActionPerformed) {

                        if(      anActionPerformed._v_ActionHousekeeperSpecificKind
                            && ( anActionPerformed._v_ActionHousekeeperSpecificKind == theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY)) {

                            if(      anActionPerformed._v_HousekeepingActionKind
                                && ( anActionPerformed._v_HousekeepingActionKind == theM_housekeepconstants.ACTIONKIND_CLEANUP)) {

                                if( anActionPerformed._v_HousekeepingPerformed) {

                                    if( anActionPerformed._v_HousekeepingSuccess) {

                                        if( anActionPerformed._v_HousekeepingActionParameters) {

                                            var aWhatToClean = anActionPerformed._v_HousekeepingActionParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN];
                                            if( aWhatToClean) {

                                                if( typeof aWhatToClean == "string") {
                                                    if( somePerformedWhatToCleanUp.indexOf( aWhatToClean) < 0) {

                                                        somePerformedWhatToCleanUp.push( aWhatToClean);
                                                    }
                                                }
                                                else {
                                                    var aNumWhatToClean = aWhatToClean.length;
                                                    if( aNumWhatToClean) {
                                                        for( var aWhatToCleanIdx=0; aWhatToCleanIdx < aNumWhatToClean; aWhatToCleanIdx++) {

                                                            var aOneWhatToClean = aWhatToClean[ aWhatToCleanIdx];
                                                            if( aOneWhatToClean) {
                                                                if( somePerformedWhatToCleanUp.indexOf( aOneWhatToClean) < 0) {

                                                                    somePerformedWhatToCleanUp.push( aOneWhatToClean);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if( somePerformedWhatToCleanUp.length) {

                    var aNumAllWhatToCleanUp = theM_housekeepconstants.WHATTOCLEAN_ALL.length;

                    for( var aOneWhatToCleanUpIdx=0; aOneWhatToCleanUpIdx < aNumAllWhatToCleanUp; aOneWhatToCleanUpIdx++) {

                        var aOneWhatToCleanUp = theM_housekeepconstants.WHATTOCLEAN_ALL[ aOneWhatToCleanUpIdx];
                        if( aOneWhatToCleanUp) {

                            if( somePerformedWhatToCleanUp.indexOf( aOneWhatToCleanUp) < 0) {

                                someWhatToClean.push( aOneWhatToCleanUp);
                                if( !theObtainAll) {
                                    break;
                                }
                            }
                        }
                    }
                }

                return someWhatToClean;

            };
            if( fWhatToClean_NotAlreadyPerformed){}/* CQT */
            aPrototype.fWhatToClean_NotAlreadyPerformed = fWhatToClean_NotAlreadyPerformed;












            var fPerformRecommendedAction = function( theActionableRecommendation,
                                                      theHousekeepingAttempt,
                                                      theHousekeeping,
                                                      theLauncherMany,
                                                      theIsFirst,
                                                      theLastSubLauncher) {

                if( !theActionableRecommendation) {
                    return false;
                }

                if( !theHousekeepingAttempt) {
                    return false;
                }

                if( !theHousekeeping) {
                    return false;
                }


                if( !theActionableRecommendation.fIsActionable()) {
                    return false;
                }


                if( !theActionableRecommendation._v_RecommendedActionHousekeeperSpecificKind) {
                    return false;
                }

                if( !( theActionableRecommendation._v_RecommendedActionHousekeeperSpecificKind == this._v_HousekeeperKind)) {
                    return false;
                }


                if( !theActionableRecommendation._v_RecommendationKind) {
                    return false;
                }


                if( theActionableRecommendation._v_RecommendationKind == theM_housekeepconstants.RECOMMENDATIONKIND_GIVEUP) {
                    return false;
                }


                if( !(theActionableRecommendation._v_RecommendationKind == theM_housekeepconstants.RECOMMENDATIONKIND_ACTION)) {
                    return false;
                }





                if( !theActionableRecommendation._v_RecommendedActionKind) {
                    return false;
                }


                switch( theActionableRecommendation._v_RecommendedActionKind) {

                    case theM_housekeepconstants.ACTIONKIND_CLEANUP:

                        var aReleaseParms = {};
                        var aReleaseDone = {};

                        return this.fPerformRecommendedAction_CleanUp( theActionableRecommendation,
                                                                       theHousekeepingAttempt,
                                                                       theHousekeeping,
                                                                       theLauncherMany,
                                                                       theIsFirst,
                                                                       theLastSubLauncher,
                                                                       aReleaseParms,
                                                                       aReleaseDone);

                    default:
                }


                return true;
            };
            if( fPerformRecommendedAction){}/* CQT */
            aPrototype.fPerformRecommendedAction = fPerformRecommendedAction;











            var fPerformRecommendedAction_CleanUp = function( theActionableRecommendation,
                                                              theHousekeepingAttempt,
                                                              theHousekeeping,
                                                              theLauncherMany,
                                                              theIsFirst,
                                                              theLastSubLauncher,
                                                              theReleaseParms,
                                                              theReleaseDone) {

                var aMethodName = "fPerformRecommendedAction_CleanUp";


                if( !theActionableRecommendation) {
                    return false;
                }

                if( !theHousekeepingAttempt) {
                    return false;
                }

                if( !theHousekeeping) {
                    return false;
                }


                if( !theLauncherMany) {
                    return false;
                }


                if( !theActionableRecommendation.fIsActionable()) {
                    return false;
                }


                if( !theActionableRecommendation._v_RecommendedActionHousekeeperSpecificKind) {
                    return false;
                }

                if( !( theActionableRecommendation._v_RecommendedActionHousekeeperSpecificKind == this._v_HousekeeperKind)) {
                    return false;
                }



                if( !theActionableRecommendation._v_RecommendationKind) {
                    return false;
                }


                if( theActionableRecommendation._v_RecommendationKind == theM_housekeepconstants.RECOMMENDATIONKIND_GIVEUP) {
                    return false;
                }


                if( !(theActionableRecommendation._v_RecommendationKind == theM_housekeepconstants.RECOMMENDATIONKIND_ACTION)) {
                    return false;
                }





                if( !theActionableRecommendation._v_RecommendedActionKind) {
                    return false;
                }


                if( !(theActionableRecommendation._v_RecommendedActionKind == theM_housekeepconstants.ACTIONKIND_CLEANUP)) {
                    return false;
                }



                if( !theActionableRecommendation._v_RecommendedActionParameters) {
                    return false;
                }

                if( !theActionableRecommendation._v_RecommendedActionParameters.fAsLogObject) {
                    theActionableRecommendation._v_RecommendedActionParameters.fAsLogObject = fAsLogObject_HousekeepingRecommendationParameters.bind( theActionableRecommendation._v_RecommendedActionParameters);
                }



                var someWhatToClean = theActionableRecommendation._v_RecommendedActionParameters[ theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN];
                if( !someWhatToClean) {
                    return false;
                }

                someWhatToClean = someWhatToClean.slice();

                var aNumWhatToClear = someWhatToClean.length;
                if( !aNumWhatToClear) {
                    return false;
                }


                var aFirstLauncherMany = theLauncherMany.fFirstLauncherMany();
                if( !aFirstLauncherMany) {
                    return false;
                }


                var aHousekeepingSpecific = theActionableRecommendation.fHousekeepingSpecific();
                if( !aHousekeepingSpecific) {
                    return false;
                }


                var aHousekeepingActionIndexForTitle = 0;
                if( this._v_HousekeepingActions) {
                    aHousekeepingActionIndexForTitle = this._v_HousekeepingActions.length;
                }

                var aHousekeepingAction = new theM_housekeepingaction.HousekeepingAction_Constructor(
                    "HousekeepingAction-Memory[" + aHousekeepingActionIndexForTitle + "]For-" + ((( theActionableRecommendation && theActionableRecommendation._v_HousekeepingTitle) || "") || this._v_HousekeeperTitle),
                    this._v_HousekeeperIdentifier,
                    this._v_HousekeeperRecorder,
                    this._v_HousekeepOptions,
                    this._v_HousekeeperMaster,
                    this,
                    theHousekeeping,
                    theHousekeepingAttempt,
                    aHousekeepingSpecific,
                    theActionableRecommendation,
                    theActionableRecommendation._v_RecommendedActionKind,
                    theActionableRecommendation._v_RecommendedActionPriority,
                    theActionableRecommendation._v_RecommendedActionHousekeeperSpecificKind,
                    theActionableRecommendation._v_RecommendedActionParameters,
                    theHousekeeping._v_HousekeepingMoment
                );



                aHousekeepingSpecific.pAddHousekeepingAction( aHousekeepingAction);


                aHousekeepingAction.pSetActionTimeNow();




                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_ACTIONSTARTED, aHousekeepingAction, theHousekeeping._v_HousekeepingMoment, theActionableRecommendation._v_RecommendedActionParameters);


                if( theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( someWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_TESTSORCONFIGS)) {

                    var someSubLaunchers = aFirstLauncherMany.fSubLaunchers();
                    if( someSubLaunchers) {

                        var aNumSubLaunchers = someSubLaunchers.length;
                        if( aNumSubLaunchers) {

                            this.pCleanUpSubLaunchers_recursive( someSubLaunchers,
                                someWhatToClean,
                                theActionableRecommendation,
                                theHousekeepingAttempt,
                                theHousekeeping,
                                theLauncherMany,
                                theIsFirst,
                                theLastSubLauncher,
                                theReleaseParms,
                                theReleaseDone)
                        }
                    }
                }




                aFirstLauncherMany.pCleanUpSomeWhatFromLauncher( someWhatToClean,
                                                                 theActionableRecommendation,
                                                                 theHousekeepingAttempt,
                                                                 theHousekeeping,
                                                                 theLauncherMany,
                                                                 theIsFirst,
                                                                 theLastSubLauncher,
                                                                 theReleaseParms,
                                                                 theReleaseDone);

                aHousekeepingAction._v_HousekeepingSuccess    = true;
                aHousekeepingAction._v_HousekeepingPerformed  = true;
                aHousekeepingAction._v_HousekeepingStatus     = null;
                aHousekeepingAction._v_HousekeepingDetails    = null;


                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_ACTIONPERFORMED, aHousekeepingAction, theActionableRecommendation._v_HousekeepingMoment, theActionableRecommendation._v_RecommendedActionParameters);

                return true;

            };
            if( fPerformRecommendedAction_CleanUp){}/* CQT */
            aPrototype.fPerformRecommendedAction_CleanUp = fPerformRecommendedAction_CleanUp;












            var pCleanUpSubLaunchers_recursive = function( theSubLaunchers,
                                                           theWhatToClean,
                                                           theActionableRecommendation,
                                                           theHousekeepingAttempt,
                                                           theHousekeeping,
                                                           theLauncherMany,
                                                           theIsFirst,
                                                           theLastSubLauncher,
                                                           theReleaseParms,
                                                           theReleaseDone) {


                if( !theM_housekeeputils.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, theM_housekeepconstants.WHATTOCLEAN_IN_TESTSORCONFIGS)) {
                    return;
                }

                if( !theSubLaunchers) {
                    return;
                }

                var aNumSubLaunchers = theSubLaunchers.length;
                if( !aNumSubLaunchers) {
                    return;
                }

                for( var aSubLauncherIdx=0; aSubLauncherIdx < aNumSubLaunchers; aSubLauncherIdx++) {
                    var aSubLauncher = theSubLaunchers[ aSubLauncherIdx];
                    if( aSubLauncher) {

                        if( aSubLauncher.fIsLauncherMany && aSubLauncher.fIsLauncherMany()) {

                            var someSubSubLaunchers = aSubLauncher.fSubLaunchers();
                            if( someSubSubLaunchers) {

                                var aNumSubSubLaunchers = someSubSubLaunchers.length;
                                if( aNumSubSubLaunchers) {

                                    this.pCleanUpSubLaunchers_recursive( someSubSubLaunchers,
                                                                         theWhatToClean,
                                                                         theActionableRecommendation,
                                                                         theHousekeepingAttempt,
                                                                         theHousekeeping,
                                                                         theLauncherMany,
                                                                         theIsFirst,
                                                                         theLastSubLauncher,
                                                                         theReleaseParms,
                                                                         theReleaseDone);
                                }
                            }
                        }

                        aSubLauncher.pCleanUpSomeWhatFromLauncher( theWhatToClean,
                                                                   theActionableRecommendation,
                                                                   theHousekeepingAttempt,
                                                                   theHousekeeping,
                                                                   theLauncherMany,
                                                                   theIsFirst,
                                                                   theLastSubLauncher,
                                                                   theReleaseParms,
                                                                   theReleaseDone);

                    }
                }

            };
            if( pCleanUpSubLaunchers_recursive){}/* CQT */
            aPrototype.pCleanUpSubLaunchers_recursive = pCleanUpSubLaunchers_recursive;




















            var fTestOfMomentAndSpecPath = function( theMoment, theSpecPath) {

                if( !theMoment) {
                    return null;
                }

                if( !theSpecPath){
                    return null;
                }

                if( !this._v_TestsByMomentAndSpecPath) {
                    this._pInit_TestsByMomentAndSpecPath();
                }

                if( !this._v_TestsByMomentAndSpecPath) {
                    return null;
                }


                var aTestAndPathsOfMoment = this._v_TestsByMomentAndSpecPath[ theMoment];
                if( !aTestAndPathsOfMoment) {
                    return null;
                }


                var somePaths = aTestAndPathsOfMoment[ "paths"];
                if( !somePaths) {
                    return null;
                }


                var aTestOdMomentAndSpecPath = somePaths[ theSpecPath];
                if( aTestOdMomentAndSpecPath){}/* CQT */

                return aTestOdMomentAndSpecPath;

            };
            if( fTestOfMomentAndSpecPath){}/* CQT */
            aPrototype.fTestOfMomentAndSpecPath = fTestOfMomentAndSpecPath;










            var _pInit_TestsByMomentAndSpecPath = function() {

                this._v_TestsByMomentAndSpecPath = { };


                if( !this._v_HousekeeperMaster) {
                    return;
                }


                var aTestHousekeeping_Memory = this._v_HousekeeperMaster.fTestHousekeeping_OfKind( theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY);
                if( !aTestHousekeeping_Memory) {
                    return;
                }


                var aNumTestHousekeepings = aTestHousekeeping_Memory.length;
                if( !aNumTestHousekeepings) {
                    return;
                }


                for( var aTestHousekeepingIdx=0; aTestHousekeepingIdx < aNumTestHousekeepings; aTestHousekeepingIdx++) {

                    var aTestHousekeeping = aTestHousekeeping_Memory[ aTestHousekeepingIdx];
                    if( aTestHousekeeping) {

                        var aMoment = aTestHousekeeping[ "moment"];
                        if( aMoment) {

                            var aTestAndPathsOfMoment = this._v_TestsByMomentAndSpecPath[ aMoment];
                            if( !aTestAndPathsOfMoment) {

                                aTestAndPathsOfMoment = { "test": null, "paths": { }};
                                this._v_TestsByMomentAndSpecPath[ aMoment] = aTestAndPathsOfMoment;
                            }

                            var aTestName = aTestHousekeeping[ "testName"];
                            if( !aTestName) {
                                aTestAndPathsOfMoment[ "test"] = aTestHousekeeping;
                            }
                            else {
                                var somePaths = aTestAndPathsOfMoment[ "paths"];
                                if( somePaths) {
                                    somePaths[ aTestName] = aTestHousekeeping;
                                }
                            }
                        }
                    }
                }
            };
            if( _pInit_TestsByMomentAndSpecPath){}/* CQT */
            aPrototype._pInit_TestsByMomentAndSpecPath = _pInit_TestsByMomentAndSpecPath;

















            var fCheckPerformedHousekeepingSpecific = function( theHousekeepingCheck, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher) {
                if( theLauncherMany){}/* CQT */
                if( theIsFirst){}/* CQT */

                if( !theHousekeepingCheck) {
                    return null;
                }

                if( !theHousekeepingCheck._v_HousekeepingKind) {
                    return null;
                }

                if( !theHousekeepingCheck._v_HousekeepingMoment) {
                    return null;
                }


                if( !theHousekeeping) {
                    return null;
                }

                if( !theHousekeeping._v_HousekeepingKind) {
                    return null;
                }

                if( !theHousekeeping._v_HousekeepingMoment) {
                    return null;
                }


                if( !theLastSubLauncher) {
                    return null;
                }



                var aSpecPath = theLastSubLauncher.fSpecPath();
                if( !aSpecPath) {
                    return null;
                }


                var aTestOfPath = this.fTestOfMomentAndSpecPath( theHousekeeping._v_HousekeepingMoment, aSpecPath);
                if( !aTestOfPath) {
                    return null;
                }

                var aMomentTestOfPath = aTestOfPath[ "moment"];
                if( !aMomentTestOfPath) {
                    return null;
                }
                if( !( aMomentTestOfPath == theHousekeeping._v_HousekeepingMoment)) {
                    return null;
                }


                


                var someAttemptsOfPath =  aTestOfPath[ "attempts"];

                if( typeof someAttemptsOfPath == "undefined") {
                    return null;
                }

                if( someAttemptsOfPath == null) {
                    return null;
                }





                var aMustHaveExcessHousekeepingAttempt = aTestOfPath[ "mustHaveExcessHousekeepingAttempt"];
                if( !aMustHaveExcessHousekeepingAttempt) {
                    aMustHaveExcessHousekeepingAttempt = false;
                }



                /* ACV OJO 201504130129 TODO Check recommendations and actions not within an attempt ? - which are used for the moments  "BEFORELOADSPECS" and AFTERLOADSPECS"

                var someExpectedRecommendationsNoAttemps = aTestOfPath[ "expectedRecommendations"];
                if( someExpectedRecommendationsNoAttemps) {

                    var aNumExpectedRecommendationsNoAttemps = someExpectedRecommendationsNoAttemps.length;
                    if( aNumExpectedRecommendationsNoAttemps) {

                        aHasAnyExpectedRecommendation = true;
                    }
                }


                var someExpectedActionsNoAttemps = aTestOfPath[ "expectedActions"];
                if( someExpectedActionsNoAttemps) {

                    var aNumExpectedActionsNoAttemps = someExpectedActionsNoAttemps.length;
                    if( aNumExpectedActionsNoAttemps) {

                        aHasAnyExpectedAction = true;
                    }
                }
                */



                var aTestHousekeepingCheck = this.fCheckTestHousekeepingAttemptsOfPath( someAttemptsOfPath,
                                                                                        theHousekeepingCheck,
                                                                                        theHousekeeping,
                                                                                        theLauncherMany,
                                                                                        theIsFirst,
                                                                                        theLastSubLauncher,
                                                                                        aMustHaveExcessHousekeepingAttempt);
                if( aTestHousekeepingCheck){}/* CQT */


                return aTestHousekeepingCheck;

            };
            if( fCheckPerformedHousekeepingSpecific){}/* CQT */
            aPrototype.fCheckPerformedHousekeepingSpecific = fCheckPerformedHousekeepingSpecific;













            var fCheckTestHousekeepingAttemptsOfPath = function( theAttemptsOfPath,
                                                                 theHousekeepingCheck,
                                                                 theHousekeeping,
                                                                 theLauncherMany,
                                                                 theIsFirst,
                                                                 theLastSubLauncher,
                                                                 theMustHaveExcessHousekeepingAttempt) {
                if( theLauncherMany){}/* CQT */
                if( theIsFirst){}/* CQT */
                if( theLastSubLauncher){}/* CQT */

                var aMethodName = "fCheckTestHousekeepingAttemptsOfPath";

                if( !theAttemptsOfPath) {
                    return null;
                }

                if( !theHousekeeping) {
                    return null;
                }

                if( !theHousekeeping._v_HousekeepingKind) {
                    return null;
                }

                if( !theHousekeeping._v_HousekeepingMoment) {
                    return null;
                }

                if( !theHousekeeping._v_HousekeepingAttempts) {
                    return null;
                }




                var aNumAttemptsOfPath       = theAttemptsOfPath.length;

                var aNumHousekeepingAttempts = theHousekeeping._v_HousekeepingAttempts.length;

                if( !aNumAttemptsOfPath && !aNumHousekeepingAttempts) {
                    return null;
                }




                var aNumAttemptsToCheck = Math.max( aNumAttemptsOfPath, aNumHousekeepingAttempts);

                for( var anAttemptIdx=0; anAttemptIdx < aNumAttemptsToCheck; anAttemptIdx++) {


                    var anAttemptToCheck      = null;
                    if( anAttemptIdx < aNumAttemptsOfPath) {
                        anAttemptToCheck = theAttemptsOfPath[ anAttemptIdx];
                    }


                    var aHousekeepingAttempt = null;
                    if( anAttemptIdx < aNumHousekeepingAttempts) {
                        aHousekeepingAttempt = theHousekeeping._v_HousekeepingAttempts[ anAttemptIdx];
                    }


                    if( !anAttemptToCheck && !aHousekeepingAttempt) {
                        continue;
                    }





                    if( !anAttemptToCheck) {

                        if( theMustHaveExcessHousekeepingAttempt) {
                            continue;
                        }
                        
                        var aHousekeepingCheckSpecific_Error00 = new theM_housekeepingcheckspecific.HousekeepingCheckSpecific_Constructor(
                            "HousekeepingCheckMemory-Attempts[ " + anAttemptIdx + "]For-" + ( theHousekeeping._v_HousekeepingTitle || ( ( theLauncherMany && theLauncherMany._v_LauncherTitle) || "") || this._v_HousekeeperTitle),
                            this._v_HousekeeperIdentifier,
                            this._v_HousekeeperRecorder,
                            this._v_HousekeepOptions,
                            this._v_HousekeeperMaster,
                            this,
                            theHousekeeping,
                            null, /* theHousekeepingSpecific */
                            theM_housekeepconstants.HOUSEKEEPINGKIND_MEMORY,
                            this._v_HousekeepingCheckMaster,
                            theHousekeeping._v_HousekeepingMoment);

                        aHousekeepingCheckSpecific_Error00._v_HousekeepingSuccess   = false;
                        aHousekeepingCheckSpecific_Error00._v_HousekeepingPerformed = true;
                        aHousekeepingCheckSpecific_Error00._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTATTEMPT;
                        aHousekeepingCheckSpecific_Error00._v_HousekeepingDetails   = null;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeeping, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTATTEMPT, anAttemptIdx);

                        return aHousekeepingCheckSpecific_Error00;
                    }





                    if( theMustHaveExcessHousekeepingAttempt) {

                        var aHousekeepingCheckSpecific_Error0 = new theM_housekeepingcheckspecific.HousekeepingCheckSpecific_Constructor(
                            "HousekeepingCheckMemory-Attempts[ " + anAttemptIdx + "]For-" + ( theHousekeeping._v_HousekeepingTitle || ( ( theLauncherMany && theLauncherMany._v_LauncherTitle) || "") || this._v_HousekeeperTitle),
                            this._v_HousekeeperIdentifier,
                            this._v_HousekeeperRecorder,
                            this._v_HousekeepOptions,
                            this._v_HousekeeperMaster,
                            this,
                            theHousekeeping,
                            null, /* theHousekeepingSpecific */
                            theM_housekeepconstants.HOUSEKEEPINGKIND_MEMORY,
                            this._v_HousekeepingCheckMaster,
                            theHousekeeping._v_HousekeepingMoment);

                        aHousekeepingCheckSpecific_Error0._v_HousekeepingSuccess   = false;
                        aHousekeepingCheckSpecific_Error0._v_HousekeepingPerformed = true;
                        aHousekeepingCheckSpecific_Error0._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_SHOULDHAVEEXCESSHOUSEKEEPINGTATTEMPT;
                        aHousekeepingCheckSpecific_Error0._v_HousekeepingDetails   = null;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeeping, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_SHOULDHAVEEXCESSHOUSEKEEPINGTATTEMPT, anAttemptIdx);

                        return aHousekeepingCheckSpecific_Error0;
                    }






                    var anExpectAttemptFailure = anAttemptToCheck[ "expectFailure"];
                    if( !anExpectAttemptFailure) {
                        anExpectAttemptFailure = false;
                    }



                    



                    if( !aHousekeepingAttempt) {

                        if( anExpectAttemptFailure) {
                            continue;
                        }

                        var aHousekeepingCheckSpecific_Error1 = new theM_housekeepingcheckspecific.HousekeepingCheckSpecific_Constructor(
                            "HousekeepingCheckMemory-Attempts[ " + anAttemptIdx + "]For-" + ( theHousekeeping._v_HousekeepingTitle || ( ( theLauncherMany && theLauncherMany._v_LauncherTitle) || "") || this._v_HousekeeperTitle),
                            this._v_HousekeeperIdentifier,
                            this._v_HousekeeperRecorder,
                            this._v_HousekeepOptions,
                            this._v_HousekeeperMaster,
                            this,
                            theHousekeeping,
                            null, /* theHousekeepingSpecific */
                            theM_housekeepconstants.HOUSEKEEPINGKIND_MEMORY,
                            this._v_HousekeepingCheckMaster,
                            theHousekeeping._v_HousekeepingMoment);

                        aHousekeepingCheckSpecific_Error1._v_HousekeepingSuccess   = false;
                        aHousekeepingCheckSpecific_Error1._v_HousekeepingPerformed = true;
                        aHousekeepingCheckSpecific_Error1._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGATTEMPT;
                        aHousekeepingCheckSpecific_Error1._v_HousekeepingDetails   = null;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeeping, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGATTEMPT, anAttemptIdx);

                        return aHousekeepingCheckSpecific_Error1;
                    }




                    var anExpectedAttemptShallHaveNoHousekeeping = anAttemptToCheck[ "shallHaveNoHousekeeping"];
                    if( !anExpectedAttemptShallHaveNoHousekeeping) {
                        anExpectedAttemptShallHaveNoHousekeeping = false;
                    }




                    var aHousekeepingSpecific = aHousekeepingAttempt.fHousekeepingSpecificByKind( theM_housekeepconstants.HOUSEKEEPINGKIND_MEMORY);
                    if( !aHousekeepingSpecific) {
                        
                        if( anExpectedAttemptShallHaveNoHousekeeping) {
                            continue;
                        }

                        var aHousekeepingCheckSpecific_Error2 = new theM_housekeepingcheckspecific.HousekeepingCheckSpecific_Constructor(
                            "HousekeepingCheckMemory-Attempts[ " + anAttemptIdx + "]For-" + ( aHousekeepingAttempt._v_HousekeepingTitle || ( ( theLauncherMany && theLauncherMany._v_LauncherTitle) || "") || this._v_HousekeeperTitle),
                            this._v_HousekeeperIdentifier,
                            this._v_HousekeeperRecorder,
                            this._v_HousekeepOptions,
                            this._v_HousekeeperMaster,
                            this,
                            theHousekeeping,
                            null, /* theHousekeepingSpecific */
                            theM_housekeepconstants.HOUSEKEEPINGKIND_MEMORY,
                            this._v_HousekeepingCheckMaster,
                            theHousekeeping._v_HousekeepingMoment);

                        if( anExpectAttemptFailure) {
                            continue;
                        }

                        aHousekeepingCheckSpecific_Error2._v_HousekeepingSuccess   = false;
                        aHousekeepingCheckSpecific_Error2._v_HousekeepingPerformed = true;
                        aHousekeepingCheckSpecific_Error2._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGSPECIFIC;
                        aHousekeepingCheckSpecific_Error2._v_HousekeepingDetails   = theM_housekeepconstants.HOUSEKEEPINGKIND_MEMORY;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeeping, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGSPECIFIC, anAttemptIdx);

                        return aHousekeepingCheckSpecific_Error2;
                    }



                    if( anExpectedAttemptShallHaveNoHousekeeping) {

                        var aHousekeepingCheckSpecific_Error3 = new theM_housekeepingcheckspecific.HousekeepingCheckSpecific_Constructor(
                            "HousekeepingCheckMemory-Attempts[ " + anAttemptIdx + "]For-" + ( aHousekeepingAttempt._v_HousekeepingTitle || ( ( theLauncherMany && theLauncherMany._v_LauncherTitle) || "") || this._v_HousekeeperTitle),
                            this._v_HousekeeperIdentifier,
                            this._v_HousekeeperRecorder,
                            this._v_HousekeepOptions,
                            this._v_HousekeeperMaster,
                            this,
                            theHousekeeping,
                            null, /* theHousekeepingSpecific */
                            theM_housekeepconstants.HOUSEKEEPINGKIND_MEMORY,
                            this._v_HousekeepingCheckMaster,
                            theHousekeeping._v_HousekeepingMoment);

                        if( anExpectAttemptFailure) {
                            continue;
                        }

                        aHousekeepingCheckSpecific_Error3._v_HousekeepingSuccess   = false;
                        aHousekeepingCheckSpecific_Error3._v_HousekeepingPerformed = true;
                        aHousekeepingCheckSpecific_Error3._v_HousekeepingStatus    = theM_housekeepconstants.TESTSHOULDNOTHAVEHOUSEKEEPINGSPECIFIC;
                        aHousekeepingCheckSpecific_Error3._v_HousekeepingDetails   = theM_housekeepconstants.HOUSEKEEPINGKIND_MEMORY;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeeping, theM_housekeepconstants.TESTSHOULDNOTHAVEHOUSEKEEPINGSPECIFIC, anAttemptIdx);

                        return aHousekeepingCheckSpecific_Error3;
                    }




                    var someToCheckExpectedRecommendations      = anAttemptToCheck[ "expectedRecommendations"];
                    var someToCheckExpectedActions              = anAttemptToCheck[ "expectedActions"];

                    var someHousekeepingRecommendations         = aHousekeepingSpecific.fHousekeepingRecommendations();
                    var someHousekeepingActions                 = aHousekeepingSpecific.fHousekeepingActions();


                    if(    ( ( typeof someToCheckExpectedRecommendations == "undefined") || ( someToCheckExpectedRecommendations == null))
                        && ( ( typeof someToCheckExpectedActions == "undefined")         || ( someToCheckExpectedActions == null))
                        && ( ( typeof someHousekeepingRecommendations == "undefined")    || ( someHousekeepingRecommendations == null))
                        && ( ( typeof someHousekeepingActions == "undefined")            || ( someHousekeepingActions == null)) ) {

                        continue;
                    }




               



                    var aHousekeepingCheckSpecific = new theM_housekeepingcheckspecific.HousekeepingCheckSpecific_Constructor(
                        "HousekeepingCheckMemory-Attempts[ " + anAttemptIdx + "]For-" + ( aHousekeepingSpecific._v_HousekeepingTitle || ( ( theLauncherMany && theLauncherMany._v_LauncherTitle) || "") || this._v_HousekeeperTitle),
                        this._v_HousekeeperIdentifier,
                        this._v_HousekeeperRecorder,
                        this._v_HousekeepOptions,
                        this._v_HousekeeperMaster,
                        this,
                        theHousekeeping,
                        aHousekeepingSpecific,
                        theM_housekeepconstants.HOUSEKEEPINGKIND_MEMORY,
                        this._v_HousekeepingCheckMaster,
                        theHousekeeping._v_HousekeepingMoment);




                    if( !(    ( ( typeof someToCheckExpectedRecommendations == "undefined")      || ( someToCheckExpectedRecommendations == null))
                           && ( ( typeof someHousekeepingRecommendations == "undefined") || ( someHousekeepingRecommendations == null)))) {


                        this.pCheckTestHousekeepingRecommendationsInto( aHousekeepingCheckSpecific, someToCheckExpectedRecommendations, someHousekeepingRecommendations, anExpectAttemptFailure);

                        if( aHousekeepingCheckSpecific._v_HousekeepingPerformed  && !aHousekeepingCheckSpecific._v_HousekeepingSuccess) {

                            return aHousekeepingCheckSpecific;
                        }
                    }





                    if( !(    ( ( typeof someToCheckExpectedActions == "undefined")      || ( someToCheckExpectedActions == null))
                        && ( ( typeof someHousekeepingActions == "undefined") || ( someHousekeepingActions == null)))) {


                        this.pCheckTestHousekeepingActionsInto( aHousekeepingCheckSpecific, someToCheckExpectedActions, someHousekeepingActions, anExpectAttemptFailure);

                        if( aHousekeepingCheckSpecific._v_HousekeepingPerformed  && !aHousekeepingCheckSpecific._v_HousekeepingSuccess) {

                            return aHousekeepingCheckSpecific;
                        }
                    }



                    aHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                    aHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                    aHousekeepingCheckSpecific._v_HousekeepingStatus    = null;
                    aHousekeepingCheckSpecific._v_HousekeepingDetails   = null;

                }


                return aHousekeepingCheckSpecific;
            };
            if( fCheckTestHousekeepingAttemptsOfPath){}/* CQT */
            aPrototype.fCheckTestHousekeepingAttemptsOfPath = fCheckTestHousekeepingAttemptsOfPath;













            var pCheckTestHousekeepingRecommendationsInto = function( theHousekeepingCheckSpecific, theToCheckRecommendations, theHousekeepingRecommendations, theExpectAttemptFailure) {

                var aMethodName = "pCheckTestHousekeepingRecommendationsInto";

                if( !theHousekeepingCheckSpecific) {
                    return;
                }


                if( (    ( ( typeof theToCheckRecommendations == "undefined")      || ( theToCheckRecommendations == null))
                      && ( ( typeof theHousekeepingRecommendations == "undefined")  || ( theHousekeepingRecommendations == null)))) {
                    
                    return;
                }

                
                
                
                var aNumToCheckRecommendations = 0;
                if( theToCheckRecommendations) {
                    aNumToCheckRecommendations = theToCheckRecommendations.length;
                }
                
                
                var aNumHousekeepingRecommendations = 0;
                if( theHousekeepingRecommendations) {
                    aNumHousekeepingRecommendations = theHousekeepingRecommendations.length;
                }

                
                if( !aNumToCheckRecommendations && !aNumHousekeepingRecommendations) {
                    return;
                }
                
                

                var aNumRecommendationsToCheck = Math.max( aNumToCheckRecommendations, aNumHousekeepingRecommendations);

                for( var aRecommendationToCheckIdx=0; aRecommendationToCheckIdx < aNumRecommendationsToCheck; aRecommendationToCheckIdx++) {



                    var aRecommendationToCheck      = null;
                    if( aRecommendationToCheckIdx < aNumToCheckRecommendations) {
                        aRecommendationToCheck = theToCheckRecommendations[ aRecommendationToCheckIdx];
                    }


                    var aHousekeepingRecommendation = null;
                    if( aRecommendationToCheckIdx < aNumHousekeepingRecommendations) {
                        aHousekeepingRecommendation = theHousekeepingRecommendations[ aRecommendationToCheckIdx];
                    }


                    if( !aRecommendationToCheck && !aHousekeepingRecommendation) {
                        continue;
                    }


                    

                    if( !aRecommendationToCheck) {
                        if( theExpectAttemptFailure) {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                        }
                        else {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                        }
                        theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                        theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTHOUSEKEEPINGRECOMMENDATION;
                        theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "]" ;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTHOUSEKEEPINGRECOMMENDATION, aRecommendationToCheckIdx);

                        return;
                    }


                    if( !aRecommendationToCheck.fAsLogObject) {
                        aRecommendationToCheck.fAsLogObject = fAsLogObject_TestHousekeepingRecommendation.bind( aRecommendationToCheck);
                    }
                    

                    if( !aHousekeepingRecommendation) {

                        if( theExpectAttemptFailure) {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                        }
                        else {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                        }
                        theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                        theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGRECOMMENDATION;
                        theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "]" ;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGRECOMMENDATION, aRecommendationToCheck);

                        return;
                    }


                    
                    
                    var aExpectFailure = aRecommendationToCheck[ "expectFailure"];
                    if( !aExpectFailure) {
                        aExpectFailure = false;
                    }

                    
                    
                    if( aRecommendationToCheck[ "recommendationKind"]) {

                        if( !aHousekeepingRecommendation._v_RecommendationKind ||
                            !( aHousekeepingRecommendation._v_RecommendationKind == aRecommendationToCheck[ "recommendationKind"])) {

                            if( aExpectFailure) {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                            }
                            else {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            }
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendationKind" ;

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendationKind");

                            return;
                        }
                    }



                    if( aRecommendationToCheck[ "recommendedActionKind"]) {

                        if( !aHousekeepingRecommendation._v_RecommendedActionKind ||
                            !( aHousekeepingRecommendation._v_RecommendedActionKind == aRecommendationToCheck[ "recommendedActionKind"])) {

                            if( aExpectFailure) {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                            }
                            else {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            }
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedActionKind" ;

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedActionKind");

                            return;
                        }
                    }



                    if( !( typeof aRecommendationToCheck[ "recommendedActionPriority"] == "undefined") && !( aRecommendationToCheck[ "recommendedActionPriority"] == null)) {

                        if( !aHousekeepingRecommendation._v_RecommendedActionPriority ||
                            !( aHousekeepingRecommendation._v_RecommendedActionPriority == aRecommendationToCheck[ "recommendedActionPriority"])) {

                            if( aExpectFailure) {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                            }
                            else {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            }
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedActionPriority" ;

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedActionPriority");

                            return;
                        }
                    }



                    if( aRecommendationToCheck[ "recommendedHousekeeperSpecificKind"]) {

                        if( !aHousekeepingRecommendation._v_RecommendedActionHousekeeperSpecificKind ||
                            !( aHousekeepingRecommendation._v_RecommendedActionHousekeeperSpecificKind == aRecommendationToCheck[ "recommendedHousekeeperSpecificKind"])) {

                            if( aExpectFailure) {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                            }
                            else {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            }
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedHousekeeperSpecificKind" ;

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedHousekeeperSpecificKind");

                            return;
                        }
                    }



                    var someRecommendationToCheckParameters         = aRecommendationToCheck[ "recommendedParameters"];

                    var someHousekeepingRecommendedActionParameters = aHousekeepingRecommendation._v_RecommendedActionParameters;

                    if( someRecommendationToCheckParameters || someHousekeepingRecommendedActionParameters) {

                        if( !someRecommendationToCheckParameters || !someHousekeepingRecommendedActionParameters) {

                            if( aExpectFailure) {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                            }
                            else {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            }
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedParameters" ;

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedParameters");

                            return;
                        }


                        var someParameterNamestoCheck = [ ];
                        Object.keys( someRecommendationToCheckParameters).forEach( function( athKey) {
                            if( theM_housekeepconstants.ACTIONPARAMETERS_CLEANUP_TOCHECK.indexOf( athKey) >= 0) {
                                if( someParameterNamestoCheck.indexOf( athKey) < 0) {
                                    someParameterNamestoCheck.push( athKey);
                                }
                            }
                        });

                        Object.keys( someHousekeepingRecommendedActionParameters).forEach( function( athKey) {
                            if( theM_housekeepconstants.ACTIONPARAMETERS_CLEANUP_TOCHECK.indexOf( athKey) >= 0) {
                                if( someParameterNamestoCheck.indexOf( athKey) < 0) {
                                    someParameterNamestoCheck.push( athKey);
                                }
                            }
                        });

                        var aNumParameterNamestoCheck = someParameterNamestoCheck.length;
                        if( aNumParameterNamestoCheck) {

                            someParameterNamestoCheck.sort();

                            for( var aParameterIdx=0; aParameterIdx < aNumParameterNamestoCheck; aParameterIdx++) {

                                var aRecommendationToCheckParameterName = someParameterNamestoCheck[ aParameterIdx];
                                if( aRecommendationToCheckParameterName) {

                                    var aRecommendationToCheckParameterValue         = someRecommendationToCheckParameters[         aRecommendationToCheckParameterName];
                                    if( typeof aRecommendationToCheckParameterValue == "function") {
                                        continue;
                                    }
                                    var aHousekeepingRecommendedActionParameterValue = someHousekeepingRecommendedActionParameters[ aRecommendationToCheckParameterName];
                                    if( typeof aHousekeepingRecommendedActionParameterValue == "function") {
                                        continue;
                                    }

                                    if( ( typeof aRecommendationToCheckParameterValue == "undefined") && ( typeof aHousekeepingRecommendedActionParameterValue == "undefined")) {
                                        continue;
                                    }

                                    if( ( typeof aRecommendationToCheckParameterValue == "undefined") || ( typeof aHousekeepingRecommendedActionParameterValue == "undefined")) {

                                        if( aExpectFailure) {
                                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                        }
                                        else {
                                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                        }
                                        theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                        theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONPARAMETERDIFFERS;
                                        theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedParameter " + aRecommendationToCheckParameterName;

                                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedParameter " + aRecommendationToCheckParameterName);

                                        return;
                                    }





                                    switch( aRecommendationToCheckParameterName) {

                                        case theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN:

                                            var aNumRecommendationToCheckWhatToClean         = aRecommendationToCheckParameterValue.length;
                                            var aNumHousekeepingRecommendedActionWhatToClean = aHousekeepingRecommendedActionParameterValue.length;

                                            if( !( aNumRecommendationToCheckWhatToClean == aNumHousekeepingRecommendedActionWhatToClean)) {

                                                if( aExpectFailure) {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                }
                                                else {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                }
                                                theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONPARAMETERDIFFERS;
                                                theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedParameter " + aRecommendationToCheckParameterName;

                                                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedParameter " + aRecommendationToCheckParameterName);

                                                return;
                                            }

                                            var someRecommendationsToCheckWhatToClean        = aRecommendationToCheckParameterValue.slice();
                                            someRecommendationsToCheckWhatToClean.sort();

                                            var someHousekeepingRecommendedActionWhatToClean = aHousekeepingRecommendedActionParameterValue.slice();
                                            someHousekeepingRecommendedActionWhatToClean.sort();

                                            for( var aWhatToCleanIdx=0; aWhatToCleanIdx < aNumRecommendationToCheckWhatToClean; aWhatToCleanIdx++) {

                                                var aRecommendationToCheckWhatToClean         = someRecommendationsToCheckWhatToClean[        aWhatToCleanIdx];
                                                var aHousekeepingRecommendedActionWhatToClean = someHousekeepingRecommendedActionWhatToClean[ aWhatToCleanIdx];

                                                if( !aRecommendationToCheckWhatToClean && !aHousekeepingRecommendedActionWhatToClean) {
                                                    continue;
                                                }

                                                if( !( aRecommendationToCheckWhatToClean == aHousekeepingRecommendedActionWhatToClean)) {

                                                    if( aExpectFailure) {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                    }
                                                    else {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                    }
                                                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONPARAMETERDIFFERS;
                                                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedParameter " + aRecommendationToCheckParameterName + " " + aRecommendationToCheckWhatToClean;

                                                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedParameter " + aRecommendationToCheckParameterName + " " + aRecommendationToCheckWhatToClean);

                                                    return;
                                                }
                                            }
                                            break;



                                        case theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_HOWMUCHTOCLEAN:

                                            if( !( typeof aHousekeepingRecommendedActionParameterValue == "number")) {
                                                continue;
                                            }

                                            if( typeof aRecommendationToCheckParameterValue == "number") {

                                                if( !( aRecommendationToCheckParameterValue == aHousekeepingRecommendedActionParameterValue)) {

                                                    if( aExpectFailure) {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                    }
                                                    else {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                    }
                                                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONPARAMETERDIFFERS;
                                                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedParameter " + aRecommendationToCheckParameterName + " number <>";

                                                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedParameter " + aRecommendationToCheckParameterName + " " + aRecommendationToCheckParameterValue);

                                                    return;
                                                }
                                                continue;
                                            }

                                            if( !( typeof aRecommendationToCheckParameterValue == "object")) {

                                                if( aExpectFailure) {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                }
                                                else {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                }
                                                theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONPARAMETERDIFFERS;
                                                theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedParameter " + aRecommendationToCheckParameterName + " !object";

                                                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedParameter " + aRecommendationToCheckParameterName + " !object");

                                                return;
                                            }

                                            var aRecommendationToCheckHowMuchToClean_Minimum = aRecommendationToCheckParameterValue[ "min"];
                                            if( !( typeof aRecommendationToCheckHowMuchToClean_Minimum == "undefined")) {
                                                if( aHousekeepingRecommendedActionParameterValue < aRecommendationToCheckHowMuchToClean_Minimum) {

                                                    if( aExpectFailure) {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                    }
                                                    else {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                    }
                                                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONPARAMETERDIFFERS;
                                                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedParameter " + aRecommendationToCheckParameterName + " min";

                                                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedParameter " + aRecommendationToCheckParameterName + " min");

                                                    return;
                                                }
                                            }

                                            var aRecommendationToCheckHowMuchToClean_Maximum = aRecommendationToCheckParameterValue[ "max"];
                                            if( !( typeof aRecommendationToCheckHowMuchToClean_Maximum == "undefined")) {
                                                if( aHousekeepingRecommendedActionParameterValue > aRecommendationToCheckHowMuchToClean_Maximum) {

                                                    if( aExpectFailure) {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                    }
                                                    else {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                    }
                                                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONPARAMETERDIFFERS;
                                                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedParameter " + aRecommendationToCheckParameterName + "  max";

                                                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedParameter " + aRecommendationToCheckParameterName + " max");

                                                    return;
                                                }
                                            }
                                            break;



                                        default:

                                            if( !aRecommendationToCheckParameterValue && !aHousekeepingRecommendedActionParameterValue) {
                                                continue;
                                            }

                                            var aFirstDiff = theM_traversals.fgFirstDiff( aHousekeepingRecommendedActionParameterValue, aRecommendationToCheckParameterValue);
                                            if( aFirstDiff) {

                                                if( aExpectFailure) {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                }
                                                else {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                }
                                                theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONPARAMETERDIFFERS;
                                                theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] recommendedParameter " + aRecommendationToCheckParameterName + " firstDiff" + aFirstDiff;

                                                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONDIFFERS, "recommendedParameter " + aRecommendationToCheckParameterName + " firstDiff" + aFirstDiff);

                                                return;
                                            }

                                    }
                                }
                            }
                        }


                        if( aExpectFailure) {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONNOTFAILEDASEXPECTED;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Recommendations[ " + aRecommendationToCheckIdx + "] expectFailure";


                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_RECOMMENDATIONNOTFAILEDASEXPECTED, "Recommendations[ " + aRecommendationToCheckIdx + "] expectFailure");

                            return;
                        }
                    }
                }

                if( theExpectAttemptFailure) {

                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ATTEMPTNOTFAILEDASEXPECTED;
                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = null;

                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ATTEMPTNOTFAILEDASEXPECTED);
                }


            };
            if( pCheckTestHousekeepingRecommendationsInto){}/* CQT */
            aPrototype.pCheckTestHousekeepingRecommendationsInto = pCheckTestHousekeepingRecommendationsInto;









            var pCheckTestHousekeepingActionsInto = function( theHousekeepingCheckSpecific, theToCheckActions, theHousekeepingActions, theExpectAttemptFailure) {

                var aMethodName = "pCheckTestHousekeepingActionsInto";


                if( !theHousekeepingCheckSpecific) {
                    return;
                }


                if( !(    ( ( typeof theToCheckActions == "undefined")      || ( theToCheckActions == null))
                       && ( ( typeof theHousekeepingActions == "undefined") || ( theHousekeepingActions == null)))) {

                    return;
                }




                var aNumToCheckActions = 0;
                if( theToCheckActions) {
                    aNumToCheckActions = theToCheckActions.length;
                }


                var aNumHousekeepingActions = 0;
                if( theHousekeepingActions) {
                    aNumHousekeepingActions = theHousekeepingActions.length;
                }


                if( !aNumToCheckActions && !aNumHousekeepingActions) {
                    return;
                }



                var aNumActionsToCheck = Math.max( aNumToCheckActions, aNumHousekeepingActions);

                for( var aActionToCheckIdx=0; aActionToCheckIdx < aNumActionsToCheck; aActionToCheckIdx++) {



                    var aActionToCheck      = null;
                    if( aActionToCheckIdx < aNumToCheckActions) {
                        aActionToCheck = theToCheckActions[ aActionToCheckIdx];
                    }


                    var aHousekeepingAction = null;
                    if( aActionToCheckIdx < aNumHousekeepingActions) {
                        aHousekeepingAction = theHousekeepingActions[ aActionToCheckIdx];
                    }


                    if( !aActionToCheck && !aHousekeepingAction) {
                        continue;
                    }


                    if( !aActionToCheck) {

                        if( theExpectAttemptFailure) {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                        }
                        else {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                        }
                        theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                        theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTHOUSEKEEPINGACTION;
                        theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "]" ;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTHOUSEKEEPINGACTION, aActionToCheckIdx);

                        return;
                    }



                    if( !aHousekeepingAction) {

                        if( theExpectAttemptFailure) {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                        }
                        else {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                        }
                        theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                        theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGHOUSEKEEPINGACTION;
                        theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "]" ;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_MISSINGTESTHOUSEKEEPINGACTION, aActionToCheckIdx);

                        return;
                    }



                    var aExpectFailure = aActionToCheck[ "expectFailure"];
                    if( !aExpectFailure) {
                        aExpectFailure = false;
                    }



                    if( aActionToCheck[ "actionKind"]) {

                        if( !aHousekeepingAction._v_HousekeepingActionKind ||
                            !( aHousekeepingAction._v_HousekeepingActionKind == aActionToCheck[ "actionKind"])) {

                            if( aExpectFailure) {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                            }
                            else {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            }
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] actionKind" ;

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] actionKind");

                            return;
                        }
                    }



                    if( !( typeof aActionToCheck[ "actionPriority"] == "undefined") && !( aActionToCheck[ "actionPriority"] == null)) {

                        if( !aHousekeepingAction._v_HousekeepingActionPriority ||
                            !( aHousekeepingAction._v_HousekeepingActionPriority == aActionToCheck[ "actionPriority"])) {

                            if( aExpectFailure) {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                            }
                            else {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            }
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] actionPriority" ;

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] actionPriority");

                            return;
                        }
                    }



                    if( aActionToCheck[ "actionHousekeeperSpecificKind"]) {

                        if( !aHousekeepingAction._v_ActionHousekeeperSpecificKind ||
                            !( aHousekeepingAction._v_ActionHousekeeperSpecificKind == aActionToCheck[ "actionHousekeeperSpecificKind"])) {

                            if( aExpectFailure) {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                            }
                            else {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            }
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] actionHousekeeperSpecificKind" ;

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] actionHousekeeperSpecificKind");

                            return;
                        }
                    }



                    var someActionToCheckParameters         = aActionToCheck[ "parameters"];

                    var someHousekeepingActionParameters = aHousekeepingAction._v_HousekeepingActionParameters;

                    if( someActionToCheckParameters || someHousekeepingActionParameters) {

                        if( !someActionToCheckParameters || !someHousekeepingActionParameters) {

                            if( aExpectFailure) {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                            }
                            else {
                                theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            }
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] parameters" ;

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] parameters");

                            return;
                        }


                        var someParameterNamestoCheck = [ ];
                        Object.keys( someActionToCheckParameters).forEach( function( athKey) {
                            if( theM_housekeepconstants.ACTIONPARAMETERS_CLEANUP_TOCHECK.indexOf( athKey) >= 0) {
                                if( someParameterNamestoCheck.indexOf( athKey) < 0) {
                                    someParameterNamestoCheck.push( athKey);
                                }
                            }
                        });

                        Object.keys( someHousekeepingActionParameters).forEach( function( athKey) {
                            if( theM_housekeepconstants.ACTIONPARAMETERS_CLEANUP_TOCHECK.indexOf( athKey) >= 0) {
                                if( someParameterNamestoCheck.indexOf( athKey) < 0) {
                                    someParameterNamestoCheck.push( athKey);
                                }
                            }
                        });

                        var aNumParameterNamestoCheck = someParameterNamestoCheck.length;
                        if( aNumParameterNamestoCheck) {

                            someParameterNamestoCheck.sort();

                            for( var aParameterIdx=0; aParameterIdx < aNumParameterNamestoCheck; aParameterIdx++) {

                                var aActionToCheckParameterName = someParameterNamestoCheck[ aParameterIdx];
                                if( aActionToCheckParameterName) {

                                    var aActionToCheckParameterValue      = someActionToCheckParameters[      aActionToCheckParameterName];
                                    if( typeof aActionToCheckParameterValue == "function") {
                                        continue;
                                    }

                                    var aHousekeepingActionParameterValue = someHousekeepingActionParameters[ aActionToCheckParameterName];
                                    if( typeof aHousekeepingActionParameterValue == "function") {
                                        continue;
                                    }

                                    if( ( typeof aActionToCheckParameterValue == "undefined") && ( typeof aHousekeepingActionParameterValue == "undefined")) {
                                        continue;
                                    }

                                    if( ( typeof aActionToCheckParameterValue == "undefined") || ( typeof aHousekeepingActionParameterValue == "undefined")) {

                                        if( aExpectFailure) {
                                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                        }
                                        else {
                                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                        }
                                        theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                        theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONPARAMETERDIFFERS;
                                        theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName;

                                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName);

                                        return;
                                    }





                                    switch( aActionToCheckParameterName) {

                                        case theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_WHATTOCLEAN:

                                            var aNumActionToCheckWhatToClean                 = aActionToCheckParameterValue.length;
                                            var aNumHousekeepingActionWhatToClean = aHousekeepingActionParameterValue.length;

                                            if( !( aNumActionToCheckWhatToClean == aNumHousekeepingActionWhatToClean)) {

                                                if( aExpectFailure) {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                }
                                                else {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                }
                                                theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONPARAMETERDIFFERS;
                                                theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName;

                                                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName);

                                                return;
                                            }

                                            var someActionsToCheckWhatToClean     = aActionToCheckParameterValue.sort();
                                            var someHousekeepingActionWhatToClean = aHousekeepingActionParameterValue.sort();

                                            for( var aWhatToCleanIdx=0; aWhatToCleanIdx < aNumActionToCheckWhatToClean; aWhatToCleanIdx++) {

                                                var aActionToCheckWhatToClean      = someActionsToCheckWhatToClean[     aWhatToCleanIdx];
                                                var aHousekeepingActionWhatToClean = someHousekeepingActionWhatToClean[ aWhatToCleanIdx];

                                                if( !aActionToCheckWhatToClean && !aHousekeepingActionWhatToClean) {
                                                    continue;
                                                }

                                                if( !( aActionToCheckWhatToClean == aHousekeepingActionWhatToClean)) {

                                                    if( aExpectFailure) {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                    }
                                                    else {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                    }
                                                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONPARAMETERDIFFERS;
                                                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " " + aActionToCheckWhatToClean;

                                                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " " + aActionToCheckWhatToClean);

                                                    return;
                                                }
                                            }
                                            break;



                                        case theM_housekeepconstants.ACTIONPARAMETER_CLEANUP_HOWMUCHTOCLEAN:

                                            if( !( typeof aHousekeepingActionParameterValue == "number")) {
                                                continue;
                                            }

                                            if( typeof aActionToCheckParameterValue == "number") {

                                                if( !( aActionToCheckParameterValue == aHousekeepingActionParameterValue)) {

                                                    if( aExpectFailure) {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                    }
                                                    else {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                    }
                                                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONPARAMETERDIFFERS;
                                                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " number <>";

                                                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " number <>");

                                                    return;
                                                }
                                                continue;
                                            }

                                            if( !( typeof aActionToCheckParameterValue == "object")) {

                                                if( aExpectFailure) {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                }
                                                else {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                }
                                                theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONPARAMETERDIFFERS;
                                                theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " !object";

                                                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " !object");

                                                return;
                                            }

                                            var aActionToCheckMHowMuchToClean_Minimum = aActionToCheckParameterValue[ "min"];
                                            if( !( typeof aActionToCheckMHowMuchToClean_Minimum == "undefined")) {
                                                if( aHousekeepingActionParameterValue < aActionToCheckMHowMuchToClean_Minimum) {

                                                    if( aExpectFailure) {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                    }
                                                    else {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                    }
                                                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONPARAMETERDIFFERS;
                                                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " min";

                                                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " min");

                                                    return;
                                                }
                                            }

                                            var aActionToCheckMHowMuchToClean_Maximum = aActionToCheckParameterValue[ "max"];
                                            if( !( typeof aActionToCheckMHowMuchToClean_Minimum == "undefined")) {
                                                if( aHousekeepingActionParameterValue > aActionToCheckMHowMuchToClean_Maximum) {

                                                    if( aExpectFailure) {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                    }
                                                    else {
                                                        theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                    }
                                                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONPARAMETERDIFFERS;
                                                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + "  max";

                                                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " max");

                                                    return;
                                                }
                                            }
                                            break;



                                        default:

                                            if( !aActionToCheckParameterValue && !aHousekeepingActionParameterValue) {
                                                continue;
                                            }

                                            var aFirstDiff = theM_traversals.fgFirstDiff( aHousekeepingActionParameterValue, aActionToCheckParameterValue);
                                            if( aFirstDiff) {

                                                if( aExpectFailure) {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = true;
                                                }
                                                else {
                                                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                                                }
                                                theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                                                theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONPARAMETERDIFFERS;
                                                theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " firstDiff" + aFirstDiff;

                                                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONDIFFERS, "Actions[ " + aActionToCheckIdx + "] parameter " + aActionToCheckParameterName + " firstDiff" + aFirstDiff);

                                                return;
                                            }

                                    }
                                }

                            }
                        }

                        if( aExpectFailure) {
                            theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                            theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                            theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONNOTFAILEDASEXPECTED;
                            theHousekeepingCheckSpecific._v_HousekeepingDetails   = "Actions[ " + aActionToCheckIdx + "] expectFailure";

                            this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ACTIONNOTFAILEDASEXPECTED, "Actions[ " + aActionToCheckIdx + "] expectFailure");

                            return;
                        }
                    }
                }



                if( theExpectAttemptFailure) {

                    theHousekeepingCheckSpecific._v_HousekeepingSuccess   = false;
                    theHousekeepingCheckSpecific._v_HousekeepingPerformed = true;
                    theHousekeepingCheckSpecific._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ATTEMPTNOTFAILEDASEXPECTED;
                    theHousekeepingCheckSpecific._v_HousekeepingDetails   = null;

                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_INFO, theHousekeepingCheckSpecific, theM_housekeepconstants.HOUSEKEEPINGCHECKSTATUS_ATTEMPTNOTFAILEDASEXPECTED);
                }


            };
            if( pCheckTestHousekeepingActionsInto){}/* CQT */
            aPrototype.pCheckTestHousekeepingActionsInto = pCheckTestHousekeepingActionsInto;









            return aPrototype;

        })();




        var HousekeeperMemory_Constructor = function( theTitle,
                                                      theHousekeeperIdentifier,
                                                      theHousekeeperRecorder,
                                                      theHousekeepOptions,
                                                      theHousekeptLauncher,
                                                      theHousekeeperMaster,
                                                      theSnapshotter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeeperspecific.HousekeeperSpecific_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_HousekeeperMaster = null;

            this._v_TestsByMomentAndSpecPath = null;


            this._pInit_HousekeeperMemory( theTitle,
                                           theHousekeeperIdentifier,
                                           theHousekeeperRecorder,
                                           theHousekeepOptions,
                                           theHousekeptLauncher,
                                           theHousekeeperMaster,
                                           theSnapshotter);

        };
        HousekeeperMemory_Constructor.prototype = aHousekeeperMemory_Prototype;





        var HousekeeperMemory_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeeperspecific.HousekeeperSpecific_Prototype;

            this._v_Prototype = aHousekeeperMemory_Prototype;
            this._v_Type = null;

            this._v_HousekeeperMaster = null;

            this._v_TestsByMomentAndSpecPath = null;

        };
        HousekeeperMemory_SuperPrototypeConstructor.prototype = aHousekeeperMemory_Prototype;



        var aModule = {
            "HousekeeperMemory_Prototype": aHousekeeperMemory_Prototype,
            "HousekeeperMemory_Constructor": HousekeeperMemory_Constructor,
            "HousekeeperMemory_SuperPrototypeConstructor": HousekeeperMemory_SuperPrototypeConstructor
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

            var aM_housekeepconstants         = require('./housekeep-constants');
            var aM_housekeeputils             = require('./housekeep-utils');
            var aM_housekeeperspecific        = require('./housekeeper-specific');
            var aM_housekeepingspecific       = require('./housekeeping-specific');
            var aM_housekeepingrecommendation = require('./housekeeping-recommendation');
            var aM_housekeepingaction         = require('./housekeeping-action');
            var aM_housekeepingcheckspecific  = require('./housekeeping-check-specific');
            var aM_platformmemory             = require('../../infrasvcs/memory/memory');
            var aM_traversals                 = require('../traversals/traversals');
            var aM_overrider                  = require('../overrider');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeeputils,
                aM_housekeeperspecific,
                aM_housekeepingspecific,
                aM_housekeepingrecommendation,
                aM_housekeepingaction,
                aM_housekeepingcheckspecific,
                aM_platformmemory,
                aM_traversals,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./housekeep-constants",
            "./housekeep-utils",
            "./housekeeper-specific",
            "./housekeeping-specific",
            "./housekeeping-recommendation",
            "./housekeeping-action",
            "./housekeeping-check-specific",
            "../../infrasvcs/memory/memory",
            "../traversals/traversals",
            "../overrider"
        ], function (
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_housekeeperspecific,
                theM_housekeepingspecific,
                theM_housekeepingrecommendation,
                theM_housekeepingaction,
                theM_housekeepingcheckspecific,
                theM_platformmemory,
                theM_traversals,
                theM_overrider
            ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeeputils,
                theM_housekeeperspecific,
                theM_housekeepingspecific,
                theM_housekeepingrecommendation,
                theM_housekeepingaction,
                theM_housekeepingcheckspecific,
                theM_platformmemory,
                theM_traversals,
                theM_overrider
            );
        });
    }


}());


