//Exercício 3
class Produto{
    private nome: string
    private preco: number
    private quantidade: number

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    public calcularEstoque(): number{
        return this.preco * this.quantidade
    }
}

// Exemplo
const produto = new Produto("Caneta", 2.5, 100)
console.log("Valor total em estoque: R$" + produto.calcularEstoque())