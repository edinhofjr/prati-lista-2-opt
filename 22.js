import prompt from "./prompt.js"
//teste

/*
teste
*/

const read = () => {
  const pessoa = {
    filhos: 0, 
    salario: 0,
  }

  pessoa.filhos = Number(prompt("Quantidade de filhos: "));
  pessoa.salario = Number(prompt("Salário: "));
  
  return pessoa;
}

const main = () => {
  const population = [];

  while (true) {
    population.push(read());
    
    if (prompt("Continuar? (S/N): ") == "N") break
  }
  
  calculate(population);
}

const calculate = (population) => {
    const filhos_media = (population.reduce((acc, value) => acc += value.filhos, 0)) / population.length;
    
    const maior_salario = population.reduce((acc, value) => {
      if (value.salario > acc) acc = value.salario;
      return acc;
  }, 0);

    console.log(filhos_media);
    console.log(maior_salario);
}

main();
