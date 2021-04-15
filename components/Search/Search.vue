<template>
    <form @submit.prevent="onSubmit" class="field has-addons">
      <div class="control">
        <input
          class="input is-rounded"
          type="text"
          placeholder="exemple 'Speed'"
          data-testid="search-input"
          v-model="localSearch"
        />
      </div>
      <div class="control">
        <button
          class="button is-primary is-rounded"
          type="submit"
          data-testid="search-button"
        >
          Recherche
        </button>
      </div>
    </form>
</template>
<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
export default defineComponent({
    props: ['search'],
    data() {
      return {
        localSearch: this.search
      }
    },
    emits: ['submit'],
    methods: {
        onSubmit() {
            const localSearch = this.localSearch.trim()
            if (localSearch) {
                this.$emit('submit', localSearch)
            }
        }
    }
})
</script>