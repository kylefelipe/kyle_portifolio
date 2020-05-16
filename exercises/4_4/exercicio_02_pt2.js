// exercicio 02
// retornar o maior valor

function retornaIndiceMaiorValor(vetor) {
    let maior = 0;
    for (let indice = 0; indice < vetor.length; indice+=1) {
            if (vetor[maior] < vetor[indice]){
                maior = indice;
            }
        }
    return maior;
}

console.log(retornaIndiceMaiorValor([2, 3, 6, 7, 10, 1]))
