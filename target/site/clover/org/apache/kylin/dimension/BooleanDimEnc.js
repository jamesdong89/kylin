var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":182,"id":88479,"methods":[{"el":51,"sc":5,"sl":47},{"el":71,"sc":5,"sl":70},{"el":76,"sc":5,"sl":73},{"el":91,"sc":5,"sl":78},{"el":105,"sc":5,"sl":93},{"el":110,"sc":5,"sl":107},{"el":162,"sc":5,"sl":159},{"el":167,"sc":5,"sl":164},{"el":176,"sc":5,"sl":169},{"el":181,"sc":5,"sl":178}],"name":"BooleanDimEnc","sl":37},{"el":63,"id":88484,"methods":[{"el":57,"sc":9,"sl":54},{"el":62,"sc":9,"sl":59}],"name":"BooleanDimEnc.Factory","sl":53},{"el":157,"id":88516,"methods":[{"el":121,"sc":9,"sl":114},{"el":129,"sc":9,"sl":123},{"el":136,"sc":9,"sl":131},{"el":141,"sc":9,"sl":138},{"el":146,"sc":9,"sl":143},{"el":151,"sc":9,"sl":148},{"el":156,"sc":9,"sl":153}],"name":"BooleanDimEnc.BooleanSerializer","sl":112}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_283":{"methods":[{"sl":70},{"sl":73},{"sl":78},{"sl":93},{"sl":107},{"sl":114},{"sl":123},{"sl":131}],"name":"testSerDes","pass":true,"statements":[{"sl":75},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":90},{"sl":95},{"sl":99},{"sl":100},{"sl":104},{"sl":109},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135}]},"test_301":{"methods":[{"sl":70},{"sl":73},{"sl":78},{"sl":93}],"name":"testEncodeDecode","pass":true,"statements":[{"sl":75},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":90},{"sl":95},{"sl":99},{"sl":100},{"sl":104}]},"test_595":{"methods":[{"sl":70},{"sl":73},{"sl":78},{"sl":93}],"name":"testEncodeDecode","pass":true,"statements":[{"sl":75},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":90},{"sl":95},{"sl":99},{"sl":100},{"sl":104}]},"test_652":{"methods":[{"sl":70},{"sl":73},{"sl":78},{"sl":93},{"sl":107},{"sl":114},{"sl":123},{"sl":131}],"name":"testSerDes","pass":true,"statements":[{"sl":75},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":90},{"sl":95},{"sl":99},{"sl":100},{"sl":104},{"sl":109},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135}]},"test_701":{"methods":[{"sl":47},{"sl":70},{"sl":73},{"sl":78},{"sl":93},{"sl":107},{"sl":114},{"sl":123},{"sl":131}],"name":"testNull","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":75},{"sl":80},{"sl":81},{"sl":82},{"sl":95},{"sl":96},{"sl":109},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135}]},"test_726":{"methods":[{"sl":47},{"sl":70},{"sl":73},{"sl":78},{"sl":93},{"sl":107},{"sl":114},{"sl":123},{"sl":131}],"name":"testNull","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":75},{"sl":80},{"sl":81},{"sl":82},{"sl":95},{"sl":96},{"sl":109},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":120},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [701, 726], [701, 726], [701, 726], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [701, 283, 595, 726, 301, 652], [], [], [701, 283, 595, 726, 301, 652], [], [701, 283, 595, 726, 301, 652], [], [], [701, 283, 595, 726, 301, 652], [], [701, 283, 595, 726, 301, 652], [701, 726], [701, 726], [], [], [283, 595, 301, 652], [283, 595, 301, 652], [283, 595, 301, 652], [], [], [283, 595, 301, 652], [], [], [701, 283, 595, 726, 301, 652], [], [701, 283, 595, 726, 301, 652], [701, 726], [], [], [283, 595, 301, 652], [283, 595, 301, 652], [], [], [], [283, 595, 301, 652], [], [], [701, 283, 726, 652], [], [701, 283, 726, 652], [], [], [], [], [701, 283, 726, 652], [701, 283, 726, 652], [701, 283, 726, 652], [701, 283, 726, 652], [701, 283, 726, 652], [], [701, 283, 726, 652], [], [], [701, 283, 726, 652], [], [701, 283, 726, 652], [701, 283, 726, 652], [701, 283, 726, 652], [701, 283, 726, 652], [], [], [701, 283, 726, 652], [], [701, 283, 726, 652], [701, 283, 726, 652], [701, 283, 726, 652], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]