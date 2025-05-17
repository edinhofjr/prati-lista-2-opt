import prompt from "./prompt.js";

const input = prompt("Insira um número entre 1 e 5: ");

const random = Math.floor(Math.random() * 5) + 1;

if (input == random) {
    console.log("Você acertou!");
} else {
    console.log("Você errou!");
}
