import type { PropType as __PropType } from 'vue';
import type { Booleanish, TransitionMode } from '../../types';
import { type TransitionProps } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    appear: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    mode: {
        type: __PropType<TransitionMode | undefined>;
        required: false;
    };
    noFade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    transProps: {
        type: __PropType<TransitionProps | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    appear: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    mode: {
        type: __PropType<TransitionMode | undefined>;
        required: false;
    };
    noFade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    transProps: {
        type: __PropType<TransitionProps | undefined>;
        required: false;
    };
}>>, {
    noFade: Booleanish | undefined;
    appear: Booleanish | undefined;
}>;
export default _sfc_main;
