Meteor.startup(function () {
  if (Stores.find().count() === 0) {
    Stores.insert({
      _id: "0",
      name: "Safeway N. Berkeley",
      price: 2,
      address: "1444 Shattuck Place, Berkeley",
      distance: "0.5 mi",
      inventory: {
        2: ['egg', 'milk'],
        3: ['joy', 'love']
      },
    });
    Stores.insert({
      _id: "1",
      name: "Berkeley Bowl",
      price: 2,
      address: "920 Heinz Ave, Berkeley",
      distance: "2 mi",
      inventory: {
        2: ['apple'],
        3: ['pear'],
        4: ['strawberry'],
        5: ['raspberry'],
      },
    });
    Stores.insert({
      _id: "2",
      name: "Whole Foods",
      price: 4,
      address: "3000 Telegraph Ave, Berkeley",
      distance: "3 mi",
      inventory: {
        2: ['rice'],
        3: ['beans'],
        4: ['egg'],
        5: ['milk'],
      },
    });
  }
})