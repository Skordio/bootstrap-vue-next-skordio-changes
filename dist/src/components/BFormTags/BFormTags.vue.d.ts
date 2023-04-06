import type { PropType as __PropType } from 'vue';
import type { Booleanish, InputType } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    addButtonText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    addButtonVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
        default: string;
    };
    addOnChange: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
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
    duplicateTagText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    inputAttrs: {
        type: __PropType<Record<string, unknown> | undefined>;
        required: false;
    };
    inputClass: {
        type: __PropType<any>;
        required: false;
    };
    inputId: {
        type: __PropType<string | undefined>;
        required: false;
    };
    inputType: {
        type: __PropType<InputType | undefined>;
        required: false;
        default: string;
    };
    invalidTagText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    limit: {
        type: __PropType<number | undefined>;
        required: false;
    };
    limitTagsText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<string[] | undefined>;
        required: false;
        default: () => never[];
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    noAddOnEnter: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noOuterFocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noTagRemove: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    removeOnDelete: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    required: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    separator: {
        type: __PropType<string | unknown[] | undefined>;
        required: false;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    size: {
        type: __PropType<keyof import("../../types").BaseInputSize | undefined>;
        required: false;
    };
    tagClass: {
        type: __PropType<any>;
        required: false;
    };
    tagPills: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tagRemoveLabel: {
        type: __PropType<string | undefined>;
        required: false;
    };
    tagRemovedLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    tagValidator: {
        type: __PropType<((t: string) => boolean) | undefined>;
        required: false;
        default: () => boolean;
    };
    tagVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "blur" | "focus" | "tag-state" | "focusin" | "focusout")[], "update:modelValue" | "input" | "blur" | "focus" | "tag-state" | "focusin" | "focusout", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    addButtonText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    addButtonVariant: {
        type: __PropType<keyof import("../../types").BaseButtonVariant | undefined>;
        required: false;
        default: string;
    };
    addOnChange: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
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
    duplicateTagText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    inputAttrs: {
        type: __PropType<Record<string, unknown> | undefined>;
        required: false;
    };
    inputClass: {
        type: __PropType<any>;
        required: false;
    };
    inputId: {
        type: __PropType<string | undefined>;
        required: false;
    };
    inputType: {
        type: __PropType<InputType | undefined>;
        required: false;
        default: string;
    };
    invalidTagText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    form: {
        type: __PropType<string | undefined>;
        required: false;
    };
    limit: {
        type: __PropType<number | undefined>;
        required: false;
    };
    limitTagsText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<string[] | undefined>;
        required: false;
        default: () => never[];
    };
    name: {
        type: __PropType<string | undefined>;
        required: false;
    };
    noAddOnEnter: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noOuterFocus: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    noTagRemove: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    removeOnDelete: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    required: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    separator: {
        type: __PropType<string | unknown[] | undefined>;
        required: false;
    };
    state: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: undefined;
    };
    size: {
        type: __PropType<keyof import("../../types").BaseInputSize | undefined>;
        required: false;
    };
    tagClass: {
        type: __PropType<any>;
        required: false;
    };
    tagPills: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    tagRemoveLabel: {
        type: __PropType<string | undefined>;
        required: false;
    };
    tagRemovedLabel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    tagValidator: {
        type: __PropType<((t: string) => boolean) | undefined>;
        required: false;
        default: () => boolean;
    };
    tagVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onTag-state"?: ((...args: any[]) => any) | undefined;
    onFocusin?: ((...args: any[]) => any) | undefined;
    onFocusout?: ((...args: any[]) => any) | undefined;
}, {
    required: Booleanish | undefined;
    modelValue: string[] | undefined;
    disabled: Booleanish | undefined;
    autofocus: Booleanish | undefined;
    state: Booleanish | undefined;
    placeholder: string | undefined;
    addButtonText: string | undefined;
    addButtonVariant: keyof import("../../types").BaseButtonVariant | undefined;
    addOnChange: Booleanish | undefined;
    duplicateTagText: string | undefined;
    inputType: InputType | undefined;
    invalidTagText: string | undefined;
    limitTagsText: string | undefined;
    noAddOnEnter: Booleanish | undefined;
    noOuterFocus: Booleanish | undefined;
    noTagRemove: Booleanish | undefined;
    removeOnDelete: Booleanish | undefined;
    tagPills: Booleanish | undefined;
    tagRemovedLabel: string | undefined;
    tagValidator: ((t: string) => boolean) | undefined;
    tagVariant: keyof import("../../types").BaseColorVariant | undefined;
}>;
export default _sfc_main;
