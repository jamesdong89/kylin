var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":269,"id":22652,"methods":[{"el":48,"sc":5,"sl":46},{"el":55,"sc":5,"sl":50},{"el":59,"sc":5,"sl":57},{"el":82,"sc":5,"sl":61},{"el":88,"sc":5,"sl":84},{"el":112,"sc":5,"sl":90},{"el":117,"sc":5,"sl":114},{"el":121,"sc":5,"sl":119},{"el":146,"sc":5,"sl":123},{"el":156,"sc":5,"sl":148},{"el":191,"sc":5,"sl":158},{"el":199,"sc":5,"sl":193},{"el":203,"sc":5,"sl":201},{"el":207,"sc":5,"sl":205},{"el":241,"sc":5,"sl":209},{"el":245,"sc":5,"sl":243},{"el":252,"sc":5,"sl":247},{"el":267,"sc":5,"sl":254}],"name":"JoinedFlatTable","sl":44}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_20":{"methods":[{"sl":119},{"sl":123},{"sl":158},{"sl":209},{"sl":243}],"name":"testBasics","pass":true,"statements":[{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":136},{"sl":137},{"sl":140},{"sl":143},{"sl":144},{"sl":145},{"sl":159},{"sl":160},{"sl":162},{"sl":163},{"sl":164},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":185},{"sl":187},{"sl":210},{"sl":212},{"sl":213},{"sl":214},{"sl":216},{"sl":218},{"sl":223},{"sl":238},{"sl":244}]},"test_21":{"methods":[{"sl":46},{"sl":50},{"sl":57},{"sl":61},{"sl":84},{"sl":90},{"sl":119},{"sl":123},{"sl":158},{"sl":193},{"sl":209},{"sl":243},{"sl":247},{"sl":254}],"name":"testBasics","pass":true,"statements":[{"sl":47},{"sl":52},{"sl":53},{"sl":54},{"sl":58},{"sl":63},{"sl":65},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":73},{"sl":75},{"sl":76},{"sl":79},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":92},{"sl":93},{"sl":96},{"sl":99},{"sl":110},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":136},{"sl":137},{"sl":140},{"sl":143},{"sl":144},{"sl":145},{"sl":159},{"sl":160},{"sl":162},{"sl":163},{"sl":164},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":185},{"sl":187},{"sl":194},{"sl":197},{"sl":210},{"sl":212},{"sl":213},{"sl":214},{"sl":216},{"sl":218},{"sl":223},{"sl":224},{"sl":225},{"sl":226},{"sl":228},{"sl":229},{"sl":230},{"sl":232},{"sl":233},{"sl":238},{"sl":239},{"sl":244},{"sl":248},{"sl":249},{"sl":251},{"sl":255},{"sl":256},{"sl":257},{"sl":259},{"sl":260},{"sl":263},{"sl":266}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21], [21], [], [], [21], [], [21], [21], [21], [], [], [21], [21], [], [], [21], [], [21], [], [21], [], [21], [21], [21], [21], [21], [], [21], [], [21], [21], [], [], [21], [21], [21], [], [], [21], [21], [21], [21], [], [], [21], [21], [21], [21], [], [], [21], [], [], [21], [], [], [], [], [], [], [], [], [], [], [21], [], [], [], [], [], [], [], [], [21, 20], [21, 20], [], [], [21, 20], [], [21, 20], [21, 20], [], [21, 20], [21, 20], [], [21, 20], [21, 20], [21, 20], [21, 20], [], [21, 20], [21, 20], [], [], [21, 20], [], [], [21, 20], [21, 20], [21, 20], [], [], [], [], [], [], [], [], [], [], [], [], [21, 20], [21, 20], [21, 20], [], [21, 20], [21, 20], [21, 20], [], [21, 20], [21, 20], [21, 20], [21, 20], [21, 20], [21, 20], [21, 20], [21, 20], [21, 20], [], [], [21, 20], [21, 20], [21, 20], [21, 20], [21, 20], [], [21, 20], [], [21, 20], [], [21, 20], [], [], [], [], [], [21], [21], [], [], [21], [], [], [], [], [], [], [], [], [], [], [], [21, 20], [21, 20], [], [21, 20], [21, 20], [21, 20], [], [21, 20], [], [21, 20], [], [], [], [], [21, 20], [21], [21], [21], [], [21], [21], [21], [], [21], [21], [], [], [], [], [21, 20], [21], [], [], [], [21, 20], [21, 20], [], [], [21], [21], [21], [], [21], [], [], [21], [21], [21], [21], [], [21], [21], [], [], [21], [], [], [21], [], [], []]