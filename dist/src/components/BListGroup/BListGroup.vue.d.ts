import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    flush: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    horizontal: {
        type: __PropType<boolean | "sm" | "md" | "lg" | "xl" | "xxl" | undefined>;
        required: false;
        default: boolean;
    };
    numbered: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    flush: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    horizontal: {
        type: __PropType<boolean | "sm" | "md" | "lg" | "xl" | "xxl" | undefined>;
        required: false;
        default: boolean;
    };
    numbered: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}>>, {
    flush: Booleanish | undefined;
    tag: string | undefined;
    horizontal: boolean | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    numbered: Booleanish | undefined;
}>;
export default _sfc_main;
