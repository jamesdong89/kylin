var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":271,"id":45291,"methods":[{"el":61,"sc":5,"sl":43},{"el":65,"sc":5,"sl":63},{"el":101,"sc":5,"sl":67},{"el":105,"sc":5,"sl":103}],"name":"DictionaryGenerator","sl":39},{"el":150,"id":45344,"methods":[{"el":116,"sc":9,"sl":113},{"el":141,"sc":9,"sl":118},{"el":149,"sc":9,"sl":143}],"name":"DictionaryGenerator.DateDictBuilder","sl":107},{"el":172,"id":45371,"methods":[{"el":156,"sc":9,"sl":154},{"el":166,"sc":9,"sl":158},{"el":171,"sc":9,"sl":168}],"name":"DictionaryGenerator.TimeDictBuilder","sl":152},{"el":197,"id":45381,"methods":[{"el":182,"sc":9,"sl":178},{"el":191,"sc":9,"sl":184},{"el":196,"sc":9,"sl":193}],"name":"DictionaryGenerator.StringTrieDictBuilder","sl":174},{"el":220,"id":45393,"methods":[{"el":205,"sc":9,"sl":202},{"el":214,"sc":9,"sl":207},{"el":219,"sc":9,"sl":216}],"name":"DictionaryGenerator.StringTrieDictForestBuilder","sl":199},{"el":246,"id":45404,"methods":[{"el":231,"sc":9,"sl":227},{"el":240,"sc":9,"sl":233},{"el":245,"sc":9,"sl":242}],"name":"DictionaryGenerator.NumberTrieDictBuilder","sl":223},{"el":269,"id":45416,"methods":[{"el":254,"sc":9,"sl":251},{"el":263,"sc":9,"sl":256},{"el":268,"sc":9,"sl":265}],"name":"DictionaryGenerator.NumberTrieDictForestBuilder","sl":248}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_507":{"methods":[{"sl":43},{"sl":113},{"sl":118},{"sl":154},{"sl":158},{"sl":168},{"sl":202},{"sl":207},{"sl":216},{"sl":251},{"sl":256},{"sl":265}],"name":"testReadWrite","pass":true,"statements":[{"sl":44},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":54},{"sl":55},{"sl":56},{"sl":58},{"sl":60},{"sl":115},{"sl":120},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":134},{"sl":139},{"sl":140},{"sl":160},{"sl":164},{"sl":165},{"sl":170},{"sl":204},{"sl":209},{"sl":212},{"sl":213},{"sl":218},{"sl":253},{"sl":258},{"sl":261},{"sl":262},{"sl":267}]},"test_559":{"methods":[{"sl":43},{"sl":113},{"sl":118},{"sl":154},{"sl":158},{"sl":168},{"sl":202},{"sl":207},{"sl":216},{"sl":251},{"sl":256},{"sl":265}],"name":"testReadWrite","pass":true,"statements":[{"sl":44},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":54},{"sl":55},{"sl":56},{"sl":58},{"sl":60},{"sl":115},{"sl":120},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":134},{"sl":139},{"sl":140},{"sl":160},{"sl":164},{"sl":165},{"sl":170},{"sl":204},{"sl":209},{"sl":212},{"sl":213},{"sl":218},{"sl":253},{"sl":258},{"sl":261},{"sl":262},{"sl":267}]},"test_594":{"methods":[{"sl":43},{"sl":63},{"sl":67},{"sl":202},{"sl":207},{"sl":216}],"name":"testBuildSaveDictionary","pass":true,"statements":[{"sl":44},{"sl":47},{"sl":48},{"sl":54},{"sl":55},{"sl":58},{"sl":60},{"sl":64},{"sl":68},{"sl":69},{"sl":70},{"sl":73},{"sl":76},{"sl":77},{"sl":79},{"sl":81},{"sl":82},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":204},{"sl":209},{"sl":212},{"sl":213},{"sl":218}]},"test_629":{"methods":[{"sl":43},{"sl":63},{"sl":67},{"sl":202},{"sl":207},{"sl":216}],"name":"testBuildSaveDictionary","pass":true,"statements":[{"sl":44},{"sl":47},{"sl":48},{"sl":54},{"sl":55},{"sl":58},{"sl":60},{"sl":64},{"sl":68},{"sl":69},{"sl":70},{"sl":73},{"sl":76},{"sl":77},{"sl":79},{"sl":81},{"sl":82},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":204},{"sl":209},{"sl":212},{"sl":213},{"sl":218}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [629, 507, 559, 594], [629, 507, 559, 594], [], [], [629, 507, 559, 594], [629, 507, 559, 594], [507, 559], [507, 559], [], [507, 559], [], [629, 507, 559, 594], [629, 507, 559, 594], [507, 559], [], [629, 507, 559, 594], [], [629, 507, 559, 594], [], [], [629, 594], [629, 594], [], [], [629, 594], [629, 594], [629, 594], [629, 594], [], [], [629, 594], [], [], [629, 594], [629, 594], [], [629, 594], [], [629, 594], [629, 594], [], [], [], [629, 594], [], [], [629, 594], [629, 594], [629, 594], [629, 594], [], [629, 594], [], [629, 594], [629, 594], [629, 594], [629, 594], [629, 594], [], [], [], [], [], [], [], [], [], [], [], [], [507, 559], [], [507, 559], [], [], [507, 559], [], [507, 559], [], [], [], [507, 559], [507, 559], [507, 559], [507, 559], [507, 559], [507, 559], [], [], [], [], [507, 559], [], [], [], [], [507, 559], [507, 559], [], [], [], [], [], [], [], [], [], [], [], [], [], [507, 559], [], [], [], [507, 559], [], [507, 559], [], [], [], [507, 559], [507, 559], [], [], [507, 559], [], [507, 559], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [629, 507, 559, 594], [], [629, 507, 559, 594], [], [], [629, 507, 559, 594], [], [629, 507, 559, 594], [], [], [629, 507, 559, 594], [629, 507, 559, 594], [], [], [629, 507, 559, 594], [], [629, 507, 559, 594], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [507, 559], [], [507, 559], [], [], [507, 559], [], [507, 559], [], [], [507, 559], [507, 559], [], [], [507, 559], [], [507, 559], [], [], [], []]