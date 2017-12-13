var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":45,"id":9638,"methods":[{"el":35,"sc":5,"sl":33},{"el":44,"sc":5,"sl":37}],"name":"CubeStorageQuery","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":33}],"name":"testFailQuery","pass":false,"statements":[{"sl":34}]},"test_30":{"methods":[{"sl":33}],"name":"testNormalQuery","pass":true,"statements":[{"sl":34}]},"test_44":{"methods":[{"sl":33}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [], [], [], [], [], [], [], [], [], [], []]
