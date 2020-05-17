let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dells's Four Collor Commics #178",
  nota: "O último MacPatinhas.",
  recorrente: "sim",
}

for (x in info) {
  if (x !== "recorrente") {
    console.log(info[x], "e", info2[x]);
  } else {
    if (info[x] === "sim" && info2[x] === "sim") {
      console.log("Ambos são recorrentes");
    }
    else {
      console.log("Apenas um é recorrente!")
    }
  }
}