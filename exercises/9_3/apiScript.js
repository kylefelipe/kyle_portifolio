const API_URL = 'https://icanhazdadjoke.com/';
const container = document.getElementById('jokeContainer');

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' },
}

function myFirstPromisse () {
  return new Promise((resolve, reject) => {
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    numberArray = numberArray.map(number => (number = Math.floor(Math.random() * 50) ** 2));
    const arraySum = numberArray.reduce((acc, number) => acc + number);
    if (arraySum < 8000) {
      resolve({
        success: true,
        arrayReturned: [arraySum / 2, arraySum / 3, arraySum / 10],
      })
    } else {
        reject({
          success: false,
          msg: 'Já posso bater no Goku!'
        })
      }
    }
  )
} 

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => (container.innerHTML = joke));
}

async function somandoAsCoisas() {
  try {
    const tentandoSomar = await myFirstPromisse();
    console.log(`Meu array lindão, somado no assync: ${tentandoSomar
      .arrayReturned.reduce((acc, item) => acc + item)}`)
  } catch (err) {
    console.log(`${err.msg}, está dentro do meu assync await!`);
  }
}

somandoAsCoisas();

// myFirstPromisse.then(message => {
//   const somaTudoDeNovo = message.reduce((acc, item) =>  acc += item )
//   console.log(`Meu array lindão, somando tudo dá: ${somaTudoDeNovo}`)
// } )
//   .catch(err => {
//     console.log(`${err} Aquele inseto insolente!`)
//   }) 

window.onload = () => fetchJoke();
