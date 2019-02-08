const Kitten = require("./models/KittenModel");

function findBy(name, done){
    Kitten.find({name:"Jax"}, function (err, kittens){
        done(kittens);
    })    
}

module.exports = findBy;