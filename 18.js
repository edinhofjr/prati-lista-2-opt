import prompt from "./prompt.js";

const funcionario = {
    nome: "",
    cargo: "",
    salario: 0
};

funcionario.nome = prompt("Nome do funcionário: ");
funcionario.cargo = prompt("Cargo do funcionário: ");
funcionario.salario = parseFloat(prompt("Salário do funcionário: "));

console.log("\n--- Dados do Funcionário ---");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
