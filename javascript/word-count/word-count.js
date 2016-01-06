//@prototype Words
var Words = {
//@method count returns the count of words in the sentence passed in.
//@params {String} A string containing words to count
  count: function(word) {
//@info normalize the characters we should ignore
    word = word.toString().trim();
    word = word.replace(/\n/g, ' ');
    word = word.replace(/\t/g, ' ');
    word = word.replace(/,/g, ' ');
//@info reduce this array to an object containing the word counts.
    return word.toString().trim().split(' ').reduce(function(result, item) {
//@info if no content continue
      if(!item)
        return result;
//@info: either increment or set the initial value of the word to 1;
      if(result[item]) {
//@info if the property exists but it is not a number, then set it to 0
        result[item] = ( isNaN(result[item]) ? 0 : result[item]) + 1;
      } else {
        result[item] = 1;
      }
//@info return the result
      return result;
    }, {});
  }
};
//@export The Word Object Factory
module.exports = function WordFactory() {
  return Object.create(Words);
};