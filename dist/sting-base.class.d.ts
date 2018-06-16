export default class StingBase {
    element: any;
    config: any;
    methods: any[];
    constructor(config: any);
    render(): void;
    remove(): void;
    on(event: any, method: any): any;
    off(event: any, method: any): void;
    broadcast(event: any, ...values: any[]): void;
    eventRunner(event: any, ...values: any[]): void;
    private getEventMethods;
    private renderMethod;
    private removeMethod;
}
