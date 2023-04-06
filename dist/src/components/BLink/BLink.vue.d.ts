import type { Booleanish, LinkTarget } from '../../types';
import { type PropType } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
export declare const BLINK_PROPS: {
    active: {
        type: PropType<Booleanish>;
        default: undefined;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    event: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    href: {
        type: StringConstructor;
    };
    rel: {
        type: StringConstructor;
        default: null;
    };
    replace: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    routerComponentName: {
        type: StringConstructor;
        default: string;
    };
    routerTag: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: PropType<LinkTarget>;
        default: string;
    };
    to: {
        type: PropType<RouteLocationRaw>;
        default: null;
    };
};
declare const _sfc_main: import("vue").DefineComponent<{
    active: {
        type: PropType<Booleanish>;
        default: undefined;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    event: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    href: {
        type: StringConstructor;
    };
    rel: {
        type: StringConstructor;
        default: null;
    };
    replace: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    routerComponentName: {
        type: StringConstructor;
        default: string;
    };
    routerTag: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: PropType<LinkTarget>;
        default: string;
    };
    to: {
        type: PropType<RouteLocationRaw>;
        default: null;
    };
}, {
    computedLinkClasses: import("vue").ComputedRef<{
        active: boolean | undefined;
        disabled: boolean;
    }>;
    tag: import("vue").ComputedRef<string>;
    routerAttr: import("vue").ComputedRef<{
        to: RouteLocationRaw;
        href: string;
        target: LinkTarget;
        rel: string | null;
        tabindex: unknown;
        'aria-disabled': boolean | null;
    }>;
    link: import("vue").Ref<HTMLElement>;
    clicked: (e: MouseEvent) => void;
    activeBoolean: Readonly<import("vue").Ref<boolean | undefined>>;
    appendBoolean: Readonly<import("vue").Ref<boolean>>;
    disabledBoolean: Readonly<import("vue").Ref<boolean>>;
    replaceBoolean: Readonly<import("vue").Ref<boolean>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: PropType<Booleanish>;
        default: undefined;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    event: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    href: {
        type: StringConstructor;
    };
    rel: {
        type: StringConstructor;
        default: null;
    };
    replace: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    routerComponentName: {
        type: StringConstructor;
        default: string;
    };
    routerTag: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: PropType<LinkTarget>;
        default: string;
    };
    to: {
        type: PropType<RouteLocationRaw>;
        default: null;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: Booleanish;
    event: string | unknown[];
    routerTag: string;
    active: Booleanish;
    activeClass: string;
    append: Booleanish;
    rel: string;
    replace: Booleanish;
    routerComponentName: string;
    target: LinkTarget;
    to: RouteLocationRaw;
}>;
export default _sfc_main;
