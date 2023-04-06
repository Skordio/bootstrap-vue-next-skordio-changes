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
    active: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonId: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    lazy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    lazyOnce: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    noBody: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    titleItemClass: {
        type: __PropType<any>;
        required: false;
    };
    titleLinkAttributes: {
        type: __PropType<Record<string, unknown> | undefined>;
        required: false;
        default: undefined;
    };
    titleLinkClass: {
        type: __PropType<any>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    active: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonId: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    lazy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    lazyOnce: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    noBody: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    titleItemClass: {
        type: __PropType<any>;
        required: false;
    };
    titleLinkAttributes: {
        type: __PropType<Record<string, unknown> | undefined>;
        required: false;
        default: undefined;
    };
    titleLinkClass: {
        type: __PropType<any>;
        required: false;
    };
}>>, {
    disabled: Booleanish | undefined;
    tag: string | undefined;
    active: Booleanish | undefined;
    noBody: string | boolean | undefined;
    lazy: Booleanish | undefined;
    buttonId: string | undefined;
    lazyOnce: Booleanish | undefined;
    titleLinkAttributes: Record<string, unknown> | undefined;
}>;
export default _sfc_main;
