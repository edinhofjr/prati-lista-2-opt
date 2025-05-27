import prompt, {gen_random_matrix} from "./prompt.js";

const mx = gen_random_matrix(12,13);

const highest_module = (arr) => {
    return Math.max(...arr);
}

const main = () => {

    console.log("Original Matrix:");
    console.log(mx);


    for (let i = 0; i < mx.length; i++) {
        const module = highest_module(mx[i]);
        for (let j = 0; j < mx[i].length; j++) {
            mx[i][j] = mx[i][j] / module;
        }
    }

    console.log("Modified Matrix:");
    console.log(mx);
}

main(); 