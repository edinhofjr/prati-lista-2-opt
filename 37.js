import { gen_random_int } from "./prompt.js";

const NUMERO_ALUNOS = 50;
const NUMERO_QUESTOES = 20;
const NOTA_MINIMA = 12;

const gabarito = [];
const notas = [];

for (let i = 0; i < NUMERO_QUESTOES; i++) {
    gabarito.push(gen_random_int(5));
}

for (let i = 0; i < NUMERO_ALUNOS; i++) {
    const nota = [];
    for (let j = 0; j < NUMERO_QUESTOES; j++) {
        nota.push(gen_random_int(5));
    }
    notas.push(nota);
}

function contarAcertos(respostasAluno, gabarito) {
    let acertos = 0;
    for (let i = 0; i < NUMERO_QUESTOES; i++) {
        if (respostasAluno[i] === gabarito[i]) {
            acertos++;
        }
    }
    return acertos;
}

for (let i = 0; i < NUMERO_ALUNOS; i++) {
    const acertos = contarAcertos(notas[i], gabarito);
    if (acertos >= NOTA_MINIMA) {
        console.log(`Aluno ${i + 1} - Acertos: ${acertos} - APROVADO`);
    } else {
        console.log(`Aluno ${i + 1} - Acertos: ${acertos} - REPROVADO`);
    }
    console.log(`Gabarito: ${gabarito.join(", ")}`);
    console.log(`Respostas do Aluno ${i + 1}: ${notas[i].join(", ")}`);
}
