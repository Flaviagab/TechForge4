"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exercício 1
class Veiculo {
    mover() {
        console.log("O veículo está se movendo");
    }
}
class Carro extends Veiculo {
    mover() {
        console.log("O carro está dirigindo");
    }
}
class Bicicleta extends Veiculo {
    mover() {
        console.log("A bicicleta está pedalando");
    }
}
const carro = new Carro();
const bicicleta = new Bicicleta();
carro.mover();
bicicleta.mover();
//# sourceMappingURL=exercicio1.js.map