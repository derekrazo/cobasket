Template.store.helpers({
  storeViewMode: function () {
    return Session.get("storeViewMode") || false;
  },
});

Template.store.events({
  'click .listMode': function () {
    Session.set("storeViewMode", false);
  },
  'click .mapMode': function () {
    Session.set("storeViewMode", true);
  },
});