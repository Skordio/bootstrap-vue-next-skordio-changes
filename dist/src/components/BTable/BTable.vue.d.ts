import type { PropType as __PropType } from 'vue';
import type { Booleanish, BTableProvider, BTableSortCompare, TableField, TableItem, VerticalAlign } from '../../types';
type NoProviderTypes = 'paging' | 'sorting' | 'filtering';
declare const _sfc_main: import("vue").DefineComponent<{
    align: {
        type: __PropType<VerticalAlign | undefined>;
        required: false;
    };
    caption: {
        type: __PropType<string | undefined>;
        required: false;
    };
    captionTop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    borderless: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    bordered: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    borderVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    dark: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    fields: {
        type: __PropType<TableField<Record<string, unknown>>[] | undefined>;
        required: false;
        default: () => never[];
    };
    footClone: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hover: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    items: {
        type: __PropType<TableItem<Record<string, unknown>>[] | undefined>;
        required: false;
        default: () => never[];
    };
    provider: {
        type: __PropType<BTableProvider | undefined>;
        required: false;
    };
    sortCompare: {
        type: __PropType<BTableSortCompare | undefined>;
        required: false;
    };
    noProvider: {
        type: __PropType<NoProviderTypes[] | undefined>;
        required: false;
    };
    noProviderPaging: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    noProviderSorting: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    noProviderFiltering: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    responsive: {
        type: __PropType<boolean | "sm" | "md" | "lg" | "xl" | "xxl" | undefined>;
        required: false;
        default: boolean;
    };
    small: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    striped: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    stacked: {
        type: __PropType<boolean | "sm" | "md" | "lg" | "xl" | "xxl" | undefined>;
        required: false;
        default: boolean;
    };
    labelStacked: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    sortBy: {
        type: __PropType<string | undefined>;
        required: false;
    };
    sortDesc: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    sortInternal: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    selectable: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    stickySelect: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    selectHead: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    selectMode: {
        type: __PropType<"range" | "multi" | "single" | undefined>;
        required: false;
        default: string;
    };
    selectionVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    stickyHeader: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    busy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    showEmpty: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    perPage: {
        type: __PropType<number | undefined>;
        required: false;
    };
    currentPage: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    filter: {
        type: __PropType<string | undefined>;
        required: false;
    };
    filterable: {
        type: __PropType<string[] | undefined>;
        required: false;
    };
    emptyText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    emptyFilteredText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {
    selectAllRows: () => void;
    clearSelected: () => void;
    selectRow: (index: number) => void;
    unselectRow: (index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("headClicked" | "rowClicked" | "rowDblClicked" | "rowHovered" | "rowUnhovered" | "rowSelected" | "rowUnselected" | "selection" | "update:busy" | "update:sortBy" | "update:sortDesc" | "sorted" | "filtered")[], "headClicked" | "rowClicked" | "rowDblClicked" | "rowHovered" | "rowUnhovered" | "rowSelected" | "rowUnselected" | "selection" | "update:busy" | "update:sortBy" | "update:sortDesc" | "sorted" | "filtered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: __PropType<VerticalAlign | undefined>;
        required: false;
    };
    caption: {
        type: __PropType<string | undefined>;
        required: false;
    };
    captionTop: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    borderless: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    bordered: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    borderVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    dark: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    fields: {
        type: __PropType<TableField<Record<string, unknown>>[] | undefined>;
        required: false;
        default: () => never[];
    };
    footClone: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    hover: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    items: {
        type: __PropType<TableItem<Record<string, unknown>>[] | undefined>;
        required: false;
        default: () => never[];
    };
    provider: {
        type: __PropType<BTableProvider | undefined>;
        required: false;
    };
    sortCompare: {
        type: __PropType<BTableSortCompare | undefined>;
        required: false;
    };
    noProvider: {
        type: __PropType<NoProviderTypes[] | undefined>;
        required: false;
    };
    noProviderPaging: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    noProviderSorting: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    noProviderFiltering: {
        type: __PropType<Booleanish | undefined>;
        required: false;
    };
    responsive: {
        type: __PropType<boolean | "sm" | "md" | "lg" | "xl" | "xxl" | undefined>;
        required: false;
        default: boolean;
    };
    small: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    striped: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    stacked: {
        type: __PropType<boolean | "sm" | "md" | "lg" | "xl" | "xxl" | undefined>;
        required: false;
        default: boolean;
    };
    labelStacked: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    sortBy: {
        type: __PropType<string | undefined>;
        required: false;
    };
    sortDesc: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    sortInternal: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    selectable: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    stickySelect: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    selectHead: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    selectMode: {
        type: __PropType<"range" | "multi" | "single" | undefined>;
        required: false;
        default: string;
    };
    selectionVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
        default: string;
    };
    stickyHeader: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: boolean;
    };
    busy: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    showEmpty: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    perPage: {
        type: __PropType<number | undefined>;
        required: false;
    };
    currentPage: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    filter: {
        type: __PropType<string | undefined>;
        required: false;
    };
    filterable: {
        type: __PropType<string[] | undefined>;
        required: false;
    };
    emptyText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    emptyFilteredText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}>> & {
    onHeadClicked?: ((...args: any[]) => any) | undefined;
    onRowClicked?: ((...args: any[]) => any) | undefined;
    onRowDblClicked?: ((...args: any[]) => any) | undefined;
    onRowHovered?: ((...args: any[]) => any) | undefined;
    onRowUnhovered?: ((...args: any[]) => any) | undefined;
    onRowSelected?: ((...args: any[]) => any) | undefined;
    onRowUnselected?: ((...args: any[]) => any) | undefined;
    onSelection?: ((...args: any[]) => any) | undefined;
    "onUpdate:busy"?: ((...args: any[]) => any) | undefined;
    "onUpdate:sortBy"?: ((...args: any[]) => any) | undefined;
    "onUpdate:sortDesc"?: ((...args: any[]) => any) | undefined;
    onSorted?: ((...args: any[]) => any) | undefined;
    onFiltered?: ((...args: any[]) => any) | undefined;
}, {
    dark: Booleanish | undefined;
    small: Booleanish | undefined;
    items: TableItem<Record<string, unknown>>[] | undefined;
    stacked: boolean | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    busy: Booleanish | undefined;
    striped: Booleanish | undefined;
    captionTop: Booleanish | undefined;
    borderless: Booleanish | undefined;
    bordered: Booleanish | undefined;
    fields: TableField<Record<string, unknown>>[] | undefined;
    footClone: Booleanish | undefined;
    hover: Booleanish | undefined;
    responsive: boolean | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    labelStacked: boolean | undefined;
    sortDesc: Booleanish | undefined;
    sortInternal: Booleanish | undefined;
    selectable: Booleanish | undefined;
    stickySelect: Booleanish | undefined;
    selectHead: string | boolean | undefined;
    selectMode: "range" | "multi" | "single" | undefined;
    selectionVariant: keyof import("../../types").BaseColorVariant | undefined;
    stickyHeader: string | boolean | undefined;
    showEmpty: Booleanish | undefined;
    currentPage: number | undefined;
    emptyText: string | undefined;
    emptyFilteredText: string | undefined;
}>;
export default _sfc_main;
