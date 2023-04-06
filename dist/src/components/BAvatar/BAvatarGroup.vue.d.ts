import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    overlap: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    rounded: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
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
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    overlap: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    rounded: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
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
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}>>, {
    rounded: string | boolean | undefined;
    square: Booleanish | undefined;
    overlap: string | number | undefined;
    tag: string | undefined;
}>;
export default _sfc_main;
