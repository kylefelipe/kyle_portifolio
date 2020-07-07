const randomNumber = () => {
  const randNumer = Math.random() * 100;
  return Math.round(randNumer);
};

module.exports = {
  randomNumber,
}