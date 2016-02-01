'use strict';

/*
 specscanner-general.js
 Created 201504071846
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


(function() {

    var aMod_definer = function( theM_launchergeneral,
                                 theM_sentinels) {

        var ModuleName     = "specscanner-general";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}




        var aSpecscannerGeneral_Prototype = (function() {


            var aPrototype = new theM_launchergeneral.LauncherGeneral_SuperPrototypeConstructor();



            aPrototype._v_SuperPrototype = theM_launchergeneral.LauncherGeneral_Prototype;


            aPrototype._v_Type = "SpecscannerGeneral";


            aPrototype._v_RunOptions = null;

            aPrototype._v_IsTopScanner = null;





            var _pInit = function( theTitle,
                                   theIdentifier,
                                   theRecorder,
                                   theRunOptions,
                                   theIsTopScanner) {

                this._pInit_SpecscannerGeneral( theTitle,
                                                theIdentifier,
                                                theRecorder,
                                                theRunOptions,
                                                theIsTopScanner);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_SpecscannerGeneral = function( theTitle,
                                                      theIdentifier,
                                                      theRecorder,
                                                      theRunOptions,
                                                      theIsTopScanner) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_LauncherGeneral.apply( this, [ theTitle, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_RunOptions = theRunOptions;

                this._v_IsTopScanner = theIsTopScanner;
            };
            if( _pInit_SpecscannerGeneral){}/* CQT */
            aPrototype._pInit_SpecscannerGeneral = _pInit_SpecscannerGeneral;











            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_SpecscannerGeneral( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_SpecscannerGeneral = function( theReleaseParms, theReleaseDone) {

                this._v_RunOptions = undefined;

                this._v_IsTopScanner = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_LauncherGeneral.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_SpecscannerGeneral){}/* CQT */
            aPrototype._pRelease_SpecscannerGeneral = _pRelease_SpecscannerGeneral;






            return aPrototype;

        })();






        var SpecscannerGeneral_Constructor = function( theTitle,
                                                       theIdentifier,
                                                       theRecorder,
                                                       theRunOptions,
                                                       theIsTopScanner) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_launchergeneral.LauncherGeneral_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_RunOptions = null;

            this._v_IsTopScanner = null;


            this._pInit_SpecscannerGeneral( theTitle,
                                            theIdentifier,
                                            theRecorder,
                                            theRunOptions,
                                            theIsTopScanner);
        };
        SpecscannerGeneral_Constructor.prototype = aSpecscannerGeneral_Prototype;





        var SpecscannerGeneral_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_launchergeneral.LauncherGeneral_Prototype;

            this._v_Prototype = aSpecscannerGeneral_Prototype;
            this._v_Type = null;

            this._v_RunOptions = null;

            this._v_IsTopScanner = null;

        };
        SpecscannerGeneral_SuperPrototypeConstructor.prototype = aSpecscannerGeneral_Prototype;














        var aModule = {
            "SpecscannerGeneral_Prototype": aSpecscannerGeneral_Prototype,
            "SpecscannerGeneral_Constructor": SpecscannerGeneral_Constructor,
            "SpecscannerGeneral_SuperPrototypeConstructor": SpecscannerGeneral_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





        return aModule;
    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_launchergeneral   = require('./launcher-general');
            var aM_sentinels         = require('../sentinels');

            return aMod_definer(
                aM_launchergeneral,
                aM_sentinels
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./launcher-general",
            "../sentinels"
        ], function (
                theM_launchergeneral,
                theM_sentinels
            ) {
            return aMod_definer(
                theM_launchergeneral,
                theM_sentinels
            );
        });
    }

})();

