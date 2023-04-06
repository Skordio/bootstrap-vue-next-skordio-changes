import type { AriaInvalid, ButtonVariant, InputSize } from '../types';
import { type Ref } from 'vue';
interface ClassesItemsInput {
    plain?: boolean;
    button?: boolean;
    inline?: boolean;
    switch?: boolean;
    size?: InputSize;
}
/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
declare const getClasses: (items: Ref<ClassesItemsInput> | ClassesItemsInput) => import("vue").ComputedRef<{
    [x: string]: boolean;
    'form-check': boolean;
    'form-check-inline': boolean;
    'form-switch': boolean;
}>;
interface InputClassesItemsInput {
    plain?: boolean;
    button?: boolean;
    state?: boolean;
}
/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
declare const getInputClasses: (items: Ref<InputClassesItemsInput> | InputClassesItemsInput) => import("vue").ComputedRef<{
    'form-check-input': boolean;
    'is-valid': boolean;
    'is-invalid': boolean;
    'btn-check': boolean;
}>;
interface LabelClasesItemsInput {
    plain?: boolean;
    button?: boolean;
    buttonVariant?: ButtonVariant;
    size?: InputSize;
}
/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
declare const getLabelClasses: (items: Ref<LabelClasesItemsInput> | LabelClasesItemsInput) => import("vue").ComputedRef<{
    [x: string]: boolean | undefined;
    'form-check-label': boolean;
    btn: boolean;
}>;
interface GroupAttrItemsInput {
    required?: boolean;
    ariaInvalid?: AriaInvalid;
    state?: boolean;
}
/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
declare const getGroupAttr: (items: Ref<GroupAttrItemsInput> | GroupAttrItemsInput) => import("vue").ComputedRef<{
    'aria-invalid': boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-required': boolean | undefined;
}>;
interface GroupClassesItemsInput {
    validated?: boolean;
    buttons?: boolean;
    stacked?: boolean;
    size?: InputSize;
}
/**
 * @param items must be a reactive object ex: reactive({ plain: toRef(plainBoolean, 'value')})
 * @returns
 */
declare const getGroupClasses: (items: Ref<GroupClassesItemsInput> | GroupClassesItemsInput) => import("vue").ComputedRef<{
    [x: string]: boolean;
    'was-validated': boolean;
    'btn-group': boolean;
    'btn-group-vertical': boolean;
}>;
declare const slotsToElements: (slots: any[], nodeType: string, disabled: boolean) => {
    props: any;
    text: any;
}[];
declare const optionToElement: (option: any, props: any) => any;
declare const bindGroupProps: (el: any, idx: number, props: any, computedName: Ref<string>, computedId: Ref<string>) => any;
export { getClasses, getInputClasses, getLabelClasses, getGroupAttr, getGroupClasses, slotsToElements, optionToElement, bindGroupProps, };
