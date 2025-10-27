//Exercício 5
class Agenda{
    private compromissos: string[]

    constructor(){
        this.compromissos = []
    }

    public adicionarCompromissos(compromisso: string):void{
        this.compromissos.push(compromisso)
        console.log("Compromisso adicionado: " + compromisso);
    }

    public listarCompromissos(): void{
        console.log("Compromissos: ");
        for (let i = 0; i < this.compromissos.length; i++){
            console.log(this.compromissos[i]);
            
        }
    }
}

// Exemplo
const agenda = new Agenda()
agenda.adicionarCompromissos("Reunião às 10h")
agenda.adicionarCompromissos("Dentista às 15h")
agenda.listarCompromissos()