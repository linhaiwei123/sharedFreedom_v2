Template.postItemInPersonalCenter.helpers({
    moneyTips: UItext.moneyTips,
    publisherIdTips: UItext.publisherIdTips,
    biddingTypeClass: function(){return UIclass.biddingType[this.biddingType];},
    biddingTypeText: function(){return UItext.biddingType[this.biddingType];},
    postTimeTips: UItext.postTimeTips,
    
    postReEditTips: UItext.postReEditTips,
    postDeleteTips: UItext.postDeleteTips,
    
    applicationPeopleList: UItext.applicationPeopleList,
});

Template.postItemInPersonalCenter.events({
    'click button[name="postItemDetailEdit"]': function(){
        
        Template.instance().$('div[name="postItemDetailEditInPersonalCenter"]').modal('toggle');
    },
    'click button[name="postItemDetailDelete"]': function(){
        
        Template.instance().$('div[name="postItemDetailDeleteComfirmInPersonalCenter"]').modal('toggle');
    },
    'click button[name="postItemEmployeeList"]': function(){
        
        Template.instance().$('div[name="postItemDetailEmployeeListInPersonalCenter"]').modal('toggle');
    },
    
    
});
