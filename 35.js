import prompt from "./prompt.js";

const par = [];
const impar = [];

for (let i = 0; i < 30; i++) {
    const num = Number(prompt("Digite um número: "));

    if (num % 2 === 0) {
        if (par.length === 5) {
            console.log("Par: ", par);
            par.length = 0;
        }
        par.push(num);
    } else {
        if (impar.length === 5) {
            console.log("Impar: ", impar);
            impar.length = 0;
        }
        impar.push(num);
    }
}

console.log("Par: ", par);
console.log("Impar: ", impar);
