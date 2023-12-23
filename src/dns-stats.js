const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {}
  for (const dom of domains) {
    const parts = dom.split('.').reverse('');
    let currDom = '';
    for (const part of parts) {
      currDom += `.${part}`;
      if (result[currDom]) {
        result[currDom]++;
      } else {
        result[currDom] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
