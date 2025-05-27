import prompt, { gen_random_matrix } from "./prompt.js";

const A = prompt("Digite o valor alvo: "); 
const X = [];

const mx = gen_random_matrix(3,3, () => Math.floor(Math.random() * 10)); 

for (let i = 0; i < mx.length; i++) {
    let ln = [];
    for (let j = 0; j < mx[i].length; j++) {
        if (mx[i][j] != A) {
            ln.push(mx[i][j]);
        } else {
            ln.push("A");
        }
    }
    X.push(ln);
}

console.log(mx);
console.log("Valores diferentes de A: " + A + " em MX.")
console.log(X);
