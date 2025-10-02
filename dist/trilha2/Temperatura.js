"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exercício 4
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    converterFahrenheit() {
        return (this.valor * 9 / 5) + 32;
    }
    converterKelvin() {
        return this.valor + 273.15;
    }
}
// Exemplo
const temp = new Temperatura(25);
console.log("Fahrenheit: " + temp.converterFahrenheit());
console.log("Kelvin: " + temp.converterKelvin());
//# sourceMappingURL=Temperatura.js.map