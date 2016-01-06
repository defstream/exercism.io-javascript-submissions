//@info The Hamming object prototype
var Hamming = {
  compute: function(a,b) {
//@info validates that a,b are within equal length
    if(a.length !== b.length) {
      throw new Error('DNA strands must be of equal length.');
    }
//@info the hamming distance we will return
    var distance = 0;
//@info iterate through each character in a & b
    for(var i = 0; i < a.length; i++) {
//@info if there is a mismatch then increase the distance by one
      if(a[i]!==b[i]) {
        distance++;
      }
    }
//@info return the distance that we have computed
    return distance;
  }
};
//@exports Creates a New Hamming Object
module.exports = function() {
//@info return a new Hamming object instance
  return Object.create(Hamming);
};