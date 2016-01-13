'use strict';

/*
 ctrlrecorder.js
 Creado 201408081950
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

    var aMod_definer = function( theM_ctrlidentified,
                                 theM_exceptiondetails,
                                 theM_overrider,
                                 theM_ctrleventkinds,
                                 theM_ctrlidentifier,
                                 theM_ctrlrecord) {


        var ModuleName     = "ctrlrecorder";
        var ModulePackages = "ctrlserver/common-ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.RECORDINITS= true;

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









        var anCtrlRecorder_Prototype = (function() {


            var aPrototype = new theM_ctrlidentified.CtrlIdentified_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_ctrlidentified.CtrlIdentified_Prototype;

            aPrototype._v_Type = "CtrlRecorder";

            aPrototype._v_Module = null;


            aPrototype._v_RecordsIdentifier = null;
            aPrototype._v_Records           = null;







            var _pInit = function( theTitle, theIdentifier) {

                this._pInit_CtrlRecorder( theTitle, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_CtrlRecorder = function( theTitle, theIdentifier) {

                var aMethodName = "_pInit_CtrlRecorder";

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CtrlIdentified.apply( this, [ theTitle, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Module = aPrototype._v_Module;

                this._v_RecordsIdentifier = null;
                this._v_Records           = [ ];

                if( this.RECORDINITS) {
                    this.fCreateAndRegisterRecord( aMethodName, theM_ctrleventkinds, this, null, null);
                }
            };
            if( _pInit_CtrlRecorder){}/* CQT */
            aPrototype._pInit_CtrlRecorder = _pInit_CtrlRecorder;










            var fCreateAndRegisterRecord = function( theInstance, theMethodName, theEventKind, theData, theReason, theDetail) {

                if( this._v_RecordsIdentifier == null) {
                    this.pInitializeRecordsIdentifier();
                }

                var aRecordId = this._v_RecordsIdentifier.fReserveId();

                var aRecord = new theM_ctrlrecord.CtrlRecord_Constructor( aRecordId, theInstance, theMethodName, theEventKind, theData, theReason, theDetail);
                this._v_Records.push( aRecord);

                return aRecord;
            };
            if( fCreateAndRegisterRecord){}/* CQT */
            aPrototype.fCreateAndRegisterRecord = fCreateAndRegisterRecord;









            var pInitializeRecordsIdentifier = function( ) {

                if( !( this._v_RecordsIdentifier == null)) {
                    return;
                }

                var anIdentifierId = this._v_Identifier.fReserveId();

                this._v_RecordsIdentifier = new theM_ctrlidentifier.CtrlIdentifier_Constructor(
                    "For-" + this._v_Module.ModuleFullName + ":" + this._v_Title,
                    anIdentifierId
                );
            };
            if( pInitializeRecordsIdentifier){}/* CQT */
            aPrototype.pInitializeRecordsIdentifier = pInitializeRecordsIdentifier;









            return aPrototype;

        })();




        var CtrlRecorder_Constructor = function( theTitle, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlidentified.CtrlIdentified_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_RecordsIdentifier = null;
            this._v_Records           = null;

            this._pInit_CtrlRecorder( theTitle, theIdentifier);
        };
        CtrlRecorder_Constructor.prototype = anCtrlRecorder_Prototype;





        var CtrlRecorder_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_ctrlidentified.CtrlIdentified_Prototype;

            this._v_Prototype = anCtrlRecorder_Prototype;
            this._v_Type = null;
            this._v_Module = null;

            this._v_RecordsIdentifier = null;
            this._v_Records           = null;
        };
        CtrlRecorder_SuperPrototypeConstructor.prototype = anCtrlRecorder_Prototype;








        var aModule = {
            "CtrlRecorder_Prototype": anCtrlRecorder_Prototype,
            "CtrlRecorder_Constructor": CtrlRecorder_Constructor,
            "CtrlRecorder_SuperPrototypeConstructor": CtrlRecorder_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        anCtrlRecorder_Prototype._v_Module = aModule;


        return aModule;

    };




    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_ctrlidentified    = require('./ctrlidentified');
            var aM_exceptiondetails  = require('../../common-test/exceptiondetails');
            var aM_overrider         = require('../../common-test/overrider');
            var aM_ctrleventkinds    = require('./ctrleventkinds');
            var aM_ctrlidentifier    = require('./ctrlidentifier');
            var aM_ctrlrecord        = require('./ctrlrecord');

            return aMod_definer(
                aM_ctrlidentified,
                aM_exceptiondetails,
                aM_overrider,
                aM_ctrleventkinds,
                aM_ctrlidentifier,
                aM_ctrlrecord
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./ctrlidentified",
            "../../common-test/exceptiondetails",
            "../../common-test/overrider",
            "./ctrleventkinds",
            "./ctrlidentifier"
        ], function (
            theM_ctrlidentified,
            theM_exceptiondetails,
            theM_overrider,
            theM_ctrleventkinds,
            theM_ctrlidentifier,
            theM_ctrlrecord
            ) {
            return aMod_definer(
                theM_ctrlidentified,
                theM_exceptiondetails,
                theM_overrider,
                theM_ctrleventkinds,
                theM_ctrlidentifier,
                theM_ctrlrecord
            );
        });
    }


}());


