<template>
  <Search @submit="onSearch"></Search>
</template>
<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
export default defineComponent({
  methods: {
    onSearch(query: string) {
      console.log(query)
    }
  }
})
</script>
