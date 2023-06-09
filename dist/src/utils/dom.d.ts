import type { Slot } from 'vue';
import type { AnimationFrame } from '../types/safeTypes';
/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
export declare const matchesEl: any;
export declare const isElement: (el: HTMLElement | Element) => boolean;
export declare const getBCR: (el: HTMLElement) => DOMRect | null;
export declare const getActiveElement: (excludes?: never[]) => Element | null;
export declare const isActiveElement: (el: HTMLElement) => boolean;
export declare const attemptFocus: (el: HTMLElement, options?: {}) => boolean;
/**
 * Attempt to blur an element, and return `true` if successful
 *
 * @param el
 * @returns
 */
export declare const attemptBlur: (el: HTMLElement) => boolean;
export declare const getStyle: (el: HTMLElement, prop: string) => string | null;
export declare const contains: (parent: Node, child: Node) => boolean;
export declare const isVisible: (el: HTMLElement) => boolean;
export declare const offset: (el: HTMLElement) => {
    top: number;
    left: number;
};
export declare const isEmptySlot: (el: Slot | undefined) => boolean;
/**
 * Select a single element, returns `null` if not found
 *
 * @param selector
 * @param root
 * @returns
 */
export declare const select: (selector: any, root: any) => any;
export declare const selectAll: (selector: any, root: any) => any[];
export declare const getAttr: (el: HTMLElement | Element, attr: string) => string | null;
/**
 * Get an element given an ID
 */
export declare const getById: (id: string) => any;
export declare const setAttr: (el: HTMLElement, attr: string, value: string) => void;
/**
 * Remove an attribute from an element
 *
 * @param el
 * @param attr
 */
export declare const removeAttr: (el: HTMLElement, attr: string) => void;
export declare const isTag: (tag: any, name: any) => boolean;
export declare const requestAF: AnimationFrame;
export declare const matches: (el: Element, selector: string) => any;
/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
export declare const closestEl: {
    <K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    <K_1 extends keyof SVGElementTagNameMap>(selector: K_1): SVGElementTagNameMap[K_1] | null;
    <E extends Element = Element>(selectors: string): E | null;
};
/**
 * Finds closest element matching selector. Returns `null` if not found
 *
 * @param selector
 * @param root
 * @param includeRoot
 */
export declare const closest: (selector: string, root: Element, includeRoot?: boolean) => Element | null;
