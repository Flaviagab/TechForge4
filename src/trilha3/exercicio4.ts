//Exercício 4
class Animal{
    private energia: number

    constructor(energia: number){
        this.energia = energia
    }

    protected alterarEnergia(valor: number): void{
        this.energia += valor
        if(this.energia < 0){ //para não ficar com energia negativa
            this.energia = 0
        }
    }

    public comer(): void{
        this.alterarEnergia(10)
        console.log("O animal se alimentou | +10 de energia")
    }

    public statusEnergia(): void{
        console.log("A energia atual é: " + this.energia);
    }

}

class Leao extends Animal{
    public comer(): void {
        console.log("O leão vai caçar | -5 de energia")
        this.alterarEnergia(-5)
        this.alterarEnergia(10)
        console.log("O leão se alimentou da caça | +10 de energia");
    }

}

class Passaro extends Animal{
    public comer(): void {
        this.alterarEnergia(10)
        console.log("O pássaro se alimentou | +10 de energia");
    }
}

function alimentarAnimais(animais: Animal[]): void{
    for (let a of animais){
        a.comer()
        a.statusEnergia()
    }
}

const animais: Animal[] = [
    new Leao(30),
    new Passaro(15)
]

alimentarAnimais(animais)