const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Execício 1, função que adicione novas entradas em um objeto.
function insertObject(objTarget, keyInsert, valueInsert) {
  objTarget[keyInsert] = valueInsert;
}

insertObject(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Exercício 2, função para listar chaves de um objeto.

const listarKeys = objToList => Object.keys(objToList);

console.log(listarKeys(lesson1));

// Exercício 3, mostrar o tamanho de um objeto.

const objLength = obj => listarKeys(obj).length;
console.log(objLength(lesson3));

// Exercício 4, Listar valores de um objeto.

const listarValues = objToList => Object.values(objToList);
console.log(listarValues(lesson1));

