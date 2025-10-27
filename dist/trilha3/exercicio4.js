"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exercício 4
class Animal {
    constructor(energia) {
        this.energia = energia;
    }
    alterarEnergia(valor) {
        this.energia += valor;
        if (this.energia < 0) { //para não ficar com energia negativa
            this.energia = 0;
        }
    }
    comer() {
        this.alterarEnergia(10);
        console.log("O animal se alimentou | +10 de energia");
    }
    statusEnergia() {
        console.log("A energia atual é: " + this.energia);
    }
}
class Leao extends Animal {
    comer() {
        console.log("O leão vai caçar | -5 de energia");
        this.alterarEnergia(-5);
        this.alterarEnergia(10);
        console.log("O leão se alimentou da caça | +10 de energia");
    }
}
class Passaro extends Animal {
    comer() {
        this.alterarEnergia(10);
        console.log("O pássaro se alimentou | +10 de energia");
    }
}
function alimentarAnimais(animais) {
    for (let a of animais) {
        a.comer();
        a.statusEnergia();
    }
}
const animais = [
    new Leao(30),
    new Passaro(15)
];
alimentarAnimais(animais);
//# sourceMappingURL=exercicio4.js.map