export interface ILatencyTracker {
    add: (ms: number) => void | Promise<void>;
    getWaitTime: () => number | Promise<number>
}