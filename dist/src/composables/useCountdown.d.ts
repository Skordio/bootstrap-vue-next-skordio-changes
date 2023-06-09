import { type MaybeComputedRef, type UseIntervalFnOptions } from '@vueuse/core';
import { type ComputedRef, type Ref } from 'vue';
type VoidFn = () => void;
interface CountdownReturn {
    isActive: Readonly<Ref<boolean>>;
    isPaused: Readonly<Ref<boolean>>;
    restart: VoidFn;
    stop: VoidFn;
    resume: VoidFn;
    pause: VoidFn;
    value: ComputedRef<number>;
}
/**
 * A simple interval timer that counts down the remaining seconds
 *
 * @param {MaybeComputedRef<number>} length the total amount of time to loop through in ms
 * @param {MaybeComputedRef<number>} interval how often the interval should refresh. Default 1000
 * @param {UseIntervalFnOptions} intervalOpts opts to pass to the interval fn. Default {}
 * @important ensure that you call `stop()` before unmount in the component
 */
declare const _default: (length: MaybeComputedRef<number>, interval?: MaybeComputedRef<number>, intervalOpts?: UseIntervalFnOptions) => CountdownReturn;
export default _default;
