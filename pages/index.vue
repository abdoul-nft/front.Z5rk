<template>
  <div>
    <section class="loader-page hidden" id="loaderPage">
        <div class="spinner_flash"></div>
    </section>
    <!-- <div class="border-sections-home"></div> -->

    <section class="margin-t-20 unList-creatores">
        <!-- un-title-default -->
        <div class="un-title-default">
            <div class="text">
                <h2>Creators</h2>
                <p>You can follow many Creators</p>
            </div>
            <div class="un-block-right">
                <a @click="$nuxt.$router.push('/creators')" class="icon-back" aria-label="iconBtn">
                    <i class="ri-arrow-drop-right-line"></i>
                </a>
            </div>
        </div>

        <div class="content-list-creatores">
            <ul class="nav flex-column">
                <li v-for="(creator, index) in this.$store.state.creators" :key="index" class="nav-item">
                    <a class="nav-link" @click="gotoCreatorDetails(creator)">
                        <div class="item-user-img">
                            <picture>
                                <source :srcset="creator.profile_photo ? creator.profile_photo : require(`../assets/images/avatar/13.jpg`)" type="image/webp">
                                <img class="avt-img" :src="creator.profile_photo ? creator.profile_photo : require(`../assets/images/avatar/13.jpg`)" alt="">
                            </picture>
                            <div class="txt-user">
                                <h5>{{creator.username}}</h5>
                                <!-- <p>$9,500.32</p> -->
                            </div>
                        </div>
                        <div class="other-option">
                            <div class="color-text rounded-pill bg-snow btn-xs-size">44 Item</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    
    <section class="unSwiper-cards margin-t-20">
        <!-- un-title-default -->
        <div class="un-title-default">
            <div class="text">
                <h2>Discover</h2>
                <p>Be on the lookout for the latest NFTs</p>
            </div>
            <div class="un-block-right">
                <a @click="$nuxt.$router.push('/search')" class="icon-back" aria-label="iconBtn">
                    <i class="ri-arrow-drop-right-line"></i>
                </a>
            </div>
        </div>
        <!-- lds-spinner -->
        <div v-if="loading" class="loader-items margin-y-20">
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
        <div v-else class="discover-nft-random margin-t-20">
            <div class="content-NFTs-body">
                <div v-for="(nft, index) in this.$store.state.nfts" :key="index" :class="getClass(index)" @click="gotoNftDetails(nft)" >
                    <NftCardItem v-if="modulo(index)" :nft="nft"/>
                    <NftListItem v-else :nft="nft" />
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    middleware: 'auth',
    name: 'index',
    layout: 'navigation',
    head() {
        return {
            script: [
                // { src: '/scss/style.scss' }
            ],
        }
    },
    watch: {
        '$store.state.nfts': {
            immediate: true,
            handler(value) {
                if(value) {
                    this.loading = false
                }
            }
        }
    },
    data() {
        return {
            loading: true
        }
    },
    methods: {
        showNft(value: any) {
            console.log(this.parseNftMetaData(value.metadata))
        },
        parseNftMetaData(value: string) {
            return JSON.parse(value)
        },
        getImage(value: string) {
            return ( value.includes('ipfs://ipfs')) ? value.replace('ipfs://ipfs','https://ipfs.moralis.io:2053/ipfs/') : value.replace('ipfs://','https://ipfs.moralis.io:2053/ipfs/')
        },
        modulo(n:number) {
            return n%5 === 0
        },
        getClass(n:number) {
            return this.modulo(n) ? 'item-card-nft' : 'item-sm-card-NFTs'
        },
        gotoNftDetails(nft: any) {
            this.$store.dispatch('updateCurrentNFT', nft)
            this.$store.dispatch('updateCurrentNftContractItem', nft.token_address)
            this.$router.push ({name: 'nft-address', params: {address: nft.token_address}})
        },
        gotoCreatorDetails(creator: any) {
            this.$store.dispatch('updateCurrentCreator', creator)
            this.$router.push ({name: 'creator-address', params: {address: creator.wallet_address}})
        }
    }
})
</script>
