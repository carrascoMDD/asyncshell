function pGenJSON() {
    var aSource =   {
        "name": "suite-10-compare-test-sub-level02",
        "runnable": true,
        "parms": {
            "compare": {
            }
        },
        "scheduleSubs": "SERIES",
        "subs": [
            {
                "name": "suite-10-compare-test-sub-level02-sub-both-null-ok",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left":  {
                            "item01": {
                                "value01": null
                            }
                        },
                        "right":  {
                            "item01": {
                                "value01": null
                            }
                        }
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-both-bool-false-ok",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": false
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": false
                            }
                        }
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-both-bool-true-ok",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": true
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": true
                            }
                        }
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-both-num-0-ok",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": 0
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": 0
                            }
                        }
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-both-num-1-ok",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": 1
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": 1
                            }
                        }
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-both-str-empty-ok",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": ""
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": ""
                            }
                        }
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-both-str-notempty-ok",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": "a"
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": "a"
                            }
                        }
                    }
                }
            },


            {
                "name": "suite-10-compare-test-sub-level02-sub-right-null-fail",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": 1
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": null
                            }
                        },
                        "expectedLeftToRightDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "either is null"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "expectedRightToLeftDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "either is null"
                                            }
                                        ]
                                    }
                                ]
                            }

                        ]
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-right-bool-false-fail",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": true
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": false
                            }
                        },
                        "expectedLeftToRightDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "boolean",
                                                "oneDetails": true,
                                                "otherDetails": false
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "expectedRightToLeftDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "boolean",
                                                "oneDetails": false,
                                                "otherDetails": true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-right-bool-true-fail",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": false
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": true
                            }
                        },
                        "expectedLeftToRightDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "boolean",
                                                "oneDetails": false,
                                                "otherDetails": true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "expectedRightToLeftDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "boolean",
                                                "oneDetails": true,
                                                "otherDetails": false
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-right-num-0-fail",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": 1
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": 0
                            }
                        },
                        "expectedLeftToRightDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "number",
                                                "oneDetails": 1,
                                                "otherDetails": 0
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "expectedRightToLeftDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "number",
                                                "oneDetails": 0,
                                                "otherDetails": 1
                                            }
                                        ]
                                    }
                                ]
                            }

                        ]
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-right-num-1-fail",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": 0
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": 1
                            }
                        },
                        "expectedLeftToRightDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "number",
                                                "oneDetails": 0,
                                                "otherDetails": 1
                                            }
                                        ]
                                    }
                                ]
                            }

                        ],
                        "expectedRightToLeftDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "number",
                                                "oneDetails": 1,
                                                "otherDetails": 0
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-right-str-empty",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left":  {
                            "item01": {
                                "value01": "a"
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": ""
                            }
                        },
                        "expectedLeftToRightDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "string",
                                                "oneDetails": "a",
                                                "otherDetails": ""
                                            }
                                        ]
                                    }
                                ]
                            }

                        ],
                        "expectedRightToLeftDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "string",
                                                "oneDetails": "",
                                                "otherDetails": "a"
                                            }
                                        ]
                                    }
                                ]
                            }

                        ]
                    }
                }
            },
            {
                "name": "suite-10-compare-test-sub-level02-sub-right-str-notempty",
                "runnable": true,
                "parms": {
                    "compare": {
                        "left": {
                            "item01": {
                                "value01": ""
                            }
                        },
                        "right": {
                            "item01": {
                                "value01": "a"
                            }
                        },
                        "expectedLeftToRightDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "string",
                                                "oneDetails": "",
                                                "otherDetails": "a"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "expectedRightToLeftDeltas": [
                            {
                                "onePath": "",
                                "otherPath": "",
                                "reason": "subs",
                                "subDeltas": [
                                    {
                                        "onePath": "item01",
                                        "otherPath": "item01",
                                        "reason": "subs",
                                        "subDeltas": [
                                            {
                                                "onePath": "item01.value01",
                                                "otherPath": "item01.value01",
                                                "reason": "values",
                                                "details": "string",
                                                "oneDetails": "a",
                                                "otherDetails": ""
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        ]
    };


    var aResult = { "name": "suite-10-compare-test-sub-level02",
        "runnable": true,
        "parms": {
            "compare": {
            }
        },
        "scheduleSubs": "SERIES",
        "subs": [ ]
    };





    var someSourceSubs = aSource.subs;
    var aNumSourceSubs = someSourceSubs.length;

    var someResultSubs =  aResult.subs;

    var anExpectedLeftToRightDeltasTemplate =  [
        {
            "onePath": "",
            "otherPath": "",
            "reason": "subs",
            "subDeltas": [
                {
                    "onePath": "item01",
                    "otherPath": "item01",
                    "reason": "subs",
                    "subDeltas": [
                        {
                            "onePath": "item01.value01",
                            "otherPath": "item01.value01",
                            "reason": "subs"
                        }
                    ]
                }
            ]
        }
    ];

    var anExpectedRightToLeftDeltasTemplate = [
        {
            "onePath": "",
            "otherPath": "",
            "reason": "subs",
            "subDeltas": [
                {
                    "onePath": "item01",
                    "otherPath": "item01",
                    "reason": "subs",
                    "subDeltas": [
                        {
                            "onePath": "item01.value01",
                            "otherPath": "item01.value01",
                            "reason": "subs"
                        }
                    ]
                }
            ]
        }
    ];


    for( var aSourceSubIdx=0; aSourceSubIdx < aNumSourceSubs; aSourceSubIdx++) {

        var aSourceSub = someSourceSubs[ aSourceSubIdx];

        var aResultSub = { };

        aResultSub.name = aSourceSub.name;
        aResultSub.runnable = aSourceSub.runnable;
        aResultSub.parms = {
            "compare": {
                "left": {
                    "item01": {
                    }
                },
                "right": {
                    "item01": {
                    }
                },


            }
        };

        aResultSub.parms.compare.left.item01.item0101  = aSourceSub.parms.compare.left.item01;
        aResultSub.parms.compare.right.item01.item0101 = aSourceSub.parms.compare.right.item01;

        if( aSourceSub.parms.compare.expectedLeftToRightDeltas) {
            aResultSub.parms.compare.expectedLeftToRightDeltas = anExpectedLeftToRightDeltasTemplate;
            aResultSub.parms.compare.expectedLeftToRightDeltas[ 0].subDeltas[ 0].subDeltas[ 0].subDeltas = [ aSourceSub.parms.compare.expectedLeftToRightDeltas[ 0].subDeltas[ 0]];
        }

        if( aSourceSub.parms.compare.expectedRightToLeftDeltas) {
            aResultSub.parms.compare.expectedRightToLeftDeltas = anExpectedRightToLeftDeltasTemplate;
            aResultSub.parms.compare.expectedRightToLeftDeltas[ 0].subDeltas[ 0].subDeltas[ 0].subDeltas = [ aSourceSub.parms.compare.expectedRightToLeftDeltas[ 0].subDeltas[ 0]];
        }

        aResult.subs.push( aResultSub);
    }

    console.log( JSON.stringify( aResult, null, 4));

}


pGenJSON();

