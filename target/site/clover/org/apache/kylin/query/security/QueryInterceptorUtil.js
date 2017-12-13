var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":50,"id":64594,"methods":[{"el":43,"sc":5,"sl":30},{"el":48,"sc":5,"sl":45}],"name":"QueryInterceptorUtil","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":30},{"sl":45}],"name":"testFailQuery","pass":false,"statements":[{"sl":31},{"sl":32},{"sl":46},{"sl":47}]},"test_30":{"methods":[{"sl":30},{"sl":45}],"name":"testNormalQuery","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":46},{"sl":47}]},"test_44":{"methods":[{"sl":30},{"sl":45}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":31},{"sl":32},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":46},{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [44], [44], [44], [44], [44], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], []]
