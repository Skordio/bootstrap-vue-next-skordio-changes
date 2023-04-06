import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    bodyBgVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    bodyClass: {
        type: __PropType<any>;
        required: false;
    };
    bodyTextVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    busy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    lazy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonSize: {
        type: __PropType<keyof import("../types").BaseInputSize | undefined>;
        required: false;
        default: string;
    };
    cancelDisabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    cancelTitle: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    cancelVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    centered: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    contentClass: {
        type: __PropType<any>;
        required: false;
    };
    dialogClass: {
        type: __PropType<any>;
        required: false;
    };
    footerBgVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    footerBorderVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    footerClass: {
        type: __PropType<any>;
        required: false;
    };
    footerTextVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    fullscreen: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    headerBgVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    headerBorderVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    headerClass: {
        type: __PropType<any>;
        required: false;
    };
    headerCloseLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    headerCloseWhite: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    headerTextVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    hideBackdrop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hideFooter: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hideHeader: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hideHeaderClose: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modalClass: {
        type: __PropType<any>;
        required: false;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCloseOnBackdrop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCloseOnEsc: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noFade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    autoFocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    okDisabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    okOnly: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    okTitle: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    okVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    scrollable: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    show: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    size: {
        type: __PropType<"sm" | "lg" | "xl" | undefined>;
        required: false;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    titleClass: {
        type: __PropType<string | undefined>;
        required: false;
    };
    titleSrOnly: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    titleTag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    static: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    autoFocusButton: {
        type: __PropType<"close" | "ok" | "cancel" | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented" | "close" | "ok" | "cancel")[], "update:modelValue" | "show" | "shown" | "hide" | "hidden" | "hide-prevented" | "show-prevented" | "close" | "ok" | "cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    bodyBgVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    bodyClass: {
        type: __PropType<any>;
        required: false;
    };
    bodyTextVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    busy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    lazy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonSize: {
        type: __PropType<keyof import("../types").BaseInputSize | undefined>;
        required: false;
        default: string;
    };
    cancelDisabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    cancelTitle: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    cancelVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    centered: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    contentClass: {
        type: __PropType<any>;
        required: false;
    };
    dialogClass: {
        type: __PropType<any>;
        required: false;
    };
    footerBgVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    footerBorderVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    footerClass: {
        type: __PropType<any>;
        required: false;
    };
    footerTextVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    fullscreen: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    headerBgVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    headerBorderVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    headerClass: {
        type: __PropType<any>;
        required: false;
    };
    headerCloseLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    headerCloseWhite: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    headerTextVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
    };
    hideBackdrop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hideFooter: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hideHeader: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hideHeaderClose: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modalClass: {
        type: __PropType<any>;
        required: false;
    };
    modelValue: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCloseOnBackdrop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noCloseOnEsc: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noFade: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    autoFocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    okDisabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    okOnly: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    okTitle: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    okVariant: {
        type: __PropType<keyof import("../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    scrollable: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    show: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    size: {
        type: __PropType<"sm" | "lg" | "xl" | undefined>;
        required: false;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
    };
    titleClass: {
        type: __PropType<string | undefined>;
        required: false;
    };
    titleSrOnly: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    titleTag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    static: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    autoFocusButton: {
        type: __PropType<"close" | "ok" | "cancel" | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    "onHide-prevented"?: ((...args: any[]) => any) | undefined;
    "onShow-prevented"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onOk?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Booleanish | undefined;
    titleTag: string | undefined;
    lazy: Booleanish | undefined;
    show: Booleanish | undefined;
    busy: Booleanish | undefined;
    buttonSize: keyof import("../types").BaseInputSize | undefined;
    cancelDisabled: Booleanish | undefined;
    cancelTitle: string | undefined;
    cancelVariant: keyof import("../types").BaseColorVariant | undefined;
    centered: Booleanish | undefined;
    fullscreen: string | boolean | undefined;
    headerCloseLabel: string | undefined;
    headerCloseWhite: Booleanish | undefined;
    hideBackdrop: Booleanish | undefined;
    hideFooter: Booleanish | undefined;
    hideHeader: Booleanish | undefined;
    hideHeaderClose: Booleanish | undefined;
    noCloseOnBackdrop: Booleanish | undefined;
    noCloseOnEsc: Booleanish | undefined;
    noFade: Booleanish | undefined;
    autoFocus: Booleanish | undefined;
    okDisabled: Booleanish | undefined;
    okOnly: Booleanish | undefined;
    okTitle: string | undefined;
    okVariant: keyof import("../types").BaseColorVariant | undefined;
    scrollable: Booleanish | undefined;
    titleSrOnly: Booleanish | undefined;
    static: Booleanish | undefined;
}>;
export default _sfc_main;
