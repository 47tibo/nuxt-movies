<template>
    <form @submit.prevent="onSubmit" class="field has-addons">
      <div class="control">
        <input
          class="input is-rounded"
          type="text"
          placeholder="exemple 'Speed'"
          ref="textInput"
          data-testid="search-input"
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
    emits: ['submit'],
    methods: {
        onSubmit() {
            const textInput = this.$refs.textInput as HTMLInputElement;
            const search = textInput.value.trim()
            if (search) {
                this.$emit('submit', search)
            }
        }
    }
})
</script>