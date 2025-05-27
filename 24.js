const M = [
  [1, -2, 3, -4, 5, -6, 7, -8],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [-5, -4, 3, 2, 1, 0, -1, -2],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [-9, 1, -8, 2, -7, 3, -6, 4]
];

const C = [];

for (let i = 0; i < M.length; i++) {
  let count = 0;
  for (let j = 0; j < M[i].length; j++) {
    if (M[i][j] < 0) {
      count++;
    }
  }
  C.push(count);
}

C.forEach((valor, index) => {
  console.log(`Linha ${index + 1}: ${valor} negativos`);
});
