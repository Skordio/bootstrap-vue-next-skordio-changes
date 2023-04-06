<template>
  <table v-if="!responsive" :class="computedClasses">
    <slot />
  </table>
  <div v-else :class="responsiveClasses" :style="stickyHeaderStyle">
    <table :class="computedClasses">
      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
// import type {Breakpoint} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ClassValue, ColorVariant} from '../../types'

interface BTableSimpleProps {
  bordered?: Booleanish
  borderless?: Booleanish
  borderVariant?: ColorVariant
  captionTop?: Booleanish
  dark?: Booleanish
  hover?: Booleanish
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' // boolean | Breakpoint
  stacked?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' // boolean | Breakpoint
  striped?: Booleanish
  small?: Booleanish
  tableClass?: ClassValue
  tableVariant?: ColorVariant
  stickyHeader?: Booleanish | string | boolean
}

const props = withDefaults(defineProps<BTableSimpleProps>(), {
  bordered: false,
  borderless: false,
  captionTop: false,
  dark: false,
  hover: false,
  responsive: false,
  stacked: false,
  striped: false,
  small: false,
  stickyHeader: false,
})

const captionTopBoolean = useBooleanish(toRef(props, 'captionTop'))
const borderlessBoolean = useBooleanish(toRef(props, 'borderless'))
const borderedBoolean = useBooleanish(toRef(props, 'bordered'))
const darkBoolean = useBooleanish(toRef(props, 'dark'))
const hoverBoolean = useBooleanish(toRef(props, 'hover'))
const smallBoolean = useBooleanish(toRef(props, 'small'))
const stripedBoolean = useBooleanish(toRef(props, 'striped'))
const stickyHeaderRef = toRef(props, 'stickyHeader')

const computedClasses = computed(() => [
  'table',
  'b-table',
  {
    'table-bordered': borderedBoolean.value,
    'table-borderless': borderlessBoolean.value,
    [`border-${props.borderVariant}`]: props.borderVariant !== undefined,
    'caption-top': captionTopBoolean.value,
    'table-dark': darkBoolean.value,
    'table-hover': hoverBoolean.value,
    'b-table-stacked': typeof props.stacked === 'boolean' && props.stacked,
    [`b-table-stacked-${props.stacked}`]: typeof props.stacked === 'string',
    'table-striped': stripedBoolean.value,
    'table-sm': smallBoolean.value,
    [`table-${props.tableVariant}`]: props.tableVariant !== undefined,
  },
  props.tableClass,
])

const stickyHeaderStyle = computed(() => {
  if (typeof stickyHeaderRef.value === 'boolean' && stickyHeaderRef.value === true) {
    return [{'max-height': '300px'}]
  } else if (stickyHeaderRef.value !== '') {
    return [{'max-height': `${stickyHeaderRef.value}`}]
  }
  return [{'max-height': '300px'}]
})

const responsiveClasses = computed(() => [
  {
    'table-responsive': props.responsive === true,
    [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
    'b-table-sticky-header': stickyHeaderRef.value !== false,
  },
])
</script>
