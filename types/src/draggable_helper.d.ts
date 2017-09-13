export declare class DraggableHelper {
    readonly handle: HTMLElement;
    readonly container: HTMLElement;
    constructor(handle: HTMLElement, container: HTMLElement);
    teardown(): void;
    private offsetX;
    private offsetY;
    private mousedown;
    private mousemove;
    private mouseup;
}
