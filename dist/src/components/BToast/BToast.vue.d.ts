import { type PropType, type VNode } from 'vue';
import type { Booleanish } from '../../types';
export declare const SLOT_NAME_TOAST_TITLE = "toast-title";
declare const _sfc_main: import("vue").DefineComponent<{
    delay: {
        type: NumberConstructor;
        default: number;
    };
    bodyClass: {
        type: StringConstructor;
    };
    body: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | undefined>;
    };
    headerClass: {
        type: StringConstructor;
    };
    headerTag: {
        type: StringConstructor;
        default: string;
    };
    animation: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    isStatus: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    autoHide: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    noCloseButton: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    noFade: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    noHoverPause: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    solid: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    static: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    modelValue: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    toastClass: {
        type: PropType<string[]>;
    };
    variant: {
        type: PropType<keyof import("../../types").BaseColorVariant>;
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "destroyed")[], "update:modelValue" | "destroyed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    delay: {
        type: NumberConstructor;
        default: number;
    };
    bodyClass: {
        type: StringConstructor;
    };
    body: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | undefined>;
    };
    headerClass: {
        type: StringConstructor;
    };
    headerTag: {
        type: StringConstructor;
        default: string;
    };
    animation: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    isStatus: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    autoHide: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    noCloseButton: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    noFade: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    noHoverPause: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    solid: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    static: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    modelValue: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    toastClass: {
        type: PropType<string[]>;
    };
    variant: {
        type: PropType<keyof import("../../types").BaseColorVariant>;
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
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDestroyed?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Booleanish;
    headerTag: string;
    noHoverPause: Booleanish;
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
    noFade: Booleanish;
    static: Booleanish;
    animation: Booleanish;
    delay: number;
    isStatus: Booleanish;
    autoHide: Booleanish;
    noCloseButton: Booleanish;
    solid: Booleanish;
}>;
export default _sfc_main;
