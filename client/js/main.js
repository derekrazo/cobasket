Meteor.startup(function () {
	Router.map(function () {
    this.route('landing', {
      path: '/'
    });
    this.route('list',{
      data: function () { return List.find(); }
    });
  });
});
