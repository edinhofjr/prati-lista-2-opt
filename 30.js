import {gen_random_matrix} from "./prompt.js";

const mx = gen_random_matrix(5,5);

const mx_line_sum = (matrix, line) => {
    return matrix[line - 1].reduce((acc, value) => acc += value, 0);
}

const mx_column_sum = (matrix, column) => {
    let acc = 0; 
    for (let i = 0; i < matrix.length; i++) {
        acc += matrix[i][column - 1];
    }
    return acc;
}

const sl = [];

for (let i = 0; i < mx.length; i++) {
    sl.push(mx_line_sum(mx, i + 1));
}

const sc = [];

for (let i = 0; i < mx.length; i++) {
    sc.push(mx_column_sum(mx, i + 1));
}

console.log(mx);
console.log(sl);
console.log(sc);