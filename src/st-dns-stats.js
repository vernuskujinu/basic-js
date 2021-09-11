import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats( domains ) {
  const arr = [];
  let maxLevel = 0;
  domains.forEach((el) => {
    const tmp = el.split('.');
    if (tmp.length > maxLevel) maxLevel = tmp.length;
    arr.push(tmp.reverse());
  });
  let level = 1;
  const res = {};
  while (level <= maxLevel) {
    for (let k = 0; k < arr.length; k++) {
      const el = arr[k];
      let domainName = '';
      if (el.length >= level) {
        for (let i = 0; i < level; i++) {
          domainName += `.${el[i]}`;
        }
      }
      if (domainName !== '') {
        if (res[domainName]) {
          res[domainName]++;
        } else {
          res[domainName] = 1;
        }
      }
    }
    level++;
  }
  return res;
}
