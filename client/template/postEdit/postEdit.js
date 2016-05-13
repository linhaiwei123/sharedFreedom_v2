Template.postEdit.helpers({
    biddingTypeText: function(){
        return UItext.biddingType[this.biddingType] || 
               UItext.biddingType[Enum.biddingType.firstComeFirstServed]
    },
    biddingTypeButton: function(){
        return UIclass.biddingTypeButton[this.biddingType] ||
               UIclass.biddingTypeButton[Enum.biddingType.firstComeFirstServed]
    },
    postPublishTips: UItext.postPublishTips,
});