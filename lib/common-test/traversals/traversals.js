'use strict';

/*
 traversals.js
 Created 201504010326
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
    var aMod_definer = function( theM_exceptiondetails,
                                 theM_sentinels,
                                 theM_overrider) {

        var ModuleName     = "traversals";
        var ModulePackages = "common-test/traversals";
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















        var fgParmValueReplacement= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {

            if( !theParmValue) {
                return theParmValue;
            }

            if( !( typeof theParmValue == "string")) {
                return theParmValue;
            }

            var aParmValueLen = theParmValue.length;
            if( !aParmValueLen) {
                return theParmValue;
            }

            if( !( theParmValue.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) == 0)) {
                return theParmValue;
            }

            if( aParmValueLen < 2) {
                return theParmValue;
            }

            if( theParmValue.indexOf( theM_sentinels.REPLACEPARMVALUEDOT) > 0) {
                return fgParmValueReplacement_DotNotation( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
            }

            if( !theConfiguration) {
                return theParmValue;
            }

            var aReplacementValue = theParmValue;

            var otherReplacementParmName = theParmValue.substring( 1);

            var otherParmsToResolve = [ otherReplacementParmName];

            var otherParmResolutionsDict = theConfiguration.fParmResolutionsByName( otherParmsToResolve, theMapForStepsWithParmPrefix);
            if( otherParmResolutionsDict) {

                var otherReplacementResolution = otherParmResolutionsDict[ otherReplacementParmName];
                if( otherReplacementResolution && otherReplacementResolution._v_Success) {
                    aReplacementValue = otherReplacementResolution._v_ParmValue;
                }
            }

            return aReplacementValue;
        };












        var fgParmValueReplacement_DotNotation= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {

            if( !theParmValue) {
                return theParmValue;
            }

            if( !( typeof theParmValue == "string")) {
                return theParmValue;
            }


            var aParmValueLen = theParmValue.length;
            if( aParmValueLen < 4) { /* expresion minima es ~x.y  */
                return theParmValue;
            }

            if( !( theParmValue.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) == 0)) {
                return theParmValue;
            }

            var aDotIndex = theParmValue.indexOf( theM_sentinels.REPLACEPARMVALUEDOT);
            if( aDotIndex < 0) {
                return fgParmValueReplacement( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
            }

            if( aDotIndex < 2) {
                return theParmValue;
            }



            var aReplacementParmNameWOdot = theParmValue.substring( 0, aDotIndex);
            var aParmValueAfterDot        = theParmValue.substring( aDotIndex + 1);

            var aReplacementParmNameWOdotWoPrefix = aReplacementParmNameWOdot.substring( 1);

            var aParmValueReplacementWoDot = fgParmValueReplacement( theConfiguration, aReplacementParmNameWOdot, theMapForStepsWithParmPrefix);

            if( ( typeof aParmValueReplacementWoDot == "undefined")
                || ( aParmValueReplacementWoDot == null)
                || !( typeof aParmValueReplacementWoDot == "object") ) {

                return aParmValueReplacementWoDot;
            }

            if( aDotIndex >= ( aParmValueLen - 1)) {
                return aParmValueReplacementWoDot;
            }

            if( !aParmValueAfterDot) {
                return aParmValueReplacementWoDot;
            }


            var aTraversalResult = fgTraverseToFromValue( aParmValueAfterDot, aParmValueReplacementWoDot, theMapForStepsWithParmPrefix);
            if( !( typeof aTraversalResult == "object") || ( aTraversalResult == null)) {
                return aTraversalResult;
            }

            var aReplacementResult = aTraversalResult[ "value"];
            if( aReplacementResult){}/* CQT */
            return aReplacementResult;
        };












        var fgTraverseToFromValue = function( theSourceSteps, theValue, theMapForStepsWithParmPrefix) {
            if( !theSourceSteps) {
                return null;
            }

            if( theSourceSteps === theM_sentinels.TRAVERSAL_WHOLE) {
                return { "name": theSourceSteps, "value": theValue};
            }

            if( !theValue) {
                return null;
            }

            var someCheckSourceSteps = theSourceSteps;

            if( typeof someCheckSourceSteps == "string") {

                if( someCheckSourceSteps.indexOf( theM_sentinels.TRAVERSALSTEPSSEPARATOR) >= 0) {
                    someCheckSourceSteps = someCheckSourceSteps.split( theM_sentinels.TRAVERSALSTEPSSEPARATOR);
                }
                else {
                    someCheckSourceSteps = [ someCheckSourceSteps];
                }
            }
            if( !someCheckSourceSteps) {
                return null;
            }

            var aNumCheckSourceSteps = someCheckSourceSteps.length;
            if( !aNumCheckSourceSteps) {
                return null;
            }






            var aStepName = someCheckSourceSteps[ 0].trim();



            if( aNumCheckSourceSteps == 1) {

                if( aStepName == theM_sentinels.TRAVERSALSTEP_LENGTH) {
                    return { "value": theValue.length};
                }


                if( aStepName == theM_sentinels.TRAVERSALSTEP_FIRST) {
                    if( !theValue.length) {
                        return null;
                    }
                    return { "value": theValue[ 0]};
                }


                if( aStepName == theM_sentinels.TRAVERSALSTEP_LAST) {
                    if( !theValue.length) {
                        return null;
                    }
                    return { "value": theValue[ theValue.length - 1]};
                }


                if( aStepName == theM_sentinels.TRAVERSALSTEP_ALL) {
                    if( !theValue.length) {
                        return { "value": []};
                    }
                    return { "value": theValue};
                }




                var aKeyedSeparatorIndex = aStepName.indexOf( theM_sentinels.TRAVERSALSTEP_KEYEDSEPARATOR);
                if ( ( aKeyedSeparatorIndex > 0) && ( aKeyedSeparatorIndex < ( aStepName.length - 1))) {
                    var aValueLen = theValue.length;
                    if( !aValueLen) {
                        return null;
                    }
                    var aKeyName  = aStepName.slice( 0, aKeyedSeparatorIndex);
                    var aKeyValue = aStepName.slice( aKeyedSeparatorIndex);
                    if( !aKeyName || !aKeyValue) {
                        return null;
                    }
                    var aMatchingParmValueElem = null;
                    for( var aValueElemIdx=0; aValueElemIdx < aValueLen; aValueElemIdx++) {
                        var aValueElem = theValue[ aValueElemIdx];
                        if( !aValueElem) {
                            continue;
                        }
                        if( !( typeof aValueElem == "object")) {
                            continue;
                        }
                        if( !aValueElem.hasOwnProperty( aKeyName)) {
                            continue;
                        }
                        var aValueElemKeyedValue    = aValueElem[ aKeyName];
                        if( !aValueElemKeyedValue) {
                            continue;
                        }
                        var aValueElemKeyedValueStr = aValueElemKeyedValue;
                        if( !( typeof aValueElemKeyedValueStr == "string")) {
                            aValueElemKeyedValueStr = new String( aValueElemKeyedValue);
                        }
                        if( !( aValueElemKeyedValueStr == aKeyValue)) {
                            continue;
                        }
                        aMatchingParmValueElem = aValueElem;
                        break;
                    }

                    if( typeof aMatchingParmValueElem == "undefined") {
                        return  null;
                    }
                    if( aMatchingParmValueElem == null) {
                        return null;
                    }

                    return { "value": aMatchingParmValueElem};
                }





                var aReplacedSingleStepName = aStepName;
                if( aStepName.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) == 0) {

                    var aSingleStepNameWoPrefix = aStepName.slice( 1);
                    if( aSingleStepNameWoPrefix) {

                        var aSingleParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSingleStepNameWoPrefix];

                        if( typeof aSingleParmResolutionForStepWithParmPrefix == "undefined") {
                            return null;
                        }

                        aReplacedSingleStepName = aSingleParmResolutionForStepWithParmPrefix;
                    }
                }



                var aOneStepTestValue = theValue[ aReplacedSingleStepName];

                if( typeof aOneStepTestValue == "undefined") {
                    return  null;
                }

                return { "value": aOneStepTestValue};
            }








            var aReplacedStepName = aStepName;
            if( aStepName.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) == 0) {

                var aStepNameWoPrefix = aStepName.slice( 1);
                if( aStepNameWoPrefix) {

                    var aParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aStepNameWoPrefix];

                    if( typeof aParmResolutionForStepWithParmPrefix == "undefined") {
                        return null;
                    }

                    aReplacedStepName = aParmResolutionForStepWithParmPrefix;
                }
            }


            var aTestValue = theValue[ aReplacedStepName];
            if( typeof aTestValue == "undefined") {
                return  null;
            }

            if( aTestValue == null) {
                return  null;
            }




            var aNumStepsToTraverse = aNumCheckSourceSteps - 1;

            var aSubStepValue = aTestValue;
            for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                var aSubStepName = someCheckSourceSteps[ aSubStepIdx];
                if( aSubStepName) {
                    aSubStepName = aSubStepName.trim();

                    if( aSubStepName == theM_sentinels.TRAVERSALSTEP_LENGTH) {
                        return { "value": aSubStepValue.length};
                    }
                    else {
                        if( aSubStepName == theM_sentinels.TRAVERSALSTEP_FIRST) {
                            if( (typeof aSubStepValue == "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length == "undefined") || !aSubStepValue.length) {
                                return null;
                            }
                            aSubStepValue = aSubStepValue[ 0];
                        }
                        else {
                            if( aSubStepName == theM_sentinels.TRAVERSALSTEP_LAST) {
                                if( (typeof aSubStepValue == "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length == "undefined") || !aSubStepValue.length) {
                                    return null;
                                }
                                aSubStepValue = aSubStepValue[ aSubStepValue.length - 1];
                            }
                            else {

                                if( aSubStepName == theM_sentinels.TRAVERSALSTEP_ALL) {
                                    if( (typeof aSubStepValue == "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length == "undefined") || !aSubStepValue.length) {
                                        return { "value": []};
                                    }

                                    var someStepsToCollect = someCheckSourceSteps.slice( aSubStepIdx + 1);

                                    var someCollected = [ ];

                                    var someToCollect = aSubStepValue.slice();
                                    var aNumToCollect = someToCollect.length;
                                    for( var aToCollectIdx=0; aToCollectIdx < aNumToCollect; aToCollectIdx++) {

                                        var aToCollect = someToCollect[ aToCollectIdx];

                                        var aCollectedTraversalResult = fgTraverseToFromValue( someStepsToCollect, aToCollect);

                                        if( aCollectedTraversalResult) {
                                            var aCollectedTraversalValue = aCollectedTraversalResult[ "value"];
                                            someCollected.push( aCollectedTraversalValue);
                                        }
                                    }

                                    return { "value": someCollected};
                                }
                                else {

                                    var aSubStepKeyedSeparatorIndex = aSubStepName.indexOf( theM_sentinels.TRAVERSALSTEP_KEYEDSEPARATOR);
                                    if ( ( aSubStepKeyedSeparatorIndex > 0) && ( aSubStepKeyedSeparatorIndex < ( aSubStepName.length - 1))) {
                                        var aSubStepParmValueLen = aSubStepValue.length;
                                        if( !aSubStepParmValueLen) {
                                            return null;
                                        }
                                        var aSubStepKeyName  = aSubStepName.slice( 0, aSubStepKeyedSeparatorIndex);
                                        var aSubStepKeyValue = aSubStepName.slice( aSubStepKeyedSeparatorIndex + 1);
                                        if( !aSubStepKeyName || !aSubStepKeyValue) {
                                            return null;
                                        }
                                        var aSubStepMatchingParmValueElem = null;
                                        for( var aSubStepParmValueElemIdx=0; aSubStepParmValueElemIdx < aSubStepParmValueLen; aSubStepParmValueElemIdx++) {
                                            var aSubStepParmValueElem = aSubStepValue[ aSubStepParmValueElemIdx];
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

                                        if( typeof aSubStepMatchingParmValueElem == "undefined") {
                                            return null;
                                        }

                                        if( aSubStepMatchingParmValueElem == null) {
                                            return null;
                                        }

                                        aSubStepValue = aSubStepMatchingParmValueElem;
                                    }




                                    else {
                                        var aReplacedSubStepName = aSubStepName;

                                        if( aSubStepName.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) == 0) {

                                            var aSubStepNameWoPrefix = aSubStepName.slice( 1);

                                            var aParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSubStepNameWoPrefix];
                                            if( typeof aParmResolutionForStepWithParmPrefix == "undefined") {
                                                return null;
                                            }

                                            aReplacedSubStepName = aParmResolutionForStepWithParmPrefix;
                                        }

                                        aSubStepValue = aSubStepValue[ aReplacedSubStepName];
                                    }
                                }
                            }
                        }
                    }


                    if( typeof aSubStepValue == "undefined") {
                        return null;
                    }


                    if( aSubStepValue == null) {
                        return { "value": null};
                    }

                }
            }


            if( aSubStepValue == null) {
                return { "value": null};
            }


            var aLastStepName = someCheckSourceSteps[ aNumCheckSourceSteps - 1];
            if( !aLastStepName) {
                return null;
            }
            aLastStepName = aLastStepName.trim();
            if( !aLastStepName) {
                return null;
            }

            if( aLastStepName == theM_sentinels.TRAVERSALSTEP_LENGTH) {
                return { "value": aSubStepValue.length};
            }

            if( aLastStepName == theM_sentinels.TRAVERSALSTEP_FIRST) {
                if( !aSubStepValue.length) {
                    return null;
                }
                return { "value": aSubStepValue[ 0]};
            }

            if( aLastStepName == theM_sentinels.TRAVERSALSTEP_LAST) {
                if( !aSubStepValue.length) {
                    return null;
                }
                return { "value": aSubStepValue[ aSubStepValue.length - 1]};
            }

            if( aLastStepName == theM_sentinels.TRAVERSALSTEP_ALL) {
                if( !aSubStepValue.length) {
                    return { "value": []};
                }
                return { "value": aSubStepValue};
            }



            var aLastKeyedSeparatorIndex = aLastStepName.indexOf( theM_sentinels.TRAVERSALSTEP_KEYEDSEPARATOR);
            if ( ( aLastKeyedSeparatorIndex > 0) && ( aLastKeyedSeparatorIndex < ( aLastStepName.length - 1))) {
                var aLastValueLen = aSubStepValue.length;
                if( !aLastValueLen) {
                    return null;
                }
                var aLastKeyName  = aLastStepName.slice( 0, aLastKeyedSeparatorIndex);
                var aLastKeyValue = aLastStepName.slice( aLastKeyedSeparatorIndex);
                if( !aKeyName || !aKeyValue) {
                    return null;
                }
                var aLastMatchingParmValueElem = null;
                for( var aLastValueElemIdx=0; aLastValueElemIdx < aLastValueLen; aLastValueElemIdx++) {
                    var aLastValueElem = aSubStepValue[ aLastValueElemIdx];
                    if( !aLastValueElem) {
                        continue;
                    }
                    if( !( typeof aLastValueElem == "object")) {
                        continue;
                    }
                    if( !aLastValueElem.hasOwnProperty( aLastKeyName)) {
                        continue;
                    }
                    var aLastValueElemKeyedValue    = aLastValueElem[ aLastKeyName];
                    if( !aLastValueElemKeyedValue) {
                        continue;
                    }
                    var aLastValueElemKeyedValueStr = aLastValueElemKeyedValue;
                    if( !( typeof aLastValueElemKeyedValueStr == "string")) {
                        aLastValueElemKeyedValueStr = new String( aLastValueElemKeyedValue);
                    }
                    if( !( aLastValueElemKeyedValueStr == aLastKeyValue)) {
                        continue;
                    }
                    aLastMatchingParmValueElem = aLastValueElem;
                    break;
                }

                if( typeof aLastMatchingParmValueElem == "undefined") {
                    return null;
                }

                if( aLastMatchingParmValueElem == null) {
                    return null;
                }

                return { "value": aLastMatchingParmValueElem};
            }




            var aReplacedLastStepName = aLastStepName;

            if( aLastStepName.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) == 0) {

                var aLastStepNameWoPrefix = aLastStepName.slice( 1);

                var aParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aLastStepNameWoPrefix];
                if( typeof aParmResolutionForStepWithParmPrefix == "undefined") {
                    return null;
                }

                aReplacedLastStepName = aParmResolutionForStepWithParmPrefix;
            }
            

            var aLastStepTestValue = aSubStepValue[ aReplacedLastStepName];
            if( typeof aLastStepTestValue == "undefined") {
                return  null;
            }

            return { "value": aLastStepTestValue};
        };
        if( fgTraverseToFromValue){}/* CQT */













        var fgHasAnyStepsWithParmPrefix = function( theSourceSteps) {

            if( !theSourceSteps) {
                return false;
            }

            if( theSourceSteps === theM_sentinels.TRAVERSAL_WHOLE) {
                return false;
            }

            if( theSourceSteps.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) < 0) {
                return false;
            }

            var someCheckSourceSteps = theSourceSteps;

            if( typeof someCheckSourceSteps == "string") {

                if( someCheckSourceSteps.indexOf( theM_sentinels.TRAVERSALSTEPSSEPARATOR) >= 0) {
                    someCheckSourceSteps = someCheckSourceSteps.split( theM_sentinels.TRAVERSALSTEPSSEPARATOR);
                }
                else {
                    someCheckSourceSteps = [ someCheckSourceSteps];
                }
            }
            if( !someCheckSourceSteps) {
                return false;
            }

            var aNumCheckSourceSteps = someCheckSourceSteps.length;
            if( !aNumCheckSourceSteps) {
                return false;
            }

            for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {

                var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {

                    if( aStepForWithParmPrefix.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) == 0) {
                        return true;
                    }
                }
            }

            return false;
        };
        if( fgHasAnyStepsWithParmPrefix){}/* CQT */














        var fgStepsWithParmPrefix = function( theSourceSteps, theStepsWithParmPrefix) {
            if( !theSourceSteps) {
                return null;
            }

            if( theSourceSteps === theM_sentinels.TRAVERSAL_WHOLE) {
                return null;
            }

            var someCheckSourceSteps = theSourceSteps;

            if( typeof someCheckSourceSteps == "string") {

                if( someCheckSourceSteps.indexOf( theM_sentinels.TRAVERSALSTEPSSEPARATOR) >= 0) {
                    someCheckSourceSteps = someCheckSourceSteps.split( theM_sentinels.TRAVERSALSTEPSSEPARATOR);
                }
                else {
                    someCheckSourceSteps = [ someCheckSourceSteps];
                }
            }
            if( !someCheckSourceSteps) {
                return null;
            }

            var aNumCheckSourceSteps = someCheckSourceSteps.length;
            if( !aNumCheckSourceSteps) {
                return null;
            }

            var someStepsWithParmPrefix = theStepsWithParmPrefix;
            if( ( someStepsWithParmPrefix == null) || !( typeof someStepsWithParmPrefix == "object") || !( typeof someStepsWithParmPrefix.length == "number")) {
                someStepsWithParmPrefix = [ ];
            }

            for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {

                var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {

                    if( aStepForWithParmPrefix.indexOf( theM_sentinels.REPLACEPARMVALUEWITHPARMPREFIX) == 0) {

                        var aStepForWithParmPrefixWoPrefix = aStepForWithParmPrefix.substring( 1);
                        if( aStepForWithParmPrefixWoPrefix) {
                            if( someStepsWithParmPrefix.indexOf( aStepForWithParmPrefixWoPrefix) < 0) {
                                someStepsWithParmPrefix.push( aStepForWithParmPrefixWoPrefix);
                            }
                        }
                    }
                }
            }

            var aNumStepsWithParmPrefix = someStepsWithParmPrefix.length;
            if( !aNumStepsWithParmPrefix) {
                return null;
            }


            return someStepsWithParmPrefix;
        };
        if( fgStepsWithParmPrefix){}/* CQT */
























        var fgFirstDiff = function( theActualValue, theCheckValue) {

            if( !( typeof theCheckValue == "undefined") &&  ( theCheckValue === theM_sentinels.DONOTCOMPAREVALUESYMBOL)) {
                return null;
            }

            if( ( typeof theActualValue == "undefined") && ( typeof theCheckValue == "undefined") ) {
                return null;
            }

            if( ( typeof theActualValue == "undefined") || ( typeof theCheckValue == "undefined") ) {
                return theM_sentinels.VALUEDIFFATTOP;
            }

            if( ( theActualValue == null) && ( theCheckValue == null)) {
                return null;
            }

            if( ( theActualValue == null) || ( theCheckValue == null)) {
                return theM_sentinels.VALUEDIFFATTOP;
            }


            if( !( ( typeof theActualValue) == ( typeof theCheckValue))) {
                return theM_sentinels.VALUEDIFFATTOP;
            }





            if( typeof theActualValue == "string" ) {
                if( theCheckValue === theM_sentinels.DONOTCOMPAREVALUESYMBOL) {
                    return null;
                }
                if( !( theActualValue == theCheckValue)) {
                    return theM_sentinels.VALUEDIFFATTOP;
                }
                return null;
            }


            if( typeof theActualValue == "number" ) {
                if( !( theActualValue == theCheckValue)) {
                    return theM_sentinels.VALUEDIFFATTOP;
                }
                return null;
            }


            if( typeof theActualValue == "boolean" ) {
                if( !( theActualValue == theCheckValue)) {
                    return theM_sentinels.VALUEDIFFATTOP;
                }
                return null;
            }



            if( !( typeof theActualValue == "object" )) {
                return theM_sentinels.VALUEDIFFATTOP;
            }





            var someOneKeys   = Object.keys( theActualValue);
            var someOtherKeys = Object.keys( theCheckValue);


            var allKeys = someOneKeys.slice();
            var aNumOtherKeys = someOtherKeys.length;

            for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                if( allKeys.indexOf( aOtherKey) < 0) {
                    allKeys.push( aOtherKey);
                }
            }
            allKeys.sort();


            var aNumKeys = allKeys.length;

            for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                var aKey = allKeys[ aKeyIdx];

                if( !theActualValue.hasOwnProperty( aKey)) {
                    return [ aKey];
                }

                if( !theCheckValue.hasOwnProperty( aKey)) {
                    return [ aKey];
                }


                var aOneSub   = theActualValue[ aKey];
                var aOtherSub = theCheckValue[ aKey];

                var aSubsDiff = fgFirstDiff( aOneSub, aOtherSub);
                if( aSubsDiff) {

                    if( aSubsDiff == theM_sentinels.VALUEDIFFATTOP) {
                        return [ aKey];
                    }

                    aSubsDiff.push( aKey);
                    aSubsDiff.reverse();

                    return aSubsDiff;
                }
            }





            var aOneLen   = theActualValue.length;
            var aOtherLen = theCheckValue.length;

            if( ( typeof aOneLen == "undefined") && ( typeof aOneLen == "undefined")) {
                return null;
            }

            if( ( typeof aOneLen == "undefined") || ( typeof aOneLen == "undefined")) {
                return theM_sentinels.VALUEDIFFATTOP;
            }

            if( !( aOneLen == aOtherLen)) {
                return theM_sentinels.VALUEDIFFATTOP;
            }

            for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                var aOneListSub   = theActualValue[ aSubIdx];
                var aOtherListSub = theCheckValue[ aSubIdx];

                var aSubsListDiff = fgFirstDiff( aOneListSub, aOtherListSub);
                if( aSubsListDiff) {

                    if( aSubsListDiff == theM_sentinels.VALUEDIFFATTOP) {
                        return [ aKey];
                    }

                    aSubsListDiff.push( aKey);
                    aSubsListDiff.reverse();

                    return aSubsListDiff;
                }
            }


            return null;
        };
        if( fgFirstDiff){}/* CQT */












        var fgFirstDiffFromLeft = function( theActualValue, theCheckValue) {

            if( !( typeof theCheckValue == "undefined") &&  ( theCheckValue === theM_sentinels.DONOTCOMPAREVALUESYMBOL)) {
                return null;
            }

            if( ( typeof theActualValue == "undefined") && ( typeof theCheckValue == "undefined") ) {
                return null;
            }

            if( ( typeof theActualValue == "undefined") || ( typeof theCheckValue == "undefined") ) {
                return theM_sentinels.VALUEDIFFATTOP;
            }

            if( ( theActualValue == null) && ( theCheckValue == null)) {
                return null;
            }

            if( ( theActualValue == null) || ( theCheckValue == null)) {
                return theM_sentinels.VALUEDIFFATTOP;
            }


            if( !( ( typeof theActualValue) == ( typeof theCheckValue))) {
                return theM_sentinels.VALUEDIFFATTOP;
            }





            if( typeof theActualValue == "string" ) {
                if( theCheckValue === theM_sentinels.DONOTCOMPAREVALUESYMBOL) {
                    return null;
                }
                if( !( theActualValue == theCheckValue)) {
                    return theM_sentinels.VALUEDIFFATTOP;
                }
                return null;
            }


            if( typeof theActualValue == "number" ) {
                if( !( theActualValue == theCheckValue)) {
                    return theM_sentinels.VALUEDIFFATTOP;
                }
                return null;
            }


            if( typeof theActualValue == "boolean" ) {
                if( !( theActualValue == theCheckValue)) {
                    return theM_sentinels.VALUEDIFFATTOP;
                }
                return null;
            }



            if( !( typeof theActualValue == "object" )) {
                return theM_sentinels.VALUEDIFFATTOP;
            }





            var someKeys   = Object.keys( theCheckValue);

            var aNumKeys = someKeys.length;

            for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                var aKey = someKeys[ aKeyIdx];

                if( !theActualValue.hasOwnProperty( aKey)) {
                    return [ aKey];
                }

                if( !theCheckValue.hasOwnProperty( aKey)) {
                    return [ aKey];
                }


                var aOneSub   = theActualValue[ aKey];
                var aOtherSub = theCheckValue[ aKey];

                var aSubsDiff = fgFirstDiffFromLeft( aOneSub, aOtherSub);
                if( aSubsDiff) {

                    if( aSubsDiff == theM_sentinels.VALUEDIFFATTOP) {
                        return [ aKey];
                    }

                    aSubsDiff.push( aKey);
                    aSubsDiff.reverse();

                    return aSubsDiff;
                }
            }





            var aOneLen   = theActualValue.length;
            var aOtherLen = theCheckValue.length;

            if( ( typeof aOneLen == "undefined") && ( typeof aOneLen == "undefined")) {
                return null;
            }

            if( ( typeof aOneLen == "undefined") || ( typeof aOneLen == "undefined")) {
                return theM_sentinels.VALUEDIFFATTOP;
            }

            if( !( aOneLen == aOtherLen)) {
                return theM_sentinels.VALUEDIFFATTOP;
            }

            for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                var aOneListSub   = theActualValue[ aSubIdx];
                var aOtherListSub = theCheckValue[ aSubIdx];

                var aSubsListDiff = fgFirstDiffFromLeft( aOneListSub, aOtherListSub);
                if( aSubsListDiff) {

                    if( aSubsListDiff == theM_sentinels.VALUEDIFFATTOP) {
                        return [ aKey];
                    }

                    aSubsListDiff.push( aKey);
                    aSubsListDiff.reverse();

                    return aSubsListDiff;
                }
            }


            return null;
        };

















        var aModule = {
            "ModuleConstants": ModuleConstants,
            "fgTraverseToFromValue":  fgTraverseToFromValue,
            "fgFirstDiff":            fgFirstDiff,
            "fgFirstDiffFromLeft":    fgFirstDiffFromLeft,
            "fgParmValueReplacement": fgParmValueReplacement,

            "fgHasAnyStepsWithParmPrefix": fgHasAnyStepsWithParmPrefix,
            "fgStepsWithParmPrefix":       fgStepsWithParmPrefix
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

            var aM_exceptiondetails = require('../exceptiondetails');
            var aM_sentinels        = require('../sentinels');
            var aM_overrider        = require('../overrider');

            return aMod_definer(
                aM_exceptiondetails,
                aM_sentinels,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../exceptiondetails",
            "../sentinels",
            "../overrider"
        ], function (
                theM_exceptiondetails,
                theM_sentinels,
                theM_overrider
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_sentinels,
                theM_overrider
            );
        });
    }



}());