Template.list.events({
  'click .add': function () {
    List.insert({
      name: "new",
    })
  }
})