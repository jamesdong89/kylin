var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":45,"id":34879,"methods":[{"el":44,"sc":5,"sl":32}],"name":"AbstractApplication","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_123":{"methods":[{"sl":32}],"name":"test3Delete","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_144":{"methods":[{"sl":32}],"name":"test2Update","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_148":{"methods":[{"sl":32}],"name":"test1Create","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [144, 148, 123], [144, 148, 123], [144, 148, 123], [144, 148, 123], [144, 148, 123], [144, 148, 123], [], [], [], [], [], [], [], []]
