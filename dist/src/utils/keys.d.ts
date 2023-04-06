import type { InjectionKey, Ref } from 'vue';
import type { BreadcrumbItem, ButtonVariant, ColorVariant, InputSize, Size } from '../types';
export declare const carouselInjectionKey: InjectionKey<{
    background: Ref<string | undefined>;
    width: Ref<string | undefined>;
    height: Ref<string | undefined>;
}>;
export declare const tabsInjectionKey: InjectionKey<{
    lazy: Ref<boolean>;
    card: Ref<boolean>;
}>;
export declare const breadcrumbInjectionKey: InjectionKey<{
    items: BreadcrumbItem[];
    readonly reset: () => void;
}>;
export declare const progressInjectionKey: InjectionKey<{
    animated: Ref<boolean>;
    max: Ref<number | string>;
    showProgress: Ref<boolean>;
    showValue: Ref<boolean>;
    striped: Ref<boolean>;
}>;
export declare const listGroupInjectionKey: InjectionKey<{
    numbered: Ref<boolean>;
}>;
export declare const avatarGroupInjectionKey: InjectionKey<{
    overlapScale: Ref<number>;
    size: Ref<InputSize | string | undefined>;
    square: Ref<boolean>;
    rounded: Ref<boolean | string>;
    variant: Ref<ColorVariant | undefined>;
}>;
export declare const accordionInjectionKey: InjectionKey<{
    id: Ref<string>;
}>;
export declare const checkboxGroupKey: InjectionKey<{
    set: (payload: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number) => void;
    remove: (payload: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number) => void;
    modelValue: Ref<(unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number)[]>;
    switch: Ref<boolean>;
    buttonVariant: Ref<ButtonVariant>;
    form: Ref<string | undefined>;
    name: Ref<string>;
    state: Ref<boolean | undefined>;
    plain: Ref<boolean>;
    size: Ref<Size>;
    inline: Ref<boolean>;
    required: Ref<boolean>;
    buttons: Ref<boolean>;
    disabled: Ref<boolean>;
}>;
export declare const radioGroupKey: InjectionKey<{
    set: (value: string | boolean | unknown[] | Record<string, unknown> | number) => void;
    modelValue: Ref<string | boolean | unknown[] | Record<string, unknown> | number>;
    buttonVariant: Ref<ButtonVariant>;
    form: Ref<string | undefined>;
    name: Ref<string>;
    button: Ref<boolean>;
    state: Ref<boolean | undefined>;
    plain: Ref<boolean>;
    size: Ref<Size>;
    inline: Ref<boolean>;
    required: Ref<boolean>;
    disabled: Ref<boolean>;
}>;
