// exercício 01
// Verificar se é Palíndromo

function ePalindromo(palavra) {
  let reverse = ""
  for (let letra = palavra.length - 1; letra >= 0; letra -= 1) {
    reverse += palavra[letra];
  }
  if (reverse === palavra) {
    return true;
  } else { return false };
}

console.log(ePalindromo('anp'));