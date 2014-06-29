Template.basket.events({
  'click .basket_item > img': function (e) {
    var id = e.currentTarget.dataset.id;
    Router.go('basket_item', { id: id });
  },

  	'click #add_basket_item' : function(e) {
    	//alert('yo')
	    var item_name = $('#add_item_name').val();
	    var item_url = $('#add_item_image_url').val();
	    
	    //do validation on form={firstname:'first name', lastname: 'last name', email: 'email@email.com'}
	    Basket_items.insert({
	      name: item_name,
	      image_url: item_url,
	      basket: "1",
	      started_by: "Michael Williams",
	    })

    	e.preventDefault(); //prevent page refresh
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