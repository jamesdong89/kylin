var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":58132,"methods":[{"el":27,"sc":5,"sl":25},{"el":32,"sc":5,"sl":29}],"name":"DummyJdbcFactory","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_679":{"methods":[{"sl":25}],"name":"testVersion","pass":true,"statements":[{"sl":26}]},"test_680":{"methods":[{"sl":25},{"sl":29}],"name":"testStatementWithQuestionMask","pass":true,"statements":[{"sl":26},{"sl":31}]},"test_681":{"methods":[{"sl":25},{"sl":29}],"name":"testPreparedStatementWithMockData","pass":true,"statements":[{"sl":26},{"sl":31}]},"test_684":{"methods":[{"sl":25},{"sl":29}],"name":"testSSLFromURL","pass":true,"statements":[{"sl":26},{"sl":31}]},"test_685":{"methods":[{"sl":25},{"sl":29}],"name":"testStatementWithMockData","pass":true,"statements":[{"sl":26},{"sl":31}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [684, 681, 685, 679, 680], [684, 681, 685, 679, 680], [], [], [684, 681, 685, 680], [], [684, 681, 685, 680], [], [], []]
