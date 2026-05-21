function validar() {

    let nome = document.getElementById("nome").value;

    let comentario = document.getElementById("comentario").value;

    // Validar nome
    if (nome.length < 10) {

        alert("O nome deve ter no mínimo 10 caracteres!");

        return false;
    }

    // Validar comentário
    if (comentario.length < 20) {

        alert("O comentário deve ter no mínimo 20 caracteres!");

        return false;
    }

    // Utilizando document.nomeform.elements[]
    let radios = document.nomeform.elements["pesquisa"];

    let resposta = "";

    for (let i = 0; i < radios.length; i++) {

        if (radios[i].checked) {

            resposta = radios[i].value;
        }
    }

    // Verificar resposta
    if (resposta == "nao") {

        alert("Que bom que você voltou a visitar esta página!");

    } else {

        alert("Volte sempre a esta página!");
    }

    return true;
}