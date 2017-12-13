var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":26,"id":51349,"methods":[{"el":25,"sc":5,"sl":23}],"name":"TooManyCuboidException","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_173":{"methods":[{"sl":23}],"name":"testCombinationIntOverflow","pass":true,"statements":[{"sl":24}]},"test_187":{"methods":[{"sl":23}],"name":"testBadInit4","pass":false,"statements":[{"sl":24}]},"test_199":{"methods":[{"sl":23}],"name":"testGoodBecomeBadDesc","pass":true,"statements":[{"sl":24}]},"test_224":{"methods":[{"sl":23}],"name":"testCuboid_onlyBaseCuboid","pass":true,"statements":[{"sl":24}]},"test_248":{"methods":[{"sl":23}],"name":"testCombinationIntOverflow","pass":false,"statements":[{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [248, 224, 173, 199, 187], [248, 224, 173, 199, 187], [], []]
