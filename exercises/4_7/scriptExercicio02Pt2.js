const squareInput = document.getElementById("square-input");
const sqrtButton = document.getElementById("square-button");
const halfInput = document.getElementById("half-input");
const halfButton = document.getElementById("half-button");
const percent1Input = document.getElementById("percent1-input");
const percent2Input = document.getElementById("percent2-input");
const percentButton = document.getElementById("percent-button");
const areaInput = document.getElementById("area-input");
const areaButton = document.getElementById("area-button");
const solution = document.getElementById("solution");

function squareNumber() {
  let calc = Math.sqrt(squareInput.value);
  let result = `Resultado da raiz quadrada de ${squareInput.value}, é, ${calc}!`;
  console.log(result);
  solution.innerText = result;
  return result;
}

function halfNumber() {
  let calc = halfInput.value/2;
  let result = `Metade de ${halfInput.value} é ${calc}!`;
  console.log(result);
  solution.innerText = result;
  return result;
}
function percentOf() {
  let calc = (percent1Input.value/percent2Input.value) * 100;
  let result = `${percent1Input.value} é ${calc} % de ${percent2Input.value}!`;
  console.log(result);
  solution.innerText = result;
  return result;
}
function areaOfCircle() {
  let radius = areaInput.value;
  let calc = Math.PI * (radius * radius);
  let result = `"A área de um circulo de raio ${radius} é ${calc}` ;
  console.log(result);
  solution.innerText = result;
  return result;
}

sqrtButton.addEventListener("click", squareNumber); 
halfButton.addEventListener("click", halfNumber); 
percentButton.addEventListener("click", percentOf); 
areaButton.addEventListener("click", areaOfCircle); 