import type { PropType as __PropType } from 'vue';
import type { Booleanish, SpinnerType } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: __PropType<string | undefined>;
        required: false;
    };
    role: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    small: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    type: {
        type: __PropType<SpinnerType | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: __PropType<string | undefined>;
        required: false;
    };
    role: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    small: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    type: {
        type: __PropType<SpinnerType | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
}>>, {
    type: SpinnerType | undefined;
    tag: string | undefined;
    small: Booleanish | undefined;
    role: string | undefined;
}>;
export default _sfc_main;
