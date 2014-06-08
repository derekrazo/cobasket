Template.baskets.events({

  'click .add': function (e) {
    Baskets.insert({
      name: "new",
    })
  },

  'click .remove': function (e) {
    var id = e.currentTarget.dataset.id;
    Baskets.remove(id)
  },

});

Template.list.rendered = function() {

}

/*

'input .item': function (e) {
    var id = e.currentTarget.dataset.id;
    Baskets.update(id,
    {
      name: e.currentTarget.value
    });
  },

*/