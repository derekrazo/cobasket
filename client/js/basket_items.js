Template.basket_items.events({
  'click .basket_item': function (e) {
    var id = e.currentTarget.dataset.id;
    Router.go('item_view', { id: id });
  },
});

Template.stores.rendered = function() {

}


/*

Template.stores.events({
  'click .store': function (e) {
    var id = e.currentTarget.dataset.id;
    Router.go('storeView', { id: id });
  },
});

*/