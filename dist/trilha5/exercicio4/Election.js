import { VoteSystem } from "./VoteSystem.js";
export class Election extends VoteSystem {
    votarEm(candidato) {
        const atual = this.votos.get(candidato) || 0;
        this.votos.set(candidato, atual + 1);
    }
    obterResultados() {
        const resultado = {};
        this.votos.forEach((quantidade, nome) => {
            resultado[nome] = quantidade;
        });
        return resultado;
    }
}
//# sourceMappingURL=Election.js.map