var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var Pangram = {
  text: null,
  isPangram: function() {
    return this.text.split('').reduce(function(result, letter) {
      letter = letter.toLowerCase();
      if (alphabet.indexOf(letter) > -1) {
        if (!result.alphabet[letter]) {
          result.alphabet[letter] = true;
          result.count = result.count + 1;
        }
      }
      return result;

    }, {
      count: 0,
      alphabet: {}
    }).count == alphabet.length;
  }
};

module.exports = function(text) {
  return Object.create(Pangram, {
    text: {
      enumerable: true,
      value: text,
    }
  });
};
