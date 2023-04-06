import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    ariaLabel: {
        type: __PropType<string | undefined>;
        required: false;
    };
    ariaLabelledby: {
        type: __PropType<string | undefined>;
        required: false;
    };
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    size: {
        type: __PropType<keyof import("../../types").BaseInputSize | undefined>;
        required: false;
    };
    autofocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<string | number | boolean | unknown[] | Record<string, unknown> | undefined>;
        required: false;
        default: undefined;
    };
    plain: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    button: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
        default: string;
    };
    inline: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    required: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    value: {
        type: __PropType<string | number | boolean | Record<string, unknown> | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "update:modelValue" | "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaLabel: {
        type: __PropType<string | undefined>;
        required: false;
    };
    ariaLabelledby: {
        type: __PropType<string | undefined>;
        required: false;
    };
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    size: {
        type: __PropType<keyof import("../../types").BaseInputSize | undefined>;
        required: false;
    };
    autofocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<string | number | boolean | unknown[] | Record<string, unknown> | undefined>;
        required: false;
        default: undefined;
    };
    plain: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    button: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
        default: string;
    };
    inline: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    required: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    value: {
        type: __PropType<string | number | boolean | Record<string, unknown> | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    required: Booleanish | undefined;
    modelValue: string | number | boolean | unknown[] | Record<string, unknown> | undefined;
    button: Booleanish | undefined;
    disabled: Booleanish | undefined;
    value: string | number | boolean | Record<string, unknown> | undefined;
    inline: Booleanish | undefined;
    autofocus: Booleanish | undefined;
    plain: Booleanish | undefined;
    buttonVariant: keyof import("../../types").BaseButtonVariant | undefined;
    state: Booleanish | undefined;
}>;
export default _sfc_main;
