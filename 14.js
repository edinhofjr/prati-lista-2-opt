import prompt from "./prompt.js";

const names = []; 

for (let i = 0; i < 7; i++) {
    names.push(prompt("Digite um nome: "));
}

console.log('Os nomes digitados na ordem inversa são:');
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}