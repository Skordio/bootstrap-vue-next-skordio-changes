export declare const parseEventOptions: (options: any) => boolean | EventListenerOptions | undefined;
export declare const eventOn: (el: Element, eventName: string, handler: EventListener, options: boolean | EventListenerOptions | undefined) => void;
export declare const eventOff: (el: Element, eventName: string, handler: EventListener, options: boolean | EventListenerOptions | undefined) => void;
export declare const eventOnOff: (on: boolean, eventParams: [el: Element, eventName: string, handler: EventListener, options: boolean | EventListenerOptions | undefined]) => void;
export declare const isKeyBoardEvent: (event: Event) => event is KeyboardEvent;
export declare const stopEvent: (event: Event, { preventDefault, propagation, immediatePropagation }?: {
    preventDefault?: boolean | undefined;
    propagation?: boolean | undefined;
    immediatePropagation?: boolean | undefined;
}) => void;
