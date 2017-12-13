var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":310,"id":3145,"methods":[{"el":104,"sc":5,"sl":100},{"el":123,"sc":5,"sl":106},{"el":129,"sc":5,"sl":125},{"el":139,"sc":5,"sl":131},{"el":144,"sc":5,"sl":141},{"el":178,"sc":5,"sl":146},{"el":203,"sc":5,"sl":180},{"el":221,"sc":5,"sl":205},{"el":260,"sc":5,"sl":223},{"el":297,"sc":5,"sl":262},{"el":305,"sc":5,"sl":299},{"el":309,"sc":5,"sl":307}],"name":"AclService","sl":70},{"el":381,"id":3310,"methods":[{"el":331,"sc":5,"sl":330},{"el":339,"sc":5,"sl":333},{"el":343,"sc":5,"sl":341},{"el":347,"sc":5,"sl":345},{"el":351,"sc":5,"sl":349},{"el":355,"sc":5,"sl":353},{"el":359,"sc":5,"sl":357},{"el":363,"sc":5,"sl":361},{"el":367,"sc":5,"sl":365},{"el":371,"sc":5,"sl":369},{"el":375,"sc":5,"sl":373},{"el":379,"sc":5,"sl":377}],"name":"AclRecord","sl":313}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_18":{"methods":[{"sl":125},{"sl":146},{"sl":180},{"sl":223},{"sl":262},{"sl":299},{"sl":307},{"sl":330},{"sl":333},{"sl":341},{"sl":349},{"sl":365},{"sl":373},{"sl":377}],"name":"testAddUpdateProject","pass":true,"statements":[{"sl":127},{"sl":128},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":174},{"sl":182},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":202},{"sl":225},{"sl":226},{"sl":227},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":259},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":281},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":296},{"sl":300},{"sl":301},{"sl":308},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":350},{"sl":366},{"sl":374},{"sl":378}]},"test_20":{"methods":[{"sl":106},{"sl":125},{"sl":131},{"sl":146},{"sl":180},{"sl":205},{"sl":223},{"sl":262},{"sl":299},{"sl":307},{"sl":330},{"sl":333},{"sl":341},{"sl":349},{"sl":365},{"sl":369},{"sl":373},{"sl":377}],"name":"testBasics","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":113},{"sl":114},{"sl":119},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135},{"sl":138},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":174},{"sl":182},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":202},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":213},{"sl":216},{"sl":217},{"sl":225},{"sl":226},{"sl":227},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":259},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":281},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":296},{"sl":300},{"sl":301},{"sl":308},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":350},{"sl":366},{"sl":370},{"sl":374},{"sl":378}]},"test_21":{"methods":[{"sl":125},{"sl":131},{"sl":146},{"sl":180},{"sl":223},{"sl":262},{"sl":299},{"sl":307},{"sl":330},{"sl":333},{"sl":341},{"sl":349},{"sl":365},{"sl":369},{"sl":373},{"sl":377}],"name":"testBasics","pass":true,"statements":[{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135},{"sl":138},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":174},{"sl":182},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":202},{"sl":225},{"sl":226},{"sl":227},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":244},{"sl":254},{"sl":255},{"sl":259},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":281},{"sl":285},{"sl":286},{"sl":296},{"sl":300},{"sl":301},{"sl":308},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":350},{"sl":366},{"sl":370},{"sl":374},{"sl":378}]},"test_22":{"methods":[{"sl":125},{"sl":131},{"sl":146},{"sl":180},{"sl":223},{"sl":262},{"sl":299},{"sl":307},{"sl":330},{"sl":333},{"sl":341},{"sl":349},{"sl":365},{"sl":373},{"sl":377}],"name":"testAuthInProjectLevel","pass":true,"statements":[{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135},{"sl":138},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":174},{"sl":182},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":202},{"sl":225},{"sl":226},{"sl":227},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":259},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":268},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":275},{"sl":276},{"sl":277},{"sl":281},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":296},{"sl":300},{"sl":301},{"sl":308},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":350},{"sl":366},{"sl":374},{"sl":378}]},"test_26":{"methods":[{"sl":125},{"sl":131},{"sl":146},{"sl":180},{"sl":223},{"sl":262},{"sl":299},{"sl":307},{"sl":330},{"sl":333},{"sl":341},{"sl":349},{"sl":365},{"sl":373},{"sl":377}],"name":"testAuthInCubeLevel","pass":true,"statements":[{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135},{"sl":138},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":174},{"sl":182},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":202},{"sl":225},{"sl":226},{"sl":227},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":259},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":268},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":275},{"sl":276},{"sl":277},{"sl":281},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":296},{"sl":300},{"sl":301},{"sl":308},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":350},{"sl":366},{"sl":374},{"sl":378}]},"test_36":{"methods":[{"sl":125},{"sl":146},{"sl":307}],"name":"testBasics","pass":true,"statements":[{"sl":127},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":171},{"sl":308}]},"test_40":{"methods":[{"sl":125},{"sl":146},{"sl":180},{"sl":223},{"sl":262},{"sl":299},{"sl":307},{"sl":330},{"sl":333},{"sl":341},{"sl":349},{"sl":365},{"sl":373},{"sl":377}],"name":"testBasics","pass":true,"statements":[{"sl":127},{"sl":128},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":174},{"sl":182},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":202},{"sl":225},{"sl":226},{"sl":227},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":259},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":281},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":296},{"sl":300},{"sl":301},{"sl":308},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":350},{"sl":366},{"sl":374},{"sl":378}]},"test_54":{"methods":[{"sl":106},{"sl":125},{"sl":131},{"sl":146},{"sl":180},{"sl":205},{"sl":223},{"sl":262},{"sl":299},{"sl":307},{"sl":330},{"sl":333},{"sl":341},{"sl":349},{"sl":357},{"sl":365},{"sl":369},{"sl":373},{"sl":377}],"name":"testBasics","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":119},{"sl":127},{"sl":128},{"sl":133},{"sl":134},{"sl":135},{"sl":138},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":174},{"sl":182},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":202},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":213},{"sl":214},{"sl":216},{"sl":217},{"sl":225},{"sl":226},{"sl":227},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":259},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":281},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":296},{"sl":300},{"sl":301},{"sl":308},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":350},{"sl":358},{"sl":366},{"sl":370},{"sl":374},{"sl":378}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [20, 54], [], [20, 54], [20, 54], [20, 54], [], [20, 54], [20, 54], [20, 54], [54], [54], [], [], [20, 54], [], [], [], [], [], [22, 21, 18, 20, 36, 26, 40, 54], [], [22, 21, 18, 20, 36, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [22, 21, 20, 26, 54], [], [22, 21, 20, 26, 54], [22, 21, 20, 26, 54], [22, 21, 20, 26, 54], [], [], [22, 21, 20, 26, 54], [], [], [], [], [], [], [], [22, 21, 18, 20, 36, 26, 40, 54], [], [22, 21, 18, 20, 36, 26, 40, 54], [22, 21, 18, 20, 36, 26, 40, 54], [22, 21, 18, 20, 36, 26, 40, 54], [22, 21, 18, 20, 36, 26, 40, 54], [22, 21, 18, 20, 36, 26, 40, 54], [], [22, 21, 18, 20, 36, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [21, 20, 54], [21, 20, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [22, 21, 18, 20, 26, 40, 54], [], [22, 21, 18, 20, 36, 26, 40, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [], [], [], [], [], [22, 21, 18, 20, 26, 40, 54], [], [22, 21, 18, 20, 26, 40, 54], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [], [22, 21, 18, 20, 26, 40, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [22, 21, 18, 20, 26, 40, 54], [], [], [], [22, 21, 18, 20, 26, 40, 54], [], [], [20, 54], [], [20, 54], [20, 54], [20, 54], [20, 54], [], [], [20, 54], [54], [], [20, 54], [20, 54], [], [], [], [], [], [22, 21, 18, 20, 26, 40, 54], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [21, 20, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 18, 20, 26, 40, 54], [22, 18, 20, 26, 40, 54], [22, 18, 20, 26, 40, 54], [22, 18, 20, 26, 40, 54], [], [], [22, 18, 20, 26, 40, 54], [22, 18, 20, 26, 40, 54], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [], [22, 21, 18, 20, 26, 40, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [22, 26], [22, 26], [22, 26], [22, 26], [22, 26], [22, 26], [], [22, 26], [22, 26], [22, 26], [], [], [], [22, 21, 18, 20, 26, 40, 54], [], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 18, 20, 26, 40, 54], [], [22, 18, 20, 26, 40, 54], [22, 18, 20, 26, 40, 54], [22, 18, 20, 26, 40, 54], [22, 18, 20, 26, 40, 54], [], [], [], [22, 21, 18, 20, 26, 40, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [], [], [], [22, 21, 18, 20, 36, 26, 40, 54], [22, 21, 18, 20, 36, 26, 40, 54], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [22, 21, 18, 20, 26, 40, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [], [], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [], [], [], [], [54], [54], [], [], [], [], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [21, 20, 54], [21, 20, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], [22, 21, 18, 20, 26, 40, 54], [22, 21, 18, 20, 26, 40, 54], [], [], []]