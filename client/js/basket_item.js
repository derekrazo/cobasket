Template.basket_item.helpers({
  arrayify: function (obj) {
    result = [];
    for (var key in obj) {
      result.push({
        key: key,
        value: obj[key],
      });
    }
    return result;
  }
});


Template.basket_item.events({
  
});



/*

Template.basket_item_view.helpers({
  storeViewMode: function () {
    return Session.get("storeViewMode") || false;
  },
  arrayify: function (obj) {
    result = [];
    for (var key in obj) {
      result.push({
        key: key,
        value: obj[key],
      });
    }
    return result;
  }
});


Template.storeView.events({
  'click .listMode': function () {
    Session.set("storeViewMode", false);
  },
  'click .mapMode': function () {
    Session.set("storeViewMode", true);
  },
});

*/