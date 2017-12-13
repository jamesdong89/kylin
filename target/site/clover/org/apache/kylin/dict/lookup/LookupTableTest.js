var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":142,"id":43540,"methods":[{"el":51,"sc":5,"sl":46},{"el":56,"sc":5,"sl":53},{"el":71,"sc":5,"sl":58},{"el":83,"sc":5,"sl":73},{"el":94,"sc":5,"sl":85},{"el":109,"sc":5,"sl":96},{"el":116,"sc":5,"sl":111},{"el":120,"sc":5,"sl":118},{"el":136,"sc":5,"sl":122},{"el":140,"sc":5,"sl":138}],"name":"LookupTableTest","sl":40}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_373":{"methods":[{"sl":73},{"sl":118}],"name":"testMapRange","pass":true,"statements":[{"sl":75},{"sl":77},{"sl":78},{"sl":79},{"sl":81},{"sl":82},{"sl":119}]},"test_408":{"methods":[{"sl":85},{"sl":118}],"name":"testMapRange2","pass":true,"statements":[{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":93},{"sl":119}]},"test_458":{"methods":[{"sl":73},{"sl":118}],"name":"testMapRange","pass":true,"statements":[{"sl":75},{"sl":77},{"sl":78},{"sl":79},{"sl":81},{"sl":82},{"sl":119}]},"test_509":{"methods":[{"sl":85},{"sl":118}],"name":"testMapRange2","pass":true,"statements":[{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":93},{"sl":119}]},"test_513":{"methods":[{"sl":96},{"sl":118}],"name":"testMapValues","pass":true,"statements":[{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":119}]},"test_522":{"methods":[{"sl":58},{"sl":118}],"name":"testScan","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":66},{"sl":67},{"sl":69},{"sl":119}]},"test_543":{"methods":[{"sl":96},{"sl":118}],"name":"testMapValues","pass":true,"statements":[{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":119}]},"test_583":{"methods":[{"sl":58},{"sl":118}],"name":"testScan","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":66},{"sl":67},{"sl":69},{"sl":119}]},"test_657":{"methods":[{"sl":111}],"name":"testGetClassName","pass":true,"statements":[{"sl":113},{"sl":114}]},"test_658":{"methods":[{"sl":111}],"name":"testGetClassName","pass":true,"statements":[{"sl":113},{"sl":114}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [522, 583], [], [522, 583], [522, 583], [522, 583], [522, 583], [], [522, 583], [522, 583], [522, 583], [], [522, 583], [], [], [], [458, 373], [], [458, 373], [], [458, 373], [458, 373], [458, 373], [], [458, 373], [458, 373], [], [], [408, 509], [], [408, 509], [], [408, 509], [408, 509], [], [408, 509], [408, 509], [], [], [513, 543], [], [513, 543], [513, 543], [513, 543], [513, 543], [], [513, 543], [513, 543], [513, 543], [], [513, 543], [], [], [], [658, 657], [], [658, 657], [658, 657], [], [], [], [408, 458, 513, 522, 543, 509, 583, 373], [408, 458, 513, 522, 543, 509, 583, 373], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]