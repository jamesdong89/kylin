var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":38051,"methods":[{"el":41,"sc":5,"sl":32}],"name":"PartialSorter","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_300":{"methods":[{"sl":32}],"name":"basicTest","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":38},{"sl":39}]},"test_319":{"methods":[{"sl":32}],"name":"basicTest","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":38},{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [319, 300], [319, 300], [319, 300], [319, 300], [], [319, 300], [319, 300], [319, 300], [], [], []]
