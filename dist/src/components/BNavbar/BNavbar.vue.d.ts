import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    fixed: {
        type: __PropType<"bottom" | "top" | undefined>;
        required: false;
    };
    print: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    sticky: {
        type: __PropType<"bottom" | "top" | undefined>;
        required: false;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    toggleable: {
        type: __PropType<boolean | "sm" | "md" | "lg" | "xl" | undefined>;
        required: false;
        default: boolean;
    };
    dark: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    container: {
        type: __PropType<boolean | "fluid" | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fixed: {
        type: __PropType<"bottom" | "top" | undefined>;
        required: false;
    };
    print: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    sticky: {
        type: __PropType<"bottom" | "top" | undefined>;
        required: false;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    toggleable: {
        type: __PropType<boolean | "sm" | "md" | "lg" | "xl" | undefined>;
        required: false;
        default: boolean;
    };
    dark: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    container: {
        type: __PropType<boolean | "fluid" | undefined>;
        required: false;
        default: string;
    };
}>>, {
    dark: Booleanish | undefined;
    tag: string | undefined;
    print: Booleanish | undefined;
    toggleable: boolean | "sm" | "md" | "lg" | "xl" | undefined;
    container: boolean | "fluid" | undefined;
}>;
export default _sfc_main;
