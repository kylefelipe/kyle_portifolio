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
