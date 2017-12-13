var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":44,"id":64543,"methods":[{"el":36,"sc":5,"sl":34},{"el":42,"sc":5,"sl":38}],"name":"OLAPToEnumerableConverterRule","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":38}],"name":"testFailQuery","pass":false,"statements":[{"sl":40},{"sl":41}]},"test_30":{"methods":[{"sl":38}],"name":"testNormalQuery","pass":true,"statements":[{"sl":40},{"sl":41}]},"test_44":{"methods":[{"sl":34},{"sl":38}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":35},{"sl":40},{"sl":41}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [44], [44], [], [], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [], [], []]
