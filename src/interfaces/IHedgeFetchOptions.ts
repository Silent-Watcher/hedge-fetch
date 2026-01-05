export interface IHedgeFetchOptions extends RequestInit {
    // custom hooks
    onHedge?: () => void;
    onPrimaryWin?: (latency: number) => void;
    onSpeculativeWin?: (latency: number) => void;

    timeoutMs: number;
    forceHedge?: boolean;
    autoIdempotency?: boolean
}