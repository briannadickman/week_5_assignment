console.log('File loaded!');

// Call the function defined below to actually do something!
convertRooms();

function convertRooms() {

  // Each array of data is in the order of: [total seats needed, rollingChairs, cubes, color of seats]
  var roomsArray = [[20, 10, 10, 'red'], [24, 10, 14, 'blue'], [23, 8, 11, 'black'], [18, 5, 13, 'blue']];

  console.log(roomsArray);

  // Convert each room array into a Room object
  // Write code here, remember to log the new object you create at the end of
  // each iteration.

  
(seatsNeeded, rollingChairs, cubes, colorOfSeats)
  this.seatsNeeded = seats;
  this.rollingChairs = chairs;
  this.cubes = cubes;
  this.color = color;
  }

// for(var i = 0; i < roomsArray.length; i++) {
  //  convertRooms(i);
  //  console.log(i);
//}

// console.log(newRoom);


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
}

/**
 * Represents a Rolling Chair seat
 * @constructor
 * @param {String} type - type of seat this is
 * @param {String} color - color of the seat fabric
**/
function RollingChair(type, color) {
  // Write constructor logic here to create a single rolling chair object
}

/**
 * Represents a Cube seat
 * @constructor
 * @param {String} length - length of each side
 * @property {Function} volume - method that calculates the volume of the cube
**/
function Cube(length) {
  // Write constructor logic here to create a single cube seat object
}

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  Room: Room,
  convertRooms: convertRooms,
  RollingChair: RollingChair,
  Cube: Cube
};
