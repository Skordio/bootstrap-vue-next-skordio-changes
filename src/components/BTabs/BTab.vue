<template>
  <component
    :is="tag"
    :id="id"
    class="tab-pane"
    :class="computedClasses"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <slot v-if="showSlot" />
  </component>
</template>

<script setup lang="ts">
import {computed, inject, ref, toRef, watch} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ClassValue} from '../../types'
import {tabsInjectionKey} from '../../utils'

interface BTabProps {
  id?: string
  title?: string
  active?: Booleanish
  buttonId?: string
  disabled?: Booleanish
  lazy?: Booleanish
  lazyOnce?: Booleanish
  noBody?: boolean | string
  tag?: string
  titleItemClass?: ClassValue
  titleLinkAttributes?: Record<string, unknown>
  titleLinkClass?: ClassValue
}

const props = withDefaults(defineProps<BTabProps>(), {
  titleItemClass: undefined,
  titleLinkClass: undefined,
  id: undefined,
  title: undefined,
  active: false,
  // TODO this is unused - Compat issue
  buttonId: undefined,
  disabled: false,
  lazy: undefined,
  lazyOnce: undefined,
  noBody: false,
  tag: 'div',
  titleLinkAttributes: undefined,
})

const parentData = inject(tabsInjectionKey, null)

const activeBoolean = useBooleanish(toRef(props, 'active'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const lazyBoolean = useBooleanish(toRef(props, props.lazyOnce !== undefined ? 'lazyOnce' : 'lazy'))

const lazyRenderCompleted = ref(false)

const computedLazy = computed<boolean>(() => !!(parentData?.lazy.value || lazyBoolean.value))
const computedLazyOnce = computed<boolean>(() => props.lazyOnce !== undefined)

const computedActive = computed<boolean>(() => activeBoolean.value && !disabledBoolean.value)
const showSlot = computed<boolean>(() => {
  const hasLazyRenderedOnce =
    computedLazy.value && computedLazyOnce.value && lazyRenderCompleted.value
  return computedActive.value || !computedLazy.value || hasLazyRenderedOnce
})
const show = ref(activeBoolean.value)
watch(activeBoolean, (active) => {
  setTimeout(() => {
    show.value = active
  }, 0)
})
const computedClasses = computed(() => ({
  'active': activeBoolean.value,
  'show': show.value,
  'card-body': parentData?.card.value && props.noBody === false,
}))

watch(showSlot, (shown) => {
  if (shown && !lazyRenderCompleted.value) lazyRenderCompleted.value = true
})
</script>
