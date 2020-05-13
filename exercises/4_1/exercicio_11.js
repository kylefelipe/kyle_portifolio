let salarioBruto;
let inss;
let impostoRenda;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
} else {
    inss = 570.88
}
