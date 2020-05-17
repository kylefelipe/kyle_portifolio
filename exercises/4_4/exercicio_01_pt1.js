let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "sim",
};

console.log("Bem-vindo(a)!", info.personagem)

for (x in info) {
  console.log(x);
}
for (x in info) {
  console.log(info[x]);
}