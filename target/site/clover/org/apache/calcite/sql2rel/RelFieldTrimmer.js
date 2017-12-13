var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":45,"id":70742,"methods":[{"el":36,"sc":5,"sl":35},{"el":39,"sc":5,"sl":38},{"el":43,"sc":5,"sl":41}],"name":"RelFieldTrimmer","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":35},{"sl":41}],"name":"testFailQuery","pass":false,"statements":[{"sl":42}]},"test_30":{"methods":[{"sl":35},{"sl":41}],"name":"testNormalQuery","pass":true,"statements":[{"sl":42}]},"test_44":{"methods":[{"sl":35},{"sl":41}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":42}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [], [], []]
