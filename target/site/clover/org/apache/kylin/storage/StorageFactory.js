var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":50,"id":24435,"methods":[{"el":40,"sc":5,"sl":33},{"el":44,"sc":5,"sl":42},{"el":48,"sc":5,"sl":46}],"name":"StorageFactory","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_129":{"methods":[{"sl":33}],"name":"testMultipleThread","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":39}]},"test_139":{"methods":[{"sl":33}],"name":"testSingleThread","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":39}]},"test_21":{"methods":[{"sl":33},{"sl":46}],"name":"testBasics","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":39},{"sl":47}]},"test_24":{"methods":[{"sl":33},{"sl":42}],"name":"testFailQuery","pass":false,"statements":[{"sl":34},{"sl":35},{"sl":39},{"sl":43}]},"test_30":{"methods":[{"sl":33},{"sl":42}],"name":"testNormalQuery","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":39},{"sl":43}]},"test_44":{"methods":[{"sl":33},{"sl":42}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":34},{"sl":35},{"sl":39},{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21, 139, 24, 129, 44, 30], [21, 139, 24, 129, 44, 30], [21, 139, 24, 129, 44, 30], [21, 139, 129], [21, 139, 129], [], [21, 139, 24, 129, 44, 30], [], [], [24, 44, 30], [24, 44, 30], [], [], [21], [21], [], [], []]
