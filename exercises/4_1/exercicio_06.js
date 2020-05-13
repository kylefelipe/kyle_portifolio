let pecaXadrez;

pecaXadrez = "cAVALO";

switch (pecaXadrez.toLowerCase()) {
    case "peão":
        console.log("Anda uma casa para frente.");
        console.log("Captura na diagonal.");
        break;
    case "torre":
        console.log("Anda qualquer quantidade de casas para a direita e para esquerda, ou frente e tráz.");
        console.log("Captura na mesma direção");
        break;
    case "cavalo":
        console.log("Anda em forma de L. sendo 2X1 (duas casa cima, baixo, direita ou esquerda, e 1 pro lado)");
        console.log("Vice versa!, único que pode pular peças");
        console.log("Captura na ponta do L");
        break;
    case "bispo":
        console.log("Anda qualquer quantidade de casa")
        break;
    case "rei":
        console.log("Anda uma casa em qualquer direção!");
        break;
    case "rainha":
        console.log("Anda qualquer quantidade de casas em qualquer direção.");
        break;
    default:console.log("Que peça é essa?!");
}