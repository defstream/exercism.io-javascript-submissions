//@info Gigasecond Value (10**9)
var GS = Math.pow(10, 9) * 1000;
//@prototype Gigasecond
var Gigasecond = {
  //@method date returns the Gigasecond of the base.
  date: function() {
    return this.value;
  }
};
//@exports Gigasecond Object Factory
//@method createGigasecond
//@params {Date} The date to base of the Gigasecond to generate.
module.exports = function createGigasecond(date) {
  return Object.create(Gigasecond, {
    value: {
      enumerable: true,
      value: new Date(new Date(date).valueOf() + GS)
    }
  });
};
