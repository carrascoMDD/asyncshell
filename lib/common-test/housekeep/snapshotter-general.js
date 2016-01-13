'use strict';

/*
 snapshotter-general.js
 Creado 201504101650
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


(function() {

    var aMod_definer = function( theM_platformmemory,
                                 theM_exceptiondetails,
                                 theM_overrider) {



        var ModuleName     = "snapshotter-general";
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








        var aSnapshotterGeneral_Prototype = (function() {


            var aPrototype = {};
            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "SnapshotterGeneral";



            aPrototype._v_Title             = null;

            aPrototype._v_Snapshots         = null;
            aPrototype._v_SnapshotsByMoment = null;







            var _pInit = function( theTitle) {

                this._pInit_SnapshotterGeneral( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_SnapshotterGeneral = function( theTitle) {
                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */
                this._v_Type = aPrototype._v_Type;

                this._v_Title = theTitle;
                if( this._v_Title == null) {
                    this._v_Title = "";
                }


                this._v_Snapshots         = [ ];
                this._v_SnapshotsByMoment = { };

            };
            if( _pInit_SnapshotterGeneral){}/* CQT */
            aPrototype._pInit_SnapshotterGeneral = _pInit_SnapshotterGeneral;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SnapshotterGeneral( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;







            var _pRelease_SnapshotterGeneral = function( theReleaseParms, theReleaseDone) {
                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */

                this._v_Title               = undefined;

                this._v_Snapshots           = undefined;

                this._v_SnapshotsByMoment   = undefined;
            };
            if( _pRelease_SnapshotterGeneral){}/* CQT */
            aPrototype._pRelease_SnapshotterGeneral = _pRelease_SnapshotterGeneral;








            var fIsFakeSnapshotter = function() {

                return false;
            };
            if( fIsFakeSnapshotter){}/* CQT */
            aPrototype.fIsFakeSnapshotter = fIsFakeSnapshotter;










            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = this.fIdentifyingWithTitleJSON();
                if( aResultJSON){}/* CQT */

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;








            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "type": this._v_Type,
                    "title":  this._v_Title
                };
                if( aIdentifiyingJSON){}/* CQT */

                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;








            var fIdentifyingWithTitleJSON = function() {

                var aIdentifiyingJSON = this.fIdentifyingJSON();

                if( !( this._v_Title == null)) {
                    aIdentifiyingJSON.title = this._v_Title;
                }

                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingWithTitleJSON){}/* CQT */
            aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






            var fIdentifyingString = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingString){}/* CQT */
            aPrototype.fIdentifyingString = fIdentifyingString;








            var fIdentifyingWithTitleString = function() {

                var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingWithTitleString){}/* CQT */
            aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;











            var fExceptionDetail = function( theException) {
                return theM_exceptiondetails.fExceptionDetail( theException);
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;














            var fExtractSnapshotNow = function( theHousekeeper, theMoment, theHousekeepingAttemptIndex, theLastSubLauncher) {
                if( theHousekeepingAttemptIndex){}/* CQT */
                if( theLastSubLauncher){}/* CQT */

                if( !theMoment) {
                    return null;
                }

                var aSnapshot = this.fNewSnapshot( theMoment);
                if( !aSnapshot) {
                    return null;
                }

                this.pAddSnapshot( aSnapshot);

                return aSnapshot;

            };
            if( fExtractSnapshotNow){}/* CQT */
            aPrototype.fExtractSnapshotNow = fExtractSnapshotNow;









            var fSnapshot_fAsLogObject = function() {
                return this;
            };




            var fNewSnapshot = function( theMoment) {

                var aSnapshot = {
                    "success":        false,
                    "snapshotMoment": theMoment,
                    "snapshotTime":   new Date()
                };

                aSnapshot.fAsLogObject = fSnapshot_fAsLogObject.bind( aSnapshot);

                return aSnapshot;

            };
            if( fNewSnapshot){}/* CQT */
            aPrototype.fNewSnapshot = fNewSnapshot;












            var pAddSnapshot = function( theSnapshot) {

                if( !theSnapshot) {
                    return;
                }

                if( !this._v_Snapshots) {
                    return;
                }

                if( this._v_Snapshots.indexOf( theSnapshot) >= 0) {
                    return;
                }

                this._v_Snapshots.push( theSnapshot);

                var aSnapshotMoment = theSnapshot[ "snapshotMoment"];
                if( aSnapshotMoment) {
                    this._v_SnapshotsByMoment[ aSnapshotMoment] = theSnapshot;
                }

            };
            if( pAddSnapshot){}/* CQT */
            aPrototype.pAddSnapshot = pAddSnapshot;








            return aPrototype;

        })();




        var SnapshotterGeneral_Constructor = function( theTitle) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Title               = null;
            this._v_Snapshots           = null;
            this._v_SnapshotsByMoment   = null;

            this._pInit_SnapshotterGeneral( theTitle);
        };
        SnapshotterGeneral_Constructor.prototype = aSnapshotterGeneral_Prototype;





        var SnapshotterGeneral_SuperPrototypeConstructor = function() {
            this._v_Prototype = aSnapshotterGeneral_Prototype;
            this._v_Type = null;

            this._v_Title               = null;
            this._v_Snapshots           = null;
            this._v_SnapshotsByMoment   = null;
        };
        SnapshotterGeneral_SuperPrototypeConstructor.prototype = aSnapshotterGeneral_Prototype;





        var aModule = {
            "SnapshotterGeneral_Prototype": aSnapshotterGeneral_Prototype,
            "SnapshotterGeneral_Constructor": SnapshotterGeneral_Constructor,
            "SnapshotterGeneral_SuperPrototypeConstructor": SnapshotterGeneral_SuperPrototypeConstructor
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


            var aM_platformmemory   = require('../../infrasvcs/memory/memory');
            var aM_exceptiondetails = require('../exceptiondetails');
            var aM_overrider        = require('../overrider');

            return aMod_definer(
                aM_platformmemory,
                aM_exceptiondetails,
                aM_overrider);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../infrasvcs/memory/memory",
            "../exceptiondetails",
            "../overrider"
        ], function (
            theM_platformmemory,
            theM_exceptiondetails,
            theM_overrider
            ) {
            return aMod_definer(
                theM_platformmemory,
                theM_exceptiondetails,
                theM_overrider
            );
        });
    }

})();

