function calcularMedia() {
    let nome = document.getElementById("nome").value;

    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
    let n4 = parseFloat(document.getElementById("nota4").value);

    let media = (n1 + n2 + n3 + n4) / 4;

    document.getElementById("resultado").innerHTML =
        "Aluno: " + nome + "<br>Média: " + media.toFixed(2);
}