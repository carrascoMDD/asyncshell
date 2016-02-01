'use strict';

/*
 ctrlaction.js
 Created 201408161733
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

    var aMod_definer =function( theM_exceptiondetails,
                                theM_overrider) {


        var ModuleName     = "choreographer-idea";
        var ModulePackages = "experiments/seqtoasync";
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










        var aChoreographer = {};
        pgInitFromModuleConstants( aChoreographer);
        aChoreographer.ModuleName     = ModuleName;
        aChoreographer.ModulePackages = ModulePackages;
        aChoreographer.ModuleFullName = ModuleFullName;






        aChoreographer.series = function( theReturnToParent, theDoneHere, theExceptionHere, theSteps) {

            var aReturnToParent = theReturnToParent;
            if( !aReturnToParent) {
                aReturnToParent = function(){};
            }

            var aDoneHere = theDoneHere;
            if( !aDoneHere) {
                aDoneHere = function(){};
            }

            var aExceptionHere = theExceptionHere;
            if( !aExceptionHere) {
                aExceptionHere = function(){};
            }

            if( !theSteps) {
                aDoneHere( );
                return;
            }


            var anOverallContinuation = aChoreographer.auxfuns.fOverallContinuation( aReturnToParent);
            if( !anOverallContinuation) {
                throw new aChoreographer.exceptions.Internal( "!fOverallContinuation");
            }


            var anOverallExceptionHandler = aChoreographer.auxfuns.fOverallExceptionHandler( aExceptionHere);
            if( !anOverallExceptionHandler) {
                throw new aChoreographer.exceptions.Internal( "!fOverallExceptionHandler");
            }

            var anIterator = aChoreographer.auxfuns.fIterator( theSteps);
            if( !anIterator) {
                throw new aChoreographer.exceptions.Internal( "!fIterator");
            }

            var anNextStepExceptionHandler = aChoreographer.auxfuns.fNextStepExceptionHandler( anOverallExceptionHandler);
            if( !anNextStepExceptionHandler) {
                throw new aChoreographer.exceptions.Internal( "!fNextStepExceptionHandler");
            }

            var aNextStepContinuation = aChoreographer.auxfuns.fNextStepContinuation( anOverallContinuation, anIterator, anNextStepExceptionHandler);
            if( !aNextStepContinuation) {
                throw new aChoreographer.exceptions.Internal( "!aNextStepContinuation");
            }


            try {
                aNextStepContinuation();
            }
            catch( anException) {
                anOverallExceptionHandler( anException);
            }
        };



        aChoreographer.exceptions = { };

        aChoreographer.exceptions.Internal = function( theReason, theDetail) {
            this._v_Reason = theReason;
            this._v_Detail = theDetail;
        };
        aChoreographer.exceptions.Internal.prototype = Error.prototype;









        aChoreographer.auxfuns = { };


        aChoreographer.auxfuns.fOverallContinuation = function( theReturnToParent) {

            var aReturnToParent = theReturnToParent;
            if( !aReturnToParent) {
                aReturnToParent = function(){};
            }

            var aContinuation = function( ) {
                aReturnToParent();
            };
            if( aContinuation){}/* CQT */

            return aContinuation;
        };





        aChoreographer.auxfuns.fOverallExceptionHandler = function( theExceptionHere) {

            var aExceptionHere = theExceptionHere;
            if( !aExceptionHere) {
                aExceptionHere = function(){};
            }


            var aContinuation = function( ) {
                aExceptionHere();
            };
            if( aContinuation){}/* CQT */

            return aContinuation;
        };






        aChoreographer.auxfuns.fIterator = function( theSteps) {

            var aMakeUndefined = {};
            var anUndefinedForSure = aMakeUndefined.undefinedForSure;


            if( typeof theSteps.length == "undefined") {

                var aVoidIterator = {
                    "steps": [],
                    "index": -1
                };

                aVoidIterator.fNext = function( ) {
                    return anUndefinedForSure;
                };

                return aVoidIterator;
            }


            var anIterator = (function() {

                var aMakeUndefined = {};
                var anUndefinedForSure = aMakeUndefined.undefinedForSure;

                var anIterator = {
                    "steps": theSteps.slice(),
                    "index": -1
                };

                anIterator.fNext = function() {
                    if( !anIterator) {
                        return anUndefinedForSure;
                    }

                    if( anIterator.index < 0) {
                        anIterator.index = 0;
                    }
                    else {
                        anIterator.index += 1;
                    }

                    if( anIterator.index >= anIterator.steps.length) {
                        return anUndefinedForSure;
                    }

                    var aNext = anIterator.steps[ anIterator.index];
                    if( aNext){}/* CQT */

                    return aNext;
                };

            })();
            if( anIterator){}/* CQT */

            return anIterator;
        };






        aChoreographer.auxfuns.fNextStepContinuation = function( theOverallContinuation, theIterator, theNextStepExceptionHandler) {

            if( !theIterator) {
                return null;
            }

            var anOverallContinuation = theOverallContinuation;
            if( !anOverallContinuation) {
                anOverallContinuation = function(){};
            }

            var aNextStepExceptionHandler = theNextStepExceptionHandler;
            if( !aNextStepExceptionHandler) {
                aNextStepExceptionHandler = function(){};
            }

            var aContinuation = function( ) {

                try {
                    var aNext = theIterator.fNext();

                    if( typeof aNext == "undefined") {
                        theOverallContinuation();
                        return;
                    }

                    aNext( anOverallContinuation, aContinuation, aNextStepExceptionHandler)
                }
                catch( anException) {
                    aNextStepExceptionHandler( anException)
                }
            };


            return aContinuation;
        };





        aChoreographer.auxfuns.fNextStepExceptionHandler = function( theOverallExceptionHandler) {

            var anOverallExceptionHandler = theOverallExceptionHandler;
            if( !anOverallExceptionHandler) {
                anOverallExceptionHandler = function(){};
            }

            var anExceptionHandler = function( theException) {
                anOverallExceptionHandler( theException);
            };
            if( anExceptionHandler){}/* CQT */

            return anExceptionHandler;
        };





        return aChoreographer;

    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_exceptiondetails = require('../../common-test/exceptiondetails');
            var aM_overrider        = require('../../common-test/overrider');

            return aMod_definer(
                aM_exceptiondetails,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../common-test/exceptiondetails",
            "../../common-test/overrider"
        ], function (
                theM_exceptiondetails,
                theM_overrider
            ) {
            return aMod_definer(
                theM_exceptiondetails,
                theM_overrider
            );
        });
    }

}());

















