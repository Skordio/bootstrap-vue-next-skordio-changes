import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    visible: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    headerTag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    visible: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    headerTag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    headerTag: string | undefined;
}>;
export default _sfc_main;
