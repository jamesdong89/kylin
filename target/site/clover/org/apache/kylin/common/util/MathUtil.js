var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":37626,"methods":[{"el":31,"sc":5,"sl":24}],"name":"MathUtil","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_314":{"methods":[{"sl":24}],"name":"testBasic","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":29}]},"test_425":{"methods":[{"sl":24}],"name":"testAggregate","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":29}]},"test_473":{"methods":[{"sl":24}],"name":"testBasic","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":29}]},"test_618":{"methods":[{"sl":24}],"name":"testAggregate","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [473, 425, 618, 314], [473, 425, 618, 314], [473, 425, 618, 314], [], [], [473, 425, 618, 314], [], [], []]
