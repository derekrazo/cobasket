Template.list.events({

  'click .add': function (e) {
    List.insert({
      name: "new",
    })
  },

  'click .remove': function (e) {
    var id = e.currentTarget.dataset.id;
    List.remove(id)
  },

  'input .item': function (e) {
    var id = e.currentTarget.dataset.id;
    List.update(id,
    {
      name: e.currentTarget.value
    });
  },
});