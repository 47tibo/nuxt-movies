<template>
  <div data-testid="dummy-prop">{{ dummyPropToString }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    dummyProp: {
      type: Boolean,
      required: true,
      validator: (dummyProp: boolean) => typeof dummyProp === 'boolean',
    },
  },
  computed: {
    dummyPropToString(): string {
      return this.dummyProp === true ? 'hello' : 'bye'
    },
  },
})
</script>
