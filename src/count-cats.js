const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let b =[];

  let c = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      b.push(matrix[i][k]);
    }
  } 

  let e = b.filter((item) => item === '^^');
  
  if(e) {
    return e.length;
  } else {
    return 0;
  }

};

