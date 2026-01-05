export interface IHedgeBucket {
    canHedge(): boolean | Promise<boolean>;
    consumeHedge(): void | Promise<void>;
    inc(): void | Promise<void>;
}