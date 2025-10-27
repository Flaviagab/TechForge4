"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    constructor(produtos) {
        this.produtos = produtos;
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produtos => produtos.codigo === codigo);
    }
}
const produtosAdicionados = [
    { codigo: 1, nome: "Notebook" },
    { codigo: 2, nome: "Teclado" },
    { codigo: 3, nome: "Mouse" },
    { codigo: 4, nome: "Fone" },
];
const loja = new Loja(produtosAdicionados);
const produto1 = loja.buscarProdutoPorCodigo(2);
console.log("Produto: ", produto1);
//# sourceMappingURL=ProdutoLoja.js.map