import type { PropType as __PropType } from 'vue';
import type { Booleanish, ButtonType } from '../../types';
export declare const computeSize: (value: any) => string | null;
declare const _sfc_main: import("vue").DefineComponent<{
    alt: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    ariaLabel: {
        type: __PropType<string | undefined>;
        required: false;
    };
    badge: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    badgeLeft: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    badgeOffset: {
        type: __PropType<string | undefined>;
        required: false;
    };
    badgeTop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    badgeVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    button: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonType: {
        type: __PropType<ButtonType | undefined>;
        required: false;
        default: string;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    icon: {
        type: __PropType<string | undefined>;
        required: false;
    };
    rounded: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: string;
    };
    size: {
        type: __PropType<string | undefined>;
        required: false;
    };
    square: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    src: {
        type: __PropType<string | undefined>;
        required: false;
    };
    text: {
        type: __PropType<string | undefined>;
        required: false;
    };
    textVariant: {
        type: __PropType<keyof import("../../types").BaseTextColorVariant | undefined>;
        required: false;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "img-error")[], "click" | "img-error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    alt: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    ariaLabel: {
        type: __PropType<string | undefined>;
        required: false;
    };
    badge: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    badgeLeft: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    badgeOffset: {
        type: __PropType<string | undefined>;
        required: false;
    };
    badgeTop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    badgeVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    button: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonType: {
        type: __PropType<ButtonType | undefined>;
        required: false;
        default: string;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    icon: {
        type: __PropType<string | undefined>;
        required: false;
    };
    rounded: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: string;
    };
    size: {
        type: __PropType<string | undefined>;
        required: false;
    };
    square: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    src: {
        type: __PropType<string | undefined>;
        required: false;
    };
    text: {
        type: __PropType<string | undefined>;
        required: false;
    };
    textVariant: {
        type: __PropType<keyof import("../../types").BaseTextColorVariant | undefined>;
        required: false;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onImg-error"?: ((...args: any[]) => any) | undefined;
}, {
    variant: keyof import("../../types").BaseColorVariant | undefined;
    alt: string | undefined;
    badge: string | boolean | undefined;
    badgeLeft: Booleanish | undefined;
    badgeTop: Booleanish | undefined;
    badgeVariant: keyof import("../../types").BaseColorVariant | undefined;
    button: Booleanish | undefined;
    buttonType: ButtonType | undefined;
    disabled: Booleanish | undefined;
    rounded: string | boolean | undefined;
    square: Booleanish | undefined;
}>;
export default _sfc_main;
