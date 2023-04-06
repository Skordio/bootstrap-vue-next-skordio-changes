import type { PropType as __PropType } from 'vue';
import type { Booleanish, ButtonType } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    ariaLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    white: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    type: {
        type: __PropType<ButtonType | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    white: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    type: {
        type: __PropType<ButtonType | undefined>;
        required: false;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    type: ButtonType | undefined;
    ariaLabel: string | undefined;
    disabled: Booleanish | undefined;
    white: Booleanish | undefined;
}>;
export default _sfc_main;
