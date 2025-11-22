import { VoteSystem } from "./VoteSystem.js";

export class Election extends VoteSystem {

    votarEm(candidato: string): void {
        const atual = this.votos.get(candidato) || 0;
        this.votos.set(candidato, atual + 1);
    }

    obterResultados(): object {
        const resultado: Record<string, number> = {};

        this.votos.forEach((quantidade, nome) => {
            resultado[nome] = quantidade;
        });

        return resultado;
    }
}
