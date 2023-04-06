import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    noHoverPause: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dismissLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    dismissible: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    fade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<number | boolean | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    closeContent: {
        type: __PropType<string | undefined>;
        required: false;
    };
    immediate: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    interval: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    showOnPause: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
}, {
    pause: () => void;
    resume: () => void;
    restart: () => void;
    stop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "closed" | "close-countdown")[], "update:modelValue" | "closed" | "close-countdown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    noHoverPause: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dismissLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    dismissible: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    fade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<number | boolean | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    closeContent: {
        type: __PropType<string | undefined>;
        required: false;
    };
    immediate: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    interval: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    showOnPause: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onClose-countdown"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number | boolean | undefined;
    noHoverPause: Booleanish | undefined;
    dismissLabel: string | undefined;
    dismissible: Booleanish | undefined;
    fade: Booleanish | undefined;
    variant: keyof import("../../types").BaseColorVariant | undefined;
    immediate: Booleanish | undefined;
    interval: number | undefined;
    showOnPause: Booleanish | undefined;
}>;
export default _sfc_main;
