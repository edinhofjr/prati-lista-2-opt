const A = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

const B = [
  [2, 4, 6, 8, 10],
  [1, 3, 5, 7, 9],
  [0, 2, 4, 6, 8]
];

const P = [];

for (let i = 0; i < 3; i++) {
  P[i] = [];
  for (let j = 0; j < 5; j++) {
    P[i][j] = A[i][j] * B[i][j];
  }
}

for (let i = 0; i < 3; i++) {
  console.log(P[i].join("\t"));
}
