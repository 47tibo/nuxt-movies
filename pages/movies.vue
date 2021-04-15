<template>
    <main class="container">
        <div class="centered my my-6">
        <nav class="level">
          <div class="level-left">
            <Search @submit="onSearch" :search="initialSearch" />
          </div>
          <div class="level-right">
            <NuxtLink to="/">Retour à l'accueil</NuxtLink>
          </div>
        </nav>
      </div>
      <div className="centered is-flex is-flex-wrap-wrap">
        <ul v-if="movies.length" class="is-flex is-flex-wrap-wrap">
            <li v-for="movie in movies" :key="movie.id" class="movie">
                <Card :card-props="movie"></Card>
            </li>
        </ul>
        <p v-else>:( pas de résultat pour cette recherche</p>
    </div>
    </main>
</template>
<style scoped>
    .movie {
        width: 300px;
        margin-bottom: 1rem;
        margin-right: 1rem;
    }
</style>
<script lang="ts">

import {defineComponent} from '@nuxtjs/composition-api'
import {CardProps} from '@/components/Card/Card.vue'

type RawMovieFromApi = {
    vote_average: number,
    overview: string,
    title: string
    release_date: string | null
    poster_path: string | null
    id: number | null
}

type MovieFromApi = {
    vote_average: number,
    overview: string,
    title: string
    release_date: string
    poster_path: string 
    id: number
}

type MovieExternalIds = {
  imdb_id: string
}

const movieExternalIdsUrl =
  'https://api.themoviedb.org/3/movie/[id]/external_ids?api_key=ea19850e51eedeaee6ecc4618ffbda6a'
const imdbUrl = 'https://www.imdb.com/title/[id]'
const getImdbUrl = async (movieId: number): Promise<string> => {
  const response = await fetch(
    movieExternalIdsUrl.replace('[id]', movieId.toString()),
  )
  const movie: MovieExternalIds = await response.json()
  return imdbUrl.replace('[id]', movie.imdb_id)
}
const getAllImdbUrls = async (movieIds: number[]) =>
  Promise.all(movieIds.map((movieId) => getImdbUrl(movieId)))

export default defineComponent({
    async asyncData({ $axios, query }): Promise<{movies: CardProps[], initialSearch: string}> {
        const movies = await $axios.$get('/search/movie', {
            params: {
                api_key: 'ea19850e51eedeaee6ecc4618ffbda6a',
                query: query.search
             }
        }).then((res) => res.results)
        const moviesFiltered: MovieFromApi[] = movies.filter(
            (movie: RawMovieFromApi) =>
                movie.id !== null && movie.poster_path !== null && movie.release_date !== null,
            )
        const imdbUrls = await getAllImdbUrls(
            moviesFiltered.map(movie => movie.id),
        )
        const moviesWithImdbUrls = moviesFiltered.map((movie, index) => ({
            ...movie,
            poster_url: `https://image.tmdb.org/t/p/w780/${movie.poster_path}`,
            imdb_url: imdbUrls[index],
        }))
        const initialSearch = query.search as string
        return {movies: moviesWithImdbUrls, initialSearch}
    },
    watchQuery: true,
    methods: {
        onSearch(newSearch: string) {
          this.$store.commit('search/setSearch', newSearch)
          this.$router.push({name: 'movies', query: {search: newSearch}})
        }
  }
})
</script>
