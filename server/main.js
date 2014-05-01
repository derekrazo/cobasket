Meteor.startup(function () {
  if (Stores.find().count() === 0) {
    Stores.insert({
      _id: "0",
      name: "Safeway N. Berkeley $$",
      price: 2,
      address: "1444 Shattuck Place, Berkeley",
      distance: "0.5 mi",
      cover: "./images/store3.png",
      items_in_stock: "6 / 6"
    });
    Stores.insert({
      _id: "1",
      name: "Berkeley Bowl $$",
      price: 2,
      address: "920 Heinz Ave, Berkeley",
      distance: "2 mi",
      cover: "./images/store3.png",
      items_in_stock: "3 / 6"

    });
    Stores.insert({
      _id: "2",
      name: "Whole Foods $$$$",
      price: 4,
      address: "3000 Telegraph Ave, Berkeley",
      distance: "3 mi",
      cover: "./images/store3.png",
      items_in_stock: "2 / 6"

    });
  }
})