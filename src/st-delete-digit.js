  
import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = String(n).split("").map(Number);
  let minIndex = arr.indexOf(Math.min(...arr));
  delete arr[minIndex];
  return Number(arr.join(''));
}
