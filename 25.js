const LINHAS = 15;
const COLUNAS = 20;

const matriz = [];

let acc = 1;
for (let i = 0; i < LINHAS; i++) {
    matriz[i] = [];
    for (let j = 0; j < COLUNAS; j++) {
        matriz[i][j] = acc++;
    }
}

for (let i = 0; i < COLUNAS; i++) {
    let column_sum = 0;
    for (let j = 0; j < LINHAS; j++) {
        column_sum += matriz[j][i];
    }
    console.log(`Soma da coluna ${i + 1}: ${column_sum}`);
}

