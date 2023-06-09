import type { Booleanish } from '../../types';
import { type CSSProperties, type PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    noResize: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    wrap: {
        type: StringConstructor;
        default: string;
    };
    ariaInvalid: {
        type: PropType<import("../../types/AriaInvalid").default>;
        default: undefined;
    };
    autocomplete: {
        type: StringConstructor;
        required: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    form: {
        type: StringConstructor;
        required: boolean;
    };
    formatter: {
        type: FunctionConstructor;
        required: boolean;
    };
    id: {
        type: StringConstructor;
        required: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyFormatter: {
        type: BooleanConstructor;
        default: boolean;
    };
    list: {
        type: StringConstructor;
        required: boolean;
    };
    modelValue: {
        type: PropType<string | number>;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: boolean;
    };
    number: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: boolean;
    };
    plaintext: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<import("../../types/Size").default>;
        required: boolean;
    };
    state: {
        type: PropType<boolean | null | undefined>;
        default: null;
    };
    trim: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    input: import("vue").Ref<HTMLInputElement | undefined>;
    computedId: import("vue").ComputedRef<string>;
    computedAriaInvalid: import("vue").ComputedRef<boolean | "true" | "false" | "grammar" | "spelling" | undefined>;
    onInput: (evt: Event) => void;
    onChange: (evt: Event) => void;
    onBlur: (evt: FocusEvent) => void;
    focus: () => void;
    blur: () => void;
    computedClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
        'form-control': boolean;
        'form-control-plaintext': boolean;
        'is-valid': boolean;
        'is-invalid': boolean;
    }>;
    computedStyles: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change" | "blur")[], "update:modelValue" | "input" | "change" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    noResize: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    wrap: {
        type: StringConstructor;
        default: string;
    };
    ariaInvalid: {
        type: PropType<import("../../types/AriaInvalid").default>;
        default: undefined;
    };
    autocomplete: {
        type: StringConstructor;
        required: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    form: {
        type: StringConstructor;
        required: boolean;
    };
    formatter: {
        type: FunctionConstructor;
        required: boolean;
    };
    id: {
        type: StringConstructor;
        required: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyFormatter: {
        type: BooleanConstructor;
        default: boolean;
    };
    list: {
        type: StringConstructor;
        required: boolean;
    };
    modelValue: {
        type: PropType<string | number>;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: boolean;
    };
    number: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: boolean;
    };
    plaintext: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<import("../../types/Size").default>;
        required: boolean;
    };
    state: {
        type: PropType<boolean | null | undefined>;
        default: null;
    };
    trim: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    number: boolean;
    required: boolean;
    modelValue: string | number;
    disabled: boolean;
    trim: boolean;
    lazy: boolean;
    autofocus: boolean;
    state: boolean | null | undefined;
    ariaInvalid: import("../../types/AriaInvalid").default;
    lazyFormatter: boolean;
    plaintext: boolean;
    readonly: boolean;
    noResize: Booleanish;
    rows: string | number;
    wrap: string;
}>;
export default _sfc_main;
