const values = [];

for (let i = 0; i < 20; i++) {
    values.push(Math.floor(Math.random() * 100));
}

function bubble_sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubble_sort(values));