import prompt from "./prompt.js";

const values = [];

while (true) {
    values.push(Number(prompt("Digite um número: ")));

    const cont = prompt("Deseja continuar? (S/N) ").toUpperCase();
    if (cont === "N") {
        break;
    }
}

let sum = 0;
let min = 0;
let even = 0;

values.forEach((value, index) => {
    sum += value;

    if (value < min || index === 0) {
        min = value;
    }
    if (value % 2 === 0) {
        even++;
    }
})

console.log(`Soma: ${sum}`);
console.log(`Mínimo: ${min}`);
console.log(`Média: ${sum / values.length}`);
console.log(`Números pares: ${even}`);