let n = 3;

// Imprimindo as linhas
for (numLin = 0; numLin < n; numLin += 1) {
  let linha = "";
  // Adicionando os espaços
  let qtEsp = Math.floor(n/2);
  for (let addEsp = qtEsp - numLin; addEsp > 0; addEsp -=1) {
    linha += "+";
  }
  for (let qtAst = ((2 * qtEsp) - numLin) ; qtAst < n ; qtAst += 1 ) {
    // console.log(qtAst);
    linha += "*";
// console.log(linha)
  }
  // if (numLin === (n - 1) && (n % 2 !== 0)) {
  //   linha = "";
  // }
  console.log(linha);
}