var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":70,"id":935,"methods":[{"el":36,"sc":5,"sl":33},{"el":41,"sc":5,"sl":38},{"el":52,"sc":5,"sl":43},{"el":57,"sc":5,"sl":54},{"el":68,"sc":5,"sl":59}],"name":"TableInterceptor","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":33},{"sl":38},{"sl":43},{"sl":54},{"sl":59}],"name":"testFailQuery","pass":false,"statements":[{"sl":35},{"sl":40},{"sl":45},{"sl":46},{"sl":48},{"sl":56},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":67}]},"test_30":{"methods":[{"sl":33},{"sl":43}],"name":"testNormalQuery","pass":true,"statements":[{"sl":35},{"sl":45},{"sl":46},{"sl":48}]},"test_44":{"methods":[{"sl":33},{"sl":38},{"sl":43},{"sl":54},{"sl":59}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":35},{"sl":40},{"sl":45},{"sl":46},{"sl":48},{"sl":56},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":67}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [], [24, 44, 30], [], [], [24, 44], [], [24, 44], [], [], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [], [24, 44, 30], [], [], [], [], [], [24, 44], [], [24, 44], [], [], [24, 44], [], [24, 44], [24, 44], [24, 44], [24, 44], [], [], [24, 44], [], [], []]
