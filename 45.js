const str_array = [
    "Hello",
    "World",
    "JavaScript",
    "is",
    "awesome",
    "Hello",
];

const counter = {};

function count_string(arr) {
    for (const str of arr) {
        if (counter[str] === undefined) {
            counter[str] = 1;
        } else {
            counter[str]++;
        }
    }
}

count_string(str_array);
console.log(counter);