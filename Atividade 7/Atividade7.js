function jogar(escolhaUsuario) {

    let r = Math.random();
    let escolhaComputador;

    if (r < 0.33) {
        escolhaComputador = "pedra";
    } else if (r < 0.66) {
        escolhaComputador = "papel";
    } else {
        escolhaComputador = "tesoura";
    }

    let resultado;

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Computador venceu!";
    }

    document.getElementById("resultado").innerText =
        "Você: " + escolhaUsuario +
        "\nComputador: " + escolhaComputador +
        "\nResultado: " + resultado;
}