//Exercício 2
class Livro{
    private titulo: string
    private autor: string
    private paginas: number
    private lido: boolean

    constructor(titulo: string, autor: string, paginas: number, lido: boolean){
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
        this.lido = lido
    }

    public livroConcluido(): void{
        this.lido = true
        console.log("O livro " + this.titulo + ", do autor " + this.autor + ", com " + this.paginas + " páginas, foi marcado como concluído");
    }
}

//Exemplo
const livro = new Livro("1984", "George Orwell", 328, false)
livro.livroConcluido()