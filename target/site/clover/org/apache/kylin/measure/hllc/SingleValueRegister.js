var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":115,"id":85686,"methods":[{"el":31,"sc":5,"sl":29},{"el":38,"sc":5,"sl":33},{"el":45,"sc":5,"sl":40},{"el":50,"sc":5,"sl":47},{"el":55,"sc":5,"sl":52},{"el":62,"sc":5,"sl":57},{"el":67,"sc":5,"sl":64},{"el":71,"sc":5,"sl":69},{"el":75,"sc":5,"sl":73},{"el":82,"sc":5,"sl":77},{"el":90,"sc":5,"sl":84},{"el":99,"sc":5,"sl":92},{"el":114,"sc":5,"sl":101}],"name":"SingleValueRegister","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_166":{"methods":[{"sl":29},{"sl":52},{"sl":57},{"sl":64}],"name":"testAggregationCacheSpill","pass":true,"statements":[{"sl":30},{"sl":54},{"sl":59},{"sl":61},{"sl":66}]},"test_216":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":64},{"sl":69},{"sl":77}],"name":"basicTest","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_253":{"methods":[{"sl":29},{"sl":57},{"sl":64}],"name":"testEstimateMemSize","pass":true,"statements":[{"sl":30},{"sl":59},{"sl":61},{"sl":66}]},"test_257":{"methods":[{"sl":29},{"sl":52},{"sl":57},{"sl":64}],"name":"testAggregationCacheInMem","pass":true,"statements":[{"sl":30},{"sl":54},{"sl":59},{"sl":61},{"sl":66}]},"test_271":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":57},{"sl":64},{"sl":69},{"sl":73},{"sl":77},{"sl":84}],"name":"testSerialilze","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":59},{"sl":60},{"sl":66},{"sl":70},{"sl":74},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":87},{"sl":89}]},"test_310":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77}],"name":"countTest","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_385":{"methods":[{"sl":29},{"sl":57},{"sl":64}],"name":"testAggregatorEstimate","pass":true,"statements":[{"sl":30},{"sl":59},{"sl":61},{"sl":66}]},"test_418":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":57},{"sl":64},{"sl":69},{"sl":73},{"sl":77},{"sl":101}],"name":"testPeekLength","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":59},{"sl":60},{"sl":66},{"sl":70},{"sl":74},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":103},{"sl":105},{"sl":107},{"sl":109},{"sl":110},{"sl":113}]},"test_431":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77},{"sl":84}],"name":"mergeTest","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":89}]},"test_462":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":64},{"sl":69},{"sl":77}],"name":"testReducer","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_471":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":64},{"sl":69},{"sl":77},{"sl":84}],"name":"compareResult","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":87},{"sl":89}]},"test_491":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77},{"sl":84}],"name":"mergeTest","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":89}]},"test_501":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77}],"name":"countTest","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_532":{"methods":[{"sl":29},{"sl":57},{"sl":64}],"name":"testAggregatorEstimate","pass":true,"statements":[{"sl":30},{"sl":59},{"sl":61},{"sl":66}]},"test_541":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":57},{"sl":64},{"sl":69},{"sl":73},{"sl":77},{"sl":84}],"name":"testSerialilze","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":59},{"sl":60},{"sl":66},{"sl":70},{"sl":74},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":87},{"sl":89}]},"test_590":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":57},{"sl":64},{"sl":69},{"sl":73},{"sl":77},{"sl":101}],"name":"testPeekLength","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":59},{"sl":60},{"sl":66},{"sl":70},{"sl":74},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":103},{"sl":105},{"sl":107},{"sl":109},{"sl":110},{"sl":113}]},"test_597":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":64},{"sl":69},{"sl":77},{"sl":84}],"name":"compareResult","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":87},{"sl":89}]},"test_678":{"methods":[{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77}],"name":"test","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_714":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":64},{"sl":69},{"sl":84}],"name":"testIngest","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":66},{"sl":70},{"sl":85},{"sl":86},{"sl":87},{"sl":89}]},"test_728":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77},{"sl":84}],"name":"testEquivalence","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":87},{"sl":89}]},"test_729":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":64},{"sl":69},{"sl":84}],"name":"testIngest","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":66},{"sl":70},{"sl":85},{"sl":86},{"sl":87},{"sl":89}]},"test_730":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77}],"name":"tesSparseEstimate","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_741":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77}],"name":"tesSparseEstimate","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_744":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77}],"name":"testAutoChangeToSparse","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_746":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77},{"sl":84}],"name":"testEquivalence","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":87},{"sl":89}]},"test_767":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":64},{"sl":69},{"sl":77}],"name":"testAutoChangeToSparse","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":66},{"sl":70},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_770":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":57},{"sl":64},{"sl":69},{"sl":73},{"sl":77}],"name":"testOneAdd","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":59},{"sl":60},{"sl":61},{"sl":66},{"sl":70},{"sl":74},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_782":{"methods":[{"sl":29},{"sl":33},{"sl":40},{"sl":52},{"sl":57},{"sl":64},{"sl":69},{"sl":73},{"sl":77}],"name":"testOneAdd","pass":true,"statements":[{"sl":30},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":43},{"sl":54},{"sl":59},{"sl":60},{"sl":61},{"sl":66},{"sl":70},{"sl":74},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [744, 767, 770, 729, 728, 782, 257, 491, 541, 501, 385, 310, 166, 597, 730, 741, 714, 746, 532, 418, 271, 462, 471, 216, 590, 431, 253], [744, 767, 770, 729, 728, 782, 257, 491, 541, 501, 385, 310, 166, 597, 730, 741, 714, 746, 532, 418, 271, 462, 471, 216, 590, 431, 253], [], [], [744, 767, 770, 729, 728, 782, 491, 541, 501, 310, 597, 730, 741, 714, 746, 678, 418, 271, 462, 471, 216, 590, 431], [], [744, 767, 770, 729, 728, 782, 491, 541, 501, 310, 597, 730, 741, 714, 746, 678, 418, 271, 462, 471, 216, 590, 431], [744, 767, 770, 729, 728, 782, 491, 541, 501, 310, 597, 730, 741, 714, 746, 678, 418, 271, 462, 471, 216, 590, 431], [744, 767, 770, 729, 728, 782, 491, 541, 501, 310, 597, 730, 741, 714, 746, 678, 418, 271, 462, 471, 216, 590, 431], [], [], [744, 767, 770, 729, 728, 782, 491, 541, 501, 310, 597, 730, 741, 714, 746, 678, 418, 271, 462, 471, 216, 590, 431], [], [744, 767, 770, 729, 728, 782, 491, 541, 501, 310, 597, 730, 741, 714, 746, 678, 418, 271, 462, 471, 216, 590, 431], [744, 767, 770, 729, 728, 782, 491, 541, 501, 310, 597, 730, 741, 714, 746, 678, 418, 271, 462, 471, 216, 590, 431], [], [], [], [], [], [], [], [], [770, 729, 782, 257, 541, 166, 597, 714, 418, 271, 462, 471, 216, 590], [], [770, 729, 782, 257, 541, 166, 597, 714, 418, 271, 462, 471, 216, 590], [], [], [770, 782, 257, 541, 385, 166, 532, 418, 271, 590, 253], [], [770, 782, 257, 541, 385, 166, 532, 418, 271, 590, 253], [770, 782, 541, 418, 271, 590], [770, 782, 257, 385, 166, 532, 253], [], [], [744, 767, 770, 729, 728, 782, 257, 491, 541, 501, 385, 310, 166, 597, 730, 741, 714, 746, 678, 532, 418, 271, 462, 471, 216, 590, 431, 253], [], [744, 767, 770, 729, 728, 782, 257, 491, 541, 501, 385, 310, 166, 597, 730, 741, 714, 746, 678, 532, 418, 271, 462, 471, 216, 590, 431, 253], [], [], [744, 767, 770, 729, 728, 782, 491, 541, 501, 310, 597, 730, 741, 714, 746, 678, 418, 271, 462, 471, 216, 590, 431], [744, 767, 770, 729, 728, 782, 491, 541, 501, 310, 597, 730, 741, 714, 746, 678, 418, 271, 462, 471, 216, 590, 431], [], [], [770, 782, 541, 418, 271, 590], [770, 782, 541, 418, 271, 590], [], [], [744, 767, 770, 728, 782, 491, 541, 501, 310, 597, 730, 741, 746, 678, 418, 271, 462, 471, 216, 590, 431], [744, 767, 770, 728, 782, 491, 541, 501, 310, 597, 730, 741, 746, 678, 418, 271, 462, 471, 216, 590, 431], [744, 767, 770, 728, 782, 491, 541, 501, 310, 597, 730, 741, 746, 678, 418, 271, 462, 471, 216, 590, 431], [744, 767, 770, 728, 782, 491, 541, 501, 310, 597, 730, 741, 746, 678, 418, 271, 462, 471, 216, 590, 431], [744, 767, 770, 728, 782, 491, 541, 501, 310, 597, 730, 741, 746, 678, 418, 271, 462, 471, 216, 590, 431], [], [], [729, 728, 491, 541, 597, 714, 746, 271, 471, 431], [729, 728, 491, 541, 597, 714, 746, 271, 471, 431], [729, 728, 491, 541, 597, 714, 746, 271, 471, 431], [729, 728, 541, 597, 714, 746, 271, 471], [], [729, 728, 491, 541, 597, 714, 746, 271, 471, 431], [], [], [], [], [], [], [], [], [], [], [], [418, 590], [], [418, 590], [], [418, 590], [], [418, 590], [], [418, 590], [418, 590], [], [], [418, 590], [], []]