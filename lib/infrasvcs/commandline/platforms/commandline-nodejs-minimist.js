'use strict';

/*
 commandline-nodejs-minimist.js
 Created 201504041428
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

    var aMod_definer = function( theM_minimist) {

        var ModuleName     = "commandline-nodejs-minimist";
        var ModulePackages = "infrasvcs/commandline/platforms";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.ARGUMENTSPARSEOPTIONS = {


            };


            theToInit.VOIDARGUMENTSRESULT = {
                "_":  [ ],
                "--": [ ]
            };

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




        var ModuleGlobals = { };





        var aModule = {};
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.ModuleGlobals = ModuleGlobals;







        var fCmdLineParameters = function() {

            var someParameters = process.argv;
            if( !someParameters) {
                return null;
            }

            var aNumParameters = someParameters.length;
            if( aNumParameters < 3) {
                return null;
            }

            var someSuppliedParameters = someParameters.slice( 2);
            if( someSuppliedParameters){}/* CQT */

            return someSuppliedParameters;
        };
        if( fCmdLineParameters){}/* CQT */
        aModule.fCmdLineParameters = fCmdLineParameters;




        /* ****************************************

         https://www.npmjs.com/package/minimist#example

         var argv = require('minimist')(process.argv.slice(2));
         console.dir(argv);
         $ node example/parse.js -a beep -b boop
         { _: [], a: 'beep', b: 'boop' }
         $ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
         { _: [ 'foo', 'bar', 'baz' ],
         x: 3,
         y: 4,
         n: 5,
         a: true,
         b: true,
         c: true,
         beep: 'boop' }








         https://www.npmjs.com/package/minimist#var-argv-parseargsargs-opts

         var argv = parseArgs(args, opts={})
         Return an argument object argv populated with the array arguments from args.

         argv._ contains all the arguments that didn't have an option associated with them.

         Numeric-looking arguments will be returned as numbers unless opts.string or opts.boolean is set for that argument name.

         Any arguments after '--' will not be parsed and will end up in argv._.

         options can be:

         opts.string - a string or array of strings argument names to always treat as strings
         opts.boolean - a boolean, string or array of strings to always treat as booleans. if true will treat all double hyphenated arguments without equal signs as boolean (e.g. affects --foo, not -f or --foo=bar)
         opts.alias - an object mapping string names to strings or arrays of string argument names to use as aliases
         opts.default - an object mapping string argument names to default values
         opts.stopEarly - when true, populate argv._ with everything after the first non-option
         opts['--'] - when true, populate argv._ with everything before the -- and argv['--'] with everything after the --. Here's an example:
         opts.unknown - a function which is invoked with a command line parameter not defined in the opts configuration object. If the function returns false, the unknown option is not added to argv.
         > require('./')('one two three -- four five --six'.split(' '), { '--': true })
         { _: [ 'one', 'two', 'three' ],
         '--': [ 'four', 'five', '--six' ] }
         Note that with opts['--'] set, parsing for arguments still stops after the --.

         */


        var fCmdLineArguments = function() {

            var aVoidArgumentsResult = aModule.fVoidArgumentsResult();

            var someParametersWoProgramAndModule = aModule.fCmdLineParameters();
            if( !someParametersWoProgramAndModule) {
                return aVoidArgumentsResult;
            }

            var anArgumentsParseOptions = aModule.ARGUMENTSPARSEOPTIONS;

            var anArgumentsResult = theM_minimist( someParametersWoProgramAndModule, anArgumentsParseOptions);
            if( !anArgumentsResult) {
                return aVoidArgumentsResult;
            }

            return anArgumentsResult;
        };
        if( fCmdLineArguments){}/* CQT */
        aModule.fCmdLineArguments = fCmdLineArguments;






        var fVoidArgumentsResult = function() {

            var aVoidArgumentsResult = aModule.VOIDARGUMENTSRESULT;
            if( !aVoidArgumentsResult) {
                return null;
            }

            var aVoidArgumentsResultCopy = {};
            Object.keys( aVoidArgumentsResult).forEach( function( theKey) {
                aVoidArgumentsResultCopy[ theKey] = aVoidArgumentsResult[ theKey];
            });

            return aVoidArgumentsResultCopy;
        };
        if( fVoidArgumentsResult){}/* CQT */
        aModule.fVoidArgumentsResult = fVoidArgumentsResult;




        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_minimist = require( 'minimist');

            return aMod_definer( aM_minimist);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( [
            "minimist"
        ], function ( theM_minimist) {
            return aMod_definer( theM_minimist);
        });
    }


}());