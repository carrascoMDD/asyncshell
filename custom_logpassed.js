'use strict';

/*
 custom.js
 Creado 201409250210
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
    var aMod_definer = function() {


        var ModuleName     = "custom.js";
        var ModulePackages = "#root";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}





        var cIgnoreValue = {"ignoredefault": true};
        if( cIgnoreValue){}/* CQT */


        var Settings = {

            "common-test": {

                "common-test": {
                    RELEASE_COMMON_TYPEINFO:      false,
                    LOGRELEASERECORDS:            false,
                    REGISTERRELEASEDIDENTIFYINGS: false,
                    LOGCLEANUPRECORDS:            false,
                    REGISTERCLEANUPDIDENTIFYINGS: false
                },

                "withid-test": {
                    RELEASE_WITHID_ID:     false,
                    RELEASE_WITHID_TITLE:  false,
                    RELEASE_WITHID_DATES:  false
                },

                "with-status": {
                    RELEASE_WITHSTATUS_TIMESTAMPS: false
                },

                "configured-test": {
                    RELEASE_CONFIGURED_CONFIGURATION: false,
                    RELEASE_CONFIGURED_UNLINKCONFIGURATION: true
                },

                "identified-test": {
                },

                "callbacker": {

                    ANNOTATECALLBACKS:          true,

                    RECORDNEWCALLBACKS:          true,
                    RECORDCALLBACKINVOCATIONS:   true,
                    RECORDCALLBACKARGS:          true,

                    LOOPOVERPARENTCALLBACKS:      true,
                    LOOPOVERPARENTCALLBACKS_ANY:  true,
                    LOOPOVERPARENTCALLBACKS_ALL:  true,

                    LOGRECEIVEDBYMETHODNAMES:     true
                },



                "recorded-test": {
                    RECORDINITS:                     false,

                    ANNOTATETESTCALLBACKS:           true,
                    RECORDTESTCALLBACKINVOCATIONS:   true,
                    RECORDTESTCALLBACKARGS:          true,

                    LOGRECORDS: cIgnoreValue, /* Yields programmatically to setting in recorder-set */
                    WRITERESULT: cIgnoreValue, /* Yields programmatically to setting in recorder-set */

                    EVENTSSETNOTFORCONSOLE: cIgnoreValue,

                    LOGHOUSEKEEPRECORDS: true
                },

                "recorder-test": {
                    LOGRECORDS: cIgnoreValue,
                    WRITERESULT: cIgnoreValue,

                    LOGCLEANUPRECORDSUMMARY: false
                },

                "async-test": {
                    LOGREMOTEEXCEPTIONDETAILS: cIgnoreValue
                },

                "identifier-test": {
                    MAXIDS: 1000000000
                },

                "iterator-test": {
                    MAXITERATIONS: 1000000
                },

                "requestreply-test": {
                    DUMP_URL:         false,
                    DUMP_REQUESTDATA: false,
                    DUMP_REPLY:       false
                },






                "result-writer": {
                    WRITERESULT: cIgnoreValue,
                    LOGRESULT:   cIgnoreValue
                },


                "runnable-test": {
                    RECORDLOOPINFOS: cIgnoreValue,
                    DUMP_UNWINDEXCEPTIONS: cIgnoreValue
                },

                "testcallbacker": {
                    ANNOTATETESTCALLBACKS:     true,
                    RECORDNEWTESTCALLBACKS:    true,
                    RECORDCALLBACKINVOCATIONS: true,
                    RECORDTESTCALLBACKARGS:    true
                },



                "launchers": {

                    "launcher-ctrlserver": {
                        ANNOTATELAUNCHERCTRLSERVERCALLBACKS:          true,
                        RECORDLAUNCHERCTRLSERVERCALLBACKINVOCATIONS: true,
                        RECORDLAUNCHERCTRLSERVERCALLBACKARGS:        true,

                        SERVERDEFNAME_DEFAULT : "#root/serverdef.json"
                    },

                    "launcher-top": {
                        ANNOTATELAUNCHERTOPCALLBACKS:          true,
                        RECORDLAUNCHERTOPCALLBACKINVOCATIONS: true,
                        RECORDLAUNCHERTOPCALLBACKARGS:        true,

                        READCONFIG_ASYNC: true
                    },

                    "launcher-general": {
                        ANNOTATELAUNCHERCALLBACKS:           true,
                        RECORDLAUNCHERCALLBACKINVOCATIONS:   true,
                        RECORDLAUNCHERCALLBACKARGS:          true,

                        READCONFIG_ASYNC: true,  /* Attention, if set to false, all attempts to load configs from remote paths */

                        LOGRECORDS: cIgnoreValue
                    },

                    "launcher-many": {
                        LAUNCHABLESNAME: "/launchables.json",
                        LAUNCHABLESBASE: "launchables",
                        LAUNCHABLESPOSTFIX: ".json",

                        LAUNCHABLESFORCERRNAME: "/launchables-forcerr.json",
                        LAUNCHABLESFORCERRBASE: "launchables",
                        LAUNCHABLESFORCERRFRAGMENT: "-forcerr",

                        READTESTHOUSEKEEPING_ASYNC: true
                    },

                    "launchercallbacker": {
                        ANNOTATELAUNCHERCALLBACKS:           true,
                        RECORDNEWLAUNCHERCALLBACKS:          true,
                        RECORDLAUNCHERCALLBACKINVOCATIONS:   true,
                        RECORDLAUNCHERCALLBACKARGS:          true
                    }
                },


                "housekeep": {
                    "housekeep-constants": {
                        KILOBYTES:     1024,
                        KILOTHOUSANDS: 1000,
                        KILOFACTOR:    1000,
                        MEGAFACTOR:    1000000,
                        GIGAFACTOR:    1000000000,
                        TERAFACTOR:    1000000000000,

                        MAXHOUSEKEEPINGATTEMPTS: 16
                    },
                    "housekeeper-general": {
                        LOGRECORDS: true
                    },
                    "housekeeper-memory": {
                        MAXHEAPUSED_DEFAULT:        1000,
                        MAXHEAPUSED_HARDLIMIT:      1000000,
                        MINHEAPAVAILABLE_DEFAULT:   1,
                        MINHEAPAVAILABLE_HARDLIMIT: 0.25,
                        MINHOWMUCHTOCLEAN:          1,

                        THRASHINGHEAPAVAILABLE_DEFAULT:    100,
                        THRASHINGHEAPAVAILABLE_HARDLIMIT:  0.25,

                        IGNORETHRASHINGMILLIS: false,

                        THRASHINGMILLIS_TESTSPAYLOADS    : 30000,
                        THRASHINGMILLIS_CONFIGSPAYLOADS  : 60000,
                        THRASHINGMILLIS_CALLBACKSPAYLOADS: 90000,
                        THRASHINGMILLIS_EVENTSPAYLOADS   : 120000,
                        THRASHINGMILLIS_TESTS            : 150000,
                        THRASHINGMILLIS_CONFIGS          : 180000,
                        THRASHINGMILLIS_CALLBACKS        : 210000,
                        THRASHINGMILLIS_EVENTS           : 0,

                        LOGRECENTHOUSEKEEPINGACTIONS: true,
                        LOGACTIONSPERFORMEDINTHISHOUSEKEEPING: true
                    },
                    "snapshotter-memory": {
                        GARBAGECOLLECTBEFORESNAPSHOTMEMORY: true,
                        LOGSNAPHSOTS_MEMORY:                true,
                        LOGGARBAGECOLLECT:                  true
                    }
                },


                "releasing": {
                    "releasing-checker": {
                        LOGCHECKSEVENT:   true,
                        LOGEVENTSSUMMARY: true,

                        PRETTYDUMPRELEASEDEVENTSSUMMARY: true
                    }
                },



                "configs": {
                    "specparser": {
                        "specparser": {
                            LOGREPORTS : false,

                            ABANDONATFIRSTSYNTAXERROR: true,

                            VALUESCASEINSENSITIVE: true,
                            STRICTBOOLEANVALUES:   true,
                            STRICTENUMVALUES:      true
                        }
                    },
                    "parsedconfig": {
                        LOGEXPORTTARGETS: false
                    },

                    "queryparms": {
                        LOGRESOLVEDINGLOBALS: true
                    },
                    "exportparms": {
                        LOGEXPORTACTIONS: cIgnoreValue
                    }
                },



                "pathsloader": {
                    "cmpandtestpathsloader": {
                        ANNOTATECMPANDTESTSPATHSLOADERCALLBACKS:         true,
                        RECORDCMPANDTESTSPATHSLOADERCALLBACKINVOCATIONS: true,
                        RECORDCMPANDTESTSPATHSLOADERCALLBACKARGS:        true,

                        CMPPATHSNAME:   "#root/cmppath.json",
                        TESTSPATHSNAME: "#root/testspath.json"
                    }
                },



                "resloader": {

                    "resloader": {
                        LOGRECORDS: true,
                        LOGRESLOADS: true,

                        LOGEXCEPTIONDETAILS: true,

                        ANNOTATERESLOADERCALLBACKS:         true,
                        RECORDRESLOADERCALLBACKINVOCATIONS: true,
                        RECORDRESLOADERCALLBACKARGS:        true,

                        RESEVTSSETNOTFORCONSOLE : "RESEVTKINDS_NOTFORCONSOLE_NONE"
                    },

                    "cmploader": {
                        LOADCMP_FORCESYNC: false,

                        DEFAULTCMPPATHSFORPACKAGEPATHS: [
                            /*
                            {
                                "comment":     "#root is defined in resloader.js as the relative path from the resloader.js file to the root of the project  RESLOADER_PATH_TO_ROOT = ../../../"
                            },
                            {
                                "packagePath": "common-test",
                                "resPath":     "#root/lib/common-test/"
                            },
                            {
                                "packagePath": "ttst",
                                "resPath":     "#root/lib/ttst/"
                            },
                            {
                                "packagePath": "general-test",
                                "resPath":     "#root/lib/general-test/"
                            },
                            {
                                "packagePath": "springnut-test",
                                "resPath":     "#root/lib/springnut-test/"
                            },
                            {
                                "packagePath": "modulo10-test",
                                "resPath":     "#root/lib/modulo10-test/"
                            },



                            {
                                "packagePath": "#remote",
                                "resPath":     "http://localhost:8080/springnut/tests"
                            },
                            {
                                "packagePath": "#springnutremote",
                                "resPath":     "#remote/springnut/lib/"
                            },
                            {
                                "packagePath": "springnut-test-example-remote",
                                "resPath":     "#springnutremote/springnut-test/",
                                "comment":     "Expands to:  http://localhost:8080/springnut/tests/     /springnut/lib/    /springnut-test/",
                                "comment2":    "De forma que @cmppath/springnut-test-example-remote/ine-test/ficheros-test/ficheros-list-ine-springnut-test",
                                "comment3":    "Expande a  http://localhost:8080/springnut/tests/    /springnut/lib/    /springnut-test/    ine-test/ficheros-test/ficheros-list-ine-springnut-test   auto terminado en .js"
                            },





                            {
                                "packagePath_OLD": "common-test",
                                "resPath":     "../"
                            },
                            {
                                "packagePath_OLD": "ttst",
                                "resPath":     "../../ttst/"
                            },
                            {
                                "packagePath_OLD": "general-test",
                                "resPath":     "../../general-test/"
                            },
                            {
                                "packagePath_OLD": "springnut-test",
                                "resPath":     "../../springnut-test/"
                            },
                            {
                                "packagePath_OLD": "modulo10-test",
                                "resPath":     "../../modulo10-test/"
                            }
                            */
                        ]
                    },

                    "specloader": {

                        DEFAULTSPECPATHSFORPACKAGEPATHS: [
                            /*
                            {
                                "comment":     "#root is defined in resloader.js as the relative path from the resloader.js file to the root of the project  RESLOADER_PATH_TO_ROOT = ../../../"
                            },
                            {
                                "packagePath": "#testsroot",
                                "resPath":     "#root/tests/"
                            },
                            {
                                "packagePath": "ttst",
                                "resPath":     "#root/tests/ttst/"
                            },
                            {
                                "packagePath": "general",
                                "resPath":     "#root/tests/general/"
                            },



                            {
                                "packagePath": "springnut-host",
                                "resPath":     "#root/tests/springnut/"
                            },
                            {
                                "packagePath": "#remote",
                                "resPath":     "http://localhost:8080/springnut/tests/"
                            },
                            {
                                "packagePath": "springnut",
                                "resPath":     [
                                    "#testsroot/springnut/",
                                    "#remote/springnut/specs/"
                                ]
                            },



                            {
                                "packagePath": "modulo10",
                                "resPath":     "#root/tests/modulo10/"
                            },




                            {
                                "packagePath": "teatro",
                                "resPath":     "#root/tests/teatro/"
                            },





                            {
                                "packagePath": "springnut-example-local",
                                "resPath":     "../../../tests/springnut/"
                            },

                            {
                                "packagePath": "springnut-example-local",
                                "resPath":     "../../../tests/springnut/"
                            },
                            {
                                "packagePath": "springnut-example-remote",
                                "resPath":     "#remotehost/springnut/specs/"
                            },
                            {
                                "packagePath": "springnut-example-local-andremote",
                                "resPath":     [
                                    "../../../tests/springnut/",
                                    "#remote/springnut/specs/"
                                ]
                            },
                            {
                                "packagePath": "springnut-example-remotemonitored-andlocal",
                                "resPath":     [
                                    "#remote/springnut/specs/",
                                    "../../../tests/springnut/"
                                ]
                            },
                            {
                                "packagePath": "springnut-example-remote-andlocal",
                                "resPath":     [
                                    "#remote/springnut/specs/",
                                    "../../../tests/springnut/"
                                ]
                            }
                            */
                        ]
                    }
                },
                
                "xloader": {
                    "xloader": {
                        LOGRECORDS:          cIgnoreValue,
                        LOGXLOADS:           cIgnoreValue,
                        LOGEXCEPTIONDETAILS: cIgnoreValue,

                        ANNOTATEXLOADERCALLBACKS:         true,
                        RECORDXLOADERCALLBACKINVOCATIONS: true,
                        RECORDXLOADERCALLBACKARGS:        true,

                        XLOEVESSETNOTFORCONSOLE: "XLOEVEKINDS_NOTFORCONSOLE_DEFAULT",

                        LOADX_FORCESYNC: false
                    }
                }
            },



            "general-test": {
                "alloc-test": {
                    MAXARRAYLENTOCREATE:          1000000
                },
                "growmemory-test": {
                    BUFFERTOARRAYSIZEFACTOR:      2,
                    BUFFERTOOBJECTSIZEFACTOR:     4,
                    CONSERVATIVERETRYSIZEFACTOR:  2,
                    MINTOGROW:                    100000,
                    MINARRAYLENTOCREATE:          10000,
                    MAXARRAYLENTOCREATE:          1000000,
                    MAXGROWITERATIONS:            256
                },
                "delay-test": {
                    LOGMINDELAY: 2000,
                    LOGDELAYBEGIN: true,
                    LOGDELAYDONE: true
                }
            },


            "infrasvcs": {
                "useplatform": {
                    USEPLATFORM: "NODEJS"
                },

                "httprequest": {
                    USEPLATFORM_HTTPREQUEST: "JQUERY"
                }
            },



            "ttst": {
                "queryconfig": {
                    "queryexpected-ttst": {
                        READEXPECTEDVALUES_ASYNC: false
                    }
                },
                
                "ttst-test": {
                    LOGRECORDS : cIgnoreValue,

                    ANNOTATETTSTCALLBACKS:          true,
                    RECORDTTSTCALLBACKINVOCATIONS:  true,
                    RECORDTTSTCALLBACKARGS:         true,

                    EVTSSETNOTFORCONSOLE : "EVTKINDS_NOTFORCONSOLE_DEFAULT"
                },

                "ttstcallbacker": {
                    ANNOTATETTSTCALLBACKS:          true,
                    RECORDNEWTTSTCALLBACKS:         true,
                    RECORDTTSTCALLBACKINVOCATIONS:  true,
                    RECORDTTSTCALLBACKARGS:         true
                }

            },


            "xloader-test": {

                "xloader-sync-test": {
                    XNAMESTOLOAD: [
                        "../../../serverdef.json",
                        "#root/serverdef.json"
                    ],
                    LOGLOADS : true
                },

                "xloader-async-test": {
                    XNAMESTOLOAD: [
                        "../../../serverdef.json",
                        "#root/serverdef.json"
                    ],
                    LOGLOADS : true,

                    ANNOTATEXLOADERCALLBACKS:         true,
                    RECORDXLOADERCALLBACKINVOCATIONS: true,
                    RECORDXLOADERCALLBACKARGS       : true
                }
            },


            "browser-test": {
                "protractor-test": {
                    PROTRACTOR_SELENIUMADDRESS: "http://localhost:4444/wd/hub",
                    PROTRACTOR_HITPOINT:        "http://localhost:8080/springnut",

                    LOGTERMINALREPORTERTOCONSOLE: true,
                    LOGFUNCTIONSPECS:             true
                },

                "common-testhelper": {
                    RECORDPTR:       true,
                    LOGMISSINGPARMS: true,
                    LOGDOPTRSTEPS:   true
                },
                "composable-testhelper": {
                },
                "multicomposite-testhelper": {
                },
                "visitmanypages-testhelper": {
                },
                "visitpage-testhelper": {
                },
                "browserlogin-testhelper": {
                }
            }

    };




        var pgInitWithDefaults = function( theToInit) {

            if( !theToInit) {
            }

            /* Optionally fill in override values requiring algorithmic computation.

             Alternatively, you may insert in the Defaults structure below
             self executing inline funcions like:

             "ANOVERRIDENAME": (function() {

             })(),

             */
        };
        pgInitWithDefaults( Settings);









        var aModule = {
            "Settings":     Settings,
            "cIgnoreValue": cIgnoreValue
        };
        if( aModule){}/* CQT */



        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {
            return aMod_definer();
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define( function () {
            return aMod_definer();
        });
    }


}());

