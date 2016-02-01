'use strict';

/*
 housekeeper-master.js
 Created 201504071420
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
                             theM_housekeepergeneral,
                             theM_housekeepermemory,
                             theM_housekeepingmaster,
                             theM_housekeepingattempt,
                             theM_snapshottermemory,
                             theM_snapshottermemory_fake,
                             theM_housekeepingrecommendation,
                             theM_housekeepingaction,
                             theM_housekeepingcheckmaster,
                             theM_specloader,
                             theM_overrider) {

        var ModuleName     = "housekeeper-master";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }
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







        var aHousekeeperMaster_Prototype = (function() {


            var aPrototype = new theM_housekeepergeneral.HousekeeperGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_housekeepergeneral.HousekeeperGeneral_Prototype;

            aPrototype._v_Type = "HousekeeperMaster";



            aPrototype._v_TestHousekeepingFile = null;
            aPrototype._v_TestHousekeeping     = null;

            aPrototype._v_HousekeepersSpecific       = null;
            aPrototype._v_HousekeepersSpecificByKind = null;
            aPrototype._v_HousekeeperMemory          = null;


            aPrototype._v_Housekeepings = null;
            aPrototype._v_SnapshottersByKind = null;





            var _pInit = function( theTitle,
                                   theHousekeeperIdentifier,
                                   theHousekeeperRecorder,
                                   theHousekeepOptions,
                                   theHousekeptLauncher,
                                   theSnapshottersByKind) {

                this._pInit_HousekeeperMaster( theTitle,
                                               theHousekeeperIdentifier,
                                               theHousekeeperRecorder,
                                               theHousekeepOptions,
                                               theHousekeptLauncher,
                                               theSnapshottersByKind);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_HousekeeperMaster = function( theTitle,
                                                     theHousekeeperIdentifier,
                                                     theHousekeeperRecorder,
                                                     theHousekeepOptions,
                                                     theHousekeptLauncher,
                                                     theSnapshottersByKind) {


                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_HousekeeperGeneral.apply( this, [ theTitle, theHousekeeperIdentifier, theHousekeeperRecorder, theHousekeepOptions, theHousekeptLauncher]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_HousekeeperKind = theM_housekeepconstants.HOUSEKEEPERKIND_MASTER;

                this._v_SnapshottersByKind = theSnapshottersByKind;
                if( !this._v_SnapshottersByKind) {
                    this._v_SnapshottersByKind = { };
                }


                this._v_TestHousekeepingFile = null;
                this._v_TestHousekeeping     = null;

                this._v_HousekeepersSpecific       = [ ];
                this._v_HousekeepersSpecificByKind = { };
                this._v_HousekeeperMemory          = null;

                this._v_Housekeepings = [ ];

                this._pInit_HousekeeperMaster_Memory();
            };
            if( _pInit_HousekeeperMaster){}/* CQT */
            aPrototype._pInit_HousekeeperMaster = _pInit_HousekeeperMaster;








            var _pInit_HousekeeperMaster_Memory = function() {

                var aSnapshotter = null;
                if( this._v_SnapshottersByKind) {
                    aSnapshotter = this._v_SnapshottersByKind[ theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY];
                }

                this._v_HousekeeperMemory = new theM_housekeepermemory.HousekeeperMemory_Constructor(
                    "HousekeeperMemoryFor-" + this._v_HousekeeperTitle,
                    this._v_HousekeeperIdentifier,
                    this._v_HousekeeperRecorder,
                    this._v_HousekeepOptions,
                    this._v_HousekeptLauncher,
                    this,
                    aSnapshotter);
                
                this._v_HousekeepersSpecific.push( this._v_HousekeeperMemory);

                if( this._v_HousekeepersSpecificByKind) {

                    var aHousekeeperMemoryKind = this._v_HousekeeperMemory._v_HousekeeperKind;
                    if( aHousekeeperMemoryKind) {

                        this._v_HousekeepersSpecificByKind[ aHousekeeperMemoryKind] = this._v_HousekeeperMemory;
                    }
                }
            };
            if( _pInit_HousekeeperMaster_Memory){}/* CQT */
            aPrototype._pInit_HousekeeperMaster_Memory = _pInit_HousekeeperMaster_Memory;








            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_HousekeeperMaster( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_HousekeeperMaster = function( theReleaseParms, theReleaseDone) {

                this._v_TestHousekeepingFile = undefined;
                this._v_TestHousekeeping     = undefined;


                if( this._v_Housekeepings) {
                    var aNumHousekeepings = this._v_Housekeepings.length;
                    if( aNumHousekeepings) {
                        for( var aHousekeepingAttemptIdx=0; aHousekeepingAttemptIdx < aNumHousekeepings; aHousekeepingAttemptIdx++) {

                            var aHousekeepingAttempt = this._v_Housekeepings[ aHousekeepingAttemptIdx];
                            if( aHousekeepingAttempt) {

                                if( aHousekeepingAttempt._pRelease && ( typeof aHousekeepingAttempt._pRelease == "function")) {
                                    aHousekeepingAttempt._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_Housekeepings  = undefined;


                var anAlreadyReleasedHousekeeperMemory = false;

                if( this._v_HousekeepersSpecific) {
                    var aNumHousekeepersSpecific = this._v_HousekeepersSpecific.length;
                    if( aNumHousekeepersSpecific) {

                        if( this._v_HousekeeperMemory && ( this._v_HousekeepersSpecific.indexOf( this._v_HousekeeperMemory) >= 0)) {
                            anAlreadyReleasedHousekeeperMemory = true;
                        }

                        for( var aHousekeeperSpecificIdx=0; aHousekeeperSpecificIdx < aNumHousekeepersSpecific; aHousekeeperSpecificIdx++) {

                            var aHousekeeperSpecific = this._v_HousekeepersSpecific[ aHousekeeperSpecificIdx];
                            if( aHousekeeperSpecific) {

                                if( aHousekeeperSpecific._pRelease && ( typeof aHousekeeperSpecific._pRelease == "function")) {
                                    aHousekeeperSpecific._pRelease( theReleaseParms, theReleaseDone);
                                }
                            }
                        }
                    }
                }
                this._v_HousekeepersSpecific  = undefined;

                this._v_HousekeepersSpecificByKind = undefined;



                if( this._v_HousekeeperMemory) {
                    if( !anAlreadyReleasedHousekeeperMemory) {
                        if( this._v_HousekeeperMemory._pRelease && ( typeof this._v_HousekeeperMemory._pRelease == "function")) {
                            this._v_HousekeeperMemory._pRelease( theReleaseParms, theReleaseDone);
                        }
                    }
                }
                this._v_HousekeeperMemory  = undefined;



                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_HousekeeperGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_HousekeeperMaster){}/* CQT */
            aPrototype._pRelease_HousekeeperMaster = _pRelease_HousekeeperMaster;


















            var pAddHousekeeping = function( theHousekeeping) {

                if( !theHousekeeping) {
                    return;
                }

                if( !this._v_Housekeepings) {
                    return;
                }

                if( this._v_Housekeepings.indexOf( theHousekeeping) >= 0) {
                    return;
                }

                this._v_Housekeepings.push( theHousekeeping);
            };
            if( pAddHousekeeping){}/* CQT */
            aPrototype.pAddHousekeeping = pAddHousekeeping;










            var fFindRecentHousekeepingActionsOfKind = function( theBeforeHousekeeping, theHousekeeperSpecificKind, theNumRecentHousekeepingActions, theFindCriteria) {

                if( !theBeforeHousekeeping) {
                    return null;
                }

                if( !theHousekeeperSpecificKind) {
                    return null;
                }

                if( !theNumRecentHousekeepingActions) {
                    return null;
                }


                if( !this._v_Housekeepings) {
                    return null;
                }

                var aNumHousekeepings = this._v_Housekeepings.length;
                if( !aNumHousekeepings) {
                    return null;
                }

                var aBeforeHousekeepingIndex = this._v_Housekeepings.indexOf( theBeforeHousekeeping);
                if( aBeforeHousekeepingIndex < 0) {
                    return null;
                }


                var someHousekeepingActions = [ ];

                var aHousekeepingIdx = aBeforeHousekeepingIndex;

                while( true) {

                    var aNumHousekeepingActionsFound = someHousekeepingActions.length;
                    if( aNumHousekeepingActionsFound >= theNumRecentHousekeepingActions) {
                        break;
                    }

                    aHousekeepingIdx -= 1;
                    if( aHousekeepingIdx < 0) {
                        break;
                    }

                    var aHousekeeping = this._v_Housekeepings[ aHousekeepingIdx];
                    if( !aHousekeeping) {
                        continue;
                    }

                    aHousekeeping.pFindRecentHousekeepingActionsOfKindInto( theHousekeeperSpecificKind,
                                                                            theNumRecentHousekeepingActions,
                                                                            theFindCriteria,
                                                                            someHousekeepingActions);
                }

                return someHousekeepingActions;

            };
            if( fFindRecentHousekeepingActionsOfKind){}/* CQT */
            aPrototype.fFindRecentHousekeepingActionsOfKind = fFindRecentHousekeepingActionsOfKind;













            var pInitSnapshotters = function() {

                this.pInitSnapshotter_Memory();

                this.pUpdateHousekeeperSpecificSnapshotters();

            };
            if( pInitSnapshotters){}/* CQT */
            aPrototype.pInitSnapshotters = pInitSnapshotters;








            var pInitSnapshotter_Memory = function() {

                var aSnapshotter_Memory = null;

                var aHasFakeSnapshot = false;

                var someTestsHousekeeping_Memory = this.fTestHousekeeping_OfKind( theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY);
                if( someTestsHousekeeping_Memory) {

                    var aNumTestsHousekeeping_Memory = someTestsHousekeeping_Memory.length;
                    if( aNumTestsHousekeeping_Memory) {

                        for( var aTestHousekeeping_MemoryIdx=0; aTestHousekeeping_MemoryIdx < aNumTestsHousekeeping_Memory; aTestHousekeeping_MemoryIdx++) {

                            var aTestHousekeeping_Memory = someTestsHousekeeping_Memory[ aTestHousekeeping_MemoryIdx];
                            if( aTestHousekeeping_Memory) {

                                var aTestHousekeeping_Memory_snapshot = aTestHousekeeping_Memory[ "snapshot"];
                                if( aTestHousekeeping_Memory_snapshot) {
                                    aHasFakeSnapshot = true;
                                    break;
                                }

                                var aTestHousekeeping_Memory_snapshotBeforeTest = aTestHousekeeping_Memory[ "snapshotBeforeTest"];
                                if( aTestHousekeeping_Memory_snapshotBeforeTest) {
                                    aHasFakeSnapshot = true;
                                    break;
                                }

                                var aTestHousekeeping_Memory_snapshotAfterTest = aTestHousekeeping_Memory[ "snapshotAfterTest"];
                                if( aTestHousekeeping_Memory_snapshotAfterTest) {
                                    aHasFakeSnapshot = true;
                                    break;
                                }

                                var someAttempts = aTestHousekeeping_Memory[ "attempts"];
                                if( someAttempts) {

                                    var aNumAttempts = someAttempts.length;
                                    if( aNumAttempts) {

                                        for( var anAttemptIdx=0; anAttemptIdx < aNumAttempts; anAttemptIdx++) {

                                            var anAttempt = someAttempts[ anAttemptIdx];
                                            if( anAttempt) {

                                                var anAttempt_Memory_snapshot = anAttempt[ "snapshot"];
                                                if( anAttempt_Memory_snapshot) {
                                                    aHasFakeSnapshot = true;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                if( aHasFakeSnapshot) {

                    aSnapshotter_Memory = new theM_snapshottermemory_fake.SnapshotterMemoryFake_Constructor(
                        "SnapshotterMemoryFake-For-" + this._v_LauncherTitle,
                        someTestsHousekeeping_Memory
                    );
                }

                if( !aSnapshotter_Memory) {
                    aSnapshotter_Memory = new theM_snapshottermemory.SnapshotterMemory_Constructor(
                        "SnapshotterMemory-For-" + this._v_LauncherTitle);
                }


                this._v_SnapshottersByKind[ theM_housekeepconstants.HOUSEKEEPERKIND_MEMORY] = aSnapshotter_Memory;

            };
            if( pInitSnapshotter_Memory){}/* CQT */
            aPrototype.pInitSnapshotter_Memory = pInitSnapshotter_Memory;








            var fTestHousekeeping_OfKind = function( theTestHousekeepingKind) {

                if( !theTestHousekeepingKind) {
                    return null;
                }

                var aTestHousekeeping = this.fTestHousekeeping();
                if( !aTestHousekeeping) {
                    return null;
                }

                var aTestHousekeeping_Memory = aTestHousekeeping[ theTestHousekeepingKind];
                if( aTestHousekeeping_Memory){}/* CQT */

                return aTestHousekeeping_Memory;

            };
            if( fTestHousekeeping_OfKind){}/* CQT */
            aPrototype.fTestHousekeeping_OfKind = fTestHousekeeping_OfKind;








            var fTestHousekeeping = function() {

                if( this._v_TestHousekeeping) {
                    return this._v_TestHousekeeping;
                }

                this.pReadTestHousekeeping();

                return this._v_TestHousekeeping;

            };
            if( fTestHousekeeping){}/* CQT */
            aPrototype.fTestHousekeeping = fTestHousekeeping;




















            var fTestHousekeeping_fAsLogObject = function() {
                return this;
            };






            var fHousekeepOptions_fAsLogObject = function() {
                return this;
            };











            var pReadTestHousekeeping = function() {

                this._v_TestHousekeepingFile = null;
                this._v_TestHousekeeping = null;


                if( !this._v_HousekeepOptions) {
                    return;
                }


                var aTestHousekeepingFile = this._v_HousekeepOptions[ theM_housekeepconstants.HOUSEKEEPOPTIONS_TESTHOUSEKEEPINGFILEPARMNAME];
                if( !aTestHousekeepingFile) {
                    return;
                }


                if( typeof aTestHousekeepingFile == "object") {
                    this._v_TestHousekeepingFile = aTestHousekeepingFile;
                    this._v_TestHousekeeping     = aTestHousekeepingFile;
                    return;
                }


                if( !( typeof aTestHousekeepingFile == "string")) {
                    return;
                }


                this._v_TestHousekeepingFile = aTestHousekeepingFile;


                var aTestHousekeeping = null;
                try {
                    aTestHousekeeping = theM_specloader.fgGlobalSpecLoader().fLoadSpecNamed( this._v_TestHousekeepingFile);
                }
                catch( anException) {}
                if( aTestHousekeeping == null) {
                    return;
                }


                if( !( typeof aTestHousekeeping == "object")) {
                    return;
                }


                this._v_TestHousekeeping = aTestHousekeeping;

                if( !this._v_TestHousekeeping.fAsLogObject) {
                    this._v_TestHousekeeping.fAsLogObject = fTestHousekeeping_fAsLogObject.bind( this._v_TestHousekeeping);
                }


                this.pUpdateHousekeepOptionsFromReadTestHousekeeping( );

            };
            if( pReadTestHousekeeping){}/* CQT */
            aPrototype.pReadTestHousekeeping = pReadTestHousekeeping;










            var pUpdateHousekeepOptionsFromReadTestHousekeeping = function() {

                var aMethodName = "pUpdateHousekeepOptionsFromReadTestHousekeeping";

                if( !this._v_TestHousekeeping) {
                    return;
                }

                if( !this._v_HousekeepOptions) {
                    return;
                }

                var someHousekeepOptionsFromTestHousekeeping = this._v_TestHousekeeping[ theM_housekeepconstants.TESTHOUSEKEEPINGFILESECTION_HOUSEKEEPOPTIONS];
                if( !someHousekeepOptionsFromTestHousekeeping) {
                    return;
                }

                var aHousekeepOptions = this._v_HousekeepOptions;
                Object.keys( someHousekeepOptionsFromTestHousekeeping).forEach( function( athKey) {
                    if( theM_housekeepconstants.TESTHOUSEKEEPINGFILE_HOUSEKEEPOPTIONS_VALIDKEYS.indexOf( athKey) >= 0) {
                        var aHousekeepOptionsFromTestHousekeeping = someHousekeepOptionsFromTestHousekeeping[ athKey];
                        if( !( aHousekeepOptionsFromTestHousekeeping == null)) {
                            aHousekeepOptions[ athKey] = aHousekeepOptionsFromTestHousekeeping;
                        }
                    }
                });

                if( !this._v_HousekeepOptions.fAsLogObject) {
                    this._v_HousekeepOptions.fAsLogObject = fHousekeepOptions_fAsLogObject.bind( this._v_HousekeepOptions);
                }

                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPOPTIONSFROMTEST,  this._v_HousekeepOptions, null, null);

            };
            if( pUpdateHousekeepOptionsFromReadTestHousekeeping){}/* CQT */
            aPrototype.pUpdateHousekeepOptionsFromReadTestHousekeeping = pUpdateHousekeepOptionsFromReadTestHousekeeping;









            var pUpdateHousekeeperSpecificSnapshotters = function() {

                if( !this._v_HousekeepersSpecific) {
                    return;
                }

                if( !this._v_SnapshottersByKind) {
                    return;
                }


                var aNumHousekeepersSpecific = this._v_HousekeepersSpecific.length;
                if( aNumHousekeepersSpecific) {

                    for( var aHousekeeperSpecificIdx=0; aHousekeeperSpecificIdx < aNumHousekeepersSpecific; aHousekeeperSpecificIdx++) {

                        var aHousekeeperSpecific = this._v_HousekeepersSpecific[ aHousekeeperSpecificIdx];
                        if( aHousekeeperSpecific) {

                            var aHousekeeperSpecificKind = aHousekeeperSpecific._v_HousekeeperKind;
                            if( aHousekeeperSpecificKind) {

                                var aSnapshotterOfKind = this._v_SnapshottersByKind[ aHousekeeperSpecificKind];
                                if( aSnapshotterOfKind) {
                                    aHousekeeperSpecific._v_Snapshotter = aSnapshotterOfKind;
                                }
                            }
                        }
                    }
                }
            };
            if( pUpdateHousekeeperSpecificSnapshotters){}/* CQT */
            aPrototype.pUpdateHousekeeperSpecificSnapshotters = pUpdateHousekeeperSpecificSnapshotters;





















            var pGrabHousekeepingSnapshot_before_loadSpecs = function( theLauncherMany, theIsFirst) {
                if( theLauncherMany){}/* CQT */
                if( theIsFirst){}/* CQT */

                this.pGrabHousekeepingSnapshot( theM_housekeepconstants.MOMENT_BEFORELOADSPECS, null /* theLastSubLauncher */);

            };
            if( pGrabHousekeepingSnapshot_before_loadSpecs){}/* CQT */
            aPrototype.pGrabHousekeepingSnapshot_before_loadSpecs = pGrabHousekeepingSnapshot_before_loadSpecs;











            var pGrabHousekeepingSnapshot_after_loadSpecs = function( theLauncherMany, theIsFirst) {
                if( theLauncherMany){}/* CQT */
                if( theIsFirst){}/* CQT */

                this.pGrabHousekeepingSnapshot(  theM_housekeepconstants.MOMENT_AFTERLOADSPECS, null /* theLastSubLauncher */);

            };
            if( pGrabHousekeepingSnapshot_after_loadSpecs){}/* CQT */
            aPrototype.pGrabHousekeepingSnapshot_after_loadSpecs = pGrabHousekeepingSnapshot_after_loadSpecs;














            var pGrabHousekeepingSnapshot = function( theMoment, theLastSubLauncher) {

                if( this._v_HousekeepersSpecific) {

                    var aNumHousekeepersSpecific = this._v_HousekeepersSpecific.length;
                    if( aNumHousekeepersSpecific) {

                        for( var aHousekeeperSpecificIdx=0; aHousekeeperSpecificIdx < aNumHousekeepersSpecific; aHousekeeperSpecificIdx++) {

                            var aHousekeeperSpecific = this._v_HousekeepersSpecific[ aHousekeeperSpecificIdx];
                            if( aHousekeeperSpecific) {

                                aHousekeeperSpecific.pGrabHousekeepingSnapshotSpecific( theMoment, theLastSubLauncher);
                            }
                        }
                    }
                }

            };
            if( pGrabHousekeepingSnapshot){}/* CQT */
            aPrototype.pGrabHousekeepingSnapshot = pGrabHousekeepingSnapshot;










            var fHousekeep_from_LauncherMany_AfterScheduleSubLauncher = function( theLauncherMany, theIsFirst, theLastSubLauncher) {

                if( theLastSubLauncher) {
                    if( theLastSubLauncher.fIsLauncherMany()) {
                        if( theLastSubLauncher.fIsFirst()) {
                            return false;
                        }
                    }
                }

                var aHousekeeping = this.fPerformAndCheckHousekeeping( theLauncherMany, theIsFirst, theLastSubLauncher, theM_housekeepconstants.MOMENT_AFTERSPEC);
                if( aHousekeeping){}/* CQT */

                return aHousekeeping;

            };
            if( fHousekeep_from_LauncherMany_AfterScheduleSubLauncher){}/* CQT */
            aPrototype.fHousekeep_from_LauncherMany_AfterScheduleSubLauncher = fHousekeep_from_LauncherMany_AfterScheduleSubLauncher;











            var fHousekeep_from_LauncherMany_Overall = function( theLauncherMany, theIsFirst) {

                if( theLauncherMany) {
                    if( theLauncherMany.fIsLauncherMany()) {
                        if( theLauncherMany.fIsFirst()) {
                            return false;
                        }
                    }
                }

                var aHousekeeping = this.fPerformAndCheckHousekeeping( theLauncherMany, theIsFirst, theLauncherMany, theM_housekeepconstants.MOMENT_AFTERSPEC);
                if( aHousekeeping){}/* CQT */

                return aHousekeeping;

            };
            if( fHousekeep_from_LauncherMany_Overall){}/* CQT */
            aPrototype.fHousekeep_from_LauncherMany_Overall = fHousekeep_from_LauncherMany_Overall;















            var fPerformAndCheckHousekeeping = function( theLauncherMany, theIsFirst, theLastSubLauncher, theMoment) {

                var aHousekeeping = this.fPerformHousekeeping( theLauncherMany, theIsFirst, theLastSubLauncher, theMoment);
                if( !aHousekeeping) {
                    return null;
                }


                var aHousekeepingCheck = this.fCheckPerformedHousekeeping( aHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher, theMoment);
                if( !aHousekeepingCheck) {
                    return null;
                }


                if( !aHousekeepingCheck._v_HousekeepingSuccess) {

                    aHousekeeping._v_HousekeepingSuccess = false;
                    aHousekeeping._v_HousekeepingStatus   = aHousekeepingCheck._v_HousekeepingStatus;
                    aHousekeeping._v_HousekeepingDetails  = aHousekeepingCheck._v_HousekeepingDetails;

                    return aHousekeeping;
                }


                return aHousekeeping;
            };
            if( fPerformAndCheckHousekeeping){}/* CQT */
            aPrototype.fPerformAndCheckHousekeeping = fPerformAndCheckHousekeeping;














            var fPerformHousekeeping = function( theLauncherMany, theIsFirst, theLastSubLauncher, theMoment) {

                var aMethodName = "fPerformHousekeeping";


                var aForTitle = null;
                if( theLastSubLauncher) {
                    var aLastSubLauncherSpecPath = theLastSubLauncher.fSpecPath();
                    if( aLastSubLauncherSpecPath) {
                        aForTitle = aLastSubLauncherSpecPath;
                    }
                }
                if( !aForTitle) {
                    aForTitle = ( ( theLauncherMany && theLauncherMany._v_LauncherTitle) || "") || this._v_HousekeeperTitle;
                }
                var aHousekeeping = new theM_housekeepingmaster.HousekeepingMaster_Constructor(
                    "HousekeepingMaster-For-" + aForTitle,
                    this._v_HousekeeperIdentifier,
                    this._v_HousekeeperRecorder,
                    this._v_HousekeepOptions,
                    this,
                    theMoment);



                this.pAddHousekeeping( aHousekeeping);


                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGSTARTED, aHousekeeping, null, null);



                this.fPerformHousekeepingAttempts( aHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher);



                aHousekeeping._v_HousekeepingPerformed = true;


                var aLastHousekeepingAttemptSuccess = true;

                if( this._v_HousekeepingAttempts) {

                    var aNumHousekeepingAttempts = this._v_HousekeepingAttempts.length;
                    if( aNumHousekeepingAttempts) {

                        var aLastHousekeepingAttempt = this._v_HousekeepingAttempts[ aNumHousekeepingAttempts -1];
                        if( aLastHousekeepingAttempt) {

                            if( !aLastHousekeepingAttempt._v_HousekeepingSuccess) {
                                aLastHousekeepingAttemptSuccess = false;
                            }
                        }
                    }
                }


                if( aLastHousekeepingAttemptSuccess) {

                    aHousekeeping._v_HousekeepingSuccess = true;

                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGPERFORMED, aHousekeeping, null, null);
                }
                else {
                    aHousekeeping._v_HousekeepingSuccess = false;
                    aHousekeeping._v_HousekeepingStatus  = "LASTATTEMPTNOTSUCCEEDED";
                    aHousekeeping._v_HousekeepingDetails = null;

                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGFAILED, aHousekeeping, aHousekeeping._v_HousekeepingStatus, null);
                }

                return aHousekeeping;

            };
            if( fPerformHousekeeping){}/* CQT */
            aPrototype.fPerformHousekeeping = fPerformHousekeeping;












            var fCheckPerformedHousekeeping = function( theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher, theMoment) {

                var aMethodName = "fCheckPerformedHousekeeping";

                if( !theHousekeeping) {
                    return false;
                }

                if( !theHousekeeping._v_HousekeepingPerformed) {
                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGFAILED, theHousekeeping, "!theHousekeeping._v_HousekeepingPerformed", null);
                    return false;
                }


                var aForTitle = null;
                if( theLastSubLauncher) {
                    var aLastSubLauncherSpecPath = theLastSubLauncher.fSpecPath();
                    if( aLastSubLauncherSpecPath) {
                        aForTitle = aLastSubLauncherSpecPath;
                    }
                }
                if( !aForTitle) {
                    aForTitle = ( ( theLauncherMany && theLauncherMany._v_LauncherTitle) || "") || this._v_HousekeeperTitle;
                }
                var aHousekeepingCheck = new theM_housekeepingcheckmaster.HousekeepingCheckMaster_Constructor(
                    "HousekeepingCheck-For-" + aForTitle,
                    this._v_HousekeeperIdentifier,
                    this._v_HousekeeperRecorder,
                    this._v_HousekeepOptions,
                    this,
                    theHousekeeping,
                    theMoment);



                theHousekeeping.pSetHousekeepingCheck( aHousekeepingCheck);


                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGCHECKSTARTED, aHousekeepingCheck, null, null);



                var aFailedHousekeeperSpecific      = null;
                var aFailedHousekeepingSpecificCheck = null;



                if( this._v_HousekeepersSpecific) {

                    var aNumHousekeepersSpecific = this._v_HousekeepersSpecific.length;
                    if( aNumHousekeepersSpecific) {

                        for( var aHousekeeperSpecificIdx=0; aHousekeeperSpecificIdx < aNumHousekeepersSpecific; aHousekeeperSpecificIdx++) {

                            var aHousekeeperSpecific = this._v_HousekeepersSpecific[ aHousekeeperSpecificIdx];
                            if( aHousekeeperSpecific) {

                                var aHousekeepingSpecificCheck = aHousekeeperSpecific.fCheckPerformedHousekeepingSpecific(
                                    aHousekeepingCheck, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher);

                                if( !aHousekeepingSpecificCheck) {
                                    continue;
                                }

                                if( !aHousekeepingSpecificCheck._v_HousekeepingPerformed) {
                                    aFailedHousekeeperSpecific = aHousekeeperSpecific;
                                    aFailedHousekeepingSpecificCheck = aHousekeepingSpecificCheck;
                                    break;
                                }


                                if( !aHousekeepingSpecificCheck._v_HousekeepingSuccess) {
                                    aFailedHousekeeperSpecific = aHousekeeperSpecific;
                                    aFailedHousekeepingSpecificCheck = aHousekeepingSpecificCheck;
                                    break;
                                }
                            }
                        }
                    }
                }



                if( aFailedHousekeeperSpecific) {
                    aHousekeepingCheck._v_HousekeepingSuccess = false;
                    aHousekeepingCheck._v_HousekeepingStatus  = this.HOUEVKIND_HOUSEKEEPINGCHECKFAILED;

                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGCHECKFAILED, aHousekeepingCheck, null, aFailedHousekeepingSpecificCheck);

                    return aHousekeepingCheck;
                }



                aHousekeepingCheck._v_HousekeepingPerformed = true;
                aHousekeepingCheck._v_HousekeepingSuccess = true;

                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGCHECKOK, aHousekeepingCheck, null, null);

                return aHousekeepingCheck;

            };
            if( fCheckPerformedHousekeeping){}/* CQT */
            aPrototype.fCheckPerformedHousekeeping = fCheckPerformedHousekeeping;














            var fPerformHousekeepingAttempts = function( theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher) {

                var aMethodName = "fPerformHousekeepingAttempts";

                if( !theHousekeeping) {
                    return null;
                }

                var aNumLoops = 0;

                var somePerformedHousekeepingAttempts = [ ];

                while( true) {

                    var anExceededAttempts = false;

                    if( theM_housekeepconstants.MAXHOUSEKEEPINGATTEMPTS == 0) {
                        anExceededAttempts = true;
                    }
                    else {
                        if( theM_housekeepconstants.MAXHOUSEKEEPINGATTEMPTS > 0) {

                            if( aNumLoops >= theM_housekeepconstants.MAXHOUSEKEEPINGATTEMPTS) {

                                anExceededAttempts = true;
                            }
                            else {
                                if( theHousekeeping._v_HousekeepingAttempts) {

                                    var aNumHousekeepingAttempts = theHousekeeping._v_HousekeepingAttempts.length;
                                    if( aNumHousekeepingAttempts >= theM_housekeepconstants.MAXHOUSEKEEPINGATTEMPTS) {
                                        anExceededAttempts = true;
                                    }
                                }
                            }
                        }
                    }
                    if( anExceededAttempts) {

                        theHousekeeping._v_HousekeepingPerformed = true;
                        theHousekeeping._v_GiveUp                = true;
                        theHousekeeping._v_HousekeepingSuccess   = false;
                        theHousekeeping._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGSTATUS_MAXHOUSEKEEPINGATTEMPTS;
                        theHousekeeping._v_HousekeepingDetails   = "aNumHousekeepingAttempts " + aNumHousekeepingAttempts + " >= MAXHOUSEKEEPINGATTEMPTS " + theM_housekeepconstants.MAXHOUSEKEEPINGATTEMPTS ;

                        return somePerformedHousekeepingAttempts;
                    }




                    aNumLoops += 1;



                    var aHousekeepingAttempt = this.fPerformHousekeepingAttempt( theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher);
                    if( !aHousekeepingAttempt) {

                        theHousekeeping._v_HousekeepingPerformed = true;
                        theHousekeeping._v_GiveUp                = false;
                        theHousekeeping._v_HousekeepingSuccess   = true;

                        return somePerformedHousekeepingAttempts;
                    }

                    somePerformedHousekeepingAttempts.push( aHousekeepingAttempt);


                    if( aHousekeepingAttempt.fIsVoidAttempt()) {
                        theHousekeeping._v_HousekeepingPerformed = true;
                        theHousekeeping._v_GiveUp                = false;
                        theHousekeeping._v_HousekeepingSuccess   = true;

                        return somePerformedHousekeepingAttempts;
                    }


                    if( aHousekeepingAttempt.fGiveUpAttempt()) {
                        theHousekeeping._v_HousekeepingPerformed = true;
                        theHousekeeping._v_GiveUp                = true;
                        theHousekeeping._v_HousekeepingSuccess   = false;
                        theHousekeeping._v_HousekeepingStatus    = theM_housekeepconstants.HOUSEKEEPINGSTATUS_ATTEMPTGIVEUP;

                        this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPGIVEUP, theHousekeeping, theM_housekeepconstants.HOUSEKEEPINGSTATUS_ATTEMPTGIVEUP, aHousekeepingAttempt);

                        return somePerformedHousekeepingAttempts;
                    }
                }

            };
            if( fPerformHousekeepingAttempts){}/* CQT */
            aPrototype.fPerformHousekeepingAttempts = fPerformHousekeepingAttempts;













            var fPerformHousekeepingAttempt = function( theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher) {

                var aMethodName = "fPerformHousekeepingAttempt";

                if( !theHousekeeping) {
                    return null;
                }

                var aHousekeepingAttemptIndex = 0;
                if( theHousekeeping._v_HousekeepingAttempts) {
                    aHousekeepingAttemptIndex = theHousekeeping._v_HousekeepingAttempts.length;
                }


                var aHousekeepingAttempt = new theM_housekeepingattempt.HousekeepingAttempt_Constructor(
                    "HousekeepingAttempt["+ aHousekeepingAttemptIndex + "]For-" + ( ( ( theHousekeeping && theHousekeeping._v_HousekeepingTitle) || "") || this._v_HousekeeperTitle),
                    this._v_HousekeeperIdentifier,
                    this._v_HousekeeperRecorder,
                    this._v_HousekeepOptions,
                    this,
                    theHousekeeping,
                    theHousekeeping._v_HousekeepingMoment,
                    aHousekeepingAttemptIndex);


                theHousekeeping.pAddHousekeepingAttempt( aHousekeepingAttempt);


                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGATTEMPTSTARTED, aHousekeepingAttempt, null, null);


                var allActionableRecommendations   = [ ];


                if( this._v_HousekeepersSpecific) {

                    var aNumHousekeepersSpecific = this._v_HousekeepersSpecific.length;
                    if( aNumHousekeepersSpecific) {

                        for( var aHousekeeperSpecificIdx=0; aHousekeeperSpecificIdx < aNumHousekeepersSpecific; aHousekeeperSpecificIdx++) {

                            var aHousekeeperSpecific = this._v_HousekeepersSpecific[ aHousekeeperSpecificIdx];
                            if( aHousekeeperSpecific) {

                                var someHousekeepingsSpecific = aHousekeeperSpecific.fPerformHousekeepingAttemptSpecific(
                                    aHousekeepingAttempt, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher);

                                if( someHousekeepingsSpecific) {

                                    var aNumHousekeepingsSpecific = someHousekeepingsSpecific.length;
                                    if( aNumHousekeepingsSpecific) {

                                        for( var aHousekeepingSpecificIdx=0; aHousekeepingSpecificIdx < aNumHousekeepingsSpecific; aHousekeepingSpecificIdx++) {

                                            var aHousekeepingSpecific = someHousekeepingsSpecific[ aHousekeepingSpecificIdx];
                                            if( aHousekeepingSpecific) {

                                                var someActionableRecommendations = aHousekeepingSpecific.fActionableRecommendations();

                                                if( someActionableRecommendations) {

                                                    var aNumActionableRecommendations = someActionableRecommendations.length;
                                                    if( aNumActionableRecommendations) {

                                                        Array.prototype.push.apply( allActionableRecommendations, someActionableRecommendations);
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




                if( !( allActionableRecommendations && allActionableRecommendations.length)) {

                    aHousekeepingAttempt._v_HousekeepingPerformed = true;
                    aHousekeepingAttempt._v_HousekeepingSuccess = true;

                    return aHousekeepingAttempt;
                }





                if( !this.fPerformRecommendedActions( allActionableRecommendations,
                    aHousekeepingAttempt, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher)) {

                    aHousekeepingAttempt._v_HousekeepingSuccess = false;
                    aHousekeepingAttempt._v_HousekeepingStatus  = "NOTALLACTIONSPERFORMED";

                    this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGATTEMPTFAILED, aHousekeepingAttempt, null, null);

                    return aHousekeepingAttempt;
                }


                aHousekeepingAttempt._v_HousekeepingPerformed = true;
                aHousekeepingAttempt._v_HousekeepingSuccess = true;

                this.fRecord( this._v_Type, this._v_HousekeeperTitle, this, aMethodName, this.HOUEVKIND_HOUSEKEEPINGATTEMPTPERFORMED, aHousekeepingAttempt, null, null);

                return aHousekeepingAttempt;

            };
            if( fPerformHousekeepingAttempt){}/* CQT */
            aPrototype.fPerformHousekeepingAttempt = fPerformHousekeepingAttempt;










            var fPerformRecommendedActions = function( theActionableRecommendations,
                                                       theHousekeepingAttempt,
                                                       theHousekeeping,
                                                       theLauncherMany,
                                                       theIsFirst,
                                                       theLastSubLauncher) {

                if( !theActionableRecommendations) {
                    return true;
                }

                var aNumActionableRecommendations = theActionableRecommendations.length;
                if( !aNumActionableRecommendations) {
                    return true;
                }


                if( !theHousekeepingAttempt) {
                    return false;
                }

                if( !theHousekeeping) {
                    return false;
                }


                var someSortedActionableRecommendations = theActionableRecommendations.slice();
                someSortedActionableRecommendations.sort( function( theR1, theR2) {
                    if( !theR1 && !theR2) {
                        return 0;
                    }

                    if( !theR1) {
                        return 1;
                    }

                    if( !theR2) {
                        return 0;
                    }

                    if( !theR1._v_RecommendedActionPriority && !theR2._v_RecommendedActionPriority) {
                        return 0;
                    }

                    if( !theR1._v_RecommendedActionPriority) {
                        return 1;
                    }

                    if( !theR2._v_RecommendedActionPriority) {
                        return 0;
                    }

                    var aRes = theR2._v_RecommendedActionPriority - theR1._v_RecommendedActionPriority;
                    if( aRes) {
                        return aRes;
                    }

                    if( !theR1._v_RecommendedActionHousekeeperSpecificKind && !theR2._v_RecommendedActionHousekeeperSpecificKind) {
                        return 0;
                    }

                    if( !theR1._v_RecommendedActionHousekeeperSpecificKind) {
                        return 0;
                    }

                    if( !theR2._v_RecommendedActionHousekeeperSpecificKind) {
                        return 1;
                    }

                    if( theR1._v_RecommendedActionHousekeeperSpecificKind < theR2._v_RecommendedActionHousekeeperSpecificKind) {
                        return -1;
                    }

                    if( theR1._v_RecommendedActionHousekeeperSpecificKind > theR2._v_RecommendedActionHousekeeperSpecificKind) {
                        return 1;
                    }

                    return 0;
                });


                var anAllActionsPerformed = true;

                for( var aActionableRecommendationIdx=0; aActionableRecommendationIdx < aNumActionableRecommendations; aActionableRecommendationIdx++) {

                    var anActionableRecommendation = someSortedActionableRecommendations[ aActionableRecommendationIdx];
                    if( anActionableRecommendation) {

                        if( anActionableRecommendation.fIsActionable() || !anActionableRecommendation.fRecommendsGiveUp()) {

                            if( anActionableRecommendation._v_RecommendedActionHousekeeperSpecificKind) {

                                if( this._v_HousekeepersSpecificByKind) {

                                    var anActionHousekeeper = this._v_HousekeepersSpecificByKind[ anActionableRecommendation._v_RecommendedActionHousekeeperSpecificKind];
                                    if( anActionHousekeeper) {

                                        if( !anActionHousekeeper.fPerformRecommendedAction(
                                            anActionableRecommendation,
                                            theHousekeepingAttempt, theHousekeeping, theLauncherMany, theIsFirst, theLastSubLauncher)) {

                                            anAllActionsPerformed = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                return anAllActionsPerformed;

            };
            if( fPerformRecommendedActions){}/* CQT */
            aPrototype.fPerformRecommendedActions = fPerformRecommendedActions;









            return aPrototype;

        })();




        var HousekeeperMaster_Constructor = function( theTitle,
                                                      theHousekeeperIdentifier,
                                                      theHousekeeperRecorder,
                                                      theHousekeepOptions,
                                                      theHousekeptLauncher,
                                                      theSnapshottersByKind) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepergeneral.HousekeeperGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._v_TestHousekeepingFile = null;
            this._v_TestHousekeeping     = null;

            this._v_HousekeepersSpecific       = null;
            this._v_HousekeepersSpecificByKind = null;
            this._v_HousekeeperMemory          = null;

            this._v_SnapshottersByKind = null;

            this._v_Housekeepings = null;
            

            this._pInit_HousekeeperMaster( theTitle,
                                           theHousekeeperIdentifier,
                                           theHousekeeperRecorder,
                                           theHousekeepOptions,
                                           theHousekeptLauncher,
                                           theSnapshottersByKind);

        };
        HousekeeperMaster_Constructor.prototype = aHousekeeperMaster_Prototype;





        var HousekeeperMaster_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_housekeepergeneral.HousekeeperGeneral_Prototype;

            this._v_Prototype = aHousekeeperMaster_Prototype;
            this._v_Type = null;


            this._v_TestHousekeepingFile = null;
            this._v_TestHousekeeping     = null;

            this._v_HousekeepersSpecific       = null;
            this._v_HousekeepersSpecificByKind = null;
            this._v_HousekeeperMemory          = null;

            this._v_SnapshottersByKind = null;

            this._v_Housekeepings = null;
        };
        HousekeeperMaster_SuperPrototypeConstructor.prototype = aHousekeeperMaster_Prototype;



        var aModule = {
            "HousekeeperMaster_Prototype": aHousekeeperMaster_Prototype,
            "HousekeeperMaster_Constructor": HousekeeperMaster_Constructor,
            "HousekeeperMaster_SuperPrototypeConstructor": HousekeeperMaster_SuperPrototypeConstructor
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

            var aM_housekeepconstants          = require('./housekeep-constants');
            var aM_housekeepergeneral          = require('./housekeeper-general');
            var aM_housekeepermemory           = require('./housekeeper-memory');
            var aM_housekeepingmaster          = require('./housekeeping-master');
            var aM_housekeepingattempt         = require('./housekeeping-attempt');
            var aM_snapshottermemory           = require('./snapshotter-memory');
            var aM_snapshottermemory_fake      = require('./snapshotter-memory-fake');
            var aM_housekeepingrecommendation  = require('./housekeeping-recommendation');
            var aM_housekeepingaction          = require('./housekeeping-action');
            var aM_housekeepingcheckmaster     = require('./housekeeping-check-master');
            var aM_specloader                  = require('../resloader/specloader');
            var aM_overrider                   = require('../overrider');

            return aMod_definer(
                aM_housekeepconstants,
                aM_housekeepergeneral,
                aM_housekeepermemory,
                aM_housekeepingmaster,
                aM_housekeepingattempt,
                aM_snapshottermemory,
                aM_snapshottermemory_fake,
                aM_housekeepingrecommendation,
                aM_housekeepingaction,
                aM_housekeepingcheckmaster,
                aM_specloader,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./housekeep-constants",
            "./housekeeper-general",
            "./housekeeper-memory",
            "./housekeeping-master",
            "./housekeeping-attempt",
            "./snapshotter-memory",
            "./snapshotter-memory-fake",
            "./housekeeping-recommendation",
            "./housekeeping-action",
            "./housekeeping-check-master",
            "../resloader/specloader",
            "../overrider"
        ], function (
                theM_housekeepconstants,
                theM_housekeepergeneral,
                theM_housekeepermemory,
                theM_housekeepingmaster,
                theM_housekeepingattempt,
                theM_snapshottermemory,
                theM_snapshottermemory_fake,
                theM_housekeepingrecommendation,
                theM_housekeepingaction,
                theM_housekeepingcheckmaster,
                theM_specloader,
                theM_overrider
            ) {
            return aMod_definer(
                theM_housekeepconstants,
                theM_housekeepergeneral,
                theM_housekeepermemory,
                theM_housekeepingmaster,
                theM_housekeepingattempt,
                theM_snapshottermemory,
                theM_snapshottermemory_fake,
                theM_housekeepingrecommendation,
                theM_housekeepingaction,
                theM_housekeepingcheckmaster,
                theM_specloader,
                theM_overrider
            );
        });
    }


}());


