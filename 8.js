import prompt from "./prompt.js";

const times = Number(prompt("Quantas vezes você praticou um esporte? "));

let acc = 0;

for (let i = 0; i < times; i++) {
    const time = Number(prompt("Quantas horas você praticou? "));

    if (time <= 10) {
        acc += time * 2;
    } else if (time > 10 && time <= 20) {
        acc += time * 5;
    } else if (time > 20) {
        acc += time * 10;
    }
}

console.log(`Você ganhou R$${acc * .05}!`);
