<template>
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
</template>
<script lang="ts">

import {defineComponent} from '@nuxtjs/composition-api'

type MovieFromApi = {
    poster_url: string
    imdb_url: string,
    vote_average: number,
    overview: string,
    title: string
    release_date: string
    poster_path: string | null
    id: number | null
}

export default defineComponent({
    async asyncData({ $axios }): Promise<{movies: MovieFromApi[]}> {
        const movies = await $axios.$get('/search/movie', {
            params: {
                api_key: 'ea19850e51eedeaee6ecc4618ffbda6a',
                query: 'indiana'
             }
        }).then(res => res.results)
        return {movies}
    }
})
</script>
