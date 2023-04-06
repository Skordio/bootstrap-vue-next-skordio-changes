import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    dismissLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    bodyScrolling: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    backdrop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCloseOnBackdrop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCloseOnEsc: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    placement: {
        type: __PropType<"start" | "end" | "bottom" | "top" | undefined>;
        required: false;
        default: string;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    noHeaderClose: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noHeader: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    lazy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    noFocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    static: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    backdropVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented" | "close" | "esc")[], "update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented" | "close" | "esc", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dismissLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    bodyScrolling: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    backdrop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCloseOnBackdrop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCloseOnEsc: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    placement: {
        type: __PropType<"start" | "end" | "bottom" | "top" | undefined>;
        required: false;
        default: string;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    noHeaderClose: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noHeader: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    lazy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    noFocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    static: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    backdropVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    "onHide-prevented"?: ((...args: any[]) => any) | undefined;
    "onShow-prevented"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onEsc?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Booleanish | undefined;
    dismissLabel: string | undefined;
    lazy: Booleanish | undefined;
    noCloseOnBackdrop: Booleanish | undefined;
    noCloseOnEsc: Booleanish | undefined;
    static: Booleanish | undefined;
    bodyScrolling: Booleanish | undefined;
    backdrop: Booleanish | undefined;
    placement: "start" | "end" | "bottom" | "top" | undefined;
    noHeaderClose: Booleanish | undefined;
    noHeader: Booleanish | undefined;
    noFocus: Booleanish | undefined;
    backdropVariant: keyof import("../../types").BaseColorVariant | undefined;
}>;
export default _sfc_main;
