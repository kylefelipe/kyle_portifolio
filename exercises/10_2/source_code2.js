const highBox = string => string.toUpperCase();
const firstCharacter = string => string[0];
function concatStr(...params) {
  return concat = params.reduce((acc, string) => acc + string)
};

module.exports = {
  highBox,
  firstCharacter,
  concatStr,
}
