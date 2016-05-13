let item_1 = {};
item_1._id = 1;
item_1.telephone = 15986711808;
item_1.money = 3000;
item_1.title = 'hello';
item_1.content = 'just a kiddy hhhh';
item_1.biddingType = Enum.biddingType.manyPeopleBid;
item_1.postTime = new Date().pattern("yyyy-MM-dd EEE hh:mm:ss");
item_1.publisherId = 'linhaiwei1235';

let item_2 = {};
item_2._id = 2;
item_2.telephone = 133226856888;
item_2.money = 5000;
item_2.title = 'hi';
item_2.content = 'just a kiddy again right';
item_2.biddingType = Enum.biddingType.firstComeFirstServed;
item_2.postTime = new Date().pattern("yyyy-MM-dd EEE hh:mm:ss");
item_2.publisherId = 'qiuzitong1234';

Template.postListInPersonalCenter.helpers({
    postList:function(){
        return [
             item_1,
            item_2,
            item_1,
            item_2,
            item_1,
            item_2,
            item_1,
            item_2,
            item_1,
            item_2,
            item_1,
            item_2,
        ]
    }
});