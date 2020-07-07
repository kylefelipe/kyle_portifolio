function carrocinha() {
  return fetch('https://doc.ceo/api/breeds/image/random')
    .then(respone => 
      response
        .json()
        .then(json => 
          respone.ok ? Promisse.resolve(json) : Promisse.reject(json)
          )
    );
}

module.exports = { carrocinha };
