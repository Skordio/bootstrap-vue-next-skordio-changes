import type { ColorVariant, ContainerPosition } from '../../types';
import { type ComponentPublicInstance, type ComputedRef, type Plugin, type Ref, type VNode } from 'vue';
export interface ToastContent {
    title?: string;
    body?: string | VNode;
}
export interface ToastOptions {
    autoHide?: boolean;
    delay?: number;
    id?: string;
    noCloseButton?: boolean;
    pos?: ContainerPosition;
    value?: boolean;
    variant?: ColorVariant;
}
export interface Toast {
    options: ToastOptions;
    content: ToastContent;
}
export type BodyProp = ToastContent['body'];
export interface ToastVM {
    container: VMContainer | undefined;
    toasts: Toast[];
    root: boolean;
    id: symbol;
}
type VMContainer = Ref<ComponentPublicInstance | null>;
interface ToastContainers {
    [key: symbol]: ToastVM;
}
export declare class ToastInstance {
    vm: ToastVM;
    containerPositions: ComputedRef<Set<ContainerPosition>>;
    constructor(vm: ToastVM);
    toasts(position?: ContainerPosition): ComputedRef<Toast[]>;
    remove(...forDeletion: [string]): void;
    isRoot(): boolean;
    show(content: ToastContent, options?: ToastOptions): Toast;
    info(content: ToastContent, options?: ToastOptions): Toast;
    danger(content: ToastContent, options?: ToastOptions): Toast;
    warning(content: ToastContent, options?: ToastOptions): Toast;
    success(content: ToastContent, options?: ToastOptions): Toast;
    hide(): void;
}
export declare class ToastController {
    vms: ToastContainers;
    rootInstance?: symbol;
    constructor();
    getOrCreateViewModel(): ToastVM;
    getOrCreateViewModel(vm?: ToastVM): ToastVM;
    getVM(): ToastVM | undefined;
    getVM(id?: symbol): ToastVM | undefined;
    useToast: typeof useToast;
}
export declare function getKey(): any;
export declare function useToast(): ToastInstance | undefined;
export declare function useToast(vm: {
    id: symbol;
}, key?: symbol): ToastInstance | undefined;
export declare function useToast(vm: {
    container: Ref<ComponentPublicInstance>;
    root: boolean;
}, key?: symbol): ToastInstance | undefined;
declare const BToastPlugin: Plugin;
export { BToastPlugin };
export default BToastPlugin;
