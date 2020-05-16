// Exercicio 04
let arrayTeste = ['José', 'Ana Marina', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(vetor) {
    let maior = 0;
    for (let indice in vetor) {
        if (vetor[indice].length > vetor[maior].length) {
            maior = indice;
        }
    }
    return vetor[maior];
}

console.log(maiorNome(arrayTeste));

