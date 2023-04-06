import type { PropType as __PropType } from 'vue';
import type { Strategy } from '@floating-ui/vue';
import type { Booleanish, Size } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: __PropType<string | undefined>;
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
    size: {
        type: __PropType<Size>;
        required: false;
    };
    offset: {
        type: __PropType<string | undefined>;
        required: false;
    };
    autoClose: {
        type: __PropType<boolean | "inside" | "outside" | undefined>;
        required: false;
    };
    dark: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    splitVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
    };
    noCaret: {
        type: __PropType<Booleanish | undefined>;
        required: false;
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
    };
    strategy: {
        type: __PropType<Strategy | undefined>;
        required: false;
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
    noFlip: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    noShift: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    dropup: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    dropend: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    dropstart: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    alignStart: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    alignEnd: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    menuClass: {
        type: __PropType<any>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string | undefined>;
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
    size: {
        type: __PropType<Size>;
        required: false;
    };
    offset: {
        type: __PropType<string | undefined>;
        required: false;
    };
    autoClose: {
        type: __PropType<boolean | "inside" | "outside" | undefined>;
        required: false;
    };
    dark: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    splitVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
    };
    noCaret: {
        type: __PropType<Booleanish | undefined>;
        required: false;
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
    };
    strategy: {
        type: __PropType<Strategy | undefined>;
        required: false;
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
    noFlip: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    noShift: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    dropup: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    dropend: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    dropstart: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    alignStart: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    alignEnd: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    menuClass: {
        type: __PropType<any>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Booleanish | undefined;
    variant: keyof import("../../types").BaseButtonVariant | undefined;
}>;
export default _sfc_main;
