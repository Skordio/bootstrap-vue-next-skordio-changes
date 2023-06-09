declare const _sfc_main: import("vue").DefineComponent<{
    disabled: {
        type: import("vue").PropType<import("../../types/Booleanish").default>;
        default: boolean;
    };
    active: {
        type: import("vue").PropType<import("../../types/Booleanish").default>;
        default: undefined;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: import("vue").PropType<import("../../types/Booleanish").default>;
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
        type: import("vue").PropType<import("../../types/Booleanish").default>;
        default: boolean;
    };
    routerComponentName: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: import("vue").PropType<import("../../types/LinkTarget").default>;
        default: string;
    };
    to: {
        type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {
    computedLinkProps: import("vue").ComputedRef<{}>;
    computedTag: import("vue").ComputedRef<string | import("vue").DefineComponent<{
        active: {
            type: import("vue").PropType<import("../../types/Booleanish").default>;
            default: undefined;
        };
        activeClass: {
            type: StringConstructor;
            default: string;
        };
        append: {
            type: import("vue").PropType<import("../../types/Booleanish").default>;
            default: boolean;
        };
        disabled: {
            type: import("vue").PropType<import("../../types/Booleanish").default>;
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
            type: import("vue").PropType<import("../../types/Booleanish").default>;
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
            type: import("vue").PropType<import("../../types/LinkTarget").default>;
            default: string;
        };
        to: {
            type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
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
            type: import("vue").PropType<import("../../types/Booleanish").default>;
            default: undefined;
        };
        activeClass: {
            type: StringConstructor;
            default: string;
        };
        append: {
            type: import("vue").PropType<import("../../types/Booleanish").default>;
            default: boolean;
        };
        disabled: {
            type: import("vue").PropType<import("../../types/Booleanish").default>;
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
            type: import("vue").PropType<import("../../types/Booleanish").default>;
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
            type: import("vue").PropType<import("../../types/LinkTarget").default>;
            default: string;
        };
        to: {
            type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
            default: null;
        };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
    }, {
        disabled: import("../../types/Booleanish").default;
        event: string | unknown[];
        routerTag: string;
        active: import("../../types/Booleanish").default;
        activeClass: string;
        append: import("../../types/Booleanish").default;
        rel: string;
        replace: import("../../types/Booleanish").default;
        routerComponentName: string;
        target: import("../../types/LinkTarget").default;
        to: import("vue-router").RouteLocationRaw;
    }>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: import("vue").PropType<import("../../types/Booleanish").default>;
        default: boolean;
    };
    active: {
        type: import("vue").PropType<import("../../types/Booleanish").default>;
        default: undefined;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: import("vue").PropType<import("../../types/Booleanish").default>;
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
        type: import("vue").PropType<import("../../types/Booleanish").default>;
        default: boolean;
    };
    routerComponentName: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: import("vue").PropType<import("../../types/LinkTarget").default>;
        default: string;
    };
    to: {
        type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    disabled: import("../../types/Booleanish").default;
    tag: string;
    active: import("../../types/Booleanish").default;
    activeClass: string;
    append: import("../../types/Booleanish").default;
    rel: string;
    replace: import("../../types/Booleanish").default;
    routerComponentName: string;
    target: import("../../types/LinkTarget").default;
    to: import("vue-router").RouteLocationRaw;
}>;
export default _sfc_main;
