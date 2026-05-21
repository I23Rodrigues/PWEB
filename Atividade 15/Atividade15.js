function validar() {

    let nome = document.getElementById("nome").value;

    let comentario = document.getElementById("comentario").value;

    if (nome.length < 10) {

        alert("O nome deve ter no mínimo 10 caracteres!");

        return false;
    }

    if (comentario.length < 20) {

        alert("O comentário deve ter no mínimo 20 caracteres!");

        return false;
    }

    let radios = document.nomeform.elements["pesquisa"];

    let resposta = "";

    for (let i = 0; i < radios.length; i++) {

        if (radios[i].checked) {

            resposta = radios[i].value;
        }
    }

    if (resposta == "nao") {

        alert("Que bom que você voltou a visitar esta página!");

    } else {

        alert("Volte sempre a esta página!");
    }

    return true;
}