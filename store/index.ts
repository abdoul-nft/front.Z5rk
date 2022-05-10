import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  user: null,
  balance: null,
  transactions: null,
  mode: 'light',
  nfts: null,
  
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  user: state => state.user
}

export const mutations: MutationTree<RootState> = {
  SET_USER: (state, newVal: any) => (state.user = newVal),
  SET_BALANCE: (state, newVal: any) => (state.balance = newVal),
  SET_TRS: (state, newVal: any) => (state.transactions = newVal),
  SET_MODE: (state) => (state.mode = state.mode ? 'light' : 'dark'),
  SET_NFTS: (state, newVal: any) => (state.nfts = newVal),
  SHOW_SOMETHING: () => (console.log('ok')),
}

export const actions: ActionTree<RootState, RootState> = {
  updateUser({ commit }, newVal) {
    commit('SET_USER', newVal)
  },
  updateBalance({ commit }, newVal) {
    commit('SET_BALANCE', newVal)
  },
  updateTransactions({ commit }, newVal) {
    commit('SET_TRS', newVal)
  },
  changeMode({ commit }) {
    commit('SET_MODE')
  },
  getNFTs({ commit }) {
    this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/nfts/?q=doodles')
      .then( (response)  => {
        if(response) {
          commit('SET_NFTS', response.data.data.result)
        }
      })
      .catch( (error)  => {
          console.log(error);
      });
  },
  editProfile({ commit }, {data, w_adress}) {
    this.$axios.put('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/auth/account/' + w_adress, data)
      .then( (response)  => {
        if(response) {
          commit('SHOW_SOMETHING')
          this.dispatch('getCurrentUser', w_adress)
        }
      })
      .catch( (error)  => {
          console.log(error);
      });
  },
  getCurrentUser({ commit }, w_adress) {
    this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/auth/account/' + w_adress)
    .then( (data)  => {
      if(data.data.user) {
        commit('SET_USER', data.data.user)
      }
    })
    .catch( (error)  => {
      console.log(error);
    });
  }

}