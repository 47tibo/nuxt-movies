import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state = () => ({
    query: ''
  })

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getSearch: (state) => state.query,
}

export const mutations: MutationTree<RootState> = {
    setSearch (state, newSearch: string) {
        state.query = newSearch
    }
}

export const actions: ActionTree<RootState, RootState> = {
    setSearch({ commit }, payload) {
        commit('setSearch', payload)
        this.$router.push({name: 'movies', query: {search: payload}})
    },
}    