class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return "Título: " + this.titulo + ". Conteúdo: " + this.conteudo + ".";
    }
}
const documento1 = new Texto("Bem-vindo", "Este é um documento de exemplo.");
console.log(documento1);
export {};
//# sourceMappingURL=exercicio2.js.map