var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":38,"id":55313,"methods":[{"el":33,"sc":5,"sl":31},{"el":37,"sc":5,"sl":35}],"name":"ResultLevel","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_104":{"methods":[{"sl":31},{"sl":35}],"name":"testBadDesc","pass":true,"statements":[{"sl":32},{"sl":36}]},"test_255":{"methods":[{"sl":31}],"name":"testBadDesc1","pass":true,"statements":[{"sl":32}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [255, 104], [255, 104], [], [], [104], [104], [], []]
