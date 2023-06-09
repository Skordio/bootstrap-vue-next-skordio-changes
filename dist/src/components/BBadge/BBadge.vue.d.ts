import { type PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
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
    pill: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: PropType<keyof import("../../types").BaseColorVariant>;
        default: string;
    };
    textIndicator: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    dotIndicator: {
        type: PropType<Booleanish>;
        default: boolean;
    };
}, {
    computedClasses: import("vue").ComputedRef<(string[] | {
        active: boolean | undefined;
        disabled: boolean;
        'text-dark': boolean;
        'rounded-pill': boolean;
        'position-absolute top-0 start-100 translate-middle': boolean;
        'p-2 border border-light rounded-circle': boolean;
        'text-decoration-none': boolean;
    })[]>;
    computedLinkProps: import("vue").ComputedRef<{}>;
    computedTag: import("vue").ComputedRef<string | import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
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
    pill: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: PropType<keyof import("../../types").BaseColorVariant>;
        default: string;
    };
    textIndicator: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    dotIndicator: {
        type: PropType<Booleanish>;
        default: boolean;
    };
}>>, {
    variant: keyof import("../../types").BaseColorVariant;
    disabled: Booleanish;
    tag: string;
    active: Booleanish;
    activeClass: string;
    append: Booleanish;
    rel: string;
    replace: Booleanish;
    routerComponentName: string;
    target: import("../../types/LinkTarget").default;
    to: import("vue-router").RouteLocationRaw;
    pill: Booleanish;
    textIndicator: Booleanish;
    dotIndicator: Booleanish;
}>;
export default _sfc_main;
