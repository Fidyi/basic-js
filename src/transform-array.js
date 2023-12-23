const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr) || Object.prototype.toString.call(arr) !== "[object Array]") {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const transArray = new Array(...arr);

  for (let i = 0; i < transArray.length; i++) {
    switch (transArray[i]) {
      case '--discard-next':
        if (i < transArray.length - 1) {
          transArray.splice(i + 1, 1);
        }
        break;
      case '--discard-prev':
        if (i > 0) {
          transArray.splice(i - 1, 1);
          i--;
        }
        break;
      case '--double-next':
        if (i < transArray.length - 1) {
          transArray.splice(i + 1, 0, transArray[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0) {
          transArray.splice(i, 0, transArray[i - 1]);
          i++;
        }
        break;
    }
  }
  return transArray.filter(item => !['--discard-next', '--discard-prev', '--double-next', '--double-prev'].includes(item));
}

module.exports = {
  transform
};
