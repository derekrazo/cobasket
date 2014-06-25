Meteor.startup(function () {
  if (Basket_items.find().count() === 0) {
    
    Basket_items.insert({
      _id: "0",
      name: "Apples",
      price: 4,
      basket: "1",
    });

    Basket_items.insert({
      _id: "1",
      name: "Oranges",
      price: 4,
      basket: "1",
    });

    Basket_items.insert({
      _id: "2",
      name: "Almonds",
      price: 4,
      basket: "1",
    });

    Basket_items.insert({
      _id: "3",
      name: "Pears",
      price: 4,
      basket: "0",
    });

    Basket_items.insert({
      _id: "4",
      name: "Plumbs",
      price: 4,
      basket: "2",
    });

    Baskets.insert({
      _id: "0",
      name: "Summit Residence Monthly Food Delivery",
      members: {
          0 : "Derek Razo",
          1 : "Michael Williams"
      }
    });

    Baskets.insert({
      _id: "1",
      name: "E-textiles Bulk-buyers Basket",
      members: {
          0 : "Derek Razo",
          1 : "Michael Williams"
      }
    });

    Baskets.insert({
      _id: "2",
      name: "West Berkeley Artists Collective",
      members: {
          0 : "Derek Razo",
          1 : "Michael Williams"
      }
    });
  }
})



/*

Basket_items.insert({
      _id: "1",
      name: "Berkeley Bowl $$",
      price: 2,
      address: "920 Heinz Ave, Berkeley",
      distance: "2 mi",
      cover: "./images/store3.png",
      items_in_stock: "3 / 6",
      inventory: {
        2: ['Apples'],
        3: ['Pears'],
        4: ['Strawberries'],
        5: ['Raspberries'],
      },
    });


*/