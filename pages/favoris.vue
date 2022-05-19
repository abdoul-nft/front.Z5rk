<template>
    <section class="discover-nft-random margin-y-20">
        <section class="loader-page hidden" id="loaderPage">
            <div class="spinner_flash"></div>
        </section>
        <div class="content-NFTs-body">
            <div v-for="(nft, index) in this.$store.state.likesNFTs" :key="index" :class="getClass(index)" @click="gotoNftDetails(nft)" >
                <NftCardItem v-if="modulo(index)" :nft="nft" :like="true"/>
                <NftListItem v-else :nft="nft" :like="true"/>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    middleware: 'auth',
    name: 'favoris',
    layout: 'navigation',
    methods: {
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
        }
    }
})
</script>
