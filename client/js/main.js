Meteor.startup(function () {
  Router.configure({
    layoutTemplate: 'layout',
    yieldTemplates: {
      'header': {to: 'header'},
    },
  })
	Router.map(function () {
    this.route('layout', {
      path: '/',
      layoutTemplate: 'nolayout',
    });
    this.route('baskets', {
      data: function () { return Baskets.find();
      }
    });
    this.route('basket_items', {
      data: function () { return Basket_items.find();
       }
    });
    this.route('basket_item', {
      path: "basket_item/:id",
      data: function () { 
        return Basket_items.findOne(this.params.id); }
    })
  });
});
