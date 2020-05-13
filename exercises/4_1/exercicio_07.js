let nota;
let conceito;

nota = 100;

if (nota < 0 || nota > 100) {
    conceito = "esquisita!";
} else if (nota < 50) {
    conceito = "F";
} else if (nota < 60) {
    conceito = "E";
} else if (nota < 70) {
    conceito = "D";
} else if (nota < 80) {
    conceito = "c";
} else if (nota < 90) {
    conceito = "B";
} else {
    conceito = "A";
}
console.log("A nota do aluno é", conceito)