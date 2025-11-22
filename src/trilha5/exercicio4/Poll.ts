import { VoteSystem } from "./VoteSystem.js";

export class Poll extends VoteSystem {

    votarEm(opcao: string): void {
        const atual = this.votos.get(opcao) || 0;
        this.votos.set(opcao, atual + 1);
    }

    obterResultados(): object {
        const ordenado = [...this.votos.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([opcao, quantidade]) => ({ opcao, quantidade }));

        return ordenado;
    }
}
