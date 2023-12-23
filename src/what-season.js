const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const realDate = new Date();
  if (!date) {
    throw new Error('Unable to determine the time of year!');
  }
  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }
  

  const month = date.getMonth();
  if (month === 11 || month <= 1) {
    return 'winter';
  }
  if (month <= 4) {
    return 'spring';
  }
  if (month <= 7) {
    return 'summer';
  }
  if (month <= 10) {
    return 'autumn';
  }
  if (Date !== date) {
    throw new Error('Invalid date!');
  }
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
