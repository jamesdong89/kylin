var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":125,"id":31667,"methods":[{"el":45,"sc":5,"sl":44},{"el":57,"sc":5,"sl":47},{"el":62,"sc":5,"sl":59},{"el":67,"sc":5,"sl":64},{"el":72,"sc":5,"sl":69},{"el":77,"sc":5,"sl":74},{"el":91,"sc":5,"sl":81},{"el":96,"sc":5,"sl":93},{"el":102,"sc":5,"sl":98},{"el":107,"sc":5,"sl":104},{"el":113,"sc":9,"sl":111},{"el":118,"sc":9,"sl":115},{"el":124,"sc":5,"sl":121}],"name":"GTSampleCodeSystem","sl":38}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_166":{"methods":[{"sl":64},{"sl":81},{"sl":104}],"name":"testAggregationCacheSpill","pass":true,"statements":[{"sl":66},{"sl":83},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":90},{"sl":106}]},"test_167":{"methods":[{"sl":44},{"sl":47},{"sl":59},{"sl":64},{"sl":93},{"sl":104}],"name":"testAdvanced","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":56},{"sl":61},{"sl":66},{"sl":95},{"sl":106}]},"test_171":{"methods":[{"sl":44},{"sl":47},{"sl":59},{"sl":64},{"sl":93},{"sl":104}],"name":"testAppend","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":56},{"sl":61},{"sl":66},{"sl":95},{"sl":106}]},"test_183":{"methods":[{"sl":59},{"sl":64}],"name":"testMultiThreadRead","pass":true,"statements":[{"sl":61},{"sl":66}]},"test_201":{"methods":[{"sl":44},{"sl":47},{"sl":59},{"sl":64},{"sl":93},{"sl":104}],"name":"testBasics","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":56},{"sl":61},{"sl":66},{"sl":95},{"sl":106}]},"test_206":{"methods":[{"sl":44},{"sl":47},{"sl":64},{"sl":111},{"sl":115}],"name":"testBasicInfo","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":56},{"sl":66},{"sl":117}]},"test_218":{"methods":[{"sl":59},{"sl":64}],"name":"testMultiThreadWriteRead","pass":true,"statements":[{"sl":61},{"sl":66}]},"test_238":{"methods":[{"sl":44},{"sl":47},{"sl":59},{"sl":64},{"sl":81},{"sl":93},{"sl":104}],"name":"testAggregate","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":56},{"sl":61},{"sl":66},{"sl":83},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":106}]},"test_251":{"methods":[{"sl":44},{"sl":47},{"sl":64},{"sl":111},{"sl":115}],"name":"testAdvancedInfo","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":56},{"sl":66},{"sl":117}]},"test_257":{"methods":[{"sl":64},{"sl":81},{"sl":104}],"name":"testAggregationCacheInMem","pass":true,"statements":[{"sl":66},{"sl":83},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":90},{"sl":106}]},"test_258":{"methods":[{"sl":59},{"sl":64}],"name":"testSingleThreadRead","pass":true,"statements":[{"sl":61},{"sl":66}]},"test_261":{"methods":[{"sl":59},{"sl":64}],"name":"testSingleThreadWriteRead","pass":true,"statements":[{"sl":61},{"sl":66}]},"test_291":{"methods":[{"sl":44},{"sl":47},{"sl":64},{"sl":111},{"sl":115}],"name":"testBasicInfo","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":56},{"sl":66},{"sl":117}]},"test_570":{"methods":[{"sl":44},{"sl":47},{"sl":64},{"sl":111},{"sl":115}],"name":"testAdvancedInfo","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":56},{"sl":66},{"sl":117}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [167, 570, 291, 238, 201, 206, 171, 251], [], [], [167, 570, 291, 238, 201, 206, 171, 251], [], [167, 570, 291, 238, 201, 206, 171, 251], [], [167, 570, 291, 238, 201, 206, 171, 251], [167, 570, 291, 238, 201, 206, 171, 251], [167, 570, 291, 238, 201, 206, 171, 251], [], [], [167, 570, 291, 238, 201, 206, 171, 251], [], [], [167, 238, 261, 183, 218, 201, 171, 258], [], [167, 238, 261, 183, 218, 201, 171, 258], [], [], [167, 570, 291, 238, 257, 261, 183, 218, 201, 206, 171, 166, 251, 258], [], [167, 570, 291, 238, 257, 261, 183, 218, 201, 206, 171, 166, 251, 258], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [238, 257, 166], [], [238, 257, 166], [], [238, 257, 166], [238, 257, 166], [238, 257, 166], [238, 257, 166], [], [238, 257, 166], [], [], [167, 238, 201, 171], [], [167, 238, 201, 171], [], [], [], [], [], [], [], [], [167, 238, 257, 201, 171, 166], [], [167, 238, 257, 201, 171, 166], [], [], [], [], [570, 291, 206, 251], [], [], [], [570, 291, 206, 251], [], [570, 291, 206, 251], [], [], [], [], [], [], [], []]