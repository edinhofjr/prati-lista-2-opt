function transform_object(obj, transform_fn) {
    const new_obj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            new_obj[key] = transform_fn(obj[key], key, obj);
        }
    }
    return new_obj;
}

const input = {
    a: 1,
    b: 2,
    c: 3
};

const doubled = transform_object(input, value => value * 2);

console.log(doubled);
