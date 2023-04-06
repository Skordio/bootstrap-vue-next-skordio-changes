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
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noRemove: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    pill: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    removeLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noRemove: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    pill: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    removeLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
}>> & {
    onRemove?: ((...args: any[]) => any) | undefined;
}, {
    variant: keyof import("../../types").BaseColorVariant | undefined;
    disabled: Booleanish | undefined;
    tag: string | undefined;
    pill: Booleanish | undefined;
    noRemove: Booleanish | undefined;
    removeLabel: string | undefined;
}>;
export default _sfc_main;
