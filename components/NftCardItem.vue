<template>
    <div>
        <picture>
            <source :srcset="getImage(parseNftMetaData(nft.metadata).image)" type="image/webp">
            <img class="big-image" :src="getImage(parseNftMetaData(nft.metadata).image)" alt="">
        </picture>
        <!-- <div class="counterdown">
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
        </div> -->
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
            <div v-if="floorPrice" class="block-right">
                <h6>Starting Bid</h6>
                <p>
                    <span>(${{ convertToUsd() }})</span>
                    {{ floorPrice }} ETH
                </p>
            </div>
        </a>
    </div>
</template>


<script>
export default {
  name: 'NftCardItem',
  props: {
    nft: {
      type: Object,
      required: true
    }
  },
  data() {
      return {
          floorPrice: null,
      }
  },
  mounted() {
      this.getNftFloorPrice()
  },
  methods: {
    parseNftMetaData(value) {
        return JSON.parse(value)
    },
    getImage(value) {
        return ( value.includes('ipfs://ipfs')) ? value.replace('ipfs://ipfs','https://ipfs.moralis.io:2053/ipfs/') : value.replace('ipfs://','https://ipfs.moralis.io:2053/ipfs/')
    },
    getNftFloorPrice() {
        this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/' + this.nft.token_address)
            .then( (data)  => {
                if(data.data) {
                    this.floorPrice = this.convertToEthPrice(data.data.data.price)
                }
            })
            .catch( (error)  => {
                console.log(error);
            })
    },
    convertToEthPrice(value) {
        return (parseInt(value)/1000000000000000000).toFixed(3)
    },
    convertToUsd() {
        return 1928.61 * this.floorPrice
    }
  }
}
</script>