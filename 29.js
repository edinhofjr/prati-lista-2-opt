import { gen_random_matrix } from "./prompt.js";

const arr = gen_random_matrix(4,4);

const sum_line_four = (matrix) => {
  //console.log(matrix[4 - 1]);
  const line_four = matrix[4-1];
  return line_four.reduce((acc,value) => acc += value,0);
}

const sum_column_two = (matrix) => {
  return matrix.reduce((acc, arr) => acc += arr[1], 0);
}

const sum_primary_diagonal = (matrix) => {
  let acc = 0;
  for (let i = 0; i < matrix.length; i++) {
    acc += matrix[i][i];  
  } return acc;
}

const sum_matrix = (matrix) =>
  matrix.flat().reduce((acc, val) => acc + val, 0);


console.log("Soma da linha quatro: " + sum_line_four(arr));
console.log("Soma da coluna dois: " + sum_column_two(arr));
console.log("Soma da diagonal principal: " + sum_primary_diagonal(arr));
console.log("Soma da matrix: " + sum_matrix(arr));
console.log("MATRIX: ");
console.table(arr);
