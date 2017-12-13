var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":298,"id":53694,"methods":[{"el":83,"sc":5,"sl":66},{"el":104,"sc":5,"sl":85},{"el":132,"sc":5,"sl":106},{"el":162,"sc":5,"sl":134},{"el":296,"sc":5,"sl":290}],"name":"ScanRangePlannerBase","sl":44},{"el":288,"id":53789,"methods":[{"el":202,"sc":9,"sl":171},{"el":209,"sc":9,"sl":204},{"el":219,"sc":9,"sl":211},{"el":223,"sc":9,"sl":221},{"el":233,"sc":9,"sl":225},{"el":268,"sc":9,"sl":235},{"el":278,"sc":9,"sl":270},{"el":286,"sc":9,"sl":280}],"name":"ScanRangePlannerBase.ColumnRange","sl":164}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_125":{"methods":[{"sl":66},{"sl":85},{"sl":106},{"sl":134},{"sl":171},{"sl":211},{"sl":221},{"sl":225},{"sl":235}],"name":"verifyScanRangePlanner","pass":true,"statements":[{"sl":67},{"sl":70},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":82},{"sl":86},{"sl":88},{"sl":93},{"sl":94},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":107},{"sl":108},{"sl":109},{"sl":117},{"sl":118},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":131},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":146},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":157},{"sl":158},{"sl":159},{"sl":161},{"sl":172},{"sl":175},{"sl":176},{"sl":179},{"sl":180},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":188},{"sl":189},{"sl":191},{"sl":192},{"sl":193},{"sl":198},{"sl":212},{"sl":216},{"sl":217},{"sl":222},{"sl":226},{"sl":227},{"sl":228},{"sl":229},{"sl":231},{"sl":236},{"sl":238},{"sl":242},{"sl":247},{"sl":253},{"sl":259},{"sl":265},{"sl":266},{"sl":267}]},"test_133":{"methods":[{"sl":66},{"sl":85},{"sl":106},{"sl":134},{"sl":171},{"sl":211},{"sl":221},{"sl":225},{"sl":290}],"name":"verifySegmentSkipping","pass":true,"statements":[{"sl":67},{"sl":70},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":82},{"sl":86},{"sl":88},{"sl":93},{"sl":94},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":113},{"sl":117},{"sl":118},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":131},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":148},{"sl":150},{"sl":151},{"sl":152},{"sl":157},{"sl":158},{"sl":159},{"sl":161},{"sl":172},{"sl":175},{"sl":176},{"sl":179},{"sl":180},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":188},{"sl":189},{"sl":191},{"sl":192},{"sl":212},{"sl":216},{"sl":217},{"sl":222},{"sl":226},{"sl":227},{"sl":228},{"sl":231},{"sl":291},{"sl":294}]},"test_135":{"methods":[{"sl":66},{"sl":85},{"sl":106},{"sl":134},{"sl":171},{"sl":211},{"sl":221},{"sl":225},{"sl":290}],"name":"verifySegmentSkipping2","pass":true,"statements":[{"sl":67},{"sl":70},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":82},{"sl":86},{"sl":88},{"sl":93},{"sl":94},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":107},{"sl":108},{"sl":109},{"sl":117},{"sl":118},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":131},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":148},{"sl":150},{"sl":157},{"sl":161},{"sl":172},{"sl":175},{"sl":176},{"sl":179},{"sl":180},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":188},{"sl":189},{"sl":191},{"sl":192},{"sl":212},{"sl":216},{"sl":217},{"sl":222},{"sl":226},{"sl":227},{"sl":228},{"sl":231},{"sl":291},{"sl":294}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [133, 135, 125], [133, 135, 125], [], [], [133, 135, 125], [], [], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [], [], [133, 135, 125], [], [], [133, 135, 125], [], [], [133, 135, 125], [133, 135, 125], [], [133, 135, 125], [], [], [], [], [133, 135, 125], [133, 135, 125], [], [], [133, 135, 125], [133, 135, 125], [133, 135, 125], [], [], [], [133, 135, 125], [], [], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133], [133], [], [133], [], [], [], [133, 135, 125], [133, 135, 125], [], [], [], [133, 135, 125], [], [133, 135, 125], [133, 135, 125], [133, 135, 125], [], [125], [], [], [133, 135, 125], [], [], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [125], [133, 135, 125], [125], [], [133, 135, 125], [125], [133, 135, 125], [133, 125], [133, 125], [], [], [], [], [133, 135, 125], [133, 125], [133, 125], [], [133, 135, 125], [], [], [], [], [], [], [], [], [], [133, 135, 125], [133, 135, 125], [], [], [133, 135, 125], [133, 135, 125], [], [], [133, 135, 125], [133, 135, 125], [], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [], [133, 135, 125], [133, 135, 125], [133, 135, 125], [], [133, 135, 125], [133, 135, 125], [125], [], [], [], [], [125], [], [], [], [], [], [], [], [], [], [], [], [], [133, 135, 125], [133, 135, 125], [], [], [], [133, 135, 125], [133, 135, 125], [], [], [], [133, 135, 125], [133, 135, 125], [], [], [133, 135, 125], [133, 135, 125], [133, 135, 125], [133, 135, 125], [125], [], [133, 135, 125], [], [], [], [125], [125], [], [125], [], [], [], [125], [], [], [], [], [125], [], [], [], [], [], [125], [], [], [], [], [], [125], [], [], [], [], [], [125], [125], [125], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [133, 135], [133, 135], [], [], [133, 135], [], [], [], []]