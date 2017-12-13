var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":233,"id":18179,"methods":[{"el":140,"sc":21,"sl":137},{"el":145,"sc":21,"sl":142},{"el":153,"sc":5,"sl":51},{"el":163,"sc":5,"sl":155},{"el":170,"sc":5,"sl":165},{"el":177,"sc":5,"sl":172},{"el":205,"sc":5,"sl":179},{"el":231,"sc":5,"sl":208}],"name":"CubeCapabilityChecker","sl":48}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":51},{"sl":137},{"sl":142},{"sl":155},{"sl":165},{"sl":172},{"sl":208}],"name":"testFailQuery","pass":false,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":64},{"sl":67},{"sl":68},{"sl":72},{"sl":105},{"sl":111},{"sl":117},{"sl":125},{"sl":131},{"sl":132},{"sl":136},{"sl":139},{"sl":144},{"sl":151},{"sl":152},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":211},{"sl":212},{"sl":213},{"sl":217},{"sl":218},{"sl":219},{"sl":228}]},"test_30":{"methods":[{"sl":51},{"sl":137},{"sl":142},{"sl":155},{"sl":165},{"sl":172},{"sl":208}],"name":"testNormalQuery","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":64},{"sl":67},{"sl":68},{"sl":72},{"sl":105},{"sl":111},{"sl":117},{"sl":125},{"sl":131},{"sl":132},{"sl":136},{"sl":139},{"sl":144},{"sl":151},{"sl":152},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":211},{"sl":212},{"sl":213},{"sl":217},{"sl":218},{"sl":219},{"sl":228}]},"test_44":{"methods":[{"sl":51},{"sl":155},{"sl":165},{"sl":172},{"sl":208}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":64},{"sl":67},{"sl":68},{"sl":72},{"sl":105},{"sl":111},{"sl":117},{"sl":125},{"sl":131},{"sl":151},{"sl":152},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":211},{"sl":212},{"sl":213},{"sl":217},{"sl":218},{"sl":219},{"sl":228}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [24, 44, 30], [], [], [24, 44, 30], [24, 44, 30], [], [], [], [24, 44, 30], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [], [], [], [], [], [24, 44, 30], [], [], [], [], [], [24, 44, 30], [], [], [], [], [], [], [], [24, 44, 30], [], [], [], [], [], [24, 44, 30], [24, 30], [], [], [], [24, 30], [24, 30], [], [24, 30], [], [], [24, 30], [], [24, 30], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [], [], [], [], [], [], [24, 44, 30], [], [], [], [], []]