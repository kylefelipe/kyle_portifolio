let n = 5;

for (i = 1 ; i <= n; i += 1){
  let espacos = "";
  for (j = n-i; j > 0; j -= 1) {
    espacos += " ";
  }
  let linha = '';
  for (k = 0;k < i; k+=1) {
    linha += "*";
    // console.log(linha);
  }
  console.log(espacos+linha);
}
