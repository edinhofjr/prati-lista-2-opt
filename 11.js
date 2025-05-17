import prompt from "./prompt.js";

const first = Number(prompt("Digite o primeiro número da PA: "));

const ratio = Number(prompt("Digite a razão da PA: "));

const values = []; 

for (let i = 0; i < 10; i++) {
    values.push(first + (i * ratio));
}
console.log(`Os 10 primeiros termos da PA são: ${values.join(", ")}`);
console.log(`A soma dos 10 primeiros termos da PA é: ${values.reduce((acc, value) => acc + value)}`);