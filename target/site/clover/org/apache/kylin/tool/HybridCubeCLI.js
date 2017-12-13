var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":36,"id":42217,"methods":[{"el":34,"sc":5,"sl":31}],"name":"HybridCubeCLI","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_123":{"methods":[{"sl":31}],"name":"test3Delete","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_144":{"methods":[{"sl":31}],"name":"test2Update","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_148":{"methods":[{"sl":31}],"name":"test1Create","pass":true,"statements":[{"sl":32},{"sl":33}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [144, 148, 123], [144, 148, 123], [144, 148, 123], [], [], []]
