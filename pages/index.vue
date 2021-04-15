<template>
  <Search @submit="onSearch" :search="search"></Search>
</template>
<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import { mapGetters } from 'vuex'
export default defineComponent({
  computed: {
    ...mapGetters ({
      search: 'search/getSearch'
    })
  },
  methods: {
    onSearch(query: string) {
      this.$store.dispatch('search/setSearch', query)
    },
  }
})
</script>
