import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    label: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    target: {
        type: __PropType<string | string[] | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    label: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    target: {
        type: __PropType<string | string[] | undefined>;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: Booleanish | undefined;
    label: string | undefined;
}>;
export default _sfc_main;
