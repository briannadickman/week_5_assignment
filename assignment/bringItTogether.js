console.log('File loaded!');


// Call the function defined below to actually do something!
var roomArray = [];
convertRooms();

function convertRooms() {

  // Each array of data is in the order of: [total seats needed, rollingChairs, cubes, color of seats]
  var roomsArray = [[20, 10, 10, 'red'], [24, 10, 14, 'blue'], [23, 8, 11, 'black'], [18, 5, 13, 'blue']];

  console.log(roomsArray);

  // Convert each room array into a Room object
  // Write code here, remember to log the new object you create at the end of
  // each iteration.

  function roomBuilder(totalSeats, rollingChairs, cubes, color) {
        this.seats = totalSeats;
        this.rollingChairs = rollingChairs;
        this.cubes = cubes;
        this.color = color;
      }

  for (var i = 0; i < roomsArray.length; i++){
        this.Room = new roomBuilder(roomsArray[i][0], roomsArray[i][1], roomsArray[i][2], roomsArray[i][3]);
        console.log(this.Room);
        roomArray.push(this.Room);
        }

  console.log("The following is the roomArray: ");
  console.log(roomArray);
  }

/**
 * Represents a classroom at Prime
 * @constructor
 * @param {Array} roomArray - an array of data representing a single room
 *  @property {Number} capacity - number of seats in this room
 *  @property {Array} rollingChairs - an array of rolling chair objects
 *  @property {Array} cubes - an array of cube objects
 *  @property {Array} color - color of rollingChairs
**/

function Room(roomArray) {
  // Write constructor logic here to convert the array into a Room object
  // You will need to also create RollingChair and Cube objects!
  this.capacity = capacity;
  this.rollingChairs = RollingChair();
  this.cubes = Cube();
  this.color = color;
}

Room();

/**
 * Represents a Rolling Chair seat
 * @constructor
 * @param {String} type - type of seat this is
 * @param {String} color - color of the seat fabric
**/
function RollingChair(type, color) {
  // Write constructor logic here to create a single rolling chair object
  this.type = type;
  this.color = color;
}

var rollingChair = new RollingChair("round", "green");
console.log(rollingChair);

/**
 * Represents a Cube seat
 * @constructor
 * @param {String} length - length of each side
 * @property {Function} volume - method that calculates the volume of the cube
**/
function Cube(length) {
  // Write constructor logic here to create a single cube seat object
  this.length = length;
  var volume = Math.pow(this.length, 3);
  this.volume = volume;
  return volume;
}

var cube0 = new Cube(24);
console.log(cube0);

console.log(capacity);
console.log(rollingChair);
console.log(cube);

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  Room: Room,
  convertRooms: convertRooms,
  RollingChair: RollingChair,
  Cube: Cube
};
