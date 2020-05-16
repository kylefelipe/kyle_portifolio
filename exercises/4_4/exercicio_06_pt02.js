// Exercicio 06
// n fatorial

function fatorial(numero) {
  let sum = 0;
  for (let fat = 1; fat <= numero; fat+=1) {
    sum += fat;
  }
  return sum;
}

console.log(fatorial(5))