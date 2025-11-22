//Exercício 5
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionarCompromissos(compromisso) {
        this.compromissos.push(compromisso);
        console.log("Compromisso adicionado: " + compromisso);
    }
    listarCompromissos() {
        console.log("Compromissos: ");
        for (let i = 0; i < this.compromissos.length; i++) {
            console.log(this.compromissos[i]);
        }
    }
}
// Exemplo
const agenda = new Agenda();
agenda.adicionarCompromissos("Reunião às 10h");
agenda.adicionarCompromissos("Dentista às 15h");
agenda.listarCompromissos();
export {};
//# sourceMappingURL=exercicio5.js.map