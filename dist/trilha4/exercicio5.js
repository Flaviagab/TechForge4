"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BibliotecaGestao {
    constructor(arrayLivros) {
        this.arrayLivros = arrayLivros;
    }
    filtrarPorGenero(genero) {
        return this.arrayLivros.filter(livro => livro.genero === genero);
    }
    buscarPorAutor(autor) {
        return this.arrayLivros.filter(livro => livro.autor === autor);
    }
    obterLivrosDisponiveis() {
        return this.arrayLivros.filter(livro => livro.disponivel === true).sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}
//Exemplo de livros
const livros = [
    { titulo: "1984", autor: "George Orwell", genero: "Ficção Científica", disponivel: true },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Fábula", disponivel: false },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", disponivel: false },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", genero: "Fantasia", disponivel: true },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", genero: "Fábula", disponivel: true },
    { titulo: "Duna", autor: "Frank Herbert", genero: "Ficção Científica", disponivel: true }
];
const biblioteca = new BibliotecaGestao(livros);
console.log("Livros de Fantasia");
const livrosFantasia = biblioteca.filtrarPorGenero("Fantasia");
livrosFantasia.forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
});
console.log("\nLivros de George Orwell");
const livrosOrwell = biblioteca.buscarPorAutor("George Orwell");
livrosOrwell.forEach(livro => {
    console.log(`- ${livro.titulo} (${livro.disponivel ? "Disponível" : "Emprestado"})`);
});
console.log("\nLivros Disponíveis");
const livrosDisponiveis = biblioteca.obterLivrosDisponiveis();
livrosDisponiveis.forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor} [${livro.genero}]`);
});
//# sourceMappingURL=exercicio5.js.map