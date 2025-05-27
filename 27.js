const M = [];
const V = [];
const A = 3;

for (let i = 0; i < 6; i++) {
  M[i] = [];
  for (let j = 0; j < 6; j++) {
    M[i][j] = i * 6 + j + 1;
  }
}

let k = 0;
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    V[k] = M[i][j] * A;
    k++;
  }
}

console.log(V);
