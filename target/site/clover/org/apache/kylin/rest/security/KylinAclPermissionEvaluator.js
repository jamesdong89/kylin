var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":111,"id":245,"methods":[{"el":41,"sc":5,"sl":37},{"el":55,"sc":5,"sl":43},{"el":69,"sc":5,"sl":57},{"el":100,"sc":5,"sl":71},{"el":110,"sc":5,"sl":102}],"name":"KylinAclPermissionEvaluator","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_22":{"methods":[{"sl":43}],"name":"testAuthInProjectLevel","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47}]},"test_26":{"methods":[{"sl":43}],"name":"testAuthInCubeLevel","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [22, 26], [], [22, 26], [22, 26], [22, 26], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
