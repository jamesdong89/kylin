var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":25,"id":64562,"methods":[{"el":24,"sc":5,"sl":22}],"name":"AccessDeniedException","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":22}],"name":"testFailQuery","pass":false,"statements":[{"sl":23}]},"test_44":{"methods":[{"sl":22}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44], [24, 44], [], []]
