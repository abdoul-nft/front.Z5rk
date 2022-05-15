import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  user: null,
  balance: null,
  transactions: null,
  mode: 'light',
  nfts: null,
  nftSearchResult: null,
  currentNFT: null,
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
  SET_NFT_SEARCH: (state, newVal: any) => (state.nftSearchResult = newVal),
  SET_CURRENT_NFT: (state, newVal: any) => (state.currentNFT = newVal),
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
  updateCurrentNFT({ commit }, newVal) {
    commit('SET_CURRENT_NFT', newVal)
  },
  getNFTs({ commit }) {
    this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/nfts/?q=clonex')
      .then( (response)  => {
        if(response) {
          commit('SET_NFTS', response.data.data.result)
        }
      })
      .catch( (error)  => {
          console.log(error);
      });
  },
  searchNFTs({ commit }, q) {
    this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/nfts/?q=' + q)
      .then( (response)  => {
        if(response) {
          commit('SET_NFT_SEARCH', response.data.data.result)
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
  },

  getNftOwners({ commit }, w_adress) {
    this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/auth/account/' + w_adress)
    .then( (data)  => {
      if(data.data.user) {
        commit('SET_USER', data.data.user)
      }
    })
    .catch( (error)  => {
      console.log(error);
    });
  },

  getNftFloorPrice({ commit }, w_adress) {
    this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/nft-price/' + w_adress)
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