const object = {
    arr: [],
    int: 0, 
    str: "String"
}

const only_arr = (input) => {
    const newObj = {};

    for (const key in input) {
        if (Array.isArray(input[key])) {
            newObj[key] = input[key];
        }
    }
    return newObj;
}

console.log(only_arr(object));

