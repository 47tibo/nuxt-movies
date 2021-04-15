import { GetterTree, MutationTree } from 'vuex'

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