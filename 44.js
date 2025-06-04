function count_string_properties(obj) {
    let count = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            count++;
        }
    }
    return count;
}


const object = {
    arr: [],
    int: 0, 
    str: "String",
    anotherStr: "Another String"
};

console.log(count_string_properties(object)); // Output: 2