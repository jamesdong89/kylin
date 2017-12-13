var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":86,"id":89719,"methods":[{"el":34,"sc":5,"sl":32},{"el":40,"sc":5,"sl":36},{"el":48,"sc":5,"sl":42},{"el":53,"sc":5,"sl":50},{"el":57,"sc":5,"sl":55}],"name":"DimCountDistinctAggFunc","sl":29},{"el":85,"id":89739,"methods":[{"el":66,"sc":9,"sl":63},{"el":73,"sc":9,"sl":68},{"el":80,"sc":9,"sl":75},{"el":84,"sc":9,"sl":82}],"name":"DimCountDistinctAggFunc.DimDistinctCounter","sl":59}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_432":{"methods":[{"sl":32},{"sl":42},{"sl":63},{"sl":68}],"name":"testThreshold","pass":false,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":47},{"sl":64},{"sl":65},{"sl":69},{"sl":70},{"sl":72}]},"test_534":{"methods":[{"sl":32},{"sl":42},{"sl":55},{"sl":63},{"sl":68},{"sl":82}],"name":"testBasic","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":47},{"sl":56},{"sl":64},{"sl":65},{"sl":69},{"sl":72},{"sl":83}]},"test_675":{"methods":[{"sl":32},{"sl":55}],"name":"testEmpty","pass":true,"statements":[{"sl":33},{"sl":56}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [432, 675, 534], [432, 675, 534], [], [], [], [], [], [], [], [], [432, 534], [432, 534], [432, 534], [], [432, 534], [432, 534], [], [], [], [], [], [], [], [675, 534], [675, 534], [], [], [], [], [], [], [432, 534], [432, 534], [432, 534], [], [], [432, 534], [432, 534], [432], [], [432, 534], [], [], [], [], [], [], [], [], [], [534], [534], [], [], []]
