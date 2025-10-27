//Exercício 5
abstract class Funcionario {
    private nome: string
    private salario: number

    constructor(nome: string, salario: number) {
        this.nome = nome
        this.salario = salario
    }

    getNome(): string {
        return this.nome
    }

    getSalario(): number {
        return this.salario
    }

    abstract calcularBonus(): number
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.1
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05
    }
}

function calcularSalarioBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus()
        console.log("O salário atual do funcionário " + funcionario.getNome() + " é de: R$" + salarioFinal);
    })
}

//Exemplo
const funcionarios: Funcionario[] = [
    new Gerente("Carlos", 5000),
    new Operario("João", 2000),
    new Gerente("Maria", 6000),
    new Operario("Ana", 1800)
];

calcularSalarioBonus(funcionarios)