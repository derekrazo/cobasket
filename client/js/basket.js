Template.basket.events({
  'click .basket_item > img': function (e) {
    var id = e.currentTarget.dataset.id;
    Router.go('basket_item', { id: id });
  },
});




/*

Template.stores.events({
  'click .store': function (e) {
    var id = e.currentTarget.dataset.id;
    Router.go('storeView', { id: id });
  },
});

*/