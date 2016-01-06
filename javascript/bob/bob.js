//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};
//@info an array of alpha characters in both cases.
var letters = (function(letters) {
  return letters.concat(letters.map(function(l) {
    return l.toUpperCase();
  }));
}(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]));

Bob.prototype.hey = function(input) {
  //@info trim the input string
  input = input.toString().trim();
  //@info if no content, say 'Fine. Be that way!'
  if (!input)
    return 'Fine. Be that way!';
  //@info if it has letters, and they are all capitalized then they are yelling
  if (input.split('').some(function(i) {
      return letters.indexOf(i) > 1;
    }) && input === input.toUpperCase())
    return 'Whoa, chill out!';
  //@info if it is a question, then respond with 'Sure'
  if (input.substring(input.length - 1) === '?')
    return 'Sure.';
  //@info respond with 'Sure.' for everything else.
  return 'Whatever.';
};

module.exports = Bob;
