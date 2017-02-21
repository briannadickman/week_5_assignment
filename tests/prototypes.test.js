var expect = require('chai').expect;
var sinon = require('sinon');
var somethingFun = require('../assignment/prototypes').somethingFun;
var logSpy;

beforeEach(function() {
  logSpy = sinon.spy(console, "log");
});

afterEach(function() {
  logSpy.restore();
});

describe('basemode prototype answers', function() {
  // somethingFun exists, name somthing and fun w/type Cat
  it('animal somethingFun exists', function() {
    expect(somethingFun).to.exist;
    expect(somethingFun.firstName).to.equal('Somthing');
    expect(somethingFun.lastName).to.equal('Fun');
    expect(somethingFun.type).to.equal('Cat');
  });

  // log something's first and last name
  // it('should log somethingFun\'s first and last name', function() {
  // TODO: cant currently do because these logs are not wrapped in function
  // });

    // call meow functtion
    it('somethingFun should have a meow function that logs meow', function() {
        somethingFun.meow(); // doesn't return, but logs
        expect(logSpy).to.be.called;
        expect(logSpy.callCount).to.equal(1);
        expect(logSpy.args[0][0]).to.equal('meow');
    });
  });

  describe('hardmode prototype answers', function() {

    // call isHappy true
    it('should have an isHappy function that logs purrrrrr when given true', function() {
      somethingFun.isHappy(true); // call function with true
      expect(logSpy).to.be.called;
      expect(logSpy.callCount).to.equal(1);
      expect(logSpy.args[0][0]).to.equal('purrrrrr');
    });

    // call isHappy false
    it('should have an isHappy function that logs crabby face when given true', function() {
      somethingFun.isHappy(false); // call function with false
      expect(logSpy).to.be.called;
      expect(logSpy.callCount).to.equal(1);
      expect(logSpy.args[0][0]).to.equal('crabby face');
    });
  });
