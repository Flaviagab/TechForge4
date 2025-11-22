class Biblioteca {
    constructor(arrayLivros) {
        this.arrayLivros = arrayLivros;
    }
    buscarLivrosDisponiveis() {
        return this.arrayLivros.filter(livro => livro.disponivel === true);
    }
}
const livros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true },
    { titulo: "Harry Potter", autor: "J.K. Rowling", disponivel: false },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", disponivel: true },
];
const biblioteca = new Biblioteca(livros);
const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log("Livros disponíveis: ");
livrosDisponiveis.forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
});
export {};
//# sourceMappingURL=exercicio4.js.map