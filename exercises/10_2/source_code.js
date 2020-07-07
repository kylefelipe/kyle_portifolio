const randomNumber = () => {
  const randNumer = Math.random() * 100;
  return Math.round(randNumer);
};

const highBox = (string) => string.toUpperCase();

module.exports = {
  randomNumber,
  highBox,
}