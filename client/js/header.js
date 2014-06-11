Template.header.events({
  
  "click #baskets": function (e) {
    Router.go('/baskets');
  },

  "click #polls": function (e) {
    Router.go('/polls');
  },

  "click #account_tag_thumbnail": function (e) {
    Router.go('/profile');
  },

  "click #account_tag_name": function (e) {
    Router.go('/profile');
  },

  "click #help": function (e) {
    Router.go('/help');
  },

});

