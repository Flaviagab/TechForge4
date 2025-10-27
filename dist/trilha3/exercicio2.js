"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exercício 2
class FiguraGeometrica {
}
//Subclasses para herdar o método calcularArea
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function exibirAreas(figuras) {
    for (let figura of figuras) {
        console.log("Área: " + figura.calcularArea());
    }
}
const figuras = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
];
exibirAreas(figuras);
//# sourceMappingURL=exercicio2.js.map