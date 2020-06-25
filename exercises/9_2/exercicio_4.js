const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (onSucces, onError) => {
  let marsTemperature;
  const messageBemSucedida = Math.random() <= 0.6;
  setTimeout(() => {
    marsTemperature = getMarsTemperature();
    if (messageBemSucedida) {
      console.log(`Mars temperature is ${marsTemperature} degrees.`);
      onSucces(marsTemperature);
    } else {
      onError();
    }
  }, messageDelay());
}

const handlerError = (errorReason) => console.log(`Error getting temperature: ${errorReason}!`);
const erro = () => {
  console.log('Não foi possível pegar a temperatura de marte!')
}

// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
sendMarsTemperature(temperatureInFahrenheit, erro); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, erro); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
