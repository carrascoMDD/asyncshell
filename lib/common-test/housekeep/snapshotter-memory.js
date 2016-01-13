'use strict';

/*
 snapshotter-memory.js
 Creado 201504101651
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
    var aMod_definer = function( theM_snapshottergeneral,
                                 theM_platformmemory,
                                 theM_overrider) {

        var ModuleName     = "snapshotter-memory";
        var ModulePackages = "common-test/housekeep";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.GARBAGECOLLECTBEFORESNAPSHOTMEMORY = true;

            theToInit.LOGSNAPHSOTS_MEMORY = true;
            theToInit.LOGGARBAGECOLLECT   = true;


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







        var aSnapshotterMemory_Prototype = (function() {


            var aPrototype = new theM_snapshottergeneral.SnapshotterGeneral_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_snapshottergeneral.SnapshotterGeneral_Prototype;

            aPrototype._v_Type = "SnapshotterMemory";








            var _pInit = function( theTitle) {

                this._pInit_SnapshotterMemory( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_SnapshotterMemory = function( theTitle) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_SnapshotterGeneral.apply( this, [ theTitle]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

            };
            if( _pInit_SnapshotterMemory){}/* CQT */
            aPrototype._pInit_SnapshotterMemory = _pInit_SnapshotterMemory;









            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SnapshotterMemory( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_SnapshotterMemory = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_SnapshotterGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SnapshotterMemory){}/* CQT */
            aPrototype._pRelease_SnapshotterMemory = _pRelease_SnapshotterMemory;











            var fExtractSnapshotNow = function( theHousekeeper, theMoment, theHousekeepingAttemptIndex, theLastSubLauncher) {
                if( theLastSubLauncher){}/* CQT */

                var aMethodName = "fExtractSnapshotNow";

                if( !theMoment) {
                    return null;
                }


                if( this.GARBAGECOLLECTBEFORESNAPSHOTMEMORY) {
                    this.pGarbageCollect( theHousekeeper, theMoment);
                }


                var aMemoryReport = theM_platformmemory.fMemoryReport();
                if( !aMemoryReport) {
                    return null;
                }

                var aSnapshot = this.fNewSnapshot( theMoment);
                if( !aSnapshot) {
                    return null;
                }


                aSnapshot[ "memoryReport"] = aMemoryReport;
                aSnapshot[ "attemptIndex"] = theHousekeepingAttemptIndex;
                aSnapshot[ "success"]      =  true;


                this.pAddSnapshot( aSnapshot);


                if( this.LOGSNAPHSOTS_MEMORY) {
                    if( theHousekeeper) {
                        theHousekeeper.fRecord( this._v_Type, this._v_Title, this, aMethodName, theHousekeeper.HOUEVKIND_SNAPSHOTMEMORY, aSnapshot, theMoment, null);
                    }
                }

                return aSnapshot;

            };
            if( fExtractSnapshotNow){}/* CQT */
            aPrototype.fExtractSnapshotNow = fExtractSnapshotNow;








            var pGarbageCollect = function( theHousekeeper, theMoment) {

                var aMethodName = "pGarbageCollect";

                if( this.LOGGARBAGECOLLECT) {
                    if( theHousekeeper) {
                        theHousekeeper.fRecord( this._v_Type, this._v_Title, this, aMethodName, theHousekeeper.HOUEVKIND_GARBAGECOLLECT, theMoment, null, null);
                    }
                }

                var aGarbageCollectResult = theM_platformmemory.fGarbageCollect();
                if( aGarbageCollectResult){}/* CQT */
            };
            if( pGarbageCollect){}/* CQT */
            aPrototype.pGarbageCollect = pGarbageCollect;










            return aPrototype;

        })();




        var SnapshotterMemory_Constructor = function( theTitle) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_snapshottergeneral.SnapshotterGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;


            this._pInit_SnapshotterMemory( theTitle);

        };
        SnapshotterMemory_Constructor.prototype = aSnapshotterMemory_Prototype;





        var SnapshotterMemory_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_snapshottergeneral.SnapshotterGeneral_Prototype;

            this._v_Prototype = aSnapshotterMemory_Prototype;
            this._v_Type = null;
        };
        SnapshotterMemory_SuperPrototypeConstructor.prototype = aSnapshotterMemory_Prototype;



        var aModule = {
            "SnapshotterMemory_Prototype": aSnapshotterMemory_Prototype,
            "SnapshotterMemory_Constructor": SnapshotterMemory_Constructor,
            "SnapshotterMemory_SuperPrototypeConstructor": SnapshotterMemory_SuperPrototypeConstructor
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

            var aM_snapshottergeneral = require('./snapshotter-general');
            var aM_platformmemory     = require('../../infrasvcs/memory/memory');
            var aM_overrider          = require('../overrider');

            return aMod_definer(
                aM_snapshottergeneral,
                aM_platformmemory,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./snapshotter-general",
            "../../infrasvcs/memory/memory",
            "../overrider"
        ], function (
                theM_snapshottergeneral,
                theM_platformmemory,
                theM_overrider
            ) {
            return aMod_definer(
                theM_snapshottergeneral,
                theM_platformmemory,
                theM_overrider
            );
        });
    }


}());


