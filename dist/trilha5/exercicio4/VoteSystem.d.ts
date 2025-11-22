export declare abstract class VoteSystem {
    protected votos: Map<string, number>;
    abstract votarEm(item: string): void;
    abstract obterResultados(): object;
}
//# sourceMappingURL=VoteSystem.d.ts.map