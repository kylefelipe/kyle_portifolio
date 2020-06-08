// contar palavras

const longestWord = (str) => {
  str = str.split(' ');
  let bigWordId = 0;
  for (let wordId = bigWordId; wordId < str.length; wordId += 1) {
    if (str[wordId].length > str[bigWordId].length) bigWordId = wordId;
  }
  return str[bigWordId];
}


const phrase = 'me subi no onibus em marrocos'
console.log(longestWord(phrase))
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

