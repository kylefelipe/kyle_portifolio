// Exercicio 05
// Inteiro que mais se repete

function inteiroMaisRepetido(vetor) {
  let contador = {};
  for (let num in vetor) {
    if (vetor[num] in contador) {
      contador[vetor[num]] += 1;
    } else {
      contador[vetor[num]] = 1;
    }
  }
  let maior = vetor[0];
  for (let indice in contador) {
    // console.log(indice);
    if (contador[maior] < contador[indice]) {
      maior = indice;
    }
  }
  console.log(contador)
  return vetor[maior];
}

let teste = [2, 3, 2, 5, 8, 2, 3];
console.log(inteiroMaisRepetido(teste));
