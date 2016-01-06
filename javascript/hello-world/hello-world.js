//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

var HelloWorld = function() {};

var DEFAULT_NAME = 'World';

HelloWorld.prototype.hello = function(input) {
  var name;
  if (input && typeof input === 'string') {
    name = input.toString().charAt(0).toUpperCase() + input.substring(1);
  } else {
    name = DEFAULT_NAME;
  }
  return 'Hello, ' + name + '!';
};

module.exports = HelloWorld;
