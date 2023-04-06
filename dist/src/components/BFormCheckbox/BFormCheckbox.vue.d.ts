import type { PropType as __PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    ariaLabel: {
        type: __PropType<string | undefined>;
        required: false;
    };
    ariaLabelledBy: {
        type: __PropType<string | undefined>;
        required: false;
    };
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    indeterminate: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    autofocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
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
    switch: {
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
        default: undefined;
    };
    size: {
        type: __PropType<keyof import("../../types").BaseInputSize | undefined>;
        required: false;
        default: string;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    uncheckedValue: {
        type: __PropType<string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown> | undefined>;
        required: false;
        default: boolean;
    };
    value: {
        type: __PropType<string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown> | undefined>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown> | undefined>;
        required: false;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "update:modelValue" | "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaLabel: {
        type: __PropType<string | undefined>;
        required: false;
    };
    ariaLabelledBy: {
        type: __PropType<string | undefined>;
        required: false;
    };
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    indeterminate: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    autofocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
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
    switch: {
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
        default: undefined;
    };
    size: {
        type: __PropType<keyof import("../../types").BaseInputSize | undefined>;
        required: false;
        default: string;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    uncheckedValue: {
        type: __PropType<string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown> | undefined>;
        required: false;
        default: boolean;
    };
    value: {
        type: __PropType<string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown> | undefined>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown> | undefined>;
        required: false;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    id: string | undefined;
    required: Booleanish | undefined;
    modelValue: string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown> | undefined;
    button: Booleanish | undefined;
    disabled: Booleanish | undefined;
    size: keyof import("../../types").BaseInputSize | undefined;
    value: string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown> | undefined;
    inline: Booleanish | undefined;
    autofocus: Booleanish | undefined;
    plain: Booleanish | undefined;
    switch: Booleanish | undefined;
    buttonVariant: keyof import("../../types").BaseButtonVariant | undefined;
    state: Booleanish | undefined;
    uncheckedValue: string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown> | undefined;
}>;
export default _sfc_main;
