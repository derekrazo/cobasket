Meteor.startup(function () {
  Router.configure({
    layoutTemplate: 'layout',
    yieldTemplates: {
      'header': {to: 'header'},
    },
  })
	Router.map(function () {
    this.route('landing', {
      path: '/',
      layoutTemplate: 'nolayout',
    });
    this.route('baskets', {
      data: function () { return Baskets.find();
      }
    });
    this.route('basket_view', {
      data: function () { return Baskets.find();
       }
    });
    this.route('basket_item_view', {
      path: "basket_item_view/:id",
      data: function () { 
        return Basket_items.findOne(this.params.id); }
    })
  });
});

Template.list.rendered = function() {

}