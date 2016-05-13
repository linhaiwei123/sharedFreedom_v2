Template.postItemInHome.helpers({
    moneyTips: UItext.moneyTips,
    publisherIdTips: UItext.publisherIdTips,
    biddingTypeClass: function(){return UIclass.biddingType[this.biddingType];},
    biddingTypeText: function(){return UItext.biddingType[this.biddingType];},
    postTimeTips: UItext.postTimeTips,
    seeDetailsTips: UItext.seeDetailsTips,
});

Template.postItemInHome.events({
    'click button[name="postItemDetail"]': function(){
        
        Template.instance().$('div[name="postItemDetailInHome"]').modal('toggle');
        
    }

});



