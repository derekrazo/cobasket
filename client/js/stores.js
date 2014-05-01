Template.stores.events({
  'click .store': function (e) {
    var id = e.currentTarget.dataset.id;
    Router.go('store', { id: id });
  },
});