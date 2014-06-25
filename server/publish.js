// server
 Meteor.publish('Baskets', function publishFunction() {
   return Baskets.find({}, {limit: 10});
 });

 // server
 Meteor.publish('Basket_items', function publishFunction() {
   return Basket_items.find({}, {limit: 10});
 });