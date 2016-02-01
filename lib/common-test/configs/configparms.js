'use strict';

/*
 configparms.js
 Created 201408122334
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

    var aMod_definer =function( theM_parsedconfig,
                                theM_parmsparser,
                                theM_sentinels,
                                theM_traversals) {


        var ModuleName     = "configparms";
        var ModulePackages = "common-test/configs";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.POPULABLEFIELDS = theM_parsedconfig.POPULABLEFIELDS.slice();

            theToInit.PARMNAME_WHOLE = "*";

        };



        var ModuleConstants = {};
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







        var aConfigParms_Prototype = (function() {


            var aPrototype = new theM_parsedconfig.ParsedConfig_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;


            aPrototype._v_Type = "ConfigParms";


            aPrototype._v_Map = null;








            var _pInit = function( theTitle, theIdentifier) {

                this._pInit_ConfigParms( theTitle, theIdentifier);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_ConfigParms = function( theTitle, theIdentifier) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_ParsedConfig.apply( this, [ theTitle, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Map = null;
            };
            if( _pInit_ConfigParms){}/* CQT */
            aPrototype._pInit_ConfigParms = _pInit_ConfigParms;


















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_ConfigParms( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_ConfigParms = function( theReleaseParms, theReleaseDone) {


                this._v_Map = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_ParsedConfig.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_ConfigParms){}/* CQT */
            aPrototype._pRelease_ConfigParms = _pRelease_ConfigParms;











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

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_CONFIGS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_ConfigParms( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;







            var pCleanUpTest_ConfigParms= function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_CONFIGSPAYLOADS) >= 0)) {

                    this._v_Map = undefined;
                }

                    /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_ParsedConfig.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_ConfigParms){}/* CQT */
            aPrototype.pCleanUpTest_ConfigParms = pCleanUpTest_ConfigParms;

















            var pSetMap= function( theMap) {

                this._v_Map = theMap;
            };
            if( pSetMap){}/* CQT */
            aPrototype.pSetMap = pSetMap;





            var pSetParmValue= function( theParmName, theParmValue) {
                if( !this._v_Map) {
                    this._v_Map = { };
                }


                if( theParmName == this.PARMNAME_WHOLE) {
                    this._v_Map = theParmValue;
                    return;
                }

                var someParmSteps = theParmName;

                if( typeof someParmSteps == "string") {
                    if( someParmSteps.indexOf( theM_sentinels.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someParmSteps = someParmSteps.split( theM_sentinels.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someParmSteps = [ someParmSteps];
                    }
                }
                if( !someParmSteps) {
                    return;
                }

                var aNumParmSteps = someParmSteps.length;
                if( !aNumParmSteps) {
                    return;
                }


                var aStepName = someParmSteps[ 0].trim();

                if( aNumParmSteps == 1) {
                    this._v_Map[ aStepName] = theParmValue;
                    return;
                }


                var aParmValue = this._v_Map[ aStepName];
                if( ( typeof aParmValue == "undefined") || ( aParmValue == null) || !( typeof aParmValue == "object")) {
                    aParmValue = { };
                    this._v_Map[ aStepName] = aParmValue;
                }


                var aNumStepsToTraverse = aNumParmSteps - 1;

                var aSubStepValue = aParmValue;
                var aPrevSubStepValue = aSubStepValue;
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                    var aSubStepName = someParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                        aSubStepName = aSubStepName.trim();
                        aSubStepValue = aSubStepValue[ aSubStepName];
                        if( ( typeof aSubStepValue == "undefined") || ( aSubStepValue == null) || !( typeof aSubStepValue == "object")) {
                            aSubStepValue = { };
                            aPrevSubStepValue[ aSubStepName] = aSubStepValue;
                            aPrevSubStepValue = aSubStepValue;
                        }
                    }
                }


                if( !( aSubStepValue == null)) {
                    var aLastStepName = someParmSteps[ aNumParmSteps - 1];
                    if( aLastStepName) {
                        aLastStepName = aLastStepName.trim();
                        aSubStepValue[ aLastStepName] = theParmValue;
                    }
                }
            };
            if( pSetParmValue){}/* CQT */
            aPrototype.pSetParmValue = pSetParmValue;












            var fParmNameValue= function( theParmName, theMapForStepsWithParmPrefix) {

                if( !theParmName) {
                    return null;
                }

                if( !this._v_Map) {
                    return null;
                }

                var aTraversalResult = theM_traversals.fgTraverseToFromValue( theParmName, this._v_Map, theMapForStepsWithParmPrefix);
                if( aTraversalResult == null) {
                    return null;
                }

                var aTraversalValue = aTraversalResult[ "value"];

                return { "name": theParmName, "value": aTraversalValue};

            };
            if( fParmNameValue){}/* CQT */
            aPrototype.fParmNameValue = fParmNameValue;









            var fTraverseParmFromValue= function( theParmSteps, theParmValue) {
                if( !theParmSteps) {
                    return null;
                }

                if( !theParmValue) {
                    return null;
                }

                var aNumParmSteps = theParmSteps.length;
                if( !aNumParmSteps) {
                    return null;
                }


                var aStepName = theParmSteps[ 0].trim();


                var aParmValue = theParmValue[ aStepName];
                if( typeof aParmValue == "undefined") {
                    return null;
                }


                if( aNumParmSteps == 1) {
                    return { "value": aParmValue};
                }


                if( aNumParmSteps == 2) {

                    var aSecondStepName = theParmSteps[ 1].trim();

                    if( aSecondStepName == theM_sentinels.TRAVERSALSTEP_LENGTH) {
                        return { "value":  aParmValue.length};
                    }

                    if( aSecondStepName == theM_sentinels.TRAVERSALSTEP_FIRST) {
                        if( !aParmValue.length) {
                            return null;
                        }
                        return { "value": aParmValue[ 0]};
                    }

                    if( aSecondStepName == theM_sentinels.TRAVERSALSTEP_LAST) {
                        if( !aParmValue.length) {
                            return null;
                        }
                        return { "value": aParmValue[ aParmValue.length - 1]};
                    }

                    if( aSecondStepName == theM_sentinels.TRAVERSALSTEP_ALL) {
                        if( !aParmValue.length) {
                            return null;
                        }
                        return { "value": aParmValue};
                    }


                    var aKeyedSeparatorIndex = aSecondStepName.indexOf( theM_sentinels.TRAVERSALSTEP_KEYEDSEPARATOR);
                    if ( ( aKeyedSeparatorIndex > 0) && ( aKeyedSeparatorIndex < ( aSecondStepName.length - 1))) {
                        var aParmValueLen = aParmValue.length;
                        if( !aParmValueLen) {
                            return null;
                        }
                        var aKeyName  = aSecondStepName.slice( 0, aKeyedSeparatorIndex);
                        var aKeyValue = aSecondStepName.slice( aKeyedSeparatorIndex);
                        if( !aKeyName || !aKeyValue) {
                            return null;
                        }
                        var aMatchingParmValueElem = null;
                        for( var aParmValueElemIdx=0; aParmValueElemIdx < aParmValueLen; aParmValueElemIdx++) {
                            var aParmValueElem = aParmValue[ aParmValueElemIdx];
                            if( !aParmValueElem) {
                                continue;
                            }
                            if( !( typeof aParmValueElem == "object")) {
                                continue;
                            }
                            if( !aParmValueElem.hasOwnProperty( aKeyName)) {
                                continue;
                            }
                            var aParmValueElemKeyedValue    = aParmValueElem[ aKeyName];
                            if( !aParmValueElemKeyedValue) {
                                continue;
                            }
                            var aParmValueElemKeyedValueStr = aParmValueElemKeyedValue;
                            if( !( typeof aParmValueElemKeyedValueStr == "string")) {
                                aParmValueElemKeyedValueStr = new String( aParmValueElemKeyedValue);
                            }
                            if( !( aParmValueElemKeyedValueStr == aKeyValue)) {
                                continue;
                            }
                            aMatchingParmValueElem = aParmValueElem;
                            break;
                        }

                        if( aMatchingParmValueElem == null) {
                            return null;
                        }

                        return { "value": aMatchingParmValueElem};
                    }

                    var aSecondStepValue = aParmValue[ aSecondStepName];
                    if( typeof aSecondStepValue == "undefined") {
                        return null;
                    }

                    return { "value": aSecondStepValue};
                }



                var aSubStepValue = aParmValue;
                for( var aSubStepIdx=1; aSubStepIdx < aNumParmSteps; aSubStepIdx++) {
                    if( !( typeof aSubStepValue == "object")) {
                        return null;
                    }
                    var aSubStepName = theParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                        aSubStepValue = aSubStepValue[ aSubStepName];

                        if( aSubStepName == theM_sentinels.TRAVERSALSTEP_LENGTH) {
                            return aSubStepValue.length;
                        }
                        else {
                            if( aSubStepName == theM_sentinels.TRAVERSALSTEP_FIRST) {
                                if( !aSubStepValue.length) {
                                    return null;
                                }
                                aSubStepValue = aSubStepValue[ 0];
                            }
                            else {
                                if( aSubStepName == theM_sentinels.TRAVERSALSTEP_LAST) {
                                    if( !aSubStepValue.length) {
                                        return null;
                                    }
                                    aSubStepValue = aSubStepValue[ aSubStepValue.length - 1];
                                }
                                else {
                                    if( aSubStepName == theM_sentinels.TRAVERSALSTEP_ALL) {
                                        if( !aSubStepValue.length) {
                                            return null;
                                        }
                                        if( aSubStepIdx < ( aNumParmSteps - 1)) {

                                            var someParmStepsToCollect = theParmSteps.slice( aSubStepIdx + 1);

                                            var someCollected = [ ];

                                            var someToCollect = aSubStepValue.slice();
                                            var aNumToCollect = someToCollect.length;
                                            for( var aToCollectIdx=0; aToCollectIdx < aNumToCollect; aToCollectIdx++) {

                                                var aToCollect = someToCollect[ aToCollectIdx];

                                                var aCollectedTraversalResult = this.fTraverseParmFromValue( someParmStepsToCollect, aToCollect);

                                                if( aCollectedTraversalResult) {
                                                    var aCollectedTraversalValue = aCollectedTraversalResult[ "value"];
                                                    someCollected.push( aCollectedTraversalValue);
                                                }
                                            }

                                            return { "value": someCollected};
                                        }
                                    }
                                    else {


                                        var aSubStepKeyedSeparatorIndex = aSubStepName.indexOf( theM_sentinels.TRAVERSALSTEP_KEYEDSEPARATOR);
                                        if ( ( aSubStepKeyedSeparatorIndex > 0) && ( aSubStepKeyedSeparatorIndex < ( aSubStepName.length - 1))) {
                                            var aSubStepParmValueLen = aParmValue.length;
                                            if( !aSubStepParmValueLen) {
                                                return null;
                                            }
                                            var aSubStepKeyName  = aSubStepName.slice( 0, aSubStepKeyedSeparatorIndex);
                                            var aSubStepKeyValue = aSubStepName.slice( aSubStepKeyedSeparatorIndex);
                                            if( !aSubStepKeyName || !aSubStepKeyValue) {
                                                return null;
                                            }
                                            var aSubStepMatchingParmValueElem = null;
                                            for( var aSubStepParmValueElemIdx=0; aSubStepParmValueElemIdx < aSubStepParmValueLen; aSubStepParmValueElemIdx++) {
                                                var aSubStepParmValueElem = aParmValue[ aSubStepParmValueElemIdx];
                                                if( !aSubStepParmValueElem) {
                                                    continue;
                                                }
                                                if( !( typeof aSubStepParmValueElem == "object")) {
                                                    continue;
                                                }
                                                if( !aSubStepParmValueElem.hasOwnProperty( aSubStepKeyName)) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValue    = aSubStepParmValueElem[ aSubStepKeyName];
                                                if( !aSubStepParmValueElemKeyedValue) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValueStr = aSubStepParmValueElemKeyedValue;
                                                if( !( typeof aSubStepParmValueElemKeyedValueStr == "string")) {
                                                    aSubStepParmValueElemKeyedValueStr = new String( aSubStepParmValueElemKeyedValue);
                                                }
                                                if( !( aSubStepParmValueElemKeyedValueStr == aSubStepKeyValue)) {
                                                    continue;
                                                }
                                                aSubStepMatchingParmValueElem = aSubStepParmValueElem;
                                                break;
                                            }

                                            if( aSubStepMatchingParmValueElem == null) {
                                                return null;
                                            }

                                            aSubStepValue = aSubStepMatchingParmValueElem;
                                        }
                                        else {
                                            aSubStepValue = aSubStepValue[ aSubStepName];
                                        }
                                    }
                                }
                            }
                        }

                        if( typeof aSubStepValue == "undefined") {
                            return null;
                        }
                    }
                }



                return { "value": aSubStepValue};
            };
            if( fTraverseParmFromValue){}/* CQT */
            aPrototype.fTraverseParmFromValue = fTraverseParmFromValue;


















            var fToStoreJSON = function( theCommonObjects, theAlready) {

                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fToStoreJSON_identifying();
                    }
                }

                var aParser = this._v_Parser;
                if( !aParser) {
                    aParser = new theM_parmsparser.ParmsParser_Constructor( this._v_Identifier, null, null, true);
                }

                var aToStoreJSON = aParser.fToStoreJSON( this, theCommonObjects, theAlready);
                if( aToStoreJSON){}/* CQT */
                return aToStoreJSON;
            };
            if( fToStoreJSON){}/* CQT */
            aPrototype.fToStoreJSON = fToStoreJSON;







            return aPrototype;

        })();




        var ConfigParms_Constructor = function( theTitle, theIdentifier) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Map = null;

            this._pInit_ConfigParms( theTitle, theIdentifier);
        };
        ConfigParms_Constructor.prototype = aConfigParms_Prototype;





        var ConfigParms_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_parsedconfig.ParsedConfig_Prototype;

            this._v_Prototype = aConfigParms_Prototype;
            this._v_Type = null;

            this._v_Map = null;
        };
        ConfigParms_SuperPrototypeConstructor.prototype = aConfigParms_Prototype;




        var aModule = {
            "ConfigParms_Prototype": aConfigParms_Prototype,
            "ConfigParms_Constructor": ConfigParms_Constructor,
            "ConfigParms_SuperPrototypeConstructor": ConfigParms_SuperPrototypeConstructor
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

            var aM_parsedconfig   = require('./parsedconfig');
            var aM_parmsparser    = require('./specparser/parmsparser');
            var aM_sentinels      = require('../sentinels');
            var aM_traversals     = require('../traversals/traversals');

            return aMod_definer(
                aM_parsedconfig,
                aM_parmsparser,
                aM_sentinels,
                aM_traversals
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./parsedconfig",
            "./specparser/parmsparser",
            "../sentinels",
            "../traversals/traversals"
        ], function (
                theM_parsedconfig,
                theM_parmsparser,
                theM_sentinels,
                theM_traversals
            ) {
            return aMod_definer(
                theM_parsedconfig,
                theM_parmsparser,
                theM_sentinels,
                theM_traversals
            );
        });
    }


}());