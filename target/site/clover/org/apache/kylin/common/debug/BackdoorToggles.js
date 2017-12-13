var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":288,"id":34441,"methods":[{"el":41,"sc":5,"sl":39},{"el":49,"sc":5,"sl":43},{"el":57,"sc":5,"sl":51},{"el":66,"sc":5,"sl":60},{"el":70,"sc":5,"sl":68},{"el":74,"sc":5,"sl":72},{"el":78,"sc":5,"sl":76},{"el":82,"sc":5,"sl":80},{"el":86,"sc":5,"sl":84},{"el":90,"sc":5,"sl":88},{"el":94,"sc":5,"sl":92},{"el":98,"sc":5,"sl":96},{"el":102,"sc":5,"sl":100},{"el":110,"sc":5,"sl":104},{"el":120,"sc":5,"sl":112},{"el":128,"sc":5,"sl":122},{"el":132,"sc":5,"sl":130},{"el":141,"sc":5,"sl":134},{"el":145,"sc":5,"sl":143},{"el":149,"sc":5,"sl":147}],"name":"BackdoorToggles","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_12":{"methods":[{"sl":80},{"sl":122},{"sl":130},{"sl":134},{"sl":143},{"sl":147}],"name":"testQueryException","pass":true,"statements":[{"sl":81},{"sl":123},{"sl":124},{"sl":125},{"sl":131},{"sl":135},{"sl":136},{"sl":137},{"sl":144},{"sl":148}]},"test_121":{"methods":[{"sl":68},{"sl":134}],"name":"verifyFirstRow","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_122":{"methods":[{"sl":68},{"sl":134}],"name":"verifyScanWithUnevaluatableFilter","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_125":{"methods":[{"sl":84},{"sl":134},{"sl":143}],"name":"verifyScanRangePlanner","pass":true,"statements":[{"sl":85},{"sl":135},{"sl":136},{"sl":137},{"sl":144}]},"test_130":{"methods":[{"sl":68},{"sl":134}],"name":"verifyAggregateAndHavingFilter","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_133":{"methods":[{"sl":84},{"sl":134},{"sl":143}],"name":"verifySegmentSkipping","pass":true,"statements":[{"sl":85},{"sl":135},{"sl":136},{"sl":137},{"sl":144}]},"test_135":{"methods":[{"sl":84},{"sl":134},{"sl":143}],"name":"verifySegmentSkipping2","pass":true,"statements":[{"sl":85},{"sl":135},{"sl":136},{"sl":137},{"sl":144}]},"test_136":{"methods":[{"sl":68},{"sl":134}],"name":"verifyScanWithEvaluatableFilter","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_166":{"methods":[{"sl":68},{"sl":134}],"name":"testAggregationCacheSpill","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_167":{"methods":[{"sl":68},{"sl":134}],"name":"testAdvanced","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_171":{"methods":[{"sl":68},{"sl":134}],"name":"testAppend","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_183":{"methods":[{"sl":68},{"sl":134}],"name":"testMultiThreadRead","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_201":{"methods":[{"sl":68},{"sl":134}],"name":"testBasics","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_218":{"methods":[{"sl":68},{"sl":134}],"name":"testMultiThreadWriteRead","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_238":{"methods":[{"sl":68},{"sl":134}],"name":"testAggregate","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_24":{"methods":[{"sl":100},{"sl":122},{"sl":130},{"sl":134},{"sl":143}],"name":"testFailQuery","pass":false,"statements":[{"sl":101},{"sl":123},{"sl":124},{"sl":125},{"sl":131},{"sl":135},{"sl":136},{"sl":137},{"sl":144}]},"test_257":{"methods":[{"sl":68},{"sl":134}],"name":"testAggregationCacheInMem","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_258":{"methods":[{"sl":68},{"sl":134}],"name":"testSingleThreadRead","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_261":{"methods":[{"sl":68},{"sl":134}],"name":"testSingleThreadWriteRead","pass":true,"statements":[{"sl":69},{"sl":135},{"sl":136},{"sl":137}]},"test_30":{"methods":[{"sl":100},{"sl":122},{"sl":130},{"sl":134},{"sl":143}],"name":"testNormalQuery","pass":true,"statements":[{"sl":101},{"sl":123},{"sl":124},{"sl":125},{"sl":131},{"sl":135},{"sl":136},{"sl":137},{"sl":144}]},"test_44":{"methods":[{"sl":100},{"sl":122},{"sl":130},{"sl":134},{"sl":143}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":101},{"sl":123},{"sl":124},{"sl":125},{"sl":131},{"sl":135},{"sl":136},{"sl":137},{"sl":144}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [167, 136, 238, 257, 261, 183, 218, 122, 201, 171, 166, 121, 130, 258], [167, 136, 238, 257, 261, 183, 218, 122, 201, 171, 166, 121, 130, 258], [], [], [], [], [], [], [], [], [], [], [12], [12], [], [], [133, 135, 125], [133, 135, 125], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [30, 24, 44], [30, 24, 44], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [12, 30, 24, 44], [12, 30, 24, 44], [12, 30, 24, 44], [12, 30, 24, 44], [], [], [], [], [12, 30, 24, 44], [12, 30, 24, 44], [], [], [133, 167, 12, 136, 238, 257, 261, 30, 183, 135, 218, 24, 122, 125, 201, 44, 171, 166, 121, 130, 258], [133, 167, 12, 136, 238, 257, 261, 30, 183, 135, 218, 24, 122, 125, 201, 44, 171, 166, 121, 130, 258], [133, 167, 12, 136, 238, 257, 261, 30, 183, 135, 218, 24, 122, 125, 201, 44, 171, 166, 121, 130, 258], [133, 167, 12, 136, 238, 257, 261, 30, 183, 135, 218, 24, 122, 125, 201, 44, 171, 166, 121, 130, 258], [], [], [], [], [], [133, 12, 30, 135, 24, 125, 44], [133, 12, 30, 135, 24, 125, 44], [], [], [12], [12], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]