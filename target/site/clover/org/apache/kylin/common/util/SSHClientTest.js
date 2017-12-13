var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":89,"id":39560,"methods":[{"el":54,"sc":5,"sl":45},{"el":60,"sc":5,"sl":56},{"el":65,"sc":5,"sl":62},{"el":76,"sc":5,"sl":67},{"el":88,"sc":5,"sl":78}],"name":"SSHClientTest","sl":37}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_423":{"methods":[{"sl":67}],"name":"testCmd","pass":true,"statements":[{"sl":69},{"sl":70}]},"test_490":{"methods":[{"sl":78}],"name":"testScp","pass":true,"statements":[{"sl":80},{"sl":81}]},"test_567":{"methods":[{"sl":78}],"name":"testScp","pass":true,"statements":[{"sl":80},{"sl":81}]},"test_606":{"methods":[{"sl":67}],"name":"testCmd","pass":true,"statements":[{"sl":69},{"sl":70}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [423, 606], [], [423, 606], [423, 606], [], [], [], [], [], [], [], [567, 490], [], [567, 490], [567, 490], [], [], [], [], [], [], [], []]
