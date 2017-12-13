var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":45,"id":23328,"methods":[{"el":28,"sc":5,"sl":27},{"el":32,"sc":5,"sl":30},{"el":36,"sc":5,"sl":34},{"el":40,"sc":5,"sl":38},{"el":44,"sc":5,"sl":42}],"name":"IllegalStateTranferException","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_112":{"methods":[{"sl":30}],"name":"testInvalidStateTransfer","pass":true,"statements":[{"sl":31}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [112], [112], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
