'use strict';

/*
 overrides.js
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


        var ModuleName     = "overrides.js";
        var ModulePackages = "#root";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var cIgnoreValue = {"ignoreoverride": true};
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
                    RELEASE_WITHID_TITLE:  false
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
                    LOGRECEIVEDBYMETHODNAMES:     true
                },

                "recorded-test": {
                    LOGRECORDS: true, /* Yields programmatically to setting in recorder-set */
                    WRITERESULT: false, /* Yields programmatically to setting in recorder-set */

                    EVENTSSETNOTFORCONSOLE: "EVENTKINDS_NOTFORCONSOLE_NONE",

                    LOGHOUSEKEEPRECORDS: true
                },

                "recorder-test": {
                    LOGRECORDS:  true,
                    WRITERESULT: false,

                    LOGCLEANUPRECORDSUMMARY: false
                },

                "async-test": {
                    LOGREMOTEEXCEPTIONDETAILS: true
                },

                "identifier-test": {
                },

                "iterator-test": {
                },

                "requestreply-test": {
                    DUMP_URL:         false,
                    DUMP_REQUESTDATA: false,
                    DUMP_REPLY:       false
                },




                "result-writer": {
                    WRITERESULT: false,
                    LOGRESULT:   false
                },

                "runnable-test": {
                    RECORDLOOPINFOS: true,
                    DUMP_UNWINDEXCEPTIONS: true
                },

                "testcallbacker": {
                },





                "launchers": {

                    "launcher-ctrlserver": {
                        SERVERDEFNAME_DEFAULT : "#root/serverdef.json"
                    },

                    "launcher-top": {
                        READCONFIG_ASYNC: true
                    },

                    "launcher-general": {
                        LOGRECORDS: true,

                        READCONFIG_ASYNC: true  /* Attention, if set to false, all attempts to load configs from remote paths */
                    },
                    "launcher-many": {
                        READTESTHOUSEKEEPING_ASYNC: true
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
                            LOGREPORTS : true
                        }
                    },
                    "parsedconfig": {
                        LOGEXPORTTARGETS: false
                    },
                    "queryparms": {
                        LOGRESOLVEDINGLOBALS: true
                    },
                    "exportparms": {
                        LOGEXPORTACTIONS: false
                    }
                },


                "pathsloader": {
                    "cmpandtestpathsloader": {
                    }
                },


                "resloader": {

                    "resloader": {
                        LOGRECORDS:   true,
                        LOGRESLOADS:  true,

                        LOGEXCEPTIONDETAILS: true,

                        RESEVTSSETNOTFORCONSOLE : "RESEVTKINDS_NOTFORCONSOLE_NONE"
                    },

                    "cmploader": {
                    },

                    "specloader": {

                    }
                },

                "xloader": {
                    "xloader": {
                        LOGRECORDS:            true,
                        LOGXLOADS:             true,
                        LOGEXCEPTIONDETAILS:   true,

                        XLOEVESSETNOTFORCONSOLE: "XLOEVEKINDS_NOTFORCONSOLE_NONE"
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
                },

                "httprequest": {
                }
            },


            "infrasvcs-test": {
                "httprequest": {
                    "httprequest-generic-test": {
                        URLHOSTREPLACEMENT: "localhost",
                        XXXURLHOSTREPLACEMENT: "192.168.69.82",
                        URLPORTREPLACEMENT: "64404"

                    }
                }
            },


            "ttst": {
                "queryconfig": {
                    "queryfields-ttst": {
                    }
                },

                "ttst-test": {
                    LOGRECORDS : true,

                    EVTSSETNOTFORCONSOLE : "EVTKINDS_NOTFORCONSOLE_NONE"
                },

                "ttstcallbacker": {
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
                    LOGLOADS : true
                }
            },


            "browser-test": {
                "protractor-test": {
                    PROTRACTOR_SELENIUMADDRESS:    "http://localhost:4444/wd/hub",
                    XXXPROTRACTOR_SELENIUMADDRESS: "http://192.168.69.102:4444/wd/hub",
                    ZZZPROTRACTOR_HITPOINT:        "http://localhost:8080/springnut",
                    XXXPROTRACTOR_HITPOINT:        "http://192.168.69.82:8080/springnut",
                    PROTRACTOR_HITPOINT:           "http://www.SpringNut.org/springnut",

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






        var pgInitWithOverrides = function( theToInit) {

            if( !theToInit) {
            }

            /* Optionally fill in override values requiring algorithmic computation.

             Alternatively, you may insert in the Overrides structure below
             self executing inline funcions like:

             "ANOVERRIDENAME": (function() {

             })(),

             */
        };
        pgInitWithOverrides( Settings);



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

