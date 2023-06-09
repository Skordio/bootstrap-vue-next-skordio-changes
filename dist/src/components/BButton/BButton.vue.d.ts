import { type PropType } from 'vue';
import type { Booleanish, ButtonType, LinkTarget } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    active: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        required: false;
    };
    pill: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    pressed: {
        type: PropType<Booleanish>;
        default: null;
    };
    rel: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: PropType<keyof import("../../types").BaseInputSize>;
        default: string;
    };
    squared: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: PropType<LinkTarget>;
        default: string;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    variant: {
        type: PropType<keyof import("../../types").BaseButtonVariant>;
        default: string;
    };
    loading: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    loadingMode: {
        type: PropType<"fill" | "inline">;
        default: string;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    event: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
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
    to: {
        type: PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
}, {
    computedClasses: import("vue").ComputedRef<(string[] | {
        active: boolean;
        'rounded-pill': boolean;
        'rounded-0': boolean;
        disabled: boolean;
    })[]>;
    computedAttrs: import("vue").ComputedRef<{
        'aria-disabled': boolean | null;
        'aria-pressed': boolean | null;
        autocomplete: string | null;
        disabled: boolean | null;
        href: string | undefined;
        rel: string | null | undefined;
        role: string | null;
        target: LinkTarget | null;
        type: ButtonType | null;
        to: import("vue-router").RouteLocationRaw | null;
        append: Booleanish | null;
        activeClass: string | null;
        event: string | unknown[] | null;
        replace: Booleanish | null;
        routerComponentName: string | null;
        routerTag: string | null;
    }>;
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
            type: PropType<LinkTarget>;
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
        target: LinkTarget;
        to: import("vue-router").RouteLocationRaw;
    }>>;
    clicked: (e: MouseEvent) => void;
    loadingBoolean: Readonly<import("vue").Ref<boolean>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:pressed")[], "click" | "update:pressed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        required: false;
    };
    pill: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    pressed: {
        type: PropType<Booleanish>;
        default: null;
    };
    rel: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: PropType<keyof import("../../types").BaseInputSize>;
        default: string;
    };
    squared: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: PropType<LinkTarget>;
        default: string;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    variant: {
        type: PropType<keyof import("../../types").BaseButtonVariant>;
        default: string;
    };
    loading: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    loadingMode: {
        type: PropType<"fill" | "inline">;
        default: string;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    event: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
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
    to: {
        type: PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:pressed"?: ((...args: any[]) => any) | undefined;
}, {
    type: ButtonType;
    variant: keyof import("../../types").BaseButtonVariant;
    disabled: Booleanish;
    size: keyof import("../../types").BaseInputSize;
    tag: string;
    event: string | unknown[];
    routerTag: string;
    active: Booleanish;
    activeClass: string;
    append: Booleanish;
    rel: string;
    replace: Booleanish;
    routerComponentName: string;
    target: LinkTarget;
    to: import("vue-router").RouteLocationRaw;
    pill: Booleanish;
    pressed: Booleanish;
    squared: Booleanish;
    loading: Booleanish;
    loadingMode: "fill" | "inline";
}>;
export default _sfc_main;
