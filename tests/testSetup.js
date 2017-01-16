var logSpy;
var alertSpy;
var _____ = "wrong answer";

beforeEach(function() {
  logSpy = sinon.spy(window.console, "log");
  alertSpy = sinon.spy(window, "alert");
});

afterEach(function() {
  logSpy.restore();
  alertSpy.restore();
});