import { type PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    active: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    ariaCurrent: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: PropType<Booleanish>;
        default: boolean;
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
    target: {
        type: PropType<import("../../types/LinkTarget").default>;
        default: string;
    };
    to: {
        type: PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
}, {
    computedLinkProps: import("vue").ComputedRef<{}>;
    computedClasses: import("vue").ComputedRef<{
        active: boolean;
    }>;
    computedTag: import("vue").ComputedRef<"span" | import("vue").DefineComponent<{
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
            type: PropType<import("../../types/LinkTarget").default>;
            default: string;
        };
        to: {
            type: PropType<import("vue-router").RouteLocationRaw>;
            default: null;
        };
    }, {
        computedLinkClasses: import("vue").ComputedRef<{
            active: boolean | undefined;
            disabled: boolean;
        }>;
        tag: import("vue").ComputedRef<string>;
        routerAttr: import("vue").ComputedRef<{
            to: import("vue-router").RouteLocationRaw;
            href: string;
            target: import("../../types/LinkTarget").default;
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
            type: PropType<import("../../types/LinkTarget").default>;
            default: string;
        };
        to: {
            type: PropType<import("vue-router").RouteLocationRaw>;
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
        target: import("../../types/LinkTarget").default;
        to: import("vue-router").RouteLocationRaw;
    }>>;
    computedAriaCurrent: import("vue").ComputedRef<string | undefined>;
    clicked: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    ariaCurrent: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: PropType<Booleanish>;
        default: boolean;
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
    target: {
        type: PropType<import("../../types/LinkTarget").default>;
        default: string;
    };
    to: {
        type: PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: Booleanish;
    active: Booleanish;
    activeClass: string;
    append: Booleanish;
    rel: string;
    replace: Booleanish;
    routerComponentName: string;
    target: import("../../types/LinkTarget").default;
    to: import("vue-router").RouteLocationRaw;
    ariaCurrent: string;
}>;
export default _sfc_main;
