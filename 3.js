import prompt from "./prompt.js";

const distance = prompt("Qual a distância em km? ");

console.log(`O preço da passagem é de R$ 
    ${distance <= 200 ? distance * 0.50 : distance * 0.45}`)