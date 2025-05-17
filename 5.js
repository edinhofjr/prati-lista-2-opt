import prompt from "./prompt.js";

const player = prompt("Escolha uma opção: \n1 - Pedra \n2 - Papel \n3 - Tesoura");

const computer = Math.floor(Math.random() * 3) + 1;

if (player == computer) {
    console.log("Empate!");
} else if (
    (player == 1 && computer == 3) ||
    (player == 2 && computer == 1) ||
    (player == 3 && computer == 2)
) {
    console.log("Você ganhou!");
} else { 
    console.log("Você perdeu!");
}