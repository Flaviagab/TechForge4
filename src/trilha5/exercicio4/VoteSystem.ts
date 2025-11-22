export abstract class VoteSystem {
    protected votos: Map<string, number> = new Map();

    abstract votarEm(item: string): void;
    abstract obterResultados(): object;
}
