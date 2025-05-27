import prompt from "./prompt.js"

const alt = prompt("Insira sua altura (m): ");
const sexo = prompt("Insira seu sexo (F/M): ");

const valid = ["M","F"]

if (!valid.includes(sexo)) {
  throw new Error("Opção invalida")
}
console.log(`O seu peso ideal é: ${(sexo.toUpperCase() === "M" ? 72.7 * alt - 58 : 62.1 * alt - 44.7).toFixed(2) }`) 
