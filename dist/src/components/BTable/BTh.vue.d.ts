import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    colspan: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    rowspan: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    stackedHeading: {
        type: __PropType<string | undefined>;
        required: false;
    };
    stickyColumn: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colspan: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    rowspan: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    stackedHeading: {
        type: __PropType<string | undefined>;
        required: false;
    };
    stickyColumn: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}>>, {
    stickyColumn: Booleanish | undefined;
}>;
export default _sfc_main;
