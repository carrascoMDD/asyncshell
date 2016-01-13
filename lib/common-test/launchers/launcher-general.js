'use strict';

/*
 launcher-general.js
 Creado 201408241902
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

    var aMod_definer = function( theM_shared_launcher_identifier,
                                 theM_shared_launcher_recorder,
                                 theM_launchercallbacker,
                                 theM_exceptiondetails,
                                 theM_nextticker,
                                 theM_sentinels,
                                 theM_overrider) {



        var ModuleName     = "launcher-general";
        var ModulePackages = "common-test/launchers";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.LAUEVKINDSNOTFORCONSOLE = "LAUEVKINDS_NOTFORCONSOLE_NONE";
            theToInit.LAUEVKINDSNOTFORCONSOLE = "LAUEVKINDS_NOTFORCONSOLE_RESTRICTIVE";



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


            theToInit.LOGRECORDS  = true;

            theToInit.ANNOTATELAUNCHERCALLBACKS          = true;
            theToInit.RECORDLAUNCHERCALLBACKINVOCATIONS  = false;
            theToInit.RECORDLAUNCHERCALLBACKARGS         = false;






            theToInit.READCONFIG_ASYNC = true;
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

            theToInit.LAUEVKIND_PASSED     = "PASSED";
            theToInit.LAUEVKIND_NOTPASSED  = "NOTPASSED";
            theToInit.LAUEVKIND_RETRY      = "RETRY";

            theToInit.LAUEVKIND_HOUSEKEEPCLEANUP = "HOUSEKEEPCLEANUP";
            theToInit.LAUEVKIND_HOUSEKEEPGIVEUP  = "HOUSEKEEPGIVEUP";
            theToInit.LAUEVKIND_HOUSEKEEPFAILED  = "HOUSEKEEPFAILED";

            theToInit.LAUEVKIND_INIT     = "INIT";
            theToInit.LAUEVKIND_ALREADY  = "ALREADY";
            theToInit.LAUEVKIND_BEGIN    = "BEGIN";
            theToInit.LAUEVKIND_SENT     = "SENT";
            theToInit.LAUEVKIND_RECEIVED = "RECEIVED";
            theToInit.LAUEVKIND_FAIL     = "FAIL";
            theToInit.LAUEVKIND_OK       = "OK";
            theToInit.LAUEVKIND_EXIT     = "EXIT";
            theToInit.LAUEVKIND_INFO     = "INFO";



            theToInit.LAUEVKIND_CALLBACKCHAINED  = "CALLBACKCHAINED";
            theToInit.LAUEVKIND_CALLBACKINVOKED  = "CALLBACKINVOKED";
            theToInit.LAUEVKIND_CALLBACKRECEIVED = "CALLBACKRECEIVED";


            theToInit.LAUEVKIND_LAUNCHERS_BEGIN    = "LAUNCHERS_BEGIN";
            theToInit.LAUEVKIND_LAUNCHERS_OK       = "LAUNCHERS_OK";
            theToInit.LAUEVKIND_LAUNCHERS_FAIL     = "LAUNCHERS_FAIL";
            theToInit.LAUEVKIND_LAUNCHERS_FINDNEXT = "LAUNCHERS_FINDNEXT";
            theToInit.LAUEVKIND_LAUNCHERS_NOMORE   = "LAUNCHERS_NOMORE";

            theToInit.LAUEVKIND_STEPS_BEGIN    = "STEPS_BEGIN";
            theToInit.LAUEVKIND_STEPS_OK       = "STEPS_OK";
            theToInit.LAUEVKIND_STEPS_FAIL     = "STEPS_FAIL";
            theToInit.LAUEVKIND_STEPS_FINDNEXT = "STEPS_FINDNEXT";
            theToInit.LAUEVKIND_STEPS_NOMORE   = "STEPS_NOMORE";

            theToInit.LAUEVKIND_STEP_BEGIN     = "STEP_BEGIN";
            theToInit.LAUEVKIND_STEP_END       = "STEP_END";
            theToInit.LAUEVKIND_STEP_OK        = "STEP_OK";
            theToInit.LAUEVKIND_STEP_FAIL      = "STEP_FAIL";
            theToInit.LAUEVKIND_STEP_NEXTFAIL  = "STEP_NEXTFAIL";

            theToInit.LAUEVKIND_READSPEC_OK   = "READSPEC_OK";
            theToInit.LAUEVKIND_READSPEC_FAIL = "READSPEC_FAIL";

            theToInit.LAUEVKIND_CATCHED_EXCEPTION = "CATCHED_EXCEPTION";
            theToInit.LAUEVKIND_CHECKFAILED = "CHECKFAILED";

            theToInit.LAUEVKIND_CHECKPASSEDFAILED = "CHECKPASSEDFAILED";


            theToInit.LAUEVKIND_RELEASINGCAPTUREBEGIN  = "RELEASINGCAPTUREBEGIN";
            theToInit.LAUEVKIND_RELEASINGCAPTUREOK     = "RELEASINGCAPTUREOK";
            theToInit.LAUEVKIND_RELEASINGCAPTUREBEGINTEST  = "RELEASINGCAPTUREBEGINTEST";
            theToInit.LAUEVKIND_RELEASINGCAPTUREOKTEST = "RELEASINGCAPTUREOKTEST";
            theToInit.LAUEVKIND_RELEASINGCAPTUREBEGINCONFIGURATION  = "RELEASINGCAPTUREBEGINCONFIGURATION";
            theToInit.LAUEVKIND_RELEASINGCAPTUREOKCONFIGURATION = "RELEASINGCAPTUREOKCONFIGURATION";
            theToInit.LAUEVKIND_RELEASINGCAPTUREBEGINCALLBACK  = "RELEASINGCAPTUREBEGINCALLBACK";
            theToInit.LAUEVKIND_RELEASINGCAPTUREOKCALLBACK = "RELEASINGCAPTUREOKCALLBACK";

            
            theToInit.LAUEVKIND_RELEASINGBEGIN  = "RELEASINGBEGIN";
            theToInit.LAUEVKIND_RELEASINGOK     = "RELEASINGOK";
            theToInit.LAUEVKIND_RELEASINGFAILED = "RELEASINGFAILED";
            theToInit.LAUEVKIND_RELEASINGBEGINTEST  = "RELEASINGBEGINTEST";
            theToInit.LAUEVKIND_RELEASINGOKTEST = "RELEASINGOKTEST";
            theToInit.LAUEVKIND_RELEASINGFAILEDTEST = "RELEASINGFAILEDTEST";
            theToInit.LAUEVKIND_RELEASINGBEGINCONFIGURATION  = "RELEASINGBEGINCONFIGURATION";
            theToInit.LAUEVKIND_RELEASINGOKCONFIGURATION = "RELEASINGOKCONFIGURATION";
            theToInit.LAUEVKIND_RELEASINGFAILEDCONFIGURATION = "RELEASINGFAILEDCONFIGURATION";
            theToInit.LAUEVKIND_RELEASINGBEGINCALLBACK  = "RELEASINGBEGINCALLBACK";
            theToInit.LAUEVKIND_RELEASINGOKCALLBACK = "RELEASINGOKCALLBACK";
            theToInit.LAUEVKIND_RELEASINGFAILEDCALLBACK = "RELEASINGFAILEDCALLBACK";
            theToInit.LAUEVKIND_RELEASINGBEGINEVENTS  = "RELEASINGBEGINEVENTS";
            theToInit.LAUEVKIND_RELEASINGOKEVENTS = "RELEASINGOKEVENTS";
            theToInit.LAUEVKIND_RELEASINGFAILEDEVENTS = "RELEASINGFAILEDEVENTS";


            theToInit.LAUEVKIND_RELEASINGCHECKINFO  = "RELEASINGCHECKINFO";

            theToInit.LAUEVKIND_RELEASINGCHECKBEGIN  = "RELEASINGCHECKBEGIN";
            theToInit.LAUEVKIND_RELEASINGCHECKOK     = "RELEASINGCHECKOK";
            theToInit.LAUEVKIND_RELEASINGCHECKFAILED = "RELEASINGCHECKFAILED";
            theToInit.LAUEVKIND_RELEASINGCHECKBEGINCAPTURED  = "RELEASINGCHECKBEGINCAPTURED";
            theToInit.LAUEVKIND_RELEASINGCHECKOKCAPTURED = "RELEASINGCHECKOKCAPTURED";
            theToInit.LAUEVKIND_RELEASINGCHECKFAILEDCAPTURED = "RELEASINGCHECKFAILEDCAPTURED";
            theToInit.LAUEVKIND_RELEASINGCHECKBEGINTEST  = "RELEASINGCHECKBEGINTEST";
            theToInit.LAUEVKIND_RELEASINGCHECKOKTEST = "RELEASINGCHECKOKTEST";
            theToInit.LAUEVKIND_RELEASINGCHECKFAILEDTEST = "RELEASINGCHECKFAILEDTEST";
            theToInit.LAUEVKIND_RELEASINGCHECKBEGINCONFIGURATION  = "RELEASINGCHECKBEGINCONFIGURATION";
            theToInit.LAUEVKIND_RELEASINGCHECKOKCONFIGURATION = "RELEASINGCHECKOKCONFIGURATION";
            theToInit.LAUEVKIND_RELEASINGCHECKFAILEDCONFIGURATION = "RELEASINGCHECKFAILEDCONFIGURATION";
            theToInit.LAUEVKIND_RELEASINGCHECKBEGINCALLBACK  = "RELEASINGCHECKBEGINCALLBACK";
            theToInit.LAUEVKIND_RELEASINGCHECKOKCALLBACK = "RELEASINGCHECKOKCALLBACK";
            theToInit.LAUEVKIND_RELEASINGCHECKFAILEDCALLBACK = "RELEASINGCHECKFAILEDCALLBACK";
            theToInit.LAUEVKIND_RELEASINGCHECKBEGINEVENT  = "RELEASINGCHECKBEGINEVENT";
            theToInit.LAUEVKIND_RELEASINGCHECKOKEVENT = "RELEASINGCHECKOKEVENT";
            theToInit.LAUEVKIND_RELEASINGCHECKFAILEDEVENT = "RELEASINGCHECKFAILEDEVENT";





            theToInit.LAUEVKIND_CLEANUPCAPTUREBEGIN  = "CLEANUPCAPTUREBEGIN";
            theToInit.LAUEVKIND_CLEANUPCAPTUREOK     = "CLEANUPCAPTUREOK";
            theToInit.LAUEVKIND_CLEANUPCAPTUREWHATBEGIN  = "CLEANUPCAPTUREWHATBEGIN";
            theToInit.LAUEVKIND_CLEANUPCAPTUREWHATOK     = "CLEANUPCAPTUREWHATOK";
            theToInit.LAUEVKIND_CLEANUPCAPTUREBEGINTEST  = "CLEANUPCAPTUREBEGINTEST";
            theToInit.LAUEVKIND_CLEANUPCAPTUREOKTEST = "CLEANUPCAPTUREOKTEST";
            theToInit.LAUEVKIND_CLEANUPCAPTUREBEGINCONFIGURATION  = "CLEANUPCAPTUREBEGINCONFIGURATION";
            theToInit.LAUEVKIND_CLEANUPCAPTUREOKCONFIGURATION = "CLEANUPCAPTUREOKCONFIGURATION";
            theToInit.LAUEVKIND_CLEANUPCAPTUREBEGINCALLBACK  = "CLEANUPCAPTUREBEGINCALLBACK";
            theToInit.LAUEVKIND_CLEANUPCAPTUREOKCALLBACK = "CLEANUPCAPTUREOKCALLBACK";


            theToInit.LAUEVKIND_CLEANUPBEGIN  = "CLEANUPBEGIN";
            theToInit.LAUEVKIND_CLEANUPOK     = "CLEANUPOK";
            theToInit.LAUEVKIND_CLEANUPFAILED = "CLEANUPFAILED";
            theToInit.LAUEVKIND_CLEANUPWHATBEGIN  = "CLEANUPWHATBEGIN";
            theToInit.LAUEVKIND_CLEANUPWHATOK     = "CLEANUPWHATOK";
            theToInit.LAUEVKIND_CLEANUPWHATFAILED = "CLEANUPWHATFAILED";
            theToInit.LAUEVKIND_CLEANUPBEGINTEST  = "CLEANUPBEGINTEST";
            theToInit.LAUEVKIND_CLEANUPOKTEST = "CLEANUPOKTEST";
            theToInit.LAUEVKIND_CLEANUPFAILEDTEST = "CLEANUPFAILEDTEST";
            theToInit.LAUEVKIND_CLEANUPBEGINCONFIGURATION  = "CLEANUPBEGINCONFIGURATION";
            theToInit.LAUEVKIND_CLEANUPOKCONFIGURATION = "CLEANUPOKCONFIGURATION";
            theToInit.LAUEVKIND_CLEANUPFAILEDCONFIGURATION = "CLEANUPFAILEDCONFIGURATION";
            theToInit.LAUEVKIND_CLEANUPBEGINCALLBACK  = "CLEANUPBEGINCALLBACK";
            theToInit.LAUEVKIND_CLEANUPOKCALLBACK = "CLEANUPOKCALLBACK";
            theToInit.LAUEVKIND_CLEANUPFAILEDCALLBACK = "CLEANUPFAILEDCALLBACK";
            theToInit.LAUEVKIND_CLEANUPBEGINEVENTS  = "CLEANUPBEGINEVENTS";
            theToInit.LAUEVKIND_CLEANUPOKEVENTS = "CLEANUPOKEVENTS";
            theToInit.LAUEVKIND_CLEANUPFAILEDEVENTS = "CLEANUPFAILEDEVENTS";


            theToInit.LAUEVKIND_CLEANUPCHECKINFO  = "CLEANUPCHECKINFO";

            theToInit.LAUEVKIND_CLEANUPCHECKBEGIN  = "CLEANUPCHECKBEGIN";
            theToInit.LAUEVKIND_CLEANUPCHECKOK     = "CLEANUPCHECKOK";
            theToInit.LAUEVKIND_CLEANUPCHECKFAILED = "CLEANUPCHECKFAILED";
            theToInit.LAUEVKIND_CLEANUPCHECKBEGINCAPTURED  = "CLEANUPCHECKBEGINCAPTURED";
            theToInit.LAUEVKIND_CLEANUPCHECKOKCAPTURED = "CLEANUPCHECKOKCAPTURED";
            theToInit.LAUEVKIND_CLEANUPCHECKFAILEDCAPTURED = "CLEANUPCHECKFAILEDCAPTURED";
            theToInit.LAUEVKIND_CLEANUPCHECKBEGINTEST  = "CLEANUPCHECKBEGINTEST";
            theToInit.LAUEVKIND_CLEANUPCHECKOKTEST = "CLEANUPCHECKOKTEST";
            theToInit.LAUEVKIND_CLEANUPCHECKFAILEDTEST = "CLEANUPCHECKFAILEDTEST";
            theToInit.LAUEVKIND_CLEANUPCHECKBEGINCONFIGURATION  = "CLEANUPCHECKBEGINCONFIGURATION";
            theToInit.LAUEVKIND_CLEANUPCHECKOKCONFIGURATION = "CLEANUPCHECKOKCONFIGURATION";
            theToInit.LAUEVKIND_CLEANUPCHECKFAILEDCONFIGURATION = "CLEANUPCHECKFAILEDCONFIGURATION";
            theToInit.LAUEVKIND_CLEANUPCHECKBEGINCALLBACK  = "CLEANUPCHECKBEGINCALLBACK";
            theToInit.LAUEVKIND_CLEANUPCHECKOKCALLBACK = "CLEANUPCHECKOKCALLBACK";
            theToInit.LAUEVKIND_CLEANUPCHECKFAILEDCALLBACK = "CLEANUPCHECKFAILEDCALLBACK";
            theToInit.LAUEVKIND_CLEANUPCHECKBEGINEVENT  = "CLEANUPCHECKBEGINEVENT";
            theToInit.LAUEVKIND_CLEANUPCHECKOKEVENT = "CLEANUPCHECKOKEVENT";
            theToInit.LAUEVKIND_CLEANUPCHECKFAILEDEVENT = "CLEANUPCHECKFAILEDEVENT";


            theToInit.LAUEVKIND_READTESTHOUSEKEEPING_OK   = "READTESTHOUSEKEEPING_OK";
            theToInit.LAUEVKIND_READTESTHOUSEKEEPING_FAIL = "READTESTHOUSEKEEPING_FAIL";



            theToInit.LAUEVKINDS = [

                theToInit.LAUEVKIND_PASSED,
                theToInit.LAUEVKIND_NOTPASSED,
                theToInit.LAUEVKIND_RETRY,

                theToInit.LAUEVKIND_HOUSEKEEPGIVEUP,
                theToInit.LAUEVKIND_HOUSEKEEPFAILED,
                theToInit.LAUEVKIND_HOUSEKEEPCLEANUP,

                theToInit.LAUEVKIND_INIT,
                theToInit.LAUEVKIND_ALREADY,
                theToInit.LAUEVKIND_BEGIN,
                theToInit.LAUEVKIND_SENT,
                theToInit.LAUEVKIND_RECEIVED,
                theToInit.LAUEVKIND_FAIL,
                theToInit.LAUEVKIND_OK,
                theToInit.LAUEVKIND_EXIT,
                theToInit.LAUEVKIND_INFO,

                theToInit.LAUEVKIND_CALLBACKCHAINED,
                theToInit.LAUEVKIND_CALLBACKINVOKED,
                theToInit.LAUEVKIND_CALLBACKRECEIVED,

                theToInit.LAUEVKIND_LAUNCHERS_BEGIN,
                theToInit.LAUEVKIND_LAUNCHERS_OK,
                theToInit.LAUEVKIND_LAUNCHERS_FAIL,
                theToInit.LAUEVKIND_LAUNCHERS_FINDNEXT,
                theToInit.LAUEVKIND_LAUNCHERS_NOMORE,

                theToInit.LAUEVKIND_STEPS_BEGIN,
                theToInit.LAUEVKIND_STEPS_OK,
                theToInit.LAUEVKIND_STEPS_FAIL,
                theToInit.LAUEVKIND_STEPS_FINDNEXT,
                theToInit.LAUEVKIND_STEPS_NOMORE,

                theToInit.LAUEVKIND_STEP_BEGIN,
                theToInit.LAUEVKIND_STEP_END,
                theToInit.LAUEVKIND_STEP_OK,
                theToInit.LAUEVKIND_STEP_FAIL,
                theToInit.LAUEVKIND_STEP_NEXTFAIL,

                theToInit.LAUEVKIND_READSPEC_OK,
                theToInit.LAUEVKIND_READSPEC_FAIL,

                theToInit.LAUEVKIND_CATCHED_EXCEPTION,

                theToInit.LAUEVKIND_CHECKFAILED,

                theToInit.LAUEVKIND_RELEASINGCAPTUREBEGIN,
                theToInit.LAUEVKIND_RELEASINGCAPTUREOK,
                theToInit.LAUEVKIND_RELEASINGCAPTUREBEGINTEST,
                theToInit.LAUEVKIND_RELEASINGCAPTUREOKTEST,
                theToInit.LAUEVKIND_RELEASINGCAPTUREBEGINCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCAPTUREOKCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCAPTUREBEGINCALLBACK,
                theToInit.LAUEVKIND_RELEASINGCAPTUREOKCALLBACK,

                theToInit.LAUEVKIND_RELEASINGBEGIN,
                theToInit.LAUEVKIND_RELEASINGOK,
                theToInit.LAUEVKIND_RELEASINGFAILED,
                theToInit.LAUEVKIND_RELEASINGBEGINTEST,
                theToInit.LAUEVKIND_RELEASINGOKTEST,
                theToInit.LAUEVKIND_RELEASINGFAILEDTEST,
                theToInit.LAUEVKIND_RELEASINGBEGINCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGOKCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGFAILEDCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGBEGINCALLBACK,
                theToInit.LAUEVKIND_RELEASINGOKCALLBACK,
                theToInit.LAUEVKIND_RELEASINGFAILEDCALLBACK,

                theToInit.LAUEVKIND_RELEASINGCHECKINFO,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGIN,
                theToInit.LAUEVKIND_RELEASINGCHECKOK,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILED,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINCAPTURED,
                theToInit.LAUEVKIND_RELEASINGCHECKOKCAPTURED,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDCAPTURED,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINTEST,
                theToInit.LAUEVKIND_RELEASINGCHECKOKTEST,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDTEST,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCHECKOKCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINCALLBACK,
                theToInit.LAUEVKIND_RELEASINGCHECKOKCALLBACK,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDCALLBACK,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINEVENT,
                theToInit.LAUEVKIND_RELEASINGCHECKOKEVENT,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDEVENT,



                theToInit.LAUEVKIND_CLEANUPCAPTUREBEGIN,
                theToInit.LAUEVKIND_CLEANUPCAPTUREOK,
                theToInit.LAUEVKIND_CLEANUPCAPTUREWHATBEGIN,
                theToInit.LAUEVKIND_CLEANUPCAPTUREWHATOK,
                theToInit.LAUEVKIND_CLEANUPCAPTUREBEGINTEST,
                theToInit.LAUEVKIND_CLEANUPCAPTUREOKTEST,
                theToInit.LAUEVKIND_CLEANUPCAPTUREBEGINCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCAPTUREOKCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCAPTUREBEGINCALLBACK,
                theToInit.LAUEVKIND_CLEANUPCAPTUREOKCALLBACK,

                theToInit.LAUEVKIND_CLEANUPBEGIN,
                theToInit.LAUEVKIND_CLEANUPOK,
                theToInit.LAUEVKIND_CLEANUPFAILED,
                theToInit.LAUEVKIND_CLEANUPWHATBEGIN,
                theToInit.LAUEVKIND_CLEANUPWHATOK,
                theToInit.LAUEVKIND_CLEANUPWHATFAILED,
                theToInit.LAUEVKIND_CLEANUPBEGINTEST,
                theToInit.LAUEVKIND_CLEANUPOKTEST,
                theToInit.LAUEVKIND_CLEANUPFAILEDTEST,
                theToInit.LAUEVKIND_CLEANUPBEGINCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPOKCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPFAILEDCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPBEGINCALLBACK,
                theToInit.LAUEVKIND_CLEANUPOKCALLBACK,
                theToInit.LAUEVKIND_CLEANUPFAILEDCALLBACK,

                theToInit.LAUEVKIND_CLEANUPCHECKINFO,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGIN,
                theToInit.LAUEVKIND_CLEANUPCHECKOK,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILED,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINCAPTURED,
                theToInit.LAUEVKIND_CLEANUPCHECKOKCAPTURED,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDCAPTURED,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINTEST,
                theToInit.LAUEVKIND_CLEANUPCHECKOKTEST,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDTEST,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCHECKOKCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINCALLBACK,
                theToInit.LAUEVKIND_CLEANUPCHECKOKCALLBACK,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDCALLBACK,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINEVENT,
                theToInit.LAUEVKIND_CLEANUPCHECKOKEVENT,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDEVENT,


                theToInit.LAUEVKIND_READTESTHOUSEKEEPING_OK,
                theToInit.LAUEVKIND_READTESTHOUSEKEEPING_FAIL

            ];





            theToInit.LAUEVKINDS_NOTFORCONSOLE_RESTRICTIVE = [


                theToInit.LAUEVKIND_PASSED,
                theToInit.LAUEVKIND_NOTPASSED,
                theToInit.LAUEVKIND_RETRY,

                theToInit.LAUEVKIND_HOUSEKEEPGIVEUP,
                theToInit.LAUEVKIND_HOUSEKEEPFAILED,
                theToInit.LAUEVKIND_HOUSEKEEPCLEANUP,

                theToInit.LAUEVKIND_INIT,
                theToInit.LAUEVKIND_ALREADY,
                theToInit.LAUEVKIND_BEGIN,
                theToInit.LAUEVKIND_SENT,
                theToInit.LAUEVKIND_RECEIVED,
                theToInit.LAUEVKIND_FAIL,
                theToInit.LAUEVKIND_OK,
                theToInit.LAUEVKIND_EXIT,
                theToInit.LAUEVKIND_INFO,

                theToInit.LAUEVKIND_CALLBACKCHAINED,
                theToInit.LAUEVKIND_CALLBACKINVOKED,
                theToInit.LAUEVKIND_CALLBACKRECEIVED,

                theToInit.LAUEVKIND_LAUNCHERS_BEGIN,
                theToInit.LAUEVKIND_LAUNCHERS_OK,
                theToInit.LAUEVKIND_LAUNCHERS_FAIL,
                theToInit.LAUEVKIND_LAUNCHERS_FINDNEXT,
                theToInit.LAUEVKIND_LAUNCHERS_NOMORE,

                theToInit.LAUEVKIND_STEPS_BEGIN,
                theToInit.LAUEVKIND_STEPS_OK,
                theToInit.LAUEVKIND_STEPS_FAIL,
                theToInit.LAUEVKIND_STEPS_FINDNEXT,
                theToInit.LAUEVKIND_STEPS_NOMORE,

                theToInit.LAUEVKIND_STEP_BEGIN,
                theToInit.LAUEVKIND_STEP_END,
                theToInit.LAUEVKIND_STEP_OK,
                theToInit.LAUEVKIND_STEP_FAIL,
                theToInit.LAUEVKIND_STEP_NEXTFAIL,

                theToInit.LAUEVKIND_READSPEC_OK,
                theToInit.LAUEVKIND_READSPEC_FAIL,

                theToInit.LAUEVKIND_CATCHED_EXCEPTION,

                theToInit.LAUEVKIND_CHECKFAILED,

                theToInit.LAUEVKIND_RELEASINGCAPTUREBEGIN,
                theToInit.LAUEVKIND_RELEASINGCAPTUREOK,
                theToInit.LAUEVKIND_RELEASINGCAPTUREBEGINTEST,
                theToInit.LAUEVKIND_RELEASINGCAPTUREOKTEST,
                theToInit.LAUEVKIND_RELEASINGCAPTUREBEGINCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCAPTUREOKCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCAPTUREBEGINCALLBACK,
                theToInit.LAUEVKIND_RELEASINGCAPTUREOKCALLBACK,

                /*
                theToInit.LAUEVKIND_RELEASINGBEGIN,
                theToInit.LAUEVKIND_RELEASINGOK,
                theToInit.LAUEVKIND_RELEASINGFAILED,
                */
                theToInit.LAUEVKIND_RELEASINGBEGINTEST,
                theToInit.LAUEVKIND_RELEASINGOKTEST,
                theToInit.LAUEVKIND_RELEASINGFAILEDTEST,
                theToInit.LAUEVKIND_RELEASINGBEGINCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGOKCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGFAILEDCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGBEGINCALLBACK,
                theToInit.LAUEVKIND_RELEASINGOKCALLBACK,
                theToInit.LAUEVKIND_RELEASINGFAILEDCALLBACK,

                theToInit.LAUEVKIND_RELEASINGCHECKINFO,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGIN,
                theToInit.LAUEVKIND_RELEASINGCHECKOK,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILED,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINCAPTURED,
                theToInit.LAUEVKIND_RELEASINGCHECKOKCAPTURED,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDCAPTURED,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINTEST,
                theToInit.LAUEVKIND_RELEASINGCHECKOKTEST,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDTEST,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCHECKOKCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDCONFIGURATION,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINCALLBACK,
                theToInit.LAUEVKIND_RELEASINGCHECKOKCALLBACK,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDCALLBACK,
                theToInit.LAUEVKIND_RELEASINGCHECKBEGINEVENT,
                theToInit.LAUEVKIND_RELEASINGCHECKOKEVENT,
                theToInit.LAUEVKIND_RELEASINGCHECKFAILEDEVENT,



                theToInit.LAUEVKIND_CLEANUPCAPTUREBEGIN,
                theToInit.LAUEVKIND_CLEANUPCAPTUREOK,
                theToInit.LAUEVKIND_CLEANUPCAPTUREWHATBEGIN,
                theToInit.LAUEVKIND_CLEANUPCAPTUREWHATOK,
                theToInit.LAUEVKIND_CLEANUPCAPTUREBEGINTEST,
                theToInit.LAUEVKIND_CLEANUPCAPTUREOKTEST,
                theToInit.LAUEVKIND_CLEANUPCAPTUREBEGINCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCAPTUREOKCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCAPTUREBEGINCALLBACK,
                theToInit.LAUEVKIND_CLEANUPCAPTUREOKCALLBACK,

                /*
                theToInit.LAUEVKIND_CLEANUPBEGIN,
                theToInit.LAUEVKIND_CLEANUPOK,
                theToInit.LAUEVKIND_CLEANUPFAILED,
                */
                theToInit.LAUEVKIND_CLEANUPWHATBEGIN,
                theToInit.LAUEVKIND_CLEANUPWHATOK,
                theToInit.LAUEVKIND_CLEANUPWHATFAILED,
                theToInit.LAUEVKIND_CLEANUPBEGINTEST,
                theToInit.LAUEVKIND_CLEANUPOKTEST,
                theToInit.LAUEVKIND_CLEANUPFAILEDTEST,
                theToInit.LAUEVKIND_CLEANUPBEGINCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPOKCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPFAILEDCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPBEGINCALLBACK,
                theToInit.LAUEVKIND_CLEANUPOKCALLBACK,
                theToInit.LAUEVKIND_CLEANUPFAILEDCALLBACK,

                theToInit.LAUEVKIND_CLEANUPCHECKINFO,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGIN,
                theToInit.LAUEVKIND_CLEANUPCHECKOK,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILED,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINCAPTURED,
                theToInit.LAUEVKIND_CLEANUPCHECKOKCAPTURED,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDCAPTURED,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINTEST,
                theToInit.LAUEVKIND_CLEANUPCHECKOKTEST,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDTEST,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCHECKOKCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDCONFIGURATION,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINCALLBACK,
                theToInit.LAUEVKIND_CLEANUPCHECKOKCALLBACK,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDCALLBACK,
                theToInit.LAUEVKIND_CLEANUPCHECKBEGINEVENT,
                theToInit.LAUEVKIND_CLEANUPCHECKOKEVENT,
                theToInit.LAUEVKIND_CLEANUPCHECKFAILEDEVENT,


                theToInit.LAUEVKIND_READTESTHOUSEKEEPING_OK,
                theToInit.LAUEVKIND_READTESTHOUSEKEEPING_FAIL
            ];



            /*
            theToInit.LAUEVKINDS_NOTFORCONSOLE_RESTRICTIVE = [ ];
             */





            theToInit.LAUEVKINDS_NOTFORCONSOLE_NONE = [];
            theToInit.LAUEVKINDS_NOTFORCONSOLE_ALL = theToInit.LAUEVKINDS.slice();

            theToInit.LAUEVKINDS_NOTFORCONSOLE_DEFAULT = theToInit.LAUEVKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();

            if( theToInit.LAUEVKINDSNOTFORCONSOLE) {

                if( typeof theToInit.LAUEVKINDSNOTFORCONSOLE == "string") {
                    var anEventsSetNotForConsole = theToInit[ theToInit.LAUEVKINDSNOTFORCONSOLE];
                    if( anEventsSetNotForConsole) {
                        theToInit.LAUEVKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                    }
                    else {
                        theToInit.LAUEVKINDS_NOTFORCONSOLE = [];
                    }
                }
                else {
                    theToInit.LAUEVKINDS_NOTFORCONSOLE = theToInit.LAUEVKINDSNOTFORCONSOLE;
                }
            }
            else {
                theToInit.LAUEVKINDS_NOTFORCONSOLE = theToInit.LAUEVKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }
            if( !theToInit.LAUEVKINDS_NOTFORCONSOLE) {
                theToInit.LAUEVKINDS_NOTFORCONSOLE = theToInit.LAUEVKINDS_NOTFORCONSOLE_DEFAULT.slice();
            }





            theToInit.RECORDCOLORNAME_NORMAL  = "NORMAL";
            theToInit.RECORDCOLORNAME_RED     = 'RED';
            theToInit.RECORDCOLORNAME_GREEN   = 'GREEN';
            theToInit.RECORDCOLORNAME_YELLOW  = 'YELLOW';
            theToInit.RECORDCOLORNAME_BLUE    = 'BLUE';
            theToInit.RECORDCOLORNAME_CYAN    = 'CYAN';
            theToInit.RECORDCOLORNAME_PURPLE  = 'PURPLE';


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
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_RED ]    = [ theToInit.LAUEVKIND_NOTPASSED, theToInit.LAUEVKIND_CHECKPASSEDFAILED];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_GREEN  ] = [ theToInit.LAUEVKIND_PASSED];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_YELLOW ] = [ theToInit.LAUEVKIND_RETRY];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_PURPLE ] = [ theToInit.LAUEVKIND_HOUSEKEEPGIVEUP];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_CYAN ]   = [ theToInit.LAUEVKIND_HOUSEKEEPFAILED];
            theToInit.COLOREVENTS[ theToInit.RECORDCOLORNAME_GRAY ]   = [ theToInit.LAUEVKIND_HOUSEKEEPCLEANUP];




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








        var aLauncherGeneral_Prototype = (function() {


            var aPrototype = {};
            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "LauncherGeneral";


            aPrototype._v_LauncherTitle = null;
            aPrototype._v_LauncherId = null;

            aPrototype._v_LauncherIdentifier = null;
            aPrototype._v_LauncherRecorder   = null;

            aPrototype._v_OwnRecords = null;

            aPrototype._v_SeriesToRun      = null;
            aPrototype._v_SeriesAlreadyRun = null;







            var _pInit = function( theTitle, theLauncherIdentifier, theLauncherRecorder) {

                this._pInit_LauncherGeneral( theTitle, theLauncherIdentifier, theLauncherRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_LauncherGeneral = function( theTitle, theLauncherIdentifier, theLauncherRecorder) {
                if( theTitle){}/* CQT */

                this._v_Prototype = aPrototype;
                if( this._v_Prototype){}/* CQT */
                this._v_Type = aPrototype._v_Type;

                this._v_OwnRecords = [ ];

                this._v_LauncherTitle = theTitle;
                if( this._v_LauncherTitle == null) {
                    this._v_LauncherTitle = "";
                }

                this._v_LauncherId = null;


                this._v_LauncherIdentifier = theLauncherIdentifier;

                if( !this._v_LauncherIdentifier) {
                    this._v_LauncherIdentifier = theM_shared_launcher_identifier.fGetOrCreateSharedLauncherIdentifier();
                }

                this._v_LauncherRecorder   = theLauncherRecorder;
                if( !this._v_LauncherRecorder) {
                    this._v_LauncherRecorder   = theM_shared_launcher_recorder.fGetOrCreateSharedLauncherRecorder();
                }

                this._v_LauncherId = this.fReserveId();

                this._v_SeriesToRun      = null;
                this._v_SeriesAlreadyRun = [ ];

            };
            if( _pInit_LauncherGeneral){}/* CQT */
            aPrototype._pInit_LauncherGeneral = _pInit_LauncherGeneral;










            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = theM_sentinels.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_LauncherGeneral( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_LauncherGeneral = function( theReleaseParms, theReleaseDone) {
                if( theReleaseParms){}/* CQT */
                if( theReleaseDone){}/* CQT */


                this._v_LauncherTitle = undefined;
                this._v_LauncherId = undefined;

                this._v_LauncherIdentifier = undefined;
                this._v_LauncherRecorder   = undefined;

                this._v_OwnRecords = undefined;

                this._v_SeriesToRun      = undefined;
                this._v_SeriesAlreadyRun = undefined;

            };
            if( _pRelease_LauncherGeneral){}/* CQT */
            aPrototype._pRelease_LauncherGeneral = _pRelease_LauncherGeneral;











            var fRootTest = function() {

                return null;
            };
            if( fRootTest){}/* CQT */
            aPrototype.fRootTest = fRootTest;









            var fIsLauncherMany = function() {

                return false;
            };
            if( fIsLauncherMany){}/* CQT */
            aPrototype.fIsLauncherMany = fIsLauncherMany;













            var fReserveId = function() {

                if( !this._v_LauncherIdentifier) {
                    return null;
                }

                return  this._v_LauncherIdentifier.fReserveId();
            };
            if( fReserveId){}/* CQT */
            aPrototype.fReserveId = fReserveId;








            var fReserveCallbackId = function() {

                if( !this._v_LauncherIdentifier) {
                    return null;
                }

                return  this._v_LauncherIdentifier.fReserveCallbackId();
            };
            if( fReserveCallbackId){}/* CQT */
            aPrototype.fReserveCallbackId = fReserveCallbackId;







            var fRecord = function( theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail) {

                var aRecord = null;
                if( !this._v_LauncherRecorder) {

                    var aRecordId = null;
                    if( this._v_LauncherIdentifier) {
                        aRecordId = this._v_LauncherIdentifier.fReserveId();
                    }

                    aRecord = {
                        "_v_RecorderId": null,
                        "_v_RecordId": aRecordId,
                        "_v_RecordedType": theRecordedType,
                        "_v_Instance": theInstance,
                        "_v_Step": theStep,
                        "_v_EventKind": theEventKind,
                        "_v_Data": theData,
                        "_v_ErrorReason": theErrorReason,
                        "_v_ErrorDetail": theErrorDetail
                    };
                    return aRecord;
                }




                aRecord = this._v_LauncherRecorder.fCreateAndRegisterRecord( theRecordedType, theRecordedId, theInstance, theStep, theEventKind, theData, theErrorReason, theErrorDetail);

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

                return this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, theEventKind, theCallback, theError, theResult);
            };
            if( fRecordCallback){}/* CQT */
            aPrototype.fRecordCallback = fRecordCallback;






            var pLogRecord = function( theRecord) {
                if( this.LOGRECORDS) {
                    if( theRecord) {
                        var anEventKind = theRecord._v_EventKind;
                        if( this.LAUEVKINDS_NOTFORCONSOLE.indexOf( anEventKind) < 0) {
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







            var fExceptionDetail = function( theException) {
                return theM_exceptiondetails.fExceptionDetail( theException);
            };
            if( fExceptionDetail){}/* CQT */
            aPrototype.fExceptionDetail = fExceptionDetail;













            var fChainNewLauncherCallbackForCallback = function( theNewCallback, theNewCallbackName, theParentCallback, theMethodName) {
                if( !this.ANNOTATELAUNCHERCALLBACKS) {
                    return theNewCallback;
                }

                return theM_launchercallbacker.fChainNewLauncherCallbackForCallback( theNewCallback, theNewCallbackName, theParentCallback, this, theMethodName);
            };
            if( fChainNewLauncherCallbackForCallback){}/* CQT */
            aPrototype.fChainNewLauncherCallbackForCallback = fChainNewLauncherCallbackForCallback;






            var pInvokingLauncherCallback = function( theCallback, theError, theResult) {
                if( !this.ANNOTATELAUNCHERCALLBACKS) {
                    return;
                }

                if( !this.RECORDLAUNCHERCALLBACKINVOCATIONS) {
                    return;
                }

                theM_launchercallbacker.pInvokingLauncherCallback( theCallback, this, theMethodName, theError, theResult);
            };
            if( pInvokingLauncherCallback){}/* CQT */
            aPrototype.pInvokingLauncherCallback = pInvokingLauncherCallback;






            var pReceivedLauncherCallbackArg = function( theCallback, theMethodName) {
                if( !this.ANNOTATELAUNCHERCALLBACKS) {
                    return;
                }

                if( !this.RECORDLAUNCHERCALLBACKARGS) {
                    return;
                }

                theM_launchercallbacker.pReceivedLauncherCallbackArg( theCallback, this, theMethodName);
            };
            if( pReceivedLauncherCallbackArg){}/* CQT */
            aPrototype.pReceivedLauncherCallbackArg = pReceivedLauncherCallbackArg;





















            var pInitFinderToRunLauncherSeries = function( theSeriesToRun) {

                this._v_SeriesToRun      = theSeriesToRun;
                this._v_SeriesAlreadyRun = [ ];
            };
            if( pInitFinderToRunLauncherSeries){}/* CQT */
            aPrototype.pInitFinderToRunLauncherSeries = pInitFinderToRunLauncherSeries;









            var pTryToRunNextInLauncherSeries = function( theCallback) {
                var aMethodName = "pTryToRunNextInLauncherSeries";
                if( aMethodName){}/* CQT */

                var aSeriesToRunNext = this.fFindLauncherSeriesToRunNext();
                if( !aSeriesToRunNext) {
                    theCallback();
                    return;
                }

                this._v_SeriesAlreadyRun.push( aSeriesToRunNext);


                this.pRunNextInLauncherSeries( theCallback, aSeriesToRunNext);

            };
            if( pTryToRunNextInLauncherSeries){}/* CQT */
            aPrototype.pTryToRunNextInLauncherSeries = pTryToRunNextInLauncherSeries;











            var pRunNextInLauncherSeries = function( theCallback, theToRun) {

                var aMethodName = "pRunNextInLauncherSeries";

                if( !theToRun) {
                    theCallback( this.fRecord(this._v_Type, this._v_LauncherId, this, aMethodName, "FAIL", null, "!theToRun", null));
                    return;
                }


                if( !( typeof theToRun == "function")) {
                    theCallback( this.fRecord( theMethodName, this.LAUEVKIND_FAIL, null, "!( typeof theToRun == 'function)", null));
                }



                var aCallback = this.fRunNextInLauncherSeriesCallback( theCallback);
                if( !aCallback) {
                    theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!this.fRunNextInLauncherSeriesCallback( theCallback)", null));
                    return;
                }



                /* *******************************
                 * INVOKE NOW
                 */

                var anExceptionHandler = this.fExceptionNextInLauncherSeriesHandler( aCallback);


                /* ACV OJO 201504240402 OK Added nextticker to uncouple continuation, and possibly allow recovery of error and result payloads supplied as callback arguments, as from GrowMemory Test
                WAS
                try {
                    theToRun( aCallback);
                }
                catch( anException) {
                    anExceptionHandler( anException);
                }
                */


                /* ACV OJO 201504240402 OK Added nextticker to uncouple continuation, and possibly allow recovery of error and result payloads supplied as callback arguments, as from GrowMemory Test
                */
                try {
                    theM_nextticker.pNextTick( function() {
                        try {
                            theToRun( aCallback);
                        }
                        catch( anException) {
                            anExceptionHandler( anException);
                        }
                    });
                }
                catch( otherException) {
                    anExceptionHandler( otherException);
                }



            };
            if( pRunNextInLauncherSeries){}/* CQT */
            aPrototype.pRunNextInLauncherSeries = pRunNextInLauncherSeries;






            var pF_AsyncNextTick_ExceptionWrappedTwice = function( theFunction, theExceptionHandler) {

                try {
                    theM_nextticker.pNextTick( function() {
                        try {
                            theToRun( aCallback);
                        }
                        catch( anException) {
                            anExceptionHandler( anException);
                        }
                    });
                }
                catch( otherException) {
                    anExceptionHandler( otherException);
                }

            };
            if( pF_AsyncNextTick_ExceptionWrappedTwice){}/* CQT */
            aPrototype.pF_AsyncNextTick_ExceptionWrappedTwice = pF_AsyncNextTick_ExceptionWrappedTwice;







            var fFindLauncherSeriesToRunNext = function() {

                if( !this._v_SeriesToRun) {
                    return null;
                }

                var aPendingSeriesToRun = null;

                var aNumSeriesToRuns = this._v_SeriesToRun.length;
                for( var aSeriesToRunIdx=0; aSeriesToRunIdx < aNumSeriesToRuns; aSeriesToRunIdx++) {

                    var aSeriesToRun = this._v_SeriesToRun[ aSeriesToRunIdx];

                    if( this._v_SeriesAlreadyRun.indexOf( aSeriesToRun) < 0) {
                        aPendingSeriesToRun = aSeriesToRun;
                        break;
                    }
                }
                if( !aPendingSeriesToRun) {
                    return null;
                }

                return aPendingSeriesToRun;
            };
            if( fFindLauncherSeriesToRunNext){}/* CQT */
            aPrototype.fFindLauncherSeriesToRunNext = fFindLauncherSeriesToRunNext;












            var fRunNextInLauncherSeriesCallback = function( theCallback) {
                var aMethodName = "fRunNextInLauncherSeriesCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_LAUNCHERS_NOMORE, null, null, null);

                    aThis.pTryToRunNextInLauncherSeries( theCallback);

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fRunNextInLauncherSeriesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;

            };
            if( fRunNextInLauncherSeriesCallback){}/* CQT */
            aPrototype.fRunNextInLauncherSeriesCallback = fRunNextInLauncherSeriesCallback;









            var fExceptionNextInLauncherSeriesHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }


                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;


            };
            if( fExceptionNextInLauncherSeriesHandler){}/* CQT */
            aPrototype.fExceptionNextInLauncherSeriesHandler = fExceptionNextInLauncherSeriesHandler;
















            var fOverallRunLauncherSeriesCallback = function( theCallback) {
                var aMethodName = "fOverallRunLauncherSeriesCallback";

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var aCallback = (function( theError) {

                    if( theError) {
                        var aRecordFail = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_FAIL, null, theError, null);
                        if( theCallback) {
                            theCallback( aRecordFail);
                        }
                        return;
                    }

                    theCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, aMethodName, aThis.LAUEVKIND_OK, null, null, null));

                }).bind( this);

                var aWrappedCallback = this.fChainNewLauncherCallbackForCallback( aCallback, "fRunNextInLauncherSeriesCallback", theCallback, aMethodName);
                if( aWrappedCallback){}/* CQT */

                return aWrappedCallback;
            };
            if( fOverallRunLauncherSeriesCallback){}/* CQT */
            aPrototype.fOverallRunLauncherSeriesCallback = fOverallRunLauncherSeriesCallback;










            var fOverallRunLauncherSeriesExceptionHandler = function( theCallback, theMethodName) {

                if( !theCallback) {
                    return null;
                }

                var aThis = this;
                var anExceptionHandler = (function( theException) {

                    if( !theException) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_FAIL, null, "!Exception", null));

                        return;
                    }

                    var aExceptionDetail = aThis.fExceptionDetail( theException);
                    var aCatchedRecord = aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_CATCHED_EXCEPTION, null, theException, aExceptionDetail);

                    theCallback( aThis.fRecord( aThis._v_Type, aThis._v_LauncherId, aThis, theMethodName, aThis.LAUEVKIND_FAIL, null, aCatchedRecord, null));

                }).bind( this);
                if( anExceptionHandler){}/* CQT */

                return anExceptionHandler;
            };
            if( fOverallRunLauncherSeriesExceptionHandler){}/* CQT */
            aPrototype.fOverallRunLauncherSeriesExceptionHandler = fOverallRunLauncherSeriesExceptionHandler;











            var pRunSeries = function( theSeriesToRun, theCallback) {
                var aMethodName = "pRunSeries";

                this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_BEGIN, null, null, null);


                var aExceptionHandler = this.fOverallRunLauncherSeriesExceptionHandler( theCallback, aMethodName);
                if( !aExceptionHandler) {
                    aExceptionHandler = (function( theException) {
                        throw theException;
                    });
                }


                try {


                    var aCallback = this.fOverallRunLauncherSeriesCallback( theCallback, aMethodName);
                    if( !aCallback) {
                        theCallback( this.fRecord( this._v_Type, this._v_LauncherId, this, aMethodName, this.LAUEVKIND_FAIL, null, "!this.fOverallRunLauncherSeriesCallback( theCallback)", null));
                        return;
                    }



                    this.pInitFinderToRunLauncherSeries( theSeriesToRun);


                    /* *******************************
                     * INVOKE NOW
                     */

                    var aThis = this;

                    theM_nextticker.pNextTick(
                        function() {
                            try {
                                aThis.pTryToRunNextInLauncherSeries( aCallback);
                            }
                            catch( anException) {
                                aExceptionHandler( anException);
                            }
                        }
                    );

                }
                catch( anException) {
                    aExceptionHandler( anException);
                }
            };
            if( pRunSeries){}/* CQT */
            aPrototype.pRunSeries = pRunSeries;













            var fRandomizeList = function( theList) {

                if( !theList) {
                    return theList;
                }

                if( !( typeof theList == "object")) {
                    return theList;
                }

                if( typeof theList.length == "undefined") {
                    return theList;
                }

                var aListLen = theList.length;
                if( !aListLen) {
                    return theList;
                }


                var aListToRandomSort = theList.map( function( theElem) {

                    var aRandomScaled = Math.floor( Math.random() * ( aListLen - 1));
                    var anElem = [ aRandomScaled, theElem];
                    if( anElem){}/* CQT */
                    return anElem;
                });

                aListToRandomSort.sort( function( theOne, theOther) { return theOne[ 0] - theOther[ 0];});

                var aListRandomSorted = aListToRandomSort.map( function( theIdxAndElem) { return theIdxAndElem[ 1]; });
                if( aListRandomSorted){}/* CQT */


                return aListRandomSorted;
            };
            if( fRandomizeList){}/* CQT */
            aPrototype.fRandomizeList = fRandomizeList;












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










            return aPrototype;

        })();




        var LauncherGeneral_Constructor = function( theTitle, theLauncherIdentifier, theLauncherRecorder) {
            this._v_Prototype = null;
            this._v_Type = null;

            this._v_LauncherId    = null;
            this._v_LauncherTitle = null;

            this._v_LauncherIdentifier = null;
            this._v_LauncherRecorder   = null;

            this._v_OwnRecords = null;

            this._v_SeriesToRun      = null;
            this._v_SeriesAlreadyRun = null;

            this._pInit_LauncherGeneral( theTitle, theLauncherIdentifier, theLauncherRecorder);
        };
        LauncherGeneral_Constructor.prototype = aLauncherGeneral_Prototype;





        var LauncherGeneral_SuperPrototypeConstructor = function() {
            this._v_Prototype = aLauncherGeneral_Prototype;
            this._v_Type = null;

            this._v_LauncherId    = null;
            this._v_LauncherTitle = null;

            this._v_LauncherIdentifier = null;
            this._v_LauncherRecorder   = null;

            this._v_OwnRecords = null;

            this._v_SeriesToRun      = null;
            this._v_SeriesAlreadyRun = null;
        };
        LauncherGeneral_SuperPrototypeConstructor.prototype = aLauncherGeneral_Prototype;





        var aModule = {
            "LauncherGeneral_Prototype": aLauncherGeneral_Prototype,
            "LauncherGeneral_Constructor": LauncherGeneral_Constructor,
            "LauncherGeneral_SuperPrototypeConstructor": LauncherGeneral_SuperPrototypeConstructor
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


            var aM_shared_launcher_identifier  = require('./shared-launcher-identifier');
            var aM_shared_launcher_recorder    = require('./shared-launcher-recorder');
            var aM_launchercallbacker          = require('./launchercallbacker');
            var aM_exceptiondetails            = require('../exceptiondetails');
            var aM_nextticker                  = require('../../infrasvcs/nextticker/nextticker');
            var aM_sentinels                   = require('../sentinels');
            var aM_overrider                   = require('../overrider');

            return aMod_definer(
                aM_shared_launcher_identifier,
                aM_shared_launcher_recorder,
                aM_launchercallbacker,
                aM_exceptiondetails,
                aM_nextticker,
                aM_sentinels,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./shared-launcher-identifier",
            "./shared-launcher-recorder",
            "./launchercallbacker",
            "../exceptiondetails",
            "../../infrasvcs/nextticker/nextticker",
            "../sentinels",
            "../overrider"
       ], function (
                theM_shared_launcher_identifier,
                theM_shared_launcher_recorder,
                theM_launchercallbacker,
                theM_exceptiondetails,
                theM_nextticker,
                theM_sentinels,
                theM_overrider
            ) {
            return aMod_definer(
                theM_shared_launcher_identifier,
                theM_shared_launcher_recorder,
                theM_launchercallbacker,
                theM_exceptiondetails,
                theM_nextticker,
                theM_sentinels,
                theM_overrider
            );
        });
    }

})();

