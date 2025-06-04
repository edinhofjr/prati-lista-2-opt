import { gen_random_array, read} from "./prompt.js";

const input = [];

read(input, 5, "Insira 5 valores inteiros para o vetor:");

const apostas = [];

for (let i = 0; i < 50; i++) {
    apostas.push(gen_random_array(5, () => Math.floor(Math.random * 5)))
}

apostas.forEach(aposta => {
    if (verify(input, aposta)) {
        console.log("Aposta vencedora:", aposta);
    }
})

function verify(input, aposta) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== aposta[i]) {
            return false;
        }
    }
    return true;
}