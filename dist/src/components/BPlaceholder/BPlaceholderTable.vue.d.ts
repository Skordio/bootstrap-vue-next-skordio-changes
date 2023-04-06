import type { PropType as __PropType } from 'vue';
import type { Booleanish, PlaceholderAnimation, PlaceholderSize } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    rows: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    columns: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    cellWidth: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    size: {
        type: __PropType<PlaceholderSize | undefined>;
        required: false;
    };
    animation: {
        type: __PropType<PlaceholderAnimation | undefined>;
        required: false;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    headerColumns: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    hideHeader: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    headerCellWidth: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    headerSize: {
        type: __PropType<PlaceholderSize | undefined>;
        required: false;
    };
    headerAnimation: {
        type: __PropType<PlaceholderAnimation | undefined>;
        required: false;
    };
    headerVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    footerColumns: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    showFooter: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    footerCellWidth: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    footerSize: {
        type: __PropType<PlaceholderSize | undefined>;
        required: false;
    };
    footerAnimation: {
        type: __PropType<PlaceholderAnimation | undefined>;
        required: false;
    };
    footerVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rows: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    columns: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    cellWidth: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    size: {
        type: __PropType<PlaceholderSize | undefined>;
        required: false;
    };
    animation: {
        type: __PropType<PlaceholderAnimation | undefined>;
        required: false;
    };
    variant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    headerColumns: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    hideHeader: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    headerCellWidth: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    headerSize: {
        type: __PropType<PlaceholderSize | undefined>;
        required: false;
    };
    headerAnimation: {
        type: __PropType<PlaceholderAnimation | undefined>;
        required: false;
    };
    headerVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
    footerColumns: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    showFooter: {
        type: __PropType<Booleanish | undefined>;
        required: false;
        default: boolean;
    };
    footerCellWidth: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    footerSize: {
        type: __PropType<PlaceholderSize | undefined>;
        required: false;
    };
    footerAnimation: {
        type: __PropType<PlaceholderAnimation | undefined>;
        required: false;
    };
    footerVariant: {
        type: __PropType<keyof import("../../types").BaseColorVariant | undefined>;
        required: false;
    };
}>>, {
    columns: string | number | undefined;
    rows: string | number | undefined;
    hideHeader: Booleanish | undefined;
    cellWidth: string | number | undefined;
    headerCellWidth: string | number | undefined;
    showFooter: Booleanish | undefined;
    footerCellWidth: string | number | undefined;
}>;
export default _sfc_main;
