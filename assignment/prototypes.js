function Animal(first, last, type) {
    this.firstName = first;
    this.lastName = last;
    this.type = type;
}

// here's an example Animal:
var giantCactus = new Animal( "Giant", "Cactus", "Dog" );

// PART 1
// create a new animal named "somethingFun" with a first name of "Something" a last name of "Fun" and a type of "Cat"

// PART 2
// console log out somethingFun's first and last name

// PART 3 (Hard Mode)
// add a method to somethingFun named "meow()" that console logs "moew" when called. ex: somethingFun.meow()

// PART 4 (Pro Mode)
// add another method to somethingFun named "isHappy" that receives a boolean argument "happy"
// within this method, check if "happy" is true
// if so, console log "purrrrrr"
// if not, console log "crabby face"
