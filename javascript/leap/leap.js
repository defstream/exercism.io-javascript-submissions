//@object Year
var Year = {
  isLeap: function() {
    var year = this.year;
    if( year % 100 !== 0 && year % 4 === 0 || year % 400 === 0){
      return true;
    }
    return false;
  }
};
//@exports YearFactory ( Number)
module.exports = function YearFactory(year) {
//@info return a new instance of a Year object.
  return Object.create( Year, {
    year: {
      enumerable: true,
      value: year
    }
  });
};