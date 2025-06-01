import { gen_random_int } from "./prompt.js";

const n = [];
for (let i = 0; i < 1000; i++) {
    const randomNumber = gen_random_int(101);
    
    n.push(randomNumber);

    if (randomNumber === 100) console.log("Número 100 encontrado!");
}

n.sort((a, b) => a + b);
console.log("Sorted numbers:", n);