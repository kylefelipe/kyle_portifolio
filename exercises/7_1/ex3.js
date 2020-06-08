const clickCount = n => n + 1;

document.getElementById('clique-me').onclick = () => {
  const atualizar = document.getElementById('atualizar');
  atualizar.innerText = clickCount(parseInt(atualizar.innerText));
}
