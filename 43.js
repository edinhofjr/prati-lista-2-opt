function merge(obj1, obj2) {
    const merged = {};

    for (const key in obj1) {
        merged[key] = obj1[key];
    }

    for (const key in obj2) {
        merged[key] = obj2[key];
    }
    return merged;
}

const o1 = {
    nome: "João",
    idade: 30
}

const o2 = {
    modelo: "Fusca",
    ano: 1980
}

console.log(merge(o1, o2));