let a = 1;
let b = 1;
let c = 1;

const values = [];
for (let i = 0; i < 10; i++) {
    a = b;
    b = c;
    c = a + b;

    values.push(a);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log("-----");

}
console.log(values);