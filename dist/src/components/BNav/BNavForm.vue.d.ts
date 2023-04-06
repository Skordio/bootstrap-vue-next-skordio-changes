import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    role: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    floating: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    novalidate: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    validated: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    role: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    floating: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    novalidate: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    validated: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {
    floating: Booleanish | undefined;
    novalidate: Booleanish | undefined;
    validated: Booleanish | undefined;
}>;
export default _sfc_main;
