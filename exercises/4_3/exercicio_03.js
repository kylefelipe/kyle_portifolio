let n = 5;

for (let numLinha = 1 ; numLinha < n; numLinha += 1){ //quantidade de linhas
  let linha = "";
  for (let qtEspacos = n-numLinha; qtEspacos > 0; qtEspacos -= 1) { // gera os espaços
    linha += " ";
  }
  for (let qtAsterisco = 0;qtAsterisco < numLinha; qtAsterisco+=1) { 
    linha += "*";
  }
  console.log(linha);
}
