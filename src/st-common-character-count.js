import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( s1, s2 ) {
  const createMap = (str) => {
    const arr = str.split('');
    const result = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (result.has(arr[i])) {
        const tmp = result.get(arr[i]);
        result.set(arr[i], tmp + 1);
      } else {
        result.set(arr[i], 1);
      }
    }
    return result;
  };

  const m1 = createMap(s1);
  const m2 = createMap(s2);
  let result = 0;

  const arr = Array.from(m1);
  for (let i = 0; i < arr.length; i++) {
    const entry = arr[i];
    if (m2.has(entry[0])) {
      result += Math.min(m1.get(entry[0]), m2.get(entry[0]));
    }
  }
  return result;
}
