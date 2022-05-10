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
            <div v-for="(nft, index) in this.$store.state.nftSearchResult" :key="index" :class="getClass(index)">
                <div v-if="modulo(index)">
                    <picture>
                        <source :srcset="getImage(parseNftMetaData(nft.metadata).image)" type="image/webp">
                        <img class="big-image" :src="getImage(parseNftMetaData(nft.metadata).image)" alt="">
                    </picture>
                    <div class="counterdown">
                        <span>08H</span>
                        <span>38M</span>
                        <span>16S</span>
                    </div>
                    <div class="btn-like-click">
                        <div class="btnLike">
                            <input type="checkbox" checked>
                            <span class="count-likes">197</span>
                            <i class="ri-heart-3-line"></i>
                        </div>
                    </div>
                    <a href="" class="un-info-card">
                        <div class="block-left">
                            <h4>{{ parseNftMetaData(nft.metadata).name }}</h4>
                            <div class="user">
                                <picture>
                                    <source srcset="~/assets/images/avatar/19.webp" type="image/webp">
                                    <img class="img-avatar" src="~/assets/images/avatar/19.jpg" alt="">
                                </picture>
                                <h5>Julian Co. </h5>
                            </div>
                        </div>
                        <div class="block-right">
                            <h6>Starting Bid</h6>
                            <p>
                                <span>($3,650)</span>
                                1.50 ETH
                            </p>
                        </div>
                    </a>
                </div>

                <div v-else>
                    <div class="cover-image">
                        <picture>
                            <source :srcset="getImage(parseNftMetaData(nft.metadata).image)" type="image/webp">
                            <img class="big-image" :src="getImage(parseNftMetaData(nft.metadata).image)" alt="">
                        </picture>
                        <div class="content-text">
                            <div class="btn-like-click">
                                <div class="btnLike">
                                    <input type="checkbox">
                                    <span class="count-likes">14</span>
                                    <i class="ri-heart-3-line"></i>
                                </div>
                            </div>
                        </div>
                        <div class="user-text">
                            <div class="user-avatar">
                                <!-- <picture>
                                    <source srcset="~/assets/images/avatar/10.webp" type="image/webp">
                                    <img class="sm-user" src="~/assets/images/avatar/10.jpg" alt="">
                                </picture> -->
                                <span>{{ parseNftMetaData(nft.metadata).name }}</span>
                            </div>
                            <div class="number-eth">
                                <span class="main-price">1.50 ETH</span>
                                <span>($3,650)</span>
                            </div>
                        </div>
                    </div>
                </div>
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
    }
  }
})
</script>
