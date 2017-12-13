var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":94,"id":61693,"methods":[{"el":50,"sc":5,"sl":46},{"el":54,"sc":5,"sl":52},{"el":68,"sc":5,"sl":56}],"name":"OLAPQuery","sl":32},{"el":40,"id":61693,"methods":[],"name":"OLAPQuery.EnumeratorTypeEnum","sl":36},{"el":93,"id":61716,"methods":[{"el":74,"sc":9,"sl":72},{"el":78,"sc":9,"sl":76},{"el":83,"sc":9,"sl":80},{"el":88,"sc":9,"sl":85},{"el":92,"sc":9,"sl":90}],"name":"OLAPQuery.EmptyEnumerator","sl":70}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":46},{"sl":56}],"name":"testFailQuery","pass":false,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":57},{"sl":58},{"sl":59},{"sl":60}]},"test_30":{"methods":[{"sl":46},{"sl":56}],"name":"testNormalQuery","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":57},{"sl":58},{"sl":59},{"sl":60}]},"test_44":{"methods":[{"sl":46},{"sl":56}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":57},{"sl":58},{"sl":59},{"sl":60}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
