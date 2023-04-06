import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    text: {
        type: __PropType<string | undefined>;
        required: false;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    textVariant: {
        type: __PropType<keyof import("../../types").BaseTextColorVariant | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: __PropType<string | undefined>;
        required: false;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    textVariant: {
        type: __PropType<keyof import("../../types").BaseTextColorVariant | undefined>;
        required: false;
        default: string;
    };
}>>, {
    textVariant: keyof import("../../types").BaseTextColorVariant | undefined;
    tag: string | undefined;
}>;
export default _sfc_main;
