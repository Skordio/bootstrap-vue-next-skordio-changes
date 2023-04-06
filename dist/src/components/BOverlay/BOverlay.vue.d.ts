import type { PropType as __PropType } from 'vue';
import type { Booleanish, SpinnerType } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    bgColor: {
        type: __PropType<string | undefined>;
        required: false;
    };
    blur: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    fixed: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCenter: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noFade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noWrap: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    opacity: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    overlayTag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    rounded: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    show: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    spinnerSmall: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    spinnerType: {
        type: __PropType<SpinnerType | undefined>;
        required: false;
        default: string;
    };
    spinnerVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    noSpinner: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "transparent" | undefined>;
        required: false;
        default: string;
    };
    wrapTag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    zIndex: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "shown" | "hidden")[], "click" | "shown" | "hidden", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    bgColor: {
        type: __PropType<string | undefined>;
        required: false;
    };
    blur: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    fixed: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCenter: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noFade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noWrap: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    opacity: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    overlayTag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    rounded: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    show: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    spinnerSmall: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    spinnerType: {
        type: __PropType<SpinnerType | undefined>;
        required: false;
        default: string;
    };
    spinnerVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    noSpinner: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "transparent" | undefined>;
        required: false;
        default: string;
    };
    wrapTag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    zIndex: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
}, {
    variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "transparent" | undefined;
    rounded: string | boolean | undefined;
    fixed: Booleanish | undefined;
    noWrap: Booleanish | undefined;
    show: Booleanish | undefined;
    blur: string | undefined;
    noFade: Booleanish | undefined;
    noCenter: Booleanish | undefined;
    opacity: string | number | undefined;
    overlayTag: string | undefined;
    spinnerSmall: Booleanish | undefined;
    spinnerType: SpinnerType | undefined;
    noSpinner: Booleanish | undefined;
    wrapTag: string | undefined;
    zIndex: string | number | undefined;
}>;
export default _sfc_main;
