import prompt from "./prompt.js";

const values = []

for (let i = 0; i < 10; i++) {
    values.push(Number(prompt("Digite um número: ")))
}

let even = 0; 
let pos = []; 

for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
        even++;
        pos.push(i);
    }
}

console.log(`A quantidade de números pares é: ${even}`);
console.log(`As posições dos números pares são: ${pos.join(", ")}`);