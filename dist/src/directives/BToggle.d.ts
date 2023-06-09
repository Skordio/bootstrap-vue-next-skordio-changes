import type { Directive } from 'vue';
export interface WithToggle extends HTMLElement {
    __toggle: () => void;
}
declare const _default: Directive<WithToggle, any>;
export default _default;
