var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":146,"id":82735,"methods":[{"el":62,"sc":5,"sl":58},{"el":85,"sc":5,"sl":64},{"el":97,"sc":5,"sl":87},{"el":124,"sc":5,"sl":99},{"el":128,"sc":5,"sl":126},{"el":132,"sc":5,"sl":130},{"el":136,"sc":5,"sl":134},{"el":140,"sc":5,"sl":138},{"el":145,"sc":5,"sl":142}],"name":"BasicMeasureType","sl":30},{"el":53,"id":82735,"methods":[{"el":37,"sc":9,"sl":34},{"el":42,"sc":9,"sl":39},{"el":47,"sc":9,"sl":44},{"el":52,"sc":9,"sl":49}],"name":"BasicMeasureType.Factory","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_122":{"methods":[{"sl":34},{"sl":58},{"sl":99},{"sl":126}],"name":"verifyScanWithUnevaluatableFilter","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":127}]},"test_130":{"methods":[{"sl":34},{"sl":58},{"sl":99},{"sl":126}],"name":"verifyAggregateAndHavingFilter","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":101},{"sl":102},{"sl":103},{"sl":127}]},"test_136":{"methods":[{"sl":34},{"sl":58},{"sl":99},{"sl":126}],"name":"verifyScanWithEvaluatableFilter","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":127}]},"test_166":{"methods":[{"sl":34},{"sl":58},{"sl":99},{"sl":126}],"name":"testAggregationCacheSpill","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":127}]},"test_17":{"methods":[{"sl":34},{"sl":58},{"sl":64}],"name":"testCubeCRUD","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":66},{"sl":68},{"sl":69},{"sl":72},{"sl":73},{"sl":76},{"sl":77}]},"test_20":{"methods":[{"sl":34},{"sl":58},{"sl":64}],"name":"testBasics","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":66},{"sl":68},{"sl":69},{"sl":72},{"sl":73},{"sl":76},{"sl":77}]},"test_237":{"methods":[{"sl":34},{"sl":58},{"sl":64}],"name":"testGoodDesc","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":66},{"sl":68},{"sl":69},{"sl":72},{"sl":73}]},"test_238":{"methods":[{"sl":34},{"sl":58},{"sl":99},{"sl":126},{"sl":130}],"name":"testAggregate","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":127},{"sl":131}]},"test_24":{"methods":[{"sl":34},{"sl":58},{"sl":142}],"name":"testFailQuery","pass":false,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":144}]},"test_257":{"methods":[{"sl":34},{"sl":58},{"sl":99},{"sl":126}],"name":"testAggregationCacheInMem","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":127}]},"test_30":{"methods":[{"sl":34},{"sl":58},{"sl":142}],"name":"testNormalQuery","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":144}]},"test_390":{"methods":[{"sl":34},{"sl":58},{"sl":99},{"sl":126},{"sl":130},{"sl":134},{"sl":138}],"name":"testReducerOnlyAggrInBaseCuboid","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":109},{"sl":110},{"sl":115},{"sl":116},{"sl":117},{"sl":127},{"sl":131},{"sl":135},{"sl":139}]},"test_43":{"methods":[{"sl":34},{"sl":58},{"sl":142}],"name":"testGetMetadata","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":144}]},"test_44":{"methods":[{"sl":34},{"sl":58},{"sl":142}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":144}]},"test_444":{"methods":[{"sl":34},{"sl":58},{"sl":99},{"sl":126},{"sl":130},{"sl":134},{"sl":138}],"name":"testReducer","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":109},{"sl":110},{"sl":115},{"sl":116},{"sl":117},{"sl":127},{"sl":131},{"sl":135},{"sl":139}]},"test_97":{"methods":[{"sl":34},{"sl":58}],"name":"testIdentifyCuboidV2","pass":true,"statements":[{"sl":36},{"sl":60},{"sl":61}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [136, 17, 20, 238, 390, 97, 257, 30, 237, 24, 122, 444, 44, 43, 166, 130], [], [136, 17, 20, 238, 390, 97, 257, 30, 237, 24, 122, 444, 44, 43, 166, 130], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [136, 17, 20, 238, 390, 97, 257, 30, 237, 24, 122, 444, 44, 43, 166, 130], [], [136, 17, 20, 238, 390, 97, 257, 30, 237, 24, 122, 444, 44, 43, 166, 130], [136, 17, 20, 238, 390, 97, 257, 30, 237, 24, 122, 444, 44, 43, 166, 130], [], [], [17, 20, 237], [], [17, 20, 237], [], [17, 20, 237], [17, 20, 237], [], [], [17, 20, 237], [17, 20, 237], [], [], [17, 20], [17, 20], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [136, 238, 390, 257, 122, 444, 166, 130], [], [136, 238, 390, 257, 122, 444, 166, 130], [136, 238, 390, 257, 122, 444, 166, 130], [238, 390, 257, 444, 166, 130], [136, 238, 390, 257, 122, 444, 166], [136, 238, 390, 257, 122, 444, 166], [], [], [390, 444], [390, 444], [390, 444], [], [], [], [], [390, 444], [390, 444], [390, 444], [], [], [], [], [], [], [], [], [136, 238, 390, 257, 122, 444, 166, 130], [136, 238, 390, 257, 122, 444, 166, 130], [], [], [238, 390, 444], [238, 390, 444], [], [], [390, 444], [390, 444], [], [], [390, 444], [390, 444], [], [], [30, 24, 44, 43], [], [30, 24, 44, 43], [], []]