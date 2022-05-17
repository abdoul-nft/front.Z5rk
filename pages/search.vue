<template>
  <div>
    <section class="main-search-header">
        <div class="content-search">
            <div class="form-group with_icon">
                <div class="input_group">
                    <input @change="search" type="search" v-model="keyword" class="form-control rounded-pill" placeholder="Search anything ...">
                    <div class="icon" @click="search">
                        <i class="ri-search-2-line"></i>
                    </div>
                </div>
            </div>
            <!-- <button type="button" class="btn btn-box-filter" data-bs-toggle="modal"
                data-bs-target="#mdllFilter">
                <i class="ri-equalizer-line"></i>
            </button> -->
        </div>
    </section>

    <!-- <section class="categories-tag-search">
        <div class="content-tags">
            <button type="button" class="btn btn-tag-filter">
                <input type="checkbox">
                <span>All</span>
            </button>
            <button type="button" class="btn btn-tag-filter">
                <input type="checkbox">
                <span>New</span>
            </button>
            <button type="button" class="btn btn-tag-filter">
                <input type="checkbox" checked>
                <span>Gaming</span>
            </button>
            <button type="button" class="btn btn-tag-filter">
                <input type="checkbox">
                <span>Music</span>
            </button>
            <button type="button" class="btn btn-tag-filter">
                <input type="checkbox">
                <span>Virtual Worlds</span>
            </button>
            <button type="button" class="btn btn-tag-filter">
                <input type="checkbox">
                <span>Collectibles</span>
            </button>
            <button type="button" class="btn btn-tag-filter">
                <input type="checkbox">
                <span>Sport</span>
            </button>
        </div>
    </section> -->

    <section class="discover-nft-random mt-4">
        <div class="content-NFTs-body" v-if="this.$store.state.nftSearchResult">
            <div v-for="(nft, index) in this.$store.state.nftSearchResult" :key="index" :class="getClass(index)" @click="gotoNftDetails(nft)" >
                <NftCardItem v-if="modulo(index)" :nft="nft"/>
                <NftListItem v-else :nft="nft" />
            </div>
        </div>

        <!-- lds-spinner -->
        <div class="loader-items margin-y-20">
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>
    
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'search',
  middleware: 'auth',
  layout: 'navigation',
  data() {
      return {
          keyword: '',
      }
  },
//   watch: {
//     keyword: {
//       immediate: false,
//       handler(value) {
//         console.log('value => ',value)
//         // this.$store.dispatch('searchNFTs', value)
//       }
//     }
//   },
  methods: {
    modulo(n:number) {
        return n%5 === 0
    },
    parseNftMetaData(value: string) {
        return JSON.parse(value)
    },
    getImage(value: string) {
        if(value) return ( value.includes('ipfs://ipfs')) ? value.replace('ipfs://ipfs','https://ipfs.moralis.io:2053/ipfs/') : value.replace('ipfs://','https://ipfs.moralis.io:2053/ipfs/')
        return ''
    },
    getClass(n:number) {
        return this.modulo(n) ? 'item-card-nft' : 'item-sm-card-NFTs'
    },
    search() {
        this.$store.dispatch('searchNFTs', this.keyword)
    },
    gotoNftDetails(nft: any) {
        this.$store.dispatch('updateCurrentNFT', nft)
        this.$store.dispatch('updateCurrentNftContractItem', nft.token_address)
        this.$router.push ({name: 'nft-address', params: {address: nft.token_address}})
    }
  }
})
</script>
