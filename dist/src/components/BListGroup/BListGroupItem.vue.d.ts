import type { PropType as __PropType } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import type { Booleanish, LinkTarget } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    action: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    active: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    button: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    href: {
        type: __PropType<string | undefined>;
        required: false;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    target: {
        type: __PropType<LinkTarget | undefined>;
        required: false;
        default: string;
    };
    to: {
        type: __PropType<RouteLocationRaw | undefined>;
        required: false;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    action: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    active: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    button: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    href: {
        type: __PropType<string | undefined>;
        required: false;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    target: {
        type: __PropType<LinkTarget | undefined>;
        required: false;
        default: string;
    };
    to: {
        type: __PropType<RouteLocationRaw | undefined>;
        required: false;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}>>, {
    button: Booleanish | undefined;
    disabled: Booleanish | undefined;
    tag: string | undefined;
    active: Booleanish | undefined;
    target: LinkTarget | undefined;
    action: Booleanish | undefined;
}>;
export default _sfc_main;
