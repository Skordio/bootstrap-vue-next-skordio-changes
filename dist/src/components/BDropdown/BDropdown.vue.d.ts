import type { PropType as __PropType } from 'vue';
import { type Strategy } from '@floating-ui/vue';
import type { Booleanish, ButtonType, Size } from '../../types';
import type { RouteLocationRaw } from 'vue-router';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    menuClass: {
        type: __PropType<any>;
        required: false;
    };
    size: {
        type: __PropType<Size>;
        required: false;
    };
    splitClass: {
        type: __PropType<any>;
        required: false;
    };
    splitVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
    };
    text: {
        type: __PropType<string | undefined>;
        required: false;
    };
    toggleClass: {
        type: __PropType<any>;
        required: false;
    };
    autoClose: {
        type: __PropType<boolean | "inside" | "outside" | undefined>;
        required: false;
        default: boolean;
    };
    block: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dark: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    isNav: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dropup: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dropend: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dropstart: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    center: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    end: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noFlip: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noShift: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    offset: {
        type: __PropType<string | number | {
            mainAxis?: number | undefined;
            crossAxis?: number | undefined;
            alignmentAxis?: number | null | undefined;
        } | undefined>;
        required: false;
        default: number;
    };
    role: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    split: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    splitButtonType: {
        type: __PropType<ButtonType | undefined>;
        required: false;
        default: string;
    };
    splitHref: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    splitDisabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    noCaret: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    toggleText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    lazy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    strategy: {
        type: __PropType<Strategy | undefined>;
        required: false;
        default: string;
    };
    floatingMiddleware: {
        type: __PropType<{
            name: string;
            options?: any;
            fn: (state: {
                strategy: Strategy;
                placement: import("@floating-ui/vue").Placement;
                x: number;
                y: number;
                initialPlacement: import("@floating-ui/vue").Placement;
                middlewareData: import("@floating-ui/vue").MiddlewareData;
                rects: import("@floating-ui/vue").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/vue").Elements;
            }) => import("@floating-ui/vue").MiddlewareReturn | Promise<import("@floating-ui/vue").MiddlewareReturn>;
        }[] | undefined>;
        required: false;
    };
    splitTo: {
        type: __PropType<RouteLocationRaw | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "click" | "toggle" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented")[], "update:modelValue" | "click" | "toggle" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    menuClass: {
        type: __PropType<any>;
        required: false;
    };
    size: {
        type: __PropType<Size>;
        required: false;
    };
    splitClass: {
        type: __PropType<any>;
        required: false;
    };
    splitVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
    };
    text: {
        type: __PropType<string | undefined>;
        required: false;
    };
    toggleClass: {
        type: __PropType<any>;
        required: false;
    };
    autoClose: {
        type: __PropType<boolean | "inside" | "outside" | undefined>;
        required: false;
        default: boolean;
    };
    block: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dark: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    isNav: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dropup: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dropend: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    dropstart: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    center: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    end: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noFlip: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noShift: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    offset: {
        type: __PropType<string | number | {
            mainAxis?: number | undefined;
            crossAxis?: number | undefined;
            alignmentAxis?: number | null | undefined;
        } | undefined>;
        required: false;
        default: number;
    };
    role: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    split: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    splitButtonType: {
        type: __PropType<ButtonType | undefined>;
        required: false;
        default: string;
    };
    splitHref: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    splitDisabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    noCaret: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    toggleText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    lazy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    strategy: {
        type: __PropType<Strategy | undefined>;
        required: false;
        default: string;
    };
    floatingMiddleware: {
        type: __PropType<{
            name: string;
            options?: any;
            fn: (state: {
                strategy: Strategy;
                placement: import("@floating-ui/vue").Placement;
                x: number;
                y: number;
                initialPlacement: import("@floating-ui/vue").Placement;
                middlewareData: import("@floating-ui/vue").MiddlewareData;
                rects: import("@floating-ui/vue").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/vue").Elements;
            }) => import("@floating-ui/vue").MiddlewareReturn | Promise<import("@floating-ui/vue").MiddlewareReturn>;
        }[] | undefined>;
        required: false;
    };
    splitTo: {
        type: __PropType<RouteLocationRaw | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    "onHide-prevented"?: ((...args: any[]) => any) | undefined;
    "onShow-prevented"?: ((...args: any[]) => any) | undefined;
    onToggle?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Booleanish | undefined;
    variant: keyof import("../../types").BaseButtonVariant | undefined;
    dark: Booleanish | undefined;
    disabled: Booleanish | undefined;
    split: Booleanish | undefined;
    role: string | undefined;
    end: Booleanish | undefined;
    center: Booleanish | undefined;
    lazy: Booleanish | undefined;
    offset: string | number | {
        mainAxis?: number | undefined;
        crossAxis?: number | undefined;
        alignmentAxis?: number | null | undefined;
    } | undefined;
    isNav: Booleanish | undefined;
    autoClose: boolean | "inside" | "outside" | undefined;
    block: Booleanish | undefined;
    dropup: Booleanish | undefined;
    dropend: Booleanish | undefined;
    dropstart: Booleanish | undefined;
    noFlip: Booleanish | undefined;
    noShift: Booleanish | undefined;
    splitButtonType: ButtonType | undefined;
    splitHref: string | undefined;
    noCaret: Booleanish | undefined;
    toggleText: string | undefined;
    strategy: Strategy | undefined;
}>;
export default _sfc_main;
