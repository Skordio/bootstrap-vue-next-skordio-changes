import { type App } from 'vue';
import type { BreadcrumbItem } from '../types';
export declare const createBreadcrumb: (app: App) => void;
export declare const useBreadcrumb: () => {
    items: BreadcrumbItem[];
    readonly reset: () => void;
};
