function maiorNumero() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let c = Number(document.getElementById("n3").value);

    let maior = Math.max(a, b, c);

    mostrar("Maior número: " + maior);
}

function ordemCrescente() {
    let a = Number(document.getElementById("c1").value);
    let b = Number(document.getElementById("c2").value);
    let c = Number(document.getElementById("c3").value);

    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);

    mostrar("Ordem crescente: " + numeros.join(", "));
}

function verificarPalindromo() {
    let texto = document.getElementById("texto").value;

    let tratado = texto.toLowerCase().replace(/\s+/g, "");
    let invertido = tratado.split("").reverse().join("");

    if (tratado === invertido) {
        mostrar("É palíndromo");
    } else {
        mostrar("Não é palíndromo");
    }
}

function verificarSubconjunto() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;

    if (!p1 || !p2) {
        mostrar("Erro: palavras vazias");
        return;
    }

    if (p1.includes(p2)) {
        mostrar("É um subconjunto");
    } else {
        mostrar("Não é um subconjunto");
    }
}

function diaSemana() {
    let dataInput = document.getElementById("data").value;

    if (!dataInput) {
        mostrar("Informe uma data");
        return;
    }

    let data = new Date(dataInput + "T00:00");
    let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    mostrar("Dia da semana: " + dias[data.getDay()]);
}

function mostrar(msg) {
    alert(msg);
}