const stateList = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Distrito Federal', 'DF'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO']
];



const unidadeFederativa = document.getElementById('unidade-federativa');

function adicionaEstados() {
  for (let uf = 0; uf < stateList.length; uf += 1) {
    const estado = document.createElement('option');
    estado.value = stateList[uf][1];
    estado.innerText = stateList[uf][0];
    unidadeFederativa.appendChild(estado);
  }
}
window.onload = function () {
  adicionaEstados();
}

const pattern = /^([0-9]{0,2})\/([0-9]{2})\/([0-9]{4})$/;
const dataInicio = document.getElementById('data-inicio');
dataInicio.addEventListener("change", function(){
  validaData();
});

function validaData(){
  if (dataInicio.value.match(pattern) === null){
    alert("Formato de data não válido! Digite: DD/MM/AAAA");
  }
}
