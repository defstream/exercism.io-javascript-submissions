var util = require('util');

var BeerSong = {
  /**
   * returns the verse specified from the Beer Song
   * @param  {Number} verse The verse to return.
   */
  verse: function singVerse(verse) {
    switch (verse) {
      //@info 0 Bottles of beer on the wall
      case 0:
        return (
          'No more bottles of beer on the wall, no more bottles of beer.\n' +
          'Go to the store and buy some more, 99 bottles of beer on the wall.\n'
        );
        //@info 1 Bottle of beer of on the wall
      case 1:
        return ('1 bottle of beer on the wall, 1 bottle of beer.\n' +
          'Take it down and pass it around, no more bottles of beer on the wall.\n'
        );
        //@info 2 Bottles of beer on the wall
      case 2:
        return ('2 bottles of beer on the wall, 2 bottles of beer.\n' +
          'Take one down and pass it around, 1 bottle of beer on the wall.\n'
        );
        //@info 3+ bottles of beer on the wall
      default:
        return util.format(
          '%s bottles of beer on the wall, %s bottles of beer.\nTake one down and pass it around, %s bottles of beer on the wall.\n',
          //@info The first replacement that appears in the phrase, will be replaced with the value of verse.
          verse,
          //@info The second replacement that appears in the phrase, will be replaced with the value of verse.
          verse,
          //@info The third replacement that appears in the phrase, will be replaced with the value of verse minus 1.
          verse - 1);
    }
  },
  /**
   * @name sing
   * @description Sings the beer song, starting with the specified starting verse or 99, and ending at the specified ending verse or 0;
   * @param  {[type]} start [description]
   * @param  {[type]} end   [description]
   * @return {[type]}
   */
  sing: function sing(start, end) {
    //@info this will store the song we will be build
    var song = '';
    //@info set start to the specified value or default to 99;
    var verse = start || 99;
    //@info set end to break the while loop after end ( default to after we have completed 0 bottles of beer. )
    end = (end - 1) || -1;
    //@info starting from the top, let's build the song until we have reached the end.
    while (verse > end) {
      //@info append the current verse to the song and include a new line.
      song += this.verse(verse--) + '\n';
    }
    //@info return our generated beer song.
    return song.trim() + '\n';
  }
};

module.exports = function() {
  return Object.create(BeerSong);
};
