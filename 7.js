import prompt from "./prompt.js";

const cars = [
    { 
        model: 'Popular',
        price: km => 90 + ((km <= 100 ? 0.2 : 0.1) * km) 
    },
    {
        model: 'Luxo',
        price: km => 150 + ((km <= 200 ? 0.3 : 0.25) * km)
    }
]

console.log("Escolha um carro: ");
cars.forEach((car, index) => {
    console.log(`${index + 1} - ${car.model}`);
});

const choice = cars[parseInt(prompt("Escolha um carro: ")) - 1];

const km = parseInt(prompt("Quantos km você rodou? "));

console.log(`O preço a pagar é: R$ ${choice.price(km).toFixed(2)}`);