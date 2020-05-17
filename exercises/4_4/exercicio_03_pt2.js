//  Exercicio 03
// retornar o indice do menor valor

function retornaIndiceMenorValor(vetor) {
  let menor = 0;
  for (let indice = 0; indice < vetor.length; indice += 1) {
    if (vetor[menor] > vetor[indice]) {
      menor = indice;
    }
  }
  return menor;
}

console.log(retornaIndiceMenorValor([2, 4, 6, 7, 10, 0, -3]))
