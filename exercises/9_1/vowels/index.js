// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const countVowel = (word, vowel) => 
    word.toLowerCase().split('').filter(vow => 
      vow == vowel).length;
  return vowels.reduce((acc, vowel) => acc + countVowel(str, vowel), 0);
}
module.exports = vowels;
