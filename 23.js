const mx = [];

for (let i = 0; i < 7; i++) {
    const t = [];
    for (let j = 0; j < 7; j++) {
        t.push(i == j ? 1 : 0);
    }
    mx.push(t);
}

console.log(mx);