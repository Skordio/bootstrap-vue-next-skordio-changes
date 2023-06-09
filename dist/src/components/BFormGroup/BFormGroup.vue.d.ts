import { type PropType } from 'vue';
import type { Booleanish } from '../../types';
export declare const SLOT_NAME_LABEL = "label";
export declare const SLOT_NAME_INVALID_FEEDBACK = "invalid-feedback";
export declare const SLOT_NAME_VALID_FEEDBACK = "valid-feedback";
export declare const SLOT_NAME_DESCRIPTION = "description";
export declare const SLOT_NAME_DEFAULT = "default";
declare const _sfc_main: import("vue").DefineComponent<{
    contentCols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsLg: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsMd: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsSm: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsXl: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    description: {
        type: StringConstructor[];
        required: false;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    feedbackAriaLive: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    invalidFeedback: {
        type: StringConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    labelAlign: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignLg: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignMd: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignSm: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignXl: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        required: false;
    };
    labelCols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsLg: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsMd: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsSm: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsXl: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelFor: {
        type: StringConstructor;
        required: false;
    };
    labelSize: {
        type: StringConstructor;
        required: false;
    };
    labelSrOnly: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    state: {
        type: PropType<Booleanish>;
        default: null;
    };
    tooltip: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    validFeedback: {
        type: StringConstructor;
        required: false;
    };
    validated: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    floating: {
        type: PropType<Booleanish>;
        default: boolean;
    };
}, {
    disabledBoolean: Readonly<import("vue").Ref<boolean>>;
    labelSrOnlyBoolean: Readonly<import("vue").Ref<boolean>>;
    stateBoolean: Readonly<import("vue").Ref<boolean>>;
    tooltipBoolean: Readonly<import("vue").Ref<boolean>>;
    validatedBoolean: Readonly<import("vue").Ref<boolean>>;
    floatingBoolean: Readonly<import("vue").Ref<boolean>>;
    ariaDescribedby: string | null;
    computedAriaInvalid: import("vue").ComputedRef<boolean | "true" | "false" | "grammar" | "spelling" | undefined>;
    contentColProps: import("vue").ComputedRef<any>;
    isHorizontal: import("vue").ComputedRef<boolean>;
    labelAlignClasses: import("vue").ComputedRef<string[]>;
    labelColProps: import("vue").ComputedRef<any>;
    onLegendClick: (event: MouseEvent) => void;
    stateClass: import("vue").ComputedRef<"is-valid" | "is-invalid" | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    contentCols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsLg: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsMd: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsSm: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsXl: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    description: {
        type: StringConstructor[];
        required: false;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    feedbackAriaLive: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    invalidFeedback: {
        type: StringConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    labelAlign: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignLg: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignMd: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignSm: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignXl: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        required: false;
    };
    labelCols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsLg: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsMd: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsSm: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsXl: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
    };
    labelFor: {
        type: StringConstructor;
        required: false;
    };
    labelSize: {
        type: StringConstructor;
        required: false;
    };
    labelSrOnly: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    state: {
        type: PropType<Booleanish>;
        default: null;
    };
    tooltip: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    validFeedback: {
        type: StringConstructor;
        required: false;
    };
    validated: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    floating: {
        type: PropType<Booleanish>;
        default: boolean;
    };
}>>, {
    disabled: Booleanish;
    floating: Booleanish;
    validated: Booleanish;
    state: Booleanish;
    feedbackAriaLive: string;
    labelSrOnly: Booleanish;
    tooltip: Booleanish;
}>;
export default _sfc_main;
