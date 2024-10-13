let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;
function comprar() {
    let acento = document.getElementById("tipo-ingresso");
    let qtdCompra = parseInt(document.getElementById("qtd").value);
    if (qtdCompra <= 0) {
        alert("Insira um valor valido!")
    }
    else {
        if (acento.value == "inferior") {
            qtdInferior -= qtdCompra
        } else {
            if (acento.value == "superior") {
                qtdSuperior -= qtdCompra
            } else {
                qtdPista -= qtdCompra
            }
        }

        document.getElementById("qtd-pista").innerHTML = qtdPista;
        document.getElementById("qtd-superior").innerHTML = qtdSuperior;
        document.getElementById("qtd-inferior").innerHTML = qtdInferior;
    }


}
