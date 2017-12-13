var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":41,"id":22993,"methods":[{"el":31,"sc":5,"sl":29},{"el":40,"sc":5,"sl":33}],"name":"SucceedTestExecutable","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_108":{"methods":[{"sl":29},{"sl":33}],"name":"testSucceedAndFailed","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":39}]},"test_109":{"methods":[{"sl":29},{"sl":33}],"name":"testSingleTaskJob","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":39}]},"test_110":{"methods":[{"sl":29}],"name":"test","pass":true,"statements":[{"sl":30}]},"test_111":{"methods":[{"sl":29},{"sl":33}],"name":"testSucceed","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":39}]},"test_112":{"methods":[{"sl":29}],"name":"testInvalidStateTransfer","pass":true,"statements":[{"sl":30}]},"test_116":{"methods":[{"sl":29}],"name":"testSucceedAndError","pass":true,"statements":[{"sl":30}]},"test_117":{"methods":[{"sl":29}],"name":"testValidStateTransfer","pass":true,"statements":[{"sl":30}]},"test_118":{"methods":[{"sl":29}],"name":"testDefaultChainedExecutable","pass":true,"statements":[{"sl":30}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [112, 110, 108, 117, 109, 111, 116, 118], [112, 110, 108, 117, 109, 111, 116, 118], [], [], [108, 109, 111], [], [108, 109, 111], [108, 109, 111], [], [], [108, 109, 111], [], []]
