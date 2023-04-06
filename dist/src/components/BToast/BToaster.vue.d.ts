import type { PropType as __PropType } from 'vue';
import type { ToastInstance } from '../BToast/plugin';
declare const _sfc_main: import("vue").DefineComponent<{
    position: {
        type: __PropType<"bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right" | "middle-center" | "middle-left" | "middle-right" | undefined>;
        required: false;
        default: string;
    };
    instance: {
        type: __PropType<ToastInstance | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: __PropType<"bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right" | "middle-center" | "middle-left" | "middle-right" | undefined>;
        required: false;
        default: string;
    };
    instance: {
        type: __PropType<ToastInstance | undefined>;
        required: false;
    };
}>>, {
    position: "bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right" | "middle-center" | "middle-left" | "middle-right" | undefined;
}>;
export default _sfc_main;
