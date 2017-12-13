var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":107,"id":76138,"methods":[{"el":46,"sc":5,"sl":43},{"el":51,"sc":5,"sl":48},{"el":56,"sc":5,"sl":53},{"el":61,"sc":5,"sl":58},{"el":66,"sc":5,"sl":64},{"el":71,"sc":5,"sl":69},{"el":76,"sc":5,"sl":73},{"el":80,"sc":5,"sl":78},{"el":106,"sc":5,"sl":82}],"name":"BufferedMeasureCodec","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_122":{"methods":[{"sl":53},{"sl":69},{"sl":73},{"sl":82}],"name":"verifyScanWithUnevaluatableFilter","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":70},{"sl":74},{"sl":75},{"sl":83},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]},"test_130":{"methods":[{"sl":53},{"sl":69},{"sl":73},{"sl":82}],"name":"verifyAggregateAndHavingFilter","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":70},{"sl":74},{"sl":75},{"sl":83},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]},"test_136":{"methods":[{"sl":53},{"sl":69},{"sl":73},{"sl":82}],"name":"verifyScanWithEvaluatableFilter","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":70},{"sl":74},{"sl":75},{"sl":83},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]},"test_166":{"methods":[{"sl":53},{"sl":69},{"sl":73},{"sl":82}],"name":"testAggregationCacheSpill","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":70},{"sl":74},{"sl":75},{"sl":83},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]},"test_216":{"methods":[{"sl":48},{"sl":73},{"sl":78},{"sl":82}],"name":"basicTest","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":74},{"sl":75},{"sl":79},{"sl":83},{"sl":84},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]},"test_238":{"methods":[{"sl":53},{"sl":69},{"sl":73},{"sl":82}],"name":"testAggregate","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":70},{"sl":74},{"sl":75},{"sl":83},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]},"test_257":{"methods":[{"sl":53},{"sl":69},{"sl":73},{"sl":82}],"name":"testAggregationCacheInMem","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":70},{"sl":74},{"sl":75},{"sl":83},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]},"test_390":{"methods":[{"sl":43},{"sl":73},{"sl":78},{"sl":82}],"name":"testReducerOnlyAggrInBaseCuboid","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":74},{"sl":75},{"sl":79},{"sl":83},{"sl":84},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]},"test_444":{"methods":[{"sl":43},{"sl":73},{"sl":78},{"sl":82}],"name":"testReducer","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":74},{"sl":75},{"sl":79},{"sl":83},{"sl":84},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]},"test_71":{"methods":[{"sl":48},{"sl":73},{"sl":82}],"name":"testError","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":74},{"sl":75},{"sl":83},{"sl":84},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93}]},"test_78":{"methods":[{"sl":48}],"name":"testBasic","pass":true,"statements":[{"sl":49},{"sl":50}]},"test_79":{"methods":[{"sl":48},{"sl":73},{"sl":82}],"name":"testDecode","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":74},{"sl":75},{"sl":83},{"sl":84},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":97}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [444, 390], [444, 390], [444, 390], [], [], [79, 216, 71, 78], [79, 216, 71, 78], [79, 216, 71, 78], [], [], [136, 122, 238, 257, 166, 130], [136, 122, 238, 257, 166, 130], [136, 122, 238, 257, 166, 130], [], [], [], [], [], [], [], [], [], [], [], [], [], [136, 122, 238, 257, 166, 130], [136, 122, 238, 257, 166, 130], [], [], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [], [], [444, 390, 216], [444, 390, 216], [], [], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [79, 444, 390, 216, 71], [], [], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [79, 136, 122, 444, 238, 390, 216, 257, 71, 166, 130], [79, 136, 122, 444, 238, 390, 216, 257, 166, 130], [79, 136, 122, 444, 238, 390, 216, 257, 166, 130], [], [79, 136, 122, 444, 238, 390, 216, 257, 166, 130], [], [], [], [], [], [], [], [], [], []]