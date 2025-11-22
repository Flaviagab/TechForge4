//Exercício 5
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    getSalario() {
        return this.salario;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.1;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalarioBonus(funcionarios) {
    funcionarios.forEach(funcionario => {
        const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus();
        console.log("O salário atual do funcionário " + funcionario.getNome() + " é de: R$" + salarioFinal);
    });
}
//Exemplo
const funcionarios = [
    new Gerente("Carlos", 5000),
    new Operario("João", 2000),
    new Gerente("Maria", 6000),
    new Operario("Ana", 1800)
];
calcularSalarioBonus(funcionarios);
export {};
//# sourceMappingURL=exercicio5.js.map