import prompt from "./prompt.js";

const carSpeed = prompt("Insira a velocidade do carro: ");

if (carSpeed > 80) {
    console.log("Voce foi multado!");
    console.log(`Valor da multa: R$ ${(carSpeed - 80) * 5}`);
} else {
    console.log("Você está dentro do limite de velocidade.");
}