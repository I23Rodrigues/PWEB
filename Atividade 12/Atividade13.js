let quebrada = false;

function abrirJanela() {

    if (quebrada == false) {

        document.getElementById("janela").src = "aberta.png";

        document.getElementById("titulo").innerText =
            "Janela Aberta";
    }
}

function fecharJanela() {

    if (quebrada == false) {

        document.getElementById("janela").src = "fechada.png";

        document.getElementById("titulo").innerText =
            "Janela Fechada";
    }
}

function quebrarJanela() {

    document.getElementById("janela").src = "quebrada.png";

    document.getElementById("titulo").innerText =
        "Janela Quebrada";

    quebrada = true;
}