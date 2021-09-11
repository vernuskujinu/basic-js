  
import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const result = [];
  const n = matrix.length;
  const m = matrix[0].length;

  const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === true) {
        result[i].push(1); // means that there is the bomb
      } else {
        result[i].push(0); // means that is empty field
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!matrix[i][j]) {
        // count
        let numberOfBombs = 0;
        for (let k = 0; k < dx.length; k++) {
          const idxI = i + dy[k];
          const idxJ = j + dx[k];
          if (idxI >= 0 && idxI < n && idxJ >= 0 && idxJ < m) {
            if (matrix[idxI][idxJ]) numberOfBombs++;
          }
        }
        result[i][j] = numberOfBombs;
      }
    }
  }

  return result;
}
