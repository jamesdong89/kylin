var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":44,"id":62087,"methods":[{"el":35,"sc":5,"sl":29},{"el":39,"sc":5,"sl":37},{"el":43,"sc":5,"sl":41}],"name":"OLAPAuthentication","sl":25}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":29},{"sl":37}],"name":"testFailQuery","pass":false,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":38}]},"test_30":{"methods":[{"sl":29},{"sl":37}],"name":"testNormalQuery","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":38}]},"test_44":{"methods":[{"sl":29},{"sl":37}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":38}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [], [24, 44, 30], [24, 44, 30], [], [], [], [], [], []]
