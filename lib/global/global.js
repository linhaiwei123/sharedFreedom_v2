

//Enum
Enum = {};
Enum.biddingType = {};
Enum.biddingType.firstComeFirstServed = '1';
Enum.biddingType.manyPeopleBid = '2';

//UIclass
UIclass = {};
UIclass.biddingType = {};
UIclass.biddingType[Enum.biddingType.firstComeFirstServed] = 'label label-danger';
UIclass.biddingType[Enum.biddingType.manyPeopleBid] = 'label label-success';

UIclass.biddingTypeButton = {};
UIclass.biddingTypeButton[Enum.biddingType.firstComeFirstServed] = 'btn btn-block btn-danger';
UIclass.biddingTypeButton[Enum.biddingType.manyPeopleBid] = 'btn btn-block btn-success';

UIclass.contentInputRows = '8';


//UItext
UItext = {}; 
UItext.brandName = 'SharedFreedom';
UItext.navItem_1 = '学校';
UItext.navItem_2 = '发布';
UItext.navItem_3 = '个人中心';

UItext.moneyTips = '金额： ';
UItext.publisherIdTips = '发布者：';
UItext.postTimeTips = '发布时间：';

UItext.biddingType = {};
UItext.biddingType[Enum.biddingType.firstComeFirstServed] = '先到先得';
UItext.biddingType[Enum.biddingType.manyPeopleBid] = '多人竞标';

UItext.loginTips = '登录';
UItext.registerTips = '注册';

UItext.postPublishTips = '发布帖子';

UItext.myPostPublish = '我的发布';
UItext.myPostReply = '我的接单';

UItext.postReEditTips = '重新编辑';
UItext.postDeleteTips = '撤销发布';

UItext.applicationPeopleList = '查看申请';
UItext.seeDetailsTips = '查看详情';

UItext.applicationTips = '申请接单';
UItext.closeTips = '关闭';

UItext.titleInputTips = '请输入帖子的标题';
UItext.telephoneInputTips = '请输入您的联系方式';
UItext.moneyInputTips = '请输入与买/卖方交易的金额';
UItext.contentInputTips = '请输入帖子的具体内容/时间地点';
UItext.postDeleteConfirmTips = '确定撤销';