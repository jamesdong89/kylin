var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":43,"id":61156,"methods":[{"el":41,"sc":5,"sl":31}],"name":"RemoveUncapableRealizationsRule","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":31}],"name":"testFailQuery","pass":false,"statements":[{"sl":33},{"sl":34},{"sl":36},{"sl":37},{"sl":38}]},"test_30":{"methods":[{"sl":31}],"name":"testNormalQuery","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":36},{"sl":37},{"sl":38}]},"test_44":{"methods":[{"sl":31}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":33},{"sl":34},{"sl":36},{"sl":37},{"sl":38}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [], [], []]
