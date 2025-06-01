import prompt, {read} from './prompt.js';
const vetor = [];

read(vetor, 6, "Insira 6 valores inteiros:");

const options = {
    1: (x) => x.reduce((acc, val) => acc + val, 0),
    2: (x) => x.reduce((acc, val) => acc + val, 0) / x.length,
    3: (x) => Math.max(...x),
    4: (x) => Math.min(...x),
    5: (x) => console.log(x.join(' ')),
}

console.log("Escolha uma opção:");
console.log("1. Soma dos valores");
console.log("2. Média dos valores");
console.log("3. Maior valor");
console.log("4. Menor valor");
console.log("5. Imprimir valores"); 

const choice = prompt("Digite o número da opção escolhida: ");
if (options[choice]) {
    const result = options[choice](vetor);
    if (result !== undefined) {
        console.log(`Resultado: ${result}`);
    }
}