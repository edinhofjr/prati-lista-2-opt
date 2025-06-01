import prompt, { gen_random_int } from "./prompt.js";

const apostadores = [];

const mock_apostador = () => {
    const aposta = [];

    for (let i = 0; i < 13; i++) {
        aposta.push(gen_random_int(10));
    }

    return aposta;
}

for (let i = 0; i < 100; i++) {
    apostadores.push(mock_apostador());
}

const sorteio = [];

for (let i = 0; i < 13; i++) {  
    sorteio.push(Number(prompt("Digite o número do sorteio: ")));
}

for (let i = 0; i < apostadores.length; i++) {
    const apostador = apostadores[i];
    let acertos = 0;

    for (let j = 0; j < apostador.length; j++) {
        if (apostador[j] === sorteio[j]) {
            acertos++;
        }
    }

    if (acertos >2) {
        console.log(`Apostador ${i + 1} acertou ${acertos} números:`, apostador);
    }

    if (acertos === 13) {
        console.log(`Apostador ${i + 1} ganhou o prêmio!`);
    }
}