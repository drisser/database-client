const Kitten = require("./models/KittenModel");

function create(theThing,done){
    const kitty = new Kitten(theThing);
    kitty.save(function (err) {
        console.log(err);
        done();
      })
}

module.exports = create;