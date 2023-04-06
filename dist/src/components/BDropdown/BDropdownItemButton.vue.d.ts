import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    buttonClass: {
        type: __PropType<any>;
        required: false;
    };
    active: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    activeClass: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    buttonClass: {
        type: __PropType<any>;
        required: false;
    };
    active: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    activeClass: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: Booleanish | undefined;
    active: Booleanish | undefined;
    activeClass: string | undefined;
}>;
export default _sfc_main;
