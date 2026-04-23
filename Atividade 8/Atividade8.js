let pessoas = [];

function adicionar() {
    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = parseInt(document.getElementById("opiniao").value);

    if (!idade || !sexo || !opiniao) {
        alert("Preencha todos os campos!");
        return;
    }

    pessoas.push({ idade, sexo, opiniao });

    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("opiniao").value = "";
}

function calcular() {

    if (pessoas.length === 0) {
        alert("Nenhum dado inserido!");
        return;
    }

    let somaIdade = 0;
    let maisVelha = pessoas[0].idade;
    let maisNova = pessoas[0].idade;

    let pessimo = 0;
    let otimoBom = 0;

    let mulheres = 0;
    let homens = 0;
    let outros = 0;

    for (let p of pessoas) {

        somaIdade += p.idade;

        if (p.idade > maisVelha) maisVelha = p.idade;
        if (p.idade < maisNova) maisNova = p.idade;

        if (p.opiniao === 1) pessimo++;
        if (p.opiniao === 3 || p.opiniao === 4) otimoBom++;

        if (p.sexo === "feminino") mulheres++;
        else if (p.sexo === "masculino") homens++;
        else outros++;
    }

    let media = somaIdade / pessoas.length;
    let porcentagem = (otimoBom / pessoas.length) * 100;

    document.getElementById("resultado").innerText =
        "Média de idade: " + media.toFixed(2) +
        "\nMais velha: " + maisVelha +
        "\nMais nova: " + maisNova +
        "\nQuantidade de péssimo: " + pessimo +
        "\n% ótimo e bom: " + porcentagem.toFixed(2) + "%" +
        "\nMulheres: " + mulheres +
        "\nHomens: " + homens +
        "\nOutros: " + outros;
}