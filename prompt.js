import promptSync from 'prompt-sync';

const prompt = promptSync();

export default prompt;

export function gen_random_int(ceil) {
    return Math.floor(Math.random() * ceil);
}
export function gen_random_matrix(row, col, randomizer) {
    if (randomizer === undefined) {
        randomizer = () => gen_random_int(100);
    }

    const matrix = [];
    for (let i = 0; i < row; i++) {
        const newRow = [];
        for (let j = 0; j < col; j++) {
            newRow.push(randomizer());
        }
        matrix.push(newRow);
    }
    return matrix;
}

export function read(arr, size, message, string_or_number = Number) {
    for (let i = 0; i < size; i++) {
        let value = string_or_number(prompt(`${message} (${i + 1}/${size}):`));
        arr.push(value);
    }
}