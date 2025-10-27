"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exercício 3
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularEstoque() {
        return this.preco * this.quantidade;
    }
}
// Exemplo
const produto = new Produto("Caneta", 2.5, 100);
console.log("Valor total em estoque: R$" + produto.calcularEstoque());
//# sourceMappingURL=exercicio3.js.map