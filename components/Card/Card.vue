<template>
  <article class="card">
    <div class="card-image">
      <figure class="image">
        <img
          :src="cardProps.poster_url"
          alt="poster du film"
          class="is-rounded"
        />
      </figure>
    </div>
    <div class="content">
      <h1 class="title is-4">{{cardProps.title}}</h1>
      <br />
      <p>{{cardProps.overview}}</p>
      <time data-testid="releaseDate">{{cardProps.release_date}}</time>
      <StarsVote :vote-average="cardProps.vote_average"></StarsVote>
      <a :href="cardProps.imdb_url" target="_blank" rel="noreferrer">
        Page Imdb
      </a>
      <br />
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export type CardProps = {
  title: string
  release_date: string
  poster_url: string
  imdb_url: string,
  vote_average: number,
  overview: string
}

export default defineComponent({
  props: {
    cardProps: {
      type: Object as () => CardProps,
      required: true,
      validator: (cardProps: CardProps) => {
        return (
          typeof cardProps.title === 'string' &&
          typeof cardProps.release_date === 'string' &&
          typeof cardProps.poster_url === 'string' &&
          typeof cardProps.imdb_url === 'string' &&
          typeof cardProps.overview === 'string' &&
          typeof cardProps.vote_average === 'number'
        )
      }
    }
  }
})
</script>
