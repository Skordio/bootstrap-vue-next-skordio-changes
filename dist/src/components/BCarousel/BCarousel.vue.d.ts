import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    ride: {
        type: __PropType<boolean | "" | "true" | "false" | "carousel" | undefined>;
        required: false;
        default: boolean;
    };
    noHoverPause: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    rideReverse: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    fade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    imgHeight: {
        type: __PropType<string | undefined>;
        required: false;
    };
    imgWidth: {
        type: __PropType<string | undefined>;
        required: false;
    };
    background: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    controls: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    indicators: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    interval: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    noTouch: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noWrap: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    controlsPrevText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    controlsNextText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    indicatorsButtonLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    keyboard: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    touchThreshold: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
}, {
    pause: import("@vueuse/shared").Fn;
    resume: import("@vueuse/shared").Fn;
    prev: () => void;
    next: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "slid" | "slide")[], "update:modelValue" | "slid" | "slide", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ride: {
        type: __PropType<boolean | "" | "true" | "false" | "carousel" | undefined>;
        required: false;
        default: boolean;
    };
    noHoverPause: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    rideReverse: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    fade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    imgHeight: {
        type: __PropType<string | undefined>;
        required: false;
    };
    imgWidth: {
        type: __PropType<string | undefined>;
        required: false;
    };
    background: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    controls: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    indicators: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    interval: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    noTouch: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noWrap: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    controlsPrevText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    controlsNextText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    indicatorsButtonLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    keyboard: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    touchThreshold: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSlide?: ((...args: any[]) => any) | undefined;
    onSlid?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number | undefined;
    noHoverPause: Booleanish | undefined;
    fade: Booleanish | undefined;
    interval: number | undefined;
    ride: boolean | "" | "true" | "false" | "carousel" | undefined;
    rideReverse: Booleanish | undefined;
    controls: Booleanish | undefined;
    indicators: Booleanish | undefined;
    noTouch: Booleanish | undefined;
    noWrap: Booleanish | undefined;
    controlsPrevText: string | undefined;
    controlsNextText: string | undefined;
    indicatorsButtonLabel: string | undefined;
    keyboard: Booleanish | undefined;
    touchThreshold: string | number | undefined;
}>;
export default _sfc_main;
