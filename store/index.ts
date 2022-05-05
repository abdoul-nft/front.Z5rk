import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  user: null
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  user: state => state.user
}

export const mutations: MutationTree<RootState> = {
  CHANGE_USER: (state, newVal: any) => (state.user = newVal)
}

export const actions: ActionTree<RootState, RootState> = {
  updateUser({ commit }, newVal) {
    commit('CHANGE_USER', newVal)
  }
}