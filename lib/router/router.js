

// Router.route('/',function(){
//     this.layout('homeContainer');
    
//     this.render('rootNavBar', { to: 'navbar' });
    
//     this.render('postEdit', {to: 'content'});
// },{
//     name: 'home'
// });

Router.route('/',function(){
    this.layout('homeContainer');
    
    this.render('personalInfoBar', { to: 'navbar' });
    
    this.render('postListInPersonalCenter',{to: 'content'});
    
    // this.render('postItemInHome', {to: 'postItem'});
    
    //this.render('postItemDetailInHome', {to: 'postItemDetail'});
    
    
},{
    name: 'home'
});