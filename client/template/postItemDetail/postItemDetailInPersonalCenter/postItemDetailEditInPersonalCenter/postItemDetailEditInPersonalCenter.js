Template.postItemDetailEditInPersonalCenter.helpers({
    closeTips: UItext.closeTips,
    postPublishTips: UItext.postPublishTips,
    titleInputTips: UItext.titleInputTips,
    biddingTypeClass: function(){return UIclass.biddingTypeButton[this.biddingType];},
    biddingTypeText: function(){return UItext.biddingType[this.biddingType];},
    telephoneInputTips: UItext.telephoneInputTips,
    moneyInputTips: UItext.moneyInputTips,
    contentInputTips: UItext.contentInputTips,
    contentInputRows: UIclass.contentInputRows,
});