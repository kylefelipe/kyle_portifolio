const habilidades = ['geo', 'Python', 'javaScript']

const replaceX = (str)  => `Tryber ${str} aqui!`;

function temp(str) {
  return `${str}
  
  Minhas cinco principais habilidades são:
  
  *${habilidades.sort()[0]};
  *${habilidades.sort()[1]};
  *${habilidades.sort()[2]};
  `
}
console.log(
  temp(replaceX('Kyle'))
)
