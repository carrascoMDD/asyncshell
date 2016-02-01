'use strict';

/*
 recorded-test.js
 Created 201408050911
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
    var aMod_definer = function( theM_identified_test,
                                 theM_recorder,
                                 theM_shared_housekeep_identifier,
                                 theM_shared_housekeep_recorder,
                                 theM_testcallbacker,
                                 theM_overrider) {


        var ModuleName     = "recorded-test";
        var ModulePackages = "common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGHOUSEKEEPRECORDS = true;

            theToInit.RECORDINITS         = false;

            theToInit.ANNOTATETESTCALLBACKS          = true;
            theToInit.RECORDTESTCALLBACKINVOCATIONS  = true;
            theToInit.RECORDTESTCALLBACKARGS         = true;


            theToInit.LOGRECORDS  = theM_recorder.LOGRECORDS;


            theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NONE";







            theToInit.COLOREDEVENTS = true;


            /*
             Black      0;30       Dark Gray    1;30
             Red        0;31       Bold Red     1;31
             Green      0;32       Bold Green   1;32
             Yellow     0;33       Bold Yellow  1;33
             Blue       0;34       Bold Blue    1;34
             Purple     0;35       Bold Purple  1;35
             Cyan       0;36       Bold Cyan    1;36
             Light Gray 0;37       White        1;37
             */
            theToInit.RECORDCOLORESCAPE_NORMAL = "\u001b[0m";
            theToInit.RECORDCOLORESCAPE_GRAY   = "\u001b[30m";
            theToInit.RECORDCOLORESCAPE_RED    = "\u001b[31m";
            theToInit.RECORDCOLORESCAPE_GREEN  = "\u001b[32m";
            theToInit.RECORDCOLORESCAPE_YELLOW = "\u001b[33m";
            theToInit.RECORDCOLORESCAPE_BLUE   = "\u001b[34m";
            theToInit.RECORDCOLORESCAPE_PURPLE = "\u001b[35m";
            theToInit.RECORDCOLORESCAPE_CYAN   = "\u001b[36m";


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
                return;
            }


            theToInit.EVENTKIND_PASSED     = "PASSED";
            theToInit.EVENTKIND_NOTPASSED  = "NOTPASSED";
            theToInit.EVENTKIND_RETRY      = "RETRY";

            theToInit.EVENTKIND_NOTNEEDED  = "NOTNEEDED";

            theToInit.EVENTKIND_REMOTEEXCEPTION        = "REMOTEEXCEPTION";
            theToInit.EVENTKIND_NOAUTORIZADOEXCEPTION  = "NOAUTORIZADOEXCEPTION";

            theToInit.EVENTKIND_INIT     = "INIT";
            theToInit.EVENTKIND_ALREADY  = "ALREADY";
            theToInit.EVENTKIND_BEGIN    = "BEGIN";
            theToInit.EVENTKIND_SENT     = "SENT";
            theToInit.EVENTKIND_RECEIVED = "RECEIVED";
            theToInit.EVENTKIND_FAIL     = "FAIL";
            theToInit.EVENTKIND_OK       = "OK";
            theToInit.EVENTKIND_EXIT     = "EXIT";
            theToInit.EVENTKIND_INFO     = "INFO";
            theToInit.EVENTKIND_FINDNEXT = "FINDNEXT";
            theToInit.EVENTKIND_NOMORE   = "NOMORE";


            theToInit.EVENTKIND_CALLBACKCHAINED  = "CALLBACKCHAINED";
            theToInit.EVENTKIND_CALLBACKINVOKED  = "CALLBACKINVOKED";
            theToInit.EVENTKIND_CALLBACKRECEIVED = "CALLBACKRECEIVED";


            theToInit.EVENTKIND_EXPECTEDERRORHAPPENED_OK      = "EXPECTEDERRORHAPPENED_OK";
            theToInit.EVENTKIND_EXPECTEDERRORNOTHAPPENED_FAIL = "EXPECTEDERRORNOTHAPPENED_FAIL";
            theToInit.EVENTKIND_ERROROTHERTHANEXPECTED_FAIL   = "ERROROTHERTHANEXPECTED_FAIL";

            theToInit.EVENTKIND_CHECKFAILED              = "CHECKFAILED";
            theToInit.EVENTKIND_EXPECTEDRESPONSEFAILED   = "EXPECTEDRESPONSEFAILED";
            theToInit.EVENTKIND_RESPONSESTATUSCODEFAILED = "RESPONSESTATUSCODEFAILED";
            theToInit.EVENTKIND_RESPONSESTATUSCODEFORGIVABLE = "RESPONSESTATUSCODEFORGIVABLE";

            theToInit.EVENTKIND_NOITERATIONS    = "NOITERATIONS";

            theToInit.EVENTKIND_NORESPONSEFAILED         = "NORESPONSEFAILED";


            theToInit.EVENTKIND_STEPS_BEGIN  = "STEPS_BEGIN";
            theToInit.EVENTKIND_STEPS_OK     = "STEPS_OK";
            theToInit.EVENTKIND_STEPS_FAIL   = "STEPS_FAIL";
            theToInit.EVENTKIND_STEPS_FINDNEXT = "STEPS_FINDNEXT";
            theToInit.EVENTKIND_STEPS_NOMORE = "STEPS_NOMORE";

            theToInit.EVENTKIND_STEP_BEGIN = "STEP_BEGIN";
            theToInit.EVENTKIND_STEP_END  = "STEP_END";
            theToInit.EVENTKIND_STEP_OK   = "STEP_OK";
            theToInit.EVENTKIND_STEP_FAIL = "STEP_FAIL";
            theToInit.EVENTKIND_STEP_NEXTFAIL = "STEP_NEXTFAIL";


            theToInit.EVENTKIND_SUBS_BEGIN  = "SUBS_BEGIN";
            theToInit.EVENTKIND_SUBS_OK     = "SUBS_OK";
            theToInit.EVENTKIND_SUBS_FAIL   = "SUBS_FAIL";
            theToInit.EVENTKIND_SUBS_FINDNEXT = "SUBS_FINDNEXT";
            theToInit.EVENTKIND_SUBS_NOSUBS = "SUBS_NOSUBS";
            theToInit.EVENTKIND_SUBS_NOMORE = "SUBS_NOMORE";
            theToInit.EVENTKIND_SUBS_NODYNAMICSUBS = "SUBS_NODYNAMICSUBS";
            theToInit.EVENTKIND_SUBS_INJECTEDDYNAMICSUBS = "SUBS_INJECTEDDYNAMICSUBS";


            theToInit.EVENTKIND_SUB_BEGIN = "SUB_BEGIN";
            theToInit.EVENTKIND_SUB_OK    = "SUB_OK";
            theToInit.EVENTKIND_SUB_FAIL  = "SUB_FAIL";

            theToInit.EVENTKIND_TIMEOUT_FAIL  = "TIMEOUT_FAIL";



            theToInit.EVENTKIND_REQUIREDS_BEGIN  = "REQUIREDS_BEGIN";
            theToInit.EVENTKIND_REQUIREDS_OK     = "REQUIREDS_OK";
            theToInit.EVENTKIND_REQUIREDS_FAIL   = "REQUIREDS_FAIL";
            theToInit.EVENTKIND_REQUIREDS_FINDNEXT = "REQUIREDS_FINDNEXT";
            theToInit.EVENTKIND_REQUIREDS_NOREQUIREDS = "REQUIREDS_NOREQUIREDS";
            theToInit.EVENTKIND_REQUIREDS_NOMORE = "REQUIREDS_NOMORE";

            theToInit.EVENTKIND_EXPORT_ABOUTTO    = "EXPORT_ABOUTTO";
            theToInit.EVENTKIND_EXPORT_OK         = "EXPORT_OK";
            theToInit.EVENTKIND_EXPORT_FAIL       = "EXPORT_FAIL";

            theToInit.EVENTKIND_SUPPLIERS_BEGIN  = "SUPPLIERS_BEGIN";
            theToInit.EVENTKIND_SUPPLIERS_OK     = "SUPPLIERS_OK";
            theToInit.EVENTKIND_SUPPLIERS_FAIL   = "SUPPLIERS_FAIL";
            theToInit.EVENTKIND_SUPPLIERS_FINDNEXT = "SUPPLIERS_FINDNEXT";
            theToInit.EVENTKIND_SUPPLIERS_NOSUPPLIERS = "SUPPLIERS_NOSUPPLIERS";
            theToInit.EVENTKIND_SUPPLIERS_NOMORE = "SUPPLIERS_NOMORE";
            theToInit.EVENTKIND_SUPPLIERS_NOMORENAMES = "SUPPLIERS_NOMORENAMES";


            theToInit.EVENTKIND_ITERATOR_BEGIN  = "ITERATOR_BEGIN";
            theToInit.EVENTKIND_ITERATOR_OK     = "ITERATOR_OK";
            theToInit.EVENTKIND_ITERATOR_FAIL   = "ITERATOR_FAIL";
            theToInit.EVENTKIND_ITERATOR_FINDNEXT = "ITERATOR_FINDNEXT";
            theToInit.EVENTKIND_ITERATOR_NOITERATOR = "ITERATOR_NOITERATOR";
            theToInit.EVENTKIND_ITERATOR_NOMORE = "ITERATOR_NOMORE";


            theToInit.EVENTKIND_FORCEERROR_CALLBACK = "FORCEERROR_CALLBACK";
            theToInit.EVENTKIND_FORCEERROR_EXCEPTION = "FORCEERROR_EXCEPTION";
            theToInit.EVENTKIND_CATCHED_EXCEPTION = "CATCHED_EXCEPTION";

            theToInit.EVENTKIND_RETRIEVEDDATA = "RETRIEVEDDATA";

            theToInit.EVENTKIND_ADDEDSUBORDINATETEST = "ADDEDSUBORDINATETEST";

            theToInit.EVENTKIND_DIDNOTWORK = "DIDNOTWORK";

            theToInit.EVENTKIND_BEGINRUNNABLE    = "BEGINRUNNABLE";
            theToInit.EVENTKIND_BEGINASYNC       = "BEGINASYNC";


            theToInit.EVENTKIND_READSPEC_OK   = "READSPEC_OK";
            theToInit.EVENTKIND_READSPEC_FAIL = "READSPEC_FAIL";
            theToInit.EVENTKIND_SYNTHETIZESPEC_FAIL = "SYNTHETIZESPEC_FAIL";



            theToInit.EVENTKIND_HOUSEKEEP_CLEANUP = "HOUSEKEEP_CLEANUP";

            theToInit.EVENTKIND_GARBAGECOLLECT    = "GARBAGECOLLECT ";
            theToInit.EVENTKIND_MEMORYREPORT      = "MEMORYREPORT";
            theToInit.EVENTKIND_MEMORYGROWN       = "MEMORYGROWN";
            theToInit.EVENTKIND_GROWCOMPUTATIONREPORT = "GROWCOMPUTATIONREPORT";



            theToInit.EVENTKIND_BROWSERHELPER_BEGIN              = "BROWSERHELPER_BEGIN";
            theToInit.EVENTKIND_BROWSERHELPER_EMPTY              = "BROWSERHELPER_EMPTY";
            theToInit.EVENTKIND_BROWSERHELPER_OK                 = "BROWSERHELPER_OK";
            theToInit.EVENTKIND_BROWSERHELPER_FAIL               = "BROWSERHELPER_FAIL";
            theToInit.EVENTKIND_BROWSERHELPER_MISSINGPARM        = "BROWSERHELPER_MISSINGPARM";
            theToInit.EVENTKIND_BROWSERHELPER_UNSUPPORTEDACTION  = "BROWSERHELPER_UNSUPPORTEDACTION";
            theToInit.EVENTKIND_BROWSERHELPER_ACTIONSOK          = "ACTIONSOK";
            theToInit.EVENTKIND_BROWSERHELPER_GRIDOK             = "GRIDOK";
            theToInit.EVENTKIND_BROWSERHELPER_SELECTIONDOESNOTEXISTS = "SELECTIONDOESNOTEXISTS";


            theToInit.EVENTKIND_DELAYBEGIN    = "DELAYBEGIN";
            theToInit.EVENTKIND_DELAYDONE     = "DELAYDONE";

            theToInit.EVENTKIND_SUBTYPERESPONSIBILITY    = "SUBTYPERESPONSIBILITY";


            theToInit.EVENTKINDS = [

                theToInit.EVENTKIND_PASSED,
                theToInit.EVENTKIND_NOTPASSED,
                theToInit.EVENTKIND_RETRY,

                theToInit.EVENTKIND_NOTNEEDED,

                theToInit.EVENTKIND_REMOTEEXCEPTION,
                theToInit.EVENTKIND_NOAUTORIZADOEXCEPTION,

                theToInit.EVENTKIND_INIT,
                theToInit.EVENTKIND_ALREADY,
                theToInit.EVENTKIND_BEGIN,
                theToInit.EVENTKIND_SENT,
                theToInit.EVENTKIND_RECEIVED,
                theToInit.EVENTKIND_FAIL,
                theToInit.EVENTKIND_OK,
                theToInit.EVENTKIND_EXIT,
                theToInit.EVENTKIND_INFO,
                theToInit.EVENTKIND_FINDNEXT,
                theToInit.EVENTKIND_NOMORE,

                theToInit.EVENTKIND_CALLBACKCHAINED,
                theToInit.EVENTKIND_CALLBACKINVOKED,
                theToInit.EVENTKIND_CALLBACKRECEIVED,

                theToInit.EVENTKIND_EXPECTEDERRORHAPPENED_OK,
                theToInit.EVENTKIND_EXPECTEDERRORNOTHAPPENED_FAIL,
                theToInit.EVENTKIND_ERROROTHERTHANEXPECTED_FAIL,

                theToInit.EVENTKIND_CHECKFAILED,
                theToInit.EVENTKIND_EXPECTEDRESPONSEFAILED,
                theToInit.EVENTKIND_RESPONSESTATUSCODEFAILED,
                theToInit.EVENTKIND_RESPONSESTATUSCODEFORGIVABLE,
                theToInit.EVENTKIND_NOITERATIONS,
                theToInit.EVENTKIND_NORESPONSEFAILED,

                theToInit.EVENTKIND_STEPS_BEGIN,
                theToInit.EVENTKIND_STEPS_OK,
                theToInit.EVENTKIND_STEPS_FAIL,
                theToInit.EVENTKIND_STEPS_FINDNEXT,
                theToInit.EVENTKIND_STEPS_NOMORE,

                theToInit.EVENTKIND_STEP_BEGIN,
                theToInit.EVENTKIND_STEP_END,
                theToInit.EVENTKIND_STEP_OK,
                theToInit.EVENTKIND_STEP_FAIL,
                theToInit.EVENTKIND_STEP_NEXTFAIL,

                theToInit.EVENTKIND_SUBS_BEGIN,
                theToInit.EVENTKIND_SUBS_OK,
                theToInit.EVENTKIND_SUBS_FAIL,
                theToInit.EVENTKIND_SUBS_FINDNEXT,
                theToInit.EVENTKIND_SUBS_NOSUBS,
                theToInit.EVENTKIND_SUBS_NOMORE,
                theToInit.EVENTKIND_SUBS_NODYNAMICSUBS,
                theToInit.EVENTKIND_SUBS_INJECTEDDYNAMICSUBS,

                theToInit.EVENTKIND_SUB_BEGIN,
                theToInit.EVENTKIND_SUB_OK,
                theToInit.EVENTKIND_SUB_FAIL,

                theToInit.EVENTKIND_TIMEOUT_FAIL,

                theToInit.EVENTKIND_REQUIREDS_BEGIN,
                theToInit.EVENTKIND_REQUIREDS_OK,
                theToInit.EVENTKIND_REQUIREDS_FAIL,
                theToInit.EVENTKIND_REQUIREDS_FINDNEXT,
                theToInit.EVENTKIND_REQUIREDS_NOREQUIREDS,
                theToInit.EVENTKIND_REQUIREDS_NOMORE,

                theToInit.EVENTKIND_EXPORT_ABOUTTO,
                theToInit.EVENTKIND_EXPORT_OK,
                theToInit.EVENTKIND_EXPORT_FAIL,

                theToInit.EVENTKIND_SUPPLIERS_BEGIN,
                theToInit.EVENTKIND_SUPPLIERS_OK,
                theToInit.EVENTKIND_SUPPLIERS_FAIL,
                theToInit.EVENTKIND_SUPPLIERS_FINDNEXT,
                theToInit.EVENTKIND_SUPPLIERS_NOSUPPLIERS,
                theToInit.EVENTKIND_SUPPLIERS_NOMORE,
                theToInit.EVENTKIND_SUPPLIERS_NOMORENAMES,

                theToInit.EVENTKIND_ITERATOR_BEGIN,
                theToInit.EVENTKIND_ITERATOR_OK,
                theToInit.EVENTKIND_ITERATOR_FAIL,
                theToInit.EVENTKIND_ITERATOR_FINDNEXT,
                theToInit.EVENTKIND_ITERATOR_NOITERATOR,
                theToInit.EVENTKIND_ITERATOR_NOMORE,

                theToInit.EVENTKIND_FORCEERROR_CALLBACK,
                theToInit.EVENTKIND_FORCEERROR_EXCEPTION,
                theToInit.EVENTKIND_CATCHED_EXCEPTION,

                theToInit.EVENTKIND_RETRIEVEDDATA,

                theToInit.EVENTKIND_ADDEDSUBORDINATETEST,

                theToInit.EVENTKIND_DIDNOTWORK,

                theToInit.EVENTKIND_BEGINRUNNABLE,
                theToInit.EVENTKIND_BEGINASYNC,

                theToInit.EVENTKIND_READSPEC_OK,
                theToInit.EVENTKIND_READSPEC_FAIL,
                theToInit.EVENTKIND_SYNTHETIZESPEC_FAIL,

                theToInit.EVENTKIND_HOUSEKEEP_CLEANUP,

                theToInit.EVENTKIND_MEMORYGROWN,
                theToInit.EVENTKIND_GROWCOMPUTATIONREPORT,
                theToInit.EVENTKIND_MEMORYREPORT,
                theToInit.EVENTKIND_GARBAGECOLLECT,

                theToInit.EVENTKIND_BROWSERHELPER_BEGIN,
                theToInit.EVENTKIND_BROWSERHELPER_EMPTY,
                theToInit.EVENTKIND_BROWSERHELPER_OK,
                theToInit.EVENTKIND_BROWSERHELPER_FAIL,
                theToInit.EVENTKIND_BROWSERHELPER_MISSINGPARM,
                theToInit.EVENTKIND_BROWSERHELPER_UNSUPPORTEDACTION,
                theToInit.EVENTKIND_BROWSERHELPER_ACTIONSOK,
                theToInit.EVENTKIND_BROWSERHELPER_GRIDOK,
                theToInit.EVENTKIND_BROWSERHELPER_SELECTIONDOESNOTEXISTS,

                theToInit.EVENTKIND_DELAYBEGIN,
                theToInit.EVENTKIND_DELAYDONE,

                theToInit.EVENTKIND_SUBTYPERESPONSIBILITY

            ];






            theToInit.EVENTKINDS_NOTFORCONSOLE_LIGHT = [

                theToInit.EVENTKIND_INFO,

                theToInit.EVENTKIND_CALLBACKCHAINED,
                theToInit.EVENTKIND_CALLBACKINVOKED,
                theToInit.EVENTKIND_CALLBACKRECEIVED,

                theToInit.EVENTKIND_STEPS_BEGIN,
                theToInit.EVENTKIND_STEPS_OK,
                theToInit.EVENTKIND_STEPS_FAIL,
                theToInit.EVENTKIND_STEPS_NOMORE,
                theToInit.EVENTKIND_STEPS_FINDNEXT,

                theToInit.EVENTKIND_STEP_NEXTFAIL,

                theToInit.EVENTKIND_SUBS_BEGIN,
                theToInit.EVENTKIND_SUBS_OK,
                theToInit.EVENTKIND_SUBS_FAIL,
                theToInit.EVENTKIND_SUBS_FINDNEXT,
                theToInit.EVENTKIND_SUBS_NOSUBS,
                theToInit.EVENTKIND_SUBS_NOMORE,
                theToInit.EVENTKIND_SUBS_NODYNAMICSUBS,
                theToInit.EVENTKIND_SUBS_INJECTEDDYNAMICSUBS,

                theToInit.EVENTKIND_SUB_BEGIN,
                theToInit.EVENTKIND_SUB_OK,
                theToInit.EVENTKIND_SUB_FAIL,

                theToInit.EVENTKIND_TIMEOUT_FAIL,

                theToInit.EVENTKIND_REQUIREDS_BEGIN,
                theToInit.EVENTKIND_REQUIREDS_OK,
                theToInit.EVENTKIND_REQUIREDS_FAIL,
                theToInit.EVENTKIND_REQUIREDS_FINDNEXT,
                theToInit.EVENTKIND_REQUIREDS_NOREQUIREDS,
                theToInit.EVENTKIND_REQUIREDS_NOMORE,

                theToInit.EVENTKIND_EXPORT_ABOUTTO,
                theToInit.EVENTKIND_EXPORT_OK,
                theToInit.EVENTKIND_EXPORT_FAIL,

                theToInit.EVENTKIND_SUPPLIERS_BEGIN,
                theToInit.EVENTKIND_SUPPLIERS_OK,
                theToInit.EVENTKIND_SUPPLIERS_FAIL,
                theToInit.EVENTKIND_SUPPLIERS_FINDNEXT,
                theToInit.EVENTKIND_SUPPLIERS_NOSUPPLIERS,
                theToInit.EVENTKIND_SUPPLIERS_NOMORE,
                theToInit.EVENTKIND_SUPPLIERS_NOMORENAMES,

                theToInit.EVENTKIND_ITERATOR_BEGIN,
                theToInit.EVENTKIND_ITERATOR_OK,
                theToInit.EVENTKIND_ITERATOR_FAIL,
                theToInit.EVENTKIND_ITERATOR_FINDNEXT,
                theToInit.EVENTKIND_ITERATOR_NOITERATOR,
                theToInit.EVENTKIND_ITERATOR_NOMORE,

                theToInit.EVENTKIND_ADDEDSUBORDINATETEST,

                theToInit.EVENTKIND_BEGINRUNNABLE,
                theToInit.EVENTKIND_BEGINASYNC,

                theToInit.EVENTKIND_DELAYBEGIN,
                theToInit.EVENTKIND_DELAYDONE,

                theToInit.EVENTKIND_SUBTYPERESPONSIBILITY
            ];





            theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE = [

                theToInit.EVENTKIND_NOTNEEDED,

                theToInit.EVENTKIND_INIT,
                theToInit.EVENTKIND_ALREADY,
                theToInit.EVENTKIND_BEGIN,
                theToInit.EVENTKIND_SENT,
                theToInit.EVENTKIND_RECEIVED,
                theToInit.EVENTKIND_FAIL,
                theToInit.EVENTKIND_OK,
                theToInit.EVENTKIND_EXIT,
                theToInit.EVENTKIND_INFO,
                theToInit.EVENTKIND_FINDNEXT,
                theToInit.EVENTKIND_NOMORE,

                theToInit.EVENTKIND_CALLBACKCHAINED,
                theToInit.EVENTKIND_CALLBACKINVOKED,
                theToInit.EVENTKIND_CALLBACKRECEIVED,

                theToInit.EVENTKIND_EXPECTEDERRORHAPPENED_OK,
                theToInit.EVENTKIND_EXPECTEDERRORNOTHAPPENED_FAIL,
                theToInit.EVENTKIND_ERROROTHERTHANEXPECTED_FAIL,

                /* ACV OJO 201502100644 Para ver en el log restrictivo los eventos de Check failed para saber la razon del fallo
                theToInit.EVENTKIND_CHECKFAILED,
                theToInit.EVENTKIND_EXPECTEDRESPONSEFAILED,
                theToInit.EVENTKIND_RESPONSESTATUSCODEFAILED,
                theToInit.EVENTKIND_RESPONSESTATUSCODEFORGIVABLE,
                theToInit.EVENTKIND_NOITERATIONS,
                theToInit.EVENTKIND_NORESPONSEFAILED,
                 */

                theToInit.EVENTKIND_STEPS_BEGIN,
                theToInit.EVENTKIND_STEPS_OK,
                theToInit.EVENTKIND_STEPS_FAIL,
                theToInit.EVENTKIND_STEPS_FINDNEXT,
                theToInit.EVENTKIND_STEPS_NOMORE,

                theToInit.EVENTKIND_STEP_BEGIN,
                theToInit.EVENTKIND_STEP_END,
                theToInit.EVENTKIND_STEP_OK,
                theToInit.EVENTKIND_STEP_FAIL,
                theToInit.EVENTKIND_STEP_NEXTFAIL,

                theToInit.EVENTKIND_SUBS_BEGIN,
                theToInit.EVENTKIND_SUBS_OK,
                theToInit.EVENTKIND_SUBS_FAIL,
                theToInit.EVENTKIND_SUBS_FINDNEXT,
                theToInit.EVENTKIND_SUBS_NOSUBS,
                theToInit.EVENTKIND_SUBS_NOMORE,
                theToInit.EVENTKIND_SUBS_NODYNAMICSUBS,
                theToInit.EVENTKIND_SUBS_INJECTEDDYNAMICSUBS,

                theToInit.EVENTKIND_SUB_BEGIN,
                theToInit.EVENTKIND_SUB_OK,
                theToInit.EVENTKIND_SUB_FAIL,

                theToInit.EVENTKIND_TIMEOUT_FAIL,

                theToInit.EVENTKIND_REQUIREDS_BEGIN,
                theToInit.EVENTKIND_REQUIREDS_OK,
                theToInit.EVENTKIND_REQUIREDS_FAIL,
                theToInit.EVENTKIND_REQUIREDS_FINDNEXT,
                theToInit.EVENTKIND_REQUIREDS_NOREQUIREDS,
                theToInit.EVENTKIND_REQUIREDS_NOMORE,

                theToInit.EVENTKIND_EXPORT_ABOUTTO,
                theToInit.EVENTKIND_EXPORT_OK,
                theToInit.EVENTKIND_EXPORT_FAIL,

                theToInit.EVENTKIND_SUPPLIERS_BEGIN,
                theToInit.EVENTKIND_SUPPLIERS_OK,
                theToInit.EVENTKIND_SUPPLIERS_FAIL,
                theToInit.EVENTKIND_SUPPLIERS_FINDNEXT,
                theToInit.EVENTKIND_SUPPLIERS_NOSUPPLIERS,
                theToInit.EVENTKIND_SUPPLIERS_NOMORE,
                theToInit.EVENTKIND_SUPPLIERS_NOMORENAMES,

                theToInit.EVENTKIND_ITERATOR_BEGIN,
                theToInit.EVENTKIND_ITERATOR_OK,
                theToInit.EVENTKIND_ITERATOR_FAIL,
                theToInit.EVENTKIND_ITERATOR_FINDNEXT,
                theToInit.EVENTKIND_ITERATOR_NOITERATOR,
                theToInit.EVENTKIND_ITERATOR_NOMORE,

                theToInit.EVENTKIND_FORCEERROR_CALLBACK,
                theToInit.EVENTKIND_FORCEERROR_EXCEPTION,
                theToInit.EVENTKIND_CATCHED_EXCEPTION,

                theToInit.EVENTKIND_RETRIEVEDDATA,

                theToInit.EVENTKIND_ADDEDSUBORDINATETEST,

                theToInit.EVENTKIND_DIDNOTWORK,

                theToInit.EVENTKIND_BEGINRUNNABLE,
                theToInit.EVENTKIND_BEGINASYNC,

                theToInit.EVENTKIND_READSPEC_OK,
                theToInit.EVENTKIND_READSPEC_FAIL,
                theToInit.EVENTKIND_SYNTHETIZESPEC_FAIL,

                /*
                theToInit.EVENTKIND_HOUSEKEEP_CLEANUP,

                theToInit.EVENTKIND_MEMORYGROWN,
                theToInit.EVENTKIND_GROWCOMPUTATIONREPORT,
                theToInit.EVENTKIND_MEMORYREPORT,
                theToInit.EVENTKIND_GARBAGECOLLECT,
                */

                theToInit.EVENTKIND_BROWSERHELPER_BEGIN,
                theToInit.EVENTKIND_BROWSERHELPER_EMPTY,
                theToInit.EVENTKIND_BROWSERHELPER_OK,
                theToInit.EVENTKIND_BROWSERHELPER_FAIL,
                theToInit.EVENTKIND_BROWSERHELPER_MISSINGPARM,
                theToInit.EVENTKIND_BROWSERHELPER_UNSUPPORTEDACTION,
                theToInit.EVENTKIND_BROWSERHELPER_ACTIONSOK,
                theToInit.EVENTKIND_BROWSERHELPER_GRIDOK,
                theToInit.EVENTKIND_BROWSERHELPER_SELECTIONDOESNOTEXISTS,

                theToInit.EVENTKIND_DELAYBEGIN,
                theToInit.EVENTKIND_DELAYDONE,

                theToInit.EVENTKIND_SUBTYPERESPONSIBILITY
            ];


            theToInit.EVENTKINDS_NOTFORCONSOLE_WOCALLBACKS = [
                theToInit.EVENTKIND_CALLBACKCHAINED,
                theToInit.EVENTKIND_CALLBACKINVOKED,
                theToInit.EVENTKIND_CALLBACKRECEIVED
            ];



            theToInit.EVENTKINDS_NOTFORCONSOLE_NONE = [];
            theToInit.EVENTKINDS_NOTFORCONSOLE_ALL = theToInit.EVENTKINDS.slice();

            theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();

            if( theToInit.EVENTSSETNOTFORCONSOLE) {

                if( typeof theToInit.EVENTSSETNOTFORCONSOLE == "string") {
                    var anEventsSetNotForConsole = theToInit[ theToInit.EVENTSSETNOTFORCONSOLE];
                    if( anEventsSetNotForConsole) {
                        theToInit.EVENTKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                    }
                    else {
                        theToInit.EVENTKINDS_NOTFORCONSOLE = [];
                    }
                }
                else {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTSSETNOTFORCONSOLE;
                }
            }
            else {
                theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }
            if( !theToInit.EVENTKINDS_NOTFORCONSOLE) {
                theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }








            theToInit.RECORDCOLORNAME_NORMAL  = "NORMAL";
            theToInit.RECORDCOLORNAME_RED     = 'RED';
            theToInit.RECORDCOLORNAME_GREEN   = 'GREEN';
            theToInit.RECORDCOLORNAME_YELLOW  = 'YELLOW';
            theToInit.RECORDCOLORNAME_BLUE    = 'BLUE';
            theToInit.RECORDCOLORNAME_CYAN    = 'CYAN';
            theToInit.RECORDCOLORNAME_PURPLE  = 'PURPLE';
            theToInit.RECORDCOLORNAME_GRAY  = 'GRAY';


            theToInit.RECORDCOLORESCAPES_BYNAME = {};
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_NORMAL ] = theToInit.RECORDCOLORESCAPE_NORMAL ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_RED    ] = theToInit.RECORDCOLORESCAPE_RED   ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_GREEN  ] = theToInit.RECORDCOLORESCAPE_GREEN ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_YELLOW ] = theToInit.RECORDCOLORESCAPE_YELLOW;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_BLUE   ] = theToInit.RECORDCOLORESCAPE_BLUE  ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_CYAN   ] = theToInit.RECORDCOLORESCAPE_CYAN  ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_PURPLE ] = theToInit.RECORDCOLORESCAPE_PURPLE  ;
            theToInit.RECORDCOLORESCAPES_BYNAME[ theToInit.RECORDCOLORNAME_GRAY   ] = theToInit.RECORDCOLORESCAPE_GRAY  ;



            theToInit.COLOREVENTS = {};
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_RED ]    = [ theToInit.EVENTKIND_NOTPASSED];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_GREEN  ] = [ theToInit.EVENTKIND_PASSED];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_YELLOW ] = [ theToInit.EVENTKIND_RETRY,
                                                                          theToInit.EVENTKIND_RESPONSESTATUSCODEFORGIVABLE,
                                                                          theToInit.EVENTKIND_NOITERATIONS];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_BLUE ]   = [ theToInit.EVENTKIND_REMOTEEXCEPTION];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_CYAN ]   = [ theToInit.EVENTKIND_NOAUTORIZADOEXCEPTION];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_GRAY ]   = [ theToInit.EVENTKIND_HOUSEKEEP_CLEANUP];




            theToInit.EVENTCOLORNAMES = {};
            Object.keys( theToInit.COLOREVENTS).forEach( function( athColorName) {
                var someEvents = theToInit.COLOREVENTS[ athColorName];
                if( someEvents) {
                    someEvents.forEach( function( athEvent) {
                        theToInit.EVENTCOLORNAMES[ athEvent] = athColorName;
                    })
                }
            });

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








        var aRecordedTest_Prototype = (function() {


            var aPrototype = new theM_identified_test.IdentifiedTest_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_identified_test.IdentifiedTest_Prototype;

            aPrototype._v_Type = "RecordedTest";

            aPrototype._v_Prototype_RecordedTest = aPrototype;


            aPrototype._v_Recorder   = null;
            aPrototype._v_RecorderIsOwn   = null;
            aPrototype._v_OwnRecords = null;
            aPrototype._v_OwnHousekeepRecords = null;



            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_Recorded( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_Recorded = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_IdentifiedTest.apply( this, [ theTitle, theConfiguration, theIdentifier]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_Recorder = theRecorder;
                if( !this._v_Recorder) {
                    this._v_RecorderIsOwn   = true;
                    this._v_Recorder = new theM_recorder.RecorderTest_Constructor(  "For-" + ( theTitle || "untitled"), theConfiguration, this._v_Identifier);
                }

                this._v_OwnRecords = [];

                this._v_OwnHousekeepRecords = [ ];

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Recorded", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_Recorded){}/* CQT */
            aPrototype._pInit_Recorded = _pInit_Recorded;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Recorded( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Recorded = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                if( this._v_Recorder) {
                    if( this._v_RecorderIsOwn) {
                        if( typeof this._v_Recorder._pRelease == "function") {
                            this._v_Recorder._pRelease( theReleaseParms, theReleaseDone);
                        }
                    }
                }
                this._v_Recorder = undefined;

                this._v_OwnRecords = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_Identified.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Recorded){}/* CQT */
            aPrototype._pRelease_Recorded = _pRelease_Recorded;








            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                if( this._v_Recorder) {
                    if( this._v_RecorderIsOwn) {
                        if( theReleaseChildren.indexOf( this._v_Recorder) < 0) {
                            theReleaseChildren.push( this._v_Recorder);
                            if( typeof this._v_Recorder._pReleaseChildrenInto == "function") {
                                this._v_Recorder._pReleaseChildrenInto( theReleaseChildren);
                            }
                        }
                    }
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

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_Recorded( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Recorded = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_OwnRecords          = undefined;
                    this._v_OwnHousekeepRecords =undefined;
                }


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_Identified.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Recorded){}/* CQT */
            aPrototype.pCleanUpTest_Recorded = pCleanUpTest_Recorded;











            var fRecord = function( theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecord = null;
                if( this._v_Recorder) {
                    aRecord = this._v_Recorder.fCreateAndRegisterRecord( theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
                }
                else {
                    var aRecordId = this._v_Identifier.fReserveId();
                    aRecord = new theM_recorder.RecordTest_Constructor( 0, aRecordId, theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);
                }

                if( aRecord) {
                    this._v_OwnRecords.push( aRecord);

                    if( this.LOGRECORDS) {
                        this.pLogRecord( aRecord);
                    }
                }

                return aRecord;
            };
            if( fRecord){}/* CQT */
            aPrototype.fRecord = fRecord;










            var fRecordCallback = function( theEventKind, theCallback, theError, theResult) {

                var aMethodName = theCallback.__MethodName;
                if( !aMethodName) {
                    aMethodName = null;
                }

                return this.fRecord( this._v_Type, this._v_Id, this, aMethodName, theEventKind, theCallback, theError, theResult);
            };
            if( fRecordCallback){}/* CQT */
            aPrototype.fRecordCallback = fRecordCallback;





            var pLogRecord = function( theRecord) {
                if( this.LOGRECORDS) {
                    if( theRecord) {
                        var anEventKind = theRecord._v_EventKind;
                        if( this.EVENTKINDS_NOTFORCONSOLE.indexOf( anEventKind) < 0) {
                            var aLogString = theRecord.fLogString( this.COLOREDEVENTS);
                            if( aLogString) {
                                console.log( "," + aLogString);
                            }
                        }
                    }
                }
            };
            if( pLogRecord){}/* CQT */
            aPrototype.pLogRecord = pLogRecord;







            var fEventColoredString= function( theEventKind, theString) {
                if( !theEventKind) {
                    return theString;
                }

                if( !theString) {
                    return "";
                }

                var anEventColorName = this.EVENTCOLORNAMES[ theEventKind];
                if( !anEventColorName) {
                    return theString;
                }

                if( anEventColorName == this.RECORDCOLORNAME_NORMAL) {
                    return theString;
                }

                var aColorEscape = this.RECORDCOLORESCAPES_BYNAME[ anEventColorName];
                if( !aColorEscape) {
                    return theString;
                }

                var aColoredString = aColorEscape + theString + this.RECORDCOLORESCAPE_NORMAL;
                if( aColoredString){}/* CQT */

                return aColoredString;
            };
            if( fEventColoredString){}/* CQT */
            aPrototype.fEventColoredString = fEventColoredString;







            var fRecordHousekeep = function( theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aHousekeeperRecorder   = theM_shared_housekeep_recorder.fGetOrCreateSharedHousekeepRecorder();

                var aRecord = null;
                if( !aHousekeeperRecorder) {

                    var aRecordId = null;

                    var aHousekeeperIdentifier = theM_shared_housekeep_identifier.fGetOrCreateSharedHousekeepIdentifier();
                    if( aHousekeeperIdentifier) {
                        aRecordId = aHousekeeperIdentifier.fReserveId();
                    }

                    aRecord = {
                        "_v_RecorderId": null,
                        "_v_RecordId": aRecordId,
                        "_v_RecordedType": this._v_Type,
                        "_v_Instance": this,
                        "_v_Step": theStep,
                        "_v_EventKind": theEventKind,
                        "_v_Data": theData,
                        "_v_ErrorReason": theErrorReason,
                        "_v_ErrorDetail": theErrorDetail
                    };
                    return aRecord;
                }

                aRecord = aHousekeeperRecorder.fCreateAndRegisterRecord( this._v_Type, this._v_Id, this, theStep, theEventKind, theData, theErrorReason, theErrorDetail);

                if( aRecord) {
                    this._v_OwnHousekeepRecords.push( aRecord);

                    if( this.LOGHOUSEKEEPRECORDS) {
                        this.pLogHousekeepRecord( aRecord);
                    }
                }


                return aRecord;
            };
            if( fRecordHousekeep){}/* CQT */
            aPrototype.fRecordHousekeep = fRecordHousekeep;








            var pLogHousekeepRecord = function( theRecord) {
                if( this.LOGHOUSEKEEPRECORDS) {
                    if( theRecord) {
                        var anEventKind = theRecord._v_EventKind;
                        if( this.EVENTKINDS_NOTFORCONSOLE.indexOf( anEventKind) < 0) {
                            var aLogString = theRecord.fLogString( this.COLOREDEVENTS);
                            if( aLogString) {
                                console.log( "," + aLogString);
                            }
                        }
                    }
                }
            };
            if( pLogHousekeepRecord){}/* CQT */
            aPrototype.pLogHousekeepRecord = pLogHousekeepRecord;












            var fAllRecorders = function() {
                if( this._v_Recorder == null) {
                    return [];
                }

                return [ this._v_Recorder];
             };
            if( fAllRecorders){}/* CQT */
            aPrototype.fAllRecorders = fAllRecorders;





            var pAllRecorders_into = function( theRecorders) {
                if( theRecorders == null) {
                    return;
                }

                if( !this._v_Recorder) {
                    return;
                }

                if ( theRecorders.indexOf( this._v_Recorder) < 0) {
                    theRecorders.push( this._v_Recorder);
                }
            };
            if( pAllRecorders_into){}/* CQT */
            aPrototype.pAllRecorders_into = pAllRecorders_into;








            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = null;
                if( !( aPrototype._v_SuperPrototype.fToResultJSON === fToResultJSON)) {
                    aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);
                }
                else {
                    aResultJSON = {};
                }


                if( this._v_OwnRecords) {
                    var someRecordIds = [];
                    aResultJSON.events = someRecordIds;

                    var aNumRecords = this._v_OwnRecords.length;
                    for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {
                        var aRecord = this._v_OwnRecords[ aRecordIdx];
                        if( aRecord._v_RecordId) {
                            someRecordIds.push( aRecord._v_RecordId);
                        }
                    }
                }


                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;













            var fChainNewTestCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATETESTCALLBACKS) {
                    return theNewCallback;
                }

                return theM_testcallbacker.fChainNewTestCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewTestCallbackForCallback){}/* CQT */
            aPrototype.fChainNewTestCallbackForCallback = fChainNewTestCallbackForCallback;





            var pInvokingTestCallback = function( theCallback, theError, theResult) {
                if( !this.ANNOTATETESTCALLBACKS) {
                    return;
                }

                if( !this.RECORDTESTCALLBACKINVOCATIONS) {
                    return;
                }

                theM_testcallbacker.pInvokingTestCallback( theCallback, this, theMethodName, theError, theResult);
            };
            if( pInvokingTestCallback){}/* CQT */
            aPrototype.pInvokingTestCallback = pInvokingTestCallback;






            var pReceivedTestCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATETESTCALLBACKS) {
                    return;
                }

                if( !this.RECORDTESTCALLBACKARGS) {
                    return;
                }

                theM_testcallbacker.pReceivedTestCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedTestCallbackArg){}/* CQT */
            aPrototype.pReceivedTestCallbackArg = pReceivedTestCallbackArg;










            return aPrototype;

        })();






        var RecordedTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_identified_test.IdentifiedTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_Recorder   = null;
            this._v_RecorderIsOwn   = null;
            this._v_OwnRecords = null;

            this._v_OwnHousekeepRecords = null;

            this._pInit_Recorded( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        RecordedTest_Constructor.prototype = aRecordedTest_Prototype;





        var RecordedTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_identified_test.IdentifiedTest_Prototype;

            this._v_Prototype = aRecordedTest_Prototype;
            this._v_Type = null;

            this._v_Recorder = null;
            this._v_RecorderIsOwn   = null;
            this._v_OwnRecords = null;

            this._v_OwnHousekeepRecords = null;
        };
        RecordedTest_SuperPrototypeConstructor.prototype = aRecordedTest_Prototype;









        var aModule = {
            "ModuleConstants": ModuleConstants,
            "RecordedTest_Prototype": aRecordedTest_Prototype,
            "RecordedTest_Constructor": RecordedTest_Constructor,
            "RecordedTest_SuperPrototypeConstructor": RecordedTest_SuperPrototypeConstructor
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

            var aM_identified_test = require('./identified-test');
            var aM_recorder   = require('./recorder-test');
            var aM_shared_housekeep_identifier  = require('./housekeep/shared-housekeep-identifier');
            var aM_shared_housekeep_recorder  = require('./housekeep/shared-housekeep-recorder');
            var aM_testcallbacker  = require('./testcallbacker');
            var aM_overrider       = require('./overrider');

            return aMod_definer(
                aM_identified_test,
                aM_recorder,
                aM_shared_housekeep_identifier,
                aM_shared_housekeep_recorder,
                aM_testcallbacker,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./identifier-test",
            "./recorder-test",
            "./housekeep/shared-housekeep-identifier",
            "./housekeep/shared-housekeep-recorder",
            "./testcallbacker",
            "./overrider"
        ], function (
                theM_identifier_test,
                theM_recorder,
                theM_shared_housekeep_identifier,
                theM_shared_housekeep_recorder,
                theM_testcallbacker,
                theM_overrider
            ) {
            return aMod_definer(
                theM_identifier_test,
                theM_recorder,
                theM_shared_housekeep_identifier,
                theM_shared_housekeep_recorder,
                theM_testcallbacker,
                theM_overrider
            );
        });
    }


}());

