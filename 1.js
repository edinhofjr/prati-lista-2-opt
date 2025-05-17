import prompt from "./prompt.js";

const cigarettesPerDay = prompt("Quantos cigarros você fuma por dia? ");

const yearsSmoking = prompt("Quantos anos você fuma? ");

const daysSmoking = yearsSmoking * 365;

const lifeLost = (cigarettesPerDay * 10) * daysSmoking;

console.log(`Você perdeu ${(lifeLost / 1440).toFixed(2)} dias de vida fumando!`);