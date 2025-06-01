import prompt from "./prompt.js";

const A = [];
const B = [];

read(A, 10, "Insira 10 valores inteiros para o vetor A:");

console.log(A);

for (let i = 0; i < A.length; i++) {
    if (A[i] <= 0 || isNaN(A[i])) {
        B.push(0);
    }
}

console.log("Vetor B:");
console.log(B);