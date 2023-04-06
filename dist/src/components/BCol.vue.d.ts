import { type PropType } from 'vue';
import type { AlignmentVertical, Booleanish } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    alignSelf: {
        type: PropType<AlignmentVertical | "auto">;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    col: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    cols: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}, {
    computedClasses: import("vue").ComputedRef<(string[] | {
        [x: string]: boolean;
        col: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    alignSelf: {
        type: PropType<AlignmentVertical | "auto">;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    col: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    cols: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}>>, {
    tag: string;
    col: Booleanish;
    cols: string | number;
    offset: string | number;
    order: string | number;
    alignSelf: AlignmentVertical | "auto";
}>;
export default _sfc_main;
