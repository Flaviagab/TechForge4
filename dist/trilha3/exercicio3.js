//Exercício 3
class Pagamento {
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    validarCartao() {
        return this.numeroCartao.length === 16;
    }
    processar() {
        if (this.validarCartao()) {
            console.log("Pagamento com o cartão aprovado. Número do cartão: " + this.numeroCartao);
        }
        else {
            console.log("Número do cartão inválido");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    constructor() {
        super();
        this.codigoBoleto = Math.floor(Math.random() * 1000000); // Simulação de geração de código
    }
    processar() {
        console.log("Boleto gerado com sucesso. Código: " + this.codigoBoleto);
    }
}
function processarPagamentos(pagamentos) {
    for (let p of pagamentos) {
        p.processar();
    }
}
const pagamentos = [
    new PagamentoCartao("1234567890123456"),
    new PagamentoCartao("1234"), //inválido
    new PagamentoBoleto()
];
processarPagamentos(pagamentos);
export {};
//# sourceMappingURL=exercicio3.js.map