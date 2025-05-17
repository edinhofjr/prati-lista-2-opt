import prompt from "./prompt.js";
const names = [];
const ages = [];

for (let i = 0; i < 9; i++) {
    names.push(prompt("Digite um nome: "));
    ages.push(parseInt(prompt("Digite a idade: ")));
}

for (let i = 0; i < names.length; i++) {
    if (ages[i] < 18) {
        console.log(`O nome ${names[i]} tem ${ages[i]} anos e é menor de idade.`);
    }
}