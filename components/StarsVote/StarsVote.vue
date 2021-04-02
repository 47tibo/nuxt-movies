<template>
  <b-rate v-model="vote" :show-score="score" :disabled="true"> </b-rate>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    voteAverage: {
      type: Number,
      required: true,
      validator: (voteAverage: number) => voteAverage >= 0 && voteAverage <= 10,
    },
  },
  data() {
    return {
      vote: ((this.voteAverage * 5) / 10) as number,
      score: true,
    }
  },
})
</script>
