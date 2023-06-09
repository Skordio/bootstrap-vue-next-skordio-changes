import { type PropType } from 'vue';
import type { Booleanish } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    ariaControls: {
        type: StringConstructor;
        required: false;
    };
    ariaLabel: {
        type: StringConstructor;
        required: false;
    };
    labelIncrement: {
        type: StringConstructor;
        default: string;
    };
    labelDecrement: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<number | null>;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    formatterFn: {
        type: PropType<(value: number) => any>;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    repeatDelay: {
        type: PropType<string | number>;
        default: number;
    };
    repeatInterval: {
        type: PropType<string | number>;
        default: number;
    };
    repeatStepMultiplier: {
        type: PropType<string | number>;
        default: number;
    };
    repeatThreshold: {
        type: PropType<string | number>;
        default: number;
    };
    required: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    step: {
        type: PropType<string | number>;
        default: number;
    };
    min: {
        type: PropType<string | number>;
        default: number;
    };
    max: {
        type: PropType<string | number>;
        default: number;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<Booleanish | null>;
        default: null;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaControls: {
        type: StringConstructor;
        required: false;
    };
    ariaLabel: {
        type: StringConstructor;
        required: false;
    };
    labelIncrement: {
        type: StringConstructor;
        default: string;
    };
    labelDecrement: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<number | null>;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
    form: {
        type: StringConstructor;
        required: false;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    formatterFn: {
        type: PropType<(value: number) => any>;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    repeatDelay: {
        type: PropType<string | number>;
        default: number;
    };
    repeatInterval: {
        type: PropType<string | number>;
        default: number;
    };
    repeatStepMultiplier: {
        type: PropType<string | number>;
        default: number;
    };
    repeatThreshold: {
        type: PropType<string | number>;
        default: number;
    };
    required: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    step: {
        type: PropType<string | number>;
        default: number;
    };
    min: {
        type: PropType<string | number>;
        default: number;
    };
    max: {
        type: PropType<string | number>;
        default: number;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<Booleanish | null>;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    required: Booleanish;
    modelValue: number | null;
    disabled: Booleanish;
    name: string;
    inline: boolean;
    vertical: boolean;
    state: Booleanish | null;
    max: string | number;
    min: string | number;
    step: string | number;
    readonly: boolean;
    wrap: boolean;
    locale: string;
    labelIncrement: string;
    labelDecrement: string;
    repeatDelay: string | number;
    repeatInterval: string | number;
    repeatStepMultiplier: string | number;
    repeatThreshold: string | number;
}>;
export default _sfc_main;
