'use strict';

/*
 snapshotter-memory-fake.js
 Creado 20150410152
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
    var aMod_definer = function( theM_snapshottermemory,
                                 theM_platformmemory,
                                 theM_overrider) {

        var ModuleName     = "snapshotter-memory-fake";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








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







        var aSnapshotterMemoryFake_Prototype = (function() {


            var aPrototype = new theM_snapshottermemory.SnapshotterMemory_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_snapshottermemory.SnapshotterMemory_Prototype;

            aPrototype._v_Type = "SnapshotterMemoryFake";


            aPrototype._v_TestHousekeeping = null;

            aPrototype._v_TestsByMomentAndSpecPath = null;






            var _pInit = function( theTitle,
                                   theTestHousekeeping) {

                this._pInit_SnapshotterMemoryFake( theTitle,
                                                   theTestHousekeeping);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_SnapshotterMemoryFake = function( theTitle, theTestHousekeeping) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SnapshotterMemory.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_TestHousekeeping = theTestHousekeeping;


                this._pInit_TestsByMomentAndSpecPath();

            };
            if( _pInit_SnapshotterMemoryFake){}/* CQT */
            aPrototype._pInit_SnapshotterMemoryFake = _pInit_SnapshotterMemoryFake;








            var _pInit_TestsByMomentAndSpecPath = function() {

                if( !this._v_TestHousekeeping) {
                    return;
                }


                this._v_TestsByMomentAndSpecPath = { };


                var aNumTestHousekeepings = this._v_TestHousekeeping.length;
                if( !aNumTestHousekeepings) {
                    return;
                }

                for( var aTestHousekeepingIdx=0; aTestHousekeepingIdx < aNumTestHousekeepings; aTestHousekeepingIdx++) {

                    var aTestHousekeeping = this._v_TestHousekeeping[ aTestHousekeepingIdx];
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









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SnapshotterMemoryFake( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_SnapshotterMemoryFake = function( theReleaseParms, theReleaseDone) {

                this._v_TestHousekeeping = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SnapshotterMemory.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SnapshotterMemoryFake){}/* CQT */
            aPrototype._pRelease_SnapshotterMemoryFake = _pRelease_SnapshotterMemoryFake;










            var fIsFakeSnapshotter = function() {

                return true;
            };
            if( fIsFakeSnapshotter){}/* CQT */
            aPrototype.fIsFakeSnapshotter = fIsFakeSnapshotter;












            var fExtractSnapshotNow = function( theHousekeeper, theMoment, theHousekeepingAttemptIndex, theLastSubLauncher) {

                var aMethodName = "fExtractSnapshotNow";

                if( !theMoment) {
                    return null;
                }


                if( !this._v_TestsByMomentAndSpecPath) {
                    return null;
                }


                var someTestsOfMoment = this._v_TestsByMomentAndSpecPath[ theMoment];
                if( !someTestsOfMoment) {
                    return null;
                }



                var aSourceFakeSnapshot = null;

                if( !theLastSubLauncher) {

                    var aTestOfMoment = someTestsOfMoment[ "test"];
                    if( !aTestOfMoment) {
                        return null;
                    }

                    var aMoment = aTestOfMoment[ "moment"];
                    if( !aMoment) {
                        return null;
                    }
                    if( !( aMoment == theMoment)) {
                        return null;
                    }

                    aSourceFakeSnapshot = aTestOfMoment[ "snapshot"];

                }
                else {

                    var aSpecPath = theLastSubLauncher.fSpecPath();
                    if( !aSpecPath) {
                        return null;
                    }

                    var somePathsOfMoment = someTestsOfMoment[ "paths"];
                    if( !somePathsOfMoment) {
                        return null;
                    }

                    var aTestOfPath = somePathsOfMoment[ aSpecPath];
                    if( !aTestOfPath) {
                        return null;
                    }

                    var aMomentTestOfPath = aTestOfPath[ "moment"];
                    if( !aMomentTestOfPath) {
                        return null;
                    }
                    if( !( aMomentTestOfPath == theMoment)) {
                        return null;
                    }

                    var someAttemptsOfPath =  aTestOfPath[ "attempts"];
                    if( !someAttemptsOfPath) {
                        return null;
                    }

                    var aNumAttemptsOfPath = someAttemptsOfPath.length;
                    if( !aNumAttemptsOfPath) {
                        return null;
                    }

                    var aHousekeepingAttemptIndex = theHousekeepingAttemptIndex;
                    if( !aHousekeepingAttemptIndex) {
                        aHousekeepingAttemptIndex = 0;
                    }
                    if( aHousekeepingAttemptIndex < 0) {
                        return null;
                    }
                    if( aHousekeepingAttemptIndex >= aNumAttemptsOfPath) {
                        return null;
                    }

                    var aHousekeepingAttempt = someAttemptsOfPath[ aHousekeepingAttemptIndex];
                    if( !aHousekeepingAttempt) {
                        return null;
                    }

                    aSourceFakeSnapshot = aHousekeepingAttempt[ "snapshot"];
                }


                if( !aSourceFakeSnapshot) {
                    return null;
                }




                var aNewSnapshot = this.fNewSnapshot();
                Object.keys( aSourceFakeSnapshot).forEach( function( theKey) {
                    aNewSnapshot[ theKey] = aSourceFakeSnapshot[ theKey];
                });

                aNewSnapshot[ "snapshotMoment"]  = theMoment;
                aNewSnapshot[ "attemptIndex"] = theHousekeepingAttemptIndex;
                aNewSnapshot[ "success"] = true;
                aNewSnapshot[ "fake"]    = true;


                this.pAddSnapshot( aNewSnapshot);


                if( this.LOGSNAPHSOTS_MEMORY) {
                    if( theHousekeeper) {
                        theHousekeeper.fRecord( this._v_Type, this._v_Title, this, aMethodName, theHousekeeper.HOUEVKIND_SNAPSHOTMEMORY, aNewSnapshot, theMoment, aSpecPath);
                    }
                }

                return aNewSnapshot;

            };
            if( fExtractSnapshotNow){}/* CQT */
            aPrototype.fExtractSnapshotNow = fExtractSnapshotNow;









            return aPrototype;

        })();




        var SnapshotterMemoryFake_Constructor = function( theTitle,
                                                          theTestHousekeeping) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_snapshottermemory.SnapshotterMemory_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_TestHousekeeping = null;

            this._pInit_SnapshotterMemoryFake( theTitle, theTestHousekeeping);

        };
        SnapshotterMemoryFake_Constructor.prototype = aSnapshotterMemoryFake_Prototype;





        var SnapshotterMemoryFake_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_snapshottermemory.SnapshotterMemory_Prototype;

            this._v_Prototype = aSnapshotterMemoryFake_Prototype;
            this._v_Type = null;

            this._v_TestHousekeeping = null;
        };
        SnapshotterMemoryFake_SuperPrototypeConstructor.prototype = aSnapshotterMemoryFake_Prototype;



        var aModule = {
            "SnapshotterMemoryFake_Prototype": aSnapshotterMemoryFake_Prototype,
            "SnapshotterMemoryFake_Constructor": SnapshotterMemoryFake_Constructor,
            "SnapshotterMemoryFake_SuperPrototypeConstructor": SnapshotterMemoryFake_SuperPrototypeConstructor
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

            var aM_snapshottermemory = require('./snapshotter-memory');
            var aM_platformmemory     = require('../../infrasvcs/memory/memory');
            var aM_overrider          = require('../overrider');

            return aMod_definer(
                aM_snapshottermemory,
                aM_platformmemory,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./snapshotter-memory",
            "../../infrasvcs/memory/memory",
            "../overrider"
        ], function (
            theM_snapshottermemory,
            theM_platformmemory,
            theM_overrider
            ) {
            return aMod_definer(
                theM_snapshottermemory,
                theM_platformmemory,
                theM_overrider
            );
        });
    }


}());


