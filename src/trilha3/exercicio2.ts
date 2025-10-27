//Exercício 2
abstract class FiguraGeometrica {
    abstract calcularArea(): number
}

//Subclasses para herdar o método calcularArea
class Circulo extends FiguraGeometrica {
    private raio: number
    constructor(raio: number) {
        super()
        this.raio = raio
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio
    }
}

class Quadrado extends FiguraGeometrica {
    private lado: number

    constructor(lado: number) {
        super()
        this.lado = lado
    }

    calcularArea(): number {
        return this.lado * this.lado
    }
}

class Triangulo extends FiguraGeometrica {
    private base: number
    private altura: number

    constructor(base: number, altura: number) {
        super()
        this.base = base
        this.altura = altura
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2
    }
}

function exibirAreas(figuras: FiguraGeometrica[]): void {
    for (let figura of figuras) {
        console.log("Área: " + figura.calcularArea())
    }
}

const figuras: FiguraGeometrica[] = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
]

exibirAreas(figuras)