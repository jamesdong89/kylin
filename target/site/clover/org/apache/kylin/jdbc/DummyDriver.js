var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":30,"id":58130,"methods":[{"el":28,"sc":5,"sl":25}],"name":"DummyDriver","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_679":{"methods":[{"sl":25}],"name":"testVersion","pass":true,"statements":[{"sl":27}]},"test_680":{"methods":[{"sl":25}],"name":"testStatementWithQuestionMask","pass":true,"statements":[{"sl":27}]},"test_681":{"methods":[{"sl":25}],"name":"testPreparedStatementWithMockData","pass":true,"statements":[{"sl":27}]},"test_684":{"methods":[{"sl":25}],"name":"testSSLFromURL","pass":true,"statements":[{"sl":27}]},"test_685":{"methods":[{"sl":25}],"name":"testStatementWithMockData","pass":true,"statements":[{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [684, 681, 685, 679, 680], [], [684, 681, 685, 679, 680], [], [], []]
