import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    accordion: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    toggle: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    horizontal: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    visible: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    isNav: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
}, {
    close: () => boolean;
    open: () => boolean;
    toggle: () => boolean;
    visible: boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented")[], "update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    accordion: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    toggle: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    horizontal: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    visible: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    isNav: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    "onHide-prevented"?: ((...args: any[]) => any) | undefined;
    "onShow-prevented"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Booleanish | undefined;
    visible: Booleanish | undefined;
    tag: string | undefined;
    toggle: Booleanish | undefined;
    horizontal: Booleanish | undefined;
    isNav: Booleanish | undefined;
}>;
export default _sfc_main;
