import promptSync from 'prompt-sync';

export default promptSync();

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