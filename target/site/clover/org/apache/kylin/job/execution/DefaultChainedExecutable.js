var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":166,"id":21895,"methods":[{"el":38,"sc":5,"sl":36},{"el":45,"sc":5,"sl":40},{"el":68,"sc":5,"sl":47},{"el":80,"sc":5,"sl":70},{"el":86,"sc":5,"sl":82},{"el":140,"sc":5,"sl":88},{"el":145,"sc":5,"sl":142},{"el":150,"sc":5,"sl":147},{"el":159,"sc":5,"sl":152},{"el":165,"sc":5,"sl":161}],"name":"DefaultChainedExecutable","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_108":{"methods":[{"sl":36},{"sl":40},{"sl":47},{"sl":70},{"sl":88},{"sl":142},{"sl":147},{"sl":161}],"name":"testSucceedAndFailed","pass":true,"statements":[{"sl":37},{"sl":41},{"sl":42},{"sl":43},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":77},{"sl":78},{"sl":90},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":119},{"sl":123},{"sl":127},{"sl":129},{"sl":133},{"sl":136},{"sl":137},{"sl":138},{"sl":144},{"sl":149},{"sl":163},{"sl":164}]},"test_109":{"methods":[{"sl":36},{"sl":40},{"sl":47},{"sl":70},{"sl":88},{"sl":142},{"sl":161}],"name":"testSingleTaskJob","pass":true,"statements":[{"sl":37},{"sl":41},{"sl":42},{"sl":43},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":72},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":90},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":112},{"sl":115},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":144},{"sl":163},{"sl":164}]},"test_111":{"methods":[{"sl":36},{"sl":40},{"sl":47},{"sl":70},{"sl":88},{"sl":142},{"sl":161}],"name":"testSucceed","pass":true,"statements":[{"sl":37},{"sl":41},{"sl":42},{"sl":43},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":77},{"sl":78},{"sl":90},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":127},{"sl":129},{"sl":133},{"sl":144},{"sl":163},{"sl":164}]},"test_114":{"methods":[{"sl":36}],"name":"testParseToJobStep","pass":true,"statements":[{"sl":37}]},"test_115":{"methods":[{"sl":36}],"name":"testParseToJobInstance","pass":true,"statements":[{"sl":37}]},"test_116":{"methods":[{"sl":36},{"sl":40},{"sl":47},{"sl":70},{"sl":82},{"sl":142},{"sl":147},{"sl":161}],"name":"testSucceedAndError","pass":true,"statements":[{"sl":37},{"sl":41},{"sl":42},{"sl":43},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":72},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":84},{"sl":85},{"sl":144},{"sl":149},{"sl":163},{"sl":164}]},"test_118":{"methods":[{"sl":36},{"sl":40},{"sl":142},{"sl":161}],"name":"testDefaultChainedExecutable","pass":true,"statements":[{"sl":37},{"sl":41},{"sl":42},{"sl":43},{"sl":144},{"sl":163},{"sl":164}]},"test_119":{"methods":[{"sl":36},{"sl":40},{"sl":47},{"sl":70},{"sl":88},{"sl":142},{"sl":147},{"sl":161}],"name":"testDiscard","pass":true,"statements":[{"sl":37},{"sl":41},{"sl":42},{"sl":43},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":72},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":90},{"sl":92},{"sl":93},{"sl":94},{"sl":144},{"sl":149},{"sl":163},{"sl":164}]},"test_21":{"methods":[{"sl":36},{"sl":40},{"sl":142},{"sl":161}],"name":"testBasics","pass":true,"statements":[{"sl":37},{"sl":41},{"sl":42},{"sl":43},{"sl":144},{"sl":163},{"sl":164}]},"test_6":{"methods":[{"sl":36},{"sl":40},{"sl":142}],"name":"testExceptionOnLostJobOutput","pass":true,"statements":[{"sl":37},{"sl":41},{"sl":42},{"sl":144}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [115, 21, 108, 109, 6, 114, 111, 116, 119, 118], [115, 21, 108, 109, 6, 114, 111, 116, 119, 118], [], [], [21, 108, 109, 6, 111, 116, 119, 118], [21, 108, 109, 6, 111, 116, 119, 118], [21, 108, 109, 6, 111, 116, 119, 118], [21, 108, 109, 111, 116, 119, 118], [], [], [], [108, 109, 111, 116, 119], [], [108, 109, 111, 116, 119], [108, 109, 111, 116, 119], [108, 109, 111, 116, 119], [108, 109, 111, 116, 119], [108, 109, 111, 116, 119], [108, 109, 111, 116, 119], [], [], [108, 109, 111, 116, 119], [], [], [108, 109, 111, 116, 119], [], [], [108, 109, 111, 116, 119], [108, 109, 111, 116, 119], [], [], [], [], [], [108, 109, 111, 116, 119], [], [108, 109, 111, 116, 119], [108, 109, 111, 116, 119], [108, 111], [], [108, 109, 111, 116, 119], [108, 109, 111, 116, 119], [108, 109, 111, 116, 119], [], [], [], [116], [], [116], [116], [], [], [108, 109, 111, 119], [], [108, 109, 111, 119], [], [108, 109, 111, 119], [119], [119], [108, 109, 111], [], [], [108, 109, 111], [108, 109, 111], [108, 109, 111], [108, 109, 111], [108, 109, 111], [108, 109, 111], [108, 109, 111], [108, 109, 111], [108, 109, 111], [], [], [108, 109, 111], [108, 111], [], [108, 109, 111], [], [], [108, 109, 111], [], [], [], [108, 109, 111], [109, 111], [109, 111], [109, 111], [108, 111], [], [], [], [108, 111], [], [108, 111], [], [], [], [108, 111], [], [], [108], [108], [108], [], [], [], [21, 108, 109, 6, 111, 116, 119, 118], [], [21, 108, 109, 6, 111, 116, 119, 118], [], [], [108, 116, 119], [], [108, 116, 119], [], [], [], [], [], [], [], [], [], [], [], [21, 108, 109, 111, 116, 119, 118], [], [21, 108, 109, 111, 116, 119, 118], [21, 108, 109, 111, 116, 119, 118], [], []]