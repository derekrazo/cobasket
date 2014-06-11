Template.baskets.events({

  'click .add': function (e) {
    Baskets.insert({
      name: "new",
    })
  },

  'click .basket': function (e) {
    Router.go('basket_items');
  },

});


/*

'input .item': function (e) {
    var id = e.currentTarget.dataset.id;
    Baskets.update(id,
    {
      name: e.currentTarget.value
    });
  },

*/