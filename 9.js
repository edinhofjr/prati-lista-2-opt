import prompt from "./prompt.js";

const record = {
    "M": 0,
    "H": 0
}

while (true) {
    const l = prompt("Funcionário é homem ou mulher? (H/M) ").toUpperCase();

    const s = prompt("Salário do funcionário: ");
    record[l] += Number(s);

    const cont = prompt("Deseja continuar? (S/N) ").toUpperCase();

    if (cont == "N") {
        break;
    }
}

console.log(`SALÁRIOS: \nHomem: ${record["H"]} \nMulher: ${record["M"]}`);