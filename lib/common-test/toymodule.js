'use strict';

/*
 common-test.js
 Creado 201408050911
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
    var aMod_definer = function( ) {

        var ModuleName     = "toymodule";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}





        var aToyModule_Prototype = (function() {


            var aPrototype = {};




            aPrototype._v_Type = "ToyModule";

            aPrototype._v_Prototype_ToyModule = aPrototype;




            var _pInit = function( theTitle) {

                this._pInit_ToyModule( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ToyModule = function( theTitle) {
                if( theTitle){}/* CQT */

                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */
                this._v_Type = aPrototype._v_Type;
            };
            if( _pInit_ToyModule){}/* CQT */
            aPrototype._pInit_ToyModule = _pInit_ToyModule;









            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "type": this._v_Type
                };
                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;






            var fIdentifyingString = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingString){}/* CQT */
            aPrototype.fIdentifyingString = fIdentifyingString;







            var fIdentifyingWithTitleJSON = function() {

                return this.fIdentifyingJSON();
            };
            if( fIdentifyingWithTitleJSON){}/* CQT */
            aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






            var fIdentifyingWithTitleString = function() {

                var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingWithTitleString){}/* CQT */
            aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;









            var fToResultJSON = function( theToyModuleObjects, theAlready) {
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








            var pF_Toy = function( theCallback) {
                var aMethodName = "pF_Toy";
                if( aMethodName){}/* CQT */

                console.log( "," + JSON.stringify( { "toy": "TOY"}));

                theCallback();

            };
            if( pF_Toy){}/* CQT */
            aPrototype.pF_Toy = pF_Toy;







            return aPrototype;

        })();




        var ToyModule_Constructor = function() {
            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_ToyModule();

        };
        ToyModule_Constructor.prototype = aToyModule_Prototype;





        var ToyModule_SuperPrototypeConstructor = function() {
            this._v_Prototype = aToyModule_Prototype;
            this._v_Type = null;
        };
        ToyModule_SuperPrototypeConstructor.prototype = aToyModule_Prototype;



        var aModule = {
            "ToyModule_Prototype": aToyModule_Prototype,
            "ToyModule_Constructor": ToyModule_Constructor,
            "ToyModule_SuperPrototypeConstructor": ToyModule_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            return aMod_definer( );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( function () {
            return aMod_definer();
        });
    }



}());