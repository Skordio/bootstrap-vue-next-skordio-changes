import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    max: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    height: {
        type: __PropType<string | undefined>;
        required: false;
    };
    animated: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    precision: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    showProgress: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    showValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    striped: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    value: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    max: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    height: {
        type: __PropType<string | undefined>;
        required: false;
    };
    animated: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    precision: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    showProgress: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    showValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    striped: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    value: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
}>>, {
    value: string | number | undefined;
    animated: Booleanish | undefined;
    precision: string | number | undefined;
    showProgress: Booleanish | undefined;
    showValue: Booleanish | undefined;
    striped: Booleanish | undefined;
}>;
export default _sfc_main;
