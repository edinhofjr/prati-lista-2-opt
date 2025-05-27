import { gen_random_matrix, gen_random_int } from "./prompt.js";

const arr = gen_random_matrix(2, 2);

function superior_diagonal_sum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i < j) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function inferior_diagonal_sum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i > j) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}


console.log(arr);
console.log(superior_diagonal_sum(arr));
console.log(inferior_diagonal_sum(arr));