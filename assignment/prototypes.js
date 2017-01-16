function Animal(first, last, birthday) {
    this.firstName = first;
    this.lastName = last;
    this.age = function () {
        // This is a simplified function that only works for certain birthdays
        return Date.now() - birthday.getUTCFullYear();
    }
}

var lilSebastian = new Animal("Little", "Sebastian", new Date(1986, 1));

console.log(lilSebastian.age());

// What is the value of lilSebastian.birthday?
var lilSebastianBirthday = _____;

// What is the value of lilSebastian.age() ?
var lilSebastianAge = _____;
