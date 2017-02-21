var chai = require('chai');
var rooms = require('../assignment/bringItTogether');

describe('promode Testing the Classroom Builder Application', function() {

  describe('the Room constructor function', function() {

    describe('returned object has a property called: capacity', function() {
      it('should have a property capacity', function() {
        var room = new rooms.Room([2, 1, 1, 'red']);
        chai.expect(room).to.have.ownProperty('capacity');
      });

      it('capacity should match the number given in array[0]', function() {
        var room = new rooms.Room([2, 1, 1, 'red']);
        chai.expect(room.capacity).to.be.equal(2);
      });
    });

    describe('returned object has a property called: rollingChairs', function() {
      it('should have a property rollingChairs', function() {
        var room = new rooms.Room([2, 1, 1, 'blue']);
        chai.expect(room).to.have.ownProperty('rollingChairs');
      });

      it('rollingChairs should be an array', function() {
        var room = new rooms.Room([6, 2, 4, 'red']);
        chai.expect(room.rollingChairs).to.be.instanceof(Array);
      });

      it('rollingChairs length should match given array[1]', function() {
        var room = new rooms.Room([6, 2, 4, 'red']);
        chai.expect(room.rollingChairs).to.have.lengthOf(2);
      });

    });

    describe('returned object has a property called: cubes', function() {
      it('should have a property cube', function() {
        var room = new rooms.Room([2, 1, 1, 'blue']);
        chai.expect(room).to.have.ownProperty('cubes');
      });

      it('cubes should be an array', function() {
        var room = new rooms.Room([6, 2, 4, 'red']);
        chai.expect(room.cubes).to.be.instanceof(Array);
      });

      it('cubes length should match given array[2]', function() {
        var room = new rooms.Room([6, 2, 4, 'red']);
        chai.expect(room.cubes).to.have.lengthOf(4);
      });

    });

  }); // end Room constructor tests

  /**
    Set up a function spy using Sinon. This will count how many times the Book constructor is calledThrice
  **/
  // var sinon = require('sinon');
  // var constructorSpy;
  //
  // before('running constructor tests', function() {
  //   constructorSpy = sinon.spy(objects, "Book");
  // });
  //
  // after(function() {
  //   constructorSpy.restore();
  // });
  //
  // describe('the createBooksWithConstructor function', function() {
  //   it('should call the Book constructor 3 times', function() {
  //     var books = objects.createBooksWithConstructor();
  //
  //     // sinon spy counts the number of times the constructor was called
  //     chai.expect(constructorSpy.calledThrice).to.be.true;
  //   });
  //
  //   it('should return 3 objects in an array', function() {
  //     var books = objects.createBooksWithConstructor();
  //     chai.expect(books).to.have.lengthOf(3);
  //   });
  //
  //   it('should return book objects with 4 specific properties', function() {
  //     var books = objects.createBooksWithConstructor();
  //     chai.expect(books[0]).to.have.ownProperty('title');
  //     chai.expect(books[0]).to.have.ownProperty('author');
  //     chai.expect(books[0]).to.have.ownProperty('pageCount');
  //     chai.expect(books[0]).to.have.ownProperty('haveRead');
  //   });
  // });

});
