import type { PropType as __PropType } from 'vue';
import type { Booleanish, LinkTarget } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    href: {
        type: __PropType<string | undefined>;
        required: false;
    };
    linkClass: {
        type: __PropType<any>;
        required: false;
    };
    active: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    rel: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    target: {
        type: __PropType<LinkTarget | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    href: {
        type: __PropType<string | undefined>;
        required: false;
    };
    linkClass: {
        type: __PropType<any>;
        required: false;
    };
    active: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    rel: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    target: {
        type: __PropType<LinkTarget | undefined>;
        required: false;
        default: string;
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
    rel: string | undefined;
    target: LinkTarget | undefined;
}>;
export default _sfc_main;
