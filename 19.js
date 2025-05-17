import prompt from "./prompt.js"

function lerHorarioValido() {
    while (true) {
        const hora = Number(prompt("Digite a hora (0–23): "));
        const minuto = Number(prompt("Digite os minutos (0–59): "));
        const segundo = Number(prompt("Digite os segundos (0–59): "));

        const valido = hora >= 0 && hora < 24 &&
                       minuto >= 0 && minuto < 60 &&
                       segundo >= 0 && segundo < 60;

        if (valido) {
            return { hora, minuto, segundo };
        } else {
            console.log("Horário inválido. Tente novamente.\n");
        }
    }
}

const horarios = [];

for (let i = 0; i < 5; i++) {
    console.log(`Informe o ${i + 1}º horário:`);
    const horario = lerHorarioValido();
    horarios.push(horario);
}

console.log("\nHorários formatados:");
for (const h of horarios) {
    const formatado = `${String(h.hora).padStart(2, "0")}.${String(h.minuto).padStart(2, "0")}.${String(h.segundo).padStart(2, "0")}`;
    console.log(formatado);
}
