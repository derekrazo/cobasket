Template.list.events({
  'click .add': function () {
    List.insert({
      name: "new",
    })
  },
  'input .item': function (e) {
    console.log(e);
    var id = e.currentTarget.dataset.id;
    List.update({
      _id: id,
    }, {
      name: e.currentTarget.value
    });
  },
});