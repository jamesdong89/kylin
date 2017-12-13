var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":445,"id":58535,"methods":[{"el":71,"sc":5,"sl":66},{"el":76,"sc":5,"sl":73},{"el":81,"sc":5,"sl":78},{"el":89,"sc":13,"sl":86},{"el":91,"sc":5,"sl":83}],"name":"HiveMRInput","sl":61},{"el":124,"id":58550,"methods":[{"el":105,"sc":9,"sl":101},{"el":117,"sc":9,"sl":107},{"el":122,"sc":9,"sl":119}],"name":"HiveMRInput.HiveTableInputFormat","sl":93},{"el":274,"id":58562,"methods":[{"el":139,"sc":9,"sl":134},{"el":158,"sc":9,"sl":141},{"el":166,"sc":9,"sl":160},{"el":176,"sc":9,"sl":168},{"el":180,"sc":9,"sl":178},{"el":190,"sc":9,"sl":182},{"el":237,"sc":9,"sl":192},{"el":252,"sc":9,"sl":239},{"el":264,"sc":9,"sl":254},{"el":269,"sc":9,"sl":266},{"el":273,"sc":9,"sl":271}],"name":"HiveMRInput.BatchCubingInputSide","sl":126},{"el":380,"id":58658,"methods":[{"el":282,"sc":9,"sl":279},{"el":302,"sc":9,"sl":284},{"el":309,"sc":9,"sl":304},{"el":355,"sc":9,"sl":311},{"el":359,"sc":9,"sl":357},{"el":363,"sc":9,"sl":361},{"el":367,"sc":9,"sl":365},{"el":371,"sc":9,"sl":369},{"el":375,"sc":9,"sl":373},{"el":379,"sc":9,"sl":377}],"name":"HiveMRInput.RedistributeFlatHiveTableStep","sl":276},{"el":444,"id":58728,"methods":[{"el":399,"sc":9,"sl":385},{"el":415,"sc":9,"sl":401},{"el":423,"sc":9,"sl":417},{"el":427,"sc":9,"sl":425},{"el":431,"sc":9,"sl":429},{"el":435,"sc":9,"sl":433},{"el":439,"sc":9,"sl":437},{"el":443,"sc":9,"sl":441}],"name":"HiveMRInput.GarbageCollectionStep","sl":382}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_21":{"methods":[{"sl":73},{"sl":134},{"sl":141},{"sl":160},{"sl":168},{"sl":178},{"sl":182},{"sl":192},{"sl":239},{"sl":254},{"sl":271},{"sl":357},{"sl":365},{"sl":377},{"sl":425},{"sl":433},{"sl":441}],"name":"testBasics","pass":true,"statements":[{"sl":75},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":143},{"sl":144},{"sl":146},{"sl":149},{"sl":152},{"sl":153},{"sl":157},{"sl":161},{"sl":162},{"sl":163},{"sl":165},{"sl":169},{"sl":170},{"sl":172},{"sl":173},{"sl":174},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":194},{"sl":195},{"sl":197},{"sl":198},{"sl":199},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":209},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":222},{"sl":224},{"sl":225},{"sl":227},{"sl":228},{"sl":232},{"sl":235},{"sl":236},{"sl":242},{"sl":243},{"sl":244},{"sl":246},{"sl":247},{"sl":248},{"sl":249},{"sl":250},{"sl":251},{"sl":256},{"sl":258},{"sl":259},{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":272},{"sl":358},{"sl":366},{"sl":378},{"sl":426},{"sl":434},{"sl":442}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21], [], [21], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21], [21], [21], [21], [21], [], [], [21], [], [21], [21], [], [21], [], [], [21], [], [], [21], [21], [], [], [], [21], [], [], [21], [21], [21], [21], [], [21], [], [], [21], [21], [21], [], [21], [21], [21], [], [], [], [21], [21], [], [], [21], [21], [21], [21], [21], [21], [21], [21], [], [], [21], [], [21], [21], [], [21], [21], [21], [], [21], [21], [21], [21], [21], [], [], [], [21], [], [], [], [21], [21], [21], [21], [21], [21], [21], [21], [21], [21], [], [21], [21], [], [21], [21], [], [], [], [21], [], [], [21], [21], [], [], [21], [], [], [21], [21], [21], [], [21], [21], [21], [21], [21], [21], [], [], [21], [], [21], [], [21], [21], [21], [21], [21], [21], [], [], [], [], [], [], [], [21], [21], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21], [21], [], [], [], [], [], [], [21], [21], [], [], [], [], [], [], [], [], [], [], [21], [21], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21], [21], [], [], [], [], [], [], [21], [21], [], [], [], [], [], [], [21], [21], [], [], []]