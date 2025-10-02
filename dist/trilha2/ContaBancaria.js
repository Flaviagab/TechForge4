"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exercício 1
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valorDeposito) {
        if (valorDeposito > 0) {
            this.saldo += valorDeposito;
            console.log(this.titular + " depositou R$" + valorDeposito + ". Saldo atual: R$" + this.saldo);
        }
        else {
            console.log("Valor inválido");
        }
    }
    sacar(valorSaque) {
        if (valorSaque > 0 && valorSaque <= this.saldo) {
            this.saldo -= valorSaque;
            console.log(this.titular + " sacou R$" + valorSaque + ". Saldo atual: R$" + this.saldo);
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
}
//Exemplo
const conta = new ContaBancaria("Maria", 1000);
conta.depositar(500);
conta.sacar(200);
//# sourceMappingURL=ContaBancaria.js.map