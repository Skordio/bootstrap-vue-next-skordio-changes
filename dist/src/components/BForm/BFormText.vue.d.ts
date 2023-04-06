import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    inline: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    text: {
        type: __PropType<string | undefined>;
        required: false;
    };
    textVariant: {
        type: __PropType<keyof import("../../types").BaseTextColorVariant | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    inline: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    text: {
        type: __PropType<string | undefined>;
        required: false;
    };
    textVariant: {
        type: __PropType<keyof import("../../types").BaseTextColorVariant | undefined>;
        required: false;
        default: string;
    };
}>>, {
    textVariant: keyof import("../../types").BaseTextColorVariant | undefined;
    tag: string | undefined;
    inline: Booleanish | undefined;
}>;
export default _sfc_main;
