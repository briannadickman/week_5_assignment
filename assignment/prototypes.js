function Animal(first, last, type) {
    this.firstName = first;
    this.lastName = last;
    this.type = type;
}

// here's an example Animal:
var giantCactus = new Animal( "Giant", "Cactus", "Dog" );

// PART 1
// create a new animal named "somethingFun" with a first name of "Something" a last name of "Fun" and a type of "Cat"
var somethingFun = new Animal("Something", "Fun", "Cat");

// PART 2
// console log out somethingFun's first and last name
console.log(somethingFun.firstName, somethingFun.lastName);

// PART 3 (Hard Mode)
// add a method to somethingFun named "meow()" that console logs "moew" when called. ex: somethingFun.meow()
Animal.prototype.meow = function() {
  console.log("moew");
};

// add another method to somethingFun named "isHappy" that receives a boolean argument "happy"
// within this method, check if "happy" is true
// if so, console log "purrrrrr"
// if not, console log "crabby face"

Animal.prototype.isHappy = function(boolean) {
  if(boolean === true) {
    console.log("purrrrrr");
  }
  else {
    console.log("crabby face");
  }
};

//calling functions and logging answers

console.log(somethingFun.firstName + " " + somethingFun.lastName + " says...");
somethingFun.isHappy(true);
console.log(giantCactus.firstName + " " + giantCactus.lastName + " says...");
giantCactus.meow();

// DO NOT TOUCH CODE BELOW
// for purpose of the test files only
module.exports = {
  somethingFun: somethingFun
};
