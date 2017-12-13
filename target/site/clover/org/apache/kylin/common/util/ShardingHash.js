var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":67,"id":38644,"methods":[{"el":34,"sc":5,"sl":28},{"el":42,"sc":5,"sl":36},{"el":51,"sc":5,"sl":44},{"el":58,"sc":5,"sl":53},{"el":66,"sc":5,"sl":60}],"name":"ShardingHash","sl":24}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_328":{"methods":[{"sl":44},{"sl":53}],"name":"testEncodeAndDecodeWithUtf8","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":54},{"sl":55}]},"test_479":{"methods":[{"sl":44},{"sl":53}],"name":"testEncodeWithoutSlr","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":54},{"sl":55}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [328, 479], [328, 479], [328, 479], [], [], [], [], [], [], [328, 479], [328, 479], [328, 479], [], [], [], [], [], [], [], [], [], [], [], []]
