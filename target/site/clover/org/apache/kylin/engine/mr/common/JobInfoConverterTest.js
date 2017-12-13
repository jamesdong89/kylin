var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":90,"id":70424,"methods":[{"el":43,"sc":5,"sl":37},{"el":53,"sc":5,"sl":45}],"name":"JobInfoConverterTest","sl":36},{"el":64,"id":70434,"methods":[{"el":58,"sc":9,"sl":56},{"el":63,"sc":9,"sl":60}],"name":"JobInfoConverterTest.TestJob","sl":55},{"el":89,"id":70438,"methods":[{"el":73,"sc":9,"sl":68},{"el":78,"sc":9,"sl":75},{"el":83,"sc":9,"sl":80},{"el":88,"sc":9,"sl":85}],"name":"JobInfoConverterTest.TestOutput","sl":66}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_114":{"methods":[{"sl":45},{"sl":56},{"sl":68},{"sl":80}],"name":"testParseToJobStep","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":57},{"sl":70},{"sl":71},{"sl":72},{"sl":82}]},"test_115":{"methods":[{"sl":37},{"sl":56}],"name":"testParseToJobInstance","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":42},{"sl":57}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [115], [], [115], [115], [], [115], [], [], [114], [], [114], [114], [114], [], [114], [114], [], [], [], [115, 114], [115, 114], [], [], [], [], [], [], [], [], [], [], [114], [], [114], [114], [114], [], [], [], [], [], [], [], [114], [], [114], [], [], [], [], [], [], [], []]
