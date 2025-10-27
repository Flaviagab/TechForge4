//Exercício 1
class ContaBancaria{
    private titular: string
    private saldo: number

    constructor(titular: string, saldo:number){
        this.titular = titular
        this.saldo = saldo
    }

    public depositar(valorDeposito: number): void{
        if (valorDeposito > 0){
            this.saldo += valorDeposito
            console.log(this.titular + " depositou R$" + valorDeposito + ". Saldo atual: R$" + this.saldo);
            
        }else{
            console.log("Valor inválido");
        }
    }

    public sacar(valorSaque: number): void{
        if (valorSaque > 0 && valorSaque <= this.saldo){
            this.saldo -= valorSaque
            console.log(this.titular + " sacou R$" + valorSaque + ". Saldo atual: R$" + this.saldo);
        }else{
            console.log("Saldo insuficiente");
        }
    }
}

//Exemplo
const conta = new ContaBancaria("Maria", 1000)
conta.depositar(500)
conta.sacar(200)