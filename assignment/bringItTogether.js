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

var capacity = 0;
var rollingChair = [];
var cube = [];
var colors = [];

// capacity = roomArray[0].seats + roomArray[1].seats + roomArray[2].seats + roomArray[3].seats;
// console.log("Capacity is at: " + capacity);
// console.log(roomArray[0]);

function singleRoom() {
  for (var i = 0; i < roomArray.length; i++) {
    capacity += roomArray[i].seats;
    console.log(capacity);

    colors.push(roomArray[i].color);
    console.log(colors);

  for (var j = 0; j < roomArray[i].rollingChairs; j++) {
    this.rollingChairs = new RollingChair();
    rollingChair.push(this.rollingChairs);
    }
  for (var x = 0; x < roomArray[i].cubes; x++) {
    this.cubes = new Cube();
    cube.push(this.cubes);
      }
  }
  // room = Object.assign(roomArray[0], roomArray[1], roomArray[2], roomArray[3]);
    // for (var i = 0; i < roomArray.length; i++) {
    //     room[roomArray[i].key] = roomArray[i].value;
    // }

}
singleRoom();

var room = {capacity, rollingChair, cube, colors};

console.log("This room needs to contain:");
console.log(room);

  // this.capacity = capacity;
  // this.rollingChairs = rollingChairs;
  // this.cubes = cubes;
  // this.color = color;

//***NOTES TO SELF***

// add capacity together for total capacity of Room
// array of colors?
// array of objects for rollingChair and Cube


/**
 * Represents a Rolling Chair seat
 * @constructor
 * @param {String} type - type of seat this is
 * @param {String} color - color of the seat fabric
**/
function RollingChair(type, color) {
  // Write constructor logic here to create a single rolling chair object
  this.type = "round";
  this.color = "green";
}

// var rollingChair = new RollingChair("round", "green");
// console.log(rollingChair);

/**
 * Represents a Cube seat
 * @constructor
 * @param {String} length - length of each side
 * @property {Function} volume - method that calculates the volume of the cube
**/
function Cube(length) {
  // Write constructor logic here to create a single cube seat object
  this.length = 24;
  var volume = Math.pow(this.length, 3);
  this.volume = volume;
  return volume;
}

// var cube0 = new Cube(24);
// console.log(cube0);

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
