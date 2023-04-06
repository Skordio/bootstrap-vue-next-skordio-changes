import type { PropType as __PropType } from 'vue';
import type { PlaceholderAnimation } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    width: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    cols: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    animation: {
        type: __PropType<PlaceholderAnimation | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    width: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    cols: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    animation: {
        type: __PropType<PlaceholderAnimation | undefined>;
        required: false;
    };
}>>, {
    variant: keyof import("../../types").BaseColorVariant | undefined;
    tag: string | undefined;
}>;
export default _sfc_main;
