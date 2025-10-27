"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exercício 2
class Livro {
    constructor(titulo, autor, paginas, lido) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    livroConcluido() {
        this.lido = true;
        console.log("O livro " + this.titulo + ", do autor " + this.autor + ", com " + this.paginas + " páginas, foi marcado como concluído");
    }
}
//Exemplo
const livro = new Livro("1984", "George Orwell", 328, false);
livro.livroConcluido();
//# sourceMappingURL=exercicio2.js.map