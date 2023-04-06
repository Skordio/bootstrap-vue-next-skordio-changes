import type { PropType as __PropType } from 'vue';
import type { AriaInvalid, Booleanish, Size } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<(string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown>)[] | undefined>;
        required: false;
        default: () => never[];
    };
    ariaInvalid: {
        type: __PropType<AriaInvalid | undefined>;
        required: false;
        default: undefined;
    };
    autofocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
        default: string;
    };
    buttons: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabledField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    htmlField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    options: {
        type: __PropType<(string | Record<string, unknown>)[] | undefined>;
        required: false;
        default: () => never[];
    };
    plain: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    required: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    size: {
        type: __PropType<Size>;
        required: false;
    };
    stacked: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    switches: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    textField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    validated: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    valueField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "update:modelValue" | "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<(string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown>)[] | undefined>;
        required: false;
        default: () => never[];
    };
    ariaInvalid: {
        type: __PropType<AriaInvalid | undefined>;
        required: false;
        default: undefined;
    };
    autofocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    buttonVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
        default: string;
    };
    buttons: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabled: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    disabledField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    htmlField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    options: {
        type: __PropType<(string | Record<string, unknown>)[] | undefined>;
        required: false;
        default: () => never[];
    };
    plain: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    required: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    size: {
        type: __PropType<Size>;
        required: false;
    };
    stacked: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    switches: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    textField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    validated: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    valueField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    required: Booleanish | undefined;
    modelValue: (string | number | boolean | unknown[] | Set<unknown> | Record<string, unknown>)[] | undefined;
    disabled: Booleanish | undefined;
    options: (string | Record<string, unknown>)[] | undefined;
    validated: Booleanish | undefined;
    autofocus: Booleanish | undefined;
    plain: Booleanish | undefined;
    buttonVariant: keyof import("../../types").BaseButtonVariant | undefined;
    state: Booleanish | undefined;
    ariaInvalid: AriaInvalid | undefined;
    buttons: Booleanish | undefined;
    disabledField: string | undefined;
    htmlField: string | undefined;
    stacked: Booleanish | undefined;
    switches: Booleanish | undefined;
    textField: string | undefined;
    valueField: string | undefined;
}>;
export default _sfc_main;
