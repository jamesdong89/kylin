var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":38,"id":61167,"methods":[{"el":36,"sc":5,"sl":25}],"name":"KeywordDefaultDirtyHack","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_12":{"methods":[{"sl":25}],"name":"testQueryException","pass":true,"statements":[{"sl":27},{"sl":28}]},"test_468":{"methods":[{"sl":25}],"name":"testKeywordDefaultDirtyHack","pass":true,"statements":[{"sl":27},{"sl":31},{"sl":32},{"sl":33},{"sl":35}]},"test_653":{"methods":[{"sl":25}],"name":"testMassageSql","pass":true,"statements":[{"sl":27},{"sl":28}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [12, 468, 653], [], [12, 468, 653], [12, 653], [], [], [468], [468], [468], [], [468], [], [], []]
