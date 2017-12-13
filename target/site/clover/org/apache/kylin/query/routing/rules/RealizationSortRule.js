var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":44,"id":61131,"methods":[{"el":43,"sc":5,"sl":34}],"name":"RealizationSortRule","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":34}],"name":"testFailQuery","pass":false,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":40},{"sl":42}]},"test_30":{"methods":[{"sl":34}],"name":"testNormalQuery","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":40},{"sl":42}]},"test_44":{"methods":[{"sl":34}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":40},{"sl":42}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [24, 44, 30], [], [24, 44, 30], [], []]
