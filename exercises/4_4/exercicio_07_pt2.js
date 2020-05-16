// Exercicio 07
// Verifica final da palavra

function verificaFinal(palavra, final) {
  let fimPalavra = palavra.slice(palavra.length - final.length);
  if (fimPalavra === final) {
    return true
  } else {return false;}
}

console.log(verificaFinal('arvore', 'pre'));