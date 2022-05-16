<template>
<div id="wrapper">
    <div id="content">
        <ProfileHeader :username="$store.state.currentCreator.username" :creator="true"/>

        <div class="space-sticky"></div>

        <section class="un-creator-ptofile">
            <ProfileHead :user="$store.state.currentCreator" />
            
            <ProfileBody :creator="true" :user="$store.state.currentCreator" :minted="creatorNfts.length" :likes="creatorNfts.length" :items="creatorNfts.length"/>

            <div class="tab-creatore-profile">
                <ul class="nav nav-pills nav-pilled-tab w-100" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-Items-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Items" type="button" role="tab" aria-controls="pills-Items"
                            aria-selected="true">Items</button>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-Selling-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Selling" type="button" role="tab" aria-controls="pills-Selling"
                            aria-selected="false">Selling</button>
                    </li> -->
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-Created-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Created" type="button" role="tab" aria-controls="pills-Created"
                            aria-selected="false">Created</button>
                    </li> -->
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-Liked-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Liked" type="button" role="tab" aria-controls="pills-Liked"
                            aria-selected="false">Liked</button>
                    </li>
                </ul>

                <div class="tab-content content-custome-data" id="pills-tabContent">

                    <div class="tab-pane fade show active" id="pills-Items" role="tabpanel"
                        aria-labelledby="pills-Items-tab">
                        <!-- item-card-gradual -->
                        <div v-for="(nft, index) in this.creatorNfts" :key="index" class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <h3>{{ $store.state.currentCreator.username }}</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                    </div>
                                </div>
                            </div>
                            <a @click="gotoNftDetails(nft)" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source :srcset="getImage(parseNftMetaData(nft.metadata).image)" type="image/webp">
                                        <img class="img-cover" :src="getImage(parseNftMetaData(nft.metadata).image)" alt="image NFT">
                                    </picture>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>{{ parseNftMetaData(nft.metadata).name }}</h2>
                                        <!-- <p>8 Editions Minted</p> -->
                                    </div>
                                    <div class="side-other">
                                        <!-- <span class="no-sales">3 for sale</span> -->
                                    </div>
                                </div>

                            </a>
                            <!-- <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>2.78 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div> -->
                        </div>
                        <!-- lds-spinner -->
                        <div v-if="creatorNfts.length == 0">
                            <div class="empty-items">
                                <img class="empty-light" src="~/assets/images/icons/empty-file-light.svg" alt="">
                                <img class="empty-dark" src="~/assets/images/icons/empty-file-dark.svg" alt="">
                                <h4>No nft yet</h4>
                                <p>Sorry, there is no data to display</p>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-Selling" role="tabpanel"
                        aria-labelledby="pills-Selling-tab">
                        <div class="empty-items">
                            <img class="empty-light" src="~/assets/images/icons/empty-file-light.svg" alt="">
                            <img class="empty-dark" src="~/assets/images/icons/empty-file-dark.svg" alt="">
                            <h4>No sale yet</h4>
                            <p>Sorry, there is no data to display</p>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-Created" role="tabpanel"
                        aria-labelledby="pills-Created-tab">
                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/19.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/19.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Hunter Taylor</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox">
                                        <span class="count-likes">297</span>
                                        <i class="ri-heart-3-line"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/21.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/21.jpg" alt="image NFT">
                                    </picture>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>Ecstasy of the Dead</h2>
                                        <p>350 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">9 for sale</span>
                                    </div>
                                </div>
                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>1.79 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div>
                        </div>

                        <!-- lds-spinner -->
                        <div class="loader-items">
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
                    </div>

                    <div class="tab-pane fade" id="pills-Liked" role="tabpanel" aria-labelledby="pills-Liked-tab">
                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/19.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/19.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Hunter Taylor</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox" checked>
                                        <span class="count-likes">297</span>
                                        <i class="ri-heart-3-line"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/21.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/21.jpg" alt="image NFT">
                                    </picture>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>Ecstasy of the Dead</h2>
                                        <p>350 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">9 for sale</span>
                                    </div>
                                </div>
                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>1.79 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div>
                        </div>

                        <!-- lds-spinner -->
                        <div class="loader-items">
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
                    </div>
                </div>

            </div>
        </section>
    </div>
    <BioDetailsModal :user="$store.state.currentCreator"/>
    <ShareProfileModal :user="$store.state.currentCreator"/>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  layout: 'simple',
   data() {
      return {
        creatorNfts: [],
      }
  },
  mounted() {
      this.getTokens()
  },
  methods: {
    async getTokens() {
        try {
            const options = { chain: 'rinkeby', address: this.$store.state.currentCreator.wallet_address };
            const data = await Moralis.Web3API.account.getNFTs(options);
            this.creatorNfts = data.result.filter( (nft) => nft.metadata != null)
        }catch(err) {
            console.log(err)
        }
    },
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
    },
    gotoNftDetails(nft) {
        this.$store.dispatch('updateCurrentNFT', nft)
        this.$router.push ({name: 'nft-address', params: {address: nft.token_address}})
    },
  }
})
</script>