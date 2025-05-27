import prompt, { gen_random_matrix } from "./prompt.js";

const mx = gen_random_matrix(3,3);

console.log(mx);

let j = 0;
let acc = 0;
for (let i = mx.length - 1; i >= 0; i--) {
    acc += mx[j++][i];
}

const mean = acc / 3;

for (let i = 0; i < mx.length; i++) {
    mx[i][i] = mx[i][i] * mean;
}

console.log(mx); 