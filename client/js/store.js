Template.store.helpers({
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


Template.store.events({
  'click .listMode': function () {
    Session.set("storeViewMode", false);
  },
  'click .mapMode': function () {
    Session.set("storeViewMode", true);
  },
});