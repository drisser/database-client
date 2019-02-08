const create = require("./create");
const findAll = require("./find-all");
const findById = require("./find-by-id");
const findBy = require("./find-by");

const mongoose = require('mongoose');
mongoose.connect('mongodb://drisser:DJR390@ds161764.mlab.com:61764/your-project', {useNewUrlParser: true});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

printMenu();
function printMenu(){
  console.log("1. Create a new thing");
  console.log("2. Find all things");
  console.log("3. Find a thing by id");
  console.log("4. Find a thing by");
  console.log("5. Exit");
  getMenuInput();
}


function getMenuInput(){
  readline.question(">>", function(answer) {
    if(answer === "1"){
      createThing();
    }
    if(answer === "2"){
      findAllThings();
    }
    if(answer === "3"){
      findThingById();
    }
    if(answer === "4"){
      findThing();
    }
    if(answer === "5"){
      readline.close();
      process.stdin.destroy();
    }
  });
}
let newThing = {

}

function askForInput(){
    readline.question("What is the name?", function(answer) {
      newThing.name = answer;
      readline.question("What is the age?", function(answer) {
        newThing.age = answer;
        readline.question("What is the breed?", function(answer) {
          newThing.breed = answer;
          create(newThing,()=>{
            printMenu();
          });
        });
      });
    });
}

function createThing(){
  askForInput();
}

function findAllThings(){
  findAll((data)=>{
    console.log(data);
    printMenu();
  });
}

function findThingById(){
  readline.question("What is the id?", function(answer) {
    findById(answer,(result)=>{
      console.log(result)
      printMenu();
    });
  });  
}

function findThing(){
  readline.question("What name do you want to find?", function(answer) {
    findBy(answer,(result)=>{
      console.log(result)
      printMenu();
    });
  });  
}