var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":33,"id":38712,"methods":[{"el":29,"sc":5,"sl":26}],"name":"SplittedBytes","sl":25}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":26}],"name":"test","pass":true,"statements":[{"sl":27},{"sl":28}]},"test_103":{"methods":[{"sl":26}],"name":"testNullValue","pass":true,"statements":[{"sl":27},{"sl":28}]},"test_297":{"methods":[{"sl":26}],"name":"testWithoutSlr","pass":true,"statements":[{"sl":27},{"sl":28}]},"test_305":{"methods":[{"sl":26}],"name":"testWithSlr","pass":true,"statements":[{"sl":27},{"sl":28}]},"test_328":{"methods":[{"sl":26}],"name":"testEncodeAndDecodeWithUtf8","pass":true,"statements":[{"sl":27},{"sl":28}]},"test_358":{"methods":[{"sl":26}],"name":"testDecodeWithoutSlr","pass":true,"statements":[{"sl":27},{"sl":28}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [358, 103, 297, 305, 102, 328], [358, 103, 297, 305, 102, 328], [358, 103, 297, 305, 102, 328], [], [], [], [], []]
