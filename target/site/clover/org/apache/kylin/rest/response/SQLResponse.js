var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":188,"id":90858,"methods":[{"el":67,"sc":5,"sl":66},{"el":76,"sc":5,"sl":69},{"el":86,"sc":5,"sl":78},{"el":98,"sc":5,"sl":88},{"el":102,"sc":5,"sl":100},{"el":106,"sc":5,"sl":104},{"el":110,"sc":5,"sl":108},{"el":114,"sc":5,"sl":112},{"el":118,"sc":5,"sl":116},{"el":122,"sc":5,"sl":120},{"el":126,"sc":5,"sl":124},{"el":130,"sc":5,"sl":128},{"el":134,"sc":5,"sl":132},{"el":138,"sc":5,"sl":136},{"el":142,"sc":5,"sl":140},{"el":146,"sc":5,"sl":144},{"el":151,"sc":5,"sl":148},{"el":155,"sc":5,"sl":153},{"el":159,"sc":5,"sl":157},{"el":163,"sc":5,"sl":161},{"el":167,"sc":5,"sl":165},{"el":171,"sc":5,"sl":169},{"el":175,"sc":5,"sl":173},{"el":179,"sc":5,"sl":177},{"el":183,"sc":5,"sl":181},{"el":187,"sc":5,"sl":185}],"name":"SQLResponse","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":66},{"sl":104},{"sl":108},{"sl":112},{"sl":116},{"sl":124},{"sl":128},{"sl":140},{"sl":144},{"sl":157},{"sl":161},{"sl":173},{"sl":181},{"sl":185}],"name":"testQueryMetrics","pass":true,"statements":[{"sl":105},{"sl":109},{"sl":113},{"sl":117},{"sl":125},{"sl":129},{"sl":141},{"sl":145},{"sl":158},{"sl":162},{"sl":174},{"sl":182},{"sl":186}]},"test_12":{"methods":[{"sl":69},{"sl":124},{"sl":132},{"sl":140},{"sl":148},{"sl":153},{"sl":157},{"sl":161},{"sl":165},{"sl":169},{"sl":173},{"sl":181}],"name":"testQueryException","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":125},{"sl":133},{"sl":141},{"sl":150},{"sl":154},{"sl":158},{"sl":162},{"sl":166},{"sl":170},{"sl":174},{"sl":182}]},"test_48":{"methods":[{"sl":66},{"sl":104},{"sl":124},{"sl":132},{"sl":140},{"sl":148},{"sl":153},{"sl":157},{"sl":165},{"sl":173},{"sl":177},{"sl":181}],"name":"testBasics","pass":true,"statements":[{"sl":105},{"sl":125},{"sl":133},{"sl":141},{"sl":150},{"sl":154},{"sl":158},{"sl":166},{"sl":174},{"sl":178},{"sl":182}]},"test_60":{"methods":[{"sl":66},{"sl":104},{"sl":108},{"sl":112},{"sl":116},{"sl":124},{"sl":128},{"sl":140},{"sl":144},{"sl":157},{"sl":161},{"sl":173},{"sl":181},{"sl":185}],"name":"testQueryMetrics","pass":true,"statements":[{"sl":105},{"sl":109},{"sl":113},{"sl":117},{"sl":125},{"sl":129},{"sl":141},{"sl":145},{"sl":158},{"sl":162},{"sl":174},{"sl":182},{"sl":186}]},"test_766":{"methods":[{"sl":66},{"sl":78},{"sl":104},{"sl":108},{"sl":112},{"sl":116},{"sl":124},{"sl":128},{"sl":132},{"sl":136},{"sl":140},{"sl":144},{"sl":157},{"sl":161},{"sl":165},{"sl":169},{"sl":173},{"sl":177},{"sl":181},{"sl":185}],"name":"test","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":105},{"sl":109},{"sl":113},{"sl":117},{"sl":125},{"sl":129},{"sl":133},{"sl":137},{"sl":141},{"sl":145},{"sl":158},{"sl":162},{"sl":166},{"sl":170},{"sl":174},{"sl":178},{"sl":182},{"sl":186}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [48, 766, 60, 1], [], [], [12], [], [12], [12], [12], [12], [12], [], [], [766], [], [766], [766], [766], [766], [766], [766], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [48, 766, 60, 1], [48, 766, 60, 1], [], [], [766, 60, 1], [766, 60, 1], [], [], [766, 60, 1], [766, 60, 1], [], [], [766, 60, 1], [766, 60, 1], [], [], [], [], [], [], [12, 48, 766, 60, 1], [12, 48, 766, 60, 1], [], [], [766, 60, 1], [766, 60, 1], [], [], [12, 48, 766], [12, 48, 766], [], [], [766], [766], [], [], [12, 48, 766, 60, 1], [12, 48, 766, 60, 1], [], [], [766, 60, 1], [766, 60, 1], [], [], [12, 48], [], [12, 48], [], [], [12, 48], [12, 48], [], [], [12, 48, 766, 60, 1], [12, 48, 766, 60, 1], [], [], [12, 766, 60, 1], [12, 766, 60, 1], [], [], [12, 48, 766], [12, 48, 766], [], [], [12, 766], [12, 766], [], [], [12, 48, 766, 60, 1], [12, 48, 766, 60, 1], [], [], [48, 766], [48, 766], [], [], [12, 48, 766, 60, 1], [12, 48, 766, 60, 1], [], [], [766, 60, 1], [766, 60, 1], [], []]