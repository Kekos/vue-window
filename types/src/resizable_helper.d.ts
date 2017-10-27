export declare class ResizableHelper {
    readonly container: HTMLElement;
    readonly onResiza: (() => void) | undefined;
    private handles;
    constructor(container: HTMLElement, onResiza?: (() => void) | undefined);
    teardown(): void;
}
