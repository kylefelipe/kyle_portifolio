const API_URL = 'https://icanhazdadjoke.com/';
const container = document.getElementById('jokeContainer');

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {container.innerHTML = data.joke});

}

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' },
}

window.onload = () => fetchJoke();
