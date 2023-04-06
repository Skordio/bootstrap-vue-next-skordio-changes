import type { PropType as __PropType } from 'vue';
import { type Placement, type Strategy } from '@floating-ui/vue';
import { type ComponentPublicInstance, type VNode } from 'vue';
import type { Booleanish } from '../types';
interface DelayObject {
    show: number;
    hide: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    container: {
        type: __PropType<string | HTMLElement | ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null | undefined>;
        required: false;
        default: null;
    };
    target: {
        type: __PropType<string | HTMLElement | ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | (() => HTMLElement | VNode) | HTMLSpanElement | null | undefined>;
        required: false;
        default: null;
    };
    reference: {
        type: __PropType<string | HTMLElement | ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | HTMLSpanElement | (() => HTMLElement | VNode) | null | undefined>;
        required: false;
        default: null;
    };
    content: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    delay: {
        type: __PropType<number | DelayObject | undefined>;
        required: false;
        default: () => {
            show: number;
            hide: number;
        };
    };
    click: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    manual: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
        default: undefined;
    };
    offset: {
        type: __PropType<number | null | undefined>;
        required: false;
        default: null;
    };
    customClass: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    placement: {
        type: __PropType<Placement | undefined>;
        required: false;
        default: string;
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
                placement: Placement;
                x: number;
                y: number;
                initialPlacement: Placement;
                middlewareData: import("@floating-ui/vue").MiddlewareData;
                rects: import("@floating-ui/vue").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/vue").Elements;
            }) => import("@floating-ui/vue").MiddlewareReturn | Promise<import("@floating-ui/vue").MiddlewareReturn>;
        }[] | undefined>;
        required: false;
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
    noFade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noAutoClose: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hide: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    realtime: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    inline: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tooltip: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    html: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented")[], "update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    container: {
        type: __PropType<string | HTMLElement | ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null | undefined>;
        required: false;
        default: null;
    };
    target: {
        type: __PropType<string | HTMLElement | ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | (() => HTMLElement | VNode) | HTMLSpanElement | null | undefined>;
        required: false;
        default: null;
    };
    reference: {
        type: __PropType<string | HTMLElement | ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | HTMLSpanElement | (() => HTMLElement | VNode) | null | undefined>;
        required: false;
        default: null;
    };
    content: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    delay: {
        type: __PropType<number | DelayObject | undefined>;
        required: false;
        default: () => {
            show: number;
            hide: number;
        };
    };
    click: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    manual: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
        default: undefined;
    };
    offset: {
        type: __PropType<number | null | undefined>;
        required: false;
        default: null;
    };
    customClass: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    placement: {
        type: __PropType<Placement | undefined>;
        required: false;
        default: string;
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
                placement: Placement;
                x: number;
                y: number;
                initialPlacement: Placement;
                middlewareData: import("@floating-ui/vue").MiddlewareData;
                rects: import("@floating-ui/vue").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/vue").Elements;
            }) => import("@floating-ui/vue").MiddlewareReturn | Promise<import("@floating-ui/vue").MiddlewareReturn>;
        }[] | undefined>;
        required: false;
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
    noFade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noAutoClose: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hide: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    realtime: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    inline: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tooltip: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    html: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    "onHide-prevented"?: ((...args: any[]) => any) | undefined;
    "onShow-prevented"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Booleanish | undefined;
    variant: keyof import("../types").BaseColorVariant | undefined;
    click: Booleanish | undefined;
    target: string | HTMLElement | ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | (() => HTMLElement | VNode) | HTMLSpanElement | null | undefined;
    inline: Booleanish | undefined;
    html: Booleanish | undefined;
    offset: number | null | undefined;
    hide: Booleanish | undefined;
    noFlip: Booleanish | undefined;
    noShift: Booleanish | undefined;
    strategy: Strategy | undefined;
    tooltip: Booleanish | undefined;
    noFade: Booleanish | undefined;
    container: string | HTMLElement | ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null | undefined;
    placement: Placement | undefined;
    reference: string | HTMLElement | ComponentPublicInstance<HTMLElement, {}, {}, {}, {}, {}, HTMLElement, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | HTMLSpanElement | (() => HTMLElement | VNode) | null | undefined;
    delay: number | DelayObject | undefined;
    manual: Booleanish | undefined;
    customClass: string | undefined;
    noAutoClose: Booleanish | undefined;
    realtime: Booleanish | undefined;
}>;
export default _sfc_main;
