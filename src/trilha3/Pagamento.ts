//Exercício 3
abstract class Pagamento {
    abstract processar(): void
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string

    constructor(numeroCartao: string) {
        super()
        this.numeroCartao = numeroCartao
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length === 16
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log("Pagamento com o cartão aprovado. Número do cartão: " + this.numeroCartao)
        } else {
            console.log("Número do cartão inválido")
        }
    }
}

class PagamentoBoleto extends Pagamento {
    private codigoBoleto: number

    constructor() {
        super()
        this.codigoBoleto = Math.floor(Math.random() * 1000000) // Simulação de geração de código
    }

    processar(): void {
        console.log("Boleto gerado com sucesso. Código: " + this.codigoBoleto);
    }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
    for (let p of pagamentos) {
        p.processar()
    }
}

const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234567890123456"),
    new PagamentoCartao("1234"), //inválido
    new PagamentoBoleto()
]

processarPagamentos(pagamentos)
