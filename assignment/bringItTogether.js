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

var capacity = roomArray[0].seats + roomArray[1].seats + roomArray[2].seats + roomArray[3].seats;
var rollingChair = [];
var cube = [];
var colors = [];
var room = {
  name: "Empty"
};

// capacity = roomArray[0].seats + roomArray[1].seats + roomArray[2].seats + roomArray[3].seats;
// console.log("Capacity is at: " + capacity);
// console.log(roomArray[0]);

function room() {
  for (var i = 0; i < roomArray.length; i++) {
    console.log("Hello from the thousandth loop");
      // if(i === roomArray[i].seats){
      //     capacity += roomArray[i].seats;
      //     //console.log("from the loop:" + capacity);
      //     return capacity;
      // }
      // room.push(this.capacity);
  //    else if(i ===)
    }

  }

  console.log("This room contains: " + room);

  // Write constructor logic here to convert the array into a Room object
  // You will need to also create RollingChair and Cube objects!
  // function roomObject(capacity, rollingChairs, cubes, color) {
  //   this.capacity = capacity;
  //   this.rollingChairs = function() {
  //       this.rollingChair = new RollingChair('square', 'green');};
  //   this.cubes = function() {
  //       this.cube = new Cube(24);};
  //   this.color = color;
  // }

// add capacity together for total capacity of Room
// array of colors?
// array of objects for rollingChair and Cube

      // switch (combine) {
      //   case roomArray[i].seats:
      //     console.log('I need ' + roomArray[i].seats + " seats!");
      //     break;
      //   case 'rollingChairs':
      //     console.log('I need ' + roomArray[i].rollingChairs + " rolling chairs!");
      //     break;
      //   case 'cubes':
      //     console.log('I need ' + roomArray[i].cubes + " cubes!");
      //     break;
      //   case 'color':
      //     console.log('I need this color: ' + roomArray[i].color);
      //     break;

  //      if(roomArray[i].seats){
  //        capacity += roomArray[i].seats;
  //        console.log(capacity);
  //        return capacity;
  //      }
  //      else if(roomArray[i].rollingChairs){
//
  //          rollingChairs.push(this.rollingChair);
  //        }
  //      }
  //      else if(roomArray[i].cubes){
  //          cubes.push(this.cube);
  //    }
  //      else if(roomArray[i].color){
  //        colors.push(roomArray[i][3]);
  //      }
  //  }
  //  console.log(i);
  //}

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
