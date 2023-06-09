import type { Breakpoint, Position } from '../types';
import { type PropType, type VNode } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    gutterX: {
        type: StringConstructor;
        default: null;
    };
    gutterY: {
        type: StringConstructor;
        default: null;
    };
    fluid: {
        type: PropType<boolean | Breakpoint>;
        default: boolean;
    };
    toast: {
        type: ObjectConstructor;
    };
    position: {
        type: PropType<Position>;
        required: false;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    gutterX: {
        type: StringConstructor;
        default: null;
    };
    gutterY: {
        type: StringConstructor;
        default: null;
    };
    fluid: {
        type: PropType<boolean | Breakpoint>;
        default: boolean;
    };
    toast: {
        type: ObjectConstructor;
    };
    position: {
        type: PropType<Position>;
        required: false;
    };
}>>, {
    gutterX: string;
    gutterY: string;
    fluid: boolean | Breakpoint;
}>;
export default _sfc_main;
