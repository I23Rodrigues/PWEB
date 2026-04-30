function calcularIMC() {
    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);

    if (altura <= 0 || peso <= 0) {
        mostrar("Informe valores válidos!");
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = classificarIMC(imc);

    mostrar("IMC: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Magreza";
    } else if (imc < 25) {
        return "Normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 40) {
        return "Obesidade";
    } else {
        return "Obesidade Grave";
    }
}

function mostrar(msg) {
    alert(msg);
}