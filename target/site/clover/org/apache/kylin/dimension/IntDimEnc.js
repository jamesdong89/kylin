var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":186,"id":89010,"methods":[{"el":66,"sc":5,"sl":65},{"el":73,"sc":5,"sl":68},{"el":78,"sc":5,"sl":75},{"el":95,"sc":5,"sl":80},{"el":105,"sc":5,"sl":97},{"el":110,"sc":5,"sl":107},{"el":162,"sc":5,"sl":159},{"el":167,"sc":5,"sl":164},{"el":180,"sc":5,"sl":169},{"el":185,"sc":5,"sl":182}],"name":"IntDimEnc","sl":37},{"el":56,"id":89010,"methods":[{"el":50,"sc":9,"sl":47},{"el":55,"sc":9,"sl":52}],"name":"IntDimEnc.Factory","sl":46},{"el":157,"id":89047,"methods":[{"el":121,"sc":9,"sl":114},{"el":129,"sc":9,"sl":123},{"el":136,"sc":9,"sl":131},{"el":141,"sc":9,"sl":138},{"el":146,"sc":9,"sl":143},{"el":151,"sc":9,"sl":148},{"el":156,"sc":9,"sl":153}],"name":"IntDimEnc.IntegerSerializer","sl":112}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_259":{"methods":[{"sl":52},{"sl":65},{"sl":68},{"sl":107},{"sl":143},{"sl":159},{"sl":164}],"name":"testGTInfo","pass":true,"statements":[{"sl":54},{"sl":69},{"sl":72},{"sl":109},{"sl":145},{"sl":161},{"sl":166}]},"test_305":{"methods":[{"sl":52},{"sl":68},{"sl":75}],"name":"testWithSlr","pass":true,"statements":[{"sl":54},{"sl":69},{"sl":72},{"sl":77}]},"test_489":{"methods":[{"sl":68},{"sl":75},{"sl":80},{"sl":97},{"sl":107},{"sl":114},{"sl":123},{"sl":131}],"name":"testSerDes","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":94},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":109},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135}]},"test_503":{"methods":[{"sl":68},{"sl":75},{"sl":80},{"sl":97}],"name":"testEncodeDecode","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":94},{"sl":99},{"sl":100},{"sl":103},{"sl":104}]},"test_517":{"methods":[{"sl":68},{"sl":75},{"sl":80},{"sl":97},{"sl":107},{"sl":114},{"sl":123},{"sl":131}],"name":"testSerDes","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":94},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":109},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135}]},"test_519":{"methods":[{"sl":68},{"sl":75},{"sl":80},{"sl":97}],"name":"testEncodeDecode","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":94},{"sl":99},{"sl":100},{"sl":103},{"sl":104}]},"test_601":{"methods":[{"sl":52},{"sl":65},{"sl":68},{"sl":107},{"sl":143},{"sl":159},{"sl":164}],"name":"testGTInfo","pass":true,"statements":[{"sl":54},{"sl":69},{"sl":72},{"sl":109},{"sl":145},{"sl":161},{"sl":166}]},"test_688":{"methods":[{"sl":68},{"sl":75},{"sl":80},{"sl":97},{"sl":107},{"sl":114},{"sl":123},{"sl":131}],"name":"testNull","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":77},{"sl":82},{"sl":83},{"sl":84},{"sl":99},{"sl":100},{"sl":109},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135}]},"test_713":{"methods":[{"sl":68}],"name":"testConstructor","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":72}]},"test_720":{"methods":[{"sl":68},{"sl":75},{"sl":80},{"sl":97},{"sl":107},{"sl":114},{"sl":123},{"sl":131}],"name":"testNull","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":77},{"sl":82},{"sl":83},{"sl":84},{"sl":99},{"sl":100},{"sl":109},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135}]},"test_725":{"methods":[{"sl":68}],"name":"testConstructor","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":72}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [259, 601, 305], [], [259, 601, 305], [], [], [], [], [], [], [], [], [], [], [259, 601], [], [], [688, 503, 519, 259, 720, 601, 305, 489, 517, 713, 725], [688, 503, 519, 259, 720, 601, 305, 489, 517, 713, 725], [713, 725], [], [688, 503, 519, 259, 720, 601, 305, 489, 517, 713, 725], [], [], [688, 503, 519, 720, 305, 489, 517], [], [688, 503, 519, 720, 305, 489, 517], [], [], [688, 503, 519, 720, 489, 517], [], [688, 503, 519, 720, 489, 517], [688, 720], [688, 720], [], [], [503, 519, 489, 517], [503, 519, 489, 517], [503, 519, 489, 517], [503, 519, 489, 517], [], [], [], [503, 519, 489, 517], [], [], [688, 503, 519, 720, 489, 517], [], [688, 503, 519, 720, 489, 517], [688, 503, 519, 720, 489, 517], [], [], [503, 519, 489, 517], [503, 519, 489, 517], [], [], [688, 259, 720, 601, 489, 517], [], [688, 259, 720, 601, 489, 517], [], [], [], [], [688, 720, 489, 517], [688, 720, 489, 517], [688, 720, 489, 517], [688, 720, 489, 517], [688, 720, 489, 517], [], [688, 720, 489, 517], [], [], [688, 720, 489, 517], [], [688, 720, 489, 517], [688, 720, 489, 517], [688, 720, 489, 517], [688, 720, 489, 517], [], [], [688, 720, 489, 517], [], [688, 720, 489, 517], [688, 720, 489, 517], [688, 720, 489, 517], [], [], [], [], [], [], [], [259, 601], [], [259, 601], [], [], [], [], [], [], [], [], [], [], [], [], [], [259, 601], [], [259, 601], [], [], [259, 601], [], [259, 601], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]