var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":112,"id":37524,"methods":[{"el":48,"sc":5,"sl":45},{"el":53,"sc":5,"sl":50},{"el":58,"sc":5,"sl":55},{"el":63,"sc":5,"sl":60},{"el":68,"sc":5,"sl":65},{"el":73,"sc":5,"sl":70},{"el":78,"sc":5,"sl":75},{"el":84,"sc":5,"sl":80},{"el":88,"sc":5,"sl":86},{"el":93,"sc":5,"sl":90},{"el":98,"sc":5,"sl":95},{"el":102,"sc":5,"sl":100},{"el":106,"sc":5,"sl":104},{"el":110,"sc":5,"sl":108}],"name":"JsonUtil","sl":39}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_104":{"methods":[{"sl":65}],"name":"testBadDesc","pass":true,"statements":[{"sl":67}]},"test_105":{"methods":[{"sl":75}],"name":"getTreeCuboidSchedulerTest","pass":true,"statements":[{"sl":77}]},"test_106":{"methods":[{"sl":65}],"name":"testGoodDesc","pass":true,"statements":[{"sl":67}]},"test_108":{"methods":[{"sl":65},{"sl":90}],"name":"testSucceedAndFailed","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_109":{"methods":[{"sl":65},{"sl":90}],"name":"testSingleTaskJob","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_110":{"methods":[{"sl":65},{"sl":90}],"name":"test","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_111":{"methods":[{"sl":65},{"sl":90}],"name":"testSucceed","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_112":{"methods":[{"sl":65},{"sl":90}],"name":"testInvalidStateTransfer","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_116":{"methods":[{"sl":65},{"sl":90}],"name":"testSucceedAndError","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_117":{"methods":[{"sl":65},{"sl":90}],"name":"testValidStateTransfer","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_118":{"methods":[{"sl":65},{"sl":90}],"name":"testDefaultChainedExecutable","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_119":{"methods":[{"sl":65},{"sl":90}],"name":"testDiscard","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_12":{"methods":[{"sl":65}],"name":"testQueryException","pass":true,"statements":[{"sl":67}]},"test_123":{"methods":[{"sl":65},{"sl":90}],"name":"test3Delete","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_131":{"methods":[{"sl":45},{"sl":65}],"name":"testGetCachedDataSource","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":67}]},"test_132":{"methods":[{"sl":45},{"sl":65},{"sl":108}],"name":"testBasics","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":67},{"sl":109}]},"test_138":{"methods":[{"sl":65}],"name":"testMaxConnLimit","pass":true,"statements":[{"sl":67}]},"test_140":{"methods":[{"sl":65}],"name":"testCreateDataSource","pass":true,"statements":[{"sl":67}]},"test_144":{"methods":[{"sl":65},{"sl":90}],"name":"test2Update","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_145":{"methods":[{"sl":65}],"name":"testCreateDataSourceWithProps","pass":true,"statements":[{"sl":67}]},"test_147":{"methods":[{"sl":45},{"sl":65}],"name":"test","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":67}]},"test_148":{"methods":[{"sl":45},{"sl":65},{"sl":90}],"name":"test1Create","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":67},{"sl":92}]},"test_15":{"methods":[{"sl":65}],"name":"testDeleteSegmentInMiddle","pass":true,"statements":[{"sl":67}]},"test_157":{"methods":[{"sl":65}],"name":"testCuboidGeneration6","pass":true,"statements":[{"sl":67}]},"test_158":{"methods":[{"sl":65},{"sl":90}],"name":"testAppendNonPartitioned","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_159":{"methods":[{"sl":65}],"name":"testDropNonexistProject","pass":true,"statements":[{"sl":67}]},"test_16":{"methods":[{"sl":65},{"sl":90}],"name":"testGetHoles","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_160":{"methods":[{"sl":65}],"name":"testDropNonemptyProject","pass":true,"statements":[{"sl":67}]},"test_162":{"methods":[{"sl":65}],"name":"testTooManyCombination","pass":true,"statements":[{"sl":67}]},"test_163":{"methods":[{"sl":65}],"name":"testFindCuboidByIdWithMultiAggrGroup","pass":true,"statements":[{"sl":67}]},"test_164":{"methods":[{"sl":65}],"name":"testCuboidCounts1","pass":true,"statements":[{"sl":67}]},"test_165":{"methods":[{"sl":65}],"name":"testGoodDesc","pass":true,"statements":[{"sl":67}]},"test_169":{"methods":[{"sl":65}],"name":"testCuboidGeneration5","pass":true,"statements":[{"sl":67}]},"test_17":{"methods":[{"sl":65},{"sl":90},{"sl":100}],"name":"testCubeCRUD","pass":true,"statements":[{"sl":67},{"sl":92},{"sl":101}]},"test_170":{"methods":[{"sl":65}],"name":"test","pass":true,"statements":[{"sl":67}]},"test_173":{"methods":[{"sl":65}],"name":"testCombinationIntOverflow","pass":true,"statements":[{"sl":67}]},"test_174":{"methods":[{"sl":65},{"sl":90}],"name":"testPartitioned","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_176":{"methods":[{"sl":65}],"name":"testGoodDesc2","pass":true,"statements":[{"sl":67}]},"test_179":{"methods":[{"sl":65}],"name":"testCuboidCounts6","pass":true,"statements":[{"sl":67}]},"test_18":{"methods":[{"sl":55},{"sl":65},{"sl":90}],"name":"testAddUpdateProject","pass":true,"statements":[{"sl":57},{"sl":67},{"sl":92}]},"test_180":{"methods":[{"sl":65}],"name":"testFindCuboidByIdWithSingleAggrGroup2","pass":true,"statements":[{"sl":67}]},"test_181":{"methods":[{"sl":65}],"name":"testBadDesc2","pass":true,"statements":[{"sl":67}]},"test_182":{"methods":[{"sl":65}],"name":"testBadDesc3","pass":true,"statements":[{"sl":67}]},"test_184":{"methods":[{"sl":65},{"sl":90}],"name":"testProjectsLoadAfterProjectChange","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_185":{"methods":[{"sl":65},{"sl":90}],"name":"testAppendNonPartitioned2","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_186":{"methods":[{"sl":65}],"name":"testProject2","pass":true,"statements":[{"sl":67}]},"test_188":{"methods":[{"sl":65}],"name":"testFindCuboidByIdWithSingleAggrGroup1","pass":true,"statements":[{"sl":67}]},"test_189":{"methods":[{"sl":55},{"sl":100}],"name":"testSerializeMap","pass":true,"statements":[{"sl":57},{"sl":101}]},"test_19":{"methods":[{"sl":65}],"name":"testBasic","pass":true,"statements":[{"sl":67}]},"test_192":{"methods":[{"sl":65},{"sl":90}],"name":"testConcurrentBuildAndMerge","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_193":{"methods":[{"sl":108}],"name":"testGetCopyOf","pass":true,"statements":[{"sl":109}]},"test_196":{"methods":[{"sl":65}],"name":"testCuboidGeneration3","pass":true,"statements":[{"sl":67}]},"test_199":{"methods":[{"sl":65}],"name":"testGoodBecomeBadDesc","pass":true,"statements":[{"sl":67}]},"test_2":{"methods":[{"sl":65}],"name":"testBasics","pass":true,"statements":[{"sl":67}]},"test_20":{"methods":[{"sl":55},{"sl":65},{"sl":90},{"sl":100}],"name":"testBasics","pass":true,"statements":[{"sl":57},{"sl":67},{"sl":92},{"sl":101}]},"test_200":{"methods":[{"sl":65},{"sl":90}],"name":"testProjectsDrop","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_202":{"methods":[{"sl":65},{"sl":90}],"name":"testCreateAndDrop","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_203":{"methods":[{"sl":65}],"name":"testCuboidGeneration1","pass":true,"statements":[{"sl":67}]},"test_204":{"methods":[{"sl":65}],"name":"testCuboidGeneration7","pass":true,"statements":[{"sl":67}]},"test_207":{"methods":[{"sl":90}],"name":"testReloadCache","pass":true,"statements":[{"sl":92}]},"test_209":{"methods":[{"sl":65}],"name":"testLargeCube","pass":true,"statements":[{"sl":67}]},"test_21":{"methods":[{"sl":65},{"sl":90}],"name":"testBasics","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_210":{"methods":[{"sl":65}],"name":"testValidateMeasureNamesDuplicated","pass":true,"statements":[{"sl":67}]},"test_211":{"methods":[{"sl":65}],"name":"testIsValid2","pass":true,"statements":[{"sl":67}]},"test_212":{"methods":[{"sl":65}],"name":"testCuboidGeneration4","pass":true,"statements":[{"sl":67}]},"test_213":{"methods":[{"sl":65}],"name":"test2","pass":true,"statements":[{"sl":67}]},"test_215":{"methods":[{"sl":65},{"sl":90}],"name":"testConcurrentMergeAndMerge","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_217":{"methods":[{"sl":65}],"name":"testProject1","pass":true,"statements":[{"sl":67}]},"test_219":{"methods":[{"sl":55},{"sl":108}],"name":"testSerialize","pass":true,"statements":[{"sl":57},{"sl":109}]},"test_22":{"methods":[{"sl":65},{"sl":90}],"name":"testAuthInProjectLevel","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_224":{"methods":[{"sl":65}],"name":"testCuboid_onlyBaseCuboid","pass":true,"statements":[{"sl":67}]},"test_225":{"methods":[{"sl":65}],"name":"test","pass":true,"statements":[{"sl":67}]},"test_226":{"methods":[{"sl":65}],"name":"testIsValid3","pass":true,"statements":[{"sl":67}]},"test_227":{"methods":[{"sl":65}],"name":"testBadDesc","pass":true,"statements":[{"sl":67}]},"test_229":{"methods":[{"sl":65}],"name":"testCuboidCounts5","pass":true,"statements":[{"sl":67}]},"test_23":{"methods":[{"sl":65},{"sl":90}],"name":"testMetaCRUD","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_231":{"methods":[{"sl":65},{"sl":90}],"name":"testAutoMergeWithGap","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_232":{"methods":[{"sl":65},{"sl":90}],"name":"testExistingProject","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_234":{"methods":[{"sl":65}],"name":"testCuboidCounts3","pass":true,"statements":[{"sl":67}]},"test_235":{"methods":[{"sl":65}],"name":"testBadDesc5","pass":true,"statements":[{"sl":67}]},"test_236":{"methods":[{"sl":65}],"name":"testTooManyRowkeys","pass":false,"statements":[{"sl":67}]},"test_237":{"methods":[{"sl":65}],"name":"testGoodDesc","pass":true,"statements":[{"sl":67}]},"test_24":{"methods":[{"sl":65},{"sl":90}],"name":"testFailQuery","pass":false,"statements":[{"sl":67},{"sl":92}]},"test_240":{"methods":[{"sl":65}],"name":"testBadDesc4","pass":true,"statements":[{"sl":67}]},"test_241":{"methods":[{"sl":65}],"name":"testCuboidCounts4","pass":true,"statements":[{"sl":67}]},"test_242":{"methods":[{"sl":65},{"sl":90}],"name":"testAllowGap","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_243":{"methods":[{"sl":65},{"sl":90}],"name":"testNewProject","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_244":{"methods":[{"sl":65}],"name":"testGetSpanningCuboid1","pass":true,"statements":[{"sl":67}]},"test_245":{"methods":[{"sl":65}],"name":"testCuboidGeneration2","pass":true,"statements":[{"sl":67}]},"test_246":{"methods":[{"sl":65}],"name":"testIsValid","pass":true,"statements":[{"sl":67}]},"test_247":{"methods":[{"sl":65}],"name":"testGetCubeNameWithNamespace","pass":true,"statements":[{"sl":67}]},"test_248":{"methods":[{"sl":65}],"name":"testCombinationIntOverflow","pass":false,"statements":[{"sl":67}]},"test_249":{"methods":[{"sl":65},{"sl":90}],"name":"testAutoMergeNormal","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_250":{"methods":[{"sl":65},{"sl":100}],"name":"testBasics","pass":true,"statements":[{"sl":67},{"sl":101}]},"test_252":{"methods":[{"sl":65}],"name":"testGetSpanningCuboid2","pass":true,"statements":[{"sl":67}]},"test_255":{"methods":[{"sl":45},{"sl":65}],"name":"testBadDesc1","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":67}]},"test_256":{"methods":[{"sl":65}],"name":"testGoodDesc2","pass":true,"statements":[{"sl":67}]},"test_259":{"methods":[{"sl":55},{"sl":65}],"name":"testGTInfo","pass":true,"statements":[{"sl":57},{"sl":67}]},"test_26":{"methods":[{"sl":65},{"sl":90}],"name":"testAuthInCubeLevel","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_260":{"methods":[{"sl":65}],"name":"testBadDesc2","pass":true,"statements":[{"sl":67}]},"test_262":{"methods":[{"sl":65}],"name":"testCuboidCounts2","pass":true,"statements":[{"sl":67}]},"test_263":{"methods":[{"sl":65}],"name":"testGoodDesc","pass":true,"statements":[{"sl":67}]},"test_264":{"methods":[{"sl":65}],"name":"testGetAllCubes","pass":true,"statements":[{"sl":67}]},"test_265":{"methods":[{"sl":65}],"name":"testPropertiesHotLoad","pass":true,"statements":[{"sl":67}]},"test_267":{"methods":[{"sl":65},{"sl":108}],"name":"testBasics","pass":true,"statements":[{"sl":67},{"sl":109}]},"test_27":{"methods":[{"sl":55}],"name":"testAddExistingProject","pass":true,"statements":[{"sl":57}]},"test_273":{"methods":[{"sl":65},{"sl":108}],"name":"testPartitionDescCopyOf","pass":true,"statements":[{"sl":67},{"sl":109}]},"test_275":{"methods":[{"sl":65},{"sl":90}],"name":"testBasics","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_279":{"methods":[{"sl":65}],"name":"testRealizationCheck","pass":true,"statements":[{"sl":67}]},"test_28":{"methods":[{"sl":65},{"sl":90}],"name":"testSuccessModelUpdate","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_281":{"methods":[{"sl":65},{"sl":108}],"name":"testGetCopyOf","pass":true,"statements":[{"sl":67},{"sl":109}]},"test_29":{"methods":[{"sl":65},{"sl":90}],"name":"testRevisableModelInCaseOfMoveMeasureToDim","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_297":{"methods":[{"sl":45},{"sl":55},{"sl":65}],"name":"testWithoutSlr","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":57},{"sl":67}]},"test_30":{"methods":[{"sl":65}],"name":"testNormalQuery","pass":true,"statements":[{"sl":67}]},"test_302":{"methods":[{"sl":65}],"name":"testListAllTables","pass":true,"statements":[{"sl":67}]},"test_303":{"methods":[{"sl":65}],"name":"testNoDupColInDimAndMeasure","pass":true,"statements":[{"sl":67}]},"test_305":{"methods":[{"sl":55},{"sl":65}],"name":"testWithSlr","pass":true,"statements":[{"sl":57},{"sl":67}]},"test_31":{"methods":[{"sl":65}],"name":"testRevisableModelInCaseOfDeleteDims","pass":false,"statements":[{"sl":67}]},"test_311":{"methods":[{"sl":65}],"name":"loadLeftModel","pass":true,"statements":[{"sl":67}]},"test_312":{"methods":[{"sl":65}],"name":"testListAllTables","pass":true,"statements":[{"sl":67}]},"test_32":{"methods":[{"sl":65}],"name":"testGetCubes","pass":true,"statements":[{"sl":67}]},"test_320":{"methods":[{"sl":65}],"name":"testGetInstance","pass":true,"statements":[{"sl":67}]},"test_327":{"methods":[{"sl":65}],"name":"testCiModel","pass":true,"statements":[{"sl":67}]},"test_328":{"methods":[{"sl":55},{"sl":65}],"name":"testEncodeAndDecodeWithUtf8","pass":true,"statements":[{"sl":57},{"sl":67}]},"test_329":{"methods":[{"sl":65},{"sl":108}],"name":"testBasics","pass":true,"statements":[{"sl":67},{"sl":109}]},"test_343":{"methods":[{"sl":65}],"name":"testNoDupColInDimAndMeasure","pass":true,"statements":[{"sl":67}]},"test_351":{"methods":[{"sl":45},{"sl":65},{"sl":90}],"name":"testAddEntryToProject","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":67},{"sl":92}]},"test_353":{"methods":[{"sl":65},{"sl":108}],"name":"testGetCopyOf","pass":true,"statements":[{"sl":67},{"sl":109}]},"test_356":{"methods":[{"sl":90}],"name":"test","pass":true,"statements":[{"sl":92}]},"test_358":{"methods":[{"sl":55},{"sl":65}],"name":"testDecodeWithoutSlr","pass":true,"statements":[{"sl":57},{"sl":67}]},"test_359":{"methods":[{"sl":65},{"sl":90}],"name":"testBasics","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_36":{"methods":[{"sl":65},{"sl":90}],"name":"testBasics","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_363":{"methods":[{"sl":65}],"name":"loadInnerModel","pass":true,"statements":[{"sl":67}]},"test_366":{"methods":[{"sl":65}],"name":"testDataModel","pass":true,"statements":[{"sl":67}]},"test_371":{"methods":[{"sl":65}],"name":"loadLeftModel","pass":true,"statements":[{"sl":67}]},"test_39":{"methods":[{"sl":65}],"name":"testBasics","pass":true,"statements":[{"sl":67}]},"test_390":{"methods":[{"sl":65}],"name":"testReducerOnlyAggrInBaseCuboid","pass":true,"statements":[{"sl":67}]},"test_391":{"methods":[{"sl":65},{"sl":90}],"name":"testUpdateEntryToProject","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_399":{"methods":[{"sl":65},{"sl":90}],"name":"testUpdateEntryToProject","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_40":{"methods":[{"sl":65},{"sl":90}],"name":"testBasics","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_401":{"methods":[{"sl":65},{"sl":90}],"name":"testTableSample","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_409":{"methods":[{"sl":65}],"name":"testCiModel","pass":true,"statements":[{"sl":67}]},"test_42":{"methods":[{"sl":65},{"sl":90}],"name":"test","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_43":{"methods":[{"sl":65}],"name":"testGetMetadata","pass":true,"statements":[{"sl":67}]},"test_430":{"methods":[{"sl":45},{"sl":55},{"sl":100}],"name":"foo","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":57},{"sl":101}]},"test_44":{"methods":[{"sl":65},{"sl":90}],"name":"testFailQueryWithCountStar","pass":false,"statements":[{"sl":67},{"sl":92}]},"test_442":{"methods":[{"sl":65}],"name":"testFindTableByName","pass":true,"statements":[{"sl":67}]},"test_444":{"methods":[{"sl":45},{"sl":65}],"name":"testReducer","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":67}]},"test_449":{"methods":[{"sl":65}],"name":"testSSBNoConfig","pass":true,"statements":[{"sl":67}]},"test_45":{"methods":[{"sl":65},{"sl":90}],"name":"testTableACL","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_454":{"methods":[{"sl":65}],"name":"testFindTableByName","pass":true,"statements":[{"sl":67}]},"test_466":{"methods":[{"sl":45},{"sl":55},{"sl":100}],"name":"foo","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":57},{"sl":101}]},"test_469":{"methods":[{"sl":65},{"sl":90}],"name":"testTableSample","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_479":{"methods":[{"sl":55},{"sl":65}],"name":"testEncodeWithoutSlr","pass":true,"statements":[{"sl":57},{"sl":67}]},"test_48":{"methods":[{"sl":65}],"name":"testBasics","pass":true,"statements":[{"sl":67}]},"test_480":{"methods":[{"sl":65},{"sl":90}],"name":"testTableExtCompatibility","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_485":{"methods":[{"sl":65}],"name":"testMatch","pass":true,"statements":[{"sl":67}]},"test_498":{"methods":[{"sl":65}],"name":"testDataModel","pass":true,"statements":[{"sl":67}]},"test_536":{"methods":[{"sl":45},{"sl":65},{"sl":90}],"name":"testAddEntryToProject","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":67},{"sl":92}]},"test_537":{"methods":[{"sl":65}],"name":"testMatch","pass":true,"statements":[{"sl":67}]},"test_54":{"methods":[{"sl":65},{"sl":90}],"name":"testBasics","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_55":{"methods":[{"sl":65}],"name":"testDeleteSegmentNew","pass":true,"statements":[{"sl":67}]},"test_56":{"methods":[{"sl":65},{"sl":90}],"name":"testDeleteSegmentFromHead","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_564":{"methods":[{"sl":65}],"name":"loadInnerModel","pass":true,"statements":[{"sl":67}]},"test_569":{"methods":[{"sl":65}],"name":"testSSBNoConfig","pass":true,"statements":[{"sl":67}]},"test_57":{"methods":[{"sl":65}],"name":"testDeleteSegmentNotExist","pass":true,"statements":[{"sl":67}]},"test_572":{"methods":[{"sl":65}],"name":"testBasics","pass":true,"statements":[{"sl":67}]},"test_585":{"methods":[{"sl":65},{"sl":90}],"name":"testTableExtCompatibility","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_589":{"methods":[{"sl":65}],"name":"testGetInstance","pass":true,"statements":[{"sl":67}]},"test_591":{"methods":[{"sl":65},{"sl":108}],"name":"testPartitionDescCopyOf","pass":true,"statements":[{"sl":67},{"sl":109}]},"test_594":{"methods":[{"sl":45},{"sl":55},{"sl":65},{"sl":100},{"sl":108}],"name":"testBuildSaveDictionary","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":57},{"sl":67},{"sl":101},{"sl":109}]},"test_596":{"methods":[{"sl":45},{"sl":55}],"name":"testReadTableDesc","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":57}]},"test_6":{"methods":[{"sl":65},{"sl":90}],"name":"testExceptionOnLostJobOutput","pass":true,"statements":[{"sl":67},{"sl":92}]},"test_601":{"methods":[{"sl":55},{"sl":65}],"name":"testGTInfo","pass":true,"statements":[{"sl":57},{"sl":67}]},"test_62":{"methods":[{"sl":65}],"name":"testJob","pass":true,"statements":[{"sl":67}]},"test_629":{"methods":[{"sl":45},{"sl":55},{"sl":65},{"sl":100},{"sl":108}],"name":"testBuildSaveDictionary","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":57},{"sl":67},{"sl":101},{"sl":109}]},"test_642":{"methods":[{"sl":65}],"name":"testCIConfigured","pass":true,"statements":[{"sl":67}]},"test_643":{"methods":[{"sl":65}],"name":"testCIConfigured","pass":true,"statements":[{"sl":67}]},"test_646":{"methods":[{"sl":65}],"name":"testBasics","pass":true,"statements":[{"sl":67}]},"test_71":{"methods":[{"sl":65}],"name":"testError","pass":true,"statements":[{"sl":67}]},"test_79":{"methods":[{"sl":65}],"name":"testDecode","pass":true,"statements":[{"sl":67}]},"test_9":{"methods":[{"sl":65}],"name":"testRevisableModelInCaseOfDeleteMeasure","pass":false,"statements":[{"sl":67}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [536, 629, 430, 255, 444, 131, 594, 297, 596, 351, 466, 148, 132, 147], [536, 629, 430, 255, 444, 131, 594, 297, 596, 351, 466, 148, 132, 147], [536, 629, 430, 255, 444, 131, 594, 297, 596, 351, 466, 148, 132, 147], [], [], [], [], [], [], [], [259, 629, 219, 430, 594, 305, 297, 596, 466, 328, 27, 601, 20, 358, 18, 189, 479], [], [259, 629, 219, 430, 594, 305, 297, 596, 466, 328, 27, 601, 20, 358, 18, 189, 479], [], [], [], [], [], [], [], [144, 231, 454, 262, 263, 71, 267, 196, 303, 112, 163, 110, 646, 24, 259, 48, 329, 247, 391, 192, 227, 26, 536, 181, 22, 629, 275, 537, 449, 158, 15, 353, 399, 157, 170, 234, 2, 232, 642, 255, 265, 572, 243, 444, 44, 199, 225, 302, 248, 117, 17, 186, 252, 31, 164, 320, 213, 131, 594, 305, 173, 343, 401, 589, 169, 162, 371, 442, 204, 297, 249, 202, 241, 23, 104, 246, 264, 281, 140, 108, 179, 498, 176, 363, 9, 6, 45, 351, 185, 212, 585, 32, 19, 226, 148, 236, 209, 132, 564, 54, 174, 237, 57, 229, 203, 159, 224, 273, 188, 328, 43, 160, 56, 12, 601, 20, 119, 366, 358, 182, 106, 256, 116, 62, 279, 42, 250, 118, 184, 311, 55, 79, 21, 18, 260, 244, 36, 16, 643, 30, 165, 569, 469, 138, 147, 145, 217, 485, 123, 215, 327, 39, 242, 109, 235, 211, 312, 480, 111, 390, 210, 409, 479, 240, 28, 359, 591, 180, 245, 29, 40, 200], [], [144, 231, 454, 262, 263, 71, 267, 196, 303, 112, 163, 110, 646, 24, 259, 48, 329, 247, 391, 192, 227, 26, 536, 181, 22, 629, 275, 537, 449, 158, 15, 353, 399, 157, 170, 234, 2, 232, 642, 255, 265, 572, 243, 444, 44, 199, 225, 302, 248, 117, 17, 186, 252, 31, 164, 320, 213, 131, 594, 305, 173, 343, 401, 589, 169, 162, 371, 442, 204, 297, 249, 202, 241, 23, 104, 246, 264, 281, 140, 108, 179, 498, 176, 363, 9, 6, 45, 351, 185, 212, 585, 32, 19, 226, 148, 236, 209, 132, 564, 54, 174, 237, 57, 229, 203, 159, 224, 273, 188, 328, 43, 160, 56, 12, 601, 20, 119, 366, 358, 182, 106, 256, 116, 62, 279, 42, 250, 118, 184, 311, 55, 79, 21, 18, 260, 244, 36, 16, 643, 30, 165, 569, 469, 138, 147, 145, 217, 485, 123, 215, 327, 39, 242, 109, 235, 211, 312, 480, 111, 390, 210, 409, 479, 240, 28, 359, 591, 180, 245, 29, 40, 200], [], [], [], [], [], [], [], [105], [], [105], [], [], [], [], [], [], [], [], [], [], [], [], [144, 231, 112, 110, 24, 391, 192, 26, 536, 22, 275, 158, 399, 232, 243, 44, 117, 17, 401, 207, 249, 202, 23, 108, 6, 45, 351, 185, 585, 148, 54, 174, 56, 20, 119, 116, 42, 118, 184, 21, 18, 36, 16, 356, 469, 123, 215, 242, 109, 480, 111, 28, 359, 29, 40, 200], [], [144, 231, 112, 110, 24, 391, 192, 26, 536, 22, 275, 158, 399, 232, 243, 44, 117, 17, 401, 207, 249, 202, 23, 108, 6, 45, 351, 185, 585, 148, 54, 174, 56, 20, 119, 116, 42, 118, 184, 21, 18, 36, 16, 356, 469, 123, 215, 242, 109, 480, 111, 28, 359, 29, 40, 200], [], [], [], [], [], [], [], [629, 430, 17, 594, 466, 20, 250, 189], [629, 430, 17, 594, 466, 20, 250, 189], [], [], [], [], [], [], [267, 329, 629, 353, 219, 594, 281, 132, 193, 273, 591], [267, 329, 629, 353, 219, 594, 281, 132, 193, 273, 591], [], [], []]