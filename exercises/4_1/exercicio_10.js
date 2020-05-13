let valorProduto, valorVenda;
valorProduto = 100;
valorVenda = 130;
let lucro = (valorVenda - (valorProduto * 1.20));

if (valorVenda < 0 || valorProduto <0) {
    console.log("Um dos valores é negativo!");
} else console.log("Obtivemos um luco de", lucro * 1000);
