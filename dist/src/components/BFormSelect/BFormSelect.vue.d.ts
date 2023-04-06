import type { PropType as __PropType } from 'vue';
import type { AriaInvalid, Booleanish, Size } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
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
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    htmlField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    labelField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    multiple: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    options: {
        type: __PropType<unknown[] | Record<string, unknown> | undefined>;
        required: false;
        default: () => never[];
    };
    optionsField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
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
    selectSize: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    size: {
        type: __PropType<Size>;
        required: false;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    textField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    valueField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<string | number | unknown[] | Record<string, unknown> | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "update:modelValue" | "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    htmlField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    id: {
        type: __PropType<string | undefined>;
        required: false;
    };
    labelField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    multiple: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    options: {
        type: __PropType<unknown[] | Record<string, unknown> | undefined>;
        required: false;
        default: () => never[];
    };
    optionsField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
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
    selectSize: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    size: {
        type: __PropType<Size>;
        required: false;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    textField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    valueField: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<string | number | unknown[] | Record<string, unknown> | undefined>;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    required: Booleanish | undefined;
    modelValue: string | number | unknown[] | Record<string, unknown> | undefined;
    disabled: Booleanish | undefined;
    options: unknown[] | Record<string, unknown> | undefined;
    autofocus: Booleanish | undefined;
    plain: Booleanish | undefined;
    state: Booleanish | undefined;
    ariaInvalid: AriaInvalid | undefined;
    disabledField: string | undefined;
    htmlField: string | undefined;
    textField: string | undefined;
    valueField: string | undefined;
    labelField: string | undefined;
    multiple: Booleanish | undefined;
    optionsField: string | undefined;
    selectSize: number | undefined;
}>;
export default _sfc_main;
