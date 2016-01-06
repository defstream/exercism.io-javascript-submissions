/**
 * Anagram determines if strings are an anagram to its own value.
 * @type {Object}
 */
var Anagram = {
    match: function(word) {
//@info 1. If this word isn't the same length as our values then it is not an anagram.
      if(word.length === this.originalValue.length) {
        word = word.toString().trim().toLowerCase();
//@info 2. If this word is the exact same as our original value, then it is not an anagram.
        if(word === this.originalValue) {
          return false;
        }
//@info 3. If this array has the same values in the same order as our sorted value then it is not an anagram.
        word = word.split('').sort();
        for(var i = 0; i < word.length; i++) {
          if(word[i]!==this.sortedValue[i]) {
            return false;
          }
        }
//@info 4. If all values are equal then this is an anagram.
        return true;
      }
//@innfo 5. Nopes, we've checked everything that would allow this to be an anagram, it is not.
      return false;
    },
    matches: function() {
//@info 1. Convert the arguments supplied into a single flatten array
      var words = Array.prototype.slice.call(arguments).reduce(function(words, word) {
        return words.concat(word);
      }, []);
//@info 2. Filter out words that do not match.
      return words.filter(this.match.bind(this));
    }
};
//@info Create a new Anagram object
module.exports = function(value) {
  return Object.create(Anagram, {
//@info 1. Store the value of this anagram in it's sorted form.
    sortedValue: {
      value: value.toString().trim().toLowerCase().split('').sort()
    },
//@info 2. Store the value of this anagram in it's original form.
    originalValue: {
      value: value
    }
  });
}