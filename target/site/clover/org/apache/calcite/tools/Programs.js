var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":436,"id":74496,"methods":[{"el":92,"sc":9,"sl":90},{"el":159,"sc":3,"sl":159},{"el":164,"sc":3,"sl":162},{"el":169,"sc":3,"sl":167},{"el":174,"sc":3,"sl":172},{"el":179,"sc":3,"sl":177},{"el":184,"sc":3,"sl":182},{"el":189,"sc":3,"sl":187},{"el":199,"sc":3,"sl":192},{"el":223,"sc":7,"sl":205},{"el":225,"sc":3,"sl":202},{"el":273,"sc":7,"sl":236},{"el":275,"sc":3,"sl":232},{"el":279,"sc":3,"sl":277},{"el":284,"sc":3,"sl":281},{"el":292,"sc":3,"sl":286},{"el":301,"sc":7,"sl":296},{"el":303,"sc":3,"sl":294},{"el":308,"sc":3,"sl":306},{"el":339,"sc":11,"sl":315},{"el":350,"sc":3,"sl":311}],"name":"Programs","sl":87},{"el":381,"id":74581,"methods":[{"el":358,"sc":5,"sl":356},{"el":380,"sc":5,"sl":360}],"name":"Programs.RuleSetProgram","sl":353},{"el":402,"id":74597,"methods":[{"el":390,"sc":5,"sl":388},{"el":401,"sc":5,"sl":392}],"name":"Programs.SequenceProgram","sl":385},{"el":423,"id":74603,"methods":[{"el":422,"sc":5,"sl":412}],"name":"Programs.DecorrelateProgram","sl":411},{"el":435,"id":74610,"methods":[{"el":434,"sc":5,"sl":427}],"name":"Programs.TrimFieldsProgram","sl":426}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":187},{"sl":192},{"sl":202},{"sl":205},{"sl":277},{"sl":286},{"sl":306},{"sl":311},{"sl":315},{"sl":388},{"sl":392},{"sl":412},{"sl":427}],"name":"testFailQuery","pass":false,"statements":[{"sl":188},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":204},{"sl":209},{"sl":212},{"sl":213},{"sl":214},{"sl":216},{"sl":217},{"sl":219},{"sl":221},{"sl":222},{"sl":278},{"sl":287},{"sl":307},{"sl":313},{"sl":319},{"sl":321},{"sl":324},{"sl":328},{"sl":332},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":389},{"sl":396},{"sl":397},{"sl":400},{"sl":416},{"sl":418},{"sl":419},{"sl":431},{"sl":433}]},"test_30":{"methods":[{"sl":187},{"sl":192},{"sl":202},{"sl":205},{"sl":277},{"sl":286},{"sl":306},{"sl":311},{"sl":315},{"sl":388},{"sl":392},{"sl":412},{"sl":427}],"name":"testNormalQuery","pass":true,"statements":[{"sl":188},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":204},{"sl":209},{"sl":212},{"sl":213},{"sl":214},{"sl":216},{"sl":217},{"sl":219},{"sl":221},{"sl":222},{"sl":278},{"sl":287},{"sl":307},{"sl":313},{"sl":319},{"sl":321},{"sl":324},{"sl":328},{"sl":332},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":389},{"sl":396},{"sl":397},{"sl":400},{"sl":416},{"sl":418},{"sl":419},{"sl":431},{"sl":433}]},"test_44":{"methods":[{"sl":187},{"sl":192},{"sl":202},{"sl":205},{"sl":277},{"sl":286},{"sl":306},{"sl":311},{"sl":315},{"sl":388},{"sl":392},{"sl":412},{"sl":427}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":188},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":204},{"sl":209},{"sl":212},{"sl":213},{"sl":214},{"sl":216},{"sl":217},{"sl":219},{"sl":221},{"sl":222},{"sl":278},{"sl":287},{"sl":307},{"sl":313},{"sl":319},{"sl":321},{"sl":324},{"sl":328},{"sl":332},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":342},{"sl":389},{"sl":396},{"sl":397},{"sl":400},{"sl":416},{"sl":418},{"sl":419},{"sl":431},{"sl":433}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [], [], [], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [24, 44, 30], [], [], [], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [], [], [], [24, 44, 30], [], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [], [], [], [24, 44, 30], [], [24, 44, 30], [], [24, 44, 30], [], [], [], [24, 44, 30], [], [24, 44, 30], [], [], [24, 44, 30], [], [], [], [24, 44, 30], [], [], [], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [24, 44, 30], [], [], [], [24, 44, 30], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [24, 44, 30], [], [], [24, 44, 30], [], [], [], [24, 44, 30], [24, 44, 30], [], [], [24, 44, 30], [], [], [], [], [], [], [], [], [], [], [], [24, 44, 30], [], [], [], [24, 44, 30], [], [24, 44, 30], [24, 44, 30], [], [], [], [], [], [], [], [24, 44, 30], [], [], [], [24, 44, 30], [], [24, 44, 30], [], [], [], [], []]