import { gen_random_matrix } from "./prompt.js";

const mx = gen_random_matrix(3,3);
console.table(mx);

for (let i = 0; i < mx.length; i++) {
    const arr = mx[i];
    const diagonal_value = arr[i];

    for (let j = 0; j < mx.length; j++) {
        arr[j] = arr[j] * diagonal_value;
    }
}

console.table(mx); 