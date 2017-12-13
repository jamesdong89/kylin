var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":62,"id":89282,"methods":[{"el":53,"sc":13,"sl":49},{"el":58,"sc":13,"sl":55},{"el":60,"sc":5,"sl":45}],"name":"TimeDimEnc","sl":28},{"el":43,"id":89282,"methods":[{"el":37,"sc":9,"sl":34},{"el":42,"sc":9,"sl":39}],"name":"TimeDimEnc.Factory","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_335":{"methods":[{"sl":49},{"sl":55}],"name":"testEncodeDecode","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57}]},"test_384":{"methods":[{"sl":49}],"name":"basicTest","pass":true,"statements":[{"sl":51},{"sl":52}]},"test_465":{"methods":[{"sl":49},{"sl":55}],"name":"testEncodeDecode","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57}]},"test_504":{"methods":[{"sl":49}],"name":"testIllegal","pass":true,"statements":[{"sl":51}]},"test_565":{"methods":[{"sl":49}],"name":"testIllegal","pass":true,"statements":[{"sl":51}]},"test_588":{"methods":[{"sl":49}],"name":"basicTest","pass":true,"statements":[{"sl":51},{"sl":52}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [504, 588, 465, 565, 335, 384], [], [504, 588, 465, 565, 335, 384], [588, 465, 335, 384], [], [], [465, 335], [], [465, 335], [], [], [], [], []]
