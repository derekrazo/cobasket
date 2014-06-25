Template.baskets.events({ 

  'click .add': function (e) {
    Baskets.insert({
      name: "new",
    })
  },

  'click .basket-container': function (e) {
    var id = e.currentTarget.dataset.id;
    Router.go('basket', { id: id });
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