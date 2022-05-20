import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  user: null,
  wallet_address: null,
  balance: null,
  transactions: null,
  mode: 'light',
  nfts: null,
  nftSearchResult: null,
  currentNFT: null,
  currentNftContractItem: null,
  globalNftContractAddress: '0x0Fb6EF3505b9c52Ed39595433a21aF9B5FCc4431', //'0xF72e3E2eCBC12E464B3573DCaa42cB50236F5779', // NFT Minting Contract Use This One "Batteries Included", code of this contract is in the github repository under contract_base for your reference.
  creators: null,
  currentCreator: null,
  likesNFTs: null,
  contractsAdresses: [
    {
      token_adress: "0x2a6327f7f83c16ead8c4a209ac9826d539280ffd",
      contract_adress: "0x3eC9C3cB29Ed95A396A48a4fBDb6b8546d001D5A"
    },
    {
      token_adress: "0x2be2405a991f4c7ada8affb421288f8352f6a2cd",
      contract_adress: "0x02b374a1A8Ff23D46CA99199f804Ce4cE2113fc4"
    },
    {
      token_adress: "0xb70b21c611f348ab4ff79254236523299fd8a693",
      contract_adress: "0xdd04ba0254972CC736F6966c496B4941f02BD816"
    },
    {
      token_adress: "0xd2c26fd32358a749bba033fdc90ba39ad37df5ba",
      contract_adress: "0xdd04ba0254972CC736F6966c496B4941f02BD816"
    },
    {
      token_adress: "0x3aa3370e67b9a76f2dfce0b5e49470699b565354",
      contract_adress: "0xdd04ba0254972CC736F6966c496B4941f02BD816"
    },
  ],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  user: state => state.user
}

export const mutations: MutationTree<RootState> = {
  SET_USER: (state, newVal: any) => {
    state.user = newVal
    state.wallet_address = newVal.wallet_address
  },
  SET_BALANCE: (state, newVal: any) => (state.balance = newVal),
  SET_TRS: (state, newVal: any) => (state.transactions = newVal),
  SET_MODE: (state) => (state.mode = state.mode ? 'light' : 'dark'),
  SET_NFTS: (state, newVal: any) => (state.nfts = newVal),
  SET_CREATORS: (state, newVal: any) => (state.creators = newVal),
  SET_NFT_SEARCH: (state, newVal: any) => (state.nftSearchResult = newVal),
  SET_LIKED_NFTS: (state, newVal: any) => (state.likesNFTs = newVal),
  SET_CURRENT_NFT: (state, newVal: any) => (state.currentNFT = newVal),
  SET_CURRENT_NFT_CONTRACT_ITEM: (state, newVal: any) => (state.currentNftContractItem = newVal),
  SET_CURRENT_CREATOR: (state, newVal: any) => (state.currentCreator = newVal),
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
  updateCurrentCreator({ commit }, newVal) {
    commit('SET_CURRENT_CREATOR', newVal)
  },
  updateCurrentNftContractItem({ commit, state }, t_adress) {
    const newVal = state.contractsAdresses.find((item:any) => item.token_adress == t_adress)
    commit('SET_CURRENT_NFT_CONTRACT_ITEM', newVal)
  },
  getNFTs({ commit }) {
    this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/nfts/?q=rtfkt')
      .then( (response)  => {
        if(response) {
          commit('SET_NFTS', response.data.data.result)
        }
      })
      .catch( (error)  => {
          console.log(error);
      });
  },

  getLikedNFTs({ commit }) {
    this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/nfts/?q=clonex')
      .then( (response)  => {
        if(response) {
          commit('SET_LIKED_NFTS', response.data.data.result)
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
  getCreators({ commit, state }) {
    this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/get-creators')
    .then( (data)  => {
      if(data.data) {
        if(data.data.data && data.data.data.length > 0) {
          const result = data.data.data.filter( (user:any) => user.wallet_address != state.wallet_address)
          commit('SET_CREATORS', result)
        }
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
  },

  saveNft({ commit }, {w_adress, data}) {
    this.$axios.post('https://sea-turtle-app-n8fhg.ondigitalocean.app/v1/mint/' + w_adress, data)
    .then( (data)  => {
      if(data.data) {
        console.log(data.data)
        // commit('SET_USER', data.data.user)
      }
    })
    .catch( (error)  => {
      console.log(error);
    });
  }

}