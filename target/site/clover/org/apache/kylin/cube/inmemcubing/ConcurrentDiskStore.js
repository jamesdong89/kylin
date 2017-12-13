var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":369,"id":20016,"methods":[{"el":70,"sc":5,"sl":68},{"el":74,"sc":5,"sl":72},{"el":88,"sc":5,"sl":76},{"el":93,"sc":5,"sl":90},{"el":98,"sc":5,"sl":95},{"el":103,"sc":5,"sl":100},{"el":114,"sc":5,"sl":105},{"el":124,"sc":5,"sl":116},{"el":129,"sc":5,"sl":126},{"el":141,"sc":5,"sl":131},{"el":152,"sc":5,"sl":143},{"el":331,"sc":5,"sl":324},{"el":336,"sc":5,"sl":333},{"el":342,"sc":5,"sl":338},{"el":347,"sc":5,"sl":344},{"el":362,"sc":5,"sl":349},{"el":367,"sc":5,"sl":364}],"name":"ConcurrentDiskStore","sl":50},{"el":268,"id":20079,"methods":[{"el":177,"sc":17,"sl":170},{"el":195,"sc":17,"sl":179},{"el":200,"sc":17,"sl":197},{"el":203,"sc":9,"sl":160},{"el":212,"sc":9,"sl":205},{"el":241,"sc":17,"sl":222},{"el":254,"sc":17,"sl":243},{"el":259,"sc":17,"sl":256},{"el":261,"sc":9,"sl":214},{"el":266,"sc":9,"sl":263}],"name":"ConcurrentDiskStore.Reader","sl":154},{"el":322,"id":20157,"methods":[{"el":289,"sc":17,"sl":285},{"el":299,"sc":17,"sl":291},{"el":302,"sc":9,"sl":275},{"el":312,"sc":9,"sl":304},{"el":321,"sc":9,"sl":314}],"name":"ConcurrentDiskStore.Writer","sl":270}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_183":{"methods":[{"sl":68},{"sl":76},{"sl":95},{"sl":105},{"sl":116},{"sl":126},{"sl":131},{"sl":143},{"sl":160},{"sl":179},{"sl":197},{"sl":205},{"sl":214},{"sl":222},{"sl":243},{"sl":275},{"sl":291},{"sl":304},{"sl":314},{"sl":324},{"sl":333},{"sl":338},{"sl":344},{"sl":349}],"name":"testMultiThreadRead","pass":true,"statements":[{"sl":69},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":83},{"sl":84},{"sl":86},{"sl":97},{"sl":106},{"sl":107},{"sl":110},{"sl":111},{"sl":112},{"sl":117},{"sl":118},{"sl":121},{"sl":122},{"sl":128},{"sl":132},{"sl":133},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":144},{"sl":145},{"sl":148},{"sl":149},{"sl":150},{"sl":161},{"sl":162},{"sl":164},{"sl":167},{"sl":181},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":194},{"sl":199},{"sl":202},{"sl":207},{"sl":208},{"sl":210},{"sl":216},{"sl":217},{"sl":224},{"sl":227},{"sl":228},{"sl":229},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":240},{"sl":245},{"sl":250},{"sl":251},{"sl":252},{"sl":253},{"sl":276},{"sl":277},{"sl":279},{"sl":282},{"sl":293},{"sl":294},{"sl":295},{"sl":296},{"sl":297},{"sl":301},{"sl":306},{"sl":307},{"sl":309},{"sl":310},{"sl":311},{"sl":316},{"sl":317},{"sl":319},{"sl":325},{"sl":328},{"sl":329},{"sl":334},{"sl":335},{"sl":339},{"sl":340},{"sl":345},{"sl":346},{"sl":351},{"sl":352},{"sl":355},{"sl":356},{"sl":359}]},"test_258":{"methods":[{"sl":68},{"sl":76},{"sl":95},{"sl":105},{"sl":116},{"sl":126},{"sl":131},{"sl":143},{"sl":160},{"sl":179},{"sl":197},{"sl":205},{"sl":214},{"sl":222},{"sl":243},{"sl":275},{"sl":291},{"sl":304},{"sl":314},{"sl":324},{"sl":333},{"sl":338},{"sl":344},{"sl":349}],"name":"testSingleThreadRead","pass":true,"statements":[{"sl":69},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":83},{"sl":84},{"sl":86},{"sl":97},{"sl":106},{"sl":107},{"sl":110},{"sl":111},{"sl":112},{"sl":117},{"sl":118},{"sl":121},{"sl":122},{"sl":128},{"sl":132},{"sl":133},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":144},{"sl":145},{"sl":148},{"sl":149},{"sl":150},{"sl":161},{"sl":162},{"sl":164},{"sl":167},{"sl":181},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":194},{"sl":199},{"sl":202},{"sl":207},{"sl":208},{"sl":210},{"sl":216},{"sl":217},{"sl":224},{"sl":227},{"sl":228},{"sl":229},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":240},{"sl":245},{"sl":250},{"sl":251},{"sl":252},{"sl":253},{"sl":276},{"sl":277},{"sl":279},{"sl":282},{"sl":293},{"sl":294},{"sl":295},{"sl":296},{"sl":297},{"sl":301},{"sl":306},{"sl":307},{"sl":309},{"sl":310},{"sl":311},{"sl":316},{"sl":317},{"sl":319},{"sl":325},{"sl":328},{"sl":329},{"sl":334},{"sl":335},{"sl":339},{"sl":340},{"sl":345},{"sl":346},{"sl":351},{"sl":352},{"sl":355},{"sl":356},{"sl":359}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [183, 258], [183, 258], [], [], [], [], [], [], [183, 258], [183, 258], [183, 258], [183, 258], [183, 258], [], [], [183, 258], [183, 258], [], [183, 258], [], [], [], [], [], [], [], [], [183, 258], [], [183, 258], [], [], [], [], [], [], [], [183, 258], [183, 258], [183, 258], [], [], [183, 258], [183, 258], [183, 258], [], [], [], [183, 258], [183, 258], [183, 258], [], [], [183, 258], [183, 258], [], [], [], [183, 258], [], [183, 258], [], [], [183, 258], [183, 258], [183, 258], [], [], [183, 258], [183, 258], [183, 258], [183, 258], [], [], [], [183, 258], [183, 258], [183, 258], [], [], [183, 258], [183, 258], [183, 258], [], [], [], [], [], [], [], [], [], [183, 258], [183, 258], [183, 258], [], [183, 258], [], [], [183, 258], [], [], [], [], [], [], [], [], [], [], [], [183, 258], [], [183, 258], [], [], [183, 258], [183, 258], [183, 258], [183, 258], [], [183, 258], [183, 258], [183, 258], [183, 258], [], [183, 258], [], [], [183, 258], [], [183, 258], [], [], [183, 258], [], [], [183, 258], [], [183, 258], [183, 258], [], [183, 258], [], [], [], [183, 258], [], [183, 258], [183, 258], [], [], [], [], [183, 258], [], [183, 258], [], [], [183, 258], [183, 258], [183, 258], [183, 258], [183, 258], [183, 258], [183, 258], [183, 258], [], [], [], [], [], [183, 258], [], [], [183, 258], [], [183, 258], [], [], [], [], [183, 258], [183, 258], [183, 258], [183, 258], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [183, 258], [183, 258], [183, 258], [], [183, 258], [], [], [183, 258], [], [], [], [], [], [], [], [], [183, 258], [], [183, 258], [183, 258], [183, 258], [183, 258], [183, 258], [], [], [], [183, 258], [], [], [183, 258], [], [183, 258], [183, 258], [], [183, 258], [183, 258], [183, 258], [], [], [183, 258], [], [183, 258], [183, 258], [], [183, 258], [], [], [], [], [183, 258], [183, 258], [], [], [183, 258], [183, 258], [], [], [], [183, 258], [183, 258], [183, 258], [], [], [183, 258], [183, 258], [183, 258], [], [], [], [183, 258], [183, 258], [183, 258], [], [], [183, 258], [], [183, 258], [183, 258], [], [], [183, 258], [183, 258], [], [], [183, 258], [], [], [], [], [], [], [], [], [], []]