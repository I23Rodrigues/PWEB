function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return this.base * this.altura;
    };
}

function calcularArea() {
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    if (base <= 0 || altura <= 0) {
        document.getElementById("resultadoRetangulo").innerText =
            "Informe valores válidos!";
        return;
    }

    let retangulo = new Retangulo(base, altura);

    document.getElementById("resultadoRetangulo").innerText =
        "Área do retângulo: " + retangulo.calcularArea();
}



class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(valor) {
        this._nomeCorrentista = valor;
    }

    get banco() {
        return this._banco;
    }

    set banco(valor) {
        this._banco = valor;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(valor) {
        this._numeroConta = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);

        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, vencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);

        this._juros = juros;
        this._vencimento = vencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(valor) {
        this._juros = valor;
    }

    get vencimento() {
        return this._vencimento;
    }

    set vencimento(valor) {
        this._vencimento = valor;
    }
}




function criarContaCorrente() {

    let nome = document.getElementById("nomeCorrente").value;
    let banco = document.getElementById("bancoCorrente").value;
    let numero = document.getElementById("numeroCorrente").value;
    let saldo = document.getElementById("saldoCorrente").value;
    let saldoEspecial = document.getElementById("saldoEspecial").value;

    let conta = new Corrente(
        nome,
        banco,
        numero,
        saldo,
        saldoEspecial
    );

    document.getElementById("resultadoCorrente").innerText =
        "Conta Corrente Criada!\n\n" +
        "Nome: " + conta.nomeCorrentista +
        "\nBanco: " + conta.banco +
        "\nConta: " + conta.numeroConta +
        "\nSaldo: R$ " + conta.saldo +
        "\nSaldo Especial: R$ " + conta.saldoEspecial;
}




function criarContaPoupanca() {

    let nome = document.getElementById("nomePoupanca").value;
    let banco = document.getElementById("bancoPoupanca").value;
    let numero = document.getElementById("numeroPoupanca").value;
    let saldo = document.getElementById("saldoPoupanca").value;
    let juros = document.getElementById("juros").value;
    let vencimento = document.getElementById("vencimento").value;

    let conta = new Poupanca(
        nome,
        banco,
        numero,
        saldo,
        juros,
        vencimento
    );

    document.getElementById("resultadoPoupanca").innerText =
        "Conta Poupança Criada!\n\n" +
        "Nome: " + conta.nomeCorrentista +
        "\nBanco: " + conta.banco +
        "\nConta: " + conta.numeroConta +
        "\nSaldo: R$ " + conta.saldo +
        "\nJuros: " + conta.juros + "%" +
        "\nVencimento: " + conta.vencimento;
}