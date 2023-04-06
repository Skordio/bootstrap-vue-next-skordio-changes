import { type UseColorModeOptions } from '@vueuse/core';
export interface ColorModeOptions extends UseColorModeOptions {
    /**
     * When set to true, useColorMode will automatically store itself and persist (default localstorage).
     */
    persist?: boolean;
}
declare const _default: (opts?: ColorModeOptions) => import("vue").WritableComputedRef<import("@vueuse/core").BasicColorSchema>;
export default _default;
