let info = {
  personagem: ["Margarida","Tio Patinhas"],
  origem: ["Pato Donald", "Christmas on Bear Mountain, Dells's Four Collor Commics #178"],
  nota: ["Namorada do personagem principal nos quadrinhos do Pato Donald","O último MacPatinhas."],
  recorrente: ["sim", "sim"],
};

console.log("Bem-vindo(a)!", info.personagem)

for (x in info) {
  console.log(x);
}
for (x in info) {
  console.log(info[x]);
}

for (x in info) {
  if (x !== "recorrente") {
    console.log(info[x][0], "e", info[x][1]);
  } else {
    if (info[x][0] === "sim" && info[x][1] === "sim") {
     console.log("Ambos são recorrentes");
   }
   else {
      console.log("Apenas um é recorrente!")
    }
  } 
}