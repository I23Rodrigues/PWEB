function calcular() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    let resultado =
        "Soma: " + (n1 + n2) + "<br>" +
        "Subtração: " + (n1 - n2) + "<br>" +
        "Produto: " + (n1 * n2) + "<br>" +
        "Divisão: " + (n1 / n2) + "<br>" +
        "Resto: " + (n1 % n2);

    document.getElementById("resultado").innerHTML = resultado;
}